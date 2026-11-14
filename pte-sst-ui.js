// Summarize Spoken Text. Progress stays on S.pte.sst. No in-app chat.
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
  return n + ' 词 · 目标 50–70 · ' + word + (paras > 1 ? ' · 要写成一段，不要空行分段' : '');
}
function sstRenderText(text, marked) {
  return String(text || '').split(/([A-Za-z][A-Za-z'-]*)/).map(part => {
    if (!/^[A-Za-z]/.test(part)) return esc(part);
    const low = part.toLowerCase();
    const cls = marked && marked[low] ? ' sst-new' : '';
    return `<button type="button" class="sst-w${cls}" data-sst-act="word" data-word="${esc(low)}">${esc(part)}</button>`;
  }).join('');
}
function sstNotices(item) {
  const bits = [];
  if (item.group === 'model' || item.audio_content_type === 'model_answer') bits.push('这段音频是范文答案的朗读，不是讲座。');
  if (item.title_content_mismatch && item.content_note) bits.push(item.content_note);
  if (item.is_recalled_version && item.recall_note) bits.push('回忆版本：' + item.recall_note);
  if (item.source) bits.push('来源：' + item.source);
  if (item.audio_kind) bits.push(item.audio_kind);
  if (item.transcript_kind) bits.push(item.transcript_kind);
  return bits.map(text => `<p class="pte-warn">${esc(text)}</p>`).join('') + (item.match_note ? `<details class="pte-ref"><summary>材料说明</summary><p>${esc(item.match_note)}</p></details>` : '');
}
function sstCopyText(item) {
  return [
    '请帮我练习 PTE SST（总结口述文本）。',
    '把内容总结成一段 50 到 70 词的英文，用这个模板：' + PTELogic.SST_TEMPLATE,
    '组别：' + sstGroupName(item.group),
    '题号：' + item.no,
    '标题：' + item.title,
    item.source ? '来源：' + item.source : '',
    item.audio_kind ? '音频：' + item.audio_kind : '',
    item.transcript ? '讲座原文：\n' + item.transcript : '讲座原文：没有',
    item.model_answer ? '范文答案（不是讲座原文）：\n' + item.model_answer : '',
    item.model_answer_zh ? '范文中文：\n' + item.model_answer_zh : ''
  ].filter(Boolean).join('\n');
}
function sstHead(st) {
  const btn = (id, label) => `<button type="button" data-sst-act="view" data-view="${id}" class="${st.sst.view === id ? 'on' : ''}">${label}</button>`;
  return `${pteModes(st)}<div class="pte-mini">${btn('plan', '计划')}${btn('bank', '词库')}</div>`;
}
function sstRow(item, bag) {
  const on = !!bag.done[item.id];
  return `<div class="card"><div class="pte-kicker">${esc(sstGroupName(item.group))} · 题号 ${esc(item.no)}</div><button type="button" class="btn alt" data-sst-act="open" data-id="${esc(item.id)}">${esc(item.title)}</button><button type="button" class="btn ${on ? 'done' : 'alt'}" data-sst-act="done" data-id="${esc(item.id)}">${on ? '✓ 已完成' : '未完成'}</button><button type="button" class="btn alt" data-sst-act="copy" data-id="${esc(item.id)}">复制题目</button></div>`;
}
function sstPlan(st) {
  const bag = st.sst;
  const days = PTELogic.sstDays(sstItems());
  const models = sstItems().filter(item => item.group === 'model');
  const dayCards = days.map((day, index) => `<h3 class="pte-group">第 ${index + 1} 天 · ${day.length} 篇</h3>` + day.map(item => sstRow(item, bag)).join('')).join('');
  const modelCards = models.map(item => sstRow(item, bag)).join('');
  return `${sstHead(st)}<div class="card"><b>SST 总结口述文本</b><p>先练有音频的题，每天 5 篇。公开练习音频在前，然后是讲稿合成和参考音频。范文朗读单独放在最后：那是答案被读出来，不是讲座。来源说明写在每题上，不能当成已核验的考场原音。</p><p>已完成 ${Object.keys(bag.done).length}/${sstItems().length}</p></div>${dayCards}<h3 class="pte-group">范文朗读 · ${models.length} 篇</h3>${modelCards}`;
}
function sstItem(st) {
  const item = sstFind(st.sst.openId);
  if (!item) { st.sst.view = 'plan'; return sstPlan(st); }
  const bag = st.sst;
  const recall = item.group === 'model' || item.is_recalled_version;
  const answer = typeof bag.answers[item.id] === 'string' && bag.answers[item.id] ? bag.answers[item.id] : PTELogic.SST_TEMPLATE;
  const fit = PTELogic.sstFit(PTELogic.wordCount(answer));
  const submitted = !!bag.submitted[item.id];
  const heard = Number(bag.heard[item.id] || 0);
  const marked = bag.newWords[item.id] || {};
  const lecture = item.transcript || '';
  const model = item.model_answer || '';
  const readText = item.group === 'model' ? model : lecture;
  const showRead = recall || submitted;
  const audio = item.mp3 ? `<audio controls preload="none" src="${esc(item.mp3)}" style="width:100%"></audio>` : '<p class="pte-tip">这题没有音频文件。</p>';
  const listen = `<div class="card"><b>${recall ? '音频' : '1. 听两遍'}</b><p>${recall ? '有音频就可以听。文字在下面。' : '整题 10 分钟。先听两遍，再写。'}</p>${audio}<p class="pte-tip">录音直接走网络，不经过语音合成。录音也不响时：已安装的 PWA 先刷新页面让新版本接管，仍不行就换 Chrome/Edge 或检查网络。</p><button type="button" class="btn ${heard >= 1 ? 'done' : 'alt'}" data-sst-act="heard" data-n="1">第 1 遍</button><button type="button" class="btn ${heard >= 2 ? 'done' : 'alt'}" data-sst-act="heard" data-n="2">第 2 遍</button></div>`;
  const readBlock = (title, text) => text ? `<div class="card"><b>${title}</b><p class="pte-tip">点单词，把它标成生词。</p><p lang="en">${sstRenderText(text, marked)}</p></div>` : `<div class="card"><p>没有讲座原文。</p></div>`;
  const modelBlock = model && item.group !== 'model' ? `<div class="card"><b>范文答案（不是讲座原文）</b>${item.model_answer_zh ? `<p>${esc(item.model_answer_zh)}</p>` : ''}<p lang="en">${sstRenderText(model, marked)}</p></div>` : (item.group === 'model' && item.model_answer_zh ? `<div class="card"><b>范文中文</b><p>${esc(item.model_answer_zh)}</p></div>` : '');
  return `${sstHead(st)}<div class="card"><button type="button" class="btn alt" data-sst-act="back">返回计划</button><div class="pte-kicker">${esc(sstGroupName(item.group))} · 题号 ${esc(item.no)}</div><h2>${esc(item.title)}</h2>${sstNotices(item)}<p id="pteSstClock" class="pte-clock">${esc(sstClock(PTE_PLAY.sstLeft))}</p><button type="button" class="btn" data-sst-act="timer">开始 10 分钟</button><button type="button" class="btn alt" data-sst-act="timer-stop">停止</button><button type="button" class="btn ${bag.done[item.id] ? 'done' : 'alt'}" data-sst-act="done" data-id="${esc(item.id)}">${bag.done[item.id] ? '✓ 已完成' : '标为完成'}</button><button type="button" class="btn alt" data-sst-act="copy" data-id="${esc(item.id)}">复制题目</button></div>${listen}${showRead ? readBlock(item.group === 'model' ? '范文朗读的文字（不是讲座）' : '原文', readText) : ''}<div class="card"><b>${recall ? '写 50–70 词，再对照' : '2. 用模板写 50–70 词'}</b><p id="pteSstCount" class="pte-count ${fit}">${esc(sstCountLabel(answer))}</p><textarea class="pte-box" data-sst-answer="${esc(item.id)}" style="min-height:140px">${esc(answer)}</textarea><button type="button" class="btn" data-sst-act="submit">${submitted ? '已提交，可再改' : '提交并对照'}</button></div>${submitted && !recall ? readBlock('原文', lecture) : ''}${submitted ? modelBlock : ''}`;
}
function sstBank(st) {
  const bag = st.sst;
  const map = new Map();
  Object.keys(bag.newWords || {}).forEach(id => {
    const item = sstFind(id);
    Object.keys(bag.newWords[id] || {}).forEach(word => {
      if (!map.has(word)) map.set(word, { w: word, title: item ? item.title : id });
    });
  });
  const bank = PTELogic.shuffle([...map.values()], Math.random);
  if (!bank.length) return `${sstHead(st)}<div class="card"><b>话题词库</b><p>在原文里点过的生词会出现在这里，随机抽查。还没有生词。</p></div>`;
  if (!PTE_PLAY.sstCard || !bank.some(word => word.w === PTE_PLAY.sstCard.w)) PTE_PLAY.sstCard = bank[0];
  const card = PTE_PLAY.sstCard;
  const show = !!PTE_PLAY.sstShow;
  return `${sstHead(st)}<div class="card"><b>话题词库</b><p>随机顺序。先认这个词，再看它来自哪一篇。</p><div class="pte-word" lang="en">${esc(card.w)} <button type="button" class="spk" data-say="${esc(card.w)}">🔊</button></div>${show ? `<p>${esc(card.title)}</p>` : '<p>先回忆这篇讲什么。</p>'}<button type="button" class="btn" data-sst-act="reveal-word">${show ? '隐藏' : '显示篇名'}</button><button type="button" class="btn alt" data-sst-act="next-word">下一词</button><p class="pte-tip">共 ${bank.length} 个生词</p></div>`;
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
  if (act === 'heard') { const n = Number(b.dataset.n); if ((n === 1 || n === 2) && bag.openId) { bag.heard[bag.openId] = Math.max(Number(bag.heard[bag.openId] || 0), n); save(); pteRefresh(true); } return; }
  if (act === 'submit') { if (bag.openId) { bag.submitted[bag.openId] = 1; save(); pteRefresh(true); } return; }
  if (act === 'word' && bag.openId) {
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
  if (act === 'reveal-word') { PTE_PLAY.sstShow = !PTE_PLAY.sstShow; pteRefresh(true); return; }
  if (act === 'next-word') { PTE_PLAY.sstCard = null; PTE_PLAY.sstShow = false; pteRefresh(true); }
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
