// pte-speak-eval.js — v49 RA / RS transcription comparison. Pure, no DOM.
// Self-contained on purpose: the alignment walk mirrors PTELogic.diffWords
// (pte-logic.js) but nothing is imported, so this file loads on its own.
(function (root) {
  'use strict';
  const PASS_TIER = 4;
  const WORD_RE = /[A-Za-z0-9']+/g;

  // Lowercase word tokens: any character outside a-z/0-9/apostrophe is a space.
  function tokens(text) {
    if (typeof text !== 'string') return [];
    return text.toLowerCase().replace(/[^a-z0-9']+/g, ' ').split(' ').filter(Boolean);
  }

  // Original-case surface words for display; same segmentation as tokens().
  function surfaces(text) {
    if (typeof text !== 'string') return [];
    return text.match(WORD_RE) || [];
  }

  // LCS walk shared with diffWords, minus its substitution branch: a changed
  // word becomes one miss + one extra instead of a paired 'bad' token.
  function align(target, heard) {
    const aRaw = surfaces(target);
    const bRaw = surfaces(heard);
    const a = aRaw.map(w => w.toLowerCase());
    const b = bRaw.map(w => w.toLowerCase());
    const n = a.length, m = b.length;
    const d = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        d[i][j] = a[i] === b[j] ? d[i + 1][j + 1] + 1 : Math.max(d[i + 1][j], d[i][j + 1]);
      }
    }
    const out = [];
    let i = 0, j = 0, matched = 0;
    while (i < n || j < m) {
      if (i < n && j < m && a[i] === b[j]) { out.push({ t: 'ok', w: aRaw[i] }); matched += 1; i += 1; j += 1; }
      else if (j >= m) { out.push({ t: 'miss', w: aRaw[i] }); i += 1; }
      else if (i >= n) { out.push({ t: 'extra', w: bRaw[j] }); j += 1; }
      else if (d[i][j + 1] >= d[i + 1][j]) { out.push({ t: 'extra', w: bRaw[j] }); j += 1; }
      else { out.push({ t: 'miss', w: aRaw[i] }); i += 1; }
    }
    return { tokens: out, matched: matched };
  }

  function compare(target, heard) {
    const aligned = align(target, heard);
    const targetWords = tokens(target).length;
    const heardWords = tokens(heard).length;
    const missing = [];
    const extra = [];
    aligned.tokens.forEach(tok => {
      if (tok.t === 'miss') missing.push(tok.w);
      else if (tok.t === 'extra') extra.push(tok.w);
    });
    const coverage = targetWords ? Math.round(100 * aligned.matched / targetWords) : 0;
    return {
      targetWords: targetWords,
      heardWords: heardWords,
      matched: aligned.matched,
      coverage: coverage,
      missing: missing,
      extra: extra,
      tokens: aligned.tokens
    };
  }

  function bestAlternative(target, alts) {
    if (!Array.isArray(alts) || !alts.length) return null;
    let best = null;
    let top = -1;
    for (let i = 0; i < alts.length; i++) {
      const item = alts[i];
      const cov = compare(target, item && typeof item === 'object' ? item.t : '').coverage;
      if (cov > top) { top = cov; best = item; }
    }
    return best;
  }

  // Target indices in the order their first unused heard match appears.
  function order(target, heard) {
    const a = tokens(target);
    const b = tokens(heard);
    const used = a.map(() => false);
    const sequence = [];
    for (let j = 0; j < b.length; j++) {
      for (let i = 0; i < a.length; i++) {
        if (!used[i] && a[i] === b[j]) { used[i] = true; sequence.push(i); break; }
      }
    }
    let inversions = 0;
    for (let i = 0; i < sequence.length; i++) {
      for (let j = i + 1; j < sequence.length; j++) if (sequence[i] > sequence[j]) inversions += 1;
    }
    return { sequence: sequence, inversions: inversions };
  }

  function grade(cmp) {
    const src = cmp && typeof cmp === 'object' ? cmp : {};
    const coverage = Number(src.coverage) || 0;
    const extra = Array.isArray(src.extra) ? src.extra.length : 0;
    const targetWords = Number(src.targetWords) || 0;
    const heardWords = Number(src.heardWords) || 0;
    const content = coverage >= 90 ? 5 : coverage >= 75 ? 4 : coverage >= 60 ? 3 : coverage >= 40 ? 2 : 1;
    const accuracy = extra === 0 ? 5 : extra <= 2 ? 4 : extra <= 4 ? 3 : extra <= 7 ? 2 : 1;
    const ratio = targetWords ? heardWords / targetWords : 0;
    const completeness = ratio >= 0.95 ? 5 : ratio >= 0.8 ? 4 : ratio >= 0.65 ? 3 : ratio >= 0.45 ? 2 : 1;
    return { content: content, accuracy: accuracy, completeness: completeness, overall: content };
  }

  // Target-token indices that were missed, walked in the same order as align().
  function missIndexes(cmp) {
    const idx = [];
    let k = 0;
    cmp.tokens.forEach(tok => {
      if (tok.t === 'miss') idx.push(k);
      if (tok.t === 'ok' || tok.t === 'miss') k += 1;
    });
    return idx;
  }

  // True when most of the missed words sit after the first comma of the target.
  function commaTail(target, cmp) {
    const text = typeof target === 'string' ? target : '';
    const at = text.search(/[,，]/);
    if (at < 0 || !cmp.missing.length) return false;
    const head = surfaces(text.slice(0, at)).length;
    const after = missIndexes(cmp).filter(i => i >= head).length;
    return after * 2 > cmp.missing.length;
  }

  function hints(target, heard, kind) {
    const rs = kind === 'rs';
    const cmp = compare(target, heard);
    const out = [];
    if (rs) {
      const seq = order(target, heard);
      if (seq.inversions > 0) out.push('语序：有 ' + seq.inversions + ' 处前后颠倒，先按原句顺序复述。');
      if (cmp.coverage < 70) {
        out.push('断句：只覆盖 ' + cmp.coverage + '%，先按逗号意群记前半句。');
      } else if (commaTail(target, cmp)) {
        out.push('断句：逗号后的后半句漏得多，在逗号处停一下再续。');
      }
    }
    if (cmp.extra.length > 0) out.push('多读：有 ' + cmp.extra.length + ' 个词不在原句里，删掉再重说。');
    if (cmp.missing.length > 0 && !rs) out.push('漏读：' + cmp.missing.length + ' 个词没被识别到；放慢语速，词尾读清。');
    return out;
  }

  function report(target, heard, kind) {
    const k = kind === 'rs' ? 'rs' : 'ra';
    const cmp = compare(target, heard);
    const tiers = grade(cmp);
    const list = hints(target, heard, k);
    const why = '内容 ' + tiers.content + '/5 · 准确 ' + tiers.accuracy + '/5 · 完整 ' + tiers.completeness +
      '/5；覆盖 ' + cmp.coverage + '%，漏读 ' + cmp.missing.length + ' 个词，多读 ' + cmp.extra.length + ' 个词';
    return {
      kind: k,
      targetWords: cmp.targetWords,
      heardWords: cmp.heardWords,
      matched: cmp.matched,
      coverage: cmp.coverage,
      missing: cmp.missing,
      extra: cmp.extra,
      tokens: cmp.tokens,
      tiers: tiers,
      hints: list,
      trigger: tiers.overall < PASS_TIER,
      why: why,
      fix: list[0] || '覆盖和漏读都不错，保持语速，再练下一句。'
    };
  }

  root.PTESpeakEval = {
    PASS_TIER: PASS_TIER,
    tokens: tokens,
    align: align,
    compare: compare,
    bestAlternative: bestAlternative,
    order: order,
    grade: grade,
    hints: hints,
    report: report
  };
})(this);
