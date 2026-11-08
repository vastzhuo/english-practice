// Placeholder SST set. Real items (title, number, group, transcript, mp3) can replace PTE_SST.items later.
// Groups used by the plan: exam 18, text 12, recall 18.
(function (root) {
  const WORDS = [
    ['climate', '气候'], ['policy', '政策'], ['evidence', '证据'], ['emission', '排放'], ['adapt', '适应'],
    ['lecture', '讲座'], ['theory', '理论'], ['data', '数据'], ['research', '研究'], ['method', '方法'],
    ['population', '人口'], ['resource', '资源'], ['habitat', '栖息地'], ['species', '物种'], ['migration', '迁徙'],
    ['economy', '经济'], ['employment', '就业'], ['income', '收入'], ['trade', '贸易'], ['industry', '产业'],
    ['media', '媒体'], ['audience', '受众'], ['bias', '偏见'], ['source', '来源'], ['influence', '影响'],
    ['education', '教育'], ['curriculum', '课程'], ['assessment', '评估'], ['literacy', '读写能力'], ['motivation', '动机'],
    ['health', '健康'], ['nutrition', '营养'], ['stress', '压力'], ['treatment', '治疗'], ['prevention', '预防'],
    ['technology', '技术'], ['innovation', '创新'], ['network', '网络'], ['device', '设备'], ['automation', '自动化']
  ];
  function wordsFor(n) {
    const out = [];
    for (let k = 0; k < 5; k++) {
      const pair = WORDS[(n * 5 + k) % WORDS.length];
      out.push({ w: pair[0], zh: pair[1] });
    }
    return out;
  }
  function item(group, index, number) {
    const keywords = wordsFor(number);
    const names = keywords.map(word => word.w);
    return {
      id: group + '-' + String(index).padStart(2, '0'),
      no: String(number),
      title: '占位讲座 ' + number,
      group: group,
      placeholder: true,
      mp3: '',
      keywords: keywords,
      transcript: 'This placeholder transcript discusses ' + names[0] + ', ' + names[1] + ', ' + names[2] + ', and ' + names[3] + '. It also mentions ' + names[4] + '. Replace this text when the real lecture arrives.'
    };
  }
  const items = [];
  for (let i = 1; i <= 18; i++) items.push(item('exam', i, i));
  for (let i = 1; i <= 12; i++) items.push(item('text', i, 18 + i));
  for (let i = 1; i <= 18; i++) items.push(item('recall', i, 30 + i));
  root.PTE_SST = {
    template: 'The lecture mainly discusses … It points out that … In addition, … Finally, it concludes that …',
    groups: [
      { id: 'exam', name: '考试原音' },
      { id: 'text', name: '原文音频' },
      { id: 'recall', name: '回忆答案' }
    ],
    items: items
  };
})(this);
