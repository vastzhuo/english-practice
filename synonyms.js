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
    ]},
    { line: '做得到、符合实际，不只是空想。', items: [
      { w: 'feasible', zh: '可行的', scene: '计划放在现实里能走通，时间、钱和人手都够得着。', tone: '偏正式', col: 'feasible to, a feasible plan', en: 'The proposal is feasible within the budget.', cn: '这项提议在预算内是可行的。' },
      { w: 'practical', zh: '实用的；实际的', scene: '不空谈，拿来就能用，像一把趁手的工具。', tone: '中性', col: 'a practical solution, practical experience', en: 'We need a practical solution, not a slogan.', cn: '我们需要一个能用的办法，不是一句口号。' },
      { w: 'pragmatic', zh: '务实的', scene: '人不拘泥于理想样子，拣眼前真正能做成的那条路走。', tone: '中性偏正式', col: 'a pragmatic approach, pragmatic about', en: 'She took a pragmatic approach to the budget.', cn: '她对预算采取了务实的做法。' }
    ]},
    { line: '长得茂盛，和事业、城市兴旺起来。', items: [
      { w: 'thrive', zh: '茁壮成长', scene: '植物在阳光下越长越旺，人或城市也在合适的条件里越来越好。', tone: '褒义', col: 'thrive on, thrive in', en: 'Small shops thrive in this neighbourhood.', cn: '小店在这个社区里生意兴旺。' },
      { w: 'flourish', zh: '兴旺；茂盛', scene: '一片田或一段经济突然繁茂，旗帜一样展开。', tone: '褒义，稍书面', col: 'flourish in, business flourished', en: 'The arts flourished in that period.', cn: '艺术在那个时期兴盛起来。' }
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
      { w: 'deduce', zh: '推断', scene: '从已有事实一步步推出没有直接看见的结论，像侦探。', tone: '正式', col: 'deduce from, deduce that', en: 'We can deduce the cause from the marks.', cn: '我们可以从痕迹推断原因。' }
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
      { w: 'option', zh: '选择；选项', scene: '菜单上的一项，你可以选也可以不选。', tone: '中性', col: 'an option to, have no option', en: 'You have the option to pay later.', cn: '你可以选择稍后付款。' }
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
      { w: 'decision', zh: '决定', scene: '几个选项里选定一个，事情就此定下来。', tone: '中性', col: 'make a decision, a decision to', en: 'The decision was announced yesterday.', cn: '这个决定昨天宣布了。' }
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
      { w: 'communicate', zh: '交流；传达', scene: '把消息从一边送到另一边，用话说、用字写或用信号。', tone: '中性', col: 'communicate with, communicate an idea', en: 'The team communicates by email.', cn: '团队通过电子邮件交流。' }
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
      { w: 'apartment', zh: '公寓', scene: '和 flat 指同一类住处，美式英语里更常用 apartment。', tone: '中性', col: 'an apartment block, rent an apartment', en: 'The apartment has two bedrooms.', cn: '这套公寓有两间卧室。' }
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
      { w: 'legislation', zh: '立法；法律', scene: '议会正在制定或已经通过的那一批法律。', tone: '正式', col: 'pass legislation, under legislation', en: 'New legislation will limit the pollution.', cn: '新的法律将限制污染。' }
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
      { w: 'wish', zh: '希望', scene: '你心里盼着一件事发生，常常自己控制不了结果。', tone: '中性', col: 'wish to, wish for', en: 'I wish to speak to the manager.', cn: '我想和经理谈谈。' }
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
      { w: 'worth', zh: '价值', scene: '它配得上多少钱，或值不值得你花时间。', tone: '中性', col: 'worth of, be worth', en: 'The painting is worth more than we thought.', cn: '这幅画比我们想的更值钱。' }
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
      { w: 'allocate', zh: '拨给；分配', scene: '预算表上，一笔钱被指定给某一个项目。', tone: '正式', col: 'allocate funds, allocate time', en: 'The school allocated more time to science.', cn: '学校给科学拨了更多时间。' }
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
      { w: 'committee', zh: '委员会', scene: '机构内部坐下来讨论并作决定的那一桌人。', tone: '中性偏正式', col: 'a committee of, the committee decided', en: 'The committee meets every month.', cn: '委员会每个月开会。' }
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
      { w: 'series', zh: '一系列；连续剧', scene: '一组相关的事件、书或剧集，一个接一个出现。', tone: '中性', col: 'a series of, a television series', en: 'There has been a series of delays.', cn: '出现了一连串耽搁。' }
    ]},
{ line: '一个是施加影响的动词，一个是已经产生的结果。', items: [
      { w: 'affect', zh: '影响', scene: '一件事伸手碰到另一件事，让它发生变化。', tone: '中性', col: 'affect the result, directly affect', en: 'The delay will affect the schedule.', cn: '这次耽搁会影响日程。' },
      { w: 'effect', zh: '影响；效果', scene: '变化已经出现，你看见的是结果本身。它也可以表示效果。', tone: '中性偏正式', col: 'the effect of, a side effect', en: 'The effect of the delay was clear.', cn: '耽搁造成的影响很明显。' }
    ]},
    { line: '算进范围里，和被卷进一件事。', items: [
      { w: 'include', zh: '包括', scene: '一份名单或一个整体里，这一项也被算进去。', tone: '中性', col: 'include in, including', en: 'The price includes lunch.', cn: '这个价格包括午餐。' },
      { w: 'involve', zh: '涉及', scene: '你被拉进这件事里，不只是名字出现在名单上。', tone: '中性', col: 'involve in, involve doing', en: 'The job involves talking to customers.', cn: '这份工作需要和顾客交谈。' }
    ]},
    { line: '从某处来，源头在别处。', items: [
      { w: 'derive', zh: '源自', scene: '一条线从源头拉到现在这个词或这个结果上。', tone: '正式', col: 'derive from, derived from', en: 'The word derives from Latin.', cn: '这个词源自拉丁语。' },
      { w: 'originate', zh: '起源', scene: '事情在某一个地方或某一个时间开始出现。', tone: '正式', col: 'originate in, originate from', en: 'The custom originated in the north.', cn: '这个习俗起源于北方。' }
    ]},
    { line: '若干部分合在一起，形成整体。', items: [
      { w: 'constitute', zh: '构成', scene: '几块拼上去，整体就成立了。', tone: '正式', col: 'constitute a majority, constitute a threat', en: 'Women constitute half of the staff.', cn: '女性占员工的一半。' },
      { w: 'compose', zh: '组成；创作', scene: '部分组成整体。它也可以表示写一首曲子或一篇文字。', tone: '正式', col: 'be composed of, compose a letter', en: 'The team is composed of six people.', cn: '这个团队由六个人组成。' }
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
      { w: 'overseas', zh: '海外的', scene: '隔着海的另一个国家，常用来形容海外的工作或亲戚。', tone: '中性', col: 'overseas students, travel overseas', en: 'She has relatives overseas.', cn: '她有亲戚在海外。' }
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
      { w: 'terrible', zh: '可怕的', scene: '事情糟得或吓得让人不想再碰上。', tone: '中性，语气强', col: 'a terrible storm, terrible news', en: 'There was a terrible storm.', cn: '来了一场可怕的暴风雨。' }
    ]},
    { line: '意见冲到一起。argument 可以变成争吵，debate 是有规矩的辩论，dispute 是争执。', items: [
      { w: 'argument', zh: '论证；争吵', scene: '两边各说各的理由。声音高了，就变成争吵。', tone: '中性', col: 'an argument about, an argument that', en: 'They had an argument about the bill.', cn: '他们为账单争吵起来。' },
      { w: 'debate', zh: '辩论', scene: '两边按次序发言，把一个公共问题说清楚。', tone: '偏正式', col: 'a debate on, debate whether', en: 'The class held a debate on transport.', cn: '全班就交通问题进行了辩论。' },
      { w: 'dispute', zh: '争执', scene: '双方都不让，事情停在“到底该听谁的”。', tone: '偏正式', col: 'a dispute over, in dispute', en: 'There is a dispute over the boundary.', cn: '边界有争议。' }
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
      { w: 'incident', zh: '事件', scene: '被记录下来的一件不寻常的事，不一定有人受伤。', tone: '偏正式', col: 'an incident at, a serious incident', en: 'The school reported the incident.', cn: '学校报告了这件事。' }
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
    { w: 'ABMS', zh: '影响', scene: '这张卡的释义是“影响”。ABMS 不是常见英语单词，没有可靠的近义词。', tone: '词条本身', col: 'an effect on, an impact on', en: 'The delay had an effect on the plan.', cn: '这次耽搁对计划产生了影响。' }
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
