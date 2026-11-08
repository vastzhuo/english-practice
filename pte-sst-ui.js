// Summarize Spoken Text. Progress is stored on S.pte.sst.
function sstBag() { return PTELogic.ensureSst(pteState()); }
function sstItems() { return (typeof PTE_SST !== 'undefined' && PTE_SST.items) ? PTE_SST.items : []; }
function sstFind(id) { return sstItems().find(item => item.id === id); }
function sstGroupName(id) {
  const group = (PTE_SST.groups || []).find(item => item.id === id);
  return group ? group.name : id;
}
function sstMarked(id) {
  const bag = sstBag();
  if (!bag.newWords[id] || typeof bag.newWords[id] !== 'object') bag.newWords[id] = {};
  return bag.newWords[id];
}
function sstAnswer(id) {
  const bag = sstBag();
  if (typeof bag.answers[id] !== 'string' || !bag.answers[id]) bag.answers[id] = PTELogic.SST_TEMPLATE;
  return bag.answers[id];
}
function sstClock(sec) {
  const n = Math.max(0, sec || 0);
  return String(Math.floor(n / 60)).padStart(2, '0') + ':' + String(n % 60).padStart(2, '0');
}
function sstStop() {
  if (PTE_PLAY.sstTick) clearInterval(PTE_PLAY.sstTick);
  PTE_PLAY.sstTick = null;
}
function sstPaint() {
  const el = $('pteSstClock');
  if (el) el.textContent = sstClock(PTE_PLAY.sstLeft);
}
function sstStart() {
  sstStop();
  PTE_PLAY.sstLeft = 600;
  sstPaint();
  PTE_PLAY.sstTick = setInterval(() => {
    PTE_PLAY.sstLeft -= 1;
    if (PTE_PLAY.sstLeft <= 0) { PTE_PLAY.sstLeft = 0; sstStop(); }
    sstPaint();
  }, 1000);
}
window.pteSstStop = sstStop;
function sstCountLabel(text) {
  const n = PTELogic.wordCount(text);
  const fit = PTELogic.sstFit(n);
  const word = fit === 'ok' ? '达标' : (fit === 'over' ? '偏多' : '偏少');
  const paras = PTELogic.sstParagraphs(text);
  const warn = paras > 1 ? ' · 要写成一段，不要空行分段' : '';
  return n + ' 词 · 目标 50–70 · ' + word + warn;
}
function sstRenderText(text, highlight, marked) {
  const hi = {};
  (highlight || []).forEach(word => { hi[String(word).toLowerCase()] = 1; });
  return String(text || '').split(/([A-Za-z][A-Za-z'-]*)/).map(part => {
    if (!/^[A-Za-z]/.test(part)) return esc(part);
    const low = part.toLowerCase();
    const cls = (hi[low] ? ' sst-key' : '') + (marked && marked[low] ? ' sst-new' : '');
    return `<button type="button" class="sst-w${cls}" data-sst-act="word" data-word="${esc(low)}">${esc(part)}</button>`;
  }).join('');
}
function sstCopyText(item) {
  const keys = (item.keywords || []).map(word => word.w + ' ' + word.zh).join(', ');
  return [
    '请帮我练习 PTE SST（总结口述文本）。',
    '把讲座总结成一段 50 到 70 词的英文，用这个模板：' + PTELogic.SST_TEMPLATE,
    '组别：' + sstGroupName(item.group),
    '题号：' + item.no,
    '标题：' + item.title,
    '关键词：' + keys,
    '原文：',
    item.transcript || ''
  ].join('\n');
}
function sstHead(st) {
  const btn = (id, label) => `<button type="button" data-sst-act="view" data-view="${id}" class="${st.sst.view === id ? 'on' : ''}">${label}</button>`;
  return `${pteModes(st)}<div class="pte-mini">${btn('plan', '计划')}${btn('bank', '词库')}</div>`;
}
function sstPlan(st) {
  const bag = st.sst;
  const days = PTELogic.sstDays(sstItems());
  const recall = sstItems().filter(item => item.group === 'recall');
  const dayCards = days.map((day, index) => {
    const rows = day.map(item => {
      const on = !!bag.done[item.id];
      return `<div class="card"><div class="pte-kicker">第 ${index + 1} 天 · ${esc(sstGroupName(item.group))} · 题号 ${esc(item.no)}</div><button type="button" class="btn alt" data-sst-act="open" data-id="${esc(item.id)}">${esc(item.title)}</button><button type="button" class="btn ${on ? 'done' : 'alt'}" data-sst-act="done" data-id="${esc(item.id)}">${on ? '✓ 已完成' : '未完成'}</button><button type="button" class="btn alt" data-sst-act="copy" data-id="${esc(item.id)}">复制题目</button></div>`;
    }).join('');
    return `<h3 class="pte-group">第 ${index + 1} 天 · 5 篇</h3>${rows}`;
  }).join('');
  const recallCards = recall.map(item => {
    const on = !!bag.done[item.id];
    return `<div class="card"><div class="pte-kicker">回忆答案 · 题号 ${esc(item.no)}</div><button type="button" class="btn alt" data-sst-act="open" data-id="${esc(item.id)}">${esc(item.title)}</button><button type="button" class="btn ${on ? 'done' : 'alt'}" data-sst-act="done" data-id="${esc(item.id)}">${on ? '✓ 已完成' : '未完成'}</button><button type="button" class="btn alt" data-sst-act="copy" data-id="${esc(item.id)}">复制题目</button></div>`;
  }).join('');
  return `${sstHead(st)}<div class="card"><b>SST 总结口述文本</b><p>先练 30 篇有音频的：18 篇考试原音在前，12 篇原文音频在后，每天 5 篇，共 6 天。另外 18 篇是回忆答案，先读原文再写。下面这些是占位题，正式文本和 mp3 稍后替换。</p><p>已完成 ${Object.keys(bag.done).length}/${sstItems().length}</p></div>${dayCards}<h3 class="pte-group">回忆答案 · ${recall.length} 篇</h3>${recallCards}`;
}
function sstItem(st) {
  const item = sstFind(st.sst.openId);
  if (!item) { st.sst.view = 'plan'; return sstPlan(st); }
  const bag = st.sst;
  const recall = item.group === 'recall';
  const answer = typeof bag.answers[item.id] === 'string' && bag.answers[item.id] ? bag.answers[item.id] : PTELogic.SST_TEMPLATE;
  const fit = PTELogic.sstFit(PTELogic.wordCount(answer));
  const submitted = !!bag.submitted[item.id];
  const heard = Number(bag.heard[item.id] || 0);
  const marked = bag.newWords[item.id] || {};
  const highlight = (item.keywords || []).slice(0, 4).map(word => word.w);
  const showText = recall || submitted;
  const audio = item.mp3 ? `<audio controls src="${esc(item.mp3)}"></audio>` : '<p class="pte-tip">音频稍后提供。先用下面两格记下听了几遍。</p>';
  const listen = recall ? '' : `<div class="card"><b>1. 听两遍</b><p>整题 10 分钟。先听两遍，再写。</p>${audio}<button type="button" class="btn ${heard >= 1 ? 'done' : 'alt'}" data-sst-act="heard" data-n="1">第 1 遍</button><button type="button" class="btn ${heard >= 2 ? 'done' : 'alt'}" data-sst-act="heard" data-n="2">第 2 遍</button></div>`;
  const source = showText ? `<div class="card"><b>${recall ? '先读原文' : '原文'}</b><p class="pte-tip">${recall ? '黄底是 4 个关键词。' : '点单词，把它标成生词。'}</p><p lang="en">${sstRenderText(item.transcript, recall ? highlight : [], marked)}</p></div>` : '';
  const keys = (item.keywords || []).map(word => `<span lang="en">${esc(word.w)}</span> ${esc(word.zh)}`).join(' · ');
  return `${sstHead(st)}<div class="card"><button type="button" class="btn alt" data-sst-act="back">返回计划</button><div class="pte-kicker">${esc(sstGroupName(item.group))} · 题号 ${esc(item.no)}${item.placeholder ? ' · 占位' : ''}</div><h2>${esc(item.title)}</h2><p id="pteSstClock" class="pte-clock">${esc(sstClock(PTE_PLAY.sstLeft))}</p><button type="button" class="btn" data-sst-act="timer">开始 10 分钟</button><button type="button" class="btn alt" data-sst-act="timer-stop">停止</button><button type="button" class="btn ${bag.done[item.id] ? 'done' : 'alt'}" data-sst-act="done" data-id="${esc(item.id)}">${bag.done[item.id] ? '✓ 已完成' : '标为完成'}</button><button type="button" class="btn alt" data-sst-act="copy" data-id="${esc(item.id)}">复制题目</button></div>${listen}${recall ? source : ''}<div class="card"><b>${recall ? '2. 读完再写 50–70 词' : '2. 用模板写 50–70 词'}</b><p class="pte-tip">关键词：${keys}</p><p id="pteSstCount" class="pte-count ${fit}">${esc(sstCountLabel(answer))}</p><textarea class="pte-box" data-sst-answer="${esc(item.id)}" style="min-height:140px">${esc(answer)}</textarea><button type="button" class="btn" data-sst-act="submit">${submitted ? '已提交，可再改' : '提交并对照'}</button></div>${!recall && submitted ? source : ''}${recall && submitted ? '<div class="card"><b>3. 对照</b><p>上面是你的总结，下面再看一遍带关键词的原文。</p></div>' + source : ''}`;
}
function sstBank(st) {
  const map = new Map();
  sstItems().forEach(item => (item.keywords || []).forEach(word => { if (!map.has(word.w)) map.set(word.w, Object.assign({ title: item.title }, word)); }));
  const bank = PTELogic.shuffle([...map.values()], Math.random);
  if (!PTE_PLAY.sstCard || !bank.some(word => word.w === PTE_PLAY.sstCard.w)) PTE_PLAY.sstCard = bank[0] || null;
  const card = PTE_PLAY.sstCard;
  if (!card) return `${sstHead(st)}<div class="card"><p>还没有关键词。</p></div>`;
  if (!PTE_PLAY.sstOpts || PTE_PLAY.sstOpts.w !== card.w) {
    PTE_PLAY.sstOpts = { w: card.w, opts: PTELogic.quizChoices(card, bank, Math.random), picked: '' };
  }
  const picked = PTE_PLAY.sstOpts.picked;
  const opts = PTE_PLAY.sstOpts.opts.map(opt => {
    let cls = 'opt';
    if (picked) cls += opt.zh === card.zh ? ' ok' : (opt.zh === picked ? ' bad' : '');
    return `<button type="button" class="${cls}" data-sst-act="pick" data-zh="${esc(opt.zh)}" ${picked ? 'disabled' : ''}>${esc(opt.zh)}</button>`;
  }).join('');
  return `${sstHead(st)}<div class="card"><b>话题词库</b><p>每篇 5 个关键词。顺序是随机的。</p><div class="pte-word" lang="en">${esc(card.w)} <button type="button" class="spk" data-say="${esc(card.w)}">🔊</button></div><p>${esc(card.title)}</p>${opts}${picked ? `<p>${esc(card.zh)}</p><button type="button" class="btn" data-sst-act="next-word">下一词</button>` : ''}<p class="pte-tip">共 ${bank.length} 个不重复的词</p></div>`;
}
function pteSstView(st) {
  sstBag();
  if (st.sst.view === 'item') return sstItem(st);
  if (st.sst.view === 'bank') return sstBank(st);
  return sstPlan(st);
}
window.pteSstView = pteSstView;
function onSstClick(e) {
  const b = e.target.closest('[data-sst-act]');
  if (!b || !$('tab-pte').contains(b)) return;
  const act = b.dataset.sstAct;
  const bag = sstBag();
  if (act === 'view') { sstStop(); bag.view = b.dataset.view === 'bank' ? 'bank' : 'plan'; save(); pteRefresh(false); return; }
  if (act === 'open') { bag.openId = b.dataset.id; bag.view = 'item'; save(); pteRefresh(false); return; }
  if (act === 'back') { sstStop(); bag.view = 'plan'; save(); pteRefresh(false); return; }
  if (act === 'timer') { sstStart(); return; }
  if (act === 'timer-stop') { sstStop(); PTE_PLAY.sstLeft = 0; sstPaint(); return; }
  if (act === 'done') { if (bag.done[b.dataset.id]) delete bag.done[b.dataset.id]; else bag.done[b.dataset.id] = 1; save(); pteRefresh(true); return; }
  if (act === 'heard') { const n = Number(b.dataset.n); if (n === 1 || n === 2) { bag.heard[bag.openId] = Math.max(Number(bag.heard[bag.openId] || 0), n); save(); pteRefresh(true); } return; }
  if (act === 'submit') { bag.submitted[bag.openId] = 1; save(); pteRefresh(true); return; }
  if (act === 'word') {
    const marked = sstMarked(bag.openId);
    if (marked[b.dataset.word]) delete marked[b.dataset.word];
    else marked[b.dataset.word] = 1;
    save();
    pteRefresh(true);
    return;
  }
  if (act === 'copy') {
    const item = sstFind(b.dataset.id || bag.openId);
    if (!item) return;
    const text = sstCopyText(item);
    const done = () => { b.textContent = '已复制'; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done).catch(() => { window.prompt('复制这段文字', text); });
    else window.prompt('复制这段文字', text);
    return;
  }
  if (act === 'pick') { if (PTE_PLAY.sstOpts) PTE_PLAY.sstOpts.picked = b.dataset.zh; pteRefresh(true); return; }
  if (act === 'next-word') { PTE_PLAY.sstCard = null; PTE_PLAY.sstOpts = null; pteRefresh(true); }
}
function onSstInput(e) {
  if (!e.target.dataset || !e.target.dataset.sstAnswer) return;
  const id = e.target.dataset.sstAnswer;
  sstBag().answers[id] = e.target.value;
  save();
  const el = $('pteSstCount');
  if (el) {
    el.textContent = sstCountLabel(e.target.value);
    el.className = 'pte-count ' + PTELogic.sstFit(PTELogic.wordCount(e.target.value));
  }
}
$('tab-pte').addEventListener('click', onSstClick);
$('tab-pte').addEventListener('input', onSstInput);
