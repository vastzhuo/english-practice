// RA / DI / SWT practice. Progress stays on S.pte.ra / .di / .swt via PTELogic.ensureSpeak,
// so the existing WFD / RS / read / WE / SST progress is untouched.
// Timers are scratch state on PTE_PLAY, like the existing flow and SST clocks.
const RA_SELF = [
  { k: 'f', label: '流利度', opts: ['卡顿', '一般', '顺畅'] },
  { k: 'p', label: '发音', opts: ['不准', '一般', '清楚'] },
  { k: 'j', label: '停连', opts: ['乱', '一般', '自然'] }
];
const DI_SELF = [
  { k: 'c', label: '内容覆盖', opts: ['缺失', '一般', '完整'] },
  { k: 'f', label: '流利度', opts: ['卡顿', '一般', '顺畅'] },
  { k: 'v', label: '词汇句式', opts: ['单一', '一般', '丰富'] }
];
const SWT_SELF = [
  { k: 'c', label: '要点', opts: ['少', '一般', '全'] },
  { k: 'g', label: '语法', opts: ['错多', '一般', '干净'] },
  { k: 'w', label: '词数控制', opts: ['勉强', '一般', '稳'] }
];

function speakBag(st, mode) {
  st = st || pteState();
  const bag = PTELogic.ensureSpeak(st);
  return mode ? bag[mode] : bag;
}
function speakList(bank) {
  return Array.isArray(bank) ? bank.filter(item => item && item.id) : [];
}
// Reading articles with a real body win; the static SST-derived bank fills the rest.
function raPool() {
  const fixed = (typeof PTE_RA !== 'undefined' && PTE_RA && Array.isArray(PTE_RA.passages)) ? PTE_RA.passages : [];
  const read = (typeof PTE_RA !== 'undefined' && PTE_RA && typeof PTE_RA.fromRead === 'function' && typeof readArticles === 'function') ? PTE_RA.fromRead(readArticles()) : [];
  const seen = {};
  return speakList(read.concat(fixed)).filter(item => {
    if (seen[item.id]) return false;
    seen[item.id] = 1;
    return true;
  });
}
function diPool() {
  return speakList((typeof PTE_DI !== 'undefined' && PTE_DI && PTE_DI.charts) ? PTE_DI.charts : []);
}
function swtPool() {
  return speakList((typeof PTE_SWT !== 'undefined' && PTE_SWT && PTE_SWT.items) ? PTE_SWT.items : []);
}
function diTypeName(id) {
  const types = (typeof PTE_DI !== 'undefined' && PTE_DI && PTE_DI.types) ? PTE_DI.types : [];
  const type = types.find(item => item.id === id);
  return type ? type.name : String(id || '');
}
function swtSource(id) {
  const items = (typeof PTE_SST !== 'undefined' && PTE_SST && Array.isArray(PTE_SST.items)) ? PTE_SST.items : [];
  return items.find(item => item.id === id) || null;
}
function pteOrdRow(mode, ord) {
  const cls = value => 'class="' + (ord === value ? 'on' : '') + '"';
  return `<div class="pte-mini"><button type="button" data-sp-act="ord" data-mode="${mode}" data-ord="rand" ${cls('rand')}>随机顺序</button><button type="button" data-sp-act="ord" data-mode="${mode}" data-ord="num" ${cls('num')}>按题号</button></div>`;
}

function spClock(sec) {
  const n = Math.max(0, Math.round(Number(sec) || 0));
  return String(Math.floor(n / 60)).padStart(2, '0') + ':' + String(n % 60).padStart(2, '0');
}
function spStop() {
  if (PTE_PLAY.spTick) clearInterval(PTE_PLAY.spTick);
  PTE_PLAY.spTick = null;
  PTE_PLAY.spMode = '';
}
function spPaint() {
  const el = $('pteSpClock');
  if (el) el.textContent = spClock(PTE_PLAY.spLeft);
}
function spFinish() {
  const mode = PTE_PLAY.spMode;
  const phase = PTE_PLAY.spPhase;
  spStop();
  if (mode === 'ra') {
    if (phase === 'prep') return raGo('read');
    if (phase === 'read') return raGo('listen');
  }
  if (mode === 'di') {
    if (phase === 'prep') return diGo('speak');
    if (phase === 'speak') return diGo('review');
  }
  if (mode === 'swt') {
    PTE_PLAY.swtLeft = 0;
    pteRefresh(true);
  }
}
function spRun(mode, phase, seconds) {
  spStop();
  PTE_PLAY.spMode = mode;
  PTE_PLAY.spPhase = phase;
  PTE_PLAY.spLeft = Math.max(0, Math.round(Number(seconds) || 0));
  spPaint();
  PTE_PLAY.spTick = setInterval(() => {
    PTE_PLAY.spLeft -= 1;
    if (PTE_PLAY.spLeft <= 0) {
      PTE_PLAY.spLeft = 0;
      spPaint();
      spFinish();
      return;
    }
    spPaint();
  }, 1000);
}
function raGo(phase) {
  PTE_PLAY.raPhase = phase === 'read' || phase === 'listen' || phase === 'assess' ? phase : (phase === 'prep' ? 'prep' : 'idle');
  if (phase === 'prep') spRun('ra', 'prep', PTELogic.RA_PREP_SEC);
  else if (phase === 'read') spRun('ra', 'read', PTELogic.RA_READ_SEC);
  else spStop();
  pteRefresh(true);
}
function diGo(phase) {
  PTE_PLAY.diPhase = phase === 'speak' || phase === 'review' ? phase : (phase === 'prep' ? 'prep' : 'idle');
  if (phase === 'prep') spRun('di', 'prep', PTELogic.DI_PREP_SEC);
  else if (phase === 'speak') spRun('di', 'speak', PTELogic.DI_SPEAK_SEC);
  else spStop();
  pteRefresh(true);
}
function swtStart() {
  PTE_PLAY.swtLeft = PTELogic.SWT_SEC;
  spRun('swt', 'run', PTE_PLAY.swtLeft);
  pteRefresh(true);
}
function swtResume() {
  const left = Number(PTE_PLAY.swtLeft) > 0 ? Number(PTE_PLAY.swtLeft) : PTELogic.SWT_SEC;
  spRun('swt', 'run', left);
  pteRefresh(true);
}
function swtPause() {
  spStop();
  pteRefresh(true);
}
function swtReset() {
  spStop();
  PTE_PLAY.swtLeft = PTELogic.SWT_SEC;
  pteRefresh(true);
}
window.pteSpeakStop = function () {
  spStop();
  PTE_PLAY.raPhase = 'idle';
  PTE_PLAY.diPhase = 'idle';
  PTE_PLAY.swtLeft = null;
};

// Mistake-book rows for RA / SWT pin the item; the normal queue is untouched.
function spFocusItem(source, pool) {
  const f = PTE_PLAY.focus;
  if (!f || f.source !== source) return null;
  return (pool || []).find(item => item.id === f.id) || null;
}
function raCurrent(st) {
  return spFocusItem('ra', raPool()) || slotOrder('ra', raPool(), speakBag(st, 'ra').ord)[PTE_PLAY.raIdx] || null;
}
function diCurrent(st) {
  return slotOrder('di', diPool(), speakBag(st, 'di').ord)[PTE_PLAY.diIdx] || null;
}
function swtCurrent(st) {
  return spFocusItem('swt', swtPool()) || slotOrder('swt', swtPool(), speakBag(st, 'swt').ord)[PTE_PLAY.swtIdx] || null;
}
// The three self-assessment rows with 1 = the worst tier.
function selfRowsFor(mode) {
  if (mode === 'ra') return RA_SELF;
  if (mode === 'swt') return SWT_SELF;
  return null;
}
// A worst tier is a mistake; a fully filled assessment with no worst tier is a
// good answer. "Not yet assessed" never counts.
function selfMark(mode, id, rows, cur, value) {
  if (typeof pteMark !== 'function' || !rows) return;
  if (value === 1) { pteMark(mode, id, true); return; }
  if (rows.every(row => (cur[row.k] || 0) >= 2)) pteMark(mode, id, false);
}
function selfRows(mode, id, rows) {
  const cur = speakBag(pteState(), mode).self[id] || {};
  return rows.map(row => {
    const btns = row.opts.map((text, i) => `<button type="button" data-sp-act="self" data-mode="${mode}" data-id="${esc(id)}" data-k="${row.k}" data-v="${i + 1}" class="${cur[row.k] === i + 1 ? 'on' : ''}">${esc(text)}</button>`).join('');
    return `<div class="pte-lab">${esc(row.label)}</div><div class="pte-mini">${btns}</div>`;
  }).join('');
}
function clockLine() {
  return `<p id="pteSpClock" class="pte-clock">${esc(spClock(PTE_PLAY.spLeft))}</p>`;
}
function nextButton(mode, label) {
  return `<button type="button" class="btn" data-sp-act="next" data-mode="${mode}">${esc(label)}</button>`;
}
function sourceStats() {
  const fixed = (typeof PTE_RA !== 'undefined' && PTE_RA && Array.isArray(PTE_RA.passages)) ? PTE_RA.passages.length : 0;
  const articles = typeof readArticles === 'function' ? readArticles() : [];
  const withText = articles.filter(article => article && typeof article.text === 'string' && article.text.trim()).length;
  if (withText) return `其中 ${withText} 段取自阅读原文，其余取自 SST 讲座转写`;
  return `阅读原文暂时没有正文，${fixed} 段全部取自 SST 讲座转写`;
}

// --- v49 auto evaluation (writing + speaking) -------------------------------
// Everything here runs in the page: local heuristics + the browser's own speech
// recognition. No third-party scoring API, no audio upload, no saved recording.
// The recognized sentence lives on PTE_PLAY (memory) and is gone after reload;
// what can survive is the mistake-book note (失分原因 + 改进一句), never the audio.
const REC_ERR = {
  'not-allowed': '麦克风权限被拒绝：点地址栏左边的锁 → 麦克风 → 允许。',
  'service-not-allowed': '语音识别服务不可用：请用 Chrome / Edge，并允许麦克风。',
  'no-speech': '没听到声音：靠近麦克风，听到提示后马上读。',
  'audio-capture': '找不到麦克风，或被别的应用占用了。',
  'network': '识别需要联网，当前网络错误，稍后再试。',
  'aborted': '识别被中断了，再试一次。',
  'bad-grammar': '识别出错，再试一次。'
};
const REC_LANGS = ['en-US', 'en-AU', 'en-GB'];
function recSupported() {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}
window.pteSpeakEvalSupported = recSupported;

function evalKey(kind, id) { return kind + ':' + id; }
function evalHash(text) {
  let h = 2166136261;
  const s = String(text == null ? '' : text);
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}
function evalBag(name) {
  if (!PTE_PLAY[name] || typeof PTE_PLAY[name] !== 'object' || Array.isArray(PTE_PLAY[name])) PTE_PLAY[name] = {};
  return PTE_PLAY[name];
}
function evalTextList(list) {
  return (Array.isArray(list) ? list : []).map(esc).join(' ');
}
// Writing: run the local heuristics, keep the report in memory and — when a tier
// is below 4 — write one 写作 row with 失分原因 + 改进一句. An identical answer
// never counts as a second wrong attempt, so clicking 自检 twice is harmless.
function writeEvalRun(kind, id, text, prompt) {
  if (typeof PTEWriteEval === 'undefined' || !PTEWriteEval.report) return null;
  const answer = String(text == null ? '' : text);
  if (!answer.trim()) return null;
  const report = PTEWriteEval.report(answer, String(prompt == null ? '' : prompt), kind);
  evalBag('writeEval')[evalKey(kind, id)] = report;
  const seen = evalBag('writeSeen');
  const key = evalKey(kind, id);
  const hash = evalHash(answer);
  const same = seen[key] === hash;
  seen[key] = hash;
  if (!same && typeof pteMark === 'function') {
    if (report.trigger) pteMark('write', id, true, { why: report.why, fix: report.fix });
    else pteMark('write', id, false);
  }
  return report;
}
function writeEvalHtml(kind, id) {
  const report = evalBag('writeEval')[evalKey(kind, id)];
  if (!report) return '';
  const s = report.stats;
  const range = kind === 'swt' ? '5–75' : '200–300';
  const okWords = kind === 'swt' ? (s.words >= 5 && s.words <= 75) : (s.words >= 200 && s.words <= 300);
  const cov = report.coverage.total ? '关键词覆盖 ' + report.coverage.percent + '%（' + report.coverage.hit.length + '/' + report.coverage.total + '）' : '题干没有可抽的关键词';
  const issues = (report.issues || []).map(issue => '<li><b>' + esc(issue.label) + '</b>：' + esc(issue.hint) + '</li>').join('');
  return '<div class="eval-card" data-eval="write"><p class="eval-tag">自动初评 · 本地规则，不上传</p>' +
    '<p class="eval-line">字数 <b>' + s.words + '</b> 词 · 要求 ' + range + ' · <b>' + (okWords ? '达标' : '不达标') + '</b> · 句数 <b>' + s.sentences + '</b> · 平均句长 <b>' + s.avg + '</b> 词 · 连接词 <b>' + report.connectives.count + '</b> 个 · ' + esc(cov) + '</p>' +
    '<p class="eval-line">分档：内容 <b>' + report.tiers.content + '/5</b> · 结构 <b>' + report.tiers.structure + '/5</b> · 语言 <b>' + report.tiers.language + '/5</b></p>' +
    (issues ? '<ul class="eval-issues">' + issues + '</ul>' : '<p class="eval-tip">常见扣分项都没触发。</p>') +
    '<p class="eval-tip">' + (report.trigger ? '有档位低于 4 分，已自动记入错题本（写作），并带上失分原因和改进一句。' : '三档都在 4 分以上，不会记入错题本。') + '</p></div>';
}
window.pteWriteEval = writeEvalRun;
window.pteWriteEvalHtml = writeEvalHtml;

function speakEvalHtml(kind, id) {
  const report = evalBag('speakEval')[evalKey(kind, id)];
  if (!report) return '';
  const miss = (report.missing || []).length ? evalTextList(report.missing) : '无';
  const extra = (report.extra || []).length ? evalTextList(report.extra) : '无';
  const hints = (report.hints || []).map(hint => '<li>' + esc(hint) + '</li>').join('');
  const t = report.tiers;
  return '<div class="eval-card" data-eval="speak"><p class="eval-tag">识别比对 · 只在内存，不保存录音</p>' +
    '<p class="eval-line">内容覆盖 <b>' + report.coverage + '%</b> · 识别 ' + report.heardWords + ' 词 / 原文 ' + report.targetWords + ' 词 · 分档：内容 <b>' + t.content + '/5</b> · 准确 <b>' + t.accuracy + '/5</b> · 完整 <b>' + t.completeness + '/5</b></p>' +
    '<p class="eval-line">漏读词：<span class="eval-miss">' + miss + '</span></p>' +
    '<p class="eval-line">多读词：<span class="eval-extra">' + extra + '</span></p>' +
    (hints ? '<ul class="eval-issues">' + hints + '</ul>' : '') +
    '<p class="eval-tip">' + (report.trigger ? '内容档低于 4 分，已自动记入错题本（口语），并带上失分原因和改进一句。' : '内容档在 4 分以上，不会记入错题本。') + '</p></div>';
}
window.pteSpeakEvalHtml = speakEvalHtml;

// Recognized text never leaves this function's closure except as the in-memory
// report; the mistake book only receives the short why/fix pair.
function speakFinish(kind, id, target, alts) {
  const Eval = (typeof PTESpeakEval !== 'undefined') ? PTESpeakEval : null;
  if (!Eval) return null;
  const best = Eval.bestAlternative ? Eval.bestAlternative(target, alts) : (alts && alts[0]);
  const host = $('pteSpeakEval');
  if (!best || !String(best.t || '').trim()) {
    if (host) host.innerHTML = '<p class="pte-warn">没有识别到内容：靠近麦克风、放大声量再试一次。仍可用手动自评。</p>';
    return null;
  }
  const report = Eval.report(target, best.t, kind);
  evalBag('speakEval')[evalKey(kind, id)] = report;
  const seen = evalBag('speakSeen');
  const key = evalKey(kind, id);
  const hash = evalHash(best.t);
  const same = seen[key] === hash;
  seen[key] = hash;
  if (!same && typeof pteMark === 'function') {
    if (report.trigger) pteMark('speak', id, true, { why: report.why, fix: report.fix });
    else pteMark('speak', id, false);
  }
  if (typeof save === 'function') save();
  if (typeof pteRefresh === 'function') pteRefresh(true);
  return report;
}
function speakRun(target, kind, id, btn) {
  const host = $('pteSpeakEval');
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    if (host) host.innerHTML = '<p class="pte-warn">此浏览器不支持自动评级（需要 Chrome / Edge 的语音识别）。仍可用手动自评。</p>';
    return;
  }
  let lang = 0, finals = null, interim = '', done = false;
  const resetBtn = () => { if (btn) { btn.disabled = false; btn.textContent = '🎤 自动评级'; } };
  const rec = new SR();
  rec.lang = REC_LANGS[lang];
  rec.interimResults = true;
  rec.maxAlternatives = 3;
  rec.continuous = false;
  if (btn) { btn.disabled = true; btn.textContent = '🎤 正在听…'; }
  if (host) host.innerHTML = '<p class="eval-tip">正在听：把这段读出来，识别完自动比对。</p>';
  rec.onresult = event => {
    // One event can carry several final segments. Score all of them and keep the
    // best coverage, instead of letting the last segment overwrite the earlier one.
    const collected = [];
    interim = '';
    for (let i = 0; i < event.results.length; i++) {
      const result = event.results[i];
      if (result.isFinal) {
        const speaker = result[0];
        if (speaker && String(speaker.transcript || '').trim()) collected.push({ t: speaker.transcript, c: speaker.confidence });
      } else {
        interim += result[0].transcript;
      }
    }
    if (collected.length) {
      const merged = (finals || []).slice();
      collected.forEach(row => {
        if (!merged.some(item => item.t === row.t)) merged.push(row);
      });
      finals = merged;
    }
    const live = $('pteSpeakEval');
    if (live && interim) live.innerHTML = '<p class="eval-tip">听到：' + esc(interim) + '（还没说完）</p>';
    if (finals && finals.length) { try { rec.stop(); } catch (err) {} }
  };
  rec.onerror = event => {
    const code = event && event.error;
    if (code === 'language-not-supported' && lang < REC_LANGS.length - 1) {
      lang += 1;
      try { rec.lang = REC_LANGS[lang]; rec.start(); } catch (err) {}
      return;
    }
    if (finals && finals.length) { done = true; speakFinish(kind, id, target, finals); return; }
    if (interim) { done = true; speakFinish(kind, id, target, [{ t: interim, c: 0 }]); return; }
    // Keep the specific message: a later onend must not overwrite it with the
    // generic "nothing recognized" copy.
    done = true;
    if (host) host.innerHTML = '<p class="pte-warn">' + esc(REC_ERR[code] || ('识别出错：' + code)) + ' 仍可用手动自评。</p>';
    resetBtn();
  };
  rec.onend = () => {
    if (done) return;
    done = true;
    let report = null;
    if (finals && finals.length) report = speakFinish(kind, id, target, finals);
    else if (interim) report = speakFinish(kind, id, target, [{ t: interim, c: 0 }]);
    if (report) return;
    if (host) host.innerHTML = '<p class="pte-warn">没有识别到内容：靠近麦克风再试一次。仍可用手动自评。</p>';
    resetBtn();
  };
  try { rec.start(); } catch (err) {
    if (host) host.innerHTML = '<p class="pte-warn">无法启动语音识别：' + esc(err && err.message ? err.message : '浏览器拒绝') + '。仍可用手动自评。</p>';
    resetBtn();
  }
}
window.pteRsEval = function (item, btn) {
  if (!item) return;
  speakRun(item.text, 'rs', item.id, btn);
};
function raEvalCard(item) {
  if (!recSupported()) {
    return '<div class="card"><b>自动初评（口语）</b><p class="pte-warn">此浏览器不支持自动评级（需要 Chrome / Edge 的语音识别）。可以继续用下面的三档自评。</p></div>';
  }
  return '<div class="card"><b>自动初评（口语）</b><p class="pte-tip">点一下开始识别。识别只在本页内存里做词级比对，不保存录音、不上传；换页即丢。</p><button type="button" class="btn alt" data-sp-act="ra-eval" data-id="' + esc(item.id) + '">🎤 自动评级</button><div id="pteSpeakEval">' + speakEvalHtml('ra', item.id) + '</div></div>';
}

// --- Read Aloud -------------------------------------------------------------

function raView(st) {
  const bag = speakBag(st, 'ra');
  const bank = raPool();
  const item = raCurrent(st);
  const phase = PTE_PLAY.raPhase || 'idle';
  const note = (typeof PTE_RA !== 'undefined' && PTE_RA && PTE_RA.note) ? PTE_RA.note : '';
  const head = `${pteModes(st)}<div class="card"><b>RA 朗读 · Read Aloud</b><p>${bank.length} 段，每段 45–75 词，约 60 词。${esc(sourceStats())}，来源标在每段上，没有编造的范文。</p><p>已自评 ${Object.keys(bag.self).length}/${bank.length}</p>${pteOrdRow('ra', bag.ord)}<p class="pte-tip">${esc(note)}</p></div>`;
  if (!item) return head + '<div class="card"><p>还没有可读的段落。</p></div>';
  const self = bag.self[item.id] || {};
  let body = '';
  if (phase === 'prep') {
    body = `${clockLine()}<p class="pte-tip">准备中：先默读一遍，标出停连、重音和数字的英文读法。结束会自动开始朗读。</p><button type="button" class="btn" data-sp-act="ra-go" data-phase="read">跳过准备，开始朗读（${PTELogic.RA_READ_SEC} 秒）</button>`;
  } else if (phase === 'read') {
    body = `${clockLine()}<p class="pte-tip">朗读中。到 00:00 自动结束，然后可以听范读。</p><button type="button" class="btn alt" data-sp-act="ra-go" data-phase="listen">提前结束朗读</button>`;
  } else if (phase === 'listen') {
    body = `<button type="button" class="btn" data-sp-act="say" data-text="${esc(item.text)}"${typeof pteSayAttr === 'function' ? pteSayAttr() : ''}>🔊 播放 TTS 范读</button><p class="pte-tip">先自己读，再听范读，对比停连和重音。</p><button type="button" class="btn alt" data-sp-act="ra-go" data-phase="assess">听完，进入自评</button>`;
  } else if (phase === 'assess') {
    body = `<p class="pte-tip">自评只看这三件事，按自己的实际表现点。</p>${selfRows('ra', item.id, RA_SELF)}${Object.keys(self).length ? '<p class="pte-badge">已记录自评</p>' : ''}${nextButton('ra', '下一段')}`;
  } else {
    body = `<button type="button" class="btn" data-sp-act="ra-go" data-phase="prep">开始（${PTELogic.RA_PREP_SEC} 秒准备）</button><p class="pte-tip">步骤：准备倒计时 → 朗读计时 → 听 TTS 范读 → 自评 → 下一段。</p>`;
  }
  const done = bag.done[item.id];
  return `${head}${typeof pteFocusNote === 'function' ? pteFocusNote('ra') : ''}<div class="card"><div class="pte-kicker">第 ${PTE_PLAY.raIdx + 1}/${bank.length} · 题号 ${esc(item.sourceId)} · ${esc(item.sourceKind || '')} · 约 ${item.words} 词</div><h2>${esc(item.title)}</h2><p class="pte-badge">${esc(item.note)}</p><p class="pte-sent" lang="en" style="font-size:1.12rem;line-height:1.7">${esc(item.text)}</p><button type="button" class="btn ${done ? 'done' : 'alt'}" data-sp-act="done" data-mode="ra" data-id="${esc(item.id)}">${done ? '✓ 已完成' : '标为完成'}</button></div><div class="card">${body}</div>${raEvalCard(item)}`;
}

// --- Describe Image ---------------------------------------------------------

function diView(st) {
  const bag = speakBag(st, 'di');
  const bank = diPool();
  const item = diCurrent(st);
  const phase = PTE_PLAY.diPhase || 'idle';
  const note = (typeof PTE_DI !== 'undefined' && PTE_DI && PTE_DI.note) ? PTE_DI.note : '';
  const head = `${pteModes(st)}<div class="card"><b>DI 描述图片 · Describe Image</b><p>${bank.length} 张图，覆盖 ${(typeof PTE_DI !== 'undefined' && PTE_DI && PTE_DI.types ? PTE_DI.types.length : 0)} 种图型。图全部在运行时用 SVG 画出来，离线可用，不加载任何图片文件。</p><p>已自评 ${Object.keys(bag.self).length}/${bank.length}</p>${pteOrdRow('di', bag.ord)}<p class="pte-tip">${esc(note)}</p></div>`;
  if (!item) return head + '<div class="card"><p>还没有图表。</p></div>';
  const chart = PTELogic.svgChart(item);
  const structure = item.structure || {};
  const features = (structure.features || []).map(line => `<li lang="en">${esc(line)}</li>`).join('');
  const unit = item.unit ? ' · 单位：' + esc(item.unit) : '';
  let body = '';
  if (phase === 'prep') {
    body = `${clockLine()}<p class="pte-tip">准备中：先想好 Overview，再挑两个最高或最低的数字，最后一句给结论。</p><button type="button" class="btn" data-sp-act="di-go" data-phase="speak">跳过准备，开始口述（${PTELogic.DI_SPEAK_SEC} 秒）</button>`;
  } else if (phase === 'speak') {
    body = `${clockLine()}<p class="pte-tip">口述中。结构提示和参考答案在计时结束后才会出现。</p><button type="button" class="btn alt" data-sp-act="di-go" data-phase="review">提前结束口述</button>`;
  } else if (phase === 'review') {
    body = `<details class="card" open><summary>高分结构提示</summary><p class="pte-tip">按 Overview → Key features → Conclusion 三步说，不要逐条念数字。</p><h3>Overview</h3><p lang="en">${esc(structure.overview || '')}</p><h3>Key features</h3><ul>${features}</ul><h3>Conclusion</h3><p lang="en">${esc(structure.conclusion || '')}</p></details><details class="card"><summary>参考答案</summary><p lang="en">${esc(item.model || '')}</p><p class="pte-badge">自制参考答案，不是官方答案</p></details><p class="pte-tip">自评只看这三件事。</p>${selfRows('di', item.id, DI_SELF)}${nextButton('di', '下一张')}`;
  } else {
    body = `<button type="button" class="btn" data-sp-act="di-go" data-phase="prep">开始（${PTELogic.DI_PREP_SEC} 秒准备）</button><p class="pte-tip">步骤：25 秒准备 → 40 秒口述 → 看结构提示和参考答案 → 自评。</p>`;
  }
  const done = bag.done[item.id];
  return `${head}<div class="card"><div class="pte-kicker">第 ${PTE_PLAY.diIdx + 1}/${bank.length} · ${esc(diTypeName(item.type))}${unit}</div><h2>${esc(item.title)}</h2><p class="pte-tip">${esc(item.zh || '')}</p>${chart}<p class="pte-badge">${esc(item.note)}</p><button type="button" class="btn ${done ? 'done' : 'alt'}" data-sp-act="done" data-mode="di" data-id="${esc(item.id)}">${done ? '✓ 已完成' : '标为完成'}</button></div>${diSkeletonHtml(item)}<div class="card">${body}</div>`;
}

// --- Summarize Written Text -------------------------------------------------

// Skeleton panels reuse the self-made frames in pte-templates.js. They render as
// collapsible cards so the practice screen keeps its original order.
function skelFrameRows(rows) {
  return (rows || []).map(row => `<div class="pte-lesson"><p class="skel-frame" lang="en">${esc(row.frame)}</p><p class="pte-tip">${esc(row.hint)}</p></div>`).join('');
}
function skelTips(rows) {
  const body = (rows || []).map(text => `<li>${esc(text)}</li>`).join('');
  return body ? `<ul class="skel-check">${body}</ul>` : '';
}
function swtSkeletonHtml() {
  const data = (typeof PTE_TEMPLATES !== 'undefined' && PTE_TEMPLATES && PTE_TEMPLATES.swt) ? PTE_TEMPLATES.swt : { frames: [], tips: [] };
  const frames = data.frames || [];
  const tips = data.tips || [];
  return `<details class="card"><summary>一句话骨架 · ${frames.length} 条句式 + ${tips.length} 条提示</summary><p class="pte-tip">先选一条句式，把原文要点塞进方括号，再数词。一句话只留一个句号。</p>${skelFrameRows(frames)}${skelTips(tips)}</details>`;
}
// One set per chart type: opening, trend, comparison, closing.
function diSkelRows(type) {
  return [['opening', '开头句'], ['trend', '趋势 / 推进'], ['comparison', '比较'], ['closing', '结尾']]
    .filter(pair => type[pair[0]])
    .map(pair => `<div class="pte-lesson"><b>${esc(pair[1])}</b><p class="skel-frame" lang="en">${esc(type[pair[0]])}</p></div>`)
    .join('');
}
function diSkeletonHtml(item) {
  const types = (typeof PTE_TEMPLATES !== 'undefined' && PTE_TEMPLATES && PTE_TEMPLATES.di && PTE_TEMPLATES.di.types) ? PTE_TEMPLATES.di.types : [];
  if (!types.length) return '';
  const current = types.find(type => type.id === (item && item.type)) || types[0];
  const others = types.filter(type => type !== current);
  return `<details class="card" open><summary>按图型的口述骨架 · 当前 ${esc(current.name)}</summary><p class="pte-tip">每套四句：开头、趋势、比较、结尾。方括号换成图上的数字和名称。</p>${diSkelRows(current)}${others.map(type => `<details><summary>${esc(type.name)}</summary>${diSkelRows(type)}</details>`).join('')}</details>`;
}

function swtCountLabel(answer) {
  const n = PTELogic.wordCount(answer);
  const fit = PTELogic.swtFit(n);
  const word = fit === 'ok' ? '达标' : (fit === 'over' ? '偏多' : '偏少');
  return n + ' 词 · 要求 ' + PTELogic.SWT_MIN + '–' + PTELogic.SWT_MAX + ' · ' + word;
}
function swtWarnText(answer) {
  const n = PTELogic.wordCount(answer);
  const fit = PTELogic.swtFit(n);
  if (fit === 'ok') return '';
  if (fit === 'over') return '超出上限：删到 ' + PTELogic.SWT_MAX + ' 词以内才能提交，现在 ' + n + ' 词。';
  if (!n) return '还没有写。至少写 ' + PTELogic.SWT_MIN + ' 词才能提交。';
  return '不足下限：还差 ' + (PTELogic.SWT_MIN - n) + ' 词才能提交。';
}
function swtSync(answer) {
  const n = PTELogic.wordCount(answer);
  const fit = PTELogic.swtFit(n);
  const count = $('pteSwtCount');
  if (count) {
    count.textContent = swtCountLabel(answer);
    count.className = 'pte-count ' + fit;
  }
  const warn = $('pteSwtWarn');
  if (warn) {
    warn.textContent = swtWarnText(answer);
    warn.hidden = fit === 'ok';
  }
  const btn = $('pteSwtSubmit');
  if (btn) btn.disabled = fit !== 'ok';
}
function swtView(st) {
  const bag = speakBag(st, 'swt');
  const bank = swtPool();
  const item = swtCurrent(st);
  const note = (typeof PTE_SWT !== 'undefined' && PTE_SWT && PTE_SWT.note) ? PTE_SWT.note : '';
  const head = `${pteModes(st)}<div class="card"><b>SWT 书面总结 · Summarize Written Text</b><p>${bank.length} 篇。原文复用 pte-sst.js 已有的讲座转写，一篇只写一句 5–75 词的英文总结，限时 10 分钟，可以暂停。</p><p>已自评 ${Object.keys(bag.self).length}/${bank.length}</p>${pteOrdRow('swt', bag.ord)}<p class="pte-tip">${esc(note)}</p></div>`;
  if (!item) return head + '<div class="card"><p>还没有可总结的原文。</p></div>';
  const src = swtSource(item.sourceId);
  const passage = src && src.transcript ? String(src.transcript).trim() : '';
  const answer = typeof bag.answers[item.id] === 'string' ? bag.answers[item.id] : '';
  const fit = PTELogic.swtFit(PTELogic.wordCount(answer));
  const submitted = !!bag.submitted[item.id];
  const running = !!PTE_PLAY.spTick && PTE_PLAY.spMode === 'swt';
  const left = PTE_PLAY.swtLeft == null ? PTELogic.SWT_SEC : PTE_PLAY.swtLeft;
  const sourceBlock = passage
    ? `<details class="card" open><summary>原文（题号 ${esc(item.sourceId)}）</summary><p class="pte-tip">${esc(item.note)}</p><p lang="en">${esc(passage)}</p></details>`
    : `<div class="card"><p class="pte-warn">找不到这篇原文（${esc(item.sourceId)}）。</p></div>`;
  const timer = `<p id="pteSpClock" class="pte-clock">${esc(spClock(left))}</p><button type="button" class="btn" data-sp-act="swt-start">${running || left < PTELogic.SWT_SEC ? '重新计时 10 分钟' : '开始 10 分钟'}</button>${running ? '<button type="button" class="btn alt" data-sp-act="swt-pause">暂停</button>' : `<button type="button" class="btn alt" data-sp-act="swt-resume" ${left <= 0 ? 'disabled' : ''}>继续</button>`}<button type="button" class="btn alt" data-sp-act="swt-reset">归零</button>`;
  const done = bag.done[item.id];
  const compare = submitted ? `<div class="card"><b>对照参考答案</b><p class="pte-tip">近似对照：只比词形重合，不做语义评分，重合率低不代表内容错。</p><p lang="en">${esc(item.ref || '')}</p><p class="pte-badge">${esc(item.note)}</p>${typeof diffBlock === 'function' ? diffBlock(item.ref || '', answer) : ''}</div><div class="card"><p class="pte-tip">自评只看这三件事。</p>${selfRows('swt', item.id, SWT_SELF)}${nextButton('swt', '下一篇')}</div>` : '';
  const evalBox = `<p><button type="button" class="btn alt" data-sp-act="swt-eval" data-id="${esc(item.id)}" ${answer.trim() ? '' : 'disabled'}>自检</button></p><div id="pteSwtEval">${writeEvalHtml('swt', item.id)}</div>`;
  return `${head}${typeof pteFocusNote === 'function' ? pteFocusNote('swt') : ''}${swtSkeletonHtml()}${sourceBlock}<div class="card"><div class="pte-kicker">第 ${PTE_PLAY.swtIdx + 1}/${bank.length} · 题号 ${esc(item.sourceId)} · ${esc(item.title)}</div>${timer}</div><div class="card"><b>写一句 5–75 词的英文总结</b><p id="pteSwtCount" class="pte-count ${fit}">${esc(swtCountLabel(answer))}</p><p id="pteSwtWarn" class="pte-warn" ${fit === 'ok' ? 'hidden' : ''}>${esc(swtWarnText(answer))}</p><textarea class="pte-box" data-sp-answer="${esc(item.id)}" style="min-height:140px" placeholder="One sentence only. 5–75 words.">${esc(answer)}</textarea><button type="button" class="btn" id="pteSwtSubmit" data-sp-act="swt-submit" ${fit === 'ok' ? '' : 'disabled'}>提交并对照</button>${evalBox}<button type="button" class="btn ${done ? 'done' : 'alt'}" data-sp-act="done" data-mode="swt" data-id="${esc(item.id)}">${done ? '✓ 已完成' : '标为完成'}</button></div>${compare}`;
}

window.pteRaView = raView;
window.pteDiView = diView;
window.pteSwtView = swtView;

function onSpeakClick(e) {
  const b = e.target.closest('[data-sp-act]');
  if (!b || !$('tab-pte').contains(b)) return;
  const act = b.dataset.spAct;
  const st = pteState();
  if (act === 'ord') {
    const mode = b.dataset.mode;
    if (!bagFor(mode)) return;
    const bag = speakBag(st, mode);
    bag.ord = b.dataset.ord === 'num' ? 'num' : 'rand';
    PTE_PLAY[mode + 'Key'] = '';
    save();
    pteRefresh(false);
    return;
  }
  if (act === 'ra-go') { raGo(b.dataset.phase); return; }
  if (act === 'ra-eval') {
    const item = raCurrent(st);
    if (item) speakRun(item.text, 'ra', item.id, b);
    return;
  }
  if (act === 'swt-eval') {
    const bag = speakBag(st, 'swt');
    const item = swtCurrent(st);
    if (!item) return;
    const answer = typeof bag.answers[item.id] === 'string' ? bag.answers[item.id] : '';
    const src = swtSource(item.sourceId);
    const passage = src && src.transcript ? String(src.transcript).trim() : String(item.ref || '');
    if (!writeEvalRun('swt', item.id, answer, passage)) return;
    if (typeof save === 'function') save();
    pteRefresh(true);
    return;
  }
  if (act === 'di-go') { diGo(b.dataset.phase); return; }
  if (act === 'say') {
    if (typeof VoiceCheck !== 'undefined' && !VoiceCheck.englishOk()) { VoiceCheck.notice(VoiceCheck.statusMessage(VoiceCheck.status())); return; }
    if (typeof say === 'function') say(b.dataset.text || '');
    return;
  }
  if (act === 'self') {
    const mode = b.dataset.mode;
    const bag = speakBag(st, mode);
    const id = b.dataset.id;
    const key = b.dataset.k;
    const value = Number(b.dataset.v);
    if (!bag || !id || !key || !(value >= PTELogic.SP_SELF_MIN && value <= PTELogic.SP_SELF_MAX)) return;
    if (!bag.self[id] || typeof bag.self[id] !== 'object') bag.self[id] = {};
    if (bag.self[id][key] === value) delete bag.self[id][key];
    else bag.self[id][key] = value;
    if (!Object.keys(bag.self[id]).length) delete bag.self[id];
    const rows = selfRowsFor(mode);
    const current = bag.self[id] || {};
    if (rows) selfMark(mode, id, rows, current, value);
    save();
    pteRefresh(true);
    return;
  }
  if (act === 'done') {
    const mode = b.dataset.mode;
    const bag = speakBag(st, mode);
    const id = b.dataset.id;
    if (!bag || !id) return;
    if (bag.done[id]) delete bag.done[id];
    else bag.done[id] = 1;
    save();
    pteRefresh(true);
    return;
  }
  if (act === 'next') {
    const mode = b.dataset.mode === 'di' ? 'di' : (b.dataset.mode === 'swt' ? 'swt' : 'ra');
    if (mode === 'ra' || mode === 'swt') PTE_PLAY.focus = null;
    spStop();
    advance(mode);
    if (mode === 'ra') PTE_PLAY.raPhase = 'idle';
    if (mode === 'di') PTE_PLAY.diPhase = 'idle';
    if (mode === 'swt') PTE_PLAY.swtLeft = PTELogic.SWT_SEC;
    pteRefresh(false);
    return;
  }
  if (act === 'swt-start') { swtStart(); return; }
  if (act === 'swt-pause') { swtPause(); return; }
  if (act === 'swt-resume') { swtResume(); return; }
  if (act === 'swt-reset') { swtReset(); return; }
  if (act === 'swt-submit') {
    const bag = speakBag(st, 'swt');
    const item = swtCurrent(st);
    if (!item) return;
    const answer = typeof bag.answers[item.id] === 'string' ? bag.answers[item.id] : '';
    if (PTELogic.swtFit(PTELogic.wordCount(answer)) !== 'ok') return;
    bag.submitted[item.id] = 1;
    save();
    pteRefresh(true);
  }
}
function bagFor(mode) {
  return mode === 'ra' || mode === 'di' || mode === 'swt' ? mode : '';
}
function onSpeakInput(e) {
  const target = e.target;
  if (!target.dataset || !target.dataset.spAnswer) return;
  const bag = speakBag(pteState(), 'swt');
  bag.answers[target.dataset.spAnswer] = target.value;
  save();
  swtSync(target.value);
}
$('tab-pte').addEventListener('click', onSpeakClick);
$('tab-pte').addEventListener('input', onSpeakInput);
