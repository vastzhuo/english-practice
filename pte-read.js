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
      blurb: '没有原文。词汇按标题预测，考试时以真题为准。结构先按标题猜，不要花太多时间编正文。',
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
  articles: []
};
