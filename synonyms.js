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
      { w: 'discuss', zh: '讨论', scene: '大家围着一个具体问题交换看法，目的是把它想明白。', tone: '中性，学习工作里很常见', col: 'discuss a problem, discuss whether', en: 'The group discussed whether the plan was realistic.', cn: '小组讨论了这个计划是否现实。' }
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
      { w: 'deny', zh: '否认', scene: '别人说你做了某事，你说“不是这样”，把这件事否定掉。', tone: '中性偏正式', col: 'deny that, deny doing, deny a request', en: 'She denied taking the money.', cn: '她否认拿了那笔钱。' }
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
      { w: 'boost', zh: '提升；推动', scene: '在后面推一把，让信心、销量或能量明显高一截。', tone: '偏口语到中性，新闻里常见', col: 'boost sales, boost confidence', en: 'The campaign boosted sales in May.', cn: '这场活动提升了五月的销量。' }
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
      { w: 'hesitate', zh: '犹豫', scene: '手已经抬起来，又停住，还没决定要不要做。', tone: '中性', col: 'hesitate to, hesitate over', en: 'Do not hesitate to ask for help.', cn: '需要帮助就开口，不必犹豫。' }
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
      { w: 'interpret', zh: '解读；口译', scene: '把符号、数据或另一种语言转换成意思，像口译员在两边之间传话。', tone: '偏正式', col: 'interpret data, interpret for', en: 'How do you interpret these results?', cn: '你如何解读这些结果？' }
    ]},
    { line: '缩成要点、把样子说出来、先画出轮廓。', items: [
      { w: 'summarize', zh: '总结', scene: '一篇长文被收成几句要点，主干还在，细节放下。', tone: '中性偏正式', col: 'summarize the main points', en: 'Please summarize the main points.', cn: '请总结要点。' },
      { w: 'describe', zh: '描述', scene: '用话把看见的样子和经过画出来，让没在场的人也能想象。', tone: '中性', col: 'describe something as, describe how', en: 'Can you describe what the building looks like?', cn: '你能描述一下那栋楼什么样吗？' },
      { w: 'outline', zh: '概述', scene: '先画出轮廓，只给主要线条，细节以后再填。', tone: '偏正式', col: 'outline a plan, an outline of', en: 'She outlined the plan in five minutes.', cn: '她用五分钟概述了这个计划。' }
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
      { w: 'severe', zh: '严重的；剧烈的', scene: '程度很重，像严重的暴风雨或严厉的惩罚。', tone: '偏正式，语气更强', col: 'severe weather, severe pain', en: 'The region faced severe weather.', cn: '该地区遭遇了恶劣天气。' }
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
      { w: 'supply', zh: '供应', scene: '一批货物按量送到，仓库和商店之间的那条供应线。', tone: '中性偏正式', col: 'supply and demand, water supply', en: 'The region supplies grain to the city.', cn: '该地区向城市供应粮食。' }
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
    ]}
  ];

  const byWord = Object.create(null);
  GROUPS.forEach(group => {
    group.items.forEach(item => {
      const key = String(item.w).toLowerCase();
      if (!byWord[key]) byWord[key] = group;
    });
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
    const keys = stemKeys(key);
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
    return null;
  }

  root.SYNONYMS = { groups: GROUPS, lookup: lookup };
})(this);
