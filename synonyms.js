// Synonym comparisons for high-frequency words. Unknown cards show 即将推出.
(function (root) {
  const GROUPS = [
    { line: '一眼扫过、盯住不放、安静凝视、偷偷看一眼，差别在眼睛停多久、心情是什么。', items: [
      { w: 'glance', zh: '瞥一眼', scene: '眼睛在东西上扫一下就离开，像路过橱窗只看一眼价签。', tone: '中性，口语和书面都能用', col: 'glance at, glance through, at a glance', en: 'She glanced at the clock and hurried out.', cn: '她瞥了一眼钟，急忙走了出去。' },
      { w: 'stare', zh: '盯着看', scene: '眼睛钉在一个点上，很久不眨也不挪开，像看见意外的东西呆住了。', tone: '中性，但盯着人看常常显得不礼貌', col: 'stare at, stare into space', en: 'He stared at the broken window and could not look away.', cn: '他盯着破碎的窗户，眼睛挪不开。' },
      { w: 'gaze', zh: '凝视', scene: '安静地看着，看得专心，常常带着喜欢、想念或出神，像看远处的海。', tone: '中性偏书面，带一点感情', col: 'gaze at, gaze into, gaze out of', en: 'She gazed at the old photo and smiled.', cn: '她凝视着那张旧照片，笑了。' },
      { w: 'peek', zh: '偷看一眼', scene: '从门缝或窗帘后面很快看一眼，身体还躲着，不想被发现。', tone: '偏口语，中性', col: 'peek at, peek through, peek into', en: 'The child peeked through the curtain.', cn: '孩子从窗帘缝里偷看了一眼。' }
    ]},
    { line: '看见是眼睛收到了，观看是跟着过程看，留意是突然发现细节，观察是有目的地看。', items: [
      { w: 'see', zh: '看见', scene: '影像进了眼睛，你不一定是故意去看的，像一辆车从面前开过。', tone: '中性，最普通', col: 'see something, see somebody do', en: 'I saw a dog run across the road.', cn: '我看见一只狗跑过马路。' },
      { w: 'watch', zh: '观看', scene: '你特意看着一件正在发生的事，像坐在场边看整场比赛。', tone: '中性', col: 'watch a film, watch somebody, watch out', en: 'We watched the game until the final minute.', cn: '我们一直看到比赛的最后一分钟。' },
      { w: 'notice', zh: '留意到', scene: '眼前一亮，发现一个刚才没注意到的小变化，像发现对方换了眼镜。', tone: '中性', col: 'notice that, notice a change', en: 'I noticed a small crack in the wall.', cn: '我留意到墙上有一条小裂缝。' },
      { w: 'observe', zh: '观察', scene: '站在一旁仔细看，还想弄清规律，像研究人员看人们怎么过马路。', tone: '偏正式', col: 'observe behaviour, observe that', en: 'The teacher observed how the children solved the puzzle.', cn: '老师观察孩子们是怎么解开这个谜题的。' }
    ]},
    { line: '听见是声音进耳朵，倾听是把注意力放到声音上。', items: [
      { w: 'hear', zh: '听见', scene: '声音自己进了耳朵，你可能正在做别的事，像隔壁的音乐响着。', tone: '中性', col: 'hear a noise, hear about, hear from', en: 'I heard music from the next room.', cn: '我听见隔壁房间传来音乐。' },
      { w: 'listen', zh: '倾听', scene: '你停下来，把耳朵和注意力都交给这段声音，想听清楚。', tone: '中性', col: 'listen to, listen for, listen carefully', en: 'Please listen to the instructions before you start.', cn: '开始之前请仔细听说明。' }
    ]},
    { line: '说话是把话说出来，谈话是你来我往，讨论是围着一个题目把道理说清楚。', items: [
      { w: 'speak', zh: '说话；发言', scene: '一个人把语言说出来，可以是开口说某种语言，也可以是对着一群人发言。', tone: '中性，比 talk 稍正式', col: 'speak English, speak to, speak at a meeting', en: 'She spoke to the class for ten minutes.', cn: '她对全班讲了十分钟。' },
      { w: 'talk', zh: '交谈', scene: '两个人面对面你一句我一句，像茶歇时聊天。', tone: '偏口语', col: 'talk to, talk about, have a talk', en: 'We talked about the weekend for a while.', cn: '我们聊了一会儿周末的事。' },
      { w: 'discuss', zh: '讨论', scene: '大家围着一个具体问题交换看法，目的是把它想明白。', tone: '中性，学习工作里很常见', col: 'discuss a problem, discuss whether', en: 'The group discussed whether the plan was realistic.', cn: '小组讨论了这个计划是否现实。' },
      { w: 'discussion', zh: '讨论', scene: '大家已经围着一个题目把看法交换过的那场谈话。', tone: '中性', col: 'a discussion about, under discussion', en: 'The plan is under discussion.', cn: '这个计划正在讨论。' }
    ]},
    { line: '大、很大、大到夸张、大到望不到边，程度和画面不一样。', items: [
      { w: 'big', zh: '大的', scene: '普通的大，一个比平常体积更大的箱子放在门口。', tone: '偏口语', col: 'a big house, a big problem', en: 'They live in a big house near the park.', cn: '他们住在公园附近的一所大房子里。' },
      { w: 'large', zh: '大的', scene: '同样是体积或数量大，但说法更平、更适合书面，像表格里写“大量”。', tone: '中性，比 big 稍正式', col: 'a large number, a large area', en: 'A large number of students joined the club.', cn: '大量学生加入了这个社团。' },
      { w: 'enormous', zh: '巨大的', scene: '大到让人吃一惊，像一头几乎塞满整个大厅的雕塑。', tone: '中性，语气强', col: 'an enormous amount, enormous pressure', en: 'The project put enormous pressure on the team.', cn: '这个项目给团队带来了巨大压力。' },
      { w: 'vast', zh: '辽阔的；大量的', scene: '大得铺开、看不到边，像一片沙漠或海量的数据。', tone: '偏书面', col: 'a vast area, vast amounts of', en: 'The park covers a vast area of wetland.', cn: '这座公园覆盖着大片湿地。' }
    ]},
    { line: '一份差事、一辈子的事业、一份职业身份，时间长短和正式程度不同。', items: [
      { w: 'job', zh: '工作；职位', scene: '你每天去上班、拿报酬的那一份具体差事。', tone: '偏口语', col: 'get a job, lose a job, a part-time job', en: 'She got a part-time job at a cafe.', cn: '她在一家咖啡馆找到了一份兼职。' },
      { w: 'career', zh: '事业；职业生涯', scene: '很多年连成的一条路，不只是这一份工，而是你一路做下来的事业。', tone: '中性', col: 'a career in, career development', en: 'He hopes to build a career in medicine.', cn: '他希望在医学领域发展事业。' },
      { w: 'occupation', zh: '职业', scene: '表格上要你填写的那一栏：你以什么为业。', tone: '偏正式', col: 'state your occupation, a dangerous occupation', en: 'Please state your occupation on the form.', cn: '请在表格上填写你的职业。' }
    ]},
    { line: '出门走一趟、短途往返、长途航海、有组织的短途游览，路程和目的不同。', items: [
      { w: 'journey', zh: '旅程', scene: '从出发到到达的一整段路程，重点在路上的过程。', tone: '中性，稍正式', col: 'a long journey, go on a journey', en: 'The journey across the mountains took two days.', cn: '翻过那些山的旅程花了两天。' },
      { w: 'trip', zh: '短途出行', scene: '去一个地方再回来，常常时间不长，像周末出城。', tone: '偏口语', col: 'a business trip, a day trip', en: 'We took a day trip to the coast.', cn: '我们去海边做了一日游。' },
      { w: 'voyage', zh: '航行', scene: '船或飞船走很长的水路或航程，甲板上是海或太空。', tone: '偏正式或文学', col: 'a sea voyage, the voyage home', en: 'The voyage from the port lasted three weeks.', cn: '从港口出发的这次航行持续了三周。' },
      { w: 'excursion', zh: '远足；短途游览', scene: '一群人有安排地出去玩几个小时，傍晚就回来。', tone: '偏正式', col: 'a day excursion, an excursion to', en: 'The school organised an excursion to the museum.', cn: '学校组织了一次去博物馆的短途游览。' }
    ]},
    { line: '不接受、退回不要、说那件事不是真的，拒绝的对象不一样。', items: [
      { w: 'refuse', zh: '拒绝', scene: '有人把东西或请求递过来，你摇头不接。', tone: '中性', col: 'refuse to do, refuse an offer', en: 'He refused to answer the question.', cn: '他拒绝回答这个问题。' },
      { w: 'reject', zh: '拒绝；驳回', scene: '一份申请或一个想法被正式退回来，上面像盖了“不通过”。', tone: '偏正式，语气更硬', col: 'reject an application, reject an idea', en: 'The committee rejected the proposal.', cn: '委员会驳回了这项提议。' },
      { w: 'deny', zh: '否认', scene: '别人说你做了某事，你说“不是这样”，把这件事否定掉。', tone: '中性偏正式', col: 'deny that, deny doing, deny a request', en: 'She denied taking the money.', cn: '她否认拿了那笔钱。' },
      { w: 'turn down', zh: '拒绝', scene: '一份邀请或工作递到你面前，你把它挡回去。', tone: '偏口语', col: 'turn down an offer, turn somebody down', en: 'He turned down the job offer.', cn: '他拒绝了那份工作邀请。' }
    ]},
    { line: '提出一个想法、根据了解推荐、正式提出方案，力度和场合不同。', items: [
      { w: 'suggest', zh: '建议；表明', scene: '你把一个主意轻轻放在桌上，供别人考虑，也可以是数据“暗示”某个结论。', tone: '中性', col: 'suggest that, suggest doing', en: 'I suggest that we start with the easiest task.', cn: '我建议我们先做最容易的任务。' },
      { w: 'recommend', zh: '推荐；建议', scene: '你了解过之后，告诉别人这个选择更好，像医生建议一种做法。', tone: '中性偏正式', col: 'recommend that, recommend somebody for', en: 'The report recommends more public transport.', cn: '报告建议增加公共交通。' },
      { w: 'propose', zh: '提议', scene: '在会议或正式场合把一个方案端出来，等大家决定接不接受。', tone: '偏正式', col: 'propose a plan, propose that', en: 'She proposed a new schedule for the team.', cn: '她向团队提出了一套新的时间安排。' }
    ]},
    { line: '要紧、意义明显、缺了不行、决定成败，重要的理由不一样。', items: [
      { w: 'important', zh: '重要的', scene: '这件事值得放在前面处理，忽略它会有麻烦。', tone: '中性，最普通', col: 'important to, important for', en: 'Sleep is important for memory.', cn: '睡眠对记忆很重要。' },
      { w: 'significant', zh: '重大的；显著的', scene: '变化或影响大到能被看出来，不只是一点点。', tone: '偏正式，学术里很常见', col: 'a significant increase, significant difference', en: 'There was a significant increase in costs.', cn: '成本有显著上升。' },
      { w: 'essential', zh: '必不可少的', scene: '拿掉它，事情就做不成，像发动机里缺一颗螺丝。', tone: '中性偏正式', col: 'essential for, essential to', en: 'Water is essential for life.', cn: '水是生命必不可少的。' },
      { w: 'crucial', zh: '至关重要的', scene: '走到岔路口，这一步选错，后面的结果会完全不同。', tone: '语气强，偏正式', col: 'crucial to, a crucial decision', en: 'The next week will be crucial to the project.', cn: '接下来这一周对项目至关重要。' }
    ]},
    { line: '数量变多、范围摊大、把势头往上推，变大的方式不一样。', items: [
      { w: 'increase', zh: '增加', scene: '数字、价格或数量往上走，像温度计的刻度升高。', tone: '中性，最通用', col: 'increase by, an increase in', en: 'Prices increased by five per cent.', cn: '价格上涨了百分之五。' },
      { w: 'expand', zh: '扩张；扩展', scene: '原来的范围被撑大，像城市向外长出新的街区，或公司开了新部门。', tone: '中性偏正式', col: 'expand into, expand the business', en: 'The company expanded into two new cities.', cn: '公司把业务扩展到了两座新城市。' },
      { w: 'boost', zh: '提升；推动', scene: '在后面推一把，让信心、销量或能量明显高一截。', tone: '偏口语到中性，新闻里常见', col: 'boost sales, boost confidence', en: 'The campaign boosted sales in May.', cn: '这场活动提升了五月的销量。' },
      { w: 'extend', zh: '延伸；扩大', scene: '把一条路、一个期限或一个范围再拉长一截。', tone: '中性', col: 'extend the, extend to', en: 'They extended the deadline by a week.', cn: '他们把截止日期延长了一周。' }
    ]},
    { line: '变少、把数量压低、突然掉下去，下降的速度和是否人为不同。', items: [
      { w: 'decrease', zh: '减少', scene: '数量自己慢慢变少，像水箱里的水位下降。', tone: '中性偏正式', col: 'decrease by, a decrease in', en: 'Crime decreased in the city last year.', cn: '这座城市去年的犯罪减少了。' },
      { w: 'reduce', zh: '减少；降低', scene: '人动手把数量、风险或成本往下压。', tone: '中性', col: 'reduce costs, reduce the risk', en: 'The new process reduced waste.', cn: '新流程减少了浪费。' },
      { w: 'drop', zh: '下降；掉落', scene: '曲线突然往下掉，像温度一夜之间掉了好几度。这个词也可以指东西从手里掉下去。', tone: '偏口语', col: 'drop sharply, a drop in', en: 'Temperatures dropped sharply overnight.', cn: '气温一夜之间大幅下降。' }
    ]},
    { line: '高兴的程度从点头满意，到眼睛发亮。', items: [
      { w: 'happy', zh: '高兴的', scene: '心里舒展，脸上带着笑，是最普通的开心。', tone: '中性，口语书面都能用', col: 'happy with, happy to, a happy childhood', en: 'The children were happy with the result.', cn: '孩子们对结果很高兴。' },
      { w: 'glad', zh: '高兴的', scene: '听到一件具体的好事，你松了一口气，说“那太好了”。', tone: '偏口语，常用来回应消息', col: 'glad to, glad that', en: 'I am glad that you arrived safely.', cn: '你安全到达，我很高兴。' },
      { w: 'pleased', zh: '满意而高兴', scene: '事情达到了你的期望，你点头，觉得这样挺好。', tone: '中性，比 happy 稍正式', col: 'pleased with, pleased to', en: 'The manager was pleased with the report.', cn: '经理对这份报告感到满意。' },
      { w: 'delighted', zh: '非常高兴', scene: '高兴得眼睛亮起来，像收到一份出乎意料的好礼物。', tone: '褒义，语气较强', col: 'delighted with, delighted to', en: 'We were delighted with the news.', cn: '我们听到这个消息非常高兴。' }
    ]},
    { line: '有点烦、生气、很恼火、怒气冲到顶点，火气越来越大。', items: [
      { w: 'annoyed', zh: '恼火的', scene: '一件小事反复刺你，你皱眉，但还没爆发。', tone: '中性，程度较轻', col: 'annoyed with, annoyed by', en: 'She was annoyed by the constant noise.', cn: '持续的噪音让她很恼火。' },
      { w: 'irritated', zh: '被激怒的', scene: '皮肤被布料磨红，或耐心被磨掉，刺激已经让你不舒服。', tone: '中性', col: 'irritated by, easily irritated', en: 'He gets irritated by long delays.', cn: '长时间的耽搁会让他不耐烦。' },
      { w: 'angry', zh: '生气的', scene: '火已经上来了，声音变硬，可能想争论。', tone: '中性', col: 'angry with, angry about', en: 'They were angry about the unfair decision.', cn: '他们对这个不公平的决定感到生气。' },
      { w: 'furious', zh: '狂怒的', scene: '怒气大到脸发红、几乎喊出来，房间里的空气都紧了。', tone: '语气很强', col: 'furious with, furious about', en: 'She was furious about the broken promise.', cn: '承诺被打破，她非常愤怒。' }
    ]},
    { line: '好看的对象和语气不同：景色和东西、小而可爱、成年男性、让人想靠近。', items: [
      { w: 'beautiful', zh: '美丽的', scene: '好看得到让人停一下，常用于风景、艺术、女性或美好的事物。', tone: '褒义', col: 'a beautiful view, beautiful music', en: 'The lake looks beautiful at sunrise.', cn: '日出时湖面看起来很美。' },
      { w: 'pretty', zh: '漂亮的', scene: '好看，但更小、更轻，像一条好看的裙子或一张可爱的脸。', tone: '偏口语，褒义', col: 'a pretty dress, look pretty', en: 'She wore a pretty blue dress.', cn: '她穿了一条漂亮的蓝裙子。' },
      { w: 'handsome', zh: '英俊的', scene: '多用来形容成年男性五官端正、看着顺眼；也可以说一笔可观的钱。', tone: '褒义', col: 'a handsome man, a handsome profit', en: 'He is a handsome actor.', cn: '他是一位英俊的演员。' },
      { w: 'attractive', zh: '有吸引力的', scene: '不一定是传统的美，而是让人想靠近、想看第二眼。', tone: '中性偏褒义', col: 'find somebody attractive, an attractive offer', en: 'The offer was attractive to young graduates.', cn: '这个机会对年轻毕业生很有吸引力。' }
    ]},
    { line: '动身开始，和把已经在进行的事停住、彻底结束。', items: [
      { w: 'start', zh: '开始', scene: '从静止变成动作，引擎转起来，或一项任务的第一下。', tone: '中性，最普通', col: 'start to, start doing, start with', en: 'We started the meeting at nine.', cn: '我们九点开始开会。' },
      { w: 'commence', zh: '开始', scene: '同样是开始，但像典礼或正式文件里宣布“现开始”。', tone: '很正式', col: 'commence work, commence proceedings', en: 'The ceremony will commence at noon.', cn: '仪式将于中午开始。' },
      { w: 'finish', zh: '完成；结束', scene: '做到最后一步，把东西收好，任务画上句号。', tone: '中性', col: 'finish doing, finish with', en: 'She finished the report before lunch.', cn: '她在午饭前写完了报告。' },
      { w: 'cease', zh: '停止；终止', scene: '一种活动停下来，常常是正式地说它不再继续，像停火。', tone: '正式', col: 'cease to, cease fire, cease trading', en: 'The company ceased trading in March.', cn: '该公司于三月停止营业。' }
    ]},
    { line: '日常买东西，和更正式的购买。', items: [
      { w: 'buy', zh: '买', scene: '你付钱，把东西从店里拿回家，是最日常的画面。', tone: '偏口语', col: 'buy something for, buy from', en: 'I bought a new coat yesterday.', cn: '我昨天买了一件新外套。' },
      { w: 'purchase', zh: '购买', scene: '同样是付钱得到，但像收据、合同或新闻里写的那一笔购买。', tone: '偏正式', col: 'purchase order, make a purchase', en: 'The school purchased new computers.', cn: '学校购买了新电脑。' }
    ]},
    { line: '弄坏东西、伤害健康、弄伤身体、留下伤口，伤的是什么不一样。', items: [
      { w: 'damage', zh: '损坏', scene: '一件东西被弄坏，还能看见裂痕或凹痕，像车门被撞瘪。', tone: '中性', col: 'damage to, cause damage', en: 'The storm damaged the roof.', cn: '暴风雨损坏了屋顶。' },
      { w: 'harm', zh: '伤害', scene: '对人或环境造成不好的影响，不一定看见伤口，像污染伤害健康。', tone: '中性偏正式', col: 'do harm, harm to', en: 'Smoking can harm your health.', cn: '吸烟会伤害健康。' },
      { w: 'injure', zh: '使受伤', scene: '人在事故里受伤，胳膊或腿不能正常活动。', tone: '中性', col: 'be injured in, seriously injured', en: 'Two players were injured in the match.', cn: '两名球员在比赛中受伤。' },
      { w: 'wound', zh: '使受伤；伤口', scene: '皮肤被切开或刺破，能看见伤口，常和武器或尖锐物有关。', tone: '中性', col: 'a wound, wound somebody', en: 'The glass wounded his hand.', cn: '玻璃划伤了他的手。' }
    ]},
    { line: '正常走路、悠闲散步、没有目的地闲逛。', items: [
      { w: 'walk', zh: '走路', scene: '用脚一步一步往前走，去一个地方或只是移动。', tone: '中性', col: 'walk to, go for a walk', en: 'I walk to the station every morning.', cn: '我每天早上走路去车站。' },
      { w: 'stroll', zh: '散步', scene: '走得很慢，肩膀放松，像晚饭后在河边闲走。', tone: '中性，略带轻松', col: 'stroll along, go for a stroll', en: 'They strolled along the river.', cn: '他们沿着河边散步。' },
      { w: 'wander', zh: '闲逛；迷路般地走', scene: '没有固定路线，走到哪算哪，也可能是走神走丢了。', tone: '中性', col: 'wander around, wander off', en: 'We wandered around the old town.', cn: '我们在老城里随便逛了逛。' }
    ]},
    { line: '跑起来、慢慢慢跑、短距离全力冲。', items: [
      { w: 'run', zh: '跑', scene: '双脚离地更快地前进，可以是赶车，也可以是锻炼。', tone: '中性', col: 'run to, run a race, go for a run', en: 'She ran to catch the bus.', cn: '她跑着去赶公交车。' },
      { w: 'jog', zh: '慢跑', scene: '速度不快、能边跑边说话的那种锻炼，常在公园的小路上。', tone: '中性', col: 'go for a jog, jog in the park', en: 'He jogs in the park before work.', cn: '他上班前在公园慢跑。' },
      { w: 'sprint', zh: '冲刺', scene: '很短的距离里把速度拉到最快，像跑道最后几十米。', tone: '中性', col: 'a sprint, sprint to the finish', en: 'She sprinted to the finish line.', cn: '她向终点冲刺。' }
    ]},
    { line: '找到、第一次发现、用方法查明。', items: [
      { w: 'find', zh: '找到', scene: '你在找的东西出现了，像在包里摸到钥匙。', tone: '中性，最普通', col: 'find something, find that, find out', en: 'I found my keys under the sofa.', cn: '我在沙发底下找到了钥匙。' },
      { w: 'discover', zh: '发现', scene: '原来不知道的事物第一次被看见，像发现一条隐藏的小路。', tone: '中性', col: 'discover that, a new discovery', en: 'Scientists discovered a new species.', cn: '科学家发现了一个新物种。' },
      { w: 'detect', zh: '查明；察觉', scene: '用仪器或细心察觉到不容易看见的东西，像检测到烟雾。', tone: '偏正式或技术', col: 'detect a change, detect a signal', en: 'The test can detect the virus early.', cn: '这项检测能及早查出病毒。' }
    ]},
    { line: '做出来、生产出来、工厂成批制造、从无到有创造。', items: [
      { w: 'make', zh: '制作；使得', scene: '用手或机器把一个东西做出来，也常表示“使得”。', tone: '中性，最普通', col: 'make a cake, make somebody do', en: 'She made a cake for the party.', cn: '她为聚会做了一个蛋糕。' },
      { w: 'produce', zh: '生产；产生', scene: '经过过程产出结果，可以是工厂的货物，也可以是研究产生的数据。', tone: '中性偏正式', col: 'produce goods, produce evidence', en: 'The factory produces electric bikes.', cn: '这家工厂生产电动自行车。' },
      { w: 'manufacture', zh: '制造', scene: '在工厂里用机器成批做出来，流水线一直在转。', tone: '偏正式', col: 'manufacture cars, manufacturing industry', en: 'The firm manufactures car parts.', cn: '这家公司制造汽车零件。' },
      { w: 'create', zh: '创造', scene: '原来没有的东西被造出来，常带设计和想象，像创造一个角色。', tone: '中性偏褒义', col: 'create jobs, create a design', en: 'The programme created hundreds of jobs.', cn: '这个项目创造了数百个工作岗位。' }
    ]},
    { line: '盖起来、按设计建造、把零件装成整体。', items: [
      { w: 'build', zh: '建造；建立', scene: '一块一块搭起来，可以是房子，也可以是一支团队。', tone: '中性', col: 'build a house, build up', en: 'They built a small library.', cn: '他们建了一座小图书馆。' },
      { w: 'construct', zh: '建造', scene: '按图纸把结构搭起来，画面更像工地和工程。', tone: '偏正式', col: 'construct a bridge, under construction', en: 'The city constructed a new bridge.', cn: '这座城市建造了一座新桥。' },
      { w: 'assemble', zh: '组装；集合', scene: '把散开的零件按顺序装成一件完整的东西；也可以指人集合到一处。', tone: '中性偏正式', col: 'assemble a machine, assemble the parts', en: 'The desk is easy to assemble.', cn: '这张桌子很容易组装。' }
    ]},
    { line: '旧了、古老、上了年纪，旧的是东西还是人，语气不同。', items: [
      { w: 'old', zh: '老的；旧的', scene: '用了很久，或年龄大，是最普通的说法。', tone: '中性，说人时有时不够客气', col: 'an old building, get old', en: 'This is an old photo of the street.', cn: '这是这条街的一张旧照片。' },
      { w: 'ancient', zh: '古代的', scene: '古老到属于很久以前的文明，像石柱和古城墙。', tone: '中性', col: 'ancient history, an ancient city', en: 'They visited an ancient temple.', cn: '他们参观了一座古庙。' },
      { w: 'elderly', zh: '年长的', scene: '上了年纪的人，说的时候比直接说 old 更客气。', tone: '客气，偏正式', col: 'elderly people, an elderly man', en: 'The seats are reserved for elderly passengers.', cn: '这些座位是留给年长乘客的。' }
    ]},
    { line: '新出现、属于现在这个时代、最近发生、当代的。', items: [
      { w: 'new', zh: '新的', scene: '刚出现或刚买，还没有用旧。', tone: '中性', col: 'a new idea, brand new', en: 'This is a new approach to the problem.', cn: '这是处理这个问题的一种新方法。' },
      { w: 'recent', zh: '最近的', scene: '时间离现在很近，像上周才发生的事。', tone: '中性偏正式', col: 'in recent years, a recent study', en: 'A recent study looked at sleep and memory.', cn: '最近的一项研究考察了睡眠和记忆。' },
      { w: 'modern', zh: '现代的', scene: '属于现在的技术和生活方式，和过去的样式相对。', tone: '中性', col: 'modern technology, modern life', en: 'Modern trains are much quieter.', cn: '现代的火车安静多了。' },
      { w: 'contemporary', zh: '当代的', scene: '和我们这个时代同时，常用来谈当代艺术或当代社会。', tone: '偏正式', col: 'contemporary art, contemporary society', en: 'The gallery shows contemporary art.', cn: '这家画廊展出当代艺术。' }
    ]},
    { line: '有钱、财富多、事业兴旺，富的画面不一样。', items: [
      { w: 'rich', zh: '富有的', scene: '钱和财产多，是最直接的说法。', tone: '中性', col: 'rich in, a rich country', en: 'The region is rich in minerals.', cn: '这个地区矿产丰富。' },
      { w: 'wealthy', zh: '富有的', scene: '家里财产雄厚，说法比 rich 稍客气、稍正式。', tone: '中性偏正式', col: 'a wealthy family, independently wealthy', en: 'She came from a wealthy family.', cn: '她出身于一个富有的家庭。' },
      { w: 'prosperous', zh: '繁荣的', scene: '一座城市或一段时期生意好、日子兴旺，店铺亮着灯。', tone: '褒义，偏正式', col: 'a prosperous city, prosperous years', en: 'The port became prosperous after the new route opened.', cn: '新航线开通后，这座港口变得繁荣起来。' }
    ]},
    { line: '钱少，和穷到缺乏基本所需。', items: [
      { w: 'poor', zh: '贫穷的；差的', scene: '钱不多，生活紧；这个词也可以说质量差。', tone: '中性，说人时要小心', col: 'poor people, a poor area, poor quality', en: 'The book gives a poor explanation of the data.', cn: '这本书对数据的解释很差。' },
      { w: 'impoverished', zh: '贫困的', scene: '一个地区或一群人缺乏基本资源，画面是公共设施不足。', tone: '正式，语气严肃', col: 'an impoverished area, impoverished communities', en: 'The charity supports impoverished communities.', cn: '这家慈善机构帮助贫困社区。' }
    ]},
    { line: '动作快、时间短、反应及时。', items: [
      { w: 'fast', zh: '快的', scene: '速度高，人或车很快通过一段路。', tone: '偏口语', col: 'a fast train, fast food', en: 'The fast train takes only one hour.', cn: '这趟快车只需要一个小时。' },
      { w: 'quick', zh: '快的；迅速的', scene: '一件小事花的时间短，像很快回一封信。', tone: '偏口语', col: 'a quick look, quick to', en: 'She gave me a quick answer.', cn: '她很快给了我答复。' },
      { w: 'prompt', zh: '及时的；迅速的', scene: '该回应的时候马上回应，没有让人干等。', tone: '偏正式，带准时的意思', col: 'a prompt reply, prompt action', en: 'Thank you for your prompt reply.', cn: '谢谢你的及时回复。' }
    ]},
    { line: '速度慢、一点一点发生、反应迟钝。', items: [
      { w: 'slow', zh: '慢的', scene: '移动或进展比预期费时间，像高峰期的车流。', tone: '中性', col: 'slow down, a slow process', en: 'Progress was slow in the first month.', cn: '第一个月进展很慢。' },
      { w: 'gradual', zh: '逐渐的', scene: '变化一点一点发生，几乎看不出某一天突然变了。', tone: '偏正式', col: 'a gradual change, gradual improvement', en: 'There was a gradual improvement in her health.', cn: '她的健康状况在逐渐好转。' },
      { w: 'sluggish', zh: '迟缓的', scene: '人或经济像没睡醒，反应慢、提不起速度。', tone: '偏贬义', col: 'a sluggish economy, feel sluggish', en: 'Demand remained sluggish all winter.', cn: '整个冬天需求一直疲软。' }
    ]},
    { line: '难做、费力、不好对付。', items: [
      { w: 'difficult', zh: '困难的', scene: '需要更多努力或技巧才能做成，是最标准的“难”。', tone: '中性', col: 'difficult to, find it difficult', en: 'The text is difficult to understand.', cn: '这篇文章很难懂。' },
      { w: 'hard', zh: '困难的；硬的', scene: '做起来费劲。这个词也可以表示物体硬。这里比的是“难”。', tone: '偏口语', col: 'hard work, hard to', en: 'It is hard to concentrate in a noisy room.', cn: '在吵闹的房间里很难集中注意力。' },
      { w: 'tough', zh: '艰难的；强硬的', scene: '情况不好对付，人得咬牙撑住，像一段艰难的时期。', tone: '偏口语', col: 'a tough decision, tough on', en: 'It was a tough decision for the family.', cn: '这对这家人来说是一个艰难的决定。' }
    ]},
    { line: '不难做，和简单清楚、没有多余步骤。', items: [
      { w: 'easy', zh: '容易的', scene: '不费力就能做成，人很轻松。', tone: '偏口语', col: 'easy to, an easy task', en: 'The form is easy to complete.', cn: '这张表格很容易填写。' },
      { w: 'simple', zh: '简单的', scene: '结构不复杂，步骤少，一眼能看懂。', tone: '中性', col: 'a simple explanation, simple to use', en: 'He gave a simple explanation of the chart.', cn: '他简单解释了这张图表。' }
    ]},
    { line: '力气大、力量大、结实耐用。', items: [
      { w: 'strong', zh: '强壮的；强烈的', scene: '肌肉有力，或味道、观点很强烈。', tone: '中性', col: 'a strong wind, strong evidence', en: 'There is strong evidence for the claim.', cn: '这个说法有有力的证据。' },
      { w: 'powerful', zh: '强有力的', scene: '能推动很大的结果，像一台马力大的发动机或有影响力的机构。', tone: '中性', col: 'a powerful engine, powerful influence', en: 'The speech had a powerful effect.', cn: '这次讲话产生了强有力的影响。' },
      { w: 'robust', zh: '强健的；稳健的', scene: '身体或系统经得起磕碰，不容易坏。', tone: '偏正式', col: 'a robust economy, robust health', en: 'The system is robust enough for daily use.', cn: '这个系统足够稳健，可以日常使用。' }
    ]},
    { line: '力气小，和一碰就容易碎。', items: [
      { w: 'weak', zh: '弱的', scene: '力气、信号或论点不够强，推一下就晃。', tone: '中性，常偏贬义', col: 'a weak signal, weak argument', en: 'The argument is weak because it lacks evidence.', cn: '这个论点缺少证据，所以站不住。' },
      { w: 'fragile', zh: '易碎的；脆弱的', scene: '玻璃一样，轻轻一碰就可能碎；也可以说身体或局势脆弱。', tone: '中性', col: 'fragile health, a fragile object', en: 'Please handle the fragile package with care.', cn: '请小心拿这个易碎的包裹。' }
    ]},
    { line: '离地面高，和人的个子高。', items: [
      { w: 'high', zh: '高的', scene: '位置在上面，或程度高，像一座高高的桥、很高的价格。', tone: '中性', col: 'a high building, high prices', en: 'The shelves are too high for children.', cn: '这些架子对孩子来说太高了。' },
      { w: 'tall', zh: '高的', scene: '从脚到头或从底到顶瘦长地立着，常形容人或树。', tone: '中性', col: 'a tall man, tall trees', en: 'The tall trees blocked the view.', cn: '那些高树挡住了视线。' }
    ]},
    { line: '长度短、时间短、话少而清楚。', items: [
      { w: 'short', zh: '短的', scene: '距离、时间或篇幅不长，是最普通的说法。', tone: '中性', col: 'a short time, short of', en: 'It was a short walk to the shop.', cn: '走到商店只是一小段路。' },
      { w: 'brief', zh: '简短的', scene: '说话或停留只占一小段时间，然后就结束。', tone: '偏正式', col: 'a brief meeting, in brief', en: 'The meeting was brief but useful.', cn: '会议很短，但有用。' },
      { w: 'concise', zh: '简洁的', scene: '话不多，但该说的都说清楚了，没有多余的句子。', tone: '褒义，偏书面', col: 'a concise summary, concise writing', en: 'Please write a concise summary.', cn: '请写一份简洁的总结。' }
    ]},
    { line: '横向宽，和范围铺得开。', items: [
      { w: 'wide', zh: '宽的', scene: '从左到右的距离大，像一条宽马路。', tone: '中性', col: 'a wide road, wide range', en: 'The river is wide at this point.', cn: '河面在这里很宽。' },
      { w: 'broad', zh: '宽阔的；广泛的', scene: '宽，也常指覆盖的面很广，像广泛的支持。', tone: '中性偏正式', col: 'a broad smile, broad support', en: 'The plan has broad support.', cn: '这项计划得到广泛支持。' }
    ]},
    { line: '不厚、身材瘦、细而好看。', items: [
      { w: 'thin', zh: '薄的；瘦的', scene: '厚度小，或人瘦。说人瘦时有时不够客气。', tone: '中性', col: 'a thin layer, thin ice', en: 'A thin layer of ice covered the lake.', cn: '湖面盖着薄薄的一层冰。' },
      { w: 'slim', zh: '苗条的；微小的', scene: '身材匀称偏瘦，听起来比 thin 客气；也可以说机会很小。', tone: '说身材时偏褒义', col: 'a slim chance, stay slim', en: 'There is only a slim chance of success.', cn: '成功的机会很小。' },
      { w: 'slender', zh: '纤细的；苗条的', scene: '细长、轻盈，常用来描写身材或细长的物体，偏书面。', tone: '偏书面，褒义', col: 'a slender figure, slender branches', en: 'The plant has slender branches.', cn: '这棵植物的枝条很纤细。' }
    ]},
    { line: '对、量得准、分毫不差，精确的程度不同。', items: [
      { w: 'accurate', zh: '准确的', scene: '和事实对得上，没有明显的错，像一份准确的地图。', tone: '中性偏正式', col: 'accurate information, accurate to', en: 'The figures are accurate.', cn: '这些数字是准确的。' },
      { w: 'precise', zh: '精确的', scene: '细到具体的点，不模糊，像把时间说到分钟。', tone: '偏正式', col: 'precise details, precise measurements', en: 'Please give a precise time.', cn: '请给出一个精确的时间。' },
      { w: 'exact', zh: '确切的', scene: '一点不差，就是这个，不是大概。', tone: '中性', col: 'the exact number, exact same', en: 'What is the exact number of applicants?', cn: '申请者的确切人数是多少？' }
    ]},
    { line: '够用、达到需要、刚好够好。', items: [
      { w: 'enough', zh: '足够的', scene: '分量够你用，不再缺，是最普通的说法。', tone: '偏口语', col: 'enough time, enough for', en: 'We have enough time to finish.', cn: '我们有足够的时间完成。' },
      { w: 'sufficient', zh: '足够的', scene: '数量达到要求，像申请材料写着“资金充足”。', tone: '正式', col: 'sufficient evidence, sufficient for', en: 'There is sufficient evidence to support the claim.', cn: '有足够的证据支持这个说法。' },
      { w: 'adequate', zh: '足够好的；适当的', scene: '够用，但未必充裕，像一间能住但不宽敞的房间。', tone: '偏正式，有时暗示“刚刚够”', col: 'adequate for, adequate resources', en: 'The lighting is adequate for reading.', cn: '这光线用来阅读是够的。' }
    ]},
    { line: '缺少、供应不够、稀少到难找。', items: [
      { w: 'lack', zh: '缺乏', scene: '需要的东西不在，桌上空着那一块。', tone: '中性', col: 'a lack of, lack experience', en: 'The project failed for lack of funding.', cn: '项目因缺乏资金而失败。' },
      { w: 'shortage', zh: '短缺', scene: '市场上或仓库里货不够，人们排着队还是买不到。', tone: '中性，新闻里常见', col: 'a shortage of, water shortage', en: 'There is a shortage of nurses.', cn: '护士人手短缺。' },
      { w: 'scarcity', zh: '稀缺', scene: '某种资源本来就少，到处都难找，像干旱地区的水。', tone: '正式', col: 'scarcity of, water scarcity', en: 'Water scarcity affects farming in the region.', cn: '水资源稀缺影响该地区的农业。' }
    ]},
    { line: '做完得到的结果、跟着发生的后果、最后的结局、撞上来的影响。', items: [
      { w: 'result', zh: '结果', scene: '一件事做完后你看到的那个结局，是最普通的说法。', tone: '中性', col: 'as a result, result in, result from', en: 'The result of the test was positive.', cn: '检测结果是阳性。' },
      { w: 'consequence', zh: '后果', scene: '一件事后面跟着发生的影响，常常是你得承担的那一面。', tone: '偏正式，有时偏负面', col: 'as a consequence, serious consequences', en: 'The decision had serious consequences.', cn: '这个决定带来了严重后果。' },
      { w: 'outcome', zh: '结局；结果', scene: '过程走完后的最终局面，像谈判最后谈成什么样。', tone: '偏正式', col: 'the outcome of, a positive outcome', en: 'We are waiting for the outcome of the vote.', cn: '我们在等投票的结果。' },
      { w: 'impact', zh: '影响', scene: '一件事撞到另一件事上，留下能感觉到的变化。', tone: '中性偏正式', col: 'impact on, a major impact', en: 'The new road had a major impact on local shops.', cn: '这条新路对当地商店影响很大。' }
    ]},
    { line: '一套做法、走近问题的角度、具体的手艺或技术。', items: [
      { w: 'method', zh: '方法', scene: '按步骤做的一套办法，像实验方法。', tone: '中性偏正式', col: 'a method of, teaching methods', en: 'This method of payment is faster.', cn: '这种付款方式更快。' },
      { w: 'approach', zh: '方法；途径', scene: '你从哪个方向走近一个问题，强调思路而不只是步骤。', tone: '中性偏正式', col: 'an approach to, take an approach', en: 'We need a new approach to traffic.', cn: '我们需要一种应对交通的新思路。' },
      { w: 'technique', zh: '技巧；技术', scene: '手上或专业上的一种具体本事，像一种绘画技法。', tone: '中性', col: 'a technique for, modern techniques', en: 'She learned a new technique for the experiment.', cn: '她为这个实验学了一种新技术。' },
      { w: 'way', zh: '方式', scene: '做一件事的路子，是最随便、最常用的说法。', tone: '偏口语', col: 'a way to, a way of, in this way', en: 'Is there a better way to explain this?', cn: '有没有更好的方式来解释这件事？' }
    ]},
    { line: '家里传下来的做法、一个地方的习俗、社会默认的惯例。', items: [
      { w: 'tradition', zh: '传统', scene: '一代一代传下来的做法，节日里还能看见。', tone: '中性偏褒义', col: 'a family tradition, cultural tradition', en: 'It is a family tradition to eat together on Sundays.', cn: '星期天一起吃饭是这个家庭的传统。' },
      { w: 'custom', zh: '习俗', scene: '一个地方的人习惯这么做，外来的人会觉得新鲜。', tone: '中性', col: 'local customs, an old custom', en: 'Visitors should respect local customs.', cn: '访客应当尊重当地习俗。' },
      { w: 'convention', zh: '惯例', scene: '社会或某个行业里大家默认要遵守的做法。这个词也可以指大型会议。', tone: '偏正式', col: 'social convention, by convention', en: 'By convention, the chair speaks first.', cn: '按照惯例，主席先发言。' }
    ]},
    { line: '周围的大环境，和你身边具体的一圈事物。', items: [
      { w: 'environment', zh: '环境', scene: '人或生物生活的周围条件，可以是自然环境，也可以是工作环境。', tone: '中性', col: 'the environment, working environment', en: 'A quiet environment helps people study.', cn: '安静的环境有助于学习。' },
      { w: 'surroundings', zh: '周围环境', scene: '你站在中间，眼睛能看到的那一圈地方：房间、街道、树木。', tone: '中性', col: 'natural surroundings, familiar surroundings', en: 'The hotel is set in beautiful surroundings.', cn: '这家旅馆坐落在优美的环境里。' }
    ]},
    { line: '空气水变脏，和有害物质混进去。', items: [
      { w: 'pollution', zh: '污染', scene: '空气、河或城市被废气和垃圾弄脏，是最常见的说法。', tone: '中性，话题偏负面', col: 'air pollution, noise pollution', en: 'Air pollution is worse in winter.', cn: '空气污染在冬天更严重。' },
      { w: 'contamination', zh: '污染；沾染', scene: '有害物质进了本该干净的水、食物或样品里。', tone: '偏技术、正式', col: 'water contamination, contamination of', en: 'The lab tested the water for contamination.', cn: '实验室检测了水是否受到污染。' }
    ]},
    { line: '不要的废物、没用的垃圾、随地丢下的零碎。', items: [
      { w: 'waste', zh: '浪费；废弃物', scene: '被扔掉的东西，或把还能用的资源白白耗掉。', tone: '中性，常带可惜的意思', col: 'waste disposal, a waste of time', en: 'Food waste is a serious problem.', cn: '食物浪费是一个严重问题。' },
      { w: 'rubbish', zh: '垃圾', scene: '家里要扔掉的那一袋没用的东西。也可以说想法毫无价值。', tone: '偏口语', col: 'throw away rubbish, talk rubbish', en: 'Please put the rubbish in the bin.', cn: '请把垃圾放进垃圾桶。' },
      { w: 'litter', zh: '乱扔的垃圾', scene: '纸屑和瓶子散落在街上，没人收。', tone: '中性，偏负面', col: 'drop litter, litter the streets', en: 'Litter covered the beach after the festival.', cn: '节日过后，海滩上满是乱扔的垃圾。' }
    ]},
    { line: '点头允许、正式许可、让某人去做。', items: [
      { w: 'allow', zh: '允许', scene: '规则或某人说你可以做，最普通。', tone: '中性', col: 'allow somebody to, allow for', en: 'The school allows students to use the library.', cn: '学校允许学生使用图书馆。' },
      { w: 'permit', zh: '许可', scene: '官方或正式规则开了绿灯，有时还有一张许可证。', tone: '正式', col: 'permit somebody to, a work permit', en: 'The law does not permit parking here.', cn: '法律不允许在这里停车。' },
      { w: 'let', zh: '让', scene: '你放开手，让别人去做。口语里最常见。它也可以表示出租。', tone: '偏口语', col: 'let somebody do, let go', en: 'Please let me finish the sentence.', cn: '请让我把这句话说完。' }
    ]},
    { line: '下令不许、正式禁止、把范围卡紧。', items: [
      { w: 'ban', zh: '禁止', scene: '一道命令把某件事整个停掉，像禁止在室内吸烟。', tone: '中性，新闻里常见', col: 'a ban on, ban somebody from', en: 'The city banned cars from the old square.', cn: '这座城市禁止汽车进入老广场。' },
      { w: 'prohibit', zh: '禁止', scene: '法律或规章写着“不得”，语气正式。', tone: '正式', col: 'prohibit somebody from, strictly prohibited', en: 'The rules prohibit the use of phones in the exam.', cn: '规则禁止在考试中使用手机。' },
      { w: 'restrict', zh: '限制', scene: '不是完全不许，而是画一条线，只能在线内做，像限制速度。', tone: '中性偏正式', col: 'restrict access, be restricted to', en: 'Access is restricted to staff.', cn: '只有员工可以进入。' }
    ]},
    { line: '假装没看见，和该做的事没有放在心上。', items: [
      { w: 'ignore', zh: '不理睬', scene: '信息或人就在眼前，你故意把脸转开。', tone: '中性，常偏负面', col: 'ignore advice, ignore somebody', en: 'He ignored the warning signs.', cn: '他无视那些警告标志。' },
      { w: 'neglect', zh: '疏忽', scene: '该照顾的植物或责任被放下，时间久了就枯了。不一定是故意的。', tone: '贬义', col: 'neglect a duty, neglect to', en: 'The garden was neglected for months.', cn: '花园好几个月没人打理。' }
    ]},
    { line: '挑一个、按标准选出、随手拿一个。', items: [
      { w: 'choose', zh: '选择', scene: '面前有几个选项，你决定要哪一个。', tone: '中性，最普通', col: 'choose between, choose to', en: 'You can choose between two routes.', cn: '你可以在两条路线里选。' },
      { w: 'select', zh: '挑选', scene: '从一堆里按标准仔细挑出来，像招生选拔。', tone: '比 choose 正式', col: 'select from, carefully selected', en: 'The college selected fifty applicants.', cn: '学院挑选了五十名申请者。' },
      { w: 'pick', zh: '挑选', scene: '伸手从里面拿一个，口语里很轻快。', tone: '偏口语', col: 'pick a team, pick up', en: 'Pick a seat anywhere you like.', cn: '你喜欢哪个座位就坐哪个。' }
    ]},
    { line: '把时间往后推、改期、下手前停一下。', items: [
      { w: 'delay', zh: '推迟；延误', scene: '该发生的事没有按时发生，人或天气把它拖住了。', tone: '中性', col: 'delay a flight, without delay', en: 'The flight was delayed by two hours.', cn: '航班延误了两个小时。' },
      { w: 'postpone', zh: '延期', scene: '你主动把约定的日期改到以后，日历上的那一天被划掉。', tone: '偏正式', col: 'postpone until, postpone a meeting', en: 'They postponed the meeting until Friday.', cn: '他们把会议延期到星期五。' },
      { w: 'hesitate', zh: '犹豫', scene: '手已经抬起来，又停住，还没决定要不要做。', tone: '中性', col: 'hesitate to, hesitate over', en: 'Do not hesitate to ask for help.', cn: '需要帮助就开口，不必犹豫。' },
      { w: 'put off', zh: '推迟', scene: '本该今天做的事被你挪到以后，日历上的那一格空出来。', tone: '偏口语', col: 'put off a decision, put something off', en: 'They put off the meeting until Monday.', cn: '他们把会议推迟到星期一。' }
    ]},
    { line: '进店的人、购买服务的委托人、使用并消耗商品的人。', items: [
      { w: 'customer', zh: '顾客', scene: '走进商店或餐馆、付钱买东西的人。', tone: '中性', col: 'customer service, a regular customer', en: 'The shop has many regular customers.', cn: '这家店有很多老顾客。' },
      { w: 'client', zh: '客户', scene: '请律师、设计师或顾问为自己办事的人，关系更一对一。', tone: '偏正式，商业里常见', col: 'a client of, client base', en: 'The lawyer met her client at ten.', cn: '律师十点会见了客户。' },
      { w: 'consumer', zh: '消费者', scene: '在经济里购买并使用商品的人，常出现在报告和新闻里，不是某一家店的熟人。', tone: '偏正式', col: 'consumer goods, consumer protection', en: 'Consumer spending rose last quarter.', cn: '上个季度消费者支出上升了。' }
    ]},
    { line: '按月或按年的薪水、按周或按小时的工钱、所有进账。', items: [
      { w: 'salary', zh: '薪水', scene: '办公室工作通常按月或按年发的那一笔固定报酬。', tone: '中性', col: 'a monthly salary, salary increase', en: 'Her salary is paid on the last day of the month.', cn: '她的工资在每月最后一天发放。' },
      { w: 'wage', zh: '工资', scene: '常按小时或按周计算的工钱，多和体力或轮班工作一起说。', tone: '中性', col: 'hourly wage, the minimum wage', en: 'The minimum wage will rise next year.', cn: '最低工资明年会提高。' },
      { w: 'income', zh: '收入', scene: '一段时间里进来的全部钱，包括工资和其他进账。', tone: '中性偏正式', col: 'income tax, a source of income', en: 'Rent is their main source of income.', cn: '租金是他们的主要收入来源。' }
    ]},
    { line: '判断价值、按标准评价、大致估计一个数字。', items: [
      { w: 'assess', zh: '评估', scene: '看情况有多严重或价值多少，像老师评估一份作业，或医生评估伤势。', tone: '偏正式', col: 'assess the damage, assess whether', en: 'Engineers assessed the damage to the bridge.', cn: '工程师评估了桥梁的损坏程度。' },
      { w: 'evaluate', zh: '评价', scene: '对照标准判断好坏，常出现在课程或项目结束时。', tone: '偏正式', col: 'evaluate the results, evaluation of', en: 'We need to evaluate the results carefully.', cn: '我们需要仔细评价这些结果。' },
      { w: 'estimate', zh: '估计', scene: '还没有精确数字，你根据经验说出一个大概，像估计路程要多久。', tone: '中性', col: 'estimate the cost, a rough estimate', en: 'They estimate the cost at two million.', cn: '他们估计成本为两百万。' }
    ]},
    { line: '保存原样、保持运转、撑住不让它断。', items: [
      { w: 'preserve', zh: '保存；保护', scene: '让食物、建筑或传统保持原样，不让它坏掉或消失。', tone: '中性偏正式', col: 'preserve food, preserve a building', en: 'The society works to preserve old buildings.', cn: '这个协会致力于保护老建筑。' },
      { w: 'maintain', zh: '维持；保养', scene: '让机器、关系或水平继续正常运转，需要定期照看。', tone: '中性', col: 'maintain standards, maintain a car', en: 'It is expensive to maintain an old car.', cn: '保养一辆旧车很贵。' },
      { w: 'sustain', zh: '维持；承受', scene: '在压力下还能撑住，增长或努力能持续下去，而不是一下就断。', tone: '偏正式', col: 'sustain growth, sustain an injury', en: 'The town cannot sustain such rapid growth.', cn: '这座小镇承受不住这么快的增长。' }
    ]},
    { line: '只持续一阵，和一直保持下去。', items: [
      { w: 'temporary', zh: '暂时的', scene: '一块临时围板，用完就会拆，不是永远留在那里。', tone: '中性', col: 'a temporary job, temporary accommodation', en: 'This is only a temporary solution.', cn: '这只是一个暂时的解决办法。' },
      { w: 'permanent', zh: '永久的', scene: '定下来就一直如此，像一份长期职位或永久的改变。', tone: '中性', col: 'permanent damage, a permanent job', en: 'She is looking for a permanent job.', cn: '她在找一份长期工作。' }
    ]},
    { line: '病拖得很久，和来得急、程度重。', items: [
      { w: 'chronic', zh: '慢性的', scene: '问题或疾病跟着人走了很久，不容易一下消失。', tone: '偏正式，医学里常见', col: 'chronic pain, a chronic problem', en: 'He has lived with chronic pain for years.', cn: '他多年来一直承受慢性疼痛。' },
      { w: 'acute', zh: '急性的；剧烈的', scene: '来得突然而且厉害，需要马上处理，像急性疼痛。', tone: '偏正式', col: 'acute pain, an acute shortage', en: 'The patient had acute pain in the chest.', cn: '病人胸部剧痛。' }
    ]},
    { line: '按规矩来，和放松、不拘礼节。', items: [
      { w: 'formal', zh: '正式的', scene: '穿得整齐，用语小心，场合有规矩，像正式会议。', tone: '中性', col: 'formal dress, a formal letter', en: 'The invitation says formal dress.', cn: '请柬上写着要正式着装。' },
      { w: 'informal', zh: '非正式的', scene: '不用拘礼，聊天像朋友之间，衣服也更随意。', tone: '中性', col: 'informal language, an informal meeting', en: 'The meeting was informal and short.', cn: '这次会面不正式，而且很短。' }
    ]},
    { line: '自己愿意做，和按规定必须做。', items: [
      { w: 'voluntary', zh: '自愿的', scene: '没有人强迫，你自己举手参加。', tone: '中性', col: 'voluntary work, on a voluntary basis', en: 'The survey is voluntary.', cn: '这项调查是自愿参加的。' },
      { w: 'compulsory', zh: '强制的；义务的', scene: '规则写着必须做，不做就会有后果，像义务教育。', tone: '偏正式', col: 'compulsory education, compulsory for', en: 'Sports are compulsory for first-year students.', cn: '体育对一年级学生是必修的。' }
    ]},
    { line: '能弯、不肯弯、规则很严。', items: [
      { w: 'flexible', zh: '灵活的', scene: '计划像软尺，情况变了还能调整。', tone: '褒义', col: 'flexible hours, a flexible approach', en: 'The company offers flexible working hours.', cn: '公司提供弹性工作时间。' },
      { w: 'rigid', zh: '僵硬的；死板的', scene: '规则像一根不肯弯的棍子，情况变了也不改。', tone: '常偏贬义', col: 'a rigid rule, rigid structure', en: 'The rules are too rigid for small teams.', cn: '这些规则对小团队来说太死板。' },
      { w: 'strict', zh: '严格的', scene: '标准划得很紧，违反就会被指出，像严格的老师。', tone: '中性', col: 'strict rules, strict with', en: 'The school is strict about attendance.', cn: '学校对出勤要求很严格。' }
    ]},
    { line: '普普通通、到处都有、正好是这类事物的典型样子。', items: [
      { w: 'ordinary', zh: '普通的', scene: '没有特别之处的一天或一个人，不起眼。', tone: '中性', col: 'ordinary people, an ordinary day', en: 'It was an ordinary Tuesday morning.', cn: '那是一个普通的星期二早晨。' },
      { w: 'common', zh: '常见的；共同的', scene: '很多地方都能见到，不稀奇。它也可以表示“共同的”。', tone: '中性', col: 'a common problem, in common', en: 'Colds are common in winter.', cn: '感冒在冬天很常见。' },
      { w: 'typical', zh: '典型的', scene: '拿出一个例子，它正好长得像这类东西通常的样子。', tone: '中性', col: 'typical of, a typical example', en: 'This is a typical example of local architecture.', cn: '这是当地建筑的一个典型例子。' }
    ]},
    { line: '独一份、单独拿出来的那一个、说得具体不笼统。', items: [
      { w: 'unique', zh: '独一无二的', scene: '全世界找不出第二件一样的，只有这一份。', tone: '中性偏褒义', col: 'unique to, a unique opportunity', en: 'Each person has a unique fingerprint.', cn: '每个人的指纹都是独一无二的。' },
      { w: 'particular', zh: '特定的；特别的', scene: '从一堆里指出“就是那一个”，不是随便哪个。', tone: '中性', col: 'a particular reason, in particular', en: 'Is there a particular reason for the delay?', cn: '耽搁有什么特定的原因吗？' },
      { w: 'specific', zh: '具体的；特定的', scene: '说清楚细节，不停留在模糊的“一些”。', tone: '中性偏正式', col: 'specific information, specific to', en: 'Please give a specific example.', cn: '请举一个具体的例子。' }
    ]},
    { line: '面面都包括，和做得仔细、不留死角。', items: [
      { w: 'comprehensive', zh: '全面的', scene: '一张网把相关的部分都罩住，报告里各个方面都有。', tone: '偏正式，褒义', col: 'a comprehensive review, comprehensive insurance', en: 'The book is a comprehensive guide to the topic.', cn: '这本书是这个题目的全面指南。' },
      { w: 'thorough', zh: '彻底的；仔细的', scene: '检查时每个角落都看过，不马虎。', tone: '褒义', col: 'a thorough investigation, thorough cleaning', en: 'The police made a thorough search.', cn: '警方进行了彻底搜查。' }
    ]},
    { line: '最初的原本、有创造力、带来新做法。', items: [
      { w: 'original', zh: '最初的；有独创性的', scene: '可以是最早的那一版原件，也可以是想法不是抄来的。', tone: '中性，说创意时偏褒义', col: 'the original plan, an original idea', en: 'The original plan was changed twice.', cn: '最初的计划改过两次。' },
      { w: 'creative', zh: '有创造力的', scene: '脑子里能长出新的画面和办法，不按老套路。', tone: '褒义', col: 'a creative solution, creative writing', en: 'They found a creative solution.', cn: '他们找到了一个有创意的解决办法。' },
      { w: 'innovative', zh: '创新的', scene: '把一种新方法真正用起来，让做法和过去不一样。', tone: '褒义，偏正式', col: 'an innovative design, innovative technology', en: 'The company is known for innovative design.', cn: '这家公司以创新设计闻名。' }
    ]},
    { line: '告诉大家、正式宣布。', items: [
      { w: 'announce', zh: '宣布', scene: '把消息公开说出来，让该知道的人听到。', tone: '中性', col: 'announce a decision, announce that', en: 'The university announced the results today.', cn: '大学今天宣布了结果。' },
      { w: 'declare', zh: '宣布；申报', scene: '正式或郑重地说出，也可以是在海关申报物品。', tone: '偏正式', col: 'declare war, declare that, declare goods', en: 'The government declared a public holiday.', cn: '政府宣布了一天公共假期。' }
    ]},
    { line: '把原因讲明白、把浑水变清、把意思翻译成能懂的话。', items: [
      { w: 'explain', zh: '解释', scene: '把“为什么”讲给别人听，直到对方点头。', tone: '中性', col: 'explain why, explain to', en: 'Can you explain why the figure changed?', cn: '你能解释一下这个数字为什么变了吗？' },
      { w: 'clarify', zh: '澄清', scene: '本来有点浑、有点误会，你补一句，让它变清楚。', tone: '偏正式', col: 'clarify a point, let me clarify', en: 'Let me clarify what I meant.', cn: '让我澄清一下我的意思。' },
      { w: 'interpret', zh: '解读；口译', scene: '把符号、数据或另一种语言转换成意思，像口译员在两边之间传话。', tone: '偏正式', col: 'interpret data, interpret for', en: 'How do you interpret these results?', cn: '你如何解读这些结果？' },
      { w: 'explanation', zh: '解释', scene: '把原因说清楚之后留下的那段话。', tone: '中性', col: 'an explanation of, an explanation for', en: 'The leaflet gives an explanation of the fee.', cn: '这张传单解释了这项费用。' }
    ]},
    { line: '缩成要点、把样子说出来、先画出轮廓。', items: [
      { w: 'summarize', zh: '总结', scene: '一篇长文被收成几句要点，主干还在，细节放下。', tone: '中性偏正式', col: 'summarize the main points', en: 'Please summarize the main points.', cn: '请总结要点。' },
      { w: 'describe', zh: '描述', scene: '用话把看见的样子和经过画出来，让没在场的人也能想象。', tone: '中性', col: 'describe something as, describe how', en: 'Can you describe what the building looks like?', cn: '你能描述一下那栋楼什么样吗？' },
      { w: 'outline', zh: '概述', scene: '先画出轮廓，只给主要线条，细节以后再填。', tone: '偏正式', col: 'outline a plan, an outline of', en: 'She outlined the plan in five minutes.', cn: '她用五分钟概述了这个计划。' },
      { w: 'description', zh: '描述', scene: '把样子和经过写成或说成的那段话。', tone: '中性', col: 'a description of, brief description', en: 'The guide gave a description of the route.', cn: '向导描述了这条路线。' }
    ]},
    { line: '放假的日子，和一段离开工作的假期。', items: [
      { w: 'holiday', zh: '假日；假期', scene: '不用上班上学的日子，也可以是外出度假。英式英语里很常见。', tone: '中性', col: 'public holiday, on holiday', en: 'Monday is a public holiday.', cn: '星期一是公共假日。' },
      { w: 'vacation', zh: '假期', scene: '一段离开工作或学校去休息的时间，美式英语里更常这么说。', tone: '中性', col: 'summer vacation, on vacation', en: 'They are on vacation this week.', cn: '他们这周在休假。' }
    ]},
    { line: '好处、赚到的钱、伸手帮一把。', items: [
      { w: 'benefit', zh: '好处；受益', scene: '一件事给你带来的有利之处，不一定是钱。', tone: '中性', col: 'benefit from, for the benefit of', en: 'Students benefit from smaller classes.', cn: '学生能从小班教学中受益。' },
      { w: 'profit', zh: '利润', scene: '卖出之后剩下的钱，账本上收入大于成本的那一截。', tone: '中性，商业', col: 'make a profit, profit from', en: 'The shop made a small profit.', cn: '这家店赚了一小笔利润。' },
      { w: 'aid', zh: '援助；帮助', scene: '在困难时伸手把人或地方扶一把，常指救援或援助物资。', tone: '偏正式', col: 'foreign aid, aid workers, in aid of', en: 'Aid arrived in the town two days later.', cn: '援助两天后到达了那座城镇。' }
    ]},
    { line: '价钱低，和付得起。', items: [
      { w: 'cheap', zh: '便宜的', scene: '价钱低。有时也暗示质量不高。', tone: '偏口语，说质量时偏贬义', col: 'cheap tickets, cheap to run', en: 'The tickets were cheap.', cn: '票很便宜。' },
      { w: 'affordable', zh: '负担得起的', scene: '价钱没有低到惊人，但普通收入的人付得起，不会被压垮。', tone: '褒义', col: 'affordable housing, affordable for', en: 'The city needs more affordable housing.', cn: '这座城市需要更多人们负担得起的住房。' }
    ]},
    { line: '事情严重，和程度剧烈。', items: [
      { w: 'serious', zh: '严重的；认真的', scene: '不是开玩笑，问题或伤势需要认真对待。', tone: '中性', col: 'a serious problem, serious about', en: 'The injury was not serious.', cn: '伤得不严重。' },
      { w: 'severe', zh: '严重的；剧烈的', scene: '程度很重，像严重的暴风雨或严厉的惩罚。', tone: '偏正式，语气更强', col: 'severe weather, severe pain', en: 'The region faced severe weather.', cn: '该地区遭遇了恶劣天气。' },
      { w: 'harsh', zh: '严酷的；严厉的', scene: '条件很苦，或话说得很重，不留情面。', tone: '负面', col: 'harsh weather, a harsh remark', en: 'The winter was harsh.', cn: '那个冬天很严酷。' }
    ]},
    { line: '不忽高忽低，和放在那里不会倒。', items: [
      { w: 'steady', zh: '稳定的；平稳的', scene: '速度或手不抖，一直保持同样的节奏。', tone: '中性偏褒义', col: 'a steady job, steady growth', en: 'The patient made steady progress.', cn: '病人在稳步好转。' },
      { w: 'stable', zh: '稳定的', scene: '局面放在那里不会突然翻倒，像平稳的物价。', tone: '中性偏正式', col: 'a stable government, remain stable', en: 'Prices have remained stable.', cn: '物价一直保持稳定。' }
    ]},
    { line: '靠得住，和前后表现一致。', items: [
      { w: 'reliable', zh: '可靠的', scene: '你把事情交给它或他，它会照做，车也能每次都发动。', tone: '褒义', col: 'a reliable source, reliable transport', en: 'The bus service is reliable.', cn: '公交车服务很可靠。' },
      { w: 'consistent', zh: '一致的；一贯的', scene: '每次表现都在同一水平，没有今天很好、明天很差。', tone: '中性偏褒义', col: 'consistent with, consistent results', en: 'Her results were consistent across the tests.', cn: '她在各次测试中的成绩很一致。' }
    ]},
    { line: '先入为主的偏向，和更固化、更不公平的成见。', items: [
      { w: 'bias', zh: '偏见；偏向', scene: '天平已经向一边斜了，判断还没开始就不公平。', tone: '偏负面，学术里常见', col: 'bias against, gender bias', en: 'The sample shows a bias against older workers.', cn: '这个样本对年长员工有偏见。' },
      { w: 'prejudice', zh: '偏见；歧视', scene: '还没认识一个人，就已经对他所属的群体下了不好的判断。', tone: '贬义', col: 'racial prejudice, prejudice against', en: 'Prejudice can block people from fair treatment.', cn: '偏见会妨碍人们得到公平对待。' }
    ]},
    { line: '双方说定、正式协议、国家之间的条约。', items: [
      { w: 'agreement', zh: '协议；同意', scene: '双方点头说定，可以是口头的，也可以写成文件。', tone: '中性', col: 'reach an agreement, in agreement', en: 'The two sides reached an agreement.', cn: '双方达成了协议。' },
      { w: 'contract', zh: '合同', scene: '白纸黑字写清权利和义务，签了名就有法律约束。', tone: '正式，法律和商业', col: 'sign a contract, under contract', en: 'She signed a one-year contract.', cn: '她签了一年的合同。' },
      { w: 'treaty', zh: '条约', scene: '国家与国家签的正式约定，桌面上有国旗和文件。', tone: '正式', col: 'a peace treaty, sign a treaty', en: 'The countries signed a trade treaty.', cn: '这些国家签署了一项贸易条约。' }
    ]},
    { line: '一家公司、商号、要去做成事业的企业、做生意这件事。', items: [
      { w: 'company', zh: '公司', scene: '一群人组成的商业组织，有名字、有办公室。', tone: '中性', col: 'a company director, join a company', en: 'She works for a software company.', cn: '她在一家软件公司工作。' },
      { w: 'firm', zh: '公司；商号', scene: '常指律师事务所、会计师事务所这类专业机构。这个词也可以表示“牢固的”。', tone: '中性偏正式', col: 'a law firm, a firm of accountants', en: 'He joined a law firm.', cn: '他加入了一家律师事务所。' },
      { w: 'enterprise', zh: '企业；事业', scene: '有闯劲的商业事业，也指企业这种组织，语气更书面。', tone: '偏正式', col: 'a small enterprise, private enterprise', en: 'The fund supports small enterprises.', cn: '这项基金支持小型企业。' },
      { w: 'business', zh: '生意；企业', scene: '做买卖这件事，或你经营的那摊生意。', tone: '中性', col: 'run a business, business trip', en: 'They run a family business.', cn: '他们经营一家家族企业。' }
    ]},
    { line: '给出去，和按需要把物资供上。', items: [
      { w: 'provide', zh: '提供', scene: '你把需要的东西交到对方手里，让他们能用。', tone: '中性', col: 'provide somebody with, provide for', en: 'The hotel provides breakfast.', cn: '酒店提供早餐。' },
      { w: 'supply', zh: '供应', scene: '一批货物按量送到，仓库和商店之间的那条供应线。', tone: '中性偏正式', col: 'supply and demand, water supply', en: 'The region supplies grain to the city.', cn: '该地区向城市供应粮食。' },
      { w: 'offers', zh: '提供；出价', scene: '把一个选择递到别人面前，或开出一个价钱。它也可以是录取通知。', tone: '中性', col: 'offers to, job offers', en: 'The college offers evening classes.', cn: '学院提供夜校课程。' }
    ]},
    { line: '人聚到一处。组装的意思不要和这里混淆。', items: [
      { w: 'gather', zh: '聚集；收集', scene: '人或信息从各处走到中间，慢慢聚成一堆。', tone: '中性', col: 'gather information, gather around', en: 'A crowd gathered around the speaker.', cn: '一群人聚在演讲者周围。' },
      { w: 'collect', zh: '收集', scene: '一件一件拣起来放进同一个地方，像收集邮票或把落叶收进袋子。', tone: '中性', col: 'collect data, collect stamps', en: 'The researchers collected data for a year.', cn: '研究人员收集了一年的数据。' }
    ]},
    { line: '把安排取消、把制度废除、把已经给出的东西收回。', items: [
      { w: 'cancel', zh: '取消', scene: '一张票或一场会议被划掉，不再举行。', tone: '中性', col: 'cancel a meeting, cancel a flight', en: 'They cancelled the flight because of fog.', cn: '因为大雾，他们取消了航班。' },
      { w: 'abolish', zh: '废除', scene: '一项制度或法律被正式拿掉，以后不再存在。', tone: '正式', col: 'abolish a law, abolish slavery', en: 'The tax was abolished in 2010.', cn: '这项税在 2010 年被废除了。' },
      { w: 'withdraw', zh: '撤回；提取', scene: '把已经伸出的手收回来：撤回申请，或从账户里取钱。', tone: '中性偏正式', col: 'withdraw from, withdraw money', en: 'She withdrew her application.', cn: '她撤回了申请。' }
    ]},
    { line: '自己好转、把原样修回、伤口愈合、治好疾病。', items: [
      { w: 'recover', zh: '恢复；重新获得', scene: '病后或受挫后自己慢慢好起来，也可以是把丢失的东西找回来。', tone: '中性', col: 'recover from, recover the cost', en: 'He recovered from the illness in a week.', cn: '他一周内从病中恢复了。' },
      { w: 'restore', zh: '恢复；修复', scene: '把坏了或旧了的东西修回原来的样子，像修复一幅画。', tone: '偏正式', col: 'restore a building, restore order', en: 'The painting was carefully restored.', cn: '这幅画被仔细修复了。' },
      { w: 'heal', zh: '愈合', scene: '皮肤上的伤口自己长好，疼痛退去。', tone: '中性', col: 'heal a wound, heal over', en: 'The cut healed in a few days.', cn: '伤口几天就愈合了。' },
      { w: 'cure', zh: '治愈', scene: '治疗把疾病除掉，人不只是暂时舒服，而是病好了。', tone: '中性', col: 'cure a disease, a cure for', en: 'The treatment cured the infection.', cn: '治疗治好了感染。' }
    ]},
    { line: '被迫承受痛苦，和咬牙坚持住。', items: [
      { w: 'suffer', zh: '遭受', scene: '痛苦或损失落在身上，人是在承受，不是主动选择。', tone: '中性，话题沉重', col: 'suffer from, suffer a loss', en: 'Many families suffered from the flood.', cn: '许多家庭遭受了洪水之害。' },
      { w: 'endure', zh: '忍受；持续', scene: '很难，但你还站着，把这段时间熬过去。', tone: '偏正式，带坚持的意思', col: 'endure pain, endure hardship', en: 'They endured years of hardship.', cn: '他们忍受了多年的艰难。' }
    ]},
    { line: '点起想做的火花，和推动人去行动。', items: [
      { w: 'inspire', zh: '激励；赋予灵感', scene: '一句话或一个人让你心里亮一下，想去做更好的事。', tone: '褒义', col: 'inspire somebody to, an inspiring story', en: 'The teacher inspired her to study science.', cn: '老师激励她去学科学。' },
      { w: 'motivate', zh: '激励；驱动', scene: '后面有一个理由推着人行动，可以是目标，也可以是奖励。', tone: '中性偏正式', col: 'motivate somebody to, highly motivated', en: 'Bonus payments motivate some workers.', cn: '奖金会激励一些员工。' }
    ]},
    { line: '动物或人随季节迁移，和迁入另一个国家定居。', items: [
      { w: 'migrate', zh: '迁移', scene: '鸟随季节飞到另一处，或人为了工作从一地迁到另一地。', tone: '中性', col: 'migrate to, migratory birds', en: 'Many birds migrate south in winter.', cn: '许多鸟在冬天向南迁徙。' },
      { w: 'immigrate', zh: '移入（另一国）', scene: '人进入另一个国家并在那里定居，看的是进入的那一侧。', tone: '中性偏正式', col: 'immigrate to, immigrate from', en: 'Her parents immigrated to Canada in 1998.', cn: '她的父母于 1998 年移民到加拿大。' }
    ]},
    { line: '惩罚这种后果，和具体的罚款。', items: [
      { w: 'penalty', zh: '惩罚；处罚', scene: '违反规则后要承担的后果，可以是罚款、罚球或加分。', tone: '中性偏正式', col: 'a penalty for, the death penalty', en: 'There is a penalty for late payment.', cn: '逾期付款要受罚。' },
      { w: 'fine', zh: '罚款', scene: '违反规定后要交的一笔钱，像停车超时收到的罚单。这个词也可以表示“好的”。', tone: '中性', col: 'a parking fine, fine somebody', en: 'He paid a fine for speeding.', cn: '他因超速交了罚款。' }
    ]},
    { line: '做得到、符合实际，不只是空想。', items: [
      { w: 'feasible', zh: '可行的', scene: '计划放在现实里能走通，时间、钱和人手都够得着。', tone: '偏正式', col: 'feasible to, a feasible plan', en: 'The proposal is feasible within the budget.', cn: '这项提议在预算内是可行的。' },
      { w: 'practical', zh: '实用的；实际的', scene: '不空谈，拿来就能用，像一把趁手的工具。', tone: '中性', col: 'a practical solution, practical experience', en: 'We need a practical solution, not a slogan.', cn: '我们需要一个能用的办法，不是一句口号。' },
      { w: 'pragmatic', zh: '务实的', scene: '人不拘泥于理想样子，拣眼前真正能做成的那条路走。', tone: '中性偏正式', col: 'a pragmatic approach, pragmatic about', en: 'She took a pragmatic approach to the budget.', cn: '她对预算采取了务实的做法。' }
    ]},
    { line: '长得茂盛，和事业、城市兴旺起来。', items: [
      { w: 'thrive', zh: '茁壮成长', scene: '植物在阳光下越长越旺，人或城市也在合适的条件里越来越好。', tone: '褒义', col: 'thrive on, thrive in', en: 'Small shops thrive in this neighbourhood.', cn: '小店在这个社区里生意兴旺。' },
      { w: 'flourish', zh: '兴旺；茂盛', scene: '一片田或一段经济突然繁茂，旗帜一样展开。', tone: '褒义，稍书面', col: 'flourish in, business flourished', en: 'The arts flourished in that period.', cn: '艺术在那个时期兴盛起来。' },
      { w: 'boom', zh: '兴旺；激增', scene: '生意或数量在短时间里猛地涨上去。', tone: '中性', col: 'a boom in, boom year', en: 'There was a boom in tourism.', cn: '旅游业出现了一阵兴旺。' }
    ]},
    { line: '干活认真不肯偷懒，和长期肯下苦功。', items: [
      { w: 'diligent', zh: '勤奋的', scene: '灯还亮着，人一页一页把作业做完，不敷衍。', tone: '褒义，偏正式', col: 'a diligent student, diligent in', en: 'She is diligent in checking every source.', cn: '她查每一处资料都很勤奋。' },
      { w: 'hardworking', zh: '苦干的', scene: '手上有茧，天天出勤，靠力气和时间把事情做完。', tone: '褒义，偏口语', col: 'a hardworking team, hardworking staff', en: 'The hardworking staff kept the shop open.', cn: '勤恳的员工维持着店铺营业。' }
    ]},
    { line: '话说得有说服力、说得顺、说得清楚。', items: [
      { w: 'eloquent', zh: '雄辩的；有说服力的', scene: '一个人站起来，句子有力量，听的人被带动。', tone: '褒义，偏正式', col: 'an eloquent speech, eloquent on', en: 'He gave an eloquent speech about the river.', cn: '他就这条河发表了一篇有说服力的讲话。' },
      { w: 'fluent', zh: '流利的', scene: '话说出来不打结，像水流过去，常用来形容外语。', tone: '褒义', col: 'fluent in, fluent English', en: 'She is fluent in three languages.', cn: '她能流利地说三种语言。' },
      { w: 'articulate', zh: '表达清楚的', scene: '每个意思都说得清楚，别人不用猜你想说什么。', tone: '褒义', col: 'articulate ideas, an articulate speaker', en: 'The witness was nervous but articulate.', cn: '证人紧张，但表达得很清楚。' }
    ]},
    { line: '量大、相当大、又大又重的规模。', items: [
      { w: 'substantial', zh: '大量的；重大的', scene: '一笔不小的数目摆在桌上，不是零头。', tone: '偏正式', col: 'a substantial amount, substantial evidence', en: 'They made a substantial profit.', cn: '他们获得了一笔可观的利润。' },
      { w: 'considerable', zh: '相当大的', scene: '大到值得认真看待，像一段相当长的距离。', tone: '偏正式', col: 'considerable time, considerable number', en: 'The trip takes a considerable time.', cn: '这段路程要花相当长的时间。' },
      { w: 'massive', zh: '巨大的；大规模的', scene: '又大又沉，或规模大到铺满视线，像一座巨大的坝。', tone: '语气强', col: 'a massive increase, massive support', en: 'The storm caused massive damage.', cn: '暴风雨造成了巨大破坏。' }
    ]},
    { line: '心里先有预期、觉得会发生、根据迹象预言、正式预报。', items: [
      { w: 'anticipate', zh: '预料；期待', scene: '事情还没到，你已经在门口等着，心里有准备。', tone: '偏正式', col: 'anticipate that, anticipate problems', en: 'We anticipate a rise in demand.', cn: '我们预料需求会上升。' },
      { w: 'expect', zh: '期待；预料', scene: '你看着日历，觉得这件事会在那天发生。', tone: '中性，最普通', col: 'expect to, expect that', en: 'I expect the bus in ten minutes.', cn: '我预计公交车十分钟后到。' },
      { w: 'predict', zh: '预言；预测', scene: '根据已有迹象说出还没发生的结果，像预测选举。', tone: '中性', col: 'predict that, predict the result', en: 'No one predicted the result.', cn: '没有人预测到这个结果。' },
      { w: 'forecast', zh: '预报', scene: '正式公布的预测，最常见的是天气预报图。', tone: '偏正式', col: 'weather forecast, forecast growth', en: 'The forecast says rain tomorrow.', cn: '预报说明天有雨。' }
    ]},
    { line: '把人说动去做事，和让人真的相信。', items: [
      { w: 'persuade', zh: '说服', scene: '你反复讲理由，直到对方点头，愿意去做。', tone: '中性', col: 'persuade somebody to, persuade somebody that', en: 'She persuaded him to see a doctor.', cn: '她说服他去看医生。' },
      { w: 'convince', zh: '使信服', scene: '证据摆出来，对方心里的怀疑消失了。', tone: '中性', col: 'convince somebody that, convince somebody of', en: 'The data convinced the committee.', cn: '这些数据让委员会信服了。' }
    ]},
    { line: '往好处想，和态度积极。', items: [
      { w: 'optimistic', zh: '乐观的', scene: '天还阴着，你已经看见云后面的光，相信会好起来。', tone: '褒义', col: 'optimistic about, cautiously optimistic', en: 'She is optimistic about the exam.', cn: '她对考试感到乐观。' },
      { w: 'positive', zh: '积极的', scene: '态度朝前，说话给人力气。这个词也可以表示“正的、阳性的”。', tone: '褒义', col: 'a positive attitude, positive about', en: 'He stays positive under pressure.', cn: '他在压力下仍保持积极。' }
    ]},
    { line: '往坏处想，和态度消极。', items: [
      { w: 'pessimistic', zh: '悲观的', scene: '还没出门，你已经觉得会下雨、会失败。', tone: '中性偏贬义', col: 'pessimistic about', en: 'Investors are pessimistic about prices.', cn: '投资者对价格感到悲观。' },
      { w: 'negative', zh: '消极的；否定的', scene: '摇头、拒绝、情绪往下走。它也可以表示负数或阴性。', tone: '常偏贬义', col: 'a negative effect, negative about', en: 'Constant criticism has a negative effect.', cn: '不停的批评会有消极影响。' }
    ]},
    { line: '又长又乏味、让人无聊、没有光彩、一个调子重复到麻木。', items: [
      { w: 'tedious', zh: '乏味的；冗长的', scene: '会议一小时接一小时，内容重复，人坐不住。', tone: '贬义，偏正式', col: 'a tedious process, tedious work', en: 'Filling in the forms was tedious.', cn: '填这些表格乏味又费时。' },
      { w: 'boring', zh: '无聊的', scene: '你看钟，希望它快点结束，提不起兴趣。', tone: '偏口语，贬义', col: 'a boring lesson, find something boring', en: 'The film was boring after the first scene.', cn: '电影第一场之后就无聊了。' },
      { w: 'dull', zh: '乏味的；阴暗的', scene: '颜色发灰，或谈话没有火花。它也可以表示刀钝了。', tone: '贬义', col: 'a dull speech, dull weather', en: 'The lecture was dull and too long.', cn: '这堂课又闷又长。' },
      { w: 'monotonous', zh: '单调的', scene: '同一个声音、同一条路，反复出现，没有变化。', tone: '贬义', col: 'a monotonous voice, monotonous work', en: 'The work is monotonous but well paid.', cn: '这工作很单调，但报酬不错。' }
    ]},
    { line: '不再使用，和样式已经过时。', items: [
      { w: 'obsolete', zh: '过时的；被淘汰的', scene: '一台旧机器停在角落，没有人再开机。', tone: '偏正式', col: 'obsolete technology, become obsolete', en: 'That software is now obsolete.', cn: '那个软件现在已经被淘汰了。' },
      { w: 'outdated', zh: '过时的', scene: '地图上的路已经改了，这张图还停在旧年份。', tone: '中性偏贬义', col: 'outdated information, outdated equipment', en: 'The guidebook is outdated.', cn: '这本指南已经过时了。' }
    ]},
    { line: '累得没力气，和累到精神也空了。', items: [
      { w: 'tired', zh: '累的', scene: '走了很多路，想坐下，是最普通的累。', tone: '中性', col: 'tired of, feel tired', en: 'I am tired after the long walk.', cn: '走了很长的路，我很累。' },
      { w: 'exhausted', zh: '筋疲力尽的', scene: '连说话的力气都快没了，像电用尽的电池。', tone: '语气强', col: 'exhausted by, completely exhausted', en: 'The team was exhausted by Friday.', cn: '到星期五，团队已经筋疲力尽。' }
    ]},
    { line: '敢于面对害怕的事，和做事大胆、不退缩。', items: [
      { w: 'brave', zh: '勇敢的', scene: '心里害怕，脚还是迈进火场或考场。', tone: '褒义', col: 'brave enough to, a brave decision', en: 'It was brave of her to speak first.', cn: '她第一个开口，很勇敢。' },
      { w: 'bold', zh: '大胆的', scene: '步子迈得大，方案颜色浓，不怕引人注意。', tone: '褒义，有时略带冒险', col: 'a bold plan, bold colours', en: 'The design is bold and simple.', cn: '这个设计大胆而简洁。' }
    ]},
    { line: '把目标做成、把任务完成、达到那个高度。', items: [
      { w: 'achieve', zh: '实现', scene: '你瞄准的成绩或目标，最后真的到手了。', tone: '褒义', col: 'achieve a goal, achieve success', en: 'She achieved her target score.', cn: '她达到了目标分数。' },
      { w: 'accomplish', zh: '完成', scene: '一件具体任务被做完，清单上可以打钩。', tone: '偏正式', col: 'accomplish a task, accomplish a mission', en: 'They accomplished the task in a week.', cn: '他们一周内完成了这项任务。' },
      { w: 'attain', zh: '达到；实现', scene: '经过努力爬到某个水平或地位，像达到标准。', tone: '正式', col: 'attain a level, attain independence', en: 'Few athletes attain that level.', cn: '很少有运动员达到那个水平。' }
    ]},
    { line: '拆开分析、仔细检查、深入研究。', items: [
      { w: 'analyse', zh: '分析', scene: '把一件事拆成部分，看每部分怎样起作用。英式拼写是 analyse。', tone: '偏正式', col: 'analyse data, analyse the results', en: 'We analysed the results by age.', cn: '我们按年龄分析了结果。' },
      { w: 'examine', zh: '检查；审查', scene: '拿近了看，像医生检查伤口，或老师批改试卷。', tone: '中性', col: 'examine the evidence, examine a patient', en: 'The committee examined the evidence.', cn: '委员会审查了证据。' },
      { w: 'study', zh: '研究', scene: '花较长时间看资料、做观察，想把问题弄懂。它也可以表示上学读书。', tone: '中性', col: 'study the effects, a study of', en: 'Scientists studied the effects of sleep.', cn: '科学家研究了睡眠的影响。' }
    ]},
    { line: '先当作真的来用、凭感觉猜想、在没有反证时假定。', items: [
      { w: 'assume', zh: '假定', scene: '还没证实，你先把一件事当成真的，以便继续往下想。', tone: '中性', col: 'assume that, assume responsibility', en: 'Do not assume that everyone agrees.', cn: '不要假定每个人都同意。' },
      { w: 'suppose', zh: '料想；假定', scene: '你根据有限情况猜“大概是这样”，语气较轻。', tone: '偏口语', col: 'suppose that, I suppose', en: 'I suppose the shop is still open.', cn: '我想那家店还开着。' },
      { w: 'presume', zh: '假定', scene: '在没有相反证据时，按常理认为某事成立，语气更正式。', tone: '正式', col: 'presume that, presume innocence', en: 'We must presume he is innocent.', cn: '我们必须假定他是无罪的。' }
    ]},
    { line: '这句话所处的背景，和一个人或事件背后的经历。', items: [
      { w: 'context', zh: '上下文；背景', scene: '一句话四周的其他句子，离开它们意思会变。', tone: '偏正式', col: 'in context, the context of', en: 'Read the word in context.', cn: '把这个词放在上下文里读。' },
      { w: 'background', zh: '背景；经历', scene: '事情发生前已经存在的情况和人的来历，像舞台后面的布景。', tone: '中性', col: 'background information, family background', en: 'The report gives the background.', cn: '报告提供了背景。' }
    ]},
    { line: '规则上需要、强烈要求、礼貌地请求。', items: [
      { w: 'require', zh: '需要；要求', scene: '没有它就不行，或规章写明必须具备。', tone: '中性偏正式', col: 'require somebody to, be required', en: 'The course requires a recent photo.', cn: '这门课需要一张近照。' },
      { w: 'demand', zh: '要求；需求', scene: '语气硬，或市场上很多人抢着要。', tone: '语气较强', col: 'demand that, in demand', en: 'Workers demanded better pay.', cn: '工人要求提高工资。' },
      { w: 'request', zh: '请求', scene: '客气地把需要说出来，等对方答应。', tone: '偏正式、礼貌', col: 'request that, at the request of', en: 'She requested a window seat.', cn: '她请求要一个靠窗的座位。' }
    ]},
    { line: '经过努力得到、拿到手、有所增加地获得。', items: [
      { w: 'acquire', zh: '获得；习得', scene: '渐渐得到技能、知识或物品，不是天生就有。', tone: '偏正式', col: 'acquire a skill, acquire knowledge', en: 'Children acquire language by listening.', cn: '孩子通过听来习得语言。' },
      { w: 'obtain', zh: '获得', scene: '通过申请或购买，把需要的东西拿到手。', tone: '正式', col: 'obtain permission, obtain information', en: 'You must obtain permission first.', cn: '你必须先获得许可。' },
      { w: 'gain', zh: '获得；增加', scene: '原来没有的东西多出来了，可以是经验、体重或支持。', tone: '中性', col: 'gain experience, gain weight', en: 'She gained useful experience.', cn: '她获得了有用的经验。' }
    ]},
    { line: '事情发生了。occur 更常用于书面。', items: [
      { w: 'happen', zh: '发生', scene: '一件事出现在时间线上，是最普通的说法。', tone: '偏口语', col: 'happen to, happen in', en: 'The accident happened at noon.', cn: '事故发生在中午。' },
      { w: 'occur', zh: '发生', scene: '同样是发生，像报告里写“故障发生于夜间”。', tone: '偏正式', col: 'occur in, occur to', en: 'The problem occurs in cold weather.', cn: '这个问题出现在寒冷的天气。' }
    ]},
    { line: '作出回应、口头答复、情绪或化学上的反应。', items: [
      { w: 'respond', zh: '回应', scene: '有人呼唤或出现情况，你给出回应，可以是话，也可以是行动。', tone: '中性', col: 'respond to, respond that', en: 'The company responded to the complaint.', cn: '公司对投诉作出了回应。' },
      { w: 'reply', zh: '答复', scene: '一封信或一个问题回来了，你写上或说出答案。', tone: '中性', col: 'reply to, in reply', en: 'She replied to the email at once.', cn: '她立刻回复了那封邮件。' },
      { w: 'react', zh: '反应', scene: '刺激来了，人或物质马上起变化，像对新闻的情绪反应。', tone: '中性', col: 'react to, react with', en: 'How did the crowd react to the news?', cn: '人群对这个消息有什么反应？' }
    ]},
    { line: '一心去找，和在各处搜寻。', items: [
      { w: 'seek', zh: '寻求', scene: '你朝着帮助、工作或答案走去，语气较正式。', tone: '偏正式', col: 'seek help, seek to', en: 'They sought advice from a lawyer.', cn: '他们向律师寻求建议。' },
      { w: 'search', zh: '搜索；搜查', scene: '在包里、网上或房间里一处一处翻找。', tone: '中性', col: 'search for, search the room', en: 'Police searched the building.', cn: '警方搜查了那栋楼。' },
      { w: 'look into', zh: '调查', scene: '你掀开盖子，往一件事里面看，想弄清到底发生了什么。', tone: '偏口语', col: 'look into a problem, look into whether', en: 'The school will look into the complaint.', cn: '学校会调查这起投诉。' }
    ]},
    { line: '把注意力聚到一个点上。', items: [
      { w: 'focus', zh: '焦点；集中', scene: '镜头对上一个点，其余变模糊。也可以是名词“焦点”。', tone: '中性', col: 'focus on, the focus of', en: 'Focus on the main idea.', cn: '把注意力放在主要意思上。' },
      { w: 'concentrate', zh: '集中；专心', scene: '心里的杂音关掉，只盯着这一件事做。', tone: '中性', col: 'concentrate on, concentrate hard', en: 'I cannot concentrate in a noisy room.', cn: '房间太吵，我无法专心。' },
      { w: 'attention', zh: '注意力', scene: '眼睛和心思停在一件事上，没有飘走。', tone: '中性', col: 'pay attention, attention to', en: 'Please pay attention to the last line.', cn: '请注意最后一行。' }
    ]},
    { line: '设法让某事一定发生，和正式担保。', items: [
      { w: 'ensure', zh: '确保', scene: '你把步骤排好，使结果不会漏掉，像确保门已锁上。', tone: '偏正式', col: 'ensure that, ensure safety', en: 'Please ensure that the door is locked.', cn: '请确保门已锁上。' },
      { w: 'guarantee', zh: '保证；担保', scene: '一张保证书，或你承诺结果一定会这样。', tone: '语气更强', col: 'guarantee that, under guarantee', en: 'The shop guarantees the repair for a year.', cn: '这家店为维修提供一年保证。' }
    ]},
    { line: '靠别人或别的东西站住。', items: [
      { w: 'rely', zh: '依靠', scene: '你把重量放在某人或某物上，相信它不会塌。', tone: '中性', col: 'rely on, rely upon', en: 'Farmers rely on the rainy season.', cn: '农民依靠雨季。' },
      { w: 'depend', zh: '依靠；取决于', scene: '结果挂在某个条件上，像“是否出门取决于天气”。', tone: '中性', col: 'depend on, it depends', en: 'Success depends on regular practice.', cn: '成功取决于经常练习。' }
    ]},
    { line: '拿走、从系统里删掉、彻底除掉。', items: [
      { w: 'remove', zh: '移除', scene: '把东西从原来的位置拿开，像取下一幅画。', tone: '中性', col: 'remove from, remove something', en: 'Please remove your bag from the seat.', cn: '请把包从座位上拿走。' },
      { w: 'delete', zh: '删除', scene: '屏幕上的一行字或一个文件被抹掉。', tone: '中性，多用于文字和电脑', col: 'delete a file, delete a message', en: 'I deleted the old message.', cn: '我删除了那条旧消息。' },
      { w: 'eliminate', zh: '消除；淘汰', scene: '把问题或竞争者完全清出场，不留位置。', tone: '偏正式', col: 'eliminate the risk, be eliminated', en: 'The new filter eliminates most dust.', cn: '新滤网除掉了大部分灰尘。' }
    ]},
    { line: '不让进入，和从名单或句子里略去。', items: [
      { w: 'exclude', zh: '排除', scene: '门关上，某一类人或内容不被算进去。', tone: '偏正式', col: 'exclude from, exclude the possibility', en: 'The price excludes tax.', cn: '这个价格不含税。' },
      { w: 'omit', zh: '省略', scene: '写的时候把一个名字或步骤漏掉，页面上空了一块。', tone: '偏正式', col: 'omit to, omit from', en: 'Do not omit your signature.', cn: '不要漏掉你的签名。' }
    ]},
    { line: '用演示来说明，和用图或例子把意思画出来。', items: [
      { w: 'demonstrate', zh: '演示；证明', scene: '你动手做一遍，让别人看见它如何运作，或用证据证明。', tone: '偏正式', col: 'demonstrate how, demonstrate that', en: 'The teacher demonstrated the experiment.', cn: '老师演示了这个实验。' },
      { w: 'illustrate', zh: '说明；加插图', scene: '用一个例子或一张图，把抽象的话变成能看见的画面。', tone: '偏正式', col: 'illustrate a point, illustrate with', en: 'A diagram illustrates the process.', cn: '一张图说明了这个过程。' }
    ]},
    { line: '迹象表明，和发出一个信号。', items: [
      { w: 'indicate', zh: '表明；指示', scene: '数据或手势指向一个结论，像箭头指出方向。', tone: '偏正式', col: 'indicate that, indicate a change', en: 'The lights indicate that the door is locked.', cn: '这些灯表明门已锁上。' },
      { w: 'signal', zh: '信号；发信号', scene: '一个看得见或听得见的记号传过去，让别人行动。', tone: '中性', col: 'a signal that, signal to', en: 'A red light signals danger.', cn: '红灯表示危险。' }
    ]},
    { line: '把藏着的东西揭开，和让它暴露在外面。', items: [
      { w: 'reveal', zh: '揭示；透露', scene: '幕布拉开，原来看不见的事实出现。', tone: '中性', col: 'reveal that, reveal a secret', en: 'The letter revealed the truth.', cn: '这封信揭示了真相。' },
      { w: 'expose', zh: '揭露；使暴露', scene: '盖子被拿掉，问题或皮肤暴露在光和风里。', tone: '中性，揭短时偏严肃', col: 'expose somebody to, expose a problem', en: 'The report exposed a serious risk.', cn: '报告揭露了一个严重风险。' }
    ]},
    { line: '说明这样做有道理，和为某人辩护。', items: [
      { w: 'justify', zh: '证明……合理', scene: '你拿出理由，说明这个决定站得住。', tone: '偏正式', col: 'justify a decision, justify doing', en: 'How can they justify the extra cost?', cn: '他们如何证明这笔额外费用是合理的？' },
      { w: 'defend', zh: '辩护；保卫', scene: '有人受攻击，你站到前面，用话或行动挡住。', tone: '中性', col: 'defend a decision, defend against', en: 'She defended her decision in the meeting.', cn: '她在会上为自己的决定辩护。' }
    ]},
    { line: '把范围卡紧。constrain 更强调受到束缚。', items: [
      { w: 'limit', zh: '限制', scene: '画一条线，超过它就不可以，像限速标志。', tone: '中性', col: 'limit to, a time limit', en: 'There is a limit to the word count.', cn: '字数有一个上限。' },
      { w: 'constrain', zh: '约束；限制', scene: '绳子或规则把行动捆住，人想走也走不开。', tone: '正式', col: 'be constrained by, constrain growth', en: 'Growth is constrained by the water supply.', cn: '增长受到供水的约束。' }
    ]},
    { line: '把人和步骤协调好、把活动组织起来、把事情安排妥当。', items: [
      { w: 'coordinate', zh: '协调', scene: '几条线要对齐，你在中间让时间和人手不打架。', tone: '偏正式', col: 'coordinate with, coordinate a project', en: 'She coordinates the volunteers.', cn: '她协调这些志愿者。' },
      { w: 'organise', zh: '组织；安排', scene: '把散乱的人和材料排成一个能运转的活动。英式拼写是 organise。', tone: '中性', col: 'organise an event, organise information', en: 'They organised a public meeting.', cn: '他们组织了一次公开会议。' },
      { w: 'arrange', zh: '安排；排列', scene: '把椅子排好，或把会面的时间约好。', tone: '中性', col: 'arrange a meeting, arrange for', en: 'Can you arrange a meeting for Monday?', cn: '你能把会议安排在星期一吗？' }
    ]},
    { line: '两边对得上。match 还可以表示比赛或火柴。', items: [
      { w: 'correspond', zh: '对应；符合', scene: '表格左边的一项和右边的一项对得上号。', tone: '偏正式', col: 'correspond to, correspond with', en: 'The results correspond to the theory.', cn: '结果与理论相符。' },
      { w: 'match', zh: '匹配；相称', scene: '两只袜子颜色一样，或两个人的技能正好配合。', tone: '中性', col: 'match with, a perfect match', en: 'The photo matches the description.', cn: '照片和描述对得上。' }
    ]},
    { line: '一开始的，和顺序上的第一个。', items: [
      { w: 'initial', zh: '最初的', scene: '事情刚起头的那一截，后面还会变。', tone: '偏正式', col: 'an initial stage, initial results', en: 'The initial results look promising.', cn: '最初的结果看起来不错。' },
      { w: 'first', zh: '第一；首先', scene: '排在最前面的那一个，或你先做的那一步。', tone: '中性，最普通', col: 'at first, the first step', en: 'The first step is to read the question.', cn: '第一步是读题。' }
    ]},
    { line: '最后的结局，和根本意义上的终点。', items: [
      { w: 'final', zh: '最终的', scene: '比赛的终场哨，或决定不再更改的那一稿。', tone: '中性', col: 'the final decision, final result', en: 'The final decision comes on Friday.', cn: '最终决定星期五作出。' },
      { w: 'ultimate', zh: '最终的；根本的', scene: '一路走下去，最尽头的那个目标或原因。', tone: '正式，语气强', col: 'the ultimate goal, ultimate responsibility', en: 'The ultimate goal is clean water.', cn: '最终目标是干净的水。' }
    ]},
    { line: '时间上在前面：以前的、优先在前的、从前的那位。', items: [
      { w: 'previous', zh: '以前的', scene: '紧挨着现在之前的那一次，像上一页、上一位客人。', tone: '中性', col: 'the previous day, previous experience', en: 'See the previous page.', cn: '见上一页。' },
      { w: 'prior', zh: '在前的；事先的', scene: '在某事发生之前已经存在，常用于“事先批准”。', tone: '正式', col: 'prior to, prior approval', en: 'Prior experience is not required.', cn: '不要求事先有经验。' },
      { w: 'former', zh: '从前的；前者', scene: '曾经是、现在不是了，像前任校长。', tone: '偏正式', col: 'the former president, in former times', en: 'She is a former teacher.', cn: '她从前是教师。' }
    ]},
    { line: '发生在后面的。', items: [
      { w: 'subsequent', zh: '随后的', scene: '一件事之后跟着来的那些事，写在报告的后半段。', tone: '正式', col: 'subsequent events, subsequent to', en: 'Subsequent tests confirmed the result.', cn: '随后的测试证实了这个结果。' },
      { w: 'following', zh: '随后的；下列的', scene: '紧跟着的下一个，或下面列出来的那些。', tone: '中性', col: 'the following day, the following points', en: 'The following day was a holiday.', cn: '第二天是假日。' }
    ]},
    { line: '占最重要位置的。', items: [
      { w: 'major', zh: '主要的', scene: '一块大的部分，比其他部分更要紧，像主要原因。', tone: '中性', col: 'a major cause, a major problem', en: 'Cost is a major problem.', cn: '成本是一个主要问题。' },
      { w: 'main', zh: '主要的', scene: '一条主干，其他都是枝节，是最普通的说法。', tone: '中性', col: 'the main reason, main road', en: 'What is the main reason for the delay?', cn: '耽搁的主要原因是什么？' },
      { w: 'primary', zh: '首要的；初级的', scene: '排在第一位的目的或原因。它也可以表示小学阶段。', tone: '偏正式', col: 'the primary aim, primary school', en: 'The primary aim is to reduce waste.', cn: '首要目标是减少浪费。' }
    ]},
    { line: '尺寸小，和重要性较小。', items: [
      { w: 'small', zh: '小的', scene: '体积、数量或年纪不大，是最普通的“小”。', tone: '中性', col: 'a small town, a small number', en: 'They live in a small town.', cn: '他们住在一个小镇上。' },
      { w: 'minor', zh: '较小的；次要的', scene: '不是主线，伤得不重，或问题不大。', tone: '偏正式', col: 'a minor problem, minor injuries', en: 'The damage was minor.', cn: '损坏不大。' }
    ]},
    { line: '用规则调控、把局面控制住、占住主导位置。', items: [
      { w: 'regulate', zh: '调控；管理', scene: '用规章把流量、价格或行为调到合适的范围。', tone: '正式', col: 'regulate the industry, strictly regulated', en: 'The agency regulates food safety.', cn: '该机构监管食品安全。' },
      { w: 'control', zh: '控制', scene: '手握开关，让事情按你的意思走，不让它乱跑。', tone: '中性', col: 'control over, under control', en: 'They lost control of the car.', cn: '他们的车失控了。' },
      { w: 'dominate', zh: '主导；支配', scene: '一个声音或一座高楼盖过其余的，占住中心。', tone: '中性，有时偏强势', col: 'dominate the market, dominate the discussion', en: 'One company dominates the market.', cn: '一家公司主导着这个市场。' }
    ]},
    { line: '拿出资金，和掌管钱的事务。', items: [
      { w: 'fund', zh: '资助；资金', scene: '一笔钱被拨过来，让项目能开工。', tone: '中性', col: 'fund a project, public funds', en: 'The government funded the new clinic.', cn: '政府资助了这家新诊所。' },
      { w: 'finance', zh: '财政；提供资金', scene: '管钱、筹钱的那一套事务，或为购买提供资金。', tone: '偏正式', col: 'finance a purchase, public finance', en: 'The bank will finance the purchase.', cn: '银行将为这次购买提供资金。' }
    ]},
    { line: '搭起的框架，和已经成形的结构。', items: [
      { w: 'framework', zh: '框架', scene: '先立起梁，细节以后再填，像一套政策框架。', tone: '偏正式', col: 'a legal framework, within a framework', en: 'We need a clear framework for the rules.', cn: '我们需要一个清楚的规则框架。' },
      { w: 'structure', zh: '结构', scene: '各部分怎样搭在一起，房子的骨架或文章的结构都能看见。', tone: '中性', col: 'the structure of, social structure', en: 'The structure of the essay is clear.', cn: '这篇文章的结构很清楚。' }
    ]},
    { line: '看上去像，和可以放在一起比。', items: [
      { w: 'similar', zh: '相似的', scene: '两张脸或两个结果差不多，但不是同一个。', tone: '中性', col: 'similar to, similar in', en: 'The two plans are similar in cost.', cn: '这两个计划的成本差不多。' },
      { w: 'comparable', zh: '可比较的；比得上的', scene: '可以放在同一把尺子上量，大小处于同一档。', tone: '偏正式', col: 'comparable to, comparable with', en: 'The salaries are comparable to last year.', cn: '薪水与去年相当。' }
    ]},
    { line: '明显不是一回事、彼此不同、彼此分开。', items: [
      { w: 'distinct', zh: '明显不同的', scene: '两种颜色分得开，一眼不会看混。', tone: '偏正式', col: 'distinct from, a distinct difference', en: 'The two species are distinct.', cn: '这两个物种明显不同。' },
      { w: 'different', zh: '不同的', scene: '不是同一个样子，是最普通的说法。', tone: '中性', col: 'different from, different to', en: 'Their answers were different.', cn: '他们的答案不一样。' },
      { w: 'separate', zh: '分开的；分离的', scene: '原来可能在一起，现在各在各的地方，或各算各的。', tone: '中性', col: 'separate from, a separate room', en: 'The twins have separate rooms.', cn: '这对双胞胎各有自己的房间。' }
    ]},
    { line: '下定义，和把细节说具体。', items: [
      { w: 'define', zh: '定义', scene: '画一个圈，说清这个词的边界在哪里。', tone: '偏正式', col: 'define something as, clearly defined', en: 'Define the term in your own words.', cn: '用你自己的话给这个术语下定义。' },
      { w: 'specify', zh: '具体说明', scene: '不说“一些”，而指出哪一个、多少、什么时候。', tone: '偏正式', col: 'specify that, unless specified', en: 'Please specify the date.', cn: '请写明日期。' }
    ]},
    { line: '处于安全中。secure 还可以表示“获得”。', items: [
      { w: 'safe', zh: '安全的', scene: '危险被挡在外面，人或东西不会受伤。', tone: '中性', col: 'safe from, a safe place', en: 'The children are safe at home.', cn: '孩子们在家里是安全的。' },
      { w: 'secure', zh: '安全的；获得', scene: '锁好了，不容易被夺走。这里比的是安全；它还可以表示得到某物。', tone: '偏正式', col: 'a secure job, feel secure', en: 'She wanted a more secure job.', cn: '她想要一份更稳妥的工作。' }
    ]},
    { line: '事情所在的地点。', items: [
      { w: 'site', zh: '地点；场地', scene: '一块被指定用来建设或事件发生的地，像建筑工地。', tone: '中性偏正式', col: 'a building site, on site', en: 'The site was cleared last month.', cn: '这块场地上个月清理过了。' },
      { w: 'location', zh: '位置；场所', scene: '地图上的那个点，或商店所在的位置。', tone: '中性', col: 'the location of, a central location', en: 'The location of the hotel is convenient.', cn: '酒店的位置很方便。' },
      { w: 'place', zh: '地方', scene: '任何一处所在，是最普通的词。', tone: '中性，偏口语', col: 'a place to, in place', en: 'This is a good place to study.', cn: '这是一个适合学习的地方。' }
    ]},
    { line: '经济里的一块行业。', items: [
      { w: 'sector', zh: '行业；部门', scene: '经济被切成几块，比如医疗、教育、能源。', tone: '偏正式', col: 'the private sector, the energy sector', en: 'Jobs grew in the service sector.', cn: '服务业的就业增加了。' },
      { w: 'industry', zh: '工业；产业', scene: '一整片生产或商业活动，工厂和公司连成一片。', tone: '中性', col: 'the car industry, heavy industry', en: 'Tourism is an important industry here.', cn: '旅游业是这里的重要产业。' }
    ]},
    { line: '一段时间：一段时期、一个时代、其中的一个阶段、事情走到的那一步。', items: [
      { w: 'period', zh: '时期', scene: '日历上画出的一段，有开始也有结束。', tone: '中性', col: 'a period of, over a long period', en: 'There was a period of heavy rain.', cn: '有一段大雨时期。' },
      { w: 'era', zh: '时代', scene: '历史书里的一大段岁月，带有那个年代的特征。', tone: '偏正式', col: 'a new era, the modern era', en: 'The war marked the end of an era.', cn: '那场战争标志着一个时代的结束。' },
      { w: 'phase', zh: '阶段', scene: '一个较长过程中的一截，像月亮的相位，过了就会进入下一截。', tone: '中性偏正式', col: 'a phase of, an early phase', en: 'The project is in its final phase.', cn: '项目处于最后阶段。' },
      { w: 'stage', zh: '阶段', scene: '事情走到的某一站，也可以是演戏的舞台。', tone: '中性', col: 'at this stage, an early stage', en: 'At this stage, we only have a draft.', cn: '在这个阶段，我们只有一份草稿。' }
    ]},
    { line: '整体里的一块。', items: [
      { w: 'section', zh: '部分；一节', scene: '文章、火车或城市被分成的一节。', tone: '中性', col: 'a section of, in this section', en: 'Read the first section of the report.', cn: '读报告的第一节。' },
      { w: 'part', zh: '部分', scene: '从整体上拿下来的一块，是最普通的说法。', tone: '中性', col: 'part of, take part', en: 'This is part of the problem.', cn: '这是问题的一部分。' },
      { w: 'portion', zh: '一份；部分', scene: '分到盘子里的那一份，或整体中分给你的那一块。', tone: '中性', col: 'a portion of, a large portion', en: 'A large portion of the budget is for wages.', cn: '预算的很大一部分用于工资。' },
      { w: 'segment', zh: '片段；部分', scene: '被切下来的一段，像橙子的一瓣或市场的一块。', tone: '偏正式', col: 'a segment of, market segment', en: 'This segment of the market is growing.', cn: '市场的这一块正在增长。' }
    ]},
    { line: '你扮演的角色，和事物所起的功能。', items: [
      { w: 'role', zh: '角色；作用', scene: '戏里的一个人物，或你在团队里承担的那一份作用。', tone: '中性', col: 'play a role, the role of', en: 'Parents play a key role in learning.', cn: '父母在学习中起着关键作用。' },
      { w: 'function', zh: '功能', scene: '机器或器官被造出来要做的那件事，按下开关它就运转。', tone: '中性偏正式', col: 'the function of, function as', en: 'The function of the heart is to pump blood.', cn: '心脏的功能是泵血。' }
    ]},
    { line: '交到你手上的一件事，和你该负的责任。', items: [
      { w: 'task', zh: '任务', scene: '清单上的一件具体工作，做完就可以划掉。', tone: '中性', col: 'a difficult task, carry out a task', en: 'The first task is to collect the data.', cn: '第一项任务是收集数据。' },
      { w: 'duty', zh: '责任；义务', scene: '因为职位或道德，你应该做的事，不做会愧对这个位子。', tone: '偏正式', col: 'on duty, a sense of duty', en: 'It is your duty to report the hazard.', cn: '报告这个隐患是你的责任。' }
    ]},
    { line: '两者之间连上了。', items: [
      { w: 'link', zh: '联系；链接', scene: '一条链或一个网页链接，把两头接上。', tone: '中性', col: 'a link between, link to', en: 'There is a link between diet and health.', cn: '饮食和健康之间有联系。' },
      { w: 'connection', zh: '连接；关系', scene: '两个人或两件事之间有一条看不见的线。', tone: '中性', col: 'a connection between, in connection with', en: 'I see no connection between the two events.', cn: '我看不出这两件事有什么关系。' },
      { w: 'associate', zh: '关联', scene: '你把两件一起出现的事在脑子里拴上，看到一个就想到另一个。', tone: '偏正式', col: 'associate with, associate A with B', en: 'People associate the town with its market.', cn: '人们把这个镇子和它的市场联系在一起。' }
    ]},
    { line: '整体中占的那一块比例。', items: [
      { w: 'proportion', zh: '比例', scene: '一块和整体比起来有多大，像饼图里的一角。', tone: '偏正式', col: 'a proportion of, in proportion to', en: 'A high proportion of students work part-time.', cn: '很大比例的学生在做兼职。' },
      { w: 'share', zh: '份额', scene: '分东西时落到你手里的那一份。', tone: '中性', col: 'a share of, market share', en: 'Each partner received an equal share.', cn: '每个合伙人得到相等的一份。' },
      { w: 'percentage', zh: '百分比', scene: '用百分之几把那一份写出来。', tone: '中性偏正式', col: 'a high percentage, percentage of', en: 'A small percentage of the trees survived.', cn: '只有一小部分树活了下来。' }
    ]},
    { line: '结构不简单。complicated 更强调难懂。', items: [
      { w: 'complex', zh: '复杂的', scene: '很多部分绞在一起，像一座复杂的交通枢纽。', tone: '中性偏正式', col: 'a complex system, complex issues', en: 'The tax rules are complex.', cn: '税务规则很复杂。' },
      { w: 'complicated', zh: '复杂难懂的', scene: '线团打了结，人看着就费劲。', tone: '中性，常带“难”的感觉', col: 'a complicated process, complicated instructions', en: 'The instructions are too complicated.', cn: '说明太复杂了。' }
    ]},
    { line: '分成的类别，和聚在一起的一群。', items: [
      { w: 'category', zh: '类别', scene: '标签贴好，东西被放进不同的格子。', tone: '偏正式', col: 'fall into a category, category of', en: 'The books fall into three categories.', cn: '这些书分成三类。' },
      { w: 'group', zh: '组；群', scene: '一些人或东西站到一起，形成一个群。', tone: '中性', col: 'a group of, group together', en: 'A group of students waited outside.', cn: '一群学生等在外面。' }
    ]},
    { line: '把作品或消息公之于众。release 还可以表示释放。', items: [
      { w: 'publish', zh: '出版；发表', scene: '书或论文从编辑部出来，读者能买到或读到。', tone: '中性', col: 'publish a book, publish the results', en: 'The journal published the study.', cn: '这家期刊发表了这项研究。' },
      { w: 'print', zh: '印刷；打印', scene: '油墨印到纸上，或打印机吐出一页。', tone: '中性', col: 'print a copy, in print', en: 'Please print two copies.', cn: '请打印两份。' },
      { w: 'release', zh: '发布；释放', scene: '一部电影或一条消息被放出来给公众。这个词也可以表示把人放开。', tone: '中性', col: 'release a report, release somebody', en: 'The company released the figures today.', cn: '公司今天公布了这些数字。' }
    ]},
    { line: '写成的文件，和归好档的一份文件。', items: [
      { w: 'document', zh: '文件；记录', scene: '一份写下来、可以存档的材料，像合同或报告。', tone: '中性', col: 'a legal document, document the process', en: 'Sign the document at the bottom.', cn: '在文件底部签名。' },
      { w: 'file', zh: '档案；文件', scene: '文件夹里的那一份，或电脑里的一个文件。', tone: '中性', col: 'on file, a data file', en: 'Your application is on file.', cn: '你的申请已存档。' }
    ]},
    { line: '能拿出来支持说法的材料，和更硬的证明。', items: [
      { w: 'evidence', zh: '证据', scene: '桌上的照片、数据和证词，用来支持一个说法。', tone: '中性偏正式', col: 'evidence of, evidence that', en: 'There is no evidence of damage.', cn: '没有损坏的证据。' },
      { w: 'proof', zh: '证明', scene: '证据强到可以下结论，怀疑可以放下。它也可以指印刷校样。', tone: '中性', col: 'proof of, proof that', en: 'Do you have proof of payment?', cn: '你有付款证明吗？' }
    ]},
    { line: '原始数字、整理过的消息、用数字做的统计。', items: [
      { w: 'data', zh: '数据', scene: '实验或调查记下来的一串数字和记录，还没全部讲成故事。', tone: '中性偏正式', col: 'collect data, data on', en: 'The data show a clear trend.', cn: '数据显示出一个清楚的趋势。' },
      { w: 'information', zh: '信息', scene: '你能读懂、能用来做决定的消息。', tone: '中性', col: 'information about, for more information', en: 'We need more information about the delay.', cn: '我们需要更多关于耽搁的信息。' },
      { w: 'statistics', zh: '统计数字', scene: '大量数据被算成百分比和图表。', tone: '偏正式', col: 'official statistics, statistics on', en: 'Official statistics show a fall in crime.', cn: '官方统计显示犯罪下降了。' }
    ]},
    { line: '系统地问一群人，和一次民意调查。', items: [
      { w: 'survey', zh: '调查', scene: '问卷或实地查看，用来了解一片情况。', tone: '中性', col: 'a survey of, carry out a survey', en: 'The survey asked 500 households.', cn: '这项调查询问了 500 户家庭。' },
      { w: 'poll', zh: '民意调查', scene: '就一个问题问很多人，看有多少人支持。', tone: '中性，新闻里常见', col: 'an opinion poll, polling day', en: 'The poll put the two parties level.', cn: '民意调查显示两党不相上下。' }
    ]},
    { line: '收束出一个结论，和从前提推出来。', items: [
      { w: 'conclude', zh: '得出结论；结束', scene: '讨论走到最后，你说出结论。它也可以表示结束。', tone: '偏正式', col: 'conclude that, conclude with', en: 'The study concludes that the policy works.', cn: '研究得出的结论是这项政策有效。' },
      { w: 'deduce', zh: '推断', scene: '从已有事实一步步推出没有直接看见的结论，像侦探。', tone: '正式', col: 'deduce from, deduce that', en: 'We can deduce the cause from the marks.', cn: '我们可以从痕迹推断原因。' },
      { w: 'conclusion', zh: '结论', scene: '讨论或文章走到最后收住的那一句。', tone: '中性偏正式', col: 'in conclusion, come to a conclusion', en: 'The conclusion is on the last page.', cn: '结论在最后一页。' }
    ]},
    { line: '在旁边搭把手，和在下面托住。', items: [
      { w: 'assist', zh: '协助', scene: '主事的人在前面，你在旁边帮忙完成。', tone: '偏正式', col: 'assist with, assist somebody', en: 'Two nurses assisted the doctor.', cn: '两名护士协助医生。' },
      { w: 'support', zh: '支持', scene: '从下面或背后撑住，可以是钱、票或一句鼓励。', tone: '中性', col: 'support for, support a family', en: 'Local shops support the plan.', cn: '当地商店支持这个计划。' }
    ]},
    { line: '用机器算，和按步骤把数算出来。', items: [
      { w: 'compute', zh: '计算', scene: '计算机或公式在跑，把结果算出来，语气偏技术。', tone: '偏技术、正式', col: 'compute the cost, compute a result', en: 'The program computes the average.', cn: '这个程序计算平均值。' },
      { w: 'calculate', zh: '计算；推算', scene: '人用笔或计算器按步骤算，也可以是心里盘算。', tone: '中性', col: 'calculate the cost, calculate that', en: 'Calculate the total before you pay.', cn: '付款前先把总数算出来。' }
    ]},
    { line: '组成整体的一块零件，和基本成分。', items: [
      { w: 'component', zh: '组成部分', scene: '机器拆开后的一个零件，或系统里的一个部分。', tone: '偏正式', col: 'a key component, component of', en: 'Trust is a key component of the team.', cn: '信任是这个团队的关键部分。' },
      { w: 'element', zh: '要素；元素', scene: '构成整体的一种基本成分，也可以是化学元素。', tone: '中性偏正式', col: 'an element of, the human element', en: 'There is an element of risk.', cn: '这里面有风险的成分。' }
    ]},
    { line: '能被看出来的特点。', items: [
      { w: 'feature', zh: '特征；特写', scene: '脸上或产品上特别显眼的一处，让你记住它。', tone: '中性', col: 'a key feature, feature of', en: 'A special feature of the town is its bridge.', cn: '这座城的一个特色是它的桥。' },
      { w: 'trait', zh: '特质', scene: '一个人性格里比较稳定的一点，像耐心或好奇。', tone: '偏正式', col: 'a personality trait, genetic traits', en: 'Honesty is an important trait.', cn: '诚实是一项重要特质。' },
      { w: 'quality', zh: '品质；质量', scene: '东西好不好，或人身上的一种品质。', tone: '中性', col: 'high quality, personal qualities', en: 'The quality of the water is poor.', cn: '水质很差。' },
      { w: 'aspect', zh: '方面', scene: '你换一个角度看同一件事，看到的那一面。', tone: '偏正式', col: 'an aspect of, every aspect', en: 'We discussed every aspect of the plan.', cn: '我们讨论了计划的各个方面。' }
    ]},
    { line: '一个具体机构，和制度或公共机构这个概念。', items: [
      { w: 'institute', zh: '机构；研究所', scene: '挂着牌子的一座研究或教育机构。', tone: '中性', col: 'a research institute, institute of', en: 'She works at a research institute.', cn: '她在一家研究所工作。' },
      { w: 'institution', zh: '机构；制度', scene: '可以是学校、银行这类机构，也可以是社会里的一项制度。', tone: '偏正式', col: 'a financial institution, social institutions', en: 'The university is a public institution.', cn: '这所大学是公共机构。' }
    ]},
    { line: '覆盖的幅度。', items: [
      { w: 'range', zh: '范围', scene: '从最低到最高拉开的一段，像价格范围或一座山脉。', tone: '中性', col: 'a range of, in the range of', en: 'The shop sells a wide range of teas.', cn: '这家店出售种类很多的茶。' },
      { w: 'span', zh: '跨度', scene: '桥从这边跨到那边的距离，或一段时间的跨度。', tone: '偏正式', col: 'a span of, life span', en: 'The bridge has a span of 200 metres.', cn: '这座桥的跨度是 200 米。' }
    ]},
    { line: '从一处挪到另一处。', items: [
      { w: 'transfer', zh: '转移；调动', scene: '钱、人的岗位或乘客换到另一条线。', tone: '中性偏正式', col: 'transfer to, transfer money', en: 'She transferred to another department.', cn: '她调到了另一个部门。' },
      { w: 'move', zh: '移动', scene: '位置变了，是最普通的说法。', tone: '中性', col: 'move to, move house', en: 'They moved to a smaller flat.', cn: '他们搬进了一套更小的公寓。' },
      { w: 'shift', zh: '转移；转变', scene: '重心或意见挪了一下，像舆论转向。它也可以表示轮班。', tone: '中性', col: 'shift from, a shift in', en: 'There was a shift in public opinion.', cn: '舆论发生了转变。' }
    ]},
    { line: '另一条可选的路。', items: [
      { w: 'alternative', zh: '替代的；可供选择的', scene: '原计划走不通时，旁边还有一条路。', tone: '中性偏正式', col: 'an alternative to, alternative energy', en: 'Is there an alternative to flying?', cn: '除了坐飞机还有别的办法吗？' },
      { w: 'option', zh: '选择；选项', scene: '菜单上的一项，你可以选也可以不选。', tone: '中性', col: 'an option to, have no option', en: 'You have the option to pay later.', cn: '你可以选择稍后付款。' },
      { w: 'choice', zh: '选择', scene: '你在几样东西里挑定的那一个，或挑选这件事本身。', tone: '中性', col: 'a choice of, make a choice', en: 'The menu offers a choice of soups.', cn: '菜单上有几种汤可以选。' }
    ]},
    { line: '用来衡量的标准。', items: [
      { w: 'criteria', zh: '标准', scene: '录取或评分时列出的几条尺子。这个词本身常作复数用。', tone: '正式', col: 'meet the criteria, selection criteria', en: 'Applicants must meet the criteria.', cn: '申请者必须符合这些标准。' },
      { w: 'standard', zh: '标准', scene: '大家用来对照的那一档水平，像安全标准。', tone: '中性', col: 'safety standards, up to standard', en: 'The water is below the safety standard.', cn: '这水低于安全标准。' }
    ]},
    { line: '把伤害减轻。', items: [
      { w: 'mitigate', zh: '缓解；减轻', scene: '灾害或风险还在，但你把损失压低。', tone: '正式', col: 'mitigate the risk, mitigate the effects', en: 'Trees can mitigate the effects of heat.', cn: '树木可以减轻高温的影响。' },
      { w: 'alleviate', zh: '减轻', scene: '疼痛或贫困被减轻，人松一口气。', tone: '正式', col: 'alleviate pain, alleviate poverty', en: 'The medicine alleviated the pain.', cn: '药物减轻了疼痛。' },
      { w: 'ease', zh: '减轻；使缓和', scene: '紧绷的绳子松一松，疼痛或紧张缓下来。', tone: '中性', col: 'ease the pain, ease tension', en: 'A short walk eased the tension.', cn: '走一小段路缓解了紧张。' }
    ]},
    { line: '到处都能见到，和几乎无处不在。', items: [
      { w: 'widespread', zh: '普遍的；分布广的', scene: '地图上很多点都亮了，这个问题不只在一个地方。', tone: '中性', col: 'widespread support, widespread use', en: 'The disease is widespread in the region.', cn: '这种病在该地区分布很广。' },
      { w: 'ubiquitous', zh: '无处不在的', scene: '转身就能看见，像街上的手机。', tone: '正式，语气强', col: 'ubiquitous in, seemingly ubiquitous', en: 'Smartphones are ubiquitous in the city.', cn: '智能手机在这座城市里无处不在。' }
    ]},
    { line: '按规矩做的一套仪式。', items: [
      { w: 'ritual', zh: '仪式；惯常做法', scene: '每天或每个节日都按同一套动作来，带一点庄重。', tone: '中性偏正式', col: 'a daily ritual, religious ritual', en: 'Tea at four is a family ritual.', cn: '四点喝茶是这个家庭的惯常仪式。' },
      { w: 'ceremony', zh: '典礼；仪式', scene: '人们穿得正式，聚在一起完成婚礼或毕业典礼。', tone: '中性', col: 'a wedding ceremony, opening ceremony', en: 'The opening ceremony starts at ten.', cn: '开幕式十点开始。' }
    ]},
    { line: '市政府这一层的，和当地的。', items: [
      { w: 'municipal', zh: '市政的', scene: '市政府的楼、垃圾车和图书馆，属于一座城市的公共事务。', tone: '正式', col: 'municipal services, municipal government', en: 'Municipal services include waste collection.', cn: '市政服务包括垃圾收集。' },
      { w: 'local', zh: '当地的', scene: '你家附近这一圈，不是全国范围。', tone: '中性', col: 'local shops, the local community', en: 'We buy bread from a local shop.', cn: '我们在当地的一家店买面包。' }
    ]},
    { line: '供人使用的设施，和生活上的便利设施。', items: [
      { w: 'facilities', zh: '设施', scene: '体育馆、厕所、实验室这些供人使用的设备与场所。', tone: '中性', col: 'sports facilities, facilities for', en: 'The school has good sports facilities.', cn: '这所学校的体育设施很好。' },
      { w: 'amenities', zh: '便利设施', scene: '让生活更舒服的那些配备，如公园、商店和泳池。', tone: '偏正式', col: 'local amenities, basic amenities', en: 'The flat is close to local amenities.', cn: '这套公寓离当地的便利设施很近。' }
    ]},
    { line: '花了很多却产出很少，和把资源白白扔掉。', items: [
      { w: 'inefficient', zh: '低效的', scene: '机器空转，人忙了很久，成品却很少。', tone: '贬义', col: 'inefficient use, highly inefficient', en: 'The old system is inefficient.', cn: '旧系统效率很低。' },
      { w: 'wasteful', zh: '浪费的', scene: '灯没人还开着，食物整盘倒掉。', tone: '贬义', col: 'wasteful of, a wasteful process', en: 'Leaving the lights on is wasteful.', cn: '灯开着没人用，很浪费。' }
    ]},
    { line: '让人想靠近。entice 更有“被引诱”的画面。', items: [
      { w: 'attract', zh: '吸引', scene: '橱窗或一个人把你的目光和脚步拉过去。', tone: '中性', col: 'attract attention, attract visitors', en: 'The market attracts many visitors.', cn: '这个市场吸引了很多游客。' },
      { w: 'entice', zh: '引诱；诱惑', scene: '香味或优惠把你从门外一步步引进来。', tone: '中性，有时略带小心', col: 'entice somebody into, entice somebody to', en: 'Low prices enticed new customers.', cn: '低价吸引来了新顾客。' }
    ]},
    { line: '住的地方。', items: [
      { w: 'accommodation', zh: '住宿', scene: '旅行时睡的那间房，或长期租住的住处。', tone: '中性，英式英语常见', col: 'rented accommodation, student accommodation', en: 'Student accommodation is expensive here.', cn: '这里的学生住宿很贵。' },
      { w: 'housing', zh: '住房', scene: '一片房子和住房供应，常出现在政策和新闻里。', tone: '偏正式', col: 'social housing, the housing market', en: 'The city needs more affordable housing.', cn: '这座城市需要更多人们负担得起的住房。' }
    ]},
    { line: '人迁入一个国家的现象，和更广泛的迁移。', items: [
      { w: 'immigration', zh: '移民（入境）', scene: '人们进入另一个国家并留下，看的是进入的那一侧。', tone: '中性偏正式', col: 'immigration policy, immigration control', en: 'Immigration increased after the new law.', cn: '新法律之后，移民人数增加了。' },
      { w: 'migration', zh: '迁移', scene: '鸟或人从一地迁到另一地，方向不一定是进入某一国。', tone: '中性', col: 'bird migration, rural migration', en: 'Seasonal migration brings workers to the city.', cn: '季节性迁移把工人带到城市。' }
    ]},
    { line: '两种说法撞在一起、双方冲突、看似矛盾的悖论。', items: [
      { w: 'contradiction', zh: '矛盾', scene: '同一张嘴说出两句对不上的话。', tone: '中性', col: 'a contradiction between, in contradiction to', en: 'There is a contradiction in the evidence.', cn: '证据里有一处矛盾。' },
      { w: 'conflict', zh: '冲突', scene: '两股力量顶在一起，可以是意见，也可以是战斗。', tone: '中性，话题偏紧张', col: 'in conflict with, armed conflict', en: 'The two accounts conflict.', cn: '两种说法互相冲突。' },
      { w: 'paradox', zh: '悖论', scene: '看上去不可能同时为真，细想又说得通的怪圈。', tone: '正式', col: 'a paradox of, seeming paradox', en: 'It is a paradox that more choice can increase stress.', cn: '选择更多反而会增加压力，这是一个悖论。' }
    ]},
    { line: '把规则压到别人头上。', items: [
      { w: 'dictate', zh: '强行规定；口授', scene: '一个人说了算，别人只能照做；也可以是口述让人写下。', tone: '语气强，偏正式', col: 'dictate terms, dictate to', en: 'The contract dictates the payment date.', cn: '合同规定了付款日期。' },
      { w: 'impose', zh: '强加', scene: '一项税或一个决定从上面压下来，对方不一定情愿。', tone: '偏正式，常偏负面', col: 'impose a tax, impose on', en: 'The government imposed a new tax.', cn: '政府加征了一项新税。' }
    ]},
    { line: '危险逼近的感觉。', items: [
      { w: 'threat', zh: '威胁', scene: '乌云或一句话让人感到伤害可能到来。', tone: '中性，话题负面', col: 'a threat to, under threat', en: 'Pollution is a threat to the lake.', cn: '污染对这片湖是一个威胁。' },
      { w: 'menace', zh: '威胁', scene: '威胁感更重，像一个让整条街不安的危险。', tone: '正式，语气强', col: 'a menace to, menace of', en: 'Speeding is a menace to pedestrians.', cn: '超速对行人是一种威胁。' }
    ]},
    { line: '待人热情，让客人觉得受欢迎。', items: [
      { w: 'hospitable', zh: '好客的', scene: '门打开，茶倒上，主人把客人让进屋里。', tone: '褒义', col: 'hospitable to, a hospitable host', en: 'The village was hospitable to visitors.', cn: '这个村子对访客很热情。' },
      { w: 'friendly', zh: '友好的', scene: '脸上带着笑，说话让人放松。', tone: '褒义', col: 'friendly to, a friendly smile', en: 'The staff were friendly and helpful.', cn: '工作人员友好而且肯帮忙。' }
    ]},
    { line: '把手放上去把问题处理掉。', items: [
      { w: 'tackle', zh: '处理；应对', scene: '你迎上一个难题，准备把它解决，像扑上去拦住。', tone: '中性，新闻里常见', col: 'tackle a problem, tackle crime', en: 'The city must tackle air pollution.', cn: '这座城市必须应对空气污染。' },
      { w: 'handle', zh: '处理；触碰', scene: '手里拿着，或把一件事务接过来处理。它也可以表示门把手。', tone: '中性', col: 'handle a situation, handle with care', en: 'She handled the complaint calmly.', cn: '她平静地处理了投诉。' },
      { w: 'deal with', zh: '处理', scene: '问题来了，你走上前把它接住，而不是躲开。', tone: '中性，偏口语', col: 'deal with a problem, deal with somebody', en: 'She dealt with the delay calmly.', cn: '她平静地处理了这次耽搁。' }
    ]},
    { line: '自愿来帮忙的人，和帮手。', items: [
      { w: 'volunteer', zh: '志愿者；自愿做', scene: '没有人点名，自己举手来做事，通常不拿工资。', tone: '褒义', col: 'volunteer to, volunteer work', en: 'Students volunteer at the hospital.', cn: '学生在医院做志愿者。' },
      { w: 'helper', zh: '帮手', scene: '在旁边帮你把活干完的那个人。', tone: '中性，偏口语', col: 'a classroom helper, willing helpers', en: 'The teacher needs two helpers.', cn: '老师需要两名帮手。' }
    ]},
    { line: '能活多久，和活得很长。', items: [
      { w: 'lifespan', zh: '寿命', scene: '从出生到结束的那一段长度，可以是人或产品。', tone: '中性偏正式', col: 'average lifespan, life span of', en: 'The average lifespan has increased.', cn: '平均寿命提高了。' },
      { w: 'longevity', zh: '长寿', scene: '活得很久这件事本身，常和健康的生活连在一起。', tone: '正式，偏褒义', col: 'longevity of, promote longevity', en: 'Diet is linked to longevity.', cn: '饮食与长寿有关。' }
    ]},
    { line: '把结果引出来。', items: [
      { w: 'induce', zh: '引起；诱导', scene: '一种药或一种条件把某个反应引出来。', tone: '正式', col: 'induce sleep, induce somebody to', en: 'The drug can induce sleep.', cn: '这种药可以引起睡眠。' },
      { w: 'cause', zh: '引起；原因', scene: '一件事推倒第一块多米诺，后面的结果跟着来。', tone: '中性', col: 'cause of, cause something to', en: 'Smoking can cause serious illness.', cn: '吸烟会引起严重疾病。' }
    ]},
    { line: '把两者分开看清。', items: [
      { w: 'distinguish', zh: '区分', scene: '两种很像的声音，你听出哪个是哪个。', tone: '偏正式', col: 'distinguish between, distinguish from', en: 'Can you distinguish between the two accents?', cn: '你能区分这两种口音吗？' },
      { w: 'differentiate', zh: '区分；使不同', scene: '指出差别，或让自己的产品和别人的不一样。', tone: '正式', col: 'differentiate between, differentiate from', en: 'The test differentiates the two viruses.', cn: '这项检测能区分这两种病毒。' }
    ]},
    { line: '本来就属于那个地方的。', items: [
      { w: 'indigenous', zh: '本土的；土著的', scene: '人和文化在这片土地上生活了很久，不是后来迁来的。', tone: '正式', col: 'indigenous people, indigenous to', en: 'The plant is indigenous to the island.', cn: '这种植物是该岛本土的。' },
      { w: 'native', zh: '本地的；原生的', scene: '在这里出生或自然长出，不是引进的。', tone: '中性', col: 'native to, a native speaker', en: 'Koalas are native to Australia.', cn: '考拉是澳大利亚原生的。' }
    ]},
    { line: '情况变坏。decline 还可以表示拒绝。', items: [
      { w: 'deteriorate', zh: '恶化', scene: '墙壁剥落，健康或关系一天比一天差。', tone: '正式', col: 'deteriorate into, health deteriorated', en: 'His health deteriorated quickly.', cn: '他的健康迅速恶化。' },
      { w: 'decline', zh: '下降；衰落', scene: '曲线往下走，城镇或行业渐渐失去活力。这个词也可以表示谢绝。', tone: '中性偏正式', col: 'a decline in, decline to', en: 'There was a decline in fish stocks.', cn: '鱼类资源下降了。' }
    ]},
    { line: '换成另一种形式。', items: [
      { w: 'convert', zh: '转换', scene: '一种东西被改成另一种，像仓库改成住宅，或货币兑换。', tone: '中性', col: 'convert into, convert to', en: 'The warehouse was converted into flats.', cn: '仓库被改成了公寓。' },
      { w: 'transform', zh: '改变；转型', scene: '样子和性质变了一大截，前后几乎不像同一个。', tone: '语气较强', col: 'transform into, transform the area', en: 'The park transformed the neighbourhood.', cn: '这座公园改变了整个社区。' }
    ]},
    { line: '转起来，和转弯、转动。', items: [
      { w: 'rotate', zh: '旋转', scene: '绕着一个轴转圈，像地球或轮班轮换。', tone: '中性偏正式', col: 'rotate around, rotate crops', en: 'The Earth rotates once a day.', cn: '地球每天自转一圈。' },
      { w: 'turn', zh: '转弯；转动', scene: '方向变了，或钥匙在锁里转一下。', tone: '中性，最普通', col: 'turn left, turn into', en: 'Turn left at the lights.', cn: '在红绿灯处向左转。' }
    ]},
    { line: '固定在上面，和接上关系。', items: [
      { w: 'attach', zh: '附上；系上', scene: '用夹子或绳子把一件东西固定到另一件上。', tone: '中性', col: 'attach to, attached file', en: 'Attach the form to your email.', cn: '把表格附在邮件里。' },
      { w: 'connect', zh: '连接', scene: '两头接上，电路通了，或两个人认识了。', tone: '中性', col: 'connect to, connect with', en: 'Connect the cable to the screen.', cn: '把电缆接到屏幕上。' }
    ]},
    { line: '体内脂肪过多这种状况，和“胖”这个更直接的说法。', items: [
      { w: 'obesity', zh: '肥胖', scene: '医学和新闻里说的肥胖状况，关注的是健康风险。', tone: '正式，中性偏严肃', col: 'childhood obesity, obesity rates', en: 'Obesity rates have risen.', cn: '肥胖率上升了。' },
      { w: 'fat', zh: '胖的；脂肪', scene: '身体脂肪多，口语里直接这么说，有时不礼貌。也可以指脂肪这种物质。', tone: '偏口语，说人时要小心', col: 'body fat, fat content', en: 'The diet is high in fat.', cn: '这种饮食脂肪含量高。' }
    ]},
    { line: '和思考、心智有关。', items: [
      { w: 'cognitive', zh: '认知的', scene: '脑子如何注意、记忆和理解，多出现在研究和医学里。', tone: '正式', col: 'cognitive skills, cognitive development', en: 'The test measures cognitive skills.', cn: '这项测试测量认知能力。' },
      { w: 'mental', zh: '精神的；心理的', scene: '和头脑、心理有关，不是身体上的伤口。', tone: '中性', col: 'mental health, mental effort', en: 'The work requires mental effort.', cn: '这项工作需要动脑。' }
    ]},
    { line: '下定的决心，和作出的决定。', items: [
      { w: 'resolution', zh: '决心；决议', scene: '新年下的决心，或会议上通过的一项决议。', tone: '中性偏正式', col: 'a New Year resolution, pass a resolution', en: 'She made a resolution to walk every day.', cn: '她下决心每天走路。' },
      { w: 'decision', zh: '决定', scene: '几个选项里选定一个，事情就此定下来。', tone: '中性', col: 'make a decision, a decision to', en: 'The decision was announced yesterday.', cn: '这个决定昨天宣布了。' },
      { w: 'decide', zh: '决定', scene: '你在几个做法里选定一个，不再晃。', tone: '中性', col: 'decide to, decide on', en: 'They decided to take the earlier train.', cn: '他们决定坐更早的那班火车。' }
    ]},
    { line: '为学位写的长论文。', items: [
      { w: 'dissertation', zh: '学位论文', scene: '学生为学位写出的长篇研究，尤其在英式英语里常指本科或硕士论文。', tone: '正式', col: 'write a dissertation, dissertation on', en: 'She is writing a dissertation on cities.', cn: '她正在写一篇关于城市的学位论文。' },
      { w: 'thesis', zh: '论文；论点', scene: '一篇学位论文，也可以是你要论证的那个中心论点。', tone: '正式', col: 'a doctoral thesis, the thesis that', en: 'His thesis is that cities need more parks.', cn: '他的论点是城市需要更多公园。' }
    ]},
    { line: '教你的人。tutor 更常指个别辅导。', items: [
      { w: 'tutor', zh: '导师；辅导老师', scene: '坐在你旁边，针对你一个人或一个小组讲解。', tone: '中性', col: 'a private tutor, tutor somebody in', en: 'He works as a maths tutor.', cn: '他做数学辅导老师。' },
      { w: 'teacher', zh: '教师', scene: '在教室里教一班学生的人，是最普通的说法。', tone: '中性', col: 'a school teacher, English teacher', en: 'The teacher explained the chart.', cn: '老师讲解了这张图表。' }
    ]},
    { line: '一小群人深入讨论。workshop 也可以表示车间。', items: [
      { w: 'seminar', zh: '研讨课', scene: '大学里一小组人围坐，讨论一篇文章，不是大讲堂。', tone: '正式', col: 'a graduate seminar, seminar on', en: 'The seminar is on Friday afternoon.', cn: '研讨课在星期五下午。' },
      { w: 'workshop', zh: '专题讨论会；车间', scene: '大家动手做或一起讨论一个题目的聚会。这个词也可以表示车间。', tone: '中性', col: 'a training workshop, workshop on', en: 'We attended a workshop on writing.', cn: '我们参加了一个写作专题讨论会。' }
    ]},
    { line: '有价值，和价值高到难以估量。invaluable 不是“没有价值”。', items: [
      { w: 'valuable', zh: '有价值的；贵重的', scene: '值得留下来，或价钱高，像一件贵重的戒指。', tone: '褒义', col: 'valuable information, valuable to', en: 'The feedback was valuable.', cn: '这些反馈很有价值。' },
      { w: 'invaluable', zh: '极其宝贵的', scene: '价值大到不能用普通价钱衡量，像一位不可替代的导师。', tone: '褒义，语气强', col: 'invaluable to, invaluable experience', en: 'Her advice was invaluable.', cn: '她的建议极其宝贵。' }
    ]},
    { line: '换一种说法。paraphrase 会改写句子，restate 是再说一遍要点。', items: [
      { w: 'paraphrase', zh: '改述', scene: '你用自己的句子把别人的意思再说出来，不是逐字照抄。', tone: '偏正式', col: 'paraphrase a text, in a paraphrase', en: 'Paraphrase the paragraph in your own words.', cn: '用你自己的话改述这一段。' },
      { w: 'restate', zh: '重述', scene: '把已经说过的要点再说清楚，帮助别人记住。', tone: '偏正式', col: 'restate the question, restate that', en: 'Let me restate the main point.', cn: '让我把要点再说一遍。' }
    ]},
    { line: '受过教育，和具备读写能力。', items: [
      { w: 'literate', zh: '有读写能力的', scene: '人能读、能写。也可以说对某个领域很在行。', tone: '中性偏正式', col: 'literate in, highly literate', en: 'Every child should become literate.', cn: '每个孩子都应该学会读写。' },
      { w: 'educated', zh: '受过教育的', scene: '上过学、受过训练，谈吐和知识看得出来。', tone: '中性', col: 'well educated, an educated guess', en: 'She is well educated in history.', cn: '她在历史方面受过良好教育。' }
    ]},
    { line: '银行支票。check 在美式英语里也表示支票，另外还可以表示检查。', items: [
      { w: 'cheque', zh: '支票', scene: '一张纸，签了名，银行会按上面的金额付款。这是英式拼写。', tone: '中性', col: 'pay by cheque, a cheque for', en: 'He paid by cheque.', cn: '他用支票付款。' },
      { w: 'check', zh: '支票；检查', scene: '在美式英语里，支票常写作 check。这个词更常见的意思是核对、检查。', tone: '中性', col: 'a bank check, check the answer', en: 'Please check the total.', cn: '请核对总数。' }
    ]},
    { line: '心里装着别人的难处。kind 还可以表示“种类”。', items: [
      { w: 'compassionate', zh: '有同情心的', scene: '看见别人的痛苦，你放慢脚步，想减轻它。', tone: '褒义，偏正式', col: 'compassionate care, compassionate towards', en: 'The nurse was compassionate and calm.', cn: '这位护士有同情心，而且很平静。' },
      { w: 'caring', zh: '关怀的', scene: '日常里把别人放在心上，记得问一句、帮一下。', tone: '褒义', col: 'a caring parent, caring attitude', en: 'He grew up with caring parents.', cn: '他在关怀备至的父母身边长大。' },
      { w: 'kind', zh: '亲切的；种类', scene: '说话和行动让人感到温暖。这里比的是“亲切”；它还可以表示种类。', tone: '褒义', col: 'kind to, a kind offer', en: 'It was kind of you to wait.', cn: '你愿意等，真是体贴。' }
    ]},
    { line: '没有完整证据时，心里已经有一个判断。', items: [
      { w: 'intuition', zh: '直觉', scene: '说不清步骤，但心里已经知道该往哪边走。', tone: '中性', col: 'intuition about, trust your intuition', en: 'Her intuition about the risk was right.', cn: '她对这个风险的直觉是对的。' },
      { w: 'hunch', zh: '预感', scene: '一个还没证实的感觉，像觉得钥匙在另一个口袋里。', tone: '偏口语', col: 'have a hunch, a hunch that', en: 'I have a hunch that the shop is closed.', cn: '我有一种预感，那家店关门了。' }
    ]},
    { line: '第一个开出一条路的人，和做出新东西的人。', items: [
      { w: 'pioneer', zh: '先驱；开创', scene: '前面没有路，这个人先走上去，后来的人跟着来。', tone: '褒义', col: 'a pioneer of, pioneer a method', en: 'She was a pioneer of the new treatment.', cn: '她是这种新疗法的先驱。' },
      { w: 'inventor', zh: '发明家', scene: '工作台上做出一件原来没有的装置或方法。', tone: '中性偏褒义', col: 'the inventor of, a famous inventor', en: 'The inventor tested the machine herself.', cn: '发明家亲自测试了这台机器。' }
    ]},
    { line: '被大众看见。publicity 多半是有意的宣传，exposure 可以是被动曝光。', items: [
      { w: 'exposure', zh: '曝光；接触', scene: '人或问题被光照到，大家都看见了。也可以表示接触某种环境。', tone: '中性，有时偏负面', col: 'media exposure, exposure to', en: 'The scandal received wide exposure.', cn: '这件丑闻受到广泛曝光。' },
      { w: 'publicity', zh: '宣传；公众注意', scene: '海报和新闻把一件事推到公众面前，通常是有意安排的。', tone: '中性', col: 'publicity campaign, bad publicity', en: 'The event received good publicity.', cn: '这次活动得到了很好的宣传。' }
    ]},
    { line: '开出一条新路，和带来深刻改变。', items: [
      { w: 'groundbreaking', zh: '开创性的', scene: '第一锹挖下去，后面的做法都因此改变。', tone: '褒义', col: 'groundbreaking research, a groundbreaking study', en: 'The study was groundbreaking.', cn: '这项研究具有开创性。' },
      { w: 'transformative', zh: '变革性的', scene: '经过它之后，城市或人的生活变成另一个样子。', tone: '褒义，偏正式', col: 'a transformative effect, transformative technology', en: 'The railway had a transformative effect.', cn: '这条铁路带来了变革性的影响。' }
    ]},
    { line: '把看不懂的符号读出来。', items: [
      { w: 'decipher', zh: '破译', scene: '一张模糊或陌生的文字，你一个符号一个符号读懂它。', tone: '偏正式', col: 'decipher a code, decipher handwriting', en: 'No one could decipher the handwriting.', cn: '没有人能辨认那笔字迹。' },
      { w: 'decode', zh: '解码', scene: '按一套规则把密码还原成普通的话。', tone: '中性偏技术', col: 'decode a message, decode the data', en: 'The program can decode the file.', cn: '这个程序能解码该文件。' }
    ]},
    { line: '因为成就而被很多人知道。', items: [
      { w: 'eminent', zh: '杰出的', scene: '在一个领域里站得高，同行都认得这个名字。', tone: '褒义，正式', col: 'an eminent scientist, eminent in', en: 'An eminent scientist led the team.', cn: '一位杰出的科学家领导这个团队。' },
      { w: 'famous', zh: '著名的', scene: '街上的人也知道这个名字，曝光度高。', tone: '中性偏褒义', col: 'famous for, world famous', en: 'The city is famous for its bridge.', cn: '这座城市以它的桥闻名。' }
    ]},
    { line: '离开既定路线，和本身就有变化。', items: [
      { w: 'vary', zh: '变化；使不同', scene: '价格或温度不总是同一个数，上下有差别。', tone: '中性', col: 'vary from, vary between', en: 'Prices vary from shop to shop.', cn: '价格一家店和另一家店不一样。' },
      { w: 'deviate', zh: '偏离', scene: '本来有一条线，人或数据离开了那条线。', tone: '正式', col: 'deviate from, deviate slightly', en: 'Do not deviate from the instructions.', cn: '不要偏离说明。' }
    ]},
    { line: '土地能长出庄稼，和土地肥沃。', items: [
      { w: 'arable', zh: '可耕的', scene: '这块地可以犁、可以种，不是陡坡或盐碱地。', tone: '正式', col: 'arable land, arable farming', en: 'Arable land is limited in the hills.', cn: '山区的可耕地有限。' },
      { w: 'fertile', zh: '肥沃的；能生育的', scene: '土里养分足，种子一下去就长得旺。也可以形容能生育。', tone: '褒义', col: 'fertile soil, fertile land', en: 'The valley has fertile soil.', cn: '山谷的土壤肥沃。' }
    ]},
    { line: '人可以在这里生活。', items: [
      { w: 'habitable', zh: '适合居住的', scene: '有水、能避风雨，人住进去不会立刻无法生存。', tone: '正式', col: 'habitable rooms, barely habitable', en: 'The house is old but habitable.', cn: '这房子旧，但还能住。' },
      { w: 'livable', zh: '宜居的', scene: '不只是能住，日常生活也过得去，街道和空气都能接受。', tone: '中性', col: 'a livable city, livable wage', en: 'People want a livable city, not only cheap rents.', cn: '人们想要一座宜居的城市，而不只是便宜的房租。' }
    ]},
    { line: '用掉。consume 可以是吃掉，也可以是耗掉资源。', items: [
      { w: 'consume', zh: '消耗；吃掉', scene: '食物被吃掉，或电、时间被耗掉，数量减少。', tone: '偏正式', col: 'consume energy, consume food', en: 'The building consumes a lot of energy.', cn: '这栋楼消耗大量能源。' },
      { w: 'use', zh: '使用', scene: '把工具或时间拿来完成一件事，是最普通的说法。', tone: '中性', col: 'use for, use up', en: 'Use a pencil for the first draft.', cn: '初稿用铅笔写。' },
      { w: 'eat', zh: '吃', scene: '食物进嘴里。consume 在书面语里有时就指吃。', tone: '中性，口语', col: 'eat breakfast, eat out', en: 'We eat together on Sundays.', cn: '我们星期天一起吃饭。' }
    ]},
    { line: '拿出来说明问题的一个例子。', items: [
      { w: 'instance', zh: '例子；实例', scene: '在一串事情里抽出一件，用来说明。', tone: '偏正式', col: 'for instance, an instance of', en: 'This is one instance of poor planning.', cn: '这是规划不善的一个例子。' },
      { w: 'example', zh: '例子', scene: '老师写在黑板上的那一个样本，让大家照着理解。', tone: '中性', col: 'for example, an example of', en: 'Give an example of a renewable resource.', cn: '举一个可再生资源的例子。' }
    ]},
    { line: '彼此作用，和把信息传给对方。', items: [
      { w: 'interact', zh: '互动', scene: '两个人或两种物质碰到一起，互相影响。', tone: '偏正式', col: 'interact with, social interaction', en: 'Children learn when they interact with others.', cn: '孩子在与别人互动时学习。' },
      { w: 'communicate', zh: '交流；传达', scene: '把消息从一边送到另一边，用话说、用字写或用信号。', tone: '中性', col: 'communicate with, communicate an idea', en: 'The team communicates by email.', cn: '团队通过电子邮件交流。' },
      { w: 'communication', zh: '交流；通信', scene: '消息已经在两边之间传开，或传消息的这件事。', tone: '中性', col: 'communication between, communication skills', en: 'Clear communication saves time.', cn: '清楚的交流能节省时间。' }
    ]},
    { line: '规定好的办事步骤，和事情自然展开的过程。', items: [
      { w: 'procedure', zh: '程序', scene: '墙上贴着步骤：先填表，再排队，再签字。', tone: '正式', col: 'follow a procedure, safety procedure', en: 'Follow the safety procedure.', cn: '遵守安全程序。' },
      { w: 'process', zh: '过程', scene: '事情从一头走到另一头的整段经过，不一定写在规章里。', tone: '中性', col: 'the process of, in the process', en: 'Learning is a slow process.', cn: '学习是一个缓慢的过程。' }
    ]},
{ line: '一眼就能看出、有迹象表明、表面上看来就是这样。', items: [
      { w: 'obvious', zh: '明显的', scene: '事情摆在眼前，不用人指你也能看见。', tone: '中性', col: 'obvious to, it is obvious that', en: 'It is obvious that the plan will cost more.', cn: '显然这个计划会花更多钱。' },
      { w: 'evident', zh: '明显的', scene: '证据已经把结论照亮了，看的人能明白。', tone: '偏正式', col: 'evident from, evident that', en: 'The effect is evident from the figures.', cn: '从数字里能明显看出这个影响。' },
      { w: 'apparent', zh: '显而易见的；表面上的', scene: '第一眼看上去就是这样。有时只是表面如此，里面未必。', tone: '偏正式', col: 'apparent that, apparent to', en: 'It soon became apparent that we were lost.', cn: '我们很快就明显看出来迷路了。' }
    ]},
    { line: '向前走了一步、预先推进、变得比原来好。', items: [
      { w: 'progress', zh: '进步；进展', scene: '沿着路往目标走，位置比昨天更近。', tone: '褒义', col: 'make progress, progress in', en: 'The class made progress in writing.', cn: '这个班的写作有进步。' },
      { w: 'advance', zh: '前进；推进', scene: '队伍或计划向前挪了一截，也可以是预先支付。', tone: '中性偏正式', col: 'advance in, in advance', en: 'Technology has advanced quickly.', cn: '技术进步得很快。' },
      { w: 'improvement', zh: '改进；好转', scene: '同一件事比原来更好，裂缝被补上了。', tone: '褒义', col: 'an improvement in, room for improvement', en: 'There was an improvement in air quality.', cn: '空气质量有所好转。' }
    ]},
    { line: '心里发慌：突然害怕、被吓到、一直不安。', items: [
      { w: 'afraid', zh: '害怕的', scene: '你不想靠近那样东西，脚步停住。', tone: '中性，最普通', col: 'afraid of, afraid to', en: 'She is afraid of the dark.', cn: '她怕黑。' },
      { w: 'frightened', zh: '受惊的', scene: '突然一声响，人被吓得退后面。', tone: '中性', col: 'frightened of, frightened by', en: 'The child was frightened by the noise.', cn: '孩子被那声响吓到了。' },
      { w: 'scared', zh: '害怕的', scene: '和 afraid 接近，口语里更常说吓得不敢动。', tone: '偏口语', col: 'scared of, scared to', en: 'He is scared of speaking in public.', cn: '他害怕当众讲话。' },
      { w: 'anxious', zh: '焦虑的', scene: '结果还没来，你已经在心里来回走，放不下来。', tone: '中性', col: 'anxious about, anxious to', en: 'Parents were anxious about the results.', cn: '家长为成绩感到焦虑。' }
    ]},
    { line: '不对、不真实。', items: [
      { w: 'false', zh: '假的；错误的', scene: '看起来像真的，其实不是，或说法与事实不符。', tone: '中性', col: 'false information, a false name', en: 'The report contained false information.', cn: '报告里有不实信息。' },
      { w: 'wrong', zh: '错误的', scene: '答案和正确的那个对不上，需要改正。', tone: '中性', col: 'wrong about, the wrong answer', en: 'That answer is wrong.', cn: '那个答案是错的。' }
    ]},
    { line: '做成了，和做成的那份成绩。', items: [
      { w: 'success', zh: '成功', scene: '目标达到了，人松一口气，结果是好的。', tone: '褒义', col: 'a success, success in', en: 'The campaign was a success.', cn: '这次活动是成功的。' },
      { w: 'achievement', zh: '成就', scene: '你费力做成的那一件，可以放进履历里。', tone: '褒义', col: 'a major achievement, a sense of achievement', en: 'Finishing the course was an achievement.', cn: '读完这门课是一项成就。' }
    ]},
    { line: '没有做成。', items: [
      { w: 'fail', zh: '失败；未能', scene: '努力了，结果没有达到那条线。', tone: '中性，话题偏负面', col: 'fail to, fail an exam', en: 'The engine failed to start.', cn: '引擎没能发动。' },
      { w: 'failure', zh: '失败', scene: '那次没有做成的事本身，或一个不成功的结果。', tone: '中性，话题偏负面', col: 'end in failure, a failure to', en: 'The experiment was a failure.', cn: '这次实验失败了。' }
    ]},
    { line: '人住的房子：一栋房子、一套公寓、楼里的一套单元。', items: [
      { w: 'house', zh: '房子', scene: '通常是独门的一栋住宅，有自己的门和院子。', tone: '中性', col: 'a house in, move house', en: 'They bought a house near the station.', cn: '他们在车站附近买了一栋房子。' },
      { w: 'flat', zh: '公寓', scene: '一栋楼里的一套住房，英式英语里最常这么说。', tone: '中性', col: 'a flat in, rent a flat', en: 'She rents a flat in the city.', cn: '她在城里租了一套公寓。' },
      { w: 'apartment', zh: '公寓', scene: '和 flat 指同一类住处，美式英语里更常用 apartment。', tone: '中性', col: 'an apartment block, rent an apartment', en: 'The apartment has two bedrooms.', cn: '这套公寓有两间卧室。' },
      { w: 'homes', zh: '家', scene: '人们住下来的那些家，不一定单指房子本身。', tone: '中性', col: 'family homes, at home', en: 'The street has new homes.', cn: '这条街上有新的住家。' }
    ]},
    { line: '人聚居的地方：城市比镇大。', items: [
      { w: 'city', zh: '城市', scene: '楼高、人多、有市政府的大聚居地。', tone: '中性', col: 'a capital city, city centre', en: 'The city has a busy port.', cn: '这座城市有一个繁忙的港口。' },
      { w: 'town', zh: '镇', scene: '比城市小的一片街道和商店，人互相还叫得出一些名字。', tone: '中性', col: 'a small town, town centre', en: 'He grew up in a small town.', cn: '他在一个小镇长大。' }
    ]},
    { line: '一大群人组成的社会，和住得较近、彼此有往来的社区。', items: [
      { w: 'society', zh: '社会', scene: '一个国家或时代里人们共同生活的整体。', tone: '偏正式', col: 'modern society, in society', en: 'Technology is changing society.', cn: '技术正在改变社会。' },
      { w: 'community', zh: '社区', scene: '住在同一带或有共同身份的一群人，范围比社会小。', tone: '中性', col: 'the local community, a sense of community', en: 'The local community raised the money.', cn: '当地社区筹集了这笔钱。' }
    ]},
    { line: '法律，和立法机关制定法律这件事或这些法律。', items: [
      { w: 'law', zh: '法律', scene: '国家写下的规则，违反了会有后果。', tone: '中性', col: 'against the law, break the law', en: 'It is against the law to drive without a licence.', cn: '无证驾驶是违法的。' },
      { w: 'legislation', zh: '立法；法律', scene: '议会正在制定或已经通过的那一批法律。', tone: '正式', col: 'pass legislation, under legislation', en: 'New legislation will limit the pollution.', cn: '新的法律将限制污染。' },
      { w: 'legal', zh: '法律的', scene: '和法有关，或做法是合法的。', tone: '中性偏正式', col: 'legal advice, a legal right', en: 'She asked for legal advice.', cn: '她征求了法律意见。' }
    ]},
    { line: '能使事情发生的力量：权力、能量、作用力。', items: [
      { w: 'power', zh: '力量；权力；电力', scene: '能推动结果的能力，可以是政治权力，也可以是电。', tone: '中性', col: 'in power, power to, nuclear power', en: 'The committee has the power to decide.', cn: '委员会有权作出决定。' },
      { w: 'energy', zh: '能量；精力', scene: '让机器转或让人动起来的能量，也可以是人的精力。', tone: '中性', col: 'solar energy, full of energy', en: 'The lights use solar energy.', cn: '这些灯使用太阳能。' },
      { w: 'force', zh: '力；武力', scene: '推或拉的作用力，也可以是武力。', tone: '中性', col: 'by force, the force of', en: 'The force of the wind broke the window.', cn: '风力把窗户吹破了。' }
    ]},
    { line: '心里认为是真的，和在脑子里想。', items: [
      { w: 'believe', zh: '相信', scene: '你把一件事当作真的，即使没有把每一步都证明完。', tone: '中性', col: 'believe in, believe that', en: 'I believe that the plan can work.', cn: '我相信这个计划能行。' },
      { w: 'think', zh: '认为；想', scene: '脑子里在转一个看法，语气比 believe 轻。', tone: '偏口语', col: 'think that, think about', en: 'I think the shop closes at six.', cn: '我想那家店六点关门。' }
    ]},
    { line: '知道、懂得、忽然明白、辨认出来。', items: [
      { w: 'know', zh: '知道', scene: '信息已经在你心里，你能说出来。', tone: '中性', col: 'know about, know how', en: 'Do you know the address?', cn: '你知道地址吗？' },
      { w: 'understand', zh: '理解', scene: '不只是听见，而是明白它为什么是这样。', tone: '中性', col: 'understand why, understand that', en: 'I understand why she left early.', cn: '我理解她为什么早走。' },
      { w: 'realize', zh: '意识到', scene: '原来没注意，某一刻突然明白了。', tone: '中性', col: 'realize that, realize the importance', en: 'She realized that the door was open.', cn: '她意识到门开着。' },
      { w: 'recognise', zh: '认出', scene: '再次见到时，你知道这是谁或这是什么。英式拼写是 recognise。', tone: '中性', col: 'recognise somebody, recognise that', en: 'I recognised her voice at once.', cn: '我立刻认出了她的声音。' }
    ]},
    { line: '把知识交给别人。', items: [
      { w: 'teach', zh: '教', scene: '在教室或桌边，把一个技能或知识交给学生。', tone: '中性', col: 'teach somebody to, teach a class', en: 'She teaches history at a college.', cn: '她在一所学院教历史。' },
      { w: 'instruct', zh: '指示；讲授', scene: '给出明确步骤，让对方照着做，语气更正式。', tone: '正式', col: 'instruct somebody to, instruct a class', en: 'The officer instructed them to wait.', cn: '警官指示他们等候。' }
    ]},
    { line: '把钱交出去，和交出去的那一笔。', items: [
      { w: 'pay', zh: '支付', scene: '你把钱递给对方，账单被结清。', tone: '中性', col: 'pay for, pay by', en: 'I paid for the tickets online.', cn: '我在网上付了票钱。' },
      { w: 'payment', zh: '付款', scene: '那一次付钱的行为或那一笔款。', tone: '中性偏正式', col: 'make a payment, payment for', en: 'Payment is due on Friday.', cn: '付款截止日是星期五。' }
    ]},
    { line: '心里想要。wish 更像希望，不一定做得到。', items: [
      { w: 'want', zh: '想要', scene: '你缺那样东西，并打算去得到它。', tone: '偏口语', col: 'want to, want something', en: 'I want to finish this today.', cn: '我想今天把这个做完。' },
      { w: 'wish', zh: '希望', scene: '你心里盼着一件事发生，常常自己控制不了结果。', tone: '中性', col: 'wish to, wish for', en: 'I wish to speak to the manager.', cn: '我想和经理谈谈。' },
      { w: 'hope', zh: '希望', scene: '你盼着一件好事发生，并且觉得它有可能。', tone: '中性', col: 'hope to, hope for', en: 'I hope to see you tomorrow.', cn: '我希望明天见到你。' }
    ]},
    { line: '可能受伤或受损：风险、危险、具体的危害。', items: [
      { w: 'risk', zh: '风险', scene: '你知道可能出事，仍要衡量要不要做。', tone: '中性', col: 'at risk, the risk of', en: 'There is a risk of flooding.', cn: '有洪水的风险。' },
      { w: 'danger', zh: '危险', scene: '伤害就在附近，人需要躲开。', tone: '中性', col: 'in danger, danger of', en: 'The children were in danger.', cn: '孩子们处于危险中。' },
      { w: 'hazard', zh: '危害；隐患', scene: '一个具体的危险源，像湿滑的地板或有害化学品。', tone: '偏正式', col: 'a health hazard, a fire hazard', en: 'Ice on the road is a hazard.', cn: '路上的冰是一个隐患。' }
    ]},
    { line: '不好的一面。', items: [
      { w: 'disadvantage', zh: '缺点；不利', scene: '和其他选择比，这一边让你吃亏。', tone: '中性', col: 'at a disadvantage, a disadvantage of', en: 'The main disadvantage is the cost.', cn: '主要缺点是成本。' },
      { w: 'drawback', zh: '弊端', scene: '一件好事旁边拖着的那个毛病，像便宜但很吵。', tone: '中性', col: 'a major drawback, the drawback of', en: 'The drawback is the long journey.', cn: '缺点是路程太长。' }
    ]},
    { line: '地图上的一片地方。district 常指城市里划出的区。', items: [
      { w: 'region', zh: '地区', scene: '地图上较大的一片，有自己的气候或经济。', tone: '中性', col: 'in the region, a coastal region', en: 'The region depends on farming.', cn: '这个地区依靠农业。' },
      { w: 'district', zh: '区', scene: '城市或国家里划出来的一块行政或商业区域。', tone: '中性', col: 'a business district, the district of', en: 'The school is in the old district.', cn: '学校在老城区。' },
      { w: 'areas', zh: '区域；领域', scene: '地图上的一片片地方，或一个个话题所在的领域。', tone: '中性', col: 'in these areas, areas of', en: 'These areas are known for fishing.', cn: '这些地方以渔业闻名。' }
    ]},
    { line: '属于你自己的，和单独的一个人。', items: [
      { w: 'personal', zh: '个人的', scene: '只和你自己有关，不是公事，像个人信件。', tone: '中性', col: 'personal information, a personal opinion', en: 'Please do not share personal information.', cn: '请不要分享个人信息。' },
      { w: 'individual', zh: '个人；单独的', scene: '从人群里分开的一个人，或单独考虑的一项。', tone: '偏正式', col: 'each individual, individual needs', en: 'Each individual received a number.', cn: '每个人都拿到一个号码。' }
    ]},
    { line: '全部都算进去。', items: [
      { w: 'whole', zh: '全部的；整个', scene: '一个都没落下，整个苹果而不是一瓣。', tone: '中性', col: 'the whole day, as a whole', en: 'She spent the whole day reading.', cn: '她把一整天都用来读书。' },
      { w: 'entire', zh: '整个的', scene: '和 whole 接近，语气稍正式，强调整块都包括。', tone: '稍正式', col: 'the entire population, entire cost', en: 'The entire street was closed.', cn: '整条街都封闭了。' },
      { w: 'total', zh: '总的；全部的', scene: '把每一项加在一起得到的那个总数。', tone: '中性', col: 'the total cost, in total', en: 'The total cost is two hundred dollars.', cn: '总费用是两百美元。' }
    ]},
    { line: '现在这个时候的。present 还可以表示礼物或出席。', items: [
      { w: 'current', zh: '当前的', scene: '此刻正在发生或正在使用的，不是过去那一版。', tone: '中性', col: 'the current situation, current affairs', en: 'The current plan is simpler.', cn: '当前的计划更简单。' },
      { w: 'present', zh: '现在的；在场的', scene: '就在现在，或人在现场。它也可以表示礼物。', tone: '中性', col: 'at present, the present system', en: 'At present, the shop is closed.', cn: '目前这家店关着门。' }
    ]},
    { line: '意见一致、正式同意、批准通过。', items: [
      { w: 'agree', zh: '同意', scene: '两点头，你们的看法落到同一个地方。', tone: '中性', col: 'agree with, agree to', en: 'I agree with the first point.', cn: '我同意第一点。' },
      { w: 'consent', zh: '同意；准许', scene: '正式点头允许，常用于法律或医学里的知情同意。', tone: '正式', col: 'give consent, consent to', en: 'The patient gave written consent.', cn: '病人给出了书面同意。' },
      { w: 'approve', zh: '批准；赞成', scene: '有权的人在文件上放行，或你表示这件事是好的。', tone: '中性偏正式', col: 'approve a plan, approve of', en: 'The board approved the budget.', cn: '董事会批准了预算。' },
      { w: 'see eye to eye', zh: '意见一致', scene: '两个人看着同一处，点头，没有各说各的。', tone: '偏口语', col: 'see eye to eye on, see eye to eye with', en: 'We see eye to eye on the budget.', cn: '我们在预算上看法一致。' }
    ]},
    { line: '资源从哪里来，和资源本身。', items: [
      { w: 'source', zh: '来源', scene: '河的源头，或一条消息是从哪里来的。', tone: '中性', col: 'a source of, the source of', en: 'The river has its source in the hills.', cn: '这条河的源头在山里。' },
      { w: 'resource', zh: '资源', scene: '可以拿来用的水、钱、材料或人才。', tone: '中性', col: 'natural resources, human resources', en: 'Water is a scarce resource here.', cn: '水在这里是稀缺资源。' }
    ]},
    { line: '几件，和多种多样。', items: [
      { w: 'several', zh: '几个', scene: '不止一个，但也不是很多，手上数得过来。', tone: '中性', col: 'several times, several of', en: 'She called several times.', cn: '她打了好几次电话。' },
      { w: 'various', zh: '各种各样的', scene: '种类不一样，不是同一模子出来的。', tone: '中性偏正式', col: 'various reasons, various types', en: 'The shop sells various types of bread.', cn: '这家店卖好几种面包。' }
    ]},
    { line: '大声、吵。', items: [
      { w: 'loud', zh: '大声的', scene: '音量高，耳朵觉得冲。', tone: '中性', col: 'a loud noise, loud music', en: 'The music was too loud.', cn: '音乐太大声了。' },
      { w: 'noisy', zh: '吵闹的', scene: '很多声音混在一起，让人烦，不一定是某一个音特别高。', tone: '贬义', col: 'a noisy street, noisy neighbours', en: 'The street is noisy at night.', cn: '这条街晚上很吵。' }
    ]},
    { line: '本来就有的，和人造的。', items: [
      { w: 'natural', zh: '自然的', scene: '不是工厂造的，山、河和天生的能力都属于这一边。', tone: '中性', col: 'natural resources, natural light', en: 'The room has plenty of natural light.', cn: '这个房间有充足的自然光。' },
      { w: 'artificial', zh: '人造的', scene: '人做出来模仿自然的东西，像人工光源或人工湖。', tone: '中性', col: 'artificial light, artificial flowers', en: 'The plants are artificial.', cn: '这些植物是人造的。' }
    ]},
    { line: '人。people 是众人，human 强调作为人类，individual 是单独的一个。', items: [
      { w: 'people', zh: '人们', scene: '许多人站在一起，是最普通的说法。', tone: '中性', col: 'people in, young people', en: 'People waited in the rain.', cn: '人们在雨里等着。' },
      { w: 'human', zh: '人类的；人', scene: '作为人这一类，而不是动物或机器。', tone: '中性', col: 'human rights, human error', en: 'The mistake was human error.', cn: '这个错误是人为失误。' }
    ]},
    { line: '一起做事的一队人，和机构里的员工。', items: [
      { w: 'team', zh: '团队', scene: '为了同一件任务站在一起的几个人。', tone: '中性', col: 'a team of, team work', en: 'A team of nurses arrived.', cn: '一组护士到了。' },
      { w: 'staff', zh: '员工', scene: '一家机构里领工资干活的那些人。', tone: '中性', col: 'a member of staff, staff training', en: 'The hotel staff were helpful.', cn: '酒店员工很肯帮忙。' },
      { w: 'employee', zh: '雇员', scene: '被雇用的那一个人，和雇主相对。', tone: '偏正式', col: 'an employee of, full-time employee', en: 'Every employee received a handbook.', cn: '每位雇员都收到了一本手册。' }
    ]},
    { line: '学习和为了工作而受的训练。', items: [
      { w: 'education', zh: '教育', scene: '上学和受培养的整个过程。', tone: '中性', col: 'higher education, education system', en: 'Public education is free here.', cn: '这里的公共教育是免费的。' },
      { w: 'training', zh: '训练', scene: '针对一项技能的练习，时间通常比整个教育短。', tone: '中性', col: 'staff training, training for', en: 'New staff receive two weeks of training.', cn: '新员工接受两周培训。' }
    ]},
    { line: '你怎么看，和你对一件事的心态。', items: [
      { w: 'opinion', zh: '意见', scene: '你认为这件事该怎样，可以说出来供别人参考。', tone: '中性', col: 'in my opinion, an opinion on', en: 'In my opinion, the fee is too high.', cn: '在我看来，这个费用太高。' },
      { w: 'attitude', zh: '态度', scene: '你面对一件事时的姿态，不只是一句话，而是一整套倾向。', tone: '中性', col: 'attitude to, a positive attitude', en: 'Her attitude to work changed.', cn: '她对工作的态度变了。' }
    ]},
    { line: '你要到达的那个点。', items: [
      { w: 'purpose', zh: '目的', scene: '你做这件事是为了什么，那个理由。', tone: '中性', col: 'the purpose of, on purpose', en: 'The purpose of the visit is to learn.', cn: '这次访问的目的是学习。' },
      { w: 'objective', zh: '目标', scene: '写在计划里、可以检查有没有达到的那个目标。', tone: '偏正式', col: 'the main objective, meet an objective', en: 'Our objective is to cut waste.', cn: '我们的目标是减少浪费。' },
      { w: 'target', zh: '指标；目标', scene: '一个具体数字或对象，你朝着它瞄准。', tone: '中性', col: 'meet a target, a target of', en: 'The sales target is 200 units.', cn: '销售指标是 200 件。' }
    ]},
    { line: '长大、变多、发展出来。', items: [
      { w: 'development', zh: '发展', scene: '一座城或一个技能从简单变成更完整。', tone: '中性', col: 'economic development, child development', en: 'The development of the port created jobs.', cn: '港口的发展创造了就业。' },
      { w: 'growth', zh: '增长；生长', scene: '数字变大，或孩子、植物在长高。', tone: '中性', col: 'economic growth, the growth of', en: 'Population growth has slowed.', cn: '人口增长放缓了。' },
      { w: 'improve', zh: '改善', scene: '同一件事变得比原来好。', tone: '褒义', col: 'improve on, improve the quality', en: 'The new bus route improved the service.', cn: '新公交线路改善了服务。' }
    ]},
    { line: '为了弄清问题而做的研究、实验和测试。', items: [
      { w: 'research', zh: '研究', scene: '系统地查资料、做观察，想找出可靠的答案。', tone: '偏正式', col: 'research into, carry out research', en: 'The research into sleep took three years.', cn: '这项睡眠研究花了三年。' },
      { w: 'experiment', zh: '实验', scene: '在控制条件里试一次，看会发生什么。', tone: '中性', col: 'an experiment on, conduct an experiment', en: 'The experiment tested two methods.', cn: '实验测试了两种方法。' },
      { w: 'test', zh: '测试；测验', scene: '用一套题目或一次试用，看水平或是否合格。', tone: '中性', col: 'a test of, test for', en: 'The test for the chemical takes an hour.', cn: '这种化学检测需要一小时。' }
    ]},
    { line: '用来解释的一套说法，和尚未证实的假设。', items: [
      { w: 'theory', zh: '理论', scene: '一套用来解释现象的说法，经过较多检验。', tone: '中性偏正式', col: 'in theory, a theory of', en: 'In theory, the machine should use less power.', cn: '从理论上说，这台机器应该更省电。' },
      { w: 'hypothesis', zh: '假设', scene: '研究开始前提出的一个可检验的猜想，还等待实验。', tone: '正式', col: 'a hypothesis that, test a hypothesis', en: 'The hypothesis was not supported by the data.', cn: '数据不支持这个假设。' }
    ]},
    { line: '治病的过程、药物这一类、某一种药。', items: [
      { w: 'treatment', zh: '治疗', scene: '医生为了让病好起来而采取的整套做法。', tone: '中性', col: 'medical treatment, treatment for', en: 'She is receiving treatment for the injury.', cn: '她正在接受伤病治疗。' },
      { w: 'medicine', zh: '药；医学', scene: '用来治病的药，也可以指医学这门学问。', tone: '中性', col: 'take medicine, modern medicine', en: 'Take the medicine after food.', cn: '饭后服药。' },
      { w: 'drug', zh: '药物；毒品', scene: '一种有生理作用的物质。可以说成药，也可以指毒品，要看上下文。', tone: '中性，指毒品时负面', col: 'a drug for, prescription drugs', en: 'This drug reduces pain.', cn: '这种药能减轻疼痛。' }
    ]},
    { line: '压在身上的负担：精神压力和物理压力。', items: [
      { w: 'stress', zh: '压力', scene: '事情太多，人觉得喘不过气。也可以是语音里的重音。', tone: '中性', col: 'under stress, stress on', en: 'Students are under stress before exams.', cn: '学生在考试前压力很大。' },
      { w: 'pressure', zh: '压力', scene: '外面有东西在推，可以是水压、气压，或别人催你。', tone: '中性', col: 'under pressure, pressure on', en: 'There is pressure on the hospital.', cn: '医院承受着压力。' }
    ]},
    { line: '停下休息。sleep 是睡着，rest 是休息，不一定睡着。', items: [
      { w: 'sleep', zh: '睡觉', scene: '眼睛闭上，人进入睡眠。', tone: '中性', col: 'go to sleep, a good sleep', en: 'I could not sleep on the train.', cn: '我在火车上睡不着。' },
      { w: 'rest', zh: '休息', scene: '停下工作，让身体缓一缓，可以坐着，不一定睡着。', tone: '中性', col: 'have a rest, rest from', en: 'Sit down and rest for a minute.', cn: '坐下休息一会儿。' }
    ]},
    { line: '身体不舒服。', items: [
      { w: 'ill', zh: '生病的', scene: '人不能照常活动，需要照料。英式英语里很常见。', tone: '中性', col: 'feel ill, seriously ill', en: 'She was too ill to travel.', cn: '她病得不能出行。' },
      { w: 'sick', zh: '生病的；恶心的', scene: '身体不舒服。在美式英语里常表示生病，在英式英语里也可以表示恶心想吐。', tone: '中性', col: 'feel sick, off sick', en: 'He stayed home because he was sick.', cn: '他因为生病待在家里。' }
    ]},
    { line: '天上长期的气候，和这几天的天气。', items: [
      { w: 'climate', zh: '气候', scene: '一个地方很多年的天气规律，不是今天下不下雨。', tone: '中性偏正式', col: 'a warm climate, climate change', en: 'The island has a mild climate.', cn: '这座岛气候温和。' },
      { w: 'weather', zh: '天气', scene: '今天或这周的雨、风和温度。', tone: '中性', col: 'bad weather, the weather forecast', en: 'The weather was wet all week.', cn: '整整一周天气都是湿的。' }
    ]},
    { line: '种地这件事，和地里长出的作物。', items: [
      { w: 'agriculture', zh: '农业', scene: '在土地上种植和饲养，作为一整类生产。', tone: '正式', col: 'agriculture and, modern agriculture', en: 'Agriculture employs many people here.', cn: '农业在这里雇用了很多人。' },
      { w: 'farm', zh: '农场；种田', scene: '一块实际在种的地，或在那块地上干活。', tone: '中性', col: 'on the farm, farm the land', en: 'They farm the land near the river.', cn: '他们在河边的土地上耕作。' },
      { w: 'crop', zh: '作物；收成', scene: '这一季地里长出来、可以收的那些植物。', tone: '中性', col: 'grow crops, a crop of', en: 'The rice crop failed after the flood.', cn: '洪水之后水稻收成不好。' }
    ]},
    { line: '吃的东西，和为了健康而安排的饮食。', items: [
      { w: 'food', zh: '食物', scene: '可以吃的东西本身。', tone: '中性', col: 'food and, fresh food', en: 'Fresh food is sold in the market.', cn: '市场上卖新鲜食物。' },
      { w: 'diet', zh: '饮食', scene: '一个人通常吃什么，或为了健康而规定的吃法。', tone: '中性', col: 'a balanced diet, go on a diet', en: 'A balanced diet includes vegetables.', cn: '均衡饮食包括蔬菜。' }
    ]},
    { line: '消息如何被传开。', items: [
      { w: 'media', zh: '媒体', scene: '报纸、电视和网站这些把消息传给大众的渠道。', tone: '中性', col: 'the media, social media', en: 'The story was reported in the media.', cn: '这件事被媒体报道了。' },
      { w: 'news', zh: '新闻', scene: '刚发生、人们想知道的那些消息。', tone: '中性', col: 'the news, news of', en: 'The news of the result spread quickly.', cn: '结果的消息很快传开了。' }
    ]},
    { line: '买东西的店铺。', items: [
      { w: 'shop', zh: '商店', scene: '你走进去挑选货物的那间铺子。英式英语里最常用。', tone: '中性', col: 'a shop in, go shopping', en: 'The shop opens at nine.', cn: '这家店九点开门。' },
      { w: 'store', zh: '商店；储存', scene: '和 shop 类似的售货场所，美式英语里更常说 store。也可以表示储存。', tone: '中性', col: 'a department store, in store', en: 'The store is closed on Mondays.', cn: '这家店星期一关门。' }
    ]},
    { line: '钱，和手头的现金。', items: [
      { w: 'money', zh: '钱', scene: '用来买东西的钱，可以是现金、卡里的数或账上的数。', tone: '中性', col: 'save money, a sum of money', en: 'They saved money for the trip.', cn: '他们为这次出行攒了钱。' },
      { w: 'cash', zh: '现金', scene: '手里的纸币和硬币，不是转账。', tone: '中性', col: 'pay in cash, cash payment', en: 'The market only accepts cash.', cn: '这个市场只收现金。' }
    ]},
    { line: '借来的钱，和允许你以后再付的信用。', items: [
      { w: 'loan', zh: '贷款', scene: '银行把一笔钱先给你，你以后要还。', tone: '中性', col: 'a bank loan, take out a loan', en: 'They took out a loan for the car.', cn: '他们为这辆车办了贷款。' },
      { w: 'credit', zh: '信用；信贷', scene: '对方相信你会以后付款，所以现在先把东西给你。也可以指功劳。', tone: '中性', col: 'on credit, credit card', en: 'The shop let her buy the coat on credit.', cn: '商店让她赊购那件外套。' }
    ]},
    { line: '要花的成本，和东西值多少。', items: [
      { w: 'cost', zh: '成本；花费', scene: '为了得到它你得付出的钱或代价。', tone: '中性', col: 'the cost of, at a cost', en: 'The cost of housing has risen.', cn: '住房成本上升了。' },
      { w: 'worth', zh: '价值', scene: '它配得上多少钱，或值不值得你花时间。', tone: '中性', col: 'worth of, be worth', en: 'The painting is worth more than we thought.', cn: '这幅画比我们想的更值钱。' },
      { w: 'expense', zh: '费用；代价', scene: '为了做成一件事花出去的钱，或为此付出的代价。', tone: '中性', col: 'at the expense of, travel expenses', en: 'The trip was a large expense.', cn: '这次出行是一大笔费用。' }
    ]},
    { line: '做成的一笔交易，和讨价还价后的便宜买卖。', items: [
      { w: 'deal', zh: '交易', scene: '双方说定谁给什么、谁付什么。', tone: '偏口语到中性', col: 'make a deal, a business deal', en: 'The two firms made a deal.', cn: '两家公司做成了一笔交易。' },
      { w: 'bargain', zh: '便宜货；讨价还价', scene: '价钱被谈到比原来低，或一件划算的东西。', tone: '中性', col: 'a good bargain, bargain with', en: 'The coat was a bargain.', cn: '这件外套很划算。' }
    ]},
    { line: '走得有多快。', items: [
      { w: 'speed', zh: '速度', scene: '单位时间里走多远，仪表上的那个数。', tone: '中性', col: 'at speed, speed of', en: 'The speed of the train increased.', cn: '火车的速度提高了。' },
      { w: 'rate', zh: '速率；比率', scene: '事情发生得有多快，或两个数之间的比率，如出生率。', tone: '中性偏正式', col: 'at a rate of, the rate of', en: 'The rate of growth has slowed.', cn: '增长速度放慢了。' }
    ]},
    { line: '话直接、不绕弯。candid 更坦率，honest 强调不骗人，direct 强调不拐弯。', items: [
      { w: 'candid', zh: '坦率的', scene: '心里怎么想，嘴上就怎么说，不先包一层好听的纸。', tone: '褒义', col: 'a candid opinion, candid about', en: 'She was candid about her mistake.', cn: '她坦率地说了自己的错误。' },
      { w: 'honest', zh: '诚实的', scene: '事实是什么样，你就不改口，不把假的说成真的。', tone: '褒义', col: 'honest about, an honest answer', en: 'Please give me an honest answer.', cn: '请给我一个诚实的回答。' },
      { w: 'direct', zh: '直接的', scene: '话走直线，不绕到别处再回来。它也可以表示管理或指向。', tone: '中性', col: 'a direct answer, direct with', en: 'He gave a direct answer.', cn: '他给了一个直接的回答。' }
    ]},
    { line: '合这个场合、配得上、按规矩是对的。', items: [
      { w: 'appropriate', zh: '恰当的', scene: '衣服、话或做法刚好适合这个房间和这个时候。', tone: '中性偏正式', col: 'appropriate for, appropriate to', en: 'Jeans are not appropriate for the interview.', cn: '面试穿牛仔裤不合适。' },
      { w: 'suitable', zh: '合适的', scene: '这个人和这个位子、这个工具和这个活，配得上。', tone: '中性', col: 'suitable for, suitable to', en: 'The room is suitable for a small meeting.', cn: '这个房间适合开小会。' },
      { w: 'proper', zh: '适当的；像样的', scene: '按该有的规矩来，不是随便应付。', tone: '中性', col: 'proper training, a proper meal', en: 'Staff need proper training to use the machine.', cn: '员工需要恰当的培训才能使用这台机器。' }
    ]},
    { line: '合乎情理，和想得明白、不糊涂。', items: [
      { w: 'reasonable', zh: '合理的', scene: '价钱或要求放在常理上站得住，别人听了会点头。', tone: '中性', col: 'a reasonable price, reasonable to', en: 'The fee is reasonable.', cn: '这个费用是合理的。' },
      { w: 'sensible', zh: '明智的', scene: '人作出的选择清楚、不冲动，像下雨就带伞。', tone: '褒义', col: 'a sensible decision, sensible about', en: 'It was sensible to leave early.', cn: '早点离开是明智的。' }
    ]},
    { line: '少见、值得停下来看第二眼。', items: [
      { w: 'remarkable', zh: '非凡的', scene: '一件事从平常的背景里凸出来，让人忍不住多看一眼。', tone: '褒义', col: 'a remarkable achievement, remarkable for', en: 'The result was remarkable.', cn: '这个结果很不寻常。' },
      { w: 'extraordinary', zh: '非凡的；不一般的', scene: '超出普通日子的那一档，像一场少见的演出。', tone: '褒义，语气强', col: 'extraordinary talent, extraordinary circumstances', en: 'She showed extraordinary patience.', cn: '她表现出了非同寻常的耐心。' }
    ]},
    { line: '心里热、想马上去做。', items: [
      { w: 'enthusiastic', zh: '热情的', scene: '眼睛发亮，说话变快，整个人朝那件事倾过去。', tone: '褒义', col: 'enthusiastic about, an enthusiastic response', en: 'The class was enthusiastic about the trip.', cn: '全班对这次出行很热情。' },
      { w: 'eager', zh: '渴望的', scene: '人已经站在起跑线上，恨不得现在就开始。', tone: '褒义', col: 'eager to, eager for', en: 'He is eager to start the course.', cn: '他渴望开始这门课。' },
      { w: 'keen', zh: '热心的；渴望的', scene: '兴趣很尖，像刀口对着那件事。它也可以表示锋利或敏锐。', tone: '中性偏褒义', col: 'keen on, keen to', en: 'She is keen on photography.', cn: '她对摄影很热心。' }
    ]},
    { line: '朝一个目标追过去。chase 还可以是追上一个在跑的人。', items: [
      { w: 'pursue', zh: '追求', scene: '你沿着一条目标走很久，不轻易拐走，像追求一门专业。', tone: '偏正式', col: 'pursue a career, pursue a goal', en: 'She decided to pursue medicine.', cn: '她决定去学医。' },
      { w: 'chase', zh: '追捕；追求', scene: '目标在前面移动，你在后面追。追一个人时画面更具体。', tone: '中性', col: 'chase after, chase a dream', en: 'The dog chased the ball across the park.', cn: '狗追着球跑过公园。' }
    ]},
    { line: '少浪费地做成，和确实产生了效果。', items: [
      { w: 'efficient', zh: '高效的', scene: '同样的结果，用的时间和材料更少，机器不空转。', tone: '褒义', col: 'efficient use, energy efficient', en: 'The new bus route is more efficient.', cn: '新公交线路效率更高。' },
      { w: 'effective', zh: '有效的', scene: '药或办法真的起了作用，问题变小了。', tone: '中性偏褒义', col: 'effective in, an effective method', en: 'The treatment was effective.', cn: '这个治疗是有效的。' }
    ]},
    { line: '把已经不好的情况再往下压一截。', items: [
      { w: 'exacerbate', zh: '加剧', scene: '伤口还在，又撒了一把盐，问题变得更重。', tone: '正式，负面', col: 'exacerbate a problem, exacerbate tensions', en: 'The delay exacerbated the shortage.', cn: '耽搁加剧了短缺。' },
      { w: 'aggravate', zh: '加重；加剧', scene: '和 exacerbate 接近，病情或矛盾被推得更严重。', tone: '正式，负面', col: 'aggravate the situation, aggravate an injury', en: 'Shouting only aggravated the argument.', cn: '大喊大叫只让争吵更严重。' }
    ]},
    { line: '缺了就不行，到了生死攸关的程度。', items: [
      { w: 'vital', zh: '极其重要的', scene: '像身体里不能停的那一下心跳，没有它整件事会停。', tone: '语气强', col: 'vital to, vital for', en: 'Sleep is vital for memory.', cn: '睡眠对记忆极其重要。' },
      { w: 'indispensable', zh: '不可或缺的', scene: '拿掉这个人这把工具，工作台就转不起来。', tone: '正式，语气强', col: 'indispensable to, indispensable for', en: 'She has become indispensable to the team.', cn: '她对团队已经不可或缺。' }
    ]},
    { line: '把一份资源分到各处。', items: [
      { w: 'distribute', zh: '分发；分配', scene: '一箱东西被送到不同的人手上。', tone: '中性', col: 'distribute to, evenly distributed', en: 'Volunteers distributed water to the crowd.', cn: '志愿者把水发给人群。' },
      { w: 'allocate', zh: '拨给；分配', scene: '预算表上，一笔钱被指定给某一个项目。', tone: '正式', col: 'allocate funds, allocate time', en: 'The school allocated more time to science.', cn: '学校给科学拨了更多时间。' },
      { w: 'distribution', zh: '分布；分发', scene: '东西已经被分到各处之后的那个格局，或分发这件事。', tone: '偏正式', col: 'the distribution of, distribution network', en: 'The map shows the distribution of shops.', cn: '这张地图显示商店的分布。' }
    ]},
    { line: '用符号写出的数量关系。', items: [
      { w: 'formula', zh: '公式；方案', scene: '一行符号，照着算就能得到结果。也可以是一套固定做法。', tone: '中性', col: 'a formula for, chemical formula', en: 'The students learned the formula.', cn: '学生们学会了这个公式。' },
      { w: 'equation', zh: '等式', scene: '等号两边一样重，是公式里左右平衡的那一种。', tone: '偏技术', col: 'solve an equation, a simple equation', en: 'Solve the equation for x.', cn: '解这个关于 x 的等式。' }
    ]},
    { line: '把一个机构管起来。', items: [
      { w: 'administration', zh: '管理；行政', scene: '办公室里的表格、规章和管事的那一层人。', tone: '正式', col: 'the administration, public administration', en: 'The administration announced a new rule.', cn: '行政部门宣布了一项新规定。' },
      { w: 'management', zh: '管理', scene: '负责做决定、安排人和资源的那一群人或那套做法。', tone: '中性', col: 'senior management, under management', en: 'Management approved the new hours.', cn: '管理层批准了新的工作时间。' }
    ]},
    { line: '一群被选出来一起做决定的人。', items: [
      { w: 'commission', zh: '委员会；委托', scene: '被正式委派去调查或完成一件事的一组人。它也可以表示委托。', tone: '正式', col: 'a commission on, set up a commission', en: 'A commission investigated the accident.', cn: '一个委员会调查了这次事故。' },
      { w: 'committee', zh: '委员会', scene: '机构内部坐下来讨论并作决定的那一桌人。', tone: '中性偏正式', col: 'a committee of, the committee decided', en: 'The committee meets every month.', cn: '委员会每个月开会。' },
      { w: 'council', zh: '理事会；委员会', scene: '一个地方或机构里负责议事的那一组人，如市议会。', tone: '正式', col: 'the city council, a council meeting', en: 'The council meets on Tuesday.', cn: '理事会星期二开会。' }
    ]},
    { line: '符合平常样子。', items: [
      { w: 'normal', zh: '正常的', scene: '没有出故障，事情按平时的样子发生。', tone: '中性', col: 'back to normal, normal for', en: 'Her temperature is normal.', cn: '她的体温正常。' },
      { w: 'usual', zh: '通常的', scene: '你习惯看见的那个样子，今天又出现了。', tone: '中性', col: 'as usual, the usual time', en: 'She took the usual train.', cn: '她坐了平时那班火车。' }
    ]},
    { line: '把一件事做出来。perform 还可以是演出。', items: [
      { w: 'conduct', zh: '进行；实施', scene: '你带着一项调查或实验往前走，像指挥一场进行中的事。', tone: '正式', col: 'conduct a survey, conduct research', en: 'They conducted a survey of local shops.', cn: '他们对当地商店做了调查。' },
      { w: 'perform', zh: '执行；表演', scene: '把该做的动作做完。在舞台上时，它的意思是演出。', tone: '中性', col: 'perform a task, perform an operation', en: 'The surgeon performed the operation.', cn: '外科医生做了这个手术。' }
    ]},
    { line: '一直保持不变，和中间不停顿。', items: [
      { w: 'constant', zh: '持续不变的', scene: '数字或温度停在同一高度，不忽高忽低。', tone: '中性偏正式', col: 'remain constant, a constant temperature', en: 'The temperature remained constant.', cn: '温度一直保持不变。' },
      { w: 'continuous', zh: '连续的', scene: '一条线中间没有断开，雨一直下，没有停的缝。', tone: '中性偏正式', col: 'continuous rain, continuous improvement', en: 'There was continuous rain for three days.', cn: '雨连续下了三天。' }
    ]},
    { line: '需要处理的问题。', items: [
      { w: 'issue', zh: '问题', scene: '一件摆到桌面上、需要讨论或解决的事。', tone: '中性', col: 'an issue with, raise an issue', en: 'Cost is the main issue.', cn: '成本是主要问题。' },
      { w: 'matter', zh: '问题；事情', scene: '一件需要在意的事。也常说 it matters，表示“这有关系”。', tone: '中性', col: 'a matter of, it does not matter', en: 'Safety is a serious matter.', cn: '安全是一件严肃的事。' }
    ]},
    { line: '把一个机构或传统从无到有立起来。found 也可以是 find 的过去式。', items: [
      { w: 'establish', zh: '建立', scene: '一面牌子挂上去，一家学校或一项制度开始存在。', tone: '正式', col: 'establish a company, establish that', en: 'They established a scholarship in 1990.', cn: '他们在 1990 年设立了一项奖学金。' },
      { w: 'found', zh: '创立', scene: '一个人在最初把组织建起来。这个词也可以是 find 的过去式。', tone: '正式', col: 'found a university, founded in', en: 'The charity was founded by two teachers.', cn: '这家慈善机构由两位老师创立。' }
    ]},
    { line: '按次序排好的一串，和一套相关的连续作品。', items: [
      { w: 'sequence', zh: '顺序', scene: '步骤 1、2、3 排成一条，打乱了就不对。', tone: '偏正式', col: 'in sequence, a sequence of', en: 'Follow the steps in sequence.', cn: '按顺序做这些步骤。' },
      { w: 'series', zh: '一系列；连续剧', scene: '一组相关的事件、书或剧集，一个接一个出现。', tone: '中性', col: 'a series of, a television series', en: 'There has been a series of delays.', cn: '出现了一连串耽搁。' },
      { w: 'order', zh: '顺序；命令；点菜', scene: '事情排好的次序。它也可以是一道命令，或在餐馆点菜。这里不是“订购”。', tone: '中性', col: 'in order, order a meal', en: 'Put the steps in order.', cn: '把步骤按顺序排好。' }
    ]},
{ line: '一个是施加影响的动词，一个是已经产生的结果。', items: [
      { w: 'affect', zh: '影响', scene: '一件事伸手碰到另一件事，让它发生变化。', tone: '中性', col: 'affect the result, directly affect', en: 'The delay will affect the schedule.', cn: '这次耽搁会影响日程。' },
      { w: 'effect', zh: '影响；效果', scene: '变化已经出现，你看见的是结果本身。它也可以表示效果。', tone: '中性偏正式', col: 'the effect of, a side effect', en: 'The effect of the delay was clear.', cn: '耽搁造成的影响很明显。' }
    ]},
    { line: '算进范围里，和被卷进一件事。', items: [
      { w: 'include', zh: '包括', scene: '一份名单或一个整体里，这一项也被算进去。', tone: '中性', col: 'include in, including', en: 'The price includes lunch.', cn: '这个价格包括午餐。' },
      { w: 'involve', zh: '涉及', scene: '你被拉进这件事里，不只是名字出现在名单上。', tone: '中性', col: 'involve in, involve doing', en: 'The job involves talking to customers.', cn: '这份工作需要和顾客交谈。' },
      { w: 'contain', zh: '包含；容纳', scene: '东西已经在容器或范围里面。它也可以表示忍住。', tone: '中性', col: 'contain something, contained in', en: 'The box contains old maps.', cn: '盒子里装着旧地图。' }
    ]},
    { line: '从某处来，源头在别处。', items: [
      { w: 'derive', zh: '源自', scene: '一条线从源头拉到现在这个词或这个结果上。', tone: '正式', col: 'derive from, derived from', en: 'The word derives from Latin.', cn: '这个词源自拉丁语。' },
      { w: 'originate', zh: '起源', scene: '事情在某一个地方或某一个时间开始出现。', tone: '正式', col: 'originate in, originate from', en: 'The custom originated in the north.', cn: '这个习俗起源于北方。' }
    ]},
    { line: '若干部分合在一起，形成整体。', items: [
      { w: 'constitute', zh: '构成', scene: '几块拼上去，整体就成立了。', tone: '正式', col: 'constitute a majority, constitute a threat', en: 'Women constitute half of the staff.', cn: '女性占员工的一半。' },
      { w: 'compose', zh: '组成；创作', scene: '部分组成整体。它也可以表示写一首曲子或一篇文字。', tone: '正式', col: 'be composed of, compose a letter', en: 'The team is composed of six people.', cn: '这个团队由六个人组成。' },
      { w: 'consist', zh: '由……组成', scene: '整体被拆开看时，里面是这些部分。常说 consist of。', tone: '正式', col: 'consist of, consist in', en: 'The course consists of eight classes.', cn: '这门课由八节课组成。' }
    ]},
    { line: '把某一处说得更重，让人看见。', items: [
      { w: 'emphasis', zh: '强调', scene: '说话时把重量放在某一个词或某一个点上。', tone: '偏正式', col: 'place emphasis on, with emphasis', en: 'The report places emphasis on safety.', cn: '报告把重点放在安全上。' },
      { w: 'highlight', zh: '强调；突出', scene: '用亮色把一行字标出来，让读者的眼睛停在那里。', tone: '中性', col: 'highlight the need, highlight that', en: 'The talk highlighted the need for rest.', cn: '这次谈话突出了休息的必要。' }
    ]},
    { line: '事先想好的做法。scheme 是一套安排，plan 是步骤，proposal 是提出来等别人看的建议。', items: [
      { w: 'scheme', zh: '方案', scene: '一整套安排被画出来，用来做成一件事。', tone: '偏正式', col: 'a scheme for, a training scheme', en: 'The city launched a recycling scheme.', cn: '这座城市推出了一项回收方案。' },
      { w: 'plan', zh: '规划', scene: '步骤按时间排好，像一张还没走的路线图。', tone: '中性', col: 'a plan for, plan to', en: 'We made a plan for the weekend.', cn: '我们做了周末的计划。' },
      { w: 'proposal', zh: '提议', scene: '想法写成一份，递到别人面前，等对方点头。它也可以表示求婚。', tone: '偏正式', col: 'a proposal for, accept a proposal', en: 'The committee rejected the proposal.', cn: '委员会否决了这项提议。' }
    ]},
    { line: '一起做事的人。partner 可以超出办公室，colleague 就是同事。', items: [
      { w: 'partner', zh: '伙伴', scene: '两个人一起承担同一件事，可以是生意，也可以是生活。', tone: '中性', col: 'a business partner, partner with', en: 'She started the shop with a partner.', cn: '她和一个伙伴一起开了这家店。' },
      { w: 'colleague', zh: '同事', scene: '同一个单位里和你一起上班的人。', tone: '中性', col: 'a colleague at, former colleague', en: 'I asked a colleague for the file.', cn: '我向一位同事要了那份文件。' }
    ]},
    { line: '把名字写进名单，从而加入。enrol 和 enroll 是同一词的两种拼法。', items: [
      { w: 'register', zh: '登记', scene: '在正式表格上写下名字，记录在册。', tone: '中性偏正式', col: 'register for, register with', en: 'Please register at the front desk.', cn: '请在前台登记。' },
      { w: 'enroll', zh: '注册', scene: '你的名字进入一门课或一个项目的名单，美式拼法更常见。', tone: '中性', col: 'enroll in, enroll on', en: 'She enrolled in the evening class.', cn: '她注册了夜校课程。' },
      { w: 'enrol', zh: '报名参加', scene: '和 enroll 是同一个词，英式拼法少一个 l。', tone: '中性', col: 'enrol on a course, enrol in', en: 'He enrolled on a first-aid course.', cn: '他报名参加了一门急救课。' },
      { w: 'sign up', zh: '报名', scene: '日常说法：在表上签名，表示我要参加。', tone: '偏口语', col: 'sign up for, sign up to', en: 'I signed up for the workshop.', cn: '我报名参加了这个工作坊。' }
    ]},
    { line: '写下来给人读的文字。article 还可以表示物品或冠词。', items: [
      { w: 'text', zh: '文本', scene: '一段写下来的文字本身，不管它印在书上还是屏幕上。', tone: '中性', col: 'the text of, a text message', en: 'Read the text carefully.', cn: '仔细读这段文字。' },
      { w: 'article', zh: '文章', scene: '报纸或期刊里一篇完整的文字。这个词也可以表示物品或冠词。', tone: '中性', col: 'an article about, a newspaper article', en: 'She wrote an article about the park.', cn: '她写了一篇关于这座公园的文章。' }
    ]},
    { line: '用感觉或判断察觉到。', items: [
      { w: 'perceive', zh: '感知', scene: '你不只是眼睛看见，而是心里形成了“这是这样”的判断。', tone: '正式', col: 'perceive as, perceive that', en: 'People perceived the change as sudden.', cn: '人们觉得这个变化很突然。' },
      { w: 'sense', zh: '感觉到；感官', scene: '还没看见证据，人已经觉得有什么不对或有什么要来。它也可以表示感官。', tone: '中性', col: 'sense that, a sense of', en: 'I sensed that she was tired.', cn: '我感觉到她累了。' }
    ]},
    { line: '机构定下的大方向，和一条条具体规矩。', items: [
      { w: 'policy', zh: '政策', scene: '机构说“我们在这件事上按这个方向做”，是总的规定。', tone: '正式', col: 'a policy on, public policy', en: 'The school has a policy on phones.', cn: '学校有一项关于手机的政策。' },
      { w: 'regulation', zh: '规则', scene: '写成条款的具体规定，违反了可以被指出。', tone: '正式', col: 'safety regulations, under regulations', en: 'The building meets fire regulations.', cn: '这栋楼符合消防规定。' }
    ]},
{ line: '收下别人给的东西。accept 是你同意收下，receive 是东西到了你这里。', items: [
      { w: 'accept', zh: '接受', scene: '别人把一份邀请或一个结果递过来，你点头收下。', tone: '中性', col: 'accept an offer, accept that', en: 'She accepted the job offer.', cn: '她接受了这份工作邀请。' },
      { w: 'receive', zh: '收到', scene: '包裹或消息到达你手里，你还不一定决定要不要答应。', tone: '中性', col: 'receive a letter, receive from', en: 'I received the letter on Monday.', cn: '我星期一收到了这封信。' }
    ]},
    { line: '不在自己的国家。', items: [
      { w: 'abroad', zh: '在国外', scene: '人离开自己的国家，到另一国去住或去看。', tone: '中性', col: 'go abroad, study abroad', en: 'He wants to study abroad.', cn: '他想去国外学习。' },
      { w: 'overseas', zh: '海外的', scene: '隔着海的另一个国家，常用来形容海外的工作或亲戚。', tone: '中性', col: 'overseas students, travel overseas', en: 'She has relatives overseas.', cn: '她有亲戚在海外。' },
      { w: 'foreign', zh: '外国的', scene: '不属于本国的，如外语或外国游客。', tone: '中性', col: 'a foreign language, foreign visitors', en: 'She is learning a foreign language.', cn: '她在学一门外语。' }
    ]},
    { line: '差一点就到，但还没完全到。', items: [
      { w: 'almost', zh: '差不多', scene: '杯子快满了，还差一点点。', tone: '中性', col: 'almost all, almost finished', en: 'The train is almost full.', cn: '这趟火车差不多坐满了。' },
      { w: 'nearly', zh: '差不多', scene: '和 almost 非常接近，都是“几乎”。nearly 常放在数字前面。', tone: '中性', col: 'nearly all, nearly 20', en: 'Nearly 20 people came.', cn: '差不多来了 20 个人。' }
    ]},
    { line: '数字不求精确，只说个大概。about 还有“关于”的意思。', items: [
      { w: 'approximately', zh: '大约', scene: '书面里说一个不精确的数，像大约 200 人。', tone: '偏正式', col: 'approximately 10, approximately equal', en: 'The hall holds approximately 200 people.', cn: '这个大厅大约能坐 200 人。' },
      { w: 'about', zh: '大约', scene: '口头上说大概的数量。这个词也可以表示“关于”。', tone: '中性，偏口语', col: 'about 10, at about', en: 'The meeting starts at about six.', cn: '会议大约六点开始。' }
    ]},
    { line: '到了某个地方或某个程度。', items: [
      { w: 'arrive', zh: '到达', scene: '人走到目的地，脚停下来。', tone: '中性', col: 'arrive at, arrive in', en: 'We arrived at the station early.', cn: '我们早早到了车站。' },
      { w: 'reach', zh: '达到', scene: '手伸到那个点，或一个数字终于到了那条线。', tone: '中性', col: 'reach a place, reach a level', en: 'The temperature reached 30 degrees.', cn: '气温达到了 30 度。' }
    ]},
    { line: '坏到让人难受，或可怕到让人吃惊。', items: [
      { w: 'awful', zh: '极坏的；可怕的', scene: '饭很难吃，或一个消息差得让人皱眉。', tone: '偏口语', col: 'an awful day, awful weather', en: 'The weather was awful.', cn: '天气糟极了。' },
      { w: 'appalling', zh: '可怕的', scene: '情况差到让人倒吸一口气，比 awful 更震惊。', tone: '语气强', col: 'appalling conditions, an appalling result', en: 'The conditions in the room were appalling.', cn: '房间里的状况可怕。' },
      { w: 'terrible', zh: '可怕的', scene: '事情糟得或吓得让人不想再碰上。', tone: '中性，语气强', col: 'a terrible storm, terrible news', en: 'There was a terrible storm.', cn: '来了一场可怕的暴风雨。' },
      { w: 'bad', zh: '坏的', scene: '最普通的说法：东西不好，或情况很差。', tone: '中性', col: 'a bad idea, bad weather', en: 'That was a bad idea.', cn: '那是个坏主意。' }
    ]},
    { line: '意见冲到一起。argument 可以变成争吵，debate 是有规矩的辩论，dispute 是争执。', items: [
      { w: 'argument', zh: '论证；争吵', scene: '两边各说各的理由。声音高了，就变成争吵。', tone: '中性', col: 'an argument about, an argument that', en: 'They had an argument about the bill.', cn: '他们为账单争吵起来。' },
      { w: 'debate', zh: '辩论', scene: '两边按次序发言，把一个公共问题说清楚。', tone: '偏正式', col: 'a debate on, debate whether', en: 'The class held a debate on transport.', cn: '全班就交通问题进行了辩论。' },
      { w: 'dispute', zh: '争执', scene: '双方都不让，事情停在“到底该听谁的”。', tone: '偏正式', col: 'a dispute over, in dispute', en: 'There is a dispute over the boundary.', cn: '边界有争议。' },
      { w: 'controversy', zh: '争论', scene: '一件事被公开争了很久，两边都有人。', tone: '偏正式', col: 'a controversy over, cause controversy', en: 'The plan caused controversy.', cn: '这个计划引起了争论。' }
    ]},
    { line: '老师布置、要交回去的功课。', items: [
      { w: 'assignment', zh: '作业；分配', scene: '老师交给你的一份任务，写完要交。它也可以表示把工作分给某人。', tone: '中性偏正式', col: 'a written assignment, assignment of', en: 'The assignment is due on Friday.', cn: '这份作业星期五交。' },
      { w: 'homework', zh: '作业', scene: '带回家做的功课，是最普通的说法。', tone: '中性', col: 'do homework, homework on', en: 'I do my homework after dinner.', cn: '我晚饭后做作业。' }
    ]},
    { line: '心里知道这件事存在。', items: [
      { w: 'aware', zh: '意识到的', scene: '你知道有这件事，它进了你的注意范围。', tone: '中性', col: 'aware of, aware that', en: 'She was aware of the risk.', cn: '她意识到了这个风险。' },
      { w: 'conscious', zh: '意识到的', scene: '人和清醒、能感觉到周围有关。说“意识到”时和 aware 接近。', tone: '偏正式', col: 'conscious of, conscious that', en: 'He was conscious of the silence.', cn: '他察觉到了那阵安静。' }
    ]},
    { line: '让自己或别人习惯新的情况。adapt 还可以表示改编。', items: [
      { w: 'adapt', zh: '适应；改编', scene: '换了一个环境，你调整自己的做法。它也可以表示把一本书改成别的形式。', tone: '中性', col: 'adapt to, adapt for', en: 'The family adapted to the new city.', cn: '这家人适应了新城市。' },
      { w: 'accustom', zh: '使适应', scene: '一遍一遍之后，陌生的事变成习惯。', tone: '偏正式', col: 'accustom yourself to, accustomed to', en: 'She accustomed herself to the early train.', cn: '她让自己习惯了那班早车。' }
    ]},
    { line: '把一串数收成中间的那个代表。mean 还有别的意思，这里只比“平均”。', items: [
      { w: 'average', zh: '平均', scene: '把总分摊开，每个所占的那一份。', tone: '中性', col: 'on average, the average of', en: 'The average age is 21.', cn: '平均年龄是 21 岁。' },
      { w: 'mean', zh: '平均的', scene: '统计里的平均数。这个词也可以表示吝啬或意味着。', tone: '偏技术，说平均数时', col: 'the mean of, mean temperature', en: 'The mean temperature was 18 degrees.', cn: '平均气温是 18 度。' }
    ]},
    { line: '在那之后的时间。later 也可以表示“更迟”。', items: [
      { w: 'afterwards', zh: '后来', scene: '一件事结束，时间接着往下走，后来发生了别的。', tone: '中性', col: 'soon afterwards, afterwards', en: 'We ate, and afterwards we walked.', cn: '我们吃了饭，后来去散步。' },
      { w: 'later', zh: '后来；更迟', scene: '不是现在，是再过一会儿或在那之后。', tone: '中性', col: 'later on, two days later', en: 'I will call you later.', cn: '我过一会儿给你打电话。' }
    ]},
    { line: '承认另一面也成立。', items: [
      { w: 'although', zh: '尽管', scene: '先说出一个事实，再用虽然把相反的那面接上。', tone: '中性', col: 'although it, although the', en: 'Although it rained, we went out.', cn: '尽管下雨，我们还是出门了。' },
      { w: 'though', zh: '尽管', scene: '和 although 一样用来转折，也可以放在句尾，语气稍轻。', tone: '中性，稍口语', col: 'even though, though', en: 'We went out, though it rained.', cn: '我们出门了，尽管下雨。' }
    ]},
    { line: '告诉别人怎么做更好。', items: [
      { w: 'advice', zh: '建议；忠告', scene: '有经验的人把一句该怎么做的话交给你。', tone: '中性', col: 'a piece of advice, advice on', en: 'She asked for advice on the course.', cn: '她就这门课征求建议。' },
      { w: 'counsel', zh: '忠告；法律顾问', scene: '正式的劝告。它也可以指律师。', tone: '正式', col: 'counsel somebody to, legal counsel', en: 'The teacher counselled him to wait.', cn: '老师劝他等一等。' }
    ]},
    { line: '向人或地方动手。', items: [
      { w: 'attack', zh: '攻击', scene: '一方冲向另一方。它也可以表示疾病发作。', tone: '中性', col: 'an attack on, attack somebody', en: 'The article attacked the plan.', cn: '这篇文章抨击了该计划。' },
      { w: 'assault', zh: '袭击；殴打', scene: '攻击落到人身上，常带暴力，法律文本里常见。', tone: '正式，负面', col: 'assault on, physical assault', en: 'He was charged with assault.', cn: '他被指控袭击。' }
    ]},
    { line: '写东西的人。', items: [
      { w: 'author', zh: '作者', scene: '一本书或一篇文章上署名的那个人。', tone: '中性', col: 'the author of, an author', en: 'The author signed the book.', cn: '作者在书上签了名。' },
      { w: 'writer', zh: '作家', scene: '以写作为工作或身份的人，不限于某一本书。', tone: '中性', col: 'a writer of, the writer', en: 'She is a writer of short stories.', cn: '她是写短篇故事的作家。' }
    ]},
    { line: '出了没料到的事。accident 多半是意外伤害，incident 是被记下来的一件事。', items: [
      { w: 'accident', zh: '事故；意外', scene: '没人想让它发生，却发生了，常常有人受伤或东西坏了。', tone: '中性', col: 'by accident, a road accident', en: 'He broke the cup by accident.', cn: '他不小心打碎了杯子。' },
      { w: 'incident', zh: '事件', scene: '被记录下来的一件不寻常的事，不一定有人受伤。', tone: '偏正式', col: 'an incident at, a serious incident', en: 'The school reported the incident.', cn: '学校报告了这件事。' },
      { w: 'event', zh: '事件', scene: '安排好的活动，或发生了的一件事。', tone: '中性', col: 'a sports event, in the event of', en: 'The event starts at seven.', cn: '活动七点开始。' }
    ]},
    { line: '看起来是这样。appear 还可以表示“出现”。', items: [
      { w: 'appear', zh: '显得；出现', scene: '从外面看像是这样。它也可以表示人走进大家的视线。', tone: '中性', col: 'appear to, appear on', en: 'She appeared to be tired.', cn: '她看上去累了。' },
      { w: 'seem', zh: '似乎', scene: '你的印象是这样，但还没有被证实。', tone: '中性', col: 'seem to, it seems that', en: 'It seems that the bus is late.', cn: '公共汽车似乎晚点了。' }
    ]},
    { line: '去做，但不保证做成。', items: [
      { w: 'attempt', zh: '试图', scene: '你开始做一件可能失败的事，书面里更常见。', tone: '偏正式', col: 'an attempt to, attempt to', en: 'They attempted to open the window.', cn: '他们试图打开窗户。' },
      { w: 'try', zh: '尝试', scene: '最普通的说法：试一试。', tone: '中性', col: 'try to, try doing', en: 'Try to finish before six.', cn: '尽量在六点前完成。' }
    ]},
    { line: '提醒危险或问题。', items: [
      { w: 'alarm', zh: '警告；警报', scene: '铃响了，或一句话让人警觉出事了。', tone: '中性', col: 'raise the alarm, an alarm', en: 'The alarm rang at midnight.', cn: '警报在午夜响了。' },
      { w: 'warning', zh: '警告', scene: '事先告诉你：再这样就会有不好的结果。', tone: '中性', col: 'a warning about, without warning', en: 'The sign is a warning about ice.', cn: '这块牌子是在警告有冰。' }
    ]},
{ line: '位置在另一件东西的下方。', items: [
      { w: 'below', zh: '在下面', scene: '位置比另一条线更低，或在某物的下方。', tone: '中性', col: 'below the, below zero', en: 'The temperature fell below zero.', cn: '气温降到了零度以下。' },
      { w: 'under', zh: '在下面', scene: '一件东西盖在上面，另一件在它底下。它也可以表示“不足”。', tone: '中性', col: 'under the, under 18', en: 'The bag is under the table.', cn: '包在桌子下面。' }
    ]},
    { line: '靠海的那一带。beach 是能走上去的沙滩，shore 是水边，coast 是较长的海岸。', items: [
      { w: 'beach', zh: '海滩', scene: '沙子或石子铺到水边、人可以走上去的那一片。', tone: '中性', col: 'on the beach, a sandy beach', en: 'We walked on the beach.', cn: '我们在海滩上走了走。' },
      { w: 'shore', zh: '海滨', scene: '水和陆地相接的那一条边。', tone: '中性', col: 'on the shore, the shore of', en: 'The boat reached the shore.', cn: '船靠了岸。' },
      { w: 'coast', zh: '海岸', scene: '沿着海伸出去的一整段陆地，比一片沙滩更长。', tone: '中性', col: 'on the coast, the coast of', en: 'The town is on the coast.', cn: '这个镇子在海岸上。' }
    ]},
    { line: '水上的船。boat 通常更小，ship 通常更大。', items: [
      { w: 'boat', zh: '小船', scene: '能在水上走的船，常常是较小的那一种。', tone: '中性', col: 'a fishing boat, by boat', en: 'We crossed the river by boat.', cn: '我们坐小船过了河。' },
      { w: 'ship', zh: '船', scene: '较大的船，可以载很多人远行。', tone: '中性', col: 'a cargo ship, by ship', en: 'The ship left the harbour at dawn.', cn: '船在黎明时离开了港口。' },
      { w: 'ferry', zh: '渡船', scene: '在两岸或两个码头之间定时来回的船。', tone: '中性', col: 'a car ferry, by ferry', en: 'We crossed the river by ferry.', cn: '我们坐渡船过了河。' }
    ]},
    { line: '打断别人正在做的事。', items: [
      { w: 'bother', zh: '打扰', scene: '一件小事反复来找你，让你不得安宁。', tone: '中性', col: 'bother somebody, do not bother', en: 'Sorry to bother you.', cn: '抱歉打扰你。' },
      { w: 'disturb', zh: '打扰；打乱', scene: '把安静或已经排好的秩序弄乱。', tone: '中性偏正式', col: 'disturb somebody, disturb the', en: 'Please do not disturb the meeting.', cn: '请不要打扰会议。' }
    ]},
    { line: '里面没有东西。blank 更常指纸上还没写字。', items: [
      { w: 'empty', zh: '空的', scene: '盒子、房间或杯子里什么都没有。', tone: '中性', col: 'an empty room, empty of', en: 'The room was empty.', cn: '房间是空的。' },
      { w: 'blank', zh: '空白的', scene: '纸上还没有字，或脸上没有表情。', tone: '中性', col: 'a blank page, go blank', en: 'Leave the last line blank.', cn: '最后一行留空。' }
    ]},
    { line: '两个轮子的自行车。', items: [
      { w: 'bike', zh: '自行车', scene: '日常说法，两个轮子、用脚踩的车。', tone: '偏口语', col: 'ride a bike, by bike', en: 'I ride a bike to class.', cn: '我骑自行车去上课。' },
      { w: 'bicycle', zh: '自行车', scene: '和 bike 是同一件东西，bicycle 更完整、稍正式。', tone: '中性', col: 'a bicycle lane, ride a bicycle', en: 'The path is for bicycles.', cn: '这条路是给自行车的。' },
      { w: 'cycle', zh: '自行车；骑自行车', scene: '和 bike 同指自行车，也可以是动词“骑车”。它还可以表示循环。', tone: '中性', col: 'cycle to, a cycle lane', en: 'She cycles to the station.', cn: '她骑自行车去车站。' }
    ]},
    { line: '载客的大车。bus 是市内公交，coach 常指长途。', items: [
      { w: 'bus', zh: '公共汽车', scene: '城里按站点停靠、大家一起坐的车。', tone: '中性', col: 'by bus, the bus stop', en: 'We took the bus to the museum.', cn: '我们坐公共汽车去博物馆。' },
      { w: 'coach', zh: '长途汽车', scene: '城与城之间的大客车。它也可以表示教练。', tone: '中性', col: 'a coach to, by coach', en: 'The coach to the city leaves at nine.', cn: '去城里的长途汽车九点开。' }
    ]},
    { line: '来到这个世界上。birth 是那件事，born 是“出生”这个状态。', items: [
      { w: 'birth', zh: '出生', scene: '一个生命开始的那个时刻或事实。', tone: '中性', col: 'at birth, the birth of', en: 'The birth was recorded in June.', cn: '出生记录在六月。' },
      { w: 'born', zh: '出生', scene: '人已经来到世上，常用来回答“在哪里出生”。', tone: '中性', col: 'was born, born in', en: 'She was born in 1998.', cn: '她出生于 1998 年。' }
    ]},
    { line: '光很足，或好到发光。brilliant 还可以表示“精彩”。', items: [
      { w: 'bright', zh: '明亮的', scene: '灯或太阳把地方照得很清楚。', tone: '中性', col: 'bright light, a bright room', en: 'The room is bright in the morning.', cn: '这个房间早上很亮。' },
      { w: 'brilliant', zh: '精彩的；灿烂的', scene: '光强到耀眼，或一个主意好到让人叫好。', tone: '褒义，语气强', col: 'a brilliant idea, brilliant sunshine', en: 'That was a brilliant idea.', cn: '那是个极好的主意。' }
    ]},
    { line: '空气进进出出。breath 是一口气，breathe 是呼吸这个动作。', items: [
      { w: 'breath', zh: '呼吸；一口气', scene: '吸进或呼出的那一口气。', tone: '中性', col: 'a deep breath, out of breath', en: 'Take a deep breath.', cn: '深吸一口气。' },
      { w: 'breathe', zh: '呼吸', scene: '胸腔一起一伏，空气进出。', tone: '中性', col: 'breathe in, breathe out', en: 'Breathe in slowly.', cn: '慢慢吸气。' }
    ]},
    { line: '血，和血从身体里出来。', items: [
      { w: 'blood', zh: '血', scene: '身体里红色的那一种液体。', tone: '中性', col: 'blood test, lose blood', en: 'The nurse took a blood test.', cn: '护士做了血液检查。' },
      { w: 'bleed', zh: '流血', scene: '血从伤口流出来。', tone: '中性', col: 'bleed from, stop the bleeding', en: 'The cut began to bleed.', cn: '伤口开始流血。' }
    ]},
    { line: '用来装东西的容器。bottle 口较窄，jar 口较宽。', items: [
      { w: 'bottle', zh: '瓶子', scene: '口比较窄、常用来装水或饮料的容器。', tone: '中性', col: 'a bottle of, plastic bottle', en: 'Bring a bottle of water.', cn: '带一瓶水。' },
      { w: 'jar', zh: '广口瓶', scene: '口比较宽的瓶子，常用来装果酱或蜂蜜。', tone: '中性', col: 'a jar of, glass jar', en: 'The honey is in a jar.', cn: '蜂蜜装在广口瓶里。' }
    ]},
    { line: '把东西从一个地方挪到另一个地方。bring 是带到说话人这里，carry 是搬着走。', items: [
      { w: 'bring', zh: '带来', scene: '你拿着东西朝这边来。', tone: '中性', col: 'bring something, bring to', en: 'Please bring a pen.', cn: '请带一支笔来。' },
      { w: 'carry', zh: '搬运；携带', scene: '东西在你手里或身上，你把它运到别处。', tone: '中性', col: 'carry a bag, carry to', en: 'He carried the box upstairs.', cn: '他把箱子搬上了楼。' }
    ]},
    { line: '用手按下去，让机器换一种状态。', items: [
      { w: 'button', zh: '按钮', scene: '一个可以按的小圆点，按下去机器就有反应。它也可以是衣服上的扣子。', tone: '中性', col: 'press the button, a button on', en: 'Press the button for the lift.', cn: '按这个按钮叫电梯。' },
      { w: 'switch', zh: '开关', scene: '扳一下或按一下，灯或机器就开或关。它也可以表示转换。', tone: '中性', col: 'a light switch, switch on', en: 'The switch is by the door.', cn: '开关在门边。' }
    ]},
    { line: '不乱、不吵。calm 更说心情或水面，quiet 更说没有声音。', items: [
      { w: 'calm', zh: '平静的', scene: '水面不起浪，或人心里不慌。', tone: '中性', col: 'stay calm, a calm sea', en: 'Please stay calm.', cn: '请保持平静。' },
      { w: 'quiet', zh: '安静的', scene: '周围没有吵闹的声音。', tone: '中性', col: 'a quiet room, keep quiet', en: 'The library is quiet.', cn: '图书馆很安静。' }
    ]},
{ line: '街上招手就能坐的出租汽车。', items: [
      { w: 'cab', zh: '出租汽车', scene: '路边招手或打电话叫来的那种车，是 taxi 的另一种说法。', tone: '中性', col: 'call a cab, by cab', en: 'We took a cab to the station.', cn: '我们坐出租车去车站。' },
      { w: 'taxi', zh: '出租车', scene: '最普通的说法：按里程收费、把你送到门口的车。', tone: '中性', col: 'a taxi rank, by taxi', en: 'The taxi is waiting outside.', cn: '出租车在外面等着。' }
    ]},
    { line: '很小的房子。cabin 还可以是船或飞机上的客舱。', items: [
      { w: 'cabin', zh: '小屋；客舱', scene: '林子里的小木屋，或船上睡觉的那一小间。', tone: '中性', col: 'a log cabin, a cabin on', en: 'They stayed in a cabin by the lake.', cn: '他们住在湖边的一间小屋里。' },
      { w: 'hut', zh: '小屋', scene: '更简陋的小房子，常常只有一间。', tone: '中性', col: 'a wooden hut, a beach hut', en: 'The tools are in the hut.', cn: '工具在小屋里。' }
    ]},
    { line: '做礼拜的建筑。cathedral 是城里最大的那一座主教座堂。', items: [
      { w: 'church', zh: '教堂', scene: '人们去做礼拜的建筑，镇上通常不止一座。', tone: '中性', col: 'go to church, a village church', en: 'The church is on the square.', cn: '教堂在广场上。' },
      { w: 'cathedral', zh: '大教堂', scene: '一座城市里由主教主持的那座大教堂，通常更高、更老。', tone: '中性', col: 'a cathedral city, the cathedral', en: 'The cathedral took two centuries to build.', cn: '这座大教堂建了两个世纪。' }
    ]},
    { line: '位置在中部。centre 也可以是一个机构所在的地方。', items: [
      { w: 'centre', zh: '中心', scene: '一片地方或一件事的正中间，或人们聚集办事的那个点。美式拼写是 center。', tone: '中性', col: 'the city centre, a centre for', en: 'The museum is in the centre.', cn: '博物馆在市中心。' },
      { w: 'middle', zh: '中间的', scene: '两边之间的那一段，如路中间、年中。', tone: '中性', col: 'in the middle, the middle of', en: 'The table is in the middle of the room.', cn: '桌子在房间中间。' }
    ]},
    { line: '证明你学过或有资格的文件。', items: [
      { w: 'certificate', zh: '证书', scene: '一张写明你完成了课程或具备资格的纸。', tone: '中性', col: 'a certificate in, birth certificate', en: 'She received a certificate in first aid.', cn: '她拿到了急救证书。' },
      { w: 'diploma', zh: '文凭', scene: '学校发给的毕业或结业文凭，比一张短期证书更正式。', tone: '中性', col: 'a diploma in, high-school diploma', en: 'He has a diploma in design.', cn: '他有设计专业的文凭。' }
    ]},
    { line: '穿在身上的衣物。dress 还可以是一条连衣裙，或动词“穿衣”。', items: [
      { w: 'clothes', zh: '衣服', scene: '身上穿的上衣、裤子这些，总是用复数。', tone: '中性', col: 'warm clothes, clothes for', en: 'Pack warm clothes.', cn: '带上保暖的衣服。' },
      { w: 'clothing', zh: '服装', scene: '衣服的总称，更常出现在书面语里，如防护服装。', tone: '偏正式', col: 'warm clothing, an item of clothing', en: 'The shop sells outdoor clothing.', cn: '这家店卖户外服装。' },
      { w: 'dress', zh: '连衣裙；穿衣', scene: '一条连衣裙，或给某人穿衣服这个动作。', tone: '中性', col: 'a summer dress, dress for', en: 'She wore a blue dress.', cn: '她穿了一条蓝裙子。' }
    ]},
    { line: '温度低。cold 更冷，cool 是凉快、还不至于受不了。', items: [
      { w: 'cold', zh: '寒冷的', scene: '温度低到要加衣服，水也可能结冰。', tone: '中性', col: 'a cold day, cold water', en: 'The water is cold.', cn: '水是冷的。' },
      { w: 'cool', zh: '凉爽的', scene: '不热，吹着舒服，但还不到寒冷。', tone: '中性', col: 'a cool evening, keep cool', en: 'The evening is cool.', cn: '傍晚很凉爽。' }
    ]},
    { line: '几方一起做同一件事。', items: [
      { w: 'collaboration', zh: '合作', scene: '两个人或两个机构把工作合在一起做。', tone: '偏正式', col: 'in collaboration with, a collaboration between', en: 'The show is a collaboration with the museum.', cn: '这场演出是和博物馆合作的。' },
      { w: 'cooperation', zh: '合作；配合', scene: '你按对方需要的方式一起把事做成，强调配合。', tone: '中性偏正式', col: 'cooperation between, in cooperation with', en: 'The project needs cooperation between the two schools.', cn: '这个项目需要两所学校配合。' }
    ]},
    { line: '中学之后的学校。university 发学位，college 在不同国家指学院或高等专科学校。', items: [
      { w: 'college', zh: '学院', scene: '中学之后的学校。在美国常泛指大学，在英国常指学院或专科学校。', tone: '中性', col: 'go to college, a college of', en: 'She is at college.', cn: '她在上大学。' },
      { w: 'university', zh: '大学', scene: '可以授学位的综合性大学。', tone: '中性', col: 'at university, a university degree', en: 'He studies at the university.', cn: '他在这所大学学习。' }
    ]},
    { line: '把原来分开的东西放到一起。mix 更像搅在一起，combine 更像合成一个整体。', items: [
      { w: 'mix', zh: '混合', scene: '几种东西被搅在同一个碗或同一段话里。', tone: '中性', col: 'mix with, a mix of', en: 'Mix the flour with the water.', cn: '把面粉和水混在一起。' },
      { w: 'combine', zh: '联合；结合', scene: '几部分接到一起，变成一个更大的东西或计划。', tone: '中性偏正式', col: 'combine with, combine A and B', en: 'The course combines theory and practice.', cn: '这门课把理论和实践结合在一起。' }
    ]},
    { line: '对一件事发表看法。', items: [
      { w: 'comment', zh: '评论', scene: '你就一件事说上一句看法，可长可短。', tone: '中性', col: 'comment on, a comment about', en: 'She commented on the design.', cn: '她评论了这个设计。' },
      { w: 'remark', zh: '评论；谈论', scene: '随口说出的一句议论，也可以是注意到了什么。', tone: '中性', col: 'remark on, a remark about', en: 'He made a remark about the weather.', cn: '他就天气说了一句。' }
    ]},
    { line: '路上车走不动，挤在一起。jam 还可以表示果酱。', items: [
      { w: 'congestion', zh: '拥堵', scene: '车或人挤在一段路上，移动得很慢。书面和交通报告里常见。', tone: '偏正式', col: 'traffic congestion, congestion in', en: 'Traffic congestion is worse at eight.', cn: '八点的交通拥堵更严重。' },
      { w: 'jam', zh: '堵塞', scene: '路被堵住，车排成一条不动。这个词也可以表示果酱。', tone: '偏口语，说交通时', col: 'a traffic jam, stuck in a jam', en: 'We were stuck in a jam.', cn: '我们堵在路上了。' }
    ]},
    { line: '放在心里掂量。consider 是这个动作，consideration 是这件事。', items: [
      { w: 'consider', zh: '考虑', scene: '你把几种做法在心里过一遍，再决定。', tone: '中性', col: 'consider doing, consider whether', en: 'Consider the cost before you sign.', cn: '签字前先考虑费用。' },
      { w: 'consideration', zh: '考虑', scene: '正在被掂量的那一件事，或你把它当回事的态度。', tone: '偏正式', col: 'under consideration, take into consideration', en: 'The plan is under consideration.', cn: '这个计划正在考虑中。' }
    ]},
    { line: '说出不满。complain 是说出来，complaint 是那一条不满。', items: [
      { w: 'complain', zh: '抱怨', scene: '你觉得不公平或不舒服，就说出来。', tone: '中性', col: 'complain about, complain to', en: 'Guests complained about the noise.', cn: '客人抱怨噪音。' },
      { w: 'complaint', zh: '投诉', scene: '写成一条或正式提出的不满。', tone: '中性', col: 'make a complaint, a complaint about', en: 'She made a complaint to the manager.', cn: '她向经理投诉了。' }
    ]},
    { line: '城外、乡下的地方。country 在词库里还有“郊区”等别的意思，这里不把它算进来。', items: [
      { w: 'countryside', zh: '乡下', scene: '城市外面的田野、村子和空地。', tone: '中性', col: 'in the countryside, open countryside', en: 'They live in the countryside.', cn: '他们住在乡下。' },
      { w: 'rural', zh: '农村的', scene: '和乡村有关的，常见于报告，如农村地区。', tone: '偏正式', col: 'rural areas, a rural school', en: 'The bus serves rural areas.', cn: '这路公交服务农村地区。' }
    ]},
    { line: '两个在一起。couple 还可以表示夫妇，或“几个”。', items: [
      { w: 'couple', zh: '一对；几个', scene: '两个人或两件东西。口语里 a couple of 也常表示几个。', tone: '中性', col: 'a couple of, a married couple', en: 'A couple of students were late.', cn: '有几个学生迟到了。' },
      { w: 'pair', zh: '一对', scene: '正好两个、配成一双，如一双鞋。', tone: '中性', col: 'a pair of, in pairs', en: 'I need a pair of gloves.', cn: '我需要一副手套。' }
    ]},
    { line: '窄的流水。stream 也可以表示一股人流或趋势。', items: [
      { w: 'creek', zh: '小溪', scene: '比河更窄的一道流水。', tone: '中性', col: 'a creek near, across the creek', en: 'The path follows the creek.', cn: '小路沿着小溪走。' },
      { w: 'stream', zh: '小河；水流', scene: '持续流着的水。它也可以是一股人流。', tone: '中性', col: 'a mountain stream, a stream of', en: 'A stream runs through the wood.', cn: '一条小河穿过树林。' }
    ]},
    { line: '用来喝水的杯子。mug 有柄，杯身更直。', items: [
      { w: 'cup', zh: '杯子', scene: '喝茶或咖啡的杯子，通常带一个小柄或没有柄。', tone: '中性', col: 'a cup of, paper cup', en: 'Would you like a cup of tea?', cn: '你想喝杯茶吗？' },
      { w: 'mug', zh: '大杯', scene: '筒状、有一个大柄的杯子，常用来装热饮。', tone: '中性', col: 'a coffee mug, a mug of', en: 'He drinks from a large mug.', cn: '他用一只大杯子喝。' }
    ]},
    { line: '把两样放在一起看。compare 看相同和不同，contrast 专看差别。', items: [
      { w: 'compare', zh: '比较', scene: '把两样并排，看哪里像、哪里不像。', tone: '中性', col: 'compare with, compare A and B', en: 'Compare the two routes.', cn: '比较这两条路线。' },
      { w: 'contrast', zh: '对比', scene: '把差别亮出来，一边亮一边暗那种对照。', tone: '中性偏正式', col: 'in contrast, contrast with', en: 'The red door contrasts with the white wall.', cn: '红门和白墙形成对比。' }
    ]},
    { line: '活的东西。animal 是动物，creature 更宽，也可以带一点感情。', items: [
      { w: 'animal', zh: '动物', scene: '鸟、兽、鱼、虫这些动物，通常相对人而言。', tone: '中性', col: 'a wild animal, animal life', en: 'The park protects wild animals.', cn: '公园保护野生动物。' },
      { w: 'creature', zh: '生物', scene: '任何活的东西，有时带“小东西”的口气。', tone: '中性', col: 'a living creature, sea creatures', en: 'The rock pool is full of small creatures.', cn: '岩石池里满是小生物。' }
    ]},
{ line: '有水，但程度不同。moist 常是刚好的湿润，damp 有点潮，wet 是明显湿了。', items: [
      { w: 'damp', zh: '潮湿的', scene: '表面带着潮气，摸上去不干，但还没有滴水。', tone: '中性', col: 'a damp cloth, damp weather', en: 'The towel is still damp.', cn: '毛巾还是潮的。' },
      { w: 'wet', zh: '湿的', scene: '水已经沾上，能滴下来或浸透。', tone: '中性', col: 'wet clothes, soaking wet', en: 'The grass is wet.', cn: '草是湿的。' },
      { w: 'moist', zh: '湿润的', scene: '有一点水分，常常是刚好、并不难受的那种湿。', tone: '中性', col: 'moist soil, moist air', en: 'Keep the soil moist.', cn: '让土壤保持湿润。' },
      { w: 'humid', zh: '潮湿的', scene: '空气里水汽多，天闷、皮肤发黏。', tone: '中性', col: 'humid air, a humid day', en: 'The day was hot and humid.', cn: '这一天又热又潮。' }
    ]},
    { line: '生命结束。death 是那件事，die 是这个动作。', items: [
      { w: 'death', zh: '死亡', scene: '生命停止的那个事实。', tone: '中性', col: 'the death of, cause of death', en: 'The report gives the cause of death.', cn: '报告写出了死因。' },
      { w: 'die', zh: '死亡', scene: '活着的状态结束。', tone: '中性', col: 'die of, die from', en: 'The plant died from lack of water.', cn: '这株植物因缺水死了。' }
    ]},
    { line: '从上到下的距离大。deep 是形容词，depth 是那个深度。', items: [
      { w: 'deep', zh: '深的', scene: '从表面到下面的距离大，如深水和深夜。', tone: '中性', col: 'deep water, a deep voice', en: 'The lake is deep.', cn: '这个湖很深。' },
      { w: 'depth', zh: '深度', scene: '深多少，用一个数或一个程度说出来。', tone: '中性', col: 'the depth of, at a depth of', en: 'The pool has a depth of two metres.', cn: '这个池深两米。' }
    ]},
    { line: '把东西毁掉。destroy 是做这件事，destruction 是毁掉之后的结果。', items: [
      { w: 'destroy', zh: '破坏', scene: '把完好的东西弄到不能再用。', tone: '负面', col: 'destroy the, completely destroy', en: 'The fire destroyed the roof.', cn: '火把屋顶毁掉了。' },
      { w: 'destruction', zh: '破坏', scene: '被毁掉之后的那种状态。', tone: '负面，偏正式', col: 'the destruction of, widespread destruction', en: 'The storm caused widespread destruction.', cn: '暴风雨造成了大范围破坏。' }
    ]},
    { line: '不干净。dirt 是污垢本身，dirty 是沾上了污垢。', items: [
      { w: 'dirt', zh: '污垢', scene: '尘土、泥点这些弄脏表面的东西。', tone: '中性', col: 'dirt on, covered in dirt', en: 'There is dirt on the shoes.', cn: '鞋上有泥。' },
      { w: 'dirty', zh: '脏的', scene: '表面已经沾上污垢，需要洗。', tone: '中性', col: 'dirty clothes, a dirty window', en: 'The windows are dirty.', cn: '窗户是脏的。' }
    ]},
    { line: '缺少水分。dry 是干，drought 是长时间不下雨造成的干旱。', items: [
      { w: 'dry', zh: '干的', scene: '没有水，摸上去不潮。', tone: '中性', col: 'dry clothes, a dry climate', en: 'Hang the clothes until they are dry.', cn: '把衣服挂到干。' },
      { w: 'drought', zh: '干旱', scene: '很久不下雨，地和河都缺水。', tone: '中性', col: 'a severe drought, during the drought', en: 'The drought lasted all summer.', cn: '干旱持续了整个夏天。' }
    ]},
    { line: '喝的东西。drink 最普通，beverage 更书面。', items: [
      { w: 'drink', zh: '饮料；喝', scene: '一杯可以喝的东西，或喝这个动作。', tone: '中性', col: 'a cold drink, food and drink', en: 'Would you like a drink?', cn: '你想喝点什么吗？' },
      { w: 'beverage', zh: '饮料', scene: '书面里对喝的东西的说法，菜单上常见。', tone: '偏正式', col: 'hot beverages, a beverage list', en: 'Hot beverages are served in the hall.', cn: '大厅里供应热饮。' }
    ]},
    { line: '把东西送到该去的地方。', items: [
      { w: 'deliver', zh: '递送', scene: '把包裹、信或货交到收件人手里。', tone: '中性', col: 'deliver to, deliver a parcel', en: 'The shop delivers on Fridays.', cn: '这家店星期五送货。' },
      { w: 'delivery', zh: '递送', scene: '送货这件事，或被送来的那一批。', tone: '中性', col: 'home delivery, a delivery of', en: 'The delivery arrived at noon.', cn: '这批货中午到了。' }
    ]},
    { line: '住在某个地方的人。', items: [
      { w: 'dweller', zh: '居民', scene: '住在某一类地方的人，如城市居民。书面里常见。', tone: '偏正式', col: 'city dweller, cave dweller', en: 'City dwellers use the metro.', cn: '城市居民乘地铁。' },
      { w: 'resident', zh: '居民', scene: '正式住在一个地方的人，不是短期游客。', tone: '中性偏正式', col: 'local residents, a resident of', en: 'Residents were told about the road closure.', cn: '居民被告知这条路封闭。' }
    ]},
{ line: '做错了的地方。', items: [
      { w: 'error', zh: '错误', scene: '算错、写错或机器出了差错的那一处。', tone: '中性', col: 'an error in, human error', en: 'There is an error in the total.', cn: '总数里有一处错误。' },
      { w: 'mistake', zh: '错误', scene: '人做了一个不该做的选择或动作。', tone: '中性', col: 'make a mistake, by mistake', en: 'I took the wrong bus by mistake.', cn: '我上错了公共汽车。' }
    ]},
    { line: '经过一段时间之后才到。eventually 强调过程终于走完，finally 强调排在最后。', items: [
      { w: 'eventually', zh: '最后', scene: '中间拖了一阵，事情还是发生了。', tone: '中性', col: 'eventually the, eventually arrived', en: 'The bus eventually arrived.', cn: '公共汽车最后还是到了。' },
      { w: 'finally', zh: '终于；最后', scene: '等待结束，或一系列步骤里的最后一步。', tone: '中性', col: 'finally arrived, and finally', en: 'Finally, close the window.', cn: '最后，把窗户关上。' }
    ]},
    { line: '好到让人想停下来称赞。程度和侧重点不一样。', items: [
      { w: 'excellent', zh: '极好的', scene: '质量高，几乎挑不出毛病。', tone: '褒义', col: 'excellent work, an excellent result', en: 'The meal was excellent.', cn: '这顿饭好极了。' },
      { w: 'outstanding', zh: '杰出的', scene: '从一群里明显高出一截。', tone: '褒义，偏正式', col: 'an outstanding student, outstanding performance', en: 'She gave an outstanding performance.', cn: '她的表现很杰出。' },
      { w: 'wonderful', zh: '极好的', scene: '让人心里发亮，想跟别人分享。', tone: '褒义，语气暖', col: 'a wonderful view, wonderful news', en: 'We had a wonderful day.', cn: '我们度过了非常好的一天。' },
      { w: 'fantastic', zh: '极好的；奇异的', scene: '好得让人睁大眼。它也可以表示奇异、不寻常。', tone: '褒义，偏口语', col: 'a fantastic idea, fantastic news', en: 'That is a fantastic idea.', cn: '那是个极好的主意。' }
    ]},
    { line: '心里的感觉。emotion 是一种情绪，feeling 更宽，feel 是感觉到。', items: [
      { w: 'emotion', zh: '情绪', scene: '喜、怒、怕这类心里的状态。', tone: '中性', col: 'an emotion of, mixed emotions', en: 'Fear is a strong emotion.', cn: '恐惧是一种强烈的情绪。' },
      { w: 'feeling', zh: '感觉；情绪', scene: '身体或心里的一种感觉，也可以是情绪。', tone: '中性', col: 'a feeling of, a strange feeling', en: 'I had a feeling that the bus was late.', cn: '我有一种公共汽车晚点了的感觉。' },
      { w: 'feel', zh: '感觉', scene: '你察觉到冷、累或高兴。', tone: '中性', col: 'feel tired, feel that', en: 'I feel tired after the walk.', cn: '走完这段路我感觉累。' },
      { w: 'mood', zh: '情绪', scene: '一段时间里的心情，如高兴或低落。', tone: '中性', col: 'in a good mood, a mood of', en: 'She was in a good mood.', cn: '她心情很好。' }
    ]},
    { line: '在银幕上放的故事。film 英式更常见，movie 美式更常见。', items: [
      { w: 'film', zh: '电影', scene: '在电影院或屏幕上放的影片。', tone: '中性', col: 'a film about, watch a film', en: 'We watched a film about the sea.', cn: '我们看了一部关于海的电影。' },
      { w: 'movie', zh: '电影', scene: '和 film 是同一类东西，美式英语里更常说 movie。', tone: '中性', col: 'a movie theatre, go to a movie', en: 'The movie starts at eight.', cn: '电影八点开始。' }
    ]},
    { line: '把坏了的东西弄好。fix 还可以表示固定。', items: [
      { w: 'fix', zh: '维修；固定', scene: '把出了故障的东西修好，或把它钉牢。', tone: '中性，偏口语', col: 'fix a bike, fix to', en: 'Can you fix the lamp?', cn: '你能把这盏灯修好吗？' },
      { w: 'repair', zh: '修理', scene: '把损坏的部分修好，书面和店铺里都常见。', tone: '中性', col: 'repair a roof, under repair', en: 'The roof is under repair.', cn: '屋顶正在修理。' },
      { w: 'mend', zh: '修补', scene: '把裂开或破了的地方补上，如补衣服或修篱笆。', tone: '中性', col: 'mend a fence, mend clothes', en: 'She mended the torn sleeve.', cn: '她把撕破的袖子补好了。' }
    ]},
    { line: '走进去。enter 是动作，entrance 是门口，entry 是进入这件事或一条记录。', items: [
      { w: 'enter', zh: '进入', scene: '从门外走到里面。', tone: '中性', col: 'enter the, enter a room', en: 'Enter the building by the side door.', cn: '从侧门进入这栋楼。' },
      { w: 'entrance', zh: '入口', scene: '走进去的那扇门或那个口。这张卡的原文写成了“人口”。', tone: '中性', col: 'the main entrance, entrance to', en: 'The entrance is on the left.', cn: '入口在左边。' },
      { w: 'entry', zh: '进入；条目', scene: '进入这个动作，或名单、词典里的一条。', tone: '中性', col: 'no entry, an entry in', en: 'The sign says no entry.', cn: '牌子上写着禁止进入。' }
    ]},
    { line: '突然炸开。explode 是这个动作，explosion 是炸开的那一下。', items: [
      { w: 'explode', zh: '爆炸', scene: '东西突然炸开，或数量猛地涨开。', tone: '中性', col: 'explode in, the bomb exploded', en: 'The firework exploded over the river.', cn: '烟花在河面上空炸开。' },
      { w: 'explosion', zh: '爆炸；爆发', scene: '炸开时的那一声，或数量、情绪突然爆发。', tone: '中性', col: 'an explosion of, a gas explosion', en: 'There was an explosion of interest.', cn: '兴趣突然爆发了。' }
    ]},
    { line: '在原有的之外再加的。', items: [
      { w: 'extra', zh: '额外的', scene: '计划之外又多出来的一份。', tone: '中性', col: 'an extra day, extra time', en: 'We need an extra chair.', cn: '我们需要再加一把椅子。' },
      { w: 'additional', zh: '附加的；额外的', scene: '在已经有的上面再补上的，书面里更常见。', tone: '偏正式', col: 'additional information, an additional fee', en: 'There is an additional fee for bags.', cn: '行李要另收费。' }
    ]},
    { line: '在外面，不是内部。', items: [
      { w: 'external', zh: '外部的', scene: '在物体或机构的外面，书面里常见。', tone: '偏正式', col: 'an external wall, external examiner', en: 'The external wall needs paint.', cn: '外墙需要刷漆。' },
      { w: 'outside', zh: '外面的', scene: '不在里面，在户外或范围之外。', tone: '中性', col: 'outside the, an outside door', en: 'Wait outside the office.', cn: '在办公室外面等。' }
    ]},
    { line: '能核对的真实情况。fact 是那条事实，factual 是符合事实的。', items: [
      { w: 'fact', zh: '事实', scene: '可以核对、不是猜测的那一条。', tone: '中性', col: 'in fact, a fact about', en: 'The date is a fact.', cn: '这个日期是事实。' },
      { w: 'factual', zh: '事实的', scene: '内容按照事实写，不靠想象。', tone: '偏正式', col: 'a factual report, factual information', en: 'The report is factual.', cn: '这份报告是据实写的。' }
    ]},
    { line: '距离更远。farther 多指实际路程，further 也可以指程度上更进一步。', items: [
      { w: 'further', zh: '更远的；进一步', scene: '在空间上更远，或在事情上再往前走一步。', tone: '中性', col: 'further information, further away', en: 'We need further information.', cn: '我们需要进一步的信息。' },
      { w: 'farther', zh: '更远的', scene: '实际距离比原来更大，脚还要再走一段。', tone: '中性', col: 'farther than, farther away', en: 'The station is farther than I thought.', cn: '车站比我以为的更远。' },
      { w: 'far', zh: '远的', scene: '距离大，不是近处。further 和 farther 是它的比较级。', tone: '中性', col: 'far from, far away', en: 'The station is far from here.', cn: '车站离这里很远。' }
    ]},
    { line: '树长成片的地方。woods 通常比 forest 小。wood 单独用时多指木材，这里不放进来。', items: [
      { w: 'forest', zh: '森林', scene: '大片的树，走进去很深。', tone: '中性', col: 'a pine forest, in the forest', en: 'The path goes through the forest.', cn: '这条小路穿过森林。' },
      { w: 'woods', zh: '树林', scene: '一片树，通常比森林小，人还能看见边。', tone: '中性', col: 'in the woods, nearby woods', en: 'We walked in the woods.', cn: '我们在树林里走了走。' }
    ]},
{ line: '好运，和一大笔钱。fortune 两个意思都有，luck 只指运气。', items: [
      { w: 'fortune', zh: '财富；运气', scene: '一大笔钱，或难料的好运、坏运。', tone: '中性', col: 'a fortune, fortune and', en: 'The ring cost a fortune.', cn: '这枚戒指花了一大笔钱。' },
      { w: 'luck', zh: '运气', scene: '事情碰巧往好或往坏的方向走，不是靠计划。', tone: '中性', col: 'good luck, a stroke of luck', en: 'Good luck with the test.', cn: '祝你测试顺利。' }
    ]},
{ line: '温度高。hot 是热，heat 是那股热或加热这个动作。', items: [
      { w: 'hot', zh: '热的', scene: '温度高，摸上去或天气让人出汗。', tone: '中性', col: 'a hot day, hot water', en: 'The soup is hot.', cn: '汤是热的。' },
      { w: 'heat', zh: '高温；加热', scene: '那股热本身，或把东西加热。', tone: '中性', col: 'the heat of, heat the', en: 'Heat the milk gently.', cn: '把牛奶慢慢加热。' }
    ]},
    { line: '身体处于好的状态。health 是这件事，healthy 是这样的。', items: [
      { w: 'health', zh: '健康', scene: '身体或心理好不好的整体状况。', tone: '中性', col: 'in good health, public health', en: 'Walking is good for your health.', cn: '走路对健康有好处。' },
      { w: 'healthy', zh: '健康的', scene: '身体状态好，或食物对身体有益。', tone: '褒义', col: 'a healthy diet, feel healthy', en: 'She eats a healthy breakfast.', cn: '她吃一顿健康的早餐。' }
    ]},
    { line: '付钱住的地方。hotel 通常是旅馆，hostel 更便宜、常是多人合住。', items: [
      { w: 'hotel', zh: '旅馆', scene: '出门时付钱住的楼，有自己的房间。', tone: '中性', col: 'a hotel room, stay at a hotel', en: 'We stayed at a small hotel.', cn: '我们住在一家小旅馆。' },
      { w: 'hostel', zh: '旅社', scene: '价钱较低的住处，常有共用的厨房或宿舍。', tone: '中性', col: 'a youth hostel, stay in a hostel', en: 'The hostel is near the station.', cn: '这家旅社在车站附近。' }
    ]},
    { line: '不猛、不刺。', items: [
      { w: 'gentle', zh: '温和的', scene: '动作或语气很轻，不伤人。', tone: '褒义', col: 'a gentle voice, gentle with', en: 'Be gentle with the puppy.', cn: '对小狗要轻一点。' },
      { w: 'mild', zh: '温和的', scene: '天气、味道或病情不强烈。', tone: '中性', col: 'a mild winter, mild pain', en: 'The winter was mild.', cn: '那个冬天很温和。' }
    ]},
    { line: '去捕猎。hunting 是这件事，hunt 是去做。', items: [
      { w: 'hunt', zh: '打猎', scene: '出去寻找并捕捉动物，或四处寻找某物。', tone: '中性', col: 'hunt for, hunt animals', en: 'They hunt for mushrooms in the wood.', cn: '他们在林子里找蘑菇。' },
      { w: 'hunting', zh: '打猎', scene: '捕猎这件活动本身。', tone: '中性', col: 'go hunting, hunting season', en: 'Hunting is banned in the park.', cn: '公园里禁止打猎。' }
    ]},
    { line: '船停靠的地方。harbour 是港湾，port 也可以是港口，另有“持”的意思。', items: [
      { w: 'harbour', zh: '海港', scene: '船可以停进来、被陆地挡住风浪的水域。美式拼写是 harbor。', tone: '中性', col: 'a natural harbour, in the harbour', en: 'The boats stay in the harbour.', cn: '船停在港口里。' },
      { w: 'port', zh: '港口', scene: '船只装卸货物和上下人的港口。这个词也可以表示持、端。', tone: '中性', col: 'a fishing port, at the port', en: 'The ship reached the port at dawn.', cn: '船在黎明时到达港口。' }
    ]},
    { line: '转折：承认另一面。', items: [
      { w: 'however', zh: '然而', scene: '先说了一面，再用然而把相反的那面接上。它也可以表示无论怎样。', tone: '中性偏书面', col: 'however the, however it', en: 'The room is small. However, it is bright.', cn: '房间很小。然而，它很亮。' },
      { w: 'nevertheless', zh: '然而；不过', scene: '尽管前面有困难，事情还是这样。语气比 however 更书面。', tone: '正式', col: 'nevertheless the, but nevertheless', en: 'It rained. Nevertheless, we walked.', cn: '下雨了。不过我们还是走了。' }
    ]},
    { line: '给人带路，或走在前面。', items: [
      { w: 'guide', zh: '向导；引导', scene: '带路的人，或把别人领到该去的地方。', tone: '中性', col: 'a tour guide, guide somebody', en: 'The guide led us through the market.', cn: '向导带我们穿过市场。' },
      { w: 'lead', zh: '引导；领导', scene: '走在前面，或负责带着一群人。', tone: '中性', col: 'lead the, lead to', en: 'She led the group to the hall.', cn: '她把这群人领到大厅。' }
    ]},
    { line: '付钱使用别人的东西。hire 常是短期租用，rent 常是房子的租金或租住。', items: [
      { w: 'hire', zh: '租用', scene: '短期租一辆车、一条船或一个人的服务。', tone: '中性', col: 'hire a car, for hire', en: 'We hired a car for the weekend.', cn: '我们周末租了一辆车。' },
      { w: 'rent', zh: '房租；租', scene: '为住房按期付的钱，或租下一处房子。', tone: '中性', col: 'pay the rent, rent a flat', en: 'The rent is due on Monday.', cn: '房租星期一到期。' }
    ]},
    { line: '山。mountain 更高，hill 是小山。', items: [
      { w: 'mountain', zh: '高山', scene: '高出周围很多、常常有陡坡的山。', tone: '中性', col: 'a high mountain, in the mountains', en: 'The mountain is covered in snow.', cn: '这座山被雪盖着。' },
      { w: 'hill', zh: '小山', scene: '坡度较缓、没那么高的山丘。', tone: '中性', col: 'a green hill, over the hill', en: 'The house sits on a hill.', cn: '房子在一座小山上。' }
    ]},
    { line: '挡住伤害。', items: [
      { w: 'protect', zh: '保护', scene: '把人或东西护住，不让它受伤。', tone: '中性', col: 'protect from, protect against', en: 'The coat protects you from the rain.', cn: '外套让你不被雨淋。' },
      { w: 'guard', zh: '保卫', scene: '守在旁边，防止别人闯进来或把东西拿走。', tone: '中性', col: 'guard the, a security guard', en: 'Two people guard the entrance.', cn: '两个人守着入口。' }
    ]},
{ line: '在内部，不是外面。internal 还可以表示国内的。', items: [
      { w: 'inside', zh: '里面的', scene: '在一个空间的内部，不是门外。', tone: '中性', col: 'inside the, an inside pocket', en: 'The keys are inside the bag.', cn: '钥匙在包里面。' },
      { w: 'interior', zh: '内部的', scene: '一个房间或一个国家的内部。书面里更常见。', tone: '偏正式', col: 'the interior of, interior design', en: 'The interior of the hall is wood.', cn: '大厅内部是木头的。' },
      { w: 'internal', zh: '内部的；国内的', scene: '机构或物体内部的。说国家时，它也可以表示国内的。', tone: '偏正式', col: 'internal walls, internal flights', en: 'The memo is for internal use.', cn: '这份备忘录供内部使用。' }
    ]},
    { line: '穿在外面的上衣。jacket 较短，coat 通常更长。', items: [
      { w: 'jacket', zh: '夹克', scene: '穿在衬衫外面、通常到腰或臀的短外套。', tone: '中性', col: 'a leather jacket, wear a jacket', en: 'He put on a jacket.', cn: '他穿上了一件夹克。' },
      { w: 'coat', zh: '外套', scene: '更长的外衣，用来挡风或挡雨。', tone: '中性', col: 'a winter coat, coat pocket', en: 'Take a coat. It is cold.', cn: '带件外套。天冷。' }
    ]},
{ line: '留住，不丢掉。', items: [
      { w: 'keep', zh: '保持', scene: '让某物继续在手里或继续是原来的状态。', tone: '中性', col: 'keep the, keep doing', en: 'Keep the receipt.', cn: '把收据留着。' },
      { w: 'retain', zh: '保留', scene: '正式地说把权利、水分或人员留住。', tone: '正式', col: 'retain the, retain information', en: 'The soil retains water.', cn: '土壤能保住水分。' }
    ]},
    { line: '孩子。child 是一个孩子，kids 是口语里的孩子们。', items: [
      { w: 'child', zh: '孩子', scene: '一个还没成年的人。', tone: '中性', col: 'a child of, the child', en: 'The child waited with her father.', cn: '孩子和父亲一起等。' },
      { w: 'kids', zh: '小孩', scene: '口语里说的孩子们。', tone: '偏口语', col: 'the kids, kids and', en: 'The kids are in the garden.', cn: '孩子们在花园里。' }
    ]},
{ line: '结婚这件事，和举行婚礼的那一天。', items: [
      { w: 'marriage', zh: '婚姻', scene: '两个人结成夫妻之后的那种关系。', tone: '中性', col: 'a happy marriage, marriage to', en: 'Their marriage lasted fifty years.', cn: '他们的婚姻持续了五十年。' },
      { w: 'wedding', zh: '婚礼', scene: '举行结婚仪式的那一天和那场典礼。', tone: '中性', col: 'a wedding day, at the wedding', en: 'The wedding is in June.', cn: '婚礼在六月。' }
    ]},
    { line: '听到的声音。noise 多指吵、不想听的，sound 是声音本身。', items: [
      { w: 'noise', zh: '噪声', scene: '吵、乱、让人想躲开的声音。', tone: '中性，常偏负面', col: 'a loud noise, traffic noise', en: 'The noise kept her awake.', cn: '噪声让她睡不着。' },
      { w: 'sound', zh: '声音', scene: '耳朵能听见的声音。它也可以表示健康的或海峡。', tone: '中性', col: 'the sound of, a strange sound', en: 'I heard the sound of rain.', cn: '我听见了雨声。' }
    ]},
    { line: '地图上方的那个方向。', items: [
      { w: 'north', zh: '北', scene: '四个基本方向里的北。', tone: '中性', col: 'in the north, north of', en: 'The lake is north of the town.', cn: '湖在镇子的北边。' },
      { w: 'northern', zh: '北部的', scene: '位于北部的，或带有北部特点的。', tone: '中性', col: 'northern cities, the northern part', en: 'The northern road is quieter.', cn: '北边的那条路更安静。' },
      { w: 'northeast', zh: '东北', scene: '北和东之间的那个方向。', tone: '中性', col: 'to the northeast, northeast of', en: 'The hills lie to the northeast.', cn: '山在东北方向。' }
    ]},
    { line: '距离不远。', items: [
      { w: 'near', zh: '近的', scene: '离得不远，伸手或走几步就到。', tone: '中性', col: 'near the, near to', en: 'The shop is near the station.', cn: '商店在车站附近。' },
      { w: 'nearby', zh: '在附近', scene: '就在不远的地方，常放在名词后面或单独用。', tone: '中性', col: 'a nearby cafe, live nearby', en: 'There is a cafe nearby.', cn: '附近有一家咖啡馆。' }
    ]},
{ line: '大片的咸水。ocean 是洋，sea 通常没那么大。', items: [
      { w: 'ocean', zh: '海洋', scene: '地球上连成一片的大洋。', tone: '中性', col: 'the ocean, across the ocean', en: 'The ship crossed the ocean.', cn: '船穿过了大洋。' },
      { w: 'sea', zh: '海', scene: '比洋小一些、靠近陆地的海。', tone: '中性', col: 'by the sea, the sea', en: 'The town is by the sea.', cn: '这个镇子靠海。' }
    ]},
    { line: '用镜头留下来的图像。picture 也可以是画出来的图。', items: [
      { w: 'photo', zh: '照片', scene: '用相机拍下来的图像，是 photograph 的日常说法。', tone: '偏口语', col: 'a photo of, take a photo', en: 'She took a photo of the bridge.', cn: '她给桥拍了张照片。' },
      { w: 'picture', zh: '图画；照片', scene: '画出来的图，或一张照片。', tone: '中性', col: 'a picture of, draw a picture', en: 'The child drew a picture.', cn: '孩子画了一张图。' }
    ]},
{ line: '程度不小，但还没到“非常”。', items: [
      { w: 'quite', zh: '相当', scene: '比一点点多，又没到极点。', tone: '中性', col: 'quite good, quite a', en: 'The room is quite small.', cn: '房间相当小。' },
      { w: 'rather', zh: '相当', scene: '和 quite 接近，常带一点出乎意料，如 rather cold。', tone: '中性', col: 'rather than, rather cold', en: 'The water is rather cold.', cn: '水相当冷。' }
    ]},
    { line: '不多见。rare 是少见，scarce 是供应不够、很难找到。', items: [
      { w: 'rare', zh: '稀有的', scene: '不常出现，看见一次会觉得少。', tone: '中性', col: 'a rare bird, rare cases', en: 'This bird is rare here.', cn: '这种鸟在这里很少见。' },
      { w: 'scarce', zh: '缺乏的', scene: '需要的东西不够，找起来费劲。', tone: '中性偏正式', col: 'scarce resources, scarce water', en: 'Clean water was scarce.', cn: '干净的水很紧缺。' }
    ]},
    { line: '把过去的事从脑子里找出来。', items: [
      { w: 'remember', zh: '记得', scene: '事情还在记忆里，你能把它说出来。', tone: '中性', col: 'remember to, remember that', en: 'I remember the way.', cn: '我记得那条路。' },
      { w: 'recall', zh: '记起', scene: '费一点劲，把忘掉的细节再想起来。', tone: '偏正式', col: 'recall that, recall a name', en: 'She could not recall his name.', cn: '她想不起他的名字。' }
    ]},
    { line: '从天上落下的水。rain 是雨本身，rainfall 是下了多少。', items: [
      { w: 'rain', zh: '雨', scene: '从云里落下的水。作动词是下雨。', tone: '中性', col: 'heavy rain, in the rain', en: 'We walked in the rain.', cn: '我们在雨里走。' },
      { w: 'rainfall', zh: '降雨', scene: '一段时间里落下的雨量。', tone: '偏正式', col: 'annual rainfall, heavy rainfall', en: 'Rainfall is high in this valley.', cn: '这个山谷降雨量大。' }
    ]},
    { line: '用武力拿走别人的东西。', items: [
      { w: 'rob', zh: '掠夺；抢劫', scene: '从人或地方把东西抢走。', tone: '负面', col: 'rob somebody, rob a bank', en: 'Thieves robbed the shop.', cn: '小偷抢劫了这家店。' },
      { w: 'robbery', zh: '抢劫', scene: '抢劫这件事本身。', tone: '负面', col: 'a bank robbery, armed robbery', en: 'The robbery happened at night.', cn: '抢劫发生在夜里。' }
    ]},
    { line: '拿另一个来顶上原来的。', items: [
      { w: 'replace', zh: '代替', scene: '把旧的拿走，换上新的，或由别人接替。', tone: '中性', col: 'replace with, replace somebody', en: 'Replace the broken bulb.', cn: '把坏了的灯泡换掉。' },
      { w: 'substitute', zh: '替代', scene: '临时用另一个来顶，常常不是原来那一个。', tone: '中性偏正式', col: 'a substitute for, substitute A for B', en: 'Honey is a substitute for sugar.', cn: '蜂蜜可以代替糖。' }
    ]},
  ];

  const SOLOS = [
{ w: 'break the ice', zh: '打破僵局', scene: '房间里没人说话，你讲一句轻松的话，冰面裂开，谈话开始了。', tone: '偏口语', col: 'break the ice with, an ice-breaker', en: 'He told a joke to break the ice.', cn: '他讲了个笑话来打破僵局。' },
    { w: 'resilient', zh: '有韧性的', scene: '树枝被压弯，手松开后又弹回原来的样子。', tone: '褒义', col: 'resilient to, a resilient community', en: 'The town was resilient after the flood.', cn: '洪水之后，这个镇子恢复得很快。' },
    { w: 'follow up', zh: '跟进', scene: '第一次联系之后，你再写一封信或再打一个电话，把事情接上。', tone: '中性', col: 'follow up on, a follow-up', en: 'I will follow up by email tomorrow.', cn: '我明天会用邮件跟进。' },
    { w: 'meticulous', zh: '一丝不苟的', scene: '人把每个小数点和每个角落都检查过，桌上没有潦草的痕迹。', tone: '褒义', col: 'meticulous about, meticulous attention', en: 'She is meticulous about the figures.', cn: '她对数字一丝不苟。' },
    { w: 'on the same page', zh: '达成共识', scene: '大家看着同一页纸，对下一步没有各想各的。', tone: '偏口语', col: 'get on the same page, be on the same page', en: 'Let us get on the same page before we start.', cn: '开始之前我们先把想法对齐。' },
    { w: 'figure out', zh: '弄明白', scene: '一团乱线在手里慢慢被解开，答案出现了。', tone: '偏口语', col: 'figure out how, figure something out', en: 'I cannot figure out this instruction.', cn: '我弄不明白这条说明。' },
    { w: 'ambiguous', zh: '模棱两可的', scene: '一句话有两扇门，听的人不知道该进哪一扇。', tone: '中性偏正式', col: 'ambiguous wording, deliberately ambiguous', en: 'The instruction is ambiguous.', cn: '这条说明有歧义。' },
    { w: 'get the hang of', zh: '掌握窍门', scene: '一开始手是生的，练过几次之后动作突然顺了。', tone: '偏口语', col: 'get the hang of something', en: 'She soon got the hang of the software.', cn: '她很快就摸熟了这个软件。' },
    { w: 'a piece of cake', zh: '小菜一碟', scene: '任务轻得像拿起一块蛋糕，人不需要费力。', tone: '偏口语', col: 'be a piece of cake', en: 'The first question was a piece of cake.', cn: '第一题非常容易。' },
    { w: 'run out of', zh: '用完', scene: '瓶子倒过来，最后一滴也没有了。', tone: '偏口语', col: 'run out of time, run out of money', en: 'We ran out of paper.', cn: '我们的纸用完了。' },
    { w: 'keep in mind', zh: '记住；放在心上', scene: '你把一件事放在眼前的架子上，做决定时还能看见它。', tone: '中性', col: 'keep something in mind', en: 'Keep the deadline in mind.', cn: '把截止日期放在心上。' },
    { w: 'call it a day', zh: '今天到此为止', scene: '工具放下，灯关掉，今天的工作就停在这里。', tone: '偏口语', col: 'call it a day', en: 'We were tired, so we called it a day.', cn: '我们累了，于是今天就到这里。' },
    { w: 'reluctant', zh: '不情愿的', scene: '脚已经在门口，人还是不想迈出去。', tone: '中性', col: 'reluctant to, a reluctant smile', en: 'He was reluctant to sign the form.', cn: '他不太愿意在表格上签名。' },
    { w: 'look forward to', zh: '期待', scene: '你看着前方的日子，心里是高兴的，不是担心。', tone: '中性', col: 'look forward to doing', en: 'I look forward to meeting you.', cn: '我期待和你见面。' },
    { w: 'versatile', zh: '多用途的；多才多艺的', scene: '一把工具能做好几样事，或一个人换几个角色都顺。', tone: '褒义', col: 'a versatile player, versatile enough', en: 'The tool is versatile and light.', cn: '这个工具用途多，而且轻。' },
    { w: 'under the weather', zh: '身体不适', scene: '人没有大病，但脸色不好，想躺一下。', tone: '偏口语', col: 'feel under the weather', en: 'She stayed home because she felt under the weather.', cn: '她觉得不舒服，所以待在家里。' },
    { w: 'inevitable', zh: '不可避免的', scene: '石头已经从坡上松开，掉下去只是时间问题。', tone: '偏正式', col: 'inevitable result, almost inevitable', en: 'Change was inevitable.', cn: '变化是不可避免的。' },
    { w: 'bring up', zh: '提出（话题）', scene: '你把一个话题从桌下拿到桌面上，让大家看见。', tone: '偏口语', col: 'bring up a subject, bring something up', en: 'She brought up the question of cost.', cn: '她提出了费用的问题。' },
    { w: 'prioritize', zh: '优先处理', scene: '一叠任务里，你把最要紧的那张放到最上面。', tone: '中性', col: 'prioritize tasks, prioritize over', en: 'We should prioritize safety.', cn: '我们应该把安全放在优先位置。' },
    { w: 'hit the road', zh: '上路；出发', scene: '包已经拉上，人走出门，行程开始。', tone: '偏口语', col: 'hit the road', en: 'We hit the road before sunrise.', cn: '我们日出前就上路了。' },
    { w: 'the ball is in your court', zh: '该你做决定了', scene: '球已经滚到你这边，下一拍要由你来打。', tone: '偏口语', col: 'the ball is in your court', en: 'I have sent the form, so the ball is in your court.', cn: '表格我已经寄出，接下来该你决定了。' },
    { w: 'genuine', zh: '真正的；真诚的', scene: '东西不是仿的，笑容也不是装出来的。', tone: '褒义', col: 'genuine leather, a genuine interest', en: 'She showed a genuine interest in the work.', cn: '她对这项工作表现出真正的兴趣。' },
    { w: 'come up with', zh: '想出', scene: '脑子里一亮，一个新主意被你拿到桌上。', tone: '偏口语', col: 'come up with an idea, come up with a plan', en: 'They came up with a simpler plan.', cn: '他们想出了一个更简单的计划。' },
    { w: 'overwhelmed', zh: '不知所措的', scene: '事情像潮水漫过头顶，人一时不知道先抓哪一件。', tone: '中性，常偏负面', col: 'overwhelmed by, feel overwhelmed', en: 'She felt overwhelmed by the workload.', cn: '工作量让她不知所措。' },
    { w: 'cut corners', zh: '偷工减料', scene: '本该走完整的路，人斜着抄近路，质量就少了一块。', tone: '贬义，偏口语', col: 'cut corners on', en: 'Do not cut corners on safety.', cn: '安全上不要偷工减料。' },
    { w: 'once in a blue moon', zh: '极少', scene: '蓝月亮很少出现，这件事也难得发生一次。', tone: '偏口语', col: 'once in a blue moon', en: 'He visits only once in a blue moon.', cn: '他极少过来。' },
    { w: 'catch up', zh: '赶上；叙旧', scene: '你跑到前面那个人旁边，或者久别后把近况补上。', tone: '偏口语', col: 'catch up with, catch up on', en: 'I need to catch up on the news.', cn: '我需要补上这些消息。' },
    { w: 'get along with', zh: '相处融洽', scene: '两个人坐在一起不别扭，日子过得顺。', tone: '偏口语', col: 'get along with somebody', en: 'She gets along with her colleagues.', cn: '她和同事相处得很好。' },
    { w: 'ambitious', zh: '有抱负的', scene: '眼睛看着比现在更高的那一层，并且打算爬上去。', tone: '中性偏褒义', col: 'ambitious plans, ambitious for', en: 'The project is ambitious but possible.', cn: '这个项目目标很高，但做得到。' },
    { w: 'in a nutshell', zh: '简而言之', scene: '一大段话被收进一个小壳里，只剩核心那一句。', tone: '偏口语', col: 'in a nutshell', en: 'In a nutshell, the plan saves time.', cn: '简而言之，这个计划能省时间。' },
    { w: 'point out', zh: '指出', scene: '你用手指或一句话，让别人看见一处原来没注意的地方。', tone: '中性', col: 'point out that, point something out', en: 'She pointed out a mistake in the chart.', cn: '她指出了图表里的一处错误。' },
    { w: 'carry on', zh: '继续', scene: '脚步没有停，事情沿着原来的方向再往前走。', tone: '偏口语', col: 'carry on with, carry on doing', en: 'Please carry on with your work.', cn: '请继续你的工作。' },
    { w: 'vivid', zh: '生动的', scene: '画面颜色很浓，闭上眼还能看见。', tone: '褒义', col: 'a vivid description, vivid memories', en: 'She gave a vivid description of the storm.', cn: '她把暴风雨描述得很生动。' },
    { w: 'cost an arm and a leg', zh: '贵得要命', scene: '价签高到像要你再付出一条胳膊。', tone: '偏口语', col: 'cost an arm and a leg', en: 'The repairs cost an arm and a leg.', cn: '修理费贵得惊人。' },
    { w: 'grateful', zh: '感激的', scene: '别人帮了你，你心里暖，想把谢谢说出来。', tone: '褒义', col: 'grateful for, grateful to', en: 'I am grateful for your help.', cn: '感谢你的帮助。' },
    { w: 'make up one\'s mind', zh: '下定决心', scene: '几个选项在眼前转，最后你选定一个，不再晃。', tone: '中性', col: 'make up your mind', en: 'She made up her mind to stay.', cn: '她下定决心留下来。' },
    { w: 'sustainable', zh: '可持续的', scene: '这棵树今年结果，明年还能结果，不会把地力耗尽。', tone: '中性偏正式', col: 'sustainable development, sustainable energy', en: 'The city wants sustainable transport.', cn: '这座城市想要可持续的交通。' },
    { w: 'back up', zh: '支持；备份', scene: '你站到别人身后托一把，或把文件再存一份以防丢失。', tone: '偏口语', col: 'back somebody up, back up a file', en: 'Can you back up the files tonight?', cn: '你今晚能把文件备份一下吗？' },
    { w: 'cautious', zh: '谨慎的', scene: '脚下先试一块石头，确认稳了再把重量放上去。', tone: '中性', col: 'cautious about, a cautious approach', en: 'Be cautious about the icy path.', cn: '结冰的路要小心。' },
    { w: 'learn the ropes', zh: '学会门道', scene: '新水手先看绳结怎么系，慢慢知道这艘船怎么运转。', tone: '偏口语', col: 'learn the ropes', en: 'It takes a month to learn the ropes.', cn: '熟悉这份工作的门道要一个月。' },
    { w: 'spontaneous', zh: '自发的', scene: '没有人事先写在日程上，笑声或决定自己冒出来。', tone: '中性', col: 'a spontaneous decision, spontaneous applause', en: 'The applause was spontaneous.', cn: '掌声是自发的。' },
    { w: 'beat around the bush', zh: '拐弯抹角', scene: '话在灌木丛外面绕，迟迟不走进正题。', tone: '偏口语，常偏负面', col: 'beat around the bush', en: 'Do not beat around the bush.', cn: '别拐弯抹角。' },
    { w: 'acknowledge', zh: '承认', scene: '你点头，表示这件事是真的，或这份帮助你收到了。', tone: '偏正式', col: 'acknowledge that, acknowledge receipt', en: 'He acknowledged that he was late.', cn: '他承认自己迟到了。' },
    { w: 'set up', zh: '建立；安装', scene: '桌子支起来，或一家小组织被搭起来，可以开始用了。', tone: '偏口语', col: 'set up a meeting, set something up', en: 'They set up a scholarship for students.', cn: '他们为学生设立了一项奖学金。' },
    { w: 'get cold feet', zh: '临阵退缩', scene: '都走到门口了，脚突然发凉，人不想进去了。', tone: '偏口语', col: 'get cold feet', en: 'He got cold feet before the speech.', cn: '演讲之前他临阵退缩了。' },
    { w: 'give up', zh: '放弃', scene: '手里的绳子松开，你不再往上爬。', tone: '偏口语', col: 'give up on, give something up', en: 'Do not give up on the first day.', cn: '不要在第一天就放弃。' },
    { w: 'better late than never', zh: '迟到总比不到好', scene: '人晚到了，但还是到了，比一直不出现好。', tone: '偏口语', col: 'better late than never', en: 'The report arrived late, but better late than never.', cn: '报告来晚了，但迟到总比不到好。' },
    { w: 'curious', zh: '好奇的', scene: '门缝里有光，你想知道里面是什么。', tone: '中性偏褒义', col: 'curious about, curious to', en: 'The child was curious about the machine.', cn: '孩子对这台机器很好奇。' },
    { w: 'speak up', zh: '大声说；说出看法', scene: '声音太小，或意见还藏着，你把它放到大家听得见的地方。', tone: '偏口语', col: 'speak up for, speak up about', en: 'Please speak up so everyone can hear.', cn: '请说大声一点，让大家都能听见。' },
    { w: 'out of the blue', zh: '突然；出乎意料', scene: '晴天里一道消息掉下来，事先没有云。', tone: '偏口语', col: 'out of the blue', en: 'The offer came out of the blue.', cn: '这个机会来得非常突然。' },
    { w: 'work out', zh: '解决；锻炼', scene: '一道题被算通，或人在健身房把身体练一遍。两个意思都常见。', tone: '偏口语', col: 'work out a solution, work out at', en: 'We worked out a solution.', cn: '我们想出了一个解决办法。' },
    { w: 'hang in there', zh: '坚持住', scene: '人还挂在绳上，虽然累，但没有松手。', tone: '偏口语，鼓励', col: 'hang in there', en: 'The week is hard, but hang in there.', cn: '这一周很难，但坚持住。' },
    { w: 'take for granted', zh: '视为理所当然', scene: '好东西天天在，你不再回头看它，好像它永远不会离开。', tone: '中性，常带可惜', col: 'take something for granted', en: 'Do not take clean water for granted.', cn: '不要把干净的水当成理所当然。' },
    { w: 'modest', zh: '谦虚的', scene: '成绩放在桌上，人却不把自己举得很高。', tone: '褒义', col: 'a modest person, modest about', en: 'He was modest about the prize.', cn: '他对这个奖很谦虚。' },
    { w: 'fill in', zh: '填写；临时顶替', scene: '表格上的空格被写上字，或一个人临时站到空出的岗位上。', tone: '偏口语', col: 'fill in a form, fill in for', en: 'Please fill in the form.', cn: '请把表格填好。' },
    { w: 'keep an eye on', zh: '留意', scene: '你不盯死，但眼睛时不时回到那个人或那口锅上。', tone: '偏口语', col: 'keep an eye on somebody', en: 'Keep an eye on the oven.', cn: '留意一下烤箱。' },
    { w: 'confident', zh: '自信的', scene: '人站直，相信自己下一步走得过去。', tone: '褒义', col: 'confident about, confident that', en: 'She felt confident about the test.', cn: '她对这次测试有信心。' },
    { w: 'turn out', zh: '结果是', scene: '盒子打开，里面的结果和你事先猜的不一定一样。', tone: '偏口语', col: 'turn out to be, turn out that', en: 'The trip turned out well.', cn: '这次出行结果很好。' },
    { w: 'on the fence', zh: '犹豫不决', scene: '人坐在篱笆上，两边都还没跳下去。', tone: '偏口语', col: 'sit on the fence', en: 'I am still on the fence about the offer.', cn: '我对这个机会还拿不定主意。' },
    { w: 'show up', zh: '出现；到场', scene: '门开了，你期待的那个人真的走进来。', tone: '偏口语', col: 'show up at, show up late', en: 'Only half the class showed up.', cn: '只有一半的学生到了。' },
    { w: 'generous', zh: '慷慨的', scene: '手里的东西给出去时，给得比别人预期的多。', tone: '褒义', col: 'generous with, a generous offer', en: 'They were generous with their time.', cn: '他们很慷慨地付出时间。' },
    { w: 'sleep on it', zh: '考虑一晚再说', scene: '决定先不落笔，睡一觉，明天再看。', tone: '偏口语', col: 'sleep on it', en: 'Do not sign tonight. Sleep on it.', cn: '今晚先别签。考虑一晚再说。' },
    { w: 'run into', zh: '偶遇', scene: '你没有约，却在街角碰上了一个熟人。它也可以表示遇到困难。', tone: '偏口语', col: 'run into somebody, run into trouble', en: 'I ran into an old classmate.', cn: '我偶然遇见了一位老同学。' },
    { w: 'patient', zh: '耐心的', scene: '队还很长，你不跺脚，愿意等。这个词也可以表示病人。', tone: '褒义，说性格时', col: 'patient with, be patient', en: 'Please be patient with the new staff.', cn: '请对新员工耐心一点。' },
    { w: 'get the ball rolling', zh: '开始行动', scene: '球还停着，你推第一下，事情就动起来了。', tone: '偏口语', col: 'get the ball rolling', en: 'Let us get the ball rolling with introductions.', cn: '我们先从自我介绍开始吧。' },
    { w: 'figure of speech', zh: '比喻说法', scene: '这句话不是照字面发生的，它是一幅用来比较的画。', tone: '中性', col: 'a figure of speech', en: 'Break the ice is a figure of speech.', cn: '“打破僵局”是一种比喻说法。' },
    { w: 'by the way', zh: '顺便说一下', scene: '主路还在走，你从旁边插进一个新话题。', tone: '偏口语', col: 'by the way', en: 'By the way, the meeting is at four.', cn: '顺便说一下，会议在四点。' },
    { w: 'take off', zh: '起飞；突然成功', scene: '飞机离开地面。一件产品或事业也可以突然飞起来。', tone: '偏口语', col: 'take off from, the idea took off', en: 'The plane took off on time.', cn: '飞机准点起飞了。' },
    { w: 'frustrated', zh: '沮丧的', scene: '你想把门打开，钥匙却总是不对，手里的劲没处使。', tone: '中性，偏负面', col: 'frustrated with, frustrated by', en: 'He was frustrated by the delay.', cn: '耽搁让他很沮丧。' },
    { w: 'no wonder', zh: '难怪', scene: '原因已经看见了，结果也就不奇怪了。', tone: '偏口语', col: 'no wonder', en: 'She practised daily. No wonder she improved.', cn: '她每天都练习。难怪她进步了。' },
    { w: 'pick up', zh: '捡起；学会', scene: '东西从地上被拿起来。也可以是无意中把一门技能捡进手里。', tone: '偏口语', col: 'pick up a language, pick something up', en: 'She picked up some Spanish on holiday.', cn: '她在假期里学到了一些西班牙语。' },
    { w: 'it\'s up to you', zh: '由你决定', scene: '选择权放在你手里，别人不再替你按下去。', tone: '偏口语', col: 'it is up to you', en: 'It is up to you whether we leave now.', cn: '我们现在走不走，由你决定。' },
    { w: 'end up', zh: '最终处于', scene: '路拐了几道，你最后站在一个事先没计划的地方。', tone: '偏口语', col: 'end up doing, end up in', en: 'We ended up taking the later train.', cn: '我们最后坐了更晚的那班火车。' },
    { w: 'courage', zh: '勇气', scene: '害怕还在，但你还是把脚迈了出去。', tone: '褒义', col: 'the courage to, take courage', en: 'It took courage to admit the mistake.', cn: '承认错误需要勇气。' },
    { w: 'practice makes perfect', zh: '熟能生巧', scene: '同一只曲子练很多遍，手指终于不再磕绊。', tone: '中性', col: 'practice makes perfect', en: 'Practice makes perfect, so try the sentence again.', cn: '熟能生巧，所以把这个句子再练一遍。' },
    { w: 'step by step', zh: '一步一步', scene: '楼梯一阶一阶走，不试图一步跳到顶。', tone: '中性', col: 'step by step', en: 'We solved the problem step by step.', cn: '我们一步一步解决了这个问题。' },
    { w: 'determined', zh: '坚定的', scene: '风在吹，人还是看着同一个方向，不改道。', tone: '褒义', col: 'determined to, a determined effort', en: 'She is determined to finish the course.', cn: '她决心读完这门课。' },
    { w: 'get through', zh: '度过；完成', scene: '一段难走的路，你还是从这一头走到了那一头。', tone: '偏口语', col: 'get through a day, get through to', en: 'We got through the busy week.', cn: '我们熬过了忙碌的一周。' },
    { w: 'keep it up', zh: '继续保持', scene: '你已经做得好，旁边的人希望你不要把这个势头放下。', tone: '偏口语，鼓励', col: 'keep it up', en: 'Your scores are better. Keep it up.', cn: '你的分数更好了。继续保持。' },
    { w: 'concept', zh: '概念', scene: '脑子里先有一个还没变成具体东西的想法，像“公平”这个概念。', tone: '偏正式', col: 'the concept of, a basic concept', en: 'The concept of gravity is introduced early.', cn: '重力这个概念很早就被介绍。' },
    { w: 'economy', zh: '经济', scene: '一个地方生产、买卖和就业连成的整片活动。', tone: '中性', col: 'the economy, a strong economy', en: 'The local economy depends on tourism.', cn: '当地经济依赖旅游业。' },
    { w: 'technology', zh: '科技', scene: '工具和知识合在一起，让人能做成以前做不到的事。', tone: '中性', col: 'modern technology, information technology', en: 'New technology changed the factory.', cn: '新技术改变了这家工厂。' },
    { w: 'available', zh: '可获得的；有空的', scene: '东西在架上，伸手就能拿到；人有空，可以来。', tone: '中性', col: 'available for, available to', en: 'The book is available in the library.', cn: '这本书在图书馆可以借到。' },
    { w: 'factor', zh: '因素', scene: '结果不是一个原因单独造成的，这是其中一块。', tone: '中性偏正式', col: 'a factor in, a key factor', en: 'Cost was a key factor in the decision.', cn: '成本是这个决定的一个关键因素。' },
    { w: 'participate', zh: '参与', scene: '你不是只在旁边看，而是走进活动里成为其中一员。', tone: '偏正式', col: 'participate in, participate actively', en: 'All students can participate in the survey.', cn: '所有学生都可以参与这项调查。' },
    { w: 'relevant', zh: '相关的', scene: '这张纸和正在讨论的问题连得上，不是随手塞进来的。', tone: '偏正式', col: 'relevant to, relevant information', en: 'Please keep the examples relevant to the topic.', cn: '请让例子和题目相关。' },
    { w: 'valid', zh: '有效的', scene: '票还在有效期内，或一个论证站得住，没有被驳倒。', tone: '中性偏正式', col: 'a valid ticket, a valid argument', en: 'The ticket is valid for one month.', cn: '这张票一个月内有效。' },
    { w: 'strategy', zh: '策略', scene: '你不只看下一步，而是先想好整盘怎么走。', tone: '中性偏正式', col: 'a strategy for, marketing strategy', en: 'The company needs a strategy for growth.', cn: '公司需要一个增长策略。' },
    { w: 'culture', zh: '文化', scene: '一群人长期共享的做法、故事和看法，像节日和待客的方式。', tone: '中性', col: 'local culture, popular culture', en: 'Food is part of local culture.', cn: '食物是当地文化的一部分。' },
    { w: 'design', zh: '设计', scene: '东西还没做出来，纸上已经画出它的样子和用途。', tone: '中性', col: 'design a building, graphic design', en: 'She designed the new library.', cn: '她设计了这座新图书馆。' },
    { w: 'invest', zh: '投资', scene: '钱或时间先放进去，指望以后长出更大的回报。', tone: '中性', col: 'invest in, invest time', en: 'They invested in new equipment.', cn: '他们投资了新设备。' },
    { w: 'philosophy', zh: '哲学；宗旨', scene: '人对世界或对做事方式的一套根本看法。', tone: '偏正式', col: 'a philosophy of, moral philosophy', en: 'The school has a clear philosophy of learning.', cn: '这所学校有一套清楚的学习理念。' },
    { w: 'percent', zh: '百分之……', scene: '把整体切成一百份之后，你指着其中的几份。', tone: '中性', col: 'ten percent, percent of', en: 'Prices rose by five percent.', cn: '价格上涨了百分之五。' },
    { w: 'journal', zh: '期刊；日志', scene: '定期出版的学术杂志，或一个人每天写下的记录。', tone: '中性', col: 'an academic journal, keep a journal', en: 'The article appeared in a medical journal.', cn: '这篇文章发表在一份医学期刊上。' },
    { w: 'potential', zh: '潜力', scene: '种子还没长高，但土里已经有能长成大树的可能。', tone: '中性', col: 'potential for, potential to', en: 'The student has potential in science.', cn: '这个学生在科学方面有潜力。' },
{ w: 'authority', zh: '权威；当局', scene: '说话能算数的人或机构，像能拍板的那一方。', tone: '正式', col: 'an authority on, the local authority', en: 'She is an authority on local history.', cn: '她是地方史方面的权威。' },
    { w: 'identify', zh: '识别', scene: '在一堆里把那一个认出来，或说清它是什么。', tone: '中性偏正式', col: 'identify as, identify with', en: 'Can you identify the bird?', cn: '你能认出这是什么鸟吗？' },
    { w: 'principle', zh: '原则', scene: '做事时不肯丢掉的那条根本道理，像“先保证安全”。', tone: '正式', col: 'in principle, a basic principle', en: 'The plan follows a simple principle.', cn: '这个计划遵循一条简单原则。' },
    { w: 'chapter', zh: '章节', scene: '书被分成的一章，有自己的开头和结尾。', tone: '中性', col: 'a chapter on, the next chapter', en: 'Chapter three explains the method.', cn: '第三章解释了方法。' },
    { w: 'equate', zh: '等同', scene: '你把两件并不完全一样的事放在等号两边。', tone: '正式', col: 'equate with, equate to', en: 'Do not equate price with quality.', cn: '不要把价格等同于质量。' },
    { w: 'item', zh: '项目；物品', scene: '清单上的一条，或手里单独的一件东西。', tone: '中性', col: 'an item of, the next item', en: 'The next item on the list is cost.', cn: '清单上的下一项是费用。' },
    { w: 'reside', zh: '居住', scene: '人长期把家安在某个地方，不是路过住一晚。', tone: '正式', col: 'reside in, reside at', en: 'They reside in a small town.', cn: '他们住在一个小镇上。' },
    { w: 'circumstance', zh: '情况', scene: '这件事发生时周围的那些条件，像时间、地点和原因。', tone: '正式', col: 'under the circumstances, in this circumstance', en: 'Under the circumstances, we waited.', cn: '在这种情况下，我们等了等。' },
    { w: 'compensate', zh: '补偿', scene: '损失已经造成，另一方拿出钱或别的东西来补上。', tone: '正式', col: 'compensate for, compensate somebody', en: 'The company compensated her for the delay.', cn: '公司为这次耽搁给了她补偿。' },
    { w: 'contribute', zh: '贡献', scene: '你往共同的那一堆里放入一份，可以是钱、时间或想法。', tone: '中性', col: 'contribute to, contribute money', en: 'Everyone contributed to the discussion.', cn: '每个人都参与了讨论。' },
    { w: 'convene', zh: '召集', scene: '有人把该来的人请到同一张桌子旁，会议开始。', tone: '正式', col: 'convene a meeting, convene in', en: 'The board will convene on Friday.', cn: '董事会将在星期五开会。' },
    { w: 'core', zh: '核心', scene: '水果最中间那一块，或一件事里最不能拿掉的部分。', tone: '中性', col: 'the core of, core skills', en: 'Trust is at the core of the team.', cn: '信任是这个团队的核心。' },
    { w: 'imply', zh: '暗示', scene: '话没有直说，但听的人能从字缝里读出那个意思。', tone: '偏正式', col: 'imply that, seem to imply', en: 'His tone implied that he disagreed.', cn: '他的语气暗示他不同意。' },
    { w: 'layer', zh: '层', scene: '一层叠在另一层上面，像衣服或地层。', tone: '中性', col: 'a layer of, the outer layer', en: 'Add a layer of paint.', cn: '再涂一层漆。' },
    { w: 'locate', zh: '位于；找到位置', scene: '你指出它在地图或空间里的哪一点。', tone: '中性偏正式', col: 'located in, locate the', en: 'The office is located near the station.', cn: '办公室位于车站附近。' },
    { w: 'maximise', zh: '最大化', scene: '你把一个数或一个效果往能到的最高处推。', tone: '偏正式', col: 'maximise the benefit, maximise profit', en: 'The timetable maximises study time.', cn: '这个时间表把学习时间放到最大。' },
    { w: 'negate', zh: '否定', scene: '一个事实或一个效果被抵消，好像没有发生过。', tone: '正式', col: 'negate the effect, negate a claim', en: 'The new data negate the old claim.', cn: '新数据否定了原来的说法。' },
    { w: 'physical', zh: '身体的；物理的', scene: '和身体或物质有关，能被看见或碰见，不是抽象的。', tone: '中性', col: 'physical activity, physical health', en: 'Walking is good physical activity.', cn: '走路是很好的身体活动。' },
    { w: 'technical', zh: '技术的', scene: '话说到机器、方法和细节这一层，外行听着会费劲。', tone: '中性', col: 'technical skill, technical problem', en: 'The manual is too technical for me.', cn: '这份说明书对我来说太技术化了。' },
    { w: 'volume', zh: '量；音量', scene: '有多少，或声音开到多大。也可以是一册书。', tone: '中性', col: 'the volume of, turn the volume', en: 'The volume of mail has increased.', cn: '邮件的数量增加了。' },
    { w: 'detrimental', zh: '有害的', scene: '这件事会把本来好的那一面往下拉。', tone: '正式，负面', col: 'detrimental to, detrimental effect', en: 'Noise is detrimental to sleep.', cn: '噪音对睡眠有害。' },
    { w: 'unprecedented', zh: '前所未有的', scene: '往过去翻，找不到同样的一次。', tone: '正式，语气强', col: 'unprecedented growth, unprecedented in', en: 'The storm was unprecedented.', cn: '这场暴风雨是前所未有的。' },
    { w: 'Do you work or study?', zh: '你工作还是学习？', scene: '口语第一部分的开场问句，考官在问你现在的日常身份。', tone: '口语考题', col: 'I work as, I study', en: 'I study nursing at a local college.', cn: '我在当地一所学院学护理。' },
    { w: 'What do you do in your free time?', zh: '空闲时你做什么？', scene: '问的是下班或下课后，你自己选择去做的事。', tone: '口语考题', col: 'in my free time, I usually', en: 'In my free time I cook and walk.', cn: '空闲时我做饭、散步。' },
    { w: 'Do you like your hometown?', zh: '你喜欢你的家乡吗？', scene: '问你对长大或长期生活的那个地方是什么感觉。', tone: '口语考题', col: 'my hometown, I like it because', en: 'I like my hometown because it is quiet.', cn: '我喜欢家乡，因为它很安静。' },
    { w: 'Do you prefer mornings or evenings?', zh: '你喜欢早上还是晚上？', scene: '要你在一天的两头里选一个，并说出原因。', tone: '口语考题', col: 'I prefer, because', en: 'I prefer mornings because I think clearly.', cn: '我更喜欢早上，因为那时思路清楚。' },
    { w: 'How often do you use public transport?', zh: '你多久坐一次公共交通？', scene: '问频率，回答里通常有每天、每周或很少。', tone: '口语考题', col: 'every day, once a week', en: 'I use the bus every weekday.', cn: '我每个工作日都坐公交。' },
    { w: 'Do you enjoy cooking?', zh: '你喜欢做饭吗？', scene: '问的是你愿不愿意自己下厨，不是问你会不会。', tone: '口语考题', col: 'I enjoy, I do not cook often', en: 'I enjoy cooking simple meals.', cn: '我喜欢做简单的饭。' },
    { w: 'What kind of music do you like?', zh: '你喜欢什么音乐？', scene: '问类型，回答可以是一种风格和你什么时候听。', tone: '口语考题', col: 'I like, I listen to', en: 'I like quiet music in the evening.', cn: '我晚上喜欢听安静的音乐。' },
    { w: 'Do you like reading?', zh: '你喜欢阅读吗？', scene: '问你是否愿意拿起书或长文章来读。', tone: '口语考题', col: 'I like reading, I read', en: 'I like reading on the train.', cn: '我喜欢在火车上看书。' },
    { w: 'Is it important to learn English?', zh: '学英语重要吗？', scene: '要你对“学英语有没有必要”给出看法和一句理由。', tone: '口语考题', col: 'it is important because', en: 'It is important because many courses use English.', cn: '这很重要，因为很多课程用英语。' },
    { w: 'Do you use social media much?', zh: '你常用社交媒体吗？', scene: '问你每天在社交网站上花多少时间、用来做什么。', tone: '口语考题', col: 'I use, I rarely use', en: 'I use it to message my family.', cn: '我用它给家人发消息。' },
    { w: 'Describe a skill you learned recently.', zh: '描述一项你最近学会的技能。', scene: '口语第二部分的题目卡，要你讲一项新学会的本事。', tone: '口语考题', col: 'I learned, recently', en: 'I recently learned to change a bike tyre.', cn: '我最近学会了换自行车轮胎。' },
    { w: 'Describe a person who has influenced you.', zh: '描述一个影响你的人。', scene: '要你选出一个人，并说他或她怎样改变了你的做法。', tone: '口语考题', col: 'influenced me by, a person who', en: 'My teacher influenced me to keep practising.', cn: '我的老师影响我坚持练习。' },
    { w: 'Describe a memorable trip.', zh: '描述一次难忘的旅行。', scene: '要你讲一次出行：去了哪里、做了什么、为什么记得住。', tone: '口语考题', col: 'I went to, I remember', en: 'I remember a short trip to the coast.', cn: '我记得一次去海边的短途旅行。' },
    { w: 'Describe a difficult decision you made.', zh: '描述你做过的一个艰难决定。', scene: '两个选择都有代价，你要讲你最后怎么选。', tone: '口语考题', col: 'I decided to, it was difficult because', en: 'I decided to change my course.', cn: '我决定换了课程。' },
    { w: 'Describe a place where you like to relax.', zh: '描述一个你喜欢放松的地方。', scene: '要你讲一个能让自己慢下来的具体地点。', tone: '口语考题', col: 'I relax, a place where', en: 'I relax in a park near my home.', cn: '我在家附近的公园里放松。' },
    { w: 'Describe a goal you want to achieve.', zh: '描述一个你想实现的目标。', scene: '要你说出一个还没完成、但打算去做的目标。', tone: '口语考题', col: 'my goal is, I want to', en: 'My goal is to finish this course.', cn: '我的目标是读完这门课。' },
    { w: 'Describe a piece of technology you use every day.', zh: '描述你每天用的一件科技产品。', scene: '要你讲一件天天用的设备，以及它帮你做什么。', tone: '口语考题', col: 'I use, every day', en: 'I use my phone to check the bus times.', cn: '我用手机查公交时间。' },
    { w: 'Describe a time you helped someone.', zh: '描述你帮助别人的一次经历。', scene: '要你讲一次具体的帮忙，不是泛泛说你乐于助人。', tone: '口语考题', col: 'I helped, at that time', en: 'I helped a neighbour carry a box.', cn: '我帮邻居搬过一个箱子。' },
    { w: 'Describe an interesting conversation you had.', zh: '描述一次有趣的对话。', scene: '要你讲一次谈话：和谁、谈了什么、为什么有意思。', tone: '口语考题', col: 'I talked with, we talked about', en: 'We talked about a film for an hour.', cn: '我们聊一部电影聊了一个小时。' },
    { w: 'Describe a book or film that inspired you.', zh: '描述一本激励你的书或电影。', scene: '要你选一本书或一部电影，并说它让你想做什么。', tone: '口语考题', col: 'it inspired me to, a book that', en: 'The film inspired me to visit the city.', cn: '那部电影让我想去那座城市看看。' },
    { w: 'Why do people work night shifts?', zh: '人们为什么上夜班？', scene: '讨论题，要你说出上夜班的原因，比如医院和交通不能停。', tone: '口语考题', col: 'people work nights because', en: 'Hospitals need staff at night.', cn: '医院夜里也需要有人值班。' },
    { w: 'Does technology make people less sociable?', zh: '科技让人更不爱社交吗？', scene: '讨论题，要你对“屏幕会不会让人更少面对面”给出看法。', tone: '口语考题', col: 'I think, on the other hand', en: 'It can connect people who live far apart.', cn: '它可以把住得很远的人连在一起。' },
    { w: 'Should governments support small businesses?', zh: '政府应该支持小企业吗？', scene: '讨论题，要你说政府该不该用政策或资金帮助小店。', tone: '口语考题', col: 'I think governments should', en: 'Small shops give a street its character.', cn: '小店让一条街有自己的样子。' },
    { w: 'How has shopping changed in recent years?', zh: '近年来购物方式有何变化？', scene: '讨论题，对比以前走进商店和现在用手机下单。', tone: '口语考题', col: 'in recent years, people now', en: 'Many people now order clothes online.', cn: '现在很多人在网上买衣服。' },
    { w: 'Is it better to work for yourself or a company?', zh: '自己干还是给公司干更好？', scene: '讨论题，要你比较自己做主和加入一家公司。', tone: '口语考题', col: 'it depends, working for', en: 'It depends on how much risk you want.', cn: '这取决于你愿意承担多少风险。' },
    { w: 'Why is learning a foreign language important?', zh: '为什么学一门外语很重要？', scene: '讨论题，要你说出学另一门语言能打开什么。', tone: '口语考题', col: 'it is important because', en: 'A new language opens new work and travel.', cn: '一门新语言会打开新的工作和出行机会。' },
    { w: 'What problems do big cities face?', zh: '大城市面临哪些问题？', scene: '讨论题，常见方向是住房、交通和噪音，要你选具体的说。', tone: '口语考题', col: 'big cities face, one problem is', en: 'One problem is the cost of housing.', cn: '一个问题是住房费用。' },
    { w: 'Will robots replace human workers?', zh: '机器人会取代人类工人吗？', scene: '讨论题，要你说哪些活可能被机器做，哪些仍然需要人。', tone: '口语考题', col: 'some jobs, people will still', en: 'Robots may do repeated factory tasks.', cn: '机器人可能会做重复的工厂工序。' },
    { w: 'How can people achieve a work-life balance?', zh: '怎样才能兼顾工作和生活？', scene: '讨论题，要你说出把工作和休息分开的具体做法。', tone: '口语考题', col: 'people can, set a time', en: 'People can set a time to stop working.', cn: '人们可以定一个停下工作的时间。' },
    { w: 'Should university be free?', zh: '大学应该免费吗？', scene: '讨论题，要你对学费该由谁来付给出看法。', tone: '口语考题', col: 'I think, university fees', en: 'Fees stop some people from studying.', cn: '学费会挡住一些人去读书。' },
    { w: 'a blessing in disguise', zh: '因祸得福', scene: '当时看着是坏事，后来才发现它带来了好处。', tone: '偏口语', col: 'a blessing in disguise', en: 'Losing that job was a blessing in disguise.', cn: '丢掉那份工作后来看是因祸得福。' },
    { w: 'go the extra mile', zh: '多做一步', scene: '该做的已经做完，你又往前多走了一步。', tone: '偏口语，褒义', col: 'go the extra mile for', en: 'She went the extra mile for the new student.', cn: '她为那位新同学多做了一步。' },
    { w: 'a steep learning curve', zh: '学起来很陡', scene: '一开始要学的东西又多又快，像一条很陡的坡。', tone: '中性', col: 'a steep learning curve', en: 'The new software has a steep learning curve.', cn: '这个新软件一开始很难上手。' },
    { w: 'burn the midnight oil', zh: '开夜车', scene: '别人睡了，你还点着灯在做事。', tone: '偏口语', col: 'burn the midnight oil', en: 'She burned the midnight oil before the exam.', cn: '考试前她开了夜车。' },
    { w: 'hit the nail on the head', zh: '说中要害', scene: '锤子正好砸在钉子上，一句话正好说中问题的中心。', tone: '偏口语', col: 'hit the nail on the head', en: 'You hit the nail on the head.', cn: '你说中要害了。' },
    { w: 'the tip of the iceberg', zh: '冰山一角', scene: '水面上只露出一小角，水面下还有一大块没被看见。', tone: '中性', col: 'the tip of the iceberg', en: 'This complaint is the tip of the iceberg.', cn: '这起投诉只是冰山一角。' },
    { w: 'a double-edged sword', zh: '双刃剑', scene: '同一把剑，一面能帮你，另一面也会伤到你。', tone: '中性', col: 'a double-edged sword', en: 'Social media is a double-edged sword.', cn: '社交媒体是一把双刃剑。' },
    { w: 'over the moon', zh: '欣喜若狂', scene: '高兴得像整个人被抬到月亮上面。', tone: '偏口语，褒义', col: 'over the moon about', en: 'She was over the moon about the result.', cn: '她为这个结果高兴坏了。' },
    { w: 'think outside the box', zh: '换个角度想', scene: '不沿着旧格子走，换一条别人没试过的思路。', tone: '偏口语', col: 'think outside the box', en: 'We had to think outside the box.', cn: '我们不得不换个角度想。' },
    { w: 'increase = rise', zh: '增加 = 上升', scene: '数字往上走。increase 最普通，rise 常用于价格、温度和水位。', tone: '同义替换', col: 'an increase in, a rise in', en: 'There was a rise in prices.', cn: '价格上升了。' },
    { w: 'decrease = decline', zh: '减少 = 下降', scene: '数字往下走。decrease 直接说变少，decline 常带“逐渐下降”。', tone: '同义替换', col: 'a decrease in, a decline in', en: 'There was a decline in sales.', cn: '销售额下降了。' },
    { w: 'important = crucial', zh: '重要 = 关键', scene: '都是“要紧”。crucial 比 important 更靠近“缺了就不行”。', tone: '同义替换', col: 'important for, crucial to', en: 'Sleep is crucial to memory.', cn: '睡眠对记忆至关重要。' },
    { w: 'problem = issue', zh: '问题 = 议题', scene: '都指要处理的事。problem 更像障碍，issue 更像被拿出来讨论的议题。', tone: '同义替换', col: 'a problem with, an issue with', en: 'Cost is a major issue.', cn: '费用是一个主要问题。' },
    { w: 'help = assist', zh: '帮助 = 协助', scene: '都是伸手帮一下。assist 更正式，常见于写作和服务场合。', tone: '同义替换', col: 'help with, assist in', en: 'Staff assisted the visitors.', cn: '工作人员协助了来访者。' },
    { w: 'show = demonstrate', zh: '显示 = 表明', scene: '都是让人看见。demonstrate 更正式，常说数据或实验表明。', tone: '同义替换', col: 'show that, demonstrate that', en: 'The figures demonstrate a change.', cn: '这些数字表明发生了变化。' },
    { w: 'big = substantial', zh: '大的 = 可观的', scene: '说数量大时，substantial 比 big 更适合书面语，表示大到值得注意。', tone: '同义替换', col: 'a big increase, a substantial increase', en: 'There was a substantial increase.', cn: '出现了相当大的增长。' },
    { w: 'many = numerous', zh: '许多 = 众多', scene: '都是数量多。numerous 更书面，常修饰可数的人或事例。', tone: '同义替换', col: 'many people, numerous studies', en: 'Numerous studies report the same result.', cn: '许多研究报告了同样的结果。' },
    { w: 'enough = sufficient', zh: '足够 = 充分', scene: '都是“够了”。sufficient 更正式，常出现在学术句里。', tone: '同义替换', col: 'enough time, sufficient evidence', en: 'There is sufficient evidence.', cn: '证据是充分的。' },
    { w: 'start = commence', zh: '开始 = 开始（正式）', scene: '都是起步。commence 几乎只出现在很正式的通知里。', tone: '同义替换', col: 'start to, commence on', en: 'The course commences on Monday.', cn: '课程星期一开始。' },
    { w: 'end = terminate', zh: '结束 = 终止', scene: '都是停住。terminate 更硬，常用于合同或正式程序被停止。', tone: '同义替换', col: 'end in, terminate a contract', en: 'The contract was terminated.', cn: '合同被终止了。' },
    { w: 'buy = purchase', zh: '买 = 购买', scene: '都是付钱拿走。purchase 是书面和商店用语里的“购买”。', tone: '同义替换', col: 'buy a, purchase a', en: 'Customers can purchase tickets online.', cn: '顾客可以在网上购票。' },
    { w: 'get = obtain', zh: '得到 = 获得', scene: '都是拿到手。obtain 更正式，常说获得信息、许可或资格。', tone: '同义替换', col: 'get a, obtain a', en: 'Students must obtain permission.', cn: '学生必须获得许可。' },
    { w: 'need = require', zh: '需要 = 要求', scene: '都是“缺这个不行”。require 更正式，常用于规定和要求。', tone: '同义替换', col: 'need to, require that', en: 'The job requires a licence.', cn: '这份工作要求有执照。' },
    { w: 'try = attempt', zh: '尝试 = 试图', scene: '都是去做，但不保证成功。attempt 更书面。', tone: '同义替换', col: 'try to, attempt to', en: 'They attempted to reduce waste.', cn: '他们试图减少浪费。' },
    { w: 'choose = select', zh: '选择 = 挑选', scene: '都是从几个里挑一个。select 更像经过挑选的正式动作。', tone: '同义替换', col: 'choose to, select from', en: 'Students select one topic.', cn: '学生挑选一个题目。' },
    { w: 'enough evidence = adequate proof', zh: '足够的证据', scene: '两边都是“证据够用了”。adequate proof 比 enough evidence 更书面。', tone: '同义替换', col: 'enough evidence, adequate proof', en: 'There is adequate proof of the change.', cn: '这一变化有充分证据。' },
    { w: 'old people = the elderly', zh: '老人 = 老年人', scene: '都指上了年纪的人。the elderly 是更稳妥的书面说法。', tone: '同义替换', col: 'old people, the elderly', en: 'The elderly need reliable transport.', cn: '老年人需要可靠的交通。' },
    { w: 'young people = youngsters', zh: '年轻人', scene: '都指年轻人。youngsters 更口语，写作里更常写 young people。', tone: '同义替换', col: 'young people, youngsters', en: 'Young people use the library after school.', cn: '年轻人放学后会用图书馆。' },
    { w: 'children = minors', zh: '孩子 = 未成年人', scene: '都是还没成年的人。minors 是法律和规定里的说法。', tone: '同义替换', col: 'children under, minors', en: 'The rule protects minors.', cn: '这条规则保护未成年人。' },
    { w: 'workers = employees', zh: '工人 = 雇员', scene: '都是干活的人。employees 强调受雇于一家机构。', tone: '同义替换', col: 'workers in, employees of', en: 'The firm employs 40 employees.', cn: '这家公司有 40 名雇员。' },
    { w: 'company = firm', zh: '公司 = 企业', scene: '都是做生意的机构。firm 常让人想到专业服务公司。', tone: '同义替换', col: 'a company that, a law firm', en: 'The firm opened a new office.', cn: '这家公司开了一间新办公室。' },
    { w: 'job = occupation', zh: '工作 = 职业', scene: 'job 常指一份具体岗位，occupation 更像一个人从事的职业类别。', tone: '同义替换', col: 'a job in, occupation', en: 'Please state your occupation.', cn: '请填写你的职业。' },
    { w: 'salary = wage', zh: '薪水 = 工资', scene: '都是劳动换来的钱。salary 常按年或按月，wage 常按小时或按周。', tone: '同义替换', col: 'a monthly salary, an hourly wage', en: 'The hourly wage is listed on the form.', cn: '时薪写在表格上。' },
    { w: 'city = urban area', zh: '城市 = 城区', scene: '都指城里。urban area 是写作里更偏统计和规划的说法。', tone: '同义替换', col: 'in the city, urban areas', en: 'Urban areas grew quickly.', cn: '城区增长得很快。' },
    { w: 'countryside = rural area', zh: '乡村 = 农村地区', scene: '都指城外的乡村。rural area 更常见于报告和地图说明。', tone: '同义替换', col: 'in the countryside, rural areas', en: 'Buses are less frequent in rural areas.', cn: '农村地区的公交班次更少。' },
    { w: 'pollution = contamination', zh: '污染', scene: '都是被弄脏。contamination 更常指水、食物或土壤被有害物进入。', tone: '同义替换', col: 'air pollution, water contamination', en: 'Water contamination closed the beach.', cn: '水污染使海滩关闭了。' },
    { w: 'dangerous = hazardous', zh: '危险 = 有害', scene: '都是有风险。hazardous 更正式，常贴在化学品和工地警告上。', tone: '同义替换', col: 'dangerous to, hazardous waste', en: 'The waste is hazardous.', cn: '这些废弃物是有害的。' },
    { w: 'harmful = detrimental', zh: '有害的', scene: '都会带来损害。detrimental 更书面，常接 to。', tone: '同义替换', col: 'harmful to, detrimental to', en: 'The chemical is detrimental to fish.', cn: '这种化学品对鱼有害。' },
    { w: 'cause = lead to', zh: '导致', scene: '都是原因推出结果。lead to 把过程写成一条通向结果的路。', tone: '同义替换', col: 'cause a, lead to', en: 'Poor sleep can lead to mistakes.', cn: '睡眠不足会导致出错。' },
    { w: 'because of = due to', zh: '因为 = 由于', scene: '都用来引出原因。due to 更常见于书面说明。', tone: '同义替换', col: 'because of the, due to the', en: 'The delay was due to the storm.', cn: '耽搁是由于暴风雨。' },
    { w: 'so = consequently', zh: '所以 = 因此', scene: '都连接结果。consequently 是书面语里的“因此”。', tone: '同义替换', col: 'so the, consequently', en: 'Demand fell. Consequently, prices dropped.', cn: '需求下降了，因此价格也降了。' },
    { w: 'but = however', zh: '但是 = 然而', scene: '都表示转折。however 常放在句首，后面加逗号，语气更书面。', tone: '同义替换', col: 'but the, however', en: 'The plan is cheap. However, it is slow.', cn: '这个计划便宜。然而，它比较慢。' },
    { w: 'also = in addition', zh: '也 = 此外', scene: '都是再补一条。in addition 用来另起一句，把下一条加上。', tone: '同义替换', col: 'also, in addition', en: 'In addition, the bus runs on Sundays.', cn: '此外，这路公交星期天也开。' },
    { w: 'about = approximately', zh: '大约', scene: '都是不精确的数字。approximately 是书面的“大约”。', tone: '同义替换', col: 'about 20, approximately 20', en: 'The hall holds approximately 200 people.', cn: '这个大厅大约能坐 200 人。' },
    { w: 'almost = nearly', zh: '几乎', scene: '都是差一点到。两者在“几乎”这个意思上可以互换。', tone: '同义替换', col: 'almost all, nearly all', en: 'Nearly all students finished on time.', cn: '几乎所有学生都按时完成了。' },
    { w: 'fast = rapid', zh: '快速', scene: '都是速度快。rapid 更书面，常形容变化发生得快。', tone: '同义替换', col: 'a fast change, rapid change', en: 'The city saw rapid change.', cn: '这座城市变化很快。' },
    { w: 'slow = gradual', zh: '缓慢 = 逐渐', scene: '都是不突然。gradual 强调一点一点发生，中间有过程。', tone: '同义替换', col: 'a slow rise, a gradual rise', en: 'There was a gradual rise in temperature.', cn: '温度逐渐上升。' },
    { w: 'clear = evident', zh: '清楚 = 明显', scene: '都是能看出来。evident 更书面，表示证据已经摆在眼前。', tone: '同义替换', col: 'it is clear, it is evident', en: 'It is evident that demand has grown.', cn: '需求已经增长，这一点很明显。' },
    { w: 'common = widespread', zh: '常见 = 普遍', scene: '都是到处能见到。widespread 强调分布得很广，不只是常常发生。', tone: '同义替换', col: 'a common problem, widespread use', en: 'The practice is widespread.', cn: '这种做法很普遍。' },
    { w: 'rare = scarce', zh: '稀少', scene: 'rare 是少见，scarce 是供应不够、很难找到。', tone: '同义替换', col: 'a rare case, scarce resources', en: 'Clean water was scarce.', cn: '干净的水很紧缺。' },
    { w: 'main = primary', zh: '主要', scene: '都是排在最前的那个。primary 更正式，常说 primary reason。', tone: '同义替换', col: 'the main reason, the primary reason', en: 'Cost was the primary reason.', cn: '费用是主要原因。' },
    { w: 'basic = fundamental', zh: '基本 = 根本', scene: '都在底层。fundamental 比 basic 更靠近“没有它就不成立”。', tone: '同义替换', col: 'basic skills, a fundamental change', en: 'This is a fundamental change.', cn: '这是一个根本性的变化。' },
    { w: 'whole = entire', zh: '整个', scene: '都是全部、不剩一块。entire 更书面。', tone: '同义替换', col: 'the whole day, the entire day', en: 'The entire street was closed.', cn: '整条街都封闭了。' },
    { w: 'area = region', zh: '区域 = 地区', scene: '都是一片地方。region 通常比 area 更大，像一个国家里的一个地区。', tone: '同义替换', col: 'in this area, in the region', en: 'Rain is heavy in the region.', cn: '这个地区雨很大。' },
    { w: 'way = method', zh: '方式 = 方法', scene: '都是怎么做。method 更像一套有步骤的方法。', tone: '同义替换', col: 'a way to, a method of', en: 'They used a new method of teaching.', cn: '他们用了一种新的教学方法。' },
    { w: 'aim = objective', zh: '目标', scene: '都是想达到的那一点。objective 更常见于计划和报告。', tone: '同义替换', col: 'the aim of, the objective of', en: 'The objective of the plan is to cut waste.', cn: '这个计划的目标是减少浪费。' },
    { w: 'result = outcome', zh: '结果', scene: '都是做完之后出现的东西。outcome 更书面，常用于研究和项目。', tone: '同义替换', col: 'as a result, the outcome of', en: 'The outcome of the study was clear.', cn: '这项研究的结果很清楚。' },
    { w: 'reason = factor', zh: '原因 = 因素', scene: 'reason 是为什么，factor 是促成结果的因素之一，不一定是唯一原因。', tone: '同义替换', col: 'the reason for, a key factor', en: 'Price was a key factor.', cn: '价格是一个关键因素。' },
    { w: 'answer = solution', zh: '答案 = 解决办法', scene: 'answer 可以是问题的回答，solution 是把一个困难解开的办法。', tone: '同义替换', col: 'the answer to, a solution to', en: 'We need a solution to the delay.', cn: '我们需要一个解决耽搁的办法。' },
    { w: 'change = alter', zh: '改变 = 更改', scene: '都是让它变得不一样。alter 更正式，常表示做一处调整。', tone: '同义替换', col: 'change the, alter the', en: 'The editor altered one sentence.', cn: '编辑改了一句话。' },
    { w: 'make worse = exacerbate', zh: '使更糟 = 加剧', scene: '都是把不好的情况再推重一点。exacerbate 是书面动词。', tone: '同义替换', col: 'make the problem worse, exacerbate', en: 'The heat exacerbated the shortage.', cn: '高温加剧了短缺。' },
    { w: 'make better = improve', zh: '使更好 = 改善', scene: '都是往好的方向推。improve 可以直接作动词。', tone: '同义替换', col: 'make it better, improve', en: 'The new lights improved the street.', cn: '新的灯改善了这条街。' },
    { w: 'reduce = cut', zh: '减少 = 削减', scene: '都是把数量往下砍。cut 更干脆，常说 cut costs。', tone: '同义替换', col: 'reduce costs, cut costs', en: 'The school cut costs.', cn: '学校削减了成本。' },
    { w: 'stop = prevent', zh: '阻止 = 防止', scene: 'stop 是让它停下，prevent 是提前不让它发生。', tone: '同义替换', col: 'stop the, prevent the', en: 'The barrier prevented the flood.', cn: '这道屏障挡住了洪水。' },
    { w: 'ban = prohibit', zh: '禁止', scene: '都是不许做。prohibit 更正式，常见于法规。', tone: '同义替换', col: 'ban smoking, prohibit smoking', en: 'The rule prohibits phones in the exam.', cn: '规定禁止在考试中使用手机。' },
    { w: 'allow = permit', zh: '允许', scene: '都是让它可以发生。permit 更正式。', tone: '同义替换', col: 'allow somebody to, permit somebody to', en: 'The pass permits entry.', cn: '这张通行证允许进入。' },
    { w: 'think = believe', zh: '认为 = 相信', scene: '表达看法时两者接近。believe 语气更像“我持这个看法”。', tone: '同义替换', col: 'I think, I believe', en: 'I believe the plan can work.', cn: '我认为这个计划行得通。' },
    { w: 'say = state', zh: '说 = 陈述', scene: '都是把话讲出来。state 是正式的陈述，常用于报告。', tone: '同义替换', col: 'say that, state that', en: 'The report states that sales fell.', cn: '报告陈述销售额下降了。' },
    { w: 'explain = account for', zh: '解释 = 说明原因', scene: 'explain 是讲明白，account for 专门说明某件事为什么会这样。', tone: '同义替换', col: 'explain why, account for', en: 'The rain accounts for the delay.', cn: '下雨说明了这次耽搁的原因。' },
    { w: 'look at = examine', zh: '看 = 审视', scene: 'look at 是看，examine 是为了弄清而仔细检查。', tone: '同义替换', col: 'look at the, examine the', en: 'Experts examined the data.', cn: '专家仔细查看了数据。' },
    { w: 'find out = discover', zh: '发现', scene: '都是从不知道变成知道。discover 也可以是第一次发现一件原本存在的事。', tone: '同义替换', col: 'find out that, discover that', en: 'Researchers discovered a new pattern.', cn: '研究人员发现了一种新的规律。' },
    { w: 'keep = retain', zh: '保持 = 保留', scene: '都是不丢掉。retain 更正式，常说保留员工、权利或水分。', tone: '同义替换', col: 'keep the, retain the', en: 'The cloth retains water.', cn: '这块布能留住水分。' },
    { w: 'use = utilise', zh: '使用 = 利用', scene: '都是拿来用。utilise 是书面拼法，强调把某物派上用场。', tone: '同义替换', col: 'use the, utilise the', en: 'The plant utilises waste heat.', cn: '这家工厂利用了废热。' },
    { w: 'give = provide', zh: '给 = 提供', scene: '都是把东西交到对方手里。provide 更正式，常说提供服务或信息。', tone: '同义替换', col: 'give somebody, provide somebody with', en: 'The centre provides free advice.', cn: '这个中心提供免费咨询。' },
    { w: 'build = construct', zh: '建造', scene: '都是把建筑物做起来。construct 更正式，常见于工程说明。', tone: '同义替换', col: 'build a, construct a', en: 'The city constructed a new bridge.', cn: '这座城市建造了一座新桥。' },
    { w: 'grow = expand', zh: '增长 = 扩张', scene: 'grow 是变大或变多，expand 更强调向更大的范围扩出去。', tone: '同义替换', col: 'grow by, expand into', en: 'The shop expanded into two streets.', cn: '这家店扩展到了两条街。' },
    { w: 'famous = renowned', zh: '著名', scene: '都是很多人知道。renowned 更书面，常带敬意。', tone: '同义替换', col: 'famous for, renowned for', en: 'The city is renowned for its food.', cn: '这座城市以食物闻名。' },
    { w: 'rich = affluent', zh: '富裕', scene: '都是钱多。affluent 是书面说法，常形容地区或家庭。', tone: '同义替换', col: 'a rich area, an affluent area', en: 'The school is in an affluent area.', cn: '这所学校位于一个富裕地区。' },
    { w: 'poor = disadvantaged', zh: '贫穷 = 处于不利地位', scene: 'poor 直接说穷，disadvantaged 强调缺少机会和资源。', tone: '同义替换', col: 'poor families, disadvantaged families', en: 'The programme helps disadvantaged families.', cn: '这个项目帮助处于不利地位的家庭。' },
    { w: 'healthy = wholesome', zh: '健康的', scene: 'healthy 最直接。wholesome 常形容食物或风气是有益、正派的。', tone: '同义替换', col: 'healthy food, wholesome food', en: 'The cafe serves wholesome food.', cn: '这家咖啡馆供应有益健康的食物。' },
    { w: 'food = diet', zh: '食物 = 饮食', scene: 'food 是吃的东西，diet 是一个人通常怎么吃、吃什么。', tone: '同义替换', col: 'fresh food, a balanced diet', en: 'A balanced diet includes vegetables.', cn: '均衡的饮食包括蔬菜。' },
    { w: 'traffic jam = congestion', zh: '堵车 = 拥堵', scene: '都是车走不动。congestion 是交通报告里的书面说法。', tone: '同义替换', col: 'a traffic jam, traffic congestion', en: 'Traffic congestion peaks at eight.', cn: '交通拥堵在八点最严重。' },
    { w: 'house = dwelling', zh: '房子 = 住所', scene: 'house 是一栋住房，dwelling 是正式文本里“供人住的地方”。', tone: '同义替换', col: 'a house in, a dwelling', en: 'The site contains 30 dwellings.', cn: '这块地有 30 套住所。' },
    { w: 'money = funding', zh: '钱 = 资金', scene: 'money 是钱本身，funding 是为某个项目拨出的那笔钱。', tone: '同义替换', col: 'enough money, public funding', en: 'The lab lost its funding.', cn: '这个实验室失去了资金。' },
    { w: 'nowadays = currently', zh: '如今 = 目前', scene: '都是说现在。nowadays 带一点和过去对比，currently 只是“此刻、现阶段”。', tone: '同义替换', col: 'nowadays, currently', en: 'The shop is currently closed.', cn: '这家店目前关闭。' },
    { w: 'in the past = previously', zh: '过去 = 以前', scene: '都指向更早的时候。previously 常放在句中，表示在那之前。', tone: '同义替换', col: 'in the past, previously', en: 'The building was previously a school.', cn: '这栋楼以前是一所学校。' },
    { w: 'in the future = in the years to come', zh: '将来', scene: '都是还没到的时间。in the years to come 把“将来”说成今后的那些年。', tone: '同义替换', col: 'in the future, in the years to come', en: 'The town will grow in the years to come.', cn: '今后几年这个镇子还会增长。' },
    { w: 'everywhere = ubiquitous', zh: '到处 = 无处不在', scene: '都是哪儿都能见到。ubiquitous 是很书面的一个形容词。', tone: '同义替换', col: 'everywhere, ubiquitous', en: 'Phones are ubiquitous in the city.', cn: '手机在这座城市里无处不在。' },
    { w: 'necessary = essential', zh: '必要 = 必不可少', scene: '都是不能少。essential 语气更强，靠近“缺了就运转不了”。', tone: '同义替换', col: 'necessary for, essential for', en: 'Water is essential for life.', cn: '水对生命是必不可少的。' },
    { w: 'hard = challenging', zh: '难 = 有挑战', scene: '都是不容易。challenging 比 hard 更中性，常用来肯定一件难但值得做的事。', tone: '同义替换', col: 'a hard task, a challenging task', en: 'The course is challenging but useful.', cn: '这门课有挑战，但有用。' },
{ w: 'academic', zh: '学术的', scene: '和学校、研究、论文有关，不是日常闲聊。', tone: '中性', col: 'academic writing, an academic journal', en: 'The article uses academic language.', cn: '这篇文章用的是学术语言。' },
    { w: 'abandon', zh: '遗弃', scene: '人把东西或计划放下，转身走了，不再回来管。', tone: '负面', col: 'abandon a plan, abandon somebody', en: 'They abandoned the old house.', cn: '他们抛弃了那座旧房子。' },
    { w: 'abide', zh: '遵守', scene: '你按一条规矩待着，不跨出去。', tone: '偏正式', col: 'abide by, abide by the rules', en: 'Players must abide by the rules.', cn: '选手必须遵守规则。' },
    { w: 'abilities', zh: '能力', scene: '一个人能做成的那些事，是 ability 的复数。', tone: '中性', col: 'abilities in, natural abilities', en: 'The test measures language abilities.', cn: '这个测试衡量语言能力。' },
    { w: 'aboriginal', zh: '土著的', scene: '指一个地方最早长期居住的人群，或他们的文化。', tone: '中性', col: 'Aboriginal people, Aboriginal culture', en: 'The museum shows Aboriginal art.', cn: '博物馆展出土著艺术。' },
    { w: 'above', zh: '在上面；高于', scene: '位置在另一件东西的头顶，或数字比另一条线更高。', tone: '中性', col: 'above the, above average', en: 'The lamp hangs above the table.', cn: '灯挂在桌子上方。' },
    { w: 'abruptly', zh: '唐突地', scene: '话或动作突然停住，没有慢慢收尾。', tone: '中性', col: 'stop abruptly, end abruptly', en: 'The music stopped abruptly.', cn: '音乐突然停了。' },
    { w: 'absent', zh: '缺席的', scene: '点名时这个座位是空的，人没到。', tone: '中性', col: 'absent from, absent today', en: 'Two students were absent.', cn: '两名学生缺席。' },
    { w: 'absolutely', zh: '绝对地', scene: '没有留下“也许”，回答是完全的肯定或完全的程度。', tone: '语气强', col: 'absolutely sure, absolutely not', en: 'I am absolutely sure of the time.', cn: '我对时间绝对有把握。' },
    { w: 'absorb', zh: '吸收；理解', scene: '海绵把水吸进去，或脑子把一段话吸收进去。', tone: '中性', col: 'absorb water, absorb information', en: 'The cloth absorbed the spill.', cn: '布把洒出来的水吸干了。' },
    { w: 'abstract', zh: '摘要；抽象的', scene: '论文开头的短摘要，或脱离具体物件的理论。两个意思都常见。', tone: '偏正式', col: 'an abstract of, abstract art', en: 'Read the abstract before the article.', cn: '读正文前先看摘要。' },
    { w: 'abuse', zh: '滥用；虐待', scene: '权力、药物或人对别人被用过了头，造成伤害。', tone: '负面', col: 'drug abuse, abuse of power', en: 'The report describes abuse of the system.', cn: '报告描述了对这套制度的滥用。' },
    { w: 'accent', zh: '口音', scene: '说话时能听出一个人从哪个地方来的那种发音。', tone: '中性', col: 'a strong accent, an accent on', en: 'She speaks with a local accent.', cn: '她说话带当地口音。' },
    { w: 'accompany', zh: '陪伴', scene: '你走在另一个人旁边，一起去。', tone: '中性', col: 'accompany somebody to, accompanied by', en: 'I accompanied her to the clinic.', cn: '我陪她去了诊所。' },
    { w: 'account', zh: '账户；导致', scene: '银行里的账户，或 account for 表示“是……的原因”。', tone: '中性', col: 'a bank account, account for', en: 'Rain accounted for the delay.', cn: '下雨是这次耽搁的原因。' },
    { w: 'acids', zh: '酸', scene: '化学里那一类酸，是 acid 的复数。', tone: '中性', col: 'acids in, weak acids', en: 'The lab stores acids in a locked cupboard.', cn: '实验室把酸锁在柜子里。' },
    { w: 'acoustic', zh: '声学的', scene: '和声音如何传播、如何被听见有关，也常指不插电的木吉他。', tone: '偏技术', col: 'acoustic guitar, acoustic design', en: 'The hall has good acoustic design.', cn: '这个大厅的声学设计很好。' },
    { w: 'across', zh: '穿过；遍及', scene: '从一边走到另一边，或遍布一整片地方。', tone: '中性', col: 'across the road, across the country', en: 'We walked across the bridge.', cn: '我们走过那座桥。' },
    { w: 'actions', zh: '行动', scene: '真正做出来的那些事，不是只停在嘴上。', tone: '中性', col: 'take actions, actions against', en: 'The school took actions to reduce noise.', cn: '学校采取了行动来减少噪音。' },
    { w: 'activates', zh: '激活', scene: '开关被按下，机器或一个过程开始运转。', tone: '中性', col: 'activates the, activates when', en: 'The sensor activates the light.', cn: '传感器会启动这盏灯。' },
    { w: 'active', zh: '积极的', scene: '人在动、在参与，不是坐着旁观。', tone: '褒义', col: 'physically active, an active member', en: 'She is active in the club.', cn: '她在社团里很积极。' },
    { w: 'activities', zh: '活动', scene: '课上或课后组织的一件件事情，是 activity 的复数。', tone: '中性', col: 'outdoor activities, social activities', en: 'The camp offers outdoor activities.', cn: '营地提供户外活动。' },
    { w: 'actors', zh: '演员', scene: '在戏里或电影里扮演角色的人。', tone: '中性', col: 'film actors, the actors in', en: 'The actors rehearsed all morning.', cn: '演员们排练了一上午。' },
    { w: 'actually', zh: '实际上', scene: '把表面的印象翻开，底下真实的情况是这样。', tone: '中性', col: 'actually the, actually happened', en: 'The shop is actually closed on Mondays.', cn: '这家店实际上星期一关门。' },
    { w: 'add', zh: '增加', scene: '在已有的上面再放上一点，总数变大。', tone: '中性', col: 'add to, add something', en: 'Add the sugar to the milk.', cn: '把糖加进牛奶里。' },
    { w: 'addictive', zh: '使人上瘾的', scene: '一碰就还想再来一次，停不下来。', tone: '负面', col: 'highly addictive, an addictive game', en: 'The game is addictive.', cn: '这个游戏容易让人上瘾。' },
    { w: 'additives', zh: '添加剂', scene: '食品或材料里额外加进去的那些成分。', tone: '中性', col: 'food additives, without additives', en: 'The label lists the additives.', cn: '标签上列出了添加剂。' },
    { w: 'address', zh: '地址', scene: '信封上那一行，告诉别人房子在哪条街。', tone: '中性', col: 'a home address, email address', en: 'Write your address on the form.', cn: '把你的地址写在表格上。' },
    { w: 'adjust', zh: '调整', scene: '旋钮转一点，或计划改一点，让它更合适。', tone: '中性', col: 'adjust the, adjust to', en: 'Adjust the chair before you start.', cn: '开始之前先把椅子调好。' },
    { w: 'admin', zh: '行政', scene: '办公室里处理表格和手续的那一类工作，是 administration 的简短说法。', tone: '偏口语', col: 'admin staff, admin work', en: 'The admin office closes at four.', cn: '行政办公室四点关门。' },
    { w: 'administrative', zh: '行政的', scene: '和管理手续、表格、办公室运转有关的。', tone: '正式', col: 'administrative staff, administrative costs', en: 'Administrative costs have risen.', cn: '行政成本上升了。' },
    { w: 'admire', zh: '钦佩', scene: '你看着一个人的做法，心里佩服。', tone: '褒义', col: 'admire somebody for, admire the', en: 'I admire her patience.', cn: '我钦佩她的耐心。' },
    { w: 'adopt', zh: '采取', scene: '你选定一种做法，开始照着做。它也可以表示收养。', tone: '偏正式', col: 'adopt a policy, adopt a child', en: 'The school adopted a new rule.', cn: '学校采取了一项新规定。' },
    { w: 'adults', zh: '成年人', scene: '已经成年的人，相对孩子而言。', tone: '中性', col: 'adults and children, for adults', en: 'The film is for adults.', cn: '这部电影是给成年人看的。' },
    { w: 'advanced', zh: '高级的', scene: '程度已经走得比较远，不是入门那一档。', tone: '中性', col: 'an advanced class, advanced level', en: 'She joined an advanced class.', cn: '她参加了一个高级班。' },
    { w: 'advantages', zh: '优势', scene: '和别的选择比，这一边更有利的那些点。', tone: '中性', col: 'the advantages of, advantages over', en: 'The advantages of the plan are clear.', cn: '这个计划的优势很清楚。' },
    { w: 'adventure', zh: '冒险', scene: '一段不按日常路线走、带点未知的经历。', tone: '中性', col: 'an adventure in, a sense of adventure', en: 'The trip was a real adventure.', cn: '这次出行真是一场冒险。' },
    { w: 'advertisement', zh: '广告', scene: '为了让人来买或来看，登出来的那则宣传。', tone: '中性', col: 'an advertisement for, television advertisement', en: 'I saw an advertisement for the course.', cn: '我看到了这门课的广告。' },
    { w: 'aerobic', zh: '有氧的', scene: '运动时呼吸还能跟上，像慢跑和游泳这一类。', tone: '偏技术', col: 'aerobic exercise, aerobic class', en: 'Walking is aerobic exercise.', cn: '走路是有氧运动。' },
    { w: 'aesthetic', zh: '美学的', scene: '和好看不好看、审美有关，不是只讲功能。', tone: '偏正式', col: 'aesthetic value, an aesthetic choice', en: 'The building has a simple aesthetic.', cn: '这栋建筑的美感很简洁。' },
    { w: 'afford', zh: '买得起', scene: '钱或时间够，你能承担这件事。', tone: '中性', col: 'afford to, can afford', en: 'I cannot afford a new bike.', cn: '我买不起一辆新自行车。' },
    { w: 'Africa', zh: '非洲', scene: '地图上的那一片大陆，不是一个可以替换的普通名词。', tone: '专名', col: 'in Africa, across Africa', en: 'She travelled in Africa.', cn: '她在非洲旅行过。' },
    { w: 'afternoons', zh: '下午', scene: '中午过后到傍晚前的那段时间，这里用了复数，常指一个个下午。', tone: '中性', col: 'on afternoons, in the afternoons', en: 'The shop is quiet in the afternoons.', cn: '这家店下午比较清静。' },
    { w: 'again', zh: '又；再一次', scene: '同一件事再来一遍。', tone: '中性', col: 'once again, try again', en: 'Please say that again.', cn: '请再说一遍。' },
    { w: 'against', zh: '反对；抵御', scene: '你站在一件事的对面，或靠着它来挡住什么。', tone: '中性', col: 'against the, against a plan', en: 'She voted against the plan.', cn: '她投票反对这个计划。' },
    { w: 'agency', zh: '代理；中介', scene: '替别人办事的一家机构，如旅行社或中介。', tone: '中性', col: 'a travel agency, an agency for', en: 'We booked the tour through an agency.', cn: '我们通过一家中介订了这次旅行。' },
    { w: 'agents', zh: '代理人；中介', scene: '替别人去谈、去办的那些人。', tone: '中性', col: 'estate agents, travel agents', en: 'The agents showed us three flats.', cn: '中介带我们看了三套公寓。' },
    { w: 'ages', zh: '年龄；年代', scene: '人的岁数，或历史上的一段年代。', tone: '中性', col: 'of all ages, for ages', en: 'People of all ages use the park.', cn: '各个年龄的人都使用这个公园。' },
    { w: 'aggressive', zh: '好斗的；侵略性的', scene: '往前冲、不肯让，有时会伤到别人。', tone: '负面', col: 'aggressive behaviour, aggressive marketing', en: 'The dog became aggressive.', cn: '这只狗变得很凶。' },
    { w: 'aims', zh: '目的在于', scene: '一件事把目标对准某处，想达到那个结果。', tone: '中性', col: 'aims to, aims at', en: 'The course aims to build confidence.', cn: '这门课旨在建立信心。' },
    { w: 'air', zh: '空气', scene: '周围可以呼吸的那一层气体。', tone: '中性', col: 'fresh air, in the air', en: 'Open the window for some air.', cn: '打开窗户透透气。' },
    { w: 'airlines', zh: '航空公司', scene: '用飞机运乘客的那些公司。', tone: '中性', col: 'international airlines, the airlines', en: 'Several airlines fly to the city.', cn: '有几家航空公司飞往那座城市。' },
    { w: 'airport', zh: '机场', scene: '飞机起飞和降落、旅客办理手续的那一片地方。', tone: '中性', col: 'at the airport, airport bus', en: 'We met at the airport.', cn: '我们在机场见面。' },
    { w: 'allergic', zh: '过敏的', scene: '一接触某种食物或花粉，身体就起反应。', tone: '中性', col: 'allergic to, an allergic reaction', en: 'He is allergic to nuts.', cn: '他对坚果过敏。' },
    { w: 'allergies', zh: '过敏', scene: '身体对某些东西产生的那些过敏反应。', tone: '中性', col: 'food allergies, allergies to', en: 'The form asks about allergies.', cn: '表格上问到过敏情况。' },
    { w: 'allowances', zh: '津贴', scene: '定期发给的一笔补贴，如生活津贴。', tone: '中性', col: 'travel allowances, weekly allowances', en: 'The job includes travel allowances.', cn: '这份工作包含交通津贴。' },
    { w: 'alones', zh: '独自的', scene: '这张卡写的是独自，一个人，旁边没有别人。常见拼写是 alone。', tone: '中性', col: 'all alone, alone', en: 'She sat alone by the window.', cn: '她独自坐在窗边。' },
    { w: 'already', zh: '已经', scene: '事情在你说话之前就已经发生了。', tone: '中性', col: 'already finished, already here', en: 'The train has already left.', cn: '火车已经开走了。' },
    { w: 'also', zh: '也', scene: '在已经说到的之外，再补上一个。', tone: '中性', col: 'also the, and also', en: 'The shop also sells maps.', cn: '这家店也卖地图。' },
    { w: 'altitude', zh: '海拔', scene: '一个地方高出海平面多少，像山上的高度。', tone: '偏技术', col: 'at an altitude, high altitude', en: 'The town sits at a high altitude.', cn: '这个镇子海拔很高。' },
    { w: 'always', zh: '一直；总是', scene: '每一次都这样，中间没有例外。', tone: '中性', col: 'always the, almost always', en: 'She always takes the same bus.', cn: '她总是坐同一路公交。' },
    { w: 'amateur', zh: '业余爱好者', scene: '不是靠这件事挣钱的专业人士，是因为喜欢才做。', tone: '中性', col: 'an amateur photographer, amateur sport', en: 'He is an amateur photographer.', cn: '他是业余摄影爱好者。' },
    { w: 'amazing', zh: '令人吃惊的', scene: '好到或奇到让人睁大眼。', tone: '褒义，语气强', col: 'an amazing view, absolutely amazing', en: 'The view from the hill is amazing.', cn: '从山上看出去的景色非常惊人。' },
    { w: 'ambitions', zh: '雄心', scene: '一个人对自己想达到的高度。这张卡对应 ambitious 的名词用法。', tone: '中性', col: 'ambitions for, career ambitions', en: 'Her ambitions include running a clinic.', cn: '她的志向包括开办一家诊所。' },
    { w: 'amenity', zh: '生活便利设施', scene: '住处附近让生活方便的东西，如商店、公园或洗衣房。', tone: '偏正式', col: 'a local amenity, amenity space', en: 'A park is an important amenity.', cn: '公园是一项重要的生活设施。' },
    { w: 'America', zh: '美国；美洲', scene: '可以指美国，也可以指美洲这片大陆，要看上下文。', tone: '专名', col: 'in America, North America', en: 'She studied in America.', cn: '她在美国读过书。' },
    { w: 'American', zh: '美国的；美国人', scene: '和美国有关的，或一个美国人。', tone: '专名', col: 'an American city, American English', en: 'The film is American.', cn: '这部电影是美国的。' },
    { w: 'amicably', zh: '友善地', scene: '双方分开或谈完时，没有摔门，气氛还是和气的。', tone: '偏正式', col: 'settle amicably, end amicably', en: 'They settled the bill amicably.', cn: '他们和气地解决了账单问题。' },
    { w: 'amounts', zh: '数量', scene: '有多少，可以是一大笔或一小笔。', tone: '中性', col: 'large amounts, amounts of', en: 'The recipe uses small amounts of salt.', cn: '这个食谱只用少量的盐。' },
    { w: 'amplify', zh: '放大', scene: '声音或影响被加大，传得更远。', tone: '偏正式', col: 'amplify the sound, amplify a signal', en: 'The microphone amplifies her voice.', cn: '麦克风把她的声音放大。' },
    { w: 'amusements', zh: '娱乐', scene: '让人开心、打发时间的那些项目。', tone: '中性', col: 'amusements at, seaside amusements', en: 'The park has rides and other amusements.', cn: '公园里有游乐设施和其他娱乐项目。' },
    { w: 'analysis', zh: '分析', scene: '把一件事拆开，看每一块为什么会这样。', tone: '偏正式', col: 'an analysis of, data analysis', en: 'The analysis of the results took a week.', cn: '分析结果花了一周。' },
    { w: 'anatomy', zh: '解剖', scene: '研究身体结构的那门学问，或身体本身的构造。', tone: '偏技术', col: 'human anatomy, anatomy of', en: 'The course includes human anatomy.', cn: '这门课包括人体解剖。' },
    { w: 'animals', zh: '动物', scene: '鸟、鱼、兽这些活的动物，是 animal 的复数。', tone: '中性', col: 'wild animals, farm animals', en: 'The reserve protects wild animals.', cn: '保护区保护野生动物。' },
    { w: 'animation', zh: '动画片', scene: '用一张张画连成会动的影像。', tone: '中性', col: 'computer animation, an animation of', en: 'The children watched an animation.', cn: '孩子们看了一部动画片。' },
    { w: 'ankle', zh: '踝关节', scene: '脚和腿相连的那个关节。', tone: '中性', col: 'a sprained ankle, around the ankle', en: 'She twisted her ankle on the path.', cn: '她在小路上扭伤了脚踝。' },
    { w: 'anniversary', zh: '周年纪念日', scene: '某件事满一整年的那一天，如结婚纪念日。', tone: '中性', col: 'a wedding anniversary, the anniversary of', en: 'Today is their tenth anniversary.', cn: '今天是他们的十周年。' },
    { w: 'annoying', zh: '讨厌的', scene: '一件小事反复来，让人烦。', tone: '负面', col: 'annoying noise, find something annoying', en: 'The dripping tap is annoying.', cn: '滴水的水龙头很讨厌。' },
    { w: 'annual', zh: '年度的', scene: '一年一次，或按一整年计算。', tone: '中性偏正式', col: 'an annual meeting, annual fee', en: 'The annual meeting is in March.', cn: '年会在三月举行。' },
    { w: 'anoint', zh: '用油擦', scene: '把油抹在身上或物体上，有时是一种仪式。', tone: '偏正式', col: 'anoint with, anoint somebody', en: 'The priest anointed the child.', cn: '神父为孩子傅了油。' },
    { w: 'answers', zh: '回答', scene: '对问题给出的那些答复，可以是名词，也可以是动词的复数形式。', tone: '中性', col: 'the answers to, answers a question', en: 'The answers are at the back of the book.', cn: '答案在书的后面。' },
    { w: 'Antarctic', zh: '南极洲', scene: '地球最南端那一片冰雪大陆。', tone: '专名', col: 'the Antarctic, Antarctic ice', en: 'Scientists work in the Antarctic.', cn: '科学家在南极洲工作。' },
    { w: 'anthropology', zh: '人类学', scene: '研究人类文化、社会和起源的学科。', tone: '正式', col: 'social anthropology, a degree in anthropology', en: 'She studies anthropology.', cn: '她学人类学。' },
    { w: 'antiques', zh: '古董', scene: '有年头、被人收藏的旧器物。', tone: '中性', col: 'antique shop, antiques fair', en: 'The street has an antiques shop.', cn: '这条街上有一家古董店。' },
    { w: 'anxiety', zh: '焦虑', scene: '心里发紧，对还没发生的事放心不下。', tone: '中性，常偏负面', col: 'anxiety about, feelings of anxiety', en: 'Exams can cause anxiety.', cn: '考试可能引起焦虑。' },
    { w: 'apart', zh: '分离的', scene: '两件本来可以在一起的东西，中间拉开了距离。', tone: '中性', col: 'apart from, fall apart', en: 'The two houses stand apart.', cn: '两座房子分开立着。' },
    { w: 'apologise', zh: '道歉', scene: '你承认自己做错了，并向对方说对不起。英式拼法。', tone: '中性', col: 'apologise for, apologise to', en: 'I apologise for the delay.', cn: '这次耽搁，我向你道歉。' },
    { w: 'apparently', zh: '显然地', scene: '从你能看见的情况判断，事情是这样，但你不是第一目击者。', tone: '中性', col: 'apparently the, apparently not', en: 'Apparently the bus is late.', cn: '看来公共汽车晚点了。' },
    { w: 'appeal', zh: '呼吁；有吸引力', scene: '公开请求大家帮忙，或某件事让人想靠近。', tone: '中性', col: 'appeal for, appeal to', en: 'The charity appealed for blankets.', cn: '这家慈善机构呼吁人们捐赠毯子。' },
    { w: 'appearance', zh: '外貌；出现', scene: '一个人看起来的样子，或他在公众面前露面。', tone: '中性', col: 'physical appearance, a public appearance', en: 'Do not judge by appearance.', cn: '不要凭外貌判断。' },
    { w: 'appliances', zh: '器械', scene: '家里那些用电的器具，如冰箱和洗衣机。', tone: '中性', col: 'kitchen appliances, electrical appliances', en: 'The kitchen has new appliances.', cn: '厨房里有新的电器。' },
    { w: 'applicants', zh: '申请人', scene: '递交申请、等结果的那些人。', tone: '中性', col: 'job applicants, successful applicants', en: 'The college interviewed 40 applicants.', cn: '学院面试了 40 名申请人。' },
    { w: 'applications', zh: '申请；应用', scene: '交上去的申请表，或一种技术被用在某处。', tone: '中性', col: 'job applications, practical applications', en: 'Send your applications by Friday.', cn: '请在星期五前交申请。' },
    { w: 'apply', zh: '申请', scene: '你填表，正式请求一个职位、课程或许可。它也可以表示应用。', tone: '中性', col: 'apply for, apply to', en: 'She applied for the scholarship.', cn: '她申请了那项奖学金。' },
    { w: 'appointments', zh: '预约；任命', scene: '和医生或办公室约好的时间，或把某人正式派到一个职位。', tone: '中性', col: 'make appointments, medical appointments', en: 'Please book appointments online.', cn: '请在网上预约。' },
    { w: 'appreciate', zh: '感激；欣赏', scene: '你把别人的帮助放在心上，或能看出一件事的好处。', tone: '褒义', col: 'appreciate your help, appreciate that', en: 'I appreciate your help.', cn: '感谢你的帮助。' },
    { w: 'apprentice', zh: '学徒', scene: '跟着师傅一边干活一边学手艺的人。', tone: '中性', col: 'an apprentice to, apprentice chef', en: 'He works as an apprentice.', cn: '他当学徒。' },
    { w: 'Apri', zh: '四月', scene: '这张卡的意思是四月。常见拼写是 April。', tone: '中性', col: 'in April, April rain', en: 'The course starts in April.', cn: '课程四月开始。' },
    { w: 'apron', zh: '围裙', scene: '做饭或干活时系在身前、用来挡污渍的那块布。', tone: '中性', col: 'wear an apron, a kitchen apron', en: 'She tied on an apron.', cn: '她系上了围裙。' },
    { w: 'aqueducts', zh: '沟渠', scene: '把水从一处引到另一处的水渠或高架水桥。', tone: '偏正式', col: 'Roman aqueducts, stone aqueducts', en: 'The old aqueducts still carry water.', cn: '这些古老的水渠仍在输水。' },
    { w: 'archaeology', zh: '考古学', scene: '挖开地层，研究过去的人留下的器物。', tone: '正式', col: 'archaeology of, a degree in archaeology', en: 'The dig is part of an archaeology project.', cn: '这次发掘是一个考古项目的一部分。' },
    { w: 'archers', zh: '弓箭手', scene: '用弓把箭射出去的人。', tone: '中性', col: 'skilled archers, the archers', en: 'The archers practised in the field.', cn: '弓箭手们在场地里练习。' },
    { w: 'architecture', zh: '建筑学', scene: '设计建筑物的这门学问，或建筑物的样式。', tone: '中性', col: 'modern architecture, study architecture', en: 'She studies architecture.', cn: '她学建筑学。' },
    { w: 'arid', zh: '干旱的', scene: '土地很干，雨很少，植物难长。', tone: '偏正式', col: 'an arid region, arid land', en: 'The region is arid.', cn: '这个地区很干旱。' },
    { w: 'army', zh: '军队', scene: '一个国家用来作战的成建制的武装力量。', tone: '中性', col: 'the army, join the army', en: 'Her brother joined the army.', cn: '她哥哥参了军。' },
    { w: 'around', zh: '在附近；围绕', scene: '在四周，或绕着一个点。它也可以表示大约。', tone: '中性', col: 'around the, around here', en: 'The park is around the corner.', cn: '公园就在拐角附近。' },
    { w: 'arrows', zh: '箭；箭头', scene: '弓射出去的箭，或图上指示方向的箭头。', tone: '中性', col: 'follow the arrows, bow and arrows', en: 'Follow the arrows to the exit.', cn: '顺着箭头走到出口。' },
    { w: 'artefacts', zh: '手工制品', scene: '人做出来、后来被保存下来的物件，博物馆里常见。英式拼法。', tone: '偏正式', col: 'historical artefacts, museum artefacts', en: 'The museum displays local artefacts.', cn: '博物馆展出当地的手工艺品。' },
    { w: 'artists', zh: '艺术家', scene: '以画画、雕塑或其他艺术为业的人。', tone: '中性', col: 'local artists, the artists', en: 'Local artists show their work here.', cn: '当地艺术家在这里展出作品。' },
    { w: 'arts', zh: '艺术；文科', scene: '绘画、音乐、戏剧这些，或大学里的文科。', tone: '中性', col: 'the arts, a Bachelor of Arts', en: 'She has a degree in the arts.', cn: '她有一个文科学位。' },
    { w: 'ascent', zh: '上坡路', scene: '路往上走的那一段，人在爬升。', tone: '偏正式', col: 'a steep ascent, the ascent of', en: 'The ascent took two hours.', cn: '这段上坡走了两个小时。' },
    { w: 'ashes', zh: '灰', scene: '火灭了之后剩下的灰色粉末。', tone: '中性', col: 'cigarette ashes, wood ashes', en: 'Only ashes remained in the fireplace.', cn: '壁炉里只剩下灰。' },
    { w: 'Asian', zh: '亚洲的；亚洲人', scene: '和亚洲有关的，或一个亚洲人。', tone: '专名', col: 'Asian countries, Asian food', en: 'The market sells Asian food.', cn: '这个市场卖亚洲食品。' },
    { w: 'assessment', zh: '评估', scene: '对学习、风险或一件工作作出的评定。', tone: '偏正式', col: 'an assessment of, continuous assessment', en: 'The assessment is next week.', cn: '评估在下周。' },
    { w: 'assistant', zh: '助手', scene: '在旁边帮主事的人做事的那一位，如助教或店员。', tone: '中性', col: 'a shop assistant, teaching assistant', en: 'Ask the assistant at the desk.', cn: '问一下前台的助手。' },
    { w: 'associations', zh: '协会', scene: '为同一目的组织起来的那些团体。', tone: '中性', col: 'professional associations, local associations', en: 'She belongs to two associations.', cn: '她属于两个协会。' },
    { w: 'assortment', zh: '混合物', scene: '不同种类放在一起的一堆，不是单一的一种。', tone: '中性', col: 'an assortment of, a wide assortment', en: 'The box holds an assortment of teas.', cn: '盒子里装着各式茶叶。' },
    { w: 'astronomy', zh: '天文学', scene: '研究星星、行星和宇宙的学科。', tone: '正式', col: 'radio astronomy, study astronomy', en: 'He reads about astronomy.', cn: '他阅读天文学方面的内容。' },
    { w: 'athletes', zh: '运动员', scene: '参加体育比赛、受过训练的人。', tone: '中性', col: 'professional athletes, young athletes', en: 'The athletes warmed up on the track.', cn: '运动员们在跑道上热身。' },
    { w: 'atlas', zh: '地图集', scene: '把很多地图订成的一本书。', tone: '中性', col: 'a world atlas, an atlas of', en: 'The atlas is on the shelf.', cn: '地图集在架子上。' },
    { w: 'atmosphere', zh: '大气；气氛', scene: '包围地球的大气层，或一个房间里人们感觉到的气氛。', tone: '中性', col: 'the atmosphere, a friendly atmosphere', en: 'The cafe has a friendly atmosphere.', cn: '这家咖啡馆气氛友好。' },
    { w: 'atrium', zh: '中庭', scene: '建筑中央那块通高、常有天光的空间。', tone: '偏正式', col: 'a glass atrium, the atrium of', en: 'We waited in the atrium.', cn: '我们在中庭等候。' },
    { w: 'attendance', zh: '出席', scene: '人有没有到场，或到场的人数。', tone: '中性偏正式', col: 'attendance at, school attendance', en: 'Attendance at the lecture was high.', cn: '这次讲座出席的人很多。' },
    { w: 'attribute', zh: '归属', scene: '你把一个结果算到某个原因或某个人头上。', tone: '正式', col: 'attribute to, attribute something to', en: 'She attributes her success to practice.', cn: '她把成功归于练习。' },
    { w: 'audiences', zh: '观众', scene: '坐在那里看演出或听讲的那些人。', tone: '中性', col: 'large audiences, audiences of', en: 'The show drew large audiences.', cn: '这场演出吸引了很多观众。' },
    { w: 'August', zh: '八月', scene: '一年里八月这一个月。', tone: '专名', col: 'in August, last August', en: 'The course ends in August.', cn: '课程八月结束。' },
    { w: 'aunt', zh: '阿姨；姨', scene: '父母的姐妹，或与父母同辈的女性长辈。', tone: '中性', col: 'my aunt, an aunt', en: 'My aunt lives nearby.', cn: '我阿姨住在附近。' },
    { w: 'Australia l', zh: '澳大利亚', scene: '这张卡指澳大利亚。常见拼写是 Australia，中间没有空格。', tone: '专名', col: 'in Australia, across Australia', en: 'She lives in Australia.', cn: '她住在澳大利亚。' },
    { w: 'Australian', zh: '澳大利亚的；澳大利亚人', scene: '和澳大利亚有关的，或一个澳大利亚人。', tone: '专名', col: 'an Australian city, Australian English', en: 'The film is Australian.', cn: '这部电影是澳大利亚的。' },
    { w: 'authorities', zh: '当局；官方', scene: '有权作决定的那些官方机构或人，是 authority 的复数。', tone: '正式', col: 'the local authorities, the authorities', en: 'The authorities closed the road.', cn: '官方封闭了这条路。' },
    { w: 'autism', zh: '自闭症', scene: '一种影响社交和沟通方式的发育状况。', tone: '中性，医学', col: 'autism spectrum, children with autism', en: 'The school supports children with autism.', cn: '这所学校支持自闭症儿童。' },
    { w: 'autobiography', zh: '自传', scene: '一个人写自己一生的那本书。', tone: '中性', col: 'an autobiography of, write an autobiography', en: 'She is writing her autobiography.', cn: '她在写自传。' },
    { w: 'automatic', zh: '自动的', scene: '不用人每次动手，机器自己会完成下一步。', tone: '中性', col: 'automatic door, fully automatic', en: 'The door is automatic.', cn: '这扇门是自动的。' },
    { w: 'automobiles', zh: '汽车', scene: '路上跑的汽车，是 automobile 的复数，美式英语里更常见。', tone: '中性偏正式', col: 'automobiles and, early automobiles', en: 'Early automobiles were slow.', cn: '早期的汽车很慢。' },
    { w: 'autonomous', zh: '自治的', scene: '一个地区或系统自己作决定，不每一步都等上面。', tone: '正式', col: 'an autonomous region, autonomous system', en: 'The college is autonomous.', cn: '这所学院是自治的。' },
    { w: 'avenue', zh: '大街', scene: '城里较宽、常有树的一条大街。', tone: '中性', col: 'a wide avenue, Fifth Avenue', en: 'The hotel is on a wide avenue.', cn: '酒店在一条宽阔的大街上。' },
    { w: 'avoid', zh: '避免', scene: '你看见一件不想碰上的事，就绕开它。', tone: '中性', col: 'avoid doing, avoid the', en: 'Avoid the busy road at eight.', cn: '八点避开那条拥堵的路。' },
    { w: 'ABMS', zh: '影响', scene: '这张卡的释义是“影响”。ABMS 不是常见英语单词，没有可靠的近义词。', tone: '词条本身', col: 'an effect on, an impact on', en: 'The delay had an effect on the plan.', cn: '这次耽搁对计划产生了影响。' },
{ w: 'babies', zh: '婴儿', scene: '还很小、需要人抱和喂的孩子，是 baby 的复数。', tone: '中性', col: 'new babies, babies and', en: 'The clinic sees new babies on Tuesdays.', cn: '诊所星期二看新生儿。' },
    { w: 'babysitting', zh: '临时照看孩子', scene: '父母出门时，你留在家里照看孩子。', tone: '中性', col: 'babysitting for, a babysitting job', en: 'She does babysitting on Fridays.', cn: '她星期五帮人照看孩子。' },
    { w: 'bachelor', zh: '学士', scene: '大学本科毕业拿到的那一级学位。', tone: '中性', col: 'a bachelor degree, a Bachelor of', en: 'He has a bachelor degree in science.', cn: '他有一个理学学士学位。' },
    { w: 'back', zh: '背部；后面', scene: '身体的后背，或位置在后面、回到原处。', tone: '中性', col: 'at the back, come back', en: 'Sit at the back of the room.', cn: '坐在房间后面。' },
    { w: 'backfire', zh: '事与愿违', scene: '你本想让事情变好，结果反而更糟。', tone: '负面', col: 'backfire on, the plan backfired', en: 'The shortcut backfired.', cn: '这条捷径产生了相反的结果。' },
    { w: 'backpack', zh: '背包', scene: '用两根带子背在肩上的包。', tone: '中性', col: 'a backpack for, carry a backpack', en: 'He packed a backpack for the walk.', cn: '他为这次走路装了一个背包。' },
    { w: 'bacteria', zh: '细菌', scene: '小到看不见、有的有益有的致病的微生物。这个词本身常用作复数。', tone: '偏技术', col: 'harmful bacteria, bacteria in', en: 'Soap removes bacteria from the hands.', cn: '肥皂能去掉手上的细菌。' },
    { w: 'bags', zh: '包；袋', scene: '用来装东西的包或袋子。', tone: '中性', col: 'paper bags, bags of', en: 'Please reuse the bags.', cn: '请把这些袋子再利用。' },
    { w: 'bake', zh: '烤', scene: '放进烤箱，用干热把面团变成面包或蛋糕。', tone: '中性', col: 'bake a cake, bake in', en: 'We bake bread on Sundays.', cn: '我们星期天烤面包。' },
    { w: 'balance', zh: '平衡', scene: '两边一样重，人或账都不往一边倒。', tone: '中性', col: 'keep a balance, balance between', en: 'She kept her balance on the ice.', cn: '她在冰上保持了平衡。' },
    { w: 'balcony', zh: '阳台', scene: '楼房外面探出来、可以站人的那一块平台。', tone: '中性', col: 'on the balcony, a small balcony', en: 'The flat has a balcony.', cn: '这套公寓有阳台。' },
    { w: 'ball', zh: '球；舞会', scene: '圆的、可以踢或扔的球。它也可以表示正式舞会。', tone: '中性', col: 'a tennis ball, a ball game', en: 'The children kicked a ball.', cn: '孩子们踢了一个球。' },
    { w: 'ballet', zh: '芭蕾舞', scene: '用脚尖和规定动作演出的一种舞蹈。', tone: '中性', col: 'a ballet class, classical ballet', en: 'She goes to a ballet class.', cn: '她去上芭蕾课。' },
    { w: 'balloons', zh: '气球', scene: '吹满气、轻轻飘着的那些球。', tone: '中性', col: 'party balloons, a bunch of balloons', en: 'The room was full of balloons.', cn: '房间里满是气球。' },
    { w: 'ballroom', zh: '舞厅', scene: '用来举办正式舞会的大房间。', tone: '中性', col: 'a hotel ballroom, in the ballroom', en: 'The dinner is in the ballroom.', cn: '晚宴在舞厅举行。' },
    { w: 'bananas', zh: '香蕉', scene: '弯弯的、黄色的那种水果。', tone: '中性', col: 'a bunch of bananas, ripe bananas', en: 'The shop sells bananas.', cn: '这家店卖香蕉。' },
    { w: 'band', zh: '乐队', scene: '一起演奏的一小组乐手。它也可以表示带子。', tone: '中性', col: 'a rock band, in a band', en: 'The band played until ten.', cn: '乐队演奏到十点。' },
    { w: 'bank', zh: '银行；岸', scene: '存钱的银行，或河岸。两个意思都常见。', tone: '中性', col: 'a bank account, the river bank', en: 'The bank opens at nine.', cn: '银行九点开门。' },
    { w: 'bar', zh: '酒吧；条', scene: '卖酒的柜台，或一条长长的东西。', tone: '中性', col: 'at the bar, a bar of', en: 'We met at the bar.', cn: '我们在酒吧见面。' },
    { w: 'barometer', zh: '气压计', scene: '测量空气压力的仪器，也用来比喻形势的指标。', tone: '偏技术', col: 'a barometer of, the barometer fell', en: 'The barometer is falling.', cn: '气压计的读数在下降。' },
    { w: 'base', zh: '基础；基地', scene: '一件事立在上面的那一层，或一个营地。', tone: '中性', col: 'a base for, based on', en: 'The camp has a base by the lake.', cn: '营地在湖边有一个基地。' },
    { w: 'basically', zh: '主要地', scene: '把细节拿掉之后，最主要的情况是这样。', tone: '偏口语', col: 'basically the, basically the same', en: 'The plan is basically the same.', cn: '这个计划大体上一样。' },
    { w: 'bath', zh: '沐浴；浴室', scene: '在浴缸里洗澡，或洗澡这个地方。', tone: '中性', col: 'have a bath, a hot bath', en: 'I had a bath after the walk.', cn: '散步之后我洗了个澡。' },
    { w: 'bathroom', zh: '浴室', scene: '家里有浴缸、洗手池的那间房。', tone: '中性', col: 'in the bathroom, a shared bathroom', en: 'The bathroom is at the end of the hall.', cn: '浴室在走廊尽头。' },
    { w: 'bats', zh: '蝙蝠', scene: '夜里飞的、倒挂着休息的那些动物。它也可以是球棒。', tone: '中性', col: 'fruit bats, bats in', en: 'Bats live in the old roof.', cn: '蝙蝠住在旧屋顶里。' },
    { w: 'battery', zh: '电池', scene: '给手机、车或灯供电的那一块。', tone: '中性', col: 'a battery in, low battery', en: 'The battery is low.', cn: '电池电量低了。' },
    { w: 'bay', zh: '海湾', scene: '海岸凹进去、水比较静的那一块。', tone: '中性', col: 'a small bay, in the bay', en: 'The boats stay in the bay.', cn: '船停在海湾里。' },
    { w: 'beacon', zh: '灯塔；信号', scene: '在高处发光、给船或人指路的灯。', tone: '中性', col: 'a beacon on, a warning beacon', en: 'The beacon guided the boats.', cn: '灯塔为船只指路。' },
    { w: 'beam', zh: '发送；光束', scene: '一道光射出去，或把信号发送出去。', tone: '中性', col: 'a beam of, beam to', en: 'A beam of light crossed the room.', cn: '一道光束穿过房间。' },
    { w: 'bears', zh: '忍受；熊', scene: '忍住压力或痛苦。它也可以是熊这种动物。', tone: '中性', col: 'bears the, polar bears', en: 'She bears the cost herself.', cn: '费用由她自己承担。' },
    { w: 'beautifu', zh: '美丽的', scene: '这张卡的意思是美丽的。常见拼写是 beautiful。', tone: '褒义', col: 'a beautiful view, beautiful music', en: 'The lake is beautiful in the evening.', cn: '傍晚的湖很美。' },
    { w: 'beauty', zh: '美人；美', scene: '好看这件事本身，或一个很美的人。', tone: '褒义', col: 'natural beauty, a beauty', en: 'The beauty of the valley surprised us.', cn: '山谷的美让我们吃惊。' },
    { w: 'become', zh: '成为', scene: '从原来的状态变成另一个状态。', tone: '中性', col: 'become a, become more', en: 'The town became quieter.', cn: '这个镇子变得更安静了。' },
    { w: 'bed', zh: '床', scene: '晚上睡觉躺上去的那一张。', tone: '中性', col: 'go to bed, in bed', en: 'I go to bed at eleven.', cn: '我十一点上床。' },
    { w: 'bedroom', zh: '卧室', scene: '放床、用来睡觉的那间房。', tone: '中性', col: 'a small bedroom, in the bedroom', en: 'The bedroom faces the garden.', cn: '卧室朝着花园。' },
    { w: 'bedsit', zh: '卧室兼起居室', scene: '一间既睡觉又起居的小房间，英式英语里常见。', tone: '中性', col: 'a bedsit in, rent a bedsit', en: 'He rents a bedsit near the college.', cn: '他在学院附近租了一间单间公寓。' },
    { w: 'beer', zh: '啤酒', scene: '用粮食发酵做成的一种酒。', tone: '中性', col: 'a glass of beer, local beer', en: 'The pub serves local beer.', cn: '这家酒吧卖本地啤酒。' },
    { w: 'bees', zh: '蜜蜂', scene: '会采蜜、成群住在一起的那些昆虫。', tone: '中性', col: 'honey bees, bees in', en: 'Bees visit the flowers.', cn: '蜜蜂飞到花上。' },
    { w: 'beetles', zh: '甲虫', scene: '有硬壳的一类昆虫。', tone: '中性', col: 'small beetles, beetles on', en: 'Beetles live under the bark.', cn: '甲虫住在树皮下面。' },
    { w: 'beetroot', zh: '甜菜根', scene: '深红的、可以煮着吃的那种根。', tone: '中性', col: 'beetroot salad, cooked beetroot', en: 'The salad has beetroot.', cn: '这份沙拉里有甜菜根。' },
    { w: 'before', zh: '在……以前', scene: '时间或位置在另一件事的前面。', tone: '中性', col: 'before the, the day before', en: 'Finish this before Friday.', cn: '星期五之前把这个做完。' },
    { w: 'beginners', zh: '新手', scene: '刚刚开始学的人。', tone: '中性', col: 'for beginners, a beginners class', en: 'The class is for beginners.', cn: '这个班是给新手的。' },
    { w: 'behaviour', zh: '行为', scene: '一个人怎么做事、怎么对人。英式拼法。', tone: '中性', col: 'good behaviour, behaviour towards', en: 'The school expects polite behaviour.', cn: '学校期望有礼貌的行为。' },
    { w: 'behind', zh: '在后面', scene: '位置在另一件东西的背后，或进度落在后面。', tone: '中性', col: 'behind the, fall behind', en: 'The garden is behind the house.', cn: '花园在房子后面。' },
    { w: 'bell', zh: '铃；钟', scene: '一摇或一按就会响的铃。', tone: '中性', col: 'ring the bell, a door bell', en: 'Ring the bell at the desk.', cn: '在前台按铃。' },
    { w: 'belong', zh: '属于', scene: '这件东西是某个人的，或一个人是某个群体的一员。', tone: '中性', col: 'belong to, belong in', en: 'The keys belong to the office.', cn: '这些钥匙属于办公室。' },
    { w: 'belt', zh: '腰带', scene: '系在腰上的那一条带子。', tone: '中性', col: 'a leather belt, seat belt', en: 'Fasten your seat belt.', cn: '系好安全带。' },
    { w: 'bend', zh: '转弯', scene: '路或一条东西不再笔直，拐了一个弯。', tone: '中性', col: 'a sharp bend, bend in', en: 'Slow down at the bend.', cn: '转弯处要减速。' },
    { w: 'berry', zh: '浆果', scene: '小而多汁的果子，如草莓这一类。', tone: '中性', col: 'a berry bush, wild berry', en: 'The bird ate a berry.', cn: '鸟吃了一颗浆果。' },
    { w: 'best', zh: '最好的', scene: '在所有选择里排在第一的那一个。', tone: '褒义', col: 'the best of, best for', en: 'This is the best route.', cn: '这是最好的路线。' },
    { w: 'bet', zh: '打赌', scene: '你押一个结果，赌它会发生。', tone: '中性', col: 'bet on, I bet', en: 'He bet on the race.', cn: '他赌了这场比赛。' },
    { w: 'between', zh: '在……之间', scene: '位置或关系夹在两边的中间。', tone: '中性', col: 'between the, between A and B', en: 'The cafe is between the bank and the park.', cn: '咖啡馆在银行和公园之间。' },
    { w: 'beyond', zh: '超过；在更远处', scene: '已经过了那一条线，或在那一点的更远处。', tone: '中性偏正式', col: 'beyond the, go beyond', en: 'The hills are beyond the river.', cn: '山在河的那一边。' },
    { w: 'bils', zh: '账单', scene: '这张卡的意思是账单。常见拼写是 bills。', tone: '中性', col: 'pay the bills, a phone bill', en: 'The bills arrive at the end of the month.', cn: '账单在月底到。' },
    { w: 'bin', zh: '垃圾箱', scene: '用来扔垃圾的箱子。', tone: '中性', col: 'a rubbish bin, in the bin', en: 'Put the paper in the bin.', cn: '把纸放进垃圾箱。' },
    { w: 'biodiversity', zh: '生物多样性', scene: '一个地方有多少种不同的生物。', tone: '正式', col: 'biodiversity of, protect biodiversity', en: 'The forest has rich biodiversity.', cn: '这片森林生物多样性丰富。' },
    { w: 'biography', zh: '传记', scene: '写另一个人一生的书。', tone: '中性', col: 'a biography of, short biography', en: 'She read a biography of the painter.', cn: '她读了那位画家的传记。' },
    { w: 'biology', zh: '生物学', scene: '研究生命和生物的学科。', tone: '中性', col: 'marine biology, a biology class', en: 'Biology is her favourite subject.', cn: '生物是她最喜欢的科目。' },
    { w: 'birds', zh: '鸟', scene: '有羽毛、大多能飞的那些动物。', tone: '中性', col: 'wild birds, birds in', en: 'Birds nest in the trees.', cn: '鸟在树上筑巢。' },
    { w: 'biscuits', zh: '饼干', scene: '烤得又干又脆的小点心，英式英语里的说法。', tone: '中性', col: 'a packet of biscuits, tea and biscuits', en: 'She offered biscuits with the tea.', cn: '她用茶配饼干招待。' },
    { w: 'bit', zh: '有点儿；很小的', scene: '一点点，程度不大。', tone: '偏口语', col: 'a bit of, a bit tired', en: 'I am a bit tired.', cn: '我有点儿累。' },
    { w: 'bitterness', zh: '苦味', scene: '舌头上的苦，或心里放不下的怨。', tone: '中性', col: 'a bitterness in, without bitterness', en: 'The coffee has a bitterness.', cn: '这杯咖啡有苦味。' },
    { w: 'bizarre', zh: '奇异的', scene: '怪得不像日常会见到的样子。', tone: '中性', col: 'a bizarre story, bizarre behaviour', en: 'The story was bizarre.', cn: '这个故事很离奇。' },
    { w: 'black', zh: '黑色的', scene: '最深的那种颜色，吸进光线。', tone: '中性', col: 'black coffee, in black', en: 'She wore a black coat.', cn: '她穿了一件黑外套。' },
    { w: 'blackbirds', zh: '黑鸟', scene: '这张卡指一种黑羽的鸟。常见的英语名是 blackbird。', tone: '中性', col: 'garden blackbirds, blackbirds in', en: 'Blackbirds sing in the garden.', cn: '黑鸟在花园里叫。' },
    { w: 'bleak', zh: '阴冷的；黯淡的', scene: '天气又冷又没有生气，或前景看着不亮。', tone: '负面', col: 'a bleak winter, a bleak outlook', en: 'The hillside looked bleak.', cn: '山坡看上去阴冷。' },
    { w: 'blind', zh: '瞎的', scene: '眼睛看不见。', tone: '中性', col: 'blind in, visually blind', en: 'The dog is a guide for a blind man.', cn: '这只狗为一位盲人带路。' },
    { w: 'blocks', zh: '街区；块；阻止', scene: '城市里的一块街区，或把路挡住。', tone: '中性', col: 'city blocks, blocks the', en: 'The tree blocks the path.', cn: '这棵树挡住了路。' },
    { w: 'blog', zh: '博客', scene: '一个人在网上按时间写下的那些文章。', tone: '中性', col: 'a travel blog, write a blog', en: 'She keeps a travel blog.', cn: '她写一个旅行博客。' },
    { w: 'blonde', zh: '金发的', scene: '头发是浅黄色。blond 是另一种拼法。', tone: '中性', col: 'blonde hair, a blonde', en: 'She has blonde hair.', cn: '她有一头金发。' },
    { w: 'blood i', zh: '血', scene: '这张卡的意思是血。常见拼写是 blood，中间没有空格。', tone: '中性', col: 'blood test, a drop of blood', en: 'The form asks about blood type.', cn: '表格上问血型。' },
    { w: 'blow', zh: '吹', scene: '风或嘴把空气推过去。', tone: '中性', col: 'blow away, the wind blows', en: 'The wind blew the hat off.', cn: '风把帽子吹掉了。' },
    { w: 'blue', zh: '蓝色的', scene: '晴天天空的那种颜色。', tone: '中性', col: 'blue sky, in blue', en: 'The sky is blue.', cn: '天空是蓝色的。' },
    { w: 'board', zh: '木板；上船', scene: '一块木板，或走上飞机、车、船。它也可以表示董事会。', tone: '中性', col: 'on board, board a train', en: 'We boarded the train at six.', cn: '我们六点上了火车。' },
    { w: 'bodies', zh: '身体', scene: '人的身体，是 body 的复数。', tone: '中性', col: 'human bodies, their bodies', en: 'Exercise helps their bodies.', cn: '锻炼对他们的身体有帮助。' },
    { w: 'boil', zh: '煮沸', scene: '水热到冒泡、翻滚。', tone: '中性', col: 'boil the, bring to the boil', en: 'Boil the water first.', cn: '先把水烧开。' },
    { w: 'bones', zh: '骨骼', scene: '身体里硬的那一根根骨头。', tone: '中性', col: 'broken bones, bones of', en: 'The X-ray shows the bones.', cn: 'X 光片显示出骨骼。' },
    { w: 'booklets', zh: '小册子', scene: '薄薄的、订起来的小本子，用来介绍信息。', tone: '中性', col: 'information booklets, free booklets', en: 'The desk has free booklets.', cn: '前台有免费小册子。' },
    { w: 'books', zh: '书籍；预订', scene: '印出来的书。作动词时，books 也可以表示预订。', tone: '中性', col: 'library books, books a room', en: 'The library lends books.', cn: '图书馆出借书籍。' },
    { w: 'bookshop', zh: '书店', scene: '卖书的店。美式英语常说 bookstore。', tone: '中性', col: 'a local bookshop, in the bookshop', en: 'I bought the map at a bookshop.', cn: '我在一家书店买了地图。' },
    { w: 'booth', zh: '货摊；小隔间', scene: '市场上的一个摊位，或一个小隔间。', tone: '中性', col: 'a ticket booth, a phone booth', en: 'Buy tickets at the booth.', cn: '在售票亭买票。' },
    { w: 'boots', zh: '靴子', scene: '盖过脚踝的鞋。', tone: '中性', col: 'walking boots, a pair of boots', en: 'Wear boots on the wet path.', cn: '湿路上穿靴子。' },
    { w: 'border', zh: '边境；接壤', scene: '两个国家或地区相接的那一条线。', tone: '中性', col: 'across the border, border on', en: 'The town is near the border.', cn: '这个镇子靠近边境。' },
    { w: 'botanics', zh: '植物的', scene: '这张卡的意思和植物有关。更常见的形容词是 botanical。', tone: '偏正式', col: 'botanical garden, botanical study', en: 'The botanical garden opens at nine.', cn: '植物园九点开门。' },
    { w: 'bottom', zh: '底部', scene: '一件东西最下面的那一层。', tone: '中性', col: 'at the bottom, the bottom of', en: 'The keys are at the bottom of the bag.', cn: '钥匙在包的底部。' },
    { w: 'bound', zh: '界限；一定会', scene: '一条界限，或 be bound to 表示几乎一定会发生。', tone: '中性偏正式', col: 'bound to, bound for', en: 'The train is bound for the city.', cn: '这趟火车开往城里。' },
    { w: 'bow', zh: '弓；鞠躬', scene: '射箭用的弓，或身体向前弯一下表示敬意。', tone: '中性', col: 'bow and arrow, take a bow', en: 'The actors took a bow.', cn: '演员们鞠了一躬。' },
    { w: 'boxes', zh: '盒子', scene: '用来装东西的一个个方盒子。', tone: '中性', col: 'cardboard boxes, boxes of', en: 'The books are in boxes.', cn: '书在盒子里。' },
    { w: 'boys', zh: '男孩', scene: '男性的孩子。', tone: '中性', col: 'boys and girls, the boys', en: 'The boys waited by the gate.', cn: '男孩们在门口等。' },
    { w: 'bracket', zh: '支架；范围', scene: '托住东西的支架，或一个数值所在的范围。', tone: '中性', col: 'age bracket, a wall bracket', en: 'The fee depends on the age bracket.', cn: '费用取决于年龄段。' },
    { w: 'brains', zh: '大脑；智力', scene: '头里的大脑，或一个人的智力。', tone: '中性', col: 'the brains of, use your brains', en: 'The puzzle needs brains.', cn: '这个谜题需要动脑筋。' },
    { w: 'brakes', zh: '刹车', scene: '让车慢下来或停住的那个装置。', tone: '中性', col: 'the brakes, apply the brakes', en: 'Test the brakes before the hill.', cn: '下坡前先试试刹车。' },
    { w: 'branch', zh: '树枝；分支', scene: '树上的一枝，或一家机构在别处的分部。', tone: '中性', col: 'a branch of, local branch', en: 'The bank has a branch nearby.', cn: '这家银行附近有一家分行。' },
    { w: 'brands', zh: '品牌', scene: '商品上那个让人认出厂家的名字。', tone: '中性', col: 'famous brands, a range of brands', en: 'The shop sells several brands.', cn: '这家店卖几个品牌。' },
    { w: 'bracelets', zh: '手镯', scene: '戴在手腕上的环状饰品。', tone: '中性', col: 'silver bracelets, a pair of bracelets', en: 'She wore two bracelets.', cn: '她戴了两只手镯。' },
    { w: 'break', zh: '打破；弄坏', scene: '东西裂开或不能再用。它也可以表示休息。', tone: '中性', col: 'break a, break down', en: 'Do not break the glass.', cn: '别把玻璃打破。' },
    { w: 'breakfasts', zh: '早餐', scene: '一天里的第一餐，这里用了复数。', tone: '中性', col: 'hotel breakfasts, cooked breakfasts', en: 'The hotel serves breakfasts from seven.', cn: '酒店从七点开始供应早餐。' },
    { w: 'breakwater', zh: '防浪堤', scene: '伸进海里、用来挡住浪的一道堤。', tone: '偏技术', col: 'a stone breakwater, behind the breakwater', en: 'The boats sit behind the breakwater.', cn: '船停在防浪堤后面。' },
    { w: 'breed', zh: '繁殖；饲养', scene: '让动物生下下一代，或饲养它们。', tone: '中性', col: 'breed animals, breed in', en: 'The farm breeds sheep.', cn: '这家农场养羊。' },
    { w: 'brick', zh: '砖', scene: '盖房子用的一块块红色方块。', tone: '中性', col: 'a brick wall, made of brick', en: 'The house is built of brick.', cn: '这房子是砖砌的。' },
    { w: 'bridge', zh: '桥', scene: '架在河或路上方、让人走过去的建筑物。', tone: '中性', col: 'across the bridge, a stone bridge', en: 'We crossed the bridge.', cn: '我们过了桥。' },
    { w: 'briefly', zh: '简略地', scene: '只用几句话，不展开。', tone: '中性', col: 'briefly describe, speak briefly', en: 'She briefly described the plan.', cn: '她简略地描述了计划。' },
    { w: 'British', zh: '英国的；英国人', scene: '和英国有关的，或一个英国人。', tone: '专名', col: 'British English, a British city', en: 'The film is British.', cn: '这部电影是英国的。' },
    { w: 'brothers', zh: '兄弟', scene: '同一对父母的男性子女。', tone: '中性', col: 'two brothers, older brothers', en: 'He has two brothers.', cn: '他有两个兄弟。' },
    { w: 'brown', zh: '棕色的', scene: '像木头或泥土的那种颜色。', tone: '中性', col: 'brown hair, in brown', en: 'The door is brown.', cn: '门是棕色的。' },
    { w: 'brush', zh: '刷子；刷', scene: '带毛的刷子，或用它来刷。', tone: '中性', col: 'a brush for, brush the', en: 'Brush the mud off your boots.', cn: '把靴子上的泥刷掉。' },
    { w: 'budget', zh: '预算', scene: '事先算好能花多少钱的那一张计划。', tone: '中性', col: 'a budget for, within the budget', en: 'The trip is within the budget.', cn: '这次出行在预算之内。' },
    { w: 'buffet', zh: '自助餐', scene: '食物摆在台上，人自己去取。', tone: '中性', col: 'a buffet lunch, buffet style', en: 'Lunch is a buffet.', cn: '午餐是自助餐。' },
    { w: 'buildings', zh: '建筑', scene: '房子、楼房这些盖起来的建筑物。', tone: '中性', col: 'old buildings, public buildings', en: 'The street has old buildings.', cn: '这条街上有老建筑。' },
    { w: 'bullying', zh: '霸凌', scene: '反复用强势去伤害或羞辱一个更弱的人。', tone: '负面', col: 'bullying at, stop bullying', en: 'The school has rules against bullying.', cn: '学校有反对霸凌的规定。' },
    { w: 'bunch', zh: '一串；一群', scene: '同一类东西被拢成一把，或随便说的一群人。', tone: '中性，说人群时偏口语', col: 'a bunch of, a bunch of keys', en: 'She bought a bunch of flowers.', cn: '她买了一束花。' },
    { w: 'burn', zh: '燃烧', scene: '火把东西点着，或皮肤被烫到。', tone: '中性', col: 'burn down, burn the', en: 'The wood will burn slowly.', cn: '这块木头会慢慢燃烧。' },
    { w: 'bury', zh: '埋葬', scene: '把人或东西放进土里盖上。', tone: '中性', col: 'bury in, bury the', en: 'They buried the box in the garden.', cn: '他们把盒子埋在花园里。' },
    { w: 'bushes', zh: '灌木', scene: '比树矮、枝叶挤在一起的那些植物。', tone: '中性', col: 'in the bushes, low bushes', en: 'The ball rolled into the bushes.', cn: '球滚进了灌木丛。' },
    { w: 'bushfires', zh: '丛林大火', scene: '在灌木和树林里烧起来的野火，澳大利亚英语里常见。', tone: '中性', col: 'summer bushfires, bushfires in', en: 'Bushfires closed the road.', cn: '丛林大火封闭了这条路。' },
    { w: 'bustling', zh: '熙熙攘攘的', scene: '人很多，脚步和说话声不停。', tone: '中性', col: 'a bustling market, bustling with', en: 'The market is bustling.', cn: '市场里熙熙攘攘。' },
    { w: 'busy', zh: '忙碌的', scene: '事情堆着，人没有空。', tone: '中性', col: 'busy with, a busy day', en: 'Monday is a busy day.', cn: '星期一是忙碌的一天。' },
    { w: 'butters', zh: '黄油', scene: '这张卡的意思是黄油。常见的不可数名词是 butter。', tone: '中性', col: 'bread and butter, melt the butter', en: 'Spread butter on the bread.', cn: '在面包上涂黄油。' },
    { w: 'butterfies', zh: '蝴蝶', scene: '这张卡的意思是蝴蝶。常见拼写是 butterflies。', tone: '中性', col: 'colourful butterflies, butterflies in', en: 'Butterflies visit the garden.', cn: '蝴蝶飞到花园里。' },
{ w: 'cafe', zh: '咖啡馆', scene: '可以坐下来喝咖啡的小店。', tone: '中性', col: 'a cafe on, at the cafe', en: 'We met at a cafe.', cn: '我们在一家咖啡馆见面。' },
    { w: 'cafeteria', zh: '自助餐厅', scene: '学校或公司里自己取餐的餐厅。', tone: '中性', col: 'the school cafeteria, in the cafeteria', en: 'Lunch is served in the cafeteria.', cn: '午餐在自助餐厅供应。' },
    { w: 'cakes', zh: '蛋糕', scene: '用面粉和糖烤出来的蛋糕。', tone: '中性', col: 'birthday cakes, a piece of cake', en: 'The shop sells cakes.', cn: '这家店卖蛋糕。' },
    { w: 'calculation', zh: '计算', scene: '把数字算出来的那一次运算。', tone: '中性', col: 'a calculation of, do a calculation', en: 'Check the calculation again.', cn: '再核对一遍计算。' },
    { w: 'calendar', zh: '日历', scene: '把一年的日子印出来的那一页或那一本。', tone: '中性', col: 'a wall calendar, on the calendar', en: 'The date is on the calendar.', cn: '日期写在日历上。' },
    { w: 'calf', zh: '小牛', scene: '还没长大的牛。它也可以指小腿。', tone: '中性', col: 'a young calf, calf muscle', en: 'The calf stayed near its mother.', cn: '小牛待在母牛旁边。' },
    { w: 'cal', zh: '呼叫；称呼', scene: '这张卡的意思是呼叫或称呼。常见拼写是 call。', tone: '中性', col: 'call somebody, call a taxi', en: 'Call me when you arrive.', cn: '你到了就给我打电话。' },
    { w: 'calories', zh: '卡路里', scene: '食物里能量的计量单位。', tone: '中性', col: 'calories in, low in calories', en: 'The label shows the calories.', cn: '标签上写着卡路里。' },
    { w: 'camel', zh: '骆驼', scene: '沙漠里能长时间不喝水的那种动物。', tone: '中性', col: 'a camel train, ride a camel', en: 'A camel crossed the sand.', cn: '一只骆驼走过沙地。' },
    { w: 'cameras', zh: '摄像机；相机', scene: '用来拍照或录像的那些机器。', tone: '中性', col: 'digital cameras, security cameras', en: 'Security cameras watch the door.', cn: '监控摄像机看着门口。' },
    { w: 'campaign', zh: '运动；竞选', scene: '为了一个目标持续推动的一系列行动，如竞选或宣传。', tone: '中性', col: 'an election campaign, a campaign for', en: 'The campaign asked people to recycle.', cn: '这场运动号召人们回收。' },
    { w: 'Canada', zh: '加拿大', scene: '北美洲北部的那个国家。', tone: '专名', col: 'in Canada, across Canada', en: 'She studies in Canada.', cn: '她在加拿大学习。' },
    { w: 'Canadian', zh: '加拿大人', scene: '加拿大的人，或与加拿大有关的。', tone: '专名', col: 'a Canadian city, Canadian English', en: 'The writer is Canadian.', cn: '这位作者是加拿大人。' },
    { w: 'canal', zh: '运河', scene: '人挖出来、让船通过的水道。', tone: '中性', col: 'a canal boat, along the canal', en: 'The path follows the canal.', cn: '小路沿着运河走。' },
    { w: 'candidates', zh: '候选人', scene: '被提名、等着被选上的那些人。', tone: '中性', col: 'job candidates, election candidates', en: 'Three candidates attended the interview.', cn: '三位候选人参加了面试。' },
    { w: 'canteen', zh: '食堂', scene: '工厂或学校里供大家吃饭的餐厅。', tone: '中性', col: 'the staff canteen, in the canteen', en: 'We eat in the canteen.', cn: '我们在食堂吃饭。' },
    { w: 'cap', zh: '盖；帽子', scene: '瓶子上的盖子，或一顶软帽。', tone: '中性', col: 'a bottle cap, a baseball cap', en: 'Put the cap back on.', cn: '把盖子盖回去。' },
    { w: 'capital', zh: '首都；资金；大写', scene: '一个国家的首都，或开办事业的钱，或大写字母。三个意思都常见。', tone: '中性', col: 'the capital city, capital letters', en: 'Paris is the capital of France.', cn: '巴黎是法国的首都。' },
    { w: 'captain', zh: '队长', scene: '一支队伍或一艘船负责带队的人。', tone: '中性', col: 'the team captain, the captain of', en: 'She is the team captain.', cn: '她是队长。' },
    { w: 'caravan', zh: '大篷车', scene: '可以拖着走、里面能住的车厢，或一队一起走的人。', tone: '中性', col: 'a caravan park, a caravan site', en: 'They hired a caravan for the week.', cn: '他们租了一辆大篷车住一周。' },
    { w: 'carbon', zh: '碳', scene: '一种化学元素，煤炭和很多燃料里都有它。', tone: '偏技术', col: 'carbon dioxide, carbon emissions', en: 'The plan cuts carbon emissions.', cn: '这个计划减少碳排放。' },
    { w: 'cards', zh: '卡片', scene: '一张张硬纸片，可以是贺卡、名片或扑克。', tone: '中性', col: 'birthday cards, a pack of cards', en: 'She sent two cards.', cn: '她寄了两张卡片。' },
    { w: 'care l', zh: '关怀', scene: '这张卡的意思是关怀、照顾。常见拼写是 care，中间没有空格。', tone: '中性', col: 'take care of, health care', en: 'Take care of the plants.', cn: '照看好这些植物。' },
    { w: 'carefu', zh: '仔细的', scene: '这张卡的意思是仔细的。常见拼写是 careful。', tone: '中性', col: 'be careful, a careful check', en: 'Be careful on the wet floor.', cn: '湿地板要小心。' },
    { w: 'cargoes', zh: '货物', scene: '船或飞机运的一批批货物。', tone: '中性', col: 'cargoes of, heavy cargoes', en: 'The ship carries cargoes of grain.', cn: '这艘船运粮食。' },
    { w: 'carnival', zh: '嘉年华', scene: '街上有游行、音乐和摊位的节日。', tone: '中性', col: 'a street carnival, carnival parade', en: 'The carnival fills the square.', cn: '嘉年华挤满了广场。' },
    { w: 'carpentry', zh: '木工手艺', scene: '用木头做家具或修房子的手艺。', tone: '中性', col: 'carpentry skills, a carpentry course', en: 'He is learning carpentry.', cn: '他在学木工。' },
    { w: 'carpets', zh: '地毯', scene: '铺在地板上的厚织物。作动词时是厚厚地铺上。', tone: '中性', col: 'wall-to-wall carpets, wool carpets', en: 'The room has new carpets.', cn: '房间里铺了新地毯。' },
    { w: 'cars', zh: '汽车', scene: '路上开的小汽车。', tone: '中性', col: 'electric cars, parked cars', en: 'Cars filled the street.', cn: '街上停满了汽车。' },
    { w: 'cartoon', zh: '动画片', scene: '用画出来的形象做成的影片或一幅夸张的画。', tone: '中性', col: 'a cartoon film, a cartoon of', en: 'The children watched a cartoon.', cn: '孩子们看了一部动画片。' },
    { w: 'carts', zh: '手推车', scene: '用来推货物或超市购物的小车。', tone: '中性', col: 'shopping carts, luggage carts', en: 'Please return the carts.', cn: '请把购物车还回去。' },
    { w: 'cases', zh: '情况；案例', scene: '一种具体情况，或拿来分析的一个例子。它也可以是箱子或病例。', tone: '中性', col: 'in some cases, case studies', en: 'In some cases the bus is late.', cn: '有些情况下公交会晚点。' },
    { w: 'cast', zh: '演员阵容', scene: '一部戏里全体演员。它也可以表示石膏或投掷。', tone: '中性', col: 'the cast of, a cast member', en: 'The cast rehearsed all day.', cn: '演员们排练了一整天。' },
    { w: 'castles', zh: '城堡', scene: '旧时用石头建成、用来防守的大建筑。', tone: '中性', col: 'old castles, castle walls', en: 'The tour visits two castles.', cn: '这次游览去两座城堡。' },
    { w: 'casual', zh: '随便的；非正式的', scene: '不拘礼、不正式，如休闲的衣服或随口的话。', tone: '中性', col: 'casual clothes, a casual remark', en: 'Wear casual clothes to the picnic.', cn: '野餐穿休闲的衣服。' },
    { w: 'catalogues', zh: '目录', scene: '把商品或藏品一条条列出来的册子。美式拼写是 catalog。', tone: '中性', col: 'library catalogues, product catalogues', en: 'The catalogues are by the door.', cn: '目录放在门边。' },
    { w: 'catastrophes', zh: '大灾难', scene: '造成很大破坏的灾难。', tone: '负面，语气强', col: 'natural catastrophes, avoid a catastrophe', en: 'The region recovered from two catastrophes.', cn: '这个地区从两次大灾难中恢复过来。' },
    { w: 'catch', zh: '抓住', scene: '用手接住，或把正在跑的人或动物抓住。', tone: '中性', col: 'catch a ball, catch the bus', en: 'Catch the ball with both hands.', cn: '用两只手接球。' },
    { w: 'categories', zh: '类别', scene: '把东西分成的那些类，是 category 的复数。', tone: '中性', col: 'in categories, three categories', en: 'Sort the books into categories.', cn: '把书分成几类。' },
    { w: 'catering', zh: '餐饮服务', scene: '为会议或聚会准备并供应食物的服务。', tone: '中性', col: 'catering for, a catering company', en: 'The college uses outside catering.', cn: '学院使用外部餐饮服务。' },
    { w: 'cattle', zh: '牲畜', scene: '成群饲养的牛。这个词本身是复数。', tone: '中性', col: 'cattle farming, a herd of cattle', en: 'Cattle graze in the field.', cn: '牛在田里吃草。' },
    { w: 'caves', zh: '山洞', scene: '山或崖里天然的空洞。', tone: '中性', col: 'limestone caves, explore caves', en: 'The caves are closed in winter.', cn: '这些山洞冬天关闭。' },
    { w: 'celebration', zh: '庆典', scene: '为了一件喜事聚在一起的庆祝。', tone: '中性', col: 'a celebration of, birthday celebration', en: 'The celebration lasted all evening.', cn: '庆典持续了整个晚上。' },
    { w: 'celebrity', zh: '名人', scene: '很多人都认识的公众人物。', tone: '中性', col: 'a celebrity chef, local celebrity', en: 'A celebrity opened the shop.', cn: '一位名人给这家店剪了彩。' },
    { w: 'celestial', zh: '天空的', scene: '和天空、星星有关的。', tone: '正式', col: 'celestial bodies, a celestial map', en: 'The chart shows celestial bodies.', cn: '这张图画出了天体。' },
    { w: 'cell', zh: '细胞；电池；巢室', scene: '生物的细胞，或一节小电池，或蜂巢里的一小室。', tone: '中性', col: 'a blood cell, a cell phone', en: 'The diagram shows one cell.', cn: '图上画出了一个细胞。' },
    { w: 'cement', zh: '水泥', scene: '和水之后会变硬、用来粘砖的灰色粉末。', tone: '中性', col: 'a bag of cement, cement floor', en: 'The workers mixed cement.', cn: '工人们搅拌了水泥。' },
    { w: 'census', zh: '人口普查', scene: '官方把一个地方的人口逐一登记下来。', tone: '正式', col: 'a national census, census data', en: 'The census is taken every ten years.', cn: '人口普查每十年做一次。' },
    { w: 'centimetres', zh: '厘米', scene: '长度单位，一百厘米是一米。', tone: '中性', col: 'ten centimetres, in centimetres', en: 'The shelf is 80 centimetres wide.', cn: '这个架子宽 80 厘米。' },
    { w: 'centra', zh: '中心的', scene: '这张卡的意思是中心的。常见拼写是 central。', tone: '中性', col: 'a central location, central heating', en: 'The station is in a central location.', cn: '车站位于中心位置。' },
    { w: 'centuries', zh: '世纪', scene: '一百年为一世纪。', tone: '中性', col: 'for centuries, two centuries', en: 'The bridge is two centuries old.', cn: '这座桥有两个世纪的历史。' },
    { w: 'ceramics', zh: '陶瓷工艺', scene: '用陶土烧制器皿的工艺，或那些器皿。', tone: '中性', col: 'ceramics class, studio ceramics', en: 'She studies ceramics.', cn: '她学陶瓷。' },
    { w: 'cereal', zh: '谷物', scene: '小麦、燕麦这类粮食，或早餐时吃的麦片。', tone: '中性', col: 'breakfast cereal, cereal crops', en: 'The field grows cereal.', cn: '这块地种谷物。' },
    { w: 'ceremonies', zh: '仪式；典礼', scene: '按固定步骤举行的典礼，是 ceremony 的复数。', tone: '中性', col: 'wedding ceremonies, opening ceremonies', en: 'The ceremonies start at noon.', cn: '典礼中午开始。' },
    { w: 'certain', zh: '某一；某些', scene: '没有点名、但确有所指的某一个或某一些。这里不是“确定”。', tone: '中性', col: 'a certain person, certain times', en: 'At certain times the gate is locked.', cn: '在某些时候大门是锁着的。' },
    { w: 'chains', zh: '链', scene: '一环扣一环的链子。', tone: '中性', col: 'gold chains, bicycle chains', en: 'The gate is held by chains.', cn: '大门用链子拴着。' },
    { w: 'chairman', zh: '主席', scene: '会议或委员会里主持的那个人。', tone: '正式', col: 'the chairman of, chairman of the board', en: 'The chairman opened the meeting.', cn: '主席宣布开会。' },
    { w: 'chairs', zh: '椅子', scene: '用来坐的椅子。这个词有时也用来指主席。', tone: '中性', col: 'wooden chairs, a row of chairs', en: 'Put the chairs back.', cn: '把椅子放回去。' },
    { w: 'challenge', zh: '挑战', scene: '一件难做、需要努力才能完成的事。', tone: '中性', col: 'a challenge for, face a challenge', en: 'The climb is a challenge.', cn: '这次攀爬是个挑战。' },
    { w: 'chances', zh: '机会', scene: '可以试一试的那些时机，或事情发生的可能性。', tone: '中性', col: 'a chance to, chances of', en: 'You will have two chances.', cn: '你有两次机会。' },
    { w: 'changes', zh: '变化', scene: '和原来不一样了的那些地方。', tone: '中性', col: 'changes in, make changes', en: 'There are changes to the timetable.', cn: '时间表有变化。' },
    { w: 'channels', zh: '通道', scene: '水、信息或电视可以走过去的那些通道。', tone: '中性', col: 'television channels, shipping channels', en: 'The news is on several channels.', cn: '这条新闻在几个频道播出。' },
    { w: 'characters', zh: '人物；特性', scene: '故事里的人物，或一个人的性格特点。', tone: '中性', col: 'main characters, Chinese characters', en: 'The film has three main characters.', cn: '这部电影有三个主要人物。' },
    { w: 'charcoal', zh: '木炭', scene: '木头烧成的黑色燃料，也可以用来画画。', tone: '中性', col: 'charcoal drawing, burn charcoal', en: 'They cooked over charcoal.', cn: '他们用木炭做饭。' },
    { w: 'charge', zh: '费用；控告；掌管', scene: '要收的钱，或指控某人，或负责掌管一件事。', tone: '中性', col: 'free of charge, in charge of', en: 'There is no charge for the map.', cn: '这张地图不收费。' },
    { w: 'charities', zh: '慈善机构', scene: '为帮助他人而设立的那些组织，是 charity 的复数。', tone: '中性', col: 'local charities, donate to charities', en: 'The shop supports local charities.', cn: '这家店支持当地慈善机构。' },
    { w: 'chat', zh: '聊天', scene: '轻松地说话，没有正式议程。', tone: '偏口语', col: 'a chat with, chat about', en: 'We had a chat after class.', cn: '课后我们聊了聊。' },
    { w: 'checklist', zh: '清单', scene: '要逐项打钩的一张单子。', tone: '中性', col: 'a checklist for, on the checklist', en: 'Use the checklist before you leave.', cn: '离开前对照这张清单。' },
    { w: 'cheese', zh: '奶酪', scene: '用奶做成的固体食物。', tone: '中性', col: 'a piece of cheese, cheese sandwich', en: 'The sandwich has cheese.', cn: '这个三明治里有奶酪。' },
    { w: 'chemicals', zh: '化学药品；化学的', scene: '实验室或工厂里的化学物质，也可以作形容词。', tone: '中性', col: 'household chemicals, chemical reactions', en: 'Store the chemicals safely.', cn: '把化学药品安全存放。' },
    { w: 'chemistry', zh: '化学', scene: '研究物质如何变化的学科。', tone: '中性', col: 'a chemistry lab, organic chemistry', en: 'Chemistry is taught in room 4.', cn: '化学课在 4 号教室。' },
    { w: 'chess', zh: '国际象棋', scene: '两个人用黑白棋子在格子棋盘上对下的游戏。', tone: '中性', col: 'play chess, a chess set', en: 'They play chess at lunch.', cn: '他们午饭时下国际象棋。' },
    { w: 'chicken', zh: '鸡肉', scene: '鸡的肉，用来做菜。它也可以指鸡这种动物。', tone: '中性', col: 'roast chicken, chicken soup', en: 'Dinner is roast chicken.', cn: '晚饭是烤鸡。' },
    { w: 'chicks', zh: '小鸡', scene: '刚孵出来的小鸡。', tone: '中性', col: 'day-old chicks, feed the chicks', en: 'The chicks stayed under the lamp.', cn: '小鸡待在灯下。' },
    { w: 'chief', zh: '主要的', scene: '在若干个里面排最前、最重要的那一个。', tone: '中性', col: 'the chief reason, chief executive', en: 'Cost is the chief reason.', cn: '费用是主要原因。' },
    { w: 'childcare', zh: '儿童照管', scene: '父母工作时，由别人照看孩子的服务。', tone: '中性', col: 'childcare costs, childcare centre', en: 'The college offers childcare.', cn: '学院提供儿童照管。' },
    { w: 'childhood', zh: '童年', scene: '一个人还是孩子的那段时期。', tone: '中性', col: 'early childhood, in childhood', en: 'She spent her childhood by the sea.', cn: '她的童年在海边度过。' },
    { w: 'childish', zh: '幼稚的', scene: '像小孩子那样、在成人场合里显得不合适。', tone: '常偏负面', col: 'childish behaviour, a childish game', en: 'The remark was childish.', cn: '那句话很幼稚。' },
    { w: 'children', zh: '儿童', scene: '还没成年的孩子，是 child 的不规则复数。', tone: '中性', col: 'young children, children under', en: 'Children under five travel free.', cn: '五岁以下的儿童免费乘车。' },
    { w: 'Chinas', zh: '中国', scene: '这张卡指中国。常见拼写是 China。', tone: '专名', col: 'in China, across China', en: 'The tea comes from China.', cn: '这茶来自中国。' },
    { w: 'Chineses', zh: '中国的；中国人', scene: '这张卡的意思是中国的或中国人。常见拼写是 Chinese。', tone: '专名', col: 'Chinese food, Chinese students', en: 'The menu has Chinese food.', cn: '菜单上有中国菜。' },
    { w: 'chisel', zh: '凿子', scene: '用来凿木头或石头的工具。', tone: '中性', col: 'a wood chisel, chisel and hammer', en: 'He shaped the wood with a chisel.', cn: '他用凿子修木头。' },
    { w: 'chocolates', zh: '巧克力糖', scene: '一颗颗巧克力糖。', tone: '中性', col: 'a box of chocolates, dark chocolates', en: 'She brought a box of chocolates.', cn: '她带了一盒巧克力。' },
    { w: 'chop', zh: '切碎', scene: '用刀把食物切成小块。', tone: '中性', col: 'chop the, finely chopped', en: 'Chop the onions.', cn: '把洋葱切碎。' },
    { w: 'Christmas', zh: '圣诞节', scene: '十二月二十五日前后的基督教节日。', tone: '专名', col: 'at Christmas, Christmas Day', en: 'The shop closes on Christmas Day.', cn: '这家店圣诞节关门。' },
    { w: 'chronological', zh: '按时间顺序的', scene: '事件按发生的先后排好。', tone: '正式', col: 'chronological order, a chronological list', en: 'Put the dates in chronological order.', cn: '把日期按时间顺序排列。' },
    { w: 'cigar', zh: '雪茄', scene: '用烟叶卷成的粗烟。', tone: '中性', col: 'a cigar box, smoke a cigar', en: 'He does not smoke cigars.', cn: '他不抽雪茄。' },
    { w: 'cinema', zh: '电影院', scene: '放电影、大家买票进去坐的地方。', tone: '中性', col: 'go to the cinema, at the cinema', en: 'The cinema is on the high street.', cn: '电影院在大街上。' },
    { w: 'circular', zh: '圆形的；循环的', scene: '形状是圆的，或沿着一个圈反复转。', tone: '中性', col: 'a circular table, circular route', en: 'They sat at a circular table.', cn: '他们坐在一张圆桌旁。' },
    { w: 'circulation', zh: '流通', scene: '血液在体内转，或报纸、空气在各处流动。', tone: '中性偏正式', col: 'blood circulation, in circulation', en: 'Walking helps circulation.', cn: '走路有助于血液循环。' },
    { w: 'circumstances', zh: '情况；环境', scene: '事情发生时周围的那些条件，是 circumstance 的复数。', tone: '正式', col: 'under the circumstances, in these circumstances', en: 'Under the circumstances, we waited.', cn: '在这种情况下，我们等了等。' },
    { w: 'cities', zh: '城市', scene: '人口多、建筑密的那些城市。这张卡的意思是城市。', tone: '中性', col: 'big cities, capital cities', en: 'Big cities need more buses.', cn: '大城市需要更多公共汽车。' },
    { w: 'civilisations', zh: '文明', scene: '一个社会长期形成的制度、技术和文化。美式拼写是 civilization。', tone: '正式', col: 'ancient civilisations, early civilisations', en: 'The museum covers ancient civilisations.', cn: '博物馆介绍古代文明。' },
    { w: 'claims', zh: '宣称', scene: '说出一个还没被证实的说法，或提出一项要求。', tone: '中性', col: 'claims that, insurance claims', en: 'The report claims that sales rose.', cn: '报告称销售额上升了。' },
    { w: 'clamour', zh: '吵闹；大声要求', scene: '很多人一起叫，或大声提出要求。', tone: '偏正式', col: 'clamour for, a clamour of', en: 'People clamoured for tickets.', cn: '人们大声要求买票。' },
    { w: 'clarinet', zh: '单簧管', scene: '一种木管乐器，用哨片发声。', tone: '中性', col: 'play the clarinet, a clarinet solo', en: 'She plays the clarinet.', cn: '她吹单簧管。' },
    { w: 'classes', zh: '班级；课程', scene: '学校里的一个班，或一节节课。它也可以表示社会阶层。', tone: '中性', col: 'evening classes, in class', en: 'Evening classes start at seven.', cn: '夜校课程七点开始。' },
    { w: 'classical', zh: '古典的', scene: '属于古代传统或古典音乐那一类的。', tone: '中性', col: 'classical music, classical architecture', en: 'The hall plays classical music.', cn: '这个大厅播放古典音乐。' },
    { w: 'classroom', zh: '教室', scene: '上课的那间房间。', tone: '中性', col: 'in the classroom, a classroom of', en: 'The classroom has twenty desks.', cn: '教室里有二十张课桌。' },
    { w: 'claws', zh: '爪', scene: '鸟或兽脚上尖的那部分。', tone: '中性', col: 'sharp claws, claws of', en: 'The bird has sharp claws.', cn: '这只鸟的爪子很尖。' },
    { w: 'clay', zh: '黏土', scene: '湿的时候可以塑形、烧了会变硬的土。', tone: '中性', col: 'a clay pot, modelling clay', en: 'The pot is made of clay.', cn: '这个罐子是黏土做的。' },
    { w: 'clean', zh: '打扫', scene: '把灰尘和污渍除掉。这里是动词。', tone: '中性', col: 'clean the, clean up', en: 'Please clean the table.', cn: '请把桌子打扫干净。' },
    { w: 'cleaners', zh: '清洁工', scene: '负责打扫的那些人。', tone: '中性', col: 'office cleaners, the cleaners', en: 'The cleaners arrive at six.', cn: '清洁工六点到。' },
    { w: 'clear', zh: '清楚的；晴朗的', scene: '能看明白，或天空没有云。', tone: '中性', col: 'a clear day, clear instructions', en: 'The instructions are clear.', cn: '说明很清楚。' },
    { w: 'clerical', zh: '办事员的', scene: '和办公室文书、表格有关的工作。', tone: '正式', col: 'clerical work, clerical staff', en: 'The job is mostly clerical.', cn: '这份工作主要是文书。' },
    { w: 'clif', zh: '悬崖', scene: '这张卡的意思是悬崖。常见拼写是 cliff。', tone: '中性', col: 'a steep cliff, cliff edge', en: 'The path stays back from the cliff.', cn: '小路离悬崖边有一段距离。' },
    { w: 'climbs', zh: '爬山；山道', scene: '往上爬的那段路，或爬山这个动作。', tone: '中性', col: 'steep climbs, rock climbs', en: 'The route has two steep climbs.', cn: '这条路线有两段陡坡。' },
    { w: 'clinic', zh: '诊所', scene: '看小病、不必住进大医院的地方。', tone: '中性', col: 'a dental clinic, at the clinic', en: 'The clinic opens at eight.', cn: '诊所八点开门。' },
    { w: 'clips', zh: '回形针；夹子', scene: '用来夹纸的小夹子，或一段短影像。', tone: '中性', col: 'paper clips, video clips', en: 'The papers are held by clips.', cn: '这些纸用夹子夹着。' },
    { w: 'clocks', zh: '时钟', scene: '挂在墙上或放在桌上、显示时间的钟。', tone: '中性', col: 'wall clocks, alarm clocks', en: 'The clocks show the same time.', cn: '这些钟显示的时间一样。' },
    { w: 'close', zh: '关闭；靠近', scene: '把门关上，或位置离得很近。两个意思都常见。', tone: '中性', col: 'close the door, close to', en: 'Please close the window.', cn: '请把窗户关上。' },
{ w: 'closer', zh: '更靠近的', scene: '比原来更近，是 close 表示“靠近”时的比较级。', tone: '中性', col: 'closer to, move closer', en: 'Move the chair closer to the desk.', cn: '把椅子挪得离桌子更近一点。' },
    { w: 'clouds', zh: '云', scene: '天上白色或灰色的云。', tone: '中性', col: 'dark clouds, rain clouds', en: 'Dark clouds covered the hill.', cn: '乌云盖住了山。' },
    { w: 'clubhouse', zh: '俱乐部会所', scene: '俱乐部成员聚会的那栋房子。', tone: '中性', col: 'the clubhouse at, a golf clubhouse', en: 'The meeting is in the clubhouse.', cn: '会议在会所里。' },
    { w: 'clubs', zh: '俱乐部', scene: '有共同兴趣的人组成的社团。', tone: '中性', col: 'sports clubs, join clubs', en: 'The college has several clubs.', cn: '学院有几个社团。' },
    { w: 'coal', zh: '煤', scene: '从地下挖出、可以烧的黑色矿物。', tone: '中性', col: 'coal mine, burn coal', en: 'The old stove used coal.', cn: '旧炉子烧煤。' },
    { w: 'coats', zh: '外套', scene: '穿在最外面的衣服。', tone: '中性', col: 'winter coats, hang the coats', en: 'Hang your coats by the door.', cn: '把外套挂在门边。' },
    { w: 'code', zh: '代码；密码', scene: '一套符号或进入系统的密码，也可以是行为准则。', tone: '中性', col: 'a code for, access code', en: 'Enter the code on the door.', cn: '在门上输入密码。' },
    { w: 'coffee', zh: '咖啡', scene: '用咖啡豆做成的热饮。', tone: '中性', col: 'a cup of coffee, black coffee', en: 'She drinks coffee in the morning.', cn: '她早上喝咖啡。' },
    { w: 'collate', zh: '核对', scene: '把几份材料逐项对到一起，看是否一致。', tone: '正式', col: 'collate the, collate data', en: 'Collate the answers before the meeting.', cn: '开会前把答案核对好。' },
    { w: 'collection', zh: '采集；收藏', scene: '把东西收集到一起，或已经收成的那一套。', tone: '中性', col: 'a collection of, data collection', en: 'The museum has a collection of maps.', cn: '博物馆收藏了一批地图。' },
    { w: 'colonies', zh: '殖民地；种群', scene: '被另一国统治的地方，或聚在一起生活的一群生物。', tone: '中性偏正式', col: 'former colonies, ant colonies', en: 'Ant colonies live under the path.', cn: '蚁群住在小路下面。' },
    { w: 'colours', zh: '颜色', scene: '红、蓝、绿这些颜色。作动词时是涂上颜色。英式拼写。', tone: '中性', col: 'bright colours, in colour', en: 'The painting uses bright colours.', cn: '这幅画用了鲜艳的颜色。' },
    { w: 'columns', zh: '列；圆柱', scene: '表格里竖着的一列，或撑住建筑的圆柱。', tone: '中性', col: 'newspaper columns, stone columns', en: 'Add the numbers in the columns.', cn: '把各列的数字加起来。' },
    { w: 'comedy', zh: '喜剧', scene: '让人笑的戏或电影。', tone: '中性', col: 'a comedy film, romantic comedy', en: 'The cinema is showing a comedy.', cn: '电影院在放一部喜剧。' },
    { w: 'comets', zh: '彗星', scene: '拖着一条亮尾、在天空中移动的天体。', tone: '中性', col: 'bright comets, a comet tail', en: 'The book explains comets.', cn: '这本书讲解彗星。' },
    { w: 'comfortable', zh: '舒适的', scene: '坐着或穿着不别扭，身体觉得放松。', tone: '褒义', col: 'a comfortable chair, feel comfortable', en: 'The chair is comfortable.', cn: '这把椅子坐着舒服。' },
    { w: 'comics', zh: '漫画', scene: '用格子画讲故事的书，或喜剧演员。', tone: '中性', col: 'comic books, read comics', en: 'He reads comics on the train.', cn: '他在火车上看漫画。' },
    { w: 'commercial', zh: '商业的；广告', scene: '和买卖有关的。作名词时是一条商业广告。', tone: '中性', col: 'a commercial area, a television commercial', en: 'The street is a commercial area.', cn: '这条街是商业区。' },
    { w: 'commitments', zh: '承诺', scene: '你答应一定要做的那些事。', tone: '中性偏正式', col: 'work commitments, family commitments', en: 'She has work commitments on Friday.', cn: '她星期五有工作上的安排。' },
    { w: 'communities', zh: '社区', scene: '住在一起、有共同联系的那些人群，是 community 的复数。', tone: '中性', col: 'local communities, rural communities', en: 'The plan helps local communities.', cn: '这个计划帮助当地社区。' },
    { w: 'commutes', zh: '通勤', scene: '每天在家和工作地点之间往返。', tone: '中性', col: 'commutes to, a long commute', en: 'He commutes by train.', cn: '他坐火车通勤。' },
    { w: 'commuter', zh: '通勤者', scene: '每天往返于家和单位的人。', tone: '中性', col: 'a commuter train, daily commuter', en: 'The early train is full of commuters.', cn: '早班火车上满是通勤的人。' },
    { w: 'compatible', zh: '兼容的', scene: '两件东西或两个人能放在一起、不互相冲突。', tone: '中性偏正式', col: 'compatible with, compatible systems', en: 'The charger is compatible with this phone.', cn: '这个充电器适用于这部手机。' },
    { w: 'companies', zh: '公司', scene: '做生意的那些公司。这张卡还标了“陪伴”，那个意思更常用 accompany。', tone: '中性', col: 'small companies, insurance companies', en: 'Two companies share the building.', cn: '两家公司共用这栋楼。' },
    { w: 'companionship', zh: '陪伴；友谊', scene: '有人陪在身边的那种相处。', tone: '中性', col: 'companionship of, for companionship', en: 'The dog provides companionship.', cn: '这只狗陪伴着他。' },
    { w: 'compartment', zh: '隔间', scene: '火车或盒子里被隔开的一小间。', tone: '中性', col: 'a train compartment, luggage compartment', en: 'They sat in an empty compartment.', cn: '他们坐在一间空的隔间里。' },
    { w: 'compasses', zh: '指南针', scene: '用来看方向的指南针。', tone: '中性', col: 'a pair of compasses, magnetic compasses', en: 'Hikers carry compasses.', cn: '徒步的人带着指南针。' },
    { w: 'compensation', zh: '补偿', scene: '为损失付出的钱或其他弥补。', tone: '正式', col: 'compensation for, claim compensation', en: 'She received compensation for the delay.', cn: '她因这次耽搁得到了补偿。' },
    { w: 'competitions', zh: '比赛', scene: '比谁更好的那些赛事。', tone: '中性', col: 'sports competitions, enter competitions', en: 'The school holds two competitions.', cn: '学校举办两项比赛。' },
    { w: 'complementary', zh: '互补的', scene: '两样放在一起，正好补上对方缺的那一块。不是免费的那个 complimentary。', tone: '正式', col: 'complementary to, complementary skills', en: 'The two courses are complementary.', cn: '这两门课是互补的。' },
    { w: 'complete', zh: '完整的；完成', scene: '一样都不缺，或把一件事做完。', tone: '中性', col: 'a complete set, complete the form', en: 'Please complete the form.', cn: '请把表格填完。' },
    { w: 'complimentary', zh: '赠送的', scene: '不用付钱，作为赠送。不要和 complementary“互补”搞混。', tone: '中性', col: 'complimentary ticket, complimentary breakfast', en: 'Breakfast is complimentary.', cn: '早餐是赠送的。' },
    { w: 'compost', zh: '堆肥', scene: '厨余和落叶堆熟之后变成的肥料。', tone: '中性', col: 'garden compost, a compost bin', en: 'Put the leaves in the compost.', cn: '把落叶放进堆肥里。' },
    { w: 'composition', zh: '构成；作曲', scene: '某物由什么组成，或写成的一首曲子、一篇作文。', tone: '中性', col: 'chemical composition, a musical composition', en: 'The composition of the soil was tested.', cn: '土壤的成分被检测了。' },
    { w: 'computers', zh: '计算机', scene: '用来处理信息的电脑。', tone: '中性', col: 'personal computers, computer room', en: 'The library has ten computers.', cn: '图书馆有十台电脑。' },
    { w: 'concern', zh: '担心', scene: '心里放不下的事。它也可以表示与某事有关，或一家企业。', tone: '中性', col: 'a concern about, cause concern', en: 'Safety is a concern.', cn: '安全是一件令人担心的事。' },
    { w: 'concerts', zh: '音乐会', scene: '乐手在观众面前演奏的场次。', tone: '中性', col: 'live concerts, concert hall', en: 'The concerts are on Friday.', cn: '音乐会在星期五。' },
    { w: 'concrete', zh: '混凝土', scene: '水泥、沙和石子混成的建筑材料。作形容词时表示具体的。', tone: '中性', col: 'concrete floor, a concrete plan', en: 'The path is made of concrete.', cn: '这条路是混凝土的。' },
    { w: 'conditions', zh: '条件；状况', scene: '周围的状况，或合同里的那些条件。', tone: '中性', col: 'working conditions, weather conditions', en: 'Working conditions have improved.', cn: '工作条件改善了。' },
    { w: 'conference', zh: '会议', scene: '很多人聚在一起讨论的正式会议。', tone: '中性偏正式', col: 'a conference on, conference room', en: 'The conference is in March.', cn: '会议在三月举行。' },
    { w: 'confidential', zh: '机密的', scene: '不能随便告诉外人的信息。', tone: '正式', col: 'confidential information, keep confidential', en: 'The report is confidential.', cn: '这份报告是机密的。' },
    { w: 'confirm', zh: '确认', scene: '再核对一次，确定事情属实或已经定下。', tone: '中性', col: 'confirm that, confirm a booking', en: 'Please confirm the time.', cn: '请确认时间。' },
    { w: 'confi', zh: '矛盾', scene: '这张卡的意思是矛盾。常见的词是 conflict。', tone: '中性', col: 'a conflict between, in conflict', en: 'There is a conflict between the two dates.', cn: '这两个日期互相冲突。' },
    { w: 'confusion', zh: '混乱；困惑', scene: '事情缠在一起，人不知道该怎么理解。', tone: '中性', col: 'confusion about, cause confusion', en: 'The sign caused confusion.', cn: '这块牌子让人困惑。' },
    { w: 'congratulations', zh: '祝贺', scene: '对别人的好消息说的祝贺。常用复数。', tone: '褒义', col: 'congratulations on, offer congratulations', en: 'Congratulations on the result.', cn: '祝贺这个结果。' },
    { w: 'conquer', zh: '战胜', scene: '把困难或一个地方攻下来。', tone: '语气强', col: 'conquer a fear, conquer the', en: 'She conquered her fear of water.', cn: '她克服了对水的恐惧。' },
    { w: 'conservation', zh: '保护', scene: '把自然、建筑或资源保住，不让它消失。', tone: '正式', col: 'wildlife conservation, energy conservation', en: 'The park is for wildlife conservation.', cn: '这个公园用于野生动物保护。' },
    { w: 'consolidation', zh: '巩固', scene: '把已经有的东西收紧、变牢。', tone: '正式', col: 'consolidation of, debt consolidation', en: 'The course includes consolidation of last term.', cn: '这门课包括巩固上学期的内容。' },
    { w: 'consult', zh: '查阅；请教', scene: '去查一本书或问一个懂的人。', tone: '偏正式', col: 'consult a doctor, consult the', en: 'Consult the map before you turn.', cn: '转弯前先看地图。' },
    { w: 'consumption', zh: '消费；消耗', scene: '用掉的数量，如用电或买东西。', tone: '正式', col: 'energy consumption, fuel consumption', en: 'Energy consumption fell last year.', cn: '去年能源消耗下降了。' },
    { w: 'contacts', zh: '联系；联系人', scene: '和别人保持联系，或通讯录里的那些人。', tone: '中性', col: 'contact details, business contacts', en: 'Keep the contacts up to date.', cn: '把联系人保持为最新。' },
    { w: 'containers', zh: '容器；集装箱', scene: '用来装东西的盒子，或货运的大集装箱。', tone: '中性', col: 'plastic containers, shipping containers', en: 'Store the food in containers.', cn: '把食物放进容器里。' },
    { w: 'content', zh: '内容', scene: '书、课或盒子里面有什么。这里不是“满意的”。', tone: '中性', col: 'the content of, content page', en: 'Check the content of the bag.', cn: '看一下袋子里的东西。' },
    { w: 'continent', zh: '大陆', scene: '地球上很大的一块陆地，如亚洲。', tone: '中性', col: 'the African continent, on the continent', en: 'The desert crosses the continent.', cn: '这片沙漠横贯大陆。' },
    { w: 'continue', zh: '继续', scene: '停了一下或没停，事情接着往下做。', tone: '中性', col: 'continue to, continue with', en: 'Please continue with the next question.', cn: '请继续做下一题。' },
    { w: 'contradict', zh: '反驳', scene: '说出和对方相反的话，或两个事实对不上。', tone: '偏正式', col: 'contradict somebody, contradict a claim', en: 'The new figures contradict the old report.', cn: '新的数字和旧报告相反。' },
    { w: 'contribution', zh: '贡献', scene: '你放进共同事情里的那一份。', tone: '中性', col: 'a contribution to, make a contribution', en: 'Her contribution to the project was clear.', cn: '她对这个项目的贡献很清楚。' },
    { w: 'contro', zh: '控制', scene: '这张卡的意思是控制。常见拼写是 control。', tone: '中性', col: 'control of, under control', en: 'The pilot kept the plane under control.', cn: '飞行员控制住了飞机。' },
    { w: 'convenient', zh: '方便的', scene: '时间或地点刚好合适，不给人添麻烦。', tone: '中性', col: 'convenient for, a convenient time', en: 'Is Saturday convenient for you?', cn: '星期六你方便吗？' },
    { w: 'conversations', zh: '交谈', scene: '人与人说的那些话。', tone: '中性', col: 'phone conversations, conversations about', en: 'Their conversations were about the trip.', cn: '他们谈的是这次出行。' },
    { w: 'conversion', zh: '转换', scene: '从一种形式或单位变成另一种。', tone: '偏正式', col: 'conversion of, energy conversion', en: 'The conversion of the barn took a year.', cn: '谷仓的改造花了一年。' },
    { w: 'convey', zh: '传达', scene: '把意思、感情或货物从一边送到另一边。', tone: '偏正式', col: 'convey a message, convey that', en: 'The letter conveys her thanks.', cn: '这封信传达了她的谢意。' },
    { w: 'cook', zh: '烹调', scene: '用火或热把食物做熟。', tone: '中性', col: 'cook a meal, cook for', en: 'I cook dinner at seven.', cn: '我七点做晚饭。' },
    { w: 'cooker', zh: '炊具', scene: '用来做饭的炉具，不是做饭的人。', tone: '中性', col: 'a gas cooker, on the cooker', en: 'The soup is on the cooker.', cn: '汤在炉子上。' },
    { w: 'coo', zh: '凉爽的', scene: '这张卡的意思是凉爽的。常见拼写是 cool。', tone: '中性', col: 'a cool breeze, keep cool', en: 'A cool breeze came off the sea.', cn: '一阵凉风从海上吹来。' },
    { w: 'cope I', zh: '处理', scene: '这张卡的意思是应付、处理。常见写法是 cope，后面常接 with。', tone: '中性', col: 'cope with, cope well', en: 'She coped with the delay calmly.', cn: '她平静地应对了这次耽搁。' },
    { w: 'copies', zh: '副本', scene: '和原件一样再制出来的那些份。', tone: '中性', col: 'copies of, make copies', en: 'Make two copies of the form.', cn: '把表格复印两份。' },
    { w: 'copyright', zh: '版权', scene: '作者对自己作品享有的权利，别人不能随便复制。', tone: '正式', col: 'copyright of, under copyright', en: 'The book is under copyright.', cn: '这本书受版权保护。' },
    { w: 'corns', zh: '玉米', scene: '这张卡的意思是玉米。更常见的词是 corn。', tone: '中性', col: 'sweet corn, an ear of corn', en: 'The farm grows corn.', cn: '这家农场种玉米。' },
    { w: 'corners', zh: '角落', scene: '两条边相交的那些角。', tone: '中性', col: 'street corners, in the corner', en: 'The cafe is on the corner.', cn: '咖啡馆在拐角处。' },
    { w: 'cornet', zh: '短号', scene: '一种铜管乐器，样子像小号。', tone: '中性', col: 'play the cornet, a cornet solo', en: 'He plays the cornet in the band.', cn: '他在乐队里吹短号。' },
    { w: 'correct', zh: '正确的', scene: '没有错、符合事实。这张卡的原文释义写成了相反的 incorrect。', tone: '中性', col: 'the correct answer, correct information', en: 'Choose the correct answer.', cn: '选出正确的答案。' },
    { w: 'corridors', zh: '走廊', scene: '楼里连接各个房间的过道。', tone: '中性', col: 'long corridors, hospital corridors', en: 'The offices are along the corridor.', cn: '办公室在走廊两侧。' },
    { w: 'cosmetics', zh: '化妆品', scene: '用来化妆的那些产品。', tone: '中性', col: 'cosmetics counter, natural cosmetics', en: 'The shop sells cosmetics.', cn: '这家店卖化妆品。' },
    { w: 'costumes', zh: '戏服', scene: '演戏或节日时穿的服装。', tone: '中性', col: 'stage costumes, traditional costumes', en: 'The actors changed costumes.', cn: '演员们换了戏服。' },
    { w: 'cottages', zh: '村舍', scene: '乡下小房子。', tone: '中性', col: 'stone cottages, holiday cottages', en: 'The lane has three cottages.', cn: '这条小路上有三间村舍。' },
    { w: 'cotton', zh: '棉花', scene: '从棉株上采下、用来做布的白色纤维。', tone: '中性', col: 'cotton shirt, raw cotton', en: 'The shirt is made of cotton.', cn: '这件衬衫是棉的。' },
    { w: 'counci', zh: '委员会', scene: '这张卡的意思是委员会或理事会。常见拼写是 council。', tone: '正式', col: 'the city council, council meeting', en: 'The council approved the plan.', cn: '理事会批准了这个计划。' },
    { w: 'count', zh: '数数', scene: '一个一个地数。这里不是“依靠”。', tone: '中性', col: 'count the, count to', en: 'Count the chairs before the talk.', cn: '讲座前数一下椅子。' },
    { w: 'counterpart', zh: '对应的人；对应物', scene: '在另一个机构里和你职位相当的那个人，或相对应的东西。', tone: '正式', col: 'a counterpart in, the counterpart of', en: 'She met her counterpart from the other school.', cn: '她见了另一所学校里和她职务相当的人。' },
    { w: 'countries', zh: '国家', scene: '一个个国家。这张卡的意思是国家。', tone: '中性', col: 'European countries, neighbouring countries', en: 'The two countries share a border.', cn: '这两个国家接壤。' },
    { w: 'course', zh: '课程；一道菜', scene: '学校里的一门课。在餐桌上，它是一道菜。', tone: '中性', col: 'a course in, the main course', en: 'The course lasts ten weeks.', cn: '这门课为期十周。' },
    { w: 'courts', zh: '球场；法院', scene: '打球的场地，或审理案件的法院。', tone: '中性', col: 'tennis courts, law courts', en: 'The tennis courts are behind the hall.', cn: '网球场在大厅后面。' },
    { w: 'courtyard', zh: '庭院', scene: '建筑围起来的那块露天院子。', tone: '中性', col: 'an inner courtyard, courtyard garden', en: 'We waited in the courtyard.', cn: '我们在庭院里等。' },
    { w: 'cousins', zh: '堂兄弟姐妹', scene: '父母的兄弟姐妹的孩子。', tone: '中性', col: 'my cousins, two cousins', en: 'My cousins live in the next town.', cn: '我的堂兄弟姐妹住在邻镇。' },
    { w: 'cover', zh: '包括', scene: '范围把这一项算进去。这个词也可以表示盖上。', tone: '中性', col: 'cover the cost, cover a topic', en: 'The fee covers lunch.', cn: '这个费用包括午餐。' },
    { w: 'coverage', zh: '覆盖', scene: '新闻报道的范围，或保险、信号盖到的范围。', tone: '中性', col: 'news coverage, insurance coverage', en: 'The event received wide coverage.', cn: '这件事得到了广泛报道。' },
    { w: 'cracks', zh: '裂缝', scene: '表面上裂开的缝。', tone: '中性', col: 'cracks in, hairline cracks', en: 'There are cracks in the wall.', cn: '墙上有裂缝。' },
    { w: 'craft', zh: '工艺；手艺', scene: '用手做成的技艺，如陶艺或木工。', tone: '中性', col: 'a craft fair, the craft of', en: 'The market sells local craft.', cn: '市场卖当地的手工艺品。' },
    { w: 'craftsmen', zh: '手艺人', scene: '以手艺为业的人，是 craftsman 的复数。', tone: '中性', col: 'skilled craftsmen, local craftsmen', en: 'Local craftsmen made the chairs.', cn: '当地手艺人做了这些椅子。' },
    { w: 'cream', zh: '奶油', scene: '牛奶上层那层可以打成泡沫的脂肪。', tone: '中性', col: 'whipped cream, ice cream', en: 'The dessert has cream.', cn: '这份甜点有奶油。' },
    { w: 'crime', zh: '犯罪', scene: '法律不许做、做了会受罚的事。', tone: '中性', col: 'a crime against, commit a crime', en: 'Theft is a crime.', cn: '偷窃是犯罪。' },
    { w: 'crisis', zh: '危机', scene: '事情突然变得很危险、必须马上处理的时刻。', tone: '负面', col: 'a crisis in, financial crisis', en: 'The hospital faced a staffing crisis.', cn: '医院面临人员危机。' },
    { w: 'crisps', zh: '薯片', scene: '薄薄的油炸土豆片，英式英语的说法。', tone: '中性', col: 'a packet of crisps, cheese crisps', en: 'He bought a packet of crisps.', cn: '他买了一包薯片。' },
    { w: 'criteria l', zh: '标准', scene: '这张卡的意思是标准、条件，是 criterion 的复数。常见拼写是 criteria。', tone: '正式', col: 'selection criteria, meet the criteria', en: 'The plan meets the criteria.', cn: '这个计划符合标准。' },
    { w: 'critical', zh: '批评的；危急的', scene: '指出缺点，或情况已经到了紧要关头。这里不是“至关重要”那个意思的唯一用法，但“紧要”也说得通。', tone: '中性', col: 'critical of, a critical moment', en: 'She was critical of the delay.', cn: '她批评了这次耽搁。' },
    { w: 'crocodiles', zh: '鳄鱼', scene: '生活在水边、嘴巴很长的爬行动物。', tone: '中性', col: 'saltwater crocodiles, crocodile skin', en: 'Crocodiles live in the river.', cn: '鳄鱼住在这条河里。' },
    { w: 'croft', zh: '小农场', scene: '苏格兰等地很小的一块耕地和住房。', tone: '中性', col: 'a family croft, croft house', en: 'The croft is by the shore.', cn: '这座小农场在岸边。' },
    { w: 'cross', zh: '横过', scene: '从一边走到另一边。', tone: '中性', col: 'cross the road, cross a bridge', en: 'Cross the road at the lights.', cn: '在红绿灯处过马路。' },
    { w: 'crow', zh: '乌鸦', scene: '一身黑羽、叫声粗的鸟。', tone: '中性', col: 'a black crow, crow on', en: 'A crow sat on the fence.', cn: '一只乌鸦停在篱笆上。' },
    { w: 'crowds', zh: '挤满', scene: '很多人挤在一个地方，或把地方挤满。', tone: '中性', col: 'crowds of, crowded with', en: 'Crowds filled the square.', cn: '人群挤满了广场。' },
    { w: 'crudes', zh: '粗糙的；天然的', scene: '这张卡的意思是粗糙的或未经加工的。常见词是 crude。', tone: '中性', col: 'crude oil, a crude drawing', en: 'The sketch is crude but clear.', cn: '这张草图很粗糙，但很清楚。' },
    { w: 'cruel', zh: '残酷的', scene: '故意让别的生命痛苦。', tone: '负面', col: 'cruel to, a cruel remark', en: 'The remark was cruel.', cn: '那句话很残酷。' },
    { w: 'cruises', zh: '乘船游览', scene: '坐船慢慢游览，常是假期。', tone: '中性', col: 'river cruises, a cruise ship', en: 'They booked a river cruise.', cn: '他们订了一次河上乘船游览。' },
    { w: 'crush', zh: '压碎', scene: '用很大的力把东西压破。它也可以表示短暂的迷恋。', tone: '中性', col: 'crush the, crushed ice', en: 'Crush the garlic with a knife.', cn: '用刀把蒜压碎。' },
    { w: 'crying', zh: '哭泣', scene: '因为难过或疼痛而流泪出声。', tone: '中性', col: 'stop crying, a crying baby', en: 'The baby was crying.', cn: '婴儿在哭。' },
    { w: 'crystals', zh: '水晶', scene: '有规则形状的透明矿物，或晶体。', tone: '中性', col: 'ice crystals, salt crystals', en: 'Ice crystals formed on the window.', cn: '窗上结了冰晶。' },
    { w: 'cultivate', zh: '培养', scene: '把土地种起来，或把一种习惯、关系慢慢养成。', tone: '偏正式', col: 'cultivate land, cultivate a skill', en: 'The course helps students cultivate patience.', cn: '这门课帮助学生培养耐心。' },
    { w: 'cultures', zh: '文明；文化', scene: '不同人群长期形成的生活方式。这张卡写的是文明。', tone: '中性', col: 'local cultures, world cultures', en: 'The museum presents local cultures.', cn: '博物馆展示当地文化。' },
    { w: 'curry', zh: '咖喱', scene: '用香料做成的一种炖菜。', tone: '中性', col: 'chicken curry, a mild curry', en: 'We ordered a vegetable curry.', cn: '我们点了一份蔬菜咖喱。' },
    { w: 'curtains', zh: '窗帘', scene: '挂在窗上、可以拉开的布。', tone: '中性', col: 'draw the curtains, heavy curtains', en: 'Close the curtains at night.', cn: '晚上把窗帘拉上。' },
    { w: 'curved', zh: '弯曲的', scene: '线条或边缘不是直的，弯过去。', tone: '中性', col: 'a curved line, curved roof', en: 'The roof is curved.', cn: '屋顶是弯曲的。' },
    { w: 'cut', zh: '切下', scene: '用刀把一块从整体上分开。', tone: '中性', col: 'cut the, cut into', en: 'Cut the bread into slices.', cn: '把面包切成片。' },
    { w: 'cutlery', zh: '餐具', scene: '吃饭用的刀、叉、勺。', tone: '中性', col: 'a set of cutlery, plastic cutlery', en: 'The cutlery is in the drawer.', cn: '餐具在抽屉里。' },
    { w: 'CVi', zh: '简历', scene: '这张卡是简历的缩写。常见写法是 CV，即 curriculum vitae。', tone: '中性', col: 'a CV for, send a CV', en: 'Send your CV with the form.', cn: '把简历和表格一起交上。' },
    { w: 'cyeling', zh: '骑车', scene: '这张卡的意思是骑自行车。常见拼写是 cycling。', tone: '中性', col: 'go cycling, cycling to work', en: 'Cycling to work takes twenty minutes.', cn: '骑自行车上班要二十分钟。' },
    { w: 'cylinders', zh: '圆柱', scene: '上下一样圆、像罐子的立体形状，或汽缸。', tone: '中性偏技术', col: 'metal cylinders, gas cylinders', en: 'The gas is stored in cylinders.', cn: '气体储存在钢瓶里。' },
{ w: 'daily', zh: '日常的', scene: '每一天都会发生的，不是偶尔一次。', tone: '中性', col: 'daily life, a daily routine', en: 'Walking is part of her daily routine.', cn: '走路是她日常生活的一部分。' },
    { w: 'dam', zh: '水坝', scene: '横在河上、把水拦住的建筑物。', tone: '中性', col: 'a dam on, build a dam', en: 'The dam holds back the river.', cn: '水坝把河水拦住。' },
    { w: 'dancer', zh: '舞蹈演员', scene: '以跳舞为表演或职业的人。', tone: '中性', col: 'a ballet dancer, professional dancer', en: 'The dancer practised for an hour.', cn: '这位舞蹈演员练了一个小时。' },
    { w: 'dances', zh: '舞蹈', scene: '按节奏做出的舞，或跳舞这个动作。', tone: '中性', col: 'folk dances, dance class', en: 'The festival includes folk dances.', cn: '节日里有民间舞蹈。' },
    { w: 'dangerous', zh: '危险的', scene: '可能让人受伤，需要躲开。', tone: '中性', col: 'a dangerous road, dangerous to', en: 'The wet road is dangerous.', cn: '湿路很危险。' },
    { w: 'dark', zh: '黑暗的；深色的', scene: '光线很少，或颜色很深。', tone: '中性', col: 'a dark room, dark blue', en: 'The room was dark.', cn: '房间很暗。' },
    { w: 'database', zh: '数据库', scene: '把大量记录存在电脑里、可以查找的那一套。', tone: '中性', col: 'a database of, search the database', en: 'The library has a database of articles.', cn: '图书馆有一个文章数据库。' },
    { w: 'dates', zh: '日期', scene: '日历上的某一天。作动词时也可以表示始于。', tone: '中性', col: 'important dates, dates from', en: 'Write the dates on the form.', cn: '把日期写在表格上。' },
    { w: 'daughter', zh: '女儿', scene: '某人的女性子女。', tone: '中性', col: 'a daughter of, her daughter', en: 'Her daughter is at school.', cn: '她女儿在上学。' },
    { w: 'days', zh: '天', scene: '一个个白天或一整天。', tone: '中性', col: 'three days, in those days', en: 'The course lasts five days.', cn: '这门课为期五天。' },
    { w: 'daytime', zh: '白天', scene: '太阳还在、还没到夜里的那段时间。', tone: '中性', col: 'during the daytime, daytime hours', en: 'The museum is open in the daytime.', cn: '博物馆白天开放。' },
    { w: 'deadlines', zh: '最终期限', scene: '必须交上或做完的那个时间点。', tone: '中性', col: 'meet deadlines, tight deadlines', en: 'The deadlines are on the notice.', cn: '截止日期写在通知上。' },
    { w: 'debtor', zh: '债务人', scene: '欠着钱、需要还的那一方。', tone: '正式', col: 'a debtor to, the debtor', en: 'The debtor agreed to pay in June.', cn: '债务人同意六月还款。' },
    { w: 'December', zh: '十二月', scene: '一年的第十二个月。', tone: '专名', col: 'in December, last December', en: 'The term ends in December.', cn: '学期十二月结束。' },
    { w: 'deck', zh: '甲板；层', scene: '船上走人或放货的那一层，或建筑的一层。', tone: '中性', col: 'on deck, the top deck', en: 'Passengers waited on deck.', cn: '乘客在甲板上等。' },
    { w: 'decorations', zh: '装饰', scene: '为了好看挂上或摆上的那些东西。', tone: '中性', col: 'party decorations, wall decorations', en: 'The hall has paper decorations.', cn: '大厅里有纸做的装饰。' },
    { w: 'deduction', zh: '扣除', scene: '从总数里减去的那一笔。', tone: '偏正式', col: 'a deduction of, tax deduction', en: 'The deduction is shown on the payslip.', cn: '这笔扣除写在工资单上。' },
    { w: 'defence', zh: '防御', scene: '挡住攻击或指责的那一层保护。英式拼写。', tone: '中性', col: 'in defence of, a defence against', en: 'The wall was built for defence.', cn: '这堵墙是为了防御而建的。' },
    { w: 'definitely', zh: '当然；清楚地', scene: '没有犹豫，答案是确定的。', tone: '语气强', col: 'definitely the, definitely not', en: 'I will definitely come.', cn: '我一定会来。' },
    { w: 'definition', zh: '定义', scene: '用一句话把一个词的意思框住。', tone: '中性', col: 'a definition of, by definition', en: 'Look up the definition.', cn: '查一下这个定义。' },
    { w: 'degree', zh: '程度', scene: '事情有多深、多强。它也可以表示学位或温度的度。', tone: '中性', col: 'to a degree, a high degree', en: 'The risk is small to a degree.', cn: '风险在一定程度上很小。' },
    { w: 'deliberately', zh: '故意地', scene: '不是失手，是有意这么做。', tone: '中性', col: 'deliberately ignore, deliberately slow', en: 'She deliberately left the door open.', cn: '她故意把门留着。' },
    { w: 'delight', zh: '高兴', scene: '心里一下子亮起来的那种高兴。', tone: '褒义', col: 'a delight to, take delight in', en: 'The news was a delight.', cn: '这个消息让人高兴。' },
    { w: 'deliveries', zh: '递送', scene: '一次次把货送到的那些运送，是 delivery 的复数。', tone: '中性', col: 'morning deliveries, home deliveries', en: 'Deliveries arrive before noon.', cn: '送货在中午以前到。' },
    { w: 'dementia', zh: '痴呆', scene: '记忆和思考能力逐渐减退的一种病况。', tone: '中性，医学', col: 'dementia care, people with dementia', en: 'The clinic supports people with dementia.', cn: '这家诊所帮助痴呆症患者。' },
    { w: 'democratics', zh: '民主的', scene: '这张卡的意思是民主的。常见拼写是 democratic。', tone: '正式', col: 'a democratic vote, democratic system', en: 'The club uses a democratic vote.', cn: '这个社团用民主投票。' },
    { w: 'demonstrations', zh: '示范', scene: '把做法做给别人看的那些演示。它也可以是游行。', tone: '中性', col: 'cooking demonstrations, a demonstration of', en: 'The class includes demonstrations.', cn: '这节课包括示范。' },
    { w: 'density', zh: '密度', scene: '一定空间里有多挤、有多少。', tone: '偏技术', col: 'population density, high density', en: 'The city has a high population density.', cn: '这座城市人口密度高。' },
    { w: 'dentist', zh: '牙科医生', scene: '给人看牙的医生。', tone: '中性', col: 'see a dentist, the dentist', en: 'I have an appointment with the dentist.', cn: '我和牙医有一个预约。' },
    { w: 'departments', zh: '部门', scene: '机构里分成的那些科室。', tone: '中性', col: 'academic departments, store departments', en: 'The university has ten departments.', cn: '这所大学有十个系。' },
    { w: 'deploy', zh: '部署', scene: '把人员或设备安排到要用的位置上。', tone: '正式', col: 'deploy staff, deploy a system', en: 'The hospital will deploy extra nurses.', cn: '医院将增派护士。' },
    { w: 'deposits', zh: '押金；沉淀物', scene: '先交出的一笔押金，或沉在瓶底、河底的物质。', tone: '中性', col: 'security deposits, mineral deposits', en: 'The flat needs a deposit.', cn: '这套公寓需要押金。' },
    { w: 'deserts', zh: '沙漠；遗弃', scene: '很少下雨的那片沙地。作动词时是把人或计划扔下不管。', tone: '中性', col: 'hot deserts, desert the', en: 'Camels live in deserts.', cn: '骆驼生活在沙漠里。' },
    { w: 'designers', zh: '设计师', scene: '画出衣服、建筑或产品样子的人。', tone: '中性', col: 'fashion designers, graphic designers', en: 'The designers met the client.', cn: '设计师见了客户。' },
    { w: 'designs', zh: '设计', scene: '还没做出来之前画好的样子，或设计这个动作。', tone: '中性', col: 'new designs, design a', en: 'The book shows three designs.', cn: '这本书展示了三种设计。' },
    { w: 'desk', zh: '办公桌', scene: '用来写字、放电脑的桌子。', tone: '中性', col: 'at the desk, a front desk', en: 'Leave the form at the desk.', cn: '把表格放在前台。' },
    { w: 'destinations', zh: '目的地', scene: '旅程要到达的那些地方。', tone: '中性', col: 'holiday destinations, popular destinations', en: 'The brochure lists destinations.', cn: '小册子列出了目的地。' },
    { w: 'details', zh: '细节', scene: '大意之外的那些具体小点。', tone: '中性', col: 'the details of, in detail', en: 'The details are on the second page.', cn: '细节在第二页。' },
    { w: 'determination', zh: '决心', scene: '认定一个目标就不改道的那股劲。', tone: '褒义', col: 'determination to, show determination', en: 'She finished with determination.', cn: '她靠决心做完了。' },
    { w: 'develop', zh: '发展', scene: '从较小、较简单变成更大或更完整。', tone: '中性', col: 'develop a skill, develop into', en: 'The town developed around the port.', cn: '这个镇子围绕港口发展起来。' },
    { w: 'devices', zh: '装置', scene: '为某个用途做成的那些小设备。', tone: '中性', col: 'electronic devices, safety devices', en: 'Switch off electronic devices.', cn: '请关闭电子设备。' },
    { w: 'devote', zh: '致力于', scene: '把时间或心力专门放在一件事上。', tone: '偏正式', col: 'devote time to, devote yourself to', en: 'She devotes an hour to reading.', cn: '她每天用一小时读书。' },
    { w: 'diagrams', zh: '图解', scene: '用线条把结构或步骤画出来的图。', tone: '中性', col: 'labelled diagrams, a diagram of', en: 'The page has two diagrams.', cn: '这一页有两幅图解。' },
    { w: 'diamond', zh: '钻石；菱形', scene: '很硬的宝石，或一个菱形。', tone: '中性', col: 'a diamond ring, diamond shape', en: 'The sign is a diamond.', cn: '这个标志是菱形的。' },
    { w: 'dictionaries', zh: '词典', scene: '按词条解释词义的那些书，是 dictionary 的复数。', tone: '中性', col: 'online dictionaries, bilingual dictionaries', en: 'Students may use dictionaries.', cn: '学生可以使用词典。' },
    { w: 'differences', zh: '差异', scene: '两样东西不一样的那些地方。', tone: '中性', col: 'differences between, small differences', en: 'There are differences between the two maps.', cn: '这两张地图有差异。' },
    { w: 'difficulties', zh: '困难', scene: '让事情变难的那些障碍，是 difficulty 的复数。', tone: '中性', col: 'financial difficulties, learning difficulties', en: 'The project met some difficulties.', cn: '这个项目遇到了一些困难。' },
    { w: 'dig', zh: '挖', scene: '用工具把土翻开。', tone: '中性', col: 'dig a hole, dig up', en: 'They dug a hole for the tree.', cn: '他们为这棵树挖了一个坑。' },
    { w: 'digestion', zh: '消化', scene: '身体把食物变成能用的养分的过程。', tone: '中性', col: 'digestion of, aid digestion', en: 'Walking can help digestion.', cn: '走路有助于消化。' },
    { w: 'digital', zh: '数字的', scene: '用数字信号而不是胶片或纸记录的。', tone: '中性', col: 'a digital camera, digital map', en: 'The map is digital.', cn: '这张地图是数字的。' },
    { w: 'dignitary', zh: '要人', scene: '职位高、在正式场合出现的人物。', tone: '正式', col: 'a visiting dignitary, local dignitary', en: 'A dignitary opened the building.', cn: '一位要人为这栋楼揭幕。' },
    { w: 'dimensions', zh: '尺寸；维', scene: '长宽高这些尺寸，或一个问题的不同方面。', tone: '偏正式', col: 'the dimensions of, in three dimensions', en: 'Measure the dimensions of the room.', cn: '量一下房间的尺寸。' },
    { w: 'dining', zh: '进餐', scene: '坐下来吃饭这件事，或吃饭的地方。', tone: '中性', col: 'a dining room, dining out', en: 'The dining room seats forty.', cn: '餐厅能坐四十人。' },
    { w: 'dinners', zh: '晚餐', scene: '一天里较晚的那一餐。', tone: '中性', col: 'family dinners, three-course dinners', en: 'Sunday dinners are at six.', cn: '星期日的晚餐在六点。' },
    { w: 'dip', zh: '浸；短泳', scene: '把东西短时间放进液体，或下去游一会儿。', tone: '中性', col: 'dip into, a quick dip', en: 'Dip the brush into the paint.', cn: '把刷子在颜料里蘸一下。' },
    { w: 'directions', zh: '方向；用法说明', scene: '东南西北，或告诉你怎么做的说明。', tone: '中性', col: 'ask for directions, follow the directions', en: 'Follow the directions on the packet.', cn: '按照包装上的说明做。' },
    { w: 'director', zh: '主任；导演', scene: '一个部门的负责人，或指导一部影片的人。', tone: '中性', col: 'the director of, film director', en: 'The director approved the budget.', cn: '主任批准了预算。' },
    { w: 'disabled', zh: '残疾的', scene: '身体或感官有长期障碍的。', tone: '中性', col: 'disabled access, disabled people', en: 'The entrance has disabled access.', cn: '入口有无障碍通道。' },
    { w: 'disappointed', zh: '失望的', scene: '结果比期望的差，心里沉下来。', tone: '中性', col: 'disappointed with, disappointed that', en: 'She was disappointed with the delay.', cn: '这次耽搁让她失望。' },
    { w: 'disasters', zh: '灾难', scene: '造成很大损失的那些灾祸。', tone: '负面', col: 'natural disasters, avoid disasters', en: 'The region prepares for disasters.', cn: '这个地区为灾难做准备。' },
    { w: 'discharge', zh: '释放', scene: '把人、水或电放出去。医院里常指出院。', tone: '偏正式', col: 'discharge from, discharge water', en: 'The patient was discharged on Monday.', cn: '病人星期一出院了。' },
    { w: 'discipline', zh: '学科；纪律', scene: '一门学问，或要求人遵守的规矩。', tone: '中性', col: 'academic discipline, school discipline', en: 'History is a school discipline.', cn: '历史是学校里的一门学科。' },
    { w: 'disc', zh: '迪斯科舞厅', scene: '这张卡的释义是迪斯科舞厅。那个地方更常见的词是 disco。disc 通常指圆盘或唱片。', tone: '词条本身', col: 'a disco club, a compact disc', en: 'The disco closed at midnight.', cn: '迪斯科舞厅午夜关门。' },
    { w: 'discount', zh: '折扣', scene: '价钱被减掉的那一块。', tone: '中性', col: 'a discount on, student discount', en: 'Students get a discount.', cn: '学生可以打折。' },
    { w: 'discourage', zh: '劝阻；使气馁', scene: '让人打消念头，或不想再继续。这张卡的释义写成了“阻止”。', tone: '中性', col: 'discourage somebody from, feel discouraged', en: 'The rain discouraged us from walking.', cn: '下雨让我们打消了走路的念头。' },
    { w: 'diseases', zh: '疾病', scene: '身体出了问题的那些病。', tone: '中性', col: 'heart diseases, infectious diseases', en: 'The clinic treats skin diseases.', cn: '这家诊所治疗皮肤病。' },
    { w: 'dishes', zh: '盘子；菜肴', scene: '吃饭用的盘子，或一道道菜。', tone: '中性', col: 'wash the dishes, local dishes', en: 'Please wash the dishes.', cn: '请把盘子洗了。' },
    { w: 'dishwasher', zh: '洗碗机', scene: '用来洗餐具的机器。', tone: '中性', col: 'load the dishwasher, a dishwasher', en: 'Put the plates in the dishwasher.', cn: '把盘子放进洗碗机。' },
    { w: 'disinfectant', zh: '消毒剂', scene: '用来杀死病菌的液体或喷雾。', tone: '中性', col: 'disinfectant spray, use disinfectant', en: 'Wipe the table with disinfectant.', cn: '用消毒剂擦桌子。' },
    { w: 'dismiss', zh: '解散；解雇', scene: '让一群人散去，或解除某人的工作。', tone: '偏正式', col: 'dismiss a class, dismiss somebody', en: 'The teacher dismissed the class.', cn: '老师宣布下课。' },
    { w: 'dismissive', zh: '轻蔑的', scene: '一句话就把别人的想法拨到一边，不当回事。', tone: '负面', col: 'dismissive of, a dismissive remark', en: 'He was dismissive of the idea.', cn: '他对这个想法不屑一顾。' },
    { w: 'displays', zh: '展示', scene: '把东西摆出来给人看，或屏幕上的显示。', tone: '中性', col: 'window displays, a display of', en: 'The museum displays old tools.', cn: '博物馆展示旧工具。' },
    { w: 'dispose', zh: '处理', scene: '把不要的东西按规矩扔掉或安排掉。常说 dispose of。', tone: '偏正式', col: 'dispose of, dispose of waste', en: 'Dispose of the batteries safely.', cn: '把电池安全处理掉。' },
    { w: 'distances', zh: '距离', scene: '两地之间有多远。', tone: '中性', col: 'long distances, walking distances', en: 'The map shows distances.', cn: '地图标出了距离。' },
    { w: 'distortion', zh: '变形；失真', scene: '原来的形状或声音被扭歪了。', tone: '偏正式', col: 'sound distortion, distortion of', en: 'The photo shows some distortion.', cn: '这张照片有些变形。' },
    { w: 'distract', zh: '分散注意力', scene: '一件突然的事把人的注意从正在做的事情上拉开。', tone: '中性', col: 'distract somebody, easily distracted', en: 'Noise can distract students.', cn: '噪音会分散学生的注意力。' },
    { w: 'divers', zh: '潜水者', scene: '潜入水下的人。', tone: '中性', col: 'scuba divers, deep-sea divers', en: 'Divers inspected the hull.', cn: '潜水员检查了船底。' },
    { w: 'diversity', zh: '多样性', scene: '一个地方里种类很多、并不单一。', tone: '中性偏正式', col: 'cultural diversity, a diversity of', en: 'The city has cultural diversity.', cn: '这座城市有文化多样性。' },
    { w: 'divide', zh: '分开', scene: '把一个整体切成或分成几份。', tone: '中性', col: 'divide into, divide by', en: 'Divide the class into groups.', cn: '把全班分成小组。' },
    { w: 'DNA', zh: '遗传物质', scene: '细胞里携带遗传信息的那种物质。', tone: '偏技术', col: 'DNA test, a strand of DNA', en: 'The lab compared the DNA.', cn: '实验室比对了遗传物质。' },
    { w: 'doctors', zh: '医生；博士', scene: '给人看病的医生。在大学里也可以指博士。', tone: '中性', col: 'see doctors, family doctors', en: 'Two doctors work at the clinic.', cn: '诊所里有两位医生。' },
    { w: 'documentary', zh: '纪录片', scene: '根据真实事件拍摄的影片或节目。', tone: '中性', col: 'a documentary about, watch a documentary', en: 'The documentary is about the river.', cn: '这部纪录片讲这条河。' },
    { w: 'dogs', zh: '狗', scene: '作为宠物或工作动物的狗。', tone: '中性', col: 'guide dogs, pet dogs', en: 'Dogs are not allowed in the shop.', cn: '这家店不许带狗。' },
    { w: 'dollars', zh: '美元', scene: '一种货币单位，符号常写作 $。', tone: '中性', col: 'ten dollars, US dollars', en: 'The ticket costs ten dollars.', cn: '这张票十美元。' },
    { w: 'dolls', zh: '洋娃娃', scene: '做成小人样子的玩具。', tone: '中性', col: 'cloth dolls, a collection of dolls', en: 'The shelf holds several dolls.', cn: '架子上放着几个娃娃。' },
    { w: 'dolphin', zh: '海豚', scene: '生活在海里、会跳出水面的哺乳动物。', tone: '中性', col: 'a dolphin pod, swim with dolphins', en: 'A dolphin followed the boat.', cn: '一只海豚跟着船。' },
    { w: 'domestic', zh: '国内的；家养的', scene: '本国以内的，或养在家里的。两个意思都常见。', tone: '中性', col: 'domestic flights, domestic animals', en: 'The airline added a domestic flight.', cn: '这家航空公司增加了一班国内航班。' },
    { w: 'dominated', zh: '占主导地位的', scene: '某一方在场面里压过其他方。', tone: '中性', col: 'dominated by, male-dominated', en: 'The market is dominated by two firms.', cn: '市场由两家公司主导。' },
    { w: 'door', zh: '门', scene: '进出房间时打开的那一块板。', tone: '中性', col: 'the front door, open the door', en: 'Please close the door.', cn: '请把门关上。' },
    { w: 'doubles', zh: '两倍的', scene: '数量变成原来的两倍。', tone: '中性', col: 'doubles the, more than doubles', en: 'The fare doubles after midnight.', cn: '午夜后票价变成两倍。' },
    { w: 'doubt', zh: '怀疑', scene: '心里不能确定这件事是真的。', tone: '中性', col: 'in doubt, no doubt', en: 'There is some doubt about the date.', cn: '这个日期还有些疑问。' },
    { w: 'down', zh: '在下面；向下', scene: '位置更低，或从高处往低处。它也可以表示停止运转。', tone: '中性', col: 'sit down, walk down', en: 'Walk down the hill.', cn: '往山下走。' },
    { w: 'downhil', zh: '下坡', scene: '这张卡的意思是下坡。常见拼写是 downhill。', tone: '中性', col: 'downhill from, a downhill path', en: 'The path is downhill from here.', cn: '从这里开始小路是下坡。' },
    { w: 'downstairs', zh: '楼下', scene: '同一栋楼里更低的那一层。', tone: '中性', col: 'go downstairs, the downstairs room', en: 'The kitchen is downstairs.', cn: '厨房在楼下。' },
    { w: 'downstream', zh: '顺流而下', scene: '河水流动的方向，往下游。', tone: '中性', col: 'downstream from, further downstream', en: 'The village is downstream from the dam.', cn: '村子在水坝的下游。' },
    { w: 'downtown', zh: '市中心', scene: '一座城市里商店和办公楼集中的那一片。', tone: '中性', col: 'downtown area, go downtown', en: 'The museum is downtown.', cn: '博物馆在市中心。' },
    { w: 'doze', zh: '打瞌睡', scene: '坐着或靠着，短暂地睡着一下。', tone: '中性', col: 'doze off, a short doze', en: 'He dozed off on the train.', cn: '他在火车上打了个盹。' },
    { w: 'draft', zh: '草稿', scene: '还没定稿、可以再改的那一版。', tone: '中性', col: 'a first draft, draft of', en: 'Send me a draft of the letter.', cn: '把信的草稿发给我。' },
    { w: 'dragon', zh: '龙', scene: '故事里有鳞、会飞的那种巨兽。', tone: '中性', col: 'a dragon story, dragon boat', en: 'The children drew a dragon.', cn: '孩子们画了一条龙。' },
    { w: 'drainage', zh: '排水', scene: '把多余的水引走的系统。', tone: '中性偏技术', col: 'drainage system, poor drainage', en: 'The field has poor drainage.', cn: '这块地排水不好。' },
    { w: 'drama', zh: '戏剧', scene: '在舞台上演出的戏，或戏剧这门艺术。', tone: '中性', col: 'a drama class, television drama', en: 'She studies drama.', cn: '她学戏剧。' },
    { w: 'draw', zh: '画；吸引', scene: '用笔画出线条。它也可以表示把人吸引过来。', tone: '中性', col: 'draw a picture, draw a crowd', en: 'Draw a map of the room.', cn: '画一张房间的图。' },
    { w: 'dream', zh: '睡梦', scene: '睡觉时脑子里出现的画面。它也可以表示梦想。', tone: '中性', col: 'a bad dream, dream of', en: 'I had a strange dream.', cn: '我做了一个奇怪的梦。' },
    { w: 'drive', zh: '开车', scene: '坐在驾驶座上让车往前走。', tone: '中性', col: 'drive to, drive a car', en: 'She drives to work.', cn: '她开车上班。' },
    { w: 'drummer', zh: '鼓手', scene: '在乐队里打鼓的人。', tone: '中性', col: 'the drummer in, a jazz drummer', en: 'The drummer kept the beat.', cn: '鼓手打着拍子。' },
    { w: 'ducks', zh: '鸭子', scene: '会游水、扁嘴的那种鸟。', tone: '中性', col: 'wild ducks, feed the ducks', en: 'Ducks swim on the pond.', cn: '鸭子在池塘里游。' },
    { w: 'dues', zh: '预期的', scene: '这张卡的释义是预期的。常见的词是 due，如 due on Friday。', tone: '中性', col: 'due on, due to', en: 'The form is due on Friday.', cn: '表格星期五到期。' },
    { w: 'dump', zh: '丢下', scene: '把不要的东西随手扔下，或把垃圾倒掉。', tone: '偏口语，常偏负面', col: 'dump the, dump waste', en: 'Do not dump waste in the river.', cn: '不要把废弃物倒进河里。' },
    { w: 'during', zh: '在……期间', scene: '在一段时间内，事情正在进行。', tone: '中性', col: 'during the, during the day', en: 'The shop is closed during lunch.', cn: '这家店午饭期间关门。' },
    { w: 'dyes', zh: '染料', scene: '用来把布或头发染上颜色的物质。作动词是染。', tone: '中性', col: 'natural dyes, hair dyes', en: 'The workshop uses plant dyes.', cn: '这个工坊使用植物染料。' },
{ w: 'eagles', zh: '鹰', scene: '翅膀很宽、在高处盘旋的猛禽。', tone: '中性', col: 'golden eagles, eagles in', en: 'Eagles nest on the cliff.', cn: '鹰在悬崖上筑巢。' },
    { w: 'early', zh: '早的；早期的', scene: '比约定或通常的时间更早，或一段时期的开头。', tone: '中性', col: 'early morning, an early start', en: 'The train is early today.', cn: '今天这趟火车早到了。' },
    { w: 'ears', zh: '耳朵', scene: '头两侧用来听声音的部位。', tone: '中性', col: 'in the ears, cover your ears', en: 'Cover your ears near the drill.', cn: '电钻旁边捂住耳朵。' },
    { w: 'earth', zh: '地球；土地', scene: '我们住的这颗星球，或脚底下的土。这张卡的原文释义写成了“东方”，那个意思是 east。', tone: '中性', col: 'on earth, the earth', en: 'The earth moves around the sun.', cn: '地球绕着太阳转。' },
    { w: 'eclipse', zh: '日食', scene: '月亮挡住太阳，或一个天体挡住另一个的光。', tone: '中性', col: 'a solar eclipse, an eclipse of', en: 'We watched the eclipse.', cn: '我们看了这次日食。' },
    { w: 'ecology', zh: '生态学', scene: '研究生物和它们周围环境如何相处的学科。', tone: '正式', col: 'plant ecology, ecology of', en: 'The course includes ecology.', cn: '这门课包括生态学。' },
    { w: 'economics', zh: '经济学', scene: '研究生产、买卖和资源如何分配的学科。', tone: '正式', col: 'study economics, home economics', en: 'She studies economics.', cn: '她学经济学。' },
    { w: 'ecosystems', zh: '生态系统', scene: '一个地方里生物和环境连在一起的整套关系。', tone: '正式', col: 'forest ecosystems, marine ecosystems', en: 'The river supports several ecosystems.', cn: '这条河支撑着几个生态系统。' },
    { w: 'edge', zh: '边缘', scene: '一张纸、一张桌子或一片地方的最外边。', tone: '中性', col: 'the edge of, on the edge', en: 'Do not stand on the edge.', cn: '不要站在边缘上。' },
    { w: 'edit', zh: '编辑', scene: '把文字或影片改到可以发表的样子。', tone: '中性', col: 'edit a text, edit out', en: 'Edit the essay before you send it.', cn: '寄出前先把文章改一遍。' },
    { w: 'editors', zh: '编者', scene: '负责修改和决定发表内容的人。', tone: '中性', col: 'newspaper editors, the editors of', en: 'The editors checked the facts.', cn: '编者核对了事实。' },
    { w: 'effort', zh: '努力', scene: '为了做成一件事花出的力气。', tone: '中性', col: 'an effort to, make an effort', en: 'It took a real effort.', cn: '这确实花了力气。' },
    { w: 'either', zh: '或者；也', scene: '两者里的任何一个，或否定句里的“也”。', tone: '中性', col: 'either or, either of', en: 'You can take either bus.', cn: '两路公共汽车你坐哪路都行。' },
    { w: 'electricity', zh: '电力', scene: '让灯亮、让机器转的那种能量。', tone: '中性', col: 'electricity bill, generate electricity', en: 'The storm cut the electricity.', cn: '暴风雨把电切断了。' },
    { w: 'electromagnetic', zh: '电磁的', scene: '和电与磁一起作用有关的。', tone: '偏技术', col: 'electromagnetic waves, electromagnetic field', en: 'The device uses electromagnetic waves.', cn: '这个装置使用电磁波。' },
    { w: 'electronic', zh: '电子的', scene: '用电子电路工作的，如电子邮箱或电子琴。', tone: '中性', col: 'electronic mail, an electronic device', en: 'Send an electronic copy.', cn: '发一份电子版。' },
    { w: 'elephants', zh: '大象', scene: '体型很大、有长鼻的陆地动物。', tone: '中性', col: 'African elephants, a herd of elephants', en: 'Elephants need a lot of water.', cn: '大象需要很多水。' },
    { w: 'eligible', zh: '合格的', scene: '符合条件，可以被选上或可以申请。', tone: '偏正式', col: 'eligible for, eligible to', en: 'Students are eligible for the grant.', cn: '学生有资格申请这项补助。' },
    { w: 'else', zh: '别的；其他', scene: '不是这个，是另外的人或东西。', tone: '中性', col: 'someone else, anything else', en: 'Would you like anything else?', cn: '你还要别的吗？' },
    { w: 'emails', zh: '电子邮件', scene: '通过网络发出的那些信件。', tone: '中性', col: 'send emails, check emails', en: 'I check emails in the morning.', cn: '我早上查看电子邮件。' },
    { w: 'embassy', zh: '大使馆', scene: '一国设在另一国、处理官方事务的机构。', tone: '正式', col: 'the embassy in, contact the embassy', en: 'The embassy is near the river.', cn: '大使馆在河附近。' },
    { w: 'embarks', zh: '从事；上船', scene: '开始做一件事，或走上船。常说 embark on。', tone: '偏正式', col: 'embark on, embarks on a', en: 'She embarks on a new course in May.', cn: '她五月开始一门新课。' },
    { w: 'emergency', zh: '紧急情况', scene: '必须马上处理的危险或伤病。', tone: '中性', col: 'in an emergency, emergency exit', en: 'Call this number in an emergency.', cn: '紧急情况打这个号码。' },
    { w: 'emissions', zh: '排放', scene: '排到空气里的气体，尤其是废气。', tone: '偏正式', col: 'carbon emissions, cut emissions', en: 'The factory cut its emissions.', cn: '这家工厂减少了排放。' },
    { w: 'emperor', zh: '皇帝', scene: '统治一个帝国的最高统治者。', tone: '中性', col: 'the emperor of, an emperor', en: 'The emperor lived in the palace.', cn: '皇帝住在宫里。' },
    { w: 'empire', zh: '帝国', scene: '由一个统治者管辖的一大片土地和人民。', tone: '中性', col: 'the empire of, a vast empire', en: 'The empire covered several regions.', cn: '这个帝国覆盖了好几个地区。' },
    { w: 'employers', zh: '雇主', scene: '雇人干活、付工资的人或公司。', tone: '中性', col: 'local employers, ask employers', en: 'Employers want clear writing.', cn: '雇主希望文字清楚。' },
    { w: 'employment', zh: '雇用；就业', scene: '有一份工作、被人雇用的状态。', tone: '中性偏正式', col: 'full-time employment, in employment', en: 'Employment rose last year.', cn: '去年就业上升了。' },
    { w: 'enables', zh: '使能够', scene: '有了这个条件，人才能做成下一件事。', tone: '偏正式', col: 'enables somebody to, enables the', en: 'The lift enables people to reach the top floor.', cn: '电梯让人能到顶层。' },
    { w: 'encourage', zh: '鼓励', scene: '让人更有信心去做一件事。', tone: '褒义', col: 'encourage somebody to, encourage discussion', en: 'Teachers encourage students to ask.', cn: '老师鼓励学生提问。' },
    { w: 'energetics', zh: '精力充沛的', scene: '这张卡的意思是精力充沛的。常见拼写是 energetic。', tone: '褒义', col: 'an energetic child, energetic dance', en: 'The dance is energetic.', cn: '这支舞很有活力。' },
    { w: 'engages', zh: '参与', scene: '人走进一件事里，不再只在旁边看。常说 engage in 或 engage with。', tone: '偏正式', col: 'engage in, engage with', en: 'The class engages with local history.', cn: '这门课让学生接触当地历史。' },
    { w: 'engines', zh: '发动机', scene: '让车、船或机器动起来的发动机。', tone: '中性', col: 'diesel engines, aircraft engines', en: 'The engines are loud.', cn: '发动机声音很大。' },
    { w: 'England', zh: '英格兰', scene: '英国里的英格兰这一部分。', tone: '专名', col: 'in England, across England', en: 'She grew up in England.', cn: '她在英格兰长大。' },
    { w: 'English', zh: '英语；英国的', scene: '英语这门语言，或与英格兰、英国有关的。', tone: '专名', col: 'speak English, English class', en: 'The class is taught in English.', cn: '这门课用英语教。' },
    { w: 'enjoy', zh: '享受', scene: '做一件事时心里觉得愉快。', tone: '褒义', col: 'enjoy doing, enjoy the', en: 'I enjoy walking by the river.', cn: '我喜欢在河边走路。' },
    { w: 'enlarge', zh: '扩大', scene: '把一张图、一个房间或一个范围变大。', tone: '中性', col: 'enlarge a photo, enlarge the', en: 'They enlarged the kitchen.', cn: '他们把厨房扩大了。' },
    { w: 'enquiry', zh: '询问', scene: '为了弄清一件事而提出的问题。这张卡的原文写成了“询间”。英式拼写。', tone: '中性', col: 'an enquiry about, make an enquiry', en: 'I made an enquiry about the course.', cn: '我询问了这门课的情况。' },
    { w: 'entertainment', zh: '娱乐', scene: '让人开心、打发时间的表演或活动。', tone: '中性', col: 'live entertainment, entertainment for', en: 'The park offers free entertainment.', cn: '公园提供免费娱乐。' },
    { w: 'entrepreneurs', zh: '企业家', scene: '自己开办并经营事业的人。', tone: '中性', col: 'young entrepreneurs, local entrepreneurs', en: 'The talk is for new entrepreneurs.', cn: '这次讲座是给新创业者的。' },
    { w: 'envious', zh: '嫉妒的', scene: '看见别人有的东西，自己也想要，心里不平静。', tone: '中性，常偏负面', col: 'envious of, an envious look', en: 'She was envious of his free time.', cn: '她羡慕他有空闲时间。' },
    { w: 'episodic', zh: '分集的；断断续续的', scene: '一件事分成一段一段，或时有时无。', tone: '偏正式', col: 'an episodic series, episodic memory', en: 'The show is episodic.', cn: '这个节目是分集的。' },
    { w: 'equal', zh: '平等的；对手', scene: '两边一样大或一样多。作名词时是旗鼓相当的人。', tone: '中性', col: 'equal to, equal rights', en: 'The two shares are equal.', cn: '这两份是相等的。' },
    { w: 'equestrian', zh: '骑术的', scene: '和骑马、马术有关的。', tone: '偏正式', col: 'an equestrian event, equestrian sport', en: 'The equestrian event is on Saturday.', cn: '马术比赛在星期六。' },
    { w: 'equipment', zh: '设备', scene: '做一件事需要的工具和装置，通常不可数。', tone: '中性', col: 'sports equipment, safety equipment', en: 'The lab has new equipment.', cn: '实验室有了新设备。' },
    { w: 'erosion', zh: '侵蚀', scene: '风或水把土、岸一点点冲走。', tone: '偏正式', col: 'soil erosion, coastal erosion', en: 'The cliff shows erosion.', cn: '悬崖看得出被侵蚀了。' },
    { w: 'erratic', zh: '不稳定的', scene: '没有规律，忽高忽低或忽左忽右。', tone: '偏正式', col: 'erratic behaviour, an erratic pattern', en: 'The bus times were erratic.', cn: '公共汽车的时间不稳定。' },
    { w: 'escape', zh: '逃脱', scene: '从被困的地方或危险里跑出来。', tone: '中性', col: 'escape from, escape through', en: 'The bird escaped from the cage.', cn: '鸟从笼子里逃脱了。' },
    { w: 'especially', zh: '尤其', scene: '在所有情况里，这一项更突出。', tone: '中性', col: 'especially the, especially when', en: 'It is cold, especially at night.', cn: '天很冷，尤其是夜里。' },
    { w: 'essays', zh: '文章', scene: '学生为课程写下的那些文章。', tone: '中性', col: 'write essays, history essays', en: 'The essays are due on Friday.', cn: '这些文章星期五交。' },
    { w: 'estate', zh: '房地产', scene: '一大片地和上面的房子，或一个人名下的财产。', tone: '中性', col: 'a housing estate, real estate', en: 'The housing estate is near the station.', cn: '这个住宅区在车站附近。' },
    { w: 'estuaries', zh: '河口', scene: '河水流进海的那些宽阔入口，是 estuary 的复数。', tone: '偏正式', col: 'river estuaries, tidal estuaries', en: 'Birds feed in the estuaries.', cn: '鸟在河口觅食。' },
    { w: 'etc', zh: '等等', scene: '列表还没说完，后面还有同类的东西。全称是 et cetera。', tone: '中性', col: 'and etc, books etc', en: 'Bring a pen, paper, etc.', cn: '带上笔、纸等等。' },
    { w: 'ethical', zh: '伦理的', scene: '和是非、该不该做有关的。', tone: '正式', col: 'ethical issues, an ethical choice', en: 'The study raises ethical issues.', cn: '这项研究提出了伦理问题。' },
    { w: 'ethnography', zh: '民族志', scene: '通过长期观察写下一个人群如何生活的研究。', tone: '正式', col: 'an ethnography of, do ethnography', en: 'Her ethnography describes a fishing town.', cn: '她的民族志描述了一个渔镇。' },
    { w: 'Europe', zh: '欧洲', scene: '地图上的欧洲这片大陆。', tone: '专名', col: 'in Europe, across Europe', en: 'The tour goes through Europe.', cn: '这次旅行经过欧洲。' },
    { w: 'European', zh: '欧洲人；欧洲的', scene: '欧洲的人，或与欧洲有关的。', tone: '专名', col: 'a European city, European languages', en: 'The film is European.', cn: '这部电影是欧洲的。' },
    { w: 'euros', zh: '欧元', scene: '多个欧洲国家使用的货币单位。', tone: '中性', col: 'ten euros, in euros', en: 'The ticket costs eight euros.', cn: '这张票八欧元。' },
    { w: 'evaluations', zh: '评价', scene: '对一项工作或一门课作出的那些评定。', tone: '偏正式', col: 'course evaluations, staff evaluations', en: 'Students complete evaluations.', cn: '学生填写评价。' },
    { w: 'evaporation', zh: '蒸发', scene: '水变成水汽、从表面消失。', tone: '偏技术', col: 'evaporation of, rate of evaporation', en: 'Heat increases evaporation.', cn: '热量会加快蒸发。' },
    { w: 'evenings', zh: '晚上', scene: '下午之后、夜里之前的那些时段。', tone: '中性', col: 'on evenings, summer evenings', en: 'The shop opens on weekday evenings.', cn: '这家店工作日晚上开门。' },
    { w: 'evolution', zh: '进化；演变', scene: '生物或一件事经过很长时间慢慢变成现在的样子。', tone: '中性偏正式', col: 'the evolution of, human evolution', en: 'The book explains the evolution of cities.', cn: '这本书解释城市如何演变。' },
    { w: 'excavation', zh: '挖掘', scene: '把土挖开，常常是为了考古或施工。', tone: '偏正式', col: 'an excavation of, archaeological excavation', en: 'The excavation uncovered old walls.', cn: '这次挖掘露出了旧墙。' },
    { w: 'except', zh: '除……之外', scene: '把这一项排除在外，其他都算。', tone: '中性', col: 'except for, except that', en: 'The shop is open every day except Monday.', cn: '这家店除星期一外每天都开。' },
    { w: 'exchange', zh: '交换', scene: '双方把自己的东西或意见交给对方。', tone: '中性', col: 'in exchange for, an exchange of', en: 'They exchanged phone numbers.', cn: '他们交换了电话号码。' },
    { w: 'excited', zh: '兴奋的', scene: '一件好事快来了，人坐不住。', tone: '褒义', col: 'excited about, feel excited', en: 'The children were excited about the trip.', cn: '孩子们对这次出行很兴奋。' },
    { w: 'exercises', zh: '运动；练习', scene: '为了身体或为了学会一项技能而做的练习。', tone: '中性', col: 'do exercises, grammar exercises', en: 'Do the exercises on page ten.', cn: '做第十页的练习。' },
    { w: 'exhibition', zh: '展览', scene: '把作品或物件摆出来给大家看。', tone: '中性', col: 'an exhibition of, art exhibition', en: 'The exhibition opens on Friday.', cn: '展览星期五开幕。' },
    { w: 'exist', zh: '存在', scene: '某物确实有，不是想象出来的。', tone: '中性', col: 'exist in, still exist', en: 'The old bridge still exists.', cn: '那座旧桥还在。' },
    { w: 'expansion', zh: '扩展', scene: '范围或规模变大之后的那个结果。', tone: '偏正式', col: 'the expansion of, urban expansion', en: 'The expansion of the airport took two years.', cn: '机场扩建花了两年。' },
    { w: 'expedition', zh: '远征', scene: '为了考察或到达远处而组织的一次行程。这张卡原文在“远征”前多了一个数字。', tone: '中性', col: 'a scientific expedition, an expedition to', en: 'The expedition crossed the desert.', cn: '这次远征穿过了沙漠。' },
    { w: 'expensive', zh: '昂贵的', scene: '要花很多钱才能得到。', tone: '中性', col: 'too expensive, an expensive meal', en: 'The tickets are expensive.', cn: '票很贵。' },
    { w: 'experience', zh: '经历', scene: '你亲自碰上或做过的事。它也可以表示经验。', tone: '中性', col: 'work experience, experience of', en: 'The trip was a new experience.', cn: '这次出行是一次新的经历。' },
    { w: 'experts', zh: '专家', scene: '对一件事懂得很多、可以被请来判断的人。', tone: '中性', col: 'medical experts, ask experts', en: 'Experts checked the bridge.', cn: '专家检查了这座桥。' },
    { w: 'explicitly', zh: '明确地', scene: '话说明白了，没有让人去猜。', tone: '偏正式', col: 'explicitly state, explicitly say', en: 'The rule explicitly bans phones.', cn: '规定明确禁止使用手机。' },
    { w: 'explore', zh: '探索', scene: '走进不熟悉的地方或题目，想弄清里面有什么。', tone: '中性', col: 'explore the, explore whether', en: 'We explored the old town.', cn: '我们逛了老城。' },
    { w: 'export', zh: '出口', scene: '把货物卖到另一个国家。', tone: '中性', col: 'export to, export goods', en: 'The region exports wool.', cn: '这个地区出口羊毛。' },
    { w: 'express', zh: '表达；快车', scene: '把意思说出来。作名词时是中途少停的快车。', tone: '中性', col: 'express an idea, an express train', en: 'She expressed her thanks.', cn: '她表达了谢意。' },
    { w: 'extensive', zh: '大量的；广泛的', scene: '覆盖的范围大，或数量很多。', tone: '偏正式', col: 'extensive research, an extensive list', en: 'The library has an extensive list of maps.', cn: '图书馆有一份很长的地图目录。' },
    { w: 'extent', zh: '程度', scene: '一件事达到了多大的地步。常说 to some extent。', tone: '偏正式', col: 'to some extent, the extent of', en: 'I agree to some extent.', cn: '我在一定程度上同意。' },
    { w: 'extinct', zh: '灭绝的', scene: '这一类生物已经没有活着的了。', tone: '中性', col: 'extinct species, become extinct', en: 'The bird is extinct.', cn: '这种鸟已经灭绝。' },
    { w: 'extract', zh: '提炼；提取', scene: '从一大块材料里取出需要的那一部分。', tone: '偏正式', col: 'extract from, extract information', en: 'The machine extracts oil from the seeds.', cn: '这台机器从种子里提炼油。' },
    { w: 'extremely', zh: '非常', scene: '程度高到接近顶端。', tone: '语气强', col: 'extremely cold, extremely useful', en: 'The water is extremely cold.', cn: '水非常冷。' },
    { w: 'eyes', zh: '眼睛', scene: '用来看的那一双眼睛。', tone: '中性', col: 'in the eyes, close your eyes', en: 'Close your eyes and listen.', cn: '闭上眼睛听。' },
    { w: 'eyesight', zh: '视力', scene: '眼睛看东西清楚不清楚的能力。', tone: '中性', col: 'poor eyesight, good eyesight', en: 'Her eyesight is good.', cn: '她的视力很好。' },
{ w: 'fabrics', zh: '织物', scene: '织成的布，用来做衣服或窗帘。', tone: '中性', col: 'cotton fabrics, soft fabrics', en: 'The shop sells cotton fabrics.', cn: '这家店卖棉布。' },
    { w: 'face', zh: '脸；面对', scene: '头的正面。作动词时是朝向或不得不面对一件事。', tone: '中性', col: 'face the, a face', en: 'The window faces the garden.', cn: '窗户朝着花园。' },
    { w: 'facials', zh: '面部的；美容', scene: '和脸有关的，或给脸做的护理。', tone: '中性', col: 'facial hair, a facial treatment', en: 'The clinic offers facials.', cn: '这家诊所提供面部护理。' },
    { w: 'facilitate', zh: '促进', scene: '把障碍拿开，让事情更容易进行。', tone: '正式', col: 'facilitate the, facilitate learning', en: 'The new bus facilitates travel.', cn: '新公交让出行更方便。' },
    { w: 'factories', zh: '工厂', scene: '成批生产货物的那些厂房，是 factory 的复数。', tone: '中性', col: 'car factories, in factories', en: 'The factories closed for the holiday.', cn: '这些工厂假期停工。' },
    { w: 'factors', zh: '因素', scene: '一起造成结果的那些因素，是 factor 的复数。', tone: '中性', col: 'key factors, factors in', en: 'Cost and time are two factors.', cn: '费用和时间是两个因素。' },
    { w: 'fade', zh: '褪色', scene: '颜色或声音慢慢变淡。', tone: '中性', col: 'fade away, colours fade', en: 'The paint will fade in the sun.', cn: '油漆在阳光下会褪色。' },
    { w: 'fair', zh: '公平的', scene: '规则对每个人一样，不偏谁。它也可以表示集市或浅色头发。', tone: '中性', col: 'a fair price, fair to', en: 'The price is fair.', cn: '这个价钱是公平的。' },
    { w: 'fairy', zh: '虚构的', scene: '这张卡的释义是虚构的。fairy 更常见的意思是童话里的仙子。', tone: '中性', col: 'a fairy tale, fairy stories', en: 'The book is a fairy tale.', cn: '这本书是童话。' },
    { w: 'falcons', zh: '猎鹰', scene: '飞得很快、能捕猎的鹰类。', tone: '中性', col: 'peregrine falcons, falcons in', en: 'Falcons hunt over the fields.', cn: '猎鹰在田野上空捕猎。' },
    { w: 'fall', zh: '跌倒', scene: '人失去平衡倒下去，或进入某种状态。这里按卡片是跌倒。', tone: '中性', col: 'fall down, fall over', en: 'Be careful not to fall on the ice.', cn: '冰上小心别跌倒。' },
    { w: 'families', zh: '家庭；家族', scene: '一家人，是 family 的复数。', tone: '中性', col: 'local families, two families', en: 'Two families share the house.', cn: '两家人合住这栋房子。' },
    { w: 'fan', zh: '电扇；扇', scene: '吹风的电扇，或用手扇风。它也可以表示粉丝。', tone: '中性', col: 'an electric fan, fan yourself', en: 'The fan is on the desk.', cn: '电扇在桌子上。' },
    { w: 'fanatics', zh: '狂热分子', scene: '对一件事热到不顾其他的人。', tone: '常偏负面', col: 'football fanatics, fanatics about', en: 'The queue was full of fanatics.', cn: '队伍里全是狂热的支持者。' },
    { w: 'fancy', zh: '想做；喜爱', scene: '心里忽然想要，或比较喜欢。', tone: '偏口语', col: 'fancy doing, fancy a', en: 'Do you fancy a walk?', cn: '你想去走走吗？' },
    { w: 'fare', zh: '车费', scene: '乘客为坐车或坐船付的钱。', tone: '中性', col: 'bus fare, a return fare', en: 'The fare is two pounds.', cn: '车费是两英镑。' },
    { w: 'farmers', zh: '农民', scene: '种地或养牲畜的人。', tone: '中性', col: 'local farmers, dairy farmers', en: 'Farmers sell vegetables at the market.', cn: '农民在市场卖蔬菜。' },
    { w: 'fascinating', zh: '迷人的', scene: '有趣到让人想一直看下去。', tone: '褒义', col: 'a fascinating story, fascinating to', en: 'The talk was fascinating.', cn: '这次谈话很吸引人。' },
    { w: 'fashions', zh: '时尚', scene: '一段时期里大家喜欢的穿法和样式。', tone: '中性', col: 'new fashions, in fashions', en: 'The magazine shows new fashions.', cn: '这本杂志展示新的时尚。' },
    { w: 'fathers', zh: '父亲', scene: '孩子的父亲。', tone: '中性', col: 'their fathers, fathers and', en: 'The fathers waited at the gate.', cn: '父亲们在门口等。' },
    { w: 'faulty', zh: '有毛病的', scene: '东西有缺陷，不能正常用。', tone: '负面', col: 'a faulty lock, faulty equipment', en: 'The lock is faulty.', cn: '这把锁有毛病。' },
    { w: 'favourite', zh: '最喜爱的', scene: '在许多里面你最喜欢的那一个。英式拼写。', tone: '中性', col: 'a favourite book, favourite food', en: 'Tea is her favourite drink.', cn: '茶是她最爱的饮料。' },
    { w: 'fears', zh: '害怕', scene: '心里怕的那些事。', tone: '中性', col: 'fears about, overcome fears', en: 'He talked about his fears.', cn: '他说了自己的害怕。' },
    { w: 'feast', zh: '宴会', scene: '食物很多、大家坐在一起吃的一顿盛宴。', tone: '中性', col: 'a feast of, a wedding feast', en: 'The feast lasted all evening.', cn: '宴会持续了整个晚上。' },
    { w: 'feathers', zh: '羽毛', scene: '鸟身上的那些羽毛。', tone: '中性', col: 'bird feathers, soft feathers', en: 'The nest is lined with feathers.', cn: '巢里垫着羽毛。' },
    { w: 'February', zh: '二月', scene: '一年的第二个月。', tone: '专名', col: 'in February, last February', en: 'The course starts in February.', cn: '课程二月开始。' },
    { w: 'feed', zh: '喂养', scene: '把食物给人或动物吃。', tone: '中性', col: 'feed the, feed on', en: 'Feed the cat twice a day.', cn: '一天喂两次猫。' },
    { w: 'feedback', zh: '反馈', scene: '别人对你做的事说出的看法，用来改进。', tone: '中性', col: 'feedback on, give feedback', en: 'The teacher gave feedback on the essay.', cn: '老师对文章给了反馈。' },
    { w: 'fees', zh: '费用', scene: '为服务或课程付的那些钱。', tone: '中性', col: 'tuition fees, pay the fees', en: 'The fees are listed online.', cn: '费用列在网上。' },
    { w: 'female', zh: '女性的', scene: '雌性或女性的。', tone: '中性', col: 'a female student, female workers', en: 'Half the team is female.', cn: '团队里一半是女性。' },
    { w: 'fences', zh: '栅栏', scene: '围住院子或田地的篱笆。作动词是用篱笆围住。', tone: '中性', col: 'garden fences, wooden fences', en: 'The fences keep the sheep in.', cn: '栅栏把羊圈在里面。' },
    { w: 'festivals', zh: '节日', scene: '大家一起庆祝的那些节日或艺术节。', tone: '中性', col: 'music festivals, local festivals', en: 'The town holds two festivals.', cn: '这个镇子举办两个节日。' },
    { w: 'few', zh: '很少的', scene: '数量小，没有几个。', tone: '中性', col: 'a few, few people', en: 'Few people came.', cn: '来的人很少。' },
    { w: 'fibres', zh: '纤维', scene: '细长的丝，用来做布或存在食物里。英式拼写。', tone: '中性', col: 'cotton fibres, dietary fibres', en: 'The cloth is made of natural fibres.', cn: '这块布用天然纤维做成。' },
    { w: 'fields', zh: '旷野；领域', scene: '一片田野或牧场，或一个专业领域。', tone: '中性', col: 'green fields, fields of', en: 'Cows stand in the fields.', cn: '牛站在田里。' },
    { w: 'fights', zh: '打架；争取', scene: '互相动手，或为了一件事去争取。', tone: '中性', col: 'fights over, fights for', en: 'The group fights for cleaner air.', cn: '这个团体争取更干净的空气。' },
    { w: 'figures', zh: '数字；人物', scene: '统计里的数字，或画里、故事里的人物。', tone: '中性', col: 'sales figures, public figures', en: 'The figures are in the table.', cn: '数字在表格里。' },
    { w: 'filter', zh: '过滤', scene: '让液体或信息通过一层，把不要的留下。', tone: '中性', col: 'filter the, a water filter', en: 'Filter the water before you drink it.', cn: '喝之前把水过滤一下。' },
    { w: 'filth', zh: '污秽', scene: '又脏又令人不快的东西。这张卡原文写成了“污移”。', tone: '负面', col: 'covered in filth, filth and', en: 'The alley was full of filth.', cn: '巷子里又脏又乱。' },
    { w: 'fingers', zh: '手指', scene: '手上的五根手指。', tone: '中性', col: 'on your fingers, five fingers', en: 'Count on your fingers.', cn: '掰着手指数。' },
    { w: 'fireplaces', zh: '壁炉', scene: '房间墙上用来生火的那些炉膛。', tone: '中性', col: 'open fireplaces, stone fireplaces', en: 'The cottages have fireplaces.', cn: '这些村舍有壁炉。' },
    { w: 'fres', zh: '火', scene: '这张卡的意思是火。常见拼写是 fire。', tone: '中性', col: 'on fire, a fire in', en: 'The fire is in the fireplace.', cn: '火在壁炉里。' },
    { w: 'firewood', zh: '柴火', scene: '劈好用来烧的木头。', tone: '中性', col: 'a pile of firewood, dry firewood', en: 'They stacked the firewood.', cn: '他们把柴火堆好了。' },
    { w: 'fireworks', zh: '烟火', scene: '夜里升空再炸开的那些彩火。', tone: '中性', col: 'a fireworks display, watch fireworks', en: 'The fireworks start at nine.', cn: '烟火九点开始。' },
    { w: 'fish', zh: '鱼；钓鱼', scene: '水里的鱼，或去钓鱼。', tone: '中性', col: 'fresh fish, fish in', en: 'The market sells fresh fish.', cn: '市场卖新鲜的鱼。' },
    { w: 'fishing', zh: '渔业；钓鱼', scene: '捕鱼或钓鱼这件事，作为产业或活动。', tone: '中性', col: 'fishing boat, go fishing', en: 'Fishing is important to the town.', cn: '渔业对这个镇子很重要。' },
    { w: 'fitness', zh: '健康', scene: '身体结实、能活动的状态。这里是体能上的健康。', tone: '中性', col: 'physical fitness, a fitness class', en: 'She goes to a fitness class.', cn: '她去上健身课。' },
    { w: 'flag', zh: '旗帜', scene: '升在杆上、代表一个国家或团体的旗。作动词是标出来。', tone: '中性', col: 'a national flag, flag a problem', en: 'The flag flies over the building.', cn: '旗帜在楼上升着。' },
    { w: 'flamingo', zh: '火烈鸟', scene: '腿很长、羽毛粉红的鸟。', tone: '中性', col: 'a pink flamingo, flamingo colony', en: 'A flamingo stood in the shallow water.', cn: '一只火烈鸟站在浅水里。' },
    { w: 'flange', zh: '轮缘', scene: '管子或轮子边上凸出的一圈，用来连接或卡住。', tone: '偏技术', col: 'a metal flange, wheel flange', en: 'The flange holds the pipe.', cn: '这个凸缘把管子固定住。' },
    { w: 'flautist', zh: '笛手', scene: '吹长笛的人。另一种拼写是 flutist。', tone: '中性', col: 'a flautist in, the flautist', en: 'The flautist played first.', cn: '笛手第一个演奏。' },
    { w: 'favour', zh: '香味', scene: '这张卡的释义是香味。那个意思更常见的词是 flavour。favour 通常是恩惠或偏爱。', tone: '词条本身', col: 'a flavour of, do a favour', en: 'The soup has a mild flavour.', cn: '这汤味道很淡。' },
    { w: 'flight', zh: '班机', scene: '一趟飞机的航行。它也可以表示飞行或一段楼梯。', tone: '中性', col: 'a flight to, flight number', en: 'The flight leaves at noon.', cn: '这趟班机中午起飞。' },
    { w: 'floats', zh: '漂浮', scene: '停在水或空气上，不沉下去。', tone: '中性', col: 'floats on, floats in', en: 'Wood floats on water.', cn: '木头浮在水上。' },
    { w: 'flock', zh: '聚集', scene: '鸟或人成群地聚到一处。', tone: '中性', col: 'flock to, a flock of', en: 'Birds flock to the lake.', cn: '鸟成群飞到湖边。' },
    { w: 'floods', zh: '洪水', scene: '水漫出河岸、盖住地面。', tone: '中性', col: 'flash floods, after the floods', en: 'The floods closed the road.', cn: '洪水封闭了这条路。' },
    { w: 'floor', zh: '地板', scene: '房间里脚踩的那一层。它也可以表示楼层。', tone: '中性', col: 'on the floor, the ground floor', en: 'The bag is on the floor.', cn: '包在地板上。' },
    { w: 'four', zh: '面粉', scene: '这张卡的意思是面粉。常见拼写是 flour。four 是数字四。', tone: '词条本身', col: 'wheat flour, a bag of flour', en: 'Add flour to the bowl.', cn: '往碗里加面粉。' },
    { w: 'fow', zh: '流动', scene: '这张卡的意思是流动。常见拼写是 flow。', tone: '中性', col: 'the flow of, traffic flow', en: 'The flow of water is slow.', cn: '水流很慢。' },
    { w: 'flowers', zh: '花', scene: '植物开出的花。', tone: '中性', col: 'fresh flowers, wild flowers', en: 'She bought flowers.', cn: '她买了花。' },
    { w: 'fu', zh: '流感', scene: '这张卡的意思是流感。常见写法是 flu。', tone: '中性', col: 'catch the flu, flu season', en: 'He stayed home with the flu.', cn: '他因为流感待在家里。' },
    { w: 'fut', zh: '长笛', scene: '这张卡的意思是长笛。常见拼写是 flute。', tone: '中性', col: 'play the flute, a flute solo', en: 'She plays the flute.', cn: '她吹长笛。' },
    { w: 'folder', zh: '文件夹', scene: '用来夹纸的封套，或电脑里的文件夹。', tone: '中性', col: 'a plastic folder, a folder of', en: 'Put the forms in the folder.', cn: '把表格放进文件夹。' },
    { w: 'follow', zh: '跟随', scene: '走在别人后面，或按说明的下一步做。', tone: '中性', col: 'follow the, follow somebody', en: 'Follow the path to the lake.', cn: '沿着这条小路走到湖边。' },
    { w: 'foot', zh: '脚', scene: '腿的最下端。复数是 feet。', tone: '中性', col: 'on foot, a sore foot', en: 'We went on foot.', cn: '我们步行去的。' },
    { w: 'footbridges', zh: '人行桥', scene: '只供人走、跨过路或河的小桥。', tone: '中性', col: 'use the footbridges, two footbridges', en: 'Use the footbridge over the road.', cn: '走人行天桥过马路。' },
    { w: 'footprint', zh: '足迹', scene: '脚留下的印，或一个人、一件事占用的资源痕迹。', tone: '中性', col: 'a footprint in, carbon footprint', en: 'There was a footprint in the mud.', cn: '泥里有一个脚印。' },
    { w: 'footwear', zh: '鞋袜', scene: '穿在脚上的鞋和袜子这一类。', tone: '中性', col: 'outdoor footwear, suitable footwear', en: 'Wear suitable footwear.', cn: '穿合适的鞋。' },
    { w: 'forbids', zh: '禁止', scene: '规则不许做这件事。', tone: '中性', col: 'forbids somebody to, the rule forbids', en: 'The rule forbids phones in the exam.', cn: '规定禁止考试时使用手机。' },
    { w: 'forget', zh: '忘记', scene: '本来知道的事从脑子里掉了。', tone: '中性', col: 'forget to, forget about', en: 'Do not forget the key.', cn: '别忘了钥匙。' },
    { w: 'forks', zh: '叉子', scene: '吃饭用的叉，或路分成的岔。', tone: '中性', col: 'knives and forks, a fork in', en: 'The forks are in the drawer.', cn: '叉子在抽屉里。' },
    { w: 'format', zh: '格式', scene: '信息被安排成的样子，如文件格式。', tone: '中性', col: 'file format, the format of', en: 'Save the file in this format.', cn: '用这个格式保存文件。' },
    { w: 'fort', zh: '堡垒', scene: '用来防守的坚固建筑。', tone: '中性', col: 'an old fort, inside the fort', en: 'The fort stands on the hill.', cn: '堡垒立在山上。' },
    { w: 'fortunately', zh: '幸运地', scene: '结果比可能发生的坏情况更好。', tone: '褒义', col: 'fortunately the, fortunately for', en: 'Fortunately, the train was on time.', cn: '幸好火车准点。' },
    { w: 'forward', zh: '向前', scene: '朝前面的方向，不是往后。', tone: '中性', col: 'look forward, step forward', en: 'Step forward when your name is called.', cn: '叫到你的名字时往前走。' },
    { w: 'fossil', zh: '化石', scene: '古代生物留在石头里的痕迹。', tone: '中性', col: 'a fossil of, fossil fuel', en: 'The rock holds a fossil.', cn: '这块石头里有化石。' },
    { w: 'foundation', zh: '地基；基金会', scene: '房子底下承重的那一层，或资助事业的基金会。', tone: '中性', col: 'the foundation of, a charitable foundation', en: 'The foundation of the house is stone.', cn: '房子的地基是石头的。' },
    { w: 'founder', zh: '创立者', scene: '把一个组织从无到有办起来的人。', tone: '中性', col: 'the founder of, a founder', en: 'She is the founder of the club.', cn: '她是这个社团的创立者。' },
    { w: 'fountain', zh: '喷泉', scene: '水向上喷出的装置或景观点。', tone: '中性', col: 'a stone fountain, drinking fountain', en: 'The fountain is in the square.', cn: '喷泉在广场上。' },
    { w: 'fracture', zh: '破裂；折断', scene: '骨头或硬物裂开、断开。', tone: '偏正式', col: 'fracture a bone, a fracture in', en: 'He fractured his wrist.', cn: '他手腕折了。' },
    { w: 'frame', zh: '框架', scene: '围住一幅画或一扇窗的边框，或一个结构的架子。', tone: '中性', col: 'a picture frame, window frame', en: 'The photo is in a wooden frame.', cn: '照片装在木框里。' },
    { w: 'free', zh: '免费的；自由的', scene: '不用付钱，或不受约束、可以自己做。', tone: '中性', col: 'free of charge, free to', en: 'The map is free.', cn: '这张地图是免费的。' },
    { w: 'freelance', zh: '自由职业者', scene: '不固定受雇于一家单位、按件工作的人。这张卡写成了自由作家。', tone: '中性', col: 'a freelance writer, work freelance', en: 'She works freelance.', cn: '她做自由职业。' },
    { w: 'freeze', zh: '冻结', scene: '水或食物冷到结冰，或把动作停住。', tone: '中性', col: 'freeze the, freeze over', en: 'Freeze the soup in portions.', cn: '把汤分成几份冻起来。' },
    { w: 'Frenchs', zh: '法语；法国的', scene: '这张卡的意思是法语或法国的。常见拼写是 French。', tone: '专名', col: 'speak French, French food', en: 'The menu is in French.', cn: '菜单是法文的。' },
    { w: 'frequency', zh: '频率', scene: '一件事多久发生一次，或波的频率。', tone: '中性', col: 'the frequency of, high frequency', en: 'The frequency of buses increased.', cn: '公共汽车的班次增加了。' },
    { w: 'fresh', zh: '新鲜的', scene: '刚做好或刚摘下，还没有旧。', tone: '褒义', col: 'fresh bread, fresh air', en: 'The bread is fresh.', cn: '面包是新鲜的。' },
    { w: 'Friday', zh: '星期五', scene: '一周里的星期五。', tone: '专名', col: 'on Friday, last Friday', en: 'The shop closes on Friday.', cn: '这家店星期五关门。' },
    { w: 'fridges', zh: '电冰箱', scene: '用来冷藏食物的冰箱。fridge 等于 refrigerator。', tone: '中性', col: 'in the fridge, two fridges', en: 'The milk is in the fridge.', cn: '牛奶在冰箱里。' },
    { w: 'friends', zh: '朋友', scene: '彼此喜欢、愿意相处的人。', tone: '中性', col: 'close friends, friends with', en: 'She met friends after class.', cn: '课后她见了朋友。' },
    { w: 'frighten', zh: '惊吓', scene: '让人突然害怕。', tone: '中性', col: 'frighten somebody, frighten away', en: 'The noise frightened the birds.', cn: '这声音把鸟吓走了。' },
    { w: 'frog', zh: '青蛙', scene: '会跳、常待在水边的两栖动物。', tone: '中性', col: 'a green frog, frog in', en: 'A frog sat by the pond.', cn: '一只青蛙坐在池塘边。' },
    { w: 'front', zh: '前面', scene: '朝向你或朝向街道的那一面。', tone: '中性', col: 'in front of, the front of', en: 'Wait in front of the station.', cn: '在车站前面等。' },
    { w: 'fruit', zh: '水果', scene: '树上或植株上结的、可以吃的果实。通常不可数。', tone: '中性', col: 'fresh fruit, a piece of fruit', en: 'The bowl holds fresh fruit.', cn: '碗里放着新鲜水果。' },
    { w: 'frustrating', zh: '令人沮丧的', scene: '事情本身让人想做成却做不成，心里发紧。说的是那件事，不是人的感受本身。', tone: '中性', col: 'a frustrating delay, frustrating to', en: 'The delay was frustrating.', cn: '这次耽搁让人沮丧。' },
    { w: 'fuels', zh: '燃料', scene: '用来烧、产生热或动力的那些物质。', tone: '中性', col: 'fossil fuels, alternative fuels', en: 'The stove uses two fuels.', cn: '这个炉子用两种燃料。' },
    { w: 'full', zh: '满的；完整的', scene: '里面已经装到不能再加，或一样都不缺。这张卡写的是完整的。', tone: '中性', col: 'full of, a full day', en: 'The bus is full.', cn: '公共汽车满了。' },
    { w: 'fumes', zh: '刺激性气味', scene: '浓而呛人的气体。', tone: '负面', col: 'exhaust fumes, petrol fumes', en: 'Exhaust fumes filled the street.', cn: '废气弥漫了这条街。' },
    { w: 'funs', zh: '乐趣', scene: '这张卡的意思是乐趣。常见的不可数名词是 fun。', tone: '中性', col: 'have fun, for fun', en: 'The game is fun.', cn: '这个游戏很好玩。' },
    { w: 'funny', zh: '有趣的', scene: '让人想笑，或有点奇怪。', tone: '中性', col: 'a funny story, funny to', en: 'The story is funny.', cn: '这个故事很好笑。' },
    { w: 'furniture', zh: '家具', scene: '桌椅床柜这些，通常不可数。', tone: '中性', col: 'a piece of furniture, office furniture', en: 'The room has little furniture.', cn: '房间里家具很少。' },
    { w: 'furs', zh: '毛皮', scene: '动物的毛皮，或用它做成的衣物。', tone: '中性', col: 'animal furs, a fur coat', en: 'The museum shows old furs.', cn: '博物馆展出旧的毛皮。' },
    { w: 'future', zh: '未来', scene: '还没到来的时间。', tone: '中性', col: 'in the future, future plans', en: 'The meeting is in the future.', cn: '会议还在将来。' },
{ w: 'gallery', zh: '画廊', scene: '挂着画、让人进去看的房间或建筑。', tone: '中性', col: 'an art gallery, in the gallery', en: 'The gallery opens at ten.', cn: '画廊十点开门。' },
    { w: 'games', zh: '游戏', scene: '按规则玩的游戏或比赛。', tone: '中性', col: 'computer games, play games', en: 'The children played games.', cn: '孩子们玩游戏。' },
    { w: 'garage', zh: '车库', scene: '停放汽车的房间或小屋。', tone: '中性', col: 'a garage for, in the garage', en: 'The car is in the garage.', cn: '车在车库里。' },
    { w: 'gardens', zh: '花园', scene: '房子旁边种花种草的那些地。', tone: '中性', col: 'public gardens, in the gardens', en: 'We walked in the gardens.', cn: '我们在花园里走了走。' },
    { w: 'gases', zh: '气体；汽油', scene: '空气那样的气体。在美式英语里 gas 也常指汽油。', tone: '中性', col: 'natural gases, greenhouse gases', en: 'The tank holds two gases.', cn: '这个罐子装着两种气体。' },
    { w: 'gates', zh: '大门', scene: '围墙或场地上开关的门。', tone: '中性', col: 'school gates, the main gates', en: 'Meet me at the gates.', cn: '在大门口等我。' },
    { w: 'gauge', zh: '计量器', scene: '用来量压力、油量或尺寸的仪表。', tone: '偏技术', col: 'a pressure gauge, fuel gauge', en: 'Check the gauge before you leave.', cn: '出发前看一下仪表。' },
    { w: 'gender', zh: '性别', scene: '男性或女性这一社会与身份上的区分。', tone: '中性', col: 'gender of, gender equality', en: 'The form asks for gender.', cn: '表格上问性别。' },
    { w: 'gene', zh: '基因', scene: '这张卡和基因有关。常见说法是 gene，副词是 genetically。', tone: '偏技术', col: 'a gene for, genetically related', en: 'The study looks at one gene.', cn: '这项研究看的是一个基因。' },
    { w: 'general', zh: '普通的；总的', scene: '不是个别的，而是大体上、大家都适用的。', tone: '中性', col: 'in general, a general rule', en: 'In general, the buses are on time.', cn: '总的来说，公共汽车是准点的。' },
    { w: 'generate', zh: '产生；形成', scene: '把电、热或一个结果做出来。', tone: '中性偏正式', col: 'generate electricity, generate interest', en: 'The panels generate electricity.', cn: '这些板产生电力。' },
    { w: 'generator', zh: '发电机', scene: '用来发电的机器。', tone: '中性', col: 'a diesel generator, backup generator', en: 'The generator started at dusk.', cn: '发电机在黄昏时启动了。' },
    { w: 'genre', zh: '流派', scene: '文学、音乐或电影的一个类型。', tone: '偏正式', col: 'a genre of, the genre of', en: 'Jazz is a musical genre.', cn: '爵士乐是一种音乐流派。' },
    { w: 'geography', zh: '地理', scene: '研究地方、地形和人如何使用土地的学科。', tone: '中性', col: 'physical geography, a geography class', en: 'She studies geography.', cn: '她学地理。' },
    { w: 'Germans', zh: '德语；德国人', scene: '这张卡的意思是德语或德国人。德语和德国人更常见的词是 German。', tone: '专名', col: 'speak German, German people', en: 'The class is taught in German.', cn: '这门课用德语教。' },
    { w: 'Germany', zh: '德国', scene: '欧洲中部的那个国家。', tone: '专名', col: 'in Germany, across Germany', en: 'She studied in Germany.', cn: '她在德国读过书。' },
    { w: 'germinate', zh: '发芽', scene: '种子裂开，冒出嫩芽。', tone: '偏技术', col: 'germinate in, seeds germinate', en: 'The seeds germinate in warm soil.', cn: '种子在温暖的土里发芽。' },
    { w: 'germs', zh: '细菌', scene: '能让人生病的微小生物，口语里常这么说。', tone: '偏口语', col: 'spread germs, kill germs', en: 'Wash your hands to remove germs.', cn: '洗手以去掉细菌。' },
    { w: 'gifts', zh: '礼品', scene: '送给别人的礼物。', tone: '中性', col: 'birthday gifts, a gift for', en: 'She brought small gifts.', cn: '她带了小礼物。' },
    { w: 'girls', zh: '女孩', scene: '女性的孩子或年轻女性。', tone: '中性', col: 'two girls, girls and boys', en: 'The girls waited by the door.', cn: '女孩们在门口等。' },
    { w: 'glaciers', zh: '冰川', scene: '山上慢慢移动的大冰块。', tone: '中性', col: 'melting glaciers, mountain glaciers', en: 'The glaciers are getting smaller.', cn: '这些冰川在变小。' },
    { w: 'glasses', zh: '玻璃', scene: '这张卡的意思是玻璃。glasses 也常指眼镜。', tone: '中性', col: 'a pair of glasses, broken glass', en: 'The window is made of glass.', cn: '窗户是玻璃的。' },
    { w: 'glide', zh: '滑行', scene: '平滑地移动，几乎没有颠簸。', tone: '中性', col: 'glide over, glide across', en: 'The boat glided across the lake.', cn: '船在湖上滑过。' },
    { w: 'global', zh: '全球的', scene: '涉及整个世界，不只是一个国家。', tone: '中性偏正式', col: 'global warming, a global market', en: 'The problem is global.', cn: '这个问题是全球性的。' },
    { w: 'gloves', zh: '手套', scene: '戴在手上保暖或保护的手套。', tone: '中性', col: 'a pair of gloves, wear gloves', en: 'Wear gloves in the lab.', cn: '在实验室里戴手套。' },
    { w: 'glue', zh: '胶', scene: '用来把两样东西粘在一起的胶。', tone: '中性', col: 'a tube of glue, glue to', en: 'Glue the label to the box.', cn: '把标签粘到盒子上。' },
    { w: 'glycerine', zh: '甘油', scene: '一种无色、有甜味的液体，用于化工和药品。', tone: '偏技术', col: 'liquid glycerine, glycerine soap', en: 'The soap contains glycerine.', cn: '这种肥皂含有甘油。' },
    { w: 'goals', zh: '目标', scene: '想要达到的那些结果。', tone: '中性', col: 'set goals, career goals', en: 'The team set three goals.', cn: '团队定了三个目标。' },
    { w: 'golde', zh: '黄金；金的', scene: '这张卡的意思是黄金或金色的。常见拼写是 gold。', tone: '中性', col: 'gold ring, solid gold', en: 'The ring is gold.', cn: '这枚戒指是金的。' },
    { w: 'golf', zh: '高尔夫球', scene: '用球杆把小球打进洞里的运动。', tone: '中性', col: 'play golf, a golf course', en: 'They play golf on Sundays.', cn: '他们星期天打高尔夫。' },
    { w: 'goods', zh: '商品', scene: '用来卖或运的货物。常用复数。', tone: '中性', col: 'consumer goods, goods and', en: 'The shop sells household goods.', cn: '这家店卖家用商品。' },
    { w: 'government', zh: '政府', scene: '管理一个国家或一个地方的那套机构。', tone: '中性', col: 'the government of, local government', en: 'The government announced a new rule.', cn: '政府宣布了一项新规定。' },
    { w: 'gown', zh: '长袍', scene: '长及地面的袍子，常见于毕业或正式场合。', tone: '中性', col: 'a graduation gown, evening gown', en: 'She wore a black gown.', cn: '她穿了一件黑长袍。' },
    { w: 'grade', zh: '年级；成绩', scene: '学校里的年级，或一门课的分数。作动词是评级。', tone: '中性', col: 'a high grade, fifth grade', en: 'She got a high grade.', cn: '她得了高分。' },
    { w: 'graduate', zh: '毕业', scene: '完成学业、离开学校。作名词是毕业生。', tone: '中性', col: 'graduate from, a graduate of', en: 'He will graduate in June.', cn: '他将在六月毕业。' },
    { w: 'grain', zh: '粮食', scene: '小麦、稻米这类谷物的颗粒，或粮食的总称。', tone: '中性', col: 'a grain of, grain crops', en: 'The farm grows grain.', cn: '这家农场种粮食。' },
    { w: 'grammar', zh: '语法', scene: '句子怎么组成的那套规则。', tone: '中性', col: 'English grammar, a grammar book', en: 'The class reviews grammar.', cn: '这节课复习语法。' },
    { w: 'grandchildren', zh: '孙子孙女', scene: '子女的孩子。', tone: '中性', col: 'her grandchildren, two grandchildren', en: 'Her grandchildren visit on Sundays.', cn: '她的孙辈星期天来看她。' },
    { w: 'grandparents', zh: '祖父母', scene: '父母的父母。', tone: '中性', col: 'my grandparents, live with grandparents', en: 'He lives with his grandparents.', cn: '他和祖父母住在一起。' },
    { w: 'grant', zh: '拨款；补助金', scene: '机构拨给的一笔钱，用来读书或做项目。', tone: '中性偏正式', col: 'a grant for, apply for a grant', en: 'She received a grant for the course.', cn: '她得到了这门课的补助。' },
    { w: 'graphics', zh: '图形', scene: '用电脑画出的图像或图表。', tone: '中性', col: 'computer graphics, graphics design', en: 'The report uses simple graphics.', cn: '报告用了简单的图形。' },
    { w: 'grasses', zh: '草', scene: '地上长的那些草。', tone: '中性', col: 'tall grasses, sea grasses', en: 'Tall grasses grow by the path.', cn: '小路边长着高草。' },
    { w: 'gravity', zh: '重力', scene: '把物体拉向地面的力。', tone: '偏技术', col: 'the force of gravity, gravity on', en: 'Gravity pulls the apple down.', cn: '重力把苹果拉下来。' },
    { w: 'great', zh: '极好的', scene: '好到让人满意或赞叹。这张卡的意思是极好，不是“大”。', tone: '褒义', col: 'a great idea, great fun', en: 'The view is great.', cn: '景色好极了。' },
    { w: 'green', zh: '绿色的', scene: '草和叶子的那种颜色。它也可以表示环保。', tone: '中性', col: 'green leaves, dark green', en: 'The door is green.', cn: '门是绿色的。' },
    { w: 'greenhouse', zh: '温室', scene: '用玻璃罩住、让植物在暖和环境里生长的房子。', tone: '中性', col: 'a greenhouse for, in the greenhouse', en: 'Tomatoes grow in the greenhouse.', cn: '番茄在温室里生长。' },
    { w: 'groceries', zh: '杂货', scene: '日常买回家的食品和日用品。它也可以指杂货店。', tone: '中性', col: 'buy groceries, a bag of groceries', en: 'I buy groceries on Saturday.', cn: '我星期六买杂货。' },
    { w: 'grounds', zh: '地面；场地', scene: '一片建筑周围的场地，或地面。', tone: '中性', col: 'school grounds, on the grounds', en: 'The grounds are open to visitors.', cn: '场地对访客开放。' },
    { w: 'guests', zh: '客人', scene: '被请来或住进旅馆的人。', tone: '中性', col: 'hotel guests, invite guests', en: 'The guests arrived at seven.', cn: '客人七点到了。' },
    { w: 'guided', zh: '有向导的', scene: '有人带着走，不是自己乱逛。', tone: '中性', col: 'a guided tour, guided walk', en: 'We took a guided tour.', cn: '我们参加了有向导的游览。' },
    { w: 'guitars', zh: '吉他', scene: '用手指拨弦的乐器。', tone: '中性', col: 'acoustic guitars, play guitars', en: 'Two guitars were on the stage.', cn: '舞台上有两把吉他。' },
    { w: 'gulf', zh: '海湾', scene: '海岸凹进去的一大片海，通常比 bay 更大。', tone: '中性', col: 'the gulf of, across the gulf', en: 'The town faces the gulf.', cn: '这个镇子面向海湾。' },
    { w: 'gum', zh: '树胶', scene: '从树上流出来的胶状物。它也可以指口香糖。', tone: '中性', col: 'chewing gum, gum tree', en: 'The children were not allowed chewing gum.', cn: '孩子们不许嚼口香糖。' },
    { w: 'gym', zh: '健身房', scene: '用来锻炼身体的房间或馆。', tone: '中性', col: 'at the gym, a school gym', en: 'She goes to the gym after work.', cn: '她下班后去健身房。' },
    { w: 'habitats', zh: '栖息地', scene: '一种动物或植物自然生活的那些地方。', tone: '偏正式', col: 'natural habitats, wildlife habitats', en: 'The park protects bird habitats.', cn: '公园保护鸟类栖息地。' },
    { w: 'habits', zh: '习惯', scene: '反复做、几乎不用想的那些做法。', tone: '中性', col: 'daily habits, eating habits', en: 'Walking is one of her habits.', cn: '走路是她的习惯之一。' },
    { w: 'hair', zh: '头发', scene: '头上长的头发。通常不可数。', tone: '中性', col: 'dark hair, cut your hair', en: 'She has short hair.', cn: '她留着短发。' },
    { w: 'hairdresser', zh: '美发师', scene: '给人剪头发、做发型的人。', tone: '中性', col: 'at the hairdresser, a hairdresser', en: 'I have an appointment with the hairdresser.', cn: '我和美发师有一个预约。' },
    { w: 'half', zh: '一半', scene: '把一个整体分成相等的两份，其中一份。', tone: '中性', col: 'half of, half an hour', en: 'Half of the class was late.', cn: '班上有一半人迟到了。' },
    { w: 'halls', zh: '大厅；宿舍', scene: '大楼里的大厅，或学生宿舍。', tone: '中性', col: 'concert halls, halls of residence', en: 'The talk is in one of the halls.', cn: '讲座在其中一座大厅。' },
    { w: 'haloes', zh: '光环', scene: '头或太阳、月亮周围的一圈光。halo 的一种复数。', tone: '中性', col: 'a halo around, solar haloes', en: 'A halo appeared around the moon.', cn: '月亮周围出现了一圈光晕。' },
    { w: 'handouts', zh: '讲义', scene: '课堂上发给大家的文字资料。', tone: '中性', col: 'class handouts, printed handouts', en: 'The handouts are on the desk.', cn: '讲义在桌子上。' },
    { w: 'hands', zh: '手', scene: '胳膊末端用来拿东西的那双手。作动词是传递。', tone: '中性', col: 'wash your hands, hands out', en: 'Wash your hands before lunch.', cn: '午饭前洗手。' },
    { w: 'harness', zh: '利用', scene: '把风、水或一种力量用起来。', tone: '偏正式', col: 'harness the, harness energy', en: 'The dam harnesses the river.', cn: '水坝利用了这条河。' },
    { w: 'harp', zh: '竖琴', scene: '有很多弦、竖着弹的乐器。', tone: '中性', col: 'play the harp, a harp solo', en: 'She plays the harp.', cn: '她弹竖琴。' },
    { w: 'harvest', zh: '收割', scene: '把成熟的庄稼割下来、收进仓里。', tone: '中性', col: 'harvest the, the harvest of', en: 'They harvest the wheat in August.', cn: '他们八月收小麦。' },
    { w: 'hates', zh: '厌恶', scene: '非常不喜欢，想躲开。', tone: '负面', col: 'hates doing, hates the', en: 'She hates waiting in queues.', cn: '她讨厌排队。' },
    { w: 'hats', zh: '帽子', scene: '戴在头上的帽子。', tone: '中性', col: 'wear hats, sun hats', en: 'Hats are by the door.', cn: '帽子在门边。' },
    { w: 'head', zh: '头', scene: '身体最上面的那一部分。它也可以表示每人，或出发。', tone: '中性', col: 'the head of, head for', en: 'He nodded his head.', cn: '他点了点头。' },
    { w: 'headland', zh: '岬', scene: '陆地伸进海里的那一块。这张卡原文把岬写成了呷。', tone: '中性', col: 'a rocky headland, on the headland', en: 'The path ends at a headland.', cn: '小路尽头是一座岬角。' },
    { w: 'headlines', zh: '大标题', scene: '新闻最上面、字最大的那一行标题。', tone: '中性', col: 'newspaper headlines, the headlines', en: 'The story made the headlines.', cn: '这件事上了头条。' },
    { w: 'heart', zh: '心脏', scene: '胸口里把血送出去的那个器官。', tone: '中性', col: 'heart disease, the heart of', en: 'The heart pumps blood.', cn: '心脏把血泵出去。' },
    { w: 'heavy', zh: '重的', scene: '分量大，拿起来费劲。', tone: '中性', col: 'a heavy bag, heavy rain', en: 'The box is heavy.', cn: '这个箱子很重。' },
    { w: 'hedges', zh: '树篱', scene: '修剪过、用来隔开田地或院子的一排灌木。', tone: '中性', col: 'garden hedges, trim the hedges', en: 'Birds nest in the hedges.', cn: '鸟在树篱里筑巢。' },
    { w: 'heels', zh: '高跟鞋', scene: '这张卡的意思是高跟鞋。heel 也可以指脚后跟。', tone: '中性', col: 'high heels, a pair of heels', en: 'She wore heels to the dinner.', cn: '她穿着高跟鞋去吃晚饭。' },
    { w: 'height', zh: '高度', scene: '从底部到顶部有多高。', tone: '中性', col: 'the height of, in height', en: 'The wall is two metres in height.', cn: '这堵墙高两米。' },
    { w: 'helicopter', zh: '直升机', scene: '靠顶上旋翼升起、可以停在空中的飞机。', tone: '中性', col: 'a rescue helicopter, by helicopter', en: 'A helicopter landed in the field.', cn: '一架直升机降落在田里。' },
    { w: 'helmets', zh: '头盔', scene: '骑车或施工时戴在头上的硬帽。', tone: '中性', col: 'safety helmets, bicycle helmets', en: 'Cyclists must wear helmets.', cn: '骑自行车的人必须戴头盔。' },
    { w: 'helpful', zh: '有帮助的', scene: '这件事或这个人让困难变小。', tone: '褒义', col: 'helpful advice, helpful to', en: 'The map was helpful.', cn: '这张地图很有帮助。' },
    { w: 'helpless', zh: '无助的', scene: '自己做不了，需要别人来帮。', tone: '中性', col: 'feel helpless, helpless to', en: 'The chick looked helpless.', cn: '这只小鸡看上去很无助。' },
    { w: 'heritage', zh: '遗产', scene: '一代代留下来的建筑、习俗或文物。', tone: '偏正式', col: 'cultural heritage, heritage site', en: 'The old mill is part of local heritage.', cn: '这座旧磨坊是当地遗产的一部分。' },
    { w: 'hero', zh: '英雄；男主角', scene: '做出勇敢事迹的人，或故事里的男主人公。', tone: '褒义', col: 'a local hero, the hero of', en: 'The hero of the story is a teacher.', cn: '故事的主人公是一位老师。' },
    { w: 'heroine', zh: '女主角', scene: '故事里的女主人公，或做出勇敢事迹的女性。', tone: '中性', col: 'the heroine of, a war heroine', en: 'The heroine solves the problem.', cn: '女主角解决了这个问题。' },
    { w: 'hibernation', zh: '冬眠', scene: '动物在寒冷季节睡得很久、几乎不动。', tone: '偏技术', col: 'winter hibernation, enter hibernation', en: 'Bears spend the winter in hibernation.', cn: '熊在冬天冬眠。' },
    { w: 'hidden', zh: '隐藏的', scene: '放在看不见的地方，或还没被发现。', tone: '中性', col: 'hidden from, a hidden door', en: 'The path was hidden by trees.', cn: '小路被树挡住了。' },
    { w: 'hierarchy', zh: '等级制度', scene: '从高到低排好的层级，谁在谁上面。', tone: '正式', col: 'a hierarchy of, social hierarchy', en: 'The company has a clear hierarchy.', cn: '这家公司等级很清楚。' },
    { w: 'highways', zh: '公路', scene: '供车辆快速通行的大路。', tone: '中性', col: 'major highways, on the highways', en: 'The highways were busy.', cn: '公路上很繁忙。' },
    { w: 'hillsides', zh: '山坡', scene: '山的侧面那一片坡地。', tone: '中性', col: 'steep hillsides, on the hillsides', en: 'Sheep graze on the hillsides.', cn: '羊在山坡上吃草。' },
    { w: 'history', zh: '历史', scene: '过去发生的事，或研究过去的学科。', tone: '中性', col: 'local history, a history of', en: 'The museum tells the history of the town.', cn: '博物馆讲述这个镇子的历史。' },
    { w: 'hobby', zh: '业余爱好', scene: '工作之外因为喜欢才做的事。', tone: '中性', col: 'a hobby of, take up a hobby', en: 'Photography is her hobby.', cn: '摄影是她的爱好。' },
    { w: 'hold', zh: '举行；保持', scene: '把活动办起来，或把东西拿住不放。', tone: '中性', col: 'hold a meeting, hold on', en: 'The school will hold a concert.', cn: '学校将举办一场音乐会。' },
    { w: 'holes', zh: '孔；洞', scene: '表面上穿过去或凹进去的那些洞。', tone: '中性', col: 'holes in, dig holes', en: 'There are holes in the fence.', cn: '篱笆上有洞。' },
    { w: 'homestay', zh: '寄宿家庭', scene: '学生住进当地人家里，边住边学。', tone: '中性', col: 'a homestay family, homestay accommodation', en: 'She found a homestay near the college.', cn: '她在学院附近找到了一家寄宿家庭。' },
    { w: 'honey', zh: '蜂蜜', scene: '蜜蜂酿出的甜液。', tone: '中性', col: 'a jar of honey, honey and', en: 'She put honey in the tea.', cn: '她往茶里放了蜂蜜。' },
    { w: 'hook', zh: '挂钩', scene: '墙上或杆上用来挂东西的弯钩。', tone: '中性', col: 'a coat hook, on the hook', en: 'Hang the bag on the hook.', cn: '把包挂在钩子上。' },
    { w: 'hormones', zh: '激素', scene: '身体里调节生长和情绪的那些化学物质。', tone: '偏技术', col: 'growth hormones, hormone levels', en: 'The test measures hormones.', cn: '这项检查测量激素。' },
    { w: 'horror', zh: '惊骇', scene: '强烈的害怕和震惊。它也可以是恐怖片这一类。', tone: '负面', col: 'in horror, a horror film', en: 'She stared in horror.', cn: '她惊恐地盯着。' },
    { w: 'horses', zh: '马', scene: '可以骑或拉车的马。', tone: '中性', col: 'ride horses, wild horses', en: 'Horses graze in the field.', cn: '马在田里吃草。' },
    { w: 'hospital', zh: '医院', scene: '医生给病人看病、病人可以住下的地方。', tone: '中性', col: 'in hospital, a hospital bed', en: 'He was taken to hospital.', cn: '他被送去了医院。' },
    { w: 'hospitality', zh: '款待', scene: '对客人热情、让人觉得受欢迎。', tone: '褒义', col: 'hospitality of, warm hospitality', en: 'We thanked them for their hospitality.', cn: '我们感谢他们的款待。' },
    { w: 'host', zh: '主持', scene: '负责接待客人，或主持一场节目、聚会。', tone: '中性', col: 'host a show, host the', en: 'She will host the meeting.', cn: '她将主持这次会议。' },
    { w: 'hotspots', zh: '热点', scene: '特别繁忙、特别受关注或无线网络可用的那些地点。', tone: '中性', col: 'tourist hotspots, wifi hotspots', en: 'The square is a tourist hotspot.', cn: '广场是一个旅游热点。' },
    { w: 'hours', zh: '小时', scene: '六十分钟为一个小时，或营业的那些时段。', tone: '中性', col: 'two hours, opening hours', en: 'The museum is open for six hours.', cn: '博物馆开放六个小时。' },
    { w: 'household', zh: '一家人；家庭的', scene: '住在同一所房子里的那一家人，或家里用的。', tone: '中性', col: 'a household of, household goods', en: 'The household has four people.', cn: '这一家有四口人。' },
    { w: 'housewife', zh: '家庭主妇', scene: '主要在家料理家务的女性。', tone: '中性', col: 'a housewife and, full-time housewife', en: 'She worked as a housewife for ten years.', cn: '她做了十年家庭主妇。' },
    { w: 'hundreds', zh: '数百', scene: '数量到了几百，很多。', tone: '中性', col: 'hundreds of, several hundreds', en: 'Hundreds of people came.', cn: '来了好几百人。' },
    { w: 'hunger', zh: '饥饿', scene: '肚子空、想吃东西的那种感觉，或大范围的缺粮。', tone: '中性', col: 'hunger and, die of hunger', en: 'Hunger made it hard to concentrate.', cn: '饥饿让人难以专心。' },
    { w: 'hunters', zh: '猎人', scene: '出去打猎的人。', tone: '中性', col: 'local hunters, the hunters', en: 'The hunters returned at dusk.', cn: '猎人在黄昏时回来了。' },
    { w: 'hurts', zh: '伤害；疼痛', scene: '让人受伤，或某个部位在痛。', tone: '中性', col: 'hurts somebody, it hurts', en: 'My knee hurts.', cn: '我的膝盖疼。' },
    { w: 'husband', zh: '丈夫', scene: '婚姻里的男性一方。', tone: '中性', col: 'her husband, a husband and', en: 'Her husband works at the port.', cn: '她丈夫在港口工作。' },
    { w: 'hydro', zh: '水力发电的', scene: '这张卡是 hydroelectric 的简称，和水能发电有关。', tone: '偏技术', col: 'hydro power, a hydro plant', en: 'The valley has a hydro plant.', cn: '山谷里有一座水电站。' },
    { w: 'hygrometer', zh: '湿度计', scene: '测量空气里水汽多少的仪器。', tone: '偏技术', col: 'a digital hygrometer, read the hygrometer', en: 'The hygrometer is on the wall.', cn: '湿度计在墙上。' },
{ w: 'icel', zh: '冰', scene: '这张卡的意思是冰。常见拼写是 ice。', tone: '中性', col: 'ice and, a block of ice', en: 'The lake is covered with ice.', cn: '湖面结了冰。' },
    { w: 'icehouse', zh: '冰库', scene: '用来存冰或冷藏的房子。', tone: '中性', col: 'an old icehouse, in the icehouse', en: 'The icehouse stands by the lake.', cn: '冰库在湖边。' },
    { w: 'ideas', zh: '想法', scene: '脑子里形成的那些主意。', tone: '中性', col: 'new ideas, an idea for', en: 'The class shared ideas.', cn: '全班分享了想法。' },
    { w: 'identity', zh: '身份', scene: '一个人是谁，或一群人共同的认同。', tone: '中性偏正式', col: 'identity card, cultural identity', en: 'Please show your identity card.', cn: '请出示身份证件。' },
    { w: 'images', zh: '影像', scene: '照片、画面或脑子里的图像。', tone: '中性', col: 'digital images, images of', en: 'The book has colour images.', cn: '这本书有彩色图像。' },
    { w: 'imagination', zh: '想象力', scene: '脑子里造出没在眼前的画面的能力。', tone: '中性', col: 'use your imagination, a vivid imagination', en: 'The story needs imagination.', cn: '这个故事需要想象力。' },
    { w: 'imitates', zh: '模仿', scene: '照着别人的样子去做或去说。', tone: '中性', col: 'imitate somebody, imitates the', en: 'The child imitates the teacher.', cn: '孩子模仿老师。' },
    { w: 'immediately', zh: '立即', scene: '马上，中间没有耽搁。', tone: '中性', col: 'immediately after, do it immediately', en: 'Call me immediately.', cn: '立刻给我打电话。' },
    { w: 'immigrants', zh: '移民', scene: '迁到另一个国家长期生活的人。', tone: '中性', col: 'recent immigrants, immigrants from', en: 'The city welcomed new immigrants.', cn: '这座城市迎接新移民。' },
    { w: 'impair', zh: '损害', scene: '使一种能力变差，如视力或听力。', tone: '正式', col: 'impair the, impair vision', en: 'Lack of sleep can impair memory.', cn: '睡眠不足会损害记忆。' },
    { w: 'implement', zh: '实施', scene: '把计划真正做起来，不只是写在纸上。', tone: '正式', col: 'implement a plan, implement the', en: 'The school will implement the new rule.', cn: '学校将实施这项新规定。' },
    { w: 'implications', zh: '暗示；影响', scene: '一件事带来、但没有直说的那些后果。', tone: '正式', col: 'implications of, practical implications', en: 'The report discusses the implications.', cn: '报告讨论了这些影响。' },
    { w: 'import', zh: '进口', scene: '把货物从另一个国家买进来。', tone: '中性', col: 'import from, import goods', en: 'The shop imports tea.', cn: '这家店进口茶叶。' },
    { w: 'impressive', zh: '给人深刻印象的', scene: '好或大到让人记住。', tone: '褒义', col: 'an impressive result, impressive to', en: 'The building is impressive.', cn: '这栋建筑令人印象深刻。' },
    { w: 'incentive', zh: '刺激；激励', scene: '让人更想去做的那一个好处或奖励。', tone: '偏正式', col: 'an incentive to, a tax incentive', en: 'The bonus is an incentive to finish early.', cn: '奖金是提早完成的激励。' },
    { w: 'inches', zh: '英寸', scene: '长度单位，一英寸大约两点五四厘米。', tone: '中性', col: 'six inches, in inches', en: 'The shelf is twelve inches deep.', cn: '这个架子深十二英寸。' },
    { w: 'incidentally', zh: '偶然地', scene: '顺便提到，不是主要话题。', tone: '偏正式', col: 'incidentally the, mentioned incidentally', en: 'Incidentally, the shop closes at five.', cn: '顺便说一下，这家店五点关门。' },
    { w: 'incineration', zh: '焚化', scene: '用高温把废弃物烧掉。这张卡原文写成了楚化。', tone: '偏技术', col: 'waste incineration, incineration plant', en: 'The plant uses incineration.', cn: '这家工厂用焚烧处理废弃物。' },
    { w: 'incline', zh: '倾向于', scene: '更愿意朝某个方向想或做。它也可以是一个斜坡。', tone: '偏正式', col: 'incline to, be inclined to', en: 'I am inclined to wait.', cn: '我倾向于再等一等。' },
    { w: 'inclusive', zh: '包含全部费用的', scene: '价钱里已经把该有的项目都算进去了。', tone: '中性偏正式', col: 'inclusive of, an inclusive price', en: 'The price is inclusive of breakfast.', cn: '这个价钱包含早餐。' },
    { w: 'incredibly', zh: '难以置信地', scene: '程度高到几乎让人不敢相信。', tone: '语气强', col: 'incredibly fast, incredibly useful', en: 'The train was incredibly late.', cn: '火车晚得离谱。' },
    { w: 'indeed', zh: '的确', scene: '加强一句已经说过的话：真是这样。', tone: '中性', col: 'indeed the, very good indeed', en: 'The soup was good indeed.', cn: '这汤的确很好。' },
    { w: 'independence', zh: '独立性', scene: '不依靠别人、自己作决定的状态。', tone: '中性', col: 'independence from, financial independence', en: 'The country gained independence.', cn: '这个国家获得了独立。' },
    { w: 'independent', zh: '独立的', scene: '不依附别人就能做。这张卡也标了副词 independently。', tone: '中性', col: 'independent of, an independent study', en: 'She works as an independent guide.', cn: '她是一名独立向导。' },
    { w: 'India', zh: '印度', scene: '南亚的那个国家。', tone: '专名', col: 'in India, across India', en: 'The tea comes from India.', cn: '这茶来自印度。' },
    { w: 'indication', zh: '指示；迹象', scene: '显示出某事可能是真的那个信号。', tone: '偏正式', col: 'an indication of, an indication that', en: 'Dark clouds are an indication of rain.', cn: '乌云是要下雨的迹象。' },
    { w: 'indoor', zh: '室内的', scene: '在房子里面进行，不是在户外。', tone: '中性', col: 'indoor pool, indoor sports', en: 'The pool is indoor.', cn: '这个游泳池在室内。' },
    { w: 'inferior', zh: '差的；自卑的', scene: '质量更低，或觉得自己不如别人。', tone: '负面', col: 'inferior to, inferior quality', en: 'The copy is inferior to the original.', cn: '复印件比原件差。' },
    { w: 'infuence', zh: '影响', scene: '这张卡的意思是影响。常见拼写是 influence。', tone: '中性', col: 'influence on, under the influence', en: 'The teacher had a strong influence.', cn: '这位老师影响很大。' },
    { w: 'inform', zh: '通知', scene: '把消息正式告诉某人。', tone: '偏正式', col: 'inform somebody of, inform that', en: 'Please inform the office of the change.', cn: '请把变动通知办公室。' },
    { w: 'ingest', zh: '咽下', scene: '把食物或药吞进身体里。这张卡原文写成了咽下。', tone: '偏技术', col: 'ingest food, ingest a', en: 'Do not ingest the liquid.', cn: '不要把这种液体咽下去。' },
    { w: 'ingredients', zh: '配料', scene: '做一道菜或一种产品要用的那些原料。', tone: '中性', col: 'fresh ingredients, list of ingredients', en: 'The ingredients are on the label.', cn: '配料写在标签上。' },
    { w: 'inherit', zh: '继承', scene: '从长辈那里得到钱、房子或一种特点。', tone: '中性', col: 'inherit from, inherit a house', en: 'She inherited the house.', cn: '她继承了这栋房子。' },
    { w: 'initiative', zh: '新方案；主动性', scene: '主动提出并开始的一项计划，或自己先行动的能力。', tone: '偏正式', col: 'a new initiative, take the initiative', en: 'The city launched a recycling initiative.', cn: '这座城市推出了一项回收计划。' },
    { w: 'injects', zh: '注射', scene: '用针把液体送进身体。', tone: '中性', col: 'inject into, injects the', en: 'The nurse injects the medicine.', cn: '护士注射药物。' },
    { w: 'injuries', zh: '伤害', scene: '身体受到的那些伤，是 injury 的复数。', tone: '中性', col: 'sports injuries, serious injuries', en: 'The clinic treats sports injuries.', cn: '诊所治疗运动损伤。' },
    { w: 'ink', zh: '墨水', scene: '钢笔或印刷用的墨。', tone: '中性', col: 'a bottle of ink, black ink', en: 'The pen is out of ink.', cn: '钢笔没墨水了。' },
    { w: 'inland', zh: '内陆的', scene: '离开海岸、在国土内部。', tone: '中性', col: 'inland towns, inland from', en: 'The town is inland.', cn: '这个镇子在内陆。' },
    { w: 'innovation', zh: '创新', scene: '新的做法或新产品被做出来。', tone: '中性偏正式', col: 'technical innovation, innovation in', en: 'The prize is for innovation.', cn: '这个奖是颁给创新的。' },
    { w: 'input', zh: '投入', scene: '放进一个过程里的信息、时间或材料。这张卡原文写成了投人。', tone: '中性', col: 'input from, input into', en: 'We need input from the students.', cn: '我们需要学生的意见。' },
    { w: 'inscriptions', zh: '铭文', scene: '刻在石头或金属上的文字。', tone: '偏正式', col: 'stone inscriptions, inscriptions on', en: 'The inscriptions are hard to read.', cn: '这些铭文很难辨认。' },
    { w: 'insects', zh: '昆虫', scene: '有六条腿的小动物，如蚂蚁和蜜蜂。', tone: '中性', col: 'flying insects, insects in', en: 'Insects live under the bark.', cn: '昆虫住在树皮下面。' },
    { w: 'insight', zh: '洞悉', scene: '一下子看清事情真正是怎么回事。', tone: '偏正式', col: 'insight into, a new insight', en: 'The visit gave insight into the work.', cn: '这次参观让人看清了这项工作。' },
    { w: 'inspection', zh: '视察', scene: '仔细查看是否符合要求。', tone: '偏正式', col: 'a safety inspection, under inspection', en: 'The kitchen passed the inspection.', cn: '厨房通过了检查。' },
    { w: 'inspiration', zh: '灵感', scene: '突然来的、让人想去做的那个念头。', tone: '褒义', col: 'a source of inspiration, inspiration for', en: 'The river was her inspiration.', cn: '这条河是她的灵感来源。' },
    { w: 'install', zh: '安装', scene: '把设备装好、可以开始用。它也可以表示正式任命。', tone: '中性', col: 'install a, install the', en: 'They installed a new heater.', cn: '他们安装了新的加热器。' },
    { w: 'instead', zh: '代替；反而', scene: '不用原来那个，而用另一个。', tone: '中性', col: 'instead of, instead the', en: 'Take the bus instead of the car.', cn: '坐公共汽车，不要开车。' },
    { w: 'instruction', zh: '指令；说明', scene: '告诉你怎么做的说明，或一条命令。', tone: '中性', col: 'an instruction to, follow the instruction', en: 'Read the instruction on the lid.', cn: '读盖子上的说明。' },
    { w: 'instructor', zh: '教员', scene: '负责教一项技能的人。这张卡也写了指导书。', tone: '中性', col: 'a driving instructor, the instructor', en: 'The instructor showed the first step.', cn: '教员演示了第一步。' },
    { w: 'instruments', zh: '仪器；乐器', scene: '用来测量的仪器，或用来演奏的乐器。', tone: '中性', col: 'musical instruments, scientific instruments', en: 'The band has four instruments.', cn: '乐队有四件乐器。' },
    { w: 'insulation', zh: '绝缘；隔热', scene: '挡住热、冷或电传过去的那一层材料。', tone: '偏技术', col: 'roof insulation, thermal insulation', en: 'The roof needs insulation.', cn: '屋顶需要隔热层。' },
    { w: 'insurance', zh: '保险', scene: '预先付钱，以便损失发生时得到补偿。', tone: '中性', col: 'travel insurance, insurance for', en: 'The trip includes insurance.', cn: '这次出行包含保险。' },
    { w: 'intact', zh: '完整的', scene: '没有破损，还是原样。', tone: '偏正式', col: 'remain intact, intact after', en: 'The vase remained intact.', cn: '花瓶还是完好的。' },
    { w: 'intake', zh: '摄取量', scene: '吃进去或吸进去的量，如食物或学生人数。', tone: '偏正式', col: 'food intake, an intake of', en: 'Reduce your salt intake.', cn: '减少盐的摄入。' },
    { w: 'intellectually', zh: '智力上', scene: '在思考和理解这一层，不是体力上。', tone: '正式', col: 'intellectually demanding, intellectually curious', en: 'The course is intellectually demanding.', cn: '这门课在智力上要求很高。' },
    { w: 'intelligent', zh: '智能的；聪明的', scene: '善于理解，或机器能做需要判断的事。', tone: '褒义', col: 'an intelligent student, intelligent systems', en: 'The software is intelligent.', cn: '这个软件很智能。' },
    { w: 'intentions', zh: '意图', scene: '心里打算去做的那些事。', tone: '中性', col: 'good intentions, intentions to', en: 'Her intentions were clear.', cn: '她的意图很清楚。' },
    { w: 'intensive', zh: '加强的', scene: '在短时间里投入很多，课程或照料很密。', tone: '偏正式', col: 'an intensive course, intensive care', en: 'The course is intensive.', cn: '这门课强度很大。' },
    { w: 'interaction', zh: '相互作用', scene: '两边碰到一起、互相影响。', tone: '偏正式', col: 'interaction between, social interaction', en: 'The interaction between the two groups was friendly.', cn: '两组之间的互动很友好。' },
    { w: 'interests', zh: '兴趣；利息', scene: '你喜欢投入时间的那些事。它也可以表示利息。', tone: '中性', col: 'interests in, personal interests', en: 'Her interests include music.', cn: '她的兴趣包括音乐。' },
    { w: 'intermediate', zh: '中等的；中间的', scene: '程度在初级和高级之间，或位置在两端中间。', tone: '中性', col: 'an intermediate class, intermediate level', en: 'She joined an intermediate class.', cn: '她参加了一个中级班。' },
    { w: 'international', zh: '国际的', scene: '涉及不止一个国家。', tone: '中性', col: 'an international flight, international students', en: 'The flight is international.', cn: '这是国际航班。' },
    { w: 'internet', zh: '互联网', scene: '把电脑连在一起的全球网络。', tone: '中性', col: 'on the internet, internet access', en: 'The form is on the internet.', cn: '表格在互联网上。' },
    { w: 'interpersonal', zh: '人际的', scene: '人和人之间的，如相处的技巧。', tone: '偏正式', col: 'interpersonal skills, interpersonal relations', en: 'The job needs interpersonal skills.', cn: '这份工作需要人际技巧。' },
    { w: 'interval', zh: '间隔', scene: '两件事之间空出的那段时间或距离。', tone: '中性', col: 'at intervals, an interval of', en: 'Buses run at ten-minute intervals.', cn: '公共汽车每隔十分钟一班。' },
    { w: 'interviews', zh: '面试；采访', scene: '面对面问答，为了招人或做新闻。', tone: '中性', col: 'job interviews, radio interviews', en: 'The interviews are on Monday.', cn: '面试在星期一。' },
    { w: 'intimate', zh: '亲密的', scene: '关系很近，或场合很小、很私密。', tone: '中性', col: 'an intimate friend, intimate knowledge', en: 'It was an intimate concert.', cn: '那是一场小型亲切的音乐会。' },
    { w: 'intriguing', zh: '令人感兴趣的', scene: '奇怪或巧妙，让人想继续了解。', tone: '褒义', col: 'an intriguing idea, intriguing to', en: 'The result is intriguing.', cn: '这个结果很有意思。' },
    { w: 'introduction', zh: '介绍；引进', scene: '开头把人或题目带到大家面前，或把新事物引进来。', tone: '中性', col: 'an introduction to, a brief introduction', en: 'The introduction explains the aim.', cn: '引言说明了目的。' },
    { w: 'introverted', zh: '内向的', scene: '更喜欢安静和自己的想法，不爱成为注意中心。', tone: '中性', col: 'an introverted student, introverted personality', en: 'He is introverted but friendly.', cn: '他内向，但友好。' },
    { w: 'invaders', zh: '侵略者', scene: '用武力进入别人土地的人。', tone: '负面', col: 'foreign invaders, the invaders', en: 'The town resisted the invaders.', cn: '这个镇子抵抗了入侵者。' },
    { w: 'inventions', zh: '发明', scene: '新被造出来的那些东西或方法。', tone: '中性', col: 'modern inventions, inventions of', en: 'The museum shows old inventions.', cn: '博物馆展出旧的发明。' },
    { w: 'investments', zh: '投资', scene: '为了以后回报而投入的那些钱或时间。', tone: '中性', col: 'foreign investments, investments in', en: 'The fund made two investments.', cn: '这笔资金做了两项投资。' },
    { w: 'investigation', zh: '调查', scene: '为了弄清事实而仔细查。', tone: '偏正式', col: 'an investigation into, under investigation', en: 'The police opened an investigation.', cn: '警方展开了调查。' },
    { w: 'invitation', zh: '邀请', scene: '请别人来参加的那句话或那张卡。', tone: '中性', col: 'an invitation to, accept an invitation', en: 'I received an invitation to the talk.', cn: '我收到了讲座的邀请。' },
    { w: 'iron', zh: '铁', scene: '一种金属。它也可以是熨斗，或动词熨。', tone: '中性', col: 'an iron gate, cast iron', en: 'The gate is made of iron.', cn: '大门是铁的。' },
    { w: 'irrespective', zh: '不考虑的', scene: '不管那个条件，结果仍然一样。常说 irrespective of。', tone: '正式', col: 'irrespective of, irrespective of age', en: 'The rule applies irrespective of age.', cn: '这条规则不论年龄都适用。' },
    { w: 'irrigation', zh: '灌溉', scene: '把水引到田里给庄稼喝。', tone: '偏正式', col: 'irrigation system, irrigation of', en: 'The fields need irrigation.', cn: '这些田需要灌溉。' },
    { w: 'islands', zh: '岛', scene: '四周是水的陆地。', tone: '中性', col: 'small islands, on the islands', en: 'The boat visits three islands.', cn: '船去三个岛。' },
    { w: 'isolation', zh: '隔离', scene: '和别人或别的地方分开，单独待着。', tone: '中性偏正式', col: 'in isolation, social isolation', en: 'The patient stayed in isolation.', cn: '病人处于隔离中。' },
    { w: 'IT', zh: '信息技术', scene: '这张卡是 information technology 的缩写，指计算机和网络这一类技术。', tone: '中性', col: 'IT support, an IT course', en: 'She works in IT.', cn: '她从事信息技术工作。' },
    { w: 'Italian', zh: '意大利的；意大利人', scene: '和意大利有关的，或一个意大利人、意大利语。', tone: '专名', col: 'Italian food, speak Italian', en: 'The menu is Italian.', cn: '这是意大利菜单。' },
    { w: 'italics', zh: '斜体字', scene: '向右倾斜的印刷字体。', tone: '中性', col: 'in italics, use italics', en: 'The title is in italics.', cn: '标题是斜体。' },
    { w: 'Italy', zh: '意大利', scene: '欧洲南部的那个国家。', tone: '专名', col: 'in Italy, across Italy', en: 'The film was made in Italy.', cn: '这部电影在意大利拍摄。' },
    { w: 'items', zh: '项目；商品', scene: '清单上的一条条，或一件件商品。', tone: '中性', col: 'items on, several items', en: 'Three items are missing.', cn: '有三项不见了。' },
    { w: 'itinerary', zh: '旅程路线', scene: '一次出行要去的地方和顺序。', tone: '中性', col: 'a travel itinerary, on the itinerary', en: 'The itinerary includes two museums.', cn: '行程包括两座博物馆。' },
    { w: 'Iift', zh: '电梯', scene: '这张卡的意思是电梯。常见拼写是 lift。', tone: '中性', col: 'take the lift, a lift to', en: 'Take the lift to the third floor.', cn: '乘电梯到三楼。' },
    { w: 'January', zh: '一月', scene: '一年的第一个月。', tone: '专名', col: 'in January, last January', en: 'The term starts in January.', cn: '学期一月开始。' },
    { w: 'Japaneses', zh: '日本的；日语', scene: '这张卡的意思是日本的、日本人或日语。常见拼写是 Japanese。', tone: '专名', col: 'Japanese food, speak Japanese', en: 'The class learns Japanese.', cn: '这个班学日语。' },
    { w: 'jawbone', zh: '颚骨', scene: '构成下巴的那块骨头。', tone: '偏技术', col: 'a broken jawbone, the jawbone', en: 'The jawbone was scanned.', cn: '颚骨做了扫描。' },
    { w: 'jaws', zh: '下颌', scene: '嘴上下用来咬合的部分。', tone: '中性', col: 'the jaws of, open jaws', en: 'The tool has metal jaws.', cn: '这个工具有金属钳口。' },
    { w: 'jazz', zh: '爵士乐', scene: '一种节奏灵活、常即兴演奏的音乐。', tone: '中性', col: 'jazz music, a jazz band', en: 'The club plays jazz.', cn: '这家俱乐部演奏爵士乐。' },
    { w: 'jeans', zh: '牛仔裤', scene: '用斜纹布做的裤子。常用复数。', tone: '中性', col: 'a pair of jeans, blue jeans', en: 'He wore jeans.', cn: '他穿着牛仔裤。' },
    { w: 'jet', zh: '喷射', scene: '一股强力喷出的水、气，或喷气式飞机。', tone: '中性', col: 'a jet of, a jet engine', en: 'A jet of water hit the wall.', cn: '一股水喷到了墙上。' },
    { w: 'jewellery', zh: '珠宝', scene: '戒指、项链这类饰品。美式拼写是 jewelry。', tone: '中性', col: 'gold jewellery, a piece of jewellery', en: 'The shop sells jewellery.', cn: '这家店卖珠宝。' },
    { w: 'journalist', zh: '新闻工作者', scene: '为报纸、广播或网站写新闻的人。', tone: '中性', col: 'a journalist for, the journalist', en: 'A journalist asked about the plan.', cn: '一名记者询问了这个计划。' },
    { w: 'judo', zh: '柔道', scene: '一种用摔倒和擒拿的日本格斗运动。', tone: '中性', col: 'practise judo, a judo class', en: 'She practises judo twice a week.', cn: '她每周练两次柔道。' },
    { w: 'July', zh: '七月', scene: '一年的第七个月。', tone: '专名', col: 'in July, last July', en: 'The festival is in July.', cn: '节日在七月。' },
    { w: 'jump', zh: '跳跃', scene: '双脚离地，跳起来。', tone: '中性', col: 'jump over, jump up', en: 'The dog jumped over the log.', cn: '狗跳过了那根木头。' },
    { w: 'junction', zh: '岔路口', scene: '两条路或两条线接在一起的地方。', tone: '中性', col: 'at the junction, a road junction', en: 'Turn left at the junction.', cn: '在岔路口向左拐。' },
    { w: 'Junes', zh: '六月', scene: '这张卡的意思是六月。常见拼写是 June。', tone: '专名', col: 'in June, last June', en: 'The course ends in June.', cn: '课程六月结束。' },
    { w: 'justice', zh: '正义', scene: '公平地对待人和事，或司法。', tone: '中性偏正式', col: 'social justice, a sense of justice', en: 'The court seeks justice.', cn: '法院追求公正。' },
{ w: 'lien', zh: '客户', scene: '这张卡的释义是客户。常见的词是 client。lien 在英语里通常指留置权。', tone: '词条本身', col: 'a regular client, client of', en: 'The shop knows its clients.', cn: '这家店认识自己的客户。' },
    { w: 'kelp', zh: '海藻', scene: '长在海里、成片的大型藻类。', tone: '中性', col: 'kelp forest, dry kelp', en: 'Kelp grows along the coast.', cn: '海藻沿海岸生长。' },
    { w: 'keyboard', zh: '键盘', scene: '电脑或钢琴上按键排成的那一块。', tone: '中性', col: 'a computer keyboard, keyboard skills', en: 'The keyboard is new.', cn: '键盘是新的。' },
    { w: 'keys', zh: '钥匙', scene: '用来开锁的那些钥匙。它也可以是键盘上的键。', tone: '中性', col: 'a set of keys, house keys', en: 'The keys are on the desk.', cn: '钥匙在桌子上。' },
    { w: 'kill', zh: '杀死', scene: '使生命结束。', tone: '负面', col: 'kill the, kill time', en: 'Frost can kill the plants.', cn: '霜会把植物冻死。' },
    { w: 'kilometres', zh: '公里', scene: '长度单位，一千米为一公里。', tone: '中性', col: 'ten kilometres, in kilometres', en: 'The lake is three kilometres away.', cn: '湖在三公里外。' },
    { w: 'king', zh: '国王', scene: '王国的男性统治者。', tone: '中性', col: 'the king of, a king', en: 'The king lived in the castle.', cn: '国王住在城堡里。' },
    { w: 'kit', zh: '工具箱；成套工具', scene: '为做一件事配好的一套工具或用品。', tone: '中性', col: 'a first-aid kit, a tool kit', en: 'The kit is in the car.', cn: '这套工具在车里。' },
    { w: 'kitchen', zh: '厨房', scene: '家里做饭的那间房。', tone: '中性', col: 'in the kitchen, a small kitchen', en: 'The kitchen faces the garden.', cn: '厨房朝着花园。' },
    { w: 'knee', zh: '膝盖', scene: '腿中间弯曲的那个关节。', tone: '中性', col: 'a sore knee, on one knee', en: 'She hurt her knee.', cn: '她伤了膝盖。' },
    { w: 'knives', zh: '刀', scene: '用来切的刀，是 knife 的复数。', tone: '中性', col: 'sharp knives, kitchen knives', en: 'The knives are in the drawer.', cn: '刀在抽屉里。' },
    { w: 'knock', zh: '敲', scene: '用手敲击门或某物。', tone: '中性', col: 'knock on, knock at', en: 'Knock on the door before you enter.', cn: '进来之前先敲门。' },
    { w: 'labels', zh: '标签', scene: '贴在物品上、写明内容的小纸条。作动词是贴标签。', tone: '中性', col: 'price labels, labels on', en: 'Read the labels before you buy.', cn: '买之前先看标签。' },
    { w: 'laboratory', zh: '实验室', scene: '做科学实验的房间。常简称 lab。', tone: '中性', col: 'a science laboratory, in the laboratory', en: 'The samples are in the laboratory.', cn: '样品在实验室里。' },
    { w: 'labour', zh: '劳动力', scene: '人做的工作，或从事劳动的人。美式拼写是 labor。', tone: '中性偏正式', col: 'manual labour, the labour of', en: 'The harvest needs extra labour.', cn: '收割需要额外的劳动力。' },
    { w: 'lace', zh: '花边', scene: '带有镂空图案的细布。它也可以是鞋带。', tone: '中性', col: 'lace curtain, a piece of lace', en: 'The dress has lace at the neck.', cn: '裙子领口有花边。' },
    { w: 'ladders', zh: '梯子', scene: '用来爬上高处的梯子。', tone: '中性', col: 'wooden ladders, climb ladders', en: 'The ladders are in the shed.', cn: '梯子在棚子里。' },
    { w: 'ladies', zh: '女士', scene: '对女性的礼貌说法，是 lady 的复数。', tone: '中性', col: 'ladies and, the ladies', en: 'The room is for ladies.', cn: '这间是女卫生间。' },
    { w: 'lagoons', zh: '泻湖', scene: '被沙洲与海隔开的浅水湖。', tone: '中性', col: 'coastal lagoons, a blue lagoon', en: 'Birds feed in the lagoons.', cn: '鸟在泻湖里觅食。' },
    { w: 'lakes', zh: '湖', scene: '被陆地围着的大片淡水。', tone: '中性', col: 'mountain lakes, by the lakes', en: 'The lakes freeze in winter.', cn: '这些湖冬天会结冰。' },
    { w: 'lamp', zh: '灯', scene: '一盏用来照明的灯。', tone: '中性', col: 'a desk lamp, turn on the lamp', en: 'The lamp is by the bed.', cn: '灯在床边。' },
    { w: 'land', zh: '陆地；国土', scene: '不是海的地面，或一个国家的土地。', tone: '中性', col: 'on land, agricultural land', en: 'The farm sits on flat land.', cn: '农场在平地上。' },
    { w: 'landmarks', zh: '地标', scene: '远远就能认出一个地方的建筑物或景物。', tone: '中性', col: 'famous landmarks, local landmarks', en: 'The tower is a landmark.', cn: '这座塔是一个地标。' },
    { w: 'lane', zh: '小巷', scene: '窄的小路或马路上的一条车道。', tone: '中性', col: 'a country lane, the bus lane', en: 'The cottage is down a lane.', cn: '村舍在一条小巷里。' },
    { w: 'languages', zh: '语言', scene: '人们用来说话和写字的那些语言。', tone: '中性', col: 'foreign languages, two languages', en: 'She speaks three languages.', cn: '她会说三种语言。' },
    { w: 'laps', zh: '一圈', scene: '绕跑道或游泳池跑完的一圈。', tone: '中性', col: 'two laps, swim laps', en: 'He ran four laps.', cn: '他跑了四圈。' },
    { w: 'laptops', zh: '笔记本电脑', scene: '可以合上带走的电脑。', tone: '中性', col: 'student laptops, use laptops', en: 'Students may use laptops.', cn: '学生可以使用笔记本电脑。' },
    { w: 'last', zh: '最近', scene: '这张卡的意思是最近，如 last week。它也可以表示最后的。', tone: '中性', col: 'last week, last year', en: 'I saw her last week.', cn: '我上周见到了她。' },
    { w: 'late', zh: '晚的', scene: '比约定时间迟，或一天里较晚的时候。它也可以表示最近的。', tone: '中性', col: 'be late, late at night', en: 'The bus is late.', cn: '公共汽车晚点了。' },
    { w: 'latters', zh: '后者的', scene: '这张卡的意思是后者。常见的词是 latter。', tone: '偏正式', col: 'the latter, the latter of', en: 'I prefer the latter.', cn: '我更喜欢后者。' },
    { w: 'laughs', zh: '笑', scene: '因为觉得有趣而笑出声。', tone: '中性', col: 'laughs at, bursts of laughs', en: 'The story made everyone laugh.', cn: '这个故事让大家都笑了。' },
    { w: 'launch', zh: '发射；启动', scene: '把船或火箭送出去，或让一个计划开始。', tone: '中性', col: 'launch a, launch the', en: 'The city will launch the new bus.', cn: '这座城市将开通新公交。' },
    { w: 'launder', zh: '洗烫', scene: '把衣服洗干净并整理好。', tone: '偏正式', col: 'launder clothes, launder money', en: 'The hotel launders the sheets.', cn: '旅馆清洗床单。' },
    { w: 'laundry', zh: '洗衣店；待洗衣物', scene: '洗衣服的地方，或堆着要洗的衣服。', tone: '中性', col: 'do the laundry, a laundry room', en: 'The laundry is in the basket.', cn: '待洗的衣服在篮子里。' },
    { w: 'lawl', zh: '法律', scene: '这张卡的意思是法律。常见拼写是 law。', tone: '中性', col: 'against the law, break the law', en: 'Dropping litter is against the law.', cn: '乱扔垃圾是违法的。' },
    { w: 'lawn', zh: '草地', scene: '房子前修剪整齐的那片草。', tone: '中性', col: 'mow the lawn, on the lawn', en: 'The children played on the lawn.', cn: '孩子们在草地上玩。' },
    { w: 'lawyer', zh: '律师', scene: '提供法律帮助、可以上法庭的人。', tone: '中性', col: 'a lawyer for, ask a lawyer', en: 'She spoke to a lawyer.', cn: '她咨询了律师。' },
    { w: 'layout', zh: '布局', scene: '房间、页面或城镇怎么安排的那张格局。', tone: '中性', col: 'the layout of, page layout', en: 'The layout of the flat is simple.', cn: '这套公寓的布局很简单。' },
    { w: 'lazy', zh: '懒惰的', scene: '能做却不愿意动手。', tone: '负面', col: 'a lazy afternoon, too lazy', en: 'Do not be lazy about the dishes.', cn: '洗碗别偷懒。' },
    { w: 'leaders', zh: '领导者', scene: '带着一群人作决定的人。', tone: '中性', col: 'team leaders, political leaders', en: 'The leaders met at noon.', cn: '领导者们中午见了面。' },
    { w: 'leadership', zh: '领导能力', scene: '带领别人把事做成的那种能力。', tone: '中性', col: 'leadership skills, under the leadership', en: 'The course builds leadership.', cn: '这门课培养领导能力。' },
    { w: 'leaflet', zh: '传单', scene: '一张薄纸，印着说明或广告。', tone: '中性', col: 'a leaflet about, hand out leaflets', en: 'Take a leaflet from the desk.', cn: '从前台拿一份传单。' },
    { w: 'learn', zh: '学习', scene: '通过练习或上课，从不会变成会。', tone: '中性', col: 'learn to, learn from', en: 'She wants to learn the piano.', cn: '她想学钢琴。' },
    { w: 'least', zh: '最少的', scene: '在所有里面数量或程度最小的那个。', tone: '中性', col: 'at least, the least of', en: 'This is the least expensive option.', cn: '这是最便宜的选择。' },
    { w: 'leather', zh: '皮革', scene: '动物皮制成的材料，用来做鞋或包。', tone: '中性', col: 'leather shoes, made of leather', en: 'The bag is leather.', cn: '这个包是皮的。' },
    { w: 'leave', zh: '离开；留下', scene: '从某处走开，或把东西留在那里。', tone: '中性', col: 'leave the, leave for', en: 'We leave at six.', cn: '我们六点离开。' },
    { w: 'leaves', zh: '树叶', scene: '树上的叶子，是 leaf 的复数。', tone: '中性', col: 'fallen leaves, green leaves', en: 'Leaves covered the path.', cn: '树叶盖住了小路。' },
    { w: 'lecturers', zh: '讲师', scene: '在大学里讲课的人。', tone: '中性', col: 'university lecturers, guest lecturers', en: 'The lecturers answered questions.', cn: '讲师们回答了问题。' },
    { w: 'lectures', zh: '演讲；讲座', scene: '一个人对着一群人讲的课或演讲。', tone: '中性', col: 'attend lectures, a series of lectures', en: 'Lectures start at nine.', cn: '讲座九点开始。' },
    { w: 'ledge', zh: '岩架', scene: '悬崖或墙上窄窄突出的一条，可以站或放东西。', tone: '中性', col: 'a window ledge, a rocky ledge', en: 'The bird sat on a ledge.', cn: '鸟停在岩架上。' },
    { w: 'leff', zh: '左边的', scene: '这张卡的意思是左边的。常见拼写是 left。', tone: '中性', col: 'on the left, the left side', en: 'The door is on the left.', cn: '门在左边。' },
    { w: 'legend', zh: '传奇', scene: '流传很久的故事，或地图上的图例。', tone: '中性', col: 'a local legend, according to legend', en: 'The cave is part of a local legend.', cn: '这个洞是当地传说的一部分。' },
    { w: 'legs', zh: '腿', scene: '用来站和走的腿。', tone: '中性', col: 'long legs, on two legs', en: 'The table has four legs.', cn: '桌子有四条腿。' },
    { w: 'leisure', zh: '闲暇', scene: '不用工作、可以自己安排的时间。', tone: '中性', col: 'leisure time, at leisure', en: 'Reading is her leisure activity.', cn: '阅读是她的闲暇活动。' },
    { w: 'lemon', zh: '柠檬', scene: '黄色、味酸的水果。', tone: '中性', col: 'a lemon tree, lemon juice', en: 'Add lemon to the fish.', cn: '给鱼加上柠檬。' },
    { w: 'length', zh: '长度', scene: '从一端到另一端有多长。', tone: '中性', col: 'the length of, in length', en: 'The table is two metres in length.', cn: '桌子长两米。' },
    { w: 'less', zh: '更少', scene: '数量比另一个更小。', tone: '中性', col: 'less than, less time', en: 'This route takes less time.', cn: '这条路花的时间更少。' },
    { w: 'lessons', zh: '课程；教训', scene: '一节节课，或从错误里得到的教训。', tone: '中性', col: 'piano lessons, learn lessons', en: 'The lessons are on Tuesday.', cn: '课在星期二。' },
    { w: 'letters', zh: '信；字母', scene: '写给别人的信，或 a、b、c 这些字母。', tone: '中性', col: 'write letters, capital letters', en: 'She writes letters to her family.', cn: '她给家人写信。' },
    { w: 'levels', zh: '水平；等级', scene: '高低的程度，或楼层、级别。', tone: '中性', col: 'water levels, skill levels', en: 'Water levels rose after the rain.', cn: '雨后水位上升了。' },
    { w: 'liaise', zh: '保持联络', scene: '在两个群体之间传话、把事情接上。', tone: '偏正式', col: 'liaise with, liaise between', en: 'She liaises with the hospital.', cn: '她和医院保持联络。' },
    { w: 'library', zh: '图书馆', scene: '可以借书、安静阅读的地方。', tone: '中性', col: 'the public library, in the library', en: 'The library closes at six.', cn: '图书馆六点关门。' },
    { w: 'licence', zh: '执照', scene: '官方允许你做某事的证件，如驾驶执照。美式拼写是 license。', tone: '中性', col: 'a driving licence, licence to', en: 'Bring your licence.', cn: '带上你的执照。' },
    { w: 'lid', zh: '盖子', scene: '盖在盒子、罐子或锅上的那一块。', tone: '中性', col: 'a lid on, put the lid', en: 'Put the lid back on the jar.', cn: '把盖子盖回罐子上。' },
    { w: 'lie', zh: '躺；说谎', scene: '身体平放着，或说不真实的话。两个意思都常见。', tone: '中性', col: 'lie down, tell a lie', en: 'Lie down if you feel tired.', cn: '累了就躺下。' },
    { w: 'life', zh: '生活；生存', scene: '人怎么过日子，或活着这件事。', tone: '中性', col: 'daily life, in life', en: 'City life is busy.', cn: '城市生活很忙碌。' },
    { w: 'lifeguards', zh: '救生员', scene: '在泳池或海边看着、准备救人的人。', tone: '中性', col: 'beach lifeguards, the lifeguards', en: 'The lifeguards watch the pool.', cn: '救生员看着游泳池。' },
    { w: 'lifestyle', zh: '生活方式', scene: '一个人平时怎么吃、怎么住、怎么过。', tone: '中性', col: 'a healthy lifestyle, lifestyle of', en: 'Walking is part of her lifestyle.', cn: '走路是她生活方式的一部分。' },
    { w: 'lightning', zh: '闪电', scene: '暴风雨里突然亮起的电光。', tone: '中性', col: 'lightning and, a flash of lightning', en: 'Lightning hit the tree.', cn: '闪电击中了那棵树。' },
    { w: 'lights', zh: '灯；光；轻的', scene: '用来照明的灯，或光。作形容词时是轻的。', tone: '中性', col: 'turn the lights, light rain', en: 'Turn the lights off.', cn: '把灯关掉。' },
    { w: 'lighting', zh: '灯光', scene: '一个地方怎么被照亮。', tone: '中性', col: 'good lighting, street lighting', en: 'The room has poor lighting.', cn: '这个房间光线不好。' },
    { w: 'likely', zh: '可能的', scene: '大概会发生，但还没确定。', tone: '中性', col: 'likely to, more likely', en: 'Rain is likely tonight.', cn: '今晚可能会下雨。' },
    { w: 'lime', zh: '石灰', scene: '一种白色粉末，用于建筑或改良土壤。它也可以是青柠。', tone: '中性', col: 'lime wash, a lime tree', en: 'They added lime to the soil.', cn: '他们往土里加了石灰。' },
    { w: 'line', zh: '路线；线', scene: '画出来的一条线，或一条路线、一行字。', tone: '中性', col: 'a line of, on the line', en: 'Draw a line under the title.', cn: '在标题下画一条线。' },
    { w: 'lining', zh: '内层', scene: '衣服或容器里面的那一层。', tone: '中性', col: 'a silk lining, the lining of', en: 'The coat has a warm lining.', cn: '这件外套有保暖里衬。' },
    { w: 'lion', zh: '狮子', scene: '体型大、有鬃毛的猫科动物。', tone: '中性', col: 'a lion and, lion cub', en: 'The lion rested in the shade.', cn: '狮子在阴凉处休息。' },
    { w: 'liquide', zh: '液体', scene: '这张卡的意思是液体。常见拼写是 liquid。', tone: '中性', col: 'a liquid form, liquid soap', en: 'Water is a liquid.', cn: '水是液体。' },
    { w: 'list', zh: '清单', scene: '把项目一条条写下来的单子。', tone: '中性', col: 'a list of, on the list', en: 'The list is on the door.', cn: '清单在门上。' },
    { w: 'literacy', zh: '读写能力', scene: '能读会写的能力。', tone: '偏正式', col: 'adult literacy, literacy skills', en: 'The class builds literacy.', cn: '这门课培养读写能力。' },
    { w: 'literature', zh: '文学', scene: '小说、诗和戏剧这些写成的作品，或关于一个题目的文献。', tone: '中性', col: 'English literature, the literature on', en: 'She studies literature.', cn: '她学文学。' },
    { w: 'lives', zh: '生活；居住；现场的', scene: '过日子，或住在某处。作形容词时是现场表演的。', tone: '中性', col: 'daily lives, live music', en: 'Music is part of their lives.', cn: '音乐是他们生活的一部分。' },
    { w: 'livestock', zh: '牲畜', scene: '农场上饲养的牛、羊等动物。通常不可数。', tone: '中性', col: 'livestock farming, raise livestock', en: 'The farm keeps livestock.', cn: '这家农场养牲畜。' },
    { w: 'lizards', zh: '蜥蜴', scene: '有鳞、四条腿的爬行动物。', tone: '中性', col: 'small lizards, lizards on', en: 'Lizards sun themselves on the wall.', cn: '蜥蜴在墙上晒太阳。' },
    { w: 'loads', zh: '装货；工作量', scene: '把货装上车，或一个人要做的工作量。', tone: '中性', col: 'heavy loads, a load of', en: 'The truck loads at dawn.', cn: '卡车黎明时装货。' },
    { w: 'locks', zh: '锁', scene: '把门或箱子锁上的装置，或上锁这个动作。', tone: '中性', col: 'door locks, locks the', en: 'Check the locks before you leave.', cn: '离开前检查锁。' },
    { w: 'logical', zh: '合逻辑的', scene: '一步接一步，理由说得通。', tone: '中性', col: 'a logical step, logical to', en: 'The plan is logical.', cn: '这个计划是合逻辑的。' },
    { w: 'logo', zh: '标识', scene: '公司或组织用来让人认出自己的图形。', tone: '中性', col: 'a company logo, the logo of', en: 'The logo is on the bag.', cn: '标识在包上。' },
    { w: 'logwood', zh: '洋苏木', scene: '一种可以提取染料的木材。', tone: '偏技术', col: 'logwood dye, logwood extract', en: 'The dye comes from logwood.', cn: '这种染料来自洋苏木。' },
    { w: 'London', zh: '伦敦', scene: '英国的首都。', tone: '专名', col: 'in London, central London', en: 'The museum is in London.', cn: '博物馆在伦敦。' },
    { w: 'lonely', zh: '寂寞的', scene: '身边没有人陪伴，心里空。', tone: '中性', col: 'feel lonely, a lonely road', en: 'She felt lonely in the new city.', cn: '她在新城市里感到寂寞。' },
    { w: 'lord', zh: '主；阁下', scene: '对贵族或神的称呼，或一位领主。', tone: '正式', col: 'the lord of, Lord and', en: 'The lord owned the land.', cn: '这位领主拥有这片地。' },
    { w: 'lorries', zh: '货车', scene: '运货的卡车，是 lorry 的复数。美式英语常说 trucks。', tone: '中性', col: 'heavy lorries, two lorries', en: 'Lorries use the side road.', cn: '货车走旁边的路。' },
    { w: 'loser', zh: '失败者', scene: '比赛或事情里没有赢的那一方。', tone: '中性', col: 'a bad loser, the loser of', en: 'There is no prize for the loser.', cn: '失败的一方没有奖。' },
    { w: 'loss', zh: '减少；损失', scene: '这张卡的释义是减少。loss 也常表示丢掉了什么。', tone: '中性', col: 'a loss of, weight loss', en: 'There was a loss of water.', cn: '水量减少了。' },
    { w: 'lost', zh: '迷失的', scene: '不知道自己在哪里，或东西找不着了。', tone: '中性', col: 'get lost, a lost bag', en: 'We got lost in the market.', cn: '我们在市场里迷路了。' },
    { w: 'lounge', zh: '休息室', scene: '可以坐下来休息的房间，如机场休息室。', tone: '中性', col: 'a departure lounge, in the lounge', en: 'Wait in the lounge.', cn: '在休息室等。' },
    { w: 'lovely', zh: '可爱的', scene: '好看或让人喜欢。', tone: '褒义', col: 'a lovely day, lovely to', en: 'It is a lovely morning.', cn: '这是个可爱的早晨。' },
    { w: 'low', zh: '低的', scene: '位置、声音或数量不高。', tone: '中性', col: 'a low wall, low prices', en: 'The wall is low.', cn: '这堵墙很矮。' },
    { w: 'luggages', zh: '行李', scene: '这张卡的意思是行李。常见的不可数名词是 luggage。', tone: '中性', col: 'hand luggage, luggage rack', en: 'Put the luggage by the door.', cn: '把行李放在门边。' },
    { w: 'lunches', zh: '午餐', scene: '中午吃的那一餐。', tone: '中性', col: 'packed lunches, school lunches', en: 'Lunches are served at noon.', cn: '午餐中午供应。' },
    { w: 'lungs', zh: '肺', scene: '胸口里用来呼吸的那一对器官。', tone: '中性', col: 'the lungs, lung disease', en: 'Smoke harms the lungs.', cn: '烟会伤害肺。' },
    { w: 'luxuries', zh: '奢侈', scene: '这张卡的意思和奢侈有关。常见的名词是 luxury。', tone: '中性', col: 'a luxury, luxury goods', en: 'A taxi was a luxury.', cn: '坐出租车是一种奢侈。' },
{ w: 'machines', zh: '机器', scene: '用来做功的机械装置。', tone: '中性', col: 'washing machines, heavy machines', en: 'The machines run all day.', cn: '这些机器整天运转。' },
    { w: 'magazines', zh: '杂志', scene: '定期出版、装订成册的刊物。', tone: '中性', col: 'fashion magazines, a pile of magazines', en: 'The magazines are on the table.', cn: '杂志在桌子上。' },
    { w: 'magic', zh: '魔法', scene: '故事里超自然的力量，或让人惊奇的戏法。', tone: '中性', col: 'magic trick, a magic show', en: 'The children loved the magic show.', cn: '孩子们喜欢这场魔术表演。' },
    { w: 'magnificent', zh: '华丽的', scene: '大而美，让人想多看一眼。', tone: '褒义', col: 'a magnificent view, magnificent building', en: 'The view from the hill is magnificent.', cn: '从山上看出去的景色非常壮丽。' },
    { w: 'magnet', zh: '磁铁', scene: '能吸住铁的那一块。', tone: '中性', col: 'a magnet for, a bar magnet', en: 'The magnet picked up the pins.', cn: '磁铁吸起了大头针。' },
    { w: 'mainland', zh: '大陆', scene: '相对岛屿而言的那一大片陆地。', tone: '中性', col: 'the mainland, on the mainland', en: 'The ferry goes to the mainland.', cn: '渡船开往大陆。' },
    { w: 'male', zh: '男性的', scene: '雄性或男性的。', tone: '中性', col: 'a male student, male workers', en: 'The team has six male players.', cn: '队里有六名男队员。' },
    { w: 'mammals s', zh: '哺乳类', scene: '这张卡的意思是哺乳动物。常见拼写是 mammals。', tone: '中性', col: 'marine mammals, small mammals', en: 'Whales are mammals.', cn: '鲸是哺乳动物。' },
    { w: 'mammoths', zh: '长毛象', scene: '已经灭绝的、身披长毛的巨象。', tone: '中性', col: 'woolly mammoths, mammoth bones', en: 'The museum shows a mammoth.', cn: '博物馆展出一头长毛象。' },
    { w: 'manager', zh: '经理', scene: '负责管理一个店、一个队或一个部门的人。', tone: '中性', col: 'the shop manager, ask the manager', en: 'Speak to the manager.', cn: '去和经理说。' },
    { w: 'mango', zh: '芒果', scene: '热带的一种甜水果。', tone: '中性', col: 'a ripe mango, mango juice', en: 'She cut a mango.', cn: '她切了一个芒果。' },
    { w: 'manoeuvre', zh: '动作', scene: '这张卡的意思是一个动作，尤其是熟练或费劲的移动。', tone: '中性', col: 'a difficult manoeuvre, manoeuvre the', en: 'Parking was a difficult manoeuvre.', cn: '停车是一个很难的动作。' },
    { w: 'manure', zh: '肥料', scene: '动物粪便做成的肥料，施到地里。', tone: '中性', col: 'farm manure, spread manure', en: 'They spread manure on the field.', cn: '他们往田里施了肥。' },
    { w: 'maps', zh: '地图', scene: '画出道路和地点的图。作动词是绘制地图。', tone: '中性', col: 'road maps, a map of', en: 'The maps are in the glove box.', cn: '地图在杂物箱里。' },
    { w: 'marble', zh: '大理石', scene: '一种可以打磨得很亮的石头，常用于地面和雕塑。', tone: '中性', col: 'marble floor, a block of marble', en: 'The floor is marble.', cn: '地板是大理石的。' },
    { w: 'March', zh: '三月', scene: '一年的第三个月。这里不是行军那个动词。', tone: '专名', col: 'in March, last March', en: 'The term ends in March.', cn: '学期三月结束。' },
    { w: 'marching', zh: '行军的', scene: '列队整齐地往前走。', tone: '中性', col: 'a marching band, marching orders', en: 'The band was marching.', cn: '乐队正在列队行进。' },
    { w: 'marginally', zh: '稍微', scene: '只多一点点，差别很小。', tone: '偏正式', col: 'marginally higher, marginally better', en: 'The new route is marginally faster.', cn: '新路线只快一点点。' },
    { w: 'marine', zh: '海的', scene: '和海、海洋生物有关的。', tone: '偏正式', col: 'marine life, marine biology', en: 'The park protects marine life.', cn: '公园保护海洋生物。' },
    { w: 'mark', zh: '标志', scene: '留下的一个记号，或给分数、做标记。', tone: '中性', col: 'a mark on, mark the', en: 'There is a mark on the wall.', cn: '墙上有一个记号。' },
    { w: 'markets', zh: '市场', scene: '买卖东西的地方，或某种商品的整个买卖。', tone: '中性', col: 'street markets, housing markets', en: 'The markets open at eight.', cn: '市场八点开门。' },
    { w: 'mask', zh: '面具', scene: '遮住脸的面具或口罩。', tone: '中性', col: 'a face mask, wear a mask', en: 'Wear a mask in the lab.', cn: '在实验室里戴口罩。' },
    { w: 'massages', zh: '按摩', scene: '用手揉按身体来放松。', tone: '中性', col: 'back massages, a massage', en: 'The clinic offers massages.', cn: '诊所提供按摩。' },
    { w: 'master', zh: '主人；大师；硕士', scene: '管事的人，技艺很高的人，或硕士学位。', tone: '中性', col: 'a master of, a masters degree', en: 'She is a master of the craft.', cn: '她是这门手艺的大师。' },
    { w: 'mate', zh: '配偶', scene: '动物的配偶，或口语里的同伴。', tone: '中性', col: 'a mate for, find a mate', en: 'The bird called to its mate.', cn: '鸟在叫它的配偶。' },
    { w: 'materials', zh: '材料', scene: '用来制作或学习的那些原料和资料。', tone: '中性', col: 'building materials, reading materials', en: 'The materials are in the box.', cn: '材料在盒子里。' },
    { w: 'mathematics', zh: '数学', scene: '研究数和形状的学科。常简称 math。', tone: '中性', col: 'study mathematics, mathematics class', en: 'Mathematics is her best subject.', cn: '数学是她最好的科目。' },
    { w: 'mature', zh: '成熟的', scene: '已经长成，或做事显得成年、稳重。', tone: '中性', col: 'a mature student, mature fruit', en: 'The fruit is mature.', cn: '水果熟了。' },
    { w: 'Mayl', zh: '五月', scene: '这张卡的意思是五月。常见拼写是 May。', tone: '专名', col: 'in May, last May', en: 'The festival is in May.', cn: '节日在五月。' },
    { w: 'mayors', zh: '市长', scene: '一个城市的最高行政负责人。', tone: '中性', col: 'city mayors, the mayor of', en: 'The mayors met in the hall.', cn: '市长们在大厅里见面。' },
    { w: 'maze', zh: '迷宫', scene: '路弯来弯去、容易走失的地方。', tone: '中性', col: 'a garden maze, through the maze', en: 'The children ran through the maze.', cn: '孩子们跑进了迷宫。' },
    { w: 'meals', zh: '一餐', scene: '一天里吃的一顿饭。', tone: '中性', col: 'three meals, hot meals', en: 'The hotel serves three meals.', cn: '旅馆供应三餐。' },
    { w: 'measures', zh: '措施；测量', scene: '为了解决问题采取的做法，或把尺寸量出来。', tone: '中性', col: 'safety measures, measures of', en: 'The school took new measures.', cn: '学校采取了新措施。' },
    { w: 'meat', zh: '肉', scene: '用来吃的动物的肉。', tone: '中性', col: 'red meat, a piece of meat', en: 'The dish has no meat.', cn: '这道菜没有肉。' },
    { w: 'medal', zh: '勋章', scene: '因为成绩或功劳挂在身上的奖牌。', tone: '中性', col: 'a gold medal, win a medal', en: 'She won a medal.', cn: '她赢得了一枚奖牌。' },
    { w: 'mediaeval', zh: '中世纪的', scene: '欧洲约五世纪到十五世纪的那段历史。另一种拼写是 medieval。', tone: '正式', col: 'mediaeval history, a mediaeval town', en: 'The church is mediaeval.', cn: '这座教堂是中世纪的。' },
    { w: 'mediator', zh: '调停者', scene: '站在争执双方中间、帮他们谈拢的人。', tone: '正式', col: 'a mediator between, act as mediator', en: 'A mediator joined the meeting.', cn: '一位调停者参加了会议。' },
    { w: 'medication', zh: '药物', scene: '医生开的、用来治疗的药。', tone: '中性', col: 'take medication, on medication', en: 'She is on medication.', cn: '她在服药。' },
    { w: 'meetings', zh: '会议', scene: '大家坐下来讨论事情的那些会。', tone: '中性', col: 'staff meetings, a series of meetings', en: 'Meetings start at nine.', cn: '会议九点开始。' },
    { w: 'megawatts', zh: '百万瓦特', scene: '功率单位，一百万瓦特。', tone: '偏技术', col: '100 megawatts, in megawatts', en: 'The plant produces 50 megawatts.', cn: '这家电厂发电五千万瓦。' },
    { w: 'melt', zh: '融化', scene: '冰或固体受热变成液体。', tone: '中性', col: 'melt the, melt in', en: 'The ice will melt by noon.', cn: '冰到中午会化。' },
    { w: 'members', zh: '成员', scene: '一个团体里的那些人。', tone: '中性', col: 'club members, family members', en: 'The members voted on Friday.', cn: '成员们星期五投票。' },
    { w: 'memories', zh: '记忆', scene: '记得住的那些往事，是 memory 的复数。', tone: '中性', col: 'childhood memories, happy memories', en: 'The trip left good memories.', cn: '这次出行留下了好的记忆。' },
    { w: 'mention', zh: '提到', scene: '说话或写字时带出一件事，不一定展开。', tone: '中性', col: 'mention that, mention to', en: 'She mentioned the delay.', cn: '她提到了这次耽搁。' },
    { w: 'mentors', zh: '导师', scene: '给经验较少的人指导的人。', tone: '中性', col: 'workplace mentors, a mentor for', en: 'New staff have mentors.', cn: '新员工有导师。' },
    { w: 'menu', zh: '菜单', scene: '列出可以点的食物，或屏幕上的选项列表。', tone: '中性', col: 'on the menu, a set menu', en: 'Fish is on the menu.', cn: '菜单上有鱼。' },
    { w: 'messages', zh: '消息', scene: '写下来或发过去的那些信息。', tone: '中性', col: 'text messages, leave messages', en: 'I left two messages.', cn: '我留了两条消息。' },
    { w: 'metal', zh: '金属', scene: '铁、铜这类又硬又能导电的材料。', tone: '中性', col: 'a metal box, made of metal', en: 'The gate is metal.', cn: '大门是金属的。' },
    { w: 'meteorological', zh: '气象的', scene: '和天气、气象观测有关的。', tone: '正式', col: 'meteorological data, a meteorological office', en: 'The station collects meteorological data.', cn: '这个站收集气象数据。' },
    { w: 'metres', zh: '米', scene: '长度单位。美式拼写是 meter。', tone: '中性', col: 'two metres, in metres', en: 'The room is four metres wide.', cn: '房间宽四米。' },
    { w: 'microphone', zh: '麦克风', scene: '把声音收进去、让别人听见的话筒。', tone: '中性', col: 'a microphone for, speak into the microphone', en: 'Speak into the microphone.', cn: '对着麦克风说。' },
    { w: 'microscopes', zh: '显微镜', scene: '用来看很小东西的仪器。', tone: '中性', col: 'lab microscopes, under microscopes', en: 'The students used microscopes.', cn: '学生们使用了显微镜。' },
    { w: 'microwave', zh: '微波炉', scene: '用微波加热食物的炉子。', tone: '中性', col: 'a microwave oven, in the microwave', en: 'Heat the soup in the microwave.', cn: '用微波炉把汤热一下。' },
    { w: 'midday', zh: '正午', scene: '一天的正中，大约十二点。', tone: '中性', col: 'at midday, midday sun', en: 'We eat at midday.', cn: '我们正午吃饭。' },
    { w: 'midnight', zh: '午夜', scene: '夜里十二点。', tone: '中性', col: 'at midnight, past midnight', en: 'The bus stops at midnight.', cn: '这路公共汽车午夜停运。' },
    { w: 'mighty', zh: '强有力的', scene: '力量很大，或规模很大。', tone: '语气强', col: 'a mighty river, mighty oaks', en: 'A mighty wind bent the trees.', cn: '一阵强风把树吹弯了。' },
    { w: 'military', zh: '军事的', scene: '和军队、战争有关的。', tone: '中性', col: 'military service, a military base', en: 'The road passes a military base.', cn: '这条路经过一座军事基地。' },
    { w: 'milk', zh: '牛奶', scene: '牛或羊产出的奶。通常不可数。', tone: '中性', col: 'a glass of milk, fresh milk', en: 'The tea has milk.', cn: '茶里有牛奶。' },
    { w: 'millimetres', zh: '毫米', scene: '长度单位，一千毫米是一米。', tone: '中性', col: 'five millimetres, in millimetres', en: 'The gap is two millimetres.', cn: '缝隙是两毫米。' },
    { w: 'millions', zh: '百万', scene: '数量到了好几百万，非常多。', tone: '中性', col: 'millions of, several millions', en: 'Millions of people use the bridge.', cn: '几百万人使用这座桥。' },
    { w: 'mime', zh: '哑剧', scene: '不说话、只用动作表演的戏。', tone: '中性', col: 'a mime artist, mime show', en: 'The mime made the children laugh.', cn: '哑剧演员把孩子们逗笑了。' },
    { w: 'mind', zh: '头脑；介意', scene: '用来想事情的头脑。作动词是介意、在乎。', tone: '中性', col: 'in mind, mind if', en: 'Do you mind if I open the window?', cn: '我开窗你介意吗？' },
    { w: 'mine', zh: '我的；矿', scene: '属于我的。作名词时是开采矿物的矿。', tone: '中性', col: 'a friend of mine, a coal mine', en: 'The book is mine.', cn: '这本书是我的。' },
    { w: 'minerals', zh: '矿物', scene: '地下的矿石，或食物里的无机营养。', tone: '中性', col: 'minerals and, rich in minerals', en: 'The water contains minerals.', cn: '这水含有矿物质。' },
    { w: 'minibus', zh: '面包车', scene: '比公共汽车小、能坐大约十人的车。', tone: '中性', col: 'a school minibus, by minibus', en: 'The minibus leaves at eight.', cn: '面包车八点开。' },
    { w: 'minimum', zh: '最小值；最小的', scene: '允许或可能的最低那个数。', tone: '中性', col: 'a minimum of, the minimum age', en: 'The minimum age is eighteen.', cn: '最低年龄是十八岁。' },
    { w: 'minority', zh: '少数', scene: '数量比另一部分少的那一群人。', tone: '中性偏正式', col: 'a minority of, ethnic minority', en: 'A minority of students walk to school.', cn: '少数学生步行上学。' },
    { w: 'minutes', zh: '分钟', scene: '六十分钟是一小时。它也可以是会议记录。', tone: '中性', col: 'ten minutes, in minutes', en: 'The talk lasts twenty minutes.', cn: '讲话持续二十分钟。' },
    { w: 'mirror', zh: '镜子', scene: '能照出人影的那一面。', tone: '中性', col: 'a bathroom mirror, in the mirror', en: 'She looked in the mirror.', cn: '她照了照镜子。' },
    { w: 'missed', zh: '错过的', scene: '没有赶上，或没有打中。', tone: '中性', col: 'a missed call, missed the', en: 'I missed the bus.', cn: '我错过了那班公共汽车。' },
    { w: 'mobile', zh: '可移动的', scene: '能带走或能移动的，如手机。', tone: '中性', col: 'a mobile phone, mobile clinic', en: 'The clinic is mobile.', cn: '这家诊所是流动的。' },
    { w: 'models', zh: '模型', scene: '按比例做成的模型，或一种样式。作动词是模拟。', tone: '中性', col: 'scale models, role models', en: 'The children built models.', cn: '孩子们做了模型。' },
    { w: 'moderates', zh: '适度的', scene: '不走极端，程度适中。', tone: '中性', col: 'a moderate price, moderate exercise', en: 'The fee is moderate.', cn: '费用适中。' },
    { w: 'modify', zh: '修改', scene: '做一些改动，使它更合适。', tone: '偏正式', col: 'modify the, modify a plan', en: 'We modified the timetable.', cn: '我们修改了时间表。' },
    { w: 'modules', zh: '模块', scene: '课程或机器里可以分开的那些单元。', tone: '中性', col: 'course modules, three modules', en: 'The course has four modules.', cn: '这门课有四个模块。' },
    { w: 'moment', zh: '片刻', scene: '很短的一会儿。', tone: '中性', col: 'a moment of, wait a moment', en: 'Wait a moment.', cn: '等一会儿。' },
    { w: 'Monday', zh: '星期一', scene: '一周的第一天。', tone: '专名', col: 'on Monday, last Monday', en: 'The shop is closed on Monday.', cn: '这家店星期一关门。' },
    { w: 'monitor', zh: '监控', scene: '持续看着，以便发现问题。它也可以是显示器。', tone: '中性', col: 'monitor the, heart monitor', en: 'Nurses monitor the patients.', cn: '护士监护病人。' },
    { w: 'monogamous', zh: '单配的', scene: '一段时期里只有一个配偶。', tone: '正式', col: 'a monogamous pair, monogamous species', en: 'The birds are monogamous.', cn: '这些鸟是单配的。' },
    { w: 'monopoly', zh: '垄断', scene: '这张卡的原文只写了“断”。monopoly 是一家独占某种买卖。', tone: '中性偏正式', col: 'a monopoly on, state monopoly', en: 'The firm had a monopoly on the route.', cn: '这家公司独占了这条线路。' },
    { w: 'months', zh: '月', scene: '一年里的那些月份。', tone: '中性', col: 'six months, for months', en: 'The course lasts six months.', cn: '这门课为期六个月。' },
    { w: 'monument', zh: '纪念碑', scene: '为了记住一件事或一个人而立的建筑物。', tone: '中性', col: 'a war monument, national monument', en: 'The monument stands in the square.', cn: '纪念碑立在广场上。' },
    { w: 'moon', zh: '月亮', scene: '夜里挂在天上的那颗卫星。', tone: '中性', col: 'the full moon, moonlight', en: 'The moon was bright.', cn: '月亮很亮。' },
    { w: 'more', zh: '更多', scene: '数量或程度比另一个更大。', tone: '中性', col: 'more than, more time', en: 'We need more time.', cn: '我们需要更多时间。' },
    { w: 'morning', zh: '早晨', scene: '从天亮到中午的那段时间。', tone: '中性', col: 'in the morning, every morning', en: 'The bus leaves in the morning.', cn: '公共汽车早上开。' },
    { w: 'most', zh: '大部分的；最多的', scene: '几乎全部，或程度最高。', tone: '中性', col: 'most of, the most', en: 'Most students take the bus.', cn: '大多数学生坐公共汽车。' },
    { w: 'mother', zh: '母亲', scene: '孩子的妈妈。', tone: '中性', col: 'her mother, a mother of', en: 'Her mother works at the hospital.', cn: '她母亲在医院工作。' },
    { w: 'motivated', zh: '有动机的', scene: '心里有理由，想把事情做成。', tone: '褒义', col: 'highly motivated, motivated by', en: 'The class is motivated.', cn: '这个班很有干劲。' },
    { w: 'motorcycle', zh: '摩托车', scene: '两个轮子、用引擎驱动的车。', tone: '中性', col: 'ride a motorcycle, a motorcycle helmet', en: 'He rides a motorcycle to work.', cn: '他骑摩托车上班。' },
    { w: 'motors', zh: '汽车；发动机', scene: '这张卡的意思是汽车。motor 也常指发动机。', tone: '中性', col: 'electric motors, motor vehicles', en: 'The motors are quiet.', cn: '这些发动机很安静。' },
    { w: 'mouse', zh: '鼠标；老鼠', scene: '电脑上的鼠标，或一种小动物。复数老鼠是 mice。', tone: '中性', col: 'a computer mouse, a field mouse', en: 'Click the mouse.', cn: '点击鼠标。' },
    { w: 'mouth', zh: '嘴', scene: '脸上用来吃和说话的部位。它也可以是河口。', tone: '中性', col: 'open your mouth, the mouth of', en: 'Do not talk with your mouth full.', cn: '嘴里有东西时别说话。' },
    { w: 'mouthpiece', zh: '喉舌；代言人', scene: '代表一个机构对外说话的人，或乐器上含在嘴里的部分。', tone: '中性', col: 'a mouthpiece for, the mouthpiece of', en: 'The paper is a mouthpiece for the club.', cn: '这份报纸是该社团的喉舌。' },
    { w: 'movers', zh: '搬运公司', scene: '帮人搬家、搬重物的公司或人。', tone: '中性', col: 'furniture movers, the movers', en: 'The movers arrive at eight.', cn: '搬家的人八点到。' },
    { w: 'mud', zh: '泥', scene: '土和水混在一起、又软又脏。', tone: '中性', col: 'mud on, covered in mud', en: 'The path is mud.', cn: '这条小路是泥。' },
    { w: 'multiple', zh: '多样的；多个的', scene: '不止一个，有好几个。', tone: '中性偏正式', col: 'multiple choice, multiple times', en: 'The form has multiple pages.', cn: '表格有多页。' },
    { w: 'museums', zh: '博物馆', scene: '收藏并展出文物或艺术品的地方。', tone: '中性', col: 'art museums, two museums', en: 'The city has three museums.', cn: '这座城市有三座博物馆。' },
    { w: 'mushrooms', zh: '蘑菇', scene: '地上长出的伞状菌类，有的可以吃。', tone: '中性', col: 'wild mushrooms, mushroom soup', en: 'The soup has mushrooms.', cn: '汤里有蘑菇。' },
    { w: 'music', zh: '音乐', scene: '有旋律和节奏的声音。', tone: '中性', col: 'live music, listen to music', en: 'She listens to music on the bus.', cn: '她在公共汽车上听音乐。' },
    { w: 'musical', zh: '音乐的', scene: '和音乐有关的，或一场歌舞剧。', tone: '中性', col: 'a musical instrument, musical theatre', en: 'The school put on a musical.', cn: '学校演了一出音乐剧。' },
    { w: 'myths', zh: '神话', scene: '很久以前流传的、解释世界的故事。', tone: '中性', col: 'ancient myths, myths about', en: 'The book retells old myths.', cn: '这本书重述了古老的神话。' },
    { w: 'napkins', zh: '餐巾纸', scene: '吃饭时用来擦嘴的纸或布。', tone: '中性', col: 'paper napkins, a stack of napkins', en: 'The napkins are on the table.', cn: '餐巾在桌子上。' },
    { w: 'narrow', zh: '狭窄的', scene: '宽度小，两边离得很近。', tone: '中性', col: 'a narrow path, narrow streets', en: 'The lane is narrow.', cn: '这条巷子很窄。' },
    { w: 'national', zh: '国家的', scene: '属于整个国家的，不是只属于一个地方。', tone: '中性', col: 'a national park, national news', en: 'The park is national.', cn: '这座公园是国家级的。' },
    { w: 'nature', zh: '自然；本性', scene: '山、河、动植物构成的自然，或一个人的本性。', tone: '中性', col: 'in nature, human nature', en: 'The children learn about nature.', cn: '孩子们学习自然。' },
    { w: 'navigate', zh: '航行', scene: '找出路并沿着它走，在海上或在城里都可以。', tone: '中性', col: 'navigate the, navigate through', en: 'The map helps you navigate the city.', cn: '这张地图帮你在城里找路。' },
    { w: 'neighbour', zh: '邻居', scene: '住在隔壁或附近的人。', tone: '中性', col: 'a neighbour of, next-door neighbour', en: 'Our neighbour watered the plants.', cn: '邻居给植物浇了水。' },
    { w: 'necessary', zh: '必要的', scene: '没有它，事情就做不成或不完整。', tone: '中性', col: 'necessary for, if necessary', en: 'A ticket is necessary.', cn: '必须有票。' },
    { w: 'necessities', zh: '必需品', scene: '生活里不能缺的那些东西，是 necessity 的复数。', tone: '中性', col: 'daily necessities, basic necessities', en: 'The shop sells necessities.', cn: '这家店卖日用品。' },
    { w: 'nectar', zh: '花蜜', scene: '花里甜的液体，蜜蜂用它酿蜜。', tone: '中性', col: 'flower nectar, nectar from', en: 'Bees collect nectar.', cn: '蜜蜂采集花蜜。' },
    { w: 'needs', zh: '需要', scene: '必须有的东西，或需要这个动作。', tone: '中性', col: 'basic needs, needs to', en: 'The plant needs water.', cn: '这株植物需要水。' },
    { w: 'negotiate', zh: '谈判', scene: '双方来回商量，直到谈出一个结果。', tone: '中性偏正式', col: 'negotiate with, negotiate a price', en: 'They negotiated the rent.', cn: '他们谈了房租。' },
    { w: 'neither', zh: '两者都不', scene: '两个里面一个也不。', tone: '中性', col: 'neither of, neither nor', en: 'Neither bus stops here.', cn: '两路公共汽车都不在这里停。' },
    { w: 'nervous', zh: '紧张的', scene: '事情还没发生，心里已经发紧。', tone: '中性', col: 'nervous about, feel nervous', en: 'She was nervous about the talk.', cn: '她为这次讲话感到紧张。' },
    { w: 'nests', zh: '巢', scene: '鸟或昆虫做来住的窝。作动词是筑巢。', tone: '中性', col: 'bird nests, build nests', en: 'The nests are in the hedge.', cn: '巢在树篱里。' },
    { w: 'nets', zh: '网', scene: '用线织成的网，用来捕鱼或隔开。', tone: '中性', col: 'fishing nets, a net of', en: 'The nets dried on the beach.', cn: '网在海滩上晾着。' },
    { w: 'networks', zh: '网络', scene: '连在一起的道路、电脑或一群人。', tone: '中性', col: 'rail networks, social networks', en: 'The town is on two networks.', cn: '这个镇子接在两套路网上。' },
    { w: 'neurological', zh: '神经病学的', scene: '和脑、神经有关的。', tone: '正式，医学', col: 'neurological tests, neurological disease', en: 'The clinic does neurological tests.', cn: '这家诊所做神经方面的检查。' },
    { w: 'never', zh: '从未', scene: '一次也没有，以后也不。', tone: '中性', col: 'never the, never before', en: 'She has never been there.', cn: '她从没去过那里。' },
    { w: 'newsletters', zh: '时事通讯', scene: '定期发给一群人的简短消息。', tone: '中性', col: 'email newsletters, a monthly newsletter', en: 'The club sends newsletters.', cn: '社团发送通讯。' },
    { w: 'newspapers', zh: '报纸', scene: '每天或每周印出来的新闻纸。', tone: '中性', col: 'daily newspapers, in the newspapers', en: 'The story was in the newspapers.', cn: '这件事上了报纸。' },
    { w: 'next', zh: '下次；靠近', scene: '紧接着的下一次，或位置挨着。', tone: '中性', col: 'next to, the next', en: 'The shop is next to the bank.', cn: '商店在银行旁边。' },
    { w: 'nieces', zh: '侄女；外甥女', scene: '兄弟姐妹的女儿。', tone: '中性', col: 'two nieces, her nieces', en: 'Her nieces visit in summer.', cn: '她的侄女夏天来看她。' },
    { w: 'nightmare', zh: '噩梦', scene: '这张卡的原文写的是梦。nightmare 是吓人的梦，或很糟的经历。', tone: '负面', col: 'a bad nightmare, a nightmare journey', en: 'The delay was a nightmare.', cn: '这次耽搁糟透了。' },
    { w: 'nights', zh: '夜晚', scene: '天黑之后的那些时段。', tone: '中性', col: 'at nights, summer nights', en: 'The shop is open on Friday nights.', cn: '这家店星期五晚上开门。' },
    { w: 'nobleman', zh: '贵族', scene: '有贵族头衔的男人。', tone: '正式', col: 'a nobleman from, the nobleman', en: 'The nobleman owned the land.', cn: '这位贵族拥有这片地。' },
    { w: 'none', zh: '没有', scene: '一个也没有。', tone: '中性', col: 'none of, none left', en: 'None of the buses came.', cn: '一辆公共汽车也没来。' },
    { w: 'nor', zh: '也不', scene: '否定之后再否定另一项。常和 neither 连用。', tone: '中性', col: 'neither nor, nor the', en: 'Neither the bus nor the train was late.', cn: '公共汽车和火车都没有晚点。' },
    { w: 'notable', zh: '显著的', scene: '值得被注意到，不普通。', tone: '偏正式', col: 'a notable change, notable for', en: 'There was a notable rise in visitors.', cn: '访客有明显增加。' },
    { w: 'notes', zh: '笔记', scene: '随手记下的字。这张卡还写了气氛，那不是 notes 的常见意思。', tone: '中性', col: 'take notes, lecture notes', en: 'Take notes during the talk.', cn: '听讲时做笔记。' },
    { w: 'noteworthy', zh: '值得注意的', scene: '值得写下来或说出来。', tone: '偏正式', col: 'noteworthy for, a noteworthy result', en: 'The result is noteworthy.', cn: '这个结果值得注意。' },
    { w: 'novels', zh: '小说', scene: '较长的虚构故事书。', tone: '中性', col: 'read novels, historical novels', en: 'She reads novels on the train.', cn: '她在火车上看小说。' },
    { w: 'November', zh: '十一月', scene: '一年的第十一个月。', tone: '专名', col: 'in November, last November', en: 'The course ends in November.', cn: '课程十一月结束。' },
    { w: 'nowadays', zh: '现今', scene: '现在这个时代，常用来和过去对比。', tone: '中性', col: 'nowadays the, nowadays people', en: 'Nowadays many people work from home.', cn: '现今很多人在家工作。' },
    { w: 'numbers', zh: '号码；数字', scene: '电话号码，或用来计数的数字。', tone: '中性', col: 'phone numbers, large numbers', en: 'Write the numbers clearly.', cn: '把数字写清楚。' },
    { w: 'nursery', zh: '托儿所', scene: '照看幼儿的地方。它也可以是培育植物的苗圃。', tone: '中性', col: 'a nursery school, plant nursery', en: 'The nursery opens at eight.', cn: '托儿所八点开门。' },
    { w: 'nursing', zh: '护理', scene: '照顾病人的工作。', tone: '中性', col: 'nursing care, a nursing course', en: 'She studies nursing.', cn: '她学护理。' },
    { w: 'nurture', zh: '养育', scene: '细心照顾，让人或植物长大。', tone: '偏正式', col: 'nurture a child, nurture talent', en: 'The school nurtures young musicians.', cn: '学校培养年轻的乐手。' },
    { w: 'nutrients', zh: '营养物', scene: '食物里身体需要的那些成分。', tone: '偏技术', col: 'soil nutrients, rich in nutrients', en: 'Vegetables provide nutrients.', cn: '蔬菜提供营养。' },
    { w: 'nutrition', zh: '营养', scene: '食物如何养活身体的这门知识，或营养本身。这张卡也标了 nutritional。', tone: '中性', col: 'good nutrition, nutrition advice', en: 'The class is about nutrition.', cn: '这节课讲营养。' },
    { w: 'nuts', zh: '坚果', scene: '核桃、杏仁这类硬壳果实。', tone: '中性', col: 'mixed nuts, a bag of nuts', en: 'The cake has nuts.', cn: '蛋糕里有坚果。' },
    { w: 'nylon', zh: '尼龙', scene: '一种人造纤维，用来做绳子和布。', tone: '中性', col: 'nylon rope, made of nylon', en: 'The bag is nylon.', cn: '这个包是尼龙的。' },
{ w: 'Obey', zh: '服从', scene: '按命令或规则去做。', tone: '中性', col: 'obey the, obey a rule', en: 'Drivers must obey the sign.', cn: '司机必须遵守这块牌子。' },
    { w: 'objects', zh: '物体；反对', scene: '看得见的物件。作动词时是反对。', tone: '中性', col: 'everyday objects, object to', en: 'The box holds small objects.', cn: '盒子里装着小物件。' },
    { w: 'obligation', zh: '义务', scene: '你必须做的事，不是可做可不做。', tone: '正式', col: 'an obligation to, under an obligation', en: 'There is an obligation to report the damage.', cn: '有义务报告这次损坏。' },
    { w: 'observatory', zh: '天文台', scene: '用来观测星星或天气的建筑。', tone: '中性', col: 'an observatory on, the observatory', en: 'The observatory sits on the hill.', cn: '天文台在山上。' },
    { w: 'observations', zh: '观察', scene: '仔细看之后记下的那些结果。', tone: '偏正式', col: 'careful observations, observations of', en: 'The report is based on observations.', cn: '报告基于观察。' },
    { w: 'obviously', zh: '明显地', scene: '一看就明白，不用再证明。', tone: '中性', col: 'obviously the, obviously not', en: 'The door is obviously locked.', cn: '门显然是锁着的。' },
    { w: 'occasional', zh: '偶然的', scene: '不是天天有，只是有时出现。', tone: '中性', col: 'an occasional visit, occasional rain', en: 'There is occasional rain.', cn: '偶尔会下雨。' },
    { w: 'occupancy', zh: '居住', scene: '有人住在或使用一个地方的状态。', tone: '正式', col: 'occupancy rate, in occupancy', en: 'The occupancy of the hotel is high.', cn: '旅馆的入住率很高。' },
    { w: 'Oceupyl', zh: '占据', scene: '这张卡的意思是占据。常见拼写是 occupy。', tone: '中性', col: 'occupy a seat, occupy the', en: 'The bags occupy two seats.', cn: '这些包占了两个座位。' },
    { w: 'October', zh: '十月', scene: '一年的第十个月。', tone: '专名', col: 'in October, last October', en: 'The course starts in October.', cn: '课程十月开始。' },
    { w: 'odd', zh: '古怪的', scene: '和平常不一样，让人觉得奇怪。它也可以表示奇数。', tone: '中性', col: 'an odd noise, odd numbers', en: 'There was an odd noise.', cn: '有一种古怪的声音。' },
    { w: 'odour', zh: '气味', scene: '鼻子闻到的味道，常指不好闻的。英式拼写。', tone: '中性', col: 'a strong odour, the odour of', en: 'There was an odour of smoke.', cn: '有一股烟味。' },
    { w: 'ofr', zh: '离开；脱掉', scene: '这张卡的意思是离开或脱掉。常见拼写是 off。', tone: '中性', col: 'take off, switch off', en: 'Take your coat off.', cn: '把外套脱掉。' },
    { w: 'Office', zh: '办公室', scene: '办事、办公的房间。', tone: '中性', col: 'an office in, the office', en: 'The office closes at five.', cn: '办公室五点关门。' },
    { w: 'olfactory', zh: '嗅觉的', scene: '和闻、鼻子有关的。', tone: '正式', col: 'the olfactory sense, olfactory nerves', en: 'The test checks the olfactory sense.', cn: '这项检查测嗅觉。' },
    { w: 'olive', zh: '橄榄', scene: '一种小而绿或黑的果实，也可以榨油。', tone: '中性', col: 'olive oil, an olive tree', en: 'The salad has olives.', cn: '沙拉里有橄榄。' },
    { w: 'Olympics', zh: '奥林匹克运动会', scene: '每四年举行的国际综合运动会。', tone: '专名', col: 'the Olympics, at the Olympics', en: 'The city hosted the Olympics.', cn: '这座城市举办了奥运会。' },
    { w: 'once', zh: '一次；曾经', scene: '只发生一次，或从前有过。', tone: '中性', col: 'once a week, once upon', en: 'The bus comes once an hour.', cn: '公共汽车一小时一班。' },
    { w: 'online', zh: '在线的', scene: '通过互联网进行，不是到现场。', tone: '中性', col: 'online classes, buy online', en: 'The form is online.', cn: '表格在网上。' },
    { w: 'onwards', zh: '向前', scene: '从某个时间或地点继续往前。', tone: '中性', col: 'from Monday onwards, move onwards', en: 'The shop is open from nine onwards.', cn: '这家店从九点起开门。' },
    { w: 'opera', zh: '歌剧', scene: '用歌唱来演的戏剧。', tone: '中性', col: 'an opera house, go to the opera', en: 'They saw an opera.', cn: '他们看了一出歌剧。' },
    { w: 'operate', zh: '运转', scene: '机器在工作，或人在操作它。它也可以表示动手术。', tone: '中性', col: 'operate the, operate on', en: 'The machine operates at night.', cn: '这台机器夜里运转。' },
    { w: 'opportunities', zh: '机会', scene: '可以去做一件有益的事的那些时机，是 opportunity 的复数。', tone: '中性', col: 'job opportunities, opportunities for', en: 'The town offers few opportunities.', cn: '这个镇子机会不多。' },
    { w: 'opposite', zh: '对面的；对立面', scene: '在另一边正对着，或完全相反的那一面。', tone: '中性', col: 'opposite the, the opposite of', en: 'The bank is opposite the station.', cn: '银行在车站对面。' },
    { w: 'optimism', zh: '乐观', scene: '相信事情会往好的方向走。', tone: '褒义', col: 'optimism about, a sense of optimism', en: 'There is optimism about the plan.', cn: '人们对这个计划感到乐观。' },
    { w: 'oral', zh: '口头的', scene: '用嘴说，不是写下来。', tone: '中性', col: 'an oral test, oral history', en: 'The test is oral.', cn: '这次考试是口试。' },
    { w: 'orange', zh: '橙；橙色', scene: '一种水果，或它的那种颜色。', tone: '中性', col: 'an orange, orange juice', en: 'She drank orange juice.', cn: '她喝了橙汁。' },
    { w: 'orchestras', zh: '管弦乐队', scene: '许多乐手一起演奏的大型乐队。', tone: '中性', col: 'symphony orchestras, youth orchestras', en: 'Two orchestras played that night.', cn: '那天晚上有两支管弦乐队演出。' },
    { w: 'organics', zh: '有机的', scene: '这张卡的意思是有机的。常见形容词是 organic。', tone: '中性', col: 'organic food, organic farming', en: 'The shop sells organic vegetables.', cn: '这家店卖有机蔬菜。' },
    { w: 'organisations', zh: '组织；机构', scene: '为了一个目的成立的团体。美式拼写是 organization。', tone: '中性', col: 'charity organisations, large organisations', en: 'Two organisations share the building.', cn: '两个机构共用这栋楼。' },
    { w: 'orientations', zh: '方向；情况介绍', scene: '面朝的方向，或给新人介绍情况的会。', tone: '中性', col: 'student orientations, the orientation of', en: 'Orientations are on Monday.', cn: '情况介绍会在星期一。' },
    { w: 'Ooutbreaksis', zh: '爆发', scene: '这张卡的意思是爆发，如疾病突然蔓延。常见词是 outbreak。', tone: '中性', col: 'an outbreak of, disease outbreak', en: 'The town reported an outbreak.', cn: '这个镇子报告了一次爆发。' },
    { w: 'outdoors', zh: '户外的', scene: '在房子外面，在露天里。', tone: '中性', col: 'outdoors activities, eat outdoors', en: 'We ate outdoors.', cn: '我们在户外吃饭。' },
    { w: 'outgoing', zh: '开朗的', scene: '喜欢和人说话、不害羞。它也可以表示即将离任的。', tone: '褒义，说性格时', col: 'an outgoing person, outgoing mail', en: 'She is outgoing and kind.', cn: '她开朗又善良。' },
    { w: 'overall', zh: '全部的', scene: '把各部分合在一起看的总体情况。', tone: '中性', col: 'the overall cost, overall the', en: 'The overall cost is low.', cn: '总费用不高。' },
    { w: 'overcome', zh: '克服', scene: '把困难或恐惧压过去，继续往前。', tone: '中性', col: 'overcome a fear, overcome the', en: 'She overcame her fear of water.', cn: '她克服了对水的恐惧。' },
    { w: 'Overdue', zh: '过期的', scene: '已经过了该还或该到的时间。', tone: '中性', col: 'overdue books, long overdue', en: 'The books are overdue.', cn: '这些书过期了。' },
    { w: 'overheads', zh: '运营费用', scene: '房租、电费这类维持运转的花费。作副词时是在头上方。', tone: '中性，商业', col: 'high overheads, overhead costs', en: 'The shop has high overheads.', cn: '这家店的运营费用很高。' },
    { w: 'overlooks', zh: '忽略；俯瞰', scene: '没有注意到，或从高处往下看。', tone: '中性', col: 'overlook a mistake, overlook the sea', en: 'The room overlooks the harbour.', cn: '这个房间俯瞰港口。' },
    { w: 'overrun', zh: '超出限度', scene: '费用或时间超过了原来定的界限。', tone: '中性', col: 'cost overrun, overrun the', en: 'The project had a cost overrun.', cn: '这个项目费用超了。' },
    { w: 'overshadow', zh: '使蒙上阴影', scene: '一件更大的事把另一件盖住，让它不显眼。', tone: '中性', col: 'overshadow the, overshadowed by', en: 'The delay overshadowed the good news.', cn: '耽搁给好消息蒙上了阴影。' },
    { w: 'Overtime', zh: '加班时间', scene: '正常工时之外继续工作的时间。', tone: '中性', col: 'work overtime, overtime pay', en: 'She worked overtime on Friday.', cn: '她星期五加了班。' },
    { w: 'overview', zh: '综述', scene: '先给一个总的看法，不展开每个细节。', tone: '中性偏正式', col: 'an overview of, a brief overview', en: 'The first page is an overview.', cn: '第一页是综述。' },
    { w: 'overwhelmingly', zh: '占绝对优势地', scene: '多数大到几乎没有异议。', tone: '语气强', col: 'overwhelmingly the, vote overwhelmingly', en: 'The plan was overwhelmingly supported.', cn: '这个计划得到了压倒性支持。' },
    { w: 'owe', zh: '欠', scene: '还没把钱或人情还清。', tone: '中性', col: 'owe somebody, owe money', en: 'I owe her ten pounds.', cn: '我欠她十英镑。' },
    { w: 'Own', zh: '拥有；自己的', scene: '东西属于你。作形容词是自己的，不是别人的。', tone: '中性', col: 'own a, your own', en: 'They own a small shop.', cn: '他们拥有一家小店。' },
    { w: 'oxygens', zh: '氧气', scene: '这张卡的意思是氧气。常见的不可数名词是 oxygen。', tone: '中性', col: 'oxygen and, pure oxygen', en: 'The tank holds oxygen.', cn: '罐子里装的是氧气。' },
    { w: 'pack', zh: '包装；包', scene: '把东西装进包里，或一个小包。', tone: '中性', col: 'pack a bag, a pack of', en: 'Pack a bag for the trip.', cn: '为这次出行装一个包。' },
    { w: 'package', zh: '包裹', scene: '包好寄出或送到的那一件。作动词是打包。', tone: '中性', col: 'a package of, package the', en: 'The package arrived on Monday.', cn: '包裹星期一到了。' },
    { w: 'pagels', zh: '页', scene: '这张卡的意思是页。常见拼写是 pages。', tone: '中性', col: 'two pages, on the page', en: 'Read the first two pages.', cn: '读前两页。' },
    { w: 'pain', zh: '疼痛', scene: '身体某处发痛。', tone: '中性', col: 'in pain, back pain', en: 'She has pain in her knee.', cn: '她膝盖疼。' },
    { w: 'painkiller', zh: '止痛药', scene: '用来减轻疼痛的药。', tone: '中性', col: 'a painkiller for, take a painkiller', en: 'The nurse gave her a painkiller.', cn: '护士给了她止痛药。' },
    { w: 'painters io', zh: '画家', scene: '这张卡的意思是画家。常见的词是 painters。', tone: '中性', col: 'portrait painters, the painters', en: 'Local painters show their work here.', cn: '当地画家在这里展出作品。' },
    { w: 'paintings', zh: '图画', scene: '用颜料画出来的那些画。', tone: '中性', col: 'oil paintings, a collection of paintings', en: 'The gallery shows new paintings.', cn: '画廊展出新画。' },
    { w: 'palace', zh: '宫殿', scene: '国王或重要人物住的宏大建筑。', tone: '中性', col: 'a royal palace, the palace', en: 'The palace is open to visitors.', cn: '宫殿对访客开放。' },
    { w: 'palm', zh: '棕榈树', scene: '一种叶子像扇子的热带树。它也可以是手掌。', tone: '中性', col: 'a palm tree, palm oil', en: 'Palms grow along the beach.', cn: '海滩边长着棕榈。' },
    { w: 'papers', zh: '报纸；文件', scene: '印出来的报纸，或需要交的文件。', tone: '中性', col: 'daily papers, identity papers', en: 'The papers are on the desk.', cn: '文件在桌子上。' },
    { w: 'parade', zh: '游行', scene: '一队人沿着街走给大家看。', tone: '中性', col: 'a street parade, parade through', en: 'The parade starts at noon.', cn: '游行中午开始。' },
    { w: 'paragraphs', zh: '段落', scene: '文章里分成的一段段。', tone: '中性', col: 'short paragraphs, two paragraphs', en: 'Write three paragraphs.', cn: '写三段。' },
    { w: 'parents', zh: '父母', scene: '父亲和母亲。', tone: '中性', col: 'her parents, parents of', en: 'Her parents live nearby.', cn: '她父母住在附近。' },
    { w: 'parking', zh: '停车', scene: '把车停好这件事，或停车的地方。', tone: '中性', col: 'car parking, no parking', en: 'Parking is free on Sunday.', cn: '星期天停车免费。' },
    { w: 'parks', zh: '公园', scene: '城里供人散步的绿地。作动词是停放车辆。', tone: '中性', col: 'public parks, park the car', en: 'The parks are busy in summer.', cn: '夏天公园里人很多。' },
    { w: 'parliaments', zh: '议会', scene: '国家里制定法律的那些议会。', tone: '正式', col: 'national parliaments, in parliament', en: 'The law was passed in parliament.', cn: '这项法律在议会通过了。' },
    { w: 'partly', zh: '部分地', scene: '只是一部分，不是全部。', tone: '中性', col: 'partly because, partly true', en: 'The delay was partly because of rain.', cn: '耽搁有一部分是因为下雨。' },
    { w: 'party', zh: '聚会', scene: '大家聚在一起玩的场合。它也可以是政党。', tone: '中性', col: 'a birthday party, a political party', en: 'The party is on Saturday.', cn: '聚会在星期六。' },
    { w: 'pass', zh: '通行证；传递', scene: '允许进入的证件，或把东西递给别人。', tone: '中性', col: 'a bus pass, pass the', en: 'Pass the salt, please.', cn: '请把盐递过来。' },
    { w: 'passengers', zh: '旅客', scene: '坐车、坐船或坐飞机的人，不是开车的人。', tone: '中性', col: 'bus passengers, passengers on', en: 'The passengers waited on the platform.', cn: '旅客在站台上等。' },
    { w: 'passive', zh: '被动的', scene: '自己不主动，等事情发生在自己身上。', tone: '中性', col: 'a passive role, passive smoking', en: 'He took a passive role.', cn: '他扮演了被动的角色。' },
    { w: 'passport', zh: '护照', scene: '出国时证明身份的那本证件。', tone: '中性', col: 'a valid passport, show your passport', en: 'Bring your passport.', cn: '带上护照。' },
    { w: 'passwords', zh: '密码', scene: '进入账户时输入的那串秘密字符。', tone: '中性', col: 'strong passwords, change passwords', en: 'Do not share passwords.', cn: '不要把密码告诉别人。' },
    { w: 'past', zh: '过去', scene: '已经发生过的时间。作介词是经过。', tone: '中性', col: 'in the past, walk past', en: 'In the past the shop was a house.', cn: '过去这家店是一所房子。' },
    { w: 'patent', zh: '专利权', scene: '国家承认你对一项发明的专有权利。', tone: '正式', col: 'a patent on, patent the', en: 'The company holds a patent.', cn: '公司持有一项专利。' },
    { w: 'paths', zh: '道路；小径', scene: '人走的小路，或一条路线。', tone: '中性', col: 'footpaths, along the path', en: 'The paths are muddy.', cn: '这些小路是泥的。' },
    { w: 'patients', zh: '病人', scene: '接受治疗的人。这里不是“耐心的”。', tone: '中性', col: 'hospital patients, patients with', en: 'The clinic sees twenty patients a day.', cn: '诊所一天看二十个病人。' },
    { w: 'patronise', zh: '保护；光顾', scene: '以居高临下的方式对待，或作为顾客去一家店。美式拼写是 patronize。', tone: '中性', col: 'patronise a shop, patronising tone', en: 'Local people patronise the market.', cn: '当地人光顾这个市场。' },
    { w: 'patterns', zh: '模式；图案', scene: '重复出现的方式，或布上的花纹。', tone: '中性', col: 'weather patterns, a pattern of', en: 'The chart shows a pattern.', cn: '图表显示出一个模式。' },
    { w: 'pavement', zh: '人行道', scene: '马路边上给人走的那一条硬地。英式英语。', tone: '中性', col: 'on the pavement, pavement cafe', en: 'Wait on the pavement.', cn: '在人行道上等。' },
    { w: 'peak', zh: '山峰；最高点', scene: '山的顶端，或数量最高的那一点。', tone: '中性', col: 'a mountain peak, at peak', en: 'Visitors peak in August.', cn: '访客在八月达到最高。' },
    { w: 'peanuts', zh: '花生', scene: '一种可以吃的坚果。', tone: '中性', col: 'roasted peanuts, a bag of peanuts', en: 'She bought peanuts.', cn: '她买了花生。' },
    { w: 'peasants', zh: '农民', scene: '旧时或农村里种地的人。语气有时偏历史。', tone: '中性', col: 'peasant farmers, local peasants', en: 'The painting shows peasants in a field.', cn: '画里是田里的农民。' },
    { w: 'pedestrians', zh: '行人', scene: '走路的人，不是开车的人。', tone: '中性', col: 'pedestrians and, pedestrian crossing', en: 'Pedestrians wait at the lights.', cn: '行人在红绿灯处等。' },
    { w: 'pencils', zh: '铅笔', scene: '用石墨写字、可以擦掉的笔。', tone: '中性', col: 'sharp pencils, a box of pencils', en: 'The pencils are on the desk.', cn: '铅笔在桌子上。' },
    { w: 'penguin', zh: '企鹅', scene: '不会飞、在水里游的黑白鸟。', tone: '中性', col: 'a penguin colony, emperor penguin', en: 'A penguin stood on the ice.', cn: '一只企鹅站在冰上。' },
    { w: 'pens', zh: '钢笔', scene: '用墨水写字的笔。', tone: '中性', col: 'ballpoint pens, a pen and', en: 'Bring two pens.', cn: '带两支笔。' },
    { w: 'per', zh: '每', scene: '按每一个来算，如每人、每小时。', tone: '中性', col: 'per person, per hour', en: 'The fee is five pounds per person.', cn: '费用是每人五英镑。' },
    { w: 'perception', zh: '知觉；认识', scene: '你如何看见和理解一件事。', tone: '偏正式', col: 'public perception, a perception of', en: 'Perception of the risk has changed.', cn: '对这种风险的看法变了。' },
    { w: 'perch', zh: '栖息', scene: '鸟停在一根细枝或栏杆上。', tone: '中性', col: 'perch on, perch above', en: 'A bird perched on the fence.', cn: '一只鸟停在篱笆上。' },
    { w: 'percussion', zh: '敲打乐器', scene: '鼓这类靠敲击发声的乐器。', tone: '中性', col: 'percussion instruments, the percussion', en: 'She plays percussion.', cn: '她演奏打击乐。' },
    { w: 'perfect', zh: '完美的', scene: '没有缺陷，刚好合适。', tone: '褒义', col: 'a perfect day, perfect for', en: 'The weather was perfect.', cn: '天气好极了。' },
{ w: 'performances', zh: '表演；表现', scene: '在观众面前演出，或做事的成绩。', tone: '中性', col: 'live performances, work performance', en: 'The performances start at seven.', cn: '演出七点开始。' },
    { w: 'perfume', zh: '香水', scene: '擦在身上的香味液体。', tone: '中性', col: 'a bottle of perfume, wear perfume', en: 'The room smelled of perfume.', cn: '房间里有香水味。' },
    { w: 'perhaps', zh: '或许', scene: '可能，但不确定。', tone: '中性', col: 'perhaps the, perhaps not', en: 'Perhaps the bus is late.', cn: '公共汽车或许晚点了。' },
    { w: 'perishable', zh: '易腐烂的', scene: '放不久就会坏的食物。', tone: '偏正式', col: 'perishable goods, perishable food', en: 'Keep perishable food cold.', cn: '把易坏的食物冷藏。' },
    { w: 'permission', zh: '许可', scene: '得到允许，可以去做。', tone: '中性', col: 'permission to, ask permission', en: 'You need permission to leave.', cn: '离开需要许可。' },
    { w: 'perspectives', zh: '观点', scene: '从不同角度看同一件事的那些看法。', tone: '偏正式', col: 'different perspectives, a perspective on', en: 'The essay compares two perspectives.', cn: '文章比较了两种观点。' },
    { w: 'personality', zh: '个性', scene: '一个人稳定的性格特点。', tone: '中性', col: 'a strong personality, personality of', en: 'She has a calm personality.', cn: '她性格平静。' },
    { w: 'petitions', zh: '请愿', scene: '很多人签名、请求官方做某事的文件。', tone: '正式', col: 'sign a petition, petitions for', en: 'Students signed a petition.', cn: '学生签了一份请愿书。' },
    { w: 'petrol', zh: '汽油', scene: '汽车烧的汽油。美式英语常说 gas 或 gasoline。', tone: '中性', col: 'a petrol station, unleaded petrol', en: 'The car needs petrol.', cn: '车需要加油。' },
    { w: 'pets', zh: '宠物', scene: '养在家里作伴的动物。', tone: '中性', col: 'household pets, keep pets', en: 'The flats do not allow pets.', cn: '这些公寓不许养宠物。' },
    { w: 'pharmacy', zh: '药房', scene: '卖药、药剂师配药的店。', tone: '中性', col: 'a local pharmacy, at the pharmacy', en: 'The pharmacy is next to the clinic.', cn: '药房在诊所旁边。' },
    { w: 'phenomenon', zh: '现象', scene: '可以观察到的一种现象。复数是 phenomena。', tone: '正式', col: 'a natural phenomenon, the phenomenon of', en: 'Lightning is a natural phenomenon.', cn: '闪电是一种自然现象。' },
    { w: 'philosopher', zh: '哲学家', scene: '研究根本问题、提出哲学看法的人。', tone: '正式', col: 'a Greek philosopher, the philosopher', en: 'The philosopher wrote about justice.', cn: '这位哲学家写过正义。' },
    { w: 'phones', zh: '电话', scene: '用来通话的电话或手机。', tone: '中性', col: 'mobile phones, on the phone', en: 'Please switch off phones.', cn: '请关闭电话。' },
    { w: 'photocopy', zh: '复印件', scene: '用复印机印出来的那一份。', tone: '中性', col: 'a photocopy of, make a photocopy', en: 'Keep a photocopy of the form.', cn: '留一份表格的复印件。' },
    { w: 'photographs', zh: '照片', scene: '用相机拍下的图像，是 photograph 的复数。', tone: '中性', col: 'old photographs, a set of photographs', en: 'The book has old photographs.', cn: '这本书有旧照片。' },
    { w: 'phrase', zh: '短语', scene: '几个词组成的、还不是完整句子的说法。', tone: '中性', col: 'a phrase for, a useful phrase', en: 'Learn this phrase.', cn: '学会这个短语。' },
    { w: 'physicians', zh: '医师', scene: '行医的医生，语气比 doctor 更正式。', tone: '正式', col: 'family physicians, the physicians', en: 'Two physicians work at the clinic.', cn: '诊所里有两位医师。' },
    { w: 'physics', zh: '物理学', scene: '研究物质、力和能量的学科。', tone: '中性', col: 'study physics, nuclear physics', en: 'Physics is taught in room 3.', cn: '物理在 3 号教室上。' },
    { w: 'pianist', zh: '钢琴家', scene: '弹钢琴的人。', tone: '中性', col: 'a concert pianist, the pianist', en: 'The pianist played first.', cn: '钢琴家第一个演奏。' },
    { w: 'piano', zh: '钢琴', scene: '用键盘敲弦发声的大乐器。', tone: '中性', col: 'play the piano, a piano lesson', en: 'The piano is in the hall.', cn: '钢琴在大厅里。' },
    { w: 'picnic', zh: '野餐', scene: '把食物带到户外吃的一餐。', tone: '中性', col: 'a picnic in, go for a picnic', en: 'We had a picnic by the lake.', cn: '我们在湖边野餐。' },
    { w: 'pieces', zh: '片段；一件', scene: '从整体上分出的一块，或一件东西。', tone: '中性', col: 'pieces of, a piece of', en: 'Cut the cake into pieces.', cn: '把蛋糕切成块。' },
    { w: 'pigeon', zh: '鸽子', scene: '城里常见的灰鸟。', tone: '中性', col: 'a pigeon on, city pigeon', en: 'A pigeon sat on the roof.', cn: '一只鸽子停在屋顶上。' },
    { w: 'pile', zh: '堆', scene: '东西一层层叠成的一堆。', tone: '中性', col: 'a pile of, pile up', en: 'There is a pile of books.', cn: '有一堆书。' },
    { w: 'pilots', zh: '飞行员', scene: '开飞机的人。', tone: '中性', col: 'airline pilots, the pilots', en: 'The pilots checked the weather.', cn: '飞行员查看了天气。' },
    { w: 'pine', zh: '松树', scene: '叶子像针的常绿树。', tone: '中性', col: 'a pine forest, pine trees', en: 'The path goes through pines.', cn: '小路穿过松林。' },
    { w: 'pink', zh: '粉红的', scene: '淡红的颜色。', tone: '中性', col: 'pink flowers, in pink', en: 'The flowers are pink.', cn: '花是粉红色的。' },
    { w: 'pipelines', zh: '管道', scene: '把油、气或水从一处送到另一处的长管。', tone: '中性', col: 'gas pipelines, oil pipelines', en: 'The pipelines cross the field.', cn: '管道穿过田地。' },
    { w: 'pipes', zh: '管子', scene: '输水或输气的管子。', tone: '中性', col: 'water pipes, copper pipes', en: 'The pipes froze in winter.', cn: '管子在冬天冻住了。' },
    { w: 'pits', zh: '深坑', scene: '地上挖出的深坑，或矿坑。', tone: '中性', col: 'gravel pits, a deep pit', en: 'The old pits are fenced off.', cn: '旧矿坑用篱笆围了起来。' },
    { w: 'pizzas', zh: '比萨饼', scene: '饼底上放料、烤熟的饼。', tone: '中性', col: 'cheese pizzas, two pizzas', en: 'They ordered two pizzas.', cn: '他们点了两个比萨。' },
    { w: 'placements', zh: '布置；实习安排', scene: '把东西放好的位置，或给学生安排的实习。', tone: '中性', col: 'work placements, product placements', en: 'The course includes placements.', cn: '这门课包括实习安排。' },
    { w: 'planet', zh: '行星', scene: '绕恒星转的天体，如地球。', tone: '中性', col: 'the planet, another planet', en: 'Earth is a planet.', cn: '地球是一颗行星。' },
    { w: 'plants', zh: '植物；工厂', scene: '地上长的植物。复数时也可以指工厂。', tone: '中性', col: 'green plants, power plants', en: 'The plants need water.', cn: '这些植物需要水。' },
    { w: 'plastic', zh: '塑料', scene: '人造的、可以做成瓶子和袋子的材料。', tone: '中性', col: 'plastic bags, made of plastic', en: 'The bottle is plastic.', cn: '这个瓶子是塑料的。' },
    { w: 'plates', zh: '碟；金属板', scene: '吃饭用的盘子，或一块金属板。', tone: '中性', col: 'dinner plates, steel plates', en: 'Put the plates in the sink.', cn: '把盘子放进水槽。' },
    { w: 'platforms', zh: '站台；平台', scene: '火车站上等车的站台，或高出地面的平台。', tone: '中性', col: 'station platforms, a platform for', en: 'Wait on platform three.', cn: '在三号站台等。' },
    { w: 'plateaux', zh: '高原', scene: '顶部较平的高地。美式复数常写 plateaus。', tone: '中性', col: 'high plateaux, on the plateau', en: 'The road crosses a plateau.', cn: '这条路穿过一片高原。' },
    { w: 'plausible', zh: '看似可信的', scene: '听起来说得通，但还没被证实。', tone: '偏正式', col: 'a plausible explanation, plausible that', en: 'The explanation is plausible.', cn: '这个解释看似可信。' },
    { w: 'play', zh: '玩；扮演；戏剧', scene: '做游戏，在戏里演一个角色，或一部戏剧。', tone: '中性', col: 'play a game, a play about', en: 'The children play in the park.', cn: '孩子们在公园里玩。' },
    { w: 'playground', zh: '游乐场', scene: '给孩子玩的那块场地。', tone: '中性', col: 'a school playground, in the playground', en: 'The playground is behind the school.', cn: '游乐场在学校后面。' },
    { w: 'pleasure', zh: '快乐', scene: '心里觉得愉快的那种感受。', tone: '褒义', col: 'a pleasure to, with pleasure', en: 'It was a pleasure to meet you.', cn: '很高兴见到你。' },
    { w: 'plenty', zh: '很多', scene: '数量足够而且有余。', tone: '中性', col: 'plenty of, plenty more', en: 'There is plenty of time.', cn: '时间很充裕。' },
    { w: 'poetry', zh: '诗', scene: '用有节奏的语言写成的诗。通常不可数。', tone: '中性', col: 'modern poetry, a book of poetry', en: 'She reads poetry.', cn: '她读诗。' },
    { w: 'points', zh: '要点', scene: '说话或文章里的那些关键点。它也可以是分数。', tone: '中性', col: 'main points, points of', en: 'Note the main points.', cn: '记下要点。' },
    { w: 'poison', zh: '毒药', scene: '吃了或沾上会伤害身体的物质。作动词是下毒。', tone: '负面', col: 'a poison, poison the', en: 'Keep the poison locked away.', cn: '把毒药锁起来。' },
    { w: 'police', zh: '警察', scene: '维持治安的警察。在英式英语里常作复数。', tone: '中性', col: 'the police, call the police', en: 'The police closed the road.', cn: '警察封闭了这条路。' },
    { w: 'policies', zh: '政策', scene: '机构定下的那些方针，是 policy 的复数。', tone: '正式', col: 'public policies, school policies', en: 'The school explained its policies.', cn: '学校解释了它的政策。' },
    { w: 'polish', zh: '抛光', scene: '把表面擦亮。它也可以是波兰的。', tone: '中性', col: 'polish the, shoe polish', en: 'Polish the table.', cn: '把桌子擦亮。' },
    { w: 'political', zh: '政治的', scene: '和政府、权力、选举有关的。', tone: '中性', col: 'political parties, a political debate', en: 'The talk was political.', cn: '这次谈话是政治性的。' },
    { w: 'politics', zh: '政治', scene: '政府如何运作、人们如何争取权力。', tone: '中性', col: 'local politics, study politics', en: 'She studies politics.', cn: '她学政治。' },
    { w: 'pond', zh: '池塘', scene: '比湖小的一池水。', tone: '中性', col: 'a garden pond, by the pond', en: 'Ducks swim on the pond.', cn: '鸭子在池塘里游。' },
    { w: 'poo', zh: '水池', scene: '这张卡的意思是水池。常见拼写是 pool。', tone: '中性', col: 'a swimming pool, the pool', en: 'The pool is indoors.', cn: '这个水池在室内。' },
    { w: 'popular', zh: '受欢迎的', scene: '很多人都喜欢。', tone: '褒义', col: 'popular with, a popular cafe', en: 'The cafe is popular.', cn: '这家咖啡馆很受欢迎。' },
    { w: 'populations', zh: '人口', scene: '住在一个地方的人的总数，或一群生物。', tone: '中性偏正式', col: 'urban populations, bird populations', en: 'City populations are growing.', cn: '城市人口在增长。' },
    { w: 'porcelain', zh: '瓷', scene: '又白又细的陶瓷。', tone: '中性', col: 'porcelain cup, fine porcelain', en: 'The cup is porcelain.', cn: '这个杯子是瓷的。' },
    { w: 'position', zh: '位置；工作', scene: '人或东西所在的地方，或一份职位。', tone: '中性', col: 'a position in, the position of', en: 'The hotel has a good position.', cn: '旅馆的位置很好。' },
    { w: 'possessions', zh: '拥有的东西', scene: '属于你的那些物品。', tone: '中性', col: 'personal possessions, possessions of', en: 'She packed her possessions.', cn: '她收拾了自己的东西。' },
    { w: 'possibilities', zh: '可能性', scene: '可能发生的那些情况，是 possibility 的复数。', tone: '中性', col: 'new possibilities, possibilities for', en: 'The plan opens new possibilities.', cn: '这个计划打开了新的可能。' },
    { w: 'postbox', zh: '邮箱', scene: '街上用来投信的箱子。', tone: '中性', col: 'a red postbox, the postbox', en: 'The postbox is on the corner.', cn: '邮箱在拐角处。' },
    { w: 'posters', zh: '海报', scene: '贴在墙上、用来宣传的大纸。', tone: '中性', col: 'film posters, put up posters', en: 'Posters cover the wall.', cn: '墙上贴满了海报。' },
    { w: 'posts', zh: '岗位；邮件；标杆', scene: '一份工作岗位，寄出的邮件，或一根柱子。', tone: '中性', col: 'job posts, fence posts', en: 'Two posts are vacant.', cn: '有两个岗位空着。' },
    { w: 'pots', zh: '盆；罐', scene: '用来种花或做饭的容器。', tone: '中性', col: 'flower pots, cooking pots', en: 'The pots are on the shelf.', cn: '罐子在架子上。' },
    { w: 'pounds', zh: '英镑；磅', scene: '英国的货币，或重量单位。作动词也可以是重击。', tone: '中性', col: 'ten pounds, in pounds', en: 'The book costs eight pounds.', cn: '这本书八英镑。' },
    { w: 'pours', zh: '倒；灌', scene: '把液体从容器里倒出来。雨很大时也可以说雨倾泻。', tone: '中性', col: 'pour the, pour into', en: 'She pours the tea.', cn: '她倒茶。' },
    { w: 'poverty', zh: '贫困', scene: '缺钱、生活困难的状态。', tone: '负面', col: 'in poverty, poverty and', en: 'The programme aims to reduce poverty.', cn: '这个项目旨在减少贫困。' },
    { w: 'powders', zh: '粉末', scene: '磨成细粉的物质。', tone: '中性', col: 'washing powders, milk powders', en: 'Mix the powders with water.', cn: '把粉末和水混在一起。' },
    { w: 'practice', zh: '实践；练习', scene: '真正去做，或为了熟练而反复练。作动词在美式英语里也写作 practice。', tone: '中性', col: 'in practice, piano practice', en: 'Practice makes the piece easier.', cn: '多练，这段就容易了。' },
    { w: 'predators', zh: '捕食者', scene: '猎食其他动物的动物。', tone: '偏正式', col: 'natural predators, predators of', en: 'Owls are predators.', cn: '猫头鹰是捕食者。' },
    { w: 'prefabricated', zh: '预制的', scene: '在工厂做好、再到现场拼装的。', tone: '偏技术', col: 'prefabricated houses, prefabricated parts', en: 'The hut is prefabricated.', cn: '这间小屋是预制的。' },
    { w: 'prefer', zh: '更喜欢', scene: '两个里面更想要这一个。', tone: '中性', col: 'prefer to, prefer something', en: 'I prefer tea to coffee.', cn: '比起咖啡，我更喜欢茶。' },
    { w: 'premiers', zh: '首要的；总理', scene: '最重要的，或一些国家的政府首脑。', tone: '正式', col: 'a premier league, the premier of', en: 'The premier visited the town.', cn: '总理访问了这个镇子。' },
    { w: 'premiere', zh: '首演', scene: '这张卡的原文写成了准备。premiere 是一部戏或电影的首次演出。', tone: '中性', col: 'a film premiere, the premiere of', en: 'The premiere is on Friday.', cn: '首演在星期五。' },
    { w: 'presentations', zh: '展示；陈述', scene: '对着一群人说明一个题目的那些报告。', tone: '中性', col: 'class presentations, give presentations', en: 'Presentations are next week.', cn: '陈述在下周。' },
    { w: 'president', zh: '总统', scene: '一个国家或一个组织的最高负责人。', tone: '中性', col: 'the president of, club president', en: 'The president opened the meeting.', cn: '会长宣布开会。' },
    { w: 'press', zh: '按；报刊', scene: '用手压下去。作名词是报纸杂志这一类。', tone: '中性', col: 'press the, the press', en: 'Press the button.', cn: '按下按钮。' },
    { w: 'pretends', zh: '假装', scene: '做出不是真的样子。', tone: '中性', col: 'pretend to, pretends that', en: 'The child pretends to be a pilot.', cn: '孩子假装自己是飞行员。' },
    { w: 'prevalent', zh: '普遍的', scene: '在一个地方很常见。', tone: '正式', col: 'prevalent in, prevalent among', en: 'The custom is prevalent in the north.', cn: '这个习俗在北方很普遍。' },
    { w: 'prevention', zh: '预防', scene: '在事情发生之前就把它挡住。', tone: '中性偏正式', col: 'crime prevention, prevention of', en: 'The talk is about fire prevention.', cn: '这次讲话讲防火。' },
    { w: 'prices', zh: '价格', scene: '买东西要付的那些钱数。', tone: '中性', col: 'food prices, high prices', en: 'Prices rose in May.', cn: '价格在五月上涨了。' },
    { w: 'prince', zh: '王子', scene: '国王或女王的儿子。', tone: '中性', col: 'a prince of, the prince', en: 'The prince visited the school.', cn: '王子访问了学校。' },
    { w: 'principles', zh: '原则', scene: '做事不肯丢掉的那些根本道理，是 principle 的复数。', tone: '正式', col: 'basic principles, principles of', en: 'The plan follows two principles.', cn: '这个计划遵循两条原则。' },
    { w: 'print l', zh: '印刷', scene: '这张卡的意思是印刷。常见拼写是 print。', tone: '中性', col: 'print a, in print', en: 'Print the form.', cn: '把表格印出来。' },
    { w: 'priorities', zh: '优先事项', scene: '应该先做的那些事，是 priority 的复数。', tone: '中性', col: 'top priorities, set priorities', en: 'Safety is one of the priorities.', cn: '安全是优先事项之一。' },
    { w: 'prison', zh: '监狱', scene: '关押罪犯的地方。', tone: '中性', col: 'in prison, a prison sentence', en: 'He was sent to prison.', cn: '他被送进了监狱。' },
    { w: 'private', zh: '私人的', scene: '只属于个人，不公开。', tone: '中性', col: 'private property, a private room', en: 'This is a private road.', cn: '这是一条私人道路。' },
    { w: 'prizes', zh: '奖品', scene: '比赛赢了得到的东西。', tone: '中性', col: 'win prizes, first prizes', en: 'The prizes are books.', cn: '奖品是书。' },
    { w: 'probably', zh: '很可能', scene: '可能性大，但还不是确定。', tone: '中性', col: 'probably the, probably not', en: 'The bus is probably late.', cn: '公共汽车很可能晚点了。' },
    { w: 'probationary', zh: '试用的', scene: '还在试用期，还没正式确定。', tone: '正式', col: 'a probationary period, probationary staff', en: 'The job has a probationary period.', cn: '这份工作有试用期。' },
    { w: 'problems', zh: '难题', scene: '需要解决的那些困难。', tone: '中性', col: 'health problems, solve problems', en: 'The plan has two problems.', cn: '这个计划有两个问题。' },
    { w: 'production', zh: '生产；产品', scene: '把东西制造出来的过程，或制造出的产量。', tone: '中性', col: 'food production, in production', en: 'Production stopped for a week.', cn: '生产停了一周。' },
    { w: 'products', zh: '产品', scene: '制造出来用来卖的那些东西。', tone: '中性', col: 'farm products, new products', en: 'The shop sells local products.', cn: '这家店卖本地产品。' },
    { w: 'professional', zh: '专业的', scene: '以此为职业，或做得符合职业标准。', tone: '中性', col: 'a professional job, professional advice', en: 'She asked for professional advice.', cn: '她征求了专业意见。' },
    { w: 'professor', zh: '教授', scene: '大学里高职位的教师。', tone: '中性', col: 'a professor of, the professor', en: 'The professor answered the question.', cn: '教授回答了这个问题。' },
    { w: 'profiles', zh: '简况；形象', scene: '对一个人或一个地方的简短介绍，或侧面轮廓。', tone: '中性', col: 'company profiles, a profile of', en: 'The booklet has staff profiles.', cn: '小册子里有员工简介。' },
    { w: 'profound', zh: '深厚的', scene: '程度很深，影响很大。', tone: '正式', col: 'a profound effect, profound knowledge', en: 'The change had a profound effect.', cn: '这个变化影响很深。' },
    { w: 'programme', zh: '节目；计划', scene: '一套安排好的活动或电视节目。美式拼写是 program。', tone: '中性', col: 'a training programme, television programme', en: 'The programme starts at eight.', cn: '节目八点开始。' },
    { w: 'projectors', zh: '投影仪', scene: '把图像投到墙上的机器。', tone: '中性', col: 'data projectors, the projector', en: 'The projectors are in the cupboard.', cn: '投影仪在柜子里。' },
    { w: 'projects', zh: '项目', scene: '有目标、有期限的那些工作。', tone: '中性', col: 'research projects, two projects', en: 'The students finished their projects.', cn: '学生完成了项目。' },
    { w: 'proliferate', zh: '增殖', scene: '数量很快变多。', tone: '正式', col: 'proliferate in, cells proliferate', en: 'Weeds proliferate in wet weather.', cn: '杂草在潮湿天气里长得很快。' },
    { w: 'promenade', zh: '海滨步行道', scene: '海边供人散步的那条路。', tone: '中性', col: 'a seafront promenade, along the promenade', en: 'We walked on the promenade.', cn: '我们在海滨步行道上走。' },
    { w: 'prominent', zh: '突出的', scene: '很显眼，或在一个领域里很有名。', tone: '中性偏正式', col: 'a prominent building, prominent in', en: 'The tower is prominent.', cn: '这座塔很显眼。' },
    { w: 'properties', zh: '性能；房产', scene: '物质的特性，或拥有的房产。是 property 的复数。', tone: '中性', col: 'physical properties, rental properties', en: 'The table lists the properties.', cn: '表格列出了这些特性。' },
    { w: 'prospects', zh: '前途', scene: '将来可能怎么样的那些前景。', tone: '中性', col: 'job prospects, future prospects', en: 'The course improves job prospects.', cn: '这门课改善就业前景。' },
    { w: 'protein', zh: '蛋白质', scene: '身体需要的一种营养，肉、蛋、豆里都有。', tone: '中性', col: 'protein in, a source of protein', en: 'Beans are rich in protein.', cn: '豆子富含蛋白质。' },
    { w: 'proud', zh: '自豪的', scene: '为自己或别人做成的事感到高兴和看得起。', tone: '褒义', col: 'proud of, feel proud', en: 'She is proud of the result.', cn: '她为这个结果感到自豪。' },
    { w: 'prove', zh: '证明', scene: '拿出证据，让人不得不相信。', tone: '中性', col: 'prove that, prove to', en: 'The test proved the water was clean.', cn: '检测证明水是干净的。' },
    { w: 'proverbs', zh: '谚语', scene: '人们常说的、含有道理的短句。', tone: '中性', col: 'old proverbs, a book of proverbs', en: 'The talk began with a proverb.', cn: '讲话以一句谚语开始。' },
    { w: 'public', zh: '公众的', scene: '属于大家，不是私人的。', tone: '中性', col: 'public transport, the public', en: 'The park is public.', cn: '这座公园是公共的。' },
    { w: 'publicise', zh: '宣传', scene: '让更多人知道。这张卡原文写成了宜传。美式拼写是 publicize。', tone: '中性', col: 'publicise an event, widely publicised', en: 'The school publicised the concert.', cn: '学校宣传了这场音乐会。' },
    { w: 'pumice', zh: '浮岩', scene: '火山喷出、很轻、能浮在水上的石头。', tone: '偏技术', col: 'pumice stone, a piece of pumice', en: 'Pumice can float.', cn: '浮岩能浮起来。' },
    { w: 'pumps', zh: '泵', scene: '把液体或气体推送出去的机器。', tone: '中性', col: 'water pumps, a pump', en: 'The pumps move water uphill.', cn: '水泵把水送上坡。' },
    { w: 'purple', zh: '紫色的', scene: '红和蓝混成的那种颜色。', tone: '中性', col: 'purple flowers, in purple', en: 'The curtains are purple.', cn: '窗帘是紫色的。' },
    { w: 'push', zh: '推动', scene: '用力把东西往前送。它也可以是施加压力。', tone: '中性', col: 'push the, push for', en: 'Push the door.', cn: '推这扇门。' },
    { w: 'puno', zh: '圆满', scene: '这张卡的原文释义是圆满。它不是一个常见英语单词，没有可靠的近义词。', tone: '词条本身', col: 'a complete result, come full circle', en: 'The work came to a complete result.', cn: '这项工作有了一个完整的结果。' },
{ w: 'qualification', zh: '资格', scene: '证明你可以做某事的证书或条件。', tone: '中性', col: 'a qualification in, gain a qualification', en: 'She has a qualification in first aid.', cn: '她有急救资格。' },
    { w: 'quantities', zh: '数量', scene: '有多少，是 quantity 的复数。', tone: '中性', col: 'large quantities, quantities of', en: 'The shop bought large quantities of rice.', cn: '这家店买了大量大米。' },
    { w: 'quarter', zh: '四分之一；一刻钟；地区', scene: '整体的四分之一，十五分钟，或城市里的一片地区。', tone: '中性', col: 'a quarter of, quarter past', en: 'It is quarter past three.', cn: '现在是三点一刻。' },
    { w: 'queen', zh: '女王', scene: '王国的女性统治者，或国王的妻子。', tone: '中性', col: 'the queen of, a queen', en: 'The queen visited the city.', cn: '女王访问了这座城市。' },
    { w: 'questionnaire', zh: '问卷', scene: '印好问题、请人填写的一张表。', tone: '中性', col: 'a questionnaire on, fill in a questionnaire', en: 'Please complete the questionnaire.', cn: '请填写问卷。' },
    { w: 'questions', zh: '问题', scene: '要人回答的那些问句。', tone: '中性', col: 'ask questions, exam questions', en: 'The students asked questions.', cn: '学生提了问题。' },
    { w: 'queue', zh: '队列', scene: '人们一个接一个排着等。', tone: '中性', col: 'a queue for, wait in a queue', en: 'There is a queue for tickets.', cn: '买票的人排着队。' },
    { w: 'quiz', zh: '测验', scene: '短小的测验，用来看看会不会。', tone: '中性', col: 'a quiz on, take a quiz', en: 'The class had a short quiz.', cn: '班上做了一次小测验。' },
    { w: 'quote', zh: '引述；报价；引文', scene: '把别人的话原样说出，或开出一个价钱。作名词是引文。', tone: '中性', col: 'quote from, a quote for', en: 'The essay quotes a short sentence.', cn: '文章引用了一句短话。' },
    { w: 'rabbits', zh: '兔子', scene: '长耳朵、会跳的小动物。', tone: '中性', col: 'wild rabbits, pet rabbits', en: 'Rabbits live in the field.', cn: '兔子住在田里。' },
    { w: 'races', zh: '竞赛', scene: '比谁更快的比赛。作动词是赛跑。', tone: '中性', col: 'boat races, race against', en: 'The races start at noon.', cn: '比赛中午开始。' },
    { w: 'radar', zh: '雷达', scene: '用无线电波探测远处物体的装置。', tone: '偏技术', col: 'radar screen, on radar', en: 'The ship uses radar.', cn: '这艘船使用雷达。' },
    { w: 'radio', zh: '收音机', scene: '收听广播的机器，或无线电广播。', tone: '中性', col: 'on the radio, a radio station', en: 'The news is on the radio.', cn: '新闻在收音机里。' },
    { w: 'raft', zh: '筏', scene: '这张卡的原文写成了筱。raft 是用木头或气囊做成的筏。', tone: '中性', col: 'a wooden raft, on a raft', en: 'They crossed the river on a raft.', cn: '他们乘筏过了河。' },
    { w: 'rainbow', zh: '彩虹', scene: '雨后阳光里出现的彩色弧。', tone: '中性', col: 'a rainbow over, see a rainbow', en: 'A rainbow appeared over the hill.', cn: '山上出现了一道彩虹。' },
    { w: 'rainforest', zh: '雨林', scene: '雨很多、树很密的森林。', tone: '中性', col: 'tropical rainforest, in the rainforest', en: 'The path goes into the rainforest.', cn: '小路通进雨林。' },
    { w: 'rainwear', zh: '雨衣', scene: '下雨时穿的防水衣服。', tone: '中性', col: 'waterproof rainwear, pack rainwear', en: 'Bring rainwear for the walk.', cn: '走路时带上雨具。' },
    { w: 'raise', zh: '提高；筹集', scene: '把高度、价格或音量往上提，或把一笔钱筹出来。', tone: '中性', col: 'raise money, raise the', en: 'The school raised money for books.', cn: '学校为买书筹了款。' },
    { w: 'ramp', zh: '坡道', scene: '代替台阶的一条斜坡，方便推行或轮椅。', tone: '中性', col: 'a wheelchair ramp, access ramp', en: 'The entrance has a ramp.', cn: '入口有一条坡道。' },
    { w: 'random', zh: '随机的', scene: '没有固定顺序，碰上哪个是哪个。', tone: '中性', col: 'at random, a random sample', en: 'Names were chosen at random.', cn: '名字是随机抽的。' },
    { w: 'rapidly', zh: '迅速地', scene: '发生得很快。', tone: '中性偏正式', col: 'rapidly growing, change rapidly', en: 'The town is growing rapidly.', cn: '这个镇子增长得很快。' },
    { w: 'rat', zh: '鼠', scene: '比老鼠更大、尾巴长的啮齿动物。', tone: '中性', col: 'a brown rat, rat poison', en: 'A rat ran under the shed.', cn: '一只老鼠跑进了棚下。' },
    { w: 'rational', zh: '合理的', scene: '按道理想，不凭一时情绪。', tone: '偏正式', col: 'a rational decision, rational about', en: 'The plan is rational.', cn: '这个计划是合理的。' },
    { w: 'reactions', zh: '反应', scene: '对一件事立刻作出的那些回应。', tone: '中性', col: 'chemical reactions, public reactions', en: 'Reactions to the plan were mixed.', cn: '对这个计划的反应不一。' },
    { w: 'read', zh: '阅读', scene: '看着文字，把意思读出来。', tone: '中性', col: 'read a book, read about', en: 'I read on the train.', cn: '我在火车上看书。' },
    { w: 'readily', zh: '容易地；乐意地', scene: '不费劲，或很愿意就做了。', tone: '偏正式', col: 'readily available, readily agree', en: 'Help was readily available.', cn: '帮助很容易得到。' },
    { w: 'ready', zh: '现成的；准备好的', scene: '已经准备好，可以开始用或开始走。', tone: '中性', col: 'ready to, ready for', en: 'Lunch is ready.', cn: '午饭好了。' },
    { w: 'rea', zh: '真实的', scene: '这张卡的意思是真实的。常见拼写是 real。', tone: '中性', col: 'a real story, real life', en: 'The story is real.', cn: '这个故事是真的。' },
    { w: 'realistic', zh: '现实的', scene: '按实际可能来看，不空想。', tone: '中性', col: 'a realistic plan, realistic about', en: 'The budget is realistic.', cn: '这个预算是现实的。' },
    { w: 'receptacles', zh: '容器；插座', scene: '用来装东西的容器。这张卡也写了花托和插座。', tone: '偏正式', col: 'waste receptacles, electrical receptacles', en: 'Put rubbish in the receptacles.', cn: '把垃圾放进容器里。' },
    { w: 'reception', zh: '接待', scene: '旅馆或办公室里迎接来人的前台，或一场招待会。', tone: '中性', col: 'at reception, a wedding reception', en: 'Ask at reception.', cn: '去前台问。' },
    { w: 'recipes', zh: '食谱', scene: '写明怎么做一道菜的说明。', tone: '中性', col: 'cake recipes, a recipe for', en: 'The recipe uses two eggs.', cn: '这个食谱用两个鸡蛋。' },
    { w: 'reckon', zh: '估计', scene: '大致算一算，或认为大概是这样。', tone: '偏口语', col: 'reckon that, reckon on', en: 'I reckon the bus is late.', cn: '我估计公共汽车晚点了。' },
    { w: 'records', zh: '记录；录音', scene: '写下来的记录，或保存的声音。作动词是记录。', tone: '中性', col: 'medical records, keep records', en: 'The school keeps records.', cn: '学校保存记录。' },
    { w: 'recreation', zh: '娱乐', scene: '工作之外用来放松的活动。', tone: '中性', col: 'outdoor recreation, recreation centre', en: 'The park is for recreation.', cn: '公园是用来休闲的。' },
    { w: 'recruit', zh: '聘用', scene: '找到人并让他加入。', tone: '中性偏正式', col: 'recruit staff, recruit for', en: 'The hospital will recruit nurses.', cn: '医院将招聘护士。' },
    { w: 'rectify', zh: '改正', scene: '把错的地方改对。', tone: '正式', col: 'rectify a mistake, rectify the', en: 'Please rectify the error.', cn: '请把这个错误改正。' },
    { w: 'recycle', zh: '回收利用', scene: '把用过的东西再做成能用的材料。', tone: '中性', col: 'recycle paper, recycle bins', en: 'Please recycle the bottles.', cn: '请把瓶子回收。' },
    { w: 'red', zh: '红的', scene: '血和草莓的那种颜色。', tone: '中性', col: 'red flowers, in red', en: 'The door is red.', cn: '门是红色的。' },
    { w: 'reduction', zh: '减少；折扣', scene: '数量变少，或价钱被减掉一块。', tone: '中性偏正式', col: 'a reduction in, price reduction', en: 'There was a reduction in noise.', cn: '噪声减少了。' },
    { w: 'refer', zh: '涉及；查阅', scene: '说到某事，或让人去查某处。常说 refer to。', tone: '中性偏正式', col: 'refer to, refer somebody to', en: 'The note refers to page ten.', cn: '这条注释涉及第十页。' },
    { w: 'referee', zh: '裁判员；介绍人', scene: '比赛里执法的人，或为你写推荐的人。', tone: '中性', col: 'the referee, a referee for', en: 'The referee stopped the game.', cn: '裁判叫停了比赛。' },
    { w: 'references', zh: '参考；介绍信', scene: '写文章时注明的出处，或求职用的介绍信。', tone: '中性', col: 'list of references, references from', en: 'Add references at the end.', cn: '在末尾加上参考资料。' },
    { w: 'reflect', zh: '反映', scene: '镜子照出影像，或一件事显示出某种情况。它也可以是思考。', tone: '中性', col: 'reflect on, reflected in', en: 'The figures reflect a change.', cn: '这些数字反映出变化。' },
    { w: 'reforms', zh: '改革', scene: '把制度改得更好的那些做法。', tone: '正式', col: 'education reforms, reforms of', en: 'The school announced reforms.', cn: '学校宣布了改革。' },
    { w: 'refreshments', zh: '点心', scene: '会上或活动里提供的小食和饮料。', tone: '中性', col: 'light refreshments, refreshments are', en: 'Refreshments are in the hall.', cn: '点心在大厅里。' },
    { w: 'refrigerate', zh: '冷藏', scene: '放进冰箱，让食物保持低温。', tone: '中性', col: 'refrigerate the, refrigerate after', en: 'Refrigerate the soup.', cn: '把汤冷藏。' },
    { w: 'refurbishment', zh: '整修', scene: '把旧房间或旧建筑修到能重新使用。', tone: '正式', col: 'under refurbishment, a refurbishment of', en: 'The hall is under refurbishment.', cn: '大厅正在整修。' },
    { w: 'regard', zh: '把……看作', scene: '你在心里把某人或某事当成某种样子。常说 regard as。', tone: '偏正式', col: 'regard as, with regard to', en: 'They regard the park as important.', cn: '他们把这座公园看得很重要。' },
    { w: 'regular', zh: '有规律的', scene: '这张卡也标了 regularly。意思是按固定间隔发生，不忽有忽无。', tone: '中性', col: 'regular buses, on a regular basis', en: 'Buses run at regular times.', cn: '公共汽车按时运行。' },
    { w: 'rehearsals', zh: '排演', scene: '正式演出前的练习。', tone: '中性', col: 'dress rehearsals, attend rehearsals', en: 'Rehearsals are on Thursday.', cn: '排演在星期四。' },
    { w: 'reinforce', zh: '加强', scene: '把已经有的东西再加牢，或把一个说法再说重。', tone: '偏正式', col: 'reinforce the, reinforce a point', en: 'The wall was reinforced.', cn: '这堵墙被加固了。' },
    { w: 'relate', zh: '涉及；有关联', scene: '两件事连得上。常说 relate to。', tone: '中性', col: 'relate to, relate the', en: 'The story relates to the town.', cn: '这个故事和这个镇子有关。' },
    { w: 'relative', zh: '相对的；亲戚', scene: '和别的相比才成立的。作名词是亲戚。', tone: '中性', col: 'a relative of, relative to', en: 'She visited a relative.', cn: '她去看了一位亲戚。' },
    { w: 'relax', zh: '放松', scene: '把紧绷的身体或心情松开。', tone: '中性', col: 'relax and, relax after', en: 'Sit down and relax.', cn: '坐下放松一下。' },
    { w: 'relay', zh: '接力赛', scene: '几个人接替着跑完的比赛。', tone: '中性', col: 'a relay race, in the relay', en: 'The school won the relay.', cn: '学校赢了接力赛。' },
    { w: 'religion', zh: '宗教', scene: '一套信仰和相关的仪式。', tone: '中性', col: 'a religion, freedom of religion', en: 'The course includes religion.', cn: '这门课包括宗教。' },
    { w: 'remains', zh: '保持；古迹', scene: '继续是原来的状态。作名词时是留下来的古迹或残骸。', tone: '中性', col: 'remains of, it remains', en: 'The remains of the wall are still there.', cn: '墙的遗迹还在。' },
    { w: 'remit', zh: '职权范围', scene: '一个人或一个机构被允许负责的那一块。', tone: '正式', col: 'within the remit, the remit of', en: 'Safety is within the remit of the committee.', cn: '安全属于委员会的职责。' },
    { w: 'remote', zh: '遥远的', scene: '离得很远，不容易到。', tone: '中性', col: 'a remote village, remote from', en: 'The village is remote.', cn: '这个村子很偏远。' },
    { w: 'renaissance', zh: '文艺复兴', scene: '欧洲历史上艺术和思想重新兴盛的时期，或一次复兴。', tone: '正式', col: 'the Renaissance, a renaissance of', en: 'The museum covers the Renaissance.', cn: '博物馆介绍文艺复兴。' },
    { w: 'renewable', zh: '可再生的', scene: '用了还能再长出来或再产生，如风和阳光。', tone: '中性偏正式', col: 'renewable energy, renewable resources', en: 'The town uses renewable energy.', cn: '这个镇子使用可再生能源。' },
    { w: 'repeat', zh: '重复', scene: '再做一次或再说一次。', tone: '中性', col: 'repeat the, repeat after', en: 'Please repeat the sentence.', cn: '请把这个句子再说一遍。' },
    { w: 'repellent', zh: '排斥的', scene: '让人或昆虫不想靠近。', tone: '中性', col: 'insect repellent, water repellent', en: 'The coat is water repellent.', cn: '这件外套能防水。' },
    { w: 'replicate', zh: '复制', scene: '把一个结果或一个过程再做一遍，看是否一样。', tone: '正式', col: 'replicate the, replicate a study', en: 'Other labs could not replicate the result.', cn: '其他实验室没能重复这个结果。' },
    { w: 'reports', zh: '报告', scene: '写成或说出来的汇报。作动词是报告。', tone: '中性', col: 'news reports, annual reports', en: 'The reports are on the desk.', cn: '报告在桌子上。' },
    { w: 'represent', zh: '代表', scene: '替一群人说话，或用一个符号表示某物。', tone: '中性偏正式', col: 'represent the, represent somebody', en: 'She represents the students.', cn: '她代表学生。' },
    { w: 'reproductions', zh: '复制品；繁殖', scene: '这张卡的释义是繁殖。reproduction 也常指复制品。', tone: '中性', col: 'animal reproduction, art reproductions', en: 'The museum sells reproductions.', cn: '博物馆出售复制品。' },
    { w: 'reptiles', zh: '爬行动物', scene: '蛇、蜥蜴、龟这类动物。', tone: '中性', col: 'marine reptiles, reptiles and', en: 'The zoo keeps reptiles.', cn: '动物园饲养爬行动物。' },
    { w: 'reputation', zh: '名声', scene: '别人对你长期形成的看法。', tone: '中性', col: 'a reputation for, good reputation', en: 'The cafe has a good reputation.', cn: '这家咖啡馆名声很好。' },
    { w: 'researchers', zh: '研究人员', scene: '做研究的那些人。', tone: '中性', col: 'university researchers, the researchers', en: 'Researchers tested the water.', cn: '研究人员检测了水。' },
    { w: 'reserve', zh: '自然保护区；预订', scene: '划出来保护自然的地方。作动词是预订。', tone: '中性', col: 'a nature reserve, reserve a seat', en: 'The lake is a nature reserve.', cn: '这个湖是自然保护区。' },
    { w: 'reservoir', zh: '水库', scene: '拦起来储存水的那一片。', tone: '中性', col: 'a reservoir of, the reservoir', en: 'The town gets water from a reservoir.', cn: '这个镇子的水来自一座水库。' },
    { w: 'residences', zh: '住宅', scene: '人居住的那些房子，语气偏正式。', tone: '正式', col: 'private residences, student residences', en: 'The street has old residences.', cn: '这条街上有老住宅。' },
    { w: 'resistant', zh: '有抵抗力的', scene: '不容易被破坏或被病菌打倒。', tone: '中性偏正式', col: 'resistant to, heat resistant', en: 'The cloth is resistant to water.', cn: '这块布能防水。' },
    { w: 'respect', zh: '尊敬；方面', scene: '看得起并礼貌对待。它也可以表示在某个方面。', tone: '中性', col: 'respect for, in this respect', en: 'Students show respect for the teacher.', cn: '学生对老师表示尊敬。' },
    { w: 'responsibilities', zh: '责任', scene: '你必须承担的那些事，是 responsibility 的复数。', tone: '中性', col: 'job responsibilities, take responsibilities', en: 'The job has clear responsibilities.', cn: '这份工作职责清楚。' },
    { w: 'restrictions', zh: '限制', scene: '不许越过的那些规定。', tone: '中性偏正式', col: 'travel restrictions, restrictions on', en: 'There are restrictions on parking.', cn: '停车有限制。' },
    { w: 'retail', zh: '零售', scene: '把商品卖给一个一个的顾客，不是批发给商店。', tone: '中性', col: 'retail price, in retail', en: 'She works in retail.', cn: '她从事零售。' },
    { w: 'retrained', zh: '再培训的', scene: '已经工作过的人又接受了新的训练。', tone: '中性', col: 'retrained staff, retrained workers', en: 'Retrained staff joined the team.', cn: '接受过再培训的员工加入了团队。' },
    { w: 'retrieve', zh: '检索；取回', scene: '把信息从系统里找出来，或把东西拿回来。', tone: '中性偏正式', col: 'retrieve data, retrieve from', en: 'She retrieved the file.', cn: '她把文件找了出来。' },
    { w: 'return', zh: '返回', scene: '回到原来的地方。作形容词是来回的。', tone: '中性', col: 'return to, a return ticket', en: 'We return at six.', cn: '我们六点返回。' },
    { w: 'reverse', zh: '相反的', scene: '方向或顺序倒过来。', tone: '中性', col: 'in reverse, the reverse of', en: 'Do the steps in reverse.', cn: '把步骤倒过来做。' },
    { w: 'reviews', zh: '回顾；评论', scene: '再看一遍，或写下对一本书、一家店的评价。', tone: '中性', col: 'book reviews, review the', en: 'The reviews were positive.', cn: '评论是正面的。' },
    { w: 'revise', zh: '修正；复习', scene: '把文字改对，或考前再看一遍。', tone: '中性', col: 'revise a text, revise for', en: 'Revise the essay before Friday.', cn: '星期五前把文章改一改。' },
    { w: 'revival', zh: '复兴', scene: '曾经冷下去的事物又热起来。', tone: '中性', col: 'a revival of, cultural revival', en: 'The town saw a revival of the market.', cn: '这个镇子的市场复兴了。' },
    { w: 'revolution', zh: '革命', scene: '一下子把制度或做法彻底改变。', tone: '语气强', col: 'a revolution in, industrial revolution', en: 'The machine started a revolution in farming.', cn: '这台机器引发了农业上的一场变革。' },
    { w: 'revolve', zh: '旋转', scene: '绕着一个中心转。', tone: '中性', col: 'revolve around, revolve on', en: 'The discussion revolved around cost.', cn: '讨论围绕着费用。' },
    { w: 'rewards', zh: '奖励', scene: '因为做成某事而得到的好处或奖品。', tone: '中性', col: 'rewards for, financial rewards', en: 'The rewards include a book.', cn: '奖励包括一本书。' },
    { w: 'rhythm', zh: '节奏', scene: '声音或动作里重复的拍子。', tone: '中性', col: 'a strong rhythm, rhythm of', en: 'The song has a clear rhythm.', cn: '这首歌节奏清楚。' },
    { w: 'ribbons', zh: '缎带', scene: '窄而软的丝带。', tone: '中性', col: 'silk ribbons, a ribbon', en: 'The gift has a ribbon.', cn: '礼物上有一条缎带。' },
    { w: 'rid', zh: '摆脱', scene: '把不想要的东西弄走。常说 get rid of。', tone: '中性', col: 'get rid of, rid of', en: 'Get rid of the old boxes.', cn: '把旧盒子处理掉。' },
    { w: 'rides', zh: '骑；游乐设施', scene: '骑马或骑车，或游乐园里坐的项目。', tone: '中性', col: 'bus rides, fairground rides', en: 'The park has three rides.', cn: '公园里有三个游乐项目。' },
    { w: 'ridiculous', zh: '荒谬的', scene: '荒唐到让人无法当真。', tone: '负面', col: 'a ridiculous idea, ridiculous price', en: 'The price is ridiculous.', cn: '这个价钱荒唐。' },
    { w: 'right', zh: '正确的；右方的', scene: '没有错。它也可以表示右边，或恰当地。', tone: '中性', col: 'the right answer, on the right', en: 'Turn right at the corner.', cn: '在拐角处向右拐。' },
    { w: 'rigs', zh: '钻探设备', scene: '用来钻井或钻油的那些装置。', tone: '偏技术', col: 'oil rigs, drilling rigs', en: 'The rigs stand offshore.', cn: '钻井平台立在近海。' },
    { w: 'ring', zh: '打电话；戒指', scene: '给某人打电话，或戴在手指上的环。它也可以是圆形。', tone: '中性', col: 'ring somebody, a gold ring', en: 'Ring me when you arrive.', cn: '你到了就给我打电话。' },
    { w: 'rinse', zh: '冲洗', scene: '用水快速冲一遍，把泡沫或脏东西冲掉。', tone: '中性', col: 'rinse the, rinse off', en: 'Rinse the plates.', cn: '把盘子冲一下。' },
    { w: 'ripe', zh: '熟的', scene: '水果长到可以吃的程度。', tone: '中性', col: 'ripe fruit, ripe tomatoes', en: 'The tomatoes are ripe.', cn: '番茄熟了。' },
    { w: 'rise', zh: '升起；增加', scene: '太阳或烟往上走，或数字变大。', tone: '中性', col: 'rise in, the sun rises', en: 'Prices rise in summer.', cn: '价格在夏天上涨。' },
    { w: 'rites', zh: '仪式', scene: '按传统做的那些仪式。', tone: '正式', col: 'funeral rites, rites of', en: 'The rites lasted all morning.', cn: '仪式持续了一上午。' },
    { w: 'rivalry', zh: '竞争', scene: '两边长期较着劲，想比过对方。', tone: '中性', col: 'rivalry between, intense rivalry', en: 'There is rivalry between the two teams.', cn: '两队之间有竞争。' },
    { w: 'rivers', zh: '河', scene: '流向海或湖的那些河。', tone: '中性', col: 'major rivers, along the river', en: 'Two rivers meet here.', cn: '两条河在这里汇合。' },
    { w: 'roads', zh: '道路', scene: '车和人走的那些路。', tone: '中性', col: 'main roads, country roads', en: 'The roads were icy.', cn: '路结了冰。' },
    { w: 'roam', zh: '漫游', scene: '没有固定路线，到处走。', tone: '中性', col: 'roam the, roam around', en: 'Sheep roam the hills.', cn: '羊在山上随意走。' },
    { w: 'robots', zh: '机器人', scene: '按程序做事的机器。', tone: '中性', col: 'industrial robots, robots in', en: 'Robots pack the boxes.', cn: '机器人给盒子装箱。' },
    { w: 'rocks', zh: '岩石；摇滚', scene: '大块的石头。它也可以指摇滚乐。', tone: '中性', col: 'sharp rocks, rock music', en: 'The path is full of rocks.', cn: '小路上满是石头。' },
    { w: 'roils', zh: '急流', scene: '这张卡的原文写得含混，意思接近一小股翻涌的急流。', tone: '中性', col: 'a roil of, turbulent water', en: 'The water roiled under the bridge.', cn: '桥下水翻涌着。' },
    { w: 'roof', zh: '屋顶', scene: '房子最上面挡住雨的那一层。', tone: '中性', col: 'on the roof, a flat roof', en: 'The roof needs repair.', cn: '屋顶需要修理。' },
    { w: 'rooftop', zh: '屋顶', scene: '屋顶上可以站或看风景的那一面。', tone: '中性', col: 'a rooftop garden, on the rooftop', en: 'They ate on the rooftop.', cn: '他们在屋顶上吃饭。' },
    { w: 'rooms', zh: '房间', scene: '房子里隔开的那些房间。', tone: '中性', col: 'hotel rooms, two rooms', en: 'The flat has three rooms.', cn: '这套公寓有三个房间。' },
    { w: 'roots', zh: '根', scene: '植物扎在土里的部分，或事情的根源。', tone: '中性', col: 'tree roots, the roots of', en: 'The roots cracked the path.', cn: '树根把小路撑裂了。' },
    { w: 'ropes', zh: '绳', scene: '用来捆或拉的绳子。', tone: '中性', col: 'thick ropes, a coil of rope', en: 'The boat is held by ropes.', cn: '船用绳子拴着。' },
    { w: 'roses', zh: '玫瑰', scene: '一种有刺、常有香味的花。', tone: '中性', col: 'red roses, a bunch of roses', en: 'She bought roses.', cn: '她买了玫瑰。' },
    { w: 'route', zh: '路线', scene: '从一处到另一处要走的那条路。', tone: '中性', col: 'the route to, bus route', en: 'This is the shortest route.', cn: '这是最短的路线。' },
    { w: 'routine', zh: '惯例', scene: '每天按同样顺序做的那一套。', tone: '中性', col: 'a daily routine, routine check', en: 'Walking is part of her routine.', cn: '走路是她日常安排的一部分。' },
    { w: 'rubber', zh: '橡胶', scene: '有弹性的材料，用来做轮胎和橡皮。', tone: '中性', col: 'rubber boots, made of rubber', en: 'The soles are rubber.', cn: '鞋底是橡胶的。' },
    { w: 'rules', zh: '规则', scene: '必须遵守的规定。作动词是统治。', tone: '中性', col: 'school rules, break the rules', en: 'Read the rules first.', cn: '先读规则。' },
    { w: 'rumour', zh: '谣言', scene: '传来传去、还没被证实的话。英式拼写。', tone: '中性', col: 'a rumour about, rumour has it', en: 'There is a rumour about the shop.', cn: '关于这家店有一个传闻。' },
    { w: 'running', zh: '奔跑', scene: '用跑的方式移动，或事情正在进行。', tone: '中性', col: 'go running, running water', en: 'She goes running in the morning.', cn: '她早上去跑步。' },
    { w: 'rust', zh: '锈', scene: '铁接触水和空气后生出的红褐色锈。作动词是生锈。', tone: '中性', col: 'rust on, covered in rust', en: 'The gate is covered in rust.', cn: '大门上满是锈。' }
  ];

  const byWord = Object.create(null);
  const bySolo = Object.create(null);
  GROUPS.forEach(group => {
    group.items.forEach(item => {
      const key = String(item.w).trim().toLowerCase();
      if (byWord[key]) throw new Error('duplicate synonym: ' + item.w);
      byWord[key] = group;
    });
  });
  SOLOS.forEach(item => {
    const key = item.w.trim().toLowerCase();
    if (byWord[key] || bySolo[key]) throw new Error('duplicate synonym: ' + item.w);
    bySolo[key] = item;
  });

  function stemKeys(key) {
    const keys = [key];
    if (key.length > 3 && key.endsWith('s') && !key.endsWith('ss')) keys.push(key.slice(0, -1));
    if (key.length > 4 && key.endsWith('es')) keys.push(key.slice(0, -2));
    if (key.length > 4 && key.endsWith('r')) keys.push(key.slice(0, -1));
    if (key.length > 5 && key.endsWith('st')) keys.push(key.slice(0, -2));
    if (key.length > 5 && key.endsWith('est')) keys.push(key.slice(0, -3));
    if (key.length > 6 && key.endsWith('est') && key.charAt(key.length - 4) === key.charAt(key.length - 5)) keys.push(key.slice(0, -4));
    if (key.length > 5 && key.endsWith('er') && key.charAt(key.length - 3) === key.charAt(key.length - 4)) keys.push(key.slice(0, -3));
    return keys;
  }
  function lookup(word) {
    const key = String(word || '').trim().toLowerCase();
    if (!key) return null;
    const keys = key.includes(' ') ? [key] : stemKeys(key);
    for (let i = 0; i < keys.length; i++) {
      const hit = byWord[keys[i]];
      if (!hit) continue;
      const stem = keys[i];
      if (stem === key) return hit;
      if (key === stem + 's' || key === stem + 'es') return hit;
      if (stem.endsWith('e') && (key === stem + 'r' || key === stem + 'st')) return hit;
      if (key === stem + 'est') return hit;
      const tail = stem.charAt(stem.length - 1);
      if (key === stem + tail + 'er' || key === stem + tail + 'est') return hit;
    }
    if (bySolo[key]) return { solo: true, item: bySolo[key] };
    return null;
  }

  root.SYNONYMS = { groups: GROUPS, solos: SOLOS, lookup: lookup };
})(this);
