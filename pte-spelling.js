// pte-spelling.js — UK/US spelling pairs plus the spelling drills on the PTE tab.
//
// Data note: only the factual word pairs were taken from the user's UK/US
// spelling summary. Every rule hint, note and exercise sentence here was written
// by this project; no lesson text is reproduced and the source is not named.
//
// The pure helpers (norm / check / options / mark) are exported as PTESpell for
// test/pte.test.mjs. pte-app.js renders this module with pteSpellView() and
// routes its buttons through PTESpell.click().
const PTE_SPELLING = {
  note: '词对只取事实性的英美拼写对照；规则提示、说明和练习为本项目自写。',
  rules: [
    {
      id: 'our-or',
      title: '-our / -or',
      hint: '非重读的 -our 词尾在美式里写成 -or；重读的 -our（如 contour）两边一样，不列入词对。',
      pairs: [
        { uk: 'favour', us: 'favor' },
        { uk: 'favourite', us: 'favorite' },
        { uk: 'favourable', us: 'favorable' },
        { uk: 'colour', us: 'color' },
        { uk: 'colouring', us: 'coloring' },
        { uk: 'colourful', us: 'colorful' },
        { uk: 'flavour', us: 'flavor' },
        { uk: 'flavourful', us: 'flavorful' },
        { uk: 'behaviour', us: 'behavior' },
        { uk: 'behaviourism', us: 'behaviorism' },
        { uk: 'harbour', us: 'harbor' },
        { uk: 'honour', us: 'honor' },
        { uk: 'honourable', us: 'honorable' },
        { uk: 'humour', us: 'humor' },
        { uk: 'humourless', us: 'humorless' },
        { uk: 'labour', us: 'labor' },
        { uk: 'labourer', us: 'laborer' },
        { uk: 'neighbour', us: 'neighbor' },
        { uk: 'neighbourhood', us: 'neighborhood' },
        { uk: 'neighbouring', us: 'neighboring' },
        { uk: 'rumour', us: 'rumor' },
        { uk: 'splendour', us: 'splendor' },
        { uk: 'savoury', us: 'savory' },
        { uk: 'odour', us: 'odor' },
        { uk: 'vapour', us: 'vapor' },
        { uk: 'endeavour', us: 'endeavor' },
        { uk: 'armour', us: 'armor' },
        { uk: 'candour', us: 'candor' },
        { uk: 'clamour', us: 'clamor' },
        { uk: 'demeanour', us: 'demeanor' },
        { uk: 'fervour', us: 'fervor' },
        { uk: 'parlour', us: 'parlor' },
        { uk: 'rigour', us: 'rigor' },
        { uk: 'saviour', us: 'savior', note: '美式里 saviour 偶尔也作为变体出现。' },
        { uk: 'succour', us: 'succor' },
        { uk: 'valour', us: 'valor' },
        { uk: 'vigour', us: 'vigor' },
        { uk: 'tumour', us: 'tumor' },
        { uk: 'ardour', us: 'ardor' },
        { uk: 'glamour', us: 'glamor', note: '这个词来自苏格兰语，美式主流拼写仍是 glamour，glamor 是类推变体。' }
      ]
    },
    {
      id: 're-er',
      title: '-re / -er',
      hint: '英式 -re 词尾在美式里多写成 -er，常见于 -bre、-tre 结尾的词；派生词和屈折变化也跟着主词走。',
      pairs: [
        { uk: 'calibre', us: 'caliber' },
        { uk: 'centre', us: 'center' },
        { uk: 'centred', us: 'centered' },
        { uk: 'centring', us: 'centering' },
        { uk: 'fibre', us: 'fiber' },
        { uk: 'fibres', us: 'fibers' },
        { uk: 'goitre', us: 'goiter' },
        { uk: 'litre', us: 'liter' },
        { uk: 'lustre', us: 'luster' },
        { uk: 'manoeuvre', us: 'maneuver' },
        { uk: 'meagre', us: 'meager' },
        { uk: 'metre', us: 'meter', note: '英式 metre 只作长度单位，量具写 meter；美式一律 meter。' },
        { uk: 'mitre', us: 'miter' },
        { uk: 'nitre', us: 'niter' },
        { uk: 'ochre', us: 'ocher' },
        { uk: 'reconnoitre', us: 'reconnoiter' },
        { uk: 'reconnoitred', us: 'reconnoitered' },
        { uk: 'sabre', us: 'saber' },
        { uk: 'saltpetre', us: 'saltpeter' },
        { uk: 'sepulchre', us: 'sepulcher' },
        { uk: 'sombre', us: 'somber' },
        { uk: 'spectre', us: 'specter' },
        { uk: 'theatre', us: 'theater', note: '美国很多剧院名字里仍写 theatre，属于专名习惯。' },
        { uk: 'titre', us: 'titer' }
      ]
    },
    {
      id: 'ise-ize',
      title: '-ise / -ize',
      hint: '英式考试写作多用 -ise，美式固定写 -ize；名词的 -isation 对应美式 -ization。',
      pairs: [
        { uk: 'organise', us: 'organize' },
        { uk: 'realise', us: 'realize' },
        { uk: 'recognise', us: 'recognize' },
        { uk: 'apologise', us: 'apologize' },
        { uk: 'criticise', us: 'criticize' },
        { uk: 'emphasise', us: 'emphasize' },
        { uk: 'memorise', us: 'memorize' },
        { uk: 'summarise', us: 'summarize' },
        { uk: 'categorise', us: 'categorize' },
        { uk: 'characterise', us: 'characterize' },
        { uk: 'civilise', us: 'civilize' },
        { uk: 'colonise', us: 'colonize' },
        { uk: 'minimise', us: 'minimize' },
        { uk: 'maximise', us: 'maximize' },
        { uk: 'normalise', us: 'normalize' },
        { uk: 'prioritise', us: 'prioritize' },
        { uk: 'specialise', us: 'specialize' },
        { uk: 'standardise', us: 'standardize' },
        { uk: 'symbolise', us: 'symbolize' },
        { uk: 'visualise', us: 'visualize' },
        { uk: 'utilise', us: 'utilize' },
        { uk: 'modernise', us: 'modernize' },
        { uk: 'globalise', us: 'globalize' },
        { uk: 'industrialise', us: 'industrialize' },
        { uk: 'nationalise', us: 'nationalize' },
        { uk: 'privatise', us: 'privatize' },
        { uk: 'legalise', us: 'legalize' },
        { uk: 'localise', us: 'localize' },
        { uk: 'neutralise', us: 'neutralize' },
        { uk: 'optimise', us: 'optimize' },
        { uk: 'popularise', us: 'popularize' },
        { uk: 'publicise', us: 'publicize' },
        { uk: 'stabilise', us: 'stabilize' },
        { uk: 'sterilise', us: 'sterilize' },
        { uk: 'theorise', us: 'theorize' },
        { uk: 'urbanise', us: 'urbanize' },
        { uk: 'initialise', us: 'initialize' },
        { uk: 'authorise', us: 'authorize' },
        { uk: 'criminalise', us: 'criminalize' },
        { uk: 'energise', us: 'energize' },
        { uk: 'finalise', us: 'finalize' },
        { uk: 'generalise', us: 'generalize' },
        { uk: 'harmonise', us: 'harmonize' },
        { uk: 'mobilise', us: 'mobilize' },
        { uk: 'socialise', us: 'socialize' },
        { uk: 'modernisation', us: 'modernization' },
        { uk: 'organisation', us: 'organization' },
        { uk: 'civilisation', us: 'civilization' },
        { uk: 'globalisation', us: 'globalization' },
        { uk: 'standardisation', us: 'standardization' }
      ]
    },
    {
      id: 'yse-yze',
      title: '-yse / -yze',
      hint: '只有 -yse 这一小类：英式 analyse，美式 analyze，常用的四五个词都在这组。',
      pairs: [
        { uk: 'analyse', us: 'analyze' },
        { uk: 'catalyse', us: 'catalyze' },
        { uk: 'hydrolyse', us: 'hydrolyze' },
        { uk: 'paralyse', us: 'paralyze' }
      ]
    },
    {
      id: 'ogue-og',
      title: '-ogue / -og',
      hint: '英式 -ogue 词尾在美式常缩成 -og，但 dialogue、catalogue 的 -ue 在美式也常见。',
      pairs: [
        { uk: 'analogue', us: 'analog' },
        { uk: 'catalogue', us: 'catalog' },
        { uk: 'dialogue', us: 'dialog', note: '美式计算机界面里这个拼写最常用。' },
        { uk: 'monologue', us: 'monolog' },
        { uk: 'prologue', us: 'prolog' },
        { uk: 'epilogue', us: 'epilog' },
        { uk: 'demagogue', us: 'demagog' },
        { uk: 'pedagogue', us: 'pedagog' },
        { uk: 'travelogue', us: 'travelog' },
        { uk: 'ideologue', us: 'ideolog' },
        { uk: 'homologue', us: 'homolog' }
      ]
    },
    {
      id: 'ae-oe',
      title: 'ae / oe → e',
      hint: '英式常保留 ae 或 oe 两个字母，美式只写 e；医学和学术词汇里最常见。',
      pairs: [
        { uk: 'anaemia', us: 'anemia' },
        { uk: 'anaesthesia', us: 'anesthesia' },
        { uk: 'anaesthetic', us: 'anesthetic' },
        { uk: 'caecum', us: 'cecum' },
        { uk: 'caesium', us: 'cesium' },
        { uk: 'coeliac', us: 'celiac' },
        { uk: 'diarrhoea', us: 'diarrhea' },
        { uk: 'encyclopaedia', us: 'encyclopedia' },
        { uk: 'faeces', us: 'feces' },
        { uk: 'foetal', us: 'fetal' },
        { uk: 'foetus', us: 'fetus' },
        { uk: 'gynaecology', us: 'gynecology' },
        { uk: 'haemoglobin', us: 'hemoglobin' },
        { uk: 'haemophilia', us: 'hemophilia' },
        { uk: 'leukaemia', us: 'leukemia' },
        { uk: 'oesophagus', us: 'esophagus' },
        { uk: 'oestrogen', us: 'estrogen' },
        { uk: 'orthopaedic', us: 'orthopedic' },
        { uk: 'palaeontology', us: 'paleontology' },
        { uk: 'paediatric', us: 'pediatric' },
        { uk: 'archaeology', us: 'archeology' },
        { uk: 'amoeba', us: 'ameba', note: 'amoeba 在美式里也很常见，ameba 是简化变体。' },
        { uk: 'homoeopathy', us: 'homeopathy' },
        { uk: 'mediaeval', us: 'medieval', note: '英式里 medieval 也很常用，两种拼写都见得到。' },
        { uk: 'foetid', us: 'fetid' },
        { uk: 'haematite', us: 'hematite' },
        { uk: 'caesarean', us: 'cesarean' },
        { uk: 'haemorrhage', us: 'hemorrhage' },
        { uk: 'oedema', us: 'edema' },
        { uk: 'oenology', us: 'enology', note: '美式 enology 更常见，oenology 算变体。' },
        { uk: 'aeon', us: 'eon' },
        { uk: 'primaeval', us: 'primeval', note: '英式 primeval 也常用。' }
      ]
    },
    {
      id: 'll-double',
      title: '双写 -ll-',
      hint: '英式在非重读音节末尾加 -ed、-ing、-er 时双写 l，美式单写：travelled/traveled。',
      pairs: [
        { uk: 'travelled', us: 'traveled' },
        { uk: 'travelling', us: 'traveling' },
        { uk: 'traveller', us: 'traveler' },
        { uk: 'cancelled', us: 'canceled' },
        { uk: 'cancelling', us: 'canceling' },
        { uk: 'labelled', us: 'labeled' },
        { uk: 'labelling', us: 'labeling' },
        { uk: 'modelled', us: 'modeled' },
        { uk: 'modelling', us: 'modeling' },
        { uk: 'fuelled', us: 'fueled' },
        { uk: 'fuelling', us: 'fueling' },
        { uk: 'signalling', us: 'signaling' },
        { uk: 'signalled', us: 'signaled' },
        { uk: 'levelled', us: 'leveled' },
        { uk: 'levelling', us: 'leveling' },
        { uk: 'quarrelled', us: 'quarreled' },
        { uk: 'quarrelling', us: 'quarreling' },
        { uk: 'equalled', us: 'equaled' },
        { uk: 'equalling', us: 'equaling' },
        { uk: 'initialled', us: 'initialed' },
        { uk: 'dialled', us: 'dialed' },
        { uk: 'dialling', us: 'dialing' },
        { uk: 'totalled', us: 'totaled' },
        { uk: 'tunnelled', us: 'tunneled' },
        { uk: 'woollen', us: 'woolen' },
        { uk: 'jeweller', us: 'jeweler' },
        { uk: 'jewellery', us: 'jewelry' },
        { uk: 'marvellous', us: 'marvelous' },
        { uk: 'libellous', us: 'libelous' },
        { uk: 'counsellor', us: 'counselor' },
        { uk: 'counselling', us: 'counseling' },
        { uk: 'cruellest', us: 'cruelest' },
        { uk: 'shrivelled', us: 'shriveled' },
        { uk: 'worshipped', us: 'worshiped', note: '美式通常写 worshiped，但两种都见得到。' }
      ]
    },
    {
      id: 'll-us-double',
      title: '英式单写、美式双写',
      hint: '反过来的一小组：英式 fulfil、enrol 单写 l，美式 fulfill、enroll 双写。',
      pairs: [
        { uk: 'fulfil', us: 'fulfill' },
        { uk: 'fulfilment', us: 'fulfillment' },
        { uk: 'enrol', us: 'enroll' },
        { uk: 'enrolment', us: 'enrollment' },
        { uk: 'instalment', us: 'installment' },
        { uk: 'instal', us: 'install' },
        { uk: 'skilful', us: 'skillful' },
        { uk: 'wilful', us: 'willful' },
        { uk: 'appal', us: 'appall' },
        { uk: 'distil', us: 'distill' },
        { uk: 'instil', us: 'instill' },
        { uk: 'enthral', us: 'enthrall' },
        { uk: 'enthralment', us: 'enthrallment' },
        { uk: 'thraldom', us: 'thralldom' }
      ]
    },
    {
      id: 'ce-se',
      title: '-ce / -se',
      hint: '名词的 -ce 在美式写作 -se：defence/defense；licence、practice 的名词动词分工在美式合成一个词。',
      pairs: [
        { uk: 'defence', us: 'defense' },
        { uk: 'offence', us: 'offense' },
        { uk: 'pretence', us: 'pretense' },
        { uk: 'licence', us: 'license', note: '英式名词 licence、动词 license；美式一律 license。' },
        { uk: 'practise', us: 'practice', note: '英式 practise 是动词、practice 是名词；美式一律 practice。' }
      ]
    },
    {
      id: 'xion-ction',
      title: '-xion / -ction',
      hint: '英式旧拼写 -xion，现代美式统一成 -ction：connexion/connection；英式现在也多用 -ction。',
      pairs: [
        { uk: 'connexion', us: 'connection', note: '英式现在基本也写 connection。' },
        { uk: 'reflexion', us: 'reflection' }
      ]
    },
    {
      id: 'e-drop',
      title: '不发音的 -e',
      hint: '英式保留不发音的 e 再加后缀（ageing、likeable），美式去掉 e（aging、likable）。',
      pairs: [
        { uk: 'ageing', us: 'aging' },
        { uk: 'likeable', us: 'likable' },
        { uk: 'liveable', us: 'livable' },
        { uk: 'rateable', us: 'ratable' },
        { uk: 'saleable', us: 'salable' },
        { uk: 'sizeable', us: 'sizable' },
        { uk: 'unshakeable', us: 'unshakable' },
        { uk: 'abridgement', us: 'abridgment' },
        { uk: 'acknowledgement', us: 'acknowledgment' },
        { uk: 'judgement', us: 'judgment', note: '法律文本里英式也写 judgment。' },
        { uk: 'lodgement', us: 'lodgment' }
      ]
    },
    {
      id: 'past-t',
      title: '过去式 -t / -ed',
      hint: '英式常用 -t 结尾的过去式（learnt、burnt），美式多用 -ed（learned、burned）；两种都能见到。',
      pairs: [
        { uk: 'learnt', us: 'learned' },
        { uk: 'dreamt', us: 'dreamed' },
        { uk: 'spelt', us: 'spelled' },
        { uk: 'burnt', us: 'burned' },
        { uk: 'smelt', us: 'smelled' },
        { uk: 'spilt', us: 'spilled' },
        { uk: 'spoilt', us: 'spoiled' },
        { uk: 'leapt', us: 'leaped' },
        { uk: 'dwelt', us: 'dwelled' }
      ]
    },
    {
      id: 'misc',
      title: '其他常见整词拼写',
      hint: '没有统一后缀规律的差别，只能整词记：grey/gray、tyre/tire；同一词义但拼写不同的都收在这里。',
      pairs: [
        { uk: 'grey', us: 'gray' },
        { uk: 'tyre', us: 'tire' },
        { uk: 'plough', us: 'plow' },
        { uk: 'mould', us: 'mold' },
        { uk: 'moult', us: 'molt' },
        { uk: 'smoulder', us: 'smolder' },
        { uk: 'kerb', us: 'curb' },
        { uk: 'cheque', us: 'check' },
        { uk: 'chequer', us: 'checker' },
        { uk: 'draught', us: 'draft' },
        { uk: 'pyjamas', us: 'pajamas' },
        { uk: 'cosy', us: 'cozy' },
        { uk: 'moustache', us: 'mustache' },
        { uk: 'omelette', us: 'omelet', note: 'omelette 在美式里也很常见。' },
        { uk: 'gaol', us: 'jail', note: '英式日常也写 jail，gaol 多见于旧式和法律文本。' },
        { uk: 'liquorice', us: 'licorice' },
        { uk: 'mollusc', us: 'mollusk' },
        { uk: 'programme', us: 'program', note: '英式只把 program 用在电脑程序上。' },
        { uk: 'kilogramme', us: 'kilogram', note: '英式现在多数也写 kilogram。' },
        { uk: 'sceptic', us: 'skeptic' },
        { uk: 'storey', us: 'story', note: '只指楼层；故事两边都写 story。' },
        { uk: 'sulphur', us: 'sulfur' },
        { uk: 'sulphate', us: 'sulfate' },
        { uk: 'aluminium', us: 'aluminum' },
        { uk: 'aeroplane', us: 'airplane' },
        { uk: 'carburettor', us: 'carburetor' },
        { uk: 'furore', us: 'furor' },
        { uk: 'mum', us: 'mom' },
        { uk: 'mummy', us: 'mommy' },
        { uk: 'speciality', us: 'specialty' },
        { uk: 'titbit', us: 'tidbit' },
        { uk: 'annexe', us: 'annex', note: '只指名词附属建筑；动词两边都写 annex。' },
        { uk: 'artefact', us: 'artifact' },
        { uk: 'axe', us: 'ax', note: '美式 axe 也很常见。' },
        { uk: 'camomile', us: 'chamomile', note: '英式 chamomile 也常见。' },
        { uk: 'chilli', us: 'chili' },
        { uk: 'doughnut', us: 'donut', note: '美式 doughnut 也常用，donut 是变体。' },
        { uk: 'gauge', us: 'gage', note: '美式 Gauge 为主，gage 是少见变体。' },
        { uk: 'glycerine', us: 'glycerin' },
        { uk: 'neurone', us: 'neuron' },
        { uk: 'orientated', us: 'oriented' },
        { uk: 'pernickety', us: 'persnickety' },
        { uk: 'scallywag', us: 'scalawag' },
        { uk: 'whisky', us: 'whiskey', note: '按产地和品牌走：苏格兰写 whisky。' },
        { uk: 'vice', us: 'vise', note: '美式 vise 只指台钳，vice 仍是“恶习、副职”。' },
        { uk: 'yoghurt', us: 'yogurt', note: '英式 yoghurt 更常见。' },
        { uk: 'matt', us: 'matte', note: '英式 matt 指哑光，美式用 matte。' }
      ]
    }
  ],
  // Same meaning, different word — not a spelling rule. Kept for reference only.
  extras: [
    { uk: 'autumn', us: 'fall', note: '同义替换，不是拼写差异。' },
    { uk: 'lorry', us: 'truck', note: '同义替换，不是拼写差异。' },
    { uk: 'flat', us: 'apartment', note: '同义替换，不是拼写差异。' },
    { uk: 'petrol', us: 'gasoline', note: '同义替换，不是拼写差异。' },
    { uk: 'holiday', us: 'vacation', note: '同义替换，不是拼写差异。' },
    { uk: 'biscuit', us: 'cookie', note: '同义替换，不是拼写差异。' },
    { uk: 'queue', us: 'line', note: '同义替换，不是拼写差异。' },
    { uk: 'lift', us: 'elevator', note: '同义替换，不是拼写差异。' },
    { uk: 'pavement', us: 'sidewalk', note: '同义替换，不是拼写差异。' },
    { uk: 'rubbish', us: 'garbage', note: '同义替换，不是拼写差异。' },
    { uk: 'underground', us: 'subway', note: '同义替换，不是拼写差异。' },
    { uk: 'film', us: 'movie', note: '同义替换，不是拼写差异。' },
    { uk: 'nappy', us: 'diaper', note: '同义替换，不是拼写差异。' },
    { uk: 'torch', us: 'flashlight', note: '同义替换，不是拼写差异。' },
    { uk: 'chemist', us: 'drugstore', note: '同义替换，不是拼写差异。' },
    { uk: 'fortnight', us: 'two weeks', note: '同义替换，不是拼写差异。' }
  ]
};

// Flattened derived field: every pair once, with its rule attached.
PTE_SPELLING.all = [];
PTE_SPELLING.rules.forEach(function (rule) {
  rule.pairs.forEach(function (pair) {
    PTE_SPELLING.all.push({
      uk: pair.uk,
      us: pair.us,
      rule: rule.id,
      title: rule.title,
      hint: rule.hint,
      note: pair.note || ''
    });
  });
});
PTE_SPELLING.count = PTE_SPELLING.all.length;

// ---- Pure helpers (no DOM) -------------------------------------------------
function spellNorm(text) {
  return String(text == null ? '' : text).toLowerCase().replace(/[^a-z]/g, '');
}
function spellCheck(answer, target) {
  const want = spellNorm(target);
  return !!want && spellNorm(answer) === want;
}
function spellPair(id) {
  const key = String(id == null ? '' : id).trim().toLowerCase();
  if (!key) return null;
  return PTE_SPELLING.all.filter(function (pair) { return pair.uk === key; })[0] || null;
}
function spellRule(id) {
  return PTE_SPELLING.rules.filter(function (rule) { return rule.id === id; })[0] || null;
}
function spellShuffle(items) {
  const list = (items || []).slice();
  if (typeof PTELogic !== 'undefined' && PTELogic && PTELogic.shuffle) return PTELogic.shuffle(list, Math.random);
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const hold = list[i];
    list[i] = list[j];
    list[j] = hold;
  }
  return list;
}
// Four options for the target side, answer included, never duplicated.
function spellOptions(pair, dir) {
  const side = dir === 'uk2us' ? 'us' : 'uk';
  const answer = pair[side];
  const pool = [];
  PTE_SPELLING.all.forEach(function (other) {
    if (other.uk === pair.uk) return;
    const word = other[side];
    if (word && word !== answer && pool.indexOf(word) < 0) pool.push(word);
  });
  const options = spellShuffle(pool).slice(0, 3);
  options.push(answer);
  return spellShuffle(options);
}
// One wrong answer is recorded in the shared mistake book under source "spell";
// a good answer keeps the existing two-in-a-row retirement rule from StudyPlan.
function spellMark(id, wrong, state) {
  const Sref = state || (typeof S !== 'undefined' ? S : null);
  if (!Sref || typeof StudyPlan === 'undefined' || !StudyPlan.missKey) return false;
  const key = StudyPlan.missKey('spell', id);
  if (!key) return false;
  if (wrong) StudyPlan.missRecord(Sref, key, StudyPlan.localDate(new Date()));
  else StudyPlan.missOk(Sref, key);
  return true;
}
function ensureSpell(st) {
  if (!st || typeof st !== 'object') return null;
  if (!st.spell || typeof st.spell !== 'object' || Array.isArray(st.spell)) st.spell = {};
  const sp = st.spell;
  if (sp.dir !== 'us2uk' && sp.dir !== 'fill') sp.dir = 'uk2us';
  if (typeof sp.focus !== 'string') sp.focus = '';
  ['seen', 'right', 'wrong'].forEach(function (name) {
    if (!sp[name] || typeof sp[name] !== 'object' || Array.isArray(sp[name])) sp[name] = {};
  });
  Object.keys(sp.seen).forEach(function (key) {
    if (!spellPair(key)) delete sp.seen[key];
  });
  return sp;
}

const PTESpell = {
  rules: PTE_SPELLING.rules,
  all: PTE_SPELLING.all,
  extras: PTE_SPELLING.extras,
  count: PTE_SPELLING.count,
  norm: spellNorm,
  check: spellCheck,
  options: spellOptions,
  mark: spellMark,
  ensure: ensureSpell,
  pair: spellPair,
  rule: spellRule,
  focus: spellFocus,
  click: spellClick
};

// ---- Drill state and rendering --------------------------------------------
const SPELL = { dir: 'uk2us', order: null, idx: 0, answered: false, picked: '', pending: '', q: null };

function spellFocus(st, id) {
  const sp = ensureSpell(st);
  if (!sp) return;
  const key = String(id == null ? '' : id).toLowerCase();
  sp.focus = spellPair(key) ? key : '';
  SPELL.pending = sp.focus;
  SPELL.order = null;
}
function spellRoundStart(st, dir, focus) {
  const sp = ensureSpell(st);
  const mode = dir === 'us2uk' || dir === 'fill' ? dir : 'uk2us';
  const order = spellShuffle(PTE_SPELLING.all);
  if (focus) {
    const at = order.map(function (pair) { return pair.uk; }).indexOf(focus);
    if (at > 0) order.unshift(order.splice(at, 1)[0]);
  }
  SPELL.dir = mode;
  SPELL.order = order;
  SPELL.idx = 0;
  SPELL.answered = false;
  SPELL.picked = '';
  SPELL.q = null;
  if (sp) sp.dir = mode;
}
function spellCurrent() {
  const order = SPELL.order || [];
  const pair = order[SPELL.idx];
  if (!pair) return null;
  const key = pair.uk + '|' + SPELL.dir + '|' + SPELL.idx;
  if (!SPELL.q || SPELL.q.key !== key) SPELL.q = { key: key, pair: pair, options: spellOptions(pair, SPELL.dir) };
  return SPELL.q;
}
function spellDone() {
  if (SPELL.idx >= (SPELL.order || []).length) SPELL.order = [];
}
function spellNext() {
  SPELL.idx += 1;
  SPELL.answered = false;
  SPELL.picked = '';
  SPELL.q = null;
  spellDone();
}
function spellTarget(pair, dir) {
  return dir === 'uk2us' ? pair.us : pair.uk;
}
function spellSource(pair, dir) {
  return dir === 'uk2us' ? pair.uk : pair.us;
}
function spellDirLabel(dir) {
  return dir === 'us2uk' ? '美式 → 英式' : dir === 'fill' ? '填空默写' : '英式 → 美式';
}
// Look the word up in the existing word bank for a sentence or a meaning to use
// as the fill-in-the-blank clue. Missing words fall back to the rule hint.
let SPELL_WORDS = null;
function spellWordBank() {
  if (SPELL_WORDS) return SPELL_WORDS;
  SPELL_WORDS = {};
  if (typeof WORDS !== 'undefined' && Array.isArray(WORDS)) {
    WORDS.forEach(function (item) {
      if (!item || !item.w) return;
      const key = String(item.w).toLowerCase();
      if (SPELL_WORDS[key]) return;
      SPELL_WORDS[key] = { m: item.m || '', x: item.x || '' };
    });
  }
  return SPELL_WORDS;
}
function spellClue(pair, dir) {
  const target = spellTarget(pair, dir);
  const source = spellSource(pair, dir);
  const bank = spellWordBank();
  const hit = bank[target] || bank[source] || null;
  const html = [];
  if (hit && hit.x) {
    const blanked = spellBlank(hit.x, target) || spellBlank(hit.x, source);
    if (blanked) html.push('<p lang="en" class="spell-sent">' + esc(blanked) + '</p>');
  }
  if (hit && hit.m) html.push('<p class="spell-mean">' + esc(hit.m) + '</p>');
  if (!html.length) {
    html.push('<p class="spell-mean">按「' + esc((spellRule(pair.rule) || {}).title || pair.title || '') + '」规则默写：' + target.length + ' 个字母，首字母 ' + esc(target.charAt(0)) + '。</p>');
  }
  return html.join('');
}
function spellBlank(sentence, word) {
  const text = String(sentence || '');
  const key = String(word || '');
  if (!text || !key) return '';
  const safe = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('\\b' + safe + '\\b', 'i');
  return re.test(text) ? text.replace(re, '_____') : '';
}
function spellResult(pair, ok, target) {
  const rule = spellRule(pair.rule) || { title: pair.title, hint: pair.hint || '' };
  const pairLine = '<p class="spell-pair" lang="en">' + esc(pair.uk) + ' ↔ ' + esc(pair.us) + '</p>';
  const note = pair.note ? '<br><small>' + esc(pair.note) + '</small>' : '';
  return '<div class="spell-result ' + (ok ? 'ok' : 'bad') + '">' + (ok ? '✅ 正确' : '❌ 答错了') + ' · 正确拼写：<b lang="en">' + esc(target) + '</b></div>'
    + pairLine
    + '<div class="spell-rule"><b>' + esc(rule.title) + '</b><div>' + esc(rule.hint) + '</div>' + note + '</div>'
    + '<button type="button" class="btn" data-spell-act="spell-next">下一组</button>';
}
function spellQuestionHtml(st) {
  const q = spellCurrent();
  if (!q) return '<p class="pte-tip">词对列表是空的。</p>';
  const pair = q.pair;
  const dir = SPELL.dir;
  const from = dir === 'uk2us' ? '英式' : '美式';
  const to = dir === 'uk2us' ? '美式' : '英式';
  const target = spellTarget(pair, dir);
  const prompt = spellSource(pair, dir);
  const kicker = '<div class="pte-kicker">第 ' + (SPELL.idx + 1) + '/' + SPELL.order.length + ' 组 · ' + from + ' → ' + to + '</div>';
  if (dir === 'fill') {
    if (SPELL.answered) return kicker + spellResult(pair, spellCheck(SPELL.picked, target), target);
    return kicker
      + '<p class="spell-ask">看提示，写出它的' + to + '拼写（大小写都行）</p>'
      + spellClue(pair, dir)
      + '<input id="spellFill" class="spell-fill" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="拼写答案" placeholder="输入' + to + '拼写">'
      + '<button type="button" class="btn" data-spell-act="spell-check">对答案</button>';
  }
  const options = q.options.map(function (word) {
    let cls = 'opt';
    if (SPELL.answered) {
      if (word === target) cls += ' ok';
      else if (word === SPELL.picked) cls += ' bad';
    }
    return '<button type="button" class="' + cls + '" data-spell-act="spell-pick" data-word="' + esc(word) + '"' + (SPELL.answered ? ' disabled' : '') + '>' + esc(word) + '</button>';
  }).join('');
  return kicker
    + '<p class="spell-ask">' + from + '拼写是 <b lang="en" class="spell-prompt">' + esc(prompt) + '</b>，它的' + to + '拼写是？</p>'
    + '<div class="spell-opts">' + options + '</div>'
    + (SPELL.answered ? spellResult(pair, spellCheck(SPELL.picked, target), target) : '');
}
function spellHeadHtml(st, sp) {
  const total = PTE_SPELLING.count;
  const seen = Object.keys(sp.seen).length;
  const pct = total ? Math.round(seen / total * 100) : 0;
  const buttons = [['uk2us', '英式 → 美式'], ['us2uk', '美式 → 英式'], ['fill', '填空默写']].map(function (row) {
    return '<button type="button" class="' + (sp.dir === row[0] ? 'on' : '') + '" data-spell-act="spell-dir" data-dir="' + row[0] + '">' + row[1] + '</button>';
  }).join('');
  return '<div class="card spell-head"><p class="pte-kicker">拼写 · 英式 ↔ 美式</p>'
    + '<p>共 <b>' + total + '</b> 组词对，已练 <b>' + seen + '</b> 组（' + pct + '%）。</p>'
    + '<div class="bar"><i style="width:' + pct + '%"></i></div>'
    + '<div class="pte-mini spell-types">' + buttons + '</div>'
    + '<p class="pte-tip">' + (SPELL.order && SPELL.order.length ? '正在练：' + spellDirLabel(SPELL.dir) : '选一种练习开始。每组答完会显示它所属的规则和一句提示。') + '</p></div>';
}
function spellRulesHtml() {
  const body = PTE_SPELLING.rules.map(function (rule) {
    const examples = rule.pairs.slice(0, 4).map(function (pair) { return pair.uk + ' ↔ ' + pair.us; }).join('；');
    return '<div class="pte-lesson"><b>' + esc(rule.title) + '</b><div>' + esc(rule.hint) + '</div>'
      + '<div class="spell-pairs" lang="en">例：' + esc(examples) + '</div>'
      + '<div class="pte-tip">这一组 ' + rule.pairs.length + ' 对。</div></div>';
  }).join('');
  return '<details class="card"><summary>规则卡片 · ' + PTE_SPELLING.rules.length + ' 条（点开看规则和例子）</summary>' + body + '</details>';
}
function spellAllHtml() {
  const rows = PTE_SPELLING.all.map(function (pair) { return pair.uk + ' ↔ ' + pair.us; }).join('；');
  return '<details class="card"><summary>全部词对 · ' + PTE_SPELLING.count + ' 组</summary><p class="spell-pairs" lang="en">' + esc(rows) + '</p></details>';
}
function pteSpellView(st) {
  const sp = ensureSpell(st) || ensureSpell({ spell: null });
  if (sp.focus) {
    SPELL.pending = sp.focus;
    sp.focus = '';
    SPELL.order = null;
    if (typeof save === 'function') save();
  }
  if (!SPELL.order) {
    spellRoundStart(st, sp.dir, SPELL.pending);
    SPELL.pending = '';
  }
  if (!SPELL.order.length) {
    const total = PTE_SPELLING.count;
    const seen = Object.keys(sp.seen).length;
    const body = '<div class="pte-kicker">本轮完成</div><p>这一轮练完了。已经练过 ' + seen + '/' + total + ' 组。</p><button type="button" class="btn" data-spell-act="spell-again">再来一轮</button>';
    return pteModes(st) + spellHeadHtml(st, sp) + '<div class="card">' + body + '</div>' + spellRulesHtml() + spellAllHtml();
  }
  return pteModes(st) + spellHeadHtml(st, sp) + '<div class="card">' + spellQuestionHtml(st) + '</div>' + spellRulesHtml() + spellAllHtml();
}
function spellAnswer(st, pair, answer) {
  const sp = ensureSpell(st);
  const target = spellTarget(pair, SPELL.dir);
  const ok = spellCheck(answer, target);
  SPELL.answered = true;
  SPELL.picked = String(answer == null ? '' : answer);
  if (sp) sp.seen[pair.uk] = 1;
  spellMark(pair.uk, !ok, typeof S !== 'undefined' ? S : null);
  if (typeof save === 'function') save();
  return ok;
}
function spellClick(act, el) {
  if (typeof pteState !== 'function' || typeof pteRefresh !== 'function') return;
  const st = pteState();
  const sp = ensureSpell(st);
  const redraw = function (keep) { if (typeof pteRefresh === 'function') pteRefresh(!!keep); };
  if (act === 'spell-dir') {
    SPELL.order = null;
    SPELL.pending = '';
    spellRoundStart(st, (el && el.dataset && el.dataset.dir) || 'uk2us', '');
    if (typeof save === 'function') save();
    redraw(false);
    return;
  }
  if (act === 'spell-again') {
    SPELL.order = null;
    SPELL.pending = '';
    spellRoundStart(st, sp.dir, '');
    if (typeof save === 'function') save();
    redraw(false);
    return;
  }
  const q = spellCurrent();
  if (!q) return;
  if (act === 'spell-pick') {
    if (SPELL.answered) return;
    spellAnswer(st, q.pair, (el && el.dataset && el.dataset.word) || '');
    redraw(true);
    return;
  }
  if (act === 'spell-check') {
    if (SPELL.answered) return;
    const input = typeof $ === 'function' ? $('spellFill') : null;
    spellAnswer(st, q.pair, input ? input.value : '');
    redraw(true);
    return;
  }
  if (act === 'spell-next') {
    spellNext();
    redraw(true);
  }
}

if (typeof window !== 'undefined') {
  window.PTESpell = PTESpell;
  window.pteSpellView = pteSpellView;
  // Enter in the fill-in box checks the answer instead of doing nothing.
  document.addEventListener('keydown', function (e) {
    if (!e || e.key !== 'Enter' || !e.target || e.target.id !== 'spellFill') return;
    if (typeof PTESpell.click === 'function') PTESpell.click('spell-check', null);
  });
}
