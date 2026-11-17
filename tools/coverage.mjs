// Synonym-card coverage report.
//
// Answers one question: of the vocabulary entries in words.js, how many already
// appear in the synonym index (synonyms.js) and how many are still uncovered?
//
// The method below is the agreed one, so two people running this get the same
// numbers. Do not "improve" a rule in place — change it here, change the README
// section, and state the new baseline in the commit message.
//
//   node tools/coverage.mjs                 # report, excludes grammar/pattern sets
//   node tools/coverage.mjs --include-kinds # also count grammar/pattern entries
//   node tools/coverage.mjs --no-stem       # do not merge inflected forms
//
// Rules, in order:
//   1. Normalise: NFKC, lowercase, en/em dash to hyphen, drop parenthetical
//      hints, collapse whitespace, trim surrounding non-letters.
//   2. Only English headwords count: entries whose `w` contains non-ASCII text
//      are skipped (they are Chinese glosses, not headwords).
//   3. Slash entries are ONE entry: `check/cheque` is a single record. Its
//      alternatives are normalised, sorted and joined to form the dedupe key.
//   4. Inflected forms do not count separately: a light suffix strip
//      (-ies→-y, -es, -s, -ing, -ed) maps a headword to its lemma before the
//      key is built. Phrases are never stemmed.
//   5. Coverage = `SYNONYMS.lookup(word) !== null` for the whole entry or any
//      of its slash alternatives (also tried with the hyphen turned into a
//      space). Nothing else counts: not examples `x`, not tips `t`, not audio.
//   6. Grammar/pattern collections are excluded by default, because they are
//      sentence patterns rather than words and a synonym pair is the wrong
//      container for them. They are still counted under --include-kinds.
//
// Baseline recorded 2026-11-17 (excluded kinds dropped): 8,348 entries,
// 4,416 covered, 3,932 uncovered, 52.9%.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const includeKinds = args.has('--include-kinds');
const useStem = !args.has('--no-stem');

// Collection prefixes that are sentence patterns, not vocabulary.
const EXCLUDED_KINDS = ['DK 英语语法指南', '雅思写作句型', 'IELTS 8.5 词汇大师课'];

function load(file, declare, expression) {
  const context = vm.createContext({ console, window: {} });
  context.globalThis = context;
  vm.runInContext(`${fs.readFileSync(path.join(root, file), 'utf8')}\n${declare}`, context);
  return context[expression];
}

function normalise(value) {
  return String(value ?? '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[（(][^）)]*[）)]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^[^a-z]+|[^a-z]+$/g, '');
}

function alternatives(entry) {
  return String(entry ?? '')
    .split('/')
    .map(normalise)
    .filter(word => word && /^[a-z][a-z' .-]*$/.test(word));
}

function lemma(word) {
  if (word.includes(' ')) return word;
  if (/ies$/.test(word) && word.length > 4) return `${word.slice(0, -3)}y`;
  if (/(ches|shes|sses|xes|zes)$/.test(word)) return word.slice(0, -2);
  if (/s$/.test(word) && !/ss$/.test(word) && word.length > 3) return word.slice(0, -1);
  if (/ing$/.test(word) && word.length > 5) return word.slice(0, -3);
  if (/ed$/.test(word) && word.length > 4) return word.slice(0, -2);
  return word;
}

function family(category) {
  const name = String(category ?? '');
  if (name.startsWith('DK 词汇大全')) return 'DK 词汇大全';
  if (name.startsWith('DK 英语语法指南')) return 'DK 语法指南';
  if (name.startsWith('雅思听力场景词汇')) return '雅思听力场景词汇';
  if (name.startsWith('雅思听力1000词')) return '雅思听力1000词';
  if (name.startsWith('雅思听力满分词汇')) return '雅思听力满分词汇';
  if (name.startsWith('雅思官方词汇速背')) return '雅思官方词汇速背';
  if (name.startsWith('雅思写作句型')) return '雅思写作句型';
  if (name.startsWith('1000 Words')) return '1000 Words 自然';
  if (name.startsWith('Vocabulary in Use')) return 'Vocabulary in Use 600';
  if (name.startsWith('Simon')) return 'Simon 听力阅读';
  if (name.startsWith('IELTS 8.5')) return 'IELTS 8.5 课程';
  if (name.startsWith('IELTS:')) return 'IELTS 专项';
  return '其他（核心/职场/生活等）';
}

const words = load('words.js', 'globalThis.WORDS = typeof WORDS !== "undefined" ? WORDS : [];', 'WORDS');
const synonyms = load('synonyms.js', 'globalThis.SYNONYM_INDEX = typeof SYNONYMS !== "undefined" ? SYNONYMS : null;', 'SYNONYM_INDEX');

function covered(word) {
  return Boolean(synonyms.lookup(word) || synonyms.lookup(word.replace(/-/g, ' ')));
}

const entries = new Map();
let skippedChinese = 0;
let skippedKind = 0;

for (const record of words) {
  const raw = String(record.w ?? '');
  if (/[^\x00-\x7F]/.test(raw)) {
    skippedChinese += 1;
    continue;
  }
  const parts = alternatives(raw);
  if (!parts.length) {
    skippedChinese += 1;
    continue;
  }
  const kind = family(record.c);
  if (!includeKinds && EXCLUDED_KINDS.some(prefix => String(record.c ?? '').startsWith(prefix))) {
    skippedKind += 1;
    continue;
  }
  const keyParts = useStem ? parts.map(lemma) : parts;
  const key = keyParts.slice().sort().join('|');
  if (entries.has(key)) continue;
  entries.set(key, { parts, kind, covered: parts.some(covered) });
}

const rows = [...entries.values()];
const total = rows.length;
const hit = rows.filter(row => row.covered).length;
const missing = total - hit;
const percent = ((hit / total) * 100).toFixed(1);

const byKind = new Map();
for (const row of rows) {
  const bucket = byKind.get(row.kind) ?? { total: 0, hit: 0 };
  bucket.total += 1;
  if (row.covered) bucket.hit += 1;
  byKind.set(row.kind, bucket);
}

console.log(`words.js records: ${words.length}`);
console.log(`skipped (non-English headword): ${skippedChinese}`);
if (!includeKinds) console.log(`skipped (grammar/pattern kinds): ${skippedKind}`);
console.log(`distinct entries counted: ${total}`);
console.log(`covered: ${hit}  uncovered: ${missing}  coverage: ${percent}%`);
console.log(`stemming: ${useStem ? 'on (inflected forms merged)' : 'off'}`);
console.log('');
console.log('by collection            total   covered   uncovered   coverage');

for (const [kind, bucket] of [...byKind.entries()].sort((a, b) => (b[1].total - b[1].hit) - (a[1].total - a[1].hit))) {
  const kindPercent = ((bucket.hit / bucket.total) * 100).toFixed(1);
  console.log(
    `${kind.padEnd(24)}${String(bucket.total).padStart(6)}${String(bucket.hit).padStart(10)}` +
    `${String(bucket.total - bucket.hit).padStart(12)}${`${kindPercent}%`.padStart(11)}`
  );
}

// Batches of 100 new words / 20–25 synonym groups are the working unit.
console.log('');
console.log(`rough batches at 100 words each: ${Math.ceil(missing / 100)}`);
