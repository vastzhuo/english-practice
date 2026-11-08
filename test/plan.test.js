const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const P = require('../plan.js');

const root = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const FIX = JSON.parse(read('test/fixtures/synthetic-ep.json'));

function rec(iso, state) {
  return P.recommend({ when: iso, state: state || { goal: 50, learned: ['resilient'], rnd: true, light: false } });
}

test('Sydney date crosses UTC midnight and matches weekday', () => {
  const p = P.sydneyParts('2026-11-08T14:00:00Z');
  assert.equal(p.key, '2026-11-09');
  assert.equal(p.weekday, 0);
  assert.equal(p.hour, 1);
  assert.equal(P.classify(p.weekday, p.minutes).kind, 'night');
});

test('DST weekends stay on Sunday', () => {
  const a = P.sydneyParts('2026-04-04T15:30:00Z');
  const b = P.sydneyParts('2026-04-04T16:30:00Z');
  assert.equal(a.weekday, 6);
  assert.equal(b.weekday, 6);
  assert.equal(a.key, '2026-04-05');
  assert.equal(a.hour, 2);
  assert.equal(b.hour, 2);
  const c = P.sydneyParts('2026-10-03T15:30:00Z');
  const d = P.sydneyParts('2026-10-03T16:30:00Z');
  assert.equal(c.weekday, 6);
  assert.equal(d.weekday, 6);
  assert.equal(c.hour, 1);
  assert.equal(d.hour, 3);
});

test('Melbourne and Sydney clocks match on the exam instant', () => {
  const iso = '2026-11-22T04:30:00Z';
  assert.equal(P.clocksMatch(iso), true);
  const s = P.sydneyParts(iso);
  const m = P.clockParts(iso, 'Australia/Melbourne');
  assert.equal(s.key, '2026-11-22');
  assert.equal(s.hour, 15);
  assert.equal(s.minute, 30);
  assert.equal(m.hour, 15);
  assert.equal(m.minute, 30);
});

test('quiet intervals are never study slots', () => {
  for (let wd = 0; wd < 7; wd++) {
    for (let m = 0; m < 1440; m += 15) {
      const c = P.classify(wd, m);
      if (['sleep', 'night', 'gap', 'buffer', 'dayshift'].includes(c.kind)) assert.equal(c.studyNow, false, wd + '@' + m);
    }
  }
  assert.equal(P.classify(0, 17 * 60 + 45).kind, 'gap');
  assert.equal(P.classify(5, 17 * 60 + 45).kind, 'recovery');
  assert.equal(P.classify(5, 17 * 60 + 45).studyNow, true);
  assert.equal(P.classify(0, 22 * 60 + 30).kind, 'gap');
  assert.equal(P.classify(3, 22 * 60 + 30).kind, 'sleep');
  assert.equal(P.classify(2, 19 * 60).kind, 'sleep');
  assert.equal(P.classify(3, 3 * 60).kind, 'sleep');
  assert.equal(P.classify(3, 8 * 60).kind, 'buffer');
  assert.equal(P.classify(4, 8 * 60).kind, 'buffer');
  assert.equal(P.classify(1, 3 * 60).kind, 'night');
  assert.equal(P.classify(2, 3 * 60).kind, 'night');
  assert.equal(P.classify(5, 10 * 60).kind, 'sleep');
  assert.equal(P.classify(5, 15 * 60).kind, 'recovery');
  assert.equal(P.classify(6, 20 * 60).kind, 'sleep');
  assert.equal(P.classify(0, 8 * 60).kind, 'sleep');
  assert.equal(P.classify(4, 23 * 60 + 30).kind, 'night');
});

test('weekday loads stay inside the shift limits', () => {
  assert.equal(P.baseDay(0).load, 'light');
  assert.equal(P.baseDay(0).double, true);
  assert.equal(P.baseDay(0).minutesMax, 10);
  assert.equal(P.baseDay(2).eveningUnavailable, true);
  assert.equal(P.baseDay(3).safeBreak, true);
  assert.equal(P.baseDay(3).minutesMax, 15);
  assert.equal(P.baseDay(5).oneSession, true);
  assert.equal(P.baseDay(5).minutesMax, 30);
  assert.ok(P.baseDay(5).minutesMax < 240);
});

test('14-day countdown uses the Sydney date', () => {
  assert.equal(P.daysUntil('2026-11-08', '2026-11-22'), 14);
  const r = rec('2026-11-07T13:00:00Z');
  assert.equal(r.key, '2026-11-08');
  assert.equal(r.daysUntil, 14);
  assert.equal(r.phase, 'sprint');
  assert.equal(r.headline, 'PTE Academic · 还有 14 天');
  assert.doesNotMatch(r.headline, /雅思|IELTS|Core/);
});

test('Sunday recovery is one short block and does not copy the manual goal', () => {
  const state = { goal: 100, learned: ['a', 'b'], rnd: true, light: false, sh: { h: { a: [40] } } };
  const snap = structuredClone(state);
  const r = rec('2026-11-08T06:00:00Z', state);
  assert.deepEqual(state, snap);
  assert.equal(r.goal, 100);
  assert.equal(r.now.kind, 'recovery');
  assert.equal(r.now.studyNow, true);
  assert.equal(r.showActions, true);
  assert.equal(r.suggestedNewWords, 5);
  assert.equal(r.newWords, 5);
  assert.equal(r.cap, 20);
  assert.equal(r.minutesMax, undefined);
  assert.equal(r.skills.balance, true);
  assert.equal(r.skills.primary, 'listen');
  assert.equal(r.skills.usesSpeechScore, false);
  assert.equal(r.usesSpeechScore, false);
  assert.equal(r.exam.observed, '');
  assert.equal(r.readiness, undefined);
  assert.equal(r.forecast, undefined);
  assert.equal(r.wake, undefined);
  assert.equal(r.depart, undefined);
  assert.deepEqual(r.exam.target, { listening: 69, reading: 70, writing: 85, speaking: 88 });
  assert.equal(r.exam.target.listening === 79 || r.exam.target.speaking === 80, false);
  assert.match(r.targetNote, /69/);
  assert.match(r.targetNote, /不是签证/);
  assert.match(r.skills.heading, /不按目标分数/);
});

test('night and sleep hide the action buttons', () => {
  const night = rec('2026-11-08T14:00:00Z');
  assert.equal(night.now.kind, 'night');
  assert.equal(night.showActions, false);
  assert.equal(night.skills.primary, 'shadow');
  const sleep = rec('2026-11-07T23:00:00Z');
  assert.equal(sleep.key, '2026-11-08');
  assert.equal(sleep.now.kind, 'sleep');
  assert.equal(sleep.showActions, false);
});

test('Thursday safe break does not invent lunch and keeps new words at zero when review exists', () => {
  const r = rec('2026-11-12T01:00:00Z', { goal: 50, learned: ['a'], light: false });
  assert.equal(r.base.weekday, 3);
  assert.equal(r.now.kind, 'dayshift');
  assert.equal(r.now.studyNow, false);
  assert.equal(r.suggestedNewWords, 0);
  assert.match(r.advice.join('\n'), /不假设午饭|不把某一刻当成午饭/);
  const fresh = rec('2026-11-12T01:00:00Z', { goal: 50, learned: [], light: false });
  assert.equal(fresh.suggestedNewWords, 5);
  const morning = P.classify(3, 8 * 60);
  assert.equal(morning.kind, 'buffer');
  assert.notEqual(morning.kind, 'sleep');
});

test('fatigue skips without touching history', () => {
  const state = { goal: 75, learned: ['a'], days: { '2026-11-07': 1 }, best: 2, light: true, rnd: false, nw: { '2026-11-08': 4 } };
  const snap = structuredClone(state);
  const r = rec('2026-11-08T06:00:00Z', state);
  assert.deepEqual(state, snap);
  assert.equal(r.newWords, 0);
  assert.equal(r.suggestedNewWords, 0);
  assert.equal(r.cap, 0);
  assert.equal(r.savedOverride, 4);
  assert.equal(r.showActions, false);
  assert.equal(r.showOptional, true);
  assert.equal(r.optional.newWords, 0);
  assert.match(r.advice.join('\n'), /疲劳/);
});

test('21 Nov is no practice and keeps the Melbourne night shift', () => {
  const r = rec('2026-11-21T04:00:00Z');
  assert.equal(r.key, '2026-11-21');
  assert.equal(r.phase, 'eve');
  assert.equal(r.blocked, true);
  assert.equal(r.newWords, 0);
  assert.equal(r.cap, 0);
  assert.deepEqual(r.skills.offer, []);
  assert.equal(r.showActions, false);
  assert.equal(r.now.studyNow, false);
  const text = r.advice.join('\n');
  assert.match(text, /不练习/);
  assert.match(text, /证件/);
  assert.match(text, /墨尔本/);
  assert.match(text, /Box Hill/);
  assert.doesNotMatch(text, /20–30|20-30/);
  assert.equal(r.wake, undefined);
  assert.equal(r.depart, undefined);
});

test('22 Nov exam day uses 15:30 start and does not keep Sunday sleep until 14:30', () => {
  const morning = rec('2026-11-21T23:00:00Z');
  assert.equal(morning.key, '2026-11-22');
  assert.equal(morning.phase, 'exam');
  assert.equal(morning.now.kind, 'examday');
  assert.equal(morning.now.usualKind, 'sleep');
  assert.equal(morning.newWords, 0);
  assert.equal(morning.cap, 0);
  assert.equal(morning.showActions, false);
  const text = morning.advice.join('\n');
  assert.match(text, /15:30/);
  assert.match(text, /15:00/);
  assert.match(text, /不是开考/);
  assert.match(text, /不能沿用/);
  assert.match(text, /14:30/);
  assert.match(text, /墨尔本/);
  assert.match(text, /不学/);
  assert.doesNotMatch(text, /可以睡到 14:30/);
  assert.equal(morning.wake, undefined);
  assert.equal(morning.depart, undefined);
  assert.equal(morning.travelPlan, undefined);
  const night = rec('2026-11-21T15:00:00Z');
  assert.equal(night.key, '2026-11-22');
  assert.equal(night.now.kind, 'night');
  assert.match(night.advice.join('\n'), /夜班/);
  const during = rec('2026-11-22T05:00:00Z');
  assert.equal(during.now.usualKind, 'recovery');
  assert.equal(during.showActions, false);
  assert.doesNotMatch(during.advice.join('\n'), /20–30/);
});

test('the usual Sunday template still applies a week earlier', () => {
  const r = rec('2026-11-15T05:00:00Z');
  assert.equal(r.key, '2026-11-15');
  assert.equal(r.phase, 'sprint');
  assert.equal(r.daysUntil, 7);
  assert.equal(r.now.kind, 'recovery');
  assert.equal(r.showActions, true);
  assert.equal(r.base.minutesMax, 30);
});

test('after the exam the plan is neutral', () => {
  const r = rec('2026-11-22T23:00:00Z');
  assert.equal(r.key, '2026-11-23');
  assert.equal(r.phase, 'after');
  assert.equal(r.headline, '考试日已过');
  assert.match(r.advice.join('\n'), /不补单词债/);
  assert.equal(r.base.load, 'light');
  assert.equal(r.suggestedNewWords, 0);
});

test('an edited 79 is kept and flagged, not replaced', () => {
  const state = { goal: 50, learned: [], light: false, exam: { date: '2026-11-22', variant: 'PTE Academic', target: { listening: 79, reading: 79, writing: 79, speaking: 79 }, targetEdited: true, observed: '' } };
  const snap = structuredClone(state);
  const r = rec('2026-11-08T06:00:00Z', state);
  assert.equal(r.exam.oldTable, true);
  assert.equal(r.exam.target.speaking, 79);
  assert.deepEqual(state, snap);
});

test('observed focus is used only after the user sets it', () => {
  const state = { goal: 50, learned: ['a'], light: false, exam: { date: '2026-11-22', start: '15:30', arriveBy: '15:00', place: 'Box Hill VIC', variant: 'PTE Academic', target: P.OFFICIAL_TARGET, observed: 'reading' } };
  const r = rec('2026-11-08T06:00:00Z', state);
  assert.equal(r.skills.primary, 'review');
  assert.equal(r.skills.balance, false);
  assert.match(r.skills.heading, /没有 PTE 阅读/);
  assert.equal(r.skills.usesSpeechScore, false);
});

test('user new-word override does not change the manual goal', () => {
  const state = { goal: 50, learned: ['a'], light: false, nw: { '2026-11-09': 3 }, rnd: true };
  const r = rec('2026-11-09T02:00:00Z', state);
  assert.equal(r.key, '2026-11-09');
  assert.equal(r.base.load, 'light');
  assert.equal(r.suggestedNewWords, 0);
  assert.equal(r.newWords, 3);
  assert.equal(r.goal, 50);
  assert.equal(state.goal, 50);
});

test('legacy synthetic fixture survives hydrate and does not invent a weak skill', () => {
  const raw = structuredClone(FIX);
  const S = P.hydrateEp(raw);
  assert.equal(S.customNote, 'synthetic-not-joel');
  assert.equal(S.futureWidget.ok, true);
  assert.equal(S.goal, 75);
  assert.equal(S.rnd, false);
  assert.equal(S.dv.gap, 8);
  assert.deepEqual(S.learned, FIX.learned);
  assert.equal(S.exam.target.speaking, 88);
  assert.equal(S.exam.start, '15:30');
  assert.equal(S.exam.arriveBy, '15:00');
  assert.equal(S.exam.place, 'Box Hill VIC');
  assert.equal(S.exam.observed, '');
  assert.equal(S.exam.wake, undefined);
  const again = JSON.parse(JSON.stringify(S));
  assert.equal(again.futureWidget.n, 1);
  const r = P.recommend({ when: '2026-11-08T06:00:00Z', state: S });
  assert.equal(r.exam.observed, '');
  assert.equal(r.skills.usesSpeechScore, false);
  assert.equal(r.goal, 75);
});

test('review queue is learned words only, with no due count', () => {
  const words = [{ w: 'a' }, { w: 'b' }, { w: 'c' }, { w: 'd' }];
  const state = { learned: ['b', 'a'], rnd: false, sh: { h: { a: [10] } } };
  const s = P.buildSession(words, state, { newWords: 1, cap: 3, seed: 'x', reviewFirst: true });
  assert.deepEqual(s.items.map((w) => w.w), ['a', 'b', 'c']);
  assert.equal(s.dueCount, null);
  assert.equal(s.spacedReview, false);
  assert.equal(s.usesSpeechScore, false);
  const scored = P.buildSession(words, state, { newWords: 1, cap: 3, seed: 'x', reviewFirst: true });
  const plain = P.buildSession(words, { learned: ['b', 'a'], rnd: false }, { newWords: 1, cap: 3, seed: 'x', reviewFirst: true });
  assert.deepEqual(scored.items.map((w) => w.w), plain.items.map((w) => w.w));
  const rnd = P.buildSession(words, { learned: ['a', 'b', 'c', 'd'], rnd: true }, { newWords: 0, cap: 4, seed: 'day', reviewFirst: true });
  assert.equal(rnd.items.length, 4);
  assert.equal(rnd.usesSpeechScore, false);
});

test('import needs confirmation and keeps unknown fields', () => {
  assert.equal(P.applyImport({}, { learned: ['a'] }, { confirm: false }).ok, false);
  assert.equal(P.validateEp({ learned: 'no' }).ok, false);
  assert.equal(P.validateEp(JSON.parse('{"__proto__":{"a":1},"learned":["a"]}')).ok, false);
  const yes = P.applyImport({}, { app: 'daily-english', v: 11, ep: structuredClone(FIX) }, { confirm: true });
  assert.equal(yes.ok, true);
  assert.equal(yes.next.futureWidget.ok, true);
  assert.equal(yes.next.goal, 75);
  assert.equal(yes.next.rnd, false);
  assert.deepEqual(yes.next.sh.h.candid, [62, 70]);
  assert.equal(P.validateEp({ learned: ['a'], goal: 20 }).ok, true);
  assert.equal(P.validateEp({ learned: ['a'], goal: '50' }).ok, false);
});

test('rest days bridge a streak without counting as practice', () => {
  assert.equal(P.streakCount({ '2026-11-07': 1, '2026-11-06': 1 }, {}, '2026-11-08'), 2);
  assert.equal(P.streakCount({ '2026-11-07': 1 }, { '2026-11-08': true }, '2026-11-08'), 2);
  assert.equal(P.prevKey('2026-11-01'), '2026-10-31');
  assert.equal(P.sundayIndex(2026, 11, 1), 0);
});

test('drive queue override does not rewrite saved settings', () => {
  const state = { dv: { cap: 12, order: 'rand', rf: false, gap: 5 } };
  const meta = P.driveQueuePlan(state, { cap: 8, reviewFirst: true, ephemeral: true });
  assert.equal(meta.cap, 8);
  assert.equal(meta.savedCap, 12);
  assert.equal(meta.savedOrder, 'rand');
  assert.equal(state.dv.order, 'rand');
  assert.equal(state.dv.cap, 12);
});

test('reload waits during drive or recording', () => {
  assert.equal(P.shouldDeferAppReload({ driveOn: true, recording: false }), true);
  assert.equal(P.shouldDeferAppReload({ driveOn: false, recording: true }), true);
  assert.equal(P.shouldDeferAppReload({ driveOn: false, recording: false }), false);
});

test('cache version matches and the app does not add notifications', () => {
  const html = read('index.html');
  const sw = read('sw.js');
  const app = read('app.js');
  const drive = read('drive.js');
  assert.match(html, /v11/);
  assert.match(html, /plan\.js\?v=11/);
  assert.match(html, /app\.js\?v=11/);
  assert.match(sw, /ep-v11/);
  assert.match(sw, /plan\.js\?v=11/);
  assert.equal(P.APP_VERSION, 11);
  const src = html + sw + app + drive + read('plan.js');
  assert.doesNotMatch(src, /new Notification|requestPermission|showNotification|registration\.showNotification/);
  assert.match(drive, /本节结束/);
  assert.match(drive, /未在本应用验证/);
  assert.match(app, /confirm:true/);
});
