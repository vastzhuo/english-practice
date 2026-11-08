// Write Essay screens. Notes live on S.pte.we and are saved with the rest of ep.
const WE_FIELDS = ['stance', 'arg1', 'arg2', 'c1', 'c2', 'c3', 'opening', 'essay'];

function weBag() { return PTELogic.ensureWe(pteState()); }
function weNote(id) {
  const bag = weBag();
  if (!bag.notes[id] || typeof bag.notes[id] !== 'object' || Array.isArray(bag.notes[id])) bag.notes[id] = {};
  const note = bag.notes[id];
  WE_FIELDS.forEach(k => { if (typeof note[k] !== 'string') note[k] = ''; });
  if (!note.checks || typeof note.checks !== 'object') note.checks = {};
  return note;
}
function weFind(id) { return (PTE_WE.questions || []).find(q => q.id === id); }
function weType(id) { return (PTE_WE.types || []).find(t => t.id === id); }
function weTopic(id) { return (PTE_WE.topics || []).find(t => t.id === id); }
function weToday() { return (typeof TK === 'string' && TK) ? TK : ''; }
function weClock(sec) {
  const n = Math.max(0, sec || 0);
  return String(Math.floor(n / 60)).padStart(2, '0') + ':' + String(n % 60).padStart(2, '0');
}
function weStop() {
  if (PTE_PLAY.weTick) clearInterval(PTE_PLAY.weTick);
  PTE_PLAY.weTick = null;
}
function wePaint() {
  const el = $('pteWeClock');
  if (!el) return;
  el.textContent = weClock(PTE_PLAY.weLeft);
}
function weStart(sec) {
  weStop();
  PTE_PLAY.weLeft = sec;
  wePaint();
  PTE_PLAY.weTick = setInterval(() => {
    PTE_PLAY.weLeft -= 1;
    if (PTE_PLAY.weLeft <= 0) { PTE_PLAY.weLeft = 0; weStop(); }
    wePaint();
  }, 1000);
}
window.pteWeStop = weStop;

function weCountLabel(text) {
  const n = PTELogic.wordCount(text);
  const fit = PTELogic.essayFit(n);
  const word = fit === 'ok' ? '达标' : (fit === 'over' ? '偏多' : '偏少');
  return n + ' 词 · 目标 200–300 · ' + word;
}
function weBox(id, key, label, placeholder, tall) {
  const note = weNote(id);
  return `<label class="pte-lab">${label}</label><textarea class="pte-box" ${tall ? 'style="min-height:180px"' : ''} data-we="${key}" data-qid="${esc(id)}" placeholder="${esc(placeholder)}">${esc(note[key])}</textarea>`;
}
function wePlan(q) {
  return weBox(q.id, 'stance', '1 立场', '一句话：我同意 / 不同意 / 选哪边', false) +
    weBox(q.id, 'arg1', '2 论点一', '关键词即可', false) +
    weBox(q.id, 'arg2', '2 论点二', '关键词即可', false) +
    weBox(q.id, 'c1', '3 词块 1', '一个能套进句子的表达', false) +
    weBox(q.id, 'c2', '3 词块 2', '', false) +
    weBox(q.id, 'c3', '3 词块 3', '', false) +
    weBox(q.id, 'opening', '英文开头句', '先改写题目，再亮立场', false) +
    `<button type="button" class="btn alt" data-we-act="say-open" data-id="${esc(q.id)}">朗读开头句</button>`;
}
function weCopyText(q) {
  const type = weType(q.type);
  const topic = weTopic(q.topic);
  return PTELogic.weCopyPrompt(q, type ? type.name : q.type, topic ? topic.name : q.topic, weNote(q.id));
}
function weExperience(q) {
  const item = (PTE_WE.experiences || []).find(ex => (ex.forQuestions || []).indexOf(q.id) !== -1);
  if (!item) return '';
  return `<div class="card"><b>可套用的个人经历：${esc(item.title)}</b><p>${esc(item.note)}</p><p lang="en">${esc(item.en)}</p><button type="button" class="btn alt" data-say="${esc(item.en)}">🔊 听这段经历</button></div>`;
}
function weHead(st) {
  const btn = (id, label) => `<button type="button" data-we-act="view" data-view="${id}" class="${st.we.view === id ? 'on' : ''}">${label}</button>`;
  return `${pteModes(st)}<div class="pte-mini">${btn('bank', '题目')}${btn('outline', '提纲')}${btn('essay', '成文')}${btn('cards', '句子卡')}${btn('drill', '考前')}</div>`;
}
function weQuestionCard(q, extra) {
  const type = weType(q.type);
  const topic = weTopic(q.topic);
  return `<article class="card"><div class="pte-kicker">题号 ${esc(q.id)} · ${esc(topic ? topic.name : '')} · ${esc(type ? type.name : '')}${q.personal ? ' · 要写个人经历' : ''}</div><p>${esc(q.zh)}</p><p lang="en">${esc(q.en)} <button type="button" class="spk" data-say="${esc(q.en)}">🔊</button></p><p class="pte-tip">${esc(type ? type.tip : '')}</p><p class="pte-tip">用英文说开头：先改写题目，再亮出立场。</p>${wePlan(q)}${weExperience(q)}${extra || ''}<button type="button" class="btn" data-we-act="copy" data-id="${esc(q.id)}">复制题目</button><p class="pte-tip">复制后贴到别的 AI 里，让它帮你背关键句和策略。</p></article>`;
}

function weBank(st) {
  const bag = st.we;
  const topics = PTE_WE.topics;
  const types = PTE_WE.types;
  let list = PTE_WE.questions.slice();
  if (bag.topicFilter !== 'all') list = list.filter(q => q.topic === bag.topicFilter);
  if (bag.typeFilter !== 'all') list = list.filter(q => q.type === bag.typeFilter);
  const topicSel = `<select id="weTopic" class="sel"><option value="all">全部话题</option>${topics.map(t => `<option value="${t.id}" ${bag.topicFilter === t.id ? 'selected' : ''}>${esc(t.name)} (${PTE_WE.questions.filter(q => q.topic === t.id).length})</option>`).join('')}</select>`;
  const typeSel = `<select id="weType" class="sel"><option value="all">全部题型</option>${types.map(t => `<option value="${t.id}" ${bag.typeFilter === t.id ? 'selected' : ''}>${esc(t.name)} (${PTE_WE.questions.filter(q => q.type === t.id).length})</option>`).join('')}</select>`;
  const groups = topics.filter(t => bag.topicFilter === 'all' || bag.topicFilter === t.id).map(topic => {
    const items = list.filter(q => q.topic === topic.id).map(q => {
      const saved = bag.notes[q.id] || {};
      const done = !!(saved.stance && saved.arg1 && saved.arg2);
      return `<button type="button" class="btn ${done ? 'done' : 'alt'}" data-we-act="open" data-id="${esc(q.id)}">${esc(q.id)} ${esc(q.zh)}</button>`;
    }).join('');
    return items ? `<h3 class="pte-group">${esc(topic.name)}</h3>${items}` : '';
  }).join('');
  const open = bag.openId ? weFind(bag.openId) : null;
  return `${weHead(st)}<div class="card"><b>WE 作文 · 35 题</b><p>不要背整篇。每题只记 1 个立场、2 个论点、3 个词块，并练一句英文开头。</p>${topicSel}${typeSel}<p>当前 ${list.length} 题</p></div>${open ? weQuestionCard(open, '<button type="button" class="btn alt" data-we-act="close">收起</button>') : groups}`;
}
function weOutline(st) {
  const bag = st.we;
  const day = weToday();
  if (bag.outlineDay !== day || bag.outlineIds.length !== 2) {
    bag.outlineDay = day;
    bag.outlineIds = PTELogic.shuffle(PTE_WE.questions.map(q => q.id), Math.random).slice(0, 2);
    save();
  }
  const cards = bag.outlineIds.map(id => weFind(id)).filter(Boolean).map(q => weQuestionCard(q, `<button type="button" class="btn" data-we-act="timer" data-sec="300">这题计时 5 分钟</button>`)).join('');
  return `${weHead(st)}<div class="card"><b>每天两道提纲</b><p>今天 ${esc(day || '今天')}。每题 5 分钟：立场、两个论点、一个例子的关键词。不必写全文。</p><p id="pteWeClock" class="pte-clock">${esc(weClock(PTE_PLAY.weLeft))}</p><button type="button" class="btn alt" data-we-act="timer-stop">停止计时</button><button type="button" class="btn alt" data-we-act="new-outline">换今天的两道</button></div>${cards}`;
}
function weEssay(st) {
  const bag = st.we;
  if (!bag.essayId || !weFind(bag.essayId)) bag.essayId = PTE_WE.questions[0].id;
  const q = weFind(bag.essayId);
  const note = weNote(q.id);
  const fit = PTELogic.essayFit(PTELogic.wordCount(note.essay));
  const checks = [['stance', '立场句清楚'], ['connectives', '连接词有没有重复'], ['sv', '主谓一致'], ['plural', '单复数'], ['tense', '时态']];
  const boxes = checks.map(pair => `<button type="button" class="btn ${note.checks[pair[0]] ? 'done' : 'alt'}" data-we-act="check" data-id="${esc(q.id)}" data-check="${pair[0]}">${note.checks[pair[0]] ? '✓ ' : ''}${pair[1]}</button>`).join('');
  const opts = PTE_WE.questions.map(item => `<option value="${item.id}" ${item.id === q.id ? 'selected' : ''}>${item.id} ${esc(item.zh)}</option>`).join('');
  return `${weHead(st)}<div class="card"><b>限时成文 20 分钟</b><p>目标 200–300 词。四段：开头 2–3 句，两个主体段，结尾 1–2 句，结尾不加新论点。</p><select id="weEssay" class="sel">${opts}</select><p id="pteWeClock" class="pte-clock">${esc(weClock(PTE_PLAY.weLeft))}</p><button type="button" class="btn" data-we-act="timer" data-sec="1200">开始 20 分钟</button><button type="button" class="btn alt" data-we-act="timer-stop">停止计时</button></div>${weQuestionCard(q, '')}<div class="card"><p id="pteWeCount" class="pte-count ${fit}">${esc(weCountLabel(note.essay))}</p>${weBox(q.id, 'essay', '全文', 'Write 200 to 300 words.', true)}<h3>写完只查这几项</h3>${boxes}</div>`;
}
function weCards(st) {
  const sets = PTE_WE.types.map(type => {
    const rows = (PTE_WE.cards[type.id] || []).map((card, i) => `<div class="pte-lesson"><b>第 ${i + 1} 套</b><p>${esc(card.note)}</p><p lang="en">${esc(card.intro)} <button type="button" class="spk" data-say="${esc(card.intro)}">🔊</button></p><p lang="en">${esc(card.conclusion)} <button type="button" class="spk" data-say="${esc(card.conclusion)}">🔊</button></p></div>`).join('');
    return `<h3 class="pte-group">${esc(type.name)}</h3><p>${esc(type.tip)}</p>${rows}`;
  }).join('');
  const lives = (PTE_WE.experiences || []).map(item => `<div class="card"><b>${esc(item.title)}</b><p>${esc(item.note)}</p><p lang="en">${esc(item.en)} <button type="button" class="spk" data-say="${esc(item.en)}">🔊</button></p></div>`).join('');
  return `${weHead(st)}<div class="card"><b>WE 句子卡</b><p>每种题型三套开头和结尾，可以互换。方括号里的内容换成这道题的词。不要背整篇范文。</p></div>${lives}${sets}`;
}
function weDrill(st) {
  const bag = st.we;
  if (!bag.drillId || !weFind(bag.drillId)) {
    bag.drillId = PTELogic.shuffle(PTE_WE.questions.map(q => q.id), Math.random)[0];
    save();
  }
  const q = weFind(bag.drillId);
  const note = weNote(q.id);
  const spoken = [note.stance, note.arg1, note.arg2].filter(Boolean).join('. ');
  return `${weHead(st)}<div class="card"><b>考前三天</b><p>看到题目后，3 分钟内口头说出立场和两个论点。</p><p id="pteWeClock" class="pte-clock">${esc(weClock(PTE_PLAY.weLeft))}</p><button type="button" class="btn" data-we-act="timer" data-sec="180">开始 3 分钟</button><button type="button" class="btn alt" data-we-act="timer-stop">停止</button><button type="button" class="btn alt" data-we-act="new-drill">换一道</button></div><div class="card"><div class="pte-kicker">${esc(q.id)} · ${esc((weType(q.type) || {}).name || '')}</div><p>${esc(q.zh)}</p><p lang="en">${esc(q.en)}</p><p><b>立场</b> ${esc(note.stance || '还没写')}</p><p><b>论点一</b> ${esc(note.arg1 || '还没写')}</p><p><b>论点二</b> ${esc(note.arg2 || '还没写')}</p>${spoken ? `<button type="button" class="btn alt" data-say="${esc(spoken)}">🔊 听我记下的三句</button>` : ''}</div>`;
}
function pteWeView(st) {
  weBag();
  if (st.we.view === 'outline') return weOutline(st);
  if (st.we.view === 'essay') return weEssay(st);
  if (st.we.view === 'cards') return weCards(st);
  if (st.we.view === 'drill') return weDrill(st);
  return weBank(st);
}
window.pteWeView = pteWeView;

function onWeClick(e) {
  const b = e.target.closest('[data-we-act]');
  if (!b || !$('tab-pte').contains(b)) return;
  const act = b.dataset.weAct;
  const bag = weBag();
  if (act === 'view') { weStop(); bag.view = b.dataset.view; save(); pteRefresh(false); return; }
  if (act === 'open') { bag.openId = b.dataset.id; bag.view = 'bank'; save(); pteRefresh(true); return; }
  if (act === 'close') { bag.openId = ''; save(); pteRefresh(true); return; }
  if (act === 'timer') { weStart(Number(b.dataset.sec) || 0); return; }
  if (act === 'timer-stop') { weStop(); PTE_PLAY.weLeft = 0; wePaint(); return; }
  if (act === 'new-outline') { bag.outlineDay = weToday(); bag.outlineIds = PTELogic.shuffle(PTE_WE.questions.map(q => q.id), Math.random).slice(0, 2); save(); pteRefresh(false); return; }
  if (act === 'new-drill') { bag.drillId = PTELogic.shuffle(PTE_WE.questions.map(q => q.id), Math.random)[0]; save(); pteRefresh(false); return; }
  if (act === 'say-open') {
    const text = weNote(b.dataset.id).opening;
    if (text && typeof say === 'function') say(text);
    return;
  }
  if (act === 'check') {
    const note = weNote(b.dataset.id);
    note.checks[b.dataset.check] = !note.checks[b.dataset.check];
    save();
    pteRefresh(true);
    return;
  }
  if (act === 'copy') {
    const q = weFind(b.dataset.id);
    if (!q) return;
    const text = weCopyText(q);
    const done = () => { b.textContent = '已复制'; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(() => { window.prompt('复制这段文字', text); });
    else window.prompt('复制这段文字', text);
  }
}
function onWeChange(e) {
  const bag = weBag();
  if (e.target.id === 'weTopic') { bag.topicFilter = e.target.value; save(); pteRefresh(false); }
  else if (e.target.id === 'weType') { bag.typeFilter = e.target.value; save(); pteRefresh(false); }
  else if (e.target.id === 'weEssay') { bag.essayId = e.target.value; save(); pteRefresh(false); }
}
function onWeInput(e) {
  if (!e.target.dataset || !e.target.dataset.we || !e.target.dataset.qid) return;
  weNote(e.target.dataset.qid)[e.target.dataset.we] = e.target.value;
  save();
  if (e.target.dataset.we === 'essay') {
    const el = $('pteWeCount');
    if (el) {
      el.textContent = weCountLabel(e.target.value);
      el.className = 'pte-count ' + PTELogic.essayFit(PTELogic.wordCount(e.target.value));
    }
  }
}
$('tab-pte').addEventListener('click', onWeClick);
$('tab-pte').addEventListener('change', onWeChange);
$('tab-pte').addEventListener('input', onWeInput);
