// PTE reading lessons. Article bodies are copied only from the source list.
// An article with no text must not be given an invented passage; its vocab is topic-predicted.
const PTE_READ = {
  types: [
    {
      id: 'double',
      name: '双转折',
      blurb: '第二次转折后面才是作者的结论。排序时注意 this / such / these，以及 the 加上文已经出现的名词。',
      connectives: [
        { en: 'however', zh: '然而。真正的结论通常在 however 后面，不在前面的让步里。', ex: 'The scheme looks generous. However, the evidence suggests the benefit is narrow.', col: 'however, the evidence' },
        { en: 'yet', zh: '然而，比 but 更书面。', ex: 'The sample was large, yet the result was not significant.', col: 'large, yet not' },
        { en: 'but', zh: '但是，转折最直接。', ex: 'The lecture was clear, but the task was not.', col: 'clear, but not' },
        { en: 'although', zh: '尽管。让步在从句里，主句才是重点。', ex: 'Although the fee fell, attendance did not rise.', col: 'although ... , ... did not' },
        { en: 'in fact', zh: '事实上，用来改掉读者刚才形成的印象。', ex: 'The rule sounds new. In fact, it repeats an older one.', col: 'in fact, it' },
        { en: 'critics argue', zh: '批评者认为，用来请出反方观点。', ex: 'Critics argue that the reform ignores renters.', col: 'critics argue that' },
        { en: 'evidence suggests', zh: '证据表明。第二次转折之后，结论常常落在这个搭配上。', ex: 'The evidence suggests a smaller effect than expected.', col: 'the evidence suggests' }
      ],
      patterns: [
        { name: '让步后再转一次', zh: '先承认表面看法，第一次转折提出怀疑，第二次转折才是作者的结论。', ex: 'The plan looks fair. However, critics argue that it helps owners. In fact, the evidence suggests renters gain little.' },
        { name: '指代不能当段首', zh: 'this、such、these，或 the 加上文名词，都要接在它指代的句子后面，不能放到段首。', ex: 'Cities added more roads. This change did not cut congestion.' }
      ]
    },
    {
      id: 'single',
      name: '单转折',
      blurb: '先写预期，再转折。转折后面的那一句通常是主旨。填空爱考转折词、态度形容词和因果动词。',
      connectives: [
        { en: 'however', zh: '然而。紧接着的内容通常才是主旨。', ex: 'Parents expect quick gains. However, the improvement fades.', col: 'however, the improvement' },
        { en: 'nevertheless', zh: '尽管如此，比 however 更正式。', ex: 'The cost is high. Nevertheless, the city will build the line.', col: 'nevertheless, the city' },
        { en: 'despite', zh: '尽管，后面接名词或动名词，不是一个完整从句。', ex: 'Despite the new buses, travel time barely changed.', col: 'despite the new' },
        { en: 'because', zh: '因为。填空常用它考原因。', ex: 'The trial failed because the sample was biased.', col: 'failed because the' },
        { en: 'therefore', zh: '因此，引出因果结论。', ex: 'The sample was biased; therefore, the result is weak.', col: 'therefore, the result' },
        { en: 'as a result', zh: '结果是。比 therefore 更像在交代后果。', ex: 'Funding was cut. As a result, the program closed.', col: 'as a result, the' }
      ],
      attitudes: [
        { en: 'significant', zh: '显著的。用来评价变化或结果够不够大。', ex: 'The change was significant.', col: 'significant change' },
        { en: 'limited', zh: '有限的。常用来给一个看起来不错的结果降温。', ex: 'The benefit was limited.', col: 'limited benefit' },
        { en: 'unexpected', zh: '出乎意料的。', ex: 'The finding was unexpected.', col: 'unexpected finding' }
      ],
      patterns: [
        { name: '预期然后逆转', zh: '前一句是别人的预期，后面的转折句才是作者要说的话。做主旨题时看转折后。', ex: 'Many voters expected lower rents. However, rents rose in the first year.' },
        { name: '填空的三类常考点', zh: '选词填空常考转折词、态度形容词和因果动词，不太考离题的细节名词。', ex: 'The outcome was unexpected because the method was flawed.' }
      ]
    },
    {
      id: 'parallel',
      name: '平行对比',
      blurb: '顺序多半是总述、A、B、比较后的结论。B 经常用 However 或 By contrast 开头。',
      connectives: [
        { en: 'while', zh: '而，同时说出两边的差别。', ex: 'While buses are cheaper, trains carry more people.', col: 'while buses are' },
        { en: 'whereas', zh: '而，对比时比 while 更书面。', ex: 'City A built rail, whereas City B added lanes.', col: 'whereas City B' },
        { en: 'by contrast', zh: '相比之下。写完 A 之后，B 段常用它开头。', ex: 'By contrast, the second group improved.', col: 'by contrast, the' },
        { en: 'however', zh: '然而。对比结构里，B 也常常用 However 起句。', ex: 'However, the second plan cost less.', col: 'however, the second' },
        { en: 'similarly', zh: '同样地，接的是相同点，不是差别。', ex: 'Similarly, rural schools faced the same shortage.', col: 'similarly, rural schools' },
        { en: 'both ... and', zh: '两者都。用来把两个并列对象放进同一个结论。', ex: 'Both cost and access shaped the decision.', col: 'both cost and' },
        { en: 'on the one hand', zh: '一方面。后面通常还有 on the other hand。', ex: 'On the one hand, the tax is simple. On the other hand, it is unfair.', col: 'on the one hand' }
      ],
      patterns: [
        { name: '总述、A、B、结论', zh: '先总述，再写 A。B 常用 However 或 By contrast 开头，最后一句收比较之后的结论。', ex: 'Both cities funded transit. City A bought buses. By contrast, City B built a rail line. The rail line cut travel time more.' },
        { name: '相同点还是不同点', zh: 'similarly 接相同点，while 和 whereas 接差别。不要把这两类信号词读反。', ex: 'Similarly, both plans raise fares, whereas only one adds new routes.' }
      ]
    },
    {
      id: 'none',
      name: '未分型',
      blurb: '这一组多半没有原文。先按标题猜结构，不要在这里花太多时间。词汇按题目预测，考试时以真题为准。',
      connectives: [
        { en: 'however', zh: '然而。标题看不出结构时，转折仍是最常见的一种可能。', ex: 'The idea sounds simple. However, the practice is not.', col: 'however, the practice' },
        { en: 'because', zh: '因为。标题如果在问原因，才会用到。', ex: 'Output fell because demand weakened.', col: 'fell because demand' },
        { en: 'for example', zh: '例如。标题如果像个案或举例，才会用到。', ex: 'For example, one coastal city lost its beach.', col: 'for example, one' },
        { en: 'as a result', zh: '结果。标题如果在讲后果，才会用到。', ex: 'The rule changed. As a result, costs rose.', col: 'as a result, costs' }
      ],
      patterns: [
        { name: '先别编结构', zh: '没有原文就不要编文章。先看标题像原因、对比还是举例，词按题目预测，上考场以原文为准。', ex: 'A title about two cities may signal a contrast, but the passage itself decides.' }
      ]
    }
  ],
  articles: [
    {
      "id": "063020",
      "seq": 1,
      "no": "063020",
      "title": "Edtech 教育科技",
      "type": "double",
      "note": "双次转折类",
      "text": null,
      "vocab": [
        {
          "w": "platform",
          "zh": "平台，这里指学习用的软件系统",
          "ex": "The school moved the course onto a new platform.",
          "col": "learning platform",
          "source": "predicted"
        },
        {
          "w": "adaptive",
          "zh": "自适应的",
          "ex": "Adaptive software changes the next exercise.",
          "col": "adaptive learning",
          "source": "predicted"
        },
        {
          "w": "engagement",
          "zh": "投入、参与",
          "ex": "Short videos raised student engagement.",
          "col": "student engagement",
          "source": "predicted"
        },
        {
          "w": "access",
          "zh": "获取、使用的机会",
          "ex": "Rural students had limited access to devices.",
          "col": "access to education",
          "source": "predicted"
        },
        {
          "w": "drawback",
          "zh": "缺点",
          "ex": "Cost is the main drawback of this tool.",
          "col": "a major drawback",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "063019",
      "seq": 2,
      "no": "063019",
      "title": "Building Technology建筑科技（稻草屋）",
      "type": "double",
      "note": "双次转折类",
      "text": null,
      "vocab": [
        {
          "w": "straw",
          "zh": "稻草",
          "ex": "The walls were built from straw bales.",
          "col": "straw bale",
          "source": "predicted"
        },
        {
          "w": "insulation",
          "zh": "隔热、保温",
          "ex": "Thick walls provide good insulation.",
          "col": "thermal insulation",
          "source": "predicted"
        },
        {
          "w": "sustainable",
          "zh": "可持续的",
          "ex": "Straw is a sustainable building material.",
          "col": "sustainable material",
          "source": "predicted"
        },
        {
          "w": "load-bearing",
          "zh": "承重的",
          "ex": "A load-bearing wall supports the roof.",
          "col": "load-bearing wall",
          "source": "predicted"
        },
        {
          "w": "moisture",
          "zh": "水分、潮湿",
          "ex": "Moisture can rot the straw.",
          "col": "moisture damage",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "063018",
      "seq": 3,
      "no": "063018",
      "title": "Independent Workers 自由职业者",
      "type": "double",
      "note": "双次转折类",
      "text": null,
      "vocab": [
        {
          "w": "freelance",
          "zh": "自由职业的",
          "ex": "She does freelance design work.",
          "col": "freelance work",
          "source": "predicted"
        },
        {
          "w": "contractor",
          "zh": "承包人、接活的人",
          "ex": "He works as an independent contractor.",
          "col": "independent contractor",
          "source": "predicted"
        },
        {
          "w": "flexibility",
          "zh": "灵活性",
          "ex": "Flexibility is the main attraction.",
          "col": "work flexibility",
          "source": "predicted"
        },
        {
          "w": "precarious",
          "zh": "不稳定的、没保障的",
          "ex": "Their income is precarious.",
          "col": "precarious income",
          "source": "predicted"
        },
        {
          "w": "autonomy",
          "zh": "自主权",
          "ex": "The job offers more autonomy.",
          "col": "personal autonomy",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "063014",
      "seq": 5,
      "no": "063014",
      "title": "Australian Indigenous Food 澳洲本土食物",
      "type": "double",
      "note": "双次转折类",
      "text": null,
      "vocab": [
        {
          "w": "indigenous",
          "zh": "本土的、原住民的",
          "ex": "The book describes indigenous foods.",
          "col": "indigenous food",
          "source": "predicted"
        },
        {
          "w": "staple",
          "zh": "主食",
          "ex": "Seeds were once a staple food.",
          "col": "a staple crop",
          "source": "predicted"
        },
        {
          "w": "cultivation",
          "zh": "种植",
          "ex": "Cultivation of these plants is difficult.",
          "col": "cultivation method",
          "source": "predicted"
        },
        {
          "w": "nutrient",
          "zh": "营养素",
          "ex": "The fruit is rich in nutrients.",
          "col": "nutrient content",
          "source": "predicted"
        },
        {
          "w": "drought",
          "zh": "干旱",
          "ex": "These plants survive drought.",
          "col": "drought-resistant",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "063010",
      "seq": 6,
      "no": "063010",
      "title": "Written Language 文字语言",
      "type": "double",
      "note": "双次转折类",
      "text": null,
      "vocab": [
        {
          "w": "script",
          "zh": "文字、书写系统",
          "ex": "The script was used for records.",
          "col": "writing script",
          "source": "predicted"
        },
        {
          "w": "literacy",
          "zh": "读写能力",
          "ex": "Literacy spread slowly.",
          "col": "literacy rate",
          "source": "predicted"
        },
        {
          "w": "symbol",
          "zh": "符号",
          "ex": "Each symbol stood for a word.",
          "col": "written symbol",
          "source": "predicted"
        },
        {
          "w": "oral",
          "zh": "口头的",
          "ex": "Stories began in an oral tradition.",
          "col": "oral tradition",
          "source": "predicted"
        },
        {
          "w": "standardize",
          "zh": "使标准化",
          "ex": "Printers helped standardize spelling.",
          "col": "standardize spelling",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062053",
      "seq": 12,
      "no": "062053",
      "title": "New Women 新女性",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "suffrage",
          "zh": "选举权",
          "ex": "Women campaigned for suffrage.",
          "col": "women's suffrage",
          "source": "predicted"
        },
        {
          "w": "domestic",
          "zh": "家庭内的",
          "ex": "Domestic work was still expected.",
          "col": "domestic role",
          "source": "predicted"
        },
        {
          "w": "emancipation",
          "zh": "解放",
          "ex": "Emancipation changed public life.",
          "col": "female emancipation",
          "source": "predicted"
        },
        {
          "w": "stereotype",
          "zh": "刻板印象",
          "ex": "The novel challenges a gender stereotype.",
          "col": "gender stereotype",
          "source": "predicted"
        },
        {
          "w": "workforce",
          "zh": "劳动力、就业人群",
          "ex": "More women entered the workforce.",
          "col": "enter the workforce",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062052",
      "seq": 13,
      "no": "062052",
      "title": "The Natural Environment and Personal Well-being自然环境与个人幸福",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "well-being",
          "zh": "幸福感、健康状态",
          "ex": "Parks are linked to well-being.",
          "col": "personal well-being",
          "source": "predicted"
        },
        {
          "w": "restorative",
          "zh": "有助于恢复的",
          "ex": "A walk can have a restorative effect.",
          "col": "restorative effect",
          "source": "predicted"
        },
        {
          "w": "exposure",
          "zh": "接触",
          "ex": "Daily exposure to trees reduced stress.",
          "col": "exposure to nature",
          "source": "predicted"
        },
        {
          "w": "correlation",
          "zh": "相关性",
          "ex": "The study found a correlation.",
          "col": "a strong correlation",
          "source": "predicted"
        },
        {
          "w": "green space",
          "zh": "绿地",
          "ex": "Access to green space is unequal.",
          "col": "access to green space",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062051",
      "seq": 14,
      "no": "062051",
      "title": "The Differences of Intelligence 智力差异",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "cognitive",
          "zh": "认知的",
          "ex": "Cognitive ability varies widely.",
          "col": "cognitive ability",
          "source": "predicted"
        },
        {
          "w": "inherit",
          "zh": "遗传",
          "ex": "Children may inherit some traits.",
          "col": "inherit a trait",
          "source": "predicted"
        },
        {
          "w": "variation",
          "zh": "差异",
          "ex": "There is wide individual variation.",
          "col": "individual variation",
          "source": "predicted"
        },
        {
          "w": "bias",
          "zh": "偏见",
          "ex": "The test may contain bias.",
          "col": "test bias",
          "source": "predicted"
        },
        {
          "w": "measure",
          "zh": "测量",
          "ex": "It is hard to measure intelligence fairly.",
          "col": "measure intelligence",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062049",
      "seq": 15,
      "no": "062049",
      "title": "Nature-Nurture Controversy 先天、后天争论",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "nurture",
          "zh": "后天培养",
          "ex": "Nurture includes home and school.",
          "col": "environmental nurture",
          "source": "predicted"
        },
        {
          "w": "innate",
          "zh": "天生的",
          "ex": "Some skills look innate.",
          "col": "innate ability",
          "source": "predicted"
        },
        {
          "w": "upbringing",
          "zh": "教养、成长环境",
          "ex": "Upbringing shaped his habits.",
          "col": "early upbringing",
          "source": "predicted"
        },
        {
          "w": "controversy",
          "zh": "争论",
          "ex": "The controversy is still unresolved.",
          "col": "an ongoing controversy",
          "source": "predicted"
        },
        {
          "w": "interaction",
          "zh": "相互作用",
          "ex": "Genes and experience interact.",
          "col": "gene-environment interaction",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062048",
      "seq": 16,
      "no": "062048",
      "title": "Positive Mind-Set 积极心态",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "mind-set",
          "zh": "心态",
          "ex": "A positive mind-set helps students persist.",
          "col": "a positive mind-set",
          "source": "predicted"
        },
        {
          "w": "resilience",
          "zh": "韧性、恢复力",
          "ex": "Practice can build resilience.",
          "col": "build resilience",
          "source": "predicted"
        },
        {
          "w": "optimism",
          "zh": "乐观",
          "ex": "Optimism about the exam increased.",
          "col": "optimism about",
          "source": "predicted"
        },
        {
          "w": "setback",
          "zh": "挫折",
          "ex": "She recovered from the setback.",
          "col": "recover from a setback",
          "source": "predicted"
        },
        {
          "w": "persist",
          "zh": "坚持",
          "ex": "Learners who persist improve faster.",
          "col": "persist in",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062047",
      "seq": 17,
      "no": "062047",
      "title": "Solar Energy 太阳能",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "photovoltaic",
          "zh": "光伏的",
          "ex": "Photovoltaic cells turn light into electricity.",
          "col": "photovoltaic cell",
          "source": "predicted"
        },
        {
          "w": "renewable",
          "zh": "可再生的",
          "ex": "Solar power is renewable.",
          "col": "renewable energy",
          "source": "predicted"
        },
        {
          "w": "efficiency",
          "zh": "效率",
          "ex": "Panel efficiency has improved.",
          "col": "energy efficiency",
          "source": "predicted"
        },
        {
          "w": "intermittent",
          "zh": "间歇的、不稳定的",
          "ex": "Solar supply is intermittent.",
          "col": "intermittent supply",
          "source": "predicted"
        },
        {
          "w": "subsidy",
          "zh": "补贴",
          "ex": "A subsidy lowered the price.",
          "col": "a government subsidy",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062046",
      "seq": 18,
      "no": "062046",
      "title": "Ecology and Climatology 生态学与气候学",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "ecology",
          "zh": "生态学",
          "ex": "Ecology studies living systems.",
          "col": "the field of ecology",
          "source": "predicted"
        },
        {
          "w": "climatology",
          "zh": "气候学",
          "ex": "Climatology looks at long-term weather.",
          "col": "climatology research",
          "source": "predicted"
        },
        {
          "w": "ecosystem",
          "zh": "生态系统",
          "ex": "The ecosystem is sensitive to heat.",
          "col": "a fragile ecosystem",
          "source": "predicted"
        },
        {
          "w": "precipitation",
          "zh": "降水",
          "ex": "Precipitation has declined.",
          "col": "annual precipitation",
          "source": "predicted"
        },
        {
          "w": "habitat",
          "zh": "栖息地",
          "ex": "Habitat loss follows the drought.",
          "col": "habitat loss",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062045",
      "seq": 19,
      "no": "062045",
      "title": "It's Important to Protect Soil 保护土壤的重要性",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "erosion",
          "zh": "侵蚀",
          "ex": "Wind increases soil erosion.",
          "col": "soil erosion",
          "source": "predicted"
        },
        {
          "w": "fertility",
          "zh": "肥力",
          "ex": "Farming can reduce fertility.",
          "col": "soil fertility",
          "source": "predicted"
        },
        {
          "w": "degrade",
          "zh": "使退化",
          "ex": "Overuse degraded the land.",
          "col": "degraded land",
          "source": "predicted"
        },
        {
          "w": "yield",
          "zh": "产量",
          "ex": "Crop yield fell after the rains.",
          "col": "crop yield",
          "source": "predicted"
        },
        {
          "w": "conservation",
          "zh": "保护",
          "ex": "Soil conservation keeps farms productive.",
          "col": "soil conservation",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062044",
      "seq": 20,
      "no": "062044",
      "title": "Language Teaching Approaches 语言教学法",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "approach",
          "zh": "方法、教学法",
          "ex": "The communicative approach stresses speaking.",
          "col": "a teaching approach",
          "source": "predicted"
        },
        {
          "w": "immersion",
          "zh": "沉浸",
          "ex": "Immersion places learners in the language.",
          "col": "language immersion",
          "source": "predicted"
        },
        {
          "w": "acquisition",
          "zh": "习得",
          "ex": "Acquisition is not the same as memorizing rules.",
          "col": "language acquisition",
          "source": "predicted"
        },
        {
          "w": "fluency",
          "zh": "流利度",
          "ex": "The course aims at oral fluency.",
          "col": "oral fluency",
          "source": "predicted"
        },
        {
          "w": "instruction",
          "zh": "讲授、指导",
          "ex": "Grammar instruction still has a place.",
          "col": "grammar instruction",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062043",
      "seq": 21,
      "no": "062043",
      "title": "Overdraft Account 透支账户",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "overdraft",
          "zh": "透支",
          "ex": "The account includes an overdraft.",
          "col": "an overdraft account",
          "source": "predicted"
        },
        {
          "w": "balance",
          "zh": "余额",
          "ex": "Check the balance before you pay.",
          "col": "account balance",
          "source": "predicted"
        },
        {
          "w": "interest",
          "zh": "利息",
          "ex": "Interest is charged on the amount used.",
          "col": "interest rate",
          "source": "predicted"
        },
        {
          "w": "withdraw",
          "zh": "支取",
          "ex": "Customers can withdraw cash.",
          "col": "withdraw cash",
          "source": "predicted"
        },
        {
          "w": "limit",
          "zh": "额度",
          "ex": "The credit limit is one thousand dollars.",
          "col": "credit limit",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062042",
      "seq": 22,
      "no": "062042",
      "title": "The National Oceanography Center 国家海洋学中心（有英美差异）",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "oceanography",
          "zh": "海洋学",
          "ex": "Oceanography studies seas and currents.",
          "col": "physical oceanography",
          "source": "predicted"
        },
        {
          "w": "current",
          "zh": "洋流",
          "ex": "The current carries warm water north.",
          "col": "ocean current",
          "source": "predicted"
        },
        {
          "w": "marine",
          "zh": "海洋的",
          "ex": "Marine research needs special ships.",
          "col": "marine science",
          "source": "predicted"
        },
        {
          "w": "vessel",
          "zh": "船，尤指较大的船",
          "ex": "The vessel spent a month at sea.",
          "col": "a research vessel",
          "source": "predicted"
        },
        {
          "w": "survey",
          "zh": "勘察、调查",
          "ex": "The team completed a coastal survey.",
          "col": "a coastal survey",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062041",
      "seq": 23,
      "no": "062041",
      "title": "The Brundtland Report 布伦特兰报告",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "sustainable",
          "zh": "可持续的",
          "ex": "The report defined sustainable development.",
          "col": "sustainable development",
          "source": "predicted"
        },
        {
          "w": "commission",
          "zh": "委员会",
          "ex": "A commission wrote the report.",
          "col": "the Brundtland Commission",
          "source": "predicted"
        },
        {
          "w": "generation",
          "zh": "一代人",
          "ex": "Development should not harm future generations.",
          "col": "future generations",
          "source": "predicted"
        },
        {
          "w": "resource",
          "zh": "资源",
          "ex": "Natural resources are limited.",
          "col": "natural resources",
          "source": "predicted"
        },
        {
          "w": "policy",
          "zh": "政策",
          "ex": "The policy followed the report.",
          "col": "environmental policy",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062040",
      "seq": 24,
      "no": "062040",
      "title": "Khoikhoi科伊科伊人",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "pastoral",
          "zh": "游牧的、畜牧的",
          "ex": "They were a pastoral people.",
          "col": "pastoral people",
          "source": "predicted"
        },
        {
          "w": "livestock",
          "zh": "牲畜",
          "ex": "Livestock provided milk and meat.",
          "col": "keep livestock",
          "source": "predicted"
        },
        {
          "w": "migrate",
          "zh": "迁徙",
          "ex": "Herds migrate with the season.",
          "col": "migrate seasonally",
          "source": "predicted"
        },
        {
          "w": "colonial",
          "zh": "殖民的",
          "ex": "Colonial contact changed their land use.",
          "col": "colonial contact",
          "source": "predicted"
        },
        {
          "w": "herd",
          "zh": "牧群",
          "ex": "A herd needs open grazing land.",
          "col": "a cattle herd",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062039",
      "seq": 25,
      "no": "062039",
      "title": "Office Environment 工作环境",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "productivity",
          "zh": "生产力、工作效率",
          "ex": "Noise lowered productivity.",
          "col": "office productivity",
          "source": "predicted"
        },
        {
          "w": "layout",
          "zh": "布局",
          "ex": "The layout left little quiet space.",
          "col": "office layout",
          "source": "predicted"
        },
        {
          "w": "concentration",
          "zh": "专注",
          "ex": "Calls break concentration.",
          "col": "break concentration",
          "source": "predicted"
        },
        {
          "w": "lighting",
          "zh": "照明",
          "ex": "Poor lighting strains the eyes.",
          "col": "natural lighting",
          "source": "predicted"
        },
        {
          "w": "ergonomic",
          "zh": "符合人体工学的",
          "ex": "Ergonomic chairs reduced back pain.",
          "col": "ergonomic chair",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062038",
      "seq": 26,
      "no": "062038",
      "title": "Human Remains 人类遗体",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "remains",
          "zh": "遗体、遗骸",
          "ex": "The museum holds human remains.",
          "col": "human remains",
          "source": "predicted"
        },
        {
          "w": "excavate",
          "zh": "挖掘",
          "ex": "Teams excavate burial sites.",
          "col": "excavate a site",
          "source": "predicted"
        },
        {
          "w": "repatriate",
          "zh": "归还（文物或遗体）",
          "ex": "Communities asked to repatriate the remains.",
          "col": "repatriate remains",
          "source": "predicted"
        },
        {
          "w": "ethics",
          "zh": "伦理",
          "ex": "Research ethics limit what scientists may do.",
          "col": "research ethics",
          "source": "predicted"
        },
        {
          "w": "archaeological",
          "zh": "考古的",
          "ex": "It was an archaeological find.",
          "col": "archaeological find",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062014",
      "seq": 31,
      "no": "062014",
      "title": "Children Allowance 小朋友的零用钱",
      "type": "single",
      "note": "单次转折类",
      "text": null,
      "vocab": [
        {
          "w": "allowance",
          "zh": "零用钱、津贴",
          "ex": "Parents give a weekly allowance.",
          "col": "a weekly allowance",
          "source": "predicted"
        },
        {
          "w": "budget",
          "zh": "预算",
          "ex": "Children can learn to keep a budget.",
          "col": "a household budget",
          "source": "predicted"
        },
        {
          "w": "saving",
          "zh": "储蓄",
          "ex": "The plan encourages saving.",
          "col": "encourage saving",
          "source": "predicted"
        },
        {
          "w": "incentive",
          "zh": "激励",
          "ex": "A small incentive changed their habits.",
          "col": "a small incentive",
          "source": "predicted"
        },
        {
          "w": "responsibility",
          "zh": "责任",
          "ex": "Money can teach financial responsibility.",
          "col": "financial responsibility",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061059",
      "seq": 33,
      "no": "061059",
      "title": "The Transition to Adulthood 成年期过渡「鸣谢学籽Jack」",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "transition",
          "zh": "过渡",
          "ex": "The transition to adulthood takes longer now.",
          "col": "the transition to adulthood",
          "source": "predicted"
        },
        {
          "w": "adolescence",
          "zh": "青春期",
          "ex": "Late adolescence is still a dependent stage.",
          "col": "late adolescence",
          "source": "predicted"
        },
        {
          "w": "independence",
          "zh": "独立",
          "ex": "Financial independence comes later.",
          "col": "financial independence",
          "source": "predicted"
        },
        {
          "w": "milestone",
          "zh": "里程碑",
          "ex": "Leaving home is a common milestone.",
          "col": "a life milestone",
          "source": "predicted"
        },
        {
          "w": "identity",
          "zh": "身份、自我认同",
          "ex": "Work helps form an adult identity.",
          "col": "personal identity",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061058",
      "seq": 34,
      "no": "061058",
      "title": "Bertrand Russell 结过四次婚的科学家",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "philosopher",
          "zh": "哲学家",
          "ex": "Russell was a philosopher and mathematician.",
          "col": "a British philosopher",
          "source": "predicted"
        },
        {
          "w": "logic",
          "zh": "逻辑",
          "ex": "He worked on mathematical logic.",
          "col": "mathematical logic",
          "source": "predicted"
        },
        {
          "w": "pacifist",
          "zh": "和平主义者",
          "ex": "He was a well-known pacifist.",
          "col": "a committed pacifist",
          "source": "predicted"
        },
        {
          "w": "influence",
          "zh": "影响",
          "ex": "His essays had a wide influence.",
          "col": "a lasting influence",
          "source": "predicted"
        },
        {
          "w": "publication",
          "zh": "出版物、发表的作品",
          "ex": "The publication reached a general audience.",
          "col": "a major publication",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061057",
      "seq": 35,
      "no": "061057",
      "title": "Pre-existing/Prior Knowledge 先验知识",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "prior",
          "zh": "先前的",
          "ex": "Prior knowledge helps readers predict.",
          "col": "prior knowledge",
          "source": "predicted"
        },
        {
          "w": "schema",
          "zh": "图式、知识框架",
          "ex": "A schema organizes what we already know.",
          "col": "a mental schema",
          "source": "predicted"
        },
        {
          "w": "activate",
          "zh": "激活",
          "ex": "Teachers activate background knowledge.",
          "col": "activate background knowledge",
          "source": "predicted"
        },
        {
          "w": "comprehension",
          "zh": "理解",
          "ex": "Comprehension improves when the topic is familiar.",
          "col": "reading comprehension",
          "source": "predicted"
        },
        {
          "w": "assumption",
          "zh": "假设",
          "ex": "A wrong assumption can block understanding.",
          "col": "a false assumption",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061056",
      "seq": 36,
      "no": "061056",
      "title": "Ethics",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "ethics",
          "zh": "伦理、伦理学",
          "ex": "Medical ethics guides difficult choices.",
          "col": "professional ethics",
          "source": "predicted"
        },
        {
          "w": "moral",
          "zh": "道德的",
          "ex": "They debated a moral duty.",
          "col": "a moral duty",
          "source": "predicted"
        },
        {
          "w": "dilemma",
          "zh": "两难",
          "ex": "The case presents an ethical dilemma.",
          "col": "an ethical dilemma",
          "source": "predicted"
        },
        {
          "w": "conduct",
          "zh": "行为",
          "ex": "The code of conduct is public.",
          "col": "code of conduct",
          "source": "predicted"
        },
        {
          "w": "justify",
          "zh": "为…辩护、证明正当",
          "ex": "He could not justify the decision.",
          "col": "justify a decision",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061055",
      "seq": 37,
      "no": "061055",
      "title": "Complaint and Negative Bonding 抱怨和负连接",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "complaint",
          "zh": "抱怨、投诉",
          "ex": "Repeated complaints damaged the friendship.",
          "col": "file a complaint",
          "source": "predicted"
        },
        {
          "w": "bond",
          "zh": "联结、关系",
          "ex": "Negative talk can weaken a social bond.",
          "col": "social bond",
          "source": "predicted"
        },
        {
          "w": "reinforce",
          "zh": "强化",
          "ex": "Complaining can reinforce the habit.",
          "col": "reinforce a habit",
          "source": "predicted"
        },
        {
          "w": "resentment",
          "zh": "怨恨",
          "ex": "Resentment grew over small issues.",
          "col": "build resentment",
          "source": "predicted"
        },
        {
          "w": "interaction",
          "zh": "互动",
          "ex": "Daily interaction turned sour.",
          "col": "daily interaction",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061054",
      "seq": 38,
      "no": "061054",
      "title": "Overcome Shyness 克服羞涩",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "shyness",
          "zh": "羞怯",
          "ex": "Shyness stopped him from speaking.",
          "col": "overcome shyness",
          "source": "predicted"
        },
        {
          "w": "inhibit",
          "zh": "抑制",
          "ex": "Fear can inhibit speech.",
          "col": "inhibit speech",
          "source": "predicted"
        },
        {
          "w": "exposure",
          "zh": "（逐步）面对",
          "ex": "Gradual exposure reduced the fear.",
          "col": "gradual exposure",
          "source": "predicted"
        },
        {
          "w": "anxiety",
          "zh": "焦虑",
          "ex": "Social anxiety is common.",
          "col": "social anxiety",
          "source": "predicted"
        },
        {
          "w": "avoid",
          "zh": "回避",
          "ex": "Shy people often avoid eye contact.",
          "col": "avoid eye contact",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061053",
      "seq": 39,
      "no": "061053",
      "title": "A Research about Greenland Sharks 关于格陵兰鲨鱼的研究",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "longevity",
          "zh": "长寿",
          "ex": "The shark is known for its longevity.",
          "col": "extreme longevity",
          "source": "predicted"
        },
        {
          "w": "species",
          "zh": "物种",
          "ex": "This species lives in deep cold water.",
          "col": "a deep-sea species",
          "source": "predicted"
        },
        {
          "w": "estimate",
          "zh": "估计",
          "ex": "Scientists estimate the age from eye tissue.",
          "col": "estimate the age",
          "source": "predicted"
        },
        {
          "w": "mature",
          "zh": "成熟",
          "ex": "These sharks mature very slowly.",
          "col": "mature slowly",
          "source": "predicted"
        },
        {
          "w": "specimen",
          "zh": "样本",
          "ex": "A specimen was examined in the lab.",
          "col": "a tissue specimen",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061052",
      "seq": 40,
      "no": "061052",
      "title": "Silent Movie 默片",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "silent",
          "zh": "无声的",
          "ex": "Silent films relied on faces and movement.",
          "col": "silent film",
          "source": "predicted"
        },
        {
          "w": "gesture",
          "zh": "手势、动作",
          "ex": "Actors used large gestures.",
          "col": "exaggerated gesture",
          "source": "predicted"
        },
        {
          "w": "audience",
          "zh": "观众",
          "ex": "The audience read the title cards.",
          "col": "a mass audience",
          "source": "predicted"
        },
        {
          "w": "era",
          "zh": "时代",
          "ex": "The silent era ended in the late 1920s.",
          "col": "the silent era",
          "source": "predicted"
        },
        {
          "w": "soundtrack",
          "zh": "声带、配乐",
          "ex": "A soundtrack was added later.",
          "col": "a recorded soundtrack",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061051",
      "seq": 41,
      "no": "061051",
      "title": "Geothermal Energy 地热能（文本与原文有差异）",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "geothermal",
          "zh": "地热的",
          "ex": "Geothermal plants use underground heat.",
          "col": "geothermal energy",
          "source": "predicted"
        },
        {
          "w": "steam",
          "zh": "蒸汽",
          "ex": "Steam drives the turbine.",
          "col": "steam turbine",
          "source": "predicted"
        },
        {
          "w": "crust",
          "zh": "地壳",
          "ex": "Heat rises through the crust.",
          "col": "the Earth's crust",
          "source": "predicted"
        },
        {
          "w": "drill",
          "zh": "钻探",
          "ex": "Engineers drill a deep well.",
          "col": "drill a well",
          "source": "predicted"
        },
        {
          "w": "emission",
          "zh": "排放",
          "ex": "The plant has low emissions.",
          "col": "low emission",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061048",
      "seq": 42,
      "no": "061048",
      "title": "House Mice 家鼠",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "rodent",
          "zh": "啮齿动物",
          "ex": "The house mouse is a small rodent.",
          "col": "a common rodent",
          "source": "predicted"
        },
        {
          "w": "infest",
          "zh": "大量侵扰",
          "ex": "Mice can infest a kitchen.",
          "col": "infest a house",
          "source": "predicted"
        },
        {
          "w": "breed",
          "zh": "繁殖",
          "ex": "They breed rapidly.",
          "col": "breed rapidly",
          "source": "predicted"
        },
        {
          "w": "pest",
          "zh": "害虫",
          "ex": "It is a familiar household pest.",
          "col": "a household pest",
          "source": "predicted"
        },
        {
          "w": "adapt",
          "zh": "适应",
          "ex": "The species adapted to living with people.",
          "col": "adapt to humans",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061047",
      "seq": 43,
      "no": "061047",
      "title": "Museology 博物馆学",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "museology",
          "zh": "博物馆学",
          "ex": "Museology studies how museums work.",
          "col": "the field of museology",
          "source": "predicted"
        },
        {
          "w": "exhibit",
          "zh": "展品、展览",
          "ex": "The exhibit explains the object's history.",
          "col": "a permanent exhibit",
          "source": "predicted"
        },
        {
          "w": "curate",
          "zh": "策划、策展",
          "ex": "Staff curate the collection.",
          "col": "curate a collection",
          "source": "predicted"
        },
        {
          "w": "artefact",
          "zh": "人工制品、文物",
          "ex": "Each artefact needs a clear label.",
          "col": "a cultural artefact",
          "source": "predicted"
        },
        {
          "w": "interpretation",
          "zh": "阐释",
          "ex": "Interpretation helps visitors understand.",
          "col": "museum interpretation",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061046",
      "seq": 44,
      "no": "061046",
      "title": "Paleolithic People 旧石器时代的人们",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "Paleolithic",
          "zh": "旧石器时代的",
          "ex": "Paleolithic people made stone tools.",
          "col": "Paleolithic people",
          "source": "predicted"
        },
        {
          "w": "hunter-gatherer",
          "zh": "狩猎采集者",
          "ex": "Hunter-gatherer groups moved with food.",
          "col": "hunter-gatherer bands",
          "source": "predicted"
        },
        {
          "w": "nomadic",
          "zh": "游动的、非定居的",
          "ex": "Nomadic life left few permanent houses.",
          "col": "nomadic life",
          "source": "predicted"
        },
        {
          "w": "subsistence",
          "zh": "生计、维持生存的方式",
          "ex": "Hunting was the subsistence strategy.",
          "col": "subsistence strategy",
          "source": "predicted"
        },
        {
          "w": "tool",
          "zh": "工具",
          "ex": "A stone tool could cut hide.",
          "col": "stone tool",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061045",
      "seq": 45,
      "no": "061045",
      "title": "Plants Research 植物研究",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "botany",
          "zh": "植物学",
          "ex": "The project is based in a botany lab.",
          "col": "a botany lab",
          "source": "predicted"
        },
        {
          "w": "specimen",
          "zh": "标本",
          "ex": "Each specimen is pressed and labeled.",
          "col": "a plant specimen",
          "source": "predicted"
        },
        {
          "w": "photosynthesis",
          "zh": "光合作用",
          "ex": "Photosynthesis uses light to make sugar.",
          "col": "the process of photosynthesis",
          "source": "predicted"
        },
        {
          "w": "trait",
          "zh": "性状",
          "ex": "Researchers look for a useful trait.",
          "col": "a useful trait",
          "source": "predicted"
        },
        {
          "w": "controlled",
          "zh": "受控的",
          "ex": "It was a controlled experiment.",
          "col": "a controlled experiment",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061042",
      "seq": 46,
      "no": "061042",
      "title": "The Booksellers of Hookham and Carpenter 书商胡克汉姆和卡朋特",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "bookseller",
          "zh": "书商",
          "ex": "The booksellers lent books as well as sold them.",
          "col": "a London bookseller",
          "source": "predicted"
        },
        {
          "w": "subscription",
          "zh": "订阅、会员制",
          "ex": "Readers paid a subscription.",
          "col": "a subscription library",
          "source": "predicted"
        },
        {
          "w": "circulate",
          "zh": "流通、借阅流传",
          "ex": "Popular novels circulated quickly.",
          "col": "circulate a library",
          "source": "predicted"
        },
        {
          "w": "volume",
          "zh": "一卷、一册",
          "ex": "The shop published a new volume.",
          "col": "publish a volume",
          "source": "predicted"
        },
        {
          "w": "trade",
          "zh": "行业",
          "ex": "They were important in the book trade.",
          "col": "the book trade",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061034",
      "seq": 47,
      "no": "061034",
      "title": "Tree Ring 树的年轮",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "ring",
          "zh": "年轮",
          "ex": "A wide ring means a good growing year.",
          "col": "tree ring",
          "source": "predicted"
        },
        {
          "w": "dendrochronology",
          "zh": "树木年轮学",
          "ex": "Dendrochronology dates old wood.",
          "col": "the methods of dendrochronology",
          "source": "predicted"
        },
        {
          "w": "drought",
          "zh": "干旱",
          "ex": "A narrow ring can mark a drought.",
          "col": "a drought year",
          "source": "predicted"
        },
        {
          "w": "growth",
          "zh": "生长",
          "ex": "Annual growth depends on rain.",
          "col": "annual growth",
          "source": "predicted"
        },
        {
          "w": "core",
          "zh": "岩芯、木芯样本",
          "ex": "Scientists remove a core sample.",
          "col": "a core sample",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061033",
      "seq": 48,
      "no": "061033",
      "title": "2014 Sochi Olympics 索契2014冬奥会",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "host",
          "zh": "主办",
          "ex": "The city hosted the Winter Games.",
          "col": "host the Games",
          "source": "predicted"
        },
        {
          "w": "infrastructure",
          "zh": "基础设施",
          "ex": "New infrastructure was built for visitors.",
          "col": "new infrastructure",
          "source": "predicted"
        },
        {
          "w": "venue",
          "zh": "场馆",
          "ex": "Each venue needed transport links.",
          "col": "a sports venue",
          "source": "predicted"
        },
        {
          "w": "legacy",
          "zh": "遗产、后续影响",
          "ex": "The legacy of the Games is debated.",
          "col": "Olympic legacy",
          "source": "predicted"
        },
        {
          "w": "overrun",
          "zh": "超支",
          "ex": "The project suffered a cost overrun.",
          "col": "cost overrun",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061030",
      "seq": 49,
      "no": "061030",
      "title": "Small War 小型战争",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "conflict",
          "zh": "冲突",
          "ex": "A small war is still a violent conflict.",
          "col": "a limited conflict",
          "source": "predicted"
        },
        {
          "w": "troop",
          "zh": "部队",
          "ex": "Troops were sent for a short campaign.",
          "col": "deploy troops",
          "source": "predicted"
        },
        {
          "w": "insurgency",
          "zh": "叛乱",
          "ex": "The aim was to counter an insurgency.",
          "col": "counter an insurgency",
          "source": "predicted"
        },
        {
          "w": "civilian",
          "zh": "平民",
          "ex": "Civilian casualties were reported.",
          "col": "civilian casualties",
          "source": "predicted"
        },
        {
          "w": "scale",
          "zh": "规模",
          "ex": "The fighting stayed on a small scale.",
          "col": "a small scale",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061029",
      "seq": 50,
      "no": "061029",
      "title": "Tourism in Malaysia 马来西亚旅游业",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "tourism",
          "zh": "旅游业",
          "ex": "Tourism is a major employer.",
          "col": "mass tourism",
          "source": "predicted"
        },
        {
          "w": "revenue",
          "zh": "收入",
          "ex": "Tourism revenue rose last year.",
          "col": "tourism revenue",
          "source": "predicted"
        },
        {
          "w": "destination",
          "zh": "目的地",
          "ex": "The coast is a popular destination.",
          "col": "a tourist destination",
          "source": "predicted"
        },
        {
          "w": "heritage",
          "zh": "遗产",
          "ex": "Heritage sites attract visitors.",
          "col": "cultural heritage",
          "source": "predicted"
        },
        {
          "w": "seasonal",
          "zh": "季节性的",
          "ex": "Demand is highly seasonal.",
          "col": "seasonal demand",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061022",
      "seq": 53,
      "no": "061022",
      "title": "Write A Good Essay",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "thesis",
          "zh": "论点",
          "ex": "The essay needs a clear thesis.",
          "col": "a clear thesis",
          "source": "predicted"
        },
        {
          "w": "paragraph",
          "zh": "段落",
          "ex": "Each paragraph develops one idea.",
          "col": "a body paragraph",
          "source": "predicted"
        },
        {
          "w": "evidence",
          "zh": "证据",
          "ex": "Evidence should support the claim.",
          "col": "supporting evidence",
          "source": "predicted"
        },
        {
          "w": "cohesive",
          "zh": "衔接的",
          "ex": "Cohesive devices link the sentences.",
          "col": "cohesive devices",
          "source": "predicted"
        },
        {
          "w": "revise",
          "zh": "修改",
          "ex": "Revise the draft before you submit it.",
          "col": "revise a draft",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "061019",
      "seq": 54,
      "no": "061019",
      "title": "Online Teaching and Learning 网络教学",
      "type": "parallel",
      "note": "并列对比类",
      "text": null,
      "vocab": [
        {
          "w": "asynchronous",
          "zh": "非同步的、不必同时在线的",
          "ex": "Asynchronous lessons can be watched later.",
          "col": "asynchronous learning",
          "source": "predicted"
        },
        {
          "w": "feedback",
          "zh": "反馈",
          "ex": "Timely feedback keeps students going.",
          "col": "timely feedback",
          "source": "predicted"
        },
        {
          "w": "interact",
          "zh": "互动",
          "ex": "It is harder to interact online.",
          "col": "interact with students",
          "source": "predicted"
        },
        {
          "w": "isolation",
          "zh": "孤立",
          "ex": "Some learners feel isolation.",
          "col": "learner isolation",
          "source": "predicted"
        },
        {
          "w": "access",
          "zh": "接入、使用条件",
          "ex": "Poor access to the internet excludes students.",
          "col": "access to the internet",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060001",
      "seq": 94,
      "no": "060001",
      "title": "Demand for Resources 对于能源的需求",
      "type": "parallel",
      "note": "并列对比类 / 暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "demand",
          "zh": "需求",
          "ex": "Demand for energy keeps rising.",
          "col": "rising demand",
          "source": "predicted"
        },
        {
          "w": "scarce",
          "zh": "稀缺的",
          "ex": "Clean water is scarce in the region.",
          "col": "scarce resources",
          "source": "predicted"
        },
        {
          "w": "consumption",
          "zh": "消耗",
          "ex": "Energy consumption grew with income.",
          "col": "energy consumption",
          "source": "predicted"
        },
        {
          "w": "finite",
          "zh": "有限的",
          "ex": "Oil reserves are finite.",
          "col": "finite reserves",
          "source": "predicted"
        },
        {
          "w": "shortage",
          "zh": "短缺",
          "ex": "A shortage pushed prices up.",
          "col": "a resource shortage",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062055",
      "seq": 10,
      "no": "062055",
      "title": "New Ideas 新想法",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "innovation",
          "zh": "创新",
          "ex": "The firm invested in innovation.",
          "col": "technological innovation",
          "source": "predicted"
        },
        {
          "w": "novel",
          "zh": "新颖的",
          "ex": "The idea was novel but untested.",
          "col": "a novel idea",
          "source": "predicted"
        },
        {
          "w": "adopt",
          "zh": "采用",
          "ex": "Schools were slow to adopt it.",
          "col": "adopt an idea",
          "source": "predicted"
        },
        {
          "w": "resistance",
          "zh": "阻力",
          "ex": "There was resistance to change.",
          "col": "resistance to change",
          "source": "predicted"
        },
        {
          "w": "diffuse",
          "zh": "传播",
          "ex": "New ideas diffuse through networks.",
          "col": "ideas diffuse",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "062054",
      "seq": 11,
      "no": "062054",
      "title": "The Role of Luck in a Winner-Takes-All Economy 在赢家通吃的经济体系中运气的作用",
      "type": "none",
      "note": "—",
      "text": null,
      "vocab": [
        {
          "w": "winner-takes-all",
          "zh": "赢家通吃的",
          "ex": "In a winner-takes-all market, small differences bring huge rewards.",
          "col": "a winner-takes-all market",
          "source": "predicted"
        },
        {
          "w": "merit",
          "zh": "才能、功劳",
          "ex": "Success is not merit alone.",
          "col": "merit alone",
          "source": "predicted"
        },
        {
          "w": "inequality",
          "zh": "不平等",
          "ex": "The system increases inequality.",
          "col": "income inequality",
          "source": "predicted"
        },
        {
          "w": "disproportionate",
          "zh": "不成比例的",
          "ex": "The reward is disproportionate.",
          "col": "disproportionate reward",
          "source": "predicted"
        },
        {
          "w": "chance",
          "zh": "偶然、运气",
          "ex": "Chance plays a large role.",
          "col": "pure chance",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060049",
      "seq": 57,
      "no": "060049",
      "title": "World Population 世界人口",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "fertility",
          "zh": "生育率",
          "ex": "The fertility rate has fallen.",
          "col": "fertility rate",
          "source": "predicted"
        },
        {
          "w": "census",
          "zh": "人口普查",
          "ex": "The census counts every household.",
          "col": "a national census",
          "source": "predicted"
        },
        {
          "w": "density",
          "zh": "密度",
          "ex": "Population density is highest on the coast.",
          "col": "population density",
          "source": "predicted"
        },
        {
          "w": "projection",
          "zh": "预测数字",
          "ex": "The projection shows slower growth.",
          "col": "a population projection",
          "source": "predicted"
        },
        {
          "w": "growth",
          "zh": "增长",
          "ex": "Population growth is uneven.",
          "col": "population growth",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060048",
      "seq": 58,
      "no": "060048",
      "title": "Life-long Learning 终身学习",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "lifelong",
          "zh": "终身的",
          "ex": "Lifelong learning is now expected.",
          "col": "lifelong learning",
          "source": "predicted"
        },
        {
          "w": "retrain",
          "zh": "再培训",
          "ex": "Workers retrain after a layoff.",
          "col": "retrain workers",
          "source": "predicted"
        },
        {
          "w": "formal",
          "zh": "正规的",
          "ex": "Formal education is only the start.",
          "col": "formal education",
          "source": "predicted"
        },
        {
          "w": "workforce",
          "zh": "劳动力",
          "ex": "An ageing workforce needs new skills.",
          "col": "an ageing workforce",
          "source": "predicted"
        },
        {
          "w": "adapt",
          "zh": "适应",
          "ex": "Adults must adapt to new tools.",
          "col": "adapt to change",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060047",
      "seq": 59,
      "no": "060047",
      "title": "Replaced Jobs by Automation 自动化取代工作",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "automation",
          "zh": "自动化",
          "ex": "Automation replaces some routine jobs.",
          "col": "workplace automation",
          "source": "predicted"
        },
        {
          "w": "displace",
          "zh": "取代、使失业",
          "ex": "Machines can displace workers.",
          "col": "displace workers",
          "source": "predicted"
        },
        {
          "w": "routine",
          "zh": "常规的",
          "ex": "Routine tasks are easiest to automate.",
          "col": "routine tasks",
          "source": "predicted"
        },
        {
          "w": "reskill",
          "zh": "重新培训技能",
          "ex": "Firms reskill staff for new roles.",
          "col": "reskill staff",
          "source": "predicted"
        },
        {
          "w": "occupation",
          "zh": "职业",
          "ex": "A whole occupation may shrink.",
          "col": "an entire occupation",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060046",
      "seq": 60,
      "no": "060046",
      "title": "Charles Darwin 查尔斯达尔文",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "evolution",
          "zh": "进化",
          "ex": "Darwin explained evolution by natural selection.",
          "col": "the theory of evolution",
          "source": "predicted"
        },
        {
          "w": "natural selection",
          "zh": "自然选择",
          "ex": "Natural selection favors useful traits.",
          "col": "natural selection",
          "source": "predicted"
        },
        {
          "w": "adapt",
          "zh": "适应",
          "ex": "Species adapt to local conditions.",
          "col": "adapt to an environment",
          "source": "predicted"
        },
        {
          "w": "fossil",
          "zh": "化石",
          "ex": "Fossil evidence supported the theory.",
          "col": "fossil evidence",
          "source": "predicted"
        },
        {
          "w": "origin",
          "zh": "起源",
          "ex": "The book is about the origin of species.",
          "col": "the origin of species",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060045",
      "seq": 61,
      "no": "060045",
      "title": "Legumes 豆科植物",
      "type": "none",
      "note": "—",
      "text": null,
      "vocab": [
        {
          "w": "legume",
          "zh": "豆科植物",
          "ex": "Legumes include beans and peas.",
          "col": "plant legumes",
          "source": "predicted"
        },
        {
          "w": "nitrogen",
          "zh": "氮",
          "ex": "These plants fix nitrogen in the soil.",
          "col": "fix nitrogen",
          "source": "predicted"
        },
        {
          "w": "protein",
          "zh": "蛋白质",
          "ex": "They are a source of plant protein.",
          "col": "plant protein",
          "source": "predicted"
        },
        {
          "w": "pulse",
          "zh": "食用豆类",
          "ex": "Pulses are dried edible seeds.",
          "col": "edible pulses",
          "source": "predicted"
        },
        {
          "w": "enrich",
          "zh": "使肥沃",
          "ex": "The crop can enrich the soil.",
          "col": "enrich the soil",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060041",
      "seq": 64,
      "no": "060041",
      "title": "Two Kinds of Immune Systems 两种免疫系统（鸣谢学籽Abby）",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "immune",
          "zh": "免疫的",
          "ex": "The immune system fights infection.",
          "col": "the immune system",
          "source": "predicted"
        },
        {
          "w": "innate",
          "zh": "先天的",
          "ex": "Innate immunity is present from birth.",
          "col": "innate immunity",
          "source": "predicted"
        },
        {
          "w": "adaptive",
          "zh": "适应性的",
          "ex": "Adaptive immunity learns from past infection.",
          "col": "adaptive immunity",
          "source": "predicted"
        },
        {
          "w": "antibody",
          "zh": "抗体",
          "ex": "The body produces antibodies.",
          "col": "produce antibodies",
          "source": "predicted"
        },
        {
          "w": "pathogen",
          "zh": "病原体",
          "ex": "A pathogen is a disease-causing agent.",
          "col": "fight a pathogen",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060039",
      "seq": 66,
      "no": "060039",
      "title": "The Development of Vehicles 车辆的发展",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "vehicle",
          "zh": "车辆",
          "ex": "Private vehicles filled the roads.",
          "col": "motor vehicle",
          "source": "predicted"
        },
        {
          "w": "combustion",
          "zh": "燃烧",
          "ex": "The internal combustion engine burns fuel.",
          "col": "internal combustion engine",
          "source": "predicted"
        },
        {
          "w": "mobility",
          "zh": "出行能力",
          "ex": "Cars increased personal mobility.",
          "col": "personal mobility",
          "source": "predicted"
        },
        {
          "w": "emission",
          "zh": "排放",
          "ex": "Vehicle emissions affect city air.",
          "col": "vehicle emissions",
          "source": "predicted"
        },
        {
          "w": "infrastructure",
          "zh": "基础设施",
          "ex": "Roads are transport infrastructure.",
          "col": "road infrastructure",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060038",
      "seq": 67,
      "no": "060038",
      "title": "High Fat Diet 高热量饮食",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "diet",
          "zh": "饮食",
          "ex": "A high-fat diet raised the health risk.",
          "col": "a high-fat diet",
          "source": "predicted"
        },
        {
          "w": "calorie",
          "zh": "热量",
          "ex": "Extra calories are stored as fat.",
          "col": "excess calories",
          "source": "predicted"
        },
        {
          "w": "obesity",
          "zh": "肥胖",
          "ex": "The study linked the diet to obesity.",
          "col": "linked to obesity",
          "source": "predicted"
        },
        {
          "w": "nutrition",
          "zh": "营养",
          "ex": "Nutrition advice has changed.",
          "col": "poor nutrition",
          "source": "predicted"
        },
        {
          "w": "consume",
          "zh": "摄入",
          "ex": "People consume more processed food.",
          "col": "consume fat",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060037",
      "seq": 68,
      "no": "060037",
      "title": "The Rise of Seattle 西雅图的崛起",
      "type": "none",
      "note": "—",
      "text": null,
      "vocab": [
        {
          "w": "boom",
          "zh": "繁荣",
          "ex": "A trade boom changed the city.",
          "col": "an economic boom",
          "source": "predicted"
        },
        {
          "w": "port",
          "zh": "港口",
          "ex": "The port connected the city to Asia.",
          "col": "a deep-water port",
          "source": "predicted"
        },
        {
          "w": "migrant",
          "zh": "移民",
          "ex": "Migrants arrived for work.",
          "col": "attract migrants",
          "source": "predicted"
        },
        {
          "w": "urban",
          "zh": "城市的",
          "ex": "Urban growth was rapid.",
          "col": "urban growth",
          "source": "predicted"
        },
        {
          "w": "trade",
          "zh": "贸易",
          "ex": "Regional trade paid for new buildings.",
          "col": "regional trade",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060036",
      "seq": 69,
      "no": "060036",
      "title": "Two Kinds of Aggression 两种攻击行为",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "aggression",
          "zh": "攻击行为",
          "ex": "The paper compares two forms of aggression.",
          "col": "physical aggression",
          "source": "predicted"
        },
        {
          "w": "hostile",
          "zh": "敌意的",
          "ex": "Hostile aggression aims to hurt.",
          "col": "hostile aggression",
          "source": "predicted"
        },
        {
          "w": "instrumental",
          "zh": "工具性的、为了达到目的的",
          "ex": "Instrumental aggression is used to get something.",
          "col": "instrumental aggression",
          "source": "predicted"
        },
        {
          "w": "provoke",
          "zh": "激怒、挑起",
          "ex": "A threat can provoke a response.",
          "col": "provoke a response",
          "source": "predicted"
        },
        {
          "w": "restrain",
          "zh": "克制",
          "ex": "Adults learn to restrain aggression.",
          "col": "restrain aggression",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060034",
      "seq": 71,
      "no": "060034",
      "title": "Company Failure 公司的失败（回忆较少）",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "bankrupt",
          "zh": "破产的",
          "ex": "The firm went bankrupt.",
          "col": "go bankrupt",
          "source": "predicted"
        },
        {
          "w": "debt",
          "zh": "债务",
          "ex": "Debt grew faster than sales.",
          "col": "unsustainable debt",
          "source": "predicted"
        },
        {
          "w": "collapse",
          "zh": "倒闭、崩溃",
          "ex": "The collapse surprised investors.",
          "col": "a sudden collapse",
          "source": "predicted"
        },
        {
          "w": "management",
          "zh": "管理",
          "ex": "Poor management was one cause.",
          "col": "poor management",
          "source": "predicted"
        },
        {
          "w": "recover",
          "zh": "恢复",
          "ex": "The company failed to recover.",
          "col": "fail to recover",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060032",
      "seq": 73,
      "no": "060032",
      "title": "Three Types of Authority 三种权威机构",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "authority",
          "zh": "权威",
          "ex": "People accept different kinds of authority.",
          "col": "legitimate authority",
          "source": "predicted"
        },
        {
          "w": "traditional",
          "zh": "传统的",
          "ex": "Traditional authority comes from custom.",
          "col": "traditional authority",
          "source": "predicted"
        },
        {
          "w": "charismatic",
          "zh": "有人格魅力的",
          "ex": "A charismatic leader attracts followers.",
          "col": "charismatic leader",
          "source": "predicted"
        },
        {
          "w": "legitimacy",
          "zh": "合法性",
          "ex": "Legitimacy is lost if rules are ignored.",
          "col": "political legitimacy",
          "source": "predicted"
        },
        {
          "w": "obey",
          "zh": "服从",
          "ex": "Soldiers obey a legal order.",
          "col": "obey an order",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060030",
      "seq": 75,
      "no": "060030",
      "title": "Sleep and Eat 睡眠与饮食",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "appetite",
          "zh": "食欲",
          "ex": "Poor sleep can increase appetite.",
          "col": "control appetite",
          "source": "predicted"
        },
        {
          "w": "hormone",
          "zh": "激素",
          "ex": "A hunger hormone rises after short sleep.",
          "col": "a hunger hormone",
          "source": "predicted"
        },
        {
          "w": "deprivation",
          "zh": "剥夺",
          "ex": "Sleep deprivation changed eating habits.",
          "col": "sleep deprivation",
          "source": "predicted"
        },
        {
          "w": "metabolism",
          "zh": "新陈代谢",
          "ex": "Metabolism slows when rest is cut.",
          "col": "slow metabolism",
          "source": "predicted"
        },
        {
          "w": "intake",
          "zh": "摄入量",
          "ex": "Calorie intake went up.",
          "col": "calorie intake",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060029",
      "seq": 76,
      "no": "060029",
      "title": "Fallacy 谬论",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "fallacy",
          "zh": "谬论、推理错误",
          "ex": "The conclusion rests on a fallacy.",
          "col": "a logical fallacy",
          "source": "predicted"
        },
        {
          "w": "premise",
          "zh": "前提",
          "ex": "The premise is not true.",
          "col": "a false premise",
          "source": "predicted"
        },
        {
          "w": "valid",
          "zh": "（推理）有效的",
          "ex": "A valid argument can still start from a false premise.",
          "col": "a valid conclusion",
          "source": "predicted"
        },
        {
          "w": "assume",
          "zh": "假定",
          "ex": "The writer assumes too much.",
          "col": "assume too much",
          "source": "predicted"
        },
        {
          "w": "reasoning",
          "zh": "推理",
          "ex": "The reasoning does not follow.",
          "col": "faulty reasoning",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060028",
      "seq": 77,
      "no": "060028",
      "title": "Computer and Psychology 电脑与心理学",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "cognition",
          "zh": "认知",
          "ex": "Computers are used to model cognition.",
          "col": "human cognition",
          "source": "predicted"
        },
        {
          "w": "simulate",
          "zh": "模拟",
          "ex": "A program can simulate a simple choice.",
          "col": "simulate a mind",
          "source": "predicted"
        },
        {
          "w": "stimulus",
          "zh": "刺激",
          "ex": "The subject responds to a stimulus.",
          "col": "respond to a stimulus",
          "source": "predicted"
        },
        {
          "w": "behaviour",
          "zh": "行为",
          "ex": "The experiment records behaviour.",
          "col": "observe behaviour",
          "source": "predicted"
        },
        {
          "w": "model",
          "zh": "模型",
          "ex": "The model is only a simplification.",
          "col": "a cognitive model",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060026",
      "seq": 79,
      "no": "060026",
      "title": "Steps to Improve Business Processes 改进商业流程的步骤",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "process",
          "zh": "流程",
          "ex": "Map the process before you change it.",
          "col": "a business process",
          "source": "predicted"
        },
        {
          "w": "efficiency",
          "zh": "效率",
          "ex": "The change improved efficiency.",
          "col": "improve efficiency",
          "source": "predicted"
        },
        {
          "w": "bottleneck",
          "zh": "瓶颈",
          "ex": "One slow step was the bottleneck.",
          "col": "remove a bottleneck",
          "source": "predicted"
        },
        {
          "w": "standardize",
          "zh": "使标准化",
          "ex": "They standardize how orders are checked.",
          "col": "standardize a process",
          "source": "predicted"
        },
        {
          "w": "outcome",
          "zh": "结果",
          "ex": "The outcome was fewer errors.",
          "col": "a better outcome",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060025",
      "seq": 80,
      "no": "060025",
      "title": "Summer Vacation 暑假「鸣谢学籽Jack」",
      "type": "none",
      "note": "—",
      "text": null,
      "vocab": [
        {
          "w": "vacation",
          "zh": "假期",
          "ex": "The long vacation starts in July.",
          "col": "summer vacation",
          "source": "predicted"
        },
        {
          "w": "leisure",
          "zh": "休闲",
          "ex": "Leisure time is not evenly shared.",
          "col": "leisure time",
          "source": "predicted"
        },
        {
          "w": "routine",
          "zh": "日常惯例",
          "ex": "Travel breaks the school routine.",
          "col": "break the routine",
          "source": "predicted"
        },
        {
          "w": "domestic",
          "zh": "国内的",
          "ex": "Most trips were domestic.",
          "col": "domestic tourism",
          "source": "predicted"
        },
        {
          "w": "schedule",
          "zh": "日程",
          "ex": "The school schedule sets the dates.",
          "col": "a school schedule",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060024",
      "seq": 81,
      "no": "060024",
      "title": "Triangulation Method 三角法则「鸣谢学籽Jack」",
      "type": "none",
      "note": "—",
      "text": null,
      "vocab": [
        {
          "w": "triangulation",
          "zh": "三角测量",
          "ex": "Triangulation finds a position from angles.",
          "col": "triangulation method",
          "source": "predicted"
        },
        {
          "w": "angle",
          "zh": "角度",
          "ex": "Measure the angle between two points.",
          "col": "measure an angle",
          "source": "predicted"
        },
        {
          "w": "survey",
          "zh": "测量",
          "ex": "The method is used in land survey.",
          "col": "land survey",
          "source": "predicted"
        },
        {
          "w": "accurate",
          "zh": "准确的",
          "ex": "Two readings make the result more accurate.",
          "col": "an accurate reading",
          "source": "predicted"
        },
        {
          "w": "reference",
          "zh": "参照",
          "ex": "Each calculation needs a reference point.",
          "col": "a reference point",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060023",
      "seq": 82,
      "no": "060023",
      "title": "Volcano Prediction 火山爆发预测「鸣谢学籽Jack」",
      "type": "none",
      "note": "—",
      "text": null,
      "vocab": [
        {
          "w": "erupt",
          "zh": "喷发",
          "ex": "The volcano may erupt with little warning.",
          "col": "erupt without warning",
          "source": "predicted"
        },
        {
          "w": "seismic",
          "zh": "地震的",
          "ex": "Seismic activity increased.",
          "col": "seismic activity",
          "source": "predicted"
        },
        {
          "w": "magma",
          "zh": "岩浆",
          "ex": "Magma was moving upward.",
          "col": "rising magma",
          "source": "predicted"
        },
        {
          "w": "predict",
          "zh": "预测",
          "ex": "It is hard to predict the day of an eruption.",
          "col": "predict an eruption",
          "source": "predicted"
        },
        {
          "w": "monitor",
          "zh": "监测",
          "ex": "Stations monitor the crater.",
          "col": "monitor a crater",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060020",
      "seq": 84,
      "no": "060020",
      "title": "Library Research 图书馆研究",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "catalogue",
          "zh": "目录",
          "ex": "Search the library catalogue first.",
          "col": "a library catalogue",
          "source": "predicted"
        },
        {
          "w": "source",
          "zh": "资料来源",
          "ex": "Use a primary source when you can.",
          "col": "a primary source",
          "source": "predicted"
        },
        {
          "w": "cite",
          "zh": "引用",
          "ex": "Cite every source you use.",
          "col": "cite a source",
          "source": "predicted"
        },
        {
          "w": "database",
          "zh": "数据库",
          "ex": "The article is in a journal database.",
          "col": "search a database",
          "source": "predicted"
        },
        {
          "w": "peer-reviewed",
          "zh": "经同行评审的",
          "ex": "Prefer a peer-reviewed journal.",
          "col": "peer-reviewed journal",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060015",
      "seq": 86,
      "no": "060015",
      "title": "Over-trained 过度培训",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "overtrain",
          "zh": "使过度训练",
          "ex": "Athletes overtrain when rest is cut.",
          "col": "overtrain an athlete",
          "source": "predicted"
        },
        {
          "w": "fatigue",
          "zh": "疲劳",
          "ex": "Chronic fatigue is a warning sign.",
          "col": "chronic fatigue",
          "source": "predicted"
        },
        {
          "w": "performance",
          "zh": "表现",
          "ex": "Performance drops before injury appears.",
          "col": "performance drops",
          "source": "predicted"
        },
        {
          "w": "intensity",
          "zh": "强度",
          "ex": "Reduce the intensity for a week.",
          "col": "training intensity",
          "source": "predicted"
        },
        {
          "w": "injury",
          "zh": "受伤",
          "ex": "The injury risk rises with fatigue.",
          "col": "risk of injury",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060010",
      "seq": 87,
      "no": "060010",
      "title": "Africa 共7段",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "continent",
          "zh": "大陆",
          "ex": "Africa is a large and varied continent.",
          "col": "the African continent",
          "source": "predicted"
        },
        {
          "w": "diverse",
          "zh": "多样的",
          "ex": "The regions are diverse.",
          "col": "diverse regions",
          "source": "predicted"
        },
        {
          "w": "development",
          "zh": "发展",
          "ex": "Economic development is uneven.",
          "col": "economic development",
          "source": "predicted"
        },
        {
          "w": "colonial",
          "zh": "殖民的",
          "ex": "Colonial history still shapes borders.",
          "col": "colonial history",
          "source": "predicted"
        },
        {
          "w": "urban",
          "zh": "城市的",
          "ex": "Urban growth is fastest in major cities.",
          "col": "urban growth",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060009",
      "seq": 88,
      "no": "060009",
      "title": "Negotiation 谈判",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "negotiation",
          "zh": "谈判",
          "ex": "The negotiation lasted two days.",
          "col": "enter a negotiation",
          "source": "predicted"
        },
        {
          "w": "compromise",
          "zh": "妥协",
          "ex": "Both sides accepted a compromise.",
          "col": "reach a compromise",
          "source": "predicted"
        },
        {
          "w": "bargain",
          "zh": "讨价还价",
          "ex": "They bargained over the price.",
          "col": "bargain over price",
          "source": "predicted"
        },
        {
          "w": "concession",
          "zh": "让步",
          "ex": "Each concession was written down.",
          "col": "make a concession",
          "source": "predicted"
        },
        {
          "w": "stake",
          "zh": "利害关系",
          "ex": "The stakes were high for both firms.",
          "col": "high stakes",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060006",
      "seq": 89,
      "no": "060006",
      "title": "Electric Car",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "battery",
          "zh": "电池",
          "ex": "Battery range decides how far the car can go.",
          "col": "battery range",
          "source": "predicted"
        },
        {
          "w": "charge",
          "zh": "充电",
          "ex": "Drivers charge the car overnight.",
          "col": "charge a vehicle",
          "source": "predicted"
        },
        {
          "w": "emission",
          "zh": "排放",
          "ex": "The car has zero tailpipe emissions.",
          "col": "zero emission",
          "source": "predicted"
        },
        {
          "w": "infrastructure",
          "zh": "基础设施",
          "ex": "Cities need charging infrastructure.",
          "col": "charging infrastructure",
          "source": "predicted"
        },
        {
          "w": "adopt",
          "zh": "采用",
          "ex": "More families adopt electric cars.",
          "col": "adopt electric cars",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060004",
      "seq": 91,
      "no": "060004",
      "title": "Pre-service Teacher 服役前教师",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "pre-service",
          "zh": "入职前的",
          "ex": "Pre-service training happens before the first job.",
          "col": "pre-service training",
          "source": "predicted"
        },
        {
          "w": "trainee",
          "zh": "受训者",
          "ex": "Each trainee teaches a practice class.",
          "col": "a trainee teacher",
          "source": "predicted"
        },
        {
          "w": "placement",
          "zh": "实习安置",
          "ex": "The placement is in a local school.",
          "col": "a school placement",
          "source": "predicted"
        },
        {
          "w": "mentor",
          "zh": "导师",
          "ex": "A mentor observes the lessons.",
          "col": "a classroom mentor",
          "source": "predicted"
        },
        {
          "w": "qualify",
          "zh": "取得资格",
          "ex": "She hopes to qualify as a teacher.",
          "col": "qualify as a teacher",
          "source": "predicted"
        }
      ]
    },
    {
      "id": "060003",
      "seq": 92,
      "no": "060003",
      "title": "Carbon Dioxide Ver. 2 二氧化碳，大公司和野生动物",
      "type": "none",
      "note": "暂无原文",
      "text": null,
      "vocab": [
        {
          "w": "emit",
          "zh": "排放",
          "ex": "Factories emit carbon dioxide.",
          "col": "emit carbon dioxide",
          "source": "predicted"
        },
        {
          "w": "corporation",
          "zh": "大公司",
          "ex": "A large corporation may face new rules.",
          "col": "a large corporation",
          "source": "predicted"
        },
        {
          "w": "wildlife",
          "zh": "野生动物",
          "ex": "Wildlife habitat shrinks as land is cleared.",
          "col": "wildlife habitat",
          "source": "predicted"
        },
        {
          "w": "absorb",
          "zh": "吸收",
          "ex": "Forests absorb some of the gas.",
          "col": "forests absorb carbon",
          "source": "predicted"
        },
        {
          "w": "regulate",
          "zh": "监管",
          "ex": "Governments regulate emissions.",
          "col": "regulate emissions",
          "source": "predicted"
        }
      ]
    }
  ]
};
