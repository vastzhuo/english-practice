// PTE tab: browse, hands-free playback, and recall. Progress lives on the existing `ep` object.
const PTE_PLAY = { on: false, paused: false, tok: 0, gen: 0, item: null, rep: 0, reps: 5, place: 0, total: 0, phase: 'idle', pending: [], au: null, lock: null, keep: null, utt: null, wfdKey: '', wfdOrder: [], wfdIdx: 0, rsKey: '', rsOrder: [], rsIdx: 0, revealed: false, heard: '', mask: {}, readId: '', deck: null, cards: [], cardIdx: 0, flip: false, quiz: null, quizPicked: '', cardMode: 'card' };

function pteState() { return PTELogic.ensureState(S, PTELogic.categories(PTE)); }
function pteRead() { return (typeof PTE_READ !== 'undefined' && PTE_READ) ? PTE_READ : { types: [], articles: [] }; }
function pteRsList() { return PTELogic.asRs((typeof PTE_RS !== 'undefined' && Array.isArray(PTE_RS)) ? PTE_RS : []); }
function pteWfdPool() { return PTELogic.pool(PTE, pteState().wfdCat); }
function pteDriveItems() {
  const st = pteState();
  const wfd = st.set === 'both' ? PTE.slice() : pteWfdPool();
  return PTELogic.drivePool(st.set, wfd, pteRsList());
}
function pteMemCount(list, bag) { return list.filter(item => bag && bag[item.id]).length; }
function pteById(id) { return PTE.find(item => item.id === id) || pteRsList().find(item => item.id === id); }

function pteLater(ms) {
  return new Promise(resolve => {
    let done = false;
    const rec = { t: null, finish(why) {
      if (done) return;
      done = true;
      if (rec.t) clearTimeout(rec.t);
      rec.t = null;
      const i = PTE_PLAY.pending.indexOf(rec);
      if (i >= 0) PTE_PLAY.pending.splice(i, 1);
      resolve(why);
    } };
    rec.t = setTimeout(() => rec.finish('time'), ms);
    PTE_PLAY.pending.push(rec);
  });
}
function pteClearPending() {
  const list = PTE_PLAY.pending.splice(0);
  list.forEach(rec => rec.finish('abort'));
}

function pteSilent() {
  if (PTE_PLAY.au) return PTE_PLAY.au;
  const sr = 8000, n = sr * 2, b = new ArrayBuffer(44 + n * 2), v = new DataView(b);
  const ws = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  ws(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); ws(8, 'WAVEfmt ');
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  ws(36, 'data'); v.setUint32(40, n * 2, true);
  const a = new Audio(URL.createObjectURL(new Blob([b], { type: 'audio/wav' })));
  a.loop = true; a.volume = 0.01; PTE_PLAY.au = a; return a;
}
async function pteLock() {
  try {
    if ('wakeLock' in navigator && !PTE_PLAY.lock) {
      PTE_PLAY.lock = await navigator.wakeLock.request('screen');
      PTE_PLAY.lock.addEventListener('release', () => { PTE_PLAY.lock = null; });
    }
  } catch (err) {}
}
function pteKeepAlive() {
  if (PTE_PLAY.keep) clearInterval(PTE_PLAY.keep);
  PTE_PLAY.keep = setInterval(() => {
    if (!PTE_PLAY.on || PTE_PLAY.paused || !window.speechSynthesis) return;
    try { if (speechSynthesis.paused) speechSynthesis.resume(); } catch (err) {}
  }, 8000);
}
document.addEventListener('visibilitychange', () => {
  if (PTE_PLAY.on && !PTE_PLAY.paused && document.visibilityState === 'visible') pteLock();
});

function pteClearMedia() {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.playbackState = 'none';
    ['play', 'pause', 'stop'].forEach(k => { try { navigator.mediaSession.setActionHandler(k, null); } catch (err) {} });
  } catch (err) {}
}
function pteMedia() {
  if (!('mediaSession' in navigator) || !PTE_PLAY.item) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({ title: PTE_PLAY.item.text, artist: '题号 ' + PTE_PLAY.item.sourceNumber, album: pteState().set === 'rs' ? 'RS 复述' : 'WFD 听写' });
    navigator.mediaSession.playbackState = PTE_PLAY.on && !PTE_PLAY.paused ? 'playing' : 'paused';
    const map = { play: () => { if (!PTE_PLAY.on) pteStart(); else pteResume(); }, pause: () => ptePause(), stop: () => pteStop() };
    Object.keys(map).forEach(k => { try { navigator.mediaSession.setActionHandler(k, map[k]); } catch (err) {} });
  } catch (err) {}
}

function pteSpeakOnce(text, tok, immediate) {
  return new Promise(resolve => {
    if (tok !== PTE_PLAY.tok || !PTE_PLAY.on || PTE_PLAY.paused) { resolve(PTE_PLAY.paused ? 'paused' : 'stopped'); return; }
    const spoken = String(text || '').trim();
    if (!spoken || !window.speechSynthesis || typeof SpeechSynthesisUtterance !== 'function') {
      const words = spoken ? spoken.split(/\s+/).length : 1;
      pteLater(Math.min(8000, 700 + words * 280)).then(why => resolve(why === 'time' ? 'unsupported' : 'stopped'));
      return;
    }
    const gen = ++PTE_PLAY.gen;
    let settled = false;
    const finish = why => { if (settled || gen !== PTE_PLAY.gen) return; settled = true; resolve(why); };
    const u = new SpeechSynthesisUtterance(spoken);
    const v = (typeof voice !== 'undefined') ? voice : null;
    u.lang = v && v.lang ? v.lang : 'en-AU';
    if (v) u.voice = v;
    u.rate = 0.92;
    PTE_PLAY.utt = u;
    u.onend = () => finish('end');
    u.onerror = () => {
      if (tok !== PTE_PLAY.tok || !PTE_PLAY.on) finish('stopped');
      else if (PTE_PLAY.paused) finish('paused');
      else finish('error');
    };
    const words = spoken.split(/\s+/).length;
    pteLater(Math.min(25000, 2200 + words * 450)).then(why => {
      if (why !== 'time' || settled) return;
      try { speechSynthesis.cancel(); } catch (err) {}
      finish('timeout');
    });
    const go = () => {
      if (settled || tok !== PTE_PLAY.tok || !PTE_PLAY.on) return finish('stopped');
      if (PTE_PLAY.paused) return finish('paused');
      try { if (speechSynthesis.paused) speechSynthesis.resume(); speechSynthesis.speak(u); }
      catch (err) { finish('error'); }
    };
    if (immediate) go();
    else {
      try { speechSynthesis.cancel(); } catch (err) {}
      pteLater(80).then(why => { if (why === 'time') go(); else finish('stopped'); });
    }
  });
}
async function pteSpeak(text, tok, immediate) {
  let imm = immediate;
  while (tok === PTE_PLAY.tok && PTE_PLAY.on) {
    if (PTE_PLAY.paused) {
      const hold = await pteWaitPause(tok);
      if (hold !== 'go') return 'stopped';
    }
    const why = await pteSpeakOnce(text, tok, imm);
    imm = false;
    if (why === 'paused') continue;
    return why;
  }
  return 'stopped';
}
function pteWaitPause(tok) {
  return new Promise(resolve => {
    const tick = () => {
      if (tok !== PTE_PLAY.tok || !PTE_PLAY.on) return resolve('stop');
      if (!PTE_PLAY.paused) return resolve('go');
      pteLater(100).then(why => { if (why !== 'time') resolve('stop'); else tick(); });
    };
    tick();
  });
}
async function pteWait(ms, tok) {
  let left = ms;
  while (left > 0) {
    if (tok !== PTE_PLAY.tok || !PTE_PLAY.on) return false;
    if (PTE_PLAY.paused) {
      const hold = await pteWaitPause(tok);
      if (hold !== 'go') return false;
    }
    const slice = Math.min(100, left);
    const why = await pteLater(slice);
    if (why !== 'time') return false;
    if (tok !== PTE_PLAY.tok || !PTE_PLAY.on) return false;
    left -= slice;
  }
  return true;
}

function ptePaint() {
  const ov = $('pteOverlay');
  if (!ov) return;
  const item = PTE_PLAY.item;
  if (!PTE_PLAY.on || !item) { ov.hidden = true; return; }
  ov.hidden = false;
  const big = $('pteOvBig');
  big.textContent = item.text;
  big.style.fontSize = PTELogic.fontPx(item.text) + 'px';
  const kind = item.driveSet === 'rs' ? '周二 50 句' : '152 高频句';
  const cat = item.category ? ' · ' + item.category : '';
  $('pteOvMeta').textContent = kind + ' · 题号 ' + item.sourceNumber + cat + ' · ' + PTE_PLAY.place + '/' + PTE_PLAY.total;
  const reps = Math.max(PTE_PLAY.rep || 1, PTELogic.clampRep(pteState().rep));
  let label = '正在朗读';
  if (PTE_PLAY.paused) label = '已暂停';
  else if (PTE_PLAY.phase === 'gap') label = '请跟读';
  $('pteOvPhase').textContent = label + ' · 第 ' + PTE_PLAY.rep + ' / ' + reps + ' 遍';
  $('pteOvRep').textContent = PTELogic.clampRep(pteState().rep) + ' 遍';
  $('pteOvRepDown').disabled = pteState().rep <= PTELogic.PTE_REP_MIN;
  $('pteOvRepUp').disabled = pteState().rep >= PTELogic.PTE_REP_MAX;
  $('pteOvPause').textContent = PTE_PLAY.paused ? '继续' : '暂停';
  pteMedia();
}

function pteBumpRep(dir) {
  const st = pteState();
  st.rep = PTELogic.clampRep(st.rep + dir);
  save();
  const lab = $('pteRepVal');
  if (lab) lab.textContent = String(st.rep);
  const down = $('pteRepDown'), up = $('pteRepUp');
  if (down) down.disabled = st.rep <= PTELogic.PTE_REP_MIN;
  if (up) up.disabled = st.rep >= PTELogic.PTE_REP_MAX;
  if (PTE_PLAY.on) ptePaint();
}

async function pteLoop(tok) {
  let first = true;
  await PTELogic.runLoop({
    items() { return pteDriveItems(); },
    reps() { return pteState().rep; },
    pauseMs() { return PTELogic.PTE_PAUSE_MS; },
    stopped() { return tok !== PTE_PLAY.tok || !PTE_PLAY.on; },
    show(item, info) {
      PTE_PLAY.item = item;
      PTE_PLAY.rep = info.rep;
      PTE_PLAY.reps = info.reps;
      PTE_PLAY.place = info.index + 1;
      PTE_PLAY.total = info.total;
      PTE_PLAY.phase = info.phase;
      ptePaint();
    },
    speak(text) {
      const immediate = first;
      first = false;
      return pteSpeak(text, tok, immediate);
    },
    wait(ms) { return pteWait(ms, tok).then(ok => ok ? 'ok' : 'stopped'); }
  });
  if (tok === PTE_PLAY.tok && PTE_PLAY.on) pteStop();
}

function pteStart() {
  if (PTE_PLAY.on || !pteDriveItems().length) return;
  if (typeof DV !== 'undefined' && DV.on && typeof dvPlay === 'function') dvPlay(false);
  if (typeof pickVoice === 'function') pickVoice();
  const st = pteState();
  st.mode = 'drive';
  save();
  PTE_PLAY.on = true;
  PTE_PLAY.paused = false;
  PTE_PLAY.phase = 'speak';
  PTE_PLAY.tok += 1;
  const tok = PTE_PLAY.tok;
  try { pteSilent().play().catch(() => {}); } catch (err) {}
  pteLock();
  pteKeepAlive();
  pteLoop(tok);
}
function ptePause() {
  if (!PTE_PLAY.on || PTE_PLAY.paused) return;
  PTE_PLAY.paused = true;
  try { speechSynthesis.cancel(); } catch (err) {}
  ptePaint();
}
function pteResume() {
  if (!PTE_PLAY.on || !PTE_PLAY.paused) return;
  PTE_PLAY.paused = false;
  pteLock();
  ptePaint();
}
function pteStop() {
  PTE_PLAY.on = false;
  PTE_PLAY.paused = false;
  PTE_PLAY.phase = 'idle';
  PTE_PLAY.tok += 1;
  PTE_PLAY.item = null;
  pteClearPending();
  PTE_PLAY.utt = null;
  try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (err) {}
  if (PTE_PLAY.keep) { clearInterval(PTE_PLAY.keep); PTE_PLAY.keep = null; }
  if (PTE_PLAY.au) { try { PTE_PLAY.au.pause(); } catch (err) {} }
  if (PTE_PLAY.lock) { const lk = PTE_PLAY.lock; PTE_PLAY.lock = null; lk.release().catch(() => {}); }
  const ov = $('pteOverlay');
  if (ov) ov.hidden = true;
  pteClearMedia();
  if ($('pteRoot')) pteOpen();
}
window.pteStop = pteStop;

function pteCatOptions(current) {
  const cats = PTELogic.categories(PTE);
  const opt = (v, n) => `<option value="${esc(v)}" ${v === current ? 'selected' : ''}>${esc(v)} (${n})</option>`;
  return opt('全部', PTE.length) + cats.map(c => opt(c, PTE.filter(item => item.category === c).length)).join('');
}
function pteModes(st) {
  const btn = (id, label) => `<button type="button" data-pte-act="mode" data-mode="${id}" class="${st.mode === id ? 'on' : ''}">${label}</button>`;
  return `<div class="pte-sub">${btn('wfd', 'WFD')}${btn('rs', 'RS')}${btn('read', '阅读')}${btn('we', 'WE')}${btn('drive', '开车')}</div>`;
}
function slotOrder(slot, items, ord) {
  const key = slot + '|' + ord + '|' + items.map(item => item.id).join('.');
  if (PTE_PLAY[slot + 'Key'] !== key) {
    PTE_PLAY[slot + 'Order'] = ord === 'num' ? PTELogic.byNumber(items) : PTELogic.shuffle(items, Math.random);
    PTE_PLAY[slot + 'Key'] = key;
    PTE_PLAY[slot + 'Idx'] = 0;
    PTE_PLAY.revealed = false;
    PTE_PLAY.heard = '';
  }
  const order = PTE_PLAY[slot + 'Order'];
  if (!order.length) PTE_PLAY[slot + 'Idx'] = 0;
  else if (PTE_PLAY[slot + 'Idx'] >= order.length) PTE_PLAY[slot + 'Idx'] = 0;
  return order;
}
function advance(slot) {
  const order = PTE_PLAY[slot + 'Order'] || [];
  PTE_PLAY.revealed = false;
  PTE_PLAY.heard = '';
  if (order.length && PTE_PLAY[slot + 'Idx'] + 1 >= order.length) {
    PTE_PLAY[slot + 'Key'] = '';
    PTE_PLAY[slot + 'Idx'] = 0;
  } else PTE_PLAY[slot + 'Idx'] += 1;
}
function bigLine(text) {
  return `<p class="pte-bigline" lang="en" style="font-size:${PTELogic.fontPx(text)}px">${esc(text)}</p>`;
}
function diffBlock(expected, heard) {
  const d = PTELogic.diffWords(expected, heard);
  const line = d.tokens.filter(t => t.t !== 'extra').map(t => {
    const cls = t.t === 'ok' ? 'wok' : (t.t === 'bad' ? 'wbad' : 'wmiss');
    const title = t.t === 'bad' ? ` title="你写成 ${esc(t.heard)}"` : '';
    return `<span class="${cls}"${title}>${esc(t.w)}</span>`;
  }).join(' ');
  const extras = d.tokens.filter(t => t.t === 'extra').map(t => esc(t.w)).join(' ');
  return `<p>重合 ${d.score}% · 绿色写对，红色漏写或写错，橙色多写</p><div class="pte-diff">${line}</div>${extras ? `<p class="wextra">多写了：${extras}</p>` : ''}`;
}
function readTypes() { return pteRead().types || []; }
function readArticles() { return pteRead().articles || []; }
function typeById(id) { return readTypes().find(t => t.id === id) || null; }
function vocabBank(scope) {
  const rows = [];
  readArticles().forEach(article => {
    if (scope && article.id !== scope) return;
    (article.vocab || []).forEach(word => rows.push({
      w: word.w, zh: word.zh, ex: word.ex || '', col: word.col || '',
      source: word.source || PTELogic.vocabSource(article),
      articleId: article.id, title: article.title || ''
    }));
  });
  return rows.filter(word => word.w && word.zh);
}
function lessonBits(list, kind) {
  return (list || []).map(item => `<div class="pte-lesson"><b lang="en">${esc(item.en || item.name || '')}</b> ${item.en ? `<button type="button" class="spk" data-say="${esc(item.en)}">🔊</button>` : ''}<div>${esc(item.zh || '')}</div>${item.col ? `<div>搭配：<span lang="en">${esc(item.col)}</span></div>` : ''}${kind === 'pattern' ? '<div>句型例句，不是阅读原文。</div>' : ''}${item.ex ? `<div lang="en">${esc(item.ex)} <button type="button" class="spk" data-say="${esc(item.ex)}">🔊</button></div>` : ''}</div>`).join('');
}
function lessonHtml(type) {
  if (!type) return '';
  const att = (type.attitudes || []).length ? `<h3>态度词</h3>${lessonBits(type.attitudes)}` : '';
  return `<p>${esc(type.blurb || '')}</p><h3>信号词</h3>${lessonBits(type.connectives)}${att}<h3>句型</h3>${lessonBits(type.patterns, 'pattern')}`;
}
function extraNote(article) {
  const n = article.note || '';
  if (!n || n === '—' || n === '双次转折类' || n === '单次转折类' || n === '并列对比类') return '';
  return n;
}
function pteFlow(id) {
  const st = pteState();
  if (!st.readFlow[id] || typeof st.readFlow[id] !== 'object' || Array.isArray(st.readFlow[id])) st.readFlow[id] = {};
  const note = st.readFlow[id];
  if (!note.steps || typeof note.steps !== 'object' || Array.isArray(note.steps)) note.steps = {};
  ['signals', 'synonyms', 'map', 'summary'].forEach(k => { if (typeof note[k] !== 'string') note[k] = ''; });
  return note;
}
const FLOW_STEPS = [[1, '计时做题', '3–5 分钟', 300], [2, '对答案，并标出错因', '3 分钟', 180], [3, '精读：圈信号词、生词和同义替换', '8–10 分钟', 600], [4, '画出结构', '3 分钟', 180], [5, '用英文写三句摘要', '2 分钟', 120], [6, '打卡：勾第一遍或第二遍', '', 0]];
function flowClock(sec) {
  const n = Math.max(0, sec || 0);
  return String(Math.floor(n / 60)).padStart(2, '0') + ':' + String(n % 60).padStart(2, '0');
}
function flowStop() {
  if (PTE_PLAY.flowTick) clearInterval(PTE_PLAY.flowTick);
  PTE_PLAY.flowTick = null;
}
function paintFlow() {
  const el = $('pteFlowClock');
  if (!el) return;
  const step = FLOW_STEPS.find(s => s[0] === PTE_PLAY.flowStep);
  el.textContent = (step ? step[1] + ' ' : '') + flowClock(PTE_PLAY.flowLeft);
}
function flowStart(step) {
  const row = FLOW_STEPS.find(s => s[0] === step);
  if (!row || !row[3]) return;
  flowStop();
  PTE_PLAY.flowStep = step;
  PTE_PLAY.flowLeft = row[3];
  paintFlow();
  PTE_PLAY.flowTick = setInterval(() => {
    PTE_PLAY.flowLeft -= 1;
    if (PTE_PLAY.flowLeft <= 0) { PTE_PLAY.flowLeft = 0; flowStop(); }
    paintFlow();
  }, 1000);
}
function flowHtml(id) {
  const note = pteFlow(id);
  const steps = FLOW_STEPS.map(s => {
    const on = !!note.steps[s[0]];
    const time = s[3] ? `<button type="button" class="btn alt" data-pte-act="flow-go" data-step="${s[0]}">计时 ${esc(s[2])}</button>` : '';
    return `<div class="pte-lesson"><button type="button" class="btn ${on ? 'done' : 'alt'}" data-pte-act="flow-step" data-step="${s[0]}">${on ? '✓' : '○'} ${s[0]}. ${esc(s[1])}${s[2] ? '（' + esc(s[2]) + '）' : ''}</button>${time}</div>`;
  }).join('');
  const box = (key, label, ph) => `<label class="pte-lab">${label}</label><textarea class="pte-box" data-flow="${key}" placeholder="${ph}">${esc(note[key])}</textarea>`;
  const open = PTE_PLAY.flowTick || Object.keys(note.steps).length || note.signals || note.synonyms || note.map || note.summary;
  return `<details class="card" ${open ? 'open' : ''}><summary>精读步骤（可选，约 25–30 分钟）</summary><p class="pte-tip">词汇在上面。这里按你的做法：先计时做题，再标错因，然后记信号词、结构图和三句英文摘要。</p><p id="pteFlowClock" class="pte-clock">${esc(flowClock(PTE_PLAY.flowLeft))}</p><button type="button" class="btn alt" data-pte-act="flow-stop">停止计时</button>${steps}${box('signals', '信号词', '写下这篇里要记的信号词')}${box('synonyms', '同义替换', '例如 however = yet')}${box('map', '结构图', '用几行字写出结构')}${box('summary', '三句英文摘要', 'Write three English sentences.')}</details>`;
}
function passButtons(id) {
  const n = pteState().readPass[id] || 0;
  const one = n === 1 ? 'done' : 'alt';
  const two = n === 2 ? 'done' : 'alt';
  return `<button type="button" class="btn ${one} half" data-pte-act="pass" data-id="${esc(id)}" data-pass="1">${n === 1 ? '✓ 第一遍' : '第一遍'}</button><button type="button" class="btn ${two} half" data-pte-act="pass" data-id="${esc(id)}" data-pass="2">${n === 2 ? '✓ 第二遍' : '第二遍'}</button>`;
}
function errSelect(id) {
  const cur = pteState().readErr[id] || '';
  const opts = `<option value="">错误原因（可选）</option>` + PTELogic.READ_ERRORS.map(e => `<option value="${esc(e)}" ${e === cur ? 'selected' : ''}>${esc(e)}</option>`).join('');
  return `<label class="pte-lab">错因</label><select class="sel" data-err="${esc(id)}">${opts}</select>`;
}
function vocabHtml(article) {
  const src = PTELogic.vocabSource(article);
  const note = src === 'text' ? '<p class="pte-badge">文中词汇</p>' : '<p class="pte-badge">按题目预测 · 原文未提供，考试以真题为准</p>';
  const rows = (article.vocab || []).map(word => {
    const key = article.id + '|' + word.w;
    const known = !!pteState().vocabKnown[key];
    return `<div class="pte-lesson"><div class="pte-word" lang="en">${esc(word.w)} <button type="button" class="spk" data-say="${esc(word.w)}">🔊</button></div><div>${esc(word.zh || '')}</div><div>搭配：<span lang="en">${esc(word.col || '')}</span></div><div lang="en">${esc(word.ex || '')}${word.ex ? ` <button type="button" class="spk" data-say="${esc(word.ex)}">🔊</button>` : ''}</div><button type="button" class="btn ${known ? 'done' : 'alt'}" data-pte-act="known" data-key="${esc(key)}">${known ? '✓ 认识' : '标记认识'}</button></div>`;
  }).join('');
  return note + (rows || '<p>这篇还没有词表。</p>');
}

function viewWfd(st) {
  const order = slotOrder('wfd', pteWfdPool(), st.wfdOrd);
  const mini = `<div class="pte-mini"><button type="button" data-pte-act="wfd-view" data-view="dict" class="${st.wfdView !== 'list' ? 'on' : ''}">听写</button><button type="button" data-pte-act="wfd-view" data-view="list" class="${st.wfdView === 'list' ? 'on' : ''}">列表</button></div>`;
  const head = `${pteModes(st)}<div class="card"><b>WFD 听写</b><p>Write From Dictation，${PTE.length} 句。和 RS 复述分开练。先听再写，对答案后才出现大字。</p><p>已掌握 ${pteMemCount(pteWfdPool(), st.wfdMem)}/${pteWfdPool().length}</p><label class="pte-lab">分类</label><select id="pteCat" class="sel">${pteCatOptions(st.wfdCat)}</select><label class="pte-lab">顺序</label><select id="pteOrd" class="sel"><option value="rand" ${st.wfdOrd !== 'num' ? 'selected' : ''}>随机顺序</option><option value="num" ${st.wfdOrd === 'num' ? 'selected' : ''}>按题号</option></select>${st.wfdOrd === 'num' ? '' : '<button type="button" class="btn alt" data-pte-act="reshuffle">重新打乱</button>'}${mini}</div>`;
  if (st.wfdView === 'list') {
    return head + order.map(item => {
      const on = !!st.wfdMem[item.id];
      const hidden = !!PTE_PLAY.mask[item.id];
      const body = hidden ? '<div class="pte-hidden">句子已隐藏</div>' : `<p class="pte-sent" lang="en">${esc(item.text)}</p>`;
      return `<article class="card ${on ? 'is-mem' : ''}"><div class="pte-kicker">题号 ${item.sourceNumber} · ${esc(item.category)}</div>${body}<button type="button" class="btn alt half" data-pte-act="mask" data-id="${esc(item.id)}">${hidden ? '显示' : '隐藏'}</button><button type="button" class="btn alt half" data-pte-act="hear" data-id="${esc(item.id)}">🔊 听</button><button type="button" class="btn ${on ? 'done' : 'alt'}" data-pte-act="mem" data-bag="wfd" data-id="${esc(item.id)}">${on ? '✓ 已掌握' : '标记已掌握'}</button></article>`;
    }).join('');
  }
  const item = order[PTE_PLAY.wfdIdx];
  if (!item) return head + '<div class="card"><p>这个分类里没有句子。</p></div>';
  const on = !!st.wfdMem[item.id];
  const answer = PTE_PLAY.revealed ? `${bigLine(item.text)}${diffBlock(item.text, PTE_PLAY.heard)}<button type="button" class="btn ${on ? 'done' : 'alt'}" data-pte-act="mem" data-bag="wfd" data-id="${esc(item.id)}">${on ? '✓ 已掌握' : '标记已掌握'}</button><button type="button" class="btn" data-pte-act="wfd-next">下一句</button>` : `<textarea id="pteHeard" class="pte-box" placeholder="在这里写下听到的句子"></textarea><button type="button" class="btn" data-pte-act="check">对答案</button>`;
  return head + `<div class="card"><div class="pte-kicker">第 ${PTE_PLAY.wfdIdx + 1}/${order.length} · 题号 ${item.sourceNumber} · ${esc(item.category)}</div><button type="button" class="btn" data-pte-act="play-wfd">播放</button>${answer}</div>`;
}
function viewRs(st) {
  const list = pteRsList();
  const mini = `<div class="pte-mini"><button type="button" data-pte-act="rs-view" data-view="practice" class="${st.rsView !== 'list' ? 'on' : ''}">跟读</button><button type="button" data-pte-act="rs-view" data-view="list" class="${st.rsView === 'list' ? 'on' : ''}">列表</button></div>`;
  const head = `${pteModes(st)}<div class="card"><b>周二真题预测 50 句</b><p>Repeat Sentence，${list.length} 句。句子按原表照录。每天练这一套：先听，再大声复述，大字一直显示。</p><p>已练习 ${pteMemCount(list, st.rsMem)}/${list.length}</p>${mini}</div>`;
  if (!list.length) return head + '<div class="card"><p>这套复述句子还没有载入。</p></div>';
  if (st.rsView === 'list') {
    return head + PTELogic.byNumber(list).map(item => {
      const on = !!st.rsMem[item.id];
      return `<article class="card ${on ? 'is-mem' : ''}"><div class="pte-kicker">题号 ${esc(item.sourceNumber)}</div><p class="pte-sent" lang="en">${esc(item.text)}</p><button type="button" class="btn alt half" data-pte-act="hear" data-id="${esc(item.id)}">🔊 听</button><button type="button" class="btn half ${on ? 'done' : 'alt'}" data-pte-act="mem" data-bag="rs" data-id="${esc(item.id)}">${on ? '✓ 已练习' : '未练习'}</button></article>`;
    }).join('');
  }
  const order = slotOrder('rs', list, 'rand');
  const item = order[PTE_PLAY.rsIdx];
  if (!item) return head;
  const on = !!st.rsMem[item.id];
  const mic = (typeof SR !== 'undefined' && SR) ? `<button type="button" class="btn alt" data-pte-act="mic" data-id="${esc(item.id)}">🎤 跟读评分</button>` : '';
  return head + `<div class="card"><div class="pte-kicker">第 ${PTE_PLAY.rsIdx + 1}/${order.length} · 题号 ${esc(item.sourceNumber)}</div>${bigLine(item.text)}<button type="button" class="btn" data-pte-act="hear" data-id="${esc(item.id)}">播放</button>${mic}<button type="button" class="btn ${on ? 'done' : ''}" data-pte-act="mem" data-bag="rs" data-id="${esc(item.id)}">${on ? '✓ 已练习' : '未练习'}</button><button type="button" class="btn alt" data-pte-act="rs-next">下一句</button></div>`;
}
function articleCard(article) {
  const type = typeById(article.type);
  const src = PTELogic.vocabSource(article) === 'text' ? '有原文' : '按题目预测';
  const n = pteState().readPass[article.id] || 0;
  const note = extraNote(article);
  return `<article class="card"><button type="button" class="btn alt" data-pte-act="open" data-id="${esc(article.id)}">${esc(article.title || '未命名')}</button><div class="pte-kicker">题号 ${esc(article.no || article.sourceNumber || '')} · ${esc(type ? type.name : '')} · ${src}${n ? ' · 第 ' + n + ' 遍' : ''}${note ? ' · ' + esc(note) : ''}</div>${passButtons(article.id)}${errSelect(article.id)}</article>`;
}
function viewRead(st) {
  const types = st.readType === '全部' ? readTypes() : readTypes().filter(t => t.id === st.readType);
  const articles = readArticles();
  const filter = `<label class="pte-lab">题型</label><select id="pteReadType" class="sel"><option value="全部" ${st.readType === '全部' ? 'selected' : ''}>全部题型</option>${readTypes().map(t => `<option value="${t.id}" ${st.readType === t.id ? 'selected' : ''}>${esc(t.name)} (${articles.filter(a => a.type === t.id).length})</option>`).join('')}</select>`;
  const decks = vocabBank().length ? `<button type="button" class="btn" data-pte-act="deck" data-scope="all" data-kind="card">抽认全部词汇</button><button type="button" class="btn alt" data-pte-act="deck" data-scope="all" data-kind="quiz">小测全部词汇</button>` : '';
  const groups = types.map(type => {
    const items = articles.filter(a => a.type === type.id).map(articleCard).join('');
    return `<h3 class="pte-group">${esc(type.name)}（${articles.filter(a => a.type === type.id).length}）</h3><p>${esc(type.blurb || '')}</p><details class="pte-ref"><summary>本类信号词和句型</summary>${lessonHtml(type)}</details>${items}`;
  }).join('');
  return `${pteModes(st)}<div class="card"><b>阅读词汇</b><p>${articles.length ? '共 ' + articles.length + ' 篇。' : ''}重点是考试里会再见到的词：英文、中文、例句和搭配。没有原文的词标成按题目预测。信号词和句型按题型讲解。每篇可以勾第一遍或第二遍。</p>${filter}${decks}</div>${groups}`;
}
function viewArticle(st) {
  const article = readArticles().find(a => a.id === PTE_PLAY.readId);
  if (!article) { PTE_PLAY.readId = ''; return viewRead(st); }
  const type = typeById(article.type);
  const bank = (article.vocab || []).length;
  const passage = article.text ? `<div class="card"><h3>原文</h3><p lang="en">${esc(article.text)}</p></div>` : '';
  const decks = bank ? `<button type="button" class="btn" data-pte-act="deck" data-scope="${esc(article.id)}" data-kind="card">抽认这篇的词</button><button type="button" class="btn alt" data-pte-act="deck" data-scope="${esc(article.id)}" data-kind="quiz">小测这篇的词</button>` : '';
  const note = extraNote(article);
  return `${pteModes(st)}<button type="button" class="btn alt" data-pte-act="back">返回篇目</button><div class="card"><div class="pte-kicker">${esc(type ? type.name : '')} · 题号 ${esc(article.no || article.sourceNumber || '')}${note ? ' · ' + esc(note) : ''}</div><h2>${esc(article.title || '')}</h2>${passButtons(article.id)}${errSelect(article.id)}</div>${passage}<div class="card"><h3>词汇</h3>${vocabHtml(article)}${decks}</div><div class="card"><h3>${esc(type ? type.name : '这一类')}的信号词和句型</h3>${lessonHtml(type)}</div>${flowHtml(article.id)}`;
}
function viewDeck(st) {
  const cards = PTE_PLAY.cards || [];
  if (!cards.length) return `${pteModes(st)}<div class="card"><p>还没有可以抽的词。</p><button type="button" class="btn alt" data-pte-act="back">返回</button></div>`;
  if (PTE_PLAY.cardIdx >= cards.length) PTE_PLAY.cardIdx = 0;
  const card = cards[PTE_PLAY.cardIdx];
  const key = card.articleId + '|' + card.w;
  const known = !!st.vocabKnown[key];
  const src = card.source === 'text' ? '文中词汇' : '按题目预测';
  let body;
  if (PTE_PLAY.cardMode === 'quiz') {
    if (!PTE_PLAY.quiz || PTE_PLAY.quiz.w !== card.w) {
      PTE_PLAY.quiz = { w: card.w, opts: PTELogic.quizChoices(card, cards, Math.random) };
      PTE_PLAY.quizPicked = '';
    }
    const picked = PTE_PLAY.quizPicked;
    const opts = PTE_PLAY.quiz.opts.map(opt => {
      let cls = 'opt';
      if (picked) cls += opt.zh === card.zh ? ' ok' : (opt.zh === picked ? ' bad' : '');
      return `<button type="button" class="${cls}" data-pte-act="pick" data-zh="${esc(opt.zh)}" ${picked ? 'disabled' : ''}>${esc(opt.zh)}</button>`;
    }).join('');
    const extra = picked ? `<p lang="en">${esc(card.ex || '')}</p><p>搭配：<span lang="en">${esc(card.col || '')}</span></p><button type="button" class="btn" data-pte-act="card-next">下一张</button>` : '';
    body = `<div class="pte-word" lang="en">${esc(card.w)} <button type="button" class="spk" data-say="${esc(card.w)}">🔊</button></div><p>选中文意思</p>${opts}${extra}`;
  } else {
    const back = PTE_PLAY.flip ? `<div>${esc(card.zh)}</div><div>搭配：<span lang="en">${esc(card.col || '')}</span></div><div lang="en">${esc(card.ex || '')}${card.ex ? ` <button type="button" class="spk" data-say="${esc(card.ex)}">🔊</button>` : ''}</div>` : '<p>先回忆中文意思。</p>';
    body = `<div class="pte-word" lang="en">${esc(card.w)} <button type="button" class="spk" data-say="${esc(card.w)}">🔊</button></div>${back}<button type="button" class="btn" data-pte-act="flip">${PTE_PLAY.flip ? '隐藏' : '显示'}</button><button type="button" class="btn ${known ? 'done' : 'alt'}" data-pte-act="known" data-key="${esc(key)}">${known ? '✓ 认识' : '标记认识'}</button><button type="button" class="btn alt" data-pte-act="card-next">下一张</button>`;
  }
  return `${pteModes(st)}<button type="button" class="btn alt" data-pte-act="back">返回</button><div class="card"><small>${PTE_PLAY.cardIdx + 1}/${cards.length} · ${esc(card.title)} · ${src} · 随机顺序</small>${body}</div>`;
}
function viewDrive(st) {
  const rs = pteRsList();
  const items = pteDriveItems();
  const min = PTELogic.PTE_REP_MIN, max = PTELogic.PTE_REP_MAX;
  const cat = st.set === 'wfd' ? `<label class="pte-lab">WFD 分类</label><select id="pteCat" class="sel">${pteCatOptions(st.wfdCat)}</select>` : '';
  return `${pteModes(st)}<p class="pte-warn">开始后不用操作。正在读的英文会全屏大字显示。</p><label class="pte-lab">播放哪一套</label><select id="pteSet" class="sel"><option value="wfd" ${st.set === 'wfd' ? 'selected' : ''}>152 高频句（${PTE.length}）</option><option value="rs" ${st.set === 'rs' ? 'selected' : ''}>周二 50 句（${rs.length}）</option><option value="both" ${st.set === 'both' ? 'selected' : ''}>两套都播（${PTE.length + rs.length}）</option></select>${cat}<p class="pte-tip">默认只播一套。选「两套都播」才会放进同一轮，并且每轮重新打乱。</p><div class="pte-reps"><span>每句遍数</span><button type="button" id="pteRepDown" data-pte-act="rep" data-dir="-1" ${st.rep <= min ? 'disabled' : ''} aria-label="减少遍数">−</button><b id="pteRepVal">${st.rep}</b><button type="button" id="pteRepUp" data-pte-act="rep" data-dir="1" ${st.rep >= max ? 'disabled' : ''} aria-label="增加遍数">+</button></div><button type="button" class="btn pte-start" data-pte-act="start" ${items.length ? '' : 'disabled'}>开始播放</button><p class="pte-tip">每句至少 ${min} 遍，可以加到 ${max} 遍。每遍之间停约 3 秒。随机顺序，这一轮完了会重新打乱。请保持屏幕亮着。锁屏或切到后台时，语音可能会停。</p>`;
}
function pteView() {
  const st = pteState();
  if (st.mode === 'drive') return viewDrive(st);
  if (st.mode === 'rs') return viewRs(st);
  if (st.mode === 'read') {
    if (PTE_PLAY.deck) return viewDeck(st);
    if (PTE_PLAY.readId) return viewArticle(st);
    return viewRead(st);
  }
  if (st.mode === 'we' && window.pteWeView) return window.pteWeView(st);
  return viewWfd(st);
}
function pteOpen() {
  const root = $('tab-pte');
  if (!root) return;
  const st = pteState();
  root.innerHTML = `<div id="pteRoot" class="${st.mode === 'drive' ? 'pte-dark' : ''}">${pteView()}</div>`;
}
window.pteOpen = pteOpen;
function pteRefresh(keep) {
  const y = keep ? window.scrollY : 0;
  pteOpen();
  window.scrollTo(0, y);
}
function onPteClick(e) {
  const b = e.target.closest('[data-pte-act]');
  if (!b || !$('tab-pte').contains(b)) return;
  const act = b.dataset.pteAct;
  const st = pteState();
  if (act === 'mode') {
    flowStop();
    const m = b.dataset.mode;
    st.mode = (m === 'rs' || m === 'read' || m === 'drive' || m === 'we') ? m : 'wfd';
    if (m !== 'we' && window.pteWeStop) window.pteWeStop();
    if (m !== 'read') PTE_PLAY.deck = null;
    save();
    pteRefresh(false);
    return;
  }
  if (act === 'start') { pteStart(); return; }
  if (act === 'rep') { pteBumpRep(Number(b.dataset.dir) || 0); return; }
  if (act === 'wfd-view') { st.wfdView = b.dataset.view === 'list' ? 'list' : 'dict'; save(); pteRefresh(false); return; }
  if (act === 'rs-view') { st.rsView = b.dataset.view === 'list' ? 'list' : 'practice'; save(); pteRefresh(false); return; }
  if (act === 'reshuffle') { PTE_PLAY.wfdKey = ''; PTE_PLAY.rsKey = ''; PTE_PLAY.revealed = false; PTE_PLAY.heard = ''; pteRefresh(false); return; }
  if (act === 'play-wfd') {
    const order = slotOrder('wfd', pteWfdPool(), st.wfdOrd);
    const item = order[PTE_PLAY.wfdIdx];
    if (item && typeof say === 'function') say(item.text);
    return;
  }
  if (act === 'check') {
    PTE_PLAY.heard = ($('pteHeard') && $('pteHeard').value) || '';
    PTE_PLAY.revealed = true;
    const order = slotOrder('wfd', pteWfdPool(), st.wfdOrd);
    const item = order[PTE_PLAY.wfdIdx];
    if (item) { st.wfdTry[item.id] = PTELogic.diffWords(item.text, PTE_PLAY.heard).score; save(); }
    pteRefresh(true);
    return;
  }
  if (act === 'wfd-next') { advance('wfd'); pteRefresh(true); return; }
  if (act === 'rs-next') { advance('rs'); pteRefresh(true); return; }
  if (act === 'mask') { PTE_PLAY.mask[b.dataset.id] = !PTE_PLAY.mask[b.dataset.id]; pteRefresh(true); return; }
  if (act === 'open') { PTE_PLAY.readId = b.dataset.id; PTE_PLAY.deck = null; pteRefresh(false); return; }
  if (act === 'back') { flowStop(); PTE_PLAY.readId = ''; PTE_PLAY.deck = null; pteRefresh(false); return; }
  if (act === 'flow-go') { flowStart(Number(b.dataset.step)); return; }
  if (act === 'flow-stop') { flowStop(); PTE_PLAY.flowLeft = 0; paintFlow(); return; }
  if (act === 'flow-step' && PTE_PLAY.readId) {
    const note = pteFlow(PTE_PLAY.readId);
    const step = String(b.dataset.step);
    if (note.steps[step]) delete note.steps[step];
    else note.steps[step] = 1;
    save();
    pteRefresh(true);
    return;
  }
  if (act === 'pass') {
    const n = Number(b.dataset.pass);
    const id = b.dataset.id;
    st.readPass[id] = st.readPass[id] === n ? 0 : n;
    if (!st.readPass[id]) delete st.readPass[id];
    save();
    pteRefresh(true);
    return;
  }
  if (act === 'deck') {
    const scope = b.dataset.scope || 'all';
    PTE_PLAY.deck = scope;
    PTE_PLAY.cardMode = b.dataset.kind === 'quiz' ? 'quiz' : 'card';
    PTE_PLAY.cards = PTELogic.shuffle(vocabBank(scope === 'all' ? '' : scope), Math.random);
    PTE_PLAY.cardIdx = 0;
    PTE_PLAY.flip = false;
    PTE_PLAY.quiz = null;
    PTE_PLAY.quizPicked = '';
    pteRefresh(false);
    return;
  }
  if (act === 'flip') { PTE_PLAY.flip = !PTE_PLAY.flip; pteRefresh(true); return; }
  if (act === 'card-next') {
    PTE_PLAY.cardIdx += 1;
    PTE_PLAY.flip = false;
    PTE_PLAY.quiz = null;
    PTE_PLAY.quizPicked = '';
    if (PTE_PLAY.cardIdx >= PTE_PLAY.cards.length) {
      PTE_PLAY.cards = PTELogic.shuffle(PTE_PLAY.cards, Math.random);
      PTE_PLAY.cardIdx = 0;
    }
    pteRefresh(true);
    return;
  }
  if (act === 'pick') { if (!PTE_PLAY.quizPicked) PTE_PLAY.quizPicked = b.dataset.zh; pteRefresh(true); return; }
  if (act === 'known') {
    const key = b.dataset.key;
    if (st.vocabKnown[key]) delete st.vocabKnown[key];
    else st.vocabKnown[key] = 1;
    save();
    pteRefresh(true);
    return;
  }
  const item = pteById(b.dataset.id);
  if (!item) return;
  if (act === 'hear') {
    if (PTE_PLAY.on) pteStop();
    if (typeof say === 'function') say(item.text);
    return;
  }
  if (act === 'mic') { if (typeof rec === 'function') rec(item.text, b.parentElement); return; }
  if (act === 'mem') {
    const bag = b.dataset.bag === 'rs' ? st.rsMem : st.wfdMem;
    if (bag[item.id]) delete bag[item.id];
    else bag[item.id] = 1;
    save();
    pteRefresh(true);
  }
}
function onPteChange(e) {
  const st = pteState();
  if (e.target.id === 'pteCat') { st.wfdCat = e.target.value; PTE_PLAY.wfdKey = ''; save(); pteRefresh(false); }
  else if (e.target.id === 'pteOrd') { st.wfdOrd = e.target.value === 'num' ? 'num' : 'rand'; PTE_PLAY.wfdKey = ''; save(); pteRefresh(false); }
  else if (e.target.id === 'pteSet') { st.set = e.target.value === 'rs' || e.target.value === 'both' ? e.target.value : 'wfd'; save(); pteRefresh(false); }
  else if (e.target.id === 'pteReadType') { st.readType = e.target.value; save(); pteRefresh(false); }
  else if (e.target.dataset && e.target.dataset.err) {
    const id = e.target.dataset.err;
    if (e.target.value) st.readErr[id] = e.target.value;
    else delete st.readErr[id];
    save();
  }
}
$('tab-pte').addEventListener('input', e => {
  if (!e.target.dataset || !e.target.dataset.flow || !PTE_PLAY.readId) return;
  pteFlow(PTE_PLAY.readId)[e.target.dataset.flow] = e.target.value;
  save();
});
$('tab-pte').addEventListener('click', onPteClick);
$('tab-pte').addEventListener('change', onPteChange);
$('pteOvPause').addEventListener('click', () => { if (!PTE_PLAY.on) return; if (PTE_PLAY.paused) pteResume(); else ptePause(); });
$('pteOvStop').addEventListener('click', () => pteStop());
$('pteOvRepDown').addEventListener('click', () => pteBumpRep(-1));
$('pteOvRepUp').addEventListener('click', () => pteBumpRep(1));

