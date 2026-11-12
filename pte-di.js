// PTE Describe Image charts. No binary assets: every chart is drawn at runtime as inline SVG
// by PTELogic.svgChart(), so the module stays offline and ships no images.
// The numbers are self-made practice data with labels, not real exam figures.
const PTE_DI = {
  note: '图表数据为本项目自制的练习数据，只用来练描述结构，不是考场原图。',
  types: [
    { id: 'bar', name: '柱状图' },
    { id: 'line', name: '折线图' },
    { id: 'pie', name: '饼图' },
    { id: 'table', name: '表格' },
    { id: 'flow', name: '流程图' }
  ],
  charts: [
    {
      id: 'di-bar-faculty',
      type: 'bar',
      title: 'Students enrolled in four faculties, 2023',
      zh: '2023 年四个学院的在读人数',
      unit: 'students',
      labels: ['Business', 'Engineering', 'Arts', 'Science'],
      values: [420, 360, 240, 300],
      note: '示例数据，本项目自制；不是考场原图。',
      structure: {
        overview: 'The bar chart shows how many students were enrolled in four faculties in 2023.',
        features: [
          'Business is the highest at 420 students.',
          'Engineering comes second with 360, and Science follows at 300.',
          'Arts is the lowest at 240, roughly half of Business.'
        ],
        conclusion: 'Overall, Business and Engineering take most of the students, while Arts has the smallest intake.'
      },
      model: 'The bar chart compares student numbers across four faculties in 2023. Business is the largest faculty, with 420 students, followed by Engineering at 360 and Science at 300. Arts is the smallest, with only 240 students, which is roughly half of the Business figure. Overall, the two business and engineering faculties dominate enrolment, while the Arts intake stays clearly below the other three.'
    },
    {
      id: 'di-line-library',
      type: 'line',
      title: 'Monthly visitors to the campus library, January to June',
      zh: '校园图书馆 1 到 6 月的每月到馆人次',
      unit: 'visitors',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: [1200, 1350, 1500, 1420, 1280, 980],
      note: '示例数据，本项目自制；不是考场原图。',
      structure: {
        overview: 'The line graph shows how many people visited the campus library each month from January to June.',
        features: [
          'The figure rises from 1,200 in January to a peak of 1,500 in March.',
          'It then falls steadily, reaching 980 in June.',
          'The largest drop is between May and June, when 300 visitors disappear.'
        ],
        conclusion: 'Overall, library visits peak in March and decline towards the end of term.'
      },
      model: 'The line graph illustrates monthly library visits between January and June. The number begins at 1,200 in January, climbs to a peak of 1,500 in March, and then falls steadily to 1,420 in April, 1,280 in May and only 980 in June. The sharpest fall therefore comes at the end of the period. Overall, visits rise in the first quarter and drop sharply once the term ends.'
    },
    {
      id: 'di-pie-budget',
      type: 'pie',
      title: 'How a household spends its monthly budget',
      zh: '一个家庭每月预算的去向',
      unit: '%',
      labels: ['Housing', 'Food', 'Transport', 'Education', 'Other'],
      values: [35, 22, 15, 12, 16],
      note: '示例数据，本项目自制；不是考场原图。',
      structure: {
        overview: 'The pie chart shows how one household divides its monthly budget.',
        features: [
          'Housing is the biggest share at 35%.',
          'Food takes 22%, and Other takes 16%.',
          'Transport and Education are the smallest, at 15% and 12%.'
        ],
        conclusion: 'Overall, housing and food together use more than half of the budget.'
      },
      model: 'The pie chart shows the monthly budget of one household. Housing is the largest category, taking 35% of the total, and food is the second largest at 22%. Transport accounts for 15%, other costs for 16%, and education is the smallest share at 12%. Overall, housing and food together absorb well over half of the monthly budget, while education receives the least.'
    },
    {
      id: 'di-table-transport',
      type: 'table',
      title: 'Public transport trips in three cities, 2021 to 2023',
      zh: '三个城市 2021 到 2023 年的公共交通出行量',
      unit: 'millions of trips',
      cols: ['City', '2021', '2022', '2023'],
      rows: [
        ['City A', '12.4', '14.1', '15.0'],
        ['City B', '9.8', '10.2', '10.9'],
        ['City C', '7.5', '8.6', '9.4']
      ],
      note: '示例数据，本项目自制；不是考场原图。',
      structure: {
        overview: 'The table compares public transport trips in three cities from 2021 to 2023.',
        features: [
          'City A is the highest in every year, reaching 15.0 million trips in 2023.',
          'City B stays second, rising from 9.8 to 10.9.',
          'City C grows fastest in percentage terms, from 7.5 to 9.4.'
        ],
        conclusion: 'Overall, travel by public transport rises in all three cities, but City A keeps a clear lead.'
      },
      model: 'The table compares public transport trips in three cities over three years. City A is the busiest every year, growing from 12.4 million trips in 2021 to 15.0 million in 2023. City B rises from 9.8 to 10.9 million, and City C from 7.5 to 9.4 million. Overall, all three cities show steady growth, yet City A remains far ahead of the other two throughout the period.'
    },
    {
      id: 'di-flow-paper',
      type: 'flow',
      title: 'How a research paper gets published',
      zh: '一篇论文的发表流程',
      unit: '',
      nodes: ['Draft', 'Submit', 'Peer review', 'Revision', 'Publication'],
      note: '示例流程图，本项目自制；不是考场原图。',
      structure: {
        overview: 'The flow chart shows the main stages a research paper goes through before it is published.',
        features: [
          'The process starts with drafting the paper and submitting it to a journal.',
          'Peer review follows, and it usually leads to a round of revision.',
          'Only after revision does the paper reach publication.'
        ],
        conclusion: 'Overall, the path from draft to publication depends on two checkpoints: peer review and revision.'
      },
      model: 'The flow chart outlines how a research paper is published, from draft to final print. The process begins when the authors draft the paper and submit it to a journal. It then moves to peer review, which normally produces comments and a stage of revision. Once the revised version is accepted, the paper finally reaches publication. Overall, the route is linear, but review and revision are the two stages that decide its speed.'
    }
  ]
};
