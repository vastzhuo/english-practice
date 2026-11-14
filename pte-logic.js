// Pure PTE helpers. No DOM. Spoken English is always the main `text` field.
(function (root) {
  const CAT_ORDER = ['学术场景', '科学技术', '社会经济', '职业与发展', '环境与规划'];
  const PTE_PAUSE_MS = 3000;
  const PTE_REP_MIN = 5;
  const PTE_REP_MAX = 20;
  // Read Aloud / Describe Image / Summarize Written Text use the real exam lengths.
  const RA_PREP_SEC = 35;
  const RA_READ_SEC = 40;
  const DI_PREP_SEC = 25;
  const DI_SPEAK_SEC = 40;
  const SWT_SEC = 600;
  const SWT_MIN = 5;
  const SWT_MAX = 75;
  const SP_SELF_MIN = 1;
  const SP_SELF_MAX = 3;
  const CHART_W = 340;
  const CHART_H = 210;
  const CHART_COLORS = ['#4f46e5', '#0ea5e9', '#16a34a', '#f59e0b', '#ef4444', '#8b5cf6'];

  function clampRep(n) {
    const x = Math.round(Number(n));
    if (!Number.isFinite(x) || x < PTE_REP_MIN) return PTE_REP_MIN;
    if (x > PTE_REP_MAX) return PTE_REP_MAX;
    return x;
  }

  function fontPx(text) {
    const n = String(text || '').length;
    if (n <= 40) return 68;
    if (n <= 70) return 56;
    return 48;
  }

  function speakText(item) {
    if (item && typeof item === 'object') return String(item.text || '');
    return String(item || '');
  }

  function shuffle(list, rand) {
    const a = list.slice();
    const rnd = typeof rand === 'function' ? rand : Math.random;
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function nextOrder(list, rand, prevId) {
    const order = shuffle(list, rand);
    if (prevId != null && order.length > 1 && order[0] && order[0].id === prevId) {
      const tmp = order[0];
      order[0] = order[1];
      order[1] = tmp;
    }
    return order;
  }

  function pool(items, cat) {
    const list = Array.isArray(items) ? items : [];
    if (!cat || cat === '全部') return list.slice();
    return list.filter(item => item && item.category === cat);
  }

  function categories(items) {
    const present = new Set((items || []).map(item => item.category));
    const ordered = CAT_ORDER.filter(cat => present.has(cat));
    present.forEach(cat => { if (!ordered.includes(cat)) ordered.push(cat); });
    return ordered;
  }

  function byNumber(list) {
    return list.slice().sort((a, b) => (a.sourceNumber - b.sourceNumber) || String(a.id).localeCompare(String(b.id)));
  }

  function pauseValue(opts) {
    const raw = typeof opts.pauseMs === 'function' ? opts.pauseMs() : opts.pauseMs;
    const n = Number(raw);
    return Number.isFinite(n) && n >= 0 ? n : PTE_PAUSE_MS;
  }

  // One pass speaks every sentence `reps` times (at least 5), pausing after each
  // read, then reshuffles and continues until stopped() or the pool is empty.
  async function runLoop(opts) {
    const rand = opts.rand || Math.random;
    let prevId = null;
    let first = true;
    while (!opts.stopped()) {
      const items = opts.items() || [];
      if (!items.length) return;
      const order = nextOrder(items, rand, prevId);
      prevId = order.length ? order[order.length - 1].id : null;
      for (let i = 0; i < order.length; i++) {
        if (opts.stopped()) return;
        const item = order[i];
        let r = 0;
        while (!opts.stopped()) {
          const reps = clampRep(opts.reps());
          if (r >= reps) break;
          r += 1;
          if (opts.show) opts.show(item, { rep: r, reps: reps, index: i, total: order.length, phase: 'speak' });
          let why = 'error';
          try { why = await opts.speak(speakText(item), { first: first, rep: r, item: item }); }
          catch (err) { why = 'error'; }
          first = false;
          if (opts.stopped() || why === 'stopped') return;
          const liveReps = clampRep(opts.reps());
          if (opts.show) opts.show(item, { rep: r, reps: liveReps, index: i, total: order.length, phase: 'gap' });
          const waited = await opts.wait(pauseValue(opts));
          if (waited === 'stopped' || opts.stopped()) return;
        }
      }
    }
  }

  const READ_ERRORS = ['词不认识', '句子结构没读懂', '逻辑关系判断错', '时间不够'];

  function splitKeep(s) {
    return String(s || '').match(/[A-Za-z0-9']+/g) || [];
  }

  function diffWords(expected, heard) {
    const Araw = splitKeep(expected);
    const Braw = splitKeep(heard);
    const A = Araw.map(w => w.toLowerCase());
    const B = Braw.map(w => w.toLowerCase());
    const n = A.length, m = B.length;
    const d = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) d[i][j] = A[i] === B[j] ? d[i + 1][j + 1] + 1 : Math.max(d[i + 1][j], d[i][j + 1]);
    }
    const out = [];
    let i = 0, j = 0, ok = 0;
    while (i < n || j < m) {
      if (i < n && j < m && A[i] === B[j]) { out.push({ t: 'ok', w: Araw[i] }); ok++; i++; j++; }
      else if (j < m && (i >= n || d[i][Math.min(j + 1, m)] >= d[Math.min(i + 1, n)][j])) {
        if (i < n && (j + 1 >= m || d[i + 1][j + 1] >= d[i][j + 1])) { out.push({ t: 'bad', w: Araw[i], heard: Braw[j] }); i++; j++; }
        else { out.push({ t: 'extra', w: Braw[j] }); j++; }
      } else { out.push({ t: 'miss', w: Araw[i] }); i++; }
    }
    return { tokens: out, score: n ? Math.round(100 * ok / n) : 0 };
  }

  function tagSet(list, kind) {
    return (list || []).map(item => Object.assign({}, item, { driveSet: kind }));
  }
  function drivePool(set, wfd, rs) {
    if (set === 'both') return tagSet(wfd, 'wfd').concat(tagSet(rs, 'rs'));
    if (set === 'rs') return tagSet(rs, 'rs');
    return tagSet(wfd, 'wfd');
  }

  function vocabSource(article) {
    return article && typeof article.text === 'string' && article.text.trim() ? 'text' : 'predicted';
  }

  function parseRsLines(text) {
    return String(text || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => {
      const parts = line.split(/\||｜/);
      if (parts.length < 3) return null;
      const seq = parts[0].trim();
      const q = parts[1].trim();
      const sentence = parts.slice(2).join('|').trim();
      if (!sentence) return null;
      return { id: 'rs-' + q, seq: Number(seq) || seq, sourceNumber: q, text: sentence };
    }).filter(Boolean);
  }

  function asRs(list) {
    return (list || []).map((item, i) => {
      const seq = item.seq != null ? item.seq : i + 1;
      const q = item.sourceNumber != null ? item.sourceNumber : (item.q != null ? item.q : seq);
      const text = String(item.text || '').trim();
      return { id: String(item.id != null ? item.id : ('rs-' + q)), sourceNumber: q, seq: seq, text: text };
    }).filter(item => item.text);
  }

  function quizChoices(card, bank, rand) {
    const pool = shuffle((bank || []).filter(item => item && item.zh && item.zh !== card.zh), rand);
    const others = [];
    const seen = new Set([card.zh]);
    for (let i = 0; i < pool.length && others.length < 3; i++) {
      if (seen.has(pool[i].zh)) continue;
      seen.add(pool[i].zh);
      others.push(pool[i]);
    }
    return shuffle([card].concat(others), rand);
  }

  function wordCount(text) {
    const s = String(text || '').trim();
    if (!s) return 0;
    return s.split(/\s+/).filter(Boolean).length;
  }
  function essayFit(n) {
    if (n >= 200 && n <= 300) return 'ok';
    if (n > 300) return 'over';
    return 'short';
  }
  const SST_TEMPLATE = 'The lecture mainly discusses … It points out that … In addition, … Finally, it concludes that …';
  function sstParagraphs(text) {
    return String(text || '').trim().split(/\n\s*\n/).map(s => s.trim()).filter(Boolean).length;
  }
  function sstFit(n) {
    if (n >= 50 && n <= 70) return 'ok';
    if (n > 70) return 'over';
    return 'short';
  }
  function sstAudioItems(items) {
    const rank = { public: 0, tts: 1, reference: 2 };
    return (items || []).filter(item => item.group !== 'model').slice().sort((a, b) => {
      const d = (rank[a.group] == null ? 9 : rank[a.group]) - (rank[b.group] == null ? 9 : rank[b.group]);
      if (d) return d;
      return String(a.no).localeCompare(String(b.no));
    });
  }
  function sstDays(items) {
    const audio = sstAudioItems(items);
    const days = [];
    for (let i = 0; i < audio.length; i += 5) days.push(audio.slice(i, i + 5));
    return days;
  }
  // --- Read Aloud / Describe Image / Summarize Written Text -------------------

  // Exam-style countdown order. Unknown values restart from the beginning.
  const RA_PHASES = ['idle', 'prep', 'read', 'listen', 'assess'];
  const DI_PHASES = ['idle', 'prep', 'speak', 'review'];
  function phaseNext(list, phase) {
    const i = list.indexOf(phase);
    if (i < 0 || i === list.length - 1) return list[0];
    return list[i + 1];
  }
  function raNext(phase) { return phaseNext(RA_PHASES, phase); }
  function diNext(phase) { return phaseNext(DI_PHASES, phase); }

  function swtFit(n) {
    const x = Math.round(Number(n) || 0);
    if (x > SWT_MAX) return 'over';
    if (x < SWT_MIN) return 'short';
    return 'ok';
  }

  // First ~`minWords` words of real text, cut on sentence boundaries.
  function readSpan(text, minWords) {
    const target = Number(minWords) > 0 ? Math.round(Number(minWords)) : 60;
    const clean = String(text || '').replace(/\s+/g, ' ').trim();
    if (!clean) return { text: '', words: 0 };
    const sentences = clean.match(/[^.!?]+[.!?]+["”’']?|[^.!?]+$/g) || [clean];
    const out = [];
    let words = 0;
    for (let i = 0; i < sentences.length; i++) {
      const line = sentences[i].trim();
      if (!line) continue;
      const count = line.split(/\s+/).filter(Boolean).length;
      if (words && words + count > target + 18) break;
      out.push(line);
      words += count;
      if (words >= target) break;
    }
    return { text: out.join(' '), words: words };
  }

  function mapOf(bag, key) {
    if (!bag[key] || typeof bag[key] !== 'object' || Array.isArray(bag[key])) bag[key] = {};
    return bag[key];
  }
  function tidySelf(map) {
    Object.keys(map).forEach(id => {
      const row = map[id];
      if (!row || typeof row !== 'object' || Array.isArray(row)) { delete map[id]; return; }
      Object.keys(row).forEach(key => {
        const n = Math.round(Number(row[key]));
        if (n >= SP_SELF_MIN && n <= SP_SELF_MAX) row[key] = n;
        else delete row[key];
      });
    });
  }
  function ensureSpeak(st) {
    if (!st.ra || typeof st.ra !== 'object' || Array.isArray(st.ra)) st.ra = {};
    if (!st.di || typeof st.di !== 'object' || Array.isArray(st.di)) st.di = {};
    if (!st.swt || typeof st.swt !== 'object' || Array.isArray(st.swt)) st.swt = {};
    [st.ra, st.di, st.swt].forEach(bag => {
      mapOf(bag, 'done');
      tidySelf(mapOf(bag, 'self'));
      if (bag.ord !== 'num' && bag.ord !== 'rand') bag.ord = 'rand';
    });
    mapOf(st.swt, 'answers');
    mapOf(st.swt, 'submitted');
    Object.keys(st.swt.answers).forEach(id => {
      if (typeof st.swt.answers[id] !== 'string') delete st.swt.answers[id];
    });
    return st;
  }

  // --- Inline SVG charts (no image files, works offline) ----------------------

  function svgEsc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function num(n) {
    const x = Math.round(Number(n) * 10) / 10;
    return Number.isFinite(x) ? String(x) : '0';
  }
  function svgText(x, y, text, attrs) {
    return '<text x="' + num(x) + '" y="' + num(y) + '" ' + (attrs || '') + '>' + svgEsc(text) + '</text>';
  }
  function plotBox() {
    const left = 36, right = 10, top = 16, bottom = 44;
    const w = CHART_W - left - right;
    const h = CHART_H - top - bottom;
    return { left: left, right: right, top: top, bottom: bottom, w: w, h: h, baseY: top + h };
  }
  function svgBar(c) {
    const box = plotBox();
    const values = (c.values || []).map(Number);
    const labels = c.labels || [];
    const max = Math.max.apply(null, values.concat([1]));
    const slot = values.length ? box.w / values.length : box.w;
    const barW = Math.max(6, slot * 0.6);
    let out = '';
    [0, 0.5, 1].forEach(frac => {
      const y = box.baseY - box.h * frac;
      out += '<line x1="' + num(box.left) + '" y1="' + num(y) + '" x2="' + num(box.left + box.w) + '" y2="' + num(y) + '" stroke="#e0e7ff" stroke-width="1"/>';
      out += svgText(box.left - 5, y + 3, num(max * frac), 'font-size="8" fill="#475569" text-anchor="end"');
    });
    values.forEach((v, i) => {
      const h = max ? (v / max) * box.h : 0;
      const x = box.left + i * slot + (slot - barW) / 2;
      const y = box.baseY - h;
      out += '<rect x="' + num(x) + '" y="' + num(y) + '" width="' + num(barW) + '" height="' + num(h) + '" fill="' + CHART_COLORS[i % CHART_COLORS.length] + '"/>';
      out += svgText(x + barW / 2, y - 4, num(v), 'font-size="9" font-weight="700" fill="#1e1b4b" text-anchor="middle"');
      out += svgText(x + barW / 2, box.baseY + 14, labels[i] || '', 'font-size="9" fill="#475569" text-anchor="middle"');
    });
    out += '<line x1="' + num(box.left) + '" y1="' + num(box.baseY) + '" x2="' + num(box.left + box.w) + '" y2="' + num(box.baseY) + '" stroke="#94a3b8" stroke-width="1"/>';
    return out;
  }
  function svgLine(c) {
    const box = plotBox();
    const values = (c.values || []).map(Number);
    const labels = c.labels || [];
    if (!values.length) return '';
    const lo = Math.min.apply(null, values);
    const hi = Math.max.apply(null, values);
    const span = hi - lo || 1;
    const pad = box.h * 0.12;
    const stepX = values.length > 1 ? box.w / (values.length - 1) : 0;
    const points = values.map((v, i) => {
      const x = box.left + (values.length > 1 ? i * stepX : box.w / 2);
      const y = box.baseY - pad - ((v - lo) / span) * (box.h - pad * 2);
      return [x, y];
    });
    let out = '';
    [0, 1].forEach(frac => {
      const y = box.baseY - pad - frac * (box.h - pad * 2);
      out += '<line x1="' + num(box.left) + '" y1="' + num(y) + '" x2="' + num(box.left + box.w) + '" y2="' + num(y) + '" stroke="#e0e7ff" stroke-width="1"/>';
      out += svgText(box.left - 5, y + 3, num(lo + (hi - lo) * frac), 'font-size="8" fill="#475569" text-anchor="end"');
    });
    out += '<polyline fill="none" stroke="#4f46e5" stroke-width="2" points="' + points.map(p => num(p[0]) + ',' + num(p[1])).join(' ') + '"/>';
    points.forEach((p, i) => {
      out += '<circle cx="' + num(p[0]) + '" cy="' + num(p[1]) + '" r="3" fill="#4f46e5"/>';
      out += svgText(p[0], p[1] - 6, num(values[i]), 'font-size="8" font-weight="700" fill="#1e1b4b" text-anchor="middle"');
      out += svgText(p[0], box.baseY + 14, labels[i] || '', 'font-size="9" fill="#475569" text-anchor="middle"');
    });
    out += '<line x1="' + num(box.left) + '" y1="' + num(box.baseY) + '" x2="' + num(box.left + box.w) + '" y2="' + num(box.baseY) + '" stroke="#94a3b8" stroke-width="1"/>';
    return out;
  }
  function svgPie(c) {
    const cx = 104, cy = 110, r = 74;
    const values = (c.values || []).map(Number);
    const labels = c.labels || [];
    const total = values.reduce((a, b) => a + b, 0) || 1;
    let angle = -Math.PI / 2;
    let out = '';
    values.forEach((v, i) => {
      const next = angle + (v / total) * Math.PI * 2;
      const large = next - angle > Math.PI ? 1 : 0;
      const x0 = cx + r * Math.cos(angle), y0 = cy + r * Math.sin(angle);
      const x1 = cx + r * Math.cos(next), y1 = cy + r * Math.sin(next);
      out += '<path d="M ' + num(cx) + ' ' + num(cy) + ' L ' + num(x0) + ' ' + num(y0) + ' A ' + num(r) + ' ' + num(r) + ' 0 ' + large + ' 1 ' + num(x1) + ' ' + num(y1) + ' Z" fill="' + CHART_COLORS[i % CHART_COLORS.length] + '" stroke="#fff" stroke-width="1"/>';
      const mid = angle + (next - angle) / 2;
      const pct = Math.round(100 * v / total);
      if (pct >= 8) out += svgText(cx + Math.cos(mid) * r * 0.62, cy + Math.sin(mid) * r * 0.62 + 3, pct + '%', 'font-size="9" font-weight="700" fill="#fff" text-anchor="middle"');
      angle = next;
    });
    labels.forEach((label, i) => {
      const y = 34 + i * 26;
      out += '<rect x="196" y="' + num(y - 9) + '" width="11" height="11" fill="' + CHART_COLORS[i % CHART_COLORS.length] + '"/>';
      out += svgText(212, y, label, 'font-size="9" fill="#1e1b4b"');
    });
    return out;
  }
  function svgTable(c) {
    const left = 12, top = 20, rowH = 26;
    const cols = c.cols || [];
    const rows = c.rows || [];
    const all = [cols].concat(rows);
    if (!cols.length) return '';
    const colW = (CHART_W - left * 2) / cols.length;
    let out = '';
    all.forEach((row, r) => {
      const y = top + r * rowH;
      const fill = r === 0 ? '#eef2ff' : (r % 2 ? '#f8fafc' : '#ffffff');
      out += '<rect x="' + num(left) + '" y="' + num(y) + '" width="' + num(colW * cols.length) + '" height="' + num(rowH) + '" fill="' + fill + '" stroke="#e0e7ff" stroke-width="1"/>';
      (Array.isArray(row) ? row : []).forEach((cell, i) => {
        const weight = r === 0 ? ' font-weight="700"' : '';
        const attrs = 'font-size="9" fill="#1e1b4b"' + weight + (i === 0 ? ' text-anchor="start"' : ' text-anchor="middle"');
        const x = i === 0 ? left + 6 : left + colW * i + colW / 2;
        out += svgText(x, y + 17, cell, attrs);
      });
    });
    return out;
  }
  function svgFlow(c) {
    const nodes = c.nodes || [];
    const boxW = 200, boxH = 26;
    const x = (CHART_W - boxW) / 2;
    const midX = CHART_W / 2;
    let out = '';
    nodes.forEach((node, i) => {
      const y = 8 + i * 40;
      const first = i === 0, last = i === nodes.length - 1;
      const fill = first ? '#4f46e5' : (last ? '#16a34a' : '#eef2ff');
      const ink = first || last ? '#ffffff' : '#1e1b4b';
      out += '<rect x="' + num(x) + '" y="' + num(y) + '" width="' + num(boxW) + '" height="' + num(boxH) + '" rx="8" fill="' + fill + '" stroke="#4f46e5" stroke-width="1"/>';
      out += svgText(midX, y + 17, node, 'font-size="10" font-weight="700" fill="' + ink + '" text-anchor="middle"');
      if (!last) {
        out += '<line x1="' + num(midX) + '" y1="' + num(y + boxH) + '" x2="' + num(midX) + '" y2="' + num(y + 36) + '" stroke="#94a3b8" stroke-width="2"/>';
        out += '<polygon points="' + num(midX) + ',' + num(y + 40) + ' ' + num(midX - 5) + ',' + num(y + 32) + ' ' + num(midX + 5) + ',' + num(y + 32) + '" fill="#94a3b8"/>';
      }
    });
    return out;
  }
  function svgChart(chart) {
    const c = chart || {};
    let body = '';
    if (c.type === 'bar') body = svgBar(c);
    else if (c.type === 'line') body = svgLine(c);
    else if (c.type === 'pie') body = svgPie(c);
    else if (c.type === 'table') body = svgTable(c);
    else if (c.type === 'flow') body = svgFlow(c);
    else return '';
    const label = String(c.title || '') + ' · ' + String(c.type || 'chart');
    return '<svg viewBox="0 0 ' + CHART_W + ' ' + CHART_H + '" width="100%" role="img" aria-label="' + svgEsc(label) + '" style="display:block;width:100%;height:auto;background:#fff;border-radius:12px">' + body + '</svg>';
  }

  function ensureSst(st) {
    if (!st.sst || typeof st.sst !== 'object' || Array.isArray(st.sst)) st.sst = {};
    const s = st.sst;
    if (!s.done || typeof s.done !== 'object' || Array.isArray(s.done)) s.done = {};
    if (!s.answers || typeof s.answers !== 'object' || Array.isArray(s.answers)) s.answers = {};
    if (!s.heard || typeof s.heard !== 'object' || Array.isArray(s.heard)) s.heard = {};
    if (!s.newWords || typeof s.newWords !== 'object' || Array.isArray(s.newWords)) s.newWords = {};
    if (!s.submitted || typeof s.submitted !== 'object' || Array.isArray(s.submitted)) s.submitted = {};
    if (s.view !== 'item' && s.view !== 'bank') s.view = 'plan';
    if (typeof s.openId !== 'string') s.openId = '';
    return s;
  }
  function ensureWe(st) {
    if (!st.we || typeof st.we !== 'object' || Array.isArray(st.we)) st.we = {};
    const we = st.we;
    if (!we.notes || typeof we.notes !== 'object' || Array.isArray(we.notes)) we.notes = {};
    if (typeof we.outlineDay !== 'string') we.outlineDay = '';
    if (!Array.isArray(we.outlineIds)) we.outlineIds = [];
    if (typeof we.essayId !== 'string') we.essayId = '';
    if (typeof we.drillId !== 'string') we.drillId = '';
    if (we.view !== 'outline' && we.view !== 'essay' && we.view !== 'cards' && we.view !== 'drill') we.view = 'bank';
    if (typeof we.topicFilter !== 'string') we.topicFilter = 'all';
    if (typeof we.typeFilter !== 'string') we.typeFilter = 'all';
    delete we.api;
    delete we.ollama;
    delete we.chatId;
    Object.keys(we.notes).forEach(id => { if (we.notes[id] && we.notes[id].chat) delete we.notes[id].chat; });
    return we;
  }
  function weCopyPrompt(q, typeName, topicName, note) {
    const saved = note || {};
    return [
      '请帮我记住这道 PTE Write Essay 的关键句和答题策略，方便我背下来。',
      '请写出可替换的英文开头句、结尾句和两个论点句，并考我复述。',
      '题型：' + (typeName || ''),
      '话题：' + (topicName || ''),
      '题目：' + ((q && q.zh) || ''),
      'English: ' + ((q && q.en) || ''),
      '我的立场：' + (saved.stance || ''),
      '论点1：' + (saved.arg1 || ''),
      '论点2：' + (saved.arg2 || ''),
      '词块：' + [saved.c1, saved.c2, saved.c3].filter(Boolean).join(' | '),
      '英文开头：' + (saved.opening || '')
    ].join('\n');
  }
  function ensureState(S, cats) {
    if (!S.pte || typeof S.pte !== 'object' || Array.isArray(S.pte)) S.pte = {};
    const st = S.pte;
    if (!st.wfdMem || typeof st.wfdMem !== 'object' || Array.isArray(st.wfdMem)) st.wfdMem = {};
    if (!st.rsMem || typeof st.rsMem !== 'object' || Array.isArray(st.rsMem)) st.rsMem = {};
    if (!st.wfdTry || typeof st.wfdTry !== 'object' || Array.isArray(st.wfdTry)) st.wfdTry = {};
    if (!st.readPass || typeof st.readPass !== 'object' || Array.isArray(st.readPass)) st.readPass = {};
    if (!st.readErr || typeof st.readErr !== 'object' || Array.isArray(st.readErr)) st.readErr = {};
    if (!st.vocabKnown || typeof st.vocabKnown !== 'object' || Array.isArray(st.vocabKnown)) st.vocabKnown = {};
    if (!st.readFlow || typeof st.readFlow !== 'object' || Array.isArray(st.readFlow)) st.readFlow = {};
    if (st.mem && typeof st.mem === 'object' && !Array.isArray(st.mem)) {
      Object.keys(st.mem).forEach(k => { if (st.wfdMem[k] == null && st.mem[k]) st.wfdMem[k] = 1; });
    }
    const known = Array.isArray(cats) ? cats : [];
    if (typeof st.wfdCat !== 'string') st.wfdCat = typeof st.cat === 'string' ? st.cat : '全部';
    if (st.wfdCat !== '全部' && known.indexOf(st.wfdCat) === -1) st.wfdCat = '全部';
    if (st.wfdOrd !== 'num' && st.wfdOrd !== 'rand') st.wfdOrd = st.ord === 'num' ? 'num' : 'rand';
    if (st.set !== 'rs' && st.set !== 'both') st.set = 'wfd';
    st.rep = clampRep(st.rep == null ? PTE_REP_MIN : st.rep);
    if (st.wfdView !== 'list') st.wfdView = 'dict';
    if (st.rsView !== 'list') st.rsView = 'practice';
    if (st.mode !== 'rs' && st.mode !== 'read' && st.mode !== 'drive' && st.mode !== 'we' && st.mode !== 'sst' && st.mode !== 'ra' && st.mode !== 'di' && st.mode !== 'swt') st.mode = 'wfd';
    ensureWe(st);
    ensureSst(st);
    ensureSpeak(st);
    if (st.readType !== 'double' && st.readType !== 'single' && st.readType !== 'parallel' && st.readType !== 'none') st.readType = '全部';
    Object.keys(st.readPass).forEach(k => {
      const n = Number(st.readPass[k]);
      if (n === 1 || n === 2) st.readPass[k] = n;
      else delete st.readPass[k];
    });
    Object.keys(st.readErr).forEach(k => { if (READ_ERRORS.indexOf(st.readErr[k]) === -1) delete st.readErr[k]; });
    return st;
  }

  root.PTELogic = {
    CAT_ORDER: CAT_ORDER,
    PTE_PAUSE_MS: PTE_PAUSE_MS,
    PTE_REP_MIN: PTE_REP_MIN,
    PTE_REP_MAX: PTE_REP_MAX,
    READ_ERRORS: READ_ERRORS,
    clampRep: clampRep,
    fontPx: fontPx,
    speakText: speakText,
    shuffle: shuffle,
    nextOrder: nextOrder,
    pool: pool,
    categories: categories,
    byNumber: byNumber,
    runLoop: runLoop,
    ensureState: ensureState,
    diffWords: diffWords,
    drivePool: drivePool,
    vocabSource: vocabSource,
    parseRsLines: parseRsLines,
    asRs: asRs,
    quizChoices: quizChoices,
    wordCount: wordCount,
    essayFit: essayFit,
    ensureWe: ensureWe,
    weCopyPrompt: weCopyPrompt,
    SST_TEMPLATE: SST_TEMPLATE,
    sstParagraphs: sstParagraphs,
    sstFit: sstFit,
    sstAudioItems: sstAudioItems,
    sstDays: sstDays,
    ensureSst: ensureSst,
    RA_PREP_SEC: RA_PREP_SEC,
    RA_READ_SEC: RA_READ_SEC,
    DI_PREP_SEC: DI_PREP_SEC,
    DI_SPEAK_SEC: DI_SPEAK_SEC,
    SWT_SEC: SWT_SEC,
    SWT_MIN: SWT_MIN,
    SWT_MAX: SWT_MAX,
    SP_SELF_MIN: SP_SELF_MIN,
    SP_SELF_MAX: SP_SELF_MAX,
    RA_PHASES: RA_PHASES,
    DI_PHASES: DI_PHASES,
    raNext: raNext,
    diNext: diNext,
    swtFit: swtFit,
    readSpan: readSpan,
    ensureSpeak: ensureSpeak,
    svgChart: svgChart,
    svgEsc: svgEsc
  };
})(this);
