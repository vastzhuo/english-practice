import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { pathToFileURL } from 'node:url';
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

// Compare source text across typographic quotes and punctuation.
function tight(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
}

const UNIT_GLOBALS = {
  'pte-logic.js': 'PTELogic',
  'pte.js': 'PTE',
  'pte-ra.js': 'PTE_RA',
  'pte-di.js': 'PTE_DI',
  'pte-swt.js': 'PTE_SWT',
  'pte-sst.js': 'PTE_SST',
  'pte-read.js': 'PTE_READ'
};

function unit(files) {
  const context = { console };
  vm.createContext(context);
  for (const file of files) {
    const tail = UNIT_GLOBALS[file] ? '\nglobalThis.' + UNIT_GLOBALS[file] + ' = ' + UNIT_GLOBALS[file] + ';\n' : '';
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8') + tail, context);
  }
  return context;
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

test('version bump keeps the PTE files, the new practice modules and the existing tabs', () => {
  const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const drive = fs.readFileSync(path.join(root, 'drive.js'), 'utf8');
  const pteApp = fs.readFileSync(path.join(root, 'pte-app.js'), 'utf8');
  const speakUi = fs.readFileSync(path.join(root, 'pte-speak-ui.js'), 'utf8');
  // Read the version from index.html so a bump never needs a test edit.
  const version = (index.match(/<small\s+id="ver"[^>]*>v(\d+)</) || [])[1];
  assert.ok(version, 'index.html must carry a v## version label');
  const previous = String(Number(version) - 1);
  assert.match(index, new RegExp('>v' + version + '<'));
  assert.match(index, /id="tab-pte"/);
  assert.match(index, /data-t="learn"/);
  assert.match(index, /data-t="quiz"/);
  assert.match(index, /data-t="shadow"/);
  assert.match(index, /data-t="drive"/);
  assert.match(index, /data-t="grammar"/);
  assert.match(index, /id="tab-grammar"/);
  assert.match(index, /data-t="progress"/);
  assert.match(app, /今日学习/);
  for (const file of ['style.css', 'words.js', 'synonyms.js', 'pte.js', 'pte-rs.js', 'pte-read.js', 'pte-logic.js', 'pte-we.js', 'pte-sst.js', 'pte-ra.js', 'pte-di.js', 'pte-swt.js', 'study-plan.js', 'grammar.js', 'voice-check.js', 'pte-spelling.js', 'pte-app.js', 'pte-we-ui.js', 'pte-sst-ui.js', 'pte-speak-ui.js', 'study-ui.js', 'grammar-ui.js', 'app.js', 'drive.js']) {
    assert.match(index, new RegExp(file.replace('.', '\\.') + '\\?v=' + version));
  }
  assert.equal(index.includes('?v=' + previous), false);
  assert.match(sw, new RegExp('ep-v' + version));
  assert.equal(sw.includes('ep-v' + previous), false);
  assert.match(sw, /skipWaiting/);
  assert.match(sw, /clients\.claim/);
  assert.match(sw, new RegExp('synonyms\\.js\\?v=' + version));
  assert.match(sw, new RegExp('grammar\\.js\\?v=' + version));
  assert.match(sw, new RegExp('study-plan\\.js\\?v=' + version));
  for (const file of ['pte-ra.js', 'pte-di.js', 'pte-swt.js', 'pte-speak-ui.js', 'voice-check.js', 'pte-spelling.js']) {
    assert.match(sw, new RegExp(file.replace('.', '\\.') + '\\?v=' + version));
    assert.match(index, new RegExp(file.replace('.', '\\.') + '\\?v=' + version));
  }
  assert.match(app, /t==='pte'/);
  assert.match(app, /studyClose/);
  assert.match(drive, /pteStop/);
  assert.match(drive, /studyStop/);
  // the PTE tab now has nine sub-modules, including RA, DI and SWT
  assert.match(pteApp, /btn\('ra', 'RA'\)/);
  assert.match(pteApp, /btn\('di', 'DI'\)/);
  assert.match(pteApp, /btn\('swt', 'SWT'\)/);
  assert.match(pteApp, /window\.pteRaView/);
  assert.match(pteApp, /window\.pteDiView/);
  assert.match(pteApp, /window\.pteSwtView/);
  assert.match(pteApp, /pteSpeakStop/);
  assert.match(speakUi, /pteSwtCount/);
  assert.match(speakUi, /pteSwtWarn/);
  assert.match(speakUi, /save\(\)/);
  assert.match(speakUi, /pteRefresh/);
  assert.match(speakUi, /swtFit/);
  assert.match(speakUi, /svgChart/);
  assert.match(speakUi, /pteSpClock/);
  assert.equal(speakUi.includes('new Image'), false);
  // Every PTE sub-tab shares one voice detection and disables playback without it.
  assert.match(pteApp, /data-pte-act="voice-check"/);
  assert.match(pteApp, /pteSayAttr/);
  assert.match(pteApp, /resolve\('fatal'\)/);
  assert.match(speakUi, /pteSayAttr/);
  assert.match(index, /voice-check\.js\?v=/);
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

// The mistake book lives in study-plan.js so the scheduling rules stay pure and
// testable: no DOM, no timers, only the `ep` state object.
function planContext() {
  const context = { console };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'study-plan.js'), 'utf8'), context);
  return context.StudyPlan;
}

test('old saves without a mistake book initialise and keep the rest of the progress', () => {
  const Plan = planContext();
  const S = { days: { '2024-01-02': 1 }, learned: ['resilient'], best: 3 };
  assert.equal(Plan.missEnsure(S) && typeof Plan.missEnsure(S), 'object');
  assert.equal(JSON.stringify(Plan.missEnsure(S)), '{}');
  assert.equal(S.best, 3);
  assert.equal(JSON.stringify(S.learned), JSON.stringify(['resilient']));
  assert.equal(JSON.stringify(S.days), JSON.stringify({ '2024-01-02': 1 }));
  const overview = Plan.missOverview(S, '2024-06-10');
  assert.equal(overview.total, 0);
  assert.equal(overview.due, 0);
  assert.equal(JSON.stringify(overview.groups), JSON.stringify({ quiz: 0, wfd: 0, rs: 0, ra: 0, swt: 0, spell: 0 }));
  assert.equal(Plan.missingToday(S, '2024-06-10').length, 0);
  // A non-object field is replaced; a broken row is dropped; valid rows survive.
  S.miss = 'oops';
  assert.equal(JSON.stringify(Plan.missEnsure(S)), '{}');
  S.miss = { 'quiz:apple': 'oops', 'quiz:pear': { n: 1, last: '2024-06-10', due: '2024-06-11', ok: 0 } };
  assert.equal(JSON.stringify(Object.keys(Plan.missEnsure(S))), JSON.stringify(['quiz:pear']));
  assert.ok(Plan.ensure(S));
  assert.equal(S.best, 3);
});

test('mistake book schedules 1/3/7 days, retires after two correct answers and filters due items', () => {
  const Plan = planContext();
  const S = { days: {}, learned: [] };
  const day = '2024-06-10';
  const key = Plan.missKey('quiz', 'apple');
  assert.equal(key, 'quiz:apple');
  assert.equal(Plan.missKey('', 'apple'), '');
  assert.equal(Plan.missKey('quiz', '   '), '');
  assert.equal(Plan.missGap(1), 1);
  assert.equal(Plan.missGap(2), 3);
  assert.equal(Plan.missGap(3), 7);
  assert.equal(Plan.missGap(9), 7);
  assert.equal(Plan.missGap(0), 1);
  // Local dates, including month and year rollover.
  assert.equal(Plan.addDays('2024-06-30', 1), '2024-07-01');
  assert.equal(Plan.addDays('2024-12-29', 7), '2025-01-05');
  assert.equal(Plan.missDue(1, day), '2024-06-11');
  assert.equal(Plan.missDue(2, day), '2024-06-13');
  assert.equal(Plan.missDue(3, day), '2024-06-17');

  const first = Plan.missRecord(S, key, day);
  assert.equal(first.n, 1);
  assert.equal(first.last, day);
  assert.equal(first.due, '2024-06-11');
  assert.equal(first.ok, 0);
  assert.equal(S.miss[key].n, 1);
  assert.equal(Plan.missingToday(S, day).length, 0, 'a fresh mistake is not due today');
  assert.equal(Plan.missingToday(S, '2024-06-11').length, 1);
  assert.equal(JSON.stringify(Plan.missingToday(S, '2024-06-11').map(row => row.key)), JSON.stringify([key]));
  assert.equal(Plan.missingToday(S, '2024-06-12').length, 1, 'still due after the due date has passed');

  // A second wrong answer moves the due date three days out and resets the streak.
  S.miss[key].ok = 1;
  const second = Plan.missRecord(S, key, '2024-06-15');
  assert.equal(second.n, 2);
  assert.equal(second.due, '2024-06-18');
  assert.equal(second.ok, 0);
  const third = Plan.missRecord(S, key, '2024-06-20');
  assert.equal(third.n, 3);
  assert.equal(third.due, '2024-06-27');
  const fourth = Plan.missRecord(S, key, '2024-06-28');
  assert.equal(fourth.n, 4);
  assert.equal(fourth.due, '2024-07-05');

  // Two good answers in a row retire the item; one wrong answer resets the count.
  const other = Plan.missKey('wfd', '123061');
  Plan.missRecord(S, other, day);
  assert.equal(Plan.missOk(S, other), 'kept');
  assert.equal(S.miss[other].ok, 1);
  Plan.missRecord(S, other, '2024-06-11');
  assert.equal(S.miss[other].ok, 0);
  assert.equal(Plan.missOk(S, other), 'kept');
  assert.equal(Plan.missOk(S, other), 'resolved');
  assert.equal(S.miss[other], undefined);
  assert.equal(Plan.missOk(S, other), '');
  assert.equal(Plan.missResolve(S, other), false);
  assert.equal(Plan.missResolve(S, key), true);
  assert.equal(S.miss[key], undefined);
});

test('mistake book overview counts every source and only lists what is due', () => {
  const Plan = planContext();
  const S = { days: {}, learned: [] };
  const day = '2024-06-01';
  Plan.missRecord(S, Plan.missKey('quiz', 'apple'), day);
  Plan.missRecord(S, Plan.missKey('quiz', 'pear'), day);
  Plan.missRecord(S, Plan.missKey('wfd', '123061'), day);
  Plan.missRecord(S, Plan.missKey('rs', 'rs-020743'), day);
  Plan.missRecord(S, Plan.missKey('ra', 'p1'), day);
  Plan.missRecord(S, Plan.missKey('swt', 's1'), day);
  Plan.missRecord(S, Plan.missKey('wfd', 'future'), '2024-06-10');
  const overview = Plan.missOverview(S, '2024-06-10');
  assert.equal(JSON.stringify(overview.groups), JSON.stringify({ quiz: 2, wfd: 2, rs: 1, ra: 1, swt: 1, spell: 0 }));
  assert.equal(overview.total, 7);
  assert.equal(overview.due, 6);
  assert.equal(overview.dueRows.some(row => row.id === 'future'), false);
  assert.equal(overview.rows[0].key, 'quiz:apple', 'oldest due date first');
  Plan.missResolve(S, 'quiz:pear');
  assert.equal(Plan.missOverview(S, '2024-06-10').groups.quiz, 1);
});

// --- UK/US spelling drills (pte-spelling.js) -------------------------------
function spellingContext(extra = []) {
  const context = { console };
  vm.createContext(context);
  for (const file of extra) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
  vm.runInContext(
    fs.readFileSync(path.join(root, 'pte-spelling.js'), 'utf8') +
    '\nglobalThis.PTE_SPELLING = PTE_SPELLING;\nglobalThis.PTESpell = PTESpell;\n',
    context
  );
  return context;
}

const spellCtx = spellingContext();
const SPELLING = spellCtx.PTE_SPELLING;
const Spell = spellCtx.PTESpell;

test('spelling bank holds at least 150 unique, lowercase UK/US pairs and no lesson text', () => {
  const seenRules = new Set();
  const seenUk = new Set();
  for (const rule of SPELLING.rules) {
    assert.ok(rule.id && rule.title && rule.hint, 'every rule needs id/title/hint');
    assert.equal(seenRules.has(rule.id), false, 'rule id repeated: ' + rule.id);
    seenRules.add(rule.id);
    assert.ok(rule.hint.length <= 120, 'hint stays one short line: ' + rule.id);
    assert.ok(rule.pairs.length > 0);
    for (const pair of rule.pairs) {
      assert.match(pair.uk, /^[a-z]+$/, 'lowercase UK spelling: ' + pair.uk);
      assert.match(pair.us, /^[a-z]+$/, 'lowercase US spelling: ' + pair.us);
      assert.notEqual(pair.uk, pair.us);
      assert.equal(seenUk.has(pair.uk), false, 'duplicate UK word: ' + pair.uk);
      seenUk.add(pair.uk);
    }
  }
  assert.ok(SPELLING.count >= 150, 'expected at least 150 pairs, got ' + SPELLING.count);
  assert.equal(SPELLING.all.length, SPELLING.count);
  assert.equal(new Set(SPELLING.all.map(pair => pair.uk + '|' + pair.us)).size, SPELLING.count);
  for (const pair of SPELLING.all) {
    assert.equal(seenRules.has(pair.rule), true, 'flattened row points at a rule');
    assert.equal(typeof pair.title, 'string');
  }
  // Same-meaning word swaps are reference only and stay out of the drills.
  assert.ok(SPELLING.extras.length > 0);
  for (const extra of SPELLING.extras) {
    assert.notEqual(extra.uk, extra.us);
    assert.match(extra.note, /同义/);
    assert.equal(SPELLING.all.some(pair => pair.uk === extra.uk && pair.us === extra.us), false);
  }
  const source = fs.readFileSync(path.join(root, 'pte-spelling.js'), 'utf8');
  assert.equal(source.includes('大西瓜'), false, 'no course branding in the public repo');
  assert.equal(/[\u4e00-\u9fff]{40,}/.test(source), false, 'no copied prose paragraphs');
});

test('spelling drills grade case-insensitively and always offer four unique options', () => {
  assert.equal(Spell.norm('  COLOUR '), 'colour');
  assert.equal(Spell.norm('colour.'), 'colour');
  assert.equal(Spell.check(' COLOR ', 'color'), true);
  assert.equal(Spell.check('color', 'colour'), false);
  assert.equal(Spell.check('', 'color'), false);
  assert.equal(Spell.pair('colour').us, 'color');
  assert.equal(Spell.pair('nope'), null);
  assert.equal(Spell.rule('our-or').title, '-our / -or');
  for (const pair of SPELLING.all) {
    for (const dir of ['uk2us', 'us2uk']) {
      const options = Spell.options(pair, dir);
      assert.equal(options.length, 4);
      assert.equal(new Set(options).size, 4);
      assert.ok(options.includes(dir === 'uk2us' ? pair.us : pair.uk));
      assert.equal(options.every(word => /^[a-z]+$/.test(word)), true);
    }
  }
});

test('a wrong spelling enters the shared mistake book under source spell', () => {
  const ctx = spellingContext(['study-plan.js']);
  const Plan = ctx.StudyPlan;
  const S = { days: {}, learned: [] };
  assert.ok(Plan.MISS_SOURCES.indexOf('spell') >= 0, 'spell is a registered source');
  assert.equal(Plan.MISS_LABEL.spell, '拼写');
  assert.equal(ctx.PTESpell.mark('colour', true, S), true);
  assert.equal(S.miss['spell:colour'].n, 1);
  assert.equal(S.miss['spell:colour'].due, Plan.addDays(Plan.localDate(new Date()), 1));
  assert.equal(Plan.missOverview(S, Plan.localDate(new Date())).groups.spell, 1);
  assert.equal(ctx.PTESpell.mark('colour', false, S), true);
  assert.equal(S.miss['spell:colour'].ok, 1);
  assert.equal(ctx.PTESpell.mark('colour', false, S), true);
  assert.equal(S.miss['spell:colour'], undefined, 'two correct answers retire the row');
  assert.equal(ctx.PTESpell.mark('', true, S), false);
  assert.equal(ctx.PTESpell.mark('colour', true, null), false);
});

test('the 拼写 module is wired into the PTE tab and the precache list', () => {
  const app = fs.readFileSync(path.join(root, 'pte-app.js'), 'utf8');
  const logic = fs.readFileSync(path.join(root, 'pte-logic.js'), 'utf8');
  const plan = fs.readFileSync(path.join(root, 'study-plan.js'), 'utf8');
  const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const version = (index.match(/<small\s+id="ver"[^>]*>v(\d+)</) || [])[1];
  assert.ok(version);
  assert.match(app, /btn\('spell', '拼写'\)/);
  assert.match(app, /window\.pteSpellView/);
  assert.match(app, /PTESpell\.click/);
  assert.match(app, /PTESpell\.focus/);
  assert.match(logic, /st\.mode !== 'spell'/);
  assert.match(plan, /'spell'/);
  assert.match(plan, /拼写/);
  // The drill data ships in the precached file, so every pair is available offline.
  assert.match(index, new RegExp('pte-spelling\\.js\\?v=' + version));
  assert.match(sw, new RegExp('pte-spelling\\.js\\?v=' + version));
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
  assert.equal(context.SYNONYMS.lookup('not-a-real-headword'), null);
  const ice = context.SYNONYMS.lookup('break the ice');
  assert.equal(ice.solo, true);
  assert.equal(ice.item.w, 'break the ice');
  const modest = context.SYNONYMS.lookup('modest');
  assert.equal(modest.solo, true);
  for (const item of context.SYNONYMS.solos) {
    const key = item.w.toLowerCase();
    assert.equal(seen.has(key), false, key);
    seen.add(key);
    assert.equal(bank.has(key), true, key);
    assert.ok(item.zh && item.scene && item.tone && item.col && item.en && item.cn);
    assert.equal(/[\u3400-\u9fff]/.test(item.en), false);
    assert.ok(/[\u3400-\u9fff]/.test(item.cn));
    assert.ok(/[\u3400-\u9fff]/.test(item.scene));
  }
  const covered = context.WORDS.filter(word => context.SYNONYMS.lookup(word.w)).length;
  assert.ok(covered >= 1000);
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  assert.match(app, /同义词对比/);
  assert.match(app, /即将推出/);
  assert.match(app, /无常见同义词/);
  assert.match(app, /一句话区分/);
});

test('grammar path follows the DK guide in bank order', () => {
  const context = { console };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'words.js'), 'utf8') + '\nglobalThis.WORDS = WORDS;\n', context);
  vm.runInContext(fs.readFileSync(path.join(root, 'grammar.js'), 'utf8') + '\nglobalThis.GRAMMAR = GRAMMAR;\n', context);
  const book = context.WORDS.filter(word => String(word.c).startsWith('DK 英语语法指南 Grammar:'));
  assert.equal(context.GRAMMAR.length, book.length);
  assert.equal(context.GRAMMAR.length, 360);
  const chapters = [];
  for (let i = 0; i < book.length; i++) {
    const point = context.GRAMMAR[i];
    const chapter = String(book[i].c).split(': ').slice(1).join(': ');
    const mark = String(book[i].m).match(/^【([^】]+)】(.*)$/);
    assert.ok(mark, book[i].m);
    assert.equal(point.chapter, chapter);
    assert.equal(point.en, book[i].w);
    assert.equal(point.title, mark[1]);
    assert.equal(point.sub, mark[2].trim());
    if (chapters[chapters.length - 1] !== chapter) chapters.push(chapter);
  }
  assert.equal(context.GRAMMAR[0].title, '一般现在时');
  assert.equal(chapters[0], '时态');
  assert.equal(chapters[chapters.length - 1], '介词与连词');
  assert.equal(chapters.length, 12);
  const ui = fs.readFileSync(path.join(root, 'grammar-ui.js'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  assert.match(ui, /下一知识点/);
  assert.match(ui, /S\.grammar/);
  assert.match(ui, /save\(\)/);
  assert.equal(ui.includes('例句'), false);
  assert.match(app, /grammarOpen/);
});

test('read aloud passages are real source text of about sixty words', () => {
  const context = unit(['pte-logic.js', 'pte-sst.js', 'pte-ra.js']);
  const ra = context.PTE_RA;
  const byId = Object.fromEntries(context.PTE_SST.items.map(item => [item.id, item]));
  assert.equal(ra.passages.length, 12);
  const ids = new Set();
  for (const passage of ra.passages) {
    assert.equal(ids.has(passage.id), false, passage.id);
    ids.add(passage.id);
    assert.ok(byId[passage.sourceId], passage.sourceId);
    assert.match(passage.note, /取自/);
    assert.ok(passage.words >= ra.minWords && passage.words <= ra.maxWords, passage.id + ' ' + passage.words);
    assert.equal(context.PTELogic.wordCount(passage.text), passage.words);
    assert.equal(/[\u3400-\u9fff]/.test(passage.text), false);
    assert.equal(tight(byId[passage.sourceId].transcript).includes(tight(passage.text)), true, passage.id);
  }
  // nothing is invented when a reading article has no body
  assert.equal(ra.fromRead([{ id: 'a', title: 'Empty', text: null }]).length, 0);
  assert.equal(ra.fromRead([]).length, 0);
  // a reading article with a real body becomes the first choice
  const fromRead = ra.fromRead([{
    id: '063020',
    title: 'Cities and roads',
    text: 'Cities added more roads to reduce congestion. The change did not cut traffic. Drivers simply made longer trips, and bus journeys slowed down. The evidence suggests that new lanes invite new cars rather than shortening the queue.'
  }]);
  assert.equal(fromRead.length, 1);
  assert.equal(fromRead[0].id, 'ra-read-063020');
  assert.equal(fromRead[0].note, '取自阅读原文');
  assert.equal(fromRead[0].sourceKind, '阅读原文');
  assert.ok(fromRead[0].words >= 20);
  assert.ok(fromRead[0].text.startsWith('Cities added more roads'));
  assert.equal(context.PTELogic.readSpan('', 60).words, 0);
  const span = context.PTELogic.readSpan('One two three. Four five six. Seven eight nine.', 4);
  assert.equal(span.text, 'One two three. Four five six.');
});

test('read aloud, describe image and written summary use the exam time limits', () => {
  assert.ok(PTELogic.RA_PREP_SEC >= 30 && PTELogic.RA_PREP_SEC <= 40);
  assert.equal(PTELogic.RA_READ_SEC, 40);
  assert.equal(PTELogic.DI_PREP_SEC, 25);
  assert.equal(PTELogic.DI_SPEAK_SEC, 40);
  assert.equal(PTELogic.SWT_SEC, 600);
  assert.equal(PTELogic.SWT_MIN, 5);
  assert.equal(PTELogic.SWT_MAX, 75);
  assert.equal(PTELogic.SP_SELF_MIN, 1);
  assert.equal(PTELogic.SP_SELF_MAX, 3);
  assert.equal(PTELogic.raNext('idle'), 'prep');
  assert.equal(PTELogic.raNext('prep'), 'read');
  assert.equal(PTELogic.raNext('read'), 'listen');
  assert.equal(PTELogic.raNext('listen'), 'assess');
  assert.equal(PTELogic.raNext('assess'), 'idle');
  assert.equal(PTELogic.raNext('nonsense'), 'idle');
  assert.equal(PTELogic.diNext('idle'), 'prep');
  assert.equal(PTELogic.diNext('prep'), 'speak');
  assert.equal(PTELogic.diNext('speak'), 'review');
  assert.equal(PTELogic.diNext('review'), 'idle');
  assert.equal(PTELogic.swtFit(0), 'short');
  assert.equal(PTELogic.swtFit(4), 'short');
  assert.equal(PTELogic.swtFit(5), 'ok');
  assert.equal(PTELogic.swtFit(75), 'ok');
  assert.equal(PTELogic.swtFit(76), 'over');
});

test('describe image charts are drawn offline as inline SVG in five forms', () => {
  const context = unit(['pte-logic.js', 'pte-di.js']);
  const charts = context.PTE_DI.charts;
  const types = new Set(charts.map(chart => chart.type));
  assert.ok(types.size >= 3);
  for (const type of ['bar', 'line', 'pie', 'table', 'flow']) assert.equal(types.has(type), true, type);
  assert.equal(context.PTE_DI.types.length, 5);
  for (const chart of charts) {
    assert.ok(chart.id && chart.title);
    assert.match(chart.note, /自制/);
    assert.ok(chart.structure && chart.structure.overview && chart.structure.conclusion);
    assert.ok(Array.isArray(chart.structure.features) && chart.structure.features.length >= 2);
    assert.ok(chart.model);
    const svg = context.PTELogic.svgChart(chart);
    assert.match(svg, /^<svg /);
    assert.match(svg, /role="img"/);
    assert.match(svg, /viewBox="0 0 340 210"/);
    assert.equal((svg.match(/<script/gi) || []).length, 0);
    assert.equal((svg.match(/<img/gi) || []).length, 0);
    if (chart.type === 'bar') assert.equal((svg.match(/<rect /g) || []).length, chart.values.length);
    if (chart.type === 'line') {
      assert.equal((svg.match(/<circle /g) || []).length, chart.values.length);
      assert.match(svg, /<polyline /);
    }
    if (chart.type === 'pie') assert.equal((svg.match(/<path /g) || []).length, chart.values.length);
    if (chart.type === 'table') assert.match(svg, /<text /);
    if (chart.type === 'flow') assert.equal((svg.match(/<rect /g) || []).length, chart.nodes.length);
  }
  const pie = charts.find(chart => chart.type === 'pie');
  assert.equal(pie.values.reduce((a, b) => a + b, 0), 100);
  assert.equal(context.PTELogic.svgChart({ type: 'unknown' }), '');
  const escaped = context.PTELogic.svgChart({ type: 'bar', title: 'a "b"', labels: ['<x>'], values: [1] });
  assert.match(escaped, /&lt;x&gt;/);
  assert.equal(escaped.includes('<x>'), false);
});

test('written summary bank reuses SST source text and marks self-made references', () => {
  const context = unit(['pte-logic.js', 'pte-sst.js', 'pte-swt.js']);
  const items = context.PTE_SWT.items;
  const byId = Object.fromEntries(context.PTE_SST.items.map(item => [item.id, item]));
  assert.equal(items.length, 10);
  const ids = new Set();
  for (const item of items) {
    assert.equal(ids.has(item.id), false, item.id);
    ids.add(item.id);
    const source = byId[item.sourceId];
    assert.ok(source && source.transcript, item.sourceId);
    assert.equal(item.ref_kind, 'self-made');
    assert.match(item.note, /自制/);
    assert.match(item.note, /不是官方答案/);
    assert.equal(/[\u3400-\u9fff]/.test(item.ref), false);
    const words = context.PTELogic.wordCount(item.ref);
    assert.ok(words >= context.PTE_SWT.minWords && words <= context.PTE_SWT.maxWords, item.id + ' ' + words);
    assert.equal(/[.!?].*[.!?]/.test(item.ref), false, item.id + ' must be one sentence');
    assert.equal(item.ref.trim(), item.ref);
  }
  assert.equal(context.PTE_SWT.minWords, context.PTELogic.SWT_MIN);
  assert.equal(context.PTE_SWT.maxWords, context.PTELogic.SWT_MAX);
  assert.equal(context.PTE_SWT.limitSec, context.PTELogic.SWT_SEC);
});

test('RA, DI and SWT progress is stored beside the existing PTE data', () => {
  const S = {
    learned: ['resilient'],
    days: { '2024-04-02': 1 },
    best: 4,
    pte: {
      wfdMem: { '123061': 1 },
      rep: 6,
      wfdCat: '学术场景',
      mode: 'read',
      ra: { self: { 'ra-100200': { f: 2, p: 3 } }, done: { 'ra-100200': 1 }, ord: 'num', extra: 'keep' },
      di: { self: { 'di-bar-faculty': { c: 9 } } },
      swt: { answers: { 'swt-100200': 'One sentence.', 'swt-100196': 5 }, submitted: { 'swt-100200': 1 } }
    }
  };
  const st = PTELogic.ensureState(S, PTELogic.categories(PTE));
  assert.equal(S.learned[0], 'resilient');
  assert.equal(S.days['2024-04-02'], 1);
  assert.equal(st.wfdMem['123061'], 1);
  assert.equal(st.rep, 6);
  assert.equal(st.wfdCat, '学术场景');
  assert.equal(st.mode, 'read');
  assert.equal(st.ra.self['ra-100200'].f, 2);
  assert.equal(st.ra.self['ra-100200'].p, 3);
  assert.equal(st.ra.done['ra-100200'], 1);
  assert.equal(st.ra.ord, 'num');
  assert.equal(st.ra.extra, 'keep');
  assert.equal(st.di.self['di-bar-faculty'].c, undefined);
  assert.equal(st.swt.answers['swt-100200'], 'One sentence.');
  assert.equal(st.swt.answers['swt-100196'], undefined);
  assert.equal(st.swt.submitted['swt-100200'], 1);
  const fresh = { pte: {} };
  const made = PTELogic.ensureState(fresh, []);
  assert.equal(made.mode, 'wfd');
  assert.equal(JSON.stringify(made.ra.done), '{}');
  assert.equal(JSON.stringify(made.ra.self), '{}');
  assert.equal(JSON.stringify(made.di.self), '{}');
  assert.equal(JSON.stringify(made.swt.answers), '{}');
  assert.equal(JSON.stringify(made.swt.submitted), '{}');
  assert.equal(made.ra.ord, 'rand');
  for (const mode of ['ra', 'di', 'swt']) {
    assert.equal(PTELogic.ensureState({ pte: { mode } }, []).mode, mode);
  }
  assert.equal(PTELogic.ensureState({ pte: { mode: 'swt', swt: { answers: { a: 'kept' } }, we: { notes: {} } } }, []).swt.answers.a, 'kept');
});

// --- voice availability and the service worker fetch path -------------------

function loadVoice() {
  // The browser module uses timers, so give the sandbox the same helpers.
  const context = { console, setTimeout, clearTimeout };
  vm.createContext(context);
  vm.runInContext(
    fs.readFileSync(path.join(root, 'voice-check.js'), 'utf8') + '\nglobalThis.VoiceCheck = VoiceCheck;\n',
    context
  );
  return context.VoiceCheck;
}

function fakeSynth(voices) {
  const listeners = new Set();
  const list = voices.slice();
  return {
    getVoices() { return list.slice(); },
    addEventListener(type, fn) { if (type === 'voiceschanged') listeners.add(fn); },
    removeEventListener(type, fn) { if (type === 'voiceschanged') listeners.delete(fn); },
    push(voice) { list.push(voice); },
    emit() { listeners.forEach(fn => fn()); },
    listeners
  };
}

const Voice = loadVoice();

test('voice pick prefers en-AU, then en-GB, then en-US, then any English', () => {
  const au = { name: 'Catherine', lang: 'en-AU' };
  const gb = { name: 'Daniel', lang: 'en-GB' };
  const us = { name: 'David', lang: 'en-US' };
  const india = { name: 'Ravi', lang: 'en-IN' };
  const zh = { name: 'Huihui', lang: 'zh-CN' };
  assert.equal(Voice.pickEnglishVoice([zh, us, gb, au]).name, 'Catherine');
  assert.equal(Voice.pickEnglishVoice([us, gb]).name, 'Daniel');
  assert.equal(Voice.pickEnglishVoice([us, india]).name, 'David');
  assert.equal(Voice.pickEnglishVoice([zh, india]).name, 'Ravi');
  assert.equal(Voice.pickEnglishVoice([zh]), null);
  assert.equal(Voice.pickEnglishVoice([]), null);
  assert.equal(Voice.pickEnglishVoice(undefined), null);
  assert.equal(Voice.pickEnglishVoice([null, { lang: '' }, us]).name, 'David');
});

test('voice status separates ok, no English voice and an empty voice list', () => {
  const us = { name: 'David', lang: 'en-US' };
  const ok = Voice.voiceStatus([{ name: 'Huihui', lang: 'zh-CN' }, us]);
  assert.equal(ok.ok, true);
  assert.equal(ok.lang, 'en-US');
  assert.equal(ok.name, 'David');
  assert.equal(ok.voice, us);
  const noEnglish = Voice.voiceStatus([{ name: 'Huihui', lang: 'zh-CN' }]);
  assert.equal(noEnglish.ok, false);
  assert.equal(noEnglish.reason, 'no-english');
  const empty = Voice.voiceStatus([]);
  assert.equal(empty.ok, false);
  assert.equal(empty.reason, 'no-voices');
  assert.equal(Voice.voiceStatus(undefined).reason, 'no-voices');
  assert.equal(Voice.voiceStatus(null).reason, 'no-voices');
  // The failure text has to name the modules that break and the audio that still works.
  assert.match(Voice.statusMessage(noEnglish), /WFD\/RS\/RA/);
  assert.match(Voice.statusMessage(noEnglish), /SST 的录音仍可播放/);
  assert.match(Voice.statusMessage(empty), /SST 的录音仍可播放/);
  assert.match(Voice.statusMessage({ ok: false, reason: 'no-synth' }), /Chrome/);
});

test('voice detection waits for voiceschanged when the first list is empty', async () => {
  const synth = fakeSynth([]);
  const pending = Voice.detect(synth, { timeoutMs: 1000 });
  synth.push({ name: 'David', lang: 'en-US' });
  synth.emit();
  const status = await pending;
  assert.equal(status.ok, true);
  assert.equal(status.lang, 'en-US');
  assert.equal(synth.listeners.size, 0, 'the listener must be removed after it resolves');
});

test('voice detection gives up after the timeout and reports why', async () => {
  const none = await Voice.detect(fakeSynth([]), { timeoutMs: 10 });
  assert.equal(none.ok, false);
  assert.equal(none.reason, 'no-voices');
  const chinese = await Voice.detect(fakeSynth([{ name: 'Huihui', lang: 'zh-CN' }]), { timeoutMs: 10 });
  assert.equal(chinese.ok, false);
  assert.equal(chinese.reason, 'no-english');
  assert.equal((await Voice.detect(null, {})).reason, 'no-synth');
  // an already usable list resolves without waiting
  const ready = await Voice.detect(fakeSynth([{ name: 'Daniel', lang: 'en-GB' }]), { timeoutMs: 0 });
  assert.equal(ready.ok, true);
  assert.equal(ready.name, 'Daniel');
});

test('voice self-check text covers the three states and the fix', () => {
  const ok = Voice.checkMessage({ status: { ok: true, name: 'Daniel', lang: 'en-GB' }, spoke: 'end' });
  assert.match(ok, /正常/);
  assert.match(ok, /Daniel/);
  assert.match(ok, /en-GB/);
  const noEnglish = Voice.checkMessage({ status: { ok: false, reason: 'no-english' }, spoke: 'none' });
  assert.match(noEnglish, /没有英文语音/);
  assert.match(noEnglish, /添加语音|安装英语数据/);
  const noVoices = Voice.checkMessage({ status: { ok: false, reason: 'no-voices' }, spoke: 'none' });
  assert.match(noVoices, /语音列表为空/);
  const noSynth = Voice.checkMessage({ status: { ok: false, reason: 'no-synth' }, spoke: 'none' });
  assert.match(noSynth, /完全没有语音合成器/);
  assert.match(noSynth, /Chrome/);
  // a selected voice that still fails to speak is reported, not hidden
  const failed = Voice.checkMessage({ status: { ok: true, name: 'David', lang: 'en-US' }, spoke: 'error' });
  assert.match(failed, /朗读失败/);
});

function loadServiceWorker(options = {}) {
  const handlers = {};
  const puts = [];
  const matches = [];
  const cache = {
    put(request, response) {
      if (options.putFails) return Promise.reject(new Error('cache.put failed'));
      puts.push({ request, response });
      return Promise.resolve();
    },
    addAll() { return Promise.resolve(); }
  };
  const caches = {
    open() { return Promise.resolve(cache); },
    match(request) { matches.push(request); return Promise.resolve(options.cached); },
    keys() { return Promise.resolve([]); },
    delete() { return Promise.resolve(true); }
  };
  const pending = [];
  const self = {
    addEventListener(type, handler) { handlers[type] = handler; },
    skipWaiting() { return Promise.resolve(); },
    clients: { claim() { return Promise.resolve(); } }
  };
  const context = {
    self, caches, Request, Response, URL,
    fetch: options.fetch || (() => Promise.reject(new Error('offline')))
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), context);
  return {
    puts,
    matches,
    async dispatch(request) {
      let responded = null;
      const event = {
        request,
        respondWith(promise) { responded = promise; },
        waitUntil(promise) { pending.push(Promise.resolve(promise)); }
      };
      handlers.fetch(event);
      const response = await Promise.resolve(responded);
      await Promise.all(pending);
      return response;
    }
  };
}

test('service worker never caches byte-range or partial audio responses', async () => {
  const ranged = loadServiceWorker({ fetch: () => Promise.resolve(new Response('partial', { status: 206 })) });
  const request = new Request('https://example.test/audio/sst/sst-1.mp3', { headers: { Range: 'bytes=0-1023' } });
  const response = await ranged.dispatch(request);
  assert.equal(response.status, 206);
  assert.equal(ranged.puts.length, 0);
  assert.equal(ranged.matches.length, 0, 'a ranged audio request must never read the cache');
  // a media URL without a Range header is still network-only
  const media = loadServiceWorker({ fetch: () => Promise.resolve(new Response('whole', { status: 200 })) });
  const whole = await media.dispatch(new Request('https://example.test/audio/sst/sst-2.mp3'));
  assert.equal(whole.status, 200);
  assert.equal(media.puts.length, 0);
});

test('service worker caches only a complete 200 and survives a failing cache.put', async () => {
  const partial = loadServiceWorker({ fetch: () => Promise.resolve(new Response('partial', { status: 206 })) });
  const notStored = await partial.dispatch(new Request('https://example.test/data/list.json'));
  assert.equal(notStored.status, 206);
  assert.equal(partial.puts.length, 0);

  const complete = loadServiceWorker({ fetch: () => Promise.resolve(new Response('{"a":1}', { status: 200 })) });
  const stored = await complete.dispatch(new Request('https://example.test/data/list.json'));
  assert.equal(stored.status, 200);
  assert.equal(complete.puts.length, 1);
  assert.equal(complete.puts[0].response.status, 200);

  const failing = loadServiceWorker({
    fetch: () => Promise.resolve(new Response('{"a":2}', { status: 200 })),
    putFails: true
  });
  const stillOk = await failing.dispatch(new Request('https://example.test/data/other.json'));
  assert.equal(stillOk.status, 200, 'a cache failure must not eat the network response');
});

test('service worker answers offline media with 504 and keeps the page cache fallback', async () => {
  const offline = loadServiceWorker({ fetch: () => Promise.reject(new Error('offline')) });
  const media = await offline.dispatch(new Request('https://example.test/audio/sst/sst-3.mp3'));
  assert.equal(media.status, 504);
  assert.equal(offline.matches.length, 0, 'offline audio must not fall back to a possibly partial cache entry');

  const cached = new Response('cached page', { status: 200 });
  const fallback = loadServiceWorker({ fetch: () => Promise.reject(new Error('offline')), cached });
  const page = await fallback.dispatch(new Request('https://example.test/index.html'));
  assert.equal(page.status, 200);
  assert.equal(fallback.matches.length, 1);

  const cold = await offline.dispatch(new Request('https://example.test/index.html'));
  assert.equal(cold.status, 504, 'no cache entry means an explicit 504, not a broken response');
});

// --- tools/bump.mjs and the CI workflow ------------------------------------

const { plan: planBump, bump: bumpVersion, run: runBump } = await import(
  pathToFileURL(path.join(root, 'tools', 'bump.mjs')).href
);

const quietBump = { out() {}, err() {} };

function tempSite(files = ['index.html', 'sw.js']) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ep-bump-'));
  for (const file of files) fs.copyFileSync(path.join(root, file), path.join(dir, file));
  return dir;
}

function dropTemp(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

// Everything except the version digits must survive a bump untouched.
function canonical(text) {
  return text
    .replace(/\?v=\d+/g, '?v=V')
    .replace(/(<small\s+id="ver"[^>]*>)v\d+/g, '$1vV')
    .replace(/(const\s+C\s*=\s*'ep-v)\d+/g, '$1V');
}

const repoIndex = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const repoSw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');

test('bump tool parses every version tag without writing', () => {
  const dir = tempSite();
  try {
    const parsed = planBump(dir);
    assert.ok(Number.isInteger(parsed.current) && parsed.current > 0);
    assert.deepEqual(parsed.versions, [parsed.current]);
    assert.ok(parsed.index.queries.length >= 10);
    assert.equal(parsed.index.label.version, parsed.current);
    assert.equal(parsed.sw.cache.version, parsed.current);
    assert.ok(parsed.sw.precache.length >= 10);
    const before = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
    const result = bumpVersion({ root: dir, to: parsed.current + 2, dryRun: true });
    assert.equal(result.changed, true);
    assert.equal(result.dryRun, true);
    assert.equal(result.from, parsed.current);
    assert.equal(result.to, parsed.current + 2);
    assert.equal(fs.readFileSync(path.join(dir, 'index.html'), 'utf8'), before);
  } finally {
    dropTemp(dir);
  }
});

test('bump tool rewrites every tag and leaves the rest of the file alone', () => {
  const dir = tempSite();
  try {
    const from = planBump(dir).current;
    const target = from + 2;
    const result = bumpVersion({ root: dir, to: target });
    assert.equal(result.changed, true);
    const index = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
    const sw = fs.readFileSync(path.join(dir, 'sw.js'), 'utf8');
    for (const match of index.matchAll(/\?v=(\d+)/g)) assert.equal(Number(match[1]), target);
    assert.match(index, new RegExp('<small id="ver"[^>]*>v' + target + '<'));
    assert.match(sw, new RegExp("const C='ep-v" + target + "'"));
    for (const match of sw.matchAll(/\?v=(\d+)/g)) assert.equal(Number(match[1]), target);
    assert.equal(index.includes('?v=' + from), false);
    assert.equal(sw.includes('ep-v' + from), false);
    assert.equal(canonical(index), canonical(repoIndex));
    assert.equal(canonical(sw), canonical(repoSw));
    // the working copy itself is never touched
    assert.equal(fs.readFileSync(path.join(root, 'index.html'), 'utf8'), repoIndex);
    assert.equal(fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), repoSw);
  } finally {
    dropTemp(dir);
  }
});

test('bump tool is idempotent and reports nothing to do at the target', () => {
  const dir = tempSite();
  try {
    const target = planBump(dir).current + 1;
    assert.equal(bumpVersion({ root: dir, to: target }).changed, true);
    const indexAfter = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
    const swAfter = fs.readFileSync(path.join(dir, 'sw.js'), 'utf8');
    const again = bumpVersion({ root: dir, to: target });
    assert.equal(again.changed, false);
    assert.equal(fs.readFileSync(path.join(dir, 'index.html'), 'utf8'), indexAfter);
    assert.equal(fs.readFileSync(path.join(dir, 'sw.js'), 'utf8'), swAfter);
  } finally {
    dropTemp(dir);
  }
});

test('bump tool fails loudly on bad input, missing tags and missing target', () => {
  const dir = tempSite();
  const broken = fs.mkdtempSync(path.join(os.tmpdir(), 'ep-bump-broken-'));
  try {
    const current = planBump(dir).current;
    assert.equal(runBump(['abc', '--root', dir], quietBump), 1);
    assert.equal(runBump(['0', '--root', dir], quietBump), 1);
    assert.equal(runBump([], quietBump), 1);
    assert.equal(runBump([String(current), '--root', dir], quietBump), 0);
    assert.equal(runBump([String(current + 1), '--root', dir, '--dry-run'], quietBump), 0);
    assert.equal(runBump([String(current - 1), '--root', dir], quietBump), 2);
    assert.throws(() => bumpVersion({ root: dir, to: '40a' }), /whole number/);
    // a tree without the expected tags must be reported, never treated as a success
    fs.writeFileSync(path.join(broken, 'index.html'), '<!doctype html><link rel="stylesheet" href="style.css?v=1">\n');
    fs.writeFileSync(path.join(broken, 'sw.js'), "const C='ep-v1',F=['app.js?v=1'];\n");
    assert.equal(runBump([String(current + 3), '--root', broken], quietBump), 1);
    assert.throws(() => planBump(broken), /version label/);
  } finally {
    dropTemp(dir);
    dropTemp(broken);
  }
});

test('CI runs the node test file on every push and pull request', () => {
  const yml = fs.readFileSync(path.join(root, '.github', 'workflows', 'ci.yml'), 'utf8');
  const lines = yml.split(/\r?\n/);
  assert.equal(lines.some(line => line.includes('\t')), false, 'YAML must not contain tabs');
  assert.match(yml, /^name:\s*CI$/m);
  assert.match(yml, /^on:\s*$/m);
  assert.match(yml, /^\s+push:\s*$/m);
  assert.match(yml, /^\s+pull_request:\s*$/m);
  assert.match(yml, /^jobs:\s*$/m);
  assert.match(yml, /^\s{2}test:\s*$/m);
  assert.match(yml, /^\s{4}steps:\s*$/m);
  assert.match(yml, /uses:\s*actions\/checkout@v4/);
  assert.match(yml, /uses:\s*actions\/setup-node@v4/);
  assert.match(yml, /node-version:\s*['"]?20['"]?\s*$/m);
  assert.match(yml, /run:\s*node test\/pte\.test\.mjs\s*$/m);
  assert.equal(lines.filter(line => /^\s+- name:/.test(line)).length, 3);
  const body = lines.filter(line => !/^\s*#/.test(line)).join('\n');
  assert.equal(/npm (install|ci)/.test(body), false);
  assert.equal(body.includes('package.json'), false);
});
