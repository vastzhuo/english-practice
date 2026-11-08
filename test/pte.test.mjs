import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');

function load() {
  const context = { console };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte-logic.js'), 'utf8'), context);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte.js'), 'utf8') + '\nglobalThis.PTE = PTE;\n', context);
  return { PTELogic: context.PTELogic, PTE: context.PTE };
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

const { PTELogic, PTE } = load();

test('sentence bank has the five category counts and speakable English', () => {
  assert.equal(PTE.length, 152);
  const counts = {};
  const ids = new Set();
  const nums = new Set();
  for (const item of PTE) {
    counts[item.category] = (counts[item.category] || 0) + 1;
    assert.equal(ids.has(item.id), false);
    assert.equal(nums.has(item.sourceNumber), false);
    ids.add(item.id);
    nums.add(item.sourceNumber);
    assert.equal(PTELogic.speakText(item), item.text);
    assert.equal(/[\u3400-\u9fff]/.test(item.text), false);
    assert.equal(item.text.includes('/'), false);
    assert.equal(item.text.includes('('), false);
    assert.equal(item.text.trim(), item.text);
    assert.ok(item.text.length > 0);
  }
  assert.deepEqual(counts, { '学术场景': 65, '科学技术': 48, '社会经济': 25, '职业与发展': 10, '环境与规划': 4 });
  assert.deepEqual(JSON.parse(JSON.stringify(PTELogic.categories(PTE))), ['学术场景', '科学技术', '社会经济', '职业与发展', '环境与规划']);
  const spokenOriginals = PTE.filter(item => item.text !== item.original);
  assert.ok(spokenOriginals.length > 0);
  for (const item of spokenOriginals) assert.equal(PTELogic.speakText(item).includes('英'), false);
});

test('repeats default to 5 and only adjust upward to the cap', () => {
  assert.equal(PTELogic.PTE_REP_MIN, 5);
  assert.equal(PTELogic.PTE_PAUSE_MS, 3000);
  assert.equal(PTELogic.clampRep(undefined), 5);
  assert.equal(PTELogic.clampRep(1), 5);
  assert.equal(PTELogic.clampRep(4), 5);
  assert.equal(PTELogic.clampRep(5), 5);
  assert.equal(PTELogic.clampRep(6), 6);
  assert.equal(PTELogic.clampRep(20), 20);
  assert.equal(PTELogic.clampRep(21), 20);
});

test('glance size stays large for every sentence', () => {
  assert.equal(PTELogic.fontPx('Short enough for a glance.'), 68);
  for (const item of PTE) assert.ok(PTELogic.fontPx(item.text) >= 48);
});

test('shuffle is a permutation and the next loop does not repeat the last sentence', () => {
  const src = [1, 2, 3, 4];
  assert.deepEqual(PTELogic.shuffle(src, () => 0), [2, 3, 4, 1]);
  assert.deepEqual(src, [1, 2, 3, 4]);
  const items = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
  const order = PTELogic.nextOrder(items, () => 0, 'b');
  assert.deepEqual(order.map(item => item.id), ['c', 'b', 'd', 'a']);
  const pool = PTELogic.pool(PTE, '环境与规划');
  assert.equal(pool.length, 4);
  assert.equal(PTELogic.pool(PTE, '全部').length, 152);
});

test('playback reads each sentence five times, pauses, then reshuffles', async () => {
  const items = [
    { id: 'a', text: 'Alpha sentence here.', sourceNumber: 1, category: '学术场景' },
    { id: 'b', text: 'Beta sentence here.', sourceNumber: 2, category: '学术场景' },
    { id: 'c', text: 'Gamma sentence here.', sourceNumber: 3, category: '学术场景' }
  ];
  const spoken = [];
  const gaps = [];
  let stop = false;
  await PTELogic.runLoop({
    items: () => items,
    reps: () => 2,
    rand: mulberry32(7),
    pauseMs: 3000,
    stopped: () => stop,
    show() {},
    speak(text) {
      spoken.push(text);
      if (spoken.length >= 30) stop = true;
      return 'end';
    },
    wait(ms) { gaps.push(ms); return 'ok'; }
  });
  assert.equal(spoken.length, 30);
  const groups = [];
  for (let i = 0; i < spoken.length; i += 5) groups.push(spoken[i]);
  assert.equal(groups.length, 6);
  for (let g = 0; g < groups.length; g++) {
    for (let k = 0; k < 5; k++) assert.equal(spoken[g * 5 + k], groups[g]);
  }
  assert.deepEqual([...new Set(groups.slice(0, 3))].sort(), items.map(item => item.text).sort());
  assert.deepEqual([...new Set(groups.slice(3, 6))].sort(), items.map(item => item.text).sort());
  assert.notEqual(groups[2], groups[3]);
  assert.ok(gaps.every(ms => ms === 3000));
  assert.equal(groups[0] === groups[1], false);
});

test('raising the repeat count mid-sentence adds more reads and never drops below 5', async () => {
  const items = [{ id: 'a', text: 'Only this sentence is playing now.', sourceNumber: 1, category: '学术场景' }];
  const spoken = [];
  let reps = 5;
  let stop = false;
  await PTELogic.runLoop({
    items: () => items,
    reps: () => reps,
    pauseMs: 10,
    stopped: () => stop,
    show() {},
    speak(text) {
      spoken.push(text);
      if (spoken.length === 3) reps = 8;
      if (spoken.length >= 8) stop = true;
      return 'end';
    },
    wait() { return 'ok'; }
  });
  assert.equal(spoken.length, 8);
  assert.ok(spoken.every(text => text === items[0].text));

  const five = [];
  let done = false;
  await PTELogic.runLoop({
    items: () => items,
    reps: () => 1,
    pauseMs: 10,
    stopped: () => done,
    show() {},
    speak(text) {
      five.push(text);
      if (five.length >= 5) done = true;
      return 'end';
    },
    wait() { return 'ok'; }
  });
  assert.equal(five.length, 5);
});

test('PTE progress is stored beside existing ep data', () => {
  const S = {
    days: { '2024-04-02': 1 },
    learned: ['resilient'],
    best: 4,
    cat: 'All',
    goal: 50,
    customFlag: true,
    pte: { mem: { '123061': 1 }, rep: 6, cat: '学术场景', ord: 'num' }
  };
  const st = PTELogic.ensureState(S, PTELogic.categories(PTE));
  st.mem['123056'] = 1;
  assert.equal(S.learned[0], 'resilient');
  assert.equal(S.days['2024-04-02'], 1);
  assert.equal(S.best, 4);
  assert.equal(S.cat, 'All');
  assert.equal(S.goal, 50);
  assert.equal(S.customFlag, true);
  assert.equal(st.wfdMem['123061'], 1);
  assert.equal(S.pte.rep, 6);
  assert.equal(st.wfdCat, '学术场景');
  assert.equal(st.wfdOrd, 'num');
  assert.equal(st.set, 'wfd');
  S.pte.set = 'both';
  assert.equal(PTELogic.ensureState(S, PTELogic.categories(PTE)).set, 'both');
  S.pte.set = 'rs';
  assert.equal(PTELogic.ensureState(S, PTELogic.categories(PTE)).set, 'rs');
  const fresh = {};
  const created = PTELogic.ensureState(fresh, PTELogic.categories(PTE));
  assert.equal(created.rep, 5);
  assert.equal(created.wfdCat, '全部');
  assert.equal(created.wfdOrd, 'rand');
  assert.equal(created.set, 'wfd');
  assert.equal(JSON.stringify(created.wfdMem), '{}');
  assert.equal(JSON.stringify(created.rsMem), '{}');
  assert.equal(JSON.stringify(created.readFlow), '{}');
  const kept = { learned: ['resilient'], pte: { readFlow: { '063020': { signals: 'however', steps: { '1': 1 } } }, readPass: { '063020': 2 }, readErr: { '063020': '词不认识' } } };
  const back = PTELogic.ensureState(kept, []);
  assert.equal(kept.learned[0], 'resilient');
  assert.equal(back.readFlow['063020'].signals, 'however');
  assert.equal(back.readPass['063020'], 2);
  assert.equal(back.readErr['063020'], '词不认识');
});

test('v17 cache bump keeps the PTE files and the existing tabs', () => {
  const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const drive = fs.readFileSync(path.join(root, 'drive.js'), 'utf8');
  assert.match(index, />v17</);
  assert.match(index, /id="tab-pte"/);
  assert.match(index, /data-t="learn"/);
  assert.match(index, /data-t="quiz"/);
  assert.match(index, /data-t="shadow"/);
  assert.match(index, /data-t="drive"/);
  assert.match(index, /data-t="progress"/);
  assert.match(app, /今日学习/);
  for (const file of ['style.css', 'words.js', 'synonyms.js', 'pte.js', 'pte-rs.js', 'pte-read.js', 'pte-logic.js', 'pte-we.js', 'pte-sst.js', 'study-plan.js', 'pte-app.js', 'pte-we-ui.js', 'pte-sst-ui.js', 'study-ui.js', 'app.js', 'drive.js']) {
    assert.match(index, new RegExp(file.replace('.', '\\.') + '\\?v=17'));
  }
  assert.equal(index.includes('?v=16'), false);
  assert.match(sw, /ep-v17/);
  assert.equal(sw.includes('ep-v16'), false);
  assert.match(sw, /skipWaiting/);
  assert.match(sw, /clients\.claim/);
  assert.match(sw, /synonyms\.js\?v=17/);
  assert.match(sw, /study-plan\.js\?v=17/);
  assert.match(app, /t==='pte'/);
  assert.match(app, /studyClose/);
  assert.match(drive, /pteStop/);
  assert.match(drive, /studyStop/);
});

test('dictation diff marks missing and extra words without changing the answer sentence', () => {
  const same = PTELogic.diffWords('The faculty staff are friendly.', 'The faculty staff are friendly.');
  assert.equal(same.score, 100);
  assert.ok(same.tokens.every(token => token.t === 'ok'));
  const missed = PTELogic.diffWords('The faculty staff are friendly.', '');
  assert.equal(missed.score, 0);
  assert.ok(missed.tokens.every(token => token.t === 'miss'));
  const extra = PTELogic.diffWords('Students need a plan.', 'Students really need a plan now');
  assert.ok(extra.tokens.some(token => token.t === 'extra' && token.w.toLowerCase() === 'really'));
  assert.ok(extra.tokens.some(token => token.t === 'extra' && token.w.toLowerCase() === 'now'));
  assert.ok(extra.tokens.some(token => token.t === 'ok' && token.w === 'Students'));
});

test('driving plays one set and never mixes WFD with RS', () => {
  const wfd = [{ id: 'w1', text: 'Write this down.' }];
  const rs = [{ id: 'r1', text: 'Say this aloud.' }];
  assert.deepEqual(PTELogic.drivePool('wfd', wfd, rs).map(item => item.id), ['w1']);
  assert.deepEqual(PTELogic.drivePool('rs', wfd, rs).map(item => item.id), ['r1']);
  assert.deepEqual(PTELogic.drivePool('both', wfd, rs).map(item => item.id), ['w1', 'r1']);
  assert.deepEqual(PTELogic.drivePool('both', wfd, rs).map(item => item.driveSet), ['wfd', 'rs']);
  const parsed = PTELogic.parseRsLines('1|4821|The library closes at noon.\n2｜4822｜Students must show an ID card.\n');
  assert.equal(parsed.length, 2);
  assert.equal(parsed[0].text, 'The library closes at noon.');
  assert.equal(parsed[1].id, 'rs-4822');
  assert.equal(PTELogic.asRs(parsed)[1].text, 'Students must show an ID card.');
  assert.equal(PTELogic.parseRsLines('27|020767|Current statistical evidence indicates that further research is required')[0].text.endsWith('.'), false);
  const rsContext = {};
  vm.createContext(rsContext);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte-rs.js'), 'utf8') + '\nglobalThis.PTE_RS = PTE_RS;\n', rsContext);
  const rsItems = PTELogic.asRs(rsContext.PTE_RS);
  assert.equal(rsItems.length, 50);
  assert.equal(new Set(rsItems.map(item => item.id)).size, 50);
  assert.equal(rsItems[0].sourceNumber, '020793');
  assert.equal(rsItems[0].text, 'Unless properly maintained, the equipment could malfunction and compromise the entire experiment.');
  assert.equal(rsItems.find(item => item.sourceNumber === '020767').text, 'Current statistical evidence indicates that further research is required');
  assert.equal(rsItems.find(item => item.sourceNumber === '020743').text, 'Mobile phone charges very differently from one place to another');
  assert.equal(rsItems.find(item => item.sourceNumber === '020751'), undefined);
});

test('write essay bank has 35 prompts, six types, and sentence cards', () => {
  const context = {};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte-we.js'), 'utf8') + '\nglobalThis.PTE_WE = PTE_WE;\n', context);
  const bank = context.PTE_WE;
  assert.equal(bank.questions.length, 35);
  assert.equal(bank.topics.length, 7);
  assert.equal(bank.types.length, 6);
  const types = {};
  const topics = {};
  const ids = new Set();
  for (const q of bank.questions) {
    types[q.type] = (types[q.type] || 0) + 1;
    topics[q.topic] = (topics[q.topic] || 0) + 1;
    assert.equal(ids.has(q.id), false);
    ids.add(q.id);
    assert.ok(q.zh && q.en);
    assert.equal(/[\u3400-\u9fff]/.test(q.en), false);
  }
  assert.deepEqual(types, { agree: 13, two: 7, pros: 6, open: 4, choose: 4, example: 1 });
  assert.deepEqual(topics, { society: 8, work: 6, media: 3, business: 4, environment: 3, tech: 3, education: 8 });
  assert.equal(bank.questions.filter(q => q.personal).map(q => q.id).join(','), '077055,076014');
  for (const type of bank.types) {
    assert.equal(bank.cards[type.id].length, 3);
    for (const card of bank.cards[type.id]) {
      assert.ok(card.intro && card.conclusion && card.note);
      assert.equal(/[\u3400-\u9fff]/.test(card.intro), false);
      assert.equal(/[\u3400-\u9fff]/.test(card.conclusion), false);
    }
  }
  assert.equal(bank.experiences.length, 2);
  assert.equal(PTELogic.wordCount('one  two\nthree'), 3);
  assert.equal(PTELogic.wordCount(''), 0);
  assert.equal(PTELogic.essayFit(200), 'ok');
  assert.equal(PTELogic.essayFit(300), 'ok');
  assert.equal(PTELogic.essayFit(199), 'short');
  assert.equal(PTELogic.essayFit(301), 'over');
  const S = { learned: ['resilient'], pte: { we: { notes: { '077055': { stance: 'city' } }, view: 'essay' } } };
  const st = PTELogic.ensureState(S, []);
  assert.equal(S.learned[0], 'resilient');
  assert.equal(st.we.notes['077055'].stance, 'city');
  assert.equal(st.we.view, 'essay');
  assert.equal(st.mode, 'wfd');
  S.pte.we.api = { key: 'should-be-removed' };
  S.pte.we.notes['077055'].chat = [{ role: 'user', content: '考我' }];
  const again = PTELogic.ensureState(S, []);
  assert.equal(again.we.api, undefined);
  assert.equal(again.we.notes['077055'].chat, undefined);
  assert.equal(again.we.notes['077055'].stance, 'city');
  const copied = PTELogic.weCopyPrompt(bank.questions[0], '两问', '社会、法律与政府', {
    stance: 'I prefer the city while studying.', arg1: 'jobs', arg2: 'transit', c1: 'public transport', opening: 'Some people prefer cities.'
  });
  assert.match(copied, /Some people prefer to live in cities/);
  assert.match(copied, /两问/);
  assert.match(copied, /I prefer the city while studying/);
  assert.match(copied, /jobs/);
  assert.match(copied, /transit/);
  assert.match(copied, /public transport/);
  assert.match(copied, /请帮我记住这道 PTE Write Essay 的关键句和答题策略/);
});

test('SST real data keeps fifty items, warnings, and saved progress', () => {
  const context = {};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte-sst.js'), 'utf8') + '\nglobalThis.PTE_SST = PTE_SST;\n', context);
  const items = context.PTE_SST.items;
  const byId = Object.fromEntries(items.map(item => [item.id, item]));
  assert.equal(items.length, 50);
  assert.equal(items.filter(item => item.group === 'public').length, 37);
  assert.equal(items.filter(item => item.group === 'tts').length, 8);
  assert.equal(items.filter(item => item.group === 'reference').length, 2);
  assert.equal(items.filter(item => item.group === 'model').length, 3);
  assert.equal(JSON.stringify(items.filter(item => item.group === 'reference').map(item => item.id).sort()), JSON.stringify(['100096', '100192']));
  for (const id of ['100141', '100121', '100111']) {
    assert.equal(byId[id].group, 'model');
    assert.equal(byId[id].transcript, '');
    assert.ok(byId[id].model_answer);
    assert.match(byId[id].audio_kind, /范文答案/);
  }
  assert.equal(byId['100198'].title_content_mismatch, true);
  assert.match(byId['100198'].content_note, /蜜蜂/);
  assert.equal(byId['100058'].is_recalled_version, true);
  assert.equal(byId['100198'].is_recalled_version, true);
  assert.equal(byId['100190'].transcript.includes(byId['100190'].model_answer), false);
  const days = PTELogic.sstDays(items);
  assert.equal(days.flat().length, 47);
  assert.equal(days.flat().some(item => item.group === 'model'), false);
  assert.ok(days[0].every(item => item.group === 'public'));
  assert.equal(days.filter(day => day.length === 5).length, 9);
  assert.equal(days[days.length - 1].length, 2);
  assert.equal(PTELogic.sstFit(60), 'ok');
  assert.equal(PTELogic.sstParagraphs('One paragraph only.'), 1);
  const S = { learned: ['resilient'], pte: { sst: { done: { '100200': 1 } }, we: { notes: { '077055': { stance: 'keep' } } } } };
  const st = PTELogic.ensureState(S, []);
  assert.equal(st.sst.done['100200'], 1);
  assert.equal(st.we.notes['077055'].stance, 'keep');
  assert.equal(S.learned[0], 'resilient');
});

test('reading vocab is topic-predicted only when the article has no source text', () => {
  const context = {};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte-read.js'), 'utf8') + '\nglobalThis.PTE_READ = PTE_READ;\n', context);
  const read = context.PTE_READ;
  assert.equal(read.articles.length, 70);
  const typeCounts = {};
  const ids = new Set();
  for (const article of read.articles) {
    typeCounts[article.type] = (typeCounts[article.type] || 0) + 1;
    assert.equal(ids.has(article.id), false);
    ids.add(article.id);
    assert.equal(article.text, null);
    assert.equal(PTELogic.vocabSource(article), 'predicted');
    assert.ok(article.vocab.length >= 4);
    for (const word of article.vocab) {
      assert.equal(word.source, 'predicted');
      assert.ok(word.w && word.zh && word.ex && word.col);
      assert.equal(/[\u3400-\u9fff]/.test(word.ex), false);
      assert.equal(/[\u3400-\u9fff]/.test(word.col), false);
    }
  }
  assert.deepEqual(typeCounts, { double: 5, single: 16, parallel: 21, none: 28 });
  assert.equal(read.types.length, 4);
  for (const type of read.types) {
    assert.ok(type.connectives.length >= 3);
    for (const item of type.connectives) {
      assert.ok(item.zh && item.ex && item.en);
      assert.equal(/[\u3400-\u9fff]/.test(item.ex), false);
      assert.equal(/[\u3400-\u9fff]/.test(item.zh), true);
    }
    for (const pattern of type.patterns) {
      assert.ok(pattern.zh && pattern.ex && pattern.name);
      assert.equal(/[\u3400-\u9fff]/.test(pattern.ex), false);
    }
  }
  assert.equal(PTELogic.vocabSource({}), 'predicted');
  assert.equal(PTELogic.vocabSource({ text: '   ' }), 'predicted');
  assert.equal(PTELogic.vocabSource({ text: 'Cities added roads.' }), 'text');
  for (const article of read.articles) {
    assert.ok(article.title);
    if (!article.text) {
      assert.equal(PTELogic.vocabSource(article), 'predicted');
      for (const word of article.vocab || []) assert.equal(word.source || 'predicted', 'predicted');
    } else {
      const hay = article.text.toLowerCase();
      for (const word of article.vocab || []) assert.ok(hay.includes(String(word.w).toLowerCase()));
    }
  }
  const choices = PTELogic.quizChoices(
    { w: 'limited', zh: '有限的' },
    [{ w: 'limited', zh: '有限的' }, { w: 'significant', zh: '显著的' }, { w: 'however', zh: '然而' }, { w: 'because', zh: '因为' }],
    () => 0.5
  );
  assert.equal(choices[0] && choices.length >= 2, true);
  assert.equal(new Set(choices.map(item => item.zh)).size, choices.length);
});

test('today study queue follows completion dates', () => {
  const context = { console, Date, Math, Object, String, Array };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'study-plan.js'), 'utf8'), context);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte-sst.js'), 'utf8') + '\nglobalThis.PTE_SST = PTE_SST;\n', context);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte.js'), 'utf8') + '\nglobalThis.PTE = PTE;\n', context);
  vm.runInContext(fs.readFileSync(path.join(root, 'pte-rs.js'), 'utf8') + '\nglobalThis.PTE_RS = PTE_RS;\n', context);
  const Plan = context.StudyPlan;
  const pools = { wfd: context.PTE, rs: context.PTE_RS };
  const items = context.PTE_SST.items;
  const day = '2024-06-10';
  assert.equal(Plan.localDate(new Date(2024, 5, 10, 15, 0, 0)), day);
  assert.equal(Plan.heading(), '今天');
  const st = { learned: {}, done: {} };
  Plan.lockDay(st, day, items);
  const today = Plan.tasks(day, st, items, pools);
  const fresh = today.filter(task => task.kind === 'sst-new').map(task => task.sstId);
  const sorted = items.map(item => item.id).slice().sort();
  assert.equal(fresh.length, Plan.NEW_PER_DAY);
  assert.equal(JSON.stringify(fresh), JSON.stringify(sorted.slice(0, Plan.NEW_PER_DAY)));
  assert.equal(today.some(task => task.kind === 'sst-review'), false);
  assert.equal(today.filter(task => task.kind === 'wfd').length, 20);
  assert.equal(today.filter(task => task.kind === 'rs').length, 10);
  assert.equal(today.filter(task => task.kind === 'ra').length, 6);
  assert.equal(today.filter(task => task.kind === 'write').length, 2);
  assert.equal(today.filter(task => task.kind === 'di').length, 3);
  assert.equal(today.some(task => task.kind === 'mock' || task.kind === 'sleep' || task.kind === 'check' || task.kind === 'skeleton'), false);
  const rsIds = new Set(today.filter(task => task.kind === 'rs').map(task => task.id));
  assert.equal(today.filter(task => task.kind === 'ra').some(task => rsIds.has(task.id.replace(':ra:', ':rs:'))), false);
  const drive = Plan.driveTasks(today);
  assert.equal(drive.some(task => task.kind === 'write' || task.kind === 'di'), false);
  assert.ok(drive.some(task => task.kind === 'wfd'));
  st.learned[fresh[0]] = day;
  const sameDay = Plan.tasks(day, st, items, pools);
  assert.equal(JSON.stringify(sameDay.filter(task => task.kind === 'sst-new').map(task => task.sstId)), JSON.stringify(fresh));
  assert.equal(sameDay.some(task => task.sstId === fresh[0] && task.kind === 'sst-review'), false);
  const reviewState = { learned: { [fresh[0]]: day }, done: {} };
  assert.ok(Plan.tasks('2024-06-11', reviewState, items, pools).some(task => task.sstId === fresh[0] && task.gap === 1));
  assert.ok(Plan.tasks('2024-06-13', reviewState, items, pools).some(task => task.sstId === fresh[0] && task.gap === 3));
  assert.ok(Plan.tasks('2024-06-17', reviewState, items, pools).some(task => task.sstId === fresh[0] && task.gap === 7));
  assert.equal(Plan.tasks('2024-06-12', reviewState, items, pools).some(task => task.sstId === fresh[0] && task.kind === 'sst-review'), false);
  Plan.lockDay(st, '2024-06-11', items);
  const next = Plan.tasks('2024-06-11', st, items, pools);
  assert.equal(next.some(task => task.sstId === fresh[0] && task.kind === 'sst-new'), false);
  assert.equal(next.filter(task => task.kind === 'sst-new').length, Plan.NEW_PER_DAY);
  const model = items.find(item => item.group === 'model' || item.audio_content_type === 'model_answer');
  assert.ok(Plan.notesFor(model).some(note => note.includes('不是讲座')));
  const warned = Plan.notesFor({ id: 'sample', title_content_mismatch: true, content_note: 'mismatch-note', is_recalled_version: true, recall_note: 'recall-note' });
  assert.ok(warned.indexOf('mismatch-note') >= 0);
  assert.ok(warned.indexOf('recall-note') >= 0);
  assert.equal(Plan.resumeIndex(today, { [today[0].id]: day, [today[1].id]: day }), 2);
  const bag = { learned: ['keep-me'], days: { '2024-04-02': 1 }, pte: { wfdMem: { a: 1 } }, study: { learned: { bad: 'yesterday', [fresh[0]]: day } } };
  const kept = Plan.ensure(bag);
  assert.equal(kept.learned[fresh[0]], day);
  assert.equal(kept.learned.bad, undefined);
  assert.deepEqual(bag.learned, ['keep-me']);
  assert.equal(bag.pte.wfdMem.a, 1);
  assert.equal(bag.days['2024-04-02'], 1);
});

test('synonym comparisons cover high-frequency words and leave the rest for later', () => {
  const context = { console };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'words.js'), 'utf8') + '\nglobalThis.WORDS = WORDS;\n', context);
  vm.runInContext(fs.readFileSync(path.join(root, 'synonyms.js'), 'utf8'), context);
  const bank = new Set(context.WORDS.map(word => String(word.w).trim().toLowerCase()));
  const seen = new Set();
  const optional = new Set(['gaze', 'peek']);
  assert.ok(context.SYNONYMS.groups.length >= 30);
  for (const group of context.SYNONYMS.groups) {
    assert.ok(group.line && /[\u3400-\u9fff]/.test(group.line));
    assert.ok(group.items.length >= 2 && group.items.length <= 4);
    for (const item of group.items) {
      const key = item.w.toLowerCase();
      assert.equal(seen.has(key), false);
      seen.add(key);
      assert.ok(item.zh && item.scene && item.tone && item.col && item.en && item.cn);
      assert.equal(/[\u3400-\u9fff]/.test(item.en), false);
      assert.ok(/[\u3400-\u9fff]/.test(item.cn));
      assert.ok(/[\u3400-\u9fff]/.test(item.scene));
      if (!optional.has(key)) assert.equal(bank.has(key), true, key);
    }
  }
  const glance = context.SYNONYMS.lookup('Glance');
  assert.ok(glance.items.some(item => item.w === 'stare'));
  assert.ok(glance.items.some(item => item.w === 'gaze'));
  assert.equal(context.SYNONYMS.lookup('  job '), context.SYNONYMS.lookup('job'));
  assert.equal(context.SYNONYMS.lookup('larger'), context.SYNONYMS.lookup('large'));
  assert.equal(context.SYNONYMS.lookup('biggest'), context.SYNONYMS.lookup('big'));
  assert.equal(context.SYNONYMS.lookup('jobs'), context.SYNONYMS.lookup('job'));
  assert.equal(context.SYNONYMS.lookup('stroller'), null);
  assert.equal(context.SYNONYMS.lookup('modest'), null);
  assert.equal(context.SYNONYMS.lookup('not-a-real-headword'), null);
  const covered = [...bank].filter(word => context.SYNONYMS.lookup(word)).length;
  assert.ok(covered >= 100);
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  assert.match(app, /同义词对比/);
  assert.match(app, /即将推出/);
  assert.match(app, /一句话区分/);
});
