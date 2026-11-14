import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');

// This batch (content/synonym-batch-1) appends 25 semantic groups holding 97
// headwords to the GROUPS array. Nothing before them is touched.
const GROUPS_BEFORE = 439;
const BATCH = [
  ['diminish', 'deplete', 'abate', 'curtail'],
  ['halt', 'suspend', 'terminate', 'stifle'],
  ['evoke', 'elicit', 'rouse', 'stir'],
  ['perplex', 'baffle', 'muddle', 'mislead'],
  ['assumption', 'fallacy', 'misconception', 'fantasy'],
  ['contemplate', 'deliberate', 'envision', 'meditate'],
  ['contentment', 'serenity', 'fulfilment', 'gratification'],
  ['equitable', 'disinterested', 'neutral'],
  ['advocate', 'endorse', 'foster', 'propel'],
  ['integrate', 'dismantle', 'diversify', 'stabilise'],
  ['derelict', 'deserted', 'refurbished', 'fortified'],
  ['distinctive', 'stylish', 'glamorous', 'conspicuous'],
  ['taciturn', 'easy-going', 'effusive', 'awkward'],
  ['archaic', 'antique', 'immemorial'],
  ['slight', 'trivial', 'absolute', 'extreme'],
  ['prime', 'imperative', 'integral', 'superior'],
  ['dilemma', 'deadlock', 'adversity', 'conundrum'],
  ['calamity', 'disaster', 'doom', 'fatality'],
  ['fatal', 'adverse', 'hostile', 'alarming'],
  ['lag', 'linger', 'procrastinate'],
  ['cramming', 'procrastination', 'multitasking', 'tutoring'],
  ['culprit', 'misdeed', 'delinquency', 'embezzlement'],
  ['irrefutable', 'unequivocal', 'speculative', 'sceptical'],
  ['criticize', 'reproach', 'condemn', 'accuse'],
  ['paycheck', 'current account', 'direct debit', 'overdraft']
];
const BATCH_WORDS = BATCH.flat();
const BATCH_SET = new Set(BATCH_WORDS);

function load() {
  const context = { console };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, 'words.js'), 'utf8') + '\nglobalThis.WORDS = WORDS;\n', context);
  vm.runInContext(fs.readFileSync(path.join(root, 'synonyms.js'), 'utf8'), context);
  return { WORDS: context.WORDS, SYNONYMS: context.SYNONYMS };
}

const { WORDS, SYNONYMS } = load();

// The bank is compared lowercased, the same way synonyms.js keys its index.
const bank = new Set(WORDS.map(word => String(word.w).trim().toLowerCase()));

// A group belongs to this batch when all of its items are batch headwords.
const batchGroups = SYNONYMS.groups.filter(group => group.items.every(item => BATCH_SET.has(String(item.w).toLowerCase())));

// A sentence counts as using its headword when the headword appears as a whole
// word, optionally with one regular inflection: -s, -es, -ed, -d or -ing.
// Multi-word and hyphenated headwords must appear exactly as written.
function containsHeadword(sentence, headword) {
  const escaped = String(headword).toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp('(^|[^a-z])' + escaped + '(?:s|es|ed|d|ing)?([^a-z]|$)');
  return pattern.test(String(sentence).toLowerCase());
}

test('the batch adds exactly 25 groups and 97 headwords on top of the earlier ones', () => {
  assert.equal(SYNONYMS.groups.length, GROUPS_BEFORE + BATCH.length);
  assert.equal(batchGroups.length, BATCH.length);
  assert.equal(BATCH_WORDS.length, 97);
  assert.equal(new Set(BATCH_WORDS).size, BATCH_WORDS.length);
  const itemCount = SYNONYMS.groups.reduce((sum, group) => sum + group.items.length, 0);
  assert.equal(itemCount, 1080 + 97);
  const batchItemCount = batchGroups.reduce((sum, group) => sum + group.items.length, 0);
  assert.equal(batchItemCount, 97);
  // the array only grows at the end; the first group of the file is untouched
  assert.equal(SYNONYMS.groups[0].items[0].w, 'glance');
  assert.equal(SYNONYMS.groups[GROUPS_BEFORE - 1].items[0].w, 'crossing');
});

test('every batch group is a real 3-4 word comparison with its own one-line rule', () => {
  for (const group of batchGroups) {
    assert.ok(group.items.length >= 3 && group.items.length <= 4, group.items.map(item => item.w).join(','));
    assert.ok(typeof group.line === 'string' && group.line.trim().length >= 10, group.line);
    assert.ok(/[\u3400-\u9fff]/.test(group.line), group.line);
  }
  // group composition must match the batch definition, order included
  const actual = JSON.parse(JSON.stringify(batchGroups.map(group => group.items.map(item => String(item.w).toLowerCase()))));
  assert.deepEqual(actual, BATCH);
});

test('every batch item carries all seven fields, non-empty and in the right script', () => {
  for (const group of batchGroups) {
    for (const item of group.items) {
      for (const field of ['w', 'zh', 'scene', 'tone', 'col', 'en', 'cn']) {
        assert.equal(typeof item[field], 'string', field + ' on ' + item.w);
        assert.ok(item[field].trim().length > 0, field + ' is empty on ' + item.w);
      }
      assert.equal(item.w, item.w.trim().toLowerCase());
      assert.ok(/[\u3400-\u9fff]/.test(item.zh), item.w);
      assert.ok(/[\u3400-\u9fff]/.test(item.scene), item.w);
      assert.ok(/[\u3400-\u9fff]/.test(item.cn), item.w);
      assert.equal(/[\u3400-\u9fff]/.test(item.en), false, item.w);
      assert.equal(/[\u3400-\u9fff]/.test(item.col), false, item.w);
      assert.ok(/[\u3400-\u9fff]/.test(item.tone), item.w);
    }
  }
});

test('every batch headword exists in words.js and resolve through lookup()', () => {
  for (const word of BATCH_WORDS) {
    assert.equal(bank.has(word), true, word + ' is missing from words.js');
    const hit = SYNONYMS.lookup(word);
    assert.ok(hit, 'lookup() missed ' + word);
    assert.equal(hit.solo, undefined, word + ' must belong to a comparison group');
    assert.equal(BATCH_SET.has(hit.items[0].w.toLowerCase()), true, word + ' resolved to another group');
    // lookup is case- and whitespace-insensitive
    assert.equal(SYNONYMS.lookup('  ' + word.toUpperCase() + ' '), hit);
  }
});

test('no headword is duplicated anywhere in groups or solos', () => {
  const seen = new Set();
  for (const group of SYNONYMS.groups) {
    for (const item of group.items) {
      const key = String(item.w).trim().toLowerCase();
      assert.equal(seen.has(key), false, 'duplicate headword: ' + key);
      seen.add(key);
    }
  }
  for (const item of SYNONYMS.solos) {
    const key = String(item.w).trim().toLowerCase();
    assert.equal(seen.has(key), false, 'duplicate headword: ' + key);
    seen.add(key);
  }
  assert.equal(seen.size, 1080 + 97 + SYNONYMS.solos.length);
});

test('every example sentence actually uses its headword', () => {
  for (const group of batchGroups) {
    for (const item of group.items) {
      assert.ok(containsHeadword(item.en, item.w), item.w + ': ' + item.en);
    }
  }
  // the rule itself: inflections pass, a different word does not
  assert.equal(containsHeadword('The label misleads shoppers.', 'mislead'), true);
  assert.equal(containsHeadword('She criticised the plan.', 'criticize'), false);
  assert.equal(containsHeadword('I pay by direct debit.', 'direct debit'), true);
  assert.equal(containsHeadword('I pay by a direct debit card.', 'direct debit'), true);
  assert.equal(containsHeadword('An easygoing neighbour.', 'easy-going'), false);
});
