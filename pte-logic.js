// Pure PTE helpers. No DOM. Spoken English is always the main `text` field.
(function (root) {
  const CAT_ORDER = ['学术场景', '科学技术', '社会经济', '职业与发展', '环境与规划'];
  const PTE_PAUSE_MS = 3000;
  const PTE_REP_MIN = 5;
  const PTE_REP_MAX = 20;

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
    const list = items || [];
    return list.filter(item => item.group === 'exam').concat(list.filter(item => item.group === 'text'));
  }
  function sstDays(items) {
    const audio = sstAudioItems(items);
    const days = [];
    for (let i = 0; i < audio.length; i += 5) days.push(audio.slice(i, i + 5));
    return days;
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
    if (st.mode !== 'rs' && st.mode !== 'read' && st.mode !== 'drive' && st.mode !== 'we' && st.mode !== 'sst') st.mode = 'wfd';
    ensureWe(st);
    ensureSst(st);
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
    ensureSst: ensureSst
  };
})(this);
