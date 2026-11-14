// pte-sgd.js — SGD (Summarize Group Discussion) structure drill.
//
// The app had no SGD practice before this file. Each item gives three speakers'
// positions in a short brief, a one-sentence template with three blanks, and the
// same three-row structure self-check the speaking modules use. The briefs and
// templates are self-made practice material (see pte-templates.js); no exam audio,
// transcript or course wording is used.
//
// Pure helpers are exported as PTESgd for test/pte.test.mjs; pte-app.js renders
// this module with pteSgdView() and routes its buttons through PTESgd.click().
function sgdData() {
  return (typeof PTE_TEMPLATES !== 'undefined' && PTE_TEMPLATES && PTE_TEMPLATES.sgd) ? PTE_TEMPLATES.sgd : { items: [], self: [], tips: [] };
}
function sgdItems() {
  const items = sgdData().items;
  return Array.isArray(items) ? items.filter(item => item && item.id && item.template) : [];
}
function sgdSelfRows() {
  const rows = sgdData().self;
  return Array.isArray(rows) ? rows : [];
}
function ensureSgd(st) {
  if (!st || typeof st !== 'object') return null;
  if (!st.sgd || typeof st.sgd !== 'object' || Array.isArray(st.sgd)) st.sgd = {};
  const bag = st.sgd;
  if (!bag.answers || typeof bag.answers !== 'object' || Array.isArray(bag.answers)) bag.answers = {};
  if (!bag.self || typeof bag.self !== 'object' || Array.isArray(bag.self)) bag.self = {};
  if (!bag.done || typeof bag.done !== 'object' || Array.isArray(bag.done)) bag.done = {};
  if (typeof bag.focus !== 'string') bag.focus = '';
  const ids = sgdItems().map(item => item.id);
  if (!Array.isArray(bag.order) || !bag.order.length) bag.order = ids.slice();
  Object.keys(bag.answers).forEach(id => {
    if (ids.indexOf(id) < 0) delete bag.answers[id];
    else if (!bag.answers[id] || typeof bag.answers[id] !== 'object' || Array.isArray(bag.answers[id])) bag.answers[id] = {};
  });
  Object.keys(bag.self).forEach(id => {
    if (ids.indexOf(id) < 0) delete bag.self[id];
    else if (!bag.self[id] || typeof bag.self[id] !== 'object' || Array.isArray(bag.self[id])) bag.self[id] = {};
  });
  Object.keys(bag.done).forEach(id => { if (ids.indexOf(id) < 0) delete bag.done[id]; });
  const idx = Math.round(Number(bag.idx));
  if (!(idx >= 0 && idx < ids.length)) bag.idx = 0;
  else bag.idx = idx;
  return bag;
}
function sgdCurrent(st) {
  const bag = ensureSgd(st);
  if (!bag) return null;
  const items = sgdItems();
  if (!items.length) return null;
  if (bag.focus) {
    const hit = items.find(item => item.id === bag.focus);
    if (hit) return hit;
  }
  return items[bag.idx] || null;
}
function sgdSelf(st, id) {
  const bag = ensureSgd(st);
  if (!bag) return {};
  if (!bag.self[id]) bag.self[id] = {};
  return bag.self[id];
}
function sgdAnswer(st, id) {
  const bag = ensureSgd(st);
  if (!bag) return {};
  if (!bag.answers[id]) bag.answers[id] = {};
  return bag.answers[id];
}
function sgdBlankText(item) {
  const label = (item && item.blanks) || [];
  return label.map(function (text, i) { return (i + 1) + '. ' + text; }).join(' · ');
}
// A worst tier is a mistake; three filled tiers with no worst tier is a good
// answer. "Not yet assessed" never counts, same rule as RA / SWT.
function sgdMark(st, id, rows, current, value) {
  if (typeof pteMark !== 'function') return;
  if (value === 1) { pteMark('sgd', id, true); return; }
  if (rows.length && rows.every(row => (current[row.k] || 0) >= 2)) pteMark('sgd', id, false);
}
function sgdClick(act, el) {
  if (typeof pteState !== 'function' || typeof pteRefresh !== 'function') return;
  const st = pteState();
  const bag = ensureSgd(st);
  if (!bag) return;
  const item = sgdCurrent(st);
  if (!item) return;
  if (act === 'sgd-self') {
    const key = el && el.dataset ? el.dataset.k : '';
    const value = Number(el && el.dataset ? el.dataset.v : 0);
    const rows = sgdSelfRows();
    if (!key || !rows.some(row => row.k === key)) return;
    if (!(value >= 1 && value <= 3)) return;
    const current = sgdSelf(st, item.id);
    if (current[key] === value) delete current[key];
    else current[key] = value;
    sgdMark(st, item.id, rows, sgdSelf(st, item.id), value);
    if (typeof save === 'function') save();
    pteRefresh(true);
    return;
  }
  if (act === 'sgd-done') {
    if (bag.done[item.id]) delete bag.done[item.id];
    else bag.done[item.id] = 1;
    if (typeof save === 'function') save();
    pteRefresh(true);
    return;
  }
  if (act === 'sgd-next') {
    bag.focus = '';
    bag.idx = (bag.idx + 1) % sgdItems().length;
    if (typeof save === 'function') save();
    pteRefresh(false);
    return;
  }
  if (act === 'sgd-reset') {
    bag.answers[item.id] = {};
    if (typeof save === 'function') save();
    pteRefresh(true);
  }
}

// --- Rendering --------------------------------------------------------------
function sgdTemplateHtml(item, answers) {
  const parts = (typeof PTETemplate !== 'undefined' && PTETemplate) ? PTETemplate.parts(item.template) : [{ t: String(item.template || '') }];
  return parts.map(function (seg) {
    if (!seg.b) return esc(seg.t);
    const n = Number(seg.b);
    const label = (item.blanks || [])[n - 1] || ('空 ' + n);
    const value = (answers && answers[seg.b]) || '';
    return '<input class="sgd-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" data-sgd-blank="' + esc(seg.b) + '" data-sgd-id="' + esc(item.id) + '" aria-label="' + esc(label) + '" placeholder="' + esc(label) + '" value="' + esc(value) + '">';
  }).join('');
}
function sgdBriefHtml(item) {
  const rows = (item.brief || []).map(line => `<li>${esc(line)}</li>`).join('');
  return `<ul class="sgd-brief">${rows}</ul>`;
}
function sgdSelfHtml(st, item) {
  const current = sgdSelf(st, item.id);
  return sgdSelfRows().map(function (row) {
    const btns = (row.opts || []).map(function (text, i) {
      return `<button type="button" class="btn ${current[row.k] === i + 1 ? 'done' : 'alt'}" data-sgd-act="sgd-self" data-k="${esc(row.k)}" data-v="${i + 1}">${esc(text)}</button>`;
    }).join('');
    return `<div class="pte-lab">${esc(row.label)}</div><div class="pte-mini">${btns}</div>`;
  }).join('');
}
function sgdFilled(answers) {
  let n = 0;
  Object.keys(answers || {}).forEach(key => { if (String(answers[key] || '').trim()) n += 1; });
  return n;
}
function pteSgdView(st) {
  const bag = ensureSgd(st);
  const items = sgdItems();
  const note = sgdData().note || '';
  const tips = (sgdData().tips || []).map(text => `<li>${esc(text)}</li>`).join('');
  const assessed = bag ? Object.keys(bag.self).filter(id => Object.keys(bag.self[id] || {}).length).length : 0;
  const head = `${pteModes(st)}<div class="card"><b>SGD 小组讨论总结 · Summarize Group Discussion</b><p>${items.length} 组练习。每组给三个发言人的观点，用一句话模版填三个空，再按结构自评。这是结构训练，不是考场原题。</p><p>已自评 ${assessed}/${items.length}</p><p class="pte-tip">${esc(note)}</p></div>`;
  const item = sgdCurrent(st);
  if (!item) return head + '<div class="card"><p>还没有 SGD 练习。</p></div>';
  const answers = sgdAnswer(st, item.id);
  const focusNote = (typeof pteFocusNote === 'function' && bag.focus) ? pteFocusNote('sgd') : '';
  const filled = sgdFilled(answers);
  const done = !!(bag.done[item.id]);
  return `${head}${focusNote}<div class="card"><div class="pte-kicker">第 ${bag.idx + 1}/${items.length} · ${esc(item.zh)}</div>${sgdBriefHtml(item)}<p class="pte-tip">把三个空填成一句话：先概括话题，再分别放两个发言人的立场。</p>${tips ? `<ul class="pte-tip">${tips}</ul>` : ''}</div><div class="card"><b>SGD 一句话模版</b><p id="sgdCount" class="pte-tip">已填 ${filled}/3 空 · ${esc(sgdBlankText(item))}</p><p class="sgd-line" lang="en">${sgdTemplateHtml(item, answers)}</p><button type="button" class="btn alt" data-sgd-act="sgd-reset">清空重写</button><button type="button" class="btn ${done ? 'done' : 'alt'}" data-sgd-act="sgd-done">${done ? '✓ 已完成' : '标为完成'}</button></div><div class="card"><b>结构自评</b><p class="pte-tip">只看三件事：开场有没有点明话题，两个立场有没有都覆盖，结尾有没有收住。</p>${sgdSelfHtml(st, item)}<button type="button" class="btn" data-sgd-act="sgd-next">下一组</button></div>`;
}

const PTESgd = {
  items: sgdItems,
  selfRows: sgdSelfRows,
  ensure: ensureSgd,
  current: sgdCurrent,
  mark: sgdMark,
  focus: function (st, id) {
    const bag = ensureSgd(st);
    if (!bag) return;
    const key = String(id == null ? '' : id);
    bag.focus = sgdItems().some(item => item.id === key) ? key : '';
    if (bag.focus) bag.idx = sgdItems().findIndex(item => item.id === key);
  },
  click: sgdClick
};

if (typeof window !== 'undefined') {
  window.PTESgd = PTESgd;
  window.pteSgdView = pteSgdView;
  // Filling a blank saves quietly; the counter updates without a re-render so the
  // caret never jumps while typing.
  document.addEventListener('input', function (e) {
    const target = e && e.target;
    if (!target || !target.dataset || !target.dataset.sgdBlank) return;
    if (typeof pteState !== 'function') return;
    const st = pteState();
    const bag = ensureSgd(st);
    if (!bag) return;
    const id = target.dataset.sgdId;
    if (!id) return;
    const answers = sgdAnswer(st, id);
    answers[target.dataset.sgdBlank] = target.value;
    if (typeof save === 'function') save();
    const el = typeof $ === 'function' ? $('sgdCount') : null;
    if (el) el.textContent = '已填 ' + sgdFilled(answers) + '/3 空';
  });
}
