import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');

// The synonym bank grew in three appended content batches, none of which
// touches the groups that were already there:
//   content/synonym-batch-1 — 25 semantic groups holding 97 headwords
//   content/synonym-batch-2 — 25 semantic groups holding 96 headwords
//   content/synonym-batch-3 — 25 semantic groups holding 100 headwords
// GROUPS_BEFORE is the count of groups that existed before batch 1.
const GROUPS_BEFORE = 439;
const BATCH1 = [
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
const BATCH2 = [
  ['statute', 'decree', 'clause', 'provision'],
  ['tribunal', 'solicitor', 'prosecution', 'verdict'],
  ['sovereign', 'royal', 'imperial'],
  ['criterion', 'norm', 'precedent', 'prototype'],
  ['annotate', 'underline', 'summarise', 'transcribe'],
  ['plagiarism', 'plagiarise', 'cite', 'originality'],
  ['scholarship', 'bursary', 'stipend', 'allowance'],
  ['abode', 'dwelling', 'mansion', 'residential'],
  ['proximity', 'radius', 'outskirt', 'threshold'],
  ['emission', 'smog', 'sewage', 'landfill'],
  ['habitat', 'ecosystem', 'flora', 'vegetation'],
  ['breeze', 'gale', 'drizzle', 'frost'],
  ['bud', 'bloom', 'blossom', 'ripen'],
  ['commute', 'pedestrian', 'overpass', 'jaywalk'],
  ['cruise', 'aviation', 'shipment'],
  ['renowned', 'celebrated', 'notorious', 'reputable'],
  ['studious', 'laborious', 'painstaking'],
  ['fascinate', 'intrigue', 'capture', 'entertain'],
  ['residue', 'remainder', 'debris', 'remnants'],
  ['epidemic', 'infection', 'quarantine', 'prescription'],
  ['inhale', 'exhale', 'respiratory'],
  ['revenue', 'turnover', 'outlay', 'expenditure'],
  ['refund', 'debt', 'mortgage', 'pension'],
  ['basic', 'rough', 'shallow', 'primitive'],
  ['restriction', 'barrier', 'requirement', 'prerequisite']
];
const BATCH3 = [
  ['predator', 'prey', 'scavenger', 'omnivore'],
  ['embryo', 'larva', 'hatchling', 'juvenile'],
  ['snout', 'fang', 'antlers', 'mane'],
  ['exoskeleton', 'endoskeleton', 'hooves', 'talons'],
  ['conifers', 'deciduous', 'evergreen', 'sapling'],
  ['lichen', 'ferns', 'ivy', 'toadstool'],
  ['riverbank', 'reeds', 'weir', 'floodplain'],
  ['hail', 'snowflakes', 'icicles', 'puddles'],
  ['frequent', 'occasionally', 'consecutive', 'alternate'],
  ['deforestation', 'overfishing', 'contaminate', 'unsustainable'],
  ['photosynthesis', 'wavelength', 'pigment', 'quantify'],
  ['nocturnal', 'mammal', 'reptile', 'fungus'],
  ['terrain', 'eruption', 'subsoil', 'iceberg'],
  ['dilute', 'dissolve', 'volatile', 'congeal'],
  ['combustion', 'synthesis', 'alloy', 'corrosive'],
  ['flash', 'glimmer', 'radiation', 'thermal'],
  ['constellation', 'interstellar', 'universe', 'astronaut'],
  ['circumference', 'perimeter', 'decimal', 'geometry'],
  ['infrastructure', 'sanitation', 'dysfunctional', 'straining'],
  ['adolescence', 'adolescent', 'infancy', 'fatherhood'],
  ['egalitarian', 'individualistic', 'altruistic', 'unethical'],
  ['immersive', 'rechargeable', 'programmable', 'controllable'],
  ['anecdote', 'treatise', 'synopsis', 'quotation'],
  ['literally', 'rhetoric', 'irony', 'epitomise'],
  ['corpus', 'phonetic', 'lexical', 'verbal']
];
const BATCHES = [BATCH1, BATCH2, BATCH3];
const BATCH1_WORDS = BATCH1.flat();
const BATCH2_WORDS = BATCH2.flat();
const BATCH3_WORDS = BATCH3.flat();
const BATCH_WORDS = [BATCH1_WORDS, BATCH2_WORDS, BATCH3_WORDS];
const BATCH_SETS = BATCH_WORDS.map(words => new Set(words));

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

// A group belongs to a batch when all of its items are that batch's headwords.
const batchGroups = BATCH_SETS.map(set => SYNONYMS.groups.filter(group => group.items.every(item => set.has(String(item.w).toLowerCase()))));
const [batch1Groups, batch2Groups, batch3Groups] = batchGroups;
const allBatchGroups = batchGroups.flat();

// A sentence counts as using its headword when the headword appears as a whole
// word, optionally with one regular inflection: -s, -es, -ed, -d or -ing.
// Multi-word and hyphenated headwords must appear exactly as written.
function containsHeadword(sentence, headword) {
  const escaped = String(headword).toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp('(^|[^a-z])' + escaped + '(?:s|es|ed|d|ing)?([^a-z]|$)');
  return pattern.test(String(sentence).toLowerCase());
}

function checkComposition(groups, expected, label) {
  const actual = JSON.parse(JSON.stringify(groups.map(group => group.items.map(item => String(item.w).toLowerCase()))));
  assert.deepEqual(actual, expected, label + ' group composition/order does not match the definition');
}

test('the three batches add exactly 75 groups and 293 headwords on top of the earlier ones', () => {
  assert.equal(SYNONYMS.groups.length, GROUPS_BEFORE + BATCH1.length + BATCH2.length + BATCH3.length);
  assert.equal(batch1Groups.length, BATCH1.length);
  assert.equal(batch2Groups.length, BATCH2.length);
  assert.equal(batch3Groups.length, BATCH3.length);
  assert.equal(BATCH1_WORDS.length, 97);
  assert.equal(BATCH2_WORDS.length, 96);
  assert.equal(BATCH3_WORDS.length, 100);
  BATCH_WORDS.forEach((words, i) => {
    assert.equal(new Set(words).size, words.length, 'batch ' + (i + 1) + ' repeats a headword');
  });
  // the three batches share no headword
  const seen = new Set();
  for (const words of BATCH_WORDS) {
    for (const word of words) {
      assert.equal(seen.has(word), false, word + ' appears in two batches');
      seen.add(word);
    }
  }
  assert.equal(seen.size, 293);
  const itemCount = SYNONYMS.groups.reduce((sum, group) => sum + group.items.length, 0);
  assert.equal(itemCount, 1080 + 97 + 96 + 100);
  assert.equal(batch1Groups.reduce((sum, group) => sum + group.items.length, 0), 97);
  assert.equal(batch2Groups.reduce((sum, group) => sum + group.items.length, 0), 96);
  assert.equal(batch3Groups.reduce((sum, group) => sum + group.items.length, 0), 100);
  // the array only grows at the end; earlier groups are untouched
  assert.equal(SYNONYMS.groups[0].items[0].w, 'glance');
  assert.equal(SYNONYMS.groups[GROUPS_BEFORE - 1].items[0].w, 'crossing');
  assert.equal(SYNONYMS.groups[GROUPS_BEFORE + BATCH1.length - 1].items[0].w, 'paycheck');
  assert.equal(SYNONYMS.groups[GROUPS_BEFORE + BATCH1.length].items[0].w, 'statute');
  assert.equal(SYNONYMS.groups[GROUPS_BEFORE + BATCH1.length + BATCH2.length - 1].items[0].w, 'restriction');
  assert.equal(SYNONYMS.groups[GROUPS_BEFORE + BATCH1.length + BATCH2.length].items[0].w, 'predator');
  assert.equal(SYNONYMS.groups[SYNONYMS.groups.length - 1].items[0].w, 'corpus');
});

test('every batch group is a real comparison with its own one-line rule', () => {
  for (const group of allBatchGroups) {
    assert.ok(group.items.length >= 3, group.items.map(item => item.w).join(','));
    assert.ok(group.items.length <= 6, group.items.map(item => item.w).join(','));
    assert.ok(typeof group.line === 'string' && group.line.trim().length >= 10, group.line);
    assert.ok(/[\u3400-\u9fff]/.test(group.line), group.line);
  }
  // batches 1 and 3 keep their tighter 3-4 word shape
  for (const group of [...batch1Groups, ...batch3Groups]) {
    assert.ok(group.items.length >= 3 && group.items.length <= 4, group.items.map(item => item.w).join(','));
  }
  // group composition must match the batch definition, order included
  checkComposition(batch1Groups, BATCH1, 'batch 1');
  checkComposition(batch2Groups, BATCH2, 'batch 2');
  checkComposition(batch3Groups, BATCH3, 'batch 3');
});

test('every batch item carries all seven fields, non-empty and in the right script', () => {
  for (const group of allBatchGroups) {
    for (const item of group.items) {
      for (const field of ['w', 'zh', 'scene', 'tone', 'col', 'en', 'cn']) {
        assert.equal(typeof item[field], 'string', field + ' on ' + item.w);
        assert.ok(item[field].trim().length > 0, field + ' is empty on ' + item.w);
      }
      assert.equal(item.w, item.w.trim().toLowerCase());
      assert.ok(/[\u3400-\u9fff]/.test(item.zh), item.w);
      assert.ok(/[\u3400-\u9fff]/.test(item.scene), item.w);
      assert.ok(/[\u3400-\u9fff]/.test(item.cn), item.w);
      assert.ok(/[\u3400-\u9fff]/.test(item.tone), item.w);
      assert.equal(/[\u3400-\u9fff]/.test(item.en), false, item.w);
      assert.equal(/[\u3400-\u9fff]/.test(item.col), false, item.w);
    }
  }
});

test('every batch headword exists in words.js and resolves through lookup()', () => {
  for (let i = 0; i < BATCH_WORDS.length; i++) {
    const [words, set] = [BATCH_WORDS[i], BATCH_SETS[i]];
    for (const word of words) {
      assert.equal(bank.has(word), true, word + ' is missing from words.js');
      const hit = SYNONYMS.lookup(word);
      assert.ok(hit, 'lookup() missed ' + word);
      assert.equal(hit.solo, undefined, word + ' must belong to a comparison group');
      assert.equal(set.has(hit.items[0].w.toLowerCase()), true, word + ' resolved to another group');
      // lookup is case- and whitespace-insensitive
      assert.equal(SYNONYMS.lookup('  ' + word.toUpperCase() + ' '), hit);
    }
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
  assert.equal(seen.size, 1080 + 97 + 96 + 100 + SYNONYMS.solos.length);
});

test('every example sentence actually uses its headword', () => {
  for (const group of allBatchGroups) {
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
  // same rule against batch-2 shapes
  assert.equal(containsHeadword('She transcribed the interview.', 'transcribe'), true);
  assert.equal(containsHeadword('They live on the outskirts.', 'outskirt'), true);
  assert.equal(containsHeadword('The cut became infected.', 'infection'), false);
  // and batch-3 shapes: plural headwords, -ise verb, stem plus one inflection
  assert.equal(containsHeadword('The ponies\' hooves clattered on the road.', 'hooves'), true);
  assert.equal(containsHeadword('Ferns grow in the damp shade.', 'ferns'), true);
  assert.equal(containsHeadword('The village epitomises rural life.', 'epitomise'), true);
  assert.equal(containsHeadword('Sugar dissolves faster in hot water.', 'dissolve'), true);
  assert.equal(containsHeadword('The fat congealed as the pan cooled.', 'congeal'), true);
  assert.equal(containsHeadword('He walked occasionally in summer.', 'occasionally'), true);
});
