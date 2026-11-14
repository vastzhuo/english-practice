// pte-templates.js — sentence skeletons for the writing / speaking modules.
//
// Everything here was written for this project. The frames are generic academic
// scaffolding with [slots] or {{n}} blanks, every hint is one or two short
// sentences, and no course text, model essay, institution name or marketing copy
// is reproduced. Loaded before the UI files so pte-we-ui.js, pte-speak-ui.js and
// pte-sgd.js can render it, and exported as PTETemplate for test/pte.test.mjs.
const PTE_TEMPLATES = {
  // Stated once so every module can show the same provenance line.
  note: '句式骨架与提示为本项目自写，只给可套用的句式和填空位，不收录任何课程原文或范文。',
  we: {
    label: '模版骨架',
    intro: [
      {
        id: 'we-intro-1',
        frame: '[题目话题] is often debated in [场景]. While some people believe that [观点 A], I argue that [你的立场].',
        hint: '第一句改写题目，第二句亮立场；两句合计别超过 35 词。'
      },
      {
        id: 'we-intro-2',
        frame: 'Whether [争点] brings more benefits than harm is still open to debate. In my view, [你的立场], mainly because [理由一] and [理由二].',
        hint: '用 whether 从句引出争点，立场句后面直接挂两个理由。'
      },
      {
        id: 'we-intro-3',
        frame: 'Although [反方最强的一条理由], I still believe that [你的立场].',
        hint: '让步只写一句，整段重心留给自己的立场。'
      }
    ],
    body: [
      {
        id: 'we-body-1',
        frame: 'The main reason is that [理由一].',
        hint: '主体段第一句只放一个理由，别在同一句里堆第二点。'
      },
      {
        id: 'we-body-2',
        frame: 'To be specific, [解释：谁在什么情况下做什么].',
        hint: '紧接着用一句解释把理由拆开，避免停在空泛判断上。'
      },
      {
        id: 'we-body-3',
        frame: 'For example, [一个具体场景：时间、地点、人物].',
        hint: '例子写一个具体场景，比 many people 这种说法有说服力。'
      },
      {
        id: 'we-body-4',
        frame: 'A second reason is that [理由二], which matters because [影响或后果].',
        hint: '第二个理由换个角度写，不要跟第一段做同义重复。'
      }
    ],
    conclusion: [
      {
        id: 'we-con-1',
        frame: 'In conclusion, although [让步], I maintain that [你的立场] because [理由一] and [理由二].',
        hint: '结尾只复述前文，不加新论点。'
      },
      {
        id: 'we-con-2',
        frame: 'Therefore, [建议或预测] if [条件].',
        hint: '最后一句停住，不要再展开新的例子。'
      }
    ],
    checklist: [
      '开头两句内出现明确立场词：argue / believe / should。',
      '每个主体段第一句是主题句，段内只服务一个理由。',
      '例子至少给一个具体细节：时间、地点、人物或数字。',
      '连接词不要连续两段都用 however 或 moreover。',
      '结尾复述立场和两个理由，不出现新的论点。',
      '交卷前只查三样：主谓一致、单复数、动词时态。'
    ]
  },
  swt: {
    label: '一句话骨架',
    frames: [
      {
        id: 'swt-frame-1',
        frame: 'The [讲座 / 文章] argues that [主旨], and that [次要要点].',
        hint: '一句话里放一到两个要点，细节一律删掉。'
      },
      {
        id: 'swt-frame-2',
        frame: 'While the speaker accepts that [让步], the main claim is that [主旨].',
        hint: '让步从句别超过 8 词，主句才不会被挤没。'
      },
      {
        id: 'swt-frame-3',
        frame: 'The speaker explains that [主旨], which means that [推论或影响].',
        hint: '用非限定 which 从句自然接上第二层意思。'
      },
      {
        id: 'swt-frame-4',
        frame: '[主旨] mainly because [原因一], and this leads to [结果].',
        hint: 'because 后只留一个原因，另一个原因改成并列句。'
      }
    ],
    tips: [
      '从原文里只挑主旨和一条支撑要点，其余细节整体删掉。',
      '写完先数词：5–75 词才能提交，30–50 词最稳。',
      '整段只用一个句号，出现第二个句号就会被判成两句。',
      'and 出现两次以上时，把其中一处换成从句或分号。'
    ]
  },
  di: {
    label: '按图型的口述骨架',
    types: [
      {
        id: 'line',
        name: '折线图 Line',
        opening: 'The line graph shows how [指标] changed between [起点时间] and [终点时间].',
        trend: 'It rises from [数值] in [时间] to a peak of [数值] in [时间], and then falls to [数值].',
        comparison: 'The highest point is [数值] in [时间], while the lowest is [数值] in [时间].',
        closing: 'Overall, the figure rises at first and drops towards the end of [时间段].'
      },
      {
        id: 'bar',
        name: '柱状图 Bar',
        opening: 'The bar chart compares [指标] across [类别数量] categories in [年份].',
        trend: '[类别 A] is the highest at [数值], and [类别 B] comes second at [数值].',
        comparison: '[类别 C] is the lowest at [数值], roughly [倍数] of the top figure.',
        closing: 'Overall, [最高类别] and [次高类别] take most of the total, while [最低类别] stays small.'
      },
      {
        id: 'pie',
        name: '饼图 Pie',
        opening: 'The pie chart shows how [总体] is divided into [分块数量] parts.',
        trend: 'The largest share is [类别] at [百分比], followed by [类别] at [百分比].',
        comparison: '[类别] and [类别] are the smallest, at [百分比] and [百分比].',
        closing: 'Overall, [最大两块] together account for more than half of the total.'
      },
      {
        id: 'process',
        name: '流程图 Process',
        opening: 'The flow chart outlines the stages of [流程名称], from [起点] to [终点].',
        trend: 'The process starts with [第一步] and then moves to [第二步].',
        comparison: 'The main checkpoint comes at [中间步骤], where [条件].',
        closing: 'Overall, the route is [直线 / 循环] and [关键步骤] decides how quickly it finishes.'
      }
    ]
  },
  sgd: {
    label: '一句话模版',
    note: 'SGD 练习的讨论要点、句子模版与自查都是本项目自写的练习材料，不是考场原文。',
    tips: [
      '一句话里出现话题、双方立场和结论三样东西，不要逐句转述。',
      '概括的是他们说过的内容，不要加自己的评价。'
    ],
    self: [
      { k: 'open', label: '开场句', opts: ['缺', '一般', '清楚'] },
      { k: 'cover', label: '要点覆盖', opts: ['少', '一般', '全'] },
      { k: 'close', label: '结论', opts: ['缺', '一般', '到位'] }
    ],
    items: [
      {
        id: 'sgd-lecture-recording',
        zh: '讲座录音该不该公开',
        brief: [
          '话题：老师该不该把课堂录音放到网上。',
          'A：想复习的人能反复听，进度慢的人也不掉队。',
          'B：录音会让一部分人逃课，课堂互动变少。',
          'C：折中做法是只公开老师讲的部分，不录小组讨论。'
        ],
        template: 'The discussion focuses on {{1}}, where one speaker argues that {{2}}, while another worries that {{3}}.',
        blanks: ['用名词短语概括话题', '概括第一个人的理由', '概括第二个人的担心']
      },
      {
        id: 'sgd-group-grading',
        zh: '小组作业是否统一评分',
        brief: [
          '话题：小组作业该不该全组拿同一个分数。',
          'A：统一分数省事，大家会互相帮忙。',
          'B：有人不出力也能拿高分，应该按贡献分开给分。',
          'C：可以先全组同分，再给组长一点调整空间。'
        ],
        template: 'In the discussion about {{1}}, the first speaker points out that {{2}}, and the second speaker adds that {{3}}.',
        blanks: ['话题的名词短语', '支持统一分数的理由', '反对的理由']
      },
      {
        id: 'sgd-part-time',
        zh: '大学生该不该打工',
        brief: [
          '话题：大学生在校期间做兼职好不好。',
          'A：兼职能练沟通，也能减轻家里的负担。',
          'B：工时太长会挤掉复习时间，成绩会掉。',
          'C：每周十小时以内可以，关键看时间管理。'
        ],
        template: 'The group discussion examines {{1}}, with one voice supporting {{2}} and another stressing {{3}}.',
        blanks: ['用短语概括议题', '支持一方的理由', '另一方强调的风险']
      },
      {
        id: 'sgd-car-limit',
        zh: '城市该不该限制私家车',
        brief: [
          '话题：市中心是否该限制私家车进入。',
          'A：限车能减少拥堵和尾气，公交会更快。',
          'B：限车影响送货和带孩子的家庭，等于把成本转给普通人。',
          'C：先提高停车费、加密公交，再谈限行。'
        ],
        template: 'The discussion focuses on {{1}}, where one speaker argues that {{2}}, while another worries that {{3}}.',
        blanks: ['议题的名词短语', '支持限制的理由', '反对限制的理由']
      },
      {
        id: 'sgd-library-hours',
        zh: '图书馆要不要延长开放时间',
        brief: [
          '话题：学校图书馆该不该二十四小时开放。',
          'A：考试周通宵开放能救赶论文的人。',
          'B：夜班人力和电费太高，安全也难保证。',
          'C：考试前两周延长到凌晨两点就够用。'
        ],
        template: 'In the discussion about {{1}}, the first speaker points out that {{2}}, and the second speaker adds that {{3}}.',
        blanks: ['议题的名词短语', '支持延长的理由', '顾虑']
      },
      {
        id: 'sgd-online-course',
        zh: '网课能不能替代面授课',
        brief: [
          '话题：线上课程能不能替代面对面授课。',
          'A：网课可以回看，时间灵活，适合通勤的人。',
          'B：讨论和提问很难搬到线上，学习容易变成看录像。',
          'C：理论课放线上、实验和讨论留线下比较现实。'
        ],
        template: 'The group discussion examines {{1}}, with one voice supporting {{2}} and another stressing {{3}}.',
        blanks: ['议题的名词短语', '支持网课的理由', '另一方强调的短板']
      }
    ]
  }
};

// Pure helpers used by the views and by the tests. No DOM here.
const PTETemplate = {
  data: PTE_TEMPLATES,
  weSections: ['intro', 'body', 'conclusion'],
  diTypes() {
    return (PTE_TEMPLATES.di.types || []).slice();
  },
  diType(id) {
    return (PTE_TEMPLATES.di.types || []).find(item => item.id === id) || null;
  },
  // A {{n}} template becomes text / blank segments, so a view can drop inputs in.
  parts(template) {
    const text = String(template == null ? '' : template);
    const out = [];
    const re = /\{\{(\d+)\}\}/g;
    let last = 0;
    let hit = re.exec(text);
    while (hit) {
      if (hit.index > last) out.push({ t: text.slice(last, hit.index) });
      out.push({ b: hit[1] });
      last = hit.index + hit[0].length;
      hit = re.exec(text);
    }
    if (last < text.length) out.push({ t: text.slice(last) });
    return out;
  },
  blanks(template) {
    return this.parts(template).filter(seg => seg.b).map(seg => seg.b);
  },
  sgdItems() {
    return (PTE_TEMPLATES.sgd.items || []).slice();
  },
  sgdItem(id) {
    return (PTE_TEMPLATES.sgd.items || []).find(item => item.id === id) || null;
  },
  // Every hint in the file, so a test can check the two-sentence rule once.
  hints() {
    const out = [];
    ['intro', 'body', 'conclusion'].forEach(key => {
      (PTE_TEMPLATES.we[key] || []).forEach(row => { if (row.hint) out.push(row.hint); });
    });
    (PTE_TEMPLATES.we.checklist || []).forEach(row => out.push(row));
    (PTE_TEMPLATES.swt.frames || []).forEach(row => { if (row.hint) out.push(row.hint); });
    (PTE_TEMPLATES.swt.tips || []).forEach(row => out.push(row));
    (PTE_TEMPLATES.di.types || []).forEach(row => {
      ['opening', 'trend', 'comparison', 'closing'].forEach(key => { if (row[key]) out.push(row[key]); });
    });
    (PTE_TEMPLATES.sgd.tips || []).forEach(row => out.push(row));
    (PTE_TEMPLATES.sgd.items || []).forEach(row => {
      (row.blanks || []).forEach(text => out.push(text));
      (row.brief || []).forEach(text => out.push(text));
    });
    return out;
  }
};

if (typeof window !== 'undefined') window.PTETemplate = PTETemplate;
if (typeof globalThis !== 'undefined') globalThis.PTETemplate = PTETemplate;
