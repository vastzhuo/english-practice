/**
 * Mobile/desktop smoke for the static PWA.
 * Run: node test/ui-smoke.mjs
 * Needs Google Chrome and puppeteer-core (this repo does not vendor it).
 * Fixture data is synthetic, not a real learner record.
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const fixture = JSON.parse(fs.readFileSync(path.join(root, 'test/fixtures/synthetic-ep.json'), 'utf8'));
const outDir = process.env.SMOKE_OUT || '/tmp/ep-smoke';
fs.mkdirSync(outDir, { recursive: true });

let puppeteer;
try {
  puppeteer = await import('/tmp/pw/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js');
} catch (e) {
  console.error('MISSING: puppeteer-core is not installed at /tmp/pw. Smoke test not run.');
  process.exit(2);
}

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});

const base = process.env.EP_BASE || 'http://127.0.0.1:8765/index.html';
const failures = [];
function check(name, ok, extra) {
  console.log(`${ok ? 'ok' : 'FAIL'} ${name}${extra ? ' ' + extra : ''}`);
  if (!ok) failures.push(name);
}

async function boot(now) {
  const page = await browser.newPage();
  page.on('pageerror', (err) => failures.push('pageerror:' + err.message));
  await page.evaluateOnNewDocument((raw, stamp) => {
    localStorage.setItem('ep', raw);
    window.EP_NOW = stamp;
  }, JSON.stringify(fixture), now);
  await page.goto(base, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#todayPlan', { timeout: 20000 });
  return page;
}

async function overflow(page) {
  return page.evaluate(() => ({
    sw: document.documentElement.scrollWidth,
    cw: document.documentElement.clientWidth
  }));
}

const mobile = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true };
const desktop = { width: 1280, height: 800, deviceScaleFactor: 1 };

const page = await boot('2026-11-08T06:00:00.000Z');
await page.setViewport(mobile);
await page.screenshot({ path: path.join(outDir, 'sunday_plan_mobile.png'), fullPage: false });
const text = await page.$eval('#todayPlan', (el) => el.innerText);
check('headline 14 days', text.includes('还有 14 天'));
check('PTE Academic headline', text.includes('PTE Academic'));
check('headline is not an IELTS plan', !text.split('\n')[1].includes('雅思'));
check('exam start 15:30', text.includes('15:30'));
check('arrival 15:00', text.includes('15:00'));
check('targets 69 and 88', text.includes('69') && text.includes('88'));
check('manual goal line', text.includes('75'));
const goal = await page.$eval('#goal', (el) => el.value);
check('goal select stays 75', goal === '75');
const box = await overflow(page);
check('mobile no horizontal overflow', box.sw <= box.cw + 1, JSON.stringify(box));

for (const tab of ['quiz', 'shadow', 'drive', 'progress', 'learn']) {
  await page.click(`nav button[data-t="${tab}"]`);
  await page.waitForSelector(`#tab-${tab}:not([hidden])`);
  const hidden = await page.$eval(`#tab-${tab}`, (el) => el.hidden);
  check(`tab ${tab} visible`, hidden === false);
}
await page.click('nav button[data-t="drive"]');
await page.waitForSelector('#dvplay');
await page.screenshot({ path: path.join(outDir, 'drive_mobile.png') });
const driveText = await page.$eval('#tab-drive', (el) => el.innerText);
check('drive drowsy warning', driveText.includes('困了不要开车'));
check('drive iOS unverified', driveText.includes('未在本应用验证'));
check('drive no quiz button', !driveText.includes('Start quiz'));

await page.click('nav button[data-t="learn"]');
await page.waitForSelector('[data-act="listen"]');
await page.click('[data-act="listen"]');
await page.waitForSelector('#planQuizGo');
const listenText = await page.$eval('#tab-quiz', (el) => el.innerText);
check('listen action is not a PTE mock', listenText.includes('不是 PTE'));
await page.click('nav button[data-t="learn"]');
await page.waitForSelector('#light');
const before = await page.evaluate(() => JSON.parse(localStorage.getItem('ep')));
await page.click('#light');
await page.waitForSelector('#todayPlan');
const after = await page.evaluate(() => JSON.parse(localStorage.getItem('ep')));
const afterText = await page.$eval('#advice', (el) => el.innerText);
check('fatigue copy', afterText.includes('疲劳'));
check('fatigue keeps learned', after.learned.join() === before.learned.join());
check('fatigue keeps days', JSON.stringify(after.days) === JSON.stringify(before.days));
check('fatigue keeps synthetic note', after.customNote === 'synthetic-not-joel');
check('fatigue keeps goal', after.goal === 75);
await page.screenshot({ path: path.join(outDir, 'fatigue_mobile.png') });

await page.setViewport(desktop);
await page.click('nav button[data-t="learn"]');
await page.waitForSelector('#todayPlan');
await page.screenshot({ path: path.join(outDir, 'sunday_plan_desktop.png') });
const desk = await overflow(page);
check('desktop no horizontal overflow', desk.sw <= desk.cw + 1, JSON.stringify(desk));

await page.click('nav button[data-t="progress"]');
await page.waitForSelector('#backup');
const bad = path.join(outDir, 'bad.json');
fs.writeFileSync(bad, '{"learned":"nope"}');
await page.$('#impFile').then((el) => el.uploadFile(bad));
await page.waitForFunction(() => document.getElementById('impMsg') && document.getElementById('impMsg').innerText.includes('learned'));
const still = await page.evaluate(() => JSON.parse(localStorage.getItem('ep')).goal);
check('bad import does not overwrite', still === 75);
const good = path.join(outDir, 'good.json');
fs.writeFileSync(good, JSON.stringify({
  days: { '2026-10-02': 4 },
  learned: ['alpha'],
  best: 1,
  goal: 20,
  rnd: true,
  futureWidget: { ok: true },
  customNote: 'imported-synthetic'
}));
await page.$('#impFile').then((el) => el.uploadFile(good));
await page.waitForSelector('#impOk');
const blocked = await page.$eval('#impGo', (el) => el.disabled);
check('import confirm starts disabled', blocked === true);
await page.click('#impOk');
await page.click('#impGo');
await page.waitForFunction(() => {
  const ep = JSON.parse(localStorage.getItem('ep'));
  return ep.customNote === 'imported-synthetic';
});
const imported = await page.evaluate(() => JSON.parse(localStorage.getItem('ep')));
check('confirmed import keeps unknown field', imported.futureWidget && imported.futureWidget.ok === true);
check('confirmed import goal', imported.goal === 20);
await page.screenshot({ path: path.join(outDir, 'progress_backup.png') });
await page.close();

const exam = await boot('2026-11-21T23:00:00.000Z');
await exam.setViewport(mobile);
await exam.waitForSelector('#advice');
const examText = await exam.$eval('#todayPlan', (el) => el.innerText);
check('exam day no study', examText.includes('不学'));
check('exam day 15:30', examText.includes('15:30'));
check('exam day arrival is not the start', examText.includes('不是开考'));
check('exam day rejects 14:30 sleep', examText.includes('不能沿用') && examText.includes('14:30'));
check('exam day no action row', await exam.$('#planActs') === null);
await exam.screenshot({ path: path.join(outDir, 'exam_day_mobile.png'), fullPage: false });
await exam.close();

const eve = await boot('2026-11-21T04:00:00.000Z');
await eve.setViewport(mobile);
const eveText = await eve.$eval('#advice', (el) => el.innerText);
check('eve no practice', eveText.includes('不练习'));
check('eve mentions ID', eveText.includes('证件'));
check('eve no actions', await eve.$('#planActs') === null);
await eve.screenshot({ path: path.join(outDir, 'exam_eve_mobile.png') });
await eve.close();

let offline = 'not-run';
try {
  const off = await boot('2026-11-08T06:00:00.000Z');
  await off.setViewport(mobile);
  await off.waitForFunction(() => navigator.serviceWorker && navigator.serviceWorker.controller, { timeout: 8000 });
  const keys = await off.evaluate(async () => await caches.keys());
  check('service worker cache ep-v11', keys.includes('ep-v11'), JSON.stringify(keys));
  await off.setOfflineMode(true);
  await off.reload({ waitUntil: 'domcontentloaded', timeout: 15000 });
  await off.waitForSelector('#todayPlan', { timeout: 8000 });
  const offlineText = await off.$eval('#headline', (el) => el.innerText);
  check('offline reload still shows plan', offlineText.includes('PTE Academic') || offlineText.includes('还有'));
  offline = 'passed';
  await off.close();
} catch (e) {
  offline = 'failed: ' + e.message;
  console.log('OFFLINE ' + offline);
  failures.push('offline');
}

await browser.close();
console.log('OFFLINE_RESULT ' + offline);
console.log('SHOTS ' + outDir);
if (failures.length) {
  console.log('FAILURES ' + failures.join(' | '));
  process.exit(1);
}
