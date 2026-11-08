/* Daily plan, Sydney/Melbourne clock, and local backup checks.
   Pure functions: no DOM, no network, no localStorage writes. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.EPPlan = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const APP_VERSION = 11;
  const WD = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const HOME_AFFAIRS = 'https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language/superior-english';
  const PTE_UPDATES = 'https://www.pearsonpte.com/pte-updates-2025/';
  const PTE_TIPS = 'https://www.pearsonpte.com/content/dam/ELL/pte/pearsonpte/pdfs/Test-Tips-New-Speaking-Questions-2025.pdf';
  const PTE_REPORT = 'https://www.pearsonpte.com/content/dam/ELL/pte/pearsonpte/research-report-pdfs/2025-07--enhanced-pte-a-report.pdf';
  const PTE_RULES = 'https://www.pearsonpte.com/policy-center/test-center-rules/';
  const OFFICIAL_TARGET = { listening: 69, reading: 70, writing: 85, speaking: 88 };
  const DEFAULT_EXAM = {
    date: '2026-11-22',
    start: '15:30',
    arriveBy: '15:00',
    place: 'Box Hill VIC',
    variant: 'PTE Academic',
    purpose: 'superior-english',
    target: Object.assign({}, OFFICIAL_TARGET),
    targetEdited: false,
    observed: ''
  };
  const KNOWN_KEYS = ['days', 'learned', 'best', 'cat', 'goal', 'qlen', 'lt', 'sh', 'rnd', 'slow', 'recOn', 'plan', 'dv', 'light', 'nw', 'rest', 'exam'];

  function pad(n) { return String(n).padStart(2, '0'); }
  function clamp(n, a, b) { n = Math.round(+n); if (!Number.isFinite(n)) n = a; return Math.max(a, Math.min(b, n)); }
  function inRange(m, a, b) { return m >= a && m < b; }
  function validDate(s) { return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s); }
  function validTime(s) { return typeof s === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(s); }

  function clockParts(date, timeZone) {
    const d = date instanceof Date ? date : new Date(date);
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', weekday: 'short', hourCycle: 'h23'
    });
    const bag = {};
    fmt.formatToParts(d).forEach(function (p) { bag[p.type] = p.value; });
    let hour = parseInt(bag.hour, 10);
    if (hour === 24) hour = 0;
    const minute = parseInt(bag.minute, 10);
    const map = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
    return {
      year: +bag.year, month: +bag.month, day: +bag.day, hour: hour, minute: minute,
      weekday: map[bag.weekday], weekdayName: bag.weekday,
      key: bag.year + '-' + bag.month + '-' + bag.day,
      minutes: hour * 60 + minute, timeZone: timeZone
    };
  }
  function sydneyParts(date) { return clockParts(date || new Date(), 'Australia/Sydney'); }
  function clocksMatch(date) {
    const s = clockParts(date || new Date(), 'Australia/Sydney');
    const m = clockParts(date || new Date(), 'Australia/Melbourne');
    return s.key === m.key && s.hour === m.hour && s.minute === m.minute;
  }
  function isoDate(y, m, d) { return y + '-' + pad(m) + '-' + pad(d); }
  function daysInMonth(y, m) { return new Date(Date.UTC(y, m, 0)).getUTCDate(); }
  function civilParts(y, m, d, h, min) {
    let guess = Date.UTC(y, m - 1, d, (h == null ? 12 : h) - 11, min || 0);
    for (let i = 0; i < 6; i++) {
      const p = sydneyParts(new Date(guess));
      const cur = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute);
      const want = Date.UTC(y, m - 1, d, h == null ? 12 : h, min || 0);
      if (want === cur) break;
      guess += (want - cur);
    }
    return sydneyParts(new Date(guess));
  }
  function sundayIndex(y, m, d) { return (civilParts(y, m, d, 12, 0).weekday + 1) % 7; }
  function prevKey(k) {
    const parts = k.split('-').map(Number);
    const dt = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
    dt.setUTCDate(dt.getUTCDate() - 1);
    return dt.toISOString().slice(0, 10);
  }
  function daysUntil(fromKey, toKey) {
    if (!validDate(fromKey) || !validDate(toKey)) return null;
    const p = function (k) { const a = k.split('-').map(Number); return Date.UTC(a[0], a[1] - 1, a[2]); };
    return Math.round((p(toKey) - p(fromKey)) / 86400000);
  }
  function streakCount(days, rest, todayKey) {
    const hit = function (k) { return !!((days && days[k]) || (rest && rest[k])); };
    let k = todayKey, n = 0;
    if (!hit(k)) k = prevKey(k);
    while (k && hit(k) && n < 4000) { n++; k = prevKey(k); }
    return n;
  }
  function seededShuffle(a, seed) {
    let h = 2166136261;
    const s = String(seed);
    for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    const r = function () {
      h = Math.imul(h ^ h >>> 15, 2246822507);
      h = Math.imul(h ^ h >>> 13, 3266489909);
      return ((h ^= h >>> 16) >>> 0) / 4294967296;
    };
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function classify(wd, minutes) {
    const m = minutes;
    const night = (wd === 0 && (inRange(m, 0, 420) || inRange(m, 1380, 1440))) ||
      (wd === 1 && (inRange(m, 0, 420) || inRange(m, 1380, 1440))) ||
      (wd === 2 && inRange(m, 0, 420)) ||
      (wd === 4 && inRange(m, 1380, 1440)) ||
      (wd === 5 && (inRange(m, 0, 420) || inRange(m, 1380, 1440))) ||
      (wd === 6 && (inRange(m, 0, 420) || inRange(m, 1380, 1440)));
    if (night) return { kind: 'night', studyNow: false, label: '夜班中' };
    let sleep = false;
    if (wd === 0 || wd === 1) sleep = inRange(m, 450, 540) || inRange(m, 1080, 1320);
    else if (wd === 2) sleep = inRange(m, 450, 540) || inRange(m, 1080, 1440);
    else if (wd === 3) sleep = inRange(m, 0, 420) || inRange(m, 1320, 1440);
    else if (wd === 4) sleep = inRange(m, 0, 420) || inRange(m, 1080, 1320);
    else sleep = inRange(m, 450, 870) || inRange(m, 1140, 1320);
    if (sleep) return { kind: 'sleep', studyNow: false, label: '睡眠中' };
    if (wd <= 4 && inRange(m, 1050, 1080)) return { kind: 'gap', studyNow: false, label: '下班空隙' };
    if ((wd === 0 || wd === 1 || wd === 4 || wd === 5 || wd === 6) && inRange(m, 1320, 1380))
      return { kind: 'gap', studyNow: false, label: '夜班前空隙' };
    if ((wd === 0 || wd === 1 || wd === 2 || wd === 5 || wd === 6) && inRange(m, 420, 450))
      return { kind: 'buffer', studyNow: false, label: '下夜班后的短空隙' };
    if ((wd === 3 || wd === 4) && inRange(m, 420, 540))
      return { kind: 'buffer', studyNow: false, label: '长睡眠结束到上班' };
    if (wd <= 4 && inRange(m, 540, 1050)) return { kind: 'dayshift', studyNow: false, label: '白班上班中' };
    if ((wd === 5 || wd === 6) && inRange(m, 870, 1140))
      return { kind: 'recovery', studyNow: true, label: '周末恢复时段', fill: false };
    if (wd === 3 && inRange(m, 1080, 1320))
      return { kind: 'awake', studyNow: true, label: '周四傍晚醒着', fill: false };
    return { kind: 'awake', studyNow: false, label: '醒着' };
  }
  function shiftFacts(wd) {
    return {
      nightMorning: classify(wd, 180).kind === 'night',
      nightEvening: classify(wd, 23 * 60).kind === 'night',
      dayShift: wd <= 4
    };
  }
  function baseDay(wd) {
    const label = WD[wd];
    if (wd === 0 || wd === 1 || wd === 4) return {
      weekday: wd, label: label, load: 'light', minutesMin: 5, minutesMax: 10,
      employed: true, double: true, eveningUnavailable: false, oneSession: false, safeBreak: false
    };
    if (wd === 2) return {
      weekday: wd, label: label, load: 'light', minutesMin: 5, minutesMax: 10,
      employed: true, double: false, eveningUnavailable: true, oneSession: false, safeBreak: false, afterNight: true
    };
    if (wd === 3) return {
      weekday: wd, label: label, load: 'short', minutesMin: 10, minutesMax: 15,
      employed: true, double: false, eveningUnavailable: false, oneSession: false, safeBreak: true
    };
    return {
      weekday: wd, label: label, load: 'weekend', minutesMin: 20, minutesMax: 30,
      employed: false, double: false, eveningUnavailable: false, oneSession: true, safeBreak: false
    };
  }
  function itemCap(minutesMax) {
    if (minutesMax <= 0) return 0;
    if (minutesMax <= 10) return 8;
    if (minutesMax <= 15) return 12;
    return 20;
  }
  function suggestedNew(base, learnedCount, fatigue, phase) {
    if (fatigue || phase === 'exam' || phase === 'eve') return 0;
    if (base.load === 'light') return 0;
    if (base.load === 'short') return learnedCount > 0 ? 0 : 5;
    return learnedCount > 0 ? 5 : 8;
  }
  function phaseOf(todayKey, examDate) {
    if (!validDate(examDate)) return 'none';
    const n = daysUntil(todayKey, examDate);
    if (n > 1) return 'sprint';
    if (n === 1) return 'eve';
    if (n === 0) return 'exam';
    return 'after';
  }
  function oldTable(target) {
    return target.listening === 79 && target.reading === 79 && target.writing === 79 && target.speaking === 79;
  }
  function ensureExam(exam) {
    if (exam == null) {
      const d = DEFAULT_EXAM;
      return {
        date: d.date, start: d.start, arriveBy: d.arriveBy, place: d.place,
        variant: d.variant, purpose: d.purpose,
        target: Object.assign({}, d.target), targetEdited: false, observed: ''
      };
    }
    const e = Object.assign({}, exam);
    if (e.date !== '' && !validDate(e.date)) e.date = DEFAULT_EXAM.date;
    if (e.date == null) e.date = DEFAULT_EXAM.date;
    if (e.start === undefined) e.start = DEFAULT_EXAM.start;
    else if (e.start !== '' && !validTime(e.start)) e.start = DEFAULT_EXAM.start;
    if (e.arriveBy === undefined) e.arriveBy = DEFAULT_EXAM.arriveBy;
    else if (e.arriveBy !== '' && !validTime(e.arriveBy)) e.arriveBy = DEFAULT_EXAM.arriveBy;
    if (e.place == null) e.place = DEFAULT_EXAM.place;
    if (typeof e.variant !== 'string' || !e.variant) e.variant = DEFAULT_EXAM.variant;
    if (!e.purpose) e.purpose = DEFAULT_EXAM.purpose;
    const src = e.target && typeof e.target === 'object' ? e.target : {};
    const t = Object.assign({}, src);
    ['listening', 'reading', 'writing', 'speaking'].forEach(function (k) {
      if (typeof t[k] !== 'number' || !Number.isFinite(t[k])) t[k] = OFFICIAL_TARGET[k];
      else t[k] = clamp(t[k], 0, 90);
    });
    e.target = t;
    if (typeof e.targetEdited !== 'boolean') e.targetEdited = false;
    if (['listening', 'reading', 'writing', 'speaking'].indexOf(e.observed) < 0) e.observed = '';
    e.oldTable = oldTable(t);
    return e;
  }
  function readExam(state) { return ensureExam(state && state.exam); }

  function skillsFor(phase, exam, day, blocked) {
    const base = { usesSpeechScore: false, balance: true, observed: null, offer: [], primary: 'none', heading: '' };
    if (blocked || phase === 'exam' || phase === 'eve') {
      base.heading = phase === 'eve' ? '考前一天不练习' : (phase === 'exam' ? '考试日不学习' : '');
      return base;
    }
    if (phase !== 'sprint' || exam.variant !== 'PTE Academic') {
      return Object.assign(base, {
        primary: 'review',
        offer: ['review', 'listen', 'shadow', 'drive'],
        heading: phase === 'after' ? '平时练习。不补考试没做完的量，也不估计考分。' : '场次未按 PTE Academic 来对照题型。'
      });
    }
    if (exam.observed) {
      const map = { listening: 'listen', speaking: 'shadow', reading: 'review', writing: 'review' };
      const primary = map[exam.observed];
      const offer = [primary, 'listen', 'shadow', 'review', 'drive'].filter(function (v, i, a) { return a.indexOf(v) === i; });
      const heading = (exam.observed === 'reading' || exam.observed === 'writing')
        ? '你标了阅读或写作。这里没有 PTE 阅读题或写作评分，只能复习词和句子。'
        : '先做你自己标出的那一项。这不是分数预测。';
      return { usesSpeechScore: false, balance: false, observed: exam.observed, offer: offer, primary: primary, heading: heading };
    }
    const listenFirst = day % 2 === 0;
    return {
      usesSpeechScore: false, balance: true, observed: null,
      primary: listenFirst ? 'listen' : 'shadow',
      offer: listenFirst ? ['listen', 'shadow', 'review', 'drive'] : ['shadow', 'listen', 'review', 'drive'],
      heading: '均衡熟悉听力和跟读，不按目标分数猜哪科弱。顺序只是今天把哪一个放前面。'
    };
  }

  function buildAdvice(x) {
    const lines = [];
    const known = x.exam.date === '2026-11-22';
    if (x.phase === 'exam') {
      lines.push('今天不学新词，也不复习。优先睡觉和去考场。');
      if (x.exam.start && x.exam.arriveBy) {
        lines.push('开考 ' + x.exam.start + '（澳东夏令时）' + (x.exam.place ? '，' + x.exam.place : '') + '。Pearson 考场规则要求至少提前 30 分钟到场签到，所以最晚 ' + x.exam.arriveBy + '。' + x.exam.arriveBy + ' 不是开考。迟到可能不能考。');
      } else lines.push('开考或到达钟点没填全，这里不猜测。仍然不学习。');
      lines.push('平日周日会睡到 14:30。今天不能沿用，也不把睡到 14:30 当成还来得及。起床和出门时间不代你定。');
      if (known) lines.push('周六 23:00 到周日 07:00 的夜班照常，在墨尔本，不是考试早上要跨州赶路。11 月墨尔本和悉尼都是澳东夏令时，钟点相同。没有改班，也没有加提醒。');
      else if (x.facts.nightMorning) lines.push('这天 07:00 前若仍是夜班，这里不假设你会取消。下夜班后也不安排学习。');
      if (x.now.kind === 'night') lines.push('现在仍是夜班，不学习。');
      return lines;
    }
    if (x.phase === 'eve') {
      lines.push('今天不练习。准备身份证件，以及你自己怎么去' + (x.exam.place || '考场') + '。这里不做路线规划，也不提醒出发。');
      if (known) lines.push('今晚 23:00 到明天 07:00 夜班照常，在墨尔本。没有改班。');
      else if (x.facts.nightEvening) lines.push('若今晚档期里有 23:00 夜班，这里不假设取消。夜班前的空隙也不学习。');
      lines.push('新词是 0，也不把前面没做的复习补上。');
      return lines;
    }
    if (x.now.kind === 'sleep') lines.push('现在是睡眠时间，不安排学习。');
    else if (x.now.kind === 'night') lines.push('现在是夜班，不安排学习。');
    else if (x.now.kind === 'gap') lines.push('这是 17:30–18:00 或 22:00–23:00 的换班空隙，不安排学习。');
    else if (x.now.kind === 'buffer') lines.push('早晨这段不安排学习，也不另外假设你还会再睡一觉。');
    else if (x.now.kind === 'dayshift') lines.push('现在是白班。只有你已经安全停下才做；不把上班当成空闲，也不假设午饭时间。');
    else if (x.now.kind === 'recovery') lines.push('现在是周末恢复时段（14:30 之后、19:00 睡觉前）。最多一段 20–30 分钟，不要把空档排满。');
    else if (x.base.weekday === 3 && x.now.kind === 'awake') lines.push('周四傍晚是醒着的，但今天总共仍只建议 10–15 分钟，不要排满。');
    if (x.phase === 'after') lines.push('考试日已过。恢复平时的轮班建议，不补单词债，也不估计考分。');
    else if (x.phase === 'sprint' && x.exam.variant === 'PTE Academic') lines.push('考前短练用现有的听力和跟读，放进上面这一段里，不再加一段时间。不是 PTE 真题，也不是模拟评分。');
    if (!x.blocked && x.base.load === 'light' && x.learnedCount === 0) lines.push('还没有已学词可复习，所以今天不另开新词。下面原来的列表仍可自己用。');
    if (x.base.eveningUnavailable) lines.push('今晚从 18:00 起没有学习时间。');
    if (x.base.safeBreak) lines.push('周四白天仍是上班。普通模式且你自己有安全空隙时，最多 10–15 分钟，不把某一刻当成午饭。');
    if (x.fatigue) lines.push('疲劳开关开着：建议休息。记录还在，也不会因此扣连续天数。');
    return lines;
  }

  function headlineFor(phase, exam, days) {
    if (!validDate(exam.date)) return '未设考试日';
    if (phase === 'exam') return '考试日 · 不学习';
    if (phase === 'eve') return '考前一天 · 不练习';
    if (phase === 'after') return '考试日已过';
    if (exam.variant === 'PTE Academic') return 'PTE Academic · 还有 ' + days + ' 天';
    return '还有 ' + days + ' 天';
  }
  function workloadText(base, phase, fatigue) {
    if (phase === 'exam' || phase === 'eve' || fatigue) return '建议负荷：0 分钟';
    if (base.load === 'light') return '建议负荷：可选 5–10 分钟复习';
    if (base.load === 'short') return '建议负荷：最多 10–15 分钟';
    return '建议负荷：最多一段 20–30 分钟';
  }

  function recommend(opts) {
    opts = opts || {};
    const when = opts.when ? new Date(opts.when) : new Date();
    const state = opts.state || {};
    const parts = sydneyParts(when);
    const base = baseDay(parts.weekday);
    const facts = shiftFacts(parts.weekday);
    const exam = readExam(state);
    const phase = phaseOf(parts.key, exam.date);
    const days = validDate(exam.date) ? daysUntil(parts.key, exam.date) : null;
    const learnedCount = Array.isArray(state.learned) ? state.learned.length : 0;
    const fatigue = !!state.light;
    const blocked = phase === 'exam' || phase === 'eve';
    let savedOverride = null;
    if (state.nw && Object.prototype.hasOwnProperty.call(state.nw, parts.key) && Number.isFinite(+state.nw[parts.key]))
      savedOverride = clamp(state.nw[parts.key], 0, 20);
    const suggested = suggestedNew(base, learnedCount, fatigue, phase);
    const newWords = (blocked || fatigue) ? 0 : (savedOverride == null ? suggested : savedOverride);
    let now = classify(parts.weekday, parts.minutes);
    if (phase === 'exam' && !(facts.nightMorning && parts.minutes < 420))
      now = { kind: 'examday', studyNow: false, label: '考试日', usualKind: now.kind };
    if (phase === 'eve' && (now.kind === 'recovery' || now.kind === 'awake'))
      now = Object.assign({}, now, { label: '考前一天：这段平时可练，今天不练习' });
    if (blocked || fatigue) now = Object.assign({}, now, { studyNow: false });
    const quietNow = ['sleep', 'night', 'gap', 'buffer'].indexOf(now.kind) >= 0;
    let cap = 0;
    if (!blocked && !fatigue) {
      cap = itemCap(base.minutesMax);
      if (base.load === 'light' && learnedCount === 0 && newWords === 0) cap = 0;
      if (savedOverride != null) cap = Math.max(cap, newWords);
    }
    const optional = (!blocked && fatigue) ? { cap: 8, newWords: 0, label: '可选：只复习已学' } : null;
    const skills = skillsFor(phase, exam, parts.day, blocked);
    const advice = buildAdvice({ phase: phase, now: now, base: base, facts: facts, exam: exam, fatigue: fatigue, learnedCount: learnedCount, blocked: blocked });
    return {
      key: parts.key, parts: parts, base: base, now: now, facts: facts, phase: phase,
      daysUntil: days, exam: exam, fatigue: fatigue, blocked: blocked, optional: optional,
      suggestedNewWords: suggested, newWords: newWords, savedOverride: savedOverride, cap: cap,
      goal: state.goal || 50, learnedCount: learnedCount,
      showActions: !blocked && !fatigue && !quietNow && cap > 0,
      showOptional: !!(optional && !quietNow),
      headline: headlineFor(phase, exam, days),
      workload: workloadText(base, phase, fatigue),
      advice: advice, skills: skills,
      clocksMatch: clocksMatch(when),
      usesSpeechScore: false,
      targetNote: 'Superior English 记录：内政部 2025-08-07 起，雅思是四项各 8；你这场 PTE Academic 的单项最低分是听 69、读 70、写 85、说 88，每项分开算。不是 Pearson 对照表，也不是 8 月 6 日前的每项 79。不是签证资格意见。基线未知，不按数字猜弱项，也不预测分数。'
    };
  }

  function hydrateEp(raw) {
    const S = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : { days: {}, learned: [], best: 0 };
    if (!S.days || typeof S.days !== 'object' || Array.isArray(S.days)) S.days = {};
    if (!Array.isArray(S.learned)) S.learned = [];
    if (typeof S.best !== 'number' || !Number.isFinite(S.best)) S.best = 0;
    if (!S.cat) S.cat = 'All';
    if (!S.goal) S.goal = 50;
    if (!S.qlen) S.qlen = 20;
    if (!S.lt || typeof S.lt !== 'object' || Array.isArray(S.lt)) S.lt = {};
    if (!S.sh || typeof S.sh !== 'object' || Array.isArray(S.sh)) S.sh = { i: {}, h: {} };
    if (!S.sh.i || typeof S.sh.i !== 'object' || Array.isArray(S.sh.i)) S.sh.i = {};
    if (!S.sh.h || typeof S.sh.h !== 'object' || Array.isArray(S.sh.h)) S.sh.h = {};
    if (typeof S.light !== 'boolean') S.light = false;
    if (!S.nw || typeof S.nw !== 'object' || Array.isArray(S.nw)) S.nw = {};
    if (!S.rest || typeof S.rest !== 'object' || Array.isArray(S.rest)) S.rest = {};
    S.exam = ensureExam(S.exam);
    return S;
  }

  function buildSession(words, state, opts) {
    opts = opts || {};
    const list = Array.isArray(words) ? words : [];
    const newWords = clamp(opts.newWords == null ? 0 : opts.newWords, 0, 20);
    const cap = Math.max(0, opts.cap | 0);
    const learnedSet = {};
    (state.learned || []).forEach(function (w) { learnedSet[w] = true; });
    const learned = list.filter(function (w) { return learnedSet[w.w]; });
    const rnd = state.rnd !== false;
    const seed = String(opts.seed || 'plan');
    const review = rnd ? seededShuffle(learned, seed + '|rev') : learned.slice();
    const freshAll = list.filter(function (w) { return !learnedSet[w.w]; });
    const fresh = (rnd ? seededShuffle(freshAll, seed + '|new') : freshAll).slice(0, newWords);
    const reviewTake = Math.max(0, cap - fresh.length);
    const items = cap === 0 ? [] : review.slice(0, reviewTake).concat(fresh).slice(0, cap);
    return {
      items: items,
      reviewCount: Math.min(review.length, reviewTake),
      newCount: Math.min(fresh.length, cap),
      learnedCount: learned.length,
      spacedReview: false,
      dueCount: null,
      usesSpeechScore: false,
      note: '没有间隔重复到期，也没有掌握度。复习只用已学单词。浏览器跟读分不拿来判断弱项，也不当成 PTE 分。'
    };
  }

  function driveQueuePlan(state, once) {
    const dv = (state && state.dv) || {};
    const savedCap = dv.cap == null ? 12 : dv.cap;
    const cap = once && once.cap != null ? once.cap : savedCap;
    return {
      cap: cap, bounded: cap > 0,
      reviewFirst: !!((once && once.reviewFirst) || dv.rf),
      savedCap: savedCap, savedOrder: dv.order || 'seq', savedRf: !!dv.rf
    };
  }
  function shouldDeferAppReload(flags) {
    flags = flags || {};
    return !!(flags.driveOn || flags.recording);
  }

  function unwrapEp(payload) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return { ok: false, error: '备份不是对象' };
    if (payload.ep && typeof payload.ep === 'object' && !Array.isArray(payload.ep)) return { ok: true, ep: payload.ep };
    if (payload.days || payload.learned || payload.best != null || payload.goal != null) return { ok: true, ep: payload };
    return { ok: false, error: '认不出本机进度数据' };
  }
  function validateEp(payload) {
    const u = unwrapEp(payload);
    if (!u.ok) return u;
    const ep = u.ep;
    const bad = ['__proto__', 'constructor', 'prototype'].some(function (k) { return Object.prototype.hasOwnProperty.call(ep, k); });
    if (bad) return { ok: false, error: '含有不允许的字段' };
    let text = '';
    try { text = JSON.stringify(ep); } catch (e) { return { ok: false, error: '无法序列化' }; }
    if (text.length > 2000000) return { ok: false, error: '文件太大' };
    if (ep.days != null && (typeof ep.days !== 'object' || Array.isArray(ep.days))) return { ok: false, error: 'days 格式不对' };
    if (ep.learned != null && !Array.isArray(ep.learned)) return { ok: false, error: 'learned 必须是数组' };
    if (ep.learned && ep.learned.some(function (x) { return typeof x !== 'string'; })) return { ok: false, error: 'learned 里必须是字符串' };
    if (ep.best != null && (typeof ep.best !== 'number' || !Number.isFinite(ep.best))) return { ok: false, error: 'best 必须是数字' };
    if (ep.goal != null && (typeof ep.goal !== 'number' || !Number.isFinite(ep.goal) || ep.goal < 1 || ep.goal > 500)) return { ok: false, error: 'goal 不是可用的数字' };
    if (ep.exam != null && (typeof ep.exam !== 'object' || Array.isArray(ep.exam))) return { ok: false, error: 'exam 格式不对' };
    return { ok: true, ep: ep };
  }
  function applyImport(current, payload, opts) {
    if (!opts || opts.confirm !== true) return { ok: false, error: '需要你在页面上确认后才能覆盖' };
    const v = validateEp(payload);
    if (!v.ok) return v;
    return { ok: true, next: v.ep, replaced: true };
  }

  function guideSections() {
    return [
      { t: '今天这个方块', d: '上面是悉尼日期下的建议负荷，下面那个 20/50/75/100 仍是你原来的每日目标。两边互不覆盖。乱序开关也还在。' },
      { t: '周一', d: '白班 9:00–17:30，晚上 23:00 夜班。睡 7:30–9:00 和 18:00–22:00。17:30–18:00、22:00–23:00 不学。可选 5–10 分钟复习已学词，新词建议 0。' },
      { t: '周二', d: '和周一一样，是双班。只建议可选的短复习，不安排新词。' },
      { t: '周三', d: '夜班到早上 7:00，然后白班。18:00 起睡到周四 7:00，晚上不能学。可选 5–10 分钟复习，新词建议 0。' },
      { t: '周四', d: '长睡眠到 7:00，不另加早晨小睡。白天仍上班。普通模式并且你自己有安全空隙时，最多 10–15 分钟，不假设午饭。22:00 睡到周五 7:00。已有可复习的词时，新词建议是 0。' },
      { t: '周五', d: '双班。可选 5–10 分钟复习，新词建议 0。18:00–22:00 睡觉，23:00 开始夜班。' },
      { t: '周六（普通周末）', d: '夜班到 7:00，睡到 14:30，19:00 再睡。中间最多一段可选的 20–30 分钟，不排满。11 月 21 日不要用这条。' },
      { t: '周日（普通周末）', d: '和普通周六一样。11 月 22 日不要用这条，尤其不能睡到 14:30 还以为来得及。' },
      { t: '11 月 21 日', d: '不练习。准备身份证件，以及你自己怎么去 Box Hill。不做路线规划，也不发提醒。当晚 23:00 到次日 07:00 夜班照常，在墨尔本。' },
      { t: '11 月 22 日', d: '不学习。开考 15:30（澳东夏令时），Box Hill VIC。最晚 15:00 到，15:00 不是开考。优先睡觉和去考场。不排起床或出门。夜班到 07:00 照常。墨尔本和悉尼这天钟点相同。' },
      { t: '考完以后', d: '日期过了就回到平时轮班建议。不补单词债，不显示分数预测。' },
      { t: '分数记录', d: '初始数字是内政部 Superior English（2025-08-07 起）PTE Academic：听 69、读 70、写 85、说 88。同一档里雅思是四项各 8。可以改。不是每项 79，也不是签证意见。基线未知。' },
      { t: '更新安装版', d: '进度在这台浏览器的 localStorage，键名是 ep。先在进度页导出 JSON。打开新页面会换缓存，但不会清 ep。开车播放或录音时不会强制刷新。不要点清除网站数据。' },
      { t: '做不到的事', d: '不是 PTE 模拟考试，没有真题，也不用麦克风给口语打 PTE 分。iPhone 锁屏或后台是否还能朗读，这里没有验证。困了不要开车。' }
    ];
  }
  function taskNotes() {
    return [
      { name: 'Summarize Group Discussion', timing: 'Pearson 2025 年 7 月 Test Tips：听完三人讨论后，准备 10 秒，用 2 分钟口头总结。', url: PTE_TIPS },
      { name: 'Respond to a Situation', timing: '同一份 Test Tips：提示音频结束后用 40 秒回应。Pearson 的 Enhanced PTE Academic 研究报告另写准备 10 秒、回答 40 秒。', url: PTE_REPORT },
      { name: '适用范围', timing: '这两题从 2025-08-07 之后的 PTE Academic / UKVI 加入。PTE Core 没改。本应用不播放讨论、不给这两题计时打分，跟读不是这两题。整场大约仍是 2 小时，但不排进你的日程。', url: PTE_UPDATES }
    ];
  }

  return {
    APP_VERSION: APP_VERSION, WD: WD, OFFICIAL_TARGET: OFFICIAL_TARGET, DEFAULT_EXAM: DEFAULT_EXAM,
    KNOWN_KEYS: KNOWN_KEYS, HOME_AFFAIRS: HOME_AFFAIRS, PTE_UPDATES: PTE_UPDATES, PTE_TIPS: PTE_TIPS,
    PTE_REPORT: PTE_REPORT, PTE_RULES: PTE_RULES,
    sydneyParts: sydneyParts, clockParts: clockParts, clocksMatch: clocksMatch, isoDate: isoDate,
    daysInMonth: daysInMonth, sundayIndex: sundayIndex, prevKey: prevKey, daysUntil: daysUntil,
    streakCount: streakCount, seededShuffle: seededShuffle, classify: classify, shiftFacts: shiftFacts,
    baseDay: baseDay, itemCap: itemCap, recommend: recommend, hydrateEp: hydrateEp, ensureExam: ensureExam,
    readExam: readExam, buildSession: buildSession, driveQueuePlan: driveQueuePlan,
    shouldDeferAppReload: shouldDeferAppReload, validateEp: validateEp, applyImport: applyImport,
    guideSections: guideSections, taskNotes: taskNotes
  };
});
