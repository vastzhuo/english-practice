// pte-write-eval.js — v49 writing self-check heuristics (SWT / WE). Pure, no DOM.
// No state, timers or network: the UI passes text + prompt + kind and paints the report; every count is local.
(function (root) {
  'use strict';
  const SWT_MIN = 5;
  const SWT_MAX = 75;
  const WE_MIN = 200;
  const WE_MAX = 300;
  const PASS_TIER = 4;

  // Function words never count as prompt keywords (small English stopword set).
  const STOP = {
    a: 1, an: 1, the: 1, i: 1, you: 1, he: 1, she: 1, it: 1, we: 1, they: 1, me: 1, him: 1, her: 1, us: 1, them: 1,
    my: 1, your: 1, his: 1, its: 1, our: 1, their: 1, mine: 1, yours: 1, hers: 1, ours: 1, theirs: 1,
    this: 1, that: 1, these: 1, those: 1, who: 1, whom: 1, whose: 1, which: 1, what: 1, when: 1, where: 1, why: 1, how: 1, whether: 1,
    is: 1, are: 1, was: 1, were: 1, be: 1, been: 1, being: 1, am: 1, do: 1, does: 1, did: 1, done: 1, doing: 1,
    have: 1, has: 1, had: 1, having: 1, will: 1, would: 1, shall: 1, should: 1, can: 1, could: 1, may: 1, might: 1, must: 1, ought: 1,
    and: 1, but: 1, or: 1, nor: 1, for: 1, so: 1, yet: 1, if: 1, then: 1, than: 1, because: 1, as: 1,
    while: 1, since: 1, though: 1, although: 1, unless: 1, until: 1, in: 1, on: 1, at: 1, to: 1, of: 1, by: 1,
    with: 1, from: 1, about: 1, into: 1, onto: 1, upon: 1, over: 1, under: 1, above: 1, below: 1, between: 1, among: 1,
    through: 1, during: 1, without: 1, within: 1, against: 1, along: 1, across: 1, around: 1, behind: 1, beyond: 1, despite: 1,
    except: 1, inside: 1, outside: 1, toward: 1, towards: 1, per: 1, via: 1, off: 1, out: 1, up: 1, down: 1, not: 1, no: 1, yes: 1,
    very: 1, too: 1, also: 1, just: 1, only: 1, even: 1, still: 1, already: 1, again: 1, ever: 1, never: 1, always: 1, often: 1,
    sometimes: 1, usually: 1, rarely: 1, soon: 1, later: 1, now: 1, here: 1, there: 1, today: 1, tomorrow: 1, yesterday: 1, more: 1,
    most: 1, much: 1, many: 1, few: 1, little: 1, less: 1, least: 1, some: 1, any: 1, all: 1, both: 1, each: 1, every: 1, either: 1,
    neither: 1, other: 1, others: 1, another: 1, such: 1, same: 1, own: 1, quite: 1, rather: 1, almost: 1, enough: 1, perhaps: 1,
    maybe: 1, one: 1, two: 1, three: 1, first: 1, second: 1, last: 1
  };
  // Essay-frame words: they say how to answer, not what the question is about.
  const FRAME = ['opinion', 'agree', 'disagree', 'extent', 'discuss', 'view', 'reference', 'experience', 'give', 'provide', 'explain', 'consider'];
  const FRAME_SET = {};
  FRAME.forEach(word => { FRAME_SET[word] = 1; });
  const CONNECTIVES = ['and', 'but', 'so', 'because', 'although', 'though', 'while', 'however', 'therefore', 'moreover',
    'furthermore', 'nevertheless', 'thus', 'hence', 'consequently', 'besides', 'also', 'yet', 'since', 'unless', 'despite',
    'whereas', 'meanwhile', 'finally', 'firstly', 'secondly', 'for example', 'for instance', 'in addition',
    'on the other hand', 'in contrast', 'as a result', 'in conclusion'];

  // A WE opening paragraph must signal the writer's position somewhere in it.
  const STANCE = ['i believe', 'i think', 'i agree', 'i disagree', 'in my opinion', 'in my view', 'from my perspective', 'to my mind'];

  const STRUCTURE_IDS = ['single', 'sentences', 'stance', 'connective', 'short'];
  const LANGUAGE_IDS = ['comma', 'repeat', 'contraction', 'long'];

  function asText(value) {
    if (typeof value === 'string') return value;
    if (value == null) return '';
    try { return String(value); } catch (err) { return ''; }
  }

  function round1(value) { return Math.round(Number(value) * 10) / 10; }

  function reEsc(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  // Sentences keep their words but lose the terminal punctuation run.
  function sentences(text) {
    const s = asText(text);
    if (!s.trim()) return [];
    const parts = s.split(/[.!?。！？]+["'”’」』）)\]]*/);
    const out = [];
    for (let i = 0; i < parts.length; i++) {
      const line = parts[i].replace(/\s+/g, ' ').trim();
      if (line) out.push(line);
    }
    return out;
  }

  // Lowercase word tokens: hyphens split, outer punctuation trimmed, apostrophes kept.
  function words(text) {
    const s = asText(text).toLowerCase().replace(/[-‐‑–—]/g, ' ');
    if (!s.trim()) return [];
    const parts = s.split(/\s+/);
    const out = [];
    for (let i = 0; i < parts.length; i++) {
      const token = parts[i].replace(/^[^a-z0-9']+/, '').replace(/[^a-z0-9']+$/, '');
      if (token) out.push(token);
    }
    return out;
  }

  function paragraphsOf(text) {
    const s = asText(text);
    if (!s.trim()) return [];
    return s.split(/\n\s*\n/).map(block => block.trim()).filter(Boolean);
  }

  function stats(text) {
    const s = asText(text);
    const tokens = words(s);
    const lines = sentences(s);
    let longest = 0;
    for (let i = 0; i < lines.length; i++) {
      const count = words(lines[i]).length;
      if (count > longest) longest = count;
    }
    return {
      words: tokens.length,
      sentences: lines.length,
      avg: lines.length ? round1(tokens.length / lines.length) : 0,
      longest: longest,
      commas: (s.match(/,/g) || []).length,
      paragraphs: paragraphsOf(s).length
    };
  }

  // Prompt keywords: unique content words in first-appearance order, capped.
  function keywords(prompt, max) {
    const limit = Number(max);
    const cap = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : 12;
    const tokens = words(prompt);
    const seen = {};
    const out = [];
    for (let i = 0; i < tokens.length && out.length < cap; i++) {
      const token = tokens[i];
      if (token.length < 4) continue;
      if (STOP[token] || FRAME_SET[token]) continue;
      if (seen[token]) continue;
      seen[token] = 1;
      out.push(token);
    }
    return out;
  }

  // How many prompt keywords the answer actually uses (plural tolerance only).
  function coverage(text, prompt) {
    const keys = keywords(prompt);
    const bag = {};
    const tokens = words(text);
    for (let i = 0; i < tokens.length; i++) bag[tokens[i]] = 1;
    const hit = [];
    const missed = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let ok = !!bag[key] || !!bag[key + 's'];
      if (!ok && /s$/.test(key) && key.length > 1) ok = !!bag[key.slice(0, -1)];
      if (ok) hit.push(key); else missed.push(key);
    }
    return { total: keys.length, hit: hit, missed: missed, percent: keys.length ? Math.round(100 * hit.length / keys.length) : 0 };
  }

  // Whole-word / whole-phrase connective count; list keeps first-use order.
  function connectives(text) {
    const s = asText(text);
    let count = 0;
    const found = [];
    for (let i = 0; i < CONNECTIVES.length; i++) {
      const phrase = CONNECTIVES[i];
      const body = phrase.split(' ').map(reEsc).join('\\s+');
      const all = s.match(new RegExp('\\b' + body + '\\b', 'gi'));
      if (!all || !all.length) continue;
      count += all.length;
      const at = s.search(new RegExp('\\b' + body + '\\b', 'i'));
      found.push({ phrase: phrase, at: at < 0 ? s.length : at });
    }
    found.sort((a, b) => a.at - b.at);
    return { count: count, list: found.map(row => row.phrase) };
  }

  // Stable issue order: words, single, sentences, stance, connective, short, long,
  // comma, repeat, contraction. Each issue can lower one of the three tiers.
  function issues(text, kind) {
    const k = kind === 'swt' ? 'swt' : 'we';
    const s = asText(text);
    const st = stats(s);
    const n = st.words;
    const lines = sentences(s);
    const sn = lines.length;
    const out = [];
    const add = (id, label, hint) => { out.push({ id: id, label: label, hint: hint }); };
    const fit = k === 'swt' ? (n >= SWT_MIN && n <= SWT_MAX) : (n >= WE_MIN && n <= WE_MAX);
    if (!fit) {
      if (k === 'swt') add('words', '字数：' + n + ' 词，SWT 要求 5–75', '先按字数删或补：SWT 只写一句 5–75 词。');
      else add('words', '字数：' + n + ' 词，WE 要求 200–300', 'WE 补到 200–300 词：每个主体段加一个例子。');
    }
    if (k === 'swt' && n > 0 && sn !== 1) add('single', 'SWT 只能一句话，现在 ' + sn + ' 句', '用 although / because / which 把要点串成一句话。');
    if (k === 'we' && n > 0 && sn < 4) add('sentences', '句子偏少：' + sn + ' 句', '写四段：开头亮立场，两个主体段各一个论点，结尾一句收住。');
    if (k === 'we' && n > 0) {
      const blocks = paragraphsOf(s);
      const head = blocks.length > 1 ? blocks[0] : (lines[0] || '');
      const lower = head.toLowerCase();
      const marked = STANCE.some(marker => lower.indexOf(marker) !== -1);
      if (!marked) add('stance', '首段没有立场句', '第一段直接写：In my opinion, ... / I believe that ...');
    }
    if (connectives(s).count === 0 && n > 0) add('connective', '没有连接词', '至少加一个：However, ... / Therefore, ... / For example, ...');
    if (k === 'we' && sn >= 2 && st.avg < 8) add('short', '句子偏碎：平均 ' + st.avg + ' 词', '用 because / and 把两个短句连成一句。');
    if (k === 'we' && st.longest > 45) add('long', '有长句：最长 ' + st.longest + ' 词', '拆成两句：一句观点，一句解释。');
    if (st.commas === 0 && n >= 40) add('comma', '全篇没有逗号', '把两个短句合成一句，中间用逗号。');
    const tokens = words(s);
    const bag = {};
    for (let i = 0; i < tokens.length; i++) bag[tokens[i]] = (bag[tokens[i]] || 0) + 1;
    const seen = {};
    let topWord = '';
    let topCount = 0;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (seen[token]) continue;
      seen[token] = 1;
      if (token.length < 4 || STOP[token] || FRAME_SET[token]) continue;
      if (bag[token] > topCount) { topWord = token; topCount = bag[token]; }
    }
    if (topWord && topCount >= Math.max(5, Math.ceil(n * 0.06))) {
      add('repeat', '重复词偏多：' + topWord + ' 出现 ' + topCount + ' 次', '换一个同义表达，或用 it / they 指代。');
    }
    if (k === 'we' && n > 0 && /(?:n't|'re|'ve|'ll|'d|'m)\b/i.test(s)) {
      add('contraction', '用了缩写', "考试作文不用缩写：don't 写成 do not。");
    }
    return out;
  }

  // Three 1-5 tiers; overall is the weakest tier, so one bad axis caps the mark.
  // The content buckets are deliberately gentle across 50%: an SWT summary that
  // paraphrases the prompt usually lands near 55-65% word overlap, and only a
  // summary that leaves out half the prompt should fall to the "needs work" band.
  function grade(report, kind) {
    const r = report && typeof report === 'object' ? report : {};
    const k = kind === 'swt' || kind === 'we' ? kind : (r.kind === 'swt' ? 'swt' : 'we');
    const n = (r.stats && Number(r.stats.words)) || 0;
    const percent = (r.coverage && Number(r.coverage.percent)) || 0;
    const fit = k === 'swt' ? (n >= SWT_MIN && n <= SWT_MAX) : (n >= WE_MIN && n <= WE_MAX);
    let content = 2;
    if (fit) {
      content = percent >= 80 ? 5 : percent >= 50 ? 4 : percent >= 30 ? 3 : percent >= 15 ? 2 : 1;
    }
    const ids = {};
    (Array.isArray(r.issues) ? r.issues : []).forEach(row => { if (row && row.id) ids[row.id] = 1; });
    const tier = list => {
      let value = 5;
      for (let i = 0; i < list.length; i++) if (ids[list[i]]) value -= 1;
      return value < 1 ? 1 : value;
    };
    const structure = tier(STRUCTURE_IDS);
    const language = tier(LANGUAGE_IDS);
    return { content: content, structure: structure, language: language, overall: Math.min(content, structure, language) };
  }

  function report(text, prompt, kind) {
    const k = kind === 'swt' ? 'swt' : 'we';
    const s = asText(text);
    const st = stats(s);
    const cov = coverage(s, prompt);
    const conn = connectives(s);
    const list = issues(s, k);
    const tiers = grade({ kind: k, stats: st, coverage: cov, issues: list }, k);
    const labelLine = list.slice(0, 2).map(row => row.label).join('；');
    return {
      kind: k,
      stats: st,
      coverage: cov,
      connectives: conn,
      issues: list,
      tiers: tiers,
      trigger: tiers.overall <= 3,
      why: '内容 ' + tiers.content + '/5 · 结构 ' + tiers.structure + '/5 · 语言 ' + tiers.language + '/5' + (list.length ? '；' + labelLine : ''),
      fix: list.length ? list[0].hint : '三档都在 4 分以上，保持关键词和连接词，再练下一题。'
    };
  }

  root.PTEWriteEval = {
    SWT_MIN: SWT_MIN, SWT_MAX: SWT_MAX, WE_MIN: WE_MIN, WE_MAX: WE_MAX, PASS_TIER: PASS_TIER,
    STOP: STOP, FRAME: FRAME, CONNECTIVES: CONNECTIVES,
    sentences: sentences, words: words, stats: stats, keywords: keywords, coverage: coverage,
    connectives: connectives, issues: issues, grade: grade, report: report
  };
})(this);
