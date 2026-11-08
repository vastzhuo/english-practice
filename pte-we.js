// PTE Write Essay: 35 high-frequency prompts. English lines are exam-style paraphrases of the Chinese prompts.
const PTE_WE = {
  topics: [
    { id: 'society', name: '社会、法律与政府' },
    { id: 'work', name: '工作与生活' },
    { id: 'media', name: '媒体与信息' },
    { id: 'business', name: '商业与经济' },
    { id: 'environment', name: '环境与气候' },
    { id: 'tech', name: '科技与发明' },
    { id: 'education', name: '教育与成长' }
  ],
  types: [
    { id: 'agree', name: '是否同意', tip: '开头直接亮立场。两段同向论证。时间够再写一句“反方也有道理，但……”。' },
    { id: 'pros', name: '利弊分析', tip: '主体一段写好处，一段写坏处。结尾必须判断利大于弊或弊大于利，不要骑墙。' },
    { id: 'two', name: '两问', tip: '两个主体段各答一问。段首用 In my view 或 This is mainly because，不要混答。' },
    { id: 'choose', name: '讨论·选择', tip: '一段讲方案 A，一段讲方案 B。结尾选边，并写清在什么条件下。' },
    { id: 'open', name: '开放评价', tip: '先定义或分类，再分两个层面写，避免空谈。' },
    { id: 'example', name: '举例论述', tip: '一段写选这项发明的原因，一段写它对社会的正面或负面影响。' }
  ],
  questions: [
    { id: '077055', seq: 1, topic: 'society', type: 'two', personal: true, zh: '有人的倾向住在城市，有的倾向住在乡下郊区，你怎么认为，并用自己的经历讨论。', en: 'Some people prefer to live in cities, while others prefer the countryside or the suburbs. What is your opinion? Discuss this with reference to your own experience.' },
    { id: '077053', seq: 2, topic: 'society', type: 'agree', zh: '名人该不该放弃隐私权？', en: 'Should celebrities give up their right to privacy? To what extent do you agree or disagree?' },
    { id: '077045', seq: 3, topic: 'society', type: 'agree', zh: '你认为是否应该限制年轻人在 25 岁之前做某些事情，比如开车或吸烟？你对此有什么看法？', en: 'Should young people be restricted from doing certain things, such as driving or smoking, before the age of 25? What is your view?' },
    { id: '077020', seq: 4, topic: 'society', type: 'agree', zh: '花大价钱保护古建筑很重要。是否同意？', en: 'It is important to spend large sums of money protecting historic buildings. Do you agree?' },
    { id: '077018', seq: 5, topic: 'society', type: 'open', zh: '法律是否可以改变人的行为？', en: 'Can the law change people\'s behaviour?' },
    { id: '077003', seq: 6, topic: 'society', type: 'choose', zh: '政府该提供更好的公共交通还是为私家车修更多的路?', en: 'Should governments provide better public transport, or build more roads for private cars?' },
    { id: '077002', seq: 7, topic: 'society', type: 'agree', zh: '家长应该为孩子的行为负法律责任吗?', en: 'Should parents be held legally responsible for their children\'s behaviour?' },
    { id: '076023', seq: 8, topic: 'society', type: 'pros', zh: '最高工资限制对于高收入人群来说是好还是坏？', en: 'Is a maximum-wage limit good or bad for high-income earners?' },
    { id: '076015', seq: 9, topic: 'work', type: 'two', zh: '年轻人失业是一个严重的问题。有人建议缩短工作周而不是裁员。你认为有什么利弊？是否也适用于成年人？', en: 'Youth unemployment is a serious problem. Some people suggest a shorter working week instead of layoffs. What are the advantages and disadvantages? Does this also apply to adults?' },
    { id: '076014', seq: 10, topic: 'work', type: 'agree', personal: true, zh: '未来人们的工作时间会减少。你在多大程度上同意这个观点？请用自己的经验来支持你的观点。', en: 'In the future, people will spend less time at work. To what extent do you agree? Support your view with your own experience.' },
    { id: '076008', seq: 11, topic: 'work', type: 'pros', zh: '建筑设计对人们的工作和生活有正面或负面影响吗?', en: 'Does the design of buildings have positive or negative effects on people\'s work and daily life?' },
    { id: '076006', seq: 12, topic: 'work', type: 'agree', zh: '工作学习不可兼得。是否同意?', en: 'It is impossible to work and study at the same time. Do you agree?' },
    { id: '076002', seq: 13, topic: 'work', type: 'two', zh: '为什么工作和生活的平衡很重要；为什么这个平衡难以达到？', en: 'Why is the balance between work and life important, and why is this balance difficult to achieve?' },
    { id: '076001', seq: 14, topic: 'work', type: 'two', zh: '人们花太多时间在工作上，缺少个人生活这个问题有多广泛?会导致什么后果?', en: 'How widespread is the problem of people spending too much time at work and having little personal life? What consequences does it lead to?' },
    { id: '075009', seq: 15, topic: 'media', type: 'pros', zh: '由大众传媒带来的信息革命对个人和社会的正面及负面影响。', en: 'What are the positive and negative effects of the information revolution brought by the mass media on individuals and society?' },
    { id: '075008', seq: 16, topic: 'media', type: 'agree', zh: '大众传媒是否可以影响年轻一代的看法？', en: 'Can the mass media influence the opinions of the younger generation?' },
    { id: '075003', seq: 17, topic: 'media', type: 'open', zh: '如何看待电视的功能？', en: 'What is your view of the functions of television?' },
    { id: '074006', seq: 18, topic: 'business', type: 'agree', zh: '对于发展中国家来说，发展旅游业的好处和坏处一样多，你在哪种程度上同意？', en: 'For developing countries, the benefits of developing tourism are equal to the drawbacks. To what extent do you agree?' },
    { id: '074005', seq: 19, topic: 'business', type: 'choose', zh: '生活产品公司应该注重品牌效应还是折扣带来的短期折扣？', en: 'Should companies that sell everyday products focus on building a brand, or on short-term discounts?' },
    { id: '074004', seq: 20, topic: 'business', type: 'pros', zh: '将员工纳入决策制定中能带来，是有好处的还是有坏处的？', en: 'Is it beneficial or harmful to include employees in decision-making?' },
    { id: '074001', seq: 21, topic: 'business', type: 'agree', zh: '大型购物商场在取代小商店，这是个好现象吗?', en: 'Large shopping malls are replacing small shops. Is this a positive development?' },
    { id: '073006', seq: 22, topic: 'environment', type: 'open', zh: '谁应该为气候变化负责？', en: 'Who should be responsible for climate change?' },
    { id: '073005', seq: 23, topic: 'environment', type: 'two', zh: '你会研究气候变化的哪个方面？为什么？', en: 'Which aspect of climate change would you study, and why?' },
    { id: '073001', seq: 24, topic: 'environment', type: 'two', zh: '人类面临最严重的问题是什么?怎样解决?', en: 'What is the most serious problem facing humanity, and how can it be solved?' },
    { id: '072011', seq: 25, topic: 'tech', type: 'choose', zh: '高科技，例如人工智能，可以翻译外国语言。那么你觉得学习外语还是有必要的吗？另一种问法：是否应该强制学习外语？', en: 'High technology, such as artificial intelligence, can translate foreign languages. Do you think it is still necessary to learn foreign languages? A related question is whether foreign-language study should be compulsory.' },
    { id: '072008', seq: 26, topic: 'tech', type: 'example', zh: '本世纪发明集中爆发，论述你认为对社会有益或有害的一项近期发明', en: 'Inventions have appeared in a burst this century. Discuss one recent invention that you believe has been beneficial or harmful to society.' },
    { id: '072004', seq: 28, topic: 'tech', type: 'pros', zh: '先进的医疗技术延长了人们的寿命。你觉得这件事情是好事还是坏事?', en: 'Advanced medical technology has extended human life. Do you think this is a good thing or a bad thing?' },
    { id: '071053', seq: 29, topic: 'education', type: 'agree', zh: '生活在21世纪的孩子比过去的孩子更难。你在多大程度上同意这种说法?', en: 'Children living in the 21st century have a harder life than children in the past. To what extent do you agree?' },
    { id: '071041', seq: 30, topic: 'education', type: 'open', zh: '经验教学可以在高中和大学教育里获得成功吗?', en: 'Can teaching through experience succeed in high school and university education?' },
    { id: '071027', seq: 31, topic: 'education', type: 'choose', zh: '出国留学被过分吹捧了。其实有很多的学者都是在当地学习。你认为出国留学对于高等教育来说真的那么重要吗？', en: 'Studying abroad is overrated, and many scholars studied in their own country. Do you think studying abroad is really that important for higher education?' },
    { id: '071026', seq: 32, topic: 'education', type: 'agree', zh: '正式的笔试是评估学生学习成果的有效方式，你在哪种程度上同意？', en: 'Formal written examinations are an effective way to assess what students have learned. To what extent do you agree?' },
    { id: '071013', seq: 33, topic: 'education', type: 'two', zh: '一些大学迟交作业会扣分。你的观点和解决办法是什么?', en: 'Some universities deduct marks when assignments are submitted late. What is your view, and what solution would you suggest?' },
    { id: '071012', seq: 34, topic: 'education', type: 'pros', zh: '大学只用电子资料而不再更新纸质教材，讨论此现象优缺点。', en: 'Universities now use only electronic materials and no longer update printed textbooks. Discuss the advantages and disadvantages of this trend.' },
    { id: '071011', seq: 35, topic: 'education', type: 'agree', zh: '比起书本知识，生活经验是更有效的教学方式。你的观点是什么？', en: 'Life experience is a more effective way of teaching than knowledge from books. What is your view?' },
    { id: '071007', seq: 36, topic: 'education', type: 'agree', zh: '课程设置中应该包括让学生学习几个世纪前的戏剧吗？', en: 'Should the curriculum include the study of plays written several centuries ago?' }
  ],
  cards: {
    agree: [
      { note: '最直接的一套。开头一句改写题目，第二句亮立场。结尾只重复立场和两个理由，不加新论点。', intro: 'Whether [topic] is widely debated. I agree that [claim], for two main reasons.', conclusion: 'In conclusion, I agree that [claim], because [reason 1] and [reason 2].' },
      { note: '适合立场很明确的题。From my perspective 比 I think 更像考试书面语。', intro: 'It is often argued that [claim]. From my perspective, this view is largely correct.', conclusion: 'In short, the arguments above show why I support [claim].' },
      { note: '想先让一步再用。Although 后面是反方，主句才是你的立场。', intro: 'People hold different opinions about [topic]. Although the opposite view has some merit, I believe that [claim].', conclusion: 'Overall, I still agree with [claim], because the reasons for it are stronger than the objections.' }
    ],
    pros: [
      { note: '先预告两边，结尾必须给判断。把 outweigh 后面的一边换成你的结论。', intro: '[Topic] brings both benefits and drawbacks. This essay will look at each side before reaching a judgement.', conclusion: 'On balance, the benefits of [topic] outweigh the drawbacks, provided that [condition].' },
      { note: '如果你判断弊大于利，用这一套结尾。不要写成两边一样重要。', intro: 'There is no simple answer to whether [topic] is positive. Both the gains and the costs need to be examined.', conclusion: 'In conclusion, I find that the drawbacks of [topic] are more serious, especially [point].' },
      { note: '时间紧就各写一个好处和一个坏处。结尾用 only when 加上条件。', intro: '[Topic] is often praised, yet it also creates problems. I will discuss one advantage and one disadvantage.', conclusion: 'Therefore, [topic] is useful only when [condition]; otherwise the costs are too high.' }
    ],
    two: [
      { note: '开头就宣布两问分别是什么。结尾用两句，各收一问。', intro: 'This task raises two questions. I will first discuss [question 1], and then explain [question 2].', conclusion: 'In conclusion, [answer 1]. In addition, [answer 2].' },
      { note: '段首可以原样套 In my view 和 This is mainly because，避免两问混在一段里。', intro: 'Two issues arise here. My view on the first is that [answer 1]. The second point follows from that.', conclusion: 'To sum up, [answer 1] because [reason], and [answer 2] because [reason].' },
      { note: '两问其实指向同一个结论时用这一套，结尾把它们收成一句。', intro: 'I will answer the two parts in turn. The first concerns [question 1], and the second concerns [question 2].', conclusion: 'Overall, both answers point to the same idea: [link].' }
    ],
    choose: [
      { note: '先并列两种做法，结尾选一个，并用 when 写条件。', intro: 'Some people support [option A], while others prefer [option B]. I will consider both and then give my choice.', conclusion: 'Although [option A] has value, I would choose [option B] when [condition].' },
      { note: '把没选的那个写成 supplement，表示你比较过，不是没看见另一边。', intro: '[Option A] and [option B] are both possible responses to [problem]. This essay compares them.', conclusion: 'In my view, [option B] is the better main option, while [option A] should remain a supplement.' },
      { note: '适合政府和个体、公共交通和修路这类对照。结尾的 in some cases 用来限定范围。', intro: 'A choice has to be made between [option A] and [option B]. Both deserve attention before a decision is made.', conclusion: 'I support [option A] as the main approach, but [option B] is useful in some cases.' }
    ],
    open: [
      { note: '开放题先下定义，再点出你要写的两个层面，避免一开始就空评。', intro: 'To answer this, it helps to define [term] first. I will then look at two aspects: [aspect 1] and [aspect 2].', conclusion: 'In conclusion, [term] matters most in terms of [aspect], because [reason].' },
      { note: '按“谁”或“哪方面”切开。结尾说出哪个层面更重要。', intro: 'This issue can be viewed from two angles: [angle 1] and [angle 2]. I will discuss each in turn.', conclusion: 'Taken together, the more important factor is [aspect].' },
      { note: '先问谁受影响。适合“谁该负责”“电视有什么功能”。', intro: 'Before judging [topic], we should ask who is affected and in what way. My answer focuses on [group].', conclusion: 'Therefore, [topic] should be judged by [standard], not by a single opinion.' }
    ],
    example: [
      { note: '第一句点名发明，第二句说为什么选它。结尾只评价这一个例子。', intro: 'Among recent inventions, I will focus on [invention]. I chose it because [reason].', conclusion: 'In conclusion, [invention] has been [beneficial or harmful] to society because [impact].' },
      { note: '适合你很熟的一项发明。社会影响只写一条，写深，不要罗列。', intro: 'One recent development that has changed daily life is [invention]. This essay explains that choice and its social effect.', conclusion: 'Overall, the main effect of [invention] is [impact], so I consider it [beneficial or harmful].' },
      { note: 'If I had to discuss one 用来自然开头。不要在结尾再换一个发明。', intro: 'If I had to discuss one invention of this century, I would choose [invention]. The following paragraphs explain why, and what it has done to society.', conclusion: 'To conclude, [invention] shows that new technology can [impact], which is why I see it as [beneficial or harmful].' }
    ]
  },
  experiences: [
    { id: 'city', forQuestions: ['077055'], title: '城市和乡下', note: 'Q1 用这一段。把城市名换成你的城市。周末回较小的地方看家人即可，不必编很长的故事。', en: 'When I moved to the city for study, daily life became faster. The commute was long, but libraries, jobs and public transport were close. On weekends I return to my family\'s smaller town, where housing is cheaper and the streets are quieter, yet medical care and evening classes are limited. That contrast is why I think the better place depends on a person\'s stage of life.' },
    { id: 'hours', forQuestions: ['076014'], title: '未来工作时间', note: 'Q10 用这一段。可以换成你、同学或家人的工时。重点是：名义上的工时变少，不代表个人时间变多。', en: 'In my current routine, study and a part-time job already fill most weekdays, and messages continue after I leave the workplace. A colleague who started working from home gained the hours once spent commuting, but those hours were often taken by extra tasks. From this experience, shorter official hours do not automatically create more personal time unless the workload is reduced as well.' }
  ]
};
