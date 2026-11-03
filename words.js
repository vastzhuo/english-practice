// word bank
const WORDS = [
{
"w": "break the ice",
"m": "打破僵局 — to start a conversation in a relaxed way",
"x": "He told a joke to break the ice at the meeting.",
"x2": "Asking about the weekend is an easy way to break the ice.",
"c": "Core vocabulary",
"ipa": "/breɪk ðə aɪs/"
},
{
"w": "resilient",
"m": "有韧性的 — able to recover quickly from difficulties",
"x": "Kids are surprisingly resilient after setbacks.",
"x2": "Our team stayed resilient during the tough quarter.",
"c": "Core vocabulary",
"ipa": "/rɪˈzɪljənt/"
},
{
"w": "follow up",
"m": "跟进 — to contact someone again about something",
"x": "I'll follow up with you by email tomorrow.",
"x2": "Did you follow up on the client's request?",
"c": "Core vocabulary",
"ipa": "/ˈfɑloʊ əp/"
},
{
"w": "meticulous",
"m": "一丝不苟的 — very careful and precise",
"x": "She is meticulous about checking every number.",
"x2": "The report was meticulous and well organised.",
"c": "Core vocabulary",
"ipa": "/məˈtɪkjələs/"
},
{
"w": "on the same page",
"m": "达成共识 — in agreement; understanding the same thing",
"x": "Let's make sure we're on the same page before we start.",
"x2": "After the call, everyone was on the same page.",
"c": "Core vocabulary",
"ipa": "/ɔn ðə seɪm peɪʤ/"
},
{
"w": "candid",
"m": "坦率的 — honest and direct",
"x": "Thanks for your candid feedback.",
"x2": "He gave a candid answer about the risks.",
"c": "Core vocabulary",
"ipa": "/ˈkændɪd/"
},
{
"w": "figure out",
"m": "弄明白 — to understand or solve",
"x": "I can't figure out how this app works.",
"x2": "We'll figure out a plan together.",
"c": "Core vocabulary",
"ipa": "/ˈfɪgjər aʊt/"
},
{
"w": "ambiguous",
"m": "模棱两可的 — having more than one possible meaning",
"x": "The instructions were ambiguous, so I asked for clarification.",
"x2": "His reply was ambiguous: yes or no?",
"c": "Core vocabulary",
"ipa": "/æmˈbɪgjuəs/"
},
{
"w": "get the hang of",
"m": "掌握窍门 — to learn how to do something",
"x": "You'll get the hang of driving after a few lessons.",
"x2": "I'm finally getting the hang of this software.",
"c": "Core vocabulary",
"ipa": "/gɪt ðə hæŋ əv/"
},
{
"w": "thrive",
"m": "茁壮成长 — to grow or develop well",
"x": "Plants thrive in sunlight.",
"x2": "She thrives under pressure.",
"c": "Core vocabulary",
"ipa": "/θraɪv/"
},
{
"w": "a piece of cake",
"m": "小菜一碟 — something very easy",
"x": "The exam was a piece of cake.",
"x2": "Setting up the phone was a piece of cake.",
"c": "Core vocabulary",
"ipa": "/ə pis əv keɪk/"
},
{
"w": "diligent",
"m": "勤奋的 — showing care and effort in work",
"x": "He's a diligent student who never misses class.",
"x2": "Diligent practice builds fluency.",
"c": "Core vocabulary",
"ipa": "/ˈdɪlɪʤənt/"
},
{
"w": "run out of",
"m": "用完 — to use all of something",
"x": "We ran out of milk this morning.",
"x2": "I'm running out of time to finish this.",
"c": "Core vocabulary",
"ipa": "/rən aʊt əv/"
},
{
"w": "feasible",
"m": "可行的 — possible and practical to do",
"x": "Is it feasible to finish by Friday?",
"x2": "The plan is ambitious but feasible.",
"c": "Core vocabulary",
"ipa": "/ˈfizəbəl/"
},
{
"w": "keep in mind",
"m": "记住 — to remember or consider",
"x": "Keep in mind that the shop closes at six.",
"x2": "Please keep in mind the budget limit.",
"c": "Core vocabulary",
"ipa": "/kip ɪn maɪnd/"
},
{
"w": "concise",
"m": "简洁的 — short and clear",
"x": "Keep your emails concise.",
"x2": "She gave a concise summary of the book.",
"c": "Core vocabulary",
"ipa": "/kənˈsaɪs/"
},
{
"w": "call it a day",
"m": "今天到此为止 — to stop working for now",
"x": "We've done enough; let's call it a day.",
"x2": "After ten hours, he finally called it a day.",
"c": "Core vocabulary",
"ipa": "/kɔl ɪt ə deɪ/"
},
{
"w": "reluctant",
"m": "不情愿的 — unwilling or hesitant",
"x": "She was reluctant to speak in public.",
"x2": "I'm reluctant to spend that much money.",
"c": "Core vocabulary",
"ipa": "/rɪˈləktənt/"
},
{
"w": "look forward to",
"m": "期待 — to feel happy about a future event",
"x": "I look forward to meeting you.",
"x2": "We're looking forward to the holidays.",
"c": "Core vocabulary",
"ipa": "/lʊk ˈfɔrwərd tɪ/"
},
{
"w": "versatile",
"m": "多才多艺的 — able to do many different things",
"x": "A versatile tool for any kitchen.",
"x2": "He's a versatile player who can play any position.",
"c": "Core vocabulary",
"ipa": "/ˈvərsətəl/"
},
{
"w": "under the weather",
"m": "身体不适 — feeling a bit sick",
"x": "I'm feeling under the weather today.",
"x2": "She stayed home because she was under the weather.",
"c": "Core vocabulary",
"ipa": "/ˈəndər ðə ˈwɛðər/"
},
{
"w": "inevitable",
"m": "不可避免的 — certain to happen",
"x": "Change is inevitable.",
"x2": "Some mistakes are inevitable when learning.",
"c": "Core vocabulary",
"ipa": "/ˌɪˈnɛvətəbəl/"
},
{
"w": "bring up",
"m": "提出（话题） — to mention a topic",
"x": "She brought up an interesting point.",
"x2": "Don't bring up politics at dinner.",
"c": "Core vocabulary",
"ipa": "/brɪŋ əp/"
},
{
"w": "prioritize",
"m": "优先处理 — to decide what is most important",
"x": "Prioritize the urgent tasks first.",
"x2": "You need to prioritize your health.",
"c": "Core vocabulary",
"ipa": "/praɪˈɔrəˌtaɪz/"
},
{
"w": "hit the road",
"m": "上路，出发 — to leave or start a journey",
"x": "It's late; we should hit the road.",
"x2": "We'll hit the road at 7 a.m.",
"c": "Core vocabulary",
"ipa": "/hɪt ðə roʊd/"
},
{
"w": "eloquent",
"m": "雄辩的 — fluent and persuasive in speaking or writing",
"x": "She gave an eloquent speech.",
"x2": "His letter was short but eloquent.",
"c": "Core vocabulary",
"ipa": "/ˈɛləkwənt/"
},
{
"w": "put off",
"m": "推迟 — to postpone",
"x": "Don't put off your homework.",
"x2": "They put off the meeting until next week.",
"c": "Core vocabulary",
"ipa": "/pʊt ɔf/"
},
{
"w": "substantial",
"m": "大量的 — large in amount or importance",
"x": "There was a substantial increase in sales.",
"x2": "He made a substantial contribution to the project.",
"c": "Core vocabulary",
"ipa": "/səbˈstænʃəl/"
},
{
"w": "the ball is in your court",
"m": "该你做决定了 — it's your turn to act or decide",
"x": "I've made my offer; the ball is in your court.",
"x2": "The ball is in their court now.",
"c": "Core vocabulary"
},
{
"w": "genuine",
"m": "真诚的 — real and sincere",
"x": "She showed genuine interest in my work.",
"x2": "Is this a genuine leather bag?",
"c": "Core vocabulary",
"ipa": "/ˈʤɛnjuˌaɪn/"
},
{
"w": "come up with",
"m": "想出 — to think of an idea",
"x": "We came up with a great name.",
"x2": "Can you come up with a solution?",
"c": "Core vocabulary",
"ipa": "/kəm əp wɪθ/"
},
{
"w": "overwhelmed",
"m": "不知所措的 — feeling too much pressure or emotion",
"x": "I felt overwhelmed by all the emails.",
"x2": "She was overwhelmed with joy.",
"c": "Core vocabulary",
"ipa": "/ˌoʊvərˈwɛlmd/"
},
{
"w": "cut corners",
"m": "偷工减料 — to do something cheaply or badly to save time",
"x": "Don't cut corners on safety.",
"x2": "The builder cut corners and the roof leaked.",
"c": "Core vocabulary",
"ipa": "/kət ˈkɔrnərz/"
},
{
"w": "consistent",
"m": "一致的 — always behaving or happening the same way",
"x": "Consistent practice is the key to success.",
"x2": "His results have been consistent all year.",
"c": "Core vocabulary",
"ipa": "/kənˈsɪstənt/"
},
{
"w": "turn down",
"m": "拒绝 — to refuse an offer",
"x": "She turned down the job offer.",
"x2": "He turned down the invitation politely.",
"c": "Core vocabulary",
"ipa": "/tərn daʊn/"
},
{
"w": "anticipate",
"m": "预料 — to expect or predict",
"x": "We anticipate high demand this summer.",
"x2": "I didn't anticipate so many questions.",
"c": "Core vocabulary",
"ipa": "/ænˈtɪsəˌpeɪt/"
},
{
"w": "once in a blue moon",
"m": "千载难逢，很少 — very rarely",
"x": "I eat fast food once in a blue moon.",
"x2": "He calls once in a blue moon.",
"c": "Core vocabulary"
},
{
"w": "adequate",
"m": "足够的 — good enough",
"x": "The room was small but adequate.",
"x2": "Make sure you get adequate sleep.",
"c": "Core vocabulary",
"ipa": "/ˈædəkˌweɪt/"
},
{
"w": "catch up",
"m": "叙旧；赶上 — to reach the same level; to talk after time apart",
"x": "Let's catch up over coffee.",
"x2": "I need to catch up on my reading.",
"c": "Core vocabulary",
"ipa": "/kæʧ əp/"
},
{
"w": "tedious",
"m": "乏味的 — boring and long",
"x": "Filling in forms is tedious.",
"x2": "The tedious task took all afternoon.",
"c": "Core vocabulary",
"ipa": "/ˈtidiəs/"
},
{
"w": "get along with",
"m": "与……相处融洽 — to have a good relationship with",
"x": "I get along with my coworkers.",
"x2": "Do you get along with your neighbours?",
"c": "Core vocabulary",
"ipa": "/gɪt əˈlɔŋ wɪθ/"
},
{
"w": "ambitious",
"m": "有抱负的 — having a strong desire to succeed",
"x": "She's ambitious and wants to start a company.",
"x2": "That's an ambitious goal for one month.",
"c": "Core vocabulary",
"ipa": "/æmˈbɪʃəs/"
},
{
"w": "in a nutshell",
"m": "简而言之 — in a few words; summarized",
"x": "In a nutshell, we need more time.",
"x2": "That's the plan in a nutshell.",
"c": "Core vocabulary",
"ipa": "/ɪn ə ˈnətˌʃɛl/"
},
{
"w": "reliable",
"m": "可靠的 — able to be trusted",
"x": "My car is old but reliable.",
"x2": "We need a reliable source of data.",
"c": "Core vocabulary",
"ipa": "/rɪˈlaɪəbəl/"
},
{
"w": "point out",
"m": "指出 — to direct attention to something",
"x": "He pointed out a mistake in my report.",
"x2": "She pointed out that the store was closed.",
"c": "Core vocabulary",
"ipa": "/pɔɪnt aʊt/"
},
{
"w": "obsolete",
"m": "过时的 — no longer used; out of date",
"x": "Fax machines are almost obsolete.",
"x2": "This software version is now obsolete.",
"c": "Core vocabulary",
"ipa": "/ˌɑbsəˈlit/"
},
{
"w": "see eye to eye",
"m": "意见一致 — to agree completely",
"x": "We don't always see eye to eye, but we respect each other.",
"x2": "They finally saw eye to eye on the price.",
"c": "Core vocabulary",
"ipa": "/si aɪ tɪ aɪ/"
},
{
"w": "persuade",
"m": "说服 — to convince someone to do something",
"x": "She persuaded me to join the gym.",
"x2": "It's hard to persuade him to change.",
"c": "Core vocabulary",
"ipa": "/pərsˈweɪd/"
},
{
"w": "carry on",
"m": "继续 — to continue",
"x": "Please carry on with your work.",
"x2": "Despite the rain, they carried on walking.",
"c": "Core vocabulary",
"ipa": "/ˈkɛri ɔn/"
},
{
"w": "vivid",
"m": "生动的 — producing clear, strong images in the mind",
"x": "I have vivid memories of that trip.",
"x2": "The book has vivid descriptions.",
"c": "Core vocabulary",
"ipa": "/ˈvɪvɪd/"
},
{
"w": "cost an arm and a leg",
"m": "贵得要命 — to be very expensive",
"x": "That phone cost an arm and a leg.",
"x2": "Repairs can cost an arm and a leg.",
"c": "Core vocabulary"
},
{
"w": "grateful",
"m": "感激的 — feeling thankful",
"x": "I'm grateful for your help.",
"x2": "She was grateful to have a second chance.",
"c": "Core vocabulary",
"ipa": "/ˈgreɪtfəl/"
},
{
"w": "make up one's mind",
"m": "下定决心 — to decide",
"x": "I can't make up my mind about which to buy.",
"x2": "Have you made up your mind yet?",
"c": "Core vocabulary",
"ipa": "/meɪk əp wənz maɪnd/"
},
{
"w": "sustainable",
"m": "可持续的 — able to continue over time without harm",
"x": "We need a sustainable business model.",
"x2": "Sustainable habits last longer than quick fixes.",
"c": "Core vocabulary",
"ipa": "/səˈsteɪnəbəl/"
},
{
"w": "back up",
"m": "备份；支持 — to support; to make a copy of data",
"x": "My friends backed me up.",
"x2": "Always back up your files.",
"c": "Core vocabulary",
"ipa": "/bæk əp/"
},
{
"w": "cautious",
"m": "谨慎的 — careful to avoid risk",
"x": "Be cautious when investing.",
"x2": "She's cautious about trusting strangers.",
"c": "Core vocabulary",
"ipa": "/ˈkɔʃəs/"
},
{
"w": "learn the ropes",
"m": "学会门道 — to learn how to do a job",
"x": "It took me a month to learn the ropes.",
"x2": "The new hire is still learning the ropes.",
"c": "Core vocabulary",
"ipa": "/lərn ðə roʊps/"
},
{
"w": "comprehensive",
"m": "全面的 — complete; including everything",
"x": "A comprehensive guide to English grammar.",
"x2": "We did a comprehensive review.",
"c": "Core vocabulary",
"ipa": "/ˌkɑmpriˈhɛnsɪv/"
},
{
"w": "deal with",
"m": "处理 — to handle a problem or situation",
"x": "I'll deal with it tomorrow.",
"x2": "How do you deal with stress?",
"c": "Core vocabulary",
"ipa": "/dil wɪθ/"
},
{
"w": "spontaneous",
"m": "自发的 — happening without planning",
"x": "We took a spontaneous trip to the beach.",
"x2": "His spontaneous laugh made everyone smile.",
"c": "Core vocabulary",
"ipa": "/spɑnˈteɪniəs/"
},
{
"w": "beat around the bush",
"m": "拐弯抹角 — to avoid saying something directly",
"x": "Stop beating around the bush and tell me.",
"x2": "She didn't beat around the bush.",
"c": "Core vocabulary",
"ipa": "/bit əraʊnd ðə bʊʃ/"
},
{
"w": "acknowledge",
"m": "承认 — to accept or admit something",
"x": "He acknowledged his mistake.",
"x2": "Please acknowledge receipt of this email.",
"c": "Core vocabulary",
"ipa": "/ækˈnɑlɪʤ/"
},
{
"w": "set up",
"m": "建立 — to arrange or establish",
"x": "Let's set up a meeting.",
"x2": "She set up her own business.",
"c": "Core vocabulary",
"ipa": "/sɛt əp/"
},
{
"w": "pragmatic",
"m": "务实的 — dealing with things practically",
"x": "We need a pragmatic solution.",
"x2": "He's pragmatic rather than idealistic.",
"c": "Core vocabulary",
"ipa": "/prægˈmætɪk/"
},
{
"w": "get cold feet",
"m": "临阵退缩 — to become nervous before something important",
"x": "He got cold feet before the wedding.",
"x2": "Don't get cold feet now—you're ready!",
"c": "Core vocabulary",
"ipa": "/gɪt koʊld fit/"
},
{
"w": "enthusiastic",
"m": "热情的 — showing great excitement",
"x": "The audience was enthusiastic.",
"x2": "She's enthusiastic about learning English.",
"c": "Core vocabulary",
"ipa": "/ɪnˌθuziˈæstɪk/"
},
{
"w": "give up",
"m": "放弃 — to stop trying",
"x": "Never give up on your dreams.",
"x2": "He gave up smoking last year.",
"c": "Core vocabulary",
"ipa": "/gɪv əp/"
},
{
"w": "thorough",
"m": "彻底的 — complete and careful",
"x": "The doctor did a thorough check.",
"x2": "Thanks for the thorough explanation.",
"c": "Core vocabulary",
"ipa": "/θəroʊ/"
},
{
"w": "better late than never",
"m": "迟到总比不到好 — it's better to do something late than not at all",
"x": "You finished the course—better late than never!",
"x2": "He arrived an hour late, but better late than never.",
"c": "Core vocabulary",
"ipa": "/ˈbɛtər leɪt ðən ˈnɛvər/"
},
{
"w": "curious",
"m": "好奇的 — eager to know or learn",
"x": "Children are naturally curious.",
"x2": "I'm curious about how this works.",
"c": "Core vocabulary",
"ipa": "/ˈkjʊriəs/"
},
{
"w": "look into",
"m": "调查 — to investigate",
"x": "I'll look into the problem.",
"x2": "The police are looking into the case.",
"c": "Core vocabulary",
"ipa": "/lʊk ˈɪntu/"
},
{
"w": "exhausted",
"m": "筋疲力尽的 — extremely tired",
"x": "I'm exhausted after the long flight.",
"x2": "She was exhausted but happy.",
"c": "Core vocabulary",
"ipa": "/ɪgˈzɔstɪd/"
},
{
"w": "speak up",
"m": "大声说出来 — to speak louder; to express your opinion",
"x": "Please speak up, I can't hear you.",
"x2": "Don't be afraid to speak up in meetings.",
"c": "Core vocabulary",
"ipa": "/spik əp/"
},
{
"w": "optimistic",
"m": "乐观的 — hopeful about the future",
"x": "I'm optimistic about our chances.",
"x2": "She stays optimistic even in hard times.",
"c": "Core vocabulary",
"ipa": "/ˌɑptɪˈmɪstɪk/"
},
{
"w": "out of the blue",
"m": "突然，出乎意料 — unexpectedly",
"x": "He called me out of the blue.",
"x2": "The idea came out of the blue.",
"c": "Core vocabulary",
"ipa": "/aʊt əv ðə blu/"
},
{
"w": "essential",
"m": "必不可少的 — absolutely necessary",
"x": "Water is essential for life.",
"x2": "Good communication is essential.",
"c": "Core vocabulary",
"ipa": "/ɛˈsɛnʃəl/"
},
{
"w": "work out",
"m": "锻炼；解决 — to exercise; to find a solution",
"x": "I work out three times a week.",
"x2": "Things will work out in the end.",
"c": "Core vocabulary",
"ipa": "/wərk aʊt/"
},
{
"w": "hesitate",
"m": "犹豫 — to pause before doing something",
"x": "Don't hesitate to ask questions.",
"x2": "She hesitated before answering.",
"c": "Core vocabulary",
"ipa": "/ˈhɛzəˌteɪt/"
},
{
"w": "hang in there",
"m": "坚持住 — don't give up during a hard time",
"x": "Hang in there—the weekend is almost here.",
"x2": "Hang in there, it gets easier.",
"c": "Core vocabulary",
"ipa": "/hæŋ ɪn ðɛr/"
},
{
"w": "efficient",
"m": "高效的 — working well without wasting time",
"x": "This is a more efficient way to work.",
"x2": "Our new system is very efficient.",
"c": "Core vocabulary",
"ipa": "/ɪˈfɪʃənt/"
},
{
"w": "take for granted",
"m": "视为理所当然 — to not appreciate something",
"x": "Don't take your health for granted.",
"x2": "We often take electricity for granted.",
"c": "Core vocabulary",
"ipa": "/teɪk fər ˈgrænɪd/"
},
{
"w": "modest",
"m": "谦虚的 — not boasting about oneself",
"x": "He's very modest about his success.",
"x2": "She lives in a modest apartment.",
"c": "Core vocabulary",
"ipa": "/ˈmɑdəst/"
},
{
"w": "fill in",
"m": "填写；代班 — to complete a form; to replace someone temporarily",
"x": "Please fill in this form.",
"x2": "Can you fill in for me tomorrow?",
"c": "Core vocabulary",
"ipa": "/fɪl ɪn/"
},
{
"w": "significant",
"m": "重要的 — important or noticeable",
"x": "There's a significant difference.",
"x2": "This is a significant achievement.",
"c": "Core vocabulary",
"ipa": "/sɪgˈnɪfɪkənt/"
},
{
"w": "keep an eye on",
"m": "留意 — to watch carefully",
"x": "Keep an eye on the soup so it doesn't burn.",
"x2": "Can you keep an eye on my bag?",
"c": "Core vocabulary",
"ipa": "/kip ən aɪ ɔn/"
},
{
"w": "confident",
"m": "自信的 — sure of yourself",
"x": "She's confident speaking English now.",
"x2": "I'm confident we'll succeed.",
"c": "Core vocabulary",
"ipa": "/ˈkɑnfədənt/"
},
{
"w": "turn out",
"m": "结果是 — to happen in a particular way",
"x": "The party turned out great.",
"x2": "It turned out that he was right.",
"c": "Core vocabulary",
"ipa": "/tərn aʊt/"
},
{
"w": "flexible",
"m": "灵活的 — able to change easily",
"x": "My working hours are flexible.",
"x2": "Be flexible with your plans.",
"c": "Core vocabulary",
"ipa": "/ˈflɛksəbəl/"
},
{
"w": "on the fence",
"m": "犹豫不决 — undecided",
"x": "I'm still on the fence about moving.",
"x2": "Many voters are on the fence.",
"c": "Core vocabulary",
"ipa": "/ɔn ðə fɛns/"
},
{
"w": "accurate",
"m": "准确的 — correct and exact",
"x": "Is this information accurate?",
"x2": "Her prediction was accurate.",
"c": "Core vocabulary",
"ipa": "/ˈækjərət/"
},
{
"w": "show up",
"m": "出现 — to arrive",
"x": "He showed up late again.",
"x2": "Only five people showed up.",
"c": "Core vocabulary",
"ipa": "/ʃoʊ əp/"
},
{
"w": "generous",
"m": "慷慨的 — willing to give more than expected",
"x": "Thank you for your generous gift.",
"x2": "He's generous with his time.",
"c": "Core vocabulary",
"ipa": "/ˈʤɛnərəs/"
},
{
"w": "sleep on it",
"m": "考虑一晚再说 — to wait until tomorrow to decide",
"x": "Don't decide now—sleep on it.",
"x2": "I'll sleep on it and let you know.",
"c": "Core vocabulary",
"ipa": "/slip ɔn ɪt/"
},
{
"w": "appropriate",
"m": "恰当的 — suitable for the situation",
"x": "Jeans aren't appropriate for the interview.",
"x2": "Choose an appropriate word.",
"c": "Core vocabulary",
"ipa": "/əˈproʊpriˌeɪt/"
},
{
"w": "run into",
"m": "偶遇 — to meet by chance",
"x": "I ran into an old friend at the mall.",
"x2": "We ran into some problems.",
"c": "Core vocabulary",
"ipa": "/rən ˈɪntu/"
},
{
"w": "patient",
"m": "耐心的 — able to wait calmly",
"x": "Be patient—learning takes time.",
"x2": "The teacher was very patient with us.",
"c": "Core vocabulary",
"ipa": "/ˈpeɪʃənt/"
},
{
"w": "get the ball rolling",
"m": "开始行动 — to start something",
"x": "Let's get the ball rolling on this project.",
"x2": "I'll get the ball rolling with a quick intro.",
"c": "Core vocabulary",
"ipa": "/gɪt ðə bɔl ˈroʊlɪŋ/"
},
{
"w": "obvious",
"m": "明显的 — easy to see or understand",
"x": "The answer is obvious.",
"x2": "It was obvious she was tired.",
"c": "Core vocabulary",
"ipa": "/ˈɑbviəs/"
},
{
"w": "figure of speech",
"m": "修辞，比喻说法 — an expression not meant literally",
"x": "'It's raining cats and dogs' is a figure of speech.",
"x2": "Don't worry, it was just a figure of speech.",
"c": "Core vocabulary",
"ipa": "/ˈfɪgjər əv spiʧ/"
},
{
"w": "pursue",
"m": "追求 — to try to achieve something",
"x": "She decided to pursue a career in law.",
"x2": "Pursue your passion.",
"c": "Core vocabulary",
"ipa": "/pərˈsu/"
},
{
"w": "by the way",
"m": "顺便说一下 — used to add a new topic",
"x": "By the way, have you seen my keys?",
"x2": "By the way, congratulations on the new job!",
"c": "Core vocabulary",
"ipa": "/baɪ ðə weɪ/"
},
{
"w": "delighted",
"m": "高兴的 — very pleased",
"x": "I'd be delighted to help.",
"x2": "We were delighted with the results.",
"c": "Core vocabulary",
"ipa": "/dɪˈlaɪtɪd/"
},
{
"w": "take off",
"m": "起飞；突然走红 — to leave the ground; to become successful quickly",
"x": "The plane took off on time.",
"x2": "Her career really took off.",
"c": "Core vocabulary",
"ipa": "/teɪk ɔf/"
},
{
"w": "frustrated",
"m": "沮丧的 — annoyed because you can't do something",
"x": "I get frustrated when the internet is slow.",
"x2": "He was frustrated with the delay.",
"c": "Core vocabulary",
"ipa": "/ˈfrəˌstreɪtəd/"
},
{
"w": "no wonder",
"m": "难怪 — it's not surprising",
"x": "No wonder you're tired—you worked all night.",
"x2": "She practices daily; no wonder her English is great.",
"c": "Core vocabulary",
"ipa": "/noʊ ˈwəndər/"
},
{
"w": "inspire",
"m": "激励 — to make someone want to do something",
"x": "Her story inspired me to travel.",
"x2": "Great teachers inspire their students.",
"c": "Core vocabulary",
"ipa": "/ˌɪnˈspaɪr/"
},
{
"w": "pick up",
"m": "捡起；学会 — to collect; to learn informally",
"x": "I'll pick you up at eight.",
"x2": "He picked up some Spanish while traveling.",
"c": "Core vocabulary",
"ipa": "/pɪk əp/"
},
{
"w": "reasonable",
"m": "合理的 — fair and sensible",
"x": "The price is reasonable.",
"x2": "That's a reasonable request.",
"c": "Core vocabulary",
"ipa": "/ˈrizənəbəl/"
},
{
"w": "it's up to you",
"m": "由你决定 — you decide",
"x": "Pizza or sushi? It's up to you.",
"x2": "It's up to you whether you come.",
"c": "Core vocabulary",
"ipa": "/ɪts əp tɪ ju/"
},
{
"w": "fluent",
"m": "流利的 — able to speak a language easily",
"x": "She is fluent in three languages.",
"x2": "Daily practice will make you fluent.",
"c": "Core vocabulary",
"ipa": "/fluənt/"
},
{
"w": "end up",
"m": "最终 — to finally be in a place or situation",
"x": "We ended up staying until midnight.",
"x2": "He ended up becoming a teacher.",
"c": "Core vocabulary",
"ipa": "/ɛnd əp/"
},
{
"w": "courage",
"m": "勇气 — the ability to do something frightening",
"x": "It takes courage to speak a new language.",
"x2": "She found the courage to ask.",
"c": "Core vocabulary",
"ipa": "/kərɪʤ/"
},
{
"w": "practice makes perfect",
"m": "熟能生巧 — doing something often makes you good at it",
"x": "Keep studying—practice makes perfect.",
"x2": "My pronunciation improved; practice makes perfect!",
"c": "Core vocabulary",
"ipa": "/ˈpræktɪs meɪks ˈpərˌfɪkt/"
},
{
"w": "progress",
"m": "进步 — movement toward a goal",
"x": "You've made great progress this month.",
"x2": "Progress is slow but steady.",
"c": "Core vocabulary",
"ipa": "/ˈprɑˌgrɛs/"
},
{
"w": "step by step",
"m": "一步一步 — gradually, one stage at a time",
"x": "Learn grammar step by step.",
"x2": "We fixed the problem step by step.",
"c": "Core vocabulary",
"ipa": "/stɛp baɪ stɛp/"
},
{
"w": "determined",
"m": "坚定的 — having made a firm decision",
"x": "She's determined to pass the test.",
"x2": "He was determined to finish the marathon.",
"c": "Core vocabulary",
"ipa": "/dɪˈtərmənd/"
},
{
"w": "get through",
"m": "度过 — to survive or finish something difficult",
"x": "We'll get through this together.",
"x2": "I got through the whole book in a day.",
"c": "Core vocabulary",
"ipa": "/gɪt θru/"
},
{
"w": "remarkable",
"m": "非凡的 — unusual and worth noticing",
"x": "She made remarkable progress.",
"x2": "It was a remarkable performance.",
"c": "Core vocabulary",
"ipa": "/rɪˈmɑrkəbəl/"
},
{
"w": "keep it up",
"m": "继续保持 — continue doing well",
"x": "Great job—keep it up!",
"x2": "Your English is improving, keep it up.",
"c": "Core vocabulary",
"ipa": "/kip ɪt əp/"
},
{
"w": "achieve",
"m": "实现 — to succeed in doing something",
"x": "You can achieve anything with practice.",
"x2": "We achieved our goal early.",
"c": "Core vocabulary",
"ipa": "/əˈʧiv/"
},
{
"w": "arvo",
"m": "下午",
"x": "Let's catch up this arvo after work.",
"c": "Daily life in Australia"
},
{
"w": "groceries",
"m": "日用杂货",
"x": "I buy groceries at Woolies on Sunday.",
"c": "Daily life in Australia",
"ipa": "/ˈgroʊsəriz/"
},
{
"w": "rent",
"m": "房租",
"x": "My rent is due every fortnight.",
"c": "Daily life in Australia",
"ipa": "/rɛnt/"
},
{
"w": "fortnight",
"m": "两周",
"x": "I get paid every fortnight.",
"c": "Daily life in Australia",
"ipa": "/ˈfɔrtˌnaɪt/"
},
{
"w": "lease",
"m": "租约",
"x": "We signed a twelve-month lease.",
"c": "Daily life in Australia",
"ipa": "/lis/"
},
{
"w": "bond",
"m": "押金",
"x": "You'll get your bond back when you move out.",
"c": "Daily life in Australia",
"ipa": "/bɑnd/"
},
{
"w": "landlord",
"m": "房东",
"x": "I emailed the landlord about the broken heater.",
"c": "Daily life in Australia",
"ipa": "/ˈlænˌdlɔrd/"
},
{
"w": "real estate agent",
"m": "房产中介",
"x": "The real estate agent will inspect the flat next week.",
"c": "Daily life in Australia",
"ipa": "/ril ɛˈsteɪt ˈeɪʤənt/"
},
{
"w": "flatmate",
"m": "室友",
"x": "My flatmate works night shifts too.",
"c": "Daily life in Australia"
},
{
"w": "public transport",
"m": "公共交通",
"x": "Public transport is cheap with an Opal card.",
"c": "Daily life in Australia",
"ipa": "/ˈpəblɪk ˈtrænspɔrt/"
},
{
"w": "top up",
"m": "充值",
"x": "I need to top up my Opal card.",
"c": "Daily life in Australia",
"ipa": "/tɔp əp/"
},
{
"w": "tap on",
"m": "刷卡上车",
"x": "Don't forget to tap on when you get on the bus.",
"c": "Daily life in Australia",
"ipa": "/tæp ɔn/"
},
{
"w": "tap off",
"m": "刷卡下车",
"x": "Tap off at the station to pay the right fare.",
"c": "Daily life in Australia",
"ipa": "/tæp ɔf/"
},
{
"w": "timetable",
"m": "时刻表",
"x": "Check the timetable before you leave.",
"c": "Daily life in Australia",
"ipa": "/ˈtaɪmˌteɪbəl/"
},
{
"w": "bin night",
"m": "倒垃圾的晚上",
"x": "Tonight is bin night, so put the bins out.",
"c": "Daily life in Australia",
"ipa": "/bɪn naɪt/"
},
{
"w": "recycling",
"m": "回收",
"x": "The yellow bin is for recycling.",
"c": "Daily life in Australia",
"ipa": "/riˈsaɪkəlɪŋ/"
},
{
"w": "neighbour",
"m": "邻居",
"x": "My neighbour helped me carry the sofa.",
"c": "Daily life in Australia",
"ipa": "/ˈneɪbər/"
},
{
"w": "barbecue",
"m": "烧烤",
"x": "We're having a barbecue at the park on Saturday.",
"c": "Daily life in Australia",
"ipa": "/ˈbɑrbɪˌkju/"
},
{
"w": "sunscreen",
"m": "防晒霜",
"x": "Always wear sunscreen in summer.",
"c": "Daily life in Australia",
"ipa": "/ˈsənskrin/"
},
{
"w": "beach",
"m": "海滩",
"x": "The beach is packed on weekends.",
"c": "Daily life in Australia",
"ipa": "/biʧ/"
},
{
"w": "weather forecast",
"m": "天气预报",
"x": "The weather forecast says it will rain.",
"c": "Daily life in Australia",
"ipa": "/ˈwɛðər ˈfɔrˌkæst/"
},
{
"w": "heatwave",
"m": "热浪",
"x": "Stay inside during the heatwave.",
"c": "Daily life in Australia"
},
{
"w": "laundry",
"m": "洗衣服",
"x": "I do my laundry on my day off.",
"c": "Daily life in Australia",
"ipa": "/ˈlɔndri/"
},
{
"w": "utility bill",
"m": "水电费账单",
"x": "The utility bill came in the mail.",
"c": "Daily life in Australia",
"ipa": "/juˈtɪləti bɪl/"
},
{
"w": "electricity",
"m": "电",
"x": "Electricity is expensive in winter.",
"c": "Daily life in Australia",
"ipa": "/ɪˌlɛkˈtrɪsəti/"
},
{
"w": "internet plan",
"m": "网络套餐",
"x": "I changed my internet plan to a cheaper one.",
"c": "Daily life in Australia",
"ipa": "/ˈɪntərˌnɛt plæn/"
},
{
"w": "driver's licence",
"m": "驾照",
"x": "You need a driver's licence to rent a car.",
"c": "Daily life in Australia",
"ipa": "/ˈdraɪvərz ˈlaɪsəns/"
},
{
"w": "parking fine",
"m": "停车罚单",
"x": "I got a parking fine outside the shop.",
"c": "Daily life in Australia",
"ipa": "/ˈpɑrkɪŋ faɪn/"
},
{
"w": "petrol",
"m": "汽油",
"x": "Petrol is cheaper on Tuesdays.",
"c": "Daily life in Australia",
"ipa": "/ˈpɛtroʊl/"
},
{
"w": "traffic jam",
"m": "堵车",
"x": "I was stuck in a traffic jam for an hour.",
"c": "Daily life in Australia",
"ipa": "/ˈtræfɪk ʤæm/"
},
{
"w": "footpath",
"m": "人行道",
"x": "Please ride your bike on the road, not the footpath.",
"c": "Daily life in Australia",
"ipa": "/ˈfʊtˌpæθ/"
},
{
"w": "takeaway",
"m": "外卖",
"x": "Let's get takeaway tonight.",
"c": "Daily life in Australia"
},
{
"w": "café",
"m": "咖啡馆",
"x": "I meet my friend at the café near the station.",
"c": "Daily life in Australia"
},
{
"w": "flat white",
"m": "澳式白咖啡",
"x": "Can I get a large flat white, please?",
"c": "Daily life in Australia",
"ipa": "/flæt waɪt/"
},
{
"w": "weekend",
"m": "周末",
"x": "What are you doing this weekend?",
"c": "Daily life in Australia",
"ipa": "/ˈwiˌkɪnd/"
},
{
"w": "public holiday",
"m": "公共假日",
"x": "Monday is a public holiday.",
"c": "Daily life in Australia",
"ipa": "/ˈpəblɪk ˈhɑlɪˌdeɪ/"
},
{
"w": "long weekend",
"m": "长周末",
"x": "We're going camping on the long weekend.",
"c": "Daily life in Australia",
"ipa": "/lɔŋ ˈwiˌkɪnd/"
},
{
"w": "move house",
"m": "搬家",
"x": "We're moving house next month.",
"c": "Daily life in Australia",
"ipa": "/muv haʊs/"
},
{
"w": "furniture",
"m": "家具",
"x": "We bought second-hand furniture online.",
"c": "Daily life in Australia",
"ipa": "/ˈfərnɪʧər/"
},
{
"w": "gym membership",
"m": "健身房会员",
"x": "I cancelled my gym membership.",
"c": "Daily life in Australia",
"ipa": "/ʤɪm ˈmɛmbərˌʃɪp/"
},
{
"w": "library card",
"m": "图书卡",
"x": "You can borrow books with a free library card.",
"c": "Daily life in Australia",
"ipa": "/ˈlaɪbrɛˌri kɑrd/"
},
{
"w": "community centre",
"m": "社区中心",
"x": "The community centre runs free English classes.",
"c": "Daily life in Australia",
"ipa": "/kəmˈjunɪti ˈsɛntər/"
},
{
"w": "queue",
"m": "排队",
"x": "Please join the queue at the counter.",
"c": "Daily life in Australia",
"ipa": "/kju/"
},
{
"w": "mate",
"m": "朋友，伙计",
"x": "Thanks, mate, I appreciate it.",
"c": "Daily life in Australia",
"ipa": "/meɪt/"
},
{
"w": "catch up",
"m": "聚一聚",
"x": "We should catch up for coffee sometime.",
"c": "Daily life in Australia",
"ipa": "/kæʧ əp/"
},
{
"w": "night shift",
"m": "夜班",
"x": "I work the night shift from 10 pm to 6 am.",
"c": "Workplace & night shift",
"ipa": "/naɪt ʃɪft/"
},
{
"w": "roster",
"m": "排班表",
"x": "The new roster comes out on Friday.",
"c": "Workplace & night shift",
"ipa": "/ˈrɑstər/"
},
{
"w": "swap shifts",
"m": "换班",
"x": "Can I swap shifts with you on Thursday?",
"c": "Workplace & night shift",
"ipa": "/swɑp ʃɪfts/"
},
{
"w": "clock in",
"m": "打卡上班",
"x": "Remember to clock in when you arrive.",
"c": "Workplace & night shift",
"ipa": "/klɑk ɪn/"
},
{
"w": "clock out",
"m": "打卡下班",
"x": "I forgot to clock out last night.",
"c": "Workplace & night shift",
"ipa": "/klɑk aʊt/"
},
{
"w": "overtime",
"m": "加班",
"x": "I did four hours of overtime this week.",
"c": "Workplace & night shift",
"ipa": "/ˈoʊvərˌtaɪm/"
},
{
"w": "penalty rates",
"m": "加班/周末补贴费率",
"x": "Night shifts pay penalty rates.",
"c": "Workplace & night shift",
"ipa": "/ˈpɛnəlti reɪts/"
},
{
"w": "payslip",
"m": "工资单",
"x": "Check your payslip for the right hours.",
"c": "Workplace & night shift"
},
{
"w": "handover",
"m": "交接班",
"x": "I'll give you a quick handover before I leave.",
"c": "Workplace & night shift",
"ipa": "/ˈhændoʊvər/"
},
{
"w": "supervisor",
"m": "主管",
"x": "Tell your supervisor if you feel unwell.",
"c": "Workplace & night shift",
"ipa": "/ˈsupərˌvaɪzər/"
},
{
"w": "manager",
"m": "经理",
"x": "The manager approved my leave.",
"c": "Workplace & night shift",
"ipa": "/ˈmænɪʤər/"
},
{
"w": "colleague",
"m": "同事",
"x": "My colleague covered for me yesterday.",
"c": "Workplace & night shift",
"ipa": "/ˈkɑlig/"
},
{
"w": "break room",
"m": "休息室",
"x": "There's coffee in the break room.",
"c": "Workplace & night shift",
"ipa": "/breɪk rum/"
},
{
"w": "meal break",
"m": "用餐休息",
"x": "We get a thirty-minute meal break.",
"c": "Workplace & night shift",
"ipa": "/mil breɪk/"
},
{
"w": "annual leave",
"m": "年假",
"x": "I'm taking annual leave in December.",
"c": "Workplace & night shift",
"ipa": "/ˈænjuəl liv/"
},
{
"w": "sick leave",
"m": "病假",
"x": "I need to take sick leave today.",
"c": "Workplace & night shift",
"ipa": "/sɪk liv/"
},
{
"w": "call in sick",
"m": "打电话请病假",
"x": "He called in sick this morning.",
"c": "Workplace & night shift",
"ipa": "/kɔl ɪn sɪk/"
},
{
"w": "cover a shift",
"m": "替班",
"x": "Could you cover my shift on Saturday?",
"c": "Workplace & night shift",
"ipa": "/ˈkəvər ə ʃɪft/"
},
{
"w": "safety gear",
"m": "安全装备",
"x": "Wear your safety gear at all times.",
"c": "Workplace & night shift",
"ipa": "/ˈseɪfti gɪr/"
},
{
"w": "hi-vis vest",
"m": "反光背心",
"x": "Put on your hi-vis vest before entering the site.",
"c": "Workplace & night shift"
},
{
"w": "hazard",
"m": "危险",
"x": "Report any hazard to your supervisor.",
"c": "Workplace & night shift",
"ipa": "/ˈhæzərd/"
},
{
"w": "incident report",
"m": "事故报告",
"x": "I filled in an incident report after the fall.",
"c": "Workplace & night shift",
"ipa": "/ˈɪnsədənt rɪˈpɔrt/"
},
{
"w": "training",
"m": "培训",
"x": "New staff must complete safety training.",
"c": "Workplace & night shift",
"ipa": "/ˈtreɪnɪŋ/"
},
{
"w": "deadline",
"m": "截止日期",
"x": "The deadline for this task is tomorrow.",
"c": "Workplace & night shift",
"ipa": "/ˈdɛˌdlaɪn/"
},
{
"w": "workload",
"m": "工作量",
"x": "My workload is heavy this week.",
"c": "Workplace & night shift",
"ipa": "/ˈwərˌkloʊd/"
},
{
"w": "running late",
"m": "要迟到了",
"x": "Sorry, I'm running late; the bus is delayed.",
"c": "Workplace & night shift",
"ipa": "/ˈrənɪŋ leɪt/"
},
{
"w": "on time",
"m": "准时",
"x": "Please be on time for your shift.",
"c": "Workplace & night shift",
"ipa": "/ɔn taɪm/"
},
{
"w": "in charge",
"m": "负责",
"x": "Who is in charge tonight?",
"c": "Workplace & night shift",
"ipa": "/ɪn ʧɑrʤ/"
},
{
"w": "team leader",
"m": "组长",
"x": "Ask the team leader for the keys.",
"c": "Workplace & night shift",
"ipa": "/tim ˈlidər/"
},
{
"w": "stock take",
"m": "盘点",
"x": "We do a stock take every month.",
"c": "Workplace & night shift",
"ipa": "/stɑk teɪk/"
},
{
"w": "restock",
"m": "补货",
"x": "Can you restock the shelves before 6?",
"c": "Workplace & night shift",
"ipa": "/riˈstɑk/"
},
{
"w": "loading dock",
"m": "装卸区",
"x": "The truck is at the loading dock.",
"c": "Workplace & night shift",
"ipa": "/ˈloʊdɪŋ dɑk/"
},
{
"w": "forklift",
"m": "叉车",
"x": "Only licensed staff can drive the forklift.",
"c": "Workplace & night shift",
"ipa": "/ˈfɔrˌklɪft/"
},
{
"w": "tired",
"m": "累",
"x": "I'm tired after a long night shift.",
"c": "Workplace & night shift",
"ipa": "/taɪərd/"
},
{
"w": "sleep schedule",
"m": "作息时间",
"x": "Night work messes up my sleep schedule.",
"c": "Workplace & night shift",
"ipa": "/slip ˈskɛʤʊl/"
},
{
"w": "jet-lagged",
"m": "像倒时差一样疲惫",
"x": "I feel jet-lagged after night shifts.",
"c": "Workplace & night shift"
},
{
"w": "casual worker",
"m": "临时工",
"x": "Casual workers get paid by the hour.",
"c": "Workplace & night shift",
"ipa": "/ˈkæʒəwəl ˈwərkər/"
},
{
"w": "full-time",
"m": "全职",
"x": "She got a full-time job.",
"c": "Workplace & night shift",
"ipa": "/ˈfʊlˌtaɪm/"
},
{
"w": "part-time",
"m": "兼职",
"x": "I work part-time on weekends.",
"c": "Workplace & night shift",
"ipa": "/ˈpɑrtˈtaɪm/"
},
{
"w": "tax file number",
"m": "税号 (TFN)",
"x": "Give your tax file number to your employer.",
"c": "Workplace & night shift",
"ipa": "/tæks faɪl ˈnəmbər/"
},
{
"w": "superannuation",
"m": "养老金",
"x": "Your employer pays superannuation for you.",
"c": "Workplace & night shift"
},
{
"w": "fair go",
"m": "公平机会",
"x": "Everyone deserves a fair go at work.",
"c": "Workplace & night shift",
"ipa": "/fɛr goʊ/"
},
{
"w": "customer",
"m": "顾客",
"x": "The customer wants a refund.",
"c": "Business & sales",
"ipa": "/ˈkəstəmər/"
},
{
"w": "client",
"m": "客户",
"x": "I have a meeting with a new client.",
"c": "Business & sales",
"ipa": "/klaɪənt/"
},
{
"w": "quote",
"m": "报价",
"x": "Can you send me a quote for the job?",
"c": "Business & sales",
"ipa": "/kwoʊt/"
},
{
"w": "invoice",
"m": "发票",
"x": "I'll send the invoice by email today.",
"c": "Business & sales",
"ipa": "/ˈɪnvɔɪs/"
},
{
"w": "receipt",
"m": "收据",
"x": "Here's your receipt.",
"c": "Business & sales",
"ipa": "/rɪˈsit/"
},
{
"w": "discount",
"m": "折扣",
"x": "We can offer a ten per cent discount.",
"c": "Business & sales",
"ipa": "/ˈdɪskaʊnt/"
},
{
"w": "deposit",
"m": "定金",
"x": "We need a fifty per cent deposit to start.",
"c": "Business & sales",
"ipa": "/dɪˈpɑzət/"
},
{
"w": "profit",
"m": "利润",
"x": "Our profit went up this month.",
"c": "Business & sales",
"ipa": "/ˈprɑfɪt/"
},
{
"w": "revenue",
"m": "收入",
"x": "Revenue grew by twenty per cent.",
"c": "Business & sales",
"ipa": "/ˈrɛvəˌnu/"
},
{
"w": "cost",
"m": "成本",
"x": "We need to cut costs.",
"c": "Business & sales",
"ipa": "/kɔst/"
},
{
"w": "cash flow",
"m": "现金流",
"x": "Cash flow is important for small businesses.",
"c": "Business & sales",
"ipa": "/kæʃ floʊ/"
},
{
"w": "supplier",
"m": "供应商",
"x": "Our supplier raised their prices.",
"c": "Business & sales",
"ipa": "/səˈplaɪər/"
},
{
"w": "wholesale",
"m": "批发",
"x": "We buy stock at wholesale prices.",
"c": "Business & sales",
"ipa": "/ˈhoʊlˌseɪl/"
},
{
"w": "retail price",
"m": "零售价",
"x": "The retail price is forty dollars.",
"c": "Business & sales",
"ipa": "/ˈriˌteɪl praɪs/"
},
{
"w": "negotiate",
"m": "谈判",
"x": "Let's negotiate a better price.",
"c": "Business & sales",
"ipa": "/nɪˈgoʊʃiˌeɪt/"
},
{
"w": "deal",
"m": "交易",
"x": "We closed the deal yesterday.",
"c": "Business & sales",
"ipa": "/dil/"
},
{
"w": "contract",
"m": "合同",
"x": "Please read the contract before you sign.",
"c": "Business & sales",
"ipa": "/ˈkɑnˌtrækt/"
},
{
"w": "ABN",
"m": "澳洲商业号码",
"x": "You need an ABN to invoice clients.",
"c": "Business & sales"
},
{
"w": "GST",
"m": "商品服务税",
"x": "Prices include GST.",
"c": "Business & sales"
},
{
"w": "marketing",
"m": "营销",
"x": "We spend money on online marketing.",
"c": "Business & sales",
"ipa": "/ˈmɑrkətɪŋ/"
},
{
"w": "brand",
"m": "品牌",
"x": "We want to build a strong brand.",
"c": "Business & sales",
"ipa": "/brænd/"
},
{
"w": "target market",
"m": "目标市场",
"x": "Our target market is young families.",
"c": "Business & sales",
"ipa": "/ˈtərgət ˈmɑrkɪt/"
},
{
"w": "competitor",
"m": "竞争对手",
"x": "Our competitor lowered their prices.",
"c": "Business & sales",
"ipa": "/kəmˈpɛtɪtər/"
},
{
"w": "feedback",
"m": "反馈",
"x": "Thanks for your feedback.",
"c": "Business & sales",
"ipa": "/ˈfidˌbæk/"
},
{
"w": "review",
"m": "评价",
"x": "Please leave us a review on Google.",
"c": "Business & sales",
"ipa": "/ˌrivˈju/"
},
{
"w": "complaint",
"m": "投诉",
"x": "We take every complaint seriously.",
"c": "Business & sales",
"ipa": "/kəmˈpleɪnt/"
},
{
"w": "refund",
"m": "退款",
"x": "You can get a refund within 30 days.",
"c": "Business & sales",
"ipa": "/ˈriˌfənd/"
},
{
"w": "exchange",
"m": "换货",
"x": "Would you like a refund or an exchange?",
"c": "Business & sales",
"ipa": "/ɪksˈʧeɪnʤ/"
},
{
"w": "in stock",
"m": "有货",
"x": "Yes, that item is in stock.",
"c": "Business & sales",
"ipa": "/ɪn stɑk/"
},
{
"w": "out of stock",
"m": "缺货",
"x": "Sorry, it's out of stock at the moment.",
"c": "Business & sales",
"ipa": "/aʊt əv stɑk/"
},
{
"w": "delivery",
"m": "送货",
"x": "Delivery takes three to five business days.",
"c": "Business & sales",
"ipa": "/dɪˈlɪvəri/"
},
{
"w": "upsell",
"m": "追加销售",
"x": "He tried to upsell me a warranty.",
"c": "Business & sales"
},
{
"w": "loyal customer",
"m": "忠实顾客",
"x": "We give loyal customers a free coffee.",
"c": "Business & sales",
"ipa": "/lɔɪəl ˈkəstəmər/"
},
{
"w": "word of mouth",
"m": "口碑",
"x": "Most of our clients come by word of mouth.",
"c": "Business & sales",
"ipa": "/wərd əv maʊθ/"
},
{
"w": "pitch",
"m": "推销说辞",
"x": "I gave a short pitch to the investor.",
"c": "Business & sales",
"ipa": "/pɪʧ/"
},
{
"w": "follow-up email",
"m": "跟进邮件",
"x": "Send a follow-up email after the meeting.",
"c": "Business & sales",
"ipa": "/ˈfɑloʊˌəp iˈmeɪl/"
},
{
"w": "budget",
"m": "预算",
"x": "What's your budget for this project?",
"c": "Business & sales",
"ipa": "/ˈbəʤɪt/"
},
{
"w": "bookkeeping",
"m": "记账",
"x": "I do the bookkeeping every Friday.",
"c": "Business & sales",
"ipa": "/ˈbʊkˌkipɪŋ/"
},
{
"w": "business card",
"m": "名片",
"x": "Here's my business card.",
"c": "Business & sales",
"ipa": "/ˈbɪznɪs kɑrd/"
},
{
"w": "small business",
"m": "小企业",
"x": "I run a small business.",
"c": "Business & sales",
"ipa": "/smɔl ˈbɪznɪs/"
},
{
"w": "turnover",
"m": "营业额",
"x": "Our annual turnover is about half a million.",
"c": "Business & sales",
"ipa": "/ˈtərˌnoʊvər/"
},
{
"w": "How can I help you?",
"m": "有什么可以帮您？",
"x": "Hi there, how can I help you?",
"c": "Business & sales"
},
{
"w": "Is there anything else?",
"m": "还需要别的吗？",
"x": "Here you go. Is there anything else?",
"c": "Business & sales",
"ipa": "/ɪz ðɛr ˈɛniˌθɪŋ ɛls?/"
},
{
"w": "speaking",
"m": "我就是（接电话）",
"x": "Hello, Joel speaking.",
"c": "Phone calls & emails",
"ipa": "/ˈspikɪŋ/"
},
{
"w": "hold on",
"m": "稍等",
"x": "Hold on a second, please.",
"c": "Phone calls & emails",
"ipa": "/hoʊld ɔn/"
},
{
"w": "put you through",
"m": "帮你转接",
"x": "I'll put you through to the manager.",
"c": "Phone calls & emails",
"ipa": "/pʊt ju θru/"
},
{
"w": "call back",
"m": "回电话",
"x": "Can I call you back in ten minutes?",
"c": "Phone calls & emails",
"ipa": "/kɔl bæk/"
},
{
"w": "leave a message",
"m": "留言",
"x": "Would you like to leave a message?",
"c": "Phone calls & emails",
"ipa": "/liv ə ˈmɛsɪʤ/"
},
{
"w": "voicemail",
"m": "语音信箱",
"x": "I left a voicemail for you.",
"c": "Phone calls & emails",
"ipa": "/ˈvɔɪsˌmeɪl/"
},
{
"w": "missed call",
"m": "未接来电",
"x": "Sorry, I had a missed call from you.",
"c": "Phone calls & emails",
"ipa": "/mɪst kɔl/"
},
{
"w": "the line is busy",
"m": "电话占线",
"x": "The line is busy; I'll try later.",
"c": "Phone calls & emails",
"ipa": "/ðə laɪn ɪz ˈbɪzi/"
},
{
"w": "break up",
"m": "信号断断续续",
"x": "Sorry, you're breaking up.",
"c": "Phone calls & emails",
"ipa": "/breɪk əp/"
},
{
"w": "speak up",
"m": "大声点说",
"x": "Could you speak up a little, please?",
"c": "Phone calls & emails",
"ipa": "/spik əp/"
},
{
"w": "spell that",
"m": "拼一下",
"x": "Could you spell that for me?",
"c": "Phone calls & emails",
"ipa": "/spɛl ðət/"
},
{
"w": "Could you repeat that?",
"m": "能再说一遍吗？",
"x": "Sorry, could you repeat that?",
"c": "Phone calls & emails",
"ipa": "/kʊd ju rɪˈpit ðət?/"
},
{
"w": "Who's calling?",
"m": "请问是哪位？",
"x": "May I ask who's calling?",
"c": "Phone calls & emails"
},
{
"w": "wrong number",
"m": "打错电话",
"x": "Sorry, I think you have the wrong number.",
"c": "Phone calls & emails",
"ipa": "/rɔŋ ˈnəmbər/"
},
{
"w": "Dear",
"m": "亲爱的（信件开头）",
"x": "Dear Ms Smith,",
"c": "Phone calls & emails",
"ipa": "/dɪr/"
},
{
"w": "Kind regards",
"m": "此致（邮件结尾）",
"x": "Kind regards, Joel",
"c": "Phone calls & emails",
"ipa": "/kaɪnd rɪˈgɑrdz/"
},
{
"w": "attached",
"m": "附件中",
"x": "Please find the invoice attached.",
"c": "Phone calls & emails",
"ipa": "/əˈtæʧt/"
},
{
"w": "regarding",
"m": "关于",
"x": "I'm writing regarding your order.",
"c": "Phone calls & emails",
"ipa": "/rɪˈgɑrdɪŋ/"
},
{
"w": "as soon as possible",
"m": "尽快",
"x": "Please reply as soon as possible.",
"c": "Phone calls & emails",
"ipa": "/ɛz sun ɛz ˈpɑsəbəl/"
},
{
"w": "at your earliest convenience",
"m": "在您方便时尽早",
"x": "Please call me at your earliest convenience.",
"c": "Phone calls & emails",
"ipa": "/æt jʊr ˈərliəst kənˈvinjəns/"
},
{
"w": "I look forward to hearing from you",
"m": "期待您的回复",
"x": "I look forward to hearing from you soon.",
"c": "Phone calls & emails"
},
{
"w": "reply all",
"m": "全部回复",
"x": "Don't reply all to the whole team.",
"c": "Phone calls & emails",
"ipa": "/rɪˈplaɪ ɔl/"
},
{
"w": "cc",
"m": "抄送",
"x": "I'll cc my manager on this email.",
"c": "Phone calls & emails",
"ipa": "/ˈsiˈsi/"
},
{
"w": "subject line",
"m": "邮件主题",
"x": "Write a clear subject line.",
"c": "Phone calls & emails",
"ipa": "/ˈsəbʤɪkt laɪn/"
},
{
"w": "confirm",
"m": "确认",
"x": "Could you confirm the time?",
"c": "Phone calls & emails",
"ipa": "/kənˈfərm/"
},
{
"w": "reschedule",
"m": "改期",
"x": "Can we reschedule the meeting to Friday?",
"c": "Phone calls & emails",
"ipa": "/riˈskɛʤul/"
},
{
"w": "availability",
"m": "有空的时间",
"x": "Please let me know your availability.",
"c": "Phone calls & emails",
"ipa": "/əˌveɪləˈbɪlɪti/"
},
{
"w": "apologise for the delay",
"m": "抱歉回复晚了",
"x": "I apologise for the delay in replying.",
"c": "Phone calls & emails",
"ipa": "/əˈpɑləˌʤaɪz fər ðə dɪˈleɪ/"
},
{
"w": "Thank you for getting back to me",
"m": "谢谢您的回复",
"x": "Thank you for getting back to me so quickly.",
"c": "Phone calls & emails"
},
{
"w": "let me know",
"m": "告诉我",
"x": "Let me know if you have any questions.",
"c": "Phone calls & emails",
"ipa": "/lɛt mi noʊ/"
},
{
"w": "I'm calling about...",
"m": "我打电话是关于……",
"x": "Hi, I'm calling about the job ad.",
"c": "Phone calls & emails",
"ipa": "/ɪm ˈkɔlɪŋ əˈbaʊt.../"
},
{
"w": "on behalf of",
"m": "代表",
"x": "I'm calling on behalf of my company.",
"c": "Phone calls & emails",
"ipa": "/ɔn bɪˈhæf əv/"
},
{
"w": "take a message",
"m": "记下留言",
"x": "Can I take a message?",
"c": "Phone calls & emails",
"ipa": "/teɪk ə ˈmɛsɪʤ/"
},
{
"w": "extension",
"m": "分机号",
"x": "My extension is 204.",
"c": "Phone calls & emails",
"ipa": "/ɪkˈstɛnʃən/"
},
{
"w": "text me",
"m": "给我发短信",
"x": "Just text me when you arrive.",
"c": "Phone calls & emails",
"ipa": "/tɛkst mi/"
},
{
"w": "quick question",
"m": "快速问个问题",
"x": "Quick question: are you open on Sunday?",
"c": "Phone calls & emails",
"ipa": "/kwɪk kˈwɛʃən/"
},
{
"w": "touch base",
"m": "联系一下",
"x": "Let's touch base next week.",
"c": "Phone calls & emails",
"ipa": "/təʧ beɪs/"
},
{
"w": "heads-up",
"m": "提前通知",
"x": "Thanks for the heads-up.",
"c": "Phone calls & emails",
"ipa": "/ˈhɛdˌzəp/"
},
{
"w": "GP",
"m": "全科医生",
"x": "I booked an appointment with my GP.",
"c": "Shopping, doctor & government"
},
{
"w": "appointment",
"m": "预约",
"x": "I'd like to make an appointment.",
"c": "Shopping, doctor & government",
"ipa": "/əˈpɔɪntmənt/"
},
{
"w": "bulk billing",
"m": "医保直付（免费看病）",
"x": "Does this clinic offer bulk billing?",
"c": "Shopping, doctor & government",
"ipa": "/bəlk ˈbɪlɪŋ/"
},
{
"w": "Medicare card",
"m": "医保卡",
"x": "Please bring your Medicare card.",
"c": "Shopping, doctor & government",
"ipa": "/ˈmɛdəˌkɛr kɑrd/"
},
{
"w": "prescription",
"m": "处方",
"x": "The doctor gave me a prescription.",
"c": "Shopping, doctor & government",
"ipa": "/prəˈskrɪpʃən/"
},
{
"w": "chemist",
"m": "药店",
"x": "You can get it at the chemist.",
"c": "Shopping, doctor & government",
"ipa": "/ˈkɛmɪst/"
},
{
"w": "pharmacist",
"m": "药剂师",
"x": "Ask the pharmacist about side effects.",
"c": "Shopping, doctor & government",
"ipa": "/ˈfɑrməsɪst/"
},
{
"w": "symptoms",
"m": "症状",
"x": "What are your symptoms?",
"c": "Shopping, doctor & government",
"ipa": "/ˈsɪmptəmz/"
},
{
"w": "sore throat",
"m": "喉咙痛",
"x": "I've had a sore throat for three days.",
"c": "Shopping, doctor & government",
"ipa": "/sɔr θroʊt/"
},
{
"w": "fever",
"m": "发烧",
"x": "My son has a fever.",
"c": "Shopping, doctor & government",
"ipa": "/ˈfivər/"
},
{
"w": "headache",
"m": "头痛",
"x": "I've got a bad headache.",
"c": "Shopping, doctor & government",
"ipa": "/ˈhɛˌdeɪk/"
},
{
"w": "allergic",
"m": "过敏的",
"x": "I'm allergic to penicillin.",
"c": "Shopping, doctor & government",
"ipa": "/əˈlərʤɪk/"
},
{
"w": "medical certificate",
"m": "病假证明",
"x": "I need a medical certificate for work.",
"c": "Shopping, doctor & government",
"ipa": "/ˈmɛdɪkəl sərˈtɪfɪkət/"
},
{
"w": "emergency",
"m": "急诊",
"x": "Call 000 in an emergency.",
"c": "Shopping, doctor & government",
"ipa": "/ˈimərʤənsi/"
},
{
"w": "specialist",
"m": "专科医生",
"x": "My GP referred me to a specialist.",
"c": "Shopping, doctor & government",
"ipa": "/ˈspɛʃəlɪst/"
},
{
"w": "referral",
"m": "转诊信",
"x": "You need a referral to see a specialist.",
"c": "Shopping, doctor & government",
"ipa": "/rɪˈfərəl/"
},
{
"w": "dentist",
"m": "牙医",
"x": "I have a dentist appointment tomorrow.",
"c": "Shopping, doctor & government",
"ipa": "/ˈdɛntɪst/"
},
{
"w": "Centrelink",
"m": "澳洲社会福利署",
"x": "I need to call Centrelink about my payment.",
"c": "Shopping, doctor & government"
},
{
"w": "myGov",
"m": "澳洲政府在线账户",
"x": "You can check your tax on myGov.",
"c": "Shopping, doctor & government"
},
{
"w": "ATO",
"m": "澳洲税务局",
"x": "The ATO sent me a letter.",
"c": "Shopping, doctor & government"
},
{
"w": "tax return",
"m": "报税",
"x": "I lodge my tax return in July.",
"c": "Shopping, doctor & government",
"ipa": "/tæks rɪˈtərn/"
},
{
"w": "Service NSW",
"m": "新州政府服务中心",
"x": "I renewed my licence at Service NSW.",
"c": "Shopping, doctor & government"
},
{
"w": "form",
"m": "表格",
"x": "Please fill out this form.",
"c": "Shopping, doctor & government",
"ipa": "/fɔrm/"
},
{
"w": "proof of identity",
"m": "身份证明",
"x": "Bring two forms of proof of identity.",
"c": "Shopping, doctor & government",
"ipa": "/pruf əv aɪˈdɛntəˌti/"
},
{
"w": "proof of address",
"m": "地址证明",
"x": "A bank statement can be proof of address.",
"c": "Shopping, doctor & government",
"ipa": "/pruf əv ˈæˌdrɛs/"
},
{
"w": "visa",
"m": "签证",
"x": "My visa expires next year.",
"c": "Shopping, doctor & government",
"ipa": "/ˈvizə/"
},
{
"w": "citizenship",
"m": "公民身份",
"x": "I'm applying for citizenship.",
"c": "Shopping, doctor & government",
"ipa": "/ˈsɪtɪzənˌʃɪp/"
},
{
"w": "checkout",
"m": "收银台",
"x": "Please pay at the checkout.",
"c": "Shopping, doctor & government",
"ipa": "/ˈʧɛˌkaʊt/"
},
{
"w": "self-serve",
"m": "自助结账",
"x": "The self-serve checkouts are faster.",
"c": "Shopping, doctor & government"
},
{
"w": "on sale",
"m": "打折中",
"x": "These shoes are on sale.",
"c": "Shopping, doctor & government",
"ipa": "/ɔn seɪl/"
},
{
"w": "bargain",
"m": "便宜货",
"x": "That jacket was a real bargain.",
"c": "Shopping, doctor & government",
"ipa": "/ˈbɑrgɪn/"
},
{
"w": "try on",
"m": "试穿",
"x": "Can I try this on?",
"c": "Shopping, doctor & government",
"ipa": "/traɪ ɔn/"
},
{
"w": "fitting room",
"m": "试衣间",
"x": "The fitting room is at the back.",
"c": "Shopping, doctor & government",
"ipa": "/ˈfɪtɪŋ rum/"
},
{
"w": "size",
"m": "尺码",
"x": "Do you have this in a bigger size?",
"c": "Shopping, doctor & government",
"ipa": "/saɪz/"
},
{
"w": "afterpay",
"m": "先买后付",
"x": "Can I pay with Afterpay?",
"c": "Shopping, doctor & government"
},
{
"w": "tap and go",
"m": "拍卡支付",
"x": "You can just tap and go.",
"c": "Shopping, doctor & government",
"ipa": "/tæp ənd goʊ/"
},
{
"w": "EFTPOS",
"m": "刷卡机",
"x": "Do you take EFTPOS?",
"c": "Shopping, doctor & government"
},
{
"w": "cash out",
"m": "取现",
"x": "Can I get twenty dollars cash out?",
"c": "Shopping, doctor & government",
"ipa": "/kæʃ aʊt/"
},
{
"w": "bag",
"m": "袋子",
"x": "Do you need a bag?",
"c": "Shopping, doctor & government",
"ipa": "/bæg/"
},
{
"w": "warranty",
"m": "保修",
"x": "It comes with a two-year warranty.",
"c": "Shopping, doctor & government",
"ipa": "/ˈwɔrənti/"
},
{
"w": "pick up",
"m": "接人；捡起",
"x": "I'll pick you up at eight.",
"c": "Phrasal verbs",
"ipa": "/pɪk əp/"
},
{
"w": "drop off",
"m": "送到；放下",
"x": "Can you drop me off at the station?",
"c": "Phrasal verbs",
"ipa": "/drɔp ɔf/"
},
{
"w": "look after",
"m": "照顾",
"x": "My mum looks after the kids.",
"c": "Phrasal verbs",
"ipa": "/lʊk ˈæftər/"
},
{
"w": "look for",
"m": "寻找",
"x": "I'm looking for a new job.",
"c": "Phrasal verbs",
"ipa": "/lʊk fər/"
},
{
"w": "look up",
"m": "查找",
"x": "Look up the word in the dictionary.",
"c": "Phrasal verbs",
"ipa": "/lʊk əp/"
},
{
"w": "find out",
"m": "发现，查明",
"x": "I'll find out the price.",
"c": "Phrasal verbs",
"ipa": "/faɪnd aʊt/"
},
{
"w": "give up",
"m": "放弃",
"x": "Don't give up on learning English.",
"c": "Phrasal verbs",
"ipa": "/gɪv əp/"
},
{
"w": "carry on",
"m": "继续",
"x": "Carry on, you're doing well.",
"c": "Phrasal verbs",
"ipa": "/ˈkɛri ɔn/"
},
{
"w": "set up",
"m": "建立，设置",
"x": "I set up my own business.",
"c": "Phrasal verbs",
"ipa": "/sɛt əp/"
},
{
"w": "turn up",
"m": "出现；调大",
"x": "He turned up late again.",
"c": "Phrasal verbs",
"ipa": "/tərn əp/"
},
{
"w": "turn down",
"m": "拒绝；调小",
"x": "She turned down the job offer.",
"c": "Phrasal verbs",
"ipa": "/tərn daʊn/"
},
{
"w": "sort out",
"m": "解决",
"x": "I'll sort out the problem tomorrow.",
"c": "Phrasal verbs",
"ipa": "/sɔrt aʊt/"
},
{
"w": "work out",
"m": "锻炼；解决",
"x": "I work out at the gym.",
"c": "Phrasal verbs",
"ipa": "/wərk aʊt/"
},
{
"w": "fill in",
"m": "填写；代班",
"x": "Fill in this form, please.",
"c": "Phrasal verbs",
"ipa": "/fɪl ɪn/"
},
{
"w": "fill out",
"m": "填写",
"x": "Fill out the application online.",
"c": "Phrasal verbs",
"ipa": "/fɪl aʊt/"
},
{
"w": "get along with",
"m": "与……相处",
"x": "I get along with my colleagues.",
"c": "Phrasal verbs",
"ipa": "/gɪt əˈlɔŋ wɪθ/"
},
{
"w": "get over",
"m": "从……恢复",
"x": "It took weeks to get over the flu.",
"c": "Phrasal verbs",
"ipa": "/gɪt ˈoʊvər/"
},
{
"w": "get back to",
"m": "回复",
"x": "I'll get back to you by Friday.",
"c": "Phrasal verbs",
"ipa": "/gɪt bæk tɪ/"
},
{
"w": "hand in",
"m": "上交",
"x": "Hand in your timesheet on Monday.",
"c": "Phrasal verbs",
"ipa": "/hænd ɪn/"
},
{
"w": "hang up",
"m": "挂电话",
"x": "Don't hang up, please.",
"c": "Phrasal verbs",
"ipa": "/hæŋ əp/"
},
{
"w": "check in",
"m": "登记入住",
"x": "We checked in at the hotel.",
"c": "Phrasal verbs",
"ipa": "/ʧɛk ɪn/"
},
{
"w": "check out",
"m": "退房；看看",
"x": "Check out this new café.",
"c": "Phrasal verbs",
"ipa": "/ʧɛk aʊt/"
},
{
"w": "come up with",
"m": "想出",
"x": "We came up with a new idea.",
"c": "Phrasal verbs",
"ipa": "/kəm əp wɪθ/"
},
{
"w": "deal with",
"m": "处理",
"x": "I deal with customer complaints.",
"c": "Phrasal verbs",
"ipa": "/dil wɪθ/"
},
{
"w": "take off",
"m": "起飞；脱下",
"x": "The plane took off on time.",
"c": "Phrasal verbs",
"ipa": "/teɪk ɔf/"
},
{
"w": "take over",
"m": "接管",
"x": "He took over the business from his dad.",
"c": "Phrasal verbs",
"ipa": "/teɪk ˈoʊvər/"
},
{
"w": "keep up with",
"m": "跟上",
"x": "It's hard to keep up with the news.",
"c": "Phrasal verbs",
"ipa": "/kip əp wɪθ/"
},
{
"w": "make up",
"m": "编造；和好",
"x": "He made up an excuse.",
"c": "Phrasal verbs",
"ipa": "/meɪk əp/"
},
{
"w": "show up",
"m": "出现",
"x": "Only five people showed up.",
"c": "Phrasal verbs",
"ipa": "/ʃoʊ əp/"
},
{
"w": "run into",
"m": "偶遇",
"x": "I ran into my old boss.",
"c": "Phrasal verbs",
"ipa": "/rən ˈɪntu/"
},
{
"w": "wake up",
"m": "醒来",
"x": "I wake up at 2 pm after night shift.",
"c": "Phrasal verbs",
"ipa": "/weɪk əp/"
},
{
"w": "calm down",
"m": "冷静",
"x": "Calm down, it's not a big deal.",
"c": "Phrasal verbs",
"ipa": "/kɑm daʊn/"
},
{
"w": "cut down on",
"m": "减少",
"x": "I'm cutting down on sugar.",
"c": "Phrasal verbs",
"ipa": "/kət daʊn ɔn/"
},
{
"w": "end up",
"m": "最终成为",
"x": "We ended up eating at home.",
"c": "Phrasal verbs",
"ipa": "/ɛnd əp/"
},
{
"w": "go over",
"m": "复习，检查",
"x": "Let's go over the plan again.",
"c": "Phrasal verbs",
"ipa": "/goʊ ˈoʊvər/"
},
{
"w": "point out",
"m": "指出",
"x": "She pointed out a mistake.",
"c": "Phrasal verbs",
"ipa": "/pɔɪnt aʊt/"
},
{
"w": "back up",
"m": "备份；支持",
"x": "Back up your files every week.",
"c": "Phrasal verbs",
"ipa": "/bæk əp/"
},
{
"w": "G'day",
"m": "你好",
"x": "G'day mate, how's it going?",
"c": "Aussie slang"
},
{
"w": "no worries",
"m": "没问题，别客气",
"x": "No worries, happy to help.",
"c": "Aussie slang",
"ipa": "/noʊ ˈwəriz/"
},
{
"w": "heaps",
"m": "很多",
"x": "Thanks heaps!",
"c": "Aussie slang",
"ipa": "/hips/"
},
{
"w": "reckon",
"m": "认为",
"x": "I reckon it'll rain later.",
"c": "Aussie slang",
"ipa": "/ˈrɛkən/"
},
{
"w": "brekkie",
"m": "早餐",
"x": "Let's grab brekkie.",
"c": "Aussie slang"
},
{
"w": "servo",
"m": "加油站",
"x": "Stop at the servo for petrol.",
"c": "Aussie slang",
"ipa": "/ˈsərvoʊ/"
},
{
"w": "bottle-o",
"m": "酒类商店",
"x": "I'll grab a drink from the bottle-o.",
"c": "Aussie slang"
},
{
"w": "thongs",
"m": "人字拖",
"x": "Don't wear thongs to work.",
"c": "Aussie slang"
},
{
"w": "ute",
"m": "皮卡车",
"x": "He loaded the tools into his ute.",
"c": "Aussie slang"
},
{
"w": "sunnies",
"m": "太阳镜",
"x": "Don't forget your sunnies.",
"c": "Aussie slang"
},
{
"w": "Maccas",
"m": "麦当劳",
"x": "Let's get Maccas.",
"c": "Aussie slang"
},
{
"w": "Woolies",
"m": "Woolworths超市",
"x": "I'm off to Woolies.",
"c": "Aussie slang"
},
{
"w": "cuppa",
"m": "一杯茶/咖啡",
"x": "Fancy a cuppa?",
"c": "Aussie slang"
},
{
"w": "arvo",
"m": "下午",
"x": "See you this arvo.",
"c": "Aussie slang"
},
{
"w": "fair dinkum",
"m": "真的，地道的",
"x": "He's a fair dinkum good bloke.",
"c": "Aussie slang"
},
{
"w": "bloke",
"m": "男人，家伙",
"x": "He's a nice bloke.",
"c": "Aussie slang",
"ipa": "/bloʊk/"
},
{
"w": "sheila",
"m": "女人（老派）",
"x": "That's an old word for a woman: sheila.",
"c": "Aussie slang",
"ipa": "/ˈʃilə/"
},
{
"w": "mozzie",
"m": "蚊子",
"x": "The mozzies are bad tonight.",
"c": "Aussie slang"
},
{
"w": "barbie",
"m": "烧烤架",
"x": "Throw some snags on the barbie.",
"c": "Aussie slang",
"ipa": "/ˈbɑrbi/"
},
{
"w": "snag",
"m": "香肠",
"x": "I'll have a snag in bread.",
"c": "Aussie slang",
"ipa": "/snæg/"
},
{
"w": "esky",
"m": "冷藏箱",
"x": "Put the drinks in the esky.",
"c": "Aussie slang"
},
{
"w": "devo",
"m": "非常失望",
"x": "I missed the bus, I'm devo.",
"c": "Aussie slang"
},
{
"w": "stoked",
"m": "非常开心",
"x": "I'm stoked with my new job.",
"c": "Aussie slang",
"ipa": "/stoʊkt/"
},
{
"w": "knackered",
"m": "累坏了",
"x": "I'm knackered after that shift.",
"c": "Aussie slang"
},
{
"w": "crook",
"m": "生病的",
"x": "I'm feeling a bit crook today.",
"c": "Aussie slang",
"ipa": "/krʊk/"
},
{
"w": "chuck a sickie",
"m": "装病请假",
"x": "He chucked a sickie on Friday.",
"c": "Aussie slang"
},
{
"w": "she'll be right",
"m": "会没事的",
"x": "Don't stress, she'll be right.",
"c": "Aussie slang",
"ipa": "/ʃɛl bi raɪt/"
},
{
"w": "too easy",
"m": "没问题，太简单",
"x": "Too easy, I'll do it now.",
"c": "Aussie slang",
"ipa": "/tu ˈizi/"
},
{
"w": "how ya going",
"m": "你好吗",
"x": "How ya going, mate?",
"c": "Aussie slang",
"ipa": "/haʊ jɑ goʊɪŋ/"
},
{
"w": "dunny",
"m": "厕所",
"x": "Where's the dunny?",
"c": "Aussie slang"
},
{
"w": "tradie",
"m": "技工（电工水管工等）",
"x": "The tradie is coming at nine.",
"c": "Aussie slang"
},
{
"w": "rego",
"m": "车辆注册",
"x": "My car rego is due.",
"c": "Aussie slang",
"ipa": "/ˈrɛgoʊ/"
},
{
"w": "uni",
"m": "大学",
"x": "My daughter is at uni.",
"c": "Aussie slang",
"ipa": "/ˈjuni/"
},
{
"w": "smoko",
"m": "休息时间",
"x": "Let's have smoko at ten.",
"c": "Aussie slang"
},
{
"w": "Aussie",
"m": "澳洲人；澳洲的",
"x": "He's a true Aussie.",
"c": "Aussie slang",
"ipa": "/ˈɔsi/"
},
{
"w": "avo",
"m": "牛油果",
"x": "Smashed avo on toast, please.",
"c": "Aussie slang"
},
{
"w": "analyse",
"m": "分析",
"x": "Researchers analysed data from 2,000 households.",
"c": "IELTS: C1–C2 vocabulary",
"n": "analyse data / carefully analyse"
},
{
"w": "approach",
"m": "方法",
"x": "A holistic approach is needed to tackle obesity.",
"c": "IELTS: C1–C2 vocabulary",
"n": "adopt an approach / a holistic approach",
"ipa": "/əˈproʊʧ/"
},
{
"w": "assess",
"m": "评估",
"x": "It is difficult to assess the long-term impact.",
"c": "IELTS: C1–C2 vocabulary",
"n": "assess the impact / accurately assess",
"ipa": "/əˈsɛs/"
},
{
"w": "assume",
"m": "假定",
"x": "It is often assumed that technology isolates people.",
"c": "IELTS: C1–C2 vocabulary",
"n": "widely assumed / assume responsibility",
"ipa": "/əˈsum/"
},
{
"w": "authority",
"m": "权威；当局",
"x": "Local authorities should invest in public transport.",
"c": "IELTS: C1–C2 vocabulary",
"n": "local authorities / in authority",
"ipa": "/əˈθɔrəti/"
},
{
"w": "available",
"m": "可获得的",
"x": "Fresh produce is readily available in cities.",
"c": "IELTS: C1–C2 vocabulary",
"n": "readily available / widely available",
"ipa": "/əˈveɪləbəl/"
},
{
"w": "benefit",
"m": "好处",
"x": "The benefits far outweigh the drawbacks.",
"c": "IELTS: C1–C2 vocabulary",
"n": "reap the benefits / mutual benefit",
"ipa": "/ˈbɛnəfɪt/"
},
{
"w": "concept",
"m": "概念",
"x": "The concept of remote work is not new.",
"c": "IELTS: C1–C2 vocabulary",
"n": "grasp a concept / abstract concept",
"ipa": "/ˈkɑnsɛpt/"
},
{
"w": "consistent",
"m": "一致的",
"x": "Results were consistent with earlier studies.",
"c": "IELTS: C1–C2 vocabulary",
"n": "consistent with / remain consistent",
"ipa": "/kənˈsɪstənt/"
},
{
"w": "constitute",
"m": "构成",
"x": "Young people constitute a third of the workforce.",
"c": "IELTS: C1–C2 vocabulary",
"n": "constitute a threat / constitute a majority",
"ipa": "/ˈkɑnstəˌtut/"
},
{
"w": "context",
"m": "背景",
"x": "In this context, the policy makes sense.",
"c": "IELTS: C1–C2 vocabulary",
"n": "in this context / historical context",
"ipa": "/ˈkɑntɛkst/"
},
{
"w": "contract",
"m": "合同；收缩",
"x": "Muscles contract when cold.",
"c": "IELTS: C1–C2 vocabulary",
"n": "sign a contract / contract a disease",
"ipa": "/ˈkɑnˌtrækt/"
},
{
"w": "create",
"m": "创造",
"x": "The scheme created thousands of jobs.",
"c": "IELTS: C1–C2 vocabulary",
"n": "create opportunities / create jobs",
"ipa": "/kriˈeɪt/"
},
{
"w": "data",
"m": "数据",
"x": "The data reveal a clear upward trend.",
"c": "IELTS: C1–C2 vocabulary",
"n": "collect data / reliable data",
"ipa": "/ˈdætə/"
},
{
"w": "define",
"m": "定义",
"x": "Success is hard to define.",
"c": "IELTS: C1–C2 vocabulary",
"n": "clearly defined / define a role",
"ipa": "/dɪˈfaɪn/"
},
{
"w": "derive",
"m": "源自",
"x": "Many English words derive from Latin.",
"c": "IELTS: C1–C2 vocabulary",
"n": "derive from / derive pleasure",
"ipa": "/dəraɪv/"
},
{
"w": "distribute",
"m": "分配；分发",
"x": "Wealth is unevenly distributed.",
"c": "IELTS: C1–C2 vocabulary",
"n": "evenly distributed / distribute resources",
"ipa": "/dɪˈstrɪbjut/"
},
{
"w": "economy",
"m": "经济",
"x": "The economy relies heavily on tourism.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a thriving economy / boost the economy",
"ipa": "/ɪˈkɑnəmi/"
},
{
"w": "environment",
"m": "环境",
"x": "Children need a stable home environment.",
"c": "IELTS: C1–C2 vocabulary",
"n": "protect the environment / working environment",
"ipa": "/ɪnˈvaɪrənmənt/"
},
{
"w": "establish",
"m": "建立",
"x": "The company was established in 1990.",
"c": "IELTS: C1–C2 vocabulary",
"n": "establish a link / well established",
"ipa": "/ɪˈstæblɪʃ/"
},
{
"w": "estimate",
"m": "估计",
"x": "It is estimated that 40% of food is wasted.",
"c": "IELTS: C1–C2 vocabulary",
"n": "rough estimate / conservative estimate",
"ipa": "/ˈɛstəˌmeɪt/"
},
{
"w": "evident",
"m": "明显的",
"x": "It is evident that attitudes have shifted.",
"c": "IELTS: C1–C2 vocabulary",
"n": "clearly evident / become evident",
"ipa": "/ˈɛvədənt/"
},
{
"w": "factor",
"m": "因素",
"x": "Cost is a key factor in the decision.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a key factor / contributing factor",
"ipa": "/ˈfæktər/"
},
{
"w": "finance",
"m": "财政",
"x": "Governments must finance healthcare properly.",
"c": "IELTS: C1–C2 vocabulary",
"n": "public finance / finance a project",
"ipa": "/ˈfaɪˌnæns/"
},
{
"w": "formula",
"m": "公式；方案",
"x": "There is no magic formula for success.",
"c": "IELTS: C1–C2 vocabulary",
"n": "winning formula / magic formula",
"ipa": "/ˈfɔrmjələ/"
},
{
"w": "function",
"m": "功能",
"x": "The primary function of schools is education.",
"c": "IELTS: C1–C2 vocabulary",
"n": "perform a function / primary function",
"ipa": "/ˈfəŋkʃən/"
},
{
"w": "identify",
"m": "识别",
"x": "We must identify the root causes.",
"c": "IELTS: C1–C2 vocabulary",
"n": "identify the cause / identify with",
"ipa": "/aɪˈdɛntəˌfaɪ/"
},
{
"w": "income",
"m": "收入",
"x": "Low-income families are hit hardest.",
"c": "IELTS: C1–C2 vocabulary",
"n": "disposable income / low-income",
"ipa": "/ˈɪnˌkəm/"
},
{
"w": "indicate",
"m": "表明",
"x": "Surveys indicate growing concern.",
"c": "IELTS: C1–C2 vocabulary",
"n": "clearly indicate / indicate that",
"ipa": "/ˈɪndəˌkeɪt/"
},
{
"w": "individual",
"m": "个人",
"x": "Individuals must take responsibility for their health.",
"c": "IELTS: C1–C2 vocabulary",
"n": "individual rights / each individual",
"ipa": "/ˌɪndəˈvɪʤəwəl/"
},
{
"w": "interpret",
"m": "解读",
"x": "The data can be interpreted in different ways.",
"c": "IELTS: C1–C2 vocabulary",
"n": "interpret results / misinterpret",
"ipa": "/ˌɪnˈtərprət/"
},
{
"w": "involve",
"m": "涉及",
"x": "The job involves frequent travel.",
"c": "IELTS: C1–C2 vocabulary",
"n": "actively involved / involve risk",
"ipa": "/ˌɪnˈvɑlv/"
},
{
"w": "issue",
"m": "问题",
"x": "Climate change is a pressing issue.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a pressing issue / address an issue",
"ipa": "/ˈɪʃu/"
},
{
"w": "legislation",
"m": "立法",
"x": "New legislation bans single-use plastics.",
"c": "IELTS: C1–C2 vocabulary",
"n": "introduce legislation / under legislation",
"ipa": "/ˌlɛʤəsˈleɪʃən/"
},
{
"w": "major",
"m": "主要的",
"x": "Pollution is a major concern.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a major concern / play a major role",
"ipa": "/ˈmeɪʤər/"
},
{
"w": "method",
"m": "方法",
"x": "Traditional teaching methods are still effective.",
"c": "IELTS: C1–C2 vocabulary",
"n": "teaching methods / adopt a method",
"ipa": "/ˈmɛθəd/"
},
{
"w": "occur",
"m": "发生",
"x": "Most accidents occur at home.",
"c": "IELTS: C1–C2 vocabulary",
"n": "frequently occur / naturally occurring",
"ipa": "/əˈkər/"
},
{
"w": "percent",
"m": "百分比",
"x": "Sales rose by 15 percent.",
"c": "IELTS: C1–C2 vocabulary",
"n": "per cent increase",
"ipa": "/pərˈsɛnt/"
},
{
"w": "period",
"m": "时期",
"x": "Over the same period, exports doubled.",
"c": "IELTS: C1–C2 vocabulary",
"n": "over a period / a ten-year period",
"ipa": "/ˈpɪriəd/"
},
{
"w": "policy",
"m": "政策",
"x": "Strict policies can reduce smoking.",
"c": "IELTS: C1–C2 vocabulary",
"n": "implement a policy / government policy",
"ipa": "/ˈpɑləsi/"
},
{
"w": "principle",
"m": "原则",
"x": "In principle, I agree.",
"c": "IELTS: C1–C2 vocabulary",
"n": "in principle / basic principle",
"ipa": "/ˈprɪnsəpəl/"
},
{
"w": "procedure",
"m": "程序",
"x": "Follow the standard procedure.",
"c": "IELTS: C1–C2 vocabulary",
"n": "standard procedure / safety procedure",
"ipa": "/prəˈsiʤər/"
},
{
"w": "process",
"m": "过程",
"x": "Learning a language is a gradual process.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a gradual process / in the process of",
"ipa": "/ˈprɔˌsɛs/"
},
{
"w": "require",
"m": "需要",
"x": "The role requires strong communication skills.",
"c": "IELTS: C1–C2 vocabulary",
"n": "be required to / require attention",
"ipa": "/ˌrikˈwaɪər/"
},
{
"w": "research",
"m": "研究",
"x": "Extensive research supports this view.",
"c": "IELTS: C1–C2 vocabulary",
"n": "conduct research / extensive research",
"ipa": "/ˈrisərʧ/"
},
{
"w": "respond",
"m": "回应",
"x": "Governments must respond to public concern.",
"c": "IELTS: C1–C2 vocabulary",
"n": "respond to / respond positively",
"ipa": "/rɪˈspɑnd/"
},
{
"w": "role",
"m": "角色",
"x": "Parents play a crucial role in education.",
"c": "IELTS: C1–C2 vocabulary",
"n": "play a role / pivotal role",
"ipa": "/roʊl/"
},
{
"w": "section",
"m": "部分",
"x": "The final section summarises the findings.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a section of / cross-section",
"ipa": "/ˈsɛkʃən/"
},
{
"w": "sector",
"m": "行业",
"x": "The service sector employs most people.",
"c": "IELTS: C1–C2 vocabulary",
"n": "private sector / public sector",
"ipa": "/ˈsɛktər/"
},
{
"w": "significant",
"m": "显著的",
"x": "There was a significant rise in prices.",
"c": "IELTS: C1–C2 vocabulary",
"n": "statistically significant / significant impact",
"ipa": "/sɪgˈnɪfɪkənt/"
},
{
"w": "similar",
"m": "相似的",
"x": "The two cities followed a similar pattern.",
"c": "IELTS: C1–C2 vocabulary",
"n": "broadly similar / similar to",
"ipa": "/ˈsɪmələr/"
},
{
"w": "source",
"m": "来源",
"x": "Solar power is a renewable source of energy.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a reliable source / energy source",
"ipa": "/sɔrs/"
},
{
"w": "specific",
"m": "具体的",
"x": "Give specific examples to support your view.",
"c": "IELTS: C1–C2 vocabulary",
"n": "specific needs / be specific",
"ipa": "/spɪˈsɪfɪk/"
},
{
"w": "structure",
"m": "结构",
"x": "The social structure has changed rapidly.",
"c": "IELTS: C1–C2 vocabulary",
"n": "social structure / sentence structure",
"ipa": "/ˈstrəkʧər/"
},
{
"w": "theory",
"m": "理论",
"x": "In theory, the plan should work.",
"c": "IELTS: C1–C2 vocabulary",
"n": "in theory / put forward a theory",
"ipa": "/ˈθɪri/"
},
{
"w": "vary",
"m": "变化",
"x": "Prices vary considerably from region to region.",
"c": "IELTS: C1–C2 vocabulary",
"n": "vary widely / vary considerably",
"ipa": "/ˈvɛri/"
},
{
"w": "achieve",
"m": "实现",
"x": "Few countries have achieved full employment.",
"c": "IELTS: C1–C2 vocabulary",
"n": "achieve a goal / achieve success",
"ipa": "/əˈʧiv/"
},
{
"w": "acquire",
"m": "获得",
"x": "Children acquire language naturally.",
"c": "IELTS: C1–C2 vocabulary",
"n": "acquire skills / acquire knowledge",
"ipa": "/əkˈwaɪər/"
},
{
"w": "administration",
"m": "管理",
"x": "Hospital administration costs have risen.",
"c": "IELTS: C1–C2 vocabulary",
"n": "public administration",
"ipa": "/ædˌmɪnɪˈstreɪʃən/"
},
{
"w": "affect",
"m": "影响",
"x": "Noise affects sleep quality.",
"c": "IELTS: C1–C2 vocabulary",
"n": "adversely affect / directly affect",
"ipa": "/əˈfɛkt/"
},
{
"w": "appropriate",
"m": "恰当的",
"x": "Take appropriate measures.",
"c": "IELTS: C1–C2 vocabulary",
"n": "appropriate measures / deem appropriate",
"ipa": "/əˈproʊpriˌeɪt/"
},
{
"w": "aspect",
"m": "方面",
"x": "Every aspect of life is affected by technology.",
"c": "IELTS: C1–C2 vocabulary",
"n": "every aspect / a key aspect",
"ipa": "/ˈæˌspɛkt/"
},
{
"w": "assist",
"m": "协助",
"x": "Volunteers assist elderly residents.",
"c": "IELTS: C1–C2 vocabulary",
"n": "assist with / financial assistance",
"ipa": "/əˈsɪst/"
},
{
"w": "category",
"m": "类别",
"x": "The data fall into three categories.",
"c": "IELTS: C1–C2 vocabulary",
"n": "fall into a category",
"ipa": "/ˈkætəˌgɔri/"
},
{
"w": "chapter",
"m": "章节",
"x": "A new chapter in history began.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a new chapter",
"ipa": "/ˈʧæptər/"
},
{
"w": "commission",
"m": "委员会；委托",
"x": "The government commissioned a study.",
"c": "IELTS: C1–C2 vocabulary",
"n": "commission a report",
"ipa": "/kəˈmɪʃən/"
},
{
"w": "community",
"m": "社区",
"x": "Libraries serve the whole community.",
"c": "IELTS: C1–C2 vocabulary",
"n": "local community / sense of community",
"ipa": "/kəmˈjunɪti/"
},
{
"w": "complex",
"m": "复杂的",
"x": "This is a complex issue with no easy answer.",
"c": "IELTS: C1–C2 vocabulary",
"n": "highly complex / complex issue",
"ipa": "/ˈkɑmplɛks/"
},
{
"w": "compute",
"m": "计算",
"x": "Costs were computed annually.",
"c": "IELTS: C1–C2 vocabulary",
"n": "computer-generated",
"ipa": "/kəmˈpjut/"
},
{
"w": "conclude",
"m": "总结",
"x": "It can be concluded that the scheme failed.",
"c": "IELTS: C1–C2 vocabulary",
"n": "conclude that / in conclusion",
"ipa": "/kənˈklud/"
},
{
"w": "conduct",
"m": "进行",
"x": "Scientists conducted a series of experiments.",
"c": "IELTS: C1–C2 vocabulary",
"n": "conduct research / conduct a survey",
"ipa": "/ˈkɑndəkt/"
},
{
"w": "consequence",
"m": "后果",
"x": "This could have serious consequences.",
"c": "IELTS: C1–C2 vocabulary",
"n": "dire consequences / as a consequence",
"ipa": "/ˈkɑnsəkwəns/"
},
{
"w": "construct",
"m": "构建",
"x": "They constructed a new bridge.",
"c": "IELTS: C1–C2 vocabulary",
"n": "construct an argument",
"ipa": "/ˈkɑnstrəkt/"
},
{
"w": "consume",
"m": "消耗",
"x": "Cars consume huge amounts of fuel.",
"c": "IELTS: C1–C2 vocabulary",
"n": "consume energy / time-consuming",
"ipa": "/kənˈsum/"
},
{
"w": "credit",
"m": "信用；功劳",
"x": "She deserves credit for her hard work.",
"c": "IELTS: C1–C2 vocabulary",
"n": "take credit / credit card",
"ipa": "/ˈkrɛdɪt/"
},
{
"w": "culture",
"m": "文化",
"x": "Globalisation threatens local cultures.",
"c": "IELTS: C1–C2 vocabulary",
"n": "cultural identity / popular culture",
"ipa": "/ˈkəlʧər/"
},
{
"w": "design",
"m": "设计",
"x": "Urban design influences wellbeing.",
"c": "IELTS: C1–C2 vocabulary",
"n": "well designed / design flaw",
"ipa": "/dɪˈzaɪn/"
},
{
"w": "distinct",
"m": "明显不同的",
"x": "There is a distinct difference.",
"c": "IELTS: C1–C2 vocabulary",
"n": "distinct from / a distinct advantage",
"ipa": "/dɪˈstɪŋkt/"
},
{
"w": "element",
"m": "元素",
"x": "Trust is a key element of teamwork.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a key element",
"ipa": "/ˈɛləmənt/"
},
{
"w": "equate",
"m": "等同",
"x": "Wealth does not equate to happiness.",
"c": "IELTS: C1–C2 vocabulary",
"n": "equate with",
"ipa": "/ɪkˈweɪt/"
},
{
"w": "evaluate",
"m": "评价",
"x": "We need to evaluate the policy's success.",
"c": "IELTS: C1–C2 vocabulary",
"n": "critically evaluate",
"ipa": "/ɪˈvæljuˌeɪt/"
},
{
"w": "feature",
"m": "特征",
"x": "A key feature of the design is safety.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a striking feature / key feature",
"ipa": "/ˈfiʧər/"
},
{
"w": "final",
"m": "最终的",
"x": "The final figure was 40%.",
"c": "IELTS: C1–C2 vocabulary",
"n": "final stage / final decision",
"ipa": "/ˈfaɪnəl/"
},
{
"w": "focus",
"m": "焦点",
"x": "The focus should be on prevention.",
"c": "IELTS: C1–C2 vocabulary",
"n": "shift the focus / focus on",
"ipa": "/ˈfoʊkɪs/"
},
{
"w": "impact",
"m": "影响",
"x": "Tourism has a huge impact on local life.",
"c": "IELTS: C1–C2 vocabulary",
"n": "have an impact on / profound impact",
"ipa": "/ˌɪmˈpækt/"
},
{
"w": "injure",
"m": "受伤",
"x": "Hundreds were injured in the crash.",
"c": "IELTS: C1–C2 vocabulary",
"n": "seriously injured",
"ipa": "/ˈɪnʤər/"
},
{
"w": "institute",
"m": "机构",
"x": "The institute funds medical research.",
"c": "IELTS: C1–C2 vocabulary",
"n": "research institute",
"ipa": "/ˈɪnstɪˌtut/"
},
{
"w": "invest",
"m": "投资",
"x": "Governments should invest in education.",
"c": "IELTS: C1–C2 vocabulary",
"n": "invest heavily / investment in",
"ipa": "/ˌɪnˈvɛst/"
},
{
"w": "item",
"m": "项目，物品",
"x": "Food was the largest item of spending.",
"c": "IELTS: C1–C2 vocabulary",
"n": "household items",
"ipa": "/ˈaɪtəm/"
},
{
"w": "journal",
"m": "期刊",
"x": "The study was published in a medical journal.",
"c": "IELTS: C1–C2 vocabulary",
"n": "academic journal",
"ipa": "/ˈʤərnəl/"
},
{
"w": "maintain",
"m": "维持",
"x": "It is vital to maintain a healthy balance.",
"c": "IELTS: C1–C2 vocabulary",
"n": "maintain standards / maintain that",
"ipa": "/meɪnˈteɪn/"
},
{
"w": "normal",
"m": "正常的",
"x": "Working from home has become the new normal.",
"c": "IELTS: C1–C2 vocabulary",
"n": "the new normal / back to normal",
"ipa": "/ˈnɔrməl/"
},
{
"w": "obtain",
"m": "获得",
"x": "Students can obtain loans easily.",
"c": "IELTS: C1–C2 vocabulary",
"n": "obtain permission / obtain information",
"ipa": "/əbˈteɪn/"
},
{
"w": "participate",
"m": "参与",
"x": "Citizens should participate in local decisions.",
"c": "IELTS: C1–C2 vocabulary",
"n": "actively participate",
"ipa": "/pɑrˈtɪsəˌpeɪt/"
},
{
"w": "perceive",
"m": "感知",
"x": "Risk is often perceived differently.",
"c": "IELTS: C1–C2 vocabulary",
"n": "widely perceived / perceive as",
"ipa": "/pərˈsiv/"
},
{
"w": "positive",
"m": "积极的",
"x": "Exercise has a positive effect on mood.",
"c": "IELTS: C1–C2 vocabulary",
"n": "positive effect / remain positive",
"ipa": "/ˈpɑzətɪv/"
},
{
"w": "potential",
"m": "潜力",
"x": "Renewable energy has enormous potential.",
"c": "IELTS: C1–C2 vocabulary",
"n": "full potential / potential risk",
"ipa": "/pəˈtɛnʃəl/"
},
{
"w": "previous",
"m": "以前的",
"x": "Unlike previous generations, young people rent.",
"c": "IELTS: C1–C2 vocabulary",
"n": "previous generations",
"ipa": "/ˈpriviəs/"
},
{
"w": "primary",
"m": "主要的",
"x": "The primary cause is poverty.",
"c": "IELTS: C1–C2 vocabulary",
"n": "primary cause / primary school",
"ipa": "/ˈpraɪˌmɛri/"
},
{
"w": "purchase",
"m": "购买",
"x": "Online purchases have soared.",
"c": "IELTS: C1–C2 vocabulary",
"n": "make a purchase / purchasing power",
"ipa": "/ˈpərʧəs/"
},
{
"w": "range",
"m": "范围",
"x": "A wide range of factors are involved.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a wide range / range from",
"ipa": "/reɪnʤ/"
},
{
"w": "region",
"m": "地区",
"x": "The northern region is the least developed.",
"c": "IELTS: C1–C2 vocabulary",
"n": "remote regions",
"ipa": "/ˈriʤən/"
},
{
"w": "regulate",
"m": "调控",
"x": "Governments regulate the use of drones.",
"c": "IELTS: C1–C2 vocabulary",
"n": "strictly regulated",
"ipa": "/ˈrɛgjəˌleɪt/"
},
{
"w": "relevant",
"m": "相关的",
"x": "Experience is more relevant than degrees.",
"c": "IELTS: C1–C2 vocabulary",
"n": "highly relevant / relevant to",
"ipa": "/ˈrɛləvənt/"
},
{
"w": "reside",
"m": "居住",
"x": "Most migrants reside in big cities.",
"c": "IELTS: C1–C2 vocabulary",
"n": "permanent resident",
"ipa": "/rɪˈzaɪd/"
},
{
"w": "resource",
"m": "资源",
"x": "Water is a scarce resource.",
"c": "IELTS: C1–C2 vocabulary",
"n": "natural resources / allocate resources",
"ipa": "/ˈrisɔrs/"
},
{
"w": "restrict",
"m": "限制",
"x": "Laws restrict the sale of alcohol.",
"c": "IELTS: C1–C2 vocabulary",
"n": "restrict access / strictly restricted",
"ipa": "/riˈstrɪkt/"
},
{
"w": "secure",
"m": "安全的；获得",
"x": "She secured a place at university.",
"c": "IELTS: C1–C2 vocabulary",
"n": "secure funding / financially secure",
"ipa": "/sɪˈkjʊr/"
},
{
"w": "seek",
"m": "寻求",
"x": "Many people seek advice online.",
"c": "IELTS: C1–C2 vocabulary",
"n": "seek help / seek to",
"ipa": "/sik/"
},
{
"w": "select",
"m": "选择",
"x": "Candidates are carefully selected.",
"c": "IELTS: C1–C2 vocabulary",
"n": "carefully selected",
"ipa": "/səˈlɛkt/"
},
{
"w": "site",
"m": "地点",
"x": "The site will become a park.",
"c": "IELTS: C1–C2 vocabulary",
"n": "construction site / heritage site",
"ipa": "/saɪt/"
},
{
"w": "strategy",
"m": "策略",
"x": "A long-term strategy is essential.",
"c": "IELTS: C1–C2 vocabulary",
"n": "adopt a strategy / long-term strategy",
"ipa": "/ˈstrætəʤi/"
},
{
"w": "survey",
"m": "调查",
"x": "A recent survey found that 60% agreed.",
"c": "IELTS: C1–C2 vocabulary",
"n": "conduct a survey / a recent survey",
"ipa": "/ˈsərˌveɪ/"
},
{
"w": "text",
"m": "文本",
"x": "The text describes a historic event.",
"c": "IELTS: C1–C2 vocabulary",
"n": "written text",
"ipa": "/tɛkst/"
},
{
"w": "tradition",
"m": "传统",
"x": "Many traditions are dying out.",
"c": "IELTS: C1–C2 vocabulary",
"n": "long-standing tradition / break with tradition",
"ipa": "/trəˈdɪʃən/"
},
{
"w": "transfer",
"m": "转移",
"x": "Skills transfer easily between jobs.",
"c": "IELTS: C1–C2 vocabulary",
"n": "knowledge transfer",
"ipa": "/ˈtrænsfər/"
},
{
"w": "alternative",
"m": "替代",
"x": "Cycling is a healthy alternative to driving.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a viable alternative",
"ipa": "/ɔlˈtərnətɪv/"
},
{
"w": "circumstance",
"m": "情况",
"x": "Under no circumstances should children be left alone.",
"c": "IELTS: C1–C2 vocabulary",
"n": "under these circumstances",
"ipa": "/ˈsərkəmˌstæns/"
},
{
"w": "compensate",
"m": "补偿",
"x": "Higher pay cannot compensate for stress.",
"c": "IELTS: C1–C2 vocabulary",
"n": "compensate for",
"ipa": "/ˈkɑmpənˌseɪt/"
},
{
"w": "component",
"m": "组成部分",
"x": "Exercise is a vital component of health.",
"c": "IELTS: C1–C2 vocabulary",
"n": "key component",
"ipa": "/kəmˈpoʊnənt/"
},
{
"w": "consent",
"m": "同意",
"x": "Data must not be shared without consent.",
"c": "IELTS: C1–C2 vocabulary",
"n": "give consent / informed consent",
"ipa": "/kənˈsɛnt/"
},
{
"w": "considerable",
"m": "相当大的",
"x": "There is considerable debate on this.",
"c": "IELTS: C1–C2 vocabulary",
"n": "considerable amount / considerable debate",
"ipa": "/kənˈsɪdərəbəl/"
},
{
"w": "constant",
"m": "持续的",
"x": "Nurses work under constant pressure.",
"c": "IELTS: C1–C2 vocabulary",
"n": "constant pressure",
"ipa": "/ˈkɑnstənt/"
},
{
"w": "constrain",
"m": "限制",
"x": "Growth is constrained by a lack of funds.",
"c": "IELTS: C1–C2 vocabulary",
"n": "financial constraints",
"ipa": "/kənˈstreɪn/"
},
{
"w": "contribute",
"m": "贡献",
"x": "Many factors contribute to obesity.",
"c": "IELTS: C1–C2 vocabulary",
"n": "contribute to / contribute significantly",
"ipa": "/kənˈtrɪbjut/"
},
{
"w": "convene",
"m": "召集",
"x": "Leaders convened to discuss climate change.",
"c": "IELTS: C1–C2 vocabulary",
"n": "convene a meeting",
"ipa": "/kənˈvin/"
},
{
"w": "coordinate",
"m": "协调",
"x": "Agencies must coordinate their efforts.",
"c": "IELTS: C1–C2 vocabulary",
"n": "coordinate efforts",
"ipa": "/koʊˈɔrdəˌneɪt/"
},
{
"w": "core",
"m": "核心",
"x": "Literacy is a core skill.",
"c": "IELTS: C1–C2 vocabulary",
"n": "core values / core skill",
"ipa": "/kɔr/"
},
{
"w": "correspond",
"m": "对应",
"x": "The figures correspond to the 2020 survey.",
"c": "IELTS: C1–C2 vocabulary",
"n": "correspond with",
"ipa": "/ˌkɔrəˈspɑnd/"
},
{
"w": "criteria",
"m": "标准",
"x": "Applicants must meet strict criteria.",
"c": "IELTS: C1–C2 vocabulary",
"n": "meet the criteria",
"ipa": "/kraɪˈtɪriə/"
},
{
"w": "deduce",
"m": "推断",
"x": "From this, we can deduce that sales fell.",
"c": "IELTS: C1–C2 vocabulary",
"n": "deduce from",
"ipa": "/dɪˈdus/"
},
{
"w": "demonstrate",
"m": "证明",
"x": "Studies demonstrate a clear link.",
"c": "IELTS: C1–C2 vocabulary",
"n": "clearly demonstrate",
"ipa": "/ˈdɛmənˌstreɪt/"
},
{
"w": "document",
"m": "文件；记录",
"x": "The changes are well documented.",
"c": "IELTS: C1–C2 vocabulary",
"n": "well documented",
"ipa": "/ˈdɑkjəmɛnt/"
},
{
"w": "dominate",
"m": "主导",
"x": "Large firms dominate the market.",
"c": "IELTS: C1–C2 vocabulary",
"n": "dominate the market",
"ipa": "/ˈdɑməˌneɪt/"
},
{
"w": "emphasis",
"m": "强调",
"x": "There is too much emphasis on exams.",
"c": "IELTS: C1–C2 vocabulary",
"n": "place emphasis on",
"ipa": "/ˈɛmfəsɪs/"
},
{
"w": "ensure",
"m": "确保",
"x": "Measures must ensure public safety.",
"c": "IELTS: C1–C2 vocabulary",
"n": "ensure that / ensure safety",
"ipa": "/ɪnˈʃʊr/"
},
{
"w": "exclude",
"m": "排除",
"x": "Low-income groups are often excluded.",
"c": "IELTS: C1–C2 vocabulary",
"n": "socially excluded",
"ipa": "/ɪkˈsklud/"
},
{
"w": "framework",
"m": "框架",
"x": "A legal framework is needed.",
"c": "IELTS: C1–C2 vocabulary",
"n": "legal framework",
"ipa": "/ˈfreɪmˌwərk/"
},
{
"w": "fund",
"m": "资金",
"x": "The project lacks public funding.",
"c": "IELTS: C1–C2 vocabulary",
"n": "allocate funds / public funding",
"ipa": "/fənd/"
},
{
"w": "illustrate",
"m": "说明",
"x": "The graph illustrates changes in spending.",
"c": "IELTS: C1–C2 vocabulary",
"n": "clearly illustrate",
"ipa": "/ˈɪləˌstreɪt/"
},
{
"w": "immigrate",
"m": "移民",
"x": "Many families immigrated to Australia.",
"c": "IELTS: C1–C2 vocabulary",
"n": "immigration policy",
"ipa": "/ˈɪməˌgreɪt/"
},
{
"w": "imply",
"m": "暗示",
"x": "The data imply a decline.",
"c": "IELTS: C1–C2 vocabulary",
"n": "imply that",
"ipa": "/ˌɪmˈplaɪ/"
},
{
"w": "initial",
"m": "最初的",
"x": "Initial results are promising.",
"c": "IELTS: C1–C2 vocabulary",
"n": "initial stage",
"ipa": "/ˌɪˈnɪʃəl/"
},
{
"w": "instance",
"m": "例子",
"x": "For instance, Japan has an ageing population.",
"c": "IELTS: C1–C2 vocabulary",
"n": "for instance",
"ipa": "/ˈɪnstəns/"
},
{
"w": "interact",
"m": "互动",
"x": "Children interact less face to face.",
"c": "IELTS: C1–C2 vocabulary",
"n": "interact with",
"ipa": "/ˌɪnərˈækt/"
},
{
"w": "justify",
"m": "证明合理",
"x": "Can high prices be justified?",
"c": "IELTS: C1–C2 vocabulary",
"n": "justify the cost",
"ipa": "/ˈʤəstəˌfaɪ/"
},
{
"w": "layer",
"m": "层",
"x": "The ozone layer protects us.",
"c": "IELTS: C1–C2 vocabulary",
"n": "ozone layer",
"ipa": "/leɪər/"
},
{
"w": "link",
"m": "联系",
"x": "There is a strong link between diet and health.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a direct link / link to",
"ipa": "/lɪŋk/"
},
{
"w": "locate",
"m": "位于",
"x": "The factory is located near the port.",
"c": "IELTS: C1–C2 vocabulary",
"n": "be located in",
"ipa": "/ˈloʊˌkeɪt/"
},
{
"w": "maximise",
"m": "最大化",
"x": "Firms aim to maximise profits.",
"c": "IELTS: C1–C2 vocabulary",
"n": "maximise profit"
},
{
"w": "minor",
"m": "较小的",
"x": "There were only minor changes.",
"c": "IELTS: C1–C2 vocabulary",
"n": "minor changes",
"ipa": "/ˈmaɪnər/"
},
{
"w": "negate",
"m": "否定",
"x": "This negates the benefits.",
"c": "IELTS: C1–C2 vocabulary",
"n": "negate the effect",
"ipa": "/nɪˈgeɪt/"
},
{
"w": "outcome",
"m": "结果",
"x": "The outcome was largely positive.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a positive outcome",
"ipa": "/ˈaʊtˌkəm/"
},
{
"w": "partner",
"m": "伙伴",
"x": "Trade partners benefit mutually.",
"c": "IELTS: C1–C2 vocabulary",
"n": "business partner",
"ipa": "/ˈpɑrtnər/"
},
{
"w": "philosophy",
"m": "哲学",
"x": "Her philosophy is to keep things simple.",
"c": "IELTS: C1–C2 vocabulary",
"n": "philosophy of life",
"ipa": "/fəˈlɑsəfi/"
},
{
"w": "physical",
"m": "身体的",
"x": "Physical activity reduces stress.",
"c": "IELTS: C1–C2 vocabulary",
"n": "physical health",
"ipa": "/ˈfɪzɪkəl/"
},
{
"w": "proportion",
"m": "比例",
"x": "A large proportion of students work part-time.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a large proportion",
"ipa": "/prəˈpɔrʃən/"
},
{
"w": "publish",
"m": "出版",
"x": "The findings were published last year.",
"c": "IELTS: C1–C2 vocabulary",
"n": "widely published",
"ipa": "/ˈpəblɪʃ/"
},
{
"w": "react",
"m": "反应",
"x": "People react differently to stress.",
"c": "IELTS: C1–C2 vocabulary",
"n": "react to",
"ipa": "/riækt/"
},
{
"w": "register",
"m": "登记",
"x": "Over 3 million voters registered.",
"c": "IELTS: C1–C2 vocabulary",
"n": "register for",
"ipa": "/ˈrɛʤɪstər/"
},
{
"w": "rely",
"m": "依赖",
"x": "Many rely on public transport.",
"c": "IELTS: C1–C2 vocabulary",
"n": "rely heavily on",
"ipa": "/rɪˈlaɪ/"
},
{
"w": "remove",
"m": "移除",
"x": "Barriers to trade were removed.",
"c": "IELTS: C1–C2 vocabulary",
"n": "remove barriers",
"ipa": "/riˈmuv/"
},
{
"w": "scheme",
"m": "方案",
"x": "A government scheme supports first-home buyers.",
"c": "IELTS: C1–C2 vocabulary",
"n": "pension scheme",
"ipa": "/skim/"
},
{
"w": "sequence",
"m": "顺序",
"x": "Events happened in a logical sequence.",
"c": "IELTS: C1–C2 vocabulary",
"n": "in sequence",
"ipa": "/ˈsikwəns/"
},
{
"w": "shift",
"m": "转变",
"x": "There has been a shift towards online shopping.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a major shift / shift towards",
"ipa": "/ʃɪft/"
},
{
"w": "specify",
"m": "具体说明",
"x": "The contract specifies the hours.",
"c": "IELTS: C1–C2 vocabulary",
"n": "unless otherwise specified",
"ipa": "/ˈspɛsəˌfaɪ/"
},
{
"w": "sufficient",
"m": "足够的",
"x": "There is insufficient evidence.",
"c": "IELTS: C1–C2 vocabulary",
"n": "sufficient evidence",
"ipa": "/səˈfɪʃənt/"
},
{
"w": "task",
"m": "任务",
"x": "Automation handles repetitive tasks.",
"c": "IELTS: C1–C2 vocabulary",
"n": "perform a task",
"ipa": "/tæsk/"
},
{
"w": "technical",
"m": "技术的",
"x": "Technical skills are in demand.",
"c": "IELTS: C1–C2 vocabulary",
"n": "technical skills",
"ipa": "/ˈtɛknɪkəl/"
},
{
"w": "technique",
"m": "技巧",
"x": "New farming techniques boosted yields.",
"c": "IELTS: C1–C2 vocabulary",
"n": "advanced techniques",
"ipa": "/tɛkˈnik/"
},
{
"w": "technology",
"m": "科技",
"x": "Technology has transformed education.",
"c": "IELTS: C1–C2 vocabulary",
"n": "cutting-edge technology",
"ipa": "/tɛkˈnɑləʤi/"
},
{
"w": "valid",
"m": "有效的",
"x": "That is a valid point.",
"c": "IELTS: C1–C2 vocabulary",
"n": "a valid point",
"ipa": "/ˈvælɪd/"
},
{
"w": "volume",
"m": "量",
"x": "The volume of traffic has doubled.",
"c": "IELTS: C1–C2 vocabulary",
"n": "traffic volume",
"ipa": "/ˈvɑljum/"
},
{
"w": "detrimental",
"m": "有害的",
"x": "Excessive screen time is detrimental to children.",
"c": "IELTS: C1–C2 vocabulary",
"n": "detrimental effect on",
"ipa": "/ˌdɛtrəˈmɛnəl/"
},
{
"w": "exacerbate",
"m": "加剧",
"x": "Car use exacerbates air pollution.",
"c": "IELTS: C1–C2 vocabulary",
"n": "exacerbate the problem",
"ipa": "/ɪgˈzæsərˌbeɪt/"
},
{
"w": "mitigate",
"m": "缓解",
"x": "Trees help mitigate urban heat.",
"c": "IELTS: C1–C2 vocabulary",
"n": "mitigate the effects",
"ipa": "/ˈmɪtəˌgeɪt/"
},
{
"w": "alleviate",
"m": "减轻",
"x": "Better transport would alleviate congestion.",
"c": "IELTS: C1–C2 vocabulary",
"n": "alleviate poverty",
"ipa": "/əˈliviˌeɪt/"
},
{
"w": "ubiquitous",
"m": "无处不在的",
"x": "Smartphones are now ubiquitous.",
"c": "IELTS: C1–C2 vocabulary",
"n": "ubiquitous technology",
"ipa": "/juˈbɪkwɪtəs/"
},
{
"w": "unprecedented",
"m": "前所未有的",
"x": "We face unprecedented challenges.",
"c": "IELTS: C1–C2 vocabulary",
"n": "on an unprecedented scale",
"ipa": "/ənˈprɛsɪˌdɛntɪd/"
},
{
"w": "indispensable",
"m": "不可或缺的",
"x": "The internet is indispensable for business.",
"c": "IELTS: C1–C2 vocabulary",
"n": "indispensable to",
"ipa": "/ˌɪndɪˈspɛnsəbəl/"
},
{
"w": "The graph illustrates",
"m": "图表说明了",
"x": "The graph illustrates changes in energy use between 1990 and 2020.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 opening",
"ipa": "/ðə græf ˈɪləˌstreɪts/"
},
{
"w": "Overall, it is clear that",
"m": "总体来看，很明显",
"x": "Overall, it is clear that coal use declined while solar rose.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 overview"
},
{
"w": "witnessed a sharp rise",
"m": "经历急剧上升",
"x": "Online sales witnessed a sharp rise in 2020.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 trend",
"ipa": "/ˈwɪtnəst ə ʃɑrp raɪz/"
},
{
"w": "declined steadily",
"m": "稳步下降",
"x": "The birth rate declined steadily over the period.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 trend",
"ipa": "/dɪˈklaɪnd ˈstɛdəli/"
},
{
"w": "peaked at",
"m": "达到峰值",
"x": "Unemployment peaked at 12% in 1993.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 trend",
"ipa": "/pikt æt/"
},
{
"w": "levelled off",
"m": "趋于平稳",
"x": "Prices levelled off after 2015.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 trend",
"ipa": "/ˈlɛvəld ɔf/"
},
{
"w": "fluctuated around",
"m": "在……左右波动",
"x": "Sales fluctuated around 500 units.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 trend",
"ipa": "/ˈfləkʧəˌweɪtɪd əraʊnd/"
},
{
"w": "accounted for",
"m": "占……",
"x": "Coal accounted for nearly half of all electricity.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 proportion",
"ipa": "/əˈkaʊntɪd fər/"
},
{
"w": "by contrast",
"m": "相比之下",
"x": "By contrast, rural populations shrank.",
"c": "IELTS: Writing phrases & linking",
"n": "contrast",
"ipa": "/baɪ ˈkɑntræst/"
},
{
"w": "whereas",
"m": "然而，而",
"x": "Men preferred sport, whereas women favoured reading.",
"c": "IELTS: Writing phrases & linking",
"n": "contrast",
"ipa": "/wɛˈræz/"
},
{
"w": "in comparison with",
"m": "与……相比",
"x": "In comparison with 2000, car ownership doubled.",
"c": "IELTS: Writing phrases & linking",
"n": "comparison",
"ipa": "/ɪn kəmˈpɛrəsən wɪθ/"
},
{
"w": "a similar pattern",
"m": "相似的模式",
"x": "A similar pattern can be seen in Japan.",
"c": "IELTS: Writing phrases & linking",
"n": "comparison",
"ipa": "/ə ˈsɪmələr ˈpætərn/"
},
{
"w": "approximately",
"m": "大约",
"x": "Approximately a third of adults smoked.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 approximation",
"ipa": "/əˈprɑksəmətli/"
},
{
"w": "just under",
"m": "略低于",
"x": "Just under half of respondents agreed.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 approximation",
"ipa": "/ʤɪst ˈəndər/"
},
{
"w": "the vast majority",
"m": "绝大多数",
"x": "The vast majority of students used laptops.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 proportion",
"ipa": "/ðə væst məˈʤɔrəti/"
},
{
"w": "a negligible amount",
"m": "微不足道的量",
"x": "Nuclear power produced a negligible amount.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 1 proportion",
"ipa": "/ə ˈnɛglɪʤəbəl əˈmaʊnt/"
},
{
"w": "It is often argued that",
"m": "人们常常认为",
"x": "It is often argued that technology isolates people.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 2 intro"
},
{
"w": "This essay will argue that",
"m": "本文将论证",
"x": "This essay will argue that the benefits outweigh the drawbacks.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 2 thesis"
},
{
"w": "I firmly believe that",
"m": "我坚信",
"x": "I firmly believe that education should be free.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 2 opinion",
"ipa": "/aɪ ˈfərmli bɪˈliv ðət/"
},
{
"w": "From my perspective",
"m": "在我看来",
"x": "From my perspective, cities should ban cars.",
"c": "IELTS: Writing phrases & linking",
"n": "Task 2 opinion",
"ipa": "/frəm maɪ pərˈspɛktɪv/"
},
{
"w": "Admittedly",
"m": "诚然",
"x": "Admittedly, there are some short-term costs.",
"c": "IELTS: Writing phrases & linking",
"n": "concession",
"ipa": "/ædˈmɪtɪdli/"
},
{
"w": "Nevertheless",
"m": "尽管如此",
"x": "Nevertheless, the long-term gains are greater.",
"c": "IELTS: Writing phrases & linking",
"n": "contrast",
"ipa": "/ˌnɛvərðəˈlɛs/"
},
{
"w": "Furthermore",
"m": "此外",
"x": "Furthermore, it creates jobs.",
"c": "IELTS: Writing phrases & linking",
"n": "addition",
"ipa": "/ˈfərðərˌmɔr/"
},
{
"w": "Moreover",
"m": "而且",
"x": "Moreover, it reduces emissions.",
"c": "IELTS: Writing phrases & linking",
"n": "addition",
"ipa": "/mɔˈroʊvər/"
},
{
"w": "In addition",
"m": "另外",
"x": "In addition, public health would improve.",
"c": "IELTS: Writing phrases & linking",
"n": "addition",
"ipa": "/ɪn əˈdɪʃən/"
},
{
"w": "Consequently",
"m": "因此",
"x": "Consequently, house prices rose.",
"c": "IELTS: Writing phrases & linking",
"n": "result",
"ipa": "/ˈkɑnsəkˌwɛntli/"
},
{
"w": "As a result",
"m": "结果",
"x": "As a result, many young people rent.",
"c": "IELTS: Writing phrases & linking",
"n": "result",
"ipa": "/ɛz ə rɪˈzəlt/"
},
{
"w": "Therefore",
"m": "所以",
"x": "Therefore, governments must act.",
"c": "IELTS: Writing phrases & linking",
"n": "result",
"ipa": "/ˈðɛrˌfɔr/"
},
{
"w": "This is because",
"m": "这是因为",
"x": "This is because wages have not kept pace.",
"c": "IELTS: Writing phrases & linking",
"n": "reason",
"ipa": "/ðɪs ɪz bɪˈkəz/"
},
{
"w": "owing to",
"m": "由于",
"x": "Owing to rising costs, many shops closed.",
"c": "IELTS: Writing phrases & linking",
"n": "reason",
"ipa": "/oʊɪŋ tɪ/"
},
{
"w": "For instance",
"m": "例如",
"x": "For instance, Finland offers free university.",
"c": "IELTS: Writing phrases & linking",
"n": "example",
"ipa": "/fər ˈɪnstəns/"
},
{
"w": "A case in point is",
"m": "一个典型的例子是",
"x": "A case in point is Singapore's public housing.",
"c": "IELTS: Writing phrases & linking",
"n": "example"
},
{
"w": "In other words",
"m": "换句话说",
"x": "In other words, prevention is better than cure.",
"c": "IELTS: Writing phrases & linking",
"n": "clarify",
"ipa": "/ɪn ˈəðər wərdz/"
},
{
"w": "On the one hand",
"m": "一方面",
"x": "On the one hand, tourism brings money.",
"c": "IELTS: Writing phrases & linking",
"n": "discussion",
"ipa": "/ɔn ðə wən hænd/"
},
{
"w": "On the other hand",
"m": "另一方面",
"x": "On the other hand, it can damage the environment.",
"c": "IELTS: Writing phrases & linking",
"n": "discussion",
"ipa": "/ɔn ðə ˈəðər hænd/"
},
{
"w": "Those who oppose this view claim",
"m": "反对者声称",
"x": "Those who oppose this view claim that it is too costly.",
"c": "IELTS: Writing phrases & linking",
"n": "counter-argument"
},
{
"w": "It could be argued that",
"m": "可以说",
"x": "It could be argued that exams cause stress.",
"c": "IELTS: Writing phrases & linking",
"n": "hedging"
},
{
"w": "To a large extent",
"m": "在很大程度上",
"x": "I agree with this statement to a large extent.",
"c": "IELTS: Writing phrases & linking",
"n": "extent",
"ipa": "/tɪ ə lɑrʤ ɪkˈstɛnt/"
},
{
"w": "plays a pivotal role in",
"m": "起着关键作用",
"x": "Family plays a pivotal role in a child's development.",
"c": "IELTS: Writing phrases & linking",
"n": "emphasis"
},
{
"w": "There is no doubt that",
"m": "毫无疑问",
"x": "There is no doubt that obesity is rising.",
"c": "IELTS: Writing phrases & linking",
"n": "certainty"
},
{
"w": "It is undeniable that",
"m": "不可否认",
"x": "It is undeniable that the internet has changed work.",
"c": "IELTS: Writing phrases & linking",
"n": "certainty",
"ipa": "/ɪt ɪz ˌəndɪˈnaɪəbəl ðət/"
},
{
"w": "outweigh",
"m": "超过（利大于弊）",
"x": "The advantages clearly outweigh the disadvantages.",
"c": "IELTS: Writing phrases & linking",
"n": "advantages",
"ipa": "/ˈaʊtˌweɪ/"
},
{
"w": "pose a threat to",
"m": "对……构成威胁",
"x": "Plastic waste poses a threat to marine life.",
"c": "IELTS: Writing phrases & linking",
"n": "problem",
"ipa": "/poʊz ə θrɛt tɪ/"
},
{
"w": "tackle the issue",
"m": "解决问题",
"x": "Governments must tackle the issue of homelessness.",
"c": "IELTS: Writing phrases & linking",
"n": "solution",
"ipa": "/ˈtækəl ðə ˈɪʃu/"
},
{
"w": "a viable solution",
"m": "可行的解决方案",
"x": "Public transport is a viable solution to congestion.",
"c": "IELTS: Writing phrases & linking",
"n": "solution",
"ipa": "/ə ˈvaɪəbəl səˈluʃən/"
},
{
"w": "In conclusion",
"m": "总之",
"x": "In conclusion, both sides have merit.",
"c": "IELTS: Writing phrases & linking",
"n": "conclusion",
"ipa": "/ɪn kənˈkluʒən/"
},
{
"w": "To sum up",
"m": "总结一下",
"x": "To sum up, the policy has more benefits than drawbacks.",
"c": "IELTS: Writing phrases & linking",
"n": "conclusion",
"ipa": "/tɪ səm əp/"
},
{
"w": "All things considered",
"m": "综合考虑",
"x": "All things considered, I support the ban.",
"c": "IELTS: Writing phrases & linking",
"n": "conclusion",
"ipa": "/ɔl θɪŋz kənˈsɪdərd/"
},
{
"w": "not only ... but also",
"m": "不仅……而且",
"x": "It not only saves money but also protects health.",
"c": "IELTS: Writing phrases & linking",
"n": "addition"
},
{
"w": "Not only does it",
"m": "它不仅（倒装）",
"x": "Not only does it save money, but it also saves time.",
"c": "IELTS: Writing phrases & linking",
"n": "inversion",
"ipa": "/nɑt ˈoʊnli dɪz ɪt/"
},
{
"w": "Were governments to",
"m": "如果政府（虚拟倒装）",
"x": "Were governments to invest more, crime would fall.",
"c": "IELTS: Writing phrases & linking",
"n": "conditional",
"ipa": "/wər ˈgəvərnmənts tɪ/"
},
{
"w": "Do you work or study?",
"m": "你工作还是学习？",
"x": "I work night shifts at the moment, which frees up my days to build my own business. It's demanding, but I find the balance quite rewarding.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "What do you do in your free time?",
"m": "空闲时你做什么？",
"x": "To be honest, free time is a luxury for me, but when I get some, I love unwinding at the beach or trying out new cafés in my neighbourhood.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "Do you like your hometown?",
"m": "你喜欢你的家乡吗？",
"x": "Absolutely. It has a laid-back atmosphere and the food is out of this world, although it's become rather crowded in recent years.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "Do you prefer mornings or evenings?",
"m": "你喜欢早上还是晚上？",
"x": "Because I work nights, I've become a bit of a night owl. Evenings are when I feel most alert and productive.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "How often do you use public transport?",
"m": "你多久坐一次公共交通？",
"x": "Fairly regularly. The trains are reliable and it saves me the hassle of finding parking in the city.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "Do you enjoy cooking?",
"m": "你喜欢做饭吗？",
"x": "I do, actually. Cooking is a great way to switch off after a long shift, and it's healthier than relying on takeaway.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "What kind of music do you like?",
"m": "你喜欢什么音乐？",
"x": "I'm quite eclectic in my taste, but I'm particularly into acoustic music because it helps me relax.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "Do you like reading?",
"m": "你喜欢阅读吗？",
"x": "I'd say I'm a keen reader, especially of business books. They give me practical ideas I can apply straight away.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "Is it important to learn English?",
"m": "学英语重要吗？",
"x": "Without a doubt. English opens doors professionally and socially, particularly in a multicultural country like Australia.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "Do you use social media much?",
"m": "你常用社交媒体吗？",
"x": "Probably more than I should! I mainly use it to promote my business, but I try not to let it eat into my time.",
"c": "IELTS: Speaking model answers",
"n": "Part 1"
},
{
"w": "Describe a skill you learned recently.",
"m": "描述一项你最近学会的技能。",
"x": "I'd like to talk about learning to run online ads for my business. I picked it up about six months ago, mostly through trial and error and online tutorials. At first it was quite overwhelming, but once I got the hang of it, I saw a noticeable increase in customers. It taught me that persistence really pays off.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe a person who has influenced you.",
"m": "描述一个影响你的人。",
"x": "The person who has had the most profound influence on me is my first manager in Australia. She was incredibly patient and always encouraged me to speak up, even when my English was shaky. Thanks to her, I gained the confidence to start my own venture.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe a memorable trip.",
"m": "描述一次难忘的旅行。",
"x": "One trip that really stands out was a road trip along the Great Ocean Road. The scenery was breathtaking, especially the Twelve Apostles at sunset. What made it memorable, though, was the spontaneous conversations with locals along the way.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe a difficult decision you made.",
"m": "描述你做过的一个艰难决定。",
"x": "Moving to a new country was by far the toughest decision I've ever made. I had to weigh up leaving my family against the opportunities here. In hindsight, it was the right call, as it pushed me out of my comfort zone.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe a place where you like to relax.",
"m": "描述一个你喜欢放松的地方。",
"x": "There's a small park near my flat that I often go to after a night shift. It's tranquil in the early morning, with only a few joggers and birds around, and it really helps me recharge before I start my day.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe a goal you want to achieve.",
"m": "描述一个你想实现的目标。",
"x": "My main goal is to grow my business to the point where I can quit night shifts. I'm working towards it by improving my English and expanding my customer base. I'd say I'm about halfway there.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe a piece of technology you use every day.",
"m": "描述你每天用的一件科技产品。",
"x": "It has to be my smartphone. It's essentially my office: I manage orders, answer clients and even practise English on it. I'd be lost without it, to be honest.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe a time you helped someone.",
"m": "描述你帮助别人的一次经历。",
"x": "Last year, a new colleague was struggling with the night roster, so I showed him a few tricks to manage his sleep. He told me later it made a huge difference, which was really gratifying.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe an interesting conversation you had.",
"m": "描述一次有趣的对话。",
"x": "I once chatted with an elderly customer who had migrated here in the sixties. Hearing how much Australia had changed was fascinating, and it gave me a whole new perspective on my own journey.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Describe a book or film that inspired you.",
"m": "描述一本激励你的书或电影。",
"x": "A book that inspired me is about small business owners who started from scratch. It made me realise that setbacks are part of the process rather than a sign of failure.",
"c": "IELTS: Speaking model answers",
"n": "Part 2"
},
{
"w": "Why do people work night shifts?",
"m": "人们为什么上夜班？",
"x": "There are a number of reasons. Some industries, like healthcare and logistics, operate around the clock, so someone has to do it. For individuals, the higher penalty rates are a strong incentive, and for people like me, it frees up daytime for other pursuits.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "Does technology make people less sociable?",
"m": "科技让人更不爱社交吗？",
"x": "It's a double-edged sword. On the one hand, people spend hours glued to screens; on the other, technology lets us stay connected with friends overseas. I'd argue it depends on how mindfully we use it.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "Should governments support small businesses?",
"m": "政府应该支持小企业吗？",
"x": "I'd say so, because small businesses are the backbone of the economy. Targeted support, such as tax breaks or training, can create jobs and strengthen local communities.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "How has shopping changed in recent years?",
"m": "近年来购物方式有何变化？",
"x": "Quite dramatically. Online shopping has become the norm, especially since the pandemic, and consumers now expect fast delivery and easy returns. As a result, many high-street shops are struggling to compete.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "Is it better to work for yourself or a company?",
"m": "自己创业还是给公司打工更好？",
"x": "Both have their merits. Working for a company offers stability, whereas being self-employed gives you freedom but far more risk. Personally, I think it hinges on a person's appetite for risk.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "Why is learning a foreign language important?",
"m": "为什么学外语很重要？",
"x": "Beyond the obvious career benefits, learning a language broadens your outlook and helps you understand other cultures from the inside. It also keeps the brain sharp, according to research.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "What problems do big cities face?",
"m": "大城市面临哪些问题？",
"x": "The most pressing ones are housing affordability and congestion. Rapid population growth puts enormous strain on infrastructure, so long-term planning is crucial.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "Will robots replace human workers?",
"m": "机器人会取代人类工人吗？",
"x": "To some extent, yes, particularly in repetitive jobs. However, I believe new roles will emerge that require creativity and emotional intelligence, which machines can't easily replicate.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "How can people achieve a work-life balance?",
"m": "如何实现工作与生活的平衡？",
"x": "Setting clear boundaries is key, such as switching off notifications after hours. Employers also have a role to play by offering flexible arrangements.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "Should university be free?",
"m": "大学应该免费吗？",
"x": "It's a contentious issue. Free education promotes equality, but it places a heavy burden on taxpayers. A compromise might be income-based repayment, like Australia's HECS system.",
"c": "IELTS: Speaking model answers",
"n": "Part 3"
},
{
"w": "a blessing in disguise",
"m": "因祸得福",
"x": "Losing that job was a blessing in disguise.",
"c": "IELTS: Speaking model answers",
"n": "idiom",
"ipa": "/ə ˈblɛsɪŋ ɪn dɪsˈgaɪz/"
},
{
"w": "go the extra mile",
"m": "格外努力",
"x": "Good businesses go the extra mile for customers.",
"c": "IELTS: Speaking model answers",
"n": "idiom",
"ipa": "/goʊ ðə ˈɛkstrə maɪl/"
},
{
"w": "a steep learning curve",
"m": "陡峭的学习曲线",
"x": "Starting a business was a steep learning curve.",
"c": "IELTS: Speaking model answers",
"n": "idiom",
"ipa": "/ə stip ˈlərnɪŋ kərv/"
},
{
"w": "burn the midnight oil",
"m": "开夜车",
"x": "I often burn the midnight oil before deadlines.",
"c": "IELTS: Speaking model answers",
"n": "idiom",
"ipa": "/bərn ðə ˈmɪdˌnaɪt ɔɪl/"
},
{
"w": "hit the nail on the head",
"m": "一针见血",
"x": "You've hit the nail on the head.",
"c": "IELTS: Speaking model answers",
"n": "idiom"
},
{
"w": "the tip of the iceberg",
"m": "冰山一角",
"x": "These complaints are just the tip of the iceberg.",
"c": "IELTS: Speaking model answers",
"n": "idiom"
},
{
"w": "a double-edged sword",
"m": "双刃剑",
"x": "Social media is a double-edged sword.",
"c": "IELTS: Speaking model answers",
"n": "idiom"
},
{
"w": "once in a blue moon",
"m": "千载难逢，很少",
"x": "I eat fast food once in a blue moon.",
"c": "IELTS: Speaking model answers",
"n": "idiom"
},
{
"w": "over the moon",
"m": "欣喜若狂",
"x": "I was over the moon when I passed.",
"c": "IELTS: Speaking model answers",
"n": "idiom",
"ipa": "/ˈoʊvər ðə mun/"
},
{
"w": "think outside the box",
"m": "跳出框框思考",
"x": "Entrepreneurs need to think outside the box.",
"c": "IELTS: Speaking model answers",
"n": "idiom",
"ipa": "/θɪŋk ˈaʊtˈsaɪd ðə bɑks/"
},
{
"w": "increase = rise",
"m": "增加 = 上升",
"x": "Prices increased / Prices rose",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "decrease = decline",
"m": "减少 = 下降",
"x": "Sales decreased / Sales declined",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "important = crucial",
"m": "重要 = 关键",
"x": "an important factor / a crucial factor",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "problem = issue",
"m": "问题 = 议题",
"x": "a serious problem / a serious issue",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "help = assist",
"m": "帮助 = 协助",
"x": "help customers / assist customers",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "show = demonstrate",
"m": "显示 = 证明",
"x": "The study shows / The study demonstrates",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "big = substantial",
"m": "大的 = 大量的",
"x": "a big change / a substantial change",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "many = numerous",
"m": "许多 = 众多",
"x": "many people / numerous people",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "enough = sufficient",
"m": "足够 = 充分",
"x": "enough money / sufficient funds",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "start = commence",
"m": "开始 = 开始（正式）",
"x": "The course starts / The course commences",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "end = terminate",
"m": "结束 = 终止",
"x": "end the contract / terminate the contract",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "buy = purchase",
"m": "买 = 购买",
"x": "buy a house / purchase a property",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "get = obtain",
"m": "得到 = 获得",
"x": "get a visa / obtain a visa",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "need = require",
"m": "需要 = 要求",
"x": "need skills / require skills",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "try = attempt",
"m": "尝试 = 试图",
"x": "try to fix / attempt to fix",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "choose = select",
"m": "选择 = 挑选",
"x": "choose a course / select a course",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "enough evidence = adequate proof",
"m": "足够证据",
"x": "There is enough evidence / There is adequate proof",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "old people = the elderly",
"m": "老人 = 老年人",
"x": "care for old people / care for the elderly",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "young people = youngsters",
"m": "年轻人",
"x": "young people today / today's youngsters",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "children = minors",
"m": "孩子 = 未成年人",
"x": "children under 16 / minors",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "workers = employees",
"m": "工人 = 员工",
"x": "workers were paid / employees were paid",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "company = firm",
"m": "公司 = 企业",
"x": "a large company / a large firm",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "job = occupation",
"m": "工作 = 职业",
"x": "What's your job? / What's your occupation?",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "salary = wage",
"m": "薪水 = 工资",
"x": "a high salary / a high wage",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "city = urban area",
"m": "城市 = 城区",
"x": "people in cities / urban residents",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "countryside = rural area",
"m": "乡村 = 农村地区",
"x": "life in the countryside / rural life",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "pollution = contamination",
"m": "污染",
"x": "water pollution / water contamination",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "dangerous = hazardous",
"m": "危险 = 有害",
"x": "dangerous chemicals / hazardous substances",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "harmful = detrimental",
"m": "有害的",
"x": "harmful effects / detrimental effects",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "cause = lead to",
"m": "导致",
"x": "Smoking causes cancer / Smoking leads to cancer",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "because of = due to",
"m": "因为 = 由于",
"x": "because of rain / due to rain",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "so = consequently",
"m": "所以 = 因此",
"x": "so prices rose / consequently, prices rose",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "but = however",
"m": "但是 = 然而",
"x": "but it failed / however, it failed",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "also = in addition",
"m": "也 = 此外",
"x": "also cheaper / in addition, it is cheaper",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "about = approximately",
"m": "大约",
"x": "about 50% / approximately 50%",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "almost = nearly",
"m": "几乎",
"x": "almost half / nearly half",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "fast = rapid",
"m": "快速",
"x": "fast growth / rapid growth",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "slow = gradual",
"m": "缓慢 = 逐渐",
"x": "a slow change / a gradual change",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "clear = evident",
"m": "清楚 = 明显",
"x": "It is clear / It is evident",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "common = widespread",
"m": "常见 = 普遍",
"x": "a common belief / a widespread belief",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "rare = scarce",
"m": "稀少",
"x": "rare resources / scarce resources",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "main = primary",
"m": "主要",
"x": "the main reason / the primary reason",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "basic = fundamental",
"m": "基本 = 根本",
"x": "basic rights / fundamental rights",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "whole = entire",
"m": "整个",
"x": "the whole country / the entire country",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "area = region",
"m": "区域 = 地区",
"x": "a poor area / a deprived region",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "way = method",
"m": "方式 = 方法",
"x": "a new way / a new method",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "aim = objective",
"m": "目标",
"x": "the main aim / the main objective",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "result = outcome",
"m": "结果",
"x": "the final result / the final outcome",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "reason = factor",
"m": "原因 = 因素",
"x": "one reason / one factor",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "answer = solution",
"m": "答案 = 解决方案",
"x": "an answer to the problem / a solution to the problem",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "change = alter",
"m": "改变 = 更改",
"x": "change the plan / alter the plan",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "make worse = exacerbate",
"m": "使恶化 = 加剧",
"x": "make the problem worse / exacerbate the problem",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "make better = improve",
"m": "使更好 = 改善",
"x": "make life better / improve quality of life",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "reduce = cut",
"m": "减少 = 削减",
"x": "reduce costs / cut costs",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "stop = prevent",
"m": "阻止 = 预防",
"x": "stop crime / prevent crime",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "ban = prohibit",
"m": "禁止",
"x": "ban smoking / prohibit smoking",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "allow = permit",
"m": "允许",
"x": "allow access / permit access",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "think = believe",
"m": "认为 = 相信",
"x": "I think / I believe",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "say = state",
"m": "说 = 陈述",
"x": "The report says / The report states",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "explain = account for",
"m": "解释 = 说明原因",
"x": "explain the rise / account for the rise",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "look at = examine",
"m": "看 = 审视",
"x": "look at the data / examine the data",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "find out = discover",
"m": "发现",
"x": "find out the truth / discover the truth",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "keep = retain",
"m": "保持 = 保留",
"x": "keep staff / retain staff",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "use = utilise",
"m": "使用 = 利用",
"x": "use resources / utilise resources",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "give = provide",
"m": "给 = 提供",
"x": "give support / provide support",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "build = construct",
"m": "建造",
"x": "build roads / construct roads",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "grow = expand",
"m": "增长 = 扩张",
"x": "the business grew / the business expanded",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "famous = renowned",
"m": "著名",
"x": "a famous chef / a renowned chef",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "rich = affluent",
"m": "富裕",
"x": "rich families / affluent families",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "poor = disadvantaged",
"m": "贫穷 = 弱势",
"x": "poor students / disadvantaged students",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "healthy = wholesome",
"m": "健康的",
"x": "healthy food / wholesome food",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "food = diet",
"m": "食物 = 饮食",
"x": "unhealthy food / a poor diet",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "traffic jam = congestion",
"m": "堵车 = 拥堵",
"x": "traffic jams / road congestion",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "house = dwelling",
"m": "房子 = 住所",
"x": "houses / dwellings",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "money = funding",
"m": "钱 = 资金",
"x": "government money / public funding",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "nowadays = currently",
"m": "如今 = 目前",
"x": "nowadays / at present",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "in the past = previously",
"m": "过去 = 以前",
"x": "in the past / previously",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "in the future = in the years to come",
"m": "将来",
"x": "in the future / in the years to come",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "everywhere = ubiquitous",
"m": "到处 = 无处不在",
"x": "phones are everywhere / phones are ubiquitous",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "necessary = essential",
"m": "必要 = 必不可少",
"x": "necessary skills / essential skills",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "hard = challenging",
"m": "难 = 有挑战",
"x": "a hard task / a challenging task",
"c": "IELTS: Paraphrase pairs",
"n": "synonym"
},
{
"w": "stylish",
"m": "时髦的",
"x": "The new hotel is small but stylish.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈstaɪlɪʃ/"
},
{
"w": "well organised",
"m": "组织有序的",
"x": "The festival was well organised.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel"
},
{
"w": "vantage point",
"m": "有利位置，观景点",
"x": "We found a vantage point above the harbour.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈvæntɪʤ pɔɪnt/"
},
{
"w": "spectacular",
"m": "壮观的",
"x": "The view from the hill is spectacular.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/spɛkˈtækjələr/"
},
{
"w": "misconception",
"m": "误解",
"x": "It's a common misconception that the city is unsafe.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/mɪskənˈsɛpʃən/"
},
{
"w": "taciturn",
"m": "沉默寡言的",
"x": "My neighbour is polite but taciturn.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈtæsɪˌtərn/"
},
{
"w": "quirk",
"m": "怪癖，奇特之处",
"x": "Every city has its own quirks.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/kwərk/"
},
{
"w": "jaywalk",
"m": "乱穿马路",
"x": "People rarely jaywalk in this city.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈʤeɪˌwɔk/"
},
{
"w": "deserted",
"m": "空无一人的",
"x": "The streets were deserted at 4 am.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/dɪˈzərtɪd/"
},
{
"w": "ritual",
"m": "习惯，仪式",
"x": "Coffee before work is my daily ritual.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈrɪʧuəl/"
},
{
"w": "distinctive",
"m": "独特的",
"x": "The café has a distinctive style.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/dɪˈstɪŋktɪv/"
},
{
"w": "municipal",
"m": "市政的",
"x": "The municipal pool opens in summer.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/mjuˈnɪsəpəl/"
},
{
"w": "harbour",
"m": "港口",
"x": "We walked along the harbour at sunset.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈhɑrbər/"
},
{
"w": "effusive",
"m": "热情洋溢的",
"x": "She gave us an effusive welcome.",
"n": "Topic: Copenhagen",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈɛfjusɪv/"
},
{
"w": "livable",
"m": "宜居的",
"x": "Melbourne is often called a livable city.",
"n": "Topic: Livable city",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈlɪvəbəl/"
},
{
"w": "infrastructure",
"m": "基础设施",
"x": "Good infrastructure attracts investment.",
"n": "Topic: Livable city",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˌɪnfrəˈstrəkʧər/"
},
{
"w": "congestion",
"m": "拥堵",
"x": "Congestion is worst at 8 am.",
"n": "Topic: City problems",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/kənˈʤɛsʧən/"
},
{
"w": "sanitation",
"m": "卫生设施",
"x": "Poor sanitation spreads disease.",
"n": "Topic: City problems",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˌsænɪˈteɪʃən/"
},
{
"w": "inefficient",
"m": "低效的",
"x": "The old bus system is inefficient.",
"n": "Topic: City problems",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˌɪnɪˈfɪʃənt/"
},
{
"w": "dysfunctional",
"m": "运转不良的",
"x": "The city's planning is dysfunctional.",
"n": "Topic: City problems",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/dɪsˈfəŋkʃənəl/"
},
{
"w": "alarming",
"m": "令人担忧的",
"x": "Crime is rising at an alarming rate.",
"n": "Topic: City problems",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/əˈlɑrmɪŋ/"
},
{
"w": "entice",
"m": "吸引，诱惑",
"x": "Low taxes entice new businesses.",
"n": "Topic: City problems",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ɪnˈtaɪs/"
},
{
"w": "urban sprawl",
"m": "城市扩张",
"x": "Urban sprawl increases commuting time.",
"n": "Topic: City problems",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈərbən sprɔl/"
},
{
"w": "straining",
"m": "使不堪重负",
"x": "Growth is straining public services.",
"n": "Topic: City problems",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈstreɪnɪŋ/"
},
{
"w": "tourist attraction",
"m": "旅游景点",
"x": "The bridge is a major tourist attraction.",
"n": "Topic: Tourism number",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈtʊrɪst əˈtrækʃən/"
},
{
"w": "accommodation",
"m": "住宿",
"x": "Accommodation is hard to find in January.",
"n": "Topic: Tourism number",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/əˌkɑməˈdeɪʃən/"
},
{
"w": "travel agent",
"m": "旅行社代理",
"x": "The travel agent booked our flights.",
"n": "Topic: Travel agent",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈtrævəl ˈeɪʤənt/"
},
{
"w": "campsite",
"m": "露营地",
"x": "The campsite has hot showers.",
"n": "Topic: Camping",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈkæmpˌsaɪt/"
},
{
"w": "arrivals",
"m": "入境人数；到达",
"x": "Tourist arrivals rose last year.",
"n": "Topic: India and China",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ərˈaɪvəlz/"
},
{
"w": "derelict",
"m": "废弃的",
"x": "They restored a derelict warehouse.",
"n": "Topic: India and China",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈdɛrəˌlɪkt/"
},
{
"w": "warehouse",
"m": "仓库",
"x": "The old warehouse became a gallery.",
"n": "Topic: India and China",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈwɛˌrhaʊs/"
},
{
"w": "return ticket",
"m": "往返票",
"x": "A return ticket is cheaper.",
"n": "Topic: Train tickets",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/rɪˈtərn ˈtɪkɪt/"
},
{
"w": "refurbished",
"m": "翻新的",
"x": "The gym was recently refurbished.",
"n": "Topic: Sports facilities",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/riˈfərbɪʃt/"
},
{
"w": "facilities",
"m": "设施",
"x": "The centre has excellent facilities.",
"n": "Topic: Sports facilities",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/fəˈsɪlɪtiz/"
},
{
"w": "membership",
"m": "会员资格",
"x": "Annual membership costs $500.",
"n": "Topic: Sports facilities",
"c": "Simon 雅思听力阅读: City & travel",
"ipa": "/ˈmɛmbərˌʃɪp/"
},
{
"w": "multiculturalism",
"m": "多元文化主义",
"x": "Multiculturalism enriches Australian life.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌməltiˈkəlʧərəˌlɪzəm/"
},
{
"w": "immigration",
"m": "移民",
"x": "Immigration is a hot political issue.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌɪməˈgreɪʃən/"
},
{
"w": "ethnic",
"m": "种族的",
"x": "Sydney has many ethnic communities.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈɛθnɪk/"
},
{
"w": "minority",
"m": "少数群体",
"x": "Religious minorities deserve respect.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/məˈnɔrəti/"
},
{
"w": "identity",
"m": "身份认同",
"x": "Language is part of your identity.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/aɪˈdɛntəˌti/"
},
{
"w": "contradiction",
"m": "矛盾",
"x": "There's no contradiction in having two cultures.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌkɑntrəˈdɪkʃən/"
},
{
"w": "cling onto",
"m": "紧紧抓住",
"x": "Migrants often cling onto their traditions.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/klɪŋ ˈɔntu/"
},
{
"w": "enrich",
"m": "使丰富",
"x": "Travel enriches your life.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ɪnˈrɪʧ/"
},
{
"w": "dominant",
"m": "占主导地位的",
"x": "English is the dominant language here.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈdɑmənənt/"
},
{
"w": "dictate",
"m": "强加，规定",
"x": "No one should dictate how you live.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈdɪkˌteɪt/"
},
{
"w": "integration",
"m": "融入",
"x": "Language helps integration.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌɪnəˈgreɪʃən/"
},
{
"w": "menace",
"m": "威胁",
"x": "Some saw change as a menace.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈmɛnɪs/"
},
{
"w": "hospitable",
"m": "好客的",
"x": "The locals were very hospitable.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈhɑˈspɪtəbəl/"
},
{
"w": "make inroads",
"m": "取得进展",
"x": "The brand is making inroads in Asia.",
"n": "Topic: Multiculturalism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/meɪk ˈɪnˌroʊdz/"
},
{
"w": "vandalism",
"m": "故意破坏公物",
"x": "Vandalism costs the council millions.",
"n": "Topic: Crime",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈvændəlɪzəm/"
},
{
"w": "antisocial behaviour",
"m": "反社会行为",
"x": "Police are tackling antisocial behaviour.",
"n": "Topic: Crime",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌæntɪˈsoʊʃəl bɪˈheɪvjər/"
},
{
"w": "tackle",
"m": "处理，解决",
"x": "We need to tackle crime at its roots.",
"n": "Topic: Crime",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈtækəl/"
},
{
"w": "volunteer",
"m": "志愿者",
"x": "She volunteers at the hospital.",
"n": "Topic: Volunteer",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌvɑlənˈtɪr/"
},
{
"w": "litter",
"m": "垃圾；乱扔",
"x": "Don't drop litter on the beach.",
"n": "Topic: Litter",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈlɪtər/"
},
{
"w": "fine",
"m": "罚款",
"x": "You can get a fine for littering.",
"n": "Topic: Litter",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/faɪn/"
},
{
"w": "consumerism",
"m": "消费主义",
"x": "Consumerism encourages us to buy more.",
"n": "Topic: Consumerism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/kənˈsumərˌɪzəm/"
},
{
"w": "materialism",
"m": "物质主义",
"x": "Materialism doesn't bring happiness.",
"n": "Topic: Consumerism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/məˈtɪriəˌlɪzəm/"
},
{
"w": "spirituality",
"m": "精神性",
"x": "Some people seek spirituality instead.",
"n": "Topic: Consumerism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌspɪrɪˌʧuˈæləˌti/"
},
{
"w": "disconnection",
"m": "脱节",
"x": "Phones can cause disconnection from family.",
"n": "Topic: Consumerism",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌdɪskəˈnɛkʃən/"
},
{
"w": "peer pressure",
"m": "同伴压力",
"x": "Peer pressure affects teenagers.",
"n": "Topic: Teenagers",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/pɪr ˈprɛʃər/"
},
{
"w": "adolescent",
"m": "青少年",
"x": "Adolescents need more sleep.",
"n": "Topic: Teenagers",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌædəˈlɛsənt/"
},
{
"w": "stage in life",
"m": "人生阶段",
"x": "Retirement is a new stage in life.",
"n": "Topic: Teenagers",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/steɪʤ ɪn laɪf/"
},
{
"w": "handouts",
"m": "救济品",
"x": "Kids shouldn't expect handouts.",
"n": "Topic: Chores",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈhænˌdaʊts/"
},
{
"w": "chores",
"m": "家务",
"x": "Giving kids chores teaches responsibility.",
"n": "Topic: Chores",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ʧɔrz/"
},
{
"w": "unemployment",
"m": "失业",
"x": "Unemployment fell to 4 per cent.",
"n": "Topic: Unemployment",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌənɪmˈplɔɪmənt/"
},
{
"w": "paradox",
"m": "悖论",
"x": "It's a paradox: more jobs, more stress.",
"n": "Topic: Unemployment",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈpɛrəˌdɑks/"
},
{
"w": "population growth",
"m": "人口增长",
"x": "Population growth strains housing.",
"n": "Topic: Population",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌpɑpjəˈleɪʃən groʊθ/"
},
{
"w": "stabilise",
"m": "稳定",
"x": "The population will stabilise by 2050.",
"n": "Topic: Population",
"c": "Simon 雅思听力阅读: Society & culture"
},
{
"w": "lifespan",
"m": "寿命",
"x": "Our lifespan has increased.",
"n": "Topic: Lifespan",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈlaɪfˌspæn/"
},
{
"w": "life expectancy",
"m": "预期寿命",
"x": "Life expectancy in Australia is over 80.",
"n": "Topic: Sitting long",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/laɪf ɪkˈspɛktənsi/"
},
{
"w": "longevity",
"m": "长寿",
"x": "Diet affects longevity.",
"n": "Topic: Lifespan",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/lɔnˈʤɛvəti/"
},
{
"w": "climate change",
"m": "气候变化",
"x": "Climate change affects farming.",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈklaɪmɪt ʧeɪnʤ/"
},
{
"w": "global warming",
"m": "全球变暖",
"x": "Global warming raises sea levels.",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈgloʊbəl ˈwɔrmɪŋ/"
},
{
"w": "variation",
"m": "变化",
"x": "There is natural variation in temperature.",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌvɛriˈeɪʃən/"
},
{
"w": "induce",
"m": "引起",
"x": "Stress can induce headaches.",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌɪnˈdus/"
},
{
"w": "distinguish",
"m": "区分",
"x": "Can you distinguish the two sounds?",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/dɪˈstɪŋgwɪʃ/"
},
{
"w": "speculative",
"m": "推测的",
"x": "His theory is purely speculative.",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈspɛkjələtɪv/"
},
{
"w": "variability",
"m": "可变性",
"x": "Rainfall variability makes farming hard.",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/vɛriəˈbɪlɪti/"
},
{
"w": "emission",
"m": "排放",
"x": "We must cut carbon emissions.",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ɪˈmɪʃən/"
},
{
"w": "renewable",
"m": "可再生的",
"x": "Solar is a renewable energy source.",
"n": "Topic: Climate change",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/riˈnuəbəl/"
},
{
"w": "sustain life",
"m": "维持生命",
"x": "Water is needed to sustain life.",
"n": "Topic: Nature",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/səˈsteɪn laɪf/"
},
{
"w": "innate",
"m": "天生的",
"x": "Babies have an innate ability to learn language.",
"n": "Topic: Nature",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌɪˈneɪt/"
},
{
"w": "inbuilt",
"m": "内在的",
"x": "Some fears seem inbuilt.",
"n": "Topic: Nature",
"c": "Simon 雅思听力阅读: Environment & science"
},
{
"w": "indigenous",
"m": "本土的",
"x": "Indigenous frogs are disappearing.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌɪnˈdɪʤənəs/"
},
{
"w": "native",
"m": "本地的，原生的",
"x": "Native plants need less water.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈneɪtɪv/"
},
{
"w": "species",
"m": "物种",
"x": "Many species are endangered.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈspiʃiz/"
},
{
"w": "habitat",
"m": "栖息地",
"x": "Clearing land destroys habitat.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈhæbəˌtæt/"
},
{
"w": "photosynthesis",
"m": "光合作用",
"x": "Plants make food by photosynthesis.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌfoʊtoʊˈsɪnθəsɪs/"
},
{
"w": "wavelength",
"m": "波长",
"x": "Blue light has a short wavelength.",
"n": "Topic: Volunteer",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈweɪvˌlɛŋθ/"
},
{
"w": "scattering",
"m": "散射",
"x": "Scattering makes the sky look blue.",
"n": "Topic: Volunteer",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈskætərɪŋ/"
},
{
"w": "oceanographic",
"m": "海洋学的",
"x": "They joined an oceanographic survey.",
"n": "Topic: Dolphin tagging",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌoʊʃənəˈgræfɪk/"
},
{
"w": "tagging",
"m": "标记追踪",
"x": "Tagging helps track dolphins.",
"n": "Topic: Dolphin tagging",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈtægɪŋ/"
},
{
"w": "quantify",
"m": "量化",
"x": "It's hard to quantify the damage.",
"n": "Topic: Dolphin tagging",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/kˈwɑntɪˌfaɪ/"
},
{
"w": "exertion",
"m": "用力，费力",
"x": "Heavy exertion raises heart rate.",
"n": "Topic: Dolphin tagging",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ɪgˈzərʃən/"
},
{
"w": "suction cup",
"m": "吸盘",
"x": "The tag sticks on with a suction cup.",
"n": "Topic: Dolphin tagging",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈsəkʃən kəp/"
},
{
"w": "data logger",
"m": "数据记录器",
"x": "A data logger records depth.",
"n": "Topic: Dolphin tagging",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈdætə ˈlɑgər/"
},
{
"w": "marine",
"m": "海洋的",
"x": "Marine life is threatened by plastic.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/mərˈin/"
},
{
"w": "fungus",
"m": "真菌",
"x": "Fungus damaged the cave walls.",
"n": "Topic: Cave paintings",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈfəŋgəs/"
},
{
"w": "deteriorate",
"m": "恶化",
"x": "The paintings began to deteriorate.",
"n": "Topic: Cave paintings",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/dɪˈtɪriərˌeɪt/"
},
{
"w": "prehistoric",
"m": "史前的",
"x": "They found prehistoric tools.",
"n": "Topic: Cave paintings",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌprihɪˈstɔrɪk/"
},
{
"w": "inadvertently",
"m": "无意中",
"x": "Visitors inadvertently harmed the site.",
"n": "Topic: Cave paintings",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌɪnədˈvərtəntli/"
},
{
"w": "raw materials",
"m": "原材料",
"x": "Raw materials are shipped overseas.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/rɑ məˈtɪriəlz/"
},
{
"w": "pigment",
"m": "颜料",
"x": "Ochre was used as a pigment.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈpɪgmɛnt/"
},
{
"w": "charcoal",
"m": "木炭",
"x": "Early artists drew with charcoal.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈʧɑrˌkoʊl/"
},
{
"w": "crushed",
"m": "压碎的",
"x": "Add crushed ice to the drink.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/krəʃt/"
},
{
"w": "stir",
"m": "搅拌",
"x": "Stir the paint before use.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/stər/"
},
{
"w": "convert",
"m": "转换",
"x": "Solar panels convert light into power.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈkɑnvərt/"
},
{
"w": "rotate",
"m": "旋转",
"x": "The blades rotate slowly.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈroʊˌteɪt/"
},
{
"w": "attach",
"m": "附上，连接",
"x": "Attach the cable to the back.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/əˈtæʧ/"
},
{
"w": "obesity",
"m": "肥胖",
"x": "Obesity is a growing health problem.",
"n": "Topic: Obesity",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/əˈbisəti/"
},
{
"w": "sedentary",
"m": "久坐不动的",
"x": "A sedentary job can harm your health.",
"n": "Topic: Sitting long",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˈsɛdənˌtɛri/"
},
{
"w": "metabolism",
"m": "新陈代谢",
"x": "Exercise speeds up your metabolism.",
"n": "Topic: Sitting long",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/məˈtæbəˌlɪzəm/"
},
{
"w": "sleep deprivation",
"m": "睡眠不足",
"x": "Night shifts can cause sleep deprivation.",
"n": "Topic: Sleep",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/slip ˌdɛprəˈveɪʃən/"
},
{
"w": "smoking ban",
"m": "禁烟令",
"x": "The smoking ban covers all pubs.",
"n": "Topic: Smoking ban",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/sˈmoʊkɪŋ bæn/"
},
{
"w": "discourage",
"m": "劝阻",
"x": "High taxes discourage smoking.",
"n": "Topic: Smoking ban",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/dɪˈskərɪʤ/"
},
{
"w": "passive smoking",
"m": "二手烟",
"x": "Passive smoking harms children.",
"n": "Topic: Smoking ban",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˈpæsɪv sˈmoʊkɪŋ/"
},
{
"w": "impairment",
"m": "损伤",
"x": "Poor sleep causes memory impairment.",
"n": "Topic: Food for brain",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌɪmˈpɛrmənt/"
},
{
"w": "antioxidant",
"m": "抗氧化剂",
"x": "Berries contain antioxidants.",
"n": "Topic: Food for brain",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌæntiˈɑksədənt/"
},
{
"w": "diminish",
"m": "减少",
"x": "Memory may diminish with age.",
"n": "Topic: Food for brain",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/dɪˈmɪnɪʃ/"
},
{
"w": "cognitive",
"m": "认知的",
"x": "Exercise improves cognitive function.",
"n": "Topic: Food for brain",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˈkɑgnɪtɪv/"
},
{
"w": "inhale",
"m": "吸气",
"x": "Inhale slowly through your nose.",
"n": "Topic: Breathing",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌɪnˈheɪl/"
},
{
"w": "exhale",
"m": "呼气",
"x": "Exhale and relax your shoulders.",
"n": "Topic: Breathing",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ɛksˈheɪl/"
},
{
"w": "resilience",
"m": "韧性",
"x": "Resilience helps you recover from stress.",
"n": "Topic: Happiness",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/rɪˈzɪljəns/"
},
{
"w": "contentment",
"m": "满足",
"x": "She found contentment in simple things.",
"n": "Topic: Happiness",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/kənˈtɛntmənt/"
},
{
"w": "serenity",
"m": "宁静",
"x": "The garden gives me serenity.",
"n": "Topic: Happiness",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/sərˈɛnəti/"
},
{
"w": "routine",
"m": "日常惯例",
"x": "A fixed routine helps after night shift.",
"n": "Topic: Routines",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ruˈtin/"
},
{
"w": "mealtime",
"m": "进餐时间",
"x": "Keep mealtimes regular.",
"n": "Topic: Routines",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˈmilˌtaɪm/"
},
{
"w": "resolution",
"m": "决心",
"x": "My resolution is to read more.",
"n": "Topic: Resolutions",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌrɛzəˈluʃən/"
},
{
"w": "expiry date",
"m": "过期日期",
"x": "Check the expiry date on the milk.",
"n": "Topic: Smart fridge",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌɛkˈspaɪri deɪt/"
},
{
"w": "handedness",
"m": "左右手习惯",
"x": "Handedness appears early in life.",
"n": "Topic: Handedness",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˈhændədnəs/"
},
{
"w": "left-handed",
"m": "左撇子的",
"x": "About 10% of people are left-handed.",
"n": "Topic: Handedness",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌlɛfˈthændɪd/"
},
{
"w": "eyesight",
"m": "视力",
"x": "You need good eyesight to drive.",
"n": "Topic: Drive test",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˈaɪˌsaɪt/"
},
{
"w": "examiner",
"m": "考官",
"x": "The examiner was friendly.",
"n": "Topic: Drive test",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ɪgˈzæmənər/"
},
{
"w": "plagiarism",
"m": "抄袭",
"x": "Plagiarism can get you expelled.",
"n": "Topic: Plagiarism",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈpleɪʤərˌɪzəm/"
},
{
"w": "plagiarise",
"m": "剽窃",
"x": "Never plagiarise someone else's essay.",
"n": "Topic: Plagiarism",
"c": "Simon 雅思听力阅读: Education & study"
},
{
"w": "cite",
"m": "引用",
"x": "Always cite your sources.",
"n": "Topic: Plagiarism",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/saɪt/"
},
{
"w": "revoke",
"m": "撤销",
"x": "His degree was revoked.",
"n": "Topic: Plagiarism",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/rɪˈvoʊk/"
},
{
"w": "imitation",
"m": "模仿",
"x": "Imitation is not the same as learning.",
"n": "Topic: Plagiarism",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˌɪməˈteɪʃən/"
},
{
"w": "dissertation",
"m": "学位论文",
"x": "My dissertation is 10,000 words.",
"n": "Topic: Dissertation",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˌdɪsərˈteɪʃən/"
},
{
"w": "postgraduate",
"m": "研究生",
"x": "She's a postgraduate student.",
"n": "Topic: Dissertation",
"c": "Simon 雅思听力阅读: Education & study"
},
{
"w": "literature review",
"m": "文献综述",
"x": "Start with a literature review.",
"n": "Topic: Dissertation",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈlɪtərəʧər ˌrivˈju/"
},
{
"w": "methodology",
"m": "研究方法",
"x": "Explain your methodology clearly.",
"n": "Topic: Dissertation",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˌmɛθəˈdɑləʤi/"
},
{
"w": "seminar",
"m": "研讨课",
"x": "Seminars are smaller than lectures.",
"n": "Topic: Lecture",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈsɛməˌnɑr/"
},
{
"w": "lecture",
"m": "讲座",
"x": "The lecture starts at 9.",
"n": "Topic: Lecture",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈlɛkʧər/"
},
{
"w": "tutor",
"m": "导师，辅导老师",
"x": "My tutor checks my essays.",
"n": "Topic: Tutor",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈtutər/"
},
{
"w": "blended learning",
"m": "混合式学习",
"x": "Blended learning mixes online and class.",
"n": "Topic: Blended learning",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈblɛndɪd ˈlərnɪŋ/"
},
{
"w": "procrastination",
"m": "拖延",
"x": "Procrastination wastes hours.",
"n": "Topic: Time management",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/prəˌkræstəˈneɪʃən/"
},
{
"w": "time management",
"m": "时间管理",
"x": "Time management is key for shift workers.",
"n": "Topic: Time management",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/taɪm ˈmænɪʤmənt/"
},
{
"w": "cramming",
"m": "临时抱佛脚",
"x": "Cramming the night before rarely works.",
"n": "Topic: Study skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈkræmɪŋ/"
},
{
"w": "rehearse",
"m": "排练，演练",
"x": "Rehearse your answer out loud.",
"n": "Topic: Study skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/riˈhərs/"
},
{
"w": "overwhelm",
"m": "使不知所措",
"x": "Don't let the workload overwhelm you.",
"n": "Topic: Study skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˌoʊvərˈwɛlm/"
},
{
"w": "multitasking",
"m": "多任务处理",
"x": "Multitasking lowers quality.",
"n": "Topic: Multitasking",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈməltiˌtæskɪŋ/"
},
{
"w": "fallacy",
"m": "谬论",
"x": "It's a fallacy that more hours means more output.",
"n": "Topic: Multitasking",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈfæləsi/"
},
{
"w": "study abroad",
"m": "出国留学",
"x": "Many students study abroad in Australia.",
"n": "Topic: Study abroad",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈstədi əˈbrɔd/"
},
{
"w": "homesick",
"m": "想家的",
"x": "I felt homesick at first.",
"n": "Topic: Study abroad",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈhoʊmˌsɪk/"
},
{
"w": "campus tour",
"m": "校园参观",
"x": "We booked a campus tour.",
"n": "Topic: Visit university",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈkæmpəs tʊr/"
},
{
"w": "open day",
"m": "开放日",
"x": "The open day is on Saturday.",
"n": "Topic: Visit university",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈoʊpən deɪ/"
},
{
"w": "paraphrase",
"m": "改述",
"x": "Paraphrase the question in your answer.",
"n": "Topic: Listening skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈpɛrəˌfreɪz/"
},
{
"w": "summarise",
"m": "总结",
"x": "Summarise the main idea in one line.",
"n": "Topic: Listening skills",
"c": "Simon 雅思听力阅读: Education & study"
},
{
"w": "monotonous",
"m": "单调的",
"x": "His voice was monotonous.",
"n": "Topic: Listening skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/məˈnɑtənəs/"
},
{
"w": "invaluable",
"m": "极其宝贵的",
"x": "Your advice was invaluable.",
"n": "Topic: Listening skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˌɪnˈvæljəbəl/"
},
{
"w": "probing question",
"m": "探究性问题",
"x": "She asked probing questions.",
"n": "Topic: Listening skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈproʊbɪŋ kˈwɛʃən/"
},
{
"w": "articulate",
"m": "表达清楚的",
"x": "He's very articulate in meetings.",
"n": "Topic: Interview tips",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ɑrˈtɪkjəˌleɪt/"
},
{
"w": "concisely",
"m": "简明地",
"x": "Answer concisely.",
"n": "Topic: Interview tips",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/kənˈsaɪsli/"
},
{
"w": "restate",
"m": "重述",
"x": "Restate the question before you answer.",
"n": "Topic: Interview tips",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/riˈsteɪt/"
},
{
"w": "language acquisition",
"m": "语言习得",
"x": "Language acquisition starts at birth.",
"n": "Topic: Babies and language",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈlæŋgwɪʤ ˌækwəˈzɪʃən/"
},
{
"w": "metaphor",
"m": "隐喻",
"x": "Teachers use metaphors to explain ideas.",
"n": "Topic: Teachers",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈmɛtəfɔr/"
},
{
"w": "pedagogical",
"m": "教学法的",
"x": "The course has a pedagogical focus.",
"n": "Topic: Map lecture",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˌpɛdəˈgɑʤɪkəl/"
},
{
"w": "literate",
"m": "识字的",
"x": "Most adults here are literate.",
"n": "Topic: Map lecture",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈlɪtərət/"
},
{
"w": "cover letter",
"m": "求职信",
"x": "Keep your cover letter to one page.",
"n": "Topic: Cover letter",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈkəvər ˈlɛtər/"
},
{
"w": "ramble",
"m": "东拉西扯",
"x": "Don't ramble in your cover letter.",
"n": "Topic: Cover letter",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈræmbəl/"
},
{
"w": "elevator pitch",
"m": "电梯演讲（简短自我推销）",
"x": "Practise a 30-second elevator pitch.",
"n": "Topic: Elevator pitch",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈɛləˌveɪtər pɪʧ/"
},
{
"w": "job satisfaction",
"m": "工作满意度",
"x": "Job satisfaction matters more than pay.",
"n": "Topic: Job satisfaction",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ʤɑb ˌsætɪsˈfækʃən/"
},
{
"w": "stifle",
"m": "压制",
"x": "Strict rules stifle creativity.",
"n": "Topic: Job satisfaction",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈstaɪfəl/"
},
{
"w": "competitiveness",
"m": "竞争力",
"x": "Training boosts competitiveness.",
"n": "Topic: Job satisfaction",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/kəmˈpɛtɪtɪvnɪs/"
},
{
"w": "recruiter",
"m": "招聘人员",
"x": "The recruiter called me back.",
"n": "Topic: Nature",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/rɪˈkrutər/"
},
{
"w": "paycheck",
"m": "工资支票",
"x": "Save part of every paycheck.",
"n": "Topic: Save money",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈpeɪˌʧɛk/"
},
{
"w": "overdraft",
"m": "透支",
"x": "The overdraft fee was $15.",
"n": "Topic: Bank account",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈoʊvərˌdræft/"
},
{
"w": "overdrawn",
"m": "透支的",
"x": "My account is overdrawn.",
"n": "Topic: Bank account",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈoʊvərˈdrɔn/"
},
{
"w": "direct debit",
"m": "自动扣款",
"x": "Rent is paid by direct debit.",
"n": "Topic: Bank account",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/dɪˈrɛkt ˈdɛbɪt/"
},
{
"w": "cheque",
"m": "支票",
"x": "Few people use cheques now.",
"n": "Topic: Bank account",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ʧɛk/"
},
{
"w": "interest rate",
"m": "利率",
"x": "The interest rate went up.",
"n": "Topic: Bank account",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈɪntəˌrɛst reɪt/"
},
{
"w": "current account",
"m": "活期账户",
"x": "I opened a current account.",
"n": "Topic: Bank account",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈkɑrənt əˈkaʊnt/"
},
{
"w": "billionaire",
"m": "亿万富翁",
"x": "Billionaires aren't always happy.",
"n": "Topic: Money",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˌbɪljəˈnɛr/"
},
{
"w": "compassionate",
"m": "有同情心的",
"x": "Be compassionate to customers.",
"n": "Topic: Money",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/kəmˈpæʃənət/"
},
{
"w": "subconscious",
"m": "潜意识",
"x": "Ads target our subconscious.",
"n": "Topic: Money",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/səbˈkɑnʃəs/"
},
{
"w": "financial responsibility",
"m": "理财责任",
"x": "Pocket money teaches financial responsibility.",
"n": "Topic: Chores",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˌfaɪˈnænʃəl riˌspɑnsəˈbɪləti/"
},
{
"w": "fulfilment",
"m": "满足感",
"x": "Experiences bring more fulfilment than things.",
"n": "Topic: Spending tips",
"c": "Simon 雅思听力阅读: Work & money"
},
{
"w": "advertiser",
"m": "广告商",
"x": "Advertisers target children.",
"n": "Topic: Children advertising",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈædvərˌtaɪzər/"
},
{
"w": "stealth marketing",
"m": "隐形营销",
"x": "Stealth marketing hides the ad.",
"n": "Topic: Children advertising",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/stɛlθ ˈmɑrkətɪŋ/"
},
{
"w": "astronomical",
"m": "天文数字的",
"x": "The prices are astronomical.",
"n": "Topic: Children advertising",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˌæstrəˈnɑmɪkəl/"
},
{
"w": "elusive",
"m": "难以捉摸的",
"x": "Success can be elusive.",
"n": "Topic: Children advertising",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ɪˈlusɪv/"
},
{
"w": "shipping",
"m": "航运",
"x": "Shipping costs have doubled.",
"n": "Topic: Shipping",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈʃɪpɪŋ/"
},
{
"w": "innovation",
"m": "创新",
"x": "Innovation keeps a business alive.",
"n": "Topic: Innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˌɪnəˈveɪʃən/"
},
{
"w": "intuition",
"m": "直觉",
"x": "Trust your intuition.",
"n": "Topic: Innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˌɪntuˈɪʃən/"
},
{
"w": "hunch",
"m": "预感",
"x": "I had a hunch it would work.",
"n": "Topic: Innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/hənʧ/"
},
{
"w": "stumble upon",
"m": "偶然发现",
"x": "He stumbled upon the idea by chance.",
"n": "Topic: Innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈstəmbəl əˈpɑn/"
},
{
"w": "contemplative",
"m": "沉思的",
"x": "Walking puts me in a contemplative mood.",
"n": "Topic: Innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/kənˈtɛmplətɪv/"
},
{
"w": "biometrics",
"m": "生物识别",
"x": "Biometrics may replace passwords.",
"n": "Topic: Biometrics",
"c": "Simon 雅思听力阅读: Technology & innovation"
},
{
"w": "fingerprint",
"m": "指纹",
"x": "Unlock your phone with a fingerprint.",
"n": "Topic: Biometrics",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈfɪŋgərˌprɪnt/"
},
{
"w": "password",
"m": "密码",
"x": "Change your password regularly.",
"n": "Topic: Biometrics",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈpæsˌwərd/"
},
{
"w": "vending machine",
"m": "自动售货机",
"x": "The vending machine takes cards.",
"n": "Topic: Biometrics",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈvɛndɪŋ məˈʃin/"
},
{
"w": "identifier",
"m": "识别符",
"x": "Your face is a unique identifier.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/aɪˈdɛntəˌfaɪər/"
},
{
"w": "inventor",
"m": "发明家",
"x": "The inventor tested many designs.",
"n": "Topic: Plane innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˌɪnˈvɛntər/"
},
{
"w": "controllable",
"m": "可控制的",
"x": "The aircraft was easily controllable.",
"n": "Topic: Plane innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/kənˈtroʊləbəl/"
},
{
"w": "patent",
"m": "专利",
"x": "He patented his invention.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈpætənt/"
},
{
"w": "pioneer",
"m": "先驱；开创",
"x": "Kodak pioneered roll film.",
"n": "Topic: Photographic film",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˌpaɪəˈnɪr/"
},
{
"w": "exposure",
"m": "曝光",
"x": "The film allowed 100 exposures.",
"n": "Topic: Photographic film",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ɪkˈspoʊʒər/"
},
{
"w": "smart fridge",
"m": "智能冰箱",
"x": "A smart fridge tracks your food.",
"n": "Topic: Smart fridge",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/smɑrt frɪʤ/"
},
{
"w": "3D printing",
"m": "3D打印",
"x": "3D printing can make car parts.",
"n": "Topic: Drive test",
"c": "Simon 雅思听力阅读: Technology & innovation"
},
{
"w": "additive manufacturing",
"m": "增材制造",
"x": "Additive manufacturing builds objects layer by layer.",
"n": "Topic: Drive test",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈædɪtɪv ˌmænjəˈfækʧərɪŋ/"
},
{
"w": "digitally",
"m": "以数字方式",
"x": "The plans are stored digitally.",
"n": "Topic: Drive test",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈdɪʤətəli/"
},
{
"w": "video games",
"m": "电子游戏",
"x": "Video games can improve reaction time.",
"n": "Topic: Video games",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈvɪdioʊ geɪmz/"
},
{
"w": "immersed",
"m": "沉浸的",
"x": "He was immersed in the game.",
"n": "Topic: Video games",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˌɪˈmərst/"
},
{
"w": "groundbreaking",
"m": "开创性的",
"x": "It was groundbreaking research.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈgraʊnˌbreɪkɪŋ/"
},
{
"w": "transformative",
"m": "变革性的",
"x": "The internet was transformative.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˌtrænsˈfɔrmɑˌtɪv/"
},
{
"w": "anthropologist",
"m": "人类学家",
"x": "Anthropologists study human societies.",
"n": "Topic: Anthropologists",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˌænθrəˈpɑləʤɪst/"
},
{
"w": "archaeologist",
"m": "考古学家",
"x": "Archaeologists found ancient tools.",
"n": "Topic: Anthropologists",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˌɑrkiˈɑləʤɪst/"
},
{
"w": "remnants",
"m": "残余",
"x": "They found remnants of a village.",
"n": "Topic: Anthropologists",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈrɛmnənts/"
},
{
"w": "explorer",
"m": "探险家",
"x": "Early explorers mapped the coast.",
"n": "Topic: Anthropologists",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ɪkˈsplɔrər/"
},
{
"w": "cave paintings",
"m": "洞穴壁画",
"x": "The cave paintings are 30,000 years old.",
"n": "Topic: Cave paintings",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/keɪv ˈpeɪnɪŋz/"
},
{
"w": "etiquette",
"m": "礼仪",
"x": "Table etiquette differs by culture.",
"n": "Topic: Food history",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈɛtəkət/"
},
{
"w": "spices",
"m": "香料",
"x": "Spices were once worth more than gold.",
"n": "Topic: Food history",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈspaɪsɪz/"
},
{
"w": "cookbook",
"m": "食谱",
"x": "The first cookbooks were for the rich.",
"n": "Topic: Food history",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈkʊkˌbʊk/"
},
{
"w": "coined by",
"m": "由……创造（词语）",
"x": "The term was coined by a scientist.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/kɔɪnd baɪ/"
},
{
"w": "originate",
"m": "起源",
"x": "The custom originated in China.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ərˈɪʤəˌneɪt/"
},
{
"w": "decipher",
"m": "破译",
"x": "They deciphered secret wartime messages.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/dɪˈsaɪfər/"
},
{
"w": "wartime",
"m": "战时",
"x": "Wartime codes were hard to break.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈwɔrˌtaɪm/"
},
{
"w": "fortified",
"m": "设防的",
"x": "The town was fortified with walls.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈfɔrtəˌfaɪd/"
},
{
"w": "gatehouse",
"m": "门楼",
"x": "Visitors entered through the gatehouse.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research"
},
{
"w": "masonry",
"m": "砖石建筑",
"x": "The masonry is centuries old.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈmeɪsənri/"
},
{
"w": "scaffolding",
"m": "脚手架",
"x": "Scaffolding covered the cathedral.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈskæfəldɪŋ/"
},
{
"w": "eminent",
"m": "杰出的",
"x": "She is an eminent scientist.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈɛmənənt/"
},
{
"w": "experimenter",
"m": "实验者",
"x": "The experimenter recorded each result.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ɪkˈspɛrəˌmɛntər/"
},
{
"w": "qualitative",
"m": "定性的",
"x": "We used qualitative interviews.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/kˈwɑləˌteɪtɪv/"
},
{
"w": "philology",
"m": "语文学",
"x": "Philology studies the history of language.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research"
},
{
"w": "notation",
"m": "符号，记法",
"x": "Musical notation is hard to learn.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/noʊˈteɪʃən/"
},
{
"w": "physiological",
"m": "生理的",
"x": "Stress has physiological effects.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˌfɪziəˈlɑʤɪkəl/"
},
{
"w": "behavioural",
"m": "行为的",
"x": "There were behavioural changes.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research"
},
{
"w": "deviate",
"m": "偏离",
"x": "Don't deviate from the plan.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈdiviˌeɪt/"
},
{
"w": "punctured",
"m": "被刺破的",
"x": "The tyre was punctured.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈpəŋkʧərd/"
},
{
"w": "deforestation",
"m": "森林砍伐",
"x": "Deforestation threatens wildlife.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/dɪˌfɔrɪˈsteɪʃən/"
},
{
"w": "overfishing",
"m": "过度捕捞",
"x": "Overfishing has emptied the seas.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈoʊvərˌfɪʃɪŋ/"
},
{
"w": "pesticide",
"m": "杀虫剂",
"x": "Pesticides can harm bees.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈpɛstəˌsaɪd/"
},
{
"w": "fertiliser",
"m": "肥料",
"x": "Too much fertiliser pollutes rivers.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science"
},
{
"w": "contaminate",
"m": "污染",
"x": "Chemicals can contaminate water.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/kənˈtæməˌneɪt/"
},
{
"w": "topsoil",
"m": "表层土",
"x": "Floods washed away the topsoil.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈtɑpˌsɔɪl/"
},
{
"w": "arable",
"m": "可耕的",
"x": "Arable land is shrinking.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈærəbəl/"
},
{
"w": "estuary",
"m": "河口",
"x": "Birds feed in the estuary.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈɛsʧuˌɛri/"
},
{
"w": "pristine",
"m": "原始的，未受污染的",
"x": "The beach was pristine.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈprɪstin/"
},
{
"w": "habitable",
"m": "适合居住的",
"x": "Is the planet habitable?",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈhæbətəbəl/"
},
{
"w": "nocturnal",
"m": "夜间活动的",
"x": "Owls are nocturnal, like night-shift workers.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/nɑkˈtərnəl/"
},
{
"w": "mammal",
"m": "哺乳动物",
"x": "Dolphins are mammals.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈmæməl/"
},
{
"w": "reptile",
"m": "爬行动物",
"x": "Lizards are reptiles.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈrɛptaɪl/"
},
{
"w": "hydropower",
"m": "水力发电",
"x": "Hydropower provides clean energy.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈhaɪdroʊˌpaʊr/"
},
{
"w": "unsustainable",
"m": "不可持续的",
"x": "This growth is unsustainable.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌənsəˈsteɪnəbəl/"
},
{
"w": "scarcity",
"m": "稀缺",
"x": "Water scarcity is a global issue.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈskɛrsɪti/"
},
{
"w": "ecotourism",
"m": "生态旅游",
"x": "Ecotourism protects the reef.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science"
},
{
"w": "naturalist",
"m": "博物学家",
"x": "The naturalist studied birds.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈnæʧərələst/"
},
{
"w": "botanist",
"m": "植物学家",
"x": "A botanist named the plant.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˈbɑtənɪst/"
},
{
"w": "astronomer",
"m": "天文学家",
"x": "Astronomers found a new planet.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/əˈstrɑnəmər/"
},
{
"w": "constellation",
"m": "星座",
"x": "Can you see that constellation?",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌkɑnstəˈleɪʃən/"
},
{
"w": "interstellar",
"m": "星际的",
"x": "Interstellar travel is still a dream.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Environment & science",
"ipa": "/ˌɪntərˈstɛlər/"
},
{
"w": "urbanization",
"m": "城市化",
"x": "Urbanization moves people to cities.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌərbənɪˈzeɪʃən/"
},
{
"w": "socioeconomic",
"m": "社会经济的",
"x": "Socioeconomic status affects health.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/soʊˌsiˌoʊˌɛkəˈnɑmɪk/"
},
{
"w": "egalitarian",
"m": "平等主义的",
"x": "Denmark is an egalitarian society.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ɪˌgæləˈtɛriən/"
},
{
"w": "individualistic",
"m": "个人主义的",
"x": "Western culture is more individualistic.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌɪndɪˌvɪʤuəˈlɪstɪk/"
},
{
"w": "altruistic",
"m": "利他的",
"x": "Volunteering is an altruistic act.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌɔltruˈɪstɪk/"
},
{
"w": "absenteeism",
"m": "旷工",
"x": "Stress increases absenteeism.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌæbsənˈtiɪzəm/"
},
{
"w": "fatherhood",
"m": "父亲身份",
"x": "Fatherhood changed his priorities.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈfɑðərˌhʊd/"
},
{
"w": "adolescence",
"m": "青春期",
"x": "Adolescence is a time of change.",
"n": "Topic: Teenagers",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˌædəˈlɛsəns/"
},
{
"w": "infancy",
"m": "婴儿期",
"x": "Learning starts in infancy.",
"n": "Topic: Babies and language",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈɪnfənsi/"
},
{
"w": "housework",
"m": "家务活",
"x": "We share the housework.",
"n": "Topic: Chores",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/ˈhaʊsˌwərk/"
},
{
"w": "utopia",
"m": "乌托邦",
"x": "No city is a utopia.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/juˈtoʊpiə/"
},
{
"w": "perpetuate",
"m": "使延续",
"x": "Ads can perpetuate stereotypes.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/pərˈpɛʧəˌweɪt/"
},
{
"w": "modernity",
"m": "现代性",
"x": "Tradition meets modernity.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/mɑˈdərnəti/"
},
{
"w": "vernacular",
"m": "方言，本地话",
"x": "Slang is part of the vernacular.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/vərˈnækjələr/"
},
{
"w": "unethical",
"m": "不道德的",
"x": "Copying work is unethical.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Society & culture",
"ipa": "/əˈnɛθɪkəl/"
},
{
"w": "irritability",
"m": "易怒",
"x": "Lack of sleep causes irritability.",
"n": "Topic: Sleep",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌɪrɪtəˈbɪləti/"
},
{
"w": "gratification",
"m": "满足",
"x": "Instant gratification can be harmful.",
"n": "Topic: Happiness",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌgrætəfəˈkeɪʃən/"
},
{
"w": "dissatisfaction",
"m": "不满",
"x": "Low pay leads to dissatisfaction.",
"n": "Topic: Job satisfaction",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌdɪsætɪsˈfækʃən/"
},
{
"w": "jogging",
"m": "慢跑",
"x": "I go jogging after my shift.",
"n": "Topic: Sitting long",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˈʤɔgɪŋ/"
},
{
"w": "fatality",
"m": "死亡事故",
"x": "Road fatalities fell this year.",
"n": "Topic: Road safety",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/fəˈtælɪti/"
},
{
"w": "stimuli",
"m": "刺激物",
"x": "Babies react to stimuli.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˈstɪmjəˌlaɪ/"
},
{
"w": "penicillin",
"m": "青霉素",
"x": "Penicillin was found by accident.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Health & lifestyle",
"ipa": "/ˌpɛnəˈsɪlən/"
},
{
"w": "skimming",
"m": "略读",
"x": "Skimming helps you find the main idea.",
"n": "Topic: Study skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈskɪmɪŋ/"
},
{
"w": "succinct",
"m": "简洁的",
"x": "Keep your answer succinct.",
"n": "Topic: Interview tips",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/səkˈsɪŋkt/"
},
{
"w": "summarize",
"m": "总结",
"x": "Summarize the talk in two sentences.",
"n": "Topic: Listening skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈsəmərˌaɪz/"
},
{
"w": "underline",
"m": "划线；强调",
"x": "Underline key words in the question.",
"n": "Topic: Study skills",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈəndərˌlaɪn/"
},
{
"w": "procrastinate",
"m": "拖延",
"x": "I procrastinate when I'm tired.",
"n": "Topic: Time management",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/prəˈkræstəˌneɪt/"
},
{
"w": "pedagogy",
"m": "教学法",
"x": "Modern pedagogy values speaking.",
"n": "Topic: Map lecture",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈpɛdəˌgoʊʤi/"
},
{
"w": "tutoring",
"m": "辅导",
"x": "She does online tutoring.",
"n": "Topic: Tutor",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ˈtutərɪŋ/"
},
{
"w": "originality",
"m": "原创性",
"x": "Examiners reward originality.",
"n": "Topic: Plagiarism",
"c": "Simon 雅思听力阅读: Education & study",
"ipa": "/ərˌɪʤəˈnælɪti/"
},
{
"w": "unoriginal",
"m": "无新意的",
"x": "The essay was unoriginal.",
"n": "Topic: Plagiarism",
"c": "Simon 雅思听力阅读: Education & study"
},
{
"w": "boardroom",
"m": "董事会会议室",
"x": "The deal was made in the boardroom.",
"n": "Topic: Elevator pitch",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈbɔrˌdrum/"
},
{
"w": "counterproductive",
"m": "适得其反的",
"x": "Working too long is counterproductive.",
"n": "Topic: Job satisfaction",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈkaʊnərprəˌdəktɪv/"
},
{
"w": "unproductive",
"m": "无成效的",
"x": "The meeting was unproductive.",
"n": "Topic: Job satisfaction",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˌənprəˈdəktɪv/"
},
{
"w": "underperforming",
"m": "表现不佳的",
"x": "We closed underperforming stores.",
"n": "Topic: Job satisfaction",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈəndərpərˌfɔrmɪŋ/"
},
{
"w": "diversify",
"m": "多样化",
"x": "Diversify your income streams.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/dɪˈvərsəˌfaɪ/"
},
{
"w": "diversification",
"m": "多元化",
"x": "Diversification lowers risk.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/dɪˌvərsəfəˈkeɪʃən/"
},
{
"w": "spreadsheet",
"m": "电子表格",
"x": "Track spending in a spreadsheet.",
"n": "Topic: Save money",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈsprɛdˌʃit/"
},
{
"w": "purchaser",
"m": "购买者",
"x": "The purchaser gets a receipt.",
"n": "Topic: Children advertising",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˈpərʧəsər/"
},
{
"w": "prohibitive",
"m": "（价格）高得令人却步",
"x": "Rents are prohibitive in Sydney.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/proʊˈhɪbətɪv/"
},
{
"w": "commercialism",
"m": "商业主义",
"x": "Christmas is full of commercialism.",
"n": "Topic: Consumerism",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/kəˈmərʃəˌlɪzəm/"
},
{
"w": "multimillionaire",
"m": "千万富翁",
"x": "He became a multimillionaire at 40.",
"n": "Topic: Money",
"c": "Simon 雅思听力阅读: Work & money",
"ipa": "/ˌməltiˌmɪljəˈnɛr/"
},
{
"w": "wastage",
"m": "浪费",
"x": "We must cut food wastage.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Work & money"
},
{
"w": "rechargeable",
"m": "可充电的",
"x": "Use rechargeable batteries.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/riˈʧɑrʤəbəl/"
},
{
"w": "programmable",
"m": "可编程的",
"x": "The oven is programmable.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈproʊˌgræməbəl/"
},
{
"w": "customisation",
"m": "定制",
"x": "The app allows customisation.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation"
},
{
"w": "prototyping",
"m": "原型制作",
"x": "Prototyping saves time later.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈproʊtoʊˌtaɪpɪŋ/"
},
{
"w": "retractable",
"m": "可伸缩的",
"x": "The roof is retractable.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/riˈtræktəbəl/"
},
{
"w": "spaceflight",
"m": "航天飞行",
"x": "Spaceflight is getting cheaper.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation"
},
{
"w": "gigabyte",
"m": "千兆字节",
"x": "The file is two gigabytes.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈgɪgəˌbaɪt/"
},
{
"w": "circuitry",
"m": "电路",
"x": "The circuitry is very small.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˈsərkətri/"
},
{
"w": "immersive",
"m": "沉浸式的",
"x": "VR offers an immersive experience.",
"n": "Topic: Video games",
"c": "Simon 雅思听力阅读: Technology & innovation"
},
{
"w": "incremental",
"m": "渐进的",
"x": "Most progress is incremental.",
"n": "Topic: Innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/ˌɪnkrəˈmɛntəl/"
},
{
"w": "devise",
"m": "设计，想出",
"x": "We devised a new system.",
"n": "Topic: Innovation",
"c": "Simon 雅思听力阅读: Technology & innovation",
"ipa": "/dɪˈvaɪz/"
},
{
"w": "prehistory",
"m": "史前史",
"x": "Little is known about prehistory.",
"n": "Topic: Cave paintings",
"c": "Simon 雅思听力阅读: History & research"
},
{
"w": "cartography",
"m": "制图学",
"x": "Cartography is the art of map-making.",
"n": "Topic: Map lecture",
"c": "Simon 雅思听力阅读: History & research"
},
{
"w": "fortification",
"m": "防御工事",
"x": "The fortifications protected the town.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˌfɔrtəfəˈkeɪʃən/"
},
{
"w": "drawbridge",
"m": "吊桥",
"x": "The castle had a drawbridge.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈdrɔˌbrɪʤ/"
},
{
"w": "phonograph",
"m": "留声机",
"x": "Edison invented the phonograph.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈfoʊnəˌgræf/"
},
{
"w": "celluloid",
"m": "赛璐珞（胶片）",
"x": "Early film was made of celluloid.",
"n": "Topic: Photographic film",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈsɛləˌlɔɪd/"
},
{
"w": "mathematician",
"m": "数学家",
"x": "Turing was a brilliant mathematician.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˌmæθəməˈtɪʃən/"
},
{
"w": "painstaking",
"m": "艰苦细致的",
"x": "It was painstaking work.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈpeɪnˌsteɪkɪŋ/"
},
{
"w": "irrefutable",
"m": "无可辩驳的",
"x": "The evidence is irrefutable.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˌɪrəfˈjutəbəl/"
},
{
"w": "unequivocal",
"m": "明确的",
"x": "The answer was unequivocal.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˌənɪkˈwɪvəkəl/"
},
{
"w": "improbable",
"m": "不大可能的",
"x": "That story seems improbable.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˌɪmˈprɑbəbəl/"
},
{
"w": "plethora",
"m": "过多，大量",
"x": "There's a plethora of options.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/ˈplɛθərə/"
},
{
"w": "conundrum",
"m": "难题",
"x": "Housing is a real conundrum.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/kəˈnəndrəm/"
},
{
"w": "sceptical",
"m": "怀疑的",
"x": "Scientists were sceptical.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research"
},
{
"w": "decode",
"m": "解码",
"x": "They decoded the message.",
"n": "Topic: reading passages",
"c": "Simon 雅思听力阅读: History & research",
"ipa": "/dɪˈkoʊd/"
},
{
"w": "risky = too dangerous",
"m": "有风险的 = 太危险",
"x": "Paraphrase: \"risky\" → \"too dangerous\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "sustain life = support life",
"m": "维持生命",
"x": "Paraphrase: \"sustain life\" → \"support life\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "a key factor = an important aspect",
"m": "关键因素",
"x": "Paraphrase: \"a key factor\" → \"an important aspect\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "capacity = ability",
"m": "能力",
"x": "Paraphrase: \"capacity\" → \"ability\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "changes into = converts to",
"m": "转变为",
"x": "Paraphrase: \"changes into\" → \"converts to\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "connected = attached",
"m": "连接的",
"x": "Paraphrase: \"connected\" → \"attached\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "consulting = looking at",
"m": "查阅",
"x": "Paraphrase: \"consulting\" → \"looking at\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "could not cope with = not sound enough to support",
"m": "无法承受",
"x": "Paraphrase: \"could not cope with\" → \"not sound enough to support\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "crushed = ground-up",
"m": "碾碎的",
"x": "Paraphrase: \"crushed\" → \"ground-up\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "distanced from = moved away from",
"m": "远离",
"x": "Paraphrase: \"distanced from\" → \"moved away from\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "does not require instruction = independently",
"m": "无需指导＝独立地",
"x": "Paraphrase: \"does not require instruction\" → \"independently\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "encouragement = providing motivation",
"m": "鼓励",
"x": "Paraphrase: \"encouragement\" → \"providing motivation\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "entrance = gatehouse",
"m": "入口",
"x": "Paraphrase: \"entrance\" → \"gatehouse\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "exacerbate = do more harm than good",
"m": "加剧，弊大于利",
"x": "Paraphrase: \"exacerbate\" → \"do more harm than good\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "famous = well-known",
"m": "著名的",
"x": "Paraphrase: \"famous\" → \"well-known\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "first used = coined by",
"m": "首次使用＝由……创造",
"x": "Paraphrase: \"first used\" → \"coined by\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "fortified = defensive",
"m": "设防的",
"x": "Paraphrase: \"fortified\" → \"defensive\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "had all the basic features of = contain all the elements",
"m": "具备所有基本要素",
"x": "Paraphrase: \"had all the basic features of\" → \"contain all the elements\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "helps contain = holds back",
"m": "帮助控制",
"x": "Paraphrase: \"helps contain\" → \"holds back\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "inbuilt = innate",
"m": "天生的",
"x": "Paraphrase: \"inbuilt\" → \"innate\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "increases in = builds up",
"m": "增加，积累",
"x": "Paraphrase: \"increases in\" → \"builds up\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "indigenous frogs = native frogs",
"m": "本土青蛙",
"x": "Paraphrase: \"indigenous frogs\" → \"native frogs\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "individual freedom = individualistic",
"m": "个人自由",
"x": "Paraphrase: \"individual freedom\" → \"individualistic\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "influence = a substantial impact",
"m": "影响",
"x": "Paraphrase: \"influence\" → \"a substantial impact\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "ingredients = raw materials",
"m": "原料",
"x": "Paraphrase: \"ingredients\" → \"raw materials\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "introduced = originated",
"m": "引入＝起源",
"x": "Paraphrase: \"introduced\" → \"originated\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "link sounds with spellings = associate sounds",
"m": "把读音和拼写联系起来",
"x": "Paraphrase: \"link sounds with spellings\" → \"associate sounds\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "load of modern traffic = congestion",
"m": "交通负荷＝拥堵",
"x": "Paraphrase: \"load of modern traffic\" → \"congestion\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "manage money carefully = financial responsibility",
"m": "谨慎理财",
"x": "Paraphrase: \"manage money carefully\" → \"financial responsibility\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "mixed = stirred",
"m": "混合，搅拌",
"x": "Paraphrase: \"mixed\" → \"stirred\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "most livable cities = best cities to live in",
"m": "最宜居城市",
"x": "Paraphrase: \"most livable cities\" → \"best cities to live in\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "paint = pigment",
"m": "颜料",
"x": "Paraphrase: \"paint\" → \"pigment\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "parents = home environment",
"m": "父母＝家庭环境",
"x": "Paraphrase: \"parents\" → \"home environment\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "positive news = word of this success",
"m": "好消息",
"x": "Paraphrase: \"positive news\" → \"word of this success\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "poured into = transferred",
"m": "倒入＝转移",
"x": "Paraphrase: \"poured into\" → \"transferred\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "public = the masses",
"m": "公众",
"x": "Paraphrase: \"public\" → \"the masses\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "regard = seen by others as",
"m": "被看作",
"x": "Paraphrase: \"regard\" → \"seen by others as\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "rotates = turns",
"m": "旋转",
"x": "Paraphrase: \"rotates\" → \"turns\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "scrap = remove",
"m": "废除",
"x": "Paraphrase: \"scrap\" → \"remove\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "search for = hunt for",
"m": "寻找",
"x": "Paraphrase: \"search for\" → \"hunt for\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "the influence of friends = peer pressure",
"m": "朋友影响＝同伴压力",
"x": "Paraphrase: \"the influence of friends\" → \"peer pressure\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "the latest = new",
"m": "最新的",
"x": "Paraphrase: \"the latest\" → \"new\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "theory = concept",
"m": "理论＝概念",
"x": "Paraphrase: \"theory\" → \"concept\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "tools = equipment",
"m": "工具＝设备",
"x": "Paraphrase: \"tools\" → \"equipment\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "trying to find out = in search of",
"m": "试图弄清",
"x": "Paraphrase: \"trying to find out\" → \"in search of\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "what makes us tick = what motivates us",
"m": "是什么驱动我们",
"x": "Paraphrase: \"what makes us tick\" → \"what motivates us\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "who they are = social identity",
"m": "身份认同",
"x": "Paraphrase: \"who they are\" → \"social identity\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "work out how = deduce",
"m": "弄清＝推断",
"x": "Paraphrase: \"work out how\" → \"deduce\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "work-related stress = stress-related claims",
"m": "工作压力",
"x": "Paraphrase: \"work-related stress\" → \"stress-related claims\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "taken to = shipped to",
"m": "运往",
"x": "Paraphrase: \"taken to\" → \"shipped to\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "produces = creates",
"m": "产生",
"x": "Paraphrase: \"produces\" → \"creates\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "stage in life = period",
"m": "人生阶段",
"x": "Paraphrase: \"stage in life\" → \"period\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "solitary figure = a person disconnected from society",
"m": "孤独的人",
"x": "Paraphrase: \"solitary figure\" → \"a person disconnected from society\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "lack of interest = not bothered",
"m": "缺乏兴趣",
"x": "Paraphrase: \"lack of interest\" → \"not bothered\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "alien life-form = intelligent species",
"m": "外星生命",
"x": "Paraphrase: \"alien life-form\" → \"intelligent species\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "reluctance = unwillingness",
"m": "不情愿",
"x": "Paraphrase: \"reluctance\" → \"unwillingness\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "exceptional = especially good",
"m": "特殊的，杰出的",
"x": "Paraphrase: \"exceptional\" → \"especially good\"",
"c": "Simon 雅思听力阅读: 同义替换 Paraphrase"
},
{
"w": "by no means",
"m": "决不",
"x": "This is by no means easy.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/baɪ noʊ minz/"
},
{
"w": "by and large",
"m": "总的来说",
"x": "By and large, the plan worked.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/baɪ ənd lɑrʤ/"
},
{
"w": "apart from that",
"m": "除此之外",
"x": "Apart from that, the job is fine.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/əˈpɑrt frəm ðət/"
},
{
"w": "all too often",
"m": "常常（令人遗憾地）",
"x": "All too often, kids skip breakfast.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/ɔl tu ˈɔfən/"
},
{
"w": "when it comes to",
"m": "说到，涉及",
"x": "When it comes to money, be careful.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/wɪn ɪt kəmz tɪ/"
},
{
"w": "it is true that",
"m": "诚然",
"x": "It is true that cities are crowded.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/ɪt ɪz tru ðət/"
},
{
"w": "from time to time",
"m": "不时地",
"x": "I visit them from time to time.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/frəm taɪm tɪ taɪm/"
},
{
"w": "for the sake of",
"m": "为了",
"x": "Rest for the sake of your health.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/fər ðə seɪk əv/"
},
{
"w": "so as to",
"m": "为了",
"x": "Save so as to buy a house.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/soʊ ɛz tɪ/"
},
{
"w": "as far as",
"m": "就……而言",
"x": "As far as I know, it's free.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/ɛz fɑr ɛz/"
},
{
"w": "there is no point in",
"m": "……没有意义",
"x": "There is no point in worrying.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/ðɛr ɪz noʊ pɔɪnt ɪn/"
},
{
"w": "on the contrary",
"m": "恰恰相反",
"x": "On the contrary, it helped.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/ɔn ðə ˈkɑntrɛri/"
},
{
"w": "needless to say",
"m": "不用说",
"x": "Needless to say, we were tired.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/ˈnidləs tɪ seɪ/"
},
{
"w": "in the long run",
"m": "从长远看",
"x": "In the long run, it pays off.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/ɪn ðə lɔŋ rən/"
},
{
"w": "last but not least",
"m": "最后但同样重要",
"x": "Last but not least, sleep well.",
"c": "剑桥雅思写作高分范文: Linking phrases",
"ipa": "/læst bət nɑt list/"
},
{
"w": "is more likely to",
"m": "更可能",
"x": "Tired staff are more likely to make mistakes.",
"c": "剑桥雅思写作高分范文: Sentence patterns",
"ipa": "/ɪz mɔr ˈlaɪkli tɪ/"
},
{
"w": "can be attributed to",
"m": "可归因于",
"x": "The rise can be attributed to demand.",
"c": "剑桥雅思写作高分范文: Sentence patterns",
"ipa": "/kən bi əˈtrɪbjətəd tɪ/"
},
{
"w": "is characterized by",
"m": "以……为特征",
"x": "The age is characterized by change.",
"c": "剑桥雅思写作高分范文: Sentence patterns",
"ipa": "/ɪz ˈkɛrɪktərˌaɪzd baɪ/"
},
{
"w": "it is high time that",
"m": "是时候……了",
"x": "It is high time that we acted.",
"c": "剑桥雅思写作高分范文: Sentence patterns",
"ipa": "/ɪt ɪz haɪ taɪm ðət/"
},
{
"w": "not only but also",
"m": "不仅……而且",
"x": "Not only cheap but also fast.",
"c": "剑桥雅思写作高分范文: Sentence patterns",
"ipa": "/nɑt ˈoʊnli bət ˈɔlsoʊ/"
},
{
"w": "the reason why",
"m": "……的原因",
"x": "The reason why is simple.",
"c": "剑桥雅思写作高分范文: Sentence patterns",
"ipa": "/ðə ˈrizən waɪ/"
},
{
"w": "leads to",
"m": "导致",
"x": "Poor sleep often leads to mistakes.",
"c": "剑桥雅思写作高分范文: Sentence patterns",
"ipa": "/lidz tɪ/"
},
{
"w": "academic performance",
"m": "学业表现",
"x": "Sleep affects academic performance.",
"c": "剑桥雅思写作高分范文: Education",
"ipa": "/ˌækəˈdɛmɪk pərˈfɔrməns/"
},
{
"w": "single-sex school",
"m": "单性别学校",
"x": "She went to a single-sex school.",
"c": "剑桥雅思写作高分范文: Education"
},
{
"w": "compulsory",
"m": "义务的，必修的",
"x": "English is compulsory here.",
"c": "剑桥雅思写作高分范文: Education",
"ipa": "/kəmˈpəlsəri/"
},
{
"w": "tuition fees",
"m": "学费",
"x": "Tuition fees keep rising.",
"c": "剑桥雅思写作高分范文: Education",
"ipa": "/tjuˈɪʃən fiz/"
},
{
"w": "discipline",
"m": "纪律",
"x": "Schools need discipline.",
"c": "剑桥雅思写作高分范文: Education",
"ipa": "/ˈdɪsəplən/"
},
{
"w": "individuality",
"m": "个性",
"x": "Uniforms may limit individuality.",
"c": "剑桥雅思写作高分范文: Education",
"ipa": "/ˌɪnˌdɪvɪʤuˈælɪti/"
},
{
"w": "uniform",
"m": "校服",
"x": "Students must wear a uniform.",
"c": "剑桥雅思写作高分范文: Education",
"ipa": "/ˈjunəˌfɔrm/"
},
{
"w": "foreign languages",
"m": "外语",
"x": "Learning foreign languages opens doors.",
"c": "剑桥雅思写作高分范文: Education",
"ipa": "/ˈfɔrən ˈlæŋgwɪʤɪz/"
},
{
"w": "sense of community",
"m": "社区归属感",
"x": "Small towns have a strong sense of community.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/sɛns əv kəmˈjunɪti/"
},
{
"w": "generation gap",
"m": "代沟",
"x": "There is a generation gap at home.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/ˌʤɛnərˈeɪʃən gæp/"
},
{
"w": "the elderly",
"m": "老年人",
"x": "We should respect the elderly.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/ðə ˈɛldərli/"
},
{
"w": "mass media",
"m": "大众传媒",
"x": "Mass media shapes opinion.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/mæs ˈmidiə/"
},
{
"w": "stereotype",
"m": "刻板印象",
"x": "Ads often use stereotypes.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/ˈstɛrioʊˌtaɪp/"
},
{
"w": "armed forces",
"m": "武装部队",
"x": "Women can join the armed forces.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/ɑrmd ˈfɔrsɪz/"
},
{
"w": "lifestyle",
"m": "生活方式",
"x": "Night shifts change your lifestyle.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/ˈlaɪfˌstaɪl/"
},
{
"w": "peer",
"m": "同龄人",
"x": "Kids copy their peers.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/pɪr/"
},
{
"w": "privacy",
"m": "隐私",
"x": "Online privacy is a concern.",
"c": "剑桥雅思写作高分范文: Society & family",
"ipa": "/ˈpraɪvəsi/"
},
{
"w": "science and technology",
"m": "科学技术",
"x": "Science and technology change lives.",
"c": "剑桥雅思写作高分范文: Science, tech & environment",
"ipa": "/saɪəns ənd tɛkˈnɑləʤi/"
},
{
"w": "pollution",
"m": "污染",
"x": "Traffic causes air pollution.",
"c": "剑桥雅思写作高分范文: Science, tech & environment",
"ipa": "/pəˈluʃən/"
},
{
"w": "endangered species",
"m": "濒危物种",
"x": "Zoos protect endangered species.",
"c": "剑桥雅思写作高分范文: Science, tech & environment",
"ipa": "/ɪnˈdeɪnʤərd ˈspiʃiz/"
},
{
"w": "animals in zoos",
"m": "动物园里的动物",
"x": "Animals in zoos may feel stressed.",
"c": "剑桥雅思写作高分范文: Science, tech & environment",
"ipa": "/ˈænəməlz ɪn zuz/"
},
{
"w": "cruel",
"m": "残忍的",
"x": "Keeping animals in cages can be cruel.",
"c": "剑桥雅思写作高分范文: Science, tech & environment",
"ipa": "/kruəl/"
},
{
"w": "convenience",
"m": "便利",
"x": "Online shopping offers convenience.",
"c": "剑桥雅思写作高分范文: Science, tech & environment",
"ipa": "/kənˈvinjəns/"
},
{
"w": "job hopping",
"m": "频繁跳槽",
"x": "Job hopping is common among young people.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/ʤɑb ˈhɑpɪŋ/"
},
{
"w": "career path",
"m": "职业道路",
"x": "Plan your career path.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/kərɪr pæθ/"
},
{
"w": "work environment",
"m": "工作环境",
"x": "A good work environment keeps staff.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/wərk ɪnˈvaɪrənmənt/"
},
{
"w": "salary",
"m": "薪水",
"x": "The salary is paid monthly.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/ˈsæləri/"
},
{
"w": "economic growth",
"m": "经济增长",
"x": "Tourism drives economic growth.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/ˌɛkəˈnɑmɪk groʊθ/"
},
{
"w": "rehabilitate",
"m": "使改过自新",
"x": "Prisons should rehabilitate criminals.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/ˌriəˈbɪləˌteɪt/"
},
{
"w": "community service",
"m": "社区服务",
"x": "He did 100 hours of community service.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/kəmˈjunɪti ˈsərvɪs/"
},
{
"w": "deter",
"m": "威慑，阻止",
"x": "Fines deter speeding.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/dɪˈtər/"
},
{
"w": "plastic surgery",
"m": "整形手术",
"x": "Plastic surgery is expensive.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/ˈplæstɪk ˈsərʤəri/"
},
{
"w": "globalization",
"m": "全球化",
"x": "Globalization links markets.",
"c": "剑桥雅思写作高分范文: Work, economy & crime",
"ipa": "/ˌgloʊbəlɪˈzeɪʃən/"
},
{
"w": "students' accommodation",
"m": "学生的住所",
"x": "Listen for \"students' accommodation\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənts' əˌkɑməˈdeɪʃən/"
},
{
"w": "dormitory",
"m": "学生宿舍",
"x": "Listen for \"dormitory\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈdɔrməˌtɔri/"
},
{
"w": "student dorm",
"m": "学生宿舍",
"x": "Listen for \"student dorm\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt dɔrm/"
},
{
"w": "student apartment",
"m": "学生公寓",
"x": "Listen for \"student apartment\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt əˈpɑrtmənt/"
},
{
"w": "studio apartment",
"m": "一套小型公寓房间",
"x": "Listen for \"studio apartment\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudiˌoʊ əˈpɑrtmənt/"
},
{
"w": "student flat",
"m": "学生公寓",
"x": "Listen for \"student flat\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt flæt/"
},
{
"w": "student residence",
"m": "学生宿舍",
"x": "Listen for \"student residence\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt ˈrɛzɪdəns/"
},
{
"w": "student house",
"m": "学生公寓",
"x": "Listen for \"student house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt haʊs/"
},
{
"w": "family house",
"m": "家庭寄宿式的房子",
"x": "Listen for \"family house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfæməli haʊs/"
},
{
"w": "family-stay",
"m": "家庭寄宿式",
"x": "Listen for \"family-stay\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "host family",
"m": "寄宿家庭",
"x": "Listen for \"host family\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/hoʊst ˈfæməli/"
},
{
"w": "home-stay",
"m": "家庭寄宿式",
"x": "Listen for \"home-stay\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "shared house",
"m": "合用合租的房子",
"x": "Listen for \"shared house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃɛrd haʊs/"
},
{
"w": "the whole house",
"m": "整房出租的房子",
"x": "Listen for \"the whole house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ðə hoʊl haʊs/"
},
{
"w": "part of house",
"m": "（只出租）一部分的房子",
"x": "Listen for \"part of house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/pɑrt əv haʊs/"
},
{
"w": "the rest of the house",
"m": "房子的其他部分",
"x": "Listen for \"the rest of the house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ðə rɛst əv ðə haʊs/"
},
{
"w": "two bed-roomed house",
"m": "有两间卧室的房子",
"x": "Listen for \"two bed-roomed house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "single-roomed flat",
"m": "单间公寓",
"x": "Listen for \"single-roomed flat\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "hostel",
"m": "旅舍，招待所",
"x": "Listen for \"hostel\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhɑstəl/"
},
{
"w": "youth hostel",
"m": "青年旅舍",
"x": "Listen for \"youth hostel\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/juθ ˈhɑstəl/"
},
{
"w": "student hostel",
"m": "学生宿舍",
"x": "Listen for \"student hostel\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt ˈhɑstəl/"
},
{
"w": "hotel",
"m": "旅馆",
"x": "Listen for \"hotel\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/hoʊˈtɛl/"
},
{
"w": "motel",
"m": "汽车旅馆",
"x": "Listen for \"motel\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/moʊˈtɛl/"
},
{
"w": "inn",
"m": "小旅馆",
"x": "Listen for \"inn\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪn/"
},
{
"w": "house",
"m": "（独栋且带花园的）房子",
"x": "Listen for \"house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/haʊs/"
},
{
"w": "house with garden",
"m": "有花园的房子",
"x": "Listen for \"house with garden\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/haʊs wɪθ ˈgɑrdən/"
},
{
"w": "house with garage",
"m": "有车库的房子",
"x": "Listen for \"house with garage\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/haʊs wɪθ gərɑʒ/"
},
{
"w": "two-story house",
"m": "两层的房子",
"x": "Listen for \"two-story house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "two-floor house",
"m": "两层的房子",
"x": "Listen for \"two-floor house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "house within walking distance",
"m": "步行距离不远的房子",
"x": "Listen for \"house within walking distance\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/haʊs wɪˈθɪn ˈwɔkɪŋ ˈdɪstəns/"
},
{
"w": "house with nice views",
"m": "能看到美景的房子",
"x": "Listen for \"house with nice views\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/haʊs wɪθ nis vjuz/"
},
{
"w": "well-furnished house",
"m": "家具齐全的房子",
"x": "Listen for \"well-furnished house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "partially-furnished house",
"m": "配备部分家具的房子",
"x": "Listen for \"partially-furnished house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "unfurnished house",
"m": "无家具的房子",
"x": "Listen for \"unfurnished house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "empty house",
"m": "暂时无人租住的房子",
"x": "Listen for \"empty house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɛmti haʊs/"
},
{
"w": "vacant house",
"m": "暂时无人租住的房子",
"x": "Listen for \"vacant house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈveɪkənt haʊs/"
},
{
"w": "flat",
"m": "〈英〉公寓",
"x": "Listen for \"flat\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/flæt/"
},
{
"w": "apartment",
"m": "〈美〉公寓",
"x": "Listen for \"apartment\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/əˈpɑrtmənt/"
},
{
"w": "shared apartment",
"m": "〈美〉合租的公寓",
"x": "Listen for \"shared apartment\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃɛrd əˈpɑrtmənt/"
},
{
"w": "deluxe apartment",
"m": "豪华住所",
"x": "Listen for \"deluxe apartment\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/dəˈləks əˈpɑrtmənt/"
},
{
"w": "bed-sit",
"m": "起居室兼卧室的“标间式住所”",
"x": "Listen for \"bed-sit\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "single room",
"m": "单人间",
"x": "Listen for \"single room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsɪŋgəl rum/"
},
{
"w": "double room",
"m": "双人间",
"x": "Listen for \"double room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈdəbəl rum/"
},
{
"w": "twin room",
"m": "双人间",
"x": "Listen for \"twin room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/twɪn rum/"
},
{
"w": "triple room",
"m": "三人间",
"x": "Listen for \"triple room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtrɪpəl rum/"
},
{
"w": "residence",
"m": "住所",
"x": "Listen for \"residence\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈrɛzɪdəns/"
},
{
"w": "hall of residence",
"m": "学校公寓",
"x": "Listen for \"hall of residence\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/hɔl əv ˈrɛzɪdəns/"
},
{
"w": "quarter",
"m": "住所，宿舍",
"x": "Listen for \"quarter\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kˈwɔrtər/"
},
{
"w": "private quarter",
"m": "私家住所",
"x": "Listen for \"private quarter\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpraɪvət kˈwɔrtər/"
},
{
"w": "property",
"m": "房产",
"x": "Listen for \"property\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈprɑpərti/"
},
{
"w": "residential community",
"m": "居住小区",
"x": "Listen for \"residential community\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌrɛzɪˈdɛnʃəl kəmˈjunɪti/"
},
{
"w": "tenant",
"m": "房客",
"x": "Listen for \"tenant\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtɛnənt/"
},
{
"w": "living room",
"m": "起居室，客厅",
"x": "Listen for \"living room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɪvɪŋ rum/"
},
{
"w": "sitting room",
"m": "起居室，客厅",
"x": "Listen for \"sitting room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsɪtɪŋ rum/"
},
{
"w": "lobby",
"m": "大厅",
"x": "Listen for \"lobby\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɑbi/"
},
{
"w": "foyer",
"m": "前厅，门厅",
"x": "Listen for \"foyer\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/fɔɪər/"
},
{
"w": "hall",
"m": "大厅，走廊",
"x": "Listen for \"hall\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/hɔl/"
},
{
"w": "platform",
"m": "站台",
"x": "Listen for \"platform\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈplætˌfɔrm/"
},
{
"w": "balcony",
"m": "阳台",
"x": "Listen for \"balcony\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbælkəni/"
},
{
"w": "porch",
"m": "门廊",
"x": "Listen for \"porch\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/pɔrʧ/"
},
{
"w": "corridor",
"m": "走廊",
"x": "Listen for \"corridor\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkɔrɪdər/"
},
{
"w": "aisle",
"m": "过道，通道",
"x": "Listen for \"aisle\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/aɪəl/"
},
{
"w": "furnished",
"m": "配备家具的",
"x": "Listen for \"furnished\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfərnɪʃt/"
},
{
"w": "unfurnished",
"m": "无家具的",
"x": "Listen for \"unfurnished\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "partially furnished",
"m": "有部分家具的",
"x": "Listen for \"partially furnished\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑrʃəli ˈfərnɪʃt/"
},
{
"w": "host room",
"m": "主卧房",
"x": "Listen for \"host room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/hoʊst rum/"
},
{
"w": "bedroom",
"m": "卧室",
"x": "Listen for \"bedroom\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbɛˌdrum/"
},
{
"w": "guest room",
"m": "客房",
"x": "Listen for \"guest room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/gɛst rum/"
},
{
"w": "two-bed-roomed house",
"m": "有两间卧室的房子",
"x": "Listen for \"two-bed-roomed house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "shared room",
"m": "合住的房间",
"x": "Listen for \"shared room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃɛrd rum/"
},
{
"w": "study room",
"m": "书房",
"x": "Listen for \"study room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstədi rum/"
},
{
"w": "self-study room",
"m": "自习室",
"x": "Listen for \"self-study room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "self-access room",
"m": "自习室",
"x": "Listen for \"self-access room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "game room",
"m": "娱乐室",
"x": "Listen for \"game room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/geɪm rum/"
},
{
"w": "basement",
"m": "地下室",
"x": "Listen for \"basement\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbeɪsmənt/"
},
{
"w": "kitchen",
"m": "厨房",
"x": "Listen for \"kitchen\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkɪʧən/"
},
{
"w": "shared kitchen",
"m": "共用厨房",
"x": "Listen for \"shared kitchen\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃɛrd ˈkɪʧən/"
},
{
"w": "bathroom",
"m": "洗手间",
"x": "Listen for \"bathroom\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbæθˌrum/"
},
{
"w": "shared bathroom",
"m": "共用浴室",
"x": "Listen for \"shared bathroom\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃɛrd ˈbæθˌrum/"
},
{
"w": "lavatory",
"m": "洗手间",
"x": "Listen for \"lavatory\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlævəˌtɔri/"
},
{
"w": "restroom",
"m": "洗手间",
"x": "Listen for \"restroom\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈrɛˌstrum/"
},
{
"w": "toilet",
"m": "洗手间",
"x": "Listen for \"toilet\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtɔɪlət/"
},
{
"w": "Man's Room",
"m": "男洗手间",
"x": "Listen for \"Man's Room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/mænz rum/"
},
{
"w": "Ladies' Room",
"m": "女洗手间",
"x": "Listen for \"Ladies' Room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈleɪdiz' rum/"
},
{
"w": "Washroom",
"m": "洗手间",
"x": "Listen for \"Washroom\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈwɑʃˌrum/"
},
{
"w": "Washing Room",
"m": "洗手间",
"x": "Listen for \"Washing Room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈwɑʃɪŋ rum/"
},
{
"w": "common room",
"m": "公共休息室",
"x": "Listen for \"common room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkɑmən rum/"
},
{
"w": "faculty lounge",
"m": "教职员工休息室",
"x": "Listen for \"faculty lounge\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfækəlti laʊnʤ/"
},
{
"w": "staff room",
"m": "教职员工休息室",
"x": "Listen for \"staff room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/stæf rum/"
},
{
"w": "handicapped",
"m": "残障人士（专用的）",
"x": "Listen for \"handicapped\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhændiˌkæpt/"
},
{
"w": "disabled",
"m": "残障人士（专用的）",
"x": "Listen for \"disabled\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/dɪˈseɪbəld/"
},
{
"w": "physically challenged",
"m": "残障人士（专用的）",
"x": "Listen for \"physically challenged\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfɪzɪkəli ˈʧælənʤd/"
},
{
"w": "large room",
"m": "大房间",
"x": "Listen for \"large room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/lɑrʤ rum/"
},
{
"w": "lockers",
"m": "更衣室，储物间",
"x": "Listen for \"lockers\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɑkərz/"
},
{
"w": "cloakroom",
"m": "衣帽间，（英婉）厕所",
"x": "Listen for \"cloakroom\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkloʊˌkrum/"
},
{
"w": "clothing room",
"m": "更衣室",
"x": "Listen for \"clothing room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkloʊðɪŋ rum/"
},
{
"w": "rooms with ocean view",
"m": "海景房",
"x": "Listen for \"rooms with ocean view\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rumz wɪθ ˈoʊʃən vju/"
},
{
"w": "entrance hall",
"m": "门厅",
"x": "Listen for \"entrance hall\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɛntrəns hɔl/"
},
{
"w": "touch screen area",
"m": "触摸屏",
"x": "Listen for \"touch screen area\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/təʧ skrin ˈɛriə/"
},
{
"w": "reception room",
"m": "接待处",
"x": "Listen for \"reception room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rɪˈsɛpʃən rum/"
},
{
"w": "information desk",
"m": "服务台，接待处",
"x": "Listen for \"information desk\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɪnˌfɔrˈmeɪʃən dɛsk/"
},
{
"w": "front desk",
"m": "前台",
"x": "Listen for \"front desk\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/frənt dɛsk/"
},
{
"w": "conference room",
"m": "会议室",
"x": "Listen for \"conference room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkɑnfərəns rum/"
},
{
"w": "photocopying room",
"m": "资料影印室",
"x": "Listen for \"photocopying room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfoʊtoʊˌkɑpiɪŋ rum/"
},
{
"w": "gift room",
"m": "礼品店",
"x": "Listen for \"gift room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/gɪft rum/"
},
{
"w": "souvenir shop",
"m": "纪念品店",
"x": "Listen for \"souvenir shop\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌsuvəˈnɪr ʃɑp/"
},
{
"w": "ticket office",
"m": "售票处",
"x": "Listen for \"ticket office\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtɪkɪt ˈɔfəs/"
},
{
"w": "group booking",
"m": "团体预订",
"x": "Listen for \"group booking\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/grup ˈbʊkɪŋ/"
},
{
"w": "provisional booking",
"m": "临时预订",
"x": "Listen for \"provisional booking\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/prəˈvɪʒənəl ˈbʊkɪŋ/"
},
{
"w": "reserve in advance",
"m": "提前预订",
"x": "Listen for \"reserve in advance\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rɪˈzərv ɪn ədˈvæns/"
},
{
"w": "book beforehand",
"m": "提前预订",
"x": "Listen for \"book beforehand\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/bʊk bɪˈfɔˌrhænd/"
},
{
"w": "smoking room",
"m": "吸烟室",
"x": "Listen for \"smoking room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/sˈmoʊkɪŋ rum/"
},
{
"w": "smoking area",
"m": "吸烟区",
"x": "Listen for \"smoking area\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/sˈmoʊkɪŋ ˈɛriə/"
},
{
"w": "smoking section",
"m": "吸烟区",
"x": "Listen for \"smoking section\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/sˈmoʊkɪŋ ˈsɛkʃən/"
},
{
"w": "entertainment room",
"m": "娱乐室",
"x": "Listen for \"entertainment room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɛnərˈteɪnmənt rum/"
},
{
"w": "relaxation",
"m": "娱乐",
"x": "Listen for \"relaxation\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌrilækˈseɪʃən/"
},
{
"w": "refresh and recover",
"m": "休闲娱乐",
"x": "Listen for \"refresh and recover\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rɪˈfrɛʃ ənd rɪˈkəvər/"
},
{
"w": "relax and refresh",
"m": "休闲娱乐",
"x": "Listen for \"relax and refresh\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rɪˈlæks ənd rɪˈfrɛʃ/"
},
{
"w": "inclination",
"m": "爱好",
"x": "Listen for \"inclination\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɪnkləˈneɪʃən/"
},
{
"w": "recreation",
"m": "娱乐（方式），消遣（方式）",
"x": "Listen for \"recreation\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌrɛkriˈeɪʃən/"
},
{
"w": "chess room",
"m": "棋牌室",
"x": "Listen for \"chess room\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʧɛs rum/"
},
{
"w": "garage",
"m": "车库",
"x": "Listen for \"garage\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/gərɑʒ/"
},
{
"w": "flower house",
"m": "花房",
"x": "Listen for \"flower house\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/flaʊər haʊs/"
},
{
"w": "flower bed",
"m": "花圃",
"x": "Listen for \"flower bed\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/flaʊər bɛd/"
},
{
"w": "color TV",
"m": "彩电",
"x": "Listen for \"color TV\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkələr ˌtɛləˈvɪʒən/"
},
{
"w": "cable TV",
"m": "有线电视",
"x": "Listen for \"cable TV\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkeɪbəl ˌtɛləˈvɪʒən/"
},
{
"w": "satellite TV",
"m": "卫星电视",
"x": "Listen for \"satellite TV\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsætəˌlaɪt ˌtɛləˈvɪʒən/"
},
{
"w": "video",
"m": "视频",
"x": "Listen for \"video\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈvɪdioʊ/"
},
{
"w": "audio",
"m": "音频",
"x": "Listen for \"audio\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɑdiˌoʊ/"
},
{
"w": "stereo",
"m": "立体声音响设备",
"x": "Listen for \"stereo\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstɛriˌoʊ/"
},
{
"w": "tape recorder",
"m": "磁带录音机",
"x": "Listen for \"tape recorder\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/teɪp rɪˈkɔrdər/"
},
{
"w": "cassette player",
"m": "卡式录音机",
"x": "Listen for \"cassette player\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kəˈsɛt pleɪər/"
},
{
"w": "record player",
"m": "电唱机",
"x": "Listen for \"record player\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈrɛkərd pleɪər/"
},
{
"w": "refrigerator",
"m": "冰箱",
"x": "Listen for \"refrigerator\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rɪˈfrɪʤərˌeɪtər/"
},
{
"w": "fridge",
"m": "冰箱",
"x": "Listen for \"fridge\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/frɪʤ/"
},
{
"w": "ice box",
"m": "冰箱",
"x": "Listen for \"ice box\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/aɪs bɑks/"
},
{
"w": "gas stove",
"m": "煤气炉",
"x": "Listen for \"gas stove\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/gæs stoʊv/"
},
{
"w": "microwave oven",
"m": "微波炉",
"x": "Listen for \"microwave oven\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmaɪkrəˌweɪv ˈəvən/"
},
{
"w": "electric magnetic oven",
"m": "电磁炉",
"x": "Listen for \"electric magnetic oven\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪˈlɛktrɪk mægˈnɛtɪk ˈəvən/"
},
{
"w": "stove",
"m": "炉子",
"x": "Listen for \"stove\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/stoʊv/"
},
{
"w": "oven",
"m": "烤箱",
"x": "Listen for \"oven\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈəvən/"
},
{
"w": "cooker",
"m": "厨具",
"x": "Listen for \"cooker\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkʊkər/"
},
{
"w": "kitchen cupboard",
"m": "厨柜",
"x": "Listen for \"kitchen cupboard\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkɪʧən ˈkəbərd/"
},
{
"w": "electric fan",
"m": "电扇",
"x": "Listen for \"electric fan\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪˈlɛktrɪk fæn/"
},
{
"w": "telephone",
"m": "电话",
"x": "Listen for \"telephone\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtɛləˌfoʊn/"
},
{
"w": "loud-speaker",
"m": "扩音器",
"x": "Listen for \"loud-speaker\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "household gadget",
"m": "家用小器具",
"x": "Listen for \"household gadget\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhaʊsˌhoʊld ˈgæʤət/"
},
{
"w": "vacuum flask",
"m": "热水瓶，真空瓶",
"x": "Listen for \"vacuum flask\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈvækjum flæsk/"
},
{
"w": "washing machine",
"m": "洗衣机",
"x": "Listen for \"washing machine\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈwɑʃɪŋ məˈʃin/"
},
{
"w": "dish washer",
"m": "洗碗机",
"x": "Listen for \"dish washer\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/dɪʃ ˈwɑʃər/"
},
{
"w": "dryer",
"m": "烘干机，吹风机",
"x": "Listen for \"dryer\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/draɪər/"
},
{
"w": "shampoo",
"m": "洗发水",
"x": "Listen for \"shampoo\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃæmˈpu/"
},
{
"w": "bathtub",
"m": "浴缸，澡盆",
"x": "Listen for \"bathtub\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbæθtəb/"
},
{
"w": "shower",
"m": "淋浴",
"x": "Listen for \"shower\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃaʊər/"
},
{
"w": "lighting",
"m": "灯光，照明",
"x": "Listen for \"lighting\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlaɪtɪŋ/"
},
{
"w": "ventilation",
"m": "通风",
"x": "Listen for \"ventilation\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌvɛntɪˈleɪʃən/"
},
{
"w": "electric vacuum cleaner",
"m": "电吸尘器",
"x": "Listen for \"electric vacuum cleaner\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪˈlɛktrɪk ˈvækjum ˈklinər/"
},
{
"w": "bulb",
"m": "电灯泡",
"x": "Listen for \"bulb\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/bəlb/"
},
{
"w": "radiator",
"m": "散热器；暖气片",
"x": "Listen for \"radiator\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈreɪdiˌeɪtər/"
},
{
"w": "heating",
"m": "暖气装置（设备）",
"x": "Listen for \"heating\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhitɪŋ/"
},
{
"w": "furnace",
"m": "火炉",
"x": "Listen for \"furnace\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfərnəs/"
},
{
"w": "heating unit",
"m": "加热装置",
"x": "Listen for \"heating unit\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhitɪŋ ˈjunɪt/"
},
{
"w": "fire place",
"m": "壁炉",
"x": "Listen for \"fire place\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/faɪər pleɪs/"
},
{
"w": "utensil",
"m": "用具",
"x": "Listen for \"utensil\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/juˈtɛnsəl/"
},
{
"w": "air-conditioning",
"m": "空调",
"x": "Listen for \"air-conditioning\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɛrkənˌdɪʃənɪŋ/"
},
{
"w": "central air-conditioning",
"m": "中央空调",
"x": "Listen for \"central air-conditioning\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsɛntrəl ˈɛrkənˌdɪʃənɪŋ/"
},
{
"w": "closet",
"m": "壁橱",
"x": "Listen for \"closet\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈklɑzət/"
},
{
"w": "built-in closet",
"m": "嵌入式壁橱",
"x": "Listen for \"built-in closet\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbɪlˌtɪn ˈklɑzət/"
},
{
"w": "wardrobe",
"m": "柜子",
"x": "Listen for \"wardrobe\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈwɔrˌdroʊb/"
},
{
"w": "bookshelf",
"m": "书架",
"x": "Listen for \"bookshelf\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbʊkˌʃɛlf/"
},
{
"w": "cupboard",
"m": "橱柜",
"x": "Listen for \"cupboard\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkəbərd/"
},
{
"w": "storage wall",
"m": "壁橱",
"x": "Listen for \"storage wall\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstɔrɪʤ wɔl/"
},
{
"w": "blanket",
"m": "毯子",
"x": "Listen for \"blanket\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈblæŋkɪt/"
},
{
"w": "carpet",
"m": "（尤指铺满房间的）地毯",
"x": "Listen for \"carpet\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkɑrpət/"
},
{
"w": "rug",
"m": "小地毯",
"x": "Listen for \"rug\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rəg/"
},
{
"w": "curtain",
"m": "窗帘",
"x": "Listen for \"curtain\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkərtən/"
},
{
"w": "cushion",
"m": "垫子，靠垫",
"x": "Listen for \"cushion\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkʊʃən/"
},
{
"w": "bed linen",
"m": "床上用品（床单、枕套等）",
"x": "Listen for \"bed linen\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/bɛd ˈlɪnən/"
},
{
"w": "sheet",
"m": "床单",
"x": "Listen for \"sheet\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃit/"
},
{
"w": "mattress",
"m": "床垫",
"x": "Listen for \"mattress\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmætrəs/"
},
{
"w": "linen",
"m": "亚麻布，日用织品",
"x": "Listen for \"linen\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɪnən/"
},
{
"w": "pillow",
"m": "枕头",
"x": "Listen for \"pillow\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɪloʊ/"
},
{
"w": "pillow case and bed linen",
"m": "枕头套和床单",
"x": "Listen for \"pillow case and bed linen\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɪloʊ keɪs ənd bɛd ˈlɪnən/"
},
{
"w": "towel",
"m": "手巾，毛巾",
"x": "Listen for \"towel\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/taʊəl/"
},
{
"w": "pot plant",
"m": "盆栽植物",
"x": "Listen for \"pot plant\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/pɑt plænt/"
},
{
"w": "talcum powder",
"m": "爽身粉，滑石粉",
"x": "Listen for \"talcum powder\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtælkəm ˈpaʊdər/"
},
{
"w": "rural area",
"m": "乡村，郊区",
"x": "Listen for \"rural area\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈrʊrəl ˈɛriə/"
},
{
"w": "urban",
"m": "城区，市区",
"x": "Listen for \"urban\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈərbən/"
},
{
"w": "county",
"m": "县城",
"x": "Listen for \"county\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkaʊnti/"
},
{
"w": "country",
"m": "郊区",
"x": "Listen for \"country\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkəntri/"
},
{
"w": "downtown area",
"m": "市中心，闹市区",
"x": "Listen for \"downtown area\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈdaʊnˈtaʊn ˈɛriə/"
},
{
"w": "city centre",
"m": "市中心",
"x": "Listen for \"city centre\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsɪti ˈsɛntər/"
},
{
"w": "industrial area",
"m": "工业区",
"x": "Listen for \"industrial area\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɪnˈdəstriəl ˈɛriə/"
},
{
"w": "industrial park",
"m": "工业园区",
"x": "Listen for \"industrial park\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɪnˈdəstriəl pɑrk/"
},
{
"w": "block",
"m": "街区",
"x": "Listen for \"block\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/blɑk/"
},
{
"w": "scenic area",
"m": "风景区",
"x": "Listen for \"scenic area\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsinɪk ˈɛriə/"
},
{
"w": "amenity",
"m": "便利设施",
"x": "Listen for \"amenity\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/əˈmɛnəti/"
},
{
"w": "surroundings",
"m": "周边环境",
"x": "Listen for \"surroundings\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/sərˈaʊndɪŋz/"
},
{
"w": "shopping mall",
"m": "购物广场",
"x": "Listen for \"shopping mall\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈʃɑpɪŋ mɔl/"
},
{
"w": "mart",
"m": "市场",
"x": "Listen for \"mart\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/mɑrt/"
},
{
"w": "supermarket",
"m": "超市",
"x": "Listen for \"supermarket\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsupərˌmɑrkɪt/"
},
{
"w": "whole sale",
"m": "批发",
"x": "Listen for \"whole sale\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/hoʊl seɪl/"
},
{
"w": "retail",
"m": "零售",
"x": "Listen for \"retail\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈriˌteɪl/"
},
{
"w": "boutique",
"m": "小服装店，精品店",
"x": "Listen for \"boutique\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/buˈtik/"
},
{
"w": "convenience store",
"m": "便利店",
"x": "Listen for \"convenience store\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kənˈvinjəns stɔr/"
},
{
"w": "drug store",
"m": "药店",
"x": "Listen for \"drug store\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/drəg stɔr/"
},
{
"w": "grocery",
"m": "杂货店",
"x": "Listen for \"grocery\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈgroʊsəri/"
},
{
"w": "dime store",
"m": "廉价商店，折扣商店",
"x": "Listen for \"dime store\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/daɪm stɔr/"
},
{
"w": "vendor",
"m": "小店，小摊，自动售货机",
"x": "Listen for \"vendor\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈvɛndər/"
},
{
"w": "booth",
"m": "售货摊",
"x": "Listen for \"booth\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/buθ/"
},
{
"w": "slot machine",
"m": "投币售货机",
"x": "Listen for \"slot machine\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/slɑt məˈʃin/"
},
{
"w": "chemist's shop",
"m": "药店",
"x": "Listen for \"chemist's shop\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "open seven days",
"m": "每周7天都营业",
"x": "Listen for \"open seven days\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈoʊpən ˈsɛvən deɪz/"
},
{
"w": "round the clock",
"m": "24小时营业",
"x": "Listen for \"round the clock\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/raʊnd ðə klɑk/"
},
{
"w": "opening hours",
"m": "营业时间",
"x": "Listen for \"opening hours\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈoʊpənɪŋ aʊərz/"
},
{
"w": "student preference",
"m": "学生优惠",
"x": "Listen for \"student preference\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt ˈprɛfərəns/"
},
{
"w": "barber",
"m": "（男子）理发店",
"x": "Listen for \"barber\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbɑrbər/"
},
{
"w": "swimming pool",
"m": "游泳池",
"x": "Listen for \"swimming pool\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/sˈwɪmɪŋ pul/"
},
{
"w": "theatre",
"m": "戏院",
"x": "Listen for \"theatre\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈθiətər/"
},
{
"w": "grand cinema",
"m": "电影院",
"x": "Listen for \"grand cinema\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/grænd ˈsɪnəmə/"
},
{
"w": "parking place",
"m": "停车场",
"x": "Listen for \"parking place\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑrkɪŋ pleɪs/"
},
{
"w": "parking lot",
"m": "停车场",
"x": "Listen for \"parking lot\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑrkɪŋ lɔt/"
},
{
"w": "parking meter",
"m": "停车计时器",
"x": "Listen for \"parking meter\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑrkɪŋ ˈmitər/"
},
{
"w": "parking regulation",
"m": "停车规定",
"x": "Listen for \"parking regulation\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑrkɪŋ ˌrɛgjəˈleɪʃən/"
},
{
"w": "parking permit",
"m": "停车证",
"x": "Listen for \"parking permit\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑrkɪŋ ˈpərˌmɪt/"
},
{
"w": "recreation centre",
"m": "娱乐中心",
"x": "Listen for \"recreation centre\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌrɛkriˈeɪʃən ˈsɛntər/"
},
{
"w": "front screen",
"m": "前挡风玻璃",
"x": "Listen for \"front screen\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/frənt skrin/"
},
{
"w": "cafe",
"m": "咖啡馆，小餐厅",
"x": "Listen for \"cafe\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kəˈfeɪ/"
},
{
"w": "cafeteria",
"m": "校园自助餐厅",
"x": "Listen for \"cafeteria\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌkæfəˈtɪriə/"
},
{
"w": "diner",
"m": "地方小餐馆",
"x": "Listen for \"diner\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈdaɪnər/"
},
{
"w": "coffee bar",
"m": "咖啡馆",
"x": "Listen for \"coffee bar\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkɔfi bɑr/"
},
{
"w": "snack bar",
"m": "小吃店，快餐厅",
"x": "Listen for \"snack bar\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/snæk bɑr/"
},
{
"w": "garden",
"m": "花园",
"x": "Listen for \"garden\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈgɑrdən/"
},
{
"w": "lake",
"m": "湖泊",
"x": "Listen for \"lake\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/leɪk/"
},
{
"w": "river",
"m": "河流",
"x": "Listen for \"river\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈrɪvər/"
},
{
"w": "ocean",
"m": "海洋",
"x": "Listen for \"ocean\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈoʊʃən/"
},
{
"w": "square",
"m": "广场",
"x": "Listen for \"square\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/skwɛr/"
},
{
"w": "mountain",
"m": "高山",
"x": "Listen for \"mountain\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmaʊntən/"
},
{
"w": "park",
"m": "公园",
"x": "Listen for \"park\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/pɑrk/"
},
{
"w": "forest",
"m": "森林",
"x": "Listen for \"forest\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfɔrɪst/"
},
{
"w": "car",
"m": "小汽车",
"x": "Listen for \"car\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kɑr/"
},
{
"w": "car pool",
"m": "拼车",
"x": "Listen for \"car pool\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kɑr pul/"
},
{
"w": "taxi",
"m": "出租车",
"x": "Listen for \"taxi\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtæksi/"
},
{
"w": "taxicab",
"m": "出租车",
"x": "Listen for \"taxicab\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtæksiˌkæb/"
},
{
"w": "coach",
"m": "长途汽车，大巴士",
"x": "Listen for \"coach\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/koʊʧ/"
},
{
"w": "mini bus",
"m": "小巴",
"x": "Listen for \"mini bus\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmɪni bəs/"
},
{
"w": "medium-sized bus",
"m": "中巴",
"x": "Listen for \"medium-sized bus\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "shuttle bus",
"m": "穿梭巴士",
"x": "Listen for \"shuttle bus\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈʃətəl bəs/"
},
{
"w": "commute bus",
"m": "通勤车",
"x": "Listen for \"commute bus\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kəmˈjut bəs/"
},
{
"w": "trolley bus",
"m": "无轨电车",
"x": "Listen for \"trolley bus\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈtrɑli bəs/"
},
{
"w": "observing bus",
"m": "观光巴士",
"x": "Listen for \"observing bus\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/əbˈzərvɪŋ bəs/"
},
{
"w": "train",
"m": "火车",
"x": "Listen for \"train\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/treɪn/"
},
{
"w": "commute train",
"m": "通勤火车",
"x": "Listen for \"commute train\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kəmˈjut treɪn/"
},
{
"w": "tram",
"m": "有轨电车",
"x": "Listen for \"tram\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/træm/"
},
{
"w": "subway",
"m": "地铁",
"x": "Listen for \"subway\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsəbˌweɪ/"
},
{
"w": "tube",
"m": "〈英〉地铁",
"x": "Listen for \"tube\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/tub/"
},
{
"w": "underground",
"m": "地铁",
"x": "Listen for \"underground\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈəndərˌgraʊnd/"
},
{
"w": "metro station",
"m": "地铁站",
"x": "Listen for \"metro station\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmɛˌtroʊ ˈsteɪʃən/"
},
{
"w": "city-rail",
"m": "城铁",
"x": "Listen for \"city-rail\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "light-rail",
"m": "轻轨",
"x": "Listen for \"light-rail\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "mag-lev",
"m": "磁悬浮列车",
"x": "Listen for \"mag-lev\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "non-stop train",
"m": "直达列车",
"x": "Listen for \"non-stop train\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌnɑnˈstɑp treɪn/"
},
{
"w": "single-track train",
"m": "单轨列车",
"x": "Listen for \"single-track train\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "commute ferry",
"m": "通勤渡船",
"x": "Listen for \"commute ferry\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kəmˈjut ˈfɛri/"
},
{
"w": "express train",
"m": "特快火车",
"x": "Listen for \"express train\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪkˈsprɛs treɪn/"
},
{
"w": "vehicle",
"m": "交通工具，车辆",
"x": "Listen for \"vehicle\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈviɪkəl/"
},
{
"w": "helicopter",
"m": "直升飞机",
"x": "Listen for \"helicopter\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhɛlɪˌkɑptər/"
},
{
"w": "first class",
"m": "头等舱",
"x": "Listen for \"first class\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/fərst klæs/"
},
{
"w": "business class",
"m": "商务舱",
"x": "Listen for \"business class\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbɪznɪs klæs/"
},
{
"w": "economy class",
"m": "经济舱",
"x": "Listen for \"economy class\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪˈkɑnəmi klæs/"
},
{
"w": "freight",
"m": "货运，货物",
"x": "Listen for \"freight\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/freɪt/"
},
{
"w": "container",
"m": "集装箱",
"x": "Listen for \"container\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kənˈteɪnər/"
},
{
"w": "round trip ticket",
"m": "往返票",
"x": "Listen for \"round trip ticket\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/raʊnd trɪp ˈtɪkɪt/"
},
{
"w": "return trip ticket",
"m": "往返票",
"x": "Listen for \"return trip ticket\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rɪˈtərn trɪp ˈtɪkɪt/"
},
{
"w": "on foot",
"m": "步行",
"x": "Listen for \"on foot\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɔn fʊt/"
},
{
"w": "within walking distance",
"m": "步行可到",
"x": "Listen for \"within walking distance\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/wɪˈθɪn ˈwɔkɪŋ ˈdɪstəns/"
},
{
"w": "ferry",
"m": "渡船",
"x": "Listen for \"ferry\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfɛri/"
},
{
"w": "hovercraft",
"m": "气垫船",
"x": "Listen for \"hovercraft\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhəvərˌkræft/"
},
{
"w": "hitch hike",
"m": "搭车",
"x": "Listen for \"hitch hike\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/hɪʧ haɪk/"
},
{
"w": "bike",
"m": "自行车",
"x": "Listen for \"bike\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/baɪk/"
},
{
"w": "bicycle",
"m": "自行车",
"x": "Listen for \"bicycle\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbaɪsɪkəl/"
},
{
"w": "fare",
"m": "车费，票价",
"x": "Listen for \"fare\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/fɛr/"
},
{
"w": "toll",
"m": "通行费",
"x": "Listen for \"toll\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/toʊl/"
},
{
"w": "extra charge",
"m": "额外费用",
"x": "Listen for \"extra charge\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɛkstrə ʧɑrʤ/"
},
{
"w": "open ticket",
"m": "通票",
"x": "Listen for \"open ticket\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈoʊpən ˈtɪkɪt/"
},
{
"w": "admission ticket",
"m": "入场票",
"x": "Listen for \"admission ticket\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ədˈmɪʃən ˈtɪkɪt/"
},
{
"w": "rain check",
"m": "（因故可再凭以入场的）票根",
"x": "Listen for \"rain check\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/reɪn ʧɛk/"
},
{
"w": "one-way ticket",
"m": "单程票",
"x": "Listen for \"one-way ticket\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈwənˈweɪ ˈtɪkɪt/"
},
{
"w": "round-trip ticket",
"m": "往返票，双程票",
"x": "Listen for \"round-trip ticket\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "near bus station",
"m": "离车站近",
"x": "Listen for \"near bus station\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/nɪr bəs ˈsteɪʃən/"
},
{
"w": "nice view",
"m": "风景优美",
"x": "Listen for \"nice view\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/nis vju/"
},
{
"w": "well-furnished",
"m": "家具齐全的",
"x": "Listen for \"well-furnished\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "well-facilitated",
"m": "配备完善的",
"x": "Listen for \"well-facilitated\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "expensive",
"m": "比较贵的",
"x": "Listen for \"expensive\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪkˈspɛnsɪv/"
},
{
"w": "beyond the budget",
"m": "超预算的",
"x": "Listen for \"beyond the budget\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/bɪɔnd ðə ˈbəʤɪt/"
},
{
"w": "far",
"m": "远的",
"x": "Listen for \"far\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/fɑr/"
},
{
"w": "faraway",
"m": "偏远的",
"x": "Listen for \"faraway\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfɑrəˈweɪ/"
},
{
"w": "out of the way",
"m": "地方偏远的",
"x": "Listen for \"out of the way\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/aʊt əv ðə weɪ/"
},
{
"w": "lack of facilities",
"m": "设施不全的",
"x": "Listen for \"lack of facilities\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/læk əv fəˈsɪlɪtiz/"
},
{
"w": "too small",
"m": "地方太小的",
"x": "Listen for \"too small\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/tu smɔl/"
},
{
"w": "not big enough",
"m": "地方不够大",
"x": "Listen for \"not big enough\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/nɑt bɪg ɪˈnəf/"
},
{
"w": "unfriendly landlord",
"m": "不友善的房东",
"x": "Listen for \"unfriendly landlord\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ənˈfrɛndli ˈlænˌdlɔrd/"
},
{
"w": "uncooperative landlord",
"m": "不合作的房东",
"x": "Listen for \"uncooperative landlord\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ənkoʊˈɑpərətɪv ˈlænˌdlɔrd/"
},
{
"w": "amenities",
"m": "便利设施，文化设施",
"x": "Listen for \"amenities\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/əˈmɛnətiz/"
},
{
"w": "near the airport",
"m": "离飞机场近",
"x": "Listen for \"near the airport\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/nɪr ðə ˈɛrˌpɔrt/"
},
{
"w": "downtown",
"m": "城中心",
"x": "Listen for \"downtown\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈdaʊnˈtaʊn/"
},
{
"w": "suburb",
"m": "近郊",
"x": "Listen for \"suburb\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsəbərb/"
},
{
"w": "near the railway station",
"m": "在火车站附近",
"x": "Listen for \"near the railway station\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/nɪr ðə ˈreɪlˌweɪ ˈsteɪʃən/"
},
{
"w": "no privacy",
"m": "没有隐私",
"x": "Listen for \"no privacy\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ ˈpraɪvəsi/"
},
{
"w": "insect haunting",
"m": "蚊虫比较多",
"x": "Listen for \"insect haunting\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɪnˌsɛkt ˈhɔntɪŋ/"
},
{
"w": "insect repellant",
"m": "驱虫剂",
"x": "Listen for \"insect repellant\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "stranger next bed",
"m": "和陌生人住一个房间",
"x": "Listen for \"stranger next bed\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstreɪnʤər nɛkst bɛd/"
},
{
"w": "food not your liking",
"m": "吃不习惯",
"x": "Listen for \"food not your liking\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/fud nɑt jʊr ˈlaɪkɪŋ/"
},
{
"w": "vegetable only",
"m": "只吃素菜",
"x": "Listen for \"vegetable only\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈvɛʤtəbəl ˈoʊnli/"
},
{
"w": "vegetarian",
"m": "素食主义者",
"x": "Listen for \"vegetarian\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌvɛʤəˈtɛˌriən/"
},
{
"w": "present address",
"m": "现在的住址",
"x": "Listen for \"present address\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈprɛzənt ˈæˌdrɛs/"
},
{
"w": "road",
"m": "道路，公路",
"x": "Listen for \"road\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/roʊd/"
},
{
"w": "avenue",
"m": "林荫道，大街",
"x": "Listen for \"avenue\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈævəˌnu/"
},
{
"w": "boulevard",
"m": "林荫道，大街",
"x": "Listen for \"boulevard\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbʊləˌvɑrd/"
},
{
"w": "pathway",
"m": "通道",
"x": "Listen for \"pathway\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpæθˌweɪ/"
},
{
"w": "pavement",
"m": "人行道，辅路",
"x": "Listen for \"pavement\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpeɪvmənt/"
},
{
"w": "sidewalk",
"m": "人行道",
"x": "Listen for \"sidewalk\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsaɪdˌwɔk/"
},
{
"w": "short cut",
"m": "近道，捷径",
"x": "Listen for \"short cut\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃɔrt kət/"
},
{
"w": "crossing",
"m": "路口",
"x": "Listen for \"crossing\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkrɔsɪŋ/"
},
{
"w": "intersection",
"m": "十字路口",
"x": "Listen for \"intersection\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɪntərˈsɛkʃən/"
},
{
"w": "zebra crossing",
"m": "斑马线",
"x": "Listen for \"zebra crossing\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈzibrə ˈkrɔsɪŋ/"
},
{
"w": "overhead bridge",
"m": "过街天桥",
"x": "Listen for \"overhead bridge\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈoʊvərˈhɛd brɪʤ/"
},
{
"w": "junction",
"m": "（公路或铁路的）连接路口",
"x": "Listen for \"junction\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈʤəŋkʃən/"
},
{
"w": "T road",
"m": "丁字路口",
"x": "Listen for \"T road\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ti roʊd/"
},
{
"w": "T junction",
"m": "丁字路口",
"x": "Listen for \"T junction\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ti ˈʤəŋkʃən/"
},
{
"w": "roundabout",
"m": "环形路口",
"x": "Listen for \"roundabout\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈraʊndəˌbaʊt/"
},
{
"w": "street",
"m": "街道",
"x": "Listen for \"street\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/strit/"
},
{
"w": "path",
"m": "小路，小径",
"x": "Listen for \"path\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/pæθ/"
},
{
"w": "lane",
"m": "小路，小巷",
"x": "Listen for \"lane\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/leɪn/"
},
{
"w": "zip code",
"m": "〈美〉邮编",
"x": "Listen for \"zip code\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/zɪp koʊd/"
},
{
"w": "post code",
"m": "〈英〉邮编",
"x": "Listen for \"post code\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/poʊst koʊd/"
},
{
"w": "highway",
"m": "公路",
"x": "Listen for \"highway\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhaɪˌweɪ/"
},
{
"w": "express way",
"m": "高速",
"x": "Listen for \"express way\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪkˈsprɛs weɪ/"
},
{
"w": "free way",
"m": "高速",
"x": "Listen for \"free way\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/fri weɪ/"
},
{
"w": "date of birth",
"m": "出生日期",
"x": "Listen for \"date of birth\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/deɪt əv bərθ/"
},
{
"w": "British",
"m": "英国人",
"x": "Listen for \"British\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbrɪtɪʃ/"
},
{
"w": "American",
"m": "美国人",
"x": "Listen for \"American\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/əˈmɛrɪkən/"
},
{
"w": "Polish",
"m": "波兰人",
"x": "Listen for \"Polish\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑlɪʃ/"
},
{
"w": "Canadian",
"m": "加拿大人",
"x": "Listen for \"Canadian\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kəˈneɪdiən/"
},
{
"w": "Australian",
"m": "澳大利亚人",
"x": "Listen for \"Australian\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɔˈstreɪljən/"
},
{
"w": "Singapore",
"m": "新加坡",
"x": "Listen for \"Singapore\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈsɪŋəˌpɔr/"
},
{
"w": "Philippines",
"m": "菲律宾",
"x": "Listen for \"Philippines\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈfɪləˌpinz/"
},
{
"w": "Indonesia",
"m": "印度尼西亚",
"x": "Listen for \"Indonesia\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɪndoʊˈniʒə/"
},
{
"w": "Malaysia",
"m": "马来西亚",
"x": "Listen for \"Malaysia\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/məˈleɪʒə/"
},
{
"w": "Bangkok",
"m": "曼谷",
"x": "Listen for \"Bangkok\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbæŋkɑk/"
},
{
"w": "Great Britain",
"m": "大不列颠",
"x": "Listen for \"Great Britain\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/greɪt ˈbrɪtən/"
},
{
"w": "England",
"m": "英格兰",
"x": "Listen for \"England\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɪŋglənd/"
},
{
"w": "London",
"m": "伦敦",
"x": "Listen for \"London\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈləndən/"
},
{
"w": "Manchester",
"m": "曼彻斯特",
"x": "Listen for \"Manchester\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmænˌʧɛstər/"
},
{
"w": "Liverpool",
"m": "利物浦",
"x": "Listen for \"Liverpool\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɪvərˌpul/"
},
{
"w": "Birmingham",
"m": "伯明翰",
"x": "Listen for \"Birmingham\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbərmɪŋˌhæm/"
},
{
"w": "Edinburgh",
"m": "爱丁堡",
"x": "Listen for \"Edinburgh\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɛdənbəroʊ/"
},
{
"w": "Scotland",
"m": "苏格兰",
"x": "Listen for \"Scotland\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈskɑtlənd/"
},
{
"w": "Leeds",
"m": "利兹",
"x": "Listen for \"Leeds\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/lidz/"
},
{
"w": "North Ireland",
"m": "北爱尔兰",
"x": "Listen for \"North Ireland\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/nɔrθ ˈaɪərlənd/"
},
{
"w": "Cardiff",
"m": "加的夫",
"x": "Listen for \"Cardiff\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkɑrdɪf/"
},
{
"w": "Coventry",
"m": "考文垂",
"x": "Listen for \"Coventry\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkəvəntri/"
},
{
"w": "Perth",
"m": "珀斯",
"x": "Listen for \"Perth\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/pərθ/"
},
{
"w": "Melbourne",
"m": "墨尔本",
"x": "Listen for \"Melbourne\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmɛlbərn/"
},
{
"w": "South Sydney",
"m": "南悉尼",
"x": "Listen for \"South Sydney\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/saʊθ ˈsɪdni/"
},
{
"w": "South Wales",
"m": "南威尔士",
"x": "Listen for \"South Wales\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/saʊθ weɪlz/"
},
{
"w": "Queensland",
"m": "昆士兰",
"x": "Listen for \"Queensland\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kˈwinzˌlænd/"
},
{
"w": "Canberra",
"m": "堪培拉",
"x": "Listen for \"Canberra\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌkænˈbɛrə/"
},
{
"w": "Adelaide",
"m": "阿德莱德",
"x": "Listen for \"Adelaide\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈædəˌleɪd/"
},
{
"w": "Toronto",
"m": "多伦多",
"x": "Listen for \"Toronto\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/tərˈɑntoʊ/"
},
{
"w": "Quebec",
"m": "魁北克",
"x": "Listen for \"Quebec\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kwəˈbɛk/"
},
{
"w": "Montreal",
"m": "蒙特利尔",
"x": "Listen for \"Montreal\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌməntriˈɔl/"
},
{
"w": "Vancouver",
"m": "温哥华",
"x": "Listen for \"Vancouver\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/vænˈkuvər/"
},
{
"w": "Ottawa",
"m": "渥太华",
"x": "Listen for \"Ottawa\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɑtəˌwɑ/"
},
{
"w": "architecture",
"m": "建筑学",
"x": "Listen for \"architecture\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɑrkəˌtɛkʧər/"
},
{
"w": "medicine",
"m": "医学",
"x": "Listen for \"medicine\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmɛdəsən/"
},
{
"w": "psychology",
"m": "心理学",
"x": "Listen for \"psychology\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/saɪˈkɑləʤi/"
},
{
"w": "economics",
"m": "经济学",
"x": "Listen for \"economics\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɛkəˈnɑmɪks/"
},
{
"w": "politics",
"m": "政治学",
"x": "Listen for \"politics\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑləˌtɪks/"
},
{
"w": "history",
"m": "历史学",
"x": "Listen for \"history\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈhɪstəri/"
},
{
"w": "anthropology",
"m": "人类学",
"x": "Listen for \"anthropology\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌænθrəˈpɑləʤi/"
},
{
"w": "archeology",
"m": "考古学",
"x": "Listen for \"archeology\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɑrkiˈɑləʤi/"
},
{
"w": "environment study",
"m": "环境研究",
"x": "Listen for \"environment study\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪnˈvaɪrənmənt ˈstədi/"
},
{
"w": "population study",
"m": "人口研究",
"x": "Listen for \"population study\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌpɑpjəˈleɪʃən ˈstədi/"
},
{
"w": "general English",
"m": "基础英语",
"x": "Listen for \"general English\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈʤɛnərəl ˈɪŋlɪʃ/"
},
{
"w": "academic English",
"m": "学术英语",
"x": "Listen for \"academic English\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌækəˈdɛmɪk ˈɪŋlɪʃ/"
},
{
"w": "letter from bank",
"m": "银行证明",
"x": "Listen for \"letter from bank\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər frəm bæŋk/"
},
{
"w": "bank statement",
"m": "银行对账单，银行证明",
"x": "Listen for \"bank statement\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/bæŋk ˈsteɪtmənt/"
},
{
"w": "reference letter",
"m": "推荐信",
"x": "Listen for \"reference letter\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈrɛfərəns ˈlɛtər/"
},
{
"w": "recommendation letter",
"m": "推荐信",
"x": "Listen for \"recommendation letter\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌrɛkəmənˈdeɪʃən ˈlɛtər/"
},
{
"w": "application form",
"m": "申请表",
"x": "Listen for \"application form\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌæpləˈkeɪʃən fɔrm/"
},
{
"w": "letter of application",
"m": "申请信",
"x": "Listen for \"letter of application\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər əv ˌæpləˈkeɪʃən/"
},
{
"w": "letter of confirmation",
"m": "确认信",
"x": "Listen for \"letter of confirmation\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər əv ˌkɑnfərˈmeɪʃən/"
},
{
"w": "letter of acceptance",
"m": "录取信",
"x": "Listen for \"letter of acceptance\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər əv əkˈsɛptəns/"
},
{
"w": "letter of enrollment",
"m": "录取信",
"x": "Listen for \"letter of enrollment\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər əv ɛnˈroʊlmənt/"
},
{
"w": "letter of admission",
"m": "录取信",
"x": "Listen for \"letter of admission\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər əv ədˈmɪʃən/"
},
{
"w": "letter of preference",
"m": "证明信，介绍信",
"x": "Listen for \"letter of preference\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər əv ˈprɛfərəns/"
},
{
"w": "passport",
"m": "护照",
"x": "Listen for \"passport\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpæˌspɔrt/"
},
{
"w": "driver's license",
"m": "驾照",
"x": "Listen for \"driver's license\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈdraɪvərz ˈlaɪsəns/"
},
{
"w": "letter from professor",
"m": "教授推荐信",
"x": "Listen for \"letter from professor\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər frəm prəˈfɛsər/"
},
{
"w": "letter from employer",
"m": "雇主推荐信",
"x": "Listen for \"letter from employer\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər frəm ɪmˈplɔɪər/"
},
{
"w": "letter of credit",
"m": "信用证",
"x": "Listen for \"letter of credit\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər əv ˈkrɛdɪt/"
},
{
"w": "letter of invitation",
"m": "邀请信",
"x": "Listen for \"letter of invitation\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlɛtər əv ˌɪnvɪˈteɪʃən/"
},
{
"w": "mailshot",
"m": "信件",
"x": "Listen for \"mailshot\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "registered letter",
"m": "挂号信",
"x": "Listen for \"registered letter\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈrɛʤɪstərd ˈlɛtər/"
},
{
"w": "postcard",
"m": "明信片",
"x": "Listen for \"postcard\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpoʊˌskɑrd/"
},
{
"w": "rental price",
"m": "租房价",
"x": "Listen for \"rental price\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈrɛntəl praɪs/"
},
{
"w": "insurance",
"m": "保险费用",
"x": "Listen for \"insurance\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌɪnˈʃʊrəns/"
},
{
"w": "cleaning fee",
"m": "保洁费",
"x": "Listen for \"cleaning fee\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈklinɪŋ fi/"
},
{
"w": "garbage collecting fee",
"m": "垃圾清理费",
"x": "Listen for \"garbage collecting fee\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈgɑrbɪʤ kəˈlɛktɪŋ fi/"
},
{
"w": "max price",
"m": "最高价",
"x": "Listen for \"max price\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/mæks praɪs/"
},
{
"w": "minimum price",
"m": "最低价",
"x": "Listen for \"minimum price\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmɪnəməm praɪs/"
},
{
"w": "price limit",
"m": "价格上限",
"x": "Listen for \"price limit\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/praɪs ˈlɪmət/"
},
{
"w": "phone bill",
"m": "电话账单",
"x": "Listen for \"phone bill\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/foʊn bɪl/"
},
{
"w": "pay for the contract",
"m": "支付给中介签合同的钱",
"x": "Listen for \"pay for the contract\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/peɪ fər ðə ˈkɑnˌtrækt/"
},
{
"w": "water and gas",
"m": "水（费）和煤气（费）",
"x": "Listen for \"water and gas\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈwɔtər ənd gæs/"
},
{
"w": "room service",
"m": "房间服务（费）",
"x": "Listen for \"room service\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rum ˈsərvɪs/"
},
{
"w": "energy",
"m": "能源（费）",
"x": "Listen for \"energy\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈɛnərʤi/"
},
{
"w": "fee",
"m": "费用",
"x": "Listen for \"fee\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/fi/"
},
{
"w": "length of time",
"m": "（住宿）时间长度",
"x": "Listen for \"length of time\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/lɛŋθ əv taɪm/"
},
{
"w": "date of move-in",
"m": "搬入日期",
"x": "Listen for \"date of move-in\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "day time number",
"m": "白天方便拨打的电话号码",
"x": "Listen for \"day time number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/deɪ taɪm ˈnəmbər/"
},
{
"w": "extension number",
"m": "分机号码",
"x": "Listen for \"extension number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ɪkˈstɛnʃən ˈnəmbər/"
},
{
"w": "best time to contact",
"m": "最佳联系时间",
"x": "Listen for \"best time to contact\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/bɛst taɪm tɪ ˈkɑnˌtækt/"
},
{
"w": "cell phone",
"m": "手机",
"x": "Listen for \"cell phone\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/sɛl foʊn/"
},
{
"w": "mobile phone",
"m": "手机，移动电话",
"x": "Listen for \"mobile phone\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈmoʊbəl foʊn/"
},
{
"w": "pay phone",
"m": "（投币式）公用电话",
"x": "Listen for \"pay phone\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/peɪ foʊn/"
},
{
"w": "public phone",
"m": "公用电话",
"x": "Listen for \"public phone\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpəblɪk foʊn/"
},
{
"w": "shared phone",
"m": "共用电话",
"x": "Listen for \"shared phone\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃɛrd foʊn/"
},
{
"w": "identification number",
"m": "身份证号",
"x": "Listen for \"identification number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/aɪˌdɛntəfəˈkeɪʃən ˈnəmbər/"
},
{
"w": "bank statement number",
"m": "银行对账单编号",
"x": "Listen for \"bank statement number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/bæŋk ˈsteɪtmənt ˈnəmbər/"
},
{
"w": "registration number",
"m": "注册号码",
"x": "Listen for \"registration number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌrɛʤɪˈstreɪʃən ˈnəmbər/"
},
{
"w": "student card number",
"m": "学生卡号",
"x": "Listen for \"student card number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt kɑrd ˈnəmbər/"
},
{
"w": "student number",
"m": "学号",
"x": "Listen for \"student number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈstudənt ˈnəmbər/"
},
{
"w": "room number",
"m": "房间号",
"x": "Listen for \"room number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rum ˈnəmbər/"
},
{
"w": "driver's license number",
"m": "驾照号码",
"x": "Listen for \"driver's license number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈdraɪvərz ˈlaɪsəns ˈnəmbər/"
},
{
"w": "parking permit number",
"m": "准停证号",
"x": "Listen for \"parking permit number\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈpɑrkɪŋ ˈpərˌmɪt ˈnəmbər/"
},
{
"w": "no pets",
"m": "不准养宠物",
"x": "Listen for \"no pets\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ pɛts/"
},
{
"w": "no party",
"m": "不准搞派对",
"x": "Listen for \"no party\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ ˈpɑrti/"
},
{
"w": "no sublet",
"m": "不准转租",
"x": "Listen for \"no sublet\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ ˈsəˌblɛt/"
},
{
"w": "no noise",
"m": "不准制造噪音",
"x": "Listen for \"no noise\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ nɔɪz/"
},
{
"w": "no smoke",
"m": "不准吸烟",
"x": "Listen for \"no smoke\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ smoʊk/"
},
{
"w": "no drink",
"m": "不准饮酒",
"x": "Listen for \"no drink\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ drɪŋk/"
},
{
"w": "shared bill",
"m": "分担账单",
"x": "Listen for \"shared bill\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ʃɛrd bɪl/"
},
{
"w": "garbage collecting",
"m": "垃圾清理费",
"x": "Listen for \"garbage collecting\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈgɑrbɪʤ kəˈlɛktɪŋ/"
},
{
"w": "special diet",
"m": "特定饮食",
"x": "Listen for \"special diet\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈspɛʃəl daɪət/"
},
{
"w": "special food requirement",
"m": "特殊的食物要求",
"x": "Listen for \"special food requirement\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈspɛʃəl fud rɪkˈwaɪrmənt/"
},
{
"w": "no red meat",
"m": "不吃红肉（猪、牛、羊肉）",
"x": "Listen for \"no red meat\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ rɛd mit/"
},
{
"w": "no white meat",
"m": "不吃白肉（鸡、鸭、鱼肉）",
"x": "Listen for \"no white meat\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ waɪt mit/"
},
{
"w": "cash",
"m": "（付）现金",
"x": "Listen for \"cash\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/kæʃ/"
},
{
"w": "check/cheque",
"m": "支票",
"x": "Listen for \"check/cheque\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "credit card",
"m": "信用卡",
"x": "Listen for \"credit card\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈkrɛdɪt kɑrd/"
},
{
"w": "low-interest loan",
"m": "低息贷款",
"x": "Listen for \"low-interest loan\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation"
},
{
"w": "pay by month",
"m": "按月支付",
"x": "Listen for \"pay by month\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/peɪ baɪ mənθ/"
},
{
"w": "money order",
"m": "汇票",
"x": "Listen for \"money order\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈməni ˈɔrdər/"
},
{
"w": "leaking",
"m": "漏了",
"x": "Listen for \"leaking\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈlikɪŋ/"
},
{
"w": "broken",
"m": "破了，坏了",
"x": "Listen for \"broken\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈbroʊkən/"
},
{
"w": "temporarily down",
"m": "暂时坏了",
"x": "Listen for \"temporarily down\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˌtɛmpərˈɛrəli daʊn/"
},
{
"w": "out of order",
"m": "失灵，出故障",
"x": "Listen for \"out of order\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/aʊt əv ˈɔrdər/"
},
{
"w": "no locks",
"m": "没有锁",
"x": "Listen for \"no locks\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/noʊ lɑks/"
},
{
"w": "flicker",
"m": "闪烁，让人眼花",
"x": "Listen for \"flicker\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈflɪkər/"
},
{
"w": "torn",
"m": "撕坏了",
"x": "Listen for \"torn\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/tɔrn/"
},
{
"w": "home insurance",
"m": "家庭保险",
"x": "Listen for \"home insurance\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/hoʊm ˌɪnˈʃʊrəns/"
},
{
"w": "property insurance",
"m": "财产保险",
"x": "Listen for \"property insurance\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/ˈprɑpərti ˌɪnˈʃʊrəns/"
},
{
"w": "theft",
"m": "盗窃",
"x": "Listen for \"theft\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/θɛft/"
},
{
"w": "break in",
"m": "破门而入",
"x": "Listen for \"break in\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/breɪk ɪn/"
},
{
"w": "rob",
"m": "抢劫",
"x": "Listen for \"rob\" in this scene.",
"c": "雅思听力场景词汇: 租房 Accommodation",
"ipa": "/rɑb/"
},
{
"w": "package tour",
"m": "跟旅行团旅游",
"x": "Listen for \"package tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈpækɪʤ tʊr/"
},
{
"w": "guided tour",
"m": "有导游带领的旅游",
"x": "Listen for \"guided tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈgaɪdɪd tʊr/"
},
{
"w": "four-wheel-drive tour",
"m": "驾车旅游",
"x": "Listen for \"four-wheel-drive tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "excursion",
"m": "远足，短途旅行",
"x": "Listen for \"excursion\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ɪkˈskərʒən/"
},
{
"w": "hitch-hike",
"m": "搭便车",
"x": "Listen for \"hitch-hike\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "hiking",
"m": "远足，徒步旅行",
"x": "Listen for \"hiking\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈhaɪkɪŋ/"
},
{
"w": "bag-packer",
"m": "背包客",
"x": "Listen for \"bag-packer\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "outing",
"m": "郊游，户外旅行",
"x": "Listen for \"outing\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈaʊtɪŋ/"
},
{
"w": "voyage",
"m": "远行，远航",
"x": "Listen for \"voyage\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/vɔɪəʤ/"
},
{
"w": "trip",
"m": "短途旅行",
"x": "Listen for \"trip\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/trɪp/"
},
{
"w": "tour",
"m": "旅行，观光",
"x": "Listen for \"tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/tʊr/"
},
{
"w": "observation tour",
"m": "观光旅行",
"x": "Listen for \"observation tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌɑbzərˈveɪʃən tʊr/"
},
{
"w": "charity tour",
"m": "慈善募捐游",
"x": "Listen for \"charity tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈʧɛrɪti tʊr/"
},
{
"w": "bush walk",
"m": "丛林漫步",
"x": "Listen for \"bush walk\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/bʊʃ wɔk/"
},
{
"w": "beach walk",
"m": "海滩徒步旅行",
"x": "Listen for \"beach walk\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/biʧ wɔk/"
},
{
"w": "rock climbing",
"m": "攀岩",
"x": "Listen for \"rock climbing\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rɑk ˈklaɪmɪŋ/"
},
{
"w": "bridge walk",
"m": "桥上徒步旅行",
"x": "Listen for \"bridge walk\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/brɪʤ wɔk/"
},
{
"w": "bridge climbing",
"m": "攀桥",
"x": "Listen for \"bridge climbing\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/brɪʤ ˈklaɪmɪŋ/"
},
{
"w": "make a reservation",
"m": "预订",
"x": "Listen for \"make a reservation\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/meɪk ə ˌrɛzərˈveɪʃən/"
},
{
"w": "book",
"m": "预订",
"x": "Listen for \"book\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/bʊk/"
},
{
"w": "order",
"m": "订购，订货",
"x": "Listen for \"order\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈɔrdər/"
},
{
"w": "enrol",
"m": "报名参加",
"x": "Listen for \"enrol\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "book the ticket",
"m": "订票",
"x": "Listen for \"book the ticket\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/bʊk ðə ˈtɪkɪt/"
},
{
"w": "enlist",
"m": "报名参加",
"x": "Listen for \"enlist\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌɛnˈlɪst/"
},
{
"w": "joining fee",
"m": "报名费",
"x": "Listen for \"joining fee\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈʤɔɪnɪŋ fi/"
},
{
"w": "sign one's name",
"m": "签名",
"x": "Listen for \"sign one's name\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/saɪn wənz neɪm/"
},
{
"w": "full refund",
"m": "全额退款",
"x": "Listen for \"full refund\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/fʊl ˈriˌfənd/"
},
{
"w": "partially refund",
"m": "部分退款",
"x": "Listen for \"partially refund\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈpɑrʃəli ˈriˌfənd/"
},
{
"w": "length of trip",
"m": "行程",
"x": "Listen for \"length of trip\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/lɛŋθ əv trɪp/"
},
{
"w": "go out for brunch",
"m": "去吃早午餐",
"x": "Listen for \"go out for brunch\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/goʊ aʊt fər brənʧ/"
},
{
"w": "eat out",
"m": "出去吃",
"x": "Listen for \"eat out\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/it aʊt/"
},
{
"w": "dine out",
"m": "出去吃",
"x": "Listen for \"dine out\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/daɪn aʊt/"
},
{
"w": "bite out",
"m": "出去吃",
"x": "Listen for \"bite out\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/baɪt aʊt/"
},
{
"w": "explorer's trip",
"m": "探险游",
"x": "Listen for \"explorer's trip\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "go camping",
"m": "露营，宿营",
"x": "Listen for \"go camping\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/goʊ ˈkæmpɪŋ/"
},
{
"w": "spotlight tour",
"m": "使用聚光灯在夜间出行",
"x": "Listen for \"spotlight tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈspɑˌtlaɪt tʊr/"
},
{
"w": "horse riding",
"m": "骑马",
"x": "Listen for \"horse riding\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/hɔrs ˈraɪdɪŋ/"
},
{
"w": "cycling",
"m": "骑自行车游",
"x": "Listen for \"cycling\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsaɪkəlɪŋ/"
},
{
"w": "river boating",
"m": "在河里划船",
"x": "Listen for \"river boating\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈrɪvər ˈboʊtɪŋ/"
},
{
"w": "boating",
"m": "划船",
"x": "Listen for \"boating\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈboʊtɪŋ/"
},
{
"w": "scuba diving",
"m": "戴水肺潜水",
"x": "Listen for \"scuba diving\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈskubə ˈdaɪvɪŋ/"
},
{
"w": "waterfall",
"m": "瀑布",
"x": "Listen for \"waterfall\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈwɔtərˌfɔl/"
},
{
"w": "picnic",
"m": "去野餐",
"x": "Listen for \"picnic\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈpɪkˌnɪk/"
},
{
"w": "spectacular view",
"m": "壮观的美景",
"x": "Listen for \"spectacular view\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/spɛkˈtækjələr vju/"
},
{
"w": "rainforest lodge",
"m": "雨林小屋",
"x": "Listen for \"rainforest lodge\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈraɪnˌfɔrəst lɑʤ/"
},
{
"w": "surfing",
"m": "冲浪",
"x": "Listen for \"surfing\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsərfɪŋ/"
},
{
"w": "skiing",
"m": "滑雪",
"x": "Listen for \"skiing\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/skiɪŋ/"
},
{
"w": "skating",
"m": "滑冰",
"x": "Listen for \"skating\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈskeɪtɪŋ/"
},
{
"w": "cook service",
"m": "烹饪服务",
"x": "Listen for \"cook service\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/kʊk ˈsərvɪs/"
},
{
"w": "feed animals",
"m": "给动物喂食",
"x": "Listen for \"feed animals\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/fid ˈænəməlz/"
},
{
"w": "survival course",
"m": "生存训练",
"x": "Listen for \"survival course\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/sərˈvaɪvəl kɔrs/"
},
{
"w": "mountain climbing",
"m": "爬山",
"x": "Listen for \"mountain climbing\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈmaʊntən ˈklaɪmɪŋ/"
},
{
"w": "cliff walk",
"m": "攀悬崖运动",
"x": "Listen for \"cliff walk\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/klɪf wɔk/"
},
{
"w": "mountain walk",
"m": "山间行走",
"x": "Listen for \"mountain walk\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈmaʊntən wɔk/"
},
{
"w": "high street walk",
"m": "逛街",
"x": "Listen for \"high street walk\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/haɪ strit wɔk/"
},
{
"w": "hunting",
"m": "打猎",
"x": "Listen for \"hunting\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈhəntɪŋ/"
},
{
"w": "bird-watching",
"m": "观鸟",
"x": "Listen for \"bird-watching\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "bungee jumping",
"m": "蹦极跳",
"x": "Listen for \"bungee jumping\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈbənʤi ˈʤəmpɪŋ/"
},
{
"w": "crocodile cruise",
"m": "（乘船）观赏鳄鱼",
"x": "Listen for \"crocodile cruise\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈkrɑkəˌdaɪl kruz/"
},
{
"w": "rare-animal area",
"m": "稀有动物区",
"x": "Listen for \"rare-animal area\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "watch the swans",
"m": "观赏天鹅",
"x": "Listen for \"watch the swans\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/wɔʧ ðə swɔnz/"
},
{
"w": "go fishing",
"m": "去钓鱼",
"x": "Listen for \"go fishing\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/goʊ ˈfɪʃɪŋ/"
},
{
"w": "pastime",
"m": "业余消遣",
"x": "Listen for \"pastime\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈpæˌstaɪm/"
},
{
"w": "guide",
"m": "导游",
"x": "Listen for \"guide\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/gaɪd/"
},
{
"w": "local guide",
"m": "地陪，地方导游",
"x": "Listen for \"local guide\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈloʊkəl gaɪd/"
},
{
"w": "lecturer",
"m": "讲话者，讲师",
"x": "Listen for \"lecturer\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈlɛkʧərər/"
},
{
"w": "agent",
"m": "代理商",
"x": "Listen for \"agent\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈeɪʤənt/"
},
{
"w": "entertainment officer",
"m": "娱乐负责人",
"x": "Listen for \"entertainment officer\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌɛnərˈteɪnmənt ˈɔfɪsər/"
},
{
"w": "recreation officer",
"m": "娱乐负责人",
"x": "Listen for \"recreation officer\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌrɛkriˈeɪʃən ˈɔfɪsər/"
},
{
"w": "brochure",
"m": "宣传册",
"x": "Listen for \"brochure\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/broʊˈʃʊr/"
},
{
"w": "booklet",
"m": "小册子",
"x": "Listen for \"booklet\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈbʊklɪt/"
},
{
"w": "guidebook",
"m": "旅行指南",
"x": "Listen for \"guidebook\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈgaɪdˌbʊk/"
},
{
"w": "hand-out",
"m": "发放的资料",
"x": "Listen for \"hand-out\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "give-out",
"m": "发放的资料",
"x": "Listen for \"give-out\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "outline",
"m": "概况",
"x": "Listen for \"outline\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈaʊˌtlaɪn/"
},
{
"w": "brief account",
"m": "简要介绍",
"x": "Listen for \"brief account\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/brif əˈkaʊnt/"
},
{
"w": "leaflet",
"m": "传单",
"x": "Listen for \"leaflet\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈliflət/"
},
{
"w": "clipping",
"m": "剪报",
"x": "Listen for \"clipping\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈklɪpɪŋ/"
},
{
"w": "bus system map",
"m": "公交线路图",
"x": "Listen for \"bus system map\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/bəs ˈsɪstəm mæp/"
},
{
"w": "rear entrance",
"m": "后门",
"x": "Listen for \"rear entrance\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rɪr ˈɛntrəns/"
},
{
"w": "readmitted",
"m": "准予再进入",
"x": "Listen for \"readmitted\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌriədˈmɪtɪd/"
},
{
"w": "school bus",
"m": "校车",
"x": "Listen for \"school bus\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/skul bəs/"
},
{
"w": "large coach",
"m": "大巴士",
"x": "Listen for \"large coach\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/lɑrʤ koʊʧ/"
},
{
"w": "minibus",
"m": "小巴",
"x": "Listen for \"minibus\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈmɪniˌbəs/"
},
{
"w": "single-rail",
"m": "单轨",
"x": "Listen for \"single-rail\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "single-track",
"m": "单轨",
"x": "Listen for \"single-track\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "subway station",
"m": "地铁站",
"x": "Listen for \"subway station\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsəbˌweɪ ˈsteɪʃən/"
},
{
"w": "glass-bottomed boat",
"m": "玻璃底板船",
"x": "Listen for \"glass-bottomed boat\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "travel agency",
"m": "旅行社",
"x": "Listen for \"travel agency\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈtrævəl ˈeɪʤənsi/"
},
{
"w": "flight number",
"m": "航班号",
"x": "Listen for \"flight number\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/flaɪt ˈnəmbər/"
},
{
"w": "driving license",
"m": "驾照",
"x": "Listen for \"driving license\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈdraɪvɪŋ ˈlaɪsəns/"
},
{
"w": "walking boots",
"m": "步行靴",
"x": "Listen for \"walking boots\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈwɔkɪŋ buts/"
},
{
"w": "souvenir",
"m": "纪念品",
"x": "Listen for \"souvenir\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌsuvəˈnɪr/"
},
{
"w": "art gallery",
"m": "画廊",
"x": "Listen for \"art gallery\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ɑrt ˈgæləri/"
},
{
"w": "scenery",
"m": "风景",
"x": "Listen for \"scenery\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsinəri/"
},
{
"w": "scenic spot",
"m": "风景区",
"x": "Listen for \"scenic spot\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsinɪk spɑt/"
},
{
"w": "scenic resort",
"m": "旅游胜地，风景名胜",
"x": "Listen for \"scenic resort\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsinɪk rɪˈzɔrt/"
},
{
"w": "retreat",
"m": "疗养地",
"x": "Listen for \"retreat\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/riˈtrit/"
},
{
"w": "place of interest",
"m": "名胜",
"x": "Listen for \"place of interest\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/pleɪs əv ˈɪntəˌrɛst/"
},
{
"w": "relic",
"m": "遗迹",
"x": "Listen for \"relic\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈrɛlɪk/"
},
{
"w": "historical places",
"m": "历史古迹",
"x": "Listen for \"historical places\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/hɪˈstɔrɪkəl ˈpleɪsɪz/"
},
{
"w": "gift shop",
"m": "礼品店",
"x": "Listen for \"gift shop\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/gɪft ʃɑp/"
},
{
"w": "reproduction",
"m": "复制品",
"x": "Listen for \"reproduction\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌriprəˈdəkʃən/"
},
{
"w": "opal",
"m": "澳宝（即蛋白石或猫眼石）",
"x": "Listen for \"opal\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈoʊpəl/"
},
{
"w": "white sand",
"m": "白沙滩",
"x": "Listen for \"white sand\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/waɪt sænd/"
},
{
"w": "diving",
"m": "潜水",
"x": "Listen for \"diving\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈdaɪvɪŋ/"
},
{
"w": "reef",
"m": "礁，暗礁",
"x": "Listen for \"reef\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rif/"
},
{
"w": "coral",
"m": "珊瑚（虫）",
"x": "Listen for \"coral\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈkɔrəl/"
},
{
"w": "wild-life zoo",
"m": "野生动物园",
"x": "Listen for \"wild-life zoo\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "reptile park",
"m": "爬行动物公园",
"x": "Listen for \"reptile park\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈrɛptaɪl pɑrk/"
},
{
"w": "on the bend of the river",
"m": "在河道转弯处",
"x": "Listen for \"on the bend of the river\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ɔn ðə bɛnd əv ðə ˈrɪvər/"
},
{
"w": "the Sydney Tower",
"m": "悉尼塔",
"x": "Listen for \"the Sydney Tower\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ðə ˈsɪdni taʊər/"
},
{
"w": "cathedral",
"m": "大教堂",
"x": "Listen for \"cathedral\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/kəˈθidrəl/"
},
{
"w": "castle",
"m": "城堡",
"x": "Listen for \"castle\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈkæsəl/"
},
{
"w": "gallery",
"m": "画廊",
"x": "Listen for \"gallery\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈgæləri/"
},
{
"w": "flower shop",
"m": "花店",
"x": "Listen for \"flower shop\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/flaʊər ʃɑp/"
},
{
"w": "convenient shop",
"m": "便利店",
"x": "Listen for \"convenient shop\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/kənˈvinjənt ʃɑp/"
},
{
"w": "resort town",
"m": "旅游城镇",
"x": "Listen for \"resort town\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rɪˈzɔrt taʊn/"
},
{
"w": "admire the sunset",
"m": "欣赏日落",
"x": "Listen for \"admire the sunset\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ædˈmaɪr ðə ˈsənˌsɛt/"
},
{
"w": "sculpture",
"m": "雕塑",
"x": "Listen for \"sculpture\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈskəlpʧər/"
},
{
"w": "underwater life",
"m": "水生动物",
"x": "Listen for \"underwater life\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈəndərˌwɔtər laɪf/"
},
{
"w": "reptile animal",
"m": "爬行动物",
"x": "Listen for \"reptile animal\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈrɛptaɪl ˈænəməl/"
},
{
"w": "domestic animal",
"m": "家畜",
"x": "Listen for \"domestic animal\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/dəˈmɛstɪk ˈænəməl/"
},
{
"w": "sea creature",
"m": "海洋生物",
"x": "Listen for \"sea creature\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/si ˈkriʧər/"
},
{
"w": "full-licensed restaurant",
"m": "执照齐备的餐厅",
"x": "Listen for \"full-licensed restaurant\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "high-street shop",
"m": "百货公司门店，专卖店",
"x": "Listen for \"high-street shop\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "bar",
"m": "酒吧",
"x": "Listen for \"bar\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/bɑr/"
},
{
"w": "fish and chips",
"m": "鱼和薯条",
"x": "Listen for \"fish and chips\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/fɪʃ ənd ʧɪps/"
},
{
"w": "coastal restaurant",
"m": "海边餐厅",
"x": "Listen for \"coastal restaurant\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈkoʊstəl ˈrɛˌstrɑnt/"
},
{
"w": "sushi",
"m": "寿司",
"x": "Listen for \"sushi\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsuʃi/"
},
{
"w": "service desk",
"m": "服务台",
"x": "Listen for \"service desk\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsərvɪs dɛsk/"
},
{
"w": "grocery store",
"m": "杂货店",
"x": "Listen for \"grocery store\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈgroʊsəri stɔr/"
},
{
"w": "cashier",
"m": "〈英〉出纳员",
"x": "Listen for \"cashier\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/kæˈʃɪr/"
},
{
"w": "teller",
"m": "〈美〉出纳员",
"x": "Listen for \"teller\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈtɛlər/"
},
{
"w": "free parking lot",
"m": "免费停车场",
"x": "Listen for \"free parking lot\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/fri ˈpɑrkɪŋ lɔt/"
},
{
"w": "entrance",
"m": "入口",
"x": "Listen for \"entrance\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈɛntrəns/"
},
{
"w": "rear door",
"m": "后门",
"x": "Listen for \"rear door\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rɪr dɔr/"
},
{
"w": "side door",
"m": "侧门",
"x": "Listen for \"side door\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/saɪd dɔr/"
},
{
"w": "entrance gate",
"m": "入口大门",
"x": "Listen for \"entrance gate\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈɛntrəns geɪt/"
},
{
"w": "central area",
"m": "中央区",
"x": "Listen for \"central area\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsɛntrəl ˈɛriə/"
},
{
"w": "single trip",
"m": "单程",
"x": "Listen for \"single trip\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsɪŋgəl trɪp/"
},
{
"w": "round trip",
"m": "双程，往返旅行",
"x": "Listen for \"round trip\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/raʊnd trɪp/"
},
{
"w": "return trip",
"m": "回程，返程",
"x": "Listen for \"return trip\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rɪˈtərn trɪp/"
},
{
"w": "standard class",
"m": "标准舱",
"x": "Listen for \"standard class\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈstændərd klæs/"
},
{
"w": "cycling route",
"m": "自行车路线",
"x": "Listen for \"cycling route\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsaɪkəlɪŋ rut/"
},
{
"w": "detour",
"m": "绕道",
"x": "Listen for \"detour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈditʊr/"
},
{
"w": "route",
"m": "路线",
"x": "Listen for \"route\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rut/"
},
{
"w": "union card",
"m": "会员卡",
"x": "Listen for \"union card\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈjunjən kɑrd/"
},
{
"w": "passport photo",
"m": "护照照片",
"x": "Listen for \"passport photo\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈpæˌspɔrt ˈfoʊˌtoʊ/"
},
{
"w": "sign in advance",
"m": "提早报名",
"x": "Listen for \"sign in advance\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/saɪn ɪn ədˈvæns/"
},
{
"w": "expense",
"m": "费用",
"x": "Listen for \"expense\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ɪkˈspɛns/"
},
{
"w": "confirmation letter",
"m": "确认信",
"x": "Listen for \"confirmation letter\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌkɑnfərˈmeɪʃən ˈlɛtər/"
},
{
"w": "notice board",
"m": "宣传栏",
"x": "Listen for \"notice board\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈnoʊtɪs bɔrd/"
},
{
"w": "newsletter",
"m": "宣传信件，（电子）简报",
"x": "Listen for \"newsletter\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈnuzˌlɛtər/"
},
{
"w": "bulletin board",
"m": "公告栏",
"x": "Listen for \"bulletin board\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈbʊlɪtən bɔrd/"
},
{
"w": "weekday",
"m": "工作日",
"x": "Listen for \"weekday\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈwikˌdeɪ/"
},
{
"w": "workday",
"m": "工作日",
"x": "Listen for \"workday\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈwərkˌdeɪ/"
},
{
"w": "morning and afternoon",
"m": "全天",
"x": "Listen for \"morning and afternoon\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈmɔrnɪŋ ənd ˌæftərˈnun/"
},
{
"w": "morning to midnoon",
"m": "上午半天",
"x": "Listen for \"morning to midnoon\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "only afternoon",
"m": "下午半天",
"x": "Listen for \"only afternoon\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈoʊnli ˌæftərˈnun/"
},
{
"w": "open every day except Monday",
"m": "除周一都开放",
"x": "Listen for \"open every day except Monday\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈoʊpən ˈɛvəri deɪ ɪkˈsɛpt ˈmənˌdeɪ/"
},
{
"w": "underused facilities",
"m": "利用率低的设施",
"x": "Listen for \"underused facilities\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌəndərˈjuzd fəˈsɪlɪtiz/"
},
{
"w": "morning discount",
"m": "早间折扣",
"x": "Listen for \"morning discount\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈmɔrnɪŋ ˈdɪskaʊnt/"
},
{
"w": "not use at the same time",
"m": "不能同时使用",
"x": "Listen for \"not use at the same time\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/nɑt juz æt ðə seɪm taɪm/"
},
{
"w": "racing bicycle",
"m": "赛车",
"x": "Listen for \"racing bicycle\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈreɪsɪŋ ˈbaɪsɪkəl/"
},
{
"w": "touring bicycle",
"m": "观光脚踏车",
"x": "Listen for \"touring bicycle\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈtʊrɪŋ ˈbaɪsɪkəl/"
},
{
"w": "mountain bicycle",
"m": "山地车",
"x": "Listen for \"mountain bicycle\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈmaʊntən ˈbaɪsɪkəl/"
},
{
"w": "ordinary bicycle",
"m": "普通自行车",
"x": "Listen for \"ordinary bicycle\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈɔrdəˌnɛri ˈbaɪsɪkəl/"
},
{
"w": "single-speed bicycle",
"m": "单速车",
"x": "Listen for \"single-speed bicycle\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "frame",
"m": "车架",
"x": "Listen for \"frame\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/freɪm/"
},
{
"w": "size of wheels",
"m": "轮子尺寸",
"x": "Listen for \"size of wheels\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/saɪz əv wilz/"
},
{
"w": "casual tour",
"m": "休闲旅行",
"x": "Listen for \"casual tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈkæʒəwəl tʊr/"
},
{
"w": "hill tour",
"m": "登山旅行",
"x": "Listen for \"hill tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/hɪl tʊr/"
},
{
"w": "green arrows",
"m": "绿色箭头",
"x": "Listen for \"green arrows\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/grin ˈɛroʊz/"
},
{
"w": "signpost",
"m": "路标",
"x": "Listen for \"signpost\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsaɪnˌpoʊst/"
},
{
"w": "landmark",
"m": "地标",
"x": "Listen for \"landmark\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈlændˌmɑrk/"
},
{
"w": "marked with signs",
"m": "用标志标记",
"x": "Listen for \"marked with signs\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/mɑrkt wɪθ saɪnz/"
},
{
"w": "wheel chair",
"m": "轮椅",
"x": "Listen for \"wheel chair\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/wil ʧɛr/"
},
{
"w": "access",
"m": "通道",
"x": "Listen for \"access\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈækˌsɛs/"
},
{
"w": "cross road",
"m": "十字路口",
"x": "Listen for \"cross road\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/krɔs roʊd/"
},
{
"w": "tunnel",
"m": "隧道",
"x": "Listen for \"tunnel\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈtənəl/"
},
{
"w": "education centre",
"m": "教育中心",
"x": "Listen for \"education centre\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌɛʤəˈkeɪʃən ˈsɛntər/"
},
{
"w": "administration building",
"m": "行政大楼",
"x": "Listen for \"administration building\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ædˌmɪnɪˈstreɪʃən ˈbɪldɪŋ/"
},
{
"w": "wing building",
"m": "翼楼",
"x": "Listen for \"wing building\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/wɪŋ ˈbɪldɪŋ/"
},
{
"w": "annex",
"m": "附属建筑",
"x": "Listen for \"annex\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈæˌnɛks/"
},
{
"w": "reception area",
"m": "接待处",
"x": "Listen for \"reception area\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rɪˈsɛpʃən ˈɛriə/"
},
{
"w": "teaching building",
"m": "教学楼",
"x": "Listen for \"teaching building\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈtiʧɪŋ ˈbɪldɪŋ/"
},
{
"w": "office building",
"m": "办公楼",
"x": "Listen for \"office building\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈɔfəs ˈbɪldɪŋ/"
},
{
"w": "population",
"m": "人口",
"x": "Listen for \"population\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌpɑpjəˈleɪʃən/"
},
{
"w": "main industry",
"m": "主要工业",
"x": "Listen for \"main industry\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/meɪn ˈɪndəstri/"
},
{
"w": "climate",
"m": "气候",
"x": "Listen for \"climate\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈklaɪmɪt/"
},
{
"w": "wet",
"m": "潮湿的",
"x": "Listen for \"wet\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/wɛt/"
},
{
"w": "humid",
"m": "湿润的",
"x": "Listen for \"humid\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈjumɪd/"
},
{
"w": "cool",
"m": "凉爽的",
"x": "Listen for \"cool\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/kul/"
},
{
"w": "warm",
"m": "温暖的",
"x": "Listen for \"warm\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/wɔrm/"
},
{
"w": "dry",
"m": "干燥的",
"x": "Listen for \"dry\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/draɪ/"
},
{
"w": "rainy",
"m": "多雨的",
"x": "Listen for \"rainy\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈreɪni/"
},
{
"w": "sunny",
"m": "阳光明媚的",
"x": "Listen for \"sunny\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsəni/"
},
{
"w": "cloudy",
"m": "多云的",
"x": "Listen for \"cloudy\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈklaʊdi/"
},
{
"w": "main attraction",
"m": "主要景点",
"x": "Listen for \"main attraction\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/meɪn əˈtrækʃən/"
},
{
"w": "raw material",
"m": "原材料",
"x": "Listen for \"raw material\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rɑ məˈtɪriəl/"
},
{
"w": "metal industry",
"m": "金属工业",
"x": "Listen for \"metal industry\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈmɛtəl ˈɪndəstri/"
},
{
"w": "manufacture",
"m": "生产，制造",
"x": "Listen for \"manufacture\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌmænjəˈfækʧər/"
},
{
"w": "local craftsman",
"m": "当地工匠",
"x": "Listen for \"local craftsman\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈloʊkəl ˈkræftsmən/"
},
{
"w": "tent",
"m": "帐篷",
"x": "Listen for \"tent\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/tɛnt/"
},
{
"w": "sleeping bag",
"m": "睡袋",
"x": "Listen for \"sleeping bag\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/sˈlipɪŋ bæg/"
},
{
"w": "portable tent",
"m": "便携式帐篷",
"x": "Listen for \"portable tent\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈpɔrtəbəl tɛnt/"
},
{
"w": "hiking boots",
"m": "徒步靴",
"x": "Listen for \"hiking boots\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈhaɪkɪŋ buts/"
},
{
"w": "boots and socks",
"m": "靴子和袜子",
"x": "Listen for \"boots and socks\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/buts ənd sɑks/"
},
{
"w": "riding helmet",
"m": "自行车头盔",
"x": "Listen for \"riding helmet\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈraɪdɪŋ ˈhɛlmət/"
},
{
"w": "repair kit",
"m": "修理工具箱",
"x": "Listen for \"repair kit\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/rɪˈpɛr kɪt/"
},
{
"w": "first-aid kit",
"m": "急救箱",
"x": "Listen for \"first-aid kit\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "glove",
"m": "手套",
"x": "Listen for \"glove\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/gləv/"
},
{
"w": "tape measure",
"m": "卷尺",
"x": "Listen for \"tape measure\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/teɪp ˈmɛʒər/"
},
{
"w": "string",
"m": "绳子",
"x": "Listen for \"string\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/strɪŋ/"
},
{
"w": "cycle",
"m": "自行车",
"x": "Listen for \"cycle\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈsaɪkəl/"
},
{
"w": "coast",
"m": "海边",
"x": "Listen for \"coast\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/koʊst/"
},
{
"w": "rainforest",
"m": "雨林",
"x": "Listen for \"rainforest\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈraɪnˌfɔrəst/"
},
{
"w": "forest area",
"m": "森林地带",
"x": "Listen for \"forest area\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈfɔrɪst ˈɛriə/"
},
{
"w": "marine life",
"m": "海洋生物",
"x": "Listen for \"marine life\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/mərˈin laɪf/"
},
{
"w": "view the reef",
"m": "观看珊瑚礁",
"x": "Listen for \"view the reef\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/vju ðə rif/"
},
{
"w": "soak up the sun",
"m": "日光浴",
"x": "Listen for \"soak up the sun\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/soʊk əp ðə sən/"
},
{
"w": "play chess",
"m": "下国际象棋",
"x": "Listen for \"play chess\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/pleɪ ʧɛs/"
},
{
"w": "farming accommodation",
"m": "农场住宿",
"x": "Listen for \"farming accommodation\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈfɑrmɪŋ əˌkɑməˈdeɪʃən/"
},
{
"w": "sleep outdoors",
"m": "睡在户外",
"x": "Listen for \"sleep outdoors\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/slip ˈaʊtˈdɔrz/"
},
{
"w": "insect",
"m": "昆虫",
"x": "Listen for \"insect\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈɪnˌsɛkt/"
},
{
"w": "share room",
"m": "共用房间",
"x": "Listen for \"share room\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ʃɛr rum/"
},
{
"w": "share kitchen",
"m": "共用厨房",
"x": "Listen for \"share kitchen\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ʃɛr ˈkɪʧən/"
},
{
"w": "snorer",
"m": "打呼噜的人",
"x": "Listen for \"snorer\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/sˈnɔrər/"
},
{
"w": "stinger",
"m": "（蚊虫等的）叮咬",
"x": "Listen for \"stinger\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈstɪŋər/"
},
{
"w": "jellyfish",
"m": "水母",
"x": "Listen for \"jellyfish\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈʤɛliˌfɪʃ/"
},
{
"w": "sting",
"m": "叮",
"x": "Listen for \"sting\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/stɪŋ/"
},
{
"w": "slippery",
"m": "打滑的",
"x": "Listen for \"slippery\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/sˈlɪpəri/"
},
{
"w": "common sense",
"m": "常识",
"x": "Listen for \"common sense\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈkɑmən sɛns/"
},
{
"w": "non-open time",
"m": "非开放时间",
"x": "Listen for \"non-open time\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "stay through",
"m": "住，小住",
"x": "Listen for \"stay through\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/steɪ θru/"
},
{
"w": "accommodation directory",
"m": "住宿地点名录",
"x": "Listen for \"accommodation directory\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/əˌkɑməˈdeɪʃən dɪˈrɛktəri/"
},
{
"w": "caravan site",
"m": "旅行车停泊处",
"x": "Listen for \"caravan site\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈkɛrəˌvæn saɪt/"
},
{
"w": "in the wood",
"m": "在丛林中",
"x": "Listen for \"in the wood\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ɪn ðə wʊd/"
},
{
"w": "tropical forest",
"m": "热带森林",
"x": "Listen for \"tropical forest\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈtrɑpɪkəl ˈfɔrɪst/"
},
{
"w": "cash the check",
"m": "兑现支票",
"x": "Listen for \"cash the check\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/kæʃ ðə ʧɛk/"
},
{
"w": "higher rate",
"m": "更高的（兑换）比率",
"x": "Listen for \"higher rate\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/haɪər reɪt/"
},
{
"w": "withdraw money",
"m": "取钱",
"x": "Listen for \"withdraw money\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/wɪθˈdrɔ ˈməni/"
},
{
"w": "balance",
"m": "余额",
"x": "Listen for \"balance\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈbæləns/"
},
{
"w": "lion",
"m": "狮子",
"x": "Listen for \"lion\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/laɪən/"
},
{
"w": "fish",
"m": "鱼类",
"x": "Listen for \"fish\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/fɪʃ/"
},
{
"w": "parrot",
"m": "鹦鹉",
"x": "Listen for \"parrot\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈpɛrət/"
},
{
"w": "crocodile",
"m": "鳄鱼",
"x": "Listen for \"crocodile\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈkrɑkəˌdaɪl/"
},
{
"w": "snake",
"m": "蛇",
"x": "Listen for \"snake\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/sneɪk/"
},
{
"w": "falcon",
"m": "猎鹰",
"x": "Listen for \"falcon\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈfælkən/"
},
{
"w": "kangaroo",
"m": "袋鼠",
"x": "Listen for \"kangaroo\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˌkæŋgərˈu/"
},
{
"w": "ostrich",
"m": "鸵鸟",
"x": "Listen for \"ostrich\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈɔstrɪʧ/"
},
{
"w": "wolf",
"m": "狼",
"x": "Listen for \"wolf\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/wʊlf/"
},
{
"w": "tiger",
"m": "虎",
"x": "Listen for \"tiger\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈtaɪgər/"
},
{
"w": "alarm system",
"m": "报警系统",
"x": "Listen for \"alarm system\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/əˈlɑrm ˈsɪstəm/"
},
{
"w": "buzzer",
"m": "蜂鸣器",
"x": "Listen for \"buzzer\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈbəzər/"
},
{
"w": "commence the tour",
"m": "开始旅行",
"x": "Listen for \"commence the tour\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/kəˈmɛns ðə tʊr/"
},
{
"w": "admittance",
"m": "允许进入",
"x": "Listen for \"admittance\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ədˈmɪtəns/"
},
{
"w": "dependent on distance",
"m": "依距离而定的",
"x": "Listen for \"dependent on distance\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/dɪˈpɛndənt ɔn ˈdɪstəns/"
},
{
"w": "special trip",
"m": "特色旅游",
"x": "Listen for \"special trip\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈspɛʃəl trɪp/"
},
{
"w": "sign up",
"m": "签名，报名",
"x": "Listen for \"sign up\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/saɪn əp/"
},
{
"w": "with full refund",
"m": "全额退款",
"x": "Listen for \"with full refund\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/wɪθ fʊl ˈriˌfənd/"
},
{
"w": "schedule",
"m": "日程安排",
"x": "Listen for \"schedule\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈskɛʤʊl/"
},
{
"w": "optional extra",
"m": "额外选择",
"x": "Listen for \"optional extra\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈɔpʃənəl ˈɛkstrə/"
},
{
"w": "student newspaper",
"m": "学生报，校刊",
"x": "Listen for \"student newspaper\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈstudənt ˈnuzˌpeɪpər/"
},
{
"w": "give a brief account of",
"m": "简单介绍",
"x": "Listen for \"give a brief account of\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/gɪv ə brif əˈkaʊnt əv/"
},
{
"w": "roam",
"m": "漫步，散步",
"x": "Listen for \"roam\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/roʊm/"
},
{
"w": "wander",
"m": "闲逛，溜达",
"x": "Listen for \"wander\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈwɑndər/"
},
{
"w": "fast flowing water",
"m": "快速流动的水",
"x": "Listen for \"fast flowing water\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/fæst floʊɪŋ ˈwɔtər/"
},
{
"w": "mineral",
"m": "矿物质",
"x": "Listen for \"mineral\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ˈmɪnərəl/"
},
{
"w": "the abundance of",
"m": "充足，大量",
"x": "Listen for \"the abundance of\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure",
"ipa": "/ðə əˈbəndəns əv/"
},
{
"w": "entry gate/entrance",
"m": "入口，门口",
"x": "Listen for \"entry gate/entrance\" in this scene.",
"c": "雅思听力场景词汇: 旅游 Travel & leisure"
},
{
"w": "balanced diet",
"m": "均衡的饮食",
"x": "Listen for \"balanced diet\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈbælənst daɪət/"
},
{
"w": "right food",
"m": "合理的食物",
"x": "Listen for \"right food\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/raɪt fud/"
},
{
"w": "sensible eating",
"m": "合理的饮食",
"x": "Listen for \"sensible eating\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈsɛnsəbəl ˈitɪŋ/"
},
{
"w": "regular intake",
"m": "规律的摄入量",
"x": "Listen for \"regular intake\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈrɛgjələr ˈɪnˌteɪk/"
},
{
"w": "eat moderate portions",
"m": "适量地吃",
"x": "Listen for \"eat moderate portions\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/it ˈmɑdərˌeɪt ˈpɔrʃənz/"
},
{
"w": "eat in moderation",
"m": "适量地吃",
"x": "Listen for \"eat in moderation\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/it ɪn ˌmɑdərˈeɪʃən/"
},
{
"w": "supplement",
"m": "补充品",
"x": "Listen for \"supplement\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌsəpləˈmɛnt/"
},
{
"w": "nutrition",
"m": "营养",
"x": "Listen for \"nutrition\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/nuˈtrɪʃən/"
},
{
"w": "nutrient",
"m": "营养品",
"x": "Listen for \"nutrient\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈnutriənt/"
},
{
"w": "multi-vitamin",
"m": "复合维生素",
"x": "Listen for \"multi-vitamin\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "vitamin",
"m": "维生素",
"x": "Listen for \"vitamin\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈvaɪtəmən/"
},
{
"w": "mineral supplement",
"m": "矿物质添加剂",
"x": "Listen for \"mineral supplement\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈmɪnərəl ˌsəpləˈmɛnt/"
},
{
"w": "local food",
"m": "当地食物",
"x": "Listen for \"local food\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈloʊkəl fud/"
},
{
"w": "protein",
"m": "蛋白质",
"x": "Listen for \"protein\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈproʊˌtin/"
},
{
"w": "amino acid",
"m": "氨基酸",
"x": "Listen for \"amino acid\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/əˈminoʊ ˈæsəd/"
},
{
"w": "cereal",
"m": "谷类食品，燕麦片",
"x": "Listen for \"cereal\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈsɪriəl/"
},
{
"w": "sugar",
"m": "糖",
"x": "Listen for \"sugar\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈʃʊgər/"
},
{
"w": "salt",
"m": "盐",
"x": "Listen for \"salt\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/sɔlt/"
},
{
"w": "lean meat",
"m": "瘦肉",
"x": "Listen for \"lean meat\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/lin mit/"
},
{
"w": "pork",
"m": "猪肉",
"x": "Listen for \"pork\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/pɔrk/"
},
{
"w": "lamb",
"m": "羊羔肉",
"x": "Listen for \"lamb\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/læm/"
},
{
"w": "beef",
"m": "牛肉",
"x": "Listen for \"beef\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/bif/"
},
{
"w": "ostrich meat",
"m": "鸵鸟肉",
"x": "Listen for \"ostrich meat\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈɔstrɪʧ mit/"
},
{
"w": "kangaroo meat",
"m": "袋鼠肉",
"x": "Listen for \"kangaroo meat\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌkæŋgərˈu mit/"
},
{
"w": "white meat",
"m": "白肉（指鸡、鸭、鱼肉等）",
"x": "Listen for \"white meat\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/waɪt mit/"
},
{
"w": "red meat",
"m": "红肉（指猪、牛、羊肉等）",
"x": "Listen for \"red meat\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/rɛd mit/"
},
{
"w": "milk product",
"m": "奶制品",
"x": "Listen for \"milk product\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/mɪlk ˈprɑdəkt/"
},
{
"w": "cheese",
"m": "奶酪",
"x": "Listen for \"cheese\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ʧiz/"
},
{
"w": "butter",
"m": "黄油",
"x": "Listen for \"butter\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈbətər/"
},
{
"w": "milk bar",
"m": "奶品店",
"x": "Listen for \"milk bar\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/mɪlk bɑr/"
},
{
"w": "milk powder",
"m": "奶粉",
"x": "Listen for \"milk powder\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/mɪlk ˈpaʊdər/"
},
{
"w": "milk shake",
"m": "奶昔",
"x": "Listen for \"milk shake\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/mɪlk ʃeɪk/"
},
{
"w": "cream",
"m": "奶油",
"x": "Listen for \"cream\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/krim/"
},
{
"w": "yogurt",
"m": "酸奶",
"x": "Listen for \"yogurt\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈjoʊgərt/"
},
{
"w": "nut",
"m": "坚果",
"x": "Listen for \"nut\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/nət/"
},
{
"w": "carrot",
"m": "胡萝卜",
"x": "Listen for \"carrot\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈkɛrət/"
},
{
"w": "vegetarian food",
"m": "素食",
"x": "Listen for \"vegetarian food\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌvɛʤəˈtɛˌriən fud/"
},
{
"w": "care package",
"m": "食品包裹",
"x": "Listen for \"care package\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/kɛr ˈpækɪʤ/"
},
{
"w": "junk food",
"m": "垃圾食品",
"x": "Listen for \"junk food\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ʤəŋk fud/"
},
{
"w": "fat",
"m": "脂肪",
"x": "Listen for \"fat\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/fæt/"
},
{
"w": "clinic",
"m": "诊所",
"x": "Listen for \"clinic\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈklɪnɪk/"
},
{
"w": "campus clinic",
"m": "校园诊所",
"x": "Listen for \"campus clinic\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈkæmpəs ˈklɪnɪk/"
},
{
"w": "community clinic",
"m": "社区诊所",
"x": "Listen for \"community clinic\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/kəmˈjunɪti ˈklɪnɪk/"
},
{
"w": "practice",
"m": "从业医生的诊所",
"x": "Listen for \"practice\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈpræktɪs/"
},
{
"w": "community hospital",
"m": "社区医院",
"x": "Listen for \"community hospital\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/kəmˈjunɪti ˈhɑˌspɪtəl/"
},
{
"w": "in-patient department",
"m": "住院部",
"x": "Listen for \"in-patient department\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "mental hospital",
"m": "精神病医院",
"x": "Listen for \"mental hospital\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈmɛntəl ˈhɑˌspɪtəl/"
},
{
"w": "ward",
"m": "病房",
"x": "Listen for \"ward\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/wɔrd/"
},
{
"w": "health system",
"m": "卫生系统",
"x": "Listen for \"health system\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hɛlθ ˈsɪstəm/"
},
{
"w": "prescribe",
"m": "开处方",
"x": "Listen for \"prescribe\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/prəˈskraɪb/"
},
{
"w": "dental care",
"m": "牙齿护理",
"x": "Listen for \"dental care\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈdɛntəl kɛr/"
},
{
"w": "check up",
"m": "体检",
"x": "Listen for \"check up\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ʧɛk əp/"
},
{
"w": "consulting hours",
"m": "门诊时间",
"x": "Listen for \"consulting hours\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/kənˈsəltɪŋ aʊərz/"
},
{
"w": "psychiatrist/shrink",
"m": "精神科医生",
"x": "Listen for \"psychiatrist/shrink\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "psychologist",
"m": "心理学家",
"x": "Listen for \"psychologist\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/saɪˈkɑləʤəst/"
},
{
"w": "optician",
"m": "验光师",
"x": "Listen for \"optician\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ɑpˈtɪʃən/"
},
{
"w": "oculist",
"m": "眼科医生",
"x": "Listen for \"oculist\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈɔkjuˌlɪst/"
},
{
"w": "practitioner",
"m": "从业医生，见习医生",
"x": "Listen for \"practitioner\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/prækˈtɪʃənər/"
},
{
"w": "surgeon",
"m": "外科医生",
"x": "Listen for \"surgeon\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈsərʤɪn/"
},
{
"w": "physician",
"m": "内科医生，医师",
"x": "Listen for \"physician\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/fəˈzɪʃən/"
},
{
"w": "nurse",
"m": "护士",
"x": "Listen for \"nurse\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/nərs/"
},
{
"w": "nursery",
"m": "看护",
"x": "Listen for \"nursery\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈnərsəri/"
},
{
"w": "internist",
"m": "〈美〉内科医生",
"x": "Listen for \"internist\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌɪnˈtərnɪst/"
},
{
"w": "vet",
"m": "兽医",
"x": "Listen for \"vet\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/vɛt/"
},
{
"w": "dietitian",
"m": "营养师，饮食专家",
"x": "Listen for \"dietitian\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌdaɪəˈtɪʃən/"
},
{
"w": "health expert",
"m": "饮食专家",
"x": "Listen for \"health expert\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hɛlθ ˈɛkspərt/"
},
{
"w": "fat-soluble vitamine",
"m": "脂溶性维生素",
"x": "Listen for \"fat-soluble vitamine\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "water-soluble vitamine",
"m": "水溶性维生素",
"x": "Listen for \"water-soluble vitamine\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "medication",
"m": "药物，药剂",
"x": "Listen for \"medication\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌmɛdəˈkeɪʃən/"
},
{
"w": "pill",
"m": "药片",
"x": "Listen for \"pill\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/pɪl/"
},
{
"w": "tablet",
"m": "药片",
"x": "Listen for \"tablet\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈtæblət/"
},
{
"w": "capsule",
"m": "胶囊",
"x": "Listen for \"capsule\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈkæpsəl/"
},
{
"w": "mixture",
"m": "合剂",
"x": "Listen for \"mixture\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈmɪksʧər/"
},
{
"w": "aspirin",
"m": "阿司匹林",
"x": "Listen for \"aspirin\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈæsprɪn/"
},
{
"w": "antibiotic",
"m": "抗生素",
"x": "Listen for \"antibiotic\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌæntibaɪˈɑtɪk/"
},
{
"w": "syrup",
"m": "糖浆",
"x": "Listen for \"syrup\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈsɪrəp/"
},
{
"w": "cold cure",
"m": "感冒药",
"x": "Listen for \"cold cure\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/koʊld kjʊr/"
},
{
"w": "sweating medicine",
"m": "发汗药",
"x": "Listen for \"sweating medicine\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/sˈwɛtɪŋ ˈmɛdəsən/"
},
{
"w": "febrifuge",
"m": "退烧药",
"x": "Listen for \"febrifuge\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "ointment",
"m": "药膏",
"x": "Listen for \"ointment\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈɔɪntmənt/"
},
{
"w": "syringe",
"m": "注射器",
"x": "Listen for \"syringe\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈsɪrɪnʤ/"
},
{
"w": "stethoscope",
"m": "听诊器",
"x": "Listen for \"stethoscope\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈstɛθəˌskoʊp/"
},
{
"w": "preventive injection",
"m": "预防针",
"x": "Listen for \"preventive injection\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/prɪˈvɛnɪv ˌɪnˈʤɛkʃən/"
},
{
"w": "gauze",
"m": "纱布",
"x": "Listen for \"gauze\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/gɔz/"
},
{
"w": "regular daily intake",
"m": "常规每日摄入量",
"x": "Listen for \"regular daily intake\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈrɛgjələr ˈdeɪli ˈɪnˌteɪk/"
},
{
"w": "pad",
"m": "药棉块",
"x": "Listen for \"pad\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/pæd/"
},
{
"w": "eyedrop",
"m": "眼药水",
"x": "Listen for \"eyedrop\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈaɪˌdrɑp/"
},
{
"w": "bandage",
"m": "绷带",
"x": "Listen for \"bandage\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈbændɪʤ/"
},
{
"w": "twist",
"m": "扭伤",
"x": "Listen for \"twist\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/twɪst/"
},
{
"w": "back trouble",
"m": "背痛",
"x": "Listen for \"back trouble\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/bæk ˈtrəbəl/"
},
{
"w": "bad back",
"m": "背痛",
"x": "Listen for \"bad back\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/bæd bæk/"
},
{
"w": "internal clock",
"m": "生物钟",
"x": "Listen for \"internal clock\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌɪnˈtərnəl klɑk/"
},
{
"w": "allergy",
"m": "过敏症",
"x": "Listen for \"allergy\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈælərʤi/"
},
{
"w": "be allergic to",
"m": "对…过敏",
"x": "Listen for \"be allergic to\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/bi əˈlərʤɪk tɪ/"
},
{
"w": "pneumonia",
"m": "肺炎",
"x": "Listen for \"pneumonia\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/nəˈmoʊnjə/"
},
{
"w": "liver trouble",
"m": "肝病",
"x": "Listen for \"liver trouble\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈlɪvər ˈtrəbəl/"
},
{
"w": "flu",
"m": "流感",
"x": "Listen for \"flu\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/flu/"
},
{
"w": "stuffed nose",
"m": "鼻塞，不通气",
"x": "Listen for \"stuffed nose\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/stəft noʊz/"
},
{
"w": "chronic disease",
"m": "慢性病",
"x": "Listen for \"chronic disease\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈkrɑnɪk dɪˈziz/"
},
{
"w": "insomnia",
"m": "失眠（症）",
"x": "Listen for \"insomnia\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌɪnˈsɑmniə/"
},
{
"w": "arthritis",
"m": "关节炎",
"x": "Listen for \"arthritis\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ɑrθˈraɪtɪs/"
},
{
"w": "sprained",
"m": "扭伤的",
"x": "Listen for \"sprained\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/spreɪnd/"
},
{
"w": "asthma",
"m": "哮喘",
"x": "Listen for \"asthma\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈæzmə/"
},
{
"w": "sleeplessness",
"m": "失眠",
"x": "Listen for \"sleeplessness\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "hay fever",
"m": "花粉热",
"x": "Listen for \"hay fever\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/heɪ ˈfivər/"
},
{
"w": "yellow fever",
"m": "黄热病",
"x": "Listen for \"yellow fever\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈjɛloʊ ˈfivər/"
},
{
"w": "have a stomachache",
"m": "胃痛",
"x": "Listen for \"have a stomachache\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "symptom",
"m": "症状",
"x": "Listen for \"symptom\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈsɪmptəm/"
},
{
"w": "have/catch a cold",
"m": "感冒",
"x": "Listen for \"have/catch a cold\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "have a sore throat",
"m": "嗓子痛",
"x": "Listen for \"have a sore throat\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hæv ə sɔr θroʊt/"
},
{
"w": "have a fever",
"m": "发烧",
"x": "Listen for \"have a fever\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hæv ə ˈfivər/"
},
{
"w": "high temperature",
"m": "高烧",
"x": "Listen for \"high temperature\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/haɪ ˈtɛmpərəʧər/"
},
{
"w": "have a cough",
"m": "咳嗽",
"x": "Listen for \"have a cough\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hæv ə kɔf/"
},
{
"w": "have a headache",
"m": "头痛",
"x": "Listen for \"have a headache\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hæv ə ˈhɛˌdeɪk/"
},
{
"w": "have a toothache",
"m": "牙痛",
"x": "Listen for \"have a toothache\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "feel dizzy",
"m": "头晕",
"x": "Listen for \"feel dizzy\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/fil ˈdɪzi/"
},
{
"w": "feel chilly",
"m": "发冷",
"x": "Listen for \"feel chilly\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/fil ˈʧɪli/"
},
{
"w": "have a stuffed nose",
"m": "鼻子不通",
"x": "Listen for \"have a stuffed nose\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hæv ə stəft noʊz/"
},
{
"w": "case history",
"m": "病历",
"x": "Listen for \"case history\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/keɪs ˈhɪstəri/"
},
{
"w": "extract a tooth",
"m": "拔牙",
"x": "Listen for \"extract a tooth\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈɛkˌstrækt ə tuθ/"
},
{
"w": "injection",
"m": "注射",
"x": "Listen for \"injection\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌɪnˈʤɛkʃən/"
},
{
"w": "see a doctor",
"m": "看病",
"x": "Listen for \"see a doctor\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/si ə ˈdɔktər/"
},
{
"w": "send for a doctor",
"m": "去请医生",
"x": "Listen for \"send for a doctor\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/sɛnd fər ə ˈdɔktər/"
},
{
"w": "take one's blood pressure",
"m": "量血压",
"x": "Listen for \"take one's blood pressure\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/teɪk wənz bləd ˈprɛʃər/"
},
{
"w": "take one's temperature",
"m": "量体温",
"x": "Listen for \"take one's temperature\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/teɪk wənz ˈtɛmpərəʧər/"
},
{
"w": "give a prescription",
"m": "开处方",
"x": "Listen for \"give a prescription\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/gɪv ə prəˈskrɪpʃən/"
},
{
"w": "have an operation",
"m": "动手术",
"x": "Listen for \"have an operation\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hæv ən ˌɑpərˈeɪʃən/"
},
{
"w": "make an appointment",
"m": "预约",
"x": "Listen for \"make an appointment\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/meɪk ən əˈpɔɪntmənt/"
},
{
"w": "feel one's pulse",
"m": "把脉",
"x": "Listen for \"feel one's pulse\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/fil wənz pəls/"
},
{
"w": "blood pressure",
"m": "血压",
"x": "Listen for \"blood pressure\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/bləd ˈprɛʃər/"
},
{
"w": "diet",
"m": "节食",
"x": "Listen for \"diet\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/daɪət/"
},
{
"w": "treatment",
"m": "治疗",
"x": "Listen for \"treatment\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈtritmənt/"
},
{
"w": "relax therapy",
"m": "放松疗法",
"x": "Listen for \"relax therapy\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/rɪˈlæks ˈθɛrəpi/"
},
{
"w": "hold a surgery",
"m": "出诊",
"x": "Listen for \"hold a surgery\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/hoʊld ə ˈsərʤəri/"
},
{
"w": "intensive care",
"m": "特护",
"x": "Listen for \"intensive care\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌɪnˈtɛnsɪv kɛr/"
},
{
"w": "medical card",
"m": "医保卡",
"x": "Listen for \"medical card\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈmɛdɪkəl kɑrd/"
},
{
"w": "warden",
"m": "看护人",
"x": "Listen for \"warden\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈwɔrdən/"
},
{
"w": "allergic to dust",
"m": "对灰尘过敏",
"x": "Listen for \"allergic to dust\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/əˈlərʤɪk tɪ dəst/"
},
{
"w": "dizzy",
"m": "眩晕的",
"x": "Listen for \"dizzy\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈdɪzi/"
},
{
"w": "drowsy",
"m": "昏昏欲睡的",
"x": "Listen for \"drowsy\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈdraʊzi/"
},
{
"w": "drowsiness",
"m": "昏昏欲睡",
"x": "Listen for \"drowsiness\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈdraʊzinəs/"
},
{
"w": "vomit",
"m": "呕吐",
"x": "Listen for \"vomit\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈvɑmət/"
},
{
"w": "cramp",
"m": "抽筋",
"x": "Listen for \"cramp\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/kræmp/"
},
{
"w": "throw up",
"m": "呕吐",
"x": "Listen for \"throw up\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/θroʊ əp/"
},
{
"w": "nauseate",
"m": "作呕",
"x": "Listen for \"nauseate\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈnɔziˌeɪt/"
},
{
"w": "diarrhea",
"m": "腹泻",
"x": "Listen for \"diarrhea\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˌdaɪərˈiə/"
},
{
"w": "puke",
"m": "呕吐",
"x": "Listen for \"puke\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/pjuk/"
},
{
"w": "phlegm",
"m": "痰",
"x": "Listen for \"phlegm\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/flɛm/"
},
{
"w": "stiff neck",
"m": "脖子发僵",
"x": "Listen for \"stiff neck\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/stɪf nɛk/"
},
{
"w": "abscess",
"m": "脓肿",
"x": "Listen for \"abscess\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈæbˌsɛs/"
},
{
"w": "homesickness",
"m": "想家",
"x": "Listen for \"homesickness\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈhoʊmˌsɪknəs/"
},
{
"w": "unhealthy lifestyle",
"m": "不健康的生活方式",
"x": "Listen for \"unhealthy lifestyle\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ənˈhɛlθi ˈlaɪfˌstaɪl/"
},
{
"w": "calory",
"m": "卡路里",
"x": "Listen for \"calory\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical"
},
{
"w": "fatigue",
"m": "疲惫",
"x": "Listen for \"fatigue\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/fəˈtig/"
},
{
"w": "fitness",
"m": "健康，健壮",
"x": "Listen for \"fitness\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈfɪtnəs/"
},
{
"w": "good condition",
"m": "健康",
"x": "Listen for \"good condition\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/gʊd kənˈdɪʃən/"
},
{
"w": "walking club",
"m": "行走俱乐部",
"x": "Listen for \"walking club\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ˈwɔkɪŋ kləb/"
},
{
"w": "exhaustion",
"m": "精疲力竭",
"x": "Listen for \"exhaustion\" in this scene.",
"c": "雅思听力场景词汇: 看医生/健康 Medical",
"ipa": "/ɪgˈzɔsʧən/"
},
{
"w": "place",
"m": "地点",
"x": "Listen for \"place\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/pleɪs/"
},
{
"w": "venue",
"m": "聚集地，比赛场所",
"x": "Listen for \"venue\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈvɛnju/"
},
{
"w": "premises",
"m": "经营场所",
"x": "Listen for \"premises\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈprɛməsəz/"
},
{
"w": "choice of place",
"m": "地点的选择",
"x": "Listen for \"choice of place\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ʧɔɪs əv pleɪs/"
},
{
"w": "candy bar",
"m": "糖果店",
"x": "Listen for \"candy bar\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkændi bɑr/"
},
{
"w": "canteen",
"m": "食堂，餐厅",
"x": "Listen for \"canteen\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/kænˈtin/"
},
{
"w": "dining hall",
"m": "餐厅",
"x": "Listen for \"dining hall\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈdaɪnɪŋ hɔl/"
},
{
"w": "outdoors",
"m": "户外",
"x": "Listen for \"outdoors\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈaʊtˈdɔrz/"
},
{
"w": "desert",
"m": "沙漠",
"x": "Listen for \"desert\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈdɛzərt/"
},
{
"w": "meeting room",
"m": "会议室",
"x": "Listen for \"meeting room\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈmitɪŋ rum/"
},
{
"w": "ballroom",
"m": "舞厅",
"x": "Listen for \"ballroom\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈbɔˌlrum/"
},
{
"w": "seminar room",
"m": "研讨室",
"x": "Listen for \"seminar room\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈsɛməˌnɑr rum/"
},
{
"w": "representative",
"m": "代表",
"x": "Listen for \"representative\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˌrɛprɪˈzɛnətɪv/"
},
{
"w": "a speech by a representative",
"m": "代表发言",
"x": "Listen for \"a speech by a representative\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ə spiʧ baɪ ə ˌrɛprɪˈzɛnətɪv/"
},
{
"w": "delegate",
"m": "代表团成员",
"x": "Listen for \"delegate\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈdɛləˌgeɪt/"
},
{
"w": "student leader",
"m": "学生干部",
"x": "Listen for \"student leader\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈstudənt ˈlidər/"
},
{
"w": "monitor",
"m": "班长",
"x": "Listen for \"monitor\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈmɑnətər/"
},
{
"w": "senior",
"m": "高年级学生",
"x": "Listen for \"senior\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈsinjər/"
},
{
"w": "president",
"m": "校长",
"x": "Listen for \"president\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈprɛzɪdənt/"
},
{
"w": "session chairman",
"m": "会议主席",
"x": "Listen for \"session chairman\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈsɛʃən ˈʧɛrmən/"
},
{
"w": "chancellor",
"m": "〈英〉名誉校长，〈美〉校长",
"x": "Listen for \"chancellor\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈʧænsələr/"
},
{
"w": "headmaster",
"m": "（尤指私立学校的）男校长",
"x": "Listen for \"headmaster\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈhɛdˈmæstər/"
},
{
"w": "headmistress",
"m": "（尤指私立学校的）女校长",
"x": "Listen for \"headmistress\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈhɛdˌmɪstrəs/"
},
{
"w": "director",
"m": "主任",
"x": "Listen for \"director\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/dɪˈrɛktər/"
},
{
"w": "faculty head",
"m": "系主任",
"x": "Listen for \"faculty head\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈfækəlti hɛd/"
},
{
"w": "faculty/staff",
"m": "教职工",
"x": "Listen for \"faculty/staff\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "instructor",
"m": "教师",
"x": "Listen for \"instructor\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˌɪnˈstrəktər/"
},
{
"w": "participant",
"m": "与会者",
"x": "Listen for \"participant\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/pɑrˈtɪsəpənt/"
},
{
"w": "expert",
"m": "专家",
"x": "Listen for \"expert\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈɛkspərt/"
},
{
"w": "scholar",
"m": "学者",
"x": "Listen for \"scholar\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈskɑlər/"
},
{
"w": "course convener",
"m": "课程辅导员",
"x": "Listen for \"course convener\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "counsellor",
"m": "顾问",
"x": "Listen for \"counsellor\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkaʊnsələr/"
},
{
"w": "sponsor",
"m": "发起者，赞助者",
"x": "Listen for \"sponsor\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈspɑnsər/"
},
{
"w": "mentor",
"m": "顾问",
"x": "Listen for \"mentor\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈmɛnˌtɔr/"
},
{
"w": "program",
"m": "安排，计划",
"x": "Listen for \"program\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈproʊˌgræm/"
},
{
"w": "itinerary",
"m": "旅程安排",
"x": "Listen for \"itinerary\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/aɪˈtɪnərˌɛri/"
},
{
"w": "arrangements",
"m": "安排",
"x": "Listen for \"arrangements\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ərˈeɪnʤmənts/"
},
{
"w": "lentil curry",
"m": "咖喱扁豆",
"x": "Listen for \"lentil curry\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈlɛntəl ˈkəri/"
},
{
"w": "roast",
"m": "烤制的",
"x": "Listen for \"roast\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/roʊst/"
},
{
"w": "appetizer",
"m": "开胃菜",
"x": "Listen for \"appetizer\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈæpəˌtaɪzər/"
},
{
"w": "main course",
"m": "主菜，正餐",
"x": "Listen for \"main course\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/meɪn kɔrs/"
},
{
"w": "greasy",
"m": "油腻的",
"x": "Listen for \"greasy\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈgrisi/"
},
{
"w": "fat meat",
"m": "肥肉",
"x": "Listen for \"fat meat\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/fæt mit/"
},
{
"w": "fried rice",
"m": "炒饭",
"x": "Listen for \"fried rice\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/frid raɪs/"
},
{
"w": "mutton",
"m": "羊肉",
"x": "Listen for \"mutton\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈmətən/"
},
{
"w": "fat-soluble vitamin",
"m": "脂溶性维生素",
"x": "Listen for \"fat-soluble vitamin\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "water-soluble vitamin",
"m": "水溶性维生素",
"x": "Listen for \"water-soluble vitamin\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "chocolate",
"m": "巧克力",
"x": "Listen for \"chocolate\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈʧɔklət/"
},
{
"w": "short-lived energy",
"m": "很快就被消耗掉的能量",
"x": "Listen for \"short-lived energy\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˌʃɔrˈtlɪvd ˈɛnərʤi/"
},
{
"w": "nourishing food",
"m": "有营养的食物",
"x": "Listen for \"nourishing food\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈnərɪʃɪŋ fud/"
},
{
"w": "pizza",
"m": "比萨饼",
"x": "Listen for \"pizza\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈpitsə/"
},
{
"w": "sandwich",
"m": "三明治",
"x": "Listen for \"sandwich\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈsænwɪʧ/"
},
{
"w": "dessert",
"m": "甜品",
"x": "Listen for \"dessert\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/dɪˈzərt/"
},
{
"w": "buffet",
"m": "自助餐",
"x": "Listen for \"buffet\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈbəfət/"
},
{
"w": "barbeque",
"m": "烧烤",
"x": "Listen for \"barbeque\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈbɑrbɪˌkju/"
},
{
"w": "well-done",
"m": "做熟的",
"x": "Listen for \"well-done\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "half-done",
"m": "半熟的",
"x": "Listen for \"half-done\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "non-alcoholic",
"m": "不含酒精的",
"x": "Listen for \"non-alcoholic\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˌnɑˌnælkəˈhɑlɪk/"
},
{
"w": "lemonade",
"m": "柠檬水",
"x": "Listen for \"lemonade\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈlɛməˈneɪd/"
},
{
"w": "Seven-up",
"m": "七喜牌汽水",
"x": "Listen for \"Seven-up\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "beverage",
"m": "饮料",
"x": "Listen for \"beverage\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈbɛvərɪʤ/"
},
{
"w": "coffee",
"m": "咖啡",
"x": "Listen for \"coffee\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkɔfi/"
},
{
"w": "brewed coffee",
"m": "煮的咖啡",
"x": "Listen for \"brewed coffee\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/brud ˈkɔfi/"
},
{
"w": "instant coffee",
"m": "速溶咖啡",
"x": "Listen for \"instant coffee\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈɪnstənt ˈkɔfi/"
},
{
"w": "blue mountain coffee",
"m": "蓝山咖啡",
"x": "Listen for \"blue mountain coffee\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/blu ˈmaʊntən ˈkɔfi/"
},
{
"w": "tea",
"m": "茶",
"x": "Listen for \"tea\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ti/"
},
{
"w": "cold water",
"m": "冰水",
"x": "Listen for \"cold water\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/koʊld ˈwɔtər/"
},
{
"w": "mineral water",
"m": "矿泉水",
"x": "Listen for \"mineral water\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈmɪnərəl ˈwɔtər/"
},
{
"w": "purified water",
"m": "纯净水",
"x": "Listen for \"purified water\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈpjʊrəˌfaɪd ˈwɔtər/"
},
{
"w": "soft drink",
"m": "软饮料",
"x": "Listen for \"soft drink\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/sɔft drɪŋk/"
},
{
"w": "menu",
"m": "菜单",
"x": "Listen for \"menu\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈmɛnju/"
},
{
"w": "vegetable",
"m": "蔬菜",
"x": "Listen for \"vegetable\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈvɛʤtəbəl/"
},
{
"w": "tomato",
"m": "番茄，西红柿",
"x": "Listen for \"tomato\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/təˈmɑˌtoʊ/"
},
{
"w": "asparagus",
"m": "芦笋",
"x": "Listen for \"asparagus\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/əˈspɛrəgəs/"
},
{
"w": "cucumber",
"m": "黄瓜",
"x": "Listen for \"cucumber\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkjukəmbər/"
},
{
"w": "aubergine/eggplant",
"m": "茄子",
"x": "Listen for \"aubergine/eggplant\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "bean",
"m": "豆",
"x": "Listen for \"bean\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/bin/"
},
{
"w": "beet",
"m": "甜菜",
"x": "Listen for \"beet\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/bit/"
},
{
"w": "pimiento",
"m": "甜椒",
"x": "Listen for \"pimiento\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "potato",
"m": "马铃薯",
"x": "Listen for \"potato\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/pəˈteɪˌtoʊ/"
},
{
"w": "cauliflower",
"m": "菜花，花椰菜",
"x": "Listen for \"cauliflower\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkɑləˌflaʊər/"
},
{
"w": "pumpkin",
"m": "南瓜",
"x": "Listen for \"pumpkin\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈpəmpkɪn/"
},
{
"w": "broad bean",
"m": "蚕豆",
"x": "Listen for \"broad bean\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/brɔd bin/"
},
{
"w": "cabbage",
"m": "圆白菜，卷心菜",
"x": "Listen for \"cabbage\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkæbɪʤ/"
},
{
"w": "garlic",
"m": "蒜",
"x": "Listen for \"garlic\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈgɑrlɪk/"
},
{
"w": "chive",
"m": "细香葱",
"x": "Listen for \"chive\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "fennel",
"m": "茴香",
"x": "Listen for \"fennel\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈfɛnəl/"
},
{
"w": "marrow",
"m": "西葫芦",
"x": "Listen for \"marrow\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈmɛroʊ/"
},
{
"w": "melon",
"m": "香瓜，甜瓜",
"x": "Listen for \"melon\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈmɛlən/"
},
{
"w": "mushroom",
"m": "蘑菇",
"x": "Listen for \"mushroom\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈməʃrum/"
},
{
"w": "celery",
"m": "芹菜",
"x": "Listen for \"celery\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈsɛləri/"
},
{
"w": "onion",
"m": "洋葱",
"x": "Listen for \"onion\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈənjən/"
},
{
"w": "leek",
"m": "韭菜",
"x": "Listen for \"leek\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/lik/"
},
{
"w": "radish",
"m": "小萝卜",
"x": "Listen for \"radish\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈrædɪʃ/"
},
{
"w": "tarragon",
"m": "龙蒿",
"x": "Listen for \"tarragon\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "broccoli",
"m": "西兰花",
"x": "Listen for \"broccoli\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈbrɑkəli/"
},
{
"w": "brussels sprout",
"m": "球芽甘蓝",
"x": "Listen for \"brussels sprout\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈbrəsəlz spraʊt/"
},
{
"w": "chicory",
"m": "菊苣",
"x": "Listen for \"chicory\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration"
},
{
"w": "cress",
"m": "水芹",
"x": "Listen for \"cress\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/krɛs/"
},
{
"w": "French bean",
"m": "法国菜豆",
"x": "Listen for \"French bean\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/frɛnʧ bin/"
},
{
"w": "kohlrabi",
"m": "球茎甘蓝，大头菜",
"x": "Listen for \"kohlrabi\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/kɔˈlrɑbi/"
},
{
"w": "lettuce",
"m": "生菜，莴苣",
"x": "Listen for \"lettuce\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈlɛtəs/"
},
{
"w": "cos lettuce",
"m": "直立莴苣，长叶生菜",
"x": "Listen for \"cos lettuce\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/kɔs ˈlɛtəs/"
},
{
"w": "pea",
"m": "豌豆",
"x": "Listen for \"pea\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/pi/"
},
{
"w": "turnip",
"m": "芜菁",
"x": "Listen for \"turnip\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈtərnəp/"
},
{
"w": "watercress",
"m": "豆瓣菜",
"x": "Listen for \"watercress\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈwɔtərˌkrɛs/"
},
{
"w": "bring snacks",
"m": "带零食",
"x": "Listen for \"bring snacks\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/brɪŋ snæks/"
},
{
"w": "coffee break",
"m": "喝咖啡休息时间",
"x": "Listen for \"coffee break\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkɔfi breɪk/"
},
{
"w": "tea break",
"m": "喝茶休息时间",
"x": "Listen for \"tea break\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ti breɪk/"
},
{
"w": "suggested amount",
"m": "建议的量",
"x": "Listen for \"suggested amount\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/səˈʤɛstɪd əˈmaʊnt/"
},
{
"w": "coffee maker",
"m": "咖啡机",
"x": "Listen for \"coffee maker\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkɔfi ˈmeɪkər/"
},
{
"w": "printer",
"m": "打印机",
"x": "Listen for \"printer\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈprɪnər/"
},
{
"w": "organizer",
"m": "组织者",
"x": "Listen for \"organizer\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈɔrgəˌnaɪzər/"
},
{
"w": "annual",
"m": "年度的",
"x": "Listen for \"annual\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈænjuəl/"
},
{
"w": "opening speech",
"m": "开幕词",
"x": "Listen for \"opening speech\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈoʊpənɪŋ spiʧ/"
},
{
"w": "closing speech",
"m": "闭幕词",
"x": "Listen for \"closing speech\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈkloʊzɪŋ spiʧ/"
},
{
"w": "session",
"m": "会议",
"x": "Listen for \"session\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈsɛʃən/"
},
{
"w": "interval",
"m": "中间休息",
"x": "Listen for \"interval\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˈɪntərvəl/"
},
{
"w": "environmental conservation",
"m": "环境保护",
"x": "Listen for \"environmental conservation\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ɪnˌvaɪrənˈmɛnəl ˌkɑnsərˈveɪʃən/"
},
{
"w": "reception desk",
"m": "接待处",
"x": "Listen for \"reception desk\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/rɪˈsɛpʃən dɛsk/"
},
{
"w": "agenda",
"m": "议事日程",
"x": "Listen for \"agenda\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/əˈʤɛndə/"
},
{
"w": "auditorium",
"m": "会堂，报告厅",
"x": "Listen for \"auditorium\" in this scene.",
"c": "雅思听力场景词汇: 事件安排 Administration",
"ipa": "/ˌɔdəˈtɔriəm/"
},
{
"w": "return area",
"m": "还书区",
"x": "Listen for \"return area\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/rɪˈtərn ˈɛriə/"
},
{
"w": "circulation desk",
"m": "图书借还台",
"x": "Listen for \"circulation desk\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈsərkjəˌleɪʃən dɛsk/"
},
{
"w": "locker",
"m": "寄物柜",
"x": "Listen for \"locker\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈlɑkər/"
},
{
"w": "self-taught room",
"m": "自习室",
"x": "Listen for \"self-taught room\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "typewriter room",
"m": "打字室",
"x": "Listen for \"typewriter room\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈtaɪˌpraɪtər rum/"
},
{
"w": "audio-visual resource centre",
"m": "音像资料室",
"x": "Listen for \"audio-visual resource centre\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "micro-computer lab",
"m": "微机实验室",
"x": "Listen for \"micro-computer lab\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "laboratory",
"m": "实验室",
"x": "Listen for \"laboratory\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈlæbrəˌtɔri/"
},
{
"w": "reference section",
"m": "参考书库",
"x": "Listen for \"reference section\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈrɛfərəns ˈsɛkʃən/"
},
{
"w": "touchscreen information service",
"m": "触摸屏查询服务",
"x": "Listen for \"touchscreen information service\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "micro-film",
"m": "微型胶卷",
"x": "Listen for \"micro-film\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "specialist library",
"m": "专业图书馆",
"x": "Listen for \"specialist library\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈspɛʃəlɪst ˈlaɪbrɛˌri/"
},
{
"w": "subject",
"m": "科目",
"x": "Listen for \"subject\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈsəbʤɪkt/"
},
{
"w": "facility",
"m": "设备",
"x": "Listen for \"facility\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/fəˈsɪlɪti/"
},
{
"w": "word processor",
"m": "文字处理机",
"x": "Listen for \"word processor\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/wərd ˈprɑˌsɛsər/"
},
{
"w": "loan desk",
"m": "借书处",
"x": "Listen for \"loan desk\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/loʊn dɛsk/"
},
{
"w": "copier",
"m": "复印机",
"x": "Listen for \"copier\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈkɑpiər/"
},
{
"w": "narrow down",
"m": "更专于一个主题",
"x": "Listen for \"narrow down\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈnɛroʊ daʊn/"
},
{
"w": "bibliography",
"m": "参考书目，参考文献",
"x": "Listen for \"bibliography\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌbɪbliˈɑgrəfi/"
},
{
"w": "catalogue",
"m": "目录",
"x": "Listen for \"catalogue\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈkætəˌlɔg/"
},
{
"w": "prescribed textbooks",
"m": "指定教材",
"x": "Listen for \"prescribed textbooks\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/priˈskraɪbd ˈtɛkstˌbʊks/"
},
{
"w": "current issue",
"m": "现期刊物",
"x": "Listen for \"current issue\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈkɑrənt ˈɪʃu/"
},
{
"w": "back issue",
"m": "过期刊物",
"x": "Listen for \"back issue\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/bæk ˈɪʃu/"
},
{
"w": "current magazines",
"m": "现期杂志",
"x": "Listen for \"current magazines\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈkɑrənt ˈmægəˌzinz/"
},
{
"w": "abstract",
"m": "摘要",
"x": "Listen for \"abstract\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈæbˌstrækt/"
},
{
"w": "index",
"m": "索引",
"x": "Listen for \"index\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈɪndɛks/"
},
{
"w": "title",
"m": "标题，书名",
"x": "Listen for \"title\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈtaɪtəl/"
},
{
"w": "title index",
"m": "书目检索",
"x": "Listen for \"title index\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈtaɪtəl ˈɪndɛks/"
},
{
"w": "author",
"m": "作者",
"x": "Listen for \"author\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈɔθər/"
},
{
"w": "local newspaper",
"m": "地方报纸",
"x": "Listen for \"local newspaper\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈloʊkəl ˈnuzˌpeɪpər/"
},
{
"w": "publication date",
"m": "出版日期",
"x": "Listen for \"publication date\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌpəblɪˈkeɪʃən deɪt/"
},
{
"w": "periodical",
"m": "（学术）期刊",
"x": "Listen for \"periodical\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌpɪriˈɑdɪkəl/"
},
{
"w": "fiction",
"m": "小说",
"x": "Listen for \"fiction\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈfɪkʃən/"
},
{
"w": "bound periodical",
"m": "期刊合订本",
"x": "Listen for \"bound periodical\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/baʊnd ˌpɪriˈɑdɪkəl/"
},
{
"w": "reference book",
"m": "参考书",
"x": "Listen for \"reference book\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈrɛfərəns bʊk/"
},
{
"w": "direct mail",
"m": "直邮信件",
"x": "Listen for \"direct mail\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/dɪˈrɛkt meɪl/"
},
{
"w": "encyclopedia",
"m": "百科全书",
"x": "Listen for \"encyclopedia\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ɪnˌsaɪkləˈpidiə/"
},
{
"w": "publication",
"m": "出版",
"x": "Listen for \"publication\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌpəblɪˈkeɪʃən/"
},
{
"w": "street map",
"m": "街区图",
"x": "Listen for \"street map\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/strit mæp/"
},
{
"w": "special interest",
"m": "特别兴趣",
"x": "Listen for \"special interest\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈspɛʃəl ˈɪntəˌrɛst/"
},
{
"w": "supplementary reading material",
"m": "补充阅读材料",
"x": "Listen for \"supplementary reading material\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌsəpləˈmɛntəˌri ˈrɛdɪŋ məˈtɪriəl/"
},
{
"w": "advanced",
"m": "高级",
"x": "Listen for \"advanced\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ədˈvænst/"
},
{
"w": "intermediate",
"m": "中级",
"x": "Listen for \"intermediate\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌɪnərˈmidiɪt/"
},
{
"w": "fundamental",
"m": "基础类",
"x": "Listen for \"fundamental\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌfəndəˈmɛnəl/"
},
{
"w": "elementary",
"m": "初级",
"x": "Listen for \"elementary\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌɛləˈmɛnʧri/"
},
{
"w": "preliminary",
"m": "预备级",
"x": "Listen for \"preliminary\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/prɪˈlɪməˌnɛri/"
},
{
"w": "action",
"m": "动作片",
"x": "Listen for \"action\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈækʃən/"
},
{
"w": "comedy",
"m": "喜剧片",
"x": "Listen for \"comedy\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈkɑmədi/"
},
{
"w": "musical",
"m": "音乐剧",
"x": "Listen for \"musical\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/mˈjuzɪkəl/"
},
{
"w": "westerns",
"m": "西部片",
"x": "Listen for \"westerns\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈwɛstərnz/"
},
{
"w": "romance",
"m": "爱情片",
"x": "Listen for \"romance\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈroʊmæns/"
},
{
"w": "science",
"m": "科幻片",
"x": "Listen for \"science\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/saɪəns/"
},
{
"w": "wildlife",
"m": "野生动物片",
"x": "Listen for \"wildlife\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈwaɪlˌdlaɪf/"
},
{
"w": "documentary",
"m": "纪录片",
"x": "Listen for \"documentary\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌdɑkjəˈmɛnəri/"
},
{
"w": "cassette/tape",
"m": "磁带，录像带",
"x": "Listen for \"cassette/tape\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "disk/disc",
"m": "光盘",
"x": "Listen for \"disk/disc\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "audio player",
"m": "音频播放器",
"x": "Listen for \"audio player\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈɑdiˌoʊ pleɪər/"
},
{
"w": "video player",
"m": "视频播放器",
"x": "Listen for \"video player\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈvɪdioʊ pleɪər/"
},
{
"w": "headphone",
"m": "耳机",
"x": "Listen for \"headphone\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈhɛdˌfoʊn/"
},
{
"w": "audio lab",
"m": "语音实验室",
"x": "Listen for \"audio lab\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈɑdiˌoʊ læb/"
},
{
"w": "CD-ROM",
"m": "只读光盘",
"x": "Listen for \"CD-ROM\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "satellite TV receiver",
"m": "卫星电视接收器",
"x": "Listen for \"satellite TV receiver\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈsætəˌlaɪt ˌtɛləˈvɪʒən rɪˈsivər/"
},
{
"w": "signposted by green arrows",
"m": "由绿色箭头标示",
"x": "Listen for \"signposted by green arrows\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "closed reserve",
"m": "只能读不能借走，馆内阅览",
"x": "Listen for \"closed reserve\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/kloʊzd rɪˈzərv/"
},
{
"w": "for reference only",
"m": "只能参考不能借走",
"x": "Listen for \"for reference only\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/fər ˈrɛfərəns ˈoʊnli/"
},
{
"w": "get the hold of",
"m": "预借（图书）",
"x": "Listen for \"get the hold of\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/gɪt ðə hoʊld əv/"
},
{
"w": "put on a hold for",
"m": "预订（图书）",
"x": "Listen for \"put on a hold for\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/pʊt ɔn ə hoʊld fər/"
},
{
"w": "pay fines",
"m": "支付罚款",
"x": "Listen for \"pay fines\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/peɪ faɪnz/"
},
{
"w": "extra fee",
"m": "额外费用",
"x": "Listen for \"extra fee\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈɛkstrə fi/"
},
{
"w": "registration fee",
"m": "注册费",
"x": "Listen for \"registration fee\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌrɛʤɪˈstreɪʃən fi/"
},
{
"w": "identification card",
"m": "身份证",
"x": "Listen for \"identification card\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/aɪˌdɛntəfəˈkeɪʃən kɑrd/"
},
{
"w": "passport-sized photo",
"m": "护照大小的照片",
"x": "Listen for \"passport-sized photo\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "magnetize",
"m": "上磁",
"x": "Listen for \"magnetize\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "demagnetize",
"m": "消磁",
"x": "Listen for \"demagnetize\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "in capital letter",
"m": "用大写字母",
"x": "Listen for \"in capital letter\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ɪn ˈkæpɪtəl ˈlɛtər/"
},
{
"w": "inter-library card",
"m": "图书馆间通用卡",
"x": "Listen for \"inter-library card\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "library service",
"m": "图书馆服务",
"x": "Listen for \"library service\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈlaɪbrɛˌri ˈsərvɪs/"
},
{
"w": "renew",
"m": "续借",
"x": "Listen for \"renew\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/rɪˈnu/"
},
{
"w": "be due",
"m": "到期",
"x": "Listen for \"be due\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/bi du/"
},
{
"w": "date of expiry",
"m": "到期日",
"x": "Listen for \"date of expiry\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/deɪt əv ˌɛkˈspaɪri/"
},
{
"w": "overdue",
"m": "过期",
"x": "Listen for \"overdue\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈoʊvərˈdu/"
},
{
"w": "out on loan",
"m": "已借出",
"x": "Listen for \"out on loan\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/aʊt ɔn loʊn/"
},
{
"w": "put a reserve/reserve",
"m": "预订借阅",
"x": "Listen for \"put a reserve/reserve\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "inter-library service",
"m": "图书馆之间的服务",
"x": "Listen for \"inter-library service\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "a telephone request",
"m": "电话订书",
"x": "Listen for \"a telephone request\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ə ˈtɛləˌfoʊn rɪkˈwɛst/"
},
{
"w": "loan period",
"m": "借期",
"x": "Listen for \"loan period\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/loʊn ˈpɪriəd/"
},
{
"w": "librarian",
"m": "图书管理员",
"x": "Listen for \"librarian\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/laɪˈbrɛˌriən/"
},
{
"w": "magnetically coded",
"m": "用磁条编号码",
"x": "Listen for \"magnetically coded\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/mægˈnɛtɪkəli ˈkoʊdɪd/"
},
{
"w": "post or courier",
"m": "邮寄还是送来",
"x": "Listen for \"post or courier\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/poʊst ər ˈkəriər/"
},
{
"w": "residential number",
"m": "住宅号码",
"x": "Listen for \"residential number\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌrɛzɪˈdɛnʃəl ˈnəmbər/"
},
{
"w": "normal loan period",
"m": "正常借期",
"x": "Listen for \"normal loan period\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈnɔrməl loʊn ˈpɪriəd/"
},
{
"w": "two-week extension",
"m": "延期两周",
"x": "Listen for \"two-week extension\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "government archives",
"m": "政府档案馆",
"x": "Listen for \"government archives\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈgəvərnmənt ˈɑrˌkaɪvz/"
},
{
"w": "welfare officer",
"m": "福利事务管理员",
"x": "Listen for \"welfare officer\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈwɛlˌfɛr ˈɔfɪsər/"
},
{
"w": "social facilities",
"m": "公共设施",
"x": "Listen for \"social facilities\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈsoʊʃəl fəˈsɪlɪtiz/"
},
{
"w": "student union building",
"m": "学生会大楼",
"x": "Listen for \"student union building\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈstudənt ˈjunjən ˈbɪldɪŋ/"
},
{
"w": "charities",
"m": "慈善事业",
"x": "Listen for \"charities\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈʧɛrɪtiz/"
},
{
"w": "ticket shop",
"m": "售票处",
"x": "Listen for \"ticket shop\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈtɪkɪt ʃɑp/"
},
{
"w": "dining room",
"m": "学校餐厅",
"x": "Listen for \"dining room\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈdaɪnɪŋ rum/"
},
{
"w": "assistantship",
"m": "助教奖学金，助教职务",
"x": "Listen for \"assistantship\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "medical centre",
"m": "医疗中心",
"x": "Listen for \"medical centre\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈmɛdɪkəl ˈsɛntər/"
},
{
"w": "college clinic",
"m": "校园诊所",
"x": "Listen for \"college clinic\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈkɑlɪʤ ˈklɪnɪk/"
},
{
"w": "counseling centre",
"m": "咨询中心",
"x": "Listen for \"counseling centre\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈkaʊnsəlɪŋ ˈsɛntər/"
},
{
"w": "legal problem",
"m": "法律问题",
"x": "Listen for \"legal problem\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈligəl ˈprɑbləm/"
},
{
"w": "leisure activities",
"m": "休闲活动",
"x": "Listen for \"leisure activities\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈlɛʒər ækˈtɪvɪtiz/"
},
{
"w": "hi-tech fitness centre",
"m": "高科技健身中心",
"x": "Listen for \"hi-tech fitness centre\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "ice-skating facilities",
"m": "滑冰设施",
"x": "Listen for \"ice-skating facilities\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "squash",
"m": "壁球",
"x": "Listen for \"squash\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/skwɑʃ/"
},
{
"w": "badminton",
"m": "羽毛球",
"x": "Listen for \"badminton\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈbædˌmɪntən/"
},
{
"w": "indoor sports",
"m": "室内运动",
"x": "Listen for \"indoor sports\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈɪnˌdɔr spɔrts/"
},
{
"w": "main square",
"m": "大广场",
"x": "Listen for \"main square\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/meɪn skwɛr/"
},
{
"w": "resident student",
"m": "住校生",
"x": "Listen for \"resident student\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈrɛzɪdənt ˈstudənt/"
},
{
"w": "local student",
"m": "当地学生，本地生源",
"x": "Listen for \"local student\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈloʊkəl ˈstudənt/"
},
{
"w": "international student",
"m": "留学生",
"x": "Listen for \"international student\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˌɪnərˈnæʃənɑl ˈstudənt/"
},
{
"w": "exchange student",
"m": "交换学生",
"x": "Listen for \"exchange student\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ɪksˈʧeɪnʤ ˈstudənt/"
},
{
"w": "overseas student",
"m": "留学生",
"x": "Listen for \"overseas student\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈoʊvərˈsiz ˈstudənt/"
},
{
"w": "student in state",
"m": "州内学生",
"x": "Listen for \"student in state\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈstudənt ɪn steɪt/"
},
{
"w": "student out of state",
"m": "州外学生",
"x": "Listen for \"student out of state\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library",
"ipa": "/ˈstudənt aʊt əv steɪt/"
},
{
"w": "off-campus student",
"m": "走读生",
"x": "Listen for \"off-campus student\" in this scene.",
"c": "雅思听力场景词汇: 图书馆 Library"
},
{
"w": "assignment",
"m": "作业",
"x": "Listen for \"assignment\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈsaɪnmənt/"
},
{
"w": "homework",
"m": "作业",
"x": "Listen for \"homework\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈhoʊmˌwərk/"
},
{
"w": "paper",
"m": "论文",
"x": "Listen for \"paper\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpeɪpər/"
},
{
"w": "essay",
"m": "论文",
"x": "Listen for \"essay\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɛˌseɪ/"
},
{
"w": "thesis",
"m": "毕业/学位论文",
"x": "Listen for \"thesis\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈθiˌsɪs/"
},
{
"w": "research paper",
"m": "研究论文",
"x": "Listen for \"research paper\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈrisərʧ ˈpeɪpər/"
},
{
"w": "course work",
"m": "课程论文，学年作业",
"x": "Listen for \"course work\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kɔrs wərk/"
},
{
"w": "group discussion",
"m": "小组讨论",
"x": "Listen for \"group discussion\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/grup dɪˈskəʃən/"
},
{
"w": "presentation",
"m": "针对专题进行的发言演示（西方上课方式）",
"x": "Listen for \"presentation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌprɛzənˈteɪʃən/"
},
{
"w": "demonstration",
"m": "针对专题进行的示范演示（西方上课方式）",
"x": "Listen for \"demonstration\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌdɛmənˈstreɪʃən/"
},
{
"w": "project",
"m": "学生独立完成的科研项目",
"x": "Listen for \"project\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈprɑʤɛkt/"
},
{
"w": "enrolment",
"m": "登记",
"x": "Listen for \"enrolment\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "registration",
"m": "注册",
"x": "Listen for \"registration\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌrɛʤɪˈstreɪʃən/"
},
{
"w": "drop out",
"m": "退课",
"x": "Listen for \"drop out\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/drɔp aʊt/"
},
{
"w": "optional/elective course",
"m": "选修课",
"x": "Listen for \"optional/elective course\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "required/compulsory course",
"m": "必修课",
"x": "Listen for \"required/compulsory course\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "bird course",
"m": "轻松的课程",
"x": "Listen for \"bird course\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/bərd kɔrs/"
},
{
"w": "course arrangement",
"m": "课程安排",
"x": "Listen for \"course arrangement\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kɔrs ərˈeɪnʤmənt/"
},
{
"w": "letter of recommendation",
"m": "推荐信",
"x": "Listen for \"letter of recommendation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈlɛtər əv ˌrɛkəmənˈdeɪʃən/"
},
{
"w": "programme/program",
"m": "某一专业的课程总称",
"x": "Listen for \"programme/program\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "English proficiency",
"m": "英语流利程度",
"x": "Listen for \"English proficiency\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɪŋlɪʃ prəˈfɪʃənsi/"
},
{
"w": "participation",
"m": "出勤",
"x": "Listen for \"participation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/pɑrˌtɪsəˈpeɪʃən/"
},
{
"w": "attendance",
"m": "出勤",
"x": "Listen for \"attendance\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈtɛndəns/"
},
{
"w": "school",
"m": "学院",
"x": "Listen for \"school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/skul/"
},
{
"w": "graduate school",
"m": "研究生院",
"x": "Listen for \"graduate school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈgræʤəˌweɪt skul/"
},
{
"w": "undergraduate",
"m": "本科生",
"x": "Listen for \"undergraduate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌəndərˈgræʤəwət/"
},
{
"w": "School of Arts and Sciences",
"m": "文理学院",
"x": "Listen for \"School of Arts and Sciences\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/skul əv ɑrts ənd ˈsaɪənsɪz/"
},
{
"w": "score",
"m": "分数，成绩",
"x": "Listen for \"score\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/skɔr/"
},
{
"w": "grade",
"m": "分数，成绩等级",
"x": "Listen for \"grade\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/greɪd/"
},
{
"w": "mark",
"m": "分数",
"x": "Listen for \"mark\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/mɑrk/"
},
{
"w": "rate the peers",
"m": "给同学打分",
"x": "Listen for \"rate the peers\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/reɪt ðə pɪrz/"
},
{
"w": "degrees",
"m": "学位",
"x": "Listen for \"degrees\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/dɪˈgriz/"
},
{
"w": "diploma",
"m": "文凭，学位证书",
"x": "Listen for \"diploma\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/dɪˈploʊmɑ/"
},
{
"w": "assessment",
"m": "对学习情况的评定",
"x": "Listen for \"assessment\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈsɛsmənt/"
},
{
"w": "bachelor's degree",
"m": "学士学位",
"x": "Listen for \"bachelor's degree\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈbæʧələrz dɪˈgri/"
},
{
"w": "master's degree",
"m": "硕士学位",
"x": "Listen for \"master's degree\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈmæstərz dɪˈgri/"
},
{
"w": "handout",
"m": "（发给学生的）课堂讲义",
"x": "Listen for \"handout\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈhænˌdaʊt/"
},
{
"w": "giveout",
"m": "上课资料",
"x": "Listen for \"giveout\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "study",
"m": "研究",
"x": "Listen for \"study\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈstədi/"
},
{
"w": "poll",
"m": "民意调查",
"x": "Listen for \"poll\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/poʊl/"
},
{
"w": "hypothesis",
"m": "假设",
"x": "Listen for \"hypothesis\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/haɪˈpɑθəsəs/"
},
{
"w": "statistics",
"m": "统计",
"x": "Listen for \"statistics\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/stəˈtɪstɪks/"
},
{
"w": "statistically valid",
"m": "统计学上有效的",
"x": "Listen for \"statistically valid\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/stəˈtɪstɪkəli ˈvælɪd/"
},
{
"w": "data/datum",
"m": "数据",
"x": "Listen for \"data/datum\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "investigation",
"m": "（正式的）调查",
"x": "Listen for \"investigation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɪnˌvɛstəˈgeɪʃən/"
},
{
"w": "quantitative",
"m": "数量的，定量的",
"x": "Listen for \"quantitative\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kˈwɑntɪˌteɪtɪv/"
},
{
"w": "significant difference",
"m": "显著的差异",
"x": "Listen for \"significant difference\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/sɪgˈnɪfɪkənt ˈdɪfərəns/"
},
{
"w": "interview",
"m": "访谈",
"x": "Listen for \"interview\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɪntərvˌju/"
},
{
"w": "respondent",
"m": "（尤指）调查对象",
"x": "Listen for \"respondent\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/rɪˈspɑndənt/"
},
{
"w": "interviewee",
"m": "受访者",
"x": "Listen for \"interviewee\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɪntərvjuˈi/"
},
{
"w": "questionnaire",
"m": "调查问卷",
"x": "Listen for \"questionnaire\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kˌwɛsʧəˈnɛr/"
},
{
"w": "multiple choice questions",
"m": "多项选择题",
"x": "Listen for \"multiple choice questions\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈməltəpəl ʧɔɪs kˈwɛsʧənz/"
},
{
"w": "analyze/analyse data",
"m": "分析数据",
"x": "Listen for \"analyze/analyse data\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "result",
"m": "结果",
"x": "Listen for \"result\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/rɪˈzəlt/"
},
{
"w": "conclusion",
"m": "结论",
"x": "Listen for \"conclusion\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kənˈkluʒən/"
},
{
"w": "interpretation",
"m": "解释，阐释",
"x": "Listen for \"interpretation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɪnˌtərprɪˈteɪʃən/"
},
{
"w": "opinion",
"m": "意见，看法",
"x": "Listen for \"opinion\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈpɪnjən/"
},
{
"w": "coordinator",
"m": "协调人员",
"x": "Listen for \"coordinator\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/koʊˈɔrdəˌneɪtər/"
},
{
"w": "student officer",
"m": "学生办公室人员",
"x": "Listen for \"student officer\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈstudənt ˈɔfɪsər/"
},
{
"w": "office hour",
"m": "教授与学生面谈的时间",
"x": "Listen for \"office hour\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɔfəs aʊər/"
},
{
"w": "faculty",
"m": "全体教师",
"x": "Listen for \"faculty\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈfækəlti/"
},
{
"w": "professor",
"m": "教授",
"x": "Listen for \"professor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/prəˈfɛsər/"
},
{
"w": "associate professor",
"m": "副教授",
"x": "Listen for \"associate professor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈsoʊʃiˌeɪt prəˈfɛsər/"
},
{
"w": "assistant professor",
"m": "助理教授",
"x": "Listen for \"assistant professor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈsɪstənt prəˈfɛsər/"
},
{
"w": "research assistant",
"m": "研究助理",
"x": "Listen for \"research assistant\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈrisərʧ əˈsɪstənt/"
},
{
"w": "helper",
"m": "辅导人员",
"x": "Listen for \"helper\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈhɛlpər/"
},
{
"w": "dean",
"m": "（大学学院）院长，教务主任",
"x": "Listen for \"dean\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/din/"
},
{
"w": "principal",
"m": "（中学）校长",
"x": "Listen for \"principal\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈprɪnsəpəl/"
},
{
"w": "consultant",
"m": "顾问",
"x": "Listen for \"consultant\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kənˈsəltənt/"
},
{
"w": "advisor/adviser",
"m": "顾问",
"x": "Listen for \"advisor/adviser\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "guest speaker",
"m": "嘉宾讲话者",
"x": "Listen for \"guest speaker\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/gɛst ˈspikər/"
},
{
"w": "dorm-mate",
"m": "合住宿舍的人",
"x": "Listen for \"dorm-mate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "roommate",
"m": "室友",
"x": "Listen for \"roommate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈruˌmeɪt/"
},
{
"w": "housemate",
"m": "合租房子的人",
"x": "Listen for \"housemate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "classmate",
"m": "同学",
"x": "Listen for \"classmate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈklæsˌmeɪt/"
},
{
"w": "schoolmate",
"m": "校友",
"x": "Listen for \"schoolmate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈskulˌmeɪt/"
},
{
"w": "team mate",
"m": "队友",
"x": "Listen for \"team mate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/tim meɪt/"
},
{
"w": "floor senior",
"m": "宿舍楼层管理员",
"x": "Listen for \"floor senior\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/flɔr ˈsinjər/"
},
{
"w": "floor coordinator",
"m": "宿舍楼层协调员",
"x": "Listen for \"floor coordinator\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/flɔr koʊˈɔrdəˌneɪtər/"
},
{
"w": "dorm president",
"m": "宿舍管理员",
"x": "Listen for \"dorm president\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/dɔrm ˈprɛzɪdənt/"
},
{
"w": "orientation talk",
"m": "迎新讲座",
"x": "Listen for \"orientation talk\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɔriɛnˈteɪʃən tɔk/"
},
{
"w": "health issue",
"m": "健康问题",
"x": "Listen for \"health issue\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/hɛlθ ˈɪʃu/"
},
{
"w": "study matters",
"m": "学习问题",
"x": "Listen for \"study matters\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈstədi ˈmætərz/"
},
{
"w": "dietary problem",
"m": "饮食问题",
"x": "Listen for \"dietary problem\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈdaɪəˌtɛri ˈprɑbləm/"
},
{
"w": "notice",
"m": "通知",
"x": "Listen for \"notice\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈnoʊtɪs/"
},
{
"w": "handbook",
"m": "资料手册",
"x": "Listen for \"handbook\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈhændˌbʊk/"
},
{
"w": "prospectus",
"m": "（学校的）简章，简介",
"x": "Listen for \"prospectus\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/prəˈspɛktəs/"
},
{
"w": "information package",
"m": "信息包",
"x": "Listen for \"information package\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɪnˌfɔrˈmeɪʃən ˈpækɪʤ/"
},
{
"w": "welcome package",
"m": "学生宿舍里桌上摆放的信息包",
"x": "Listen for \"welcome package\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈwɛlkəm ˈpækɪʤ/"
},
{
"w": "folder",
"m": "文件夹",
"x": "Listen for \"folder\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈfoʊldər/"
},
{
"w": "campus",
"m": "校园",
"x": "Listen for \"campus\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈkæmpəs/"
},
{
"w": "lecture theatre",
"m": "大教室，阶梯教室",
"x": "Listen for \"lecture theatre\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈlɛkʧər ˈθiətər/"
},
{
"w": "administrating office",
"m": "行政办公室",
"x": "Listen for \"administrating office\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ədˈmɪnɪˌstreɪtɪŋ ˈɔfəs/"
},
{
"w": "laboratory/lab",
"m": "实验室",
"x": "Listen for \"laboratory/lab\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "art studio",
"m": "艺术中心",
"x": "Listen for \"art studio\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ɑrt ˈstudiˌoʊ/"
},
{
"w": "student union",
"m": "学生会",
"x": "Listen for \"student union\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈstudənt ˈjunjən/"
},
{
"w": "language centre",
"m": "语言中心",
"x": "Listen for \"language centre\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈlæŋgwɪʤ ˈsɛntər/"
},
{
"w": "computer lab",
"m": "计算机实验室",
"x": "Listen for \"computer lab\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kəmˈpjutər læb/"
},
{
"w": "main hall",
"m": "大礼堂",
"x": "Listen for \"main hall\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/meɪn hɔl/"
},
{
"w": "lecture room",
"m": "报告厅",
"x": "Listen for \"lecture room\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈlɛkʧər rum/"
},
{
"w": "conference centre",
"m": "会议中心",
"x": "Listen for \"conference centre\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈkɑnfərəns ˈsɛntər/"
},
{
"w": "academic conference hall",
"m": "学术会议厅",
"x": "Listen for \"academic conference hall\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌækəˈdɛmɪk ˈkɑnfərəns hɔl/"
},
{
"w": "living quarters",
"m": "宿舍区",
"x": "Listen for \"living quarters\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈlɪvɪŋ kˈwɔrtərz/"
},
{
"w": "student accommodation",
"m": "学生宿舍",
"x": "Listen for \"student accommodation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈstudənt əˌkɑməˈdeɪʃən/"
},
{
"w": "sports facilities",
"m": "运动设施",
"x": "Listen for \"sports facilities\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/spɔrts fəˈsɪlɪtiz/"
},
{
"w": "entertainment centre",
"m": "娱乐活动中心",
"x": "Listen for \"entertainment centre\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɛnərˈteɪnmənt ˈsɛntər/"
},
{
"w": "campus theatre",
"m": "校园剧院",
"x": "Listen for \"campus theatre\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈkæmpəs ˈθiətər/"
},
{
"w": "squash courts",
"m": "壁球馆",
"x": "Listen for \"squash courts\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/skwɑʃ kɔrts/"
},
{
"w": "tennis courts",
"m": "网球馆",
"x": "Listen for \"tennis courts\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈtɛnɪs kɔrts/"
},
{
"w": "dance studio",
"m": "舞蹈中心",
"x": "Listen for \"dance studio\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/dæns ˈstudiˌoʊ/"
},
{
"w": "leisure centre",
"m": "休闲中心",
"x": "Listen for \"leisure centre\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈlɛʒər ˈsɛntər/"
},
{
"w": "parking metre",
"m": "停车计价器",
"x": "Listen for \"parking metre\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpɑrkɪŋ ˈmitər/"
},
{
"w": "student bank",
"m": "学生银行",
"x": "Listen for \"student bank\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈstudənt bæŋk/"
},
{
"w": "school square",
"m": "学校广场",
"x": "Listen for \"school square\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/skul skwɛr/"
},
{
"w": "storeroom",
"m": "储物室",
"x": "Listen for \"storeroom\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈstɔˌrrum/"
},
{
"w": "parking regulations",
"m": "停车规定",
"x": "Listen for \"parking regulations\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpɑrkɪŋ ˌrɛgjəˈleɪʃənz/"
},
{
"w": "fitness room",
"m": "健身中心",
"x": "Listen for \"fitness room\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈfɪtnəs rum/"
},
{
"w": "paper shop",
"m": "文具店",
"x": "Listen for \"paper shop\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpeɪpər ʃɑp/"
},
{
"w": "stationery",
"m": "文具",
"x": "Listen for \"stationery\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈsteɪʃəˌnɛri/"
},
{
"w": "refectory",
"m": "食堂",
"x": "Listen for \"refectory\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "black coffee",
"m": "黑咖啡",
"x": "Listen for \"black coffee\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/blæk ˈkɔfi/"
},
{
"w": "white coffee",
"m": "加牛奶的咖啡",
"x": "Listen for \"white coffee\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/waɪt ˈkɔfi/"
},
{
"w": "flavor",
"m": "味道",
"x": "Listen for \"flavor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈfleɪvər/"
},
{
"w": "aromatizer",
"m": "香料",
"x": "Listen for \"aromatizer\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "coffee pot",
"m": "咖啡壶",
"x": "Listen for \"coffee pot\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈkɔfi pɑt/"
},
{
"w": "caffeine",
"m": "咖啡因",
"x": "Listen for \"caffeine\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kæˈfin/"
},
{
"w": "dairy",
"m": "奶制品",
"x": "Listen for \"dairy\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈdɛri/"
},
{
"w": "liquor",
"m": "烈性酒",
"x": "Listen for \"liquor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈlɪkər/"
},
{
"w": "alcoholic",
"m": "含酒精的",
"x": "Listen for \"alcoholic\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌælkəˈhɑlɪk/"
},
{
"w": "doughnut",
"m": "面包圈",
"x": "Listen for \"doughnut\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈdoʊˌnət/"
},
{
"w": "toast",
"m": "吐司",
"x": "Listen for \"toast\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/toʊst/"
},
{
"w": "pastry",
"m": "糕点，面点",
"x": "Listen for \"pastry\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpeɪstri/"
},
{
"w": "salad",
"m": "沙拉",
"x": "Listen for \"salad\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈsæləd/"
},
{
"w": "sea food",
"m": "海鲜",
"x": "Listen for \"sea food\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/si fud/"
},
{
"w": "calorie",
"m": "卡路里",
"x": "Listen for \"calorie\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈkælɔˌri/"
},
{
"w": "convenience food",
"m": "方便食品",
"x": "Listen for \"convenience food\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kənˈvinjəns fud/"
},
{
"w": "malnourished",
"m": "缺营养的",
"x": "Listen for \"malnourished\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/mælˈnərɪʃt/"
},
{
"w": "sour",
"m": "酸的",
"x": "Listen for \"sour\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/saʊər/"
},
{
"w": "sweet",
"m": "甜的",
"x": "Listen for \"sweet\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/swit/"
},
{
"w": "bitter",
"m": "苦的",
"x": "Listen for \"bitter\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈbɪtər/"
},
{
"w": "spicy",
"m": "辣的",
"x": "Listen for \"spicy\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈspaɪsi/"
},
{
"w": "canned",
"m": "罐装的",
"x": "Listen for \"canned\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kænd/"
},
{
"w": "cuisine",
"m": "菜肴",
"x": "Listen for \"cuisine\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kwɪˈzin/"
},
{
"w": "recipe",
"m": "食谱",
"x": "Listen for \"recipe\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈrɛsəpi/"
},
{
"w": "bakery",
"m": "面包房",
"x": "Listen for \"bakery\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈbeɪkəri/"
},
{
"w": "snack",
"m": "零食",
"x": "Listen for \"snack\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/snæk/"
},
{
"w": "refreshment",
"m": "茶点",
"x": "Listen for \"refreshment\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/rəˈfrɛʃmənt/"
},
{
"w": "speciality",
"m": "特色菜",
"x": "Listen for \"speciality\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌspɛʃiˈælɪti/"
},
{
"w": "drama",
"m": "戏剧",
"x": "Listen for \"drama\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈdrɑmə/"
},
{
"w": "outdoor sports",
"m": "户外运动",
"x": "Listen for \"outdoor sports\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈaʊtˌdɔr spɔrts/"
},
{
"w": "martial arts",
"m": "武术",
"x": "Listen for \"martial arts\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈmɑrʃəl ɑrts/"
},
{
"w": "aerobics",
"m": "有氧操",
"x": "Listen for \"aerobics\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ərˈoʊbɪks/"
},
{
"w": "ballet",
"m": "芭蕾",
"x": "Listen for \"ballet\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/bæˈleɪ/"
},
{
"w": "yoga",
"m": "瑜伽",
"x": "Listen for \"yoga\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈjoʊgə/"
},
{
"w": "judo",
"m": "柔道",
"x": "Listen for \"judo\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈʤuˌdoʊ/"
},
{
"w": "club",
"m": "学生俱乐部",
"x": "Listen for \"club\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kləb/"
},
{
"w": "society",
"m": "学生社团",
"x": "Listen for \"society\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/soʊˈsaɪɪti/"
},
{
"w": "basic framework",
"m": "基本框架",
"x": "Listen for \"basic framework\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈbeɪsɪk ˈfreɪmˌwərk/"
},
{
"w": "efficiency in school management",
"m": "校园管理效率",
"x": "Listen for \"efficiency in school management\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ɪˈfɪʃənsi ɪn skul ˈmænɪʤmənt/"
},
{
"w": "input in education",
"m": "教育投入",
"x": "Listen for \"input in education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɪnˌpʊt ɪn ˌɛʤəˈkeɪʃən/"
},
{
"w": "optimize the teaching staff",
"m": "优化教师队伍",
"x": "Listen for \"optimize the teaching staff\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɑptɪˌmaɪz ðə ˈtiʧɪŋ stæf/"
},
{
"w": "practice regional planning",
"m": "实行分区规划",
"x": "Listen for \"practice regional planning\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpræktɪs ˈriʤənəl ˈplænɪŋ/"
},
{
"w": "communal participation",
"m": "社会参与",
"x": "Listen for \"communal participation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kəmˈjunəl pɑrˌtɪsəˈpeɪʃən/"
},
{
"w": "incoming labor force",
"m": "新增劳动力",
"x": "Listen for \"incoming labor force\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɪnˌkəmɪŋ ˈleɪbər fɔrs/"
},
{
"w": "pre-service education",
"m": "职前教育",
"x": "Listen for \"pre-service education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "job-specific training",
"m": "岗位培训",
"x": "Listen for \"job-specific training\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "professional ethics",
"m": "职业道德",
"x": "Listen for \"professional ethics\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/prəˈfɛʃənəl ˈɛθɪks/"
},
{
"w": "key disciplinary areas or priority fields of study",
"m": "重点学科或优先研究领域",
"x": "Listen for \"key disciplinary areas or priority fields of study\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "literacy class",
"m": "扫盲班",
"x": "Listen for \"literacy class\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈlɪtərəsi klæs/"
},
{
"w": "enrollment",
"m": "注册人数",
"x": "Listen for \"enrollment\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ɛnˈroʊlmənt/"
},
{
"w": "age bracket",
"m": "年龄段",
"x": "Listen for \"age bracket\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/eɪʤ ˈbrækɪt/"
},
{
"w": "inculcate",
"m": "反复灌输",
"x": "Listen for \"inculcate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɪŋkəlˌkeɪt/"
},
{
"w": "Project Hope",
"m": "希望工程",
"x": "Listen for \"Project Hope\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈprɑʤɛkt hoʊp/"
},
{
"w": "school-ager",
"m": "学龄儿童",
"x": "Listen for \"school-ager\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "exhaustion of human resources",
"m": "人才枯竭",
"x": "Listen for \"exhaustion of human resources\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ɪgˈzɔsʧən əv ˈjumən ˈrisɔrsɪz/"
},
{
"w": "school dropout/leaver",
"m": "失学青少年",
"x": "Listen for \"school dropout/leaver\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "foundation",
"m": "基金会",
"x": "Listen for \"foundation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/faʊnˈdeɪʃən/"
},
{
"w": "service trade",
"m": "服务性行业",
"x": "Listen for \"service trade\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈsərvɪs treɪd/"
},
{
"w": "on-the-job/in-service training",
"m": "在职培训",
"x": "Listen for \"on-the-job/in-service training\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "International Labor Organization",
"m": "国际劳工组织",
"x": "Listen for \"International Labor Organization\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɪnərˈnæʃənɑl ˈleɪbər ˌɔrgənəˈzeɪʃən/"
},
{
"w": "the fundamentals",
"m": "基础科学",
"x": "Listen for \"the fundamentals\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ðə ˌfəndəˈmɛnəlz/"
},
{
"w": "the credit system",
"m": "学分制",
"x": "Listen for \"the credit system\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ðə ˈkrɛdɪt ˈsɪstəm/"
},
{
"w": "the trimester system",
"m": "三学期制",
"x": "Listen for \"the trimester system\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ðə traɪˈmɛstər ˈsɪstəm/"
},
{
"w": "a double BA degree system",
"m": "双文学学士制",
"x": "Listen for \"a double BA degree system\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ə ˈdəbəl ˌbiˈeɪ dɪˈgri ˈsɪstəm/"
},
{
"w": "demonstration pilot project",
"m": "示范试点",
"x": "Listen for \"demonstration pilot project\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌdɛmənˈstreɪʃən ˈpaɪlət ˈprɑʤɛkt/"
},
{
"w": "incorporate",
"m": "结合，使并入",
"x": "Listen for \"incorporate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɪnˈkɔrpərˌeɪt/"
},
{
"w": "mobilize",
"m": "动员",
"x": "Listen for \"mobilize\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈmoʊbəˌlaɪz/"
},
{
"w": "tax revenue",
"m": "税收",
"x": "Listen for \"tax revenue\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/tæks ˈrɛvəˌnu/"
},
{
"w": "multi-disciplinary",
"m": "多学科的",
"x": "Listen for \"multi-disciplinary\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "key university",
"m": "重点大学",
"x": "Listen for \"key university\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ki ˌjunəˈvərsəti/"
},
{
"w": "confer",
"m": "授予（学位等）",
"x": "Listen for \"confer\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kənˈfər/"
},
{
"w": "centre for post-doctoral studies",
"m": "博士后科研流动站",
"x": "Listen for \"centre for post-doctoral studies\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "patriotic personage",
"m": "爱国人士",
"x": "Listen for \"patriotic personage\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "National Invention Prize",
"m": "国家发明奖",
"x": "Listen for \"National Invention Prize\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈnæʃənəl ˌɪnˈvɛnʃən praɪz/"
},
{
"w": "financial allocation",
"m": "财政拨款",
"x": "Listen for \"financial allocation\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌfaɪˈnænʃəl ˌæləˈkeɪʃən/"
},
{
"w": "semiliterate/functional illiterate",
"m": "半文盲",
"x": "Listen for \"semiliterate/functional illiterate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "full-time teacher",
"m": "专职教师",
"x": "Listen for \"full-time teacher\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈfʊlˌtaɪm ˈtiʧər/"
},
{
"w": "data centre",
"m": "资料中心",
"x": "Listen for \"data centre\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈdætə ˈsɛntər/"
},
{
"w": "universal education",
"m": "普及教育",
"x": "Listen for \"universal education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌjunəˈvərsəl ˌɛʤəˈkeɪʃən/"
},
{
"w": "compulsory education",
"m": "义务教育",
"x": "Listen for \"compulsory education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kəmˈpəlsəri ˌɛʤəˈkeɪʃən/"
},
{
"w": "free education",
"m": "免费教育",
"x": "Listen for \"free education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/fri ˌɛʤəˈkeɪʃən/"
},
{
"w": "preschool education",
"m": "学前教育",
"x": "Listen for \"preschool education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpriˌskul ˌɛʤəˈkeɪʃən/"
},
{
"w": "elementary education",
"m": "初等教育",
"x": "Listen for \"elementary education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɛləˈmɛnʧri ˌɛʤəˈkeɪʃən/"
},
{
"w": "secondary education",
"m": "中等教育",
"x": "Listen for \"secondary education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈsɛkənˌdɛri ˌɛʤəˈkeɪʃən/"
},
{
"w": "higher/tertiary education",
"m": "高等教育",
"x": "Listen for \"higher/tertiary education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "general education",
"m": "普遍教育",
"x": "Listen for \"general education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈʤɛnərəl ˌɛʤəˈkeɪʃən/"
},
{
"w": "adult education",
"m": "成人教育",
"x": "Listen for \"adult education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈædəlt ˌɛʤəˈkeɪʃən/"
},
{
"w": "institution of higher education",
"m": "高等学校",
"x": "Listen for \"institution of higher education\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌɪnstɪˈtuʃən əv haɪər ˌɛʤəˈkeɪʃən/"
},
{
"w": "comprehensive university",
"m": "综合性大学",
"x": "Listen for \"comprehensive university\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌkɑmpriˈhɛnsɪv ˌjunəˈvərsəti/"
},
{
"w": "university of liberal arts",
"m": "文科大学",
"x": "Listen for \"university of liberal arts\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌjunəˈvərsəti əv ˈlɪˌbərəl ɑrts/"
},
{
"w": "colleges of art",
"m": "文科院校",
"x": "Listen for \"colleges of art\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈkɑlɪʤɪz əv ɑrt/"
},
{
"w": "normal/teachers' university",
"m": "师范大学",
"x": "Listen for \"normal/teachers' university\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "teachers' college",
"m": "师范学院",
"x": "Listen for \"teachers' college\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈtiʧərz' ˈkɑlɪʤ/"
},
{
"w": "polytechnic university",
"m": "理工大学",
"x": "Listen for \"polytechnic university\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌpɑˌliˈtɛknɪk ˌjunəˈvərsəti/"
},
{
"w": "engineering institute",
"m": "工学院",
"x": "Listen for \"engineering institute\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɛnʤəˈnɪrɪŋ ˈɪnstɪˌtut/"
},
{
"w": "agricultural university",
"m": "农业大学",
"x": "Listen for \"agricultural university\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌægrɪˈkəlʧərəl ˌjunəˈvərsəti/"
},
{
"w": "agricultural college",
"m": "农学院",
"x": "Listen for \"agricultural college\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌægrɪˈkəlʧərəl ˈkɑlɪʤ/"
},
{
"w": "medical university",
"m": "医科大学",
"x": "Listen for \"medical university\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈmɛdɪkəl ˌjunəˈvərsəti/"
},
{
"w": "medical college/school",
"m": "医学院",
"x": "Listen for \"medical college/school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "institute of traditional Chinese medicine",
"m": "中医学院",
"x": "Listen for \"institute of traditional Chinese medicine\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "conservatory of music",
"m": "音乐学院",
"x": "Listen for \"conservatory of music\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/kənˈsərvətɔri əv mˈjuzɪk/"
},
{
"w": "academy of fine arts",
"m": "美术学院",
"x": "Listen for \"academy of fine arts\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈkædəmi əv faɪn ɑrts/"
},
{
"w": "physical culture institute",
"m": "体育学院",
"x": "Listen for \"physical culture institute\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈfɪzɪkəl ˈkəlʧər ˈɪnstɪˌtut/"
},
{
"w": "branch school",
"m": "分校",
"x": "Listen for \"branch school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/brænʧ skul/"
},
{
"w": "key school",
"m": "重点学校",
"x": "Listen for \"key school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ki skul/"
},
{
"w": "spare-time school",
"m": "业余学校",
"x": "Listen for \"spare-time school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "correspondence school",
"m": "函授学院",
"x": "Listen for \"correspondence school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌkɔrəˈspɑndəns skul/"
},
{
"w": "night school for adults",
"m": "成人夜校",
"x": "Listen for \"night school for adults\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/naɪt skul fər ˈædəlts/"
},
{
"w": "part-work and part-study school",
"m": "半工半读学校",
"x": "Listen for \"part-work and part-study school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "vocational school",
"m": "职业学校",
"x": "Listen for \"vocational school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/voʊˈkeɪʃənəl skul/"
},
{
"w": "attached middle school",
"m": "附中",
"x": "Listen for \"attached middle school\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈtæʧt ˈmɪdəl skul/"
},
{
"w": "in-service training course",
"m": "在职进修班",
"x": "Listen for \"in-service training course\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "class for advanced studies",
"m": "进修班",
"x": "Listen for \"class for advanced studies\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/klæs fər ədˈvænst ˈstədiz/"
},
{
"w": "short-term training course",
"m": "短训班",
"x": "Listen for \"short-term training course\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˌʃɔrtˈtərm ˈtreɪnɪŋ kɔrs/"
},
{
"w": "self-taught examination",
"m": "自学考试",
"x": "Listen for \"self-taught examination\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "teaching and administrative staff",
"m": "教职员工",
"x": "Listen for \"teaching and administrative staff\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈtiʧɪŋ ənd ədˈmɪnɪˌstreɪtɪv stæf/"
},
{
"w": "faculty/teaching staff",
"m": "教学人员",
"x": "Listen for \"faculty/teaching staff\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "president/chancellor",
"m": "校长",
"x": "Listen for \"president/chancellor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "dean of studies",
"m": "教务长",
"x": "Listen for \"dean of studies\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/din əv ˈstədiz/"
},
{
"w": "chairperson",
"m": "主席",
"x": "Listen for \"chairperson\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈʧɛrˌpərsən/"
},
{
"w": "vice-chairman",
"m": "副主席",
"x": "Listen for \"vice-chairman\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "visiting professor",
"m": "客座教授",
"x": "Listen for \"visiting professor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈvɪzɪtɪŋ prəˈfɛsər/"
},
{
"w": "guest professor",
"m": "客座教授",
"x": "Listen for \"guest professor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/gɛst prəˈfɛsər/"
},
{
"w": "assistant",
"m": "助教",
"x": "Listen for \"assistant\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/əˈsɪstənt/"
},
{
"w": "part-time teacher",
"m": "兼职教师",
"x": "Listen for \"part-time teacher\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpɑrtˈtaɪm ˈtiʧər/"
},
{
"w": "teaching group",
"m": "教学组",
"x": "Listen for \"teaching group\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈtiʧɪŋ grup/"
},
{
"w": "Alma Mater",
"m": "母校",
"x": "Listen for \"Alma Mater\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɑlmə ˈmɑtər/"
},
{
"w": "alumnus/alumni",
"m": "（男）校友",
"x": "Listen for \"alumnus/alumni\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "alumna/alumnae",
"m": "（女）校友",
"x": "Listen for \"alumna/alumnae\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "students' union/association",
"m": "学生会",
"x": "Listen for \"students' union/association\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies"
},
{
"w": "non-resident student",
"m": "走读生",
"x": "Listen for \"non-resident student\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/nɑnˈrɛzədənt ˈstudənt/"
},
{
"w": "boarder",
"m": "住校生",
"x": "Listen for \"boarder\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈbɔrdər/"
},
{
"w": "auditor",
"m": "旁听生",
"x": "Listen for \"auditor\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈɔdɪtər/"
},
{
"w": "graduate student",
"m": "研究生，毕业生",
"x": "Listen for \"graduate student\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈgræʤəˌweɪt ˈstudənt/"
},
{
"w": "graduating student",
"m": "应届毕业生",
"x": "Listen for \"graduating student\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈgræʤəˌweɪtɪŋ ˈstudənt/"
},
{
"w": "this year's graduate",
"m": "应届毕业生",
"x": "Listen for \"this year's graduate\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ðɪs jɪrz ˈgræʤəˌweɪt/"
},
{
"w": "pupil",
"m": "小学生",
"x": "Listen for \"pupil\" in this scene.",
"c": "雅思听力场景词汇: 课业及活动 Studies",
"ipa": "/ˈpjupəl/"
},
{
"w": "student banking",
"m": "学生金融服务",
"x": "Listen for \"student banking\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈstudənt ˈbæŋkɪŋ/"
},
{
"w": "campus banking service",
"m": "校园银行服务",
"x": "Listen for \"campus banking service\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈkæmpəs ˈbæŋkɪŋ ˈsərvɪs/"
},
{
"w": "automatic teller machine",
"m": "自动取款机",
"x": "Listen for \"automatic teller machine\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˌɔtəˈmætɪk ˈtɛlər məˈʃin/"
},
{
"w": "exchange rate",
"m": "汇率",
"x": "Listen for \"exchange rate\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ɪksˈʧeɪnʤ reɪt/"
},
{
"w": "open an account",
"m": "开户",
"x": "Listen for \"open an account\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈoʊpən ən əˈkaʊnt/"
},
{
"w": "joint account",
"m": "联名账户",
"x": "Listen for \"joint account\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ʤɔɪnt əˈkaʊnt/"
},
{
"w": "separate account",
"m": "独立账户",
"x": "Listen for \"separate account\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈsɛpərˌeɪt əˈkaʊnt/"
},
{
"w": "saving account",
"m": "储蓄账户",
"x": "Listen for \"saving account\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈseɪvɪŋ əˈkaʊnt/"
},
{
"w": "cash account",
"m": "现金账户",
"x": "Listen for \"cash account\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/kæʃ əˈkaʊnt/"
},
{
"w": "interest free",
"m": "免息",
"x": "Listen for \"interest free\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈɪntəˌrɛst fri/"
},
{
"w": "financial",
"m": "财务的",
"x": "Listen for \"financial\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˌfaɪˈnænʃəl/"
},
{
"w": "grant",
"m": "助学金，补助金",
"x": "Listen for \"grant\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/grænt/"
},
{
"w": "no-interest loan",
"m": "免息贷款",
"x": "Listen for \"no-interest loan\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking"
},
{
"w": "childcare",
"m": "儿童看护",
"x": "Listen for \"childcare\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈʧaɪldˌkɛr/"
},
{
"w": "healthcare",
"m": "医疗保健",
"x": "Listen for \"healthcare\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈhɛlθˌkɛr/"
},
{
"w": "nursing",
"m": "护理",
"x": "Listen for \"nursing\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈnərsɪŋ/"
},
{
"w": "outings",
"m": "外出旅行",
"x": "Listen for \"outings\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈaʊtɪŋz/"
},
{
"w": "provide evidence",
"m": "提供证明",
"x": "Listen for \"provide evidence\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/prəˈvaɪd ˈɛvədəns/"
},
{
"w": "individual circumstances",
"m": "个人情况",
"x": "Listen for \"individual circumstances\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˌɪndəˈvɪʤəwəl ˈsərkəmˌstænsɪz/"
},
{
"w": "financial circumstances",
"m": "财务状况",
"x": "Listen for \"financial circumstances\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˌfaɪˈnænʃəl ˈsərkəmˌstænsɪz/"
},
{
"w": "documentation",
"m": "证明文件",
"x": "Listen for \"documentation\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˌdɑkjəmɛnˈteɪʃən/"
},
{
"w": "signature",
"m": "签名",
"x": "Listen for \"signature\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈsɪgnəʧər/"
},
{
"w": "cash card",
"m": "现金卡",
"x": "Listen for \"cash card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/kæʃ kɑrd/"
},
{
"w": "placement test",
"m": "入学分级测试",
"x": "Listen for \"placement test\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈpleɪsmənt tɛst/"
},
{
"w": "tuition",
"m": "学费",
"x": "Listen for \"tuition\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/tjuˈɪʃən/"
},
{
"w": "issuing bank",
"m": "发卡银行",
"x": "Listen for \"issuing bank\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈɪʃuɪŋ bæŋk/"
},
{
"w": "annual fee",
"m": "年费",
"x": "Listen for \"annual fee\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈænjuəl fi/"
},
{
"w": "credit line/limit",
"m": "信用额度",
"x": "Listen for \"credit line/limit\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking"
},
{
"w": "annual interest rate",
"m": "年利率",
"x": "Listen for \"annual interest rate\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈænjuəl ˈɪntəˌrɛst reɪt/"
},
{
"w": "monthly statement",
"m": "月结单",
"x": "Listen for \"monthly statement\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈmənθli ˈsteɪtmənt/"
},
{
"w": "balance transfer",
"m": "信用卡余额结转",
"x": "Listen for \"balance transfer\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈbæləns ˈtrænsfər/"
},
{
"w": "available credit line/limit",
"m": "可用信用额度",
"x": "Listen for \"available credit line/limit\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking"
},
{
"w": "point",
"m": "红利积分",
"x": "Listen for \"point\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/pɔɪnt/"
},
{
"w": "cash advance",
"m": "预借现金",
"x": "Listen for \"cash advance\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/kæʃ ədˈvæns/"
},
{
"w": "activate a card",
"m": "激活卡",
"x": "Listen for \"activate a card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈæktəˌveɪt ə kɑrd/"
},
{
"w": "reward program",
"m": "回馈方案",
"x": "Listen for \"reward program\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/rɪˈwɔrd ˈproʊˌgræm/"
},
{
"w": "affinity card",
"m": "慈善信用卡",
"x": "Listen for \"affinity card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/əˈfɪnɪti kɑrd/"
},
{
"w": "platinum card",
"m": "白金卡",
"x": "Listen for \"platinum card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈplætənəm kɑrd/"
},
{
"w": "student card",
"m": "学生卡",
"x": "Listen for \"student card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈstudənt kɑrd/"
},
{
"w": "preferred card/gold card",
"m": "金卡",
"x": "Listen for \"preferred card/gold card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking"
},
{
"w": "value card",
"m": "储值卡",
"x": "Listen for \"value card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈvælju kɑrd/"
},
{
"w": "classic card",
"m": "普通卡",
"x": "Listen for \"classic card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈklæsɪk kɑrd/"
},
{
"w": "co-branded card",
"m": "联名卡",
"x": "Listen for \"co-branded card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking"
},
{
"w": "supplementary card",
"m": "附属卡",
"x": "Listen for \"supplementary card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˌsəpləˈmɛntəˌri kɑrd/"
},
{
"w": "debit card",
"m": "借记卡",
"x": "Listen for \"debit card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈdɛbɪt kɑrd/"
},
{
"w": "ATM card",
"m": "银行卡",
"x": "Listen for \"ATM card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈeɪˌtiˈɛm kɑrd/"
},
{
"w": "charge card",
"m": "签账卡",
"x": "Listen for \"charge card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ʧɑrʤ kɑrd/"
},
{
"w": "cash advance card",
"m": "现金卡",
"x": "Listen for \"cash advance card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/kæʃ ədˈvæns kɑrd/"
},
{
"w": "corporate card",
"m": "商务卡，公司卡",
"x": "Listen for \"corporate card\" in this scene.",
"c": "雅思听力场景词汇: 银行服务 Banking",
"ipa": "/ˈkɔrpərət kɑrd/"
},
{
"w": "course requirement",
"m": "课程要求",
"x": "Listen for \"course requirement\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/kɔrs rɪkˈwaɪrmənt/"
},
{
"w": "course description",
"m": "课程介绍",
"x": "Listen for \"course description\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/kɔrs dɪˈskrɪpʃən/"
},
{
"w": "compulsory course",
"m": "必修课",
"x": "Listen for \"compulsory course\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/kəmˈpəlsəri kɔrs/"
},
{
"w": "optional course",
"m": "选修课",
"x": "Listen for \"optional course\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈɔpʃənəl kɔrs/"
},
{
"w": "open class",
"m": "公开课",
"x": "Listen for \"open class\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈoʊpən klæs/"
},
{
"w": "curriculum",
"m": "课程表，全部课程",
"x": "Listen for \"curriculum\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/kərˈɪkjələm/"
},
{
"w": "a required course",
"m": "必修课",
"x": "Listen for \"a required course\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ə rikˈwaɪərd kɔrs/"
},
{
"w": "an elective course",
"m": "选修课",
"x": "Listen for \"an elective course\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ən ɪˈlɛktɪv kɔrs/"
},
{
"w": "basic course",
"m": "基础课",
"x": "Listen for \"basic course\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈbeɪsɪk kɔrs/"
},
{
"w": "specialized course",
"m": "专业课",
"x": "Listen for \"specialized course\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈspɛʃəˌlaɪzd kɔrs/"
},
{
"w": "school timetable",
"m": "课程表",
"x": "Listen for \"school timetable\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/skul ˈtaɪmˌteɪbəl/"
},
{
"w": "extra-curricular activity",
"m": "课外活动",
"x": "Listen for \"extra-curricular activity\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "instruction after class",
"m": "课外辅导",
"x": "Listen for \"instruction after class\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɪnˈstrəkʃən ˈæftər klæs/"
},
{
"w": "outside reading",
"m": "课外阅读",
"x": "Listen for \"outside reading\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈaʊtˈsaɪd ˈrɛdɪŋ/"
},
{
"w": "class discussion",
"m": "课堂讨论",
"x": "Listen for \"class discussion\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/klæs dɪˈskəʃən/"
},
{
"w": "teaching program",
"m": "教学计划",
"x": "Listen for \"teaching program\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈtiʧɪŋ ˈproʊˌgræm/"
},
{
"w": "syllabus",
"m": "教学大纲",
"x": "Listen for \"syllabus\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈsɪləbəs/"
},
{
"w": "content of courses",
"m": "教学内容",
"x": "Listen for \"content of courses\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈkɑntɛnt əv ˈkɔrsɪz/"
},
{
"w": "period of schooling",
"m": "学习年限",
"x": "Listen for \"period of schooling\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈpɪriəd əv ˈskulɪŋ/"
},
{
"w": "record of formal schooling",
"m": "学历",
"x": "Listen for \"record of formal schooling\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈrɛkərd əv ˈfɔrməl ˈskulɪŋ/"
},
{
"w": "school/academic year",
"m": "学年",
"x": "Listen for \"school/academic year\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "academic record",
"m": "学习成绩",
"x": "Listen for \"academic record\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌækəˈdɛmɪk ˈrɛkərd/"
},
{
"w": "school record",
"m": "学习成绩",
"x": "Listen for \"school record\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/skul ˈrɛkərd/"
},
{
"w": "school report",
"m": "成绩单",
"x": "Listen for \"school report\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/skul rɪˈpɔrt/"
},
{
"w": "report card",
"m": "成绩单",
"x": "Listen for \"report card\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/rɪˈpɔrt kɑrd/"
},
{
"w": "transcript",
"m": "成绩单",
"x": "Listen for \"transcript\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈtrænˌskrɪpt/"
},
{
"w": "graduation field work",
"m": "毕业实习",
"x": "Listen for \"graduation field work\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌgræʤəˈweɪʃən fild wərk/"
},
{
"w": "graduation ceremony",
"m": "毕业典礼",
"x": "Listen for \"graduation ceremony\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌgræʤəˈweɪʃən ˈsɛrəˌmoʊni/"
},
{
"w": "graduation certificate",
"m": "毕业证书",
"x": "Listen for \"graduation certificate\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌgræʤəˈweɪʃən sərˈtɪfɪkət/"
},
{
"w": "graduation appraisal",
"m": "毕业鉴定",
"x": "Listen for \"graduation appraisal\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌgræʤəˈweɪʃən əˈpreɪzəl/"
},
{
"w": "make-up examination",
"m": "补考",
"x": "Listen for \"make-up examination\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈmeɪˌkəp ɪgˌzæməˈneɪʃən/"
},
{
"w": "resit",
"m": "补考",
"x": "Listen for \"resit\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "grants",
"m": "助学金",
"x": "Listen for \"grants\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/grænts/"
},
{
"w": "monetary grants",
"m": "助学金",
"x": "Listen for \"monetary grants\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈmɑnəˌtɛri grænts/"
},
{
"w": "fellowship",
"m": "（研究生）奖学金",
"x": "Listen for \"fellowship\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈfɛloʊˌʃɪp/"
},
{
"w": "scholarship",
"m": "奖学金",
"x": "Listen for \"scholarship\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈskɑlərˌʃɪp/"
},
{
"w": "bursary",
"m": "（尤指大学的）奖学金",
"x": "Listen for \"bursary\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "stipend",
"m": "薪金",
"x": "Listen for \"stipend\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈstaɪpənd/"
},
{
"w": "subsidy",
"m": "补贴，补助金",
"x": "Listen for \"subsidy\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈsəbsɪdi/"
},
{
"w": "financial aid/assistance",
"m": "资助",
"x": "Listen for \"financial aid/assistance\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "a grant-aided student",
"m": "领取助学金的学生",
"x": "Listen for \"a grant-aided student\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "board expenses",
"m": "伙食费",
"x": "Listen for \"board expenses\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/bɔrd ɪkˈspɛnsɪz/"
},
{
"w": "food allowance",
"m": "伙食补助",
"x": "Listen for \"food allowance\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/fud əˈlaʊəns/"
},
{
"w": "living expenses",
"m": "生活费",
"x": "Listen for \"living expenses\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈlɪvɪŋ ɪkˈspɛnsɪz/"
},
{
"w": "incidental expenses",
"m": "学杂费",
"x": "Listen for \"incidental expenses\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɪnsɪˈdɛntəl ɪkˈspɛnsɪz/"
},
{
"w": "graduate",
"m": "研究生，毕业生",
"x": "Listen for \"graduate\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈgræʤəˌweɪt/"
},
{
"w": "bachelor",
"m": "学士",
"x": "Listen for \"bachelor\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈbæʧələr/"
},
{
"w": "associate bachelor",
"m": "专科生",
"x": "Listen for \"associate bachelor\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/əˈsoʊʃiˌeɪt ˈbæʧələr/"
},
{
"w": "master",
"m": "硕士",
"x": "Listen for \"master\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈmæstər/"
},
{
"w": "degree",
"m": "学位",
"x": "Listen for \"degree\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/dɪˈgri/"
},
{
"w": "dropout",
"m": "退学或退课的人",
"x": "Listen for \"dropout\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈdrɑˌpaʊt/"
},
{
"w": "freshman",
"m": "大学一年级新生",
"x": "Listen for \"freshman\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈfrɛʃmən/"
},
{
"w": "sophomore",
"m": "大学二年级学生",
"x": "Listen for \"sophomore\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈsɑfˌmɔr/"
},
{
"w": "junior",
"m": "大学三年级学生",
"x": "Listen for \"junior\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈʤunjər/"
},
{
"w": "underclassman",
"m": "大学一、二年级学生",
"x": "Listen for \"underclassman\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "upperclassman",
"m": "大学三、四年级学生",
"x": "Listen for \"upperclassman\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "fellow student",
"m": "同学，〈美〉领取奖学金的研究生",
"x": "Listen for \"fellow student\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈfɛloʊ ˈstudənt/"
},
{
"w": "peer adviser",
"m": "高年级学生顾问",
"x": "Listen for \"peer adviser\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/pɪr ædˈvaɪzər/"
},
{
"w": "student union officer",
"m": "学生会工作人员",
"x": "Listen for \"student union officer\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈstudənt ˈjunjən ˈɔfɪsər/"
},
{
"w": "president of student union",
"m": "学生会主席",
"x": "Listen for \"president of student union\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈprɛzɪdənt əv ˈstudənt ˈjunjən/"
},
{
"w": "vice-president of student union",
"m": "学生会副主席",
"x": "Listen for \"vice-president of student union\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈvaɪˈsprɛzədənt əv ˈstudənt ˈjunjən/"
},
{
"w": "play hooky",
"m": "逃学",
"x": "Listen for \"play hooky\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/pleɪ ˈhʊki/"
},
{
"w": "play truant",
"m": "逃学，旷课",
"x": "Listen for \"play truant\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/pleɪ truənt/"
},
{
"w": "academic dishonesty",
"m": "学术欺诈行为",
"x": "Listen for \"academic dishonesty\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌækəˈdɛmɪk dɪˈsɑnəsti/"
},
{
"w": "cheating",
"m": "考试作弊",
"x": "Listen for \"cheating\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈʧitɪŋ/"
},
{
"w": "double submission of papers",
"m": "论文重复使用",
"x": "Listen for \"double submission of papers\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈdəbəl səbˈmɪʃən əv ˈpeɪpərz/"
},
{
"w": "aiding and abetting dishonesty",
"m": "协助学术欺诈",
"x": "Listen for \"aiding and abetting dishonesty\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈeɪdɪŋ ənd əˈbɛtɪŋ dɪˈsɑnəsti/"
},
{
"w": "fabrication",
"m": "伪造成绩",
"x": "Listen for \"fabrication\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌfæbrɪˈkeɪʃən/"
},
{
"w": "falsification of records",
"m": "篡改成绩",
"x": "Listen for \"falsification of records\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌfælsəfəˈkeɪʃən əv ˈrɛkərdz/"
},
{
"w": "mid-term exam",
"m": "期中考试",
"x": "Listen for \"mid-term exam\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "final exam",
"m": "期末考试",
"x": "Listen for \"final exam\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈfaɪnəl ɪgˈzæm/"
},
{
"w": "open-book exam",
"m": "开卷考试",
"x": "Listen for \"open-book exam\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "subjective test",
"m": "主观性测试",
"x": "Listen for \"subjective test\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/səˈbʤɛktɪv tɛst/"
},
{
"w": "objective test",
"m": "客观性测试",
"x": "Listen for \"objective test\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/əˈbʤɛktɪv tɛst/"
},
{
"w": "pop quiz",
"m": "随堂测验，抽查式测试",
"x": "Listen for \"pop quiz\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/pɑp kwɪz/"
},
{
"w": "take notes",
"m": "记笔记",
"x": "Listen for \"take notes\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/teɪk noʊts/"
},
{
"w": "tutorial topics",
"m": "讨论题目",
"x": "Listen for \"tutorial topics\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/tuˈtɔriəl ˈtɑpɪks/"
},
{
"w": "duration of presentation",
"m": "报告持续时间",
"x": "Listen for \"duration of presentation\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈdʊˈreɪʃən əv ˌprɛzənˈteɪʃən/"
},
{
"w": "attendant",
"m": "出席者",
"x": "Listen for \"attendant\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/əˈtɛndənt/"
},
{
"w": "applicant",
"m": "申请者",
"x": "Listen for \"applicant\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈæplɪkənt/"
},
{
"w": "candidate",
"m": "申请者，攻读学位者",
"x": "Listen for \"candidate\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈkænədɪt/"
},
{
"w": "commercially grow",
"m": "商业性种植",
"x": "Listen for \"commercially grow\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/kəˈmərʃəli groʊ/"
},
{
"w": "informal",
"m": "非正式",
"x": "Listen for \"informal\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɪnˈfɔrməl/"
},
{
"w": "formal",
"m": "正式的",
"x": "Listen for \"formal\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈfɔrməl/"
},
{
"w": "choose your topic",
"m": "自选题目",
"x": "Listen for \"choose your topic\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ʧuz jʊr ˈtɑpɪk/"
},
{
"w": "draft",
"m": "草稿",
"x": "Listen for \"draft\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/dræft/"
},
{
"w": "technical subject",
"m": "技术课题",
"x": "Listen for \"technical subject\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈtɛknɪkəl ˈsəbʤɪkt/"
},
{
"w": "plan",
"m": "规划",
"x": "Listen for \"plan\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/plæn/"
},
{
"w": "module",
"m": "模块，组件",
"x": "Listen for \"module\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈmɑʤul/"
},
{
"w": "graphics",
"m": "图像",
"x": "Listen for \"graphics\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈgræfɪks/"
},
{
"w": "flow chart",
"m": "流程图",
"x": "Listen for \"flow chart\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/floʊ ʧɑrt/"
},
{
"w": "a brief account",
"m": "简要介绍",
"x": "Listen for \"a brief account\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ə brif əˈkaʊnt/"
},
{
"w": "a brief rundown",
"m": "概要",
"x": "Listen for \"a brief rundown\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ə brif ˈrənˌdaʊn/"
},
{
"w": "tutorial",
"m": "小组讨论作业",
"x": "Listen for \"tutorial\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/tuˈtɔriəl/"
},
{
"w": "photocopy",
"m": "复印件",
"x": "Listen for \"photocopy\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈfoʊtoʊˌkɑpi/"
},
{
"w": "research project",
"m": "研究题目",
"x": "Listen for \"research project\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈrisərʧ ˈprɑʤɛkt/"
},
{
"w": "tutorial paper",
"m": "研究论文",
"x": "Listen for \"tutorial paper\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/tuˈtɔriəl ˈpeɪpər/"
},
{
"w": "heavy load",
"m": "作业量多",
"x": "Listen for \"heavy load\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈhɛvi loʊd/"
},
{
"w": "big assignment",
"m": "重要作业",
"x": "Listen for \"big assignment\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/bɪg əˈsaɪnmənt/"
},
{
"w": "dateline/deadline",
"m": "截止日期",
"x": "Listen for \"dateline/deadline\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "hand in date",
"m": "按时交",
"x": "Listen for \"hand in date\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/hænd ɪn deɪt/"
},
{
"w": "review the draft",
"m": "检查初稿",
"x": "Listen for \"review the draft\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌrivˈju ðə dræft/"
},
{
"w": "submit",
"m": "上交（作业）",
"x": "Listen for \"submit\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/səbˈmɪt/"
},
{
"w": "turn in",
"m": "交（作业）",
"x": "Listen for \"turn in\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/tərn ɪn/"
},
{
"w": "word limit",
"m": "字数限制",
"x": "Listen for \"word limit\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/wərd ˈlɪmət/"
},
{
"w": "speak before class",
"m": "在课堂上发言",
"x": "Listen for \"speak before class\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/spik ˌbiˈfɔr klæs/"
},
{
"w": "label",
"m": "标记",
"x": "Listen for \"label\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈleɪbəl/"
},
{
"w": "information source",
"m": "信息来源",
"x": "Listen for \"information source\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɪnˌfɔrˈmeɪʃən sɔrs/"
},
{
"w": "rough picture",
"m": "草图",
"x": "Listen for \"rough picture\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/rəf ˈpɪkʧər/"
},
{
"w": "write up",
"m": "写作",
"x": "Listen for \"write up\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/raɪt əp/"
},
{
"w": "enroll",
"m": "注册",
"x": "Listen for \"enroll\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ɪnˈroʊl/"
},
{
"w": "exemption",
"m": "免修课",
"x": "Listen for \"exemption\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ɪgˈzɛmpʃən/"
},
{
"w": "theoretical",
"m": "理论的",
"x": "Listen for \"theoretical\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌθiərˈɛtɪkəl/"
},
{
"w": "read conclusion",
"m": "阅读结论",
"x": "Listen for \"read conclusion\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/rɛd kənˈkluʒən/"
},
{
"w": "small-scale study",
"m": "小范围的研究",
"x": "Listen for \"small-scale study\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "special features",
"m": "特色",
"x": "Listen for \"special features\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈspɛʃəl ˈfiʧərz/"
},
{
"w": "pose a question",
"m": "提出问题",
"x": "Listen for \"pose a question\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/poʊz ə kˈwɛʃən/"
},
{
"w": "meet lecturer",
"m": "见讲师",
"x": "Listen for \"meet lecturer\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/mit ˈlɛkʧərər/"
},
{
"w": "individual guidance",
"m": "单独辅导",
"x": "Listen for \"individual guidance\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɪndəˈvɪʤəwəl ˈgaɪdəns/"
},
{
"w": "limited value",
"m": "价值有限",
"x": "Listen for \"limited value\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈlɪmɪtɪd ˈvælju/"
},
{
"w": "due",
"m": "到期",
"x": "Listen for \"due\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/du/"
},
{
"w": "ask for extention",
"m": "请求延期",
"x": "Listen for \"ask for extention\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "general",
"m": "一般的",
"x": "Listen for \"general\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈʤɛnərəl/"
},
{
"w": "academic",
"m": "学术的",
"x": "Listen for \"academic\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌækəˈdɛmɪk/"
},
{
"w": "beginners' class",
"m": "初级班",
"x": "Listen for \"beginners' class\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/bɪˈgɪnərz' klæs/"
},
{
"w": "semester",
"m": "学期",
"x": "Listen for \"semester\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/səˈmɛstər/"
},
{
"w": "term",
"m": "学期",
"x": "Listen for \"term\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/tərm/"
},
{
"w": "credit hours",
"m": "学分课时",
"x": "Listen for \"credit hours\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈkrɛdɪt aʊərz/"
},
{
"w": "intermediate level",
"m": "中等水平",
"x": "Listen for \"intermediate level\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɪnərˈmidiɪt ˈlɛvəl/"
},
{
"w": "vantage",
"m": "中级",
"x": "Listen for \"vantage\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈvæntɪʤ/"
},
{
"w": "higher",
"m": "高级",
"x": "Listen for \"higher\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/haɪər/"
},
{
"w": "grammar",
"m": "语法",
"x": "Listen for \"grammar\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈgræmər/"
},
{
"w": "writing",
"m": "写作",
"x": "Listen for \"writing\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈraɪtɪŋ/"
},
{
"w": "Literature",
"m": "文学",
"x": "Listen for \"Literature\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈlɪtərəʧər/"
},
{
"w": "Physics",
"m": "物理学",
"x": "Listen for \"Physics\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈfɪzɪks/"
},
{
"w": "Mathematics",
"m": "数学",
"x": "Listen for \"Mathematics\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌmæθəˈmætɪks/"
},
{
"w": "Geography",
"m": "地理",
"x": "Listen for \"Geography\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ʤiˈɑgrəfi/"
},
{
"w": "Electronics",
"m": "电子学",
"x": "Listen for \"Electronics\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɪˌlɛkˈtrɑnɪks/"
},
{
"w": "Astronomy",
"m": "天文学",
"x": "Listen for \"Astronomy\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/əˈstrɑnəmi/"
},
{
"w": "Botany",
"m": "植物学",
"x": "Listen for \"Botany\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈbɑtəni/"
},
{
"w": "Zoology",
"m": "动物学",
"x": "Listen for \"Zoology\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/zoʊˈɑləʤi/"
},
{
"w": "Art",
"m": "艺术",
"x": "Listen for \"Art\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ɑrt/"
},
{
"w": "Sociology",
"m": "社会学",
"x": "Listen for \"Sociology\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌsoʊsiˈɑləʤi/"
},
{
"w": "Linguistics",
"m": "语言学",
"x": "Listen for \"Linguistics\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/lɪŋgˈwɪstɪks/"
},
{
"w": "Engineering",
"m": "工程学",
"x": "Listen for \"Engineering\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈɛnʤəˈnɪrɪŋ/"
},
{
"w": "Business",
"m": "商务",
"x": "Listen for \"Business\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈbɪznɪs/"
},
{
"w": "Law",
"m": "法学",
"x": "Listen for \"Law\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/lɔ/"
},
{
"w": "Accounting",
"m": "会计学",
"x": "Listen for \"Accounting\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/əˈkaʊnɪŋ/"
},
{
"w": "Banking",
"m": "银行学",
"x": "Listen for \"Banking\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈbæŋkɪŋ/"
},
{
"w": "Chemistry",
"m": "化学",
"x": "Listen for \"Chemistry\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈkɛmɪstri/"
},
{
"w": "Biochemistry",
"m": "生物化学",
"x": "Listen for \"Biochemistry\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌbaɪoʊˈkɛmɪˌstri/"
},
{
"w": "Oceanography",
"m": "海洋学",
"x": "Listen for \"Oceanography\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌoʊʃəˈnɑgrəfi/"
},
{
"w": "Ecology",
"m": "生态学",
"x": "Listen for \"Ecology\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ɪˈkɑləʤi/"
},
{
"w": "Medical Science",
"m": "医学",
"x": "Listen for \"Medical Science\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈmɛdɪkəl saɪəns/"
},
{
"w": "Archaeology",
"m": "考古学",
"x": "Listen for \"Archaeology\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɑrkiˈɑləʤi/"
},
{
"w": "glue",
"m": "胶水",
"x": "Listen for \"glue\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/glu/"
},
{
"w": "tape",
"m": "胶带",
"x": "Listen for \"tape\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/teɪp/"
},
{
"w": "battery",
"m": "电池",
"x": "Listen for \"battery\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈbætəri/"
},
{
"w": "electric",
"m": "电的",
"x": "Listen for \"electric\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ɪˈlɛktrɪk/"
},
{
"w": "clip",
"m": "回形针；夹子",
"x": "Listen for \"clip\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/klɪp/"
},
{
"w": "day school",
"m": "日托所",
"x": "Listen for \"day school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/deɪ skul/"
},
{
"w": "day nursery",
"m": "日托所",
"x": "Listen for \"day nursery\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/deɪ ˈnərsəri/"
},
{
"w": "preschool",
"m": "幼儿园，托儿所",
"x": "Listen for \"preschool\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈpriˌskul/"
},
{
"w": "kindergarten",
"m": "幼儿园，学前班",
"x": "Listen for \"kindergarten\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈkɪndərˌgɑrtən/"
},
{
"w": "primary school",
"m": "小学",
"x": "Listen for \"primary school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈpraɪˌmɛri skul/"
},
{
"w": "elementary school",
"m": "小学",
"x": "Listen for \"elementary school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌɛləˈmɛnʧri skul/"
},
{
"w": "grade school",
"m": "小学",
"x": "Listen for \"grade school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/greɪd skul/"
},
{
"w": "grammar school",
"m": "〈古〉小学",
"x": "Listen for \"grammar school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈgræmər skul/"
},
{
"w": "secondary school",
"m": "中学",
"x": "Listen for \"secondary school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈsɛkənˌdɛri skul/"
},
{
"w": "high school",
"m": "〈美〉中学",
"x": "Listen for \"high school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/haɪ skul/"
},
{
"w": "junior high school",
"m": "初中",
"x": "Listen for \"junior high school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈʤunjər haɪ skul/"
},
{
"w": "senior high school",
"m": "高中",
"x": "Listen for \"senior high school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈsinjər haɪ skul/"
},
{
"w": "public school",
"m": "公立学校",
"x": "Listen for \"public school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈpəblɪk skul/"
},
{
"w": "private school",
"m": "私立学校",
"x": "Listen for \"private school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈpraɪvət skul/"
},
{
"w": "technical school",
"m": "技校",
"x": "Listen for \"technical school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈtɛknɪkəl skul/"
},
{
"w": "boarding school",
"m": "寄宿制学校",
"x": "Listen for \"boarding school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈbɔrdɪŋ skul/"
},
{
"w": "night school",
"m": "夜校",
"x": "Listen for \"night school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/naɪt skul/"
},
{
"w": "adult school",
"m": "成人进修学校",
"x": "Listen for \"adult school\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈædəlt skul/"
},
{
"w": "college",
"m": "高等专科学校，〈英〉学院，〈美〉大学",
"x": "Listen for \"college\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈkɑlɪʤ/"
},
{
"w": "state college",
"m": "〈美〉政府资助的州立大学",
"x": "Listen for \"state college\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/steɪt ˈkɑlɪʤ/"
},
{
"w": "junior college",
"m": "两年制专科学校",
"x": "Listen for \"junior college\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈʤunjər ˈkɑlɪʤ/"
},
{
"w": "residential college",
"m": "寄宿制大学",
"x": "Listen for \"residential college\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌrɛzɪˈdɛnʃəl ˈkɑlɪʤ/"
},
{
"w": "community college",
"m": "社区大学",
"x": "Listen for \"community college\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/kəmˈjunɪti ˈkɑlɪʤ/"
},
{
"w": "land-grant college",
"m": "政府资助的低学费大学",
"x": "Listen for \"land-grant college\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "rural cooperative",
"m": "农村合办的",
"x": "Listen for \"rural cooperative\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈrʊrəl koʊˈɑpərˌeɪtɪv/"
},
{
"w": "pre-school education",
"m": "学前教育",
"x": "Listen for \"pre-school education\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "pre-elementary education",
"m": "学前教育",
"x": "Listen for \"pre-elementary education\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "primary education",
"m": "基础教育",
"x": "Listen for \"primary education\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈpraɪˌmɛri ˌɛʤəˈkeɪʃən/"
},
{
"w": "tertiary education",
"m": "高等教育",
"x": "Listen for \"tertiary education\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈtərʃəri ˌɛʤəˈkeɪʃən/"
},
{
"w": "higher education",
"m": "高等教育",
"x": "Listen for \"higher education\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/haɪər ˌɛʤəˈkeɪʃən/"
},
{
"w": "public education",
"m": "公立教育",
"x": "Listen for \"public education\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈpəblɪk ˌɛʤəˈkeɪʃən/"
},
{
"w": "private education",
"m": "私立教育",
"x": "Listen for \"private education\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈpraɪvət ˌɛʤəˈkeɪʃən/"
},
{
"w": "continuing education",
"m": "成人继续教育",
"x": "Listen for \"continuing education\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/kənˈtɪnjuɪŋ ˌɛʤəˈkeɪʃən/"
},
{
"w": "university",
"m": "综合性大学",
"x": "Listen for \"university\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˌjunəˈvərsəti/"
},
{
"w": "multiversity",
"m": "〈美〉巨型学院，多科性大学",
"x": "Listen for \"multiversity\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "rock salt",
"m": "岩盐，矿盐",
"x": "Listen for \"rock salt\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/rɑk sɔlt/"
},
{
"w": "can",
"m": "铝罐，易拉罐",
"x": "Listen for \"can\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/kən/"
},
{
"w": "hand drill",
"m": "手钻",
"x": "Listen for \"hand drill\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/hænd drɪl/"
},
{
"w": "nail",
"m": "钉子",
"x": "Listen for \"nail\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/neɪl/"
},
{
"w": "ounce",
"m": "盎司",
"x": "Listen for \"ounce\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/aʊns/"
},
{
"w": "lid",
"m": "盖子",
"x": "Listen for \"lid\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/lɪd/"
},
{
"w": "dome",
"m": "圆顶",
"x": "Listen for \"dome\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/doʊm/"
},
{
"w": "flange",
"m": "边缘",
"x": "Listen for \"flange\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/flænʤ/"
},
{
"w": "scored opening",
"m": "易拉罐开启处",
"x": "Listen for \"scored opening\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/skɔrd ˈoʊpənɪŋ/"
},
{
"w": "tab",
"m": "小拉环",
"x": "Listen for \"tab\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/tæb/"
},
{
"w": "seal",
"m": "封口",
"x": "Listen for \"seal\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/sil/"
},
{
"w": "edge",
"m": "边",
"x": "Listen for \"edge\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ɛʤ/"
},
{
"w": "grow hillside",
"m": "长在山坡上",
"x": "Listen for \"grow hillside\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/groʊ ˈhɪlˌsaɪd/"
},
{
"w": "grow uphill",
"m": "长在山坡上",
"x": "Listen for \"grow uphill\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/groʊ ˈəˈphɪl/"
},
{
"w": "ripe",
"m": "成熟",
"x": "Listen for \"ripe\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/raɪp/"
},
{
"w": "a jar of water",
"m": "一罐子水",
"x": "Listen for \"a jar of water\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ə ʤɑr əv ˈwɔtər/"
},
{
"w": "pin/needle",
"m": "大头针",
"x": "Listen for \"pin/needle\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures"
},
{
"w": "cardboard",
"m": "硬纸板",
"x": "Listen for \"cardboard\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈkɑrdˌbɔrd/"
},
{
"w": "coloured pens",
"m": "彩笔",
"x": "Listen for \"coloured pens\" in this scene.",
"c": "雅思听力场景词汇: 讲座讲课 Lectures",
"ipa": "/ˈkələrd pɛnz/"
},
{
"w": "nearby",
"m": "在…附近",
"x": "Listen for \"nearby\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈnɪrˈbaɪ/"
},
{
"w": "go straight across/through",
"m": "径直穿过",
"x": "Listen for \"go straight across/through\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "cross over",
"m": "通过",
"x": "Listen for \"cross over\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/krɔs ˈoʊvər/"
},
{
"w": "next to",
"m": "在…旁边",
"x": "Listen for \"next to\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/nɛkst tɪ/"
},
{
"w": "turn left/right",
"m": "向左/右转",
"x": "Listen for \"turn left/right\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "go up/down the street",
"m": "顺着这条街往前走",
"x": "Listen for \"go up/down the street\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "go back",
"m": "后退",
"x": "Listen for \"go back\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/goʊ bæk/"
},
{
"w": "go east/west/south/north",
"m": "向东/西/南/北走",
"x": "Listen for \"go east/west/south/north\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "on one's left/right",
"m": "在…左/右边",
"x": "Listen for \"on one's left/right\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "be the first/second from the left",
"m": "从左数第一/二个",
"x": "Listen for \"be the first/second from the left\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "directly opposite",
"m": "正对面的",
"x": "Listen for \"directly opposite\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/dɪˈrɛkli ˈɑpəzɪt/"
},
{
"w": "be located behind",
"m": "位于…后面",
"x": "Listen for \"be located behind\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/bi ˈloʊˌkeɪtəd bɪˈhaɪnd/"
},
{
"w": "be on the corner of A street and B street",
"m": "在A街B街相交的一角",
"x": "Listen for \"be on the corner of A street and B street\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "be in the corner of",
"m": "在…转角",
"x": "Listen for \"be in the corner of\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/bi ɪn ðə ˈkɔrnər əv/"
},
{
"w": "ground floor",
"m": "一楼",
"x": "Listen for \"ground floor\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/graʊnd flɔr/"
},
{
"w": "wing",
"m": "配楼",
"x": "Listen for \"wing\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/wɪŋ/"
},
{
"w": "twin building",
"m": "双子楼",
"x": "Listen for \"twin building\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/twɪn ˈbɪldɪŋ/"
},
{
"w": "stair",
"m": "楼梯",
"x": "Listen for \"stair\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/stɛr/"
},
{
"w": "step",
"m": "台阶",
"x": "Listen for \"step\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/stɛp/"
},
{
"w": "wheelchair access",
"m": "轮椅专用道",
"x": "Listen for \"wheelchair access\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈwiˌlʧɛr ˈækˌsɛs/"
},
{
"w": "intersection/crossroad",
"m": "十字路口",
"x": "Listen for \"intersection/crossroad\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "a fork on the road",
"m": "岔路口",
"x": "Listen for \"a fork on the road\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ə fɔrk ɔn ðə roʊd/"
},
{
"w": "a T-road",
"m": "丁字路口",
"x": "Listen for \"a T-road\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "clover-leaf junction",
"m": "立交桥",
"x": "Listen for \"clover-leaf junction\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "traffic regulation",
"m": "交通规则",
"x": "Listen for \"traffic regulation\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈtræfɪk ˌrɛgjəˈleɪʃən/"
},
{
"w": "guide post",
"m": "路标",
"x": "Listen for \"guide post\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/gaɪd poʊst/"
},
{
"w": "milestone",
"m": "里程碑",
"x": "Listen for \"milestone\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈmaɪlˌstoʊn/"
},
{
"w": "single line",
"m": "单行线",
"x": "Listen for \"single line\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈsɪŋgəl laɪn/"
},
{
"w": "double white lines",
"m": "双白线",
"x": "Listen for \"double white lines\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈdəbəl waɪt laɪnz/"
},
{
"w": "dual carriage-way",
"m": "双程线",
"x": "Listen for \"dual carriage-way\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "zebra stripes",
"m": "斑马线",
"x": "Listen for \"zebra stripes\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈzibrə straɪps/"
},
{
"w": "traffic line marker",
"m": "车道画线机",
"x": "Listen for \"traffic line marker\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈtræfɪk laɪn ˈmɑrkər/"
},
{
"w": "artery traffic",
"m": "交通干线",
"x": "Listen for \"artery traffic\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈɑrtəri ˈtræfɪk/"
},
{
"w": "carriage-way",
"m": "车行道",
"x": "Listen for \"carriage-way\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "lane auxiliary",
"m": "辅助车道",
"x": "Listen for \"lane auxiliary\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/leɪn ɑgˈzɪljəri/"
},
{
"w": "two-way traffic",
"m": "双车道",
"x": "Listen for \"two-way traffic\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈtuˌweɪ ˈtræfɪk/"
},
{
"w": "cyclists only",
"m": "仅限自行车通行",
"x": "Listen for \"cyclists only\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈsaɪkəlɪsts ˈoʊnli/"
},
{
"w": "one way only",
"m": "单行道",
"x": "Listen for \"one way only\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/wən weɪ ˈoʊnli/"
},
{
"w": "narrow road",
"m": "窄路",
"x": "Listen for \"narrow road\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈnɛroʊ roʊd/"
},
{
"w": "rough road",
"m": "不平整的路",
"x": "Listen for \"rough road\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/rəf roʊd/"
},
{
"w": "curve/bend road",
"m": "弯路",
"x": "Listen for \"curve/bend road\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "winding road",
"m": "连续弯路",
"x": "Listen for \"winding road\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈwaɪndɪŋ roʊd/"
},
{
"w": "road junction",
"m": "道路交叉点",
"x": "Listen for \"road junction\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/roʊd ˈʤəŋkʃən/"
},
{
"w": "mark car stop",
"m": "停车标志",
"x": "Listen for \"mark car stop\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/mɑrk kɑr stɑp/"
},
{
"w": "traffic light",
"m": "交通灯，红绿灯",
"x": "Listen for \"traffic light\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈtræfɪk laɪt/"
},
{
"w": "automatic traffic signal light",
"m": "自动红绿灯",
"x": "Listen for \"automatic traffic signal light\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˌɔtəˈmætɪk ˈtræfɪk ˈsɪgnəl laɪt/"
},
{
"w": "red light",
"m": "红灯",
"x": "Listen for \"red light\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/rɛd laɪt/"
},
{
"w": "green light",
"m": "绿灯",
"x": "Listen for \"green light\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/grin laɪt/"
},
{
"w": "amber light",
"m": "黄灯",
"x": "Listen for \"amber light\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈæmbər laɪt/"
},
{
"w": "traffic post",
"m": "交通岗",
"x": "Listen for \"traffic post\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈtræfɪk poʊst/"
},
{
"w": "police box",
"m": "警察岗亭",
"x": "Listen for \"police box\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/pəˈlis bɑks/"
},
{
"w": "traffic police",
"m": "交警",
"x": "Listen for \"traffic police\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈtræfɪk pəˈlis/"
},
{
"w": "pantomime",
"m": "打手势",
"x": "Listen for \"pantomime\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈpæntəˌmaɪm/"
},
{
"w": "turn left",
"m": "左转",
"x": "Listen for \"turn left\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/tərn lɛft/"
},
{
"w": "turn right",
"m": "右转",
"x": "Listen for \"turn right\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/tərn raɪt/"
},
{
"w": "speed limit",
"m": "速度限制",
"x": "Listen for \"speed limit\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/spid ˈlɪmət/"
},
{
"w": "no through traffic",
"m": "禁止通行",
"x": "Listen for \"no through traffic\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/noʊ θru ˈtræfɪk/"
},
{
"w": "no entry",
"m": "不准驶入",
"x": "Listen for \"no entry\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/noʊ ˈɛntri/"
},
{
"w": "no turns",
"m": "不准掉头",
"x": "Listen for \"no turns\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/noʊ tərnz/"
},
{
"w": "safety island",
"m": "安全岛",
"x": "Listen for \"safety island\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈseɪfti ˈaɪlənd/"
},
{
"w": "private car park",
"m": "私人停车场",
"x": "Listen for \"private car park\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈpraɪvət kɑr pɑrk/"
},
{
"w": "public car only",
"m": "只限公用车",
"x": "Listen for \"public car only\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈpəblɪk kɑr ˈoʊnli/"
},
{
"w": "restricted stop",
"m": "禁止停车",
"x": "Listen for \"restricted stop\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/riˈstrɪktɪd stɑp/"
},
{
"w": "restricted waiting",
"m": "不准滞留",
"x": "Listen for \"restricted waiting\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/riˈstrɪktɪd ˈweɪtɪŋ/"
},
{
"w": "parking on-street",
"m": "临街停车",
"x": "Listen for \"parking on-street\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "parking off-street",
"m": "街外停车",
"x": "Listen for \"parking off-street\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "loading off-street",
"m": "街外卸车",
"x": "Listen for \"loading off-street\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "caution pedestrian crossing",
"m": "当心行人",
"x": "Listen for \"caution pedestrian crossing\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈkɔʃən pəˈdɛstriən ˈkrɔsɪŋ/"
},
{
"w": "caution animals",
"m": "当心动物",
"x": "Listen for \"caution animals\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈkɔʃən ˈænəməlz/"
},
{
"w": "road works",
"m": "道路工程，修路",
"x": "Listen for \"road works\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/roʊd wərks/"
},
{
"w": "hospital",
"m": "医院",
"x": "Listen for \"hospital\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈhɑˌspɪtəl/"
},
{
"w": "children",
"m": "儿童",
"x": "Listen for \"children\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈʧɪldrən/"
},
{
"w": "careless pedestrian",
"m": "粗心的行人",
"x": "Listen for \"careless pedestrian\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈkɛrlɛs pəˈdɛstriən/"
},
{
"w": "the United Kingdom",
"m": "英国（大不列颠）",
"x": "Listen for \"the United Kingdom\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ðə juˈnaɪtɪd ˈkɪŋdəm/"
},
{
"w": "Sheffield",
"m": "谢菲尔德",
"x": "Listen for \"Sheffield\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈʃɛfild/"
},
{
"w": "Glasgow",
"m": "格拉斯哥",
"x": "Listen for \"Glasgow\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈglæˌskoʊ/"
},
{
"w": "Wales",
"m": "威尔士",
"x": "Listen for \"Wales\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/weɪlz/"
},
{
"w": "Belfast",
"m": "贝尔法斯特",
"x": "Listen for \"Belfast\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈbɛlˌfæst/"
},
{
"w": "Ireland",
"m": "爱尔兰",
"x": "Listen for \"Ireland\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈaɪərlənd/"
},
{
"w": "Dublin",
"m": "都柏林",
"x": "Listen for \"Dublin\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈdəblɪn/"
},
{
"w": "Australia",
"m": "澳大利亚",
"x": "Listen for \"Australia\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ɔˈstreɪljə/"
},
{
"w": "Brisbane",
"m": "布里斯班",
"x": "Listen for \"Brisbane\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈbrɪzˌbeɪn/"
},
{
"w": "New South Wales",
"m": "新南威尔士州",
"x": "Listen for \"New South Wales\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/nu saʊθ weɪlz/"
},
{
"w": "Sydney",
"m": "悉尼",
"x": "Listen for \"Sydney\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈsɪdni/"
},
{
"w": "South Australia",
"m": "南澳大利亚州",
"x": "Listen for \"South Australia\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/saʊθ ɔˈstreɪljə/"
},
{
"w": "Victoria",
"m": "维多利亚州",
"x": "Listen for \"Victoria\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/vɪkˈtɔriə/"
},
{
"w": "Western Australia",
"m": "西澳大利亚州",
"x": "Listen for \"Western Australia\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈwɛstərn ɔˈstreɪljə/"
},
{
"w": "New Zealand",
"m": "新西兰",
"x": "Listen for \"New Zealand\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/nu ˈzilənd/"
},
{
"w": "Wellington",
"m": "惠灵顿",
"x": "Listen for \"Wellington\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈwɛlɪŋtən/"
},
{
"w": "Canada",
"m": "加拿大",
"x": "Listen for \"Canada\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈkænədə/"
},
{
"w": "British Columbia",
"m": "不列颠哥伦比亚省",
"x": "Listen for \"British Columbia\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈbrɪtɪʃ kəˈləmbiə/"
},
{
"w": "Alberta",
"m": "艾伯塔省",
"x": "Listen for \"Alberta\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ælˈbərtə/"
},
{
"w": "Edmonton",
"m": "埃德蒙顿",
"x": "Listen for \"Edmonton\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈɛdməntən/"
},
{
"w": "Ontario",
"m": "安大略省",
"x": "Listen for \"Ontario\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ɑnˈtɛrioʊ/"
},
{
"w": "the United States of America",
"m": "美国",
"x": "Listen for \"the United States of America\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ðə juˈnaɪtɪd steɪts əv əˈmɛrɪkə/"
},
{
"w": "Washington",
"m": "华盛顿",
"x": "Listen for \"Washington\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈwɔʃɪŋtən/"
},
{
"w": "New York",
"m": "纽约",
"x": "Listen for \"New York\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/nu jɔrk/"
},
{
"w": "Boston",
"m": "波士顿",
"x": "Listen for \"Boston\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ˈbɔstən/"
},
{
"w": "Atlanta",
"m": "亚特兰大",
"x": "Listen for \"Atlanta\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/æˈtlæntə/"
},
{
"w": "Seattle",
"m": "西雅图",
"x": "Listen for \"Seattle\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/siˈætəl/"
},
{
"w": "Los Angeles/L. A.",
"m": "洛杉矶",
"x": "Listen for \"Los Angeles/L. A.\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps"
},
{
"w": "Chicago",
"m": "芝加哥",
"x": "Listen for \"Chicago\" in this scene.",
"c": "雅思听力场景词汇: 方向地图 Maps",
"ipa": "/ʃəˈkɑˌgoʊ/"
},
{
"w": "beard",
"m": "大胡子",
"x": "Listen for \"beard\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/bɪrd/"
},
{
"w": "moustache",
"m": "胡子",
"x": "Listen for \"moustache\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈməˌstæʃ/"
},
{
"w": "with a scar",
"m": "有疤痕",
"x": "Listen for \"with a scar\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/wɪθ ə skɑr/"
},
{
"w": "a beauty-spot",
"m": "美人痣",
"x": "Listen for \"a beauty-spot\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "with dimple",
"m": "有酒窝",
"x": "Listen for \"with dimple\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/wɪθ ˈdɪmpəl/"
},
{
"w": "with spots",
"m": "有痣",
"x": "Listen for \"with spots\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/wɪθ spɑts/"
},
{
"w": "with wrinkles/lines",
"m": "有皱纹",
"x": "Listen for \"with wrinkles/lines\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "brown hair",
"m": "棕色头发",
"x": "Listen for \"brown hair\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/braʊn hɛr/"
},
{
"w": "gray/grey hair",
"m": "灰白头发",
"x": "Listen for \"gray/grey hair\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "with plaits",
"m": "有辫子",
"x": "Listen for \"with plaits\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/wɪθ pleɪts/"
},
{
"w": "ponytail",
"m": "马尾辫",
"x": "Listen for \"ponytail\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈpoʊniˌteɪl/"
},
{
"w": "bald",
"m": "秃头",
"x": "Listen for \"bald\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/bɔld/"
},
{
"w": "parted on the right side",
"m": "右偏分",
"x": "Listen for \"parted on the right side\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈpɑrtɪd ɔn ðə raɪt saɪd/"
},
{
"w": "pigtail",
"m": "辫子",
"x": "Listen for \"pigtail\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "short hair",
"m": "短发",
"x": "Listen for \"short hair\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ʃɔrt hɛr/"
},
{
"w": "long hair",
"m": "长发",
"x": "Listen for \"long hair\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/lɔŋ hɛr/"
},
{
"w": "unshaven",
"m": "没刮干净的",
"x": "Listen for \"unshaven\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ənˈʃeɪvən/"
},
{
"w": "clean-shaven",
"m": "刮干净的",
"x": "Listen for \"clean-shaven\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "slim and tall",
"m": "瘦高的",
"x": "Listen for \"slim and tall\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/slɪm ənd tɔl/"
},
{
"w": "weather-beaten face",
"m": "饱经风霜的脸",
"x": "Listen for \"weather-beaten face\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "red cheeks",
"m": "红脸蛋",
"x": "Listen for \"red cheeks\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/rɛd ʧiks/"
},
{
"w": "big nose",
"m": "大鼻子",
"x": "Listen for \"big nose\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/bɪg noʊz/"
},
{
"w": "thick hair",
"m": "浓密的头发",
"x": "Listen for \"thick hair\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/θɪk hɛr/"
},
{
"w": "twinkling eyes",
"m": "有神的眼睛",
"x": "Listen for \"twinkling eyes\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/tˈwɪŋkəlɪŋ aɪz/"
},
{
"w": "blond",
"m": "金发的",
"x": "Listen for \"blond\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/blɑnd/"
},
{
"w": "a big smile",
"m": "笑容可掬",
"x": "Listen for \"a big smile\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ə bɪg smaɪl/"
},
{
"w": "a jolly man",
"m": "快乐的人",
"x": "Listen for \"a jolly man\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ə ˈʤɑli mæn/"
},
{
"w": "dyed",
"m": "染发的",
"x": "Listen for \"dyed\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/daɪd/"
},
{
"w": "straight",
"m": "直发的",
"x": "Listen for \"straight\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/streɪt/"
},
{
"w": "wavy",
"m": "卷发的",
"x": "Listen for \"wavy\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈweɪvi/"
},
{
"w": "curly",
"m": "卷发的",
"x": "Listen for \"curly\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈkərli/"
},
{
"w": "neat",
"m": "衣着干净的",
"x": "Listen for \"neat\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/nit/"
},
{
"w": "untidy",
"m": "不整洁的",
"x": "Listen for \"untidy\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ənˈtaɪdi/"
},
{
"w": "swept back",
"m": "头发向后梳的",
"x": "Listen for \"swept back\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/swɛpt bæk/"
},
{
"w": "wash-and-wear fabric",
"m": "免烫织物",
"x": "Listen for \"wash-and-wear fabric\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "glasses/spectacles/lens",
"m": "眼镜",
"x": "Listen for \"glasses/spectacles/lens\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "contact lenses",
"m": "隐形眼镜",
"x": "Listen for \"contact lenses\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈkɑnˌtækt ˈlɛnzɪz/"
},
{
"w": "jewellery/jewelry",
"m": "珠宝首饰",
"x": "Listen for \"jewellery/jewelry\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "formal dress",
"m": "正式着装",
"x": "Listen for \"formal dress\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈfɔrməl drɛs/"
},
{
"w": "suit and tie",
"m": "西装和领带（指男士的正式着装）",
"x": "Listen for \"suit and tie\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/sut ənd taɪ/"
},
{
"w": "casual dress",
"m": "便装，休闲服饰",
"x": "Listen for \"casual dress\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈkæʒəwəl drɛs/"
},
{
"w": "sports wear",
"m": "运动服饰",
"x": "Listen for \"sports wear\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/spɔrts wɛr/"
},
{
"w": "jeans",
"m": "牛仔裤",
"x": "Listen for \"jeans\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ʤinz/"
},
{
"w": "T-shirt",
"m": "T恤衫",
"x": "Listen for \"T-shirt\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈtiˌsərt/"
},
{
"w": "loose clothes",
"m": "宽松服饰",
"x": "Listen for \"loose clothes\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/lus kloʊðz/"
},
{
"w": "tight clothes",
"m": "紧身服饰",
"x": "Listen for \"tight clothes\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/taɪt kloʊðz/"
},
{
"w": "top",
"m": "上衣",
"x": "Listen for \"top\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/tɔp/"
},
{
"w": "pullover",
"m": "套头衫",
"x": "Listen for \"pullover\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "in dark/light red",
"m": "穿深/浅红色衣服",
"x": "Listen for \"in dark/light red\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "sweater",
"m": "毛衣",
"x": "Listen for \"sweater\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/sˈwɛtər/"
},
{
"w": "leisurewear",
"m": "休闲服，家常便服",
"x": "Listen for \"leisurewear\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "stockings",
"m": "长筒袜",
"x": "Listen for \"stockings\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈstɑkɪŋz/"
},
{
"w": "down jacket",
"m": "羽绒服",
"x": "Listen for \"down jacket\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/daʊn ˈʤækɪt/"
},
{
"w": "slippers",
"m": "拖鞋",
"x": "Listen for \"slippers\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/sˈlɪpərz/"
},
{
"w": "sneakers",
"m": "运动鞋",
"x": "Listen for \"sneakers\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/sˈnikərz/"
},
{
"w": "gym shoes",
"m": "运动鞋",
"x": "Listen for \"gym shoes\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ʤɪm ʃuz/"
},
{
"w": "jogging shoes",
"m": "慢跑鞋",
"x": "Listen for \"jogging shoes\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈʤɔgɪŋ ʃuz/"
},
{
"w": "accessory",
"m": "（衣服的）配饰",
"x": "Listen for \"accessory\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ækˈsɛsəri/"
},
{
"w": "ivory",
"m": "象牙（制品）",
"x": "Listen for \"ivory\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈaɪvəri/"
},
{
"w": "pearl",
"m": "珍珠",
"x": "Listen for \"pearl\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/pərl/"
},
{
"w": "brooch",
"m": "胸针",
"x": "Listen for \"brooch\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/bruʧ/"
},
{
"w": "clothes",
"m": "衣服",
"x": "Listen for \"clothes\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/kloʊðz/"
},
{
"w": "costume",
"m": "衣着，服装",
"x": "Listen for \"costume\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈkɑstum/"
},
{
"w": "garment",
"m": "服装",
"x": "Listen for \"garment\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈgɑrmənt/"
},
{
"w": "thin",
"m": "瘦的",
"x": "Listen for \"thin\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/θɪn/"
},
{
"w": "slender",
"m": "（女人）苗条的",
"x": "Listen for \"slender\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/sˈlɛndər/"
},
{
"w": "slim",
"m": "苗条的",
"x": "Listen for \"slim\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/slɪm/"
},
{
"w": "plump",
"m": "丰满的",
"x": "Listen for \"plump\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/pləmp/"
},
{
"w": "medium-built",
"m": "中等身材的",
"x": "Listen for \"medium-built\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "well-built",
"m": "身材很好的",
"x": "Listen for \"well-built\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "broad-shouldered",
"m": "宽肩膀的",
"x": "Listen for \"broad-shouldered\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "overweight",
"m": "超重的",
"x": "Listen for \"overweight\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˌoʊvərˈweɪt/"
},
{
"w": "stout",
"m": "肥壮的",
"x": "Listen for \"stout\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/staʊt/"
},
{
"w": "stocky",
"m": "矮而敦实的",
"x": "Listen for \"stocky\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈstɑki/"
},
{
"w": "tall",
"m": "高的",
"x": "Listen for \"tall\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/tɔl/"
},
{
"w": "medium weight",
"m": "中等体重",
"x": "Listen for \"medium weight\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈmidiəm weɪt/"
},
{
"w": "average weight",
"m": "平均体重",
"x": "Listen for \"average weight\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈævərɪʤ weɪt/"
},
{
"w": "below average",
"m": "体重低于平均水平",
"x": "Listen for \"below average\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/bɪˈloʊ ˈævərɪʤ/"
},
{
"w": "short",
"m": "矮的",
"x": "Listen for \"short\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ʃɔrt/"
},
{
"w": "tallish",
"m": "偏高的",
"x": "Listen for \"tallish\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "middle-aged",
"m": "中年的",
"x": "Listen for \"middle-aged\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈmɪdəˌleɪgd/"
},
{
"w": "elderly",
"m": "老年的，年长的",
"x": "Listen for \"elderly\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈɛldərli/"
},
{
"w": "old",
"m": "老年的，年长的",
"x": "Listen for \"old\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/oʊld/"
},
{
"w": "in one's late teens",
"m": "十几岁（指16～19岁）",
"x": "Listen for \"in one's late teens\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ɪn wənz leɪt tinz/"
},
{
"w": "long",
"m": "长（脸）的",
"x": "Listen for \"long\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/lɔŋ/"
},
{
"w": "round",
"m": "圆（脸）的",
"x": "Listen for \"round\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/raʊnd/"
},
{
"w": "forehead",
"m": "前额",
"x": "Listen for \"forehead\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈfɔrhɛd/"
},
{
"w": "high cheekbones",
"m": "高颧骨",
"x": "Listen for \"high cheekbones\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/haɪ ˈʧikˌboʊnz/"
},
{
"w": "thin lips",
"m": "薄嘴唇",
"x": "Listen for \"thin lips\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/θɪn lɪps/"
},
{
"w": "full lips",
"m": "厚嘴唇",
"x": "Listen for \"full lips\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/fʊl lɪps/"
},
{
"w": "long nose",
"m": "长鼻子",
"x": "Listen for \"long nose\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/lɔŋ noʊz/"
},
{
"w": "straight nose",
"m": "鼻子挺直",
"x": "Listen for \"straight nose\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/streɪt noʊz/"
},
{
"w": "turned-up nose",
"m": "朝天鼻",
"x": "Listen for \"turned-up nose\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "double chin",
"m": "双下巴",
"x": "Listen for \"double chin\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈdəbəl ʧɪn/"
},
{
"w": "long eyelashes",
"m": "长睫毛",
"x": "Listen for \"long eyelashes\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/lɔŋ ˈaɪˌlæʃɪz/"
},
{
"w": "bushy eyebrows",
"m": "浓眉",
"x": "Listen for \"bushy eyebrows\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈbʊʃi ˈaɪˌbraʊz/"
},
{
"w": "thin eyebrows",
"m": "细眉",
"x": "Listen for \"thin eyebrows\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/θɪn ˈaɪˌbraʊz/"
},
{
"w": "double eyelids",
"m": "双眼皮",
"x": "Listen for \"double eyelids\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/ˈdəbəl ˈaɪˌlɪdz/"
},
{
"w": "pale",
"m": "肤色浅的",
"x": "Listen for \"pale\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance",
"ipa": "/peɪl/"
},
{
"w": "sunburned/tanned",
"m": "晒黑的",
"x": "Listen for \"sunburned/tanned\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "fair-skinned",
"m": "皮肤白皙的",
"x": "Listen for \"fair-skinned\" in this scene.",
"c": "雅思听力场景词汇: 外貌特征 Appearance"
},
{
"w": "vacant position",
"m": "空缺职位",
"x": "Listen for \"vacant position\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈveɪkənt pəˈzɪʃən/"
},
{
"w": "post",
"m": "职位",
"x": "Listen for \"post\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/poʊst/"
},
{
"w": "opening",
"m": "空缺职位",
"x": "Listen for \"opening\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈoʊpənɪŋ/"
},
{
"w": "vacancy",
"m": "空缺职位",
"x": "Listen for \"vacancy\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈveɪkənsi/"
},
{
"w": "position",
"m": "职位",
"x": "Listen for \"position\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/pəˈzɪʃən/"
},
{
"w": "occupation",
"m": "工作，职位",
"x": "Listen for \"occupation\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌɑkjəˈpeɪʃən/"
},
{
"w": "career",
"m": "职业",
"x": "Listen for \"career\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kərɪr/"
},
{
"w": "professional",
"m": "职业的，专业的",
"x": "Listen for \"professional\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/prəˈfɛʃənəl/"
},
{
"w": "receptionist",
"m": "接待员",
"x": "Listen for \"receptionist\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/rɪˈsɛpʃənɪst/"
},
{
"w": "interviewer",
"m": "面试官",
"x": "Listen for \"interviewer\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈɪntərvˌjuər/"
},
{
"w": "personnel manager",
"m": "人事经理",
"x": "Listen for \"personnel manager\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌpərsəˈnɛl ˈmænɪʤər/"
},
{
"w": "human resources",
"m": "人力资源",
"x": "Listen for \"human resources\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈjumən ˈrisɔrsɪz/"
},
{
"w": "certificate",
"m": "证书",
"x": "Listen for \"certificate\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/sərˈtɪfɪkət/"
},
{
"w": "qualification",
"m": "资历",
"x": "Listen for \"qualification\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kˌwɑləfəˈkeɪʃən/"
},
{
"w": "full-time job",
"m": "全职工作",
"x": "Listen for \"full-time job\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈfʊlˌtaɪm ʤɑb/"
},
{
"w": "part-time job",
"m": "兼职工作",
"x": "Listen for \"part-time job\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpɑrtˈtaɪm ʤɑb/"
},
{
"w": "wage",
"m": "（周）工资",
"x": "Listen for \"wage\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/weɪʤ/"
},
{
"w": "bonus",
"m": "奖金，红利",
"x": "Listen for \"bonus\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈboʊnəs/"
},
{
"w": "benefits",
"m": "津贴",
"x": "Listen for \"benefits\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈbɛnəfɪts/"
},
{
"w": "fill in the form",
"m": "填表",
"x": "Listen for \"fill in the form\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/fɪl ɪn ðə fɔrm/"
},
{
"w": "fill out the form",
"m": "填表",
"x": "Listen for \"fill out the form\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/fɪl aʊt ðə fɔrm/"
},
{
"w": "training session",
"m": "培训会",
"x": "Listen for \"training session\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈtreɪnɪŋ ˈsɛʃən/"
},
{
"w": "ball room",
"m": "会议室",
"x": "Listen for \"ball room\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/bɔl rum/"
},
{
"w": "television channel",
"m": "电视频道",
"x": "Listen for \"television channel\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈtɛləˌvɪʒən ˈʧænəl/"
},
{
"w": "leave it blank",
"m": "空着不填",
"x": "Listen for \"leave it blank\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/liv ɪt blæŋk/"
},
{
"w": "on average",
"m": "平均",
"x": "Listen for \"on average\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ɔn ˈævərɪʤ/"
},
{
"w": "news bulletins board",
"m": "通知栏",
"x": "Listen for \"news bulletins board\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/nuz ˈbʊlətənz bɔrd/"
},
{
"w": "comedy shows",
"m": "喜剧表演",
"x": "Listen for \"comedy shows\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkɑmədi ʃoʊz/"
},
{
"w": "good quality stuff",
"m": "好的素材",
"x": "Listen for \"good quality stuff\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/gʊd kˈwɑləti stəf/"
},
{
"w": "specific advice",
"m": "具体建议",
"x": "Listen for \"specific advice\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/spɪˈsɪfɪk ədˈvaɪs/"
},
{
"w": "sound system",
"m": "音响系统",
"x": "Listen for \"sound system\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/saʊnd ˈsɪstəm/"
},
{
"w": "potential customer",
"m": "潜在客户",
"x": "Listen for \"potential customer\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/pəˈtɛnʃəl ˈkəstəmər/"
},
{
"w": "mailing list",
"m": "邮寄列表",
"x": "Listen for \"mailing list\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈmeɪlɪŋ lɪst/"
},
{
"w": "Monday",
"m": "星期一",
"x": "Listen for \"Monday\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈmənˌdeɪ/"
},
{
"w": "Tuesday",
"m": "星期二",
"x": "Listen for \"Tuesday\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈtuzˌdeɪ/"
},
{
"w": "Wednesday",
"m": "星期三",
"x": "Listen for \"Wednesday\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈwɛnzˌdeɪ/"
},
{
"w": "Thursday",
"m": "星期四",
"x": "Listen for \"Thursday\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈθərzˌdeɪ/"
},
{
"w": "Friday",
"m": "星期五",
"x": "Listen for \"Friday\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈfraɪˌdeɪ/"
},
{
"w": "Saturday",
"m": "星期六",
"x": "Listen for \"Saturday\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈsæˌtɪˌdeɪ/"
},
{
"w": "Sunday",
"m": "星期日",
"x": "Listen for \"Sunday\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈsənˌdi/"
},
{
"w": "January",
"m": "1月",
"x": "Listen for \"January\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈʤænjuˌɛri/"
},
{
"w": "February",
"m": "2月",
"x": "Listen for \"February\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈfɛbruˌɛri/"
},
{
"w": "March",
"m": "3月",
"x": "Listen for \"March\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/mɑrʧ/"
},
{
"w": "April",
"m": "4月",
"x": "Listen for \"April\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈeɪprəl/"
},
{
"w": "May",
"m": "5月",
"x": "Listen for \"May\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/meɪ/"
},
{
"w": "June",
"m": "6月",
"x": "Listen for \"June\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ʤun/"
},
{
"w": "July",
"m": "7月",
"x": "Listen for \"July\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌʤuˈlaɪ/"
},
{
"w": "August",
"m": "8月",
"x": "Listen for \"August\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈɔgəst/"
},
{
"w": "September",
"m": "9月",
"x": "Listen for \"September\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/sɛpˈtɛmbər/"
},
{
"w": "October",
"m": "10月",
"x": "Listen for \"October\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ɑkˈtoʊbər/"
},
{
"w": "November",
"m": "11月",
"x": "Listen for \"November\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/noʊˈvɛmbər/"
},
{
"w": "December",
"m": "12月",
"x": "Listen for \"December\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/dɪˈsɛmbər/"
},
{
"w": "horse",
"m": "马",
"x": "Listen for \"horse\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/hɔrs/"
},
{
"w": "mare",
"m": "母马",
"x": "Listen for \"mare\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/mɛr/"
},
{
"w": "colt/foal",
"m": "马驹，小马",
"x": "Listen for \"colt/foal\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "pony",
"m": "矮种马",
"x": "Listen for \"pony\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpoʊˌni/"
},
{
"w": "thoroughbred",
"m": "纯种马",
"x": "Listen for \"thoroughbred\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈθəroʊˈbrɛd/"
},
{
"w": "mustang",
"m": "野马",
"x": "Listen for \"mustang\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈməˌstæŋ/"
},
{
"w": "mule",
"m": "骡",
"x": "Listen for \"mule\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/mjul/"
},
{
"w": "ass/donkey",
"m": "驴",
"x": "Listen for \"ass/donkey\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "ox",
"m": "牛",
"x": "Listen for \"ox\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ɑks/"
},
{
"w": "buffalo",
"m": "水牛",
"x": "Listen for \"buffalo\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈbəfəˌloʊ/"
},
{
"w": "bull",
"m": "公牛",
"x": "Listen for \"bull\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/bʊl/"
},
{
"w": "cow",
"m": "母牛",
"x": "Listen for \"cow\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kaʊ/"
},
{
"w": "calf",
"m": "小牛，牛犊",
"x": "Listen for \"calf\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kæf/"
},
{
"w": "hog",
"m": "阉猪，肥猪",
"x": "Listen for \"hog\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/hɑg/"
},
{
"w": "gilt",
"m": "小母猪",
"x": "Listen for \"gilt\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/gɪlt/"
},
{
"w": "piglet",
"m": "小猪，猪崽",
"x": "Listen for \"piglet\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpɪglɪt/"
},
{
"w": "sheep",
"m": "绵羊",
"x": "Listen for \"sheep\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ʃip/"
},
{
"w": "goat",
"m": "山羊",
"x": "Listen for \"goat\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/goʊt/"
},
{
"w": "zebra",
"m": "斑马",
"x": "Listen for \"zebra\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈzibrə/"
},
{
"w": "antelope",
"m": "羚羊",
"x": "Listen for \"antelope\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈæntəˌloʊp/"
},
{
"w": "gazelle",
"m": "瞪羚",
"x": "Listen for \"gazelle\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/gəˈzɛl/"
},
{
"w": "deer",
"m": "鹿",
"x": "Listen for \"deer\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/dɪr/"
},
{
"w": "reindeer",
"m": "驯鹿",
"x": "Listen for \"reindeer\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈreɪnˌdɪr/"
},
{
"w": "giraffe",
"m": "长颈鹿",
"x": "Listen for \"giraffe\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ʤəræf/"
},
{
"w": "camel",
"m": "骆驼",
"x": "Listen for \"camel\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkæməl/"
},
{
"w": "elephant",
"m": "大象",
"x": "Listen for \"elephant\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈɛləfənt/"
},
{
"w": "rhinoceros",
"m": "犀牛",
"x": "Listen for \"rhinoceros\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/raɪˈnɑsərəs/"
},
{
"w": "hippopotamus",
"m": "河马",
"x": "Listen for \"hippopotamus\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌhɪpəˈpɑtəməs/"
},
{
"w": "cat",
"m": "猫",
"x": "Listen for \"cat\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kæt/"
},
{
"w": "puma",
"m": "美洲狮",
"x": "Listen for \"puma\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpumə/"
},
{
"w": "leopard",
"m": "豹",
"x": "Listen for \"leopard\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈlɛpərd/"
},
{
"w": "wildcat",
"m": "野猫",
"x": "Listen for \"wildcat\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈwaɪldˌkæt/"
},
{
"w": "bison",
"m": "美洲野牛",
"x": "Listen for \"bison\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈbaɪsən/"
},
{
"w": "dog",
"m": "狗",
"x": "Listen for \"dog\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/dɔg/"
},
{
"w": "otter",
"m": "水獭",
"x": "Listen for \"otter\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈɑtər/"
},
{
"w": "fox",
"m": "狐",
"x": "Listen for \"fox\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/fɑks/"
},
{
"w": "squirrel",
"m": "松鼠",
"x": "Listen for \"squirrel\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/skwərəl/"
},
{
"w": "dormouse",
"m": "榛睡鼠",
"x": "Listen for \"dormouse\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈdɔrˌmaʊs/"
},
{
"w": "beaver",
"m": "海狸，河狸",
"x": "Listen for \"beaver\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈbivər/"
},
{
"w": "marmot",
"m": "土拨鼠",
"x": "Listen for \"marmot\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "ferret",
"m": "雪貂",
"x": "Listen for \"ferret\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈfɛrət/"
},
{
"w": "bear",
"m": "熊",
"x": "Listen for \"bear\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/bɛr/"
},
{
"w": "rabbit",
"m": "兔子",
"x": "Listen for \"rabbit\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈræbɪt/"
},
{
"w": "hare",
"m": "野兔",
"x": "Listen for \"hare\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/hɛr/"
},
{
"w": "rat",
"m": "鼠",
"x": "Listen for \"rat\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ræt/"
},
{
"w": "chinchilla",
"m": "南美栗鼠",
"x": "Listen for \"chinchilla\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ʧɪnˈʧɪlə/"
},
{
"w": "mouse",
"m": "家鼠",
"x": "Listen for \"mouse\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/maʊs/"
},
{
"w": "monkey",
"m": "猴子",
"x": "Listen for \"monkey\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈməŋki/"
},
{
"w": "chimpanzee",
"m": "黑猩猩",
"x": "Listen for \"chimpanzee\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ʧɪmˈpænzi/"
},
{
"w": "gorilla",
"m": "大猩猩",
"x": "Listen for \"gorilla\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/gərˈɪlə/"
},
{
"w": "orangutan",
"m": "猩猩",
"x": "Listen for \"orangutan\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ɔˈræŋətɑn/"
},
{
"w": "anteater",
"m": "食蚁兽",
"x": "Listen for \"anteater\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈænˌtitər/"
},
{
"w": "koala",
"m": "考拉，树袋熊",
"x": "Listen for \"koala\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/koʊˈɑlə/"
},
{
"w": "bat",
"m": "蝙蝠",
"x": "Listen for \"bat\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/bæt/"
},
{
"w": "whale",
"m": "鲸",
"x": "Listen for \"whale\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/weɪl/"
},
{
"w": "dolphin",
"m": "海豚",
"x": "Listen for \"dolphin\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈdɑlfən/"
},
{
"w": "walrus",
"m": "海象",
"x": "Listen for \"walrus\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈwɔlrəs/"
},
{
"w": "beet/beetroot",
"m": "甜菜",
"x": "Listen for \"beet/beetroot\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "pepper",
"m": "胡椒（粉）",
"x": "Listen for \"pepper\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpɛpər/"
},
{
"w": "chilli",
"m": "辣椒",
"x": "Listen for \"chilli\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "thyme",
"m": "百里香",
"x": "Listen for \"thyme\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/θaɪm/"
},
{
"w": "artichoke",
"m": "洋蓟",
"x": "Listen for \"artichoke\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈɑrtɪˌʧoʊk/"
},
{
"w": "broccoli/brocoli",
"m": "花椰菜，西兰花",
"x": "Listen for \"broccoli/brocoli\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "caper",
"m": "刺山柑，老鼠瓜",
"x": "Listen for \"caper\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkeɪpər/"
},
{
"w": "cardoon",
"m": "刺棘蓟",
"x": "Listen for \"cardoon\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kɑrˈdun/"
},
{
"w": "chervil",
"m": "雪维菜，细叶芹",
"x": "Listen for \"chervil\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "chick-pea",
"m": "鹰嘴豆",
"x": "Listen for \"chick-pea\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "cumin/cummin",
"m": "孜然芹，枯茗",
"x": "Listen for \"cumin/cummin\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "dandelion",
"m": "蒲公英",
"x": "Listen for \"dandelion\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈdændəˌlaɪən/"
},
{
"w": "gherkin",
"m": "嫩黄瓜",
"x": "Listen for \"gherkin\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "horseradish",
"m": "山葵，辣根",
"x": "Listen for \"horseradish\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈhɔrsˌrædɪʃ/"
},
{
"w": "Jerusalem artichoke",
"m": "洋姜，鬼子姜",
"x": "Listen for \"Jerusalem artichoke\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ʤərˈusələm ˈɑrtɪˌʧoʊk/"
},
{
"w": "kale",
"m": "羽衣甘蓝",
"x": "Listen for \"kale\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/keɪl/"
},
{
"w": "laurel",
"m": "月桂",
"x": "Listen for \"laurel\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈlɔrəl/"
},
{
"w": "lentil",
"m": "扁豆",
"x": "Listen for \"lentil\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈlɛntəl/"
},
{
"w": "lupin/ lupine",
"m": "羽扇豆",
"x": "Listen for \"lupin/ lupine\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈlupən/ ˈluˌpaɪn/"
},
{
"w": "parsley",
"m": "西芹",
"x": "Listen for \"parsley\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpɑrsli/"
},
{
"w": "parsnip",
"m": "欧洲防风草",
"x": "Listen for \"parsnip\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "rhubarb",
"m": "大黄",
"x": "Listen for \"rhubarb\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈruˌbɑrb/"
},
{
"w": "salsify",
"m": "婆罗门参",
"x": "Listen for \"salsify\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "sorrel",
"m": "酸模，掌叶大黄",
"x": "Listen for \"sorrel\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈsɔrəl/"
},
{
"w": "truffle",
"m": "块菌",
"x": "Listen for \"truffle\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈtrəfəl/"
},
{
"w": "wild animal",
"m": "野生动物",
"x": "Listen for \"wild animal\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/waɪld ˈænəməl/"
},
{
"w": "amphibian",
"m": "两栖动物",
"x": "Listen for \"amphibian\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/æmˈfɪbiən/"
},
{
"w": "aquatic",
"m": "水生动物",
"x": "Listen for \"aquatic\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/əkˈwɑtɪk/"
},
{
"w": "coelenterate",
"m": "腔肠动物",
"x": "Listen for \"coelenterate\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "form-changing animal",
"m": "变形动物",
"x": "Listen for \"form-changing animal\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "cold-blooded animal",
"m": "冷血动物",
"x": "Listen for \"cold-blooded animal\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkoʊldˈblədəd ˈænəməl/"
},
{
"w": "warm-blooded animal",
"m": "温血动物",
"x": "Listen for \"warm-blooded animal\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "invertebrate",
"m": "无脊椎动物",
"x": "Listen for \"invertebrate\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌɪnˈvərtəˌbreɪt/"
},
{
"w": "spineless",
"m": "无脊椎的",
"x": "Listen for \"spineless\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈspaɪnləs/"
},
{
"w": "vertebrate",
"m": "脊椎动物",
"x": "Listen for \"vertebrate\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈvərtəˌbreɪt/"
},
{
"w": "mollusk",
"m": "软体动物",
"x": "Listen for \"mollusk\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈmɑləsk/"
},
{
"w": "plankton",
"m": "浮游生物",
"x": "Listen for \"plankton\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈplæŋktən/"
},
{
"w": "poultry",
"m": "家禽",
"x": "Listen for \"poultry\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpoʊltri/"
},
{
"w": "specimen",
"m": "标本",
"x": "Listen for \"specimen\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈspɛsəmən/"
},
{
"w": "carnivore",
"m": "食肉动物",
"x": "Listen for \"carnivore\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkɑrnɪˌvɔr/"
},
{
"w": "carnivorous",
"m": "食肉的",
"x": "Listen for \"carnivorous\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kɑrˈnɪvərəs/"
},
{
"w": "herbivore",
"m": "食草动物",
"x": "Listen for \"herbivore\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈərbɪˌvɔr/"
},
{
"w": "herbivorous",
"m": "食草的",
"x": "Listen for \"herbivorous\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ərˈbɪˌvɔrəs/"
},
{
"w": "omnivorous",
"m": "杂食动物",
"x": "Listen for \"omnivorous\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ɑmˈnɪvərəs/"
},
{
"w": "predatory",
"m": "捕食的",
"x": "Listen for \"predatory\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈprɛdəˌtɔri/"
},
{
"w": "primate",
"m": "灵长动物",
"x": "Listen for \"primate\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpraɪˌmeɪt/"
},
{
"w": "animal adaptation",
"m": "动物适应性",
"x": "Listen for \"animal adaptation\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈænəməl ˌædəpˈteɪʃən/"
},
{
"w": "animal cognition",
"m": "动物认知能力",
"x": "Listen for \"animal cognition\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈænəməl kɑgˈnɪʃən/"
},
{
"w": "bacteria",
"m": "细菌",
"x": "Listen for \"bacteria\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/bækˈtɪriə/"
},
{
"w": "beast",
"m": "野兽",
"x": "Listen for \"beast\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/bist/"
},
{
"w": "creature",
"m": "生物",
"x": "Listen for \"creature\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkriʧər/"
},
{
"w": "rear",
"m": "饲养，养育",
"x": "Listen for \"rear\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/rɪr/"
},
{
"w": "breed",
"m": "饲养；繁殖",
"x": "Listen for \"breed\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/brid/"
},
{
"w": "feed",
"m": "喂养",
"x": "Listen for \"feed\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/fid/"
},
{
"w": "baboon",
"m": "狒狒",
"x": "Listen for \"baboon\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/bəˈbun/"
},
{
"w": "chipmunk",
"m": "花栗鼠",
"x": "Listen for \"chipmunk\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈʧɪpməŋk/"
},
{
"w": "ecosystem",
"m": "生态系统",
"x": "Listen for \"ecosystem\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈikoʊˌsɪstəm/"
},
{
"w": "reproductive system",
"m": "生殖系统",
"x": "Listen for \"reproductive system\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌriprəˈdəktɪv ˈsɪstəm/"
},
{
"w": "respiratory system",
"m": "呼吸系统",
"x": "Listen for \"respiratory system\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈrɛspərəˌtɔri ˈsɪstəm/"
},
{
"w": "broadleaf",
"m": "阔叶树",
"x": "Listen for \"broadleaf\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "chlorophyll",
"m": "叶绿素",
"x": "Listen for \"chlorophyll\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈklɔrəfɪl/"
},
{
"w": "cross breed",
"m": "杂交品种",
"x": "Listen for \"cross breed\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/krɔs brid/"
},
{
"w": "evergreen plant",
"m": "常青植物",
"x": "Listen for \"evergreen plant\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈɛvərˌgrin plænt/"
},
{
"w": "fern",
"m": "蕨类植物",
"x": "Listen for \"fern\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/fərn/"
},
{
"w": "marsh plant",
"m": "沼泽植物",
"x": "Listen for \"marsh plant\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/mɑrʃ plænt/"
},
{
"w": "aquatic plant",
"m": "水生植物",
"x": "Listen for \"aquatic plant\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/əkˈwɑtɪk plænt/"
},
{
"w": "tropical plant",
"m": "热带植物",
"x": "Listen for \"tropical plant\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈtrɑpɪkəl plænt/"
},
{
"w": "tundra plant",
"m": "苔原植物",
"x": "Listen for \"tundra plant\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈtəndrə plænt/"
},
{
"w": "botanical",
"m": "植物（学）的",
"x": "Listen for \"botanical\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/bəˈtænɪkəl/"
},
{
"w": "antibody",
"m": "抗体",
"x": "Listen for \"antibody\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈæntɪˌbɑdi/"
},
{
"w": "antibiotics",
"m": "抗生素",
"x": "Listen for \"antibiotics\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌæntibaɪˈɑtɪks/"
},
{
"w": "carbohydrate",
"m": "碳水化合物",
"x": "Listen for \"carbohydrate\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌkɑrboʊˈhaɪˌdreɪt/"
},
{
"w": "one-celled",
"m": "单细胞的",
"x": "Listen for \"one-celled\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other"
},
{
"w": "aquaculture",
"m": "水产业",
"x": "Listen for \"aquaculture\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈækwəˌkəlʧər/"
},
{
"w": "conservatory",
"m": "温室，暖房",
"x": "Listen for \"conservatory\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kənˈsərvətɔri/"
},
{
"w": "irrigation",
"m": "灌溉，浇灌",
"x": "Listen for \"irrigation\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌɪrəˈgeɪʃən/"
},
{
"w": "plantation",
"m": "植物园",
"x": "Listen for \"plantation\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌplænˈteɪʃən/"
},
{
"w": "antarctic",
"m": "南极的",
"x": "Listen for \"antarctic\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/æˈnɑrtɪk/"
},
{
"w": "arctic",
"m": "北极的",
"x": "Listen for \"arctic\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈɑrtɪk/"
},
{
"w": "canyon",
"m": "峡谷",
"x": "Listen for \"canyon\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkænjən/"
},
{
"w": "cavern",
"m": "洞穴",
"x": "Listen for \"cavern\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkævərn/"
},
{
"w": "channel",
"m": "海峡",
"x": "Listen for \"channel\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈʧænəl/"
},
{
"w": "canal",
"m": "运河",
"x": "Listen for \"canal\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/kəˈnæl/"
},
{
"w": "crest",
"m": "山顶；波峰",
"x": "Listen for \"crest\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/krɛst/"
},
{
"w": "evaporate",
"m": "蒸发",
"x": "Listen for \"evaporate\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ɪˈvæpərˌeɪt/"
},
{
"w": "hemisphere",
"m": "半球",
"x": "Listen for \"hemisphere\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈhɛmɪsˌfɪr/"
},
{
"w": "horizon",
"m": "地平线",
"x": "Listen for \"horizon\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/hərˈaɪzən/"
},
{
"w": "latitude",
"m": "纬线",
"x": "Listen for \"latitude\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈlætəˌtud/"
},
{
"w": "longitude",
"m": "经线",
"x": "Listen for \"longitude\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈlɑnʤəˌtud/"
},
{
"w": "maritime",
"m": "海洋的",
"x": "Listen for \"maritime\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈmærəˌtaɪm/"
},
{
"w": "nautical",
"m": "与航海有关的",
"x": "Listen for \"nautical\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈnɔtəkəl/"
},
{
"w": "plain",
"m": "平原",
"x": "Listen for \"plain\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/pleɪn/"
},
{
"w": "basin",
"m": "盆地",
"x": "Listen for \"basin\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈbeɪsən/"
},
{
"w": "peak",
"m": "山峰",
"x": "Listen for \"peak\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/pik/"
},
{
"w": "summit",
"m": "峰顶",
"x": "Listen for \"summit\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈsəmɪt/"
},
{
"w": "volcano",
"m": "火山",
"x": "Listen for \"volcano\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/vɑlˈkeɪnoʊ/"
},
{
"w": "lava",
"m": "岩浆",
"x": "Listen for \"lava\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈlɑvə/"
},
{
"w": "crater",
"m": "火山口",
"x": "Listen for \"crater\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkreɪtər/"
},
{
"w": "sea floor",
"m": "海床",
"x": "Listen for \"sea floor\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/si flɔr/"
},
{
"w": "terrestrial",
"m": "陆地的",
"x": "Listen for \"terrestrial\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/tərˈɛstriəl/"
},
{
"w": "crust",
"m": "地壳",
"x": "Listen for \"crust\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/krəst/"
},
{
"w": "glacial",
"m": "冰河的",
"x": "Listen for \"glacial\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈgleɪʃəl/"
},
{
"w": "mantle",
"m": "地幔",
"x": "Listen for \"mantle\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈmæntəl/"
},
{
"w": "riverbed",
"m": "河床",
"x": "Listen for \"riverbed\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈrɪvərˌbɛd/"
},
{
"w": "architect",
"m": "建筑师",
"x": "Listen for \"architect\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈɑrkəˌtɛkt/"
},
{
"w": "chronological",
"m": "年代顺序的",
"x": "Listen for \"chronological\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌkrɑnəˈlɑʤɪkəl/"
},
{
"w": "fossil",
"m": "化石",
"x": "Listen for \"fossil\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈfɑsəl/"
},
{
"w": "tribe",
"m": "部落",
"x": "Listen for \"tribe\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/traɪb/"
},
{
"w": "aboriginal",
"m": "土著的",
"x": "Listen for \"aboriginal\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌæbərˈɪʤənəl/"
},
{
"w": "primitive",
"m": "原始的",
"x": "Listen for \"primitive\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈprɪmɪtɪv/"
},
{
"w": "blast",
"m": "一阵（强风）",
"x": "Listen for \"blast\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/blæst/"
},
{
"w": "atmosphere",
"m": "大气层",
"x": "Listen for \"atmosphere\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈætməsˌfɪr/"
},
{
"w": "ambience",
"m": "气氛",
"x": "Listen for \"ambience\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈæmbiəns/"
},
{
"w": "current",
"m": "水流；气流",
"x": "Listen for \"current\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkɑrənt/"
},
{
"w": "water wave",
"m": "水波",
"x": "Listen for \"water wave\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈwɔtər weɪv/"
},
{
"w": "heat wave",
"m": "热浪",
"x": "Listen for \"heat wave\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/hit weɪv/"
},
{
"w": "meteorology",
"m": "气象学",
"x": "Listen for \"meteorology\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌmitiərˈɑləʤi/"
},
{
"w": "meteorological",
"m": "气象的",
"x": "Listen for \"meteorological\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌmitiˌɔrəˈlɑʤɪkəl/"
},
{
"w": "precipitation",
"m": "降水量",
"x": "Listen for \"precipitation\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/prɪˌsɪpɪˈteɪʃən/"
},
{
"w": "vapor",
"m": "水蒸气，蒸发",
"x": "Listen for \"vapor\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈveɪpər/"
},
{
"w": "evaporation",
"m": "蒸发",
"x": "Listen for \"evaporation\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ɪˌvæpərˈeɪʃən/"
},
{
"w": "celestial",
"m": "天体的",
"x": "Listen for \"celestial\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/səˈlɛsʧəl/"
},
{
"w": "cluster",
"m": "星团",
"x": "Listen for \"cluster\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈkləstər/"
},
{
"w": "solar",
"m": "太阳的",
"x": "Listen for \"solar\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈsoʊlər/"
},
{
"w": "dust",
"m": "尘土",
"x": "Listen for \"dust\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/dəst/"
},
{
"w": "root",
"m": "根部",
"x": "Listen for \"root\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/rut/"
},
{
"w": "sucker",
"m": "从根部长出的新枝",
"x": "Listen for \"sucker\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈsəkər/"
},
{
"w": "spring up",
"m": "生长，生出",
"x": "Listen for \"spring up\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/spərɪŋ əp/"
},
{
"w": "give off gas",
"m": "释放气体",
"x": "Listen for \"give off gas\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/gɪv ɔf gæs/"
},
{
"w": "parent plant",
"m": "母体植物",
"x": "Listen for \"parent plant\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈpɛrənt plænt/"
},
{
"w": "reproduce",
"m": "繁殖",
"x": "Listen for \"reproduce\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˌriprəˈdus/"
},
{
"w": "tropical condition",
"m": "热带条件",
"x": "Listen for \"tropical condition\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈtrɑpɪkəl kənˈdɪʃən/"
},
{
"w": "shady",
"m": "阴凉的",
"x": "Listen for \"shady\" in this scene.",
"c": "雅思听力场景词汇: 其他 Other",
"ipa": "/ˈʃeɪdi/"
},
{
"w": "abode",
"m": "n.房屋，家；住所",
"x": "right of abode 居住权",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/əˈboʊd/"
},
{
"w": "abundance",
"m": "n.大量，丰富，充足",
"x": "in abundance丰富",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/əˈbəndəns/"
},
{
"w": "accidentally",
"m": "address",
"x": "Listen for \"accidentally\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌæksəˈdɛnəli/"
},
{
"w": "address",
"m": "n.地址；演说 v.写地址；演说；对付",
"x": "address a letter 在信上写地址",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈæˌdrɛs/"
},
{
"w": "afford",
"m": "v.担负得起；买得起；提供，给予",
"x": "afford to do sth.负担得起做…",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/əˈfɔrd/"
},
{
"w": "attempt",
"m": "make attempt 尝试；attempt at（doing）sth.尝试做…",
"x": "Listen for \"attempt\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/əˈtɛmpt/"
},
{
"w": "awesome",
"m": "a.使人敬畏的，使人惊惧的；了不起的",
"x": "Listen for \"awesome\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈɔsəm/"
},
{
"w": "calendar",
"m": "n.日历，月历",
"x": "a perpetual calendar 万年历",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈkæləndər/"
},
{
"w": "carry",
"m": "v.运送，搬运；传送，传播；领，带",
"x": "carry off 夺去",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈkɛri/"
},
{
"w": "claim",
"m": "n.要求；主张，断言；索赔；权利，要求权，所有权 v.要求；声称，主张；索赔",
"x": "lay claim to 对…提出所有权要求",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/kleɪm/"
},
{
"w": "complain",
"m": "v.抱怨；申诉",
"x": "complain about/of 申诉…",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/kəmˈpleɪn/"
},
{
"w": "damp",
"m": "damp course 防水层",
"x": "Listen for \"damp\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/dæmp/"
},
{
"w": "debt",
"m": "be in debt 欠债，欠情；in debt to sb./in one's debt 欠某人的债",
"x": "Listen for \"debt\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/dɛt/"
},
{
"w": "deprive",
"m": "v.（使）失去，剥夺",
"x": "deprive sb.of sth.剥夺某人某物",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/dɪˈpraɪv/"
},
{
"w": "disposal",
"m": "n.处理，处置；布置，安排",
"x": "waste disposal 废物处理",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/dɪˈspoʊzəl/"
},
{
"w": "disturb",
"m": "v.弄乱，打乱；打扰，使烦恼",
"x": "disturb the peace 打乱和平",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/dɪˈstərb/"
},
{
"w": "drawback",
"m": "n.缺点；障碍，不利条件；退还的关税",
"x": "drawback of sth.某事物的缺点",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈdrɔˌbæk/"
},
{
"w": "dressing",
"m": "n.调味品；穿衣",
"x": "dressing room 更衣室，化妆室",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈdrɛsɪŋ/"
},
{
"w": "dwelling",
"m": "n.住宅，寓所",
"x": "Listen for \"dwelling\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/dˈwɛlɪŋ/"
},
{
"w": "effect",
"m": "n.作用，影响；结果；效果，效力 v.产生，招致",
"x": "carry/bring into effect 使生效，实施",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈifɛkt/"
},
{
"w": "enclose",
"m": "v.包住，围住；把…装入信封",
"x": "an enclosed area 一个封闭的区域",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ɪnˈkloʊz/"
},
{
"w": "endure",
"m": "v.忍受，忍耐；维持，持续",
"x": "Listen for \"endure\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ɪnˈdʊr/"
},
{
"w": "entry",
"m": "n.进入，入口；通道；记载，条目",
"x": "entry into…进入…",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈɛntri/"
},
{
"w": "estate",
"m": "n.地产，房地产",
"x": "personal estate 动产",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ɛˈsteɪt/"
},
{
"w": "exhaust",
"m": "be exhausted from…因…而十分疲乏；exhaust pipe 排气管；exhaust emission 尾气；intake and exhaust system 进气和排气系统",
"x": "Listen for \"exhaust\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ɪgˈzɔst/"
},
{
"w": "extendable",
"m": "a.可展开的，可延长的",
"x": "extendable rod 拉杆",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌɛkˈstɛndəbəl/"
},
{
"w": "haul",
"m": "v.（用力）拖，拉；（用车等）拖运 n.拖，拉；一次获得的数量；运送的距离",
"x": "haul oneself up/out of 用力缓慢挪动到…",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/hɔl/"
},
{
"w": "hesitation",
"m": "n.犹豫",
"x": "without hesitation 没有犹豫",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌhɛzəˈteɪʃən/"
},
{
"w": "homestay",
"m": "n.（在国外的访问者）在当地居民家居住",
"x": "homestay family 寄宿家庭",
"c": "雅思听力1000词: 日常生活篇"
},
{
"w": "hospitality",
"m": "n.好客，殷勤，款待",
"x": "corporate hospitality 企业联谊，商务接待",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌhɑspəˈtæləti/"
},
{
"w": "indigestible",
"m": "a.难消化的；难理解的",
"x": "Listen for \"indigestible\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇"
},
{
"w": "install",
"m": "v.正式任命，使正式就职；安顿，安置；安装，设置",
"x": "install drinking machine 安装饮水机",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌɪnˈstɔl/"
},
{
"w": "instrumental",
"m": "a.起作用的，有帮助的；乐器的，仪器的",
"x": "Listen for \"instrumental\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌɪnstrəˈmɛnəl/"
},
{
"w": "insulation",
"m": "insulation layer 绝缘层；acoustic insulation 隔音；thermal insulation 隔热",
"x": "Listen for \"insulation\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌɪnsəˈleɪʃən/"
},
{
"w": "intensify",
"m": "v.（使）增强，（使）加剧",
"x": "intensify the functions 强化功能",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌɪnˈtɛnsɪˌfaɪ/"
},
{
"w": "interior",
"m": "a.内部的，里面的 n.内部；内地，内陆",
"x": "interior decoration 室内装潢",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌɪnˈtɪriər/"
},
{
"w": "interrupt",
"m": "interrupt the work 打扰工作",
"x": "Listen for \"interrupt\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌɪntərˈəpt/"
},
{
"w": "intimate",
"m": "a.亲密的，密切的；私人的",
"x": "be intimate with sb.与某人保持亲密关系",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈɪnɪmət/"
},
{
"w": "iron",
"m": "iron out 熨烫；解决，消除；cast iron 铸铁；iron man triathlon 铁人三项；iron and steel industry 钢铁工业；iron ore 铁矿石",
"x": "Listen for \"iron\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/aɪərn/"
},
{
"w": "jumble",
"m": "n.混杂，掺杂；待义卖的旧杂物 v.混杂，掺杂",
"x": "a jumble of 一堆",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈʤəmbəl/"
},
{
"w": "landfill",
"m": "n.垃圾堆；垃圾填筑地，废渣埋填地",
"x": "landfill site 垃圾掩埋地点",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈlændˌfɪl/"
},
{
"w": "layout",
"m": "n.布局，陈设",
"x": "layout of an office 办公室布局",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/leɪaʊt/"
},
{
"w": "line",
"m": "n.线条，界线；条纹，皱纹；方针，路线；线路，电话线；线，绳；排，行；（行进）路线，航线，铁路线；行业，专长 v.使排成一行；用线标出，画线于；排齐",
"x": "in line with 符合",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/laɪn/"
},
{
"w": "location",
"m": "n.位置，场所",
"x": "good location 好地段",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/loʊˈkeɪʃən/"
},
{
"w": "magnificent",
"m": "a.壮丽的，宏伟的；美丽的，动人的",
"x": "magnificent performance 出色表演",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/mægˈnɪfɪsənt/"
},
{
"w": "mansion",
"m": "n.公寓，府邸，公馆；大厦",
"x": "Listen for \"mansion\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈmænʃən/"
},
{
"w": "migration",
"m": "n.迁徙，移居",
"x": "migration patterns 迁徙方式",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/maɪˈgreɪʃən/"
},
{
"w": "misguide",
"m": "v.误导",
"x": "Listen for \"misguide\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/mɪsˈgaɪd/"
},
{
"w": "nutritional",
"m": "a.营养的",
"x": "nutritional status 营养状况",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/nuˈtrɪʃənəl/"
},
{
"w": "outskirt",
"m": "n.郊区",
"x": "Listen for \"outskirt\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈaʊtˌskərt/"
},
{
"w": "pellet",
"m": "n.小团，小球；小药丸；小弹丸",
"x": "shotgun pellets 霰弹弹丸",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈpɛlət/"
},
{
"w": "parallel",
"m": "a.平行的；类似的；相对应的 n.可相比拟的事物；相似处；平行线，平行面；纬线 v.与…相似，与…相当，比得上",
"x": "parallel to 与…平行",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈpɛrəˌlɛl/"
},
{
"w": "pattern",
"m": "n.型，模式，样式；花样，图案 v.仿制，按照…样子",
"x": "migration pattern 迁徙方式",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈpætərn/"
},
{
"w": "portable",
"m": "a.轻便的，便于携带的，手提式的",
"x": "portable computer 便携式电脑",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈpɔrtəbəl/"
},
{
"w": "possession",
"m": "n.持有，拥有；所有权；所有物；财产，财富",
"x": "in sb.'s possession 被某人占有",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/pəˈzɛʃən/"
},
{
"w": "postcode",
"m": "A：Do you know your postcode?I may get a wrong one.",
"x": "Listen for \"postcode\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇"
},
{
"w": "pretension",
"m": "n.声称；假装；要求，主张；自负，骄傲",
"x": "Listen for \"pretension\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/priˈtɛnʃən/"
},
{
"w": "pricey",
"m": "a.价格高的；昂贵的",
"x": "Listen for \"pricey\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈpraɪsi/"
},
{
"w": "provision",
"m": "n.供应，（一批）供应品；准备，预备；条款，规定；给养，口粮",
"x": "make provision 做好准备，预先采取措施",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/prəˈvɪʒən/"
},
{
"w": "proximity",
"m": "n.接近，邻近",
"x": "proximity to 亲近",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/prɑkˈsɪməti/"
},
{
"w": "radius",
"m": "n.半径",
"x": "with a twenty-meter radius 半径20米",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈreɪdiəs/"
},
{
"w": "random",
"m": "a.随机的，随意的 n.随机，随意",
"x": "at random 随机地，任意地",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈrændəm/"
},
{
"w": "reassurance",
"m": "n.再保证",
"x": "Listen for \"reassurance\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌriəˈʃʊrəns/"
},
{
"w": "recognise",
"m": "be recognized as sth.被认成某物",
"x": "Listen for \"recognise\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈrɛkəgˌnaɪz/"
},
{
"w": "refresh",
"m": "v.使恢复；使振作",
"x": "refresh sb.'s memory 恢复某人的记忆",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/rɪˈfrɛʃ/"
},
{
"w": "refundable",
"m": "adj.可退还的，可归还的，可偿还的",
"x": "The deposit on the house is refundable.这座房子的押金是可以退还的。",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/rɪˈfəndəbəl/"
},
{
"w": "remote",
"m": "a.长久的；偏僻的；关系疏远的；远的",
"x": "remote control 遥控器",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/rɪˈmoʊt/"
},
{
"w": "repaint",
"m": "v.重新油漆，重画",
"x": "repaint the wall 重新刷墙",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/riˈpeɪnt/"
},
{
"w": "resident",
"m": "a.居住的 n.居民，常住者",
"x": "urban resident 城镇居民",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈrɛzɪdənt/"
},
{
"w": "residential",
"m": "a.居住的；住宅的，住所的；提供住宿的",
"x": "residential property 住宅区",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˌrɛzɪˈdɛnʃəl/"
},
{
"w": "revert",
"m": "v.恢复，回复到",
"x": "revert to 回到，恢复到",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/rɪˈvərt/"
},
{
"w": "rough",
"m": "a.粗糙的；混乱的；艰难的；粗略的",
"x": "rough estimate 粗略估计",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/rəf/"
},
{
"w": "safety",
"m": "n.安全，保险；安全设备，保险装置",
"x": "safety regulations 安全规则",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈseɪfti/"
},
{
"w": "saucer",
"m": "n.茶托，碟子",
"x": "coffee saucer 咖啡碟",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈsɔsər/"
},
{
"w": "scale",
"m": "n.规模；等级；比例；刻度；天平；鳞 v.测量；攀登；剥落",
"x": "on a large scale 大规模地",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/skeɪl/"
},
{
"w": "separate",
"m": "a.分离的，分开的",
"x": "separate bedrooms 独立的卧室",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈsɛpərˌeɪt/"
},
{
"w": "serial",
"m": "a.连续的，按顺序排列的 n.连续剧，连载故事",
"x": "serial number 序号",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈsɪˌriəl/"
},
{
"w": "signage",
"m": "n.招牌",
"x": "Listen for \"signage\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈsaɪnɪʤ/"
},
{
"w": "situated",
"m": "a.位于…的，坐落在…的；处于…境地的",
"x": "conveniently situated 位置便利",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈsɪʧuˌeɪtɪd/"
},
{
"w": "snap",
"m": "v.咔嚓折断，啪地绷断；吧嗒一声关上或打开；猛咬，猛然断裂；厉声说话，怒声责备",
"x": "snap at sth.向…咬去",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/snæp/"
},
{
"w": "squeeze",
"m": "n.榨取，勒索 v.压榨，挤",
"x": "squeeze toothpaste 挤牙膏",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/skwiz/"
},
{
"w": "stack",
"m": "n.整齐的一叠（或一堆） v.把…叠成堆，堆放于；堆积，堆起",
"x": "reference stacks 书库",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/stæk/"
},
{
"w": "stainless",
"m": "a.无污点的；不锈的 n.不锈钢（餐具）",
"x": "stainless steel 不锈钢",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈsteɪnləs/"
},
{
"w": "stuck",
"m": "a.不能动的，被卡住的",
"x": "stuck on 被…迷住，特别喜欢",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/stək/"
},
{
"w": "stuff",
"m": "n.原料，材料，东西 v.填满，塞满",
"x": "stuff with 填满，塞满",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/stəf/"
},
{
"w": "surround",
"m": "v.包围，环绕",
"x": "be surrounded by sth.被…围绕",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/səraʊnd/"
},
{
"w": "switch",
"m": "n.开关，电闸；转换，转变；枝条，鞭子 v.转换；切断；接通",
"x": "switch to 转换",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/swɪʧ/"
},
{
"w": "threshold",
"m": "n.门槛；入门，开端",
"x": "be on the threshold of sth.在…的开端",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/θˈrɛˌʃoʊld/"
},
{
"w": "traceable",
"m": "a.可追踪的",
"x": "traceable cost 直接费用，追溯成本",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈtreɪsəbəl/"
},
{
"w": "transport",
"m": "public transport 公共交通工具；transport costs 运费；free transportation 免费交通",
"x": "Listen for \"transport\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈtrænspɔrt/"
},
{
"w": "trim",
"m": "a.整齐的，整洁的；装饰的 v./n.整理，修整，装饰",
"x": "trim lawns 整齐的草坪",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/trɪm/"
},
{
"w": "vital",
"m": "a.生死攸关的，极其重要的；充满生机的",
"x": "vital to/for sth.对…极其重要的，对…必不可少的",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈvaɪtəl/"
},
{
"w": "weigh",
"m": "v.称重量；认真考虑，权衡",
"x": "weigh advantages and disadvantages 权衡利弊",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/weɪ/"
},
{
"w": "whereabouts",
"m": "I still have no clue of his whereabouts.我仍然对他的下落一无所知。",
"x": "Listen for \"whereabouts\" in Section 1–4.",
"c": "雅思听力1000词: 日常生活篇",
"ipa": "/ˈwɛrəˌbaʊts/"
},
{
"w": "aborigine",
"m": "n.土著，土著居民",
"x": "Listen for \"aborigine\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌæbərˈɪʤəni/"
},
{
"w": "acclaim",
"m": "v.向…欢呼，为…喝彩 n.称赞，欢迎",
"x": "win worldwide acclaim 赢得广泛的赞誉",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/əˈkleɪm/"
},
{
"w": "accompany",
"m": "v.陪同，伴随；为…伴奏",
"x": "accompany training 陪练",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/əˈkəmpəni/"
},
{
"w": "activity",
"m": "n.活动；活性，活力",
"x": "academic activity 学术活动",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ækˈtɪvɪti/"
},
{
"w": "adventure",
"m": "n.冒险，冒险活动；奇遇",
"x": "spirit of adventure 冒险精神",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ədˈvɛnʧər/"
},
{
"w": "agency",
"m": "n.代理（处），代办处；机构",
"x": "Xinhua News Agency 新华社",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈeɪʤənsi/"
},
{
"w": "amazing",
"m": "a.惊人的，令人吃惊的",
"x": "an amazing bargain 令人惊讶的交易",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/əˈmeɪzɪŋ/"
},
{
"w": "appreciate",
"m": "appreciate doing sth.对某人做…表示感激",
"x": "Listen for \"appreciate\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/əˈpriʃiˌeɪt/"
},
{
"w": "atlas",
"m": "n.地图集",
"x": "Listen for \"atlas\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈætləs/"
},
{
"w": "attract",
"m": "attract sb.'s attention 引起…注意；attract people's interest 吸引人们的兴趣",
"x": "Listen for \"attract\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/əˈtrækt/"
},
{
"w": "backpack",
"m": "n.背包",
"x": "Listen for \"backpack\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈbækˌpæk/"
},
{
"w": "bent",
"m": "a bent nail 弯曲的钉子；be bent on doing sth.决定做某事",
"x": "Listen for \"bent\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/bɛnt/"
},
{
"w": "brilliant",
"m": "brilliant sunshine 灿烂的阳光；brilliant idea 极好的想法",
"x": "Listen for \"brilliant\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈbrɪljənt/"
},
{
"w": "camp",
"m": "n.野营，露营；帐篷；营地 v.设营，宿营",
"x": "camping equipment 野营用品",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/kæmp/"
},
{
"w": "capture",
"m": "v.捕获，俘获；引起（注意），迷住",
"x": "passive capture 被动袭击",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈkæpʧər/"
},
{
"w": "character",
"m": "n.性格，品质；特性，特征；人物，角色；字符，（汉）字",
"x": "character trait 性格特征",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈkɛrɪktər/"
},
{
"w": "commodity",
"m": "commodity economy 商品经济；a commodities fair 商品交易会；commodity price 商品价格；agricultural commodities 农业产品；commodity inspection 商品检查",
"x": "Listen for \"commodity\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/kəˈmɑdəti/"
},
{
"w": "convenient",
"m": "a.便利的，方便的",
"x": "be convenient for 对…来说很方便",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/kənˈvinjənt/"
},
{
"w": "decorate",
"m": "v.装饰，装潢，布置；授勋",
"x": "Listen for \"decorate\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈdɛkərˌeɪt/"
},
{
"w": "decoration",
"m": "n.装饰，装潢；装饰品",
"x": "decoration balloons 装饰气球",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌdɛkərˈeɪʃən/"
},
{
"w": "deliver",
"m": "v.交付，递送；发表，表达；释放；接生",
"x": "deliver a speech 发表演讲",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/dɪˈlɪvər/"
},
{
"w": "density",
"m": "n.密集；密度；浓度",
"x": "population density 人口密度",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈdɛnsɪti/"
},
{
"w": "depict",
"m": "v.描绘；描述",
"x": "Listen for \"depict\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/dɪˈpɪkt/"
},
{
"w": "destination",
"m": "n.目的地，终点",
"x": "tourist destination 旅游目的地",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌdɛstɪˈneɪʃən/"
},
{
"w": "detach",
"m": "v.分开，拆开",
"x": "detach from 从…分离",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈdɪˌtæʧ/"
},
{
"w": "direct",
"m": "a./ad.径直的/地，直接的/地 v.管理，指导；指向，针对",
"x": "direct result 直接结果",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/dɪˈrɛkt/"
},
{
"w": "display",
"m": "v./n.陈列，展览，显示",
"x": "on display 展示，陈列",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/dɪˈspleɪ/"
},
{
"w": "distance",
"m": "n.距离；远方；路程",
"x": "in the distance 在远处",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈdɪstəns/"
},
{
"w": "diversion",
"m": "n.转向，转移",
"x": "create a diversion 转移别人的注意力",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/dɪˈvərʒən/"
},
{
"w": "entertain",
"m": "v.招待，款待；娱乐",
"x": "entertain sb.with sth.用…娱乐/款待某人",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌɛnərˈteɪn/"
},
{
"w": "expedition",
"m": "n.远征（队），探险（队）",
"x": "on an expedition to 去…探险",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌɛkspəˈdɪʃən/"
},
{
"w": "eye-opener",
"m": "n.令人大开眼界的东西",
"x": "Listen for \"eye-opener\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇"
},
{
"w": "fancy",
"m": "a.奇特的；想象的；精选的 n.爱好；幻想；想象力 v.想象，幻想",
"x": "have a fancy for 喜欢，想要",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈfænsi/"
},
{
"w": "fascinate",
"m": "v.迷住，强烈吸引",
"x": "be fascinated by 被…迷住",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈfæsəˌneɪt/"
},
{
"w": "fascinating",
"m": "a.迷人的，有极大吸引力的",
"x": "find sth.fascinating 发现…吸引人",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈfæsəˌneɪtɪŋ/"
},
{
"w": "festival",
"m": "n.节日；庆祝，纪念活动；欢乐",
"x": "film festival 电影节",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈfɛstɪvəl/"
},
{
"w": "fire",
"m": "n.火；热情，激情 v.开火；射击；点火；着火",
"x": "catch fire 着火",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/faɪər/"
},
{
"w": "flexibility",
"m": "n.柔韧，弹性；柔顺，温顺；灵活性",
"x": "flexibility of mind 头脑的灵活性",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌflɛksəˈbɪləti/"
},
{
"w": "gamble",
"m": "gamble away 赌博输掉；投机，冒险；a gambling house 赌场；gamble in stocks 股票投机",
"x": "Listen for \"gamble\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈgæmbəl/"
},
{
"w": "guarantee",
"m": "n.保证，保证书 v.保证，担保",
"x": "guarantee sb.sth.向某人保证某事",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌgɛrənˈti/"
},
{
"w": "historic",
"m": "a.有历史意义的；历史的",
"x": "historic moment 历史性的时刻",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/hɪˈstɔrɪk/"
},
{
"w": "hobby",
"m": "n.业余爱好，嗜好，兴趣",
"x": "Listen for \"hobby\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈhɑbi/"
},
{
"w": "impressive",
"m": "a.给人深刻印象的；感人的；威严的",
"x": "most impressive place 给人印象最深的地方",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌɪmˈprɛsɪv/"
},
{
"w": "intrigue",
"m": "v.激起…的好奇心（或兴趣）",
"x": "be intrigued by 被激起好奇心",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌɪnˈtrig/"
},
{
"w": "launch",
"m": "n.发射；下水；（新产品的）发行，投放市场 v.发射；使下水；发动，发起",
"x": "launch into sth.勇于采取某行动",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/lɔnʧ/"
},
{
"w": "lodging",
"m": "n.寄宿宿舍，租住的房间；寄宿，借宿",
"x": "lodging house 宿舍，公寓",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈlɑʤɪŋ/"
},
{
"w": "marvelous",
"m": "n.令人惊异的；了不起的；非凡的；不平常的",
"x": "Listen for \"marvelous\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈmɑrvələs/"
},
{
"w": "match",
"m": "n.火柴；比赛；对手；匹配 v.匹配，相称",
"x": "football match 足球赛",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/mæʧ/"
},
{
"w": "migratory",
"m": "a.迁徙的；流浪的",
"x": "migratory birds 迁徙的鸟类，候鸟类",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈmaɪgrəˌtɔri/"
},
{
"w": "monolith",
"m": "n.巨型独石",
"x": "concrete monolith 混凝土大块体",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈmɑnəˌlɪθ/"
},
{
"w": "nominal",
"m": "a.名义上的；（金额、租金）微不足道的",
"x": "nominal head 名义上的领导人",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈnɑmənəl/"
},
{
"w": "operate",
"m": "v.运转；动手术；起作用；操作；经营",
"x": "operate a tutorial system 开设一个辅导系统",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈɔpərˌeɪt/"
},
{
"w": "orchard",
"m": "n.果园",
"x": "orchard soil 果园土壤",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈɔrʧərd/"
},
{
"w": "organise",
"m": "v.组织，安排",
"x": "organise an activity 组织一次活动",
"c": "雅思听力1000词: 旅游休闲篇"
},
{
"w": "ornament",
"m": "n.装饰；装饰物 v.装饰，美化",
"x": "for ornament 用于装饰",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈɔrnəmənt/"
},
{
"w": "public",
"m": "a.公共的，公用的；公开的，公然的 n.公众，民众",
"x": "in public 公开地，当众",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈpəblɪk/"
},
{
"w": "relax",
"m": "v.（使）松弛，放松；休息",
"x": "relax your mind 放松思维",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/rɪˈlæks/"
},
{
"w": "reservation",
"m": "n.保留，保留意见；预订，预订的座位、房间等",
"x": "an airline reservation 预订航班",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˌrɛzərˈveɪʃən/"
},
{
"w": "retailer",
"m": "n.零售商；传播者",
"x": "Listen for \"retailer\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈriˌteɪlər/"
},
{
"w": "reunion",
"m": "n.重聚，团聚；（久别后的）聚会，联谊活动",
"x": "annual reunion 年度聚会",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/riˈunjən/"
},
{
"w": "sanctuary",
"m": "n.圣堂，圣地；庇护所，避难所；禁猎区，动物护区",
"x": "bird sanctuary 鸟类保护区",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈsæŋkʧuˌɛri/"
},
{
"w": "screening",
"m": "n.上映，放映",
"x": "Listen for \"screening\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈskrinɪŋ/"
},
{
"w": "sensation",
"m": "n.感觉，知觉；激动，轰动；轰动一时的事情",
"x": "sth.caused a great sensation 某事很轰动",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/sɛnˈseɪʃən/"
},
{
"w": "service",
"m": "n.服务；公共设施，公用机构；维修 v.维修；服务",
"x": "airline coach service航空公司汽车服务处",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈsərvɪs/"
},
{
"w": "sledge",
"m": "n.雪橇",
"x": "Listen for \"sledge\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/slɛʤ/"
},
{
"w": "slice",
"m": "n.薄片，切片；一份；部分",
"x": "a slice of 一片，一小块，一部分",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/slaɪs/"
},
{
"w": "spectator",
"m": "n.观众；旁观者，目击者",
"x": "spectator sport 吸引很多观众的体育项目",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈspɛkteɪtər/"
},
{
"w": "spend",
"m": "v.花费；消耗，用尽；度过，消磨",
"x": "spend money/time on sth.在某事上花钱/花时间",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/spɛnd/"
},
{
"w": "spire",
"m": "n.尖塔，尖顶",
"x": "spire roof 尖塔屋顶",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/spaɪr/"
},
{
"w": "spoil",
"m": "v.损坏；宠坏 n.战利品",
"x": "spoil the sport 令人扫兴（灰心）",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/spɔɪl/"
},
{
"w": "spot",
"m": "on the spot 在现场；hot spot 热点；spot on 把…滴在…上；scenic spot 景点",
"x": "Listen for \"spot\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/spɑt/"
},
{
"w": "stretch",
"m": "n.一段时间；一段路程；拉长，延伸 v.拉长，延伸",
"x": "at a stretch 一口气地，连续地",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/strɛʧ/"
},
{
"w": "symphony",
"m": "n.交响乐，交响曲；（色彩等的）和谐，协调",
"x": "a symphony orchestra 交响乐团",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈsɪmfəni/"
},
{
"w": "trap",
"m": "n.陷阱，圈套 v.使中圈套；使陷入困境；使受限制",
"x": "fall into a trap 陷入圈套",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/træp/"
},
{
"w": "trek",
"m": "v.艰苦跋涉",
"x": "Listen for \"trek\" in Section 1–4.",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/trɛk/"
},
{
"w": "trend",
"m": "n.倾向，趋势 v.倾向，趋向",
"x": "a downward trend 向下的趋势",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/trɛnd/"
},
{
"w": "trial",
"m": "n.审讯；试验；努力；磨炼",
"x": "clinical trials 临床试验",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/traɪəl/"
},
{
"w": "tropical",
"m": "a.热带的",
"x": "tropical condition 热带环境",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈtrɑpɪkəl/"
},
{
"w": "wonder",
"m": "n.惊异；奇迹；奇事 v.诧异，奇怪；纳闷，想知道",
"x": "no wonder 难怪，怪不得",
"c": "雅思听力1000词: 旅游休闲篇",
"ipa": "/ˈwəndər/"
},
{
"w": "advertisement",
"m": "advertisement industry 广告业；advertisement expense 广告费用",
"x": "Listen for \"advertisement\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌædvərˈtaɪzmənt/"
},
{
"w": "blame",
"m": "n.责任；过失；责备 v.责备；把…归咎于",
"x": "blame sb./sth.for sth.因…责备，把…归咎于",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/bleɪm/"
},
{
"w": "bubble",
"m": "n.泡，泡沫；水泡，气泡 v.冒泡，起泡，沸腾",
"x": "bubble economy 泡沫经济",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈbəbəl/"
},
{
"w": "burglar",
"m": "burglar alarm 窃贼报警器",
"x": "Listen for \"burglar\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈbərglər/"
},
{
"w": "cabinet",
"m": "n.内阁；贮藏柜，陈列柜",
"x": "Listen for \"cabinet\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkæbənət/"
},
{
"w": "census",
"m": "n.人口调查",
"x": "unemployment census 失业调查",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈsɛnsəs/"
},
{
"w": "comment",
"m": "comment on 对…发表评论",
"x": "Listen for \"comment\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkɑmɛnt/"
},
{
"w": "commercial",
"m": "a.商业的，商务的，贸易的",
"x": "commercial intercourse 通商",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/kəˈmərʃəl/"
},
{
"w": "comparable",
"m": "a.可比较的；比得上的",
"x": "be comparable with 与…可比较的",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkɑmprəbəl/"
},
{
"w": "complicate",
"m": "v.（使）变复杂",
"x": "complicate matters 使事情复杂化",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkɑmpləˌkeɪt/"
},
{
"w": "confine",
"m": "v.限制，局限于；管制，禁闭",
"x": "confine to 限制于…之内",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/kənˈfaɪn/"
},
{
"w": "congress",
"m": "n.（代表）大会；国会，议会",
"x": "the support of congress 国会的支持",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkɑŋgrəs/"
},
{
"w": "conquer",
"m": "v.征服，战胜；攻克，攻取",
"x": "conquer your fear 战胜恐惧",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkɑŋkər/"
},
{
"w": "consensus",
"m": "n.共识；（意见）一致",
"x": "value consensus 价值共识",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/kənˈsɛnsəs/"
},
{
"w": "consumption",
"m": "n.消费（量）；消耗",
"x": "consumption pattern 消费模式",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/kənˈsəmʃən/"
},
{
"w": "continuous",
"m": "a.连续的，持续的",
"x": "continuous flow 持续气流",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/kənˈtɪnjuəs/"
},
{
"w": "conventional",
"m": "a.普通的，习惯的；因循守旧的，传统的",
"x": "conventional crime 传统型犯罪",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/kənˈvɛnʃənəl/"
},
{
"w": "corporate",
"m": "a.团体的，共同的；法人的，公司的",
"x": "corporate crime 企业犯罪",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkɔrpərət/"
},
{
"w": "councilor",
"m": "n.议会议员",
"x": "Privy Councilor 智囊团，枢密院官员",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkaʊnsɪlər/"
},
{
"w": "counteract",
"m": "v.对抗，抵消",
"x": "counteract inflation 反通货膨胀",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkaʊntərˌækt/"
},
{
"w": "creep",
"m": "v.悄悄地移动；缓慢地行进；爬行",
"x": "creep in 悄悄跟进",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/krip/"
},
{
"w": "crime",
"m": "n.罪行，犯罪",
"x": "campus crime 校园犯罪",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/kraɪm/"
},
{
"w": "critical",
"m": "a.批评的，评论的；危急的，紧要的；临界的；挑剔的",
"x": "critical of 对…挑剔的，批评的",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈkrɪtɪkəl/"
},
{
"w": "crush",
"m": "n.压碎；压榨；迷恋 v.制服，压垮",
"x": "crush a rebellion 压制反抗",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/krəʃ/"
},
{
"w": "decline",
"m": "n.下降，衰落；斜面，倾斜 v.下降，衰落；倾斜；拒绝，谢绝",
"x": "on the decline 在衰退中",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/dɪˈklaɪn/"
},
{
"w": "deny",
"m": "v.否认，否定；拒绝",
"x": "deny oneself 节制，戒除",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/dɪˈnaɪ/"
},
{
"w": "depression",
"m": "n.抑郁，沮丧；不景气，萧条（期）",
"x": "the Great Depression 大萧条",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/dɪˈprɛʃən/"
},
{
"w": "devastate",
"m": "v.毁坏；使垮掉，压倒",
"x": "be devastated by 被…毁坏",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈdɛvəˌsteɪt/"
},
{
"w": "disruption",
"m": "n.分裂，断裂；毁坏",
"x": "plane of disruption 断裂面",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/dɪsˈrəpʃən/"
},
{
"w": "distortion",
"m": "n.失真，变形，扭曲",
"x": "image distortion 图像失真",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/dɪˈstɔrʃən/"
},
{
"w": "domestic",
"m": "a.家里的，家庭的；本国的；驯养的",
"x": "domestic appliance 家用器具",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/dəˈmɛstɪk/"
},
{
"w": "donation",
"m": "n.捐赠，赠送；捐赠物，捐款",
"x": "generous donation 慷慨的捐赠",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/doʊˈneɪʃən/"
},
{
"w": "dormancy",
"m": "n.休眠；催眠状态；隐匿",
"x": "Listen for \"dormancy\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈdɔrmənsi/"
},
{
"w": "drought",
"m": "n.干旱，旱灾",
"x": "Listen for \"drought\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/draʊt/"
},
{
"w": "electrical",
"m": "a.电的；电学的",
"x": "electrical fault 电器故障",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ɪˈlɛktrɪkəl/"
},
{
"w": "embassy",
"m": "n.大使馆",
"x": "the American Embassy in Paris 美国驻巴黎大使馆",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈɛmbəsi/"
},
{
"w": "enforce",
"m": "v.实施，执行；强迫，迫使坚持（要求、主张等）",
"x": "enforce laws 执法",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ɛnˈfɔrs/"
},
{
"w": "ethical",
"m": "a.道德的；合乎道德的",
"x": "ethical standards 道德标准",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈɛθɪkəl/"
},
{
"w": "exile",
"m": "n.流放，流亡；被流放者，被放逐者 v.流放，使流亡",
"x": "in exile 流放中",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈɛkˌsaɪl/"
},
{
"w": "exotic",
"m": "a.奇异的；外来的；异国情调的",
"x": "exotic experience 异国体验",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ɪgˈzɑtɪk/"
},
{
"w": "export",
"m": "export rebates 出口退税；export finance 出口信贷；export restriction 出口限制",
"x": "Listen for \"export\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈɛkspɔrt/"
},
{
"w": "familiarize",
"m": "v.使熟悉",
"x": "familiarize yourself with sth.使自己与…熟悉",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/fəˈmɪljərˌaɪz/"
},
{
"w": "farming",
"m": "a.农业的，农事的；耕种的 n.农业，农事",
"x": "farming products 农产品",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈfɑrmɪŋ/"
},
{
"w": "far-reaching",
"m": "a.深远的；广泛的",
"x": "far-reaching influence 深远的影响",
"c": "雅思听力1000词: 社会生活篇"
},
{
"w": "flourish",
"m": "The economy in the country is blooming and tourism is flourishing.该国的经济繁荣，旅游业兴旺。",
"x": "Listen for \"flourish\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/flərɪʃ/"
},
{
"w": "fraud",
"m": "n.欺诈，诈骗；骗子",
"x": "fraud scandal 诈骗丑闻",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/frɔd/"
},
{
"w": "gallop",
"m": "v./n.奔驰，飞跑",
"x": "at a gallop 以最快速度，急速地",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈgæləp/"
},
{
"w": "gear",
"m": "n.齿轮，传动装置 v.调整，使适合",
"x": "gear to/towards调整，使适合",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/gɪr/"
},
{
"w": "generate",
"m": "v.产生，发生",
"x": "generate electricity 发电",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈʤɛnərˌeɪt/"
},
{
"w": "government",
"m": "under a government 在政府统治期间；in government 统治，支配",
"x": "Listen for \"government\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈgəvərnmənt/"
},
{
"w": "harness",
"m": "v.治理；利用",
"x": "harness a river 治河",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈhɑrnɪs/"
},
{
"w": "horrify",
"m": "v.使恐惧，使惊骇；使反感",
"x": "Listen for \"horrify\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈhɔrəˌfaɪ/"
},
{
"w": "ignore",
"m": "v.不顾，不理，忽视",
"x": "ignore the fact 忽视事实",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪgˈnɔr/"
},
{
"w": "illegal",
"m": "a.不合法的，违法的",
"x": "illegal profit 非法利润",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪˈligəl/"
},
{
"w": "implement",
"m": "v.使生效，实施 n.工具",
"x": "measuring implement 测量仪器",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈɪmpləmənt/"
},
{
"w": "improvement",
"m": "improvement in 在…方面的改进、好转",
"x": "Listen for \"improvement\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪmˈpruvmənt/"
},
{
"w": "incentive",
"m": "n.刺激，动机",
"x": "financial incentive 财务奖励",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪnˈsɛnɪv/"
},
{
"w": "incur",
"m": "v.招致；遭受",
"x": "incur debt 负债",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪnˈkər/"
},
{
"w": "indifferent",
"m": "n.冷漠，不关心",
"x": "indifferent to 对…漠不关心",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪnˈdɪfərənt/"
},
{
"w": "inform",
"m": "v.通知，告诉；告发，告密",
"x": "inform sb.of/about sth.通知，告诉",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪnˈfɔrm/"
},
{
"w": "intentional",
"m": "a.存心的，故意的",
"x": "intentional crime 故意犯罪",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪnˈtɛnʃənəl/"
},
{
"w": "invade",
"m": "v.侵犯，侵入，侵略，侵袭",
"x": "Listen for \"invade\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌɪnˈveɪd/"
},
{
"w": "isolated",
"m": "a.孤立的，隔离的",
"x": "isolated operation 单独运行",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈaɪsəˌleɪtɪd/"
},
{
"w": "loyalty",
"m": "n.忠诚，忠心",
"x": "national loyalty 国家忠诚",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈlɔɪəlti/"
},
{
"w": "margin",
"m": "n.差额，差距；页边空白；边缘；余地；幅度",
"x": "by a small margin 以极小优势",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈmɑrʤən/"
},
{
"w": "mass",
"m": "a.大规模的，群众的 n.大量，众多；团，块；群众，民众；质量",
"x": "mass production 大规模生产",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/mæs/"
},
{
"w": "media",
"m": "n.媒体；介质",
"x": "mass media 大众传媒",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈmidiə/"
},
{
"w": "medium",
"m": "a.中等的，适中的 n.中间，适中；媒介物，介质",
"x": "medium sized 中等尺寸的",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈmidiəm/"
},
{
"w": "miniature",
"m": "n.缩图，缩影；小画像 a.小型的，微小的",
"x": "in miniature 小规模的",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈmɪnɪˌʧʊr/"
},
{
"w": "moisten",
"m": "v.使潮湿",
"x": "moisten one's clay 喝酒",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈmɔɪsən/"
},
{
"w": "monopoly",
"m": "n.垄断，专卖",
"x": "Listen for \"monopoly\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/məˈnɑpəli/"
},
{
"w": "morality",
"m": "n.道德，美德",
"x": "public morality 公共道德",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌmɔˈræləˌti/"
},
{
"w": "narrator",
"m": "n.叙述者，讲述者；解说员",
"x": "Listen for \"narrator\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈnɛreɪtər/"
},
{
"w": "natural",
"m": "a.正常的，自然的；自然界的，天然的；天赋的，固有的",
"x": "natural disaster 自然灾害",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈnæʧərəl/"
},
{
"w": "onward",
"m": "a.向前的，前进的",
"x": "onward march 前进的行程",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈɔnwərd/"
},
{
"w": "oversee",
"m": "v.俯瞰，眺望；监督，监视",
"x": "oversee the project 监督这个项目",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈoʊvərˌsi/"
},
{
"w": "ozone",
"m": "n.臭氧；新鲜空气",
"x": "ozone layer 臭氧层",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈoʊˌzoʊn/"
},
{
"w": "percentage",
"m": "n.百分数，百分率，百分比",
"x": "Listen for \"percentage\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/pərˈsɛnɪʤ/"
},
{
"w": "pottery",
"m": "n.陶器，陶瓷器皿；陶瓷制造（术）；陶瓷厂",
"x": "a pottery bowl 瓷碗",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈpɑtəri/"
},
{
"w": "poverty",
"m": "n.贫穷，贫困",
"x": "live in poverty 生活在贫困中",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈpɑvərti/"
},
{
"w": "powerful",
"m": "a.强大的，有力的；有权的",
"x": "powerful argument 有力的论据",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈpaʊərfəl/"
},
{
"w": "precise",
"m": "a.精确的，准确的",
"x": "to be precise 准确地说",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/prɪˈsaɪs/"
},
{
"w": "prey",
"m": "n.被捕食的动物，捕获物；牺牲品，战利品 v.捕食；折磨，使烦恼",
"x": "prey on insects 以捕食昆虫为生",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/preɪ/"
},
{
"w": "profound",
"m": "a.深刻的，意义深远的；渊博的，造诣深的",
"x": "a profound sleep 酣睡",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/proʊˈfaʊnd/"
},
{
"w": "prosperous",
"m": "a.繁荣的，兴旺的",
"x": "a prosperous city 兴旺发达的城市",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈprɑspərəs/"
},
{
"w": "publicity",
"m": "n.宣传，宣扬；公众的注意，名声",
"x": "seek publicity 想出风头",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/pəˈblɪsɪti/"
},
{
"w": "raise",
"m": "v.举起，提高；增加；饲养，养育；引起；竖起；提出，发起",
"x": "raise fund 集资",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/reɪz/"
},
{
"w": "ration",
"m": "n.配给量，定量；给养，口粮 v.配给供应，定量供应；对…实行配给，向…提供给养",
"x": "the weekly meat ration 每周的肉量配给",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈræʃən/"
},
{
"w": "raw",
"m": "a.自然状态的，未加工过的；未煮过的，生的；生疏无知的，未经训练的；（伤口等）未愈的，流血的",
"x": "raw material 原材料",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/rɑ/"
},
{
"w": "recycle",
"m": "v.回收利用，再利用",
"x": "Listen for \"recycle\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/riˈsaɪkəl/"
},
{
"w": "referee",
"m": "n.裁判（员）；仲裁人，调停人；证明人，介绍人 v.裁判；仲裁，调停",
"x": "to be the referee of a game 成为一项运动的裁判",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˌrɛfərˈi/"
},
{
"w": "regional",
"m": "a.局部范围的；地方（性）的，区域性的；全地区的，整个地区的",
"x": "regional accent 地方口音",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈriʤənəl/"
},
{
"w": "relation",
"m": "n.关系，联系；亲属，亲戚",
"x": "in/with relation to 关系到",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/riˈleɪʃən/"
},
{
"w": "release",
"m": "n.发表，发布 v.释放，解脱；发表，发行",
"x": "release news 发布新闻",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/riˈlis/"
},
{
"w": "relief",
"m": "n.（痛苦等）减轻，解除；援救，救济",
"x": "to one's relief 令…感到欣慰的是",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/rɪˈlif/"
},
{
"w": "remit",
"m": "n.职权范围",
"x": "Listen for \"remit\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/riˈmɪt/"
},
{
"w": "rescue",
"m": "v./n.营救，援救",
"x": "rescue sb.from danger 营救某人脱险",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈrɛskju/"
},
{
"w": "reveal",
"m": "v.揭露，泄露；揭示；展现，显示",
"x": "reveal secret 泄露秘密",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/rɪˈvil/"
},
{
"w": "risk",
"m": "n.冒险；风险 v.冒险",
"x": "run/take…the risk of 冒…的风险",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/rɪsk/"
},
{
"w": "scandal",
"m": "n.丑事，丑闻；恶意诽谤；流言蜚语；反感，愤慨",
"x": "financial scandal 财政丑闻",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈskændəl/"
},
{
"w": "scatter",
"m": "v.（使人或动物）散开，驱散；散布，散播",
"x": "scatter…over…把…撒在…上面",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈskætər/"
},
{
"w": "secretary",
"m": "n.秘书；书记；部长，大臣",
"x": "Secretary of State 国务大臣，国务卿",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈsɛkrəˌtɛri/"
},
{
"w": "settle",
"m": "v.安顿；定居；解决；平静",
"x": "settle down 定居，过安定的生活",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈsɛtəl/"
},
{
"w": "shortage",
"m": "n.不足，缺少",
"x": "financial shortage 缺钱",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈʃɔrtɪʤ/"
},
{
"w": "social",
"m": "a.社会的；交际的",
"x": "social workers 社工，志愿者",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈsoʊʃəl/"
},
{
"w": "steam",
"m": "n.（蒸）汽，气雾 v.冒蒸汽；（火车、轮船）行驶；蒸煮",
"x": "steam engine 蒸汽机",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/stim/"
},
{
"w": "succeed",
"m": "v.成功；继承，接替",
"x": "succeed in doing sth./sth.在（做）…中取得成功",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/səkˈsid/"
},
{
"w": "tendency",
"m": "n.趋向，趋势",
"x": "tendency to do…做…的趋势",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈtɛndənsi/"
},
{
"w": "territory",
"m": "n.领土，版图；领域，范围",
"x": "Listen for \"territory\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈtɛrɪˌtɔri/"
},
{
"w": "threaten",
"m": "v.恐吓，威胁；预示；可能来临",
"x": "be threatened with sth.被某物吓到",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/θˈrɛtən/"
},
{
"w": "traditional",
"m": "a.传统的，惯例的；口传的，传说的",
"x": "traditional view 传统观点",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/trəˈdɪʃənəl/"
},
{
"w": "trigger",
"m": "n.扳机 v.引发，导致",
"x": "Listen for \"trigger\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈtrɪgər/"
},
{
"w": "utilize",
"m": "v.利用，使用",
"x": "utilize for 用于",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈjutəˌlaɪz/"
},
{
"w": "valuable",
"m": "a.贵重的，有价值的 n.贵重物品，财宝",
"x": "valuable belongings 贵重的财产",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈvæljəbəl/"
},
{
"w": "verdict",
"m": "court verdict 判词，法院的裁定",
"x": "Listen for \"verdict\" in Section 1–4.",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈvərdɪkt/"
},
{
"w": "victim",
"m": "n.牺牲品，受害者",
"x": "fall victim to 成为…的牺牲品",
"c": "雅思听力1000词: 社会生活篇",
"ipa": "/ˈvɪktɪm/"
},
{
"w": "adjust",
"m": "adjust a policy 调整政策；adjust expenses to income 量入为出；adjust a watch 调表",
"x": "Listen for \"adjust\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/əˈʤəst/"
},
{
"w": "allow",
"m": "v.允许，同意；考虑",
"x": "allow for 考虑到",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/əˈlaʊ/"
},
{
"w": "ambition",
"m": "n.雄心，野心",
"x": "fulfill one's ambition 实现抱负",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/æmˈbɪʃən/"
},
{
"w": "application",
"m": "n.请求，申请（书、表）；应用，运用；施用，敷用",
"x": "application for 申请…",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˌæpləˈkeɪʃən/"
},
{
"w": "arrange",
"m": "v.整理，排列，布置；安排，筹划",
"x": "arrange for…to do…安排…做…",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/əreɪnʤ/"
},
{
"w": "assistance",
"m": "n.帮助，援助；补助",
"x": "financial assistance 财政援助",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/əˈsɪstəns/"
},
{
"w": "background",
"m": "n.背景，经历",
"x": "educational/cultural/family background 教育/文化/家庭背景",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈbækˌgraʊnd/"
},
{
"w": "branch",
"m": "main branch 主枝；主要的支行；local branch 本地分店",
"x": "Listen for \"branch\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/brænʧ/"
},
{
"w": "cater",
"m": "v.迎合；提供饮食及服务",
"x": "cater for 迎合…",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈkeɪtər/"
},
{
"w": "ceremony",
"m": "n.典礼，仪式；礼节，礼仪",
"x": "opening/closing ceremony 开/闭幕式",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈsɛrəˌmoʊni/"
},
{
"w": "challenge",
"m": "n.挑战；质问 v.向…挑战；对…质疑",
"x": "face a challenge 面对挑战",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈʧælənʤ/"
},
{
"w": "conference",
"m": "n.会议，讨论会",
"x": "press conference 记者招待会",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈkɑnfərəns/"
},
{
"w": "confidence",
"m": "n.信任；信心；秘密，机密",
"x": "confidence in/into 信任",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈkɑnfədɛns/"
},
{
"w": "contain",
"m": "v.包含，容纳；控制，抑制",
"x": "Listen for \"contain\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/kənˈteɪn/"
},
{
"w": "conversation",
"m": "n.会话，谈话",
"x": "Listen for \"conversation\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˌkɑnvərˈseɪʃən/"
},
{
"w": "council",
"m": "n.会议；委员会，理事会；开会",
"x": "Listen for \"council\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈkaʊnsəl/"
},
{
"w": "course",
"m": "n.课程，教程；过程，进程；路程，路线；一道菜",
"x": "in the course of 在…过程中，在…期间",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/kɔrs/"
},
{
"w": "department",
"m": "n.部，局，处，科，部门；系，学部",
"x": "Listen for \"department\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/dɪˈpɑrtmənt/"
},
{
"w": "detail",
"m": "n.细节，详情 v.详述",
"x": "in detail 详细地",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈditeɪl/"
},
{
"w": "division",
"m": "n.分，分割；部门，科，处；除法",
"x": "division of labour 分工",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/dɪˈvɪʒən/"
},
{
"w": "divisional",
"m": "a.分开的，分割的；部门的",
"x": "Listen for \"divisional\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/dɪˈvɪʒənəl/"
},
{
"w": "effort",
"m": "n.努力，艰难的尝试",
"x": "make an/every effort 努力",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈɛfərt/"
},
{
"w": "enquire",
"m": "v.打听，询问；查问，调查",
"x": "Listen for \"enquire\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ɪnkˈwaɪər/"
},
{
"w": "expectancy",
"m": "n.期待，预期",
"x": "life expectancy 寿命",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ɪkˈspɛktənsi/"
},
{
"w": "external",
"m": "a.外部的，外面的",
"x": "an external wound 外伤",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ɪkˈstərnəl/"
},
{
"w": "fill",
"m": "v.填满，充满",
"x": "fill in/out 装满，填充，填写（表格等）",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/fɪl/"
},
{
"w": "gather",
"m": "v.聚集，聚拢",
"x": "gather in 收割",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈgæðər/"
},
{
"w": "guidance",
"m": "n.引导，指导",
"x": "moral guidance 精神指导",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈgaɪdəns/"
},
{
"w": "handle",
"m": "n.柄，把手，拉手 v.处理，对待；触，摸",
"x": "Listen for \"handle\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈhændəl/"
},
{
"w": "independent",
"m": "a.独立的，自主的",
"x": "independent of 独立的，不受约束的",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˌɪndɪˈpɛndənt/"
},
{
"w": "institution",
"m": "n.公共机构，协会，学校；制度，惯例",
"x": "institution of higher learning 高等院校",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˌɪnstɪˈtuʃən/"
},
{
"w": "international",
"m": "a.国际的，世界的",
"x": "international student card 留学生证",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˌɪnərˈnæʃənɑl/"
},
{
"w": "introduce",
"m": "v.介绍；传入，引进；提出；采用，推行",
"x": "introduce a course 介绍一门课程",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˌɪntrəˈdus/"
},
{
"w": "introduction",
"m": "n.介绍；传入，引进；导言，绪论",
"x": "Listen for \"introduction\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˌɪntrəˈdəkʃən/"
},
{
"w": "objective",
"m": "a.客观的，真实的 n.目标，目的",
"x": "strategic objective 战略目标",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/əˈbʤɛktɪv/"
},
{
"w": "optional",
"m": "a.可以任选的，非强制的",
"x": "optional course 选修课",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈɔpʃənəl/"
},
{
"w": "orientate",
"m": "v.使适应；给…定位；面向",
"x": "Listen for \"orientate\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇"
},
{
"w": "orientation",
"m": "n.定位；方向，目标；熟悉，适应，情况介绍",
"x": "orientation meeting 介绍会",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˌɔriɛnˈteɪʃən/"
},
{
"w": "overseas",
"m": "a.外国的，海外的",
"x": "overseas market 海外市场",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈoʊvərˈsiz/"
},
{
"w": "pardon",
"m": "n.原谅，宽恕；请再说一遍 v.原谅，饶恕，赦免",
"x": "Listen for \"pardon\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈpɑrdən/"
},
{
"w": "personal",
"m": "a.个人的，私人的；亲自的，本人的；身体的，人身的",
"x": "personal loan 个人贷款",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈpərsɪnəl/"
},
{
"w": "pledge",
"m": "n.誓约；保证 v.发誓；保证",
"x": "fulfill one's pledge 履行诺言",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/plɛʤ/"
},
{
"w": "promising",
"m": "a.有希望的，有前途的",
"x": "Listen for \"promising\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈprɑməsɪŋ/"
},
{
"w": "quality",
"m": "n.质量，品质，特性",
"x": "quality of teaching 教学质量",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/kˈwɑləti/"
},
{
"w": "reception",
"m": "n.接收，接受，接收效果；接待，招待会",
"x": "reception centre/desk 接待处",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/rɪˈsɛpʃən/"
},
{
"w": "requirement",
"m": "The Director of Studies will talk to you about the courses and different requirements for each.教务主管将和你谈论课程问题以及每门课的不同要求。",
"x": "Listen for \"requirement\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/rɪkˈwaɪrmənt/"
},
{
"w": "restriction",
"m": "n.限制，约束",
"x": "speed restriction 速度限制",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/riˈstrɪkʃən/"
},
{
"w": "sign",
"m": "I will ask you a few questions and then I'll get you to sign at the bottom of the form.我要问你几个问题，然后让你在表格下方签名。",
"x": "Listen for \"sign\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/saɪn/"
},
{
"w": "specialize",
"m": "v.专门研究，专攻",
"x": "specialized course 专业课",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈspɛʃəˌlaɪz/"
},
{
"w": "standard",
"m": "a.标准的 n.标准，规则",
"x": "standard of education 教育标准",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈstændərd/"
},
{
"w": "surname",
"m": "n.姓",
"x": "Listen for \"surname\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈsərˌneɪm/"
},
{
"w": "target",
"m": "n.目标，对象，靶子 v.把…作为目标",
"x": "target sth.at/on sb./sth.把…作为…的目标",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈtərgət/"
},
{
"w": "trimester",
"m": "n.（三学期制的）一学期",
"x": "Listen for \"trimester\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/traɪˈmɛstər/"
},
{
"w": "voluntary",
"m": "a.自愿的，志愿的",
"x": "Listen for \"voluntary\" in Section 1–4.",
"c": "雅思听力1000词: 新生报到篇",
"ipa": "/ˈvɑləntɛri/"
},
{
"w": "accomplish",
"m": "v.达到（目的），完成（任务），实现（计划、诺言等）",
"x": "Listen for \"accomplish\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/əˈkɑmplɪʃ/"
},
{
"w": "acquisition",
"m": "n.取得；获得物",
"x": "merger and acquisition 收购兼并",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌækwəˈzɪʃən/"
},
{
"w": "annotate",
"m": "v.注解，注释",
"x": "Listen for \"annotate\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈænəˌteɪt/"
},
{
"w": "appear",
"m": "v.出现，显露；发表，问世；看来好像，仿佛",
"x": "appear to 似乎…",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/əˈpɪr/"
},
{
"w": "argue",
"m": "v.争论，辩论；主张，论证；说服；坚持劝说",
"x": "argue with sb.与某人争论",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈɑrgju/"
},
{
"w": "attention",
"m": "n.注意（力），留心；立正",
"x": "attract/draw（sb's）attention to 吸引注意力，令（某人）注意某事物",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/əˈtɛnʃən/"
},
{
"w": "attentive",
"m": "a.注意的，专心的；关心的，体贴的",
"x": "Listen for \"attentive\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/əˈtɛntɪv/"
},
{
"w": "attribute",
"m": "attribute to 归结于，归功于，因为",
"x": "Listen for \"attribute\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/əˈtrɪˌbjut/"
},
{
"w": "basis",
"m": "n.基础；根据",
"x": "on the basis of 根据，在…的基础上",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈbeɪsɪs/"
},
{
"w": "board",
"m": "n.木板；甲板；膳食；委员会，董事会 v.上船（车、飞机）",
"x": "on board 在船（车、飞机）上",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/bɔrd/"
},
{
"w": "brief",
"m": "a.简短的，简洁的 n.简报 v.简短介绍，简要汇报",
"x": "in brief 简单地说，简言之",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/brif/"
},
{
"w": "calculate",
"m": "v.计算，推算；计划，打算",
"x": "be calculated to do sth.旨在，打算",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈkælkjəˌleɪt/"
},
{
"w": "case",
"m": "n.箱，盒，容器；情况，事实；病例；案件",
"x": "in any case 无论如何，总之",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/keɪs/"
},
{
"w": "chase",
"m": "v.追捕，追求；赢得；雕镂",
"x": "chase up 为某一目的而寻找",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ʧeɪs/"
},
{
"w": "common",
"m": "a.普通的，平常的；共同的，公共的",
"x": "in common 共用，共有，共同",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈkɑmən/"
},
{
"w": "compete",
"m": "v.比赛；竞争",
"x": "compete against/with 与…竞争",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/kəmˈpit/"
},
{
"w": "compose",
"m": "v.组成，构成；由…组成；创作（歌曲、诗歌等）",
"x": "be composed of 由…组成",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/kəmˈpoʊz/"
},
{
"w": "composition",
"m": "n.作品，作文，乐曲；写作，作曲；结构，组成，成分",
"x": "composition of…的组成",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌkɑmpəˈzɪʃən/"
},
{
"w": "compromise",
"m": "v./n.妥协，折中",
"x": "reach a compromise over sth.就某事达成妥协",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈkɑmprəˌmaɪz/"
},
{
"w": "concentrate",
"m": "n.浓缩物 v.集中，专心；浓缩",
"x": "concentrate on 集中，专心，倾全力于，全神贯注于",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈkɑnsənˌtreɪt/"
},
{
"w": "concentration",
"m": "n.集中；专心，专注；浓缩，浓度",
"x": "Listen for \"concentration\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌkɑnsənˈtreɪʃən/"
},
{
"w": "confuse",
"m": "v.使混乱，混淆；使迷惑，使糊涂",
"x": "confuse…with 把…和…混淆，把…和…混为一谈",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/kənfˈjuz/"
},
{
"w": "consult",
"m": "v.请教；查阅；商议",
"x": "consult with 商议",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/kənˈsəlt/"
},
{
"w": "cooperation",
"m": "n.合作，协作；配合",
"x": "Listen for \"cooperation\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/kˌwɔpərˈeɪʃən/"
},
{
"w": "cultivation",
"m": "n.耕种；培养，教育",
"x": "Listen for \"cultivation\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌkəltɪˈveɪʃən/"
},
{
"w": "deception",
"m": "n.欺骗；诡计",
"x": "intentional deception故意的欺骗行为",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/dɪˈsɛpʃən/"
},
{
"w": "dimensional",
"m": "a.空间的",
"x": "Listen for \"dimensional\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/dɪˈmɛnʃənəl/"
},
{
"w": "dinosaur",
"m": "n.恐龙",
"x": "Listen for \"dinosaur\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈdaɪnəˌsɔr/"
},
{
"w": "discussion",
"m": "n.讨论，谈论",
"x": "group discussion 小组讨论",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/dɪˈskəʃən/"
},
{
"w": "dispute",
"m": "v./n.争论，争执",
"x": "in dispute 在争论中，未决的",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/dɪˈspjut/"
},
{
"w": "doctorate",
"m": "n.博士学位",
"x": "Listen for \"doctorate\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈdɑktərət/"
},
{
"w": "download",
"m": "v.下载",
"x": "Listen for \"download\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈdaʊnˌloʊd/"
},
{
"w": "education",
"m": "n.教育，培养，训练",
"x": "education system 教育制度",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɛʤəˈkeɪʃən/"
},
{
"w": "embed",
"m": "v.把…嵌入（或埋入、插入），扎牢；使深留脑中",
"x": "be embedded in 植根于",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ɪmˈbɛd/"
},
{
"w": "epic",
"m": "n.叙事诗，史诗 a.宏伟的，壮丽的；大规模的",
"x": "Listen for \"epic\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈɛpɪk/"
},
{
"w": "eradicate",
"m": "v.根除，消灭",
"x": "Listen for \"eradicate\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ɪˈrædəˌkeɪt/"
},
{
"w": "erode",
"m": "v.侵蚀，腐蚀",
"x": "erode away 侵蚀",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈiroʊd/"
},
{
"w": "exam",
"m": "n.考试，测验；试题",
"x": "open-book exam 开卷考试",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ɪgˈzæm/"
},
{
"w": "excusable",
"m": "a.可原谅的；可谅解的",
"x": "excusable mistake 可以原谅的错误",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ɪkˈskjuzəbəl/"
},
{
"w": "failure",
"m": "n.失败，不及格；失败者；故障，失灵",
"x": "failure rate 失败率",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈfeɪljər/"
},
{
"w": "finish",
"m": "n.结束，完成；最后阶段 v.结束，完成",
"x": "finish off 结束，完成",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈfɪnɪʃ/"
},
{
"w": "flora",
"m": "n.一切植物，植物区系；花神",
"x": "Listen for \"flora\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈflɔrə/"
},
{
"w": "fluency",
"m": "n.流利",
"x": "Listen for \"fluency\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈfluənsi/"
},
{
"w": "footer",
"m": "n.脚注",
"x": "page footer 页脚",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈfʊtər/"
},
{
"w": "forgo",
"m": "v.放弃，抛弃",
"x": "Listen for \"forgo\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/fɔrˈgoʊ/"
},
{
"w": "format",
"m": "n.格式 v.使格式化",
"x": "table format 表格格式",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈfɔrˌmæt/"
},
{
"w": "freshwater",
"m": "n.淡水，湖水",
"x": "Listen for \"freshwater\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈfrɛʃˌwɔtər/"
},
{
"w": "frustrate",
"m": "It is so frustrating that I lost my purse on the bus.我在公交车上去丢了钱包，这真令人沮丧。",
"x": "Listen for \"frustrate\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈfrəˌstreɪt/"
},
{
"w": "grip",
"m": "v./n.紧握，抓紧",
"x": "be in the grip of…在…的掌控下",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/grɪp/"
},
{
"w": "header",
"m": "n.标头；页眉；头球；收割台",
"x": "page header 页眉",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈhɛdər/"
},
{
"w": "highlight",
"m": "v.强调，突出",
"x": "Listen for \"highlight\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈhaɪˌlaɪt/"
},
{
"w": "ideal",
"m": "a.理想的，完美的；空想的；理想主义的；唯心的 n.理想；完美典型，典范",
"x": "Listen for \"ideal\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/aɪˈdil/"
},
{
"w": "impulse",
"m": "n.推动；冲动，刺激 v.推动",
"x": "on（the）impulse（of…）凭（…的）冲动",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɪmˈpəls/"
},
{
"w": "inspiring",
"m": "a.鼓舞（或激励）人心的；启发灵感的",
"x": "Listen for \"inspiring\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɪnˈspaɪərɪŋ/"
},
{
"w": "instruct",
"m": "Professor Lee instructed us in chemistry.李教授教我们化学。",
"x": "Listen for \"instruct\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɪnˈstrəkt/"
},
{
"w": "intelligence",
"m": "n.智力，聪明；理解力；情报，消息，报道",
"x": "intelligence test 智力测验",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɪnˈtɛləʤəns/"
},
{
"w": "intensive",
"m": "a.加强的，集中的；深入细致的",
"x": "intensive training 强化训练",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɪnˈtɛnsɪv/"
},
{
"w": "intrinsic",
"m": "a.固有的，本质的，内在的",
"x": "intrinsic nature 本质",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɪnˈtrɪnsɪk/"
},
{
"w": "marsh",
"m": "n.沼泽；湿地",
"x": "marsh land 沼泽地",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/mɑrʃ/"
},
{
"w": "mite",
"m": "n.极小量；小虫",
"x": "Listen for \"mite\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/maɪt/"
},
{
"w": "modification",
"m": "n.修饰，修改",
"x": "behaviour modification 行为矫正",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌmɑdəfəˈkeɪʃən/"
},
{
"w": "motivate",
"m": "v.驱动，驱使；激励",
"x": "motivate sb.to do sth.激励某人做某事",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈmoʊtəˌveɪt/"
},
{
"w": "naturalistic",
"m": "a.自然的",
"x": "naturalistic education 自然主义教育",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌnæʧərəˈlɪstɪk/"
},
{
"w": "negative",
"m": "a.否定的，消极的，反面的；负的，阴性的 n.负数；（摄影）底片",
"x": "a negative reply 否定的答复",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈnɛgətɪv/"
},
{
"w": "neglect",
"m": "neglect one's duty 玩忽职守",
"x": "Listen for \"neglect\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/nɪˈglɛkt/"
},
{
"w": "nourish",
"m": "Bananas are extremely nourishing food.香蕉是一种极有营养的食物。",
"x": "Listen for \"nourish\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/nərɪʃ/"
},
{
"w": "observation",
"m": "n.观察，监视；观察资料，观察报告；评论",
"x": "Listen for \"observation\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɑbzərˈveɪʃən/"
},
{
"w": "opportunity",
"m": "n.机会",
"x": "take the opportunity to do sth./of doing sth.趁机做某事，借机做某事",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌɑpərˈtunəti/"
},
{
"w": "opposite",
"m": "The classroom is near the main entrance,just opposite the reception desk.教室位于主入口附近，正好和接待处相对。",
"x": "Listen for \"opposite\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈɑpəzɪt/"
},
{
"w": "option",
"m": "n.选择，选择权；（供）选择的事物（或人）；选课",
"x": "Listen for \"option\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈɔpʃən/"
},
{
"w": "outcrop",
"m": "n.（矿脉等）露出地面",
"x": "weathered outcrop 风化露头",
"c": "雅思听力1000词: 课业学习篇"
},
{
"w": "particular",
"m": "a.特殊的，特别的；特定的，个别的 n.详情，细目",
"x": "in particular 特别，尤其",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌpɑˈtɪkjələr/"
},
{
"w": "perspective",
"m": "n.角度，方法；透视法",
"x": "from sb.'s perspective",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/pərˈspɛktɪv/"
},
{
"w": "plateau",
"m": "n.高原；（上升后的）稳定时期（或状态）",
"x": "plateau phenomenon 高原现象",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/plæˈtoʊ/"
},
{
"w": "pliable",
"m": "a.（指人或思想）容易受影响的；顺从的；易弯的，柔韧的",
"x": "Listen for \"pliable\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈplaɪəbəl/"
},
{
"w": "pollinate",
"m": "v.给…授花粉",
"x": "self-pollinate 自花传粉",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈpɑləˌneɪt/"
},
{
"w": "prepare",
"m": "v.准备，预备",
"x": "be prepared for 为…做准备，准备好",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/priˈpɛr/"
},
{
"w": "pressure",
"m": "n.压（力）；强制，压迫；压强 v.迫使",
"x": "under pressure 处于压力之下",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈprɛʃər/"
},
{
"w": "proof",
"m": "n.证据，证明；校样，样张",
"x": "Listen for \"proof\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/pruf/"
},
{
"w": "propose",
"m": "v.提议，建议；提名，推荐；（向某人）求婚",
"x": "Listen for \"propose\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/prəˈpoʊz/"
},
{
"w": "quiz",
"m": "n.智力竞赛；小测验 v.考查，盘问",
"x": "Listen for \"quiz\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/kwɪz/"
},
{
"w": "rationale",
"m": "n.基本原理；原理的阐述",
"x": "Listen for \"rationale\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌræʃəˈnæl/"
},
{
"w": "recommend",
"m": "v.劝告，建议；推荐，介绍",
"x": "recommend sb.sth.向某人推荐某物",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌrɛkəˈmɛnd/"
},
{
"w": "recommendation",
"m": "n.推荐，推荐信；劝告，建议",
"x": "letter of recommendation 推荐信",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌrɛkəmənˈdeɪʃən/"
},
{
"w": "recover",
"m": "v.重新获得，重新得到；使复原，使康复；收回，换回",
"x": "recover yourself 使自己振作",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/rɪˈkəvər/"
},
{
"w": "rectangular",
"m": "a.长方形的，矩形的",
"x": "rectangular axes 直角轴",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/rɛkˈtæŋgjələr/"
},
{
"w": "refresher",
"m": "a.（专业性）复习进修的 n.提神物；帮助记忆的人或物",
"x": "refresher course 进修课程",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/rɪˈfrɛʃər/"
},
{
"w": "remark",
"m": "n.评语，议论，意见 v.评论，谈论；注意到，察觉",
"x": "remark about/on 对…的评语，评论",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/rɪˈmɑrk/"
},
{
"w": "reorient",
"m": "v.再定方位；再教育；（使）适应",
"x": "Listen for \"reorient\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/riˈɔriɛnt/"
},
{
"w": "replicate",
"m": "v.复制",
"x": "Listen for \"replicate\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈrɛplɪˌkeɪt/"
},
{
"w": "response",
"m": "n.回答，回音；反应，响应",
"x": "response for…对…负责，是造成…的原因",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/rɪˈspɑns/"
},
{
"w": "rigorous",
"m": "a.严密的；严格的",
"x": "rigorous method 严格的方法",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈrɪgərəs/"
},
{
"w": "sample",
"m": "blood sample 血液样本；size of sample 样本的大小",
"x": "Listen for \"sample\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈsæmpəl/"
},
{
"w": "sandstone",
"m": "n.砂岩",
"x": "beach sandstone 海滩砂岩",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈsænˌstoʊn/"
},
{
"w": "serpent",
"m": "n.蛇（尤指大蛇、毒蛇）；狡猾的人",
"x": "wise as a serpent 像蛇一样灵巧",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈsərpənt/"
},
{
"w": "sharpen",
"m": "v.削尖；使敏锐，使敏捷；使陡峭；使清晰",
"x": "sharpen pencils 削铅笔",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈʃɑrpən/"
},
{
"w": "sphere",
"m": "n.球（体）；范围，领域",
"x": "sphere of influence 影响范围",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/sfɪr/"
},
{
"w": "summary",
"m": "a.概括的，简略的 n.摘要，概要",
"x": "in summary 总括",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈsəməri/"
},
{
"w": "theme",
"m": "n.题目，主题",
"x": "theme park 主题公园",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/θim/"
},
{
"w": "topography",
"m": "n.地形学；地形，地貌",
"x": "Listen for \"topography\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/təˈpɑgrəfi/"
},
{
"w": "transmit",
"m": "v.播送，发射；传送；传染",
"x": "Listen for \"transmit\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/trænzˈmɪt/"
},
{
"w": "truant",
"m": "a.逃避责任的 n.逃学者；逃避者",
"x": "Listen for \"truant\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/truənt/"
},
{
"w": "typo",
"m": "n.打字错误",
"x": "Listen for \"typo\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈtaɪpoʊ/"
},
{
"w": "various",
"m": "a.各种各样的；不同的",
"x": "Listen for \"various\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈvɛriəs/"
},
{
"w": "vegetation",
"m": "n.植被",
"x": "grassland vegetation 草本植被",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˌvɛʤəˈteɪʃən/"
},
{
"w": "viewpoint",
"m": "n.观点",
"x": "Listen for \"viewpoint\" in Section 1–4.",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/vˈjuˌpɔɪnt/"
},
{
"w": "worthwhile",
"m": "a.值得（做）的",
"x": "be worthwhile to do/doing sth.值得做…",
"c": "雅思听力1000词: 课业学习篇",
"ipa": "/ˈwərθˈwaɪl/"
},
{
"w": "absorb",
"m": "v.吸收；吸引，使专心",
"x": "be absorbed in 专心于",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/əbˈzɔrb/"
},
{
"w": "admission",
"m": "n.允许进入，接纳，收容；承认",
"x": "admission free 免费入场",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ədˈmɪʃən/"
},
{
"w": "advisable",
"m": "n.可取的；适当的",
"x": "Listen for \"advisable\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ədˈvaɪzəbəl/"
},
{
"w": "apply",
"m": "v.申请，请求；适用；应用，运用",
"x": "apply for 申请",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/əˈplaɪ/"
},
{
"w": "association",
"m": "n.协会，团体，联盟；联合；联系，交往；联想",
"x": "research associations 研究协会",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/əˌsoʊʃiˈeɪʃən/"
},
{
"w": "behaviour",
"m": "n.行为，举止，表现；态度；（机器的）运转情况",
"x": "Listen for \"behaviour\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/bɪˈheɪvjər/"
},
{
"w": "charity",
"m": "n.慈善（团体），仁慈，施舍",
"x": "charity donation 慈善捐款",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈʧɛrɪti/"
},
{
"w": "check",
"m": "n.检查，核对；制止，抑制；支票，账单 v.检查，核对；突然停止，制止；用钩形符号标出",
"x": "Listen for \"check\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ʧɛk/"
},
{
"w": "circulation",
"m": "n.循环；流传；发行，流通",
"x": "Listen for \"circulation\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈsərkjəˌleɪʃən/"
},
{
"w": "classical",
"m": "a.经典的，古典（文学）的",
"x": "Listen for \"classical\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈklæsɪkəl/"
},
{
"w": "collect",
"m": "concern",
"x": "Listen for \"collect\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/kəˈlɛkt/"
},
{
"w": "concern",
"m": "v.涉及，关系到；关心，挂念 n.关心，挂念；（利害）关系",
"x": "concern oneself with 关心",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/kənˈsərn/"
},
{
"w": "concert",
"m": "n.音乐会，演奏会",
"x": "concert hall 音乐厅",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈkɑnsərt/"
},
{
"w": "contact",
"m": "in contact with sb.与某人保持联系；come into contact with sb.接触某人；in contact with…与…有联系；contact list 联系人清单；eye contact 目光交流；contact lens 隐形眼镜",
"x": "Listen for \"contact\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈkɑnˌtækt/"
},
{
"w": "convey",
"m": "v.表达，传递；运送，搬运",
"x": "convey a message 传递信息",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/kənˈveɪ/"
},
{
"w": "cooperative",
"m": "a.合作的，协作的 n.合作社",
"x": "cooperative enterprises 合作企业",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/koʊˈɑpərˌeɪtɪv/"
},
{
"w": "couple",
"m": "n.（一）对，（一）双；夫妇；力偶，电偶 v.连接，结合",
"x": "a couple of 两个，几个",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈkəpəl/"
},
{
"w": "cultural",
"m": "a.文化的，人文的；修养的，教养的；耕作的，种植的；培养的",
"x": "Listen for \"cultural\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈkəlʧərəl/"
},
{
"w": "curvy",
"m": "a.曲线美的；弯曲的",
"x": "Listen for \"curvy\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈkərvi/"
},
{
"w": "database",
"m": "n.数据库",
"x": "Listen for \"database\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈdætəˌbeɪs/"
},
{
"w": "delay",
"m": "v./n.耽搁，延迟",
"x": "Listen for \"delay\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/dɪˈleɪ/"
},
{
"w": "departmental",
"m": "a.部门的",
"x": "departmental library 系资料室",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/dɪˌpɑrtˈmɛnəl/"
},
{
"w": "distraction",
"m": "n.注意力分散，分心；分心的事物；娱乐，放松",
"x": "Listen for \"distraction\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/dɪˈstrækʃən/"
},
{
"w": "exhibition",
"m": "n.展览会；陈列，展览",
"x": "education exhibition 教育展",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˌɛksəˈbɪʃən/"
},
{
"w": "expand",
"m": "v.（使）膨胀，（使）扩张；张开，展开",
"x": "expand one's knowledge 扩大知识面",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ɪkˈspænd/"
},
{
"w": "expire",
"m": "v.期满，（期限）终止；呼气；断气，死亡",
"x": "Listen for \"expire\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ɪkˈspaɪr/"
},
{
"w": "exploit",
"m": "v.开拓，开发",
"x": "Listen for \"exploit\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˌɛkˈsplɔɪt/"
},
{
"w": "extensive",
"m": "a.广大的，广阔的；广泛的",
"x": "make extensive use of 广泛应用",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ɪkˈstɛnsɪv/"
},
{
"w": "flock",
"m": "v.群集，成群结队而行",
"x": "flock into 大批地涌进",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/flɑk/"
},
{
"w": "flute",
"m": "n.笛子",
"x": "transverse flute 横笛",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/flut/"
},
{
"w": "frantically",
"m": "Although I've got behind with my study，it's worth practicing frantically for the whole week.尽管我的学习有点落下了，整周疯狂的练习却是非常值得的。",
"x": "Listen for \"frantically\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈfrænəkəli/"
},
{
"w": "interactive",
"m": "a.互动的",
"x": "interactive system 交互系统",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˌɪnərˈæktɪv/"
},
{
"w": "loan",
"m": "n.贷款；暂借的东西；出借，借出 v.借出",
"x": "on loan 暂借的/地",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/loʊn/"
},
{
"w": "mature",
"m": "mature students 成年学生",
"x": "Listen for \"mature\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/məˈʧʊr/"
},
{
"w": "orchestra",
"m": "n.管弦乐队",
"x": "symphony orchestra 交响乐团",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈɔrkəstrə/"
},
{
"w": "proposal",
"m": "n.提议，建议；求婚",
"x": "package proposal 一揽子建议",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/prəˈpoʊzəl/"
},
{
"w": "refer",
"m": "v.参考，查阅；提到，引用；提交，上呈",
"x": "refer to 参考，查阅",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/rɪˈfər/"
},
{
"w": "reference",
"m": "n.参考，参考书目；提及，涉及；证明（人）；介绍（人）",
"x": "with/in reference to 关于",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈrɛfərəns/"
},
{
"w": "relay",
"m": "relay race 接力赛",
"x": "Listen for \"relay\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈriˌleɪ/"
},
{
"w": "selection",
"m": "n.挑选，选择；选集",
"x": "selection check 抽查",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/səˈlɛkʃən/"
},
{
"w": "solution",
"m": "n.解答，解决办法；溶解，溶液",
"x": "Listen for \"solution\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/səˈluʃən/"
},
{
"w": "stamina",
"m": "n.耐力，体力",
"x": "Listen for \"stamina\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈstæmənə/"
},
{
"w": "stress",
"m": "n.压力；重力；重音；强调，重点 v.强调，着重",
"x": "stress management 对压力的管理",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/strɛs/"
},
{
"w": "subscription",
"m": "n.订阅，订购；订阅费，订购款；捐赠，捐款；签字，签署",
"x": "Listen for \"subscription\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/səbˈskrɪpʃən/"
},
{
"w": "union",
"m": "n.协会，同盟；联合，合并；一致，融洽",
"x": "Listen for \"union\" in Section 1–4.",
"c": "雅思听力1000词: 课下时光篇",
"ipa": "/ˈjunjən/"
},
{
"w": "administrative",
"m": "a.管理的，行政的",
"x": "Listen for \"administrative\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ədˈmɪnɪˌstreɪtɪv/"
},
{
"w": "administrator",
"m": "n.管理人员，行政官员",
"x": "Listen for \"administrator\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ədˈmɪnɪˌstreɪtər/"
},
{
"w": "allowance",
"m": "n.津贴，补助（费）",
"x": "make allowance（s）for 考虑到，顾及",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/əˈlaʊəns/"
},
{
"w": "barrier",
"m": "n.栅栏；检票口；障碍；界线",
"x": "language barrier 语言障碍",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈbɛriər/"
},
{
"w": "capable",
"m": "a.有能力的，能干的；有技能的",
"x": "be capable of doing 有能力做…",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈkeɪpəbəl/"
},
{
"w": "capacity",
"m": "n.容量，容积；能量，能力；接受力",
"x": "the capacity of…的容量",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/kəˈpæsɪti/"
},
{
"w": "casual",
"m": "a.偶然的，碰巧的；临时的，非正式的",
"x": "casual meeting 邂逅",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈkæʒəwəl/"
},
{
"w": "commence",
"m": "v.开始",
"x": "Listen for \"commence\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/kəˈmɛns/"
},
{
"w": "committee",
"m": "n.委员会，全体委员",
"x": "Listen for \"committee\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/kəˈmɪti/"
},
{
"w": "confidential",
"m": "a.机密的，秘密的",
"x": "confidential employee 机要人员",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˌkɑnfəˈdɛnʃəl/"
},
{
"w": "consistency",
"m": "n.一致性，连贯性",
"x": "consistency principle 一致性原则",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/kənˈsɪstənsi/"
},
{
"w": "cope",
"m": "v.竞争，对抗；对付，应付，妥善处理",
"x": "cope with（成功地）应付，对付，妥善处理",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/koʊp/"
},
{
"w": "correspondence",
"m": "n.通信，信件；符合，一致；相当于，对应",
"x": "keep correspondence with sb.与某人保持通信",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˌkɔrəˈspɑndəns/"
},
{
"w": "counsel",
"m": "v.劝告，忠告 n.法律顾问，辩护人；劝告，忠告",
"x": "Listen for \"counsel\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈkaʊnsəl/"
},
{
"w": "creative",
"m": "a.有创造力的，创造性的",
"x": "Listen for \"creative\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/kriˈeɪtɪv/"
},
{
"w": "daily",
"m": "a.每日的 ad.每日，天天 n.日报",
"x": "Listen for \"daily\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈdeɪli/"
},
{
"w": "demand",
"m": "in great demand 需求量大",
"x": "Listen for \"demand\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/dɪˈmænd/"
},
{
"w": "device",
"m": "n.装置，设备；方法，设计",
"x": "Listen for \"device\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/dɪˈvaɪs/"
},
{
"w": "discretion",
"m": "n.谨慎，慎重；明智",
"x": "Listen for \"discretion\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/dɪˈskrɛʃən/"
},
{
"w": "draw",
"m": "n.平局 v.拉；画；汲取；提取；引出；靠近",
"x": "draw in（火车、汽车）到站",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/drɔ/"
},
{
"w": "duplicate",
"m": "v.复制；重复 a.复制的；二重的",
"x": "duplicate file 复制文件",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈdupləˌkeɪt/"
},
{
"w": "electronic",
"m": "a.电子的",
"x": "Listen for \"electronic\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˌɪˌlɛkˈtrɑnɪk/"
},
{
"w": "eligible",
"m": "a.有条件被选中的，有资格的；（尤指婚姻等）合适的，合意的",
"x": "be eligible to 有资格做…",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈɛlɪʤəbəl/"
},
{
"w": "employ",
"m": "n./v.雇用；使用",
"x": "Listen for \"employ\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ɪmˈplɔɪ/"
},
{
"w": "enhance",
"m": "enhance one's confidence 增强信心",
"x": "Listen for \"enhance\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ɛnˈhæns/"
},
{
"w": "enterprise",
"m": "n.事业，企（事）业单位；事业心，进取心",
"x": "a backbone enterprise 骨干企业",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈɛnərˌpraɪz/"
},
{
"w": "entitle",
"m": "v.给以权利（或资格）；给…以称号；给…题名",
"x": "be entitled to有权…，有资格…",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ɪnˈtaɪtəl/"
},
{
"w": "exert",
"m": "v.施加，运用",
"x": "exert an influence on 对…施加影响",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ɪgˈzərt/"
},
{
"w": "faith",
"m": "n.信任，信用；信仰，信条",
"x": "have faith in 信任，相信…",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/feɪθ/"
},
{
"w": "frustrating",
"m": "I find it frustrating to have so few teaching resources.我发现教学资源是如此之少，这真令人沮丧。",
"x": "Listen for \"frustrating\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈfrəˌstreɪtɪŋ/"
},
{
"w": "hand",
"m": "n.手；指针；人手，职工，船员 v.交给，传递",
"x": "at hand 在手边，在附近，即将到来",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/hænd/"
},
{
"w": "intern",
"m": "Helen worked as an intern in that enterprise last year.海伦去年在那家企业实习。",
"x": "Listen for \"intern\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈɪntərn/"
},
{
"w": "internship",
"m": "n.实习生身份",
"x": "Listen for \"internship\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈɪntərnˌʃɪp/"
},
{
"w": "keen",
"m": "a.锋利的；敏锐的，敏捷的；热心的，渴望的",
"x": "be keen on 渴望，喜欢，热衷于",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/kin/"
},
{
"w": "manipulate",
"m": "v.应付，处理；操纵，控制；影响",
"x": "Listen for \"manipulate\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/məˈnɪpjəˌleɪt/"
},
{
"w": "manual",
"m": "a.手的，手工做的，体力的 n.手册，指南",
"x": "manual worker 手工劳动者",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈmænjuəl/"
},
{
"w": "material",
"m": "a.物质的，实体的 n.材料，原料，资料",
"x": "raw materials 原材料",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/məˈtɪriəl/"
},
{
"w": "pension",
"m": "n.养老金；抚恤金；津贴；年金",
"x": "live on a pension 靠养老金/抚恤金生活",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈpɛnʃən/"
},
{
"w": "perform",
"m": "v.履行，执行；做，完成；表演，演出",
"x": "perform on 演奏",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/pərˈfɔrm/"
},
{
"w": "plate",
"m": "n.金属板，片；盘子，盆子；板，钢板 v.镀，电镀",
"x": "Listen for \"plate\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/pleɪt/"
},
{
"w": "practical",
"m": "a.实际的，实用的；实践的",
"x": "practical experience 实践经验",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈpræktɪkəl/"
},
{
"w": "precision",
"m": "n.精确（性），精密（度）",
"x": "precision instrument 精密仪器",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/priˈsɪʒən/"
},
{
"w": "privilege",
"m": "n.特权，优惠，特许",
"x": "Listen for \"privilege\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈprɪvɪlɪʤ/"
},
{
"w": "probation",
"m": "n.缓刑（期）；试用（期）",
"x": "Listen for \"probation\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/proʊˈbeɪʃən/"
},
{
"w": "promote",
"m": "v.促进，发扬；提升，提拔；增进，助长；宣传",
"x": "promote mutual understanding 促进相互理解",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/prəˈmoʊt/"
},
{
"w": "promotion",
"m": "n.提升，晋级；促进，增进；发起，创建；宣传，推销",
"x": "Listen for \"promotion\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/pərˈmoʊʃən/"
},
{
"w": "rate",
"m": "n.速率，比率；等级；价格，费用 v.估价；评级，评价",
"x": "at any rate 无论如何，至少",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/reɪt/"
},
{
"w": "reconfigure",
"m": "v.重新配置，重新装配",
"x": "Listen for \"reconfigure\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˌrikənˈfɪgjər/"
},
{
"w": "recruit",
"m": "recruit method 招聘方法",
"x": "Listen for \"recruit\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/rɪˈkrut/"
},
{
"w": "remind",
"m": "v.提醒，使想起",
"x": "remind sb.of sth.提醒，使想起",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/riˈmaɪnd/"
},
{
"w": "reputation",
"m": "n.名气，名誉，声望",
"x": "have a reputation for 因…而闻名",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˌrɛpjəˈteɪʃən/"
},
{
"w": "responsibility",
"m": "n.责任，责任心；职责，义务",
"x": "Listen for \"responsibility\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/riˌspɑnsəˈbɪləti/"
},
{
"w": "responsible",
"m": "a.应负责的，有责任的；可靠的，可信赖的；责任重大的，重要的",
"x": "be responsible for 承担…的责任，应负责的，有责任的",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/riˈspɑnsəbəl/"
},
{
"w": "stock",
"m": "n.库存，现货；股票，股份 v.储存",
"x": "laughing stock 笑柄",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/stɑk/"
},
{
"w": "strike",
"m": "v.冲，撞；罢工；（使）产生印象，打动；发现，找到 n.罢工",
"x": "Listen for \"strike\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/straɪk/"
},
{
"w": "supervise",
"m": "v.管理，监督",
"x": "Listen for \"supervise\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈsupərˌvaɪz/"
},
{
"w": "supply",
"m": "n.供应，供应量 v.供给，供应；满足（需要），补足",
"x": "supply sth.to sb.为…提供…",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/səˈplaɪ/"
},
{
"w": "suspicious",
"m": "a.怀疑的",
"x": "be suspicious of 怀疑",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/səˈspɪʃəs/"
},
{
"w": "template",
"m": "n.模板",
"x": "Listen for \"template\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈtɛmplət/"
},
{
"w": "temporary",
"m": "a.暂时的，临时的",
"x": "temporary employment/work 临时工作",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈtɛmpərˌɛri/"
},
{
"w": "treasurer",
"m": "n.司库；出纳员，财务主管",
"x": "Listen for \"treasurer\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈtrɛʒərər/"
},
{
"w": "undertake",
"m": "v.承担，担任；许诺，保证；着手，从事",
"x": "undertake responsibility 承担责任",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈəndərˌteɪk/"
},
{
"w": "vacant",
"m": "a vacant position 空缺职位；a vacant expression茫然的表情；a vacant seat 空位",
"x": "Listen for \"vacant\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈveɪkənt/"
},
{
"w": "vocational",
"m": "a.职业的，业务的",
"x": "Listen for \"vocational\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/voʊˈkeɪʃənəl/"
},
{
"w": "vouch",
"m": "v.担保，保证",
"x": "vouch for 担保",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/vaʊʧ/"
},
{
"w": "welfare",
"m": "n.福利；安宁，幸福",
"x": "welfare state 福利国家",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈwɛlˌfɛr/"
},
{
"w": "workshop",
"m": "n.车间，工场；专题讨论会",
"x": "Listen for \"workshop\" in Section 1–4.",
"c": "雅思听力1000词: 职业技能篇",
"ipa": "/ˈwərkˌʃɑp/"
},
{
"w": "absolute",
"m": "a.绝对的；完全的",
"x": "absolute trust 绝对信任",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈæbsəˌlut/"
},
{
"w": "additional",
"m": "a.附加的，另外的，额外的",
"x": "additional charges 附加费用",
"c": "雅思听力1000词: 描述篇",
"ipa": "/əˈdɪʃənəl/"
},
{
"w": "agree",
"m": "v.同意，赞成；一致，适合",
"x": "agree on 对…取得一致意见",
"c": "雅思听力1000词: 描述篇",
"ipa": "/əˈgri/"
},
{
"w": "alternate",
"m": "alternate between…时而…时而…；alternate with 相间",
"x": "Listen for \"alternate\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈɔltərˌneɪt/"
},
{
"w": "appearance",
"m": "n.出现，出场，露面；外表，外貌，外观",
"x": "Listen for \"appearance\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/əˈpɪrəns/"
},
{
"w": "assumption",
"m": "n.假定，设想；采取；承担",
"x": "Listen for \"assumption\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/əˈsəmpʃən/"
},
{
"w": "attractive",
"m": "a.吸引人的，有吸引力的；引起注意的",
"x": "attractive personality 吸引人的个性",
"c": "雅思听力1000词: 描述篇",
"ipa": "/əˈtræktɪv/"
},
{
"w": "basic",
"m": "a.基本的，基础的",
"x": "basic rights 基本权利",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈbeɪsɪk/"
},
{
"w": "bizarre",
"m": "a.奇形怪状的，怪诞的",
"x": "Listen for \"bizarre\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/bɪˈzɑr/"
},
{
"w": "cast",
"m": "cast iron 铸铁",
"x": "Listen for \"cast\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/kæst/"
},
{
"w": "clarify",
"m": "v.澄清，阐明",
"x": "Listen for \"clarify\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈklɛrəˌfaɪ/"
},
{
"w": "consecutive",
"m": "a.连续不断的，连贯的",
"x": "consecutive years 连年",
"c": "雅思听力1000词: 描述篇",
"ipa": "/kənˈsɛkjətɪv/"
},
{
"w": "consist",
"m": "consist of 由…组成，由…构成；consist in 在于，存在于",
"x": "Listen for \"consist\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/kənˈsɪst/"
},
{
"w": "crack",
"m": "v.（使）破裂 n.裂缝",
"x": "crack up（体力、精力等）垮掉，衰退",
"c": "雅思听力1000词: 描述篇",
"ipa": "/kræk/"
},
{
"w": "criticize",
"m": "v.批评，责备；评论",
"x": "Listen for \"criticize\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈkrɪtɪˌsaɪz/"
},
{
"w": "crucial",
"m": "a.至关重要的，决定性的",
"x": "crucial to/for sth.对…至关重要的",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈkruʃəl/"
},
{
"w": "decent",
"m": "decrease",
"x": "Listen for \"decent\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈdisənt/"
},
{
"w": "delicate",
"m": "a.纤弱的；精致的；微妙的；灵敏的",
"x": "Listen for \"delicate\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈdɛləkət/"
},
{
"w": "depend",
"m": "v.依靠，依赖；信赖，相信；决定于，视…而定",
"x": "Listen for \"depend\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/dɪˈpɛnd/"
},
{
"w": "describe",
"m": "v.描述，形容",
"x": "Listen for \"describe\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/dɪˈskraɪb/"
},
{
"w": "easy-going",
"m": "a.脾气随和的，心平气和的；懒散的，随便的；不慌不忙的",
"x": "Listen for \"easy-going\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇"
},
{
"w": "enormous",
"m": "a.巨大的，庞大的",
"x": "enormous expenditure 巨额开支",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ɪˈnɔrmɪs/"
},
{
"w": "evidence",
"m": "n.根据，证据；形迹，迹象",
"x": "a piece of evidence 一项证据",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈɛvədəns/"
},
{
"w": "exaggerate",
"m": "v.夸大，夸张",
"x": "Listen for \"exaggerate\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ɪgˈzæʤərˌeɪt/"
},
{
"w": "excellent",
"m": "That new western restaurant is supposed to be excellent.那家新开的西餐馆应该很好。",
"x": "Listen for \"excellent\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈɛksələnt/"
},
{
"w": "exclusive",
"m": "a.专有的，独占的；专用的；除外的，排他的",
"x": "an exclusive interview 独家采访，专访",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ɪkˈsklusɪv/"
},
{
"w": "express",
"m": "a.特快的，快速的 n.快车，快运 v.表达，表示",
"x": "Listen for \"express\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ɪkˈsprɛs/"
},
{
"w": "extent",
"m": "to some extent 在某种程度上",
"x": "Listen for \"extent\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ɪkˈstɛnt/"
},
{
"w": "extra",
"m": "a.额外的，附加的 n.附加物，额外的东西",
"x": "Listen for \"extra\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈɛkstrə/"
},
{
"w": "extreme",
"m": "a.末端的，尽头的；极度的，极端的 n.极端；最大程度；极度（状态）",
"x": "in the extreme 极其",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ɪkˈstrim/"
},
{
"w": "factual",
"m": "a.事实的；真实的，确凿的",
"x": "Listen for \"factual\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈfækʧuəl/"
},
{
"w": "farewell",
"m": "n.辞行，告别",
"x": "farewell speech 告别演说",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌfɛrˈwɛl/"
},
{
"w": "fragile",
"m": "a.脆弱的，虚弱的；易碎的，易损坏的",
"x": "fragile article 易碎品",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈfræʤəl/"
},
{
"w": "frequent",
"m": "The most frequent use for a computer is data processing.计算机最常用于数据处理。",
"x": "Listen for \"frequent\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈfrikˌwɛnt/"
},
{
"w": "generally",
"m": "The land here is generally hilly,and the soils thin.这儿的土地大都崎岖不平，土壤贫瘠。",
"x": "Listen for \"generally\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈʤɛnərəli/"
},
{
"w": "glamorous",
"m": "a.富有魅力的，迷人的",
"x": "Listen for \"glamorous\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈglæmərəs/"
},
{
"w": "hostile",
"m": "Over the past few years,the public has been hostile to several pop stars.最近几年，公众对几个明星一直存有敌意。",
"x": "Listen for \"hostile\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈhɑstəl/"
},
{
"w": "identifiable",
"m": "a.可辨认的，可识别的；可证明是同一的",
"x": "Listen for \"identifiable\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/aɪˈdɛntəˌfaɪəbəl/"
},
{
"w": "ignorance",
"m": "n.无知，愚昧；不知道",
"x": "ignorance about 不知…",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈɪgnərəns/"
},
{
"w": "impossible",
"m": "a.不可能的，办不到的",
"x": "Listen for \"impossible\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌɪmˈpɑsəbəl/"
},
{
"w": "inclusive",
"m": "a.包括一切的，包括一切费用在内的；所有数目（或首末日期）包括在内的",
"x": "fully inclusive 完全包括在内的",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌɪnˈklusɪv/"
},
{
"w": "incredible",
"m": "a.不可相信的，惊人的，不可思议的",
"x": "Listen for \"incredible\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌɪnˈkrɛdəbəl/"
},
{
"w": "infest",
"m": "v.侵扰，骚扰",
"x": "Listen for \"infest\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌɪnˈfɛst/"
},
{
"w": "initiative",
"m": "take the initiative 带头，倡导，发起",
"x": "Listen for \"initiative\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌɪˈnɪʃətɪv/"
},
{
"w": "integral",
"m": "a.构成整体所必需的；完整的",
"x": "integral number 整数",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈɪnəgrəl/"
},
{
"w": "interweave",
"m": "v.使交织，使混杂",
"x": "Listen for \"interweave\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌɪntərˈwiv/"
},
{
"w": "lack",
"m": "n./v.缺乏，不足",
"x": "lack of 缺乏，没有",
"c": "雅思听力1000词: 描述篇",
"ipa": "/læk/"
},
{
"w": "landscape",
"m": "n.（陆上）风景，风景画；地形 v.美化",
"x": "Landscape Architecture 景观设计专业",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈlænˌskeɪp/"
},
{
"w": "least",
"m": "at least 至少；in the least 一点，丝毫；last but not least 最后的但是也很重要的（表示总结）",
"x": "Listen for \"least\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/list/"
},
{
"w": "majority",
"m": "n.多数，大多数",
"x": "majority status 成人身份",
"c": "雅思听力1000词: 描述篇",
"ipa": "/məˈʤɔrəti/"
},
{
"w": "massive",
"m": "a.大而重的，厚实的；大规模的，大量的",
"x": "Listen for \"massive\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈmæsɪv/"
},
{
"w": "maximum",
"m": "a.最大的，最高的 n.最大值，极限",
"x": "Listen for \"maximum\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈmæksəməm/"
},
{
"w": "mention",
"m": "v./n.提及，说起",
"x": "not to mention 更不用说，更不必说",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈmɛnʃən/"
},
{
"w": "minimum",
"m": "a.最小的，最低的 n.最小值，最低限度",
"x": "Listen for \"minimum\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈmɪnəməm/"
},
{
"w": "multiple",
"m": "a.多样的，多重的 n.倍数",
"x": "multiple choice 多项选择",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈməltəpəl/"
},
{
"w": "original",
"m": "a.最初的，原始的，原文的；新颖的，有独创性的 n.原物，原作，原文",
"x": "original handwriting 真迹",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ərˈɪʤənəl/"
},
{
"w": "plus",
"m": "a.正的，加的 n.加号，正号",
"x": "Listen for \"plus\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/pləs/"
},
{
"w": "private",
"m": "a.私人的，个人的；秘密的，私下的",
"x": "Listen for \"private\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈpraɪvət/"
},
{
"w": "profitable",
"m": "a.有利可图的；有益的",
"x": "Listen for \"profitable\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈprɑfətəbəl/"
},
{
"w": "realistic",
"m": "a.现实（主义）的",
"x": "Listen for \"realistic\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌriəˈlɪstɪk/"
},
{
"w": "represent",
"m": "ridiculous",
"x": "Listen for \"represent\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌrɛprɪˈzɛnt/"
},
{
"w": "ridiculous",
"m": "a.荒谬的，可笑的",
"x": "Listen for \"ridiculous\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/rɪˈdɪkjələs/"
},
{
"w": "scrunch",
"m": "v.揉皱；缩紧",
"x": "scrunch up 揉皱",
"c": "雅思听力1000词: 描述篇",
"ipa": "/skrənʧ/"
},
{
"w": "sensational",
"m": "a.轰动的；群情激动的；耸人听闻的；极好的；绝妙的；使人感动的",
"x": "sensational discovery 轰动的发现",
"c": "雅思听力1000词: 描述篇",
"ipa": "/sɛnˈseɪʃənəl/"
},
{
"w": "sensible",
"m": "a.明智的，合理的；可觉察的，明显的",
"x": "Listen for \"sensible\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈsɛnsəbəl/"
},
{
"w": "series",
"m": "n.一系列，连续；丛书，连续剧",
"x": "a series of 一系列，一连串",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈsɪriz/"
},
{
"w": "severe",
"m": "a.严重的",
"x": "severe consequence 严重后果",
"c": "雅思听力1000词: 描述篇",
"ipa": "/səˈvɪr/"
},
{
"w": "shelter",
"m": "n.躲避处，避难所 v.躲避，避难",
"x": "emergency shelter 应急避难场所",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈʃɛltər/"
},
{
"w": "slightly",
"m": "slippery",
"x": "Listen for \"slightly\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/sˈlaɪtli/"
},
{
"w": "sophisticated",
"m": "a.复杂的；久经世故的",
"x": "Listen for \"sophisticated\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/səˈfɪstɪˌkeɪtəd/"
},
{
"w": "static",
"m": "a.静的；停滞的 n.静电",
"x": "static electricity 静电，静位觉",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈstætɪk/"
},
{
"w": "stuffy",
"m": "a.不透气的，（空气）不新鲜的，不通风的",
"x": "We've installed air conditioning,so it won't get so stuffy.我们安装了空调，因此不会那么闷热。",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈstəfi/"
},
{
"w": "subsequent",
"m": "subsequent on 作为…的结果发生；subsequent events 后来发生的事",
"x": "Listen for \"subsequent\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈsəbsəkwənt/"
},
{
"w": "suggest",
"m": "The research suggests that young people avoid dealing effectively with their economic situation because of lack of confidence.研究表明，年轻人由于缺乏信心而不能有效地处理自己的经济状况。",
"x": "Listen for \"suggest\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/səˈʤɛst/"
},
{
"w": "suitable",
"m": "a.适当的，相配的；合适的，适宜的",
"x": "suitable for 适宜的",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈsutəbəl/"
},
{
"w": "superior",
"m": "a.优良的，卓越的；多于…的，优于…的 n.上级，长官",
"x": "superior to 比…好，超过…的",
"c": "雅思听力1000词: 描述篇",
"ipa": "/suˈpɪriər/"
},
{
"w": "suppose",
"m": "v.料想，猜想；假定，以为",
"x": "be supposed to do sth.应该做…",
"c": "雅思听力1000词: 描述篇",
"ipa": "/səˈpoʊz/"
},
{
"w": "tend",
"m": "v.易于，往往会；趋向，倾向；照管，护理",
"x": "tend to 趋向",
"c": "雅思听力1000词: 描述篇",
"ipa": "/tɛnd/"
},
{
"w": "tribute",
"m": "n.贡品；颂词，称赞；（表示敬意的）礼物",
"x": "Listen for \"tribute\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈtrɪbjut/"
},
{
"w": "twofold",
"m": "a.两倍的；两部分的，双重的",
"x": "Listen for \"twofold\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈtuˈfoʊld/"
},
{
"w": "ultimate",
"m": "a.最后的，最终的；根本的",
"x": "in ultimate 最终，结果",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈəltəmət/"
},
{
"w": "underlying",
"m": "a.潜在的，含蓄的",
"x": "Listen for \"underlying\" in Section 1–4.",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˌəndərˈlaɪɪŋ/"
},
{
"w": "undermine",
"m": "v.削弱，破坏",
"x": "undermine one's position 削弱某人的地位",
"c": "雅思听力1000词: 描述篇",
"ipa": "/ˈəndərˌmaɪn/"
},
{
"w": "unique",
"m": "a.唯一的，独一无二的",
"x": "a unique style 独特的风格",
"c": "雅思听力1000词: 描述篇",
"ipa": "/juˈnik/"
},
{
"w": "variety",
"m": "n.品种，种类；变化，多样化",
"x": "a variety of 许多",
"c": "雅思听力1000词: 描述篇",
"ipa": "/vərˈaɪəti/"
},
{
"w": "abuse",
"m": "drug abuse 滥用药物，吸毒；abuse one's authority/office 滥用权威/职权；child abuse 虐待儿童；verbal abuse 口头谩骂",
"x": "Listen for \"abuse\" in Section 1–4.",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/əˈbjuz/"
},
{
"w": "advice",
"m": "n.劝告，忠告；建议，（医生等的）意见",
"x": "write to sb.for advice 写信给某人征求意见",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ədˈvaɪs/"
},
{
"w": "aggravate",
"m": "v.恶化，加重，加剧",
"x": "aggravate poverty 加剧贫困",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈægrəˌveɪt/"
},
{
"w": "aggravation",
"m": "n.加重，加剧，恶化；恼怒",
"x": "leave in aggravation 愤怒地离开",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌægrəˈveɪʃən/"
},
{
"w": "aid",
"m": "n.援助，救护；助手；辅助物，辅助设备；帮助 v.援助，救援，帮助",
"x": "first aid 急救",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/eɪd/"
},
{
"w": "analysis",
"m": "n.分析；分解；解析",
"x": "self analysis自我分析",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/æˈnælɪsɪs/"
},
{
"w": "attack",
"m": "n.（病）发作；攻击 v.攻击，进攻；抨击；着手，开始",
"x": "the attack on 针对…的攻击",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/əˈtæk/"
},
{
"w": "avoid",
"m": "v.避免，回避，逃避",
"x": "avoid doing sth.避免做某事",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/əˈvɔɪd/"
},
{
"w": "beneficial",
"m": "a.有利的，有益的",
"x": "beneficial to 对…有益，有利",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌbɛnəˈfɪʃəl/"
},
{
"w": "bother",
"m": "n.麻烦 v.打扰，烦扰；烦恼，操心",
"x": "bother sb.about/with sth.用…打扰…",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈbɑðər/"
},
{
"w": "cellular",
"m": "a.细胞的，细胞状的；多孔的，蜂窝状的",
"x": "cellular phone 手机",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈsɛljələr/"
},
{
"w": "chronic",
"m": "a.（疾病）慢性的；积习难改的；严重的，坏的",
"x": "chronic problems 严重的问题",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈkrɑnɪk/"
},
{
"w": "conditioner",
"m": "n.调节器",
"x": "soil conditioner 土壤调节剂",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/kənˈdɪʃənər/"
},
{
"w": "convention",
"m": "n.大会，会议；惯例，常规，习俗；公约，协定",
"x": "social conventions 社会习俗",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/kənˈvɛnʃən/"
},
{
"w": "digestive",
"m": "a.消化的；助消化的",
"x": "digestive system 消化系统",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/daɪˈʤɛstɪv/"
},
{
"w": "effective",
"m": "a.有效的，生效的；给人深刻印象的，显著的",
"x": "effective remedy 有效药物",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈifɛktɪv/"
},
{
"w": "energetic",
"m": "a.精力旺盛的，充满活力的",
"x": "energetic person 精力旺盛的人",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌɛnərˈʤɛtɪk/"
},
{
"w": "equip",
"m": "v.装备，配备",
"x": "be equipped with 配备有，装备有",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ɪkˈwɪp/"
},
{
"w": "fertilize",
"m": "v.使肥沃，使多产；施肥于；使受精",
"x": "fertilized eggs 受精卵",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈfərtəˌlaɪz/"
},
{
"w": "implication",
"m": "n.含意；暗示",
"x": "political implication 政治含意",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌɪmpləˈkeɪʃən/"
},
{
"w": "incapacitate",
"m": "v.使无能力；使不适合；使伤残；使无资格",
"x": "Listen for \"incapacitate\" in Section 1–4.",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌɪnkəˈpæsɪˌteɪt/"
},
{
"w": "infection",
"m": "n.传染，感染，传播；传染病",
"x": "severe infection 严重的传染病",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌɪnˈfɛkʃən/"
},
{
"w": "internal",
"m": "a.内部的；国内的；内政的",
"x": "internal organs 内脏",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌɪnˈtərnəl/"
},
{
"w": "license",
"m": "n.许可，特许；执照，许可证 v.批准，许可",
"x": "driving license 驾驶执照",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈlaɪsəns/"
},
{
"w": "maturity",
"m": "n.成熟；完善，准备就绪；到期",
"x": "at maturity 成熟",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/məˈʧʊrəti/"
},
{
"w": "medical",
"m": "a.医学的，医疗的；内科的",
"x": "medical centre 医疗中心",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈmɛdɪkəl/"
},
{
"w": "miserable",
"m": "a.痛苦的，悲惨的",
"x": "as miserable as sin 非常悲惨",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈmɪzərəbəl/"
},
{
"w": "mishandle",
"m": "v.粗暴地对待，虐待；错误地处理，瞎弄，胡乱操作",
"x": "mishandled baggage 错运行李",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/mɪsˈhændəl/"
},
{
"w": "moderation",
"m": "n.温和，中庸；缓和，减轻；适度，节制",
"x": "in moderation 适中地，有节制地",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌmɑdərˈeɪʃən/"
},
{
"w": "muscle",
"m": "n.肌肉；体力",
"x": "movement of muscle 肌肉运动",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈməsəl/"
},
{
"w": "optical",
"m": "a.眼睛的，视力的；光学的",
"x": "optical instrument 光学仪器",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈɑptɪkəl/"
},
{
"w": "organic",
"m": "a.器官的；有机的；有机体的",
"x": "organic being 有机体",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ɔrˈgænɪk/"
},
{
"w": "penetrate",
"m": "v.渗透",
"x": "penetrate through 透过",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈpɛnəˌtreɪt/"
},
{
"w": "permission",
"m": "n.允许，同意",
"x": "without permission 未经许可",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/pərˈmɪʃən/"
},
{
"w": "preserve",
"m": "v.保护，维持；保存，保藏；腌渍",
"x": "preserve one's eyesight 保护视力",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/prɪˈzərv/"
},
{
"w": "psychiatric",
"m": "a.精神病的；治疗精神病的",
"x": "Listen for \"psychiatric\" in Section 1–4.",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˌsaɪkiˈætrɪk/"
},
{
"w": "purpose",
"m": "n.目的，意图；用途，效果",
"x": "for（the）purpose of 为了",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈpərpəs/"
},
{
"w": "quarantine",
"m": "n./v.检疫，隔离",
"x": "quarantine station 检疫站",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/kˈwɔrənˌtin/"
},
{
"w": "record",
"m": "be on record 记录在案的，公开宣布的",
"x": "Listen for \"record\" in Section 1–4.",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈrɛkərd/"
},
{
"w": "regular",
"m": "a.有规律的，有规则的；整齐的，匀称的；正规的，正式的",
"x": "regular intervals一定的间隔时间",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈrɛgjələr/"
},
{
"w": "reliance",
"m": "n.依靠，依赖",
"x": "place reliance on 依赖",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/rɪˈlaɪəns/"
},
{
"w": "remedy",
"m": "n.药品；治疗措施，补救办法 v.治疗，医治；纠正，补救",
"x": "remedy for 治疗…的方法或药物",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈrɛmədi/"
},
{
"w": "resistant",
"m": "be resistant to 对…有抵抗力；acid resistant 耐酸的",
"x": "Listen for \"resistant\" in Section 1–4.",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/rɪˈzɪstənt/"
},
{
"w": "sanitary",
"m": "a.清洁的；保健的 n.（有卫生设备的）公共厕所",
"x": "sanitary facilities 卫生设备",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈsænɪˌtɛri/"
},
{
"w": "scratch",
"m": "v.抓，搔 n.抓，搔；抓痕；起跑线",
"x": "start from scratch 从头做起，从零开始",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/skræʧ/"
},
{
"w": "soluble",
"m": "a.可溶的",
"x": "soluble material 可溶性物质",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈsɑljəbəl/"
},
{
"w": "spasm",
"m": "n.痉挛，抽搐；突发，发作",
"x": "facial spasm 面部痉挛",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈspæzəm/"
},
{
"w": "surgery",
"m": "n.外科手术治疗；外科，外科学；手术室，诊疗室",
"x": "heart bypass surgery 心脏搭桥手术",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈsərʤəri/"
},
{
"w": "suspend",
"m": "v.吊，悬挂；暂停，中止；推迟，延缓",
"x": "suspend a driving license 吊销驾驶执照",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/səˈspɛnd/"
},
{
"w": "sustain",
"m": "v.支撑，撑住，承受住；维持，持续；经受，遭受；忍耐",
"x": "sustain hardships忍受艰苦",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/səˈsteɪn/"
},
{
"w": "system",
"m": "n.系统，体系；制度，体制",
"x": "nervous system 神经系统",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈsɪstəm/"
},
{
"w": "therapy",
"m": "n.治疗，理疗",
"x": "radiation therapy 放射治疗",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈθɛrəpi/"
},
{
"w": "vitality",
"m": "n.生命力，活力",
"x": "be full of vitality 充满活力",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/vaɪˈtæləti/"
},
{
"w": "vulnerable",
"m": "a.易受攻击的",
"x": "vulnerable to 易受…伤害的",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/ˈvəlnərəbəl/"
},
{
"w": "weight",
"m": "put on more weight 更发胖；by weight 按重量称",
"x": "Listen for \"weight\" in Section 1–4.",
"c": "雅思听力1000词: 医疗健康篇",
"ipa": "/weɪt/"
},
{
"w": "addition",
"m": "n.（增）加，加法；附加（物）",
"x": "in addition 另外",
"c": "雅思听力1000词: 综合篇",
"ipa": "/əˈdɪʃən/"
},
{
"w": "allocate",
"m": "v.分配，分派，把…拨给",
"x": "Listen for \"allocate\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈæləˌkeɪt/"
},
{
"w": "allocation",
"m": "n.配给，分配；（钱、地方等的）配给量",
"x": "Listen for \"allocation\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˌæləˈkeɪʃən/"
},
{
"w": "although",
"m": "conj.尽管，虽然，即使",
"x": "Listen for \"although\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˌɔlˈðoʊ/"
},
{
"w": "beforehand",
"m": "The police need to be briefed beforehand on how to deal with this sort of situation.警察需要预先对如何处理这类情形的事情作提要。",
"x": "Listen for \"beforehand\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/bɪˈfɔˌrhænd/"
},
{
"w": "bump",
"m": "n.碰撞；隆起物 v.碰，撞；颠簸着前进",
"x": "bump against/into 碰到",
"c": "雅思听力1000词: 综合篇",
"ipa": "/bəmp/"
},
{
"w": "bypass",
"m": "n.旁道，旁路 v.绕过，绕…走",
"x": "Listen for \"bypass\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈbaɪˌpæs/"
},
{
"w": "cancel",
"m": "v.取消，废除；删去，划掉；相互抵消",
"x": "cancel out 抵消",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈkænsəl/"
},
{
"w": "certainly",
"m": "We'll certainly try to find some boxes for you.我们一定试着给你找些箱子。",
"x": "Listen for \"certainly\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈsərtənli/"
},
{
"w": "comparative",
"m": "a.比较的，相当的",
"x": "comparative advantage 相对优势",
"c": "雅思听力1000词: 综合篇",
"ipa": "/kəmˈpærətɪv/"
},
{
"w": "comparison",
"m": "n.比较，对比；比喻，比拟",
"x": "by comparison 比较起来",
"c": "雅思听力1000词: 综合篇",
"ipa": "/kəmˈpɛrəsən/"
},
{
"w": "cosmic",
"m": "a.宇宙的",
"x": "cosmic dust 宇宙尘埃",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈkɑzmɪk/"
},
{
"w": "drop",
"m": "n.滴；落下；微量 v.落下，下降；失落；放弃",
"x": "drop by/in 顺便来访",
"c": "雅思听力1000词: 综合篇",
"ipa": "/drɔp/"
},
{
"w": "enable",
"m": "v.使能够，使成为可能",
"x": "enable sb.to do sth.使…能够做…",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ɪˈneɪbəl/"
},
{
"w": "forth",
"m": "call forth 使产生，引起；and so forth 等等；back and forth 来回地，来来往往地；bring forth 提出；set forth 阐明，陈述",
"x": "Listen for \"forth\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/fɔrθ/"
},
{
"w": "graze",
"m": "v.放牧",
"x": "Listen for \"graze\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/greɪz/"
},
{
"w": "however",
"m": "conj.不管用什么方法；然而，可是，不过",
"x": "Listen for \"however\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˌhaʊˈɛvər/"
},
{
"w": "include",
"m": "v.包括，包含，计入",
"x": "be included in 被包括在…",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˌɪnˈklud/"
},
{
"w": "irritation",
"m": "n.激怒，恼怒；刺激物",
"x": "Listen for \"irritation\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˌɪrɪˈteɪʃən/"
},
{
"w": "lower",
"m": "a.较低的，下级的，下游的 v.降下，放低；使下降",
"x": "Listen for \"lower\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/loʊər/"
},
{
"w": "meantime",
"m": "in the meantime 同时；在…期间",
"x": "Listen for \"meantime\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈminˌtaɪm/"
},
{
"w": "muddle",
"m": "n.一团糟，凌乱，混乱；糊涂，困惑 v.弄糟；使糊涂；相混",
"x": "Listen for \"muddle\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈmədəl/"
},
{
"w": "otherwise",
"m": "conj.要不然，否则",
"x": "Listen for \"otherwise\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈəðərˌwaɪz/"
},
{
"w": "prerequisite",
"m": "a.先决条件的；必备的 n.先决条件，前提；必备条件",
"x": "Listen for \"prerequisite\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/priˈrɛkwəzət/"
},
{
"w": "prior",
"m": "a./ad.优先的/地；在前的/地",
"x": "prior to 在…之前",
"c": "雅思听力1000词: 综合篇",
"ipa": "/praɪər/"
},
{
"w": "priority",
"m": "n.先，前；优先，优先权",
"x": "give priority to 给…优先权，优先考虑",
"c": "雅思听力1000词: 综合篇",
"ipa": "/praɪˈɔrəti/"
},
{
"w": "provided",
"m": "conj.倘若，只要，假如",
"x": "Listen for \"provided\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/prəˈvaɪdɪd/"
},
{
"w": "reverse",
"m": "a.相反的，倒转的 n.相反，颠倒；背面，后面 v.颠倒；倒退",
"x": "in reverse 顺序相反，反向",
"c": "雅思听力1000词: 综合篇",
"ipa": "/rɪˈvərs/"
},
{
"w": "secondary",
"m": "a.次要的，二级的；中级的，第二的",
"x": "be secondary to…仅次于…",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˈsɛkənˌdɛri/"
},
{
"w": "though",
"m": "as though 好像；even though 尽管",
"x": "Listen for \"though\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ðoʊ/"
},
{
"w": "underneath",
"m": "Spend a minute or two watching the water pass by underneath as you cross the bridge.过桥时花一两分钟的时间观察一下桥底的流水。",
"x": "Listen for \"underneath\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˌəndərˈniθ/"
},
{
"w": "whatever",
"m": "pron.无论什么，任何事物",
"x": "Listen for \"whatever\" in Section 1–4.",
"c": "雅思听力1000词: 综合篇",
"ipa": "/ˌwəˈtɛvər/"
},
{
"w": "withdraw",
"m": "v.收回，撤销；缩回，退出；提取（钱）",
"x": "withdraw one's promise 收回诺言",
"c": "雅思听力1000词: 综合篇",
"ipa": "/wɪθˈdrɔ/"
},
{
"w": "outlay",
"m": "n. 支出；费用",
"x": "Listen for \"outlay\" in this topic.",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/'aʊtle/"
},
{
"w": "asset",
"m": "n. 资产，财产；有价值的人或物；优点",
"x": "Listen for \"asset\" in this topic.",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/'æsɛt/"
},
{
"w": "taxation",
"m": "n. 税金；征税，课税",
"x": "Listen for \"taxation\" in this topic.",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/tæk'seʃən/"
},
{
"w": "import",
"m": "v. 进口，输入",
"x": "Listen for \"import\" in this topic.",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/'ɪmpɔt/"
},
{
"w": "recession",
"m": "n. 后退，撤退，撤回",
"x": "recession → recess n. 中止或暂停期间 recessionary adj. 经济衰退的",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/rɪ'sɛʃən/"
},
{
"w": "auction",
"m": "n. 拍卖；拍卖方式",
"x": "auction → auctioneer n. 拍卖人，拍卖商",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/'ɔkʃən/"
},
{
"w": "audit",
"m": "v. 审计，查账",
"x": "audit → auditor n. 审计员，稽核员",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/'ɔdɪt/"
},
{
"w": "mercantile",
"m": "adj. 企业的；贸易的",
"x": "Listen for \"mercantile\" in this topic.",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/'mɝkəntɪl/"
},
{
"w": "logistics",
"m": "n. 后勤；物流",
"x": "Listen for \"logistics\" in this topic.",
"c": "雅思官方词汇速背: 人文·经济",
"ipa": "/lə'dʒɪstɪks/"
},
{
"w": "justice",
"m": "n. 正义；公正，合理",
"x": "Listen for \"justice\" in this topic.",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/'dʒʌstɪs/"
},
{
"w": "judicial",
"m": "adj. 司法的；法庭的",
"x": "judicial → judiciary n. 司法部；法官 jury n. 陪审团",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/dʒʊ'dɪʃəl/"
},
{
"w": "decree",
"m": "n. 法令；判决　v. 命令；颁布",
"x": "Listen for \"decree\" in this topic.",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/dɪ'kri/"
},
{
"w": "statute",
"m": "n. 法规；法令；条例",
"x": "statute → statutory adj. 法定的；法令的",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/'stætʃut/"
},
{
"w": "clause",
"m": "n. （法律文件等的）条款",
"x": "clause → clausal adj. 条款的",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/klɔz/"
},
{
"w": "solicitor",
"m": "n. 事务律师，诉状律师",
"x": "Listen for \"solicitor\" in this topic.",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/sə'lɪsɪtɚ/"
},
{
"w": "tribunal",
"m": "n. 特别法庭",
"x": "Listen for \"tribunal\" in this topic.",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/traɪ'bjunl/"
},
{
"w": "arbitral",
"m": "adj. 仲裁的",
"x": "arbitral → arbitrational adj. 关于仲裁的",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/'ɑrbətrəl/"
},
{
"w": "implementation",
"m": "n. 贯彻，执行",
"x": "Listen for \"implementation\" in this topic.",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/ˌɪmpləmɛnˈteɪʃən/"
},
{
"w": "abide",
"m": "v. 坚持；遵守",
"x": "Listen for \"abide\" in this topic.",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/ə'baɪd/"
},
{
"w": "enact",
"m": "v. 制定（法律）；通过（法案）",
"x": "Listen for \"enact\" in this topic.",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/ɪ'nækt/"
},
{
"w": "defend",
"m": "v. 辩护",
"x": "defend → defence n. 辩护，防御 defendant n. 被告人",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/dɪ'fɛnd/"
},
{
"w": "verify",
"m": "v. 证实",
"x": "verify → verification n. 证明",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/'vɛrɪfaɪ/"
},
{
"w": "prosecution",
"m": "n. 起诉，诉讼",
"x": "Listen for \"prosecution\" in this topic.",
"c": "雅思官方词汇速背: 人文·法律",
"ipa": "/,prɑsɪ'kjuʃən/"
},
{
"w": "genre",
"m": "n.（文学、艺术等的）类型，体裁，风格",
"x": "Listen for \"genre\" in this topic.",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/'ʒɑnrə/"
},
{
"w": "anecdote",
"m": "n. 轶事，趣闻",
"x": "anecdote → anecdotal adj. 轶事的，趣闻的",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/'ænɪkdot/"
},
{
"w": "myth",
"m": "n. 神话",
"x": "myth → mythical adj. 想象的，虚构的",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/mɪθ/"
},
{
"w": "discourse",
"m": "n. 演讲，谈论",
"x": "Listen for \"discourse\" in this topic.",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/'dɪskɔrs/"
},
{
"w": "treatise",
"m": "n. 专题论文，专著",
"x": "Listen for \"treatise\" in this topic.",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/'tritɪs/"
},
{
"w": "synopsis",
"m": "n. 大纲，梗概",
"x": "Listen for \"synopsis\" in this topic.",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/sɪ'nɑpsɪs/"
},
{
"w": "transcribe",
"m": "v. 抄写；把（资料）改录成另一种形式",
"x": "transcribe → transcription n. 抄写",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/træn'skraɪb/"
},
{
"w": "epitomise",
"m": "v. 成为（某事物）的缩影",
"x": "Listen for \"epitomise\" in this topic.",
"c": "雅思官方词汇速背: 人文·文学"
},
{
"w": "rhetoric",
"m": "n. 修辞，修辞学",
"x": "rhetoric → rhetorical adj. 修辞的；辞藻华丽的",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/'rɛtərɪk/"
},
{
"w": "literally",
"m": "adv. 照字面，原义；确实",
"x": "literally → literal adj. 逐字的，照字面的；确实的，完全的 illiterate adj. 文盲的",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/'lɪtərəli/"
},
{
"w": "narrative",
"m": "n. 叙述，讲述　adj. 叙事的",
"x": "narrative → narrate v. 讲（故事） narration n. 叙述事情的经过",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/'nærətɪv/"
},
{
"w": "quotation",
"m": "n. 引用，引述",
"x": "Listen for \"quotation\" in this topic.",
"c": "雅思官方词汇速背: 人文·文学",
"ipa": "/kwo'teʃən/"
},
{
"w": "psychiatrist",
"m": "n. 精神病专家，精神病医生",
"x": "psychiatrist → psychiatry n. 精神病学 psychiatrical adj. 精神病学的",
"c": "雅思官方词汇速背: 人文·心理",
"ipa": "/saɪ'kaɪətrɪst/"
},
{
"w": "encode",
"m": "v. 编码",
"x": "Listen for \"encode\" in this topic.",
"c": "雅思官方词汇速背: 人文·心理",
"ipa": "/ɪn'kod/"
},
{
"w": "subliminal",
"m": "adj. 潜意识的",
"x": "Listen for \"subliminal\" in this topic.",
"c": "雅思官方词汇速背: 人文·心理",
"ipa": "/,sʌb'lɪmɪnl/"
},
{
"w": "extrovert",
"m": "n. 性格外向的人",
"x": "Listen for \"extrovert\" in this topic.",
"c": "雅思官方词汇速背: 人文·心理",
"ipa": "/,ɛkstrə'vɝt/"
},
{
"w": "pessimistic",
"m": "adj. 悲观的；悲观主义的",
"x": "pessimistic → pessimism n. 悲观主义 pessimist n. 悲观主义者",
"c": "雅思官方词汇速背: 人文·心理",
"ipa": "/,pɛsɪ'mɪstɪk/"
},
{
"w": "corpus",
"m": "n. （复数.pora）汇编，语料库",
"x": "Listen for \"corpus\" in this topic.",
"c": "雅思官方词汇速背: 人文·语言学",
"ipa": "/'kɔrpəs/"
},
{
"w": "alphabetical",
"m": "adj. 按字母（表）顺序的",
"x": "Listen for \"alphabetical\" in this topic.",
"c": "雅思官方词汇速背: 人文·语言学",
"ipa": "/,ælfə'bɛtɪkl/"
},
{
"w": "bilingual",
"m": "adj. 能说两种语言的",
"x": "Listen for \"bilingual\" in this topic.",
"c": "雅思官方词汇速背: 人文·语言学",
"ipa": "/'baɪ'lɪŋgwəl/"
},
{
"w": "verbal",
"m": "adj. 词语的；口头的",
"x": "Listen for \"verbal\" in this topic.",
"c": "雅思官方词汇速背: 人文·语言学",
"ipa": "/'vɝbl/"
},
{
"w": "phonetic",
"m": "adj. 语音的，语音学的",
"x": "phonetic → phonetics n. 语音（学）",
"c": "雅思官方词汇速背: 人文·语言学",
"ipa": "/fə'nɛtɪk/"
},
{
"w": "lexical",
"m": "adj. 词汇的",
"x": "lexical → lexis n. 词，词汇",
"c": "雅思官方词汇速背: 人文·语言学",
"ipa": "/'lɛksɪkl/"
},
{
"w": "semantic",
"m": "adj. 语义的；语义学的",
"x": "semantic → semantics n. 语义学 semanticist n. 语义学者",
"c": "雅思官方词汇速背: 人文·语言学",
"ipa": "/sɪ'mæntɪk/"
},
{
"w": "irony",
"m": "n. 反语，冷嘲",
"x": "irony → ironic(al) adj. 冷嘲的，挖苦的",
"c": "雅思官方词汇速背: 人文·语言学",
"ipa": "/'aɪrəni/"
},
{
"w": "hierarchy",
"m": "n. 等级制度；统治集团",
"x": "Listen for \"hierarchy\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'haɪərɑrki/"
},
{
"w": "bureaucracy",
"m": "n. 官僚，官僚作风",
"x": "bureaucracy → bureaucratic adj. 官僚的",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/bjʊ'rɑkrəsi/"
},
{
"w": "empire",
"m": "n. 帝国",
"x": "Listen for \"empire\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'ɛmpaɪr/"
},
{
"w": "imperial",
"m": "adj. 帝王的；帝国的",
"x": "imperial → imperialistic adj. 帝国主义的 imperialism n. 帝国主义",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/ɪm'pɪrɪəl/"
},
{
"w": "sovereign",
"m": "n. 君主，国王",
"x": "sovereign → sovereignty n. 最高统治权",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'sɑvrən/"
},
{
"w": "royal",
"m": "adj. 国王的；女王的",
"x": "royal → royalty n. 王族（成员）",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'rɔɪəl/"
},
{
"w": "republic",
"m": "n. 共和国；共和政体",
"x": "republic → republican adj. 共和国的，共和政体的",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/rɪ'pʌblɪk/"
},
{
"w": "federation",
"m": "n. 联邦；联合会，同盟",
"x": "Listen for \"federation\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'fɛdə'reʃən/"
},
{
"w": "autonomous",
"m": "adj. 自治的",
"x": "Listen for \"autonomous\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/ɔ'tɑnəməs/"
},
{
"w": "democratic",
"m": "adj. 民主的；有民主精神或作风的",
"x": "democratic → democracy n. 民主, 民主制",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'dɛmə'krætɪk/"
},
{
"w": "senate",
"m": "n. 参议院，上院",
"x": "senate → senator n. 参议员 senatorial adj. 参议院的",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'sɛnət/"
},
{
"w": "ambassador",
"m": "n. 大使，使节",
"x": "Listen for \"ambassador\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/æm'bæsədɚ/"
},
{
"w": "enfranchise",
"m": "v. 给予选举权",
"x": "Listen for \"enfranchise\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/ɪn'fræntʃaɪz/"
},
{
"w": "nominate",
"m": "v. 提名……为候选人；任命",
"x": "nominate → nomination n. 提名，任命 nominator n. 提名者，任命者",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'nɑmɪnet/"
},
{
"w": "repatriate",
"m": "v. 把（某人）遣送回国，遣返",
"x": "repatriate → repatriation n. 遣送回国",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/,ri'petrɪet/"
},
{
"w": "abolish",
"m": "v. 取消；结束",
"x": "Listen for \"abolish\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/ə'bɑlɪʃ/"
},
{
"w": "refuge",
"m": "n. 避难（所, 处）；庇护",
"x": "Listen for \"refuge\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'rɛfjʊdʒ/"
},
{
"w": "conservative",
"m": "adj. 符合习俗的；传统的",
"x": "Listen for \"conservative\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/kən'sɝvətɪv/"
},
{
"w": "treaty",
"m": "n. 条约",
"x": "Listen for \"treaty\" in this topic.",
"c": "雅思官方词汇速背: 人文·政治",
"ipa": "/'triti/"
},
{
"w": "coverage",
"m": "n. 新闻报道；报道量",
"x": "Listen for \"coverage\" in this topic.",
"c": "雅思官方词汇速背: 人文·传媒",
"ipa": "/'kʌvərɪdʒ/"
},
{
"w": "newsreel",
"m": "n. 新闻短片",
"x": "Listen for \"newsreel\" in this topic.",
"c": "雅思官方词汇速背: 人文·传媒",
"ipa": "/'nuzril/"
},
{
"w": "mainstream",
"m": "n. （思想等的）主流",
"x": "Listen for \"mainstream\" in this topic.",
"c": "雅思官方词汇速背: 人文·传媒",
"ipa": "/'menstrim/"
},
{
"w": "criticism",
"m": "n. 评论",
"x": "criticism → critic n. 批评家 critical adj. 决定性的",
"c": "雅思官方词汇速背: 人文·传媒",
"ipa": "/'krɪtə'sɪzəm/"
},
{
"w": "advertise",
"m": "v. 公布，宣传",
"x": "advertise → advertisement n. 广告 advertising n. 广告",
"c": "雅思官方词汇速背: 人文·传媒",
"ipa": "/'ædvɚtaɪz/"
},
{
"w": "pictorial",
"m": "adj. 以图画表示的；有画面的",
"x": "Listen for \"pictorial\" in this topic.",
"c": "雅思官方词汇速背: 人文·传媒",
"ipa": "/pɪk'tɔrɪəl/"
},
{
"w": "censor",
"m": "v. 审查；新闻审查",
"x": "Listen for \"censor\" in this topic.",
"c": "雅思官方词汇速背: 人文·传媒",
"ipa": "/'sɛnsɚ/"
},
{
"w": "shipment",
"m": "n. 船运，水运",
"x": "Listen for \"shipment\" in this topic.",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/'ʃɪpmənt/"
},
{
"w": "cruise",
"m": "v. 乘船巡游",
"x": "Listen for \"cruise\" in this topic.",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/krʊz/"
},
{
"w": "warship",
"m": "n. 军舰，战舰",
"x": "Listen for \"warship\" in this topic.",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/'wɔrʃɪp/"
},
{
"w": "shuttle",
"m": "n. 短程穿梭运行的飞机（或火车、汽车）　 v. 穿梭般来回移动",
"x": "Listen for \"shuttle\" in this topic.",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/'ʃʌtl/"
},
{
"w": "brake",
"m": "n. 制动器　v. 刹（车）",
"x": "Listen for \"brake\" in this topic.",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/brek/"
},
{
"w": "commute",
"m": "v. 通勤",
"x": "commute → commuter n.（远距离）上下班往返的人",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/kə'mjʊt/"
},
{
"w": "migrate",
"m": "v. 迁移；移往",
"x": "migrate → migration n. 迁移",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/'maɪɡret/"
},
{
"w": "pedestrian",
"m": "n. 步行者",
"x": "Listen for \"pedestrian\" in this topic.",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/pə'dɛstrɪən/"
},
{
"w": "overpass",
"m": "n. 立交桥",
"x": "Listen for \"overpass\" in this topic.",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/'ovɚpæs/"
},
{
"w": "aviation",
"m": "n. 航空，航空学",
"x": "aviation → aviate v. 驾驶（飞机）",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/,evɪ'eʃən/"
},
{
"w": "pilot",
"m": "n. 飞行员，宇航员",
"x": "Listen for \"pilot\" in this topic.",
"c": "雅思官方词汇速背: 人文·交通",
"ipa": "/'paɪlət/"
},
{
"w": "apprentice",
"m": "n. 学徒",
"x": "Listen for \"apprentice\" in this topic.",
"c": "雅思官方词汇速背: 人文·教育",
"ipa": "/ə'prɛntɪs/"
},
{
"w": "schooling",
"m": "n. 教育，学校教育",
"x": "schooling → schoolmate n. 同学，校友",
"c": "雅思官方词汇速背: 人文·教育",
"ipa": "/'skulɪŋ/"
},
{
"w": "truancy",
"m": "n. 逃课",
"x": "truancy → truant n. 逃课的学生 adj. 逃学的 v. 逃学",
"c": "雅思官方词汇速背: 人文·教育",
"ipa": "/'truənsi/"
},
{
"w": "hike",
"m": "n. 徒步旅行",
"x": "hike → hiker n. 远足者, 长途旅行者; hiking n. 徒步旅行; hitch-hike n. 搭便车旅行",
"c": "雅思官方词汇速背: 人文·旅游",
"ipa": "/haɪk/"
},
{
"w": "sightseeing",
"m": "n. 观光",
"x": "Listen for \"sightseeing\" in this topic.",
"c": "雅思官方词汇速背: 人文·旅游",
"ipa": "/'saɪtsiɪŋ/"
},
{
"w": "lounge",
"m": "n. 休息厅，休息室，客厅",
"x": "Listen for \"lounge\" in this topic.",
"c": "雅思官方词汇速背: 人文·旅游",
"ipa": "/laʊndʒ/"
},
{
"w": "resort",
"m": "n. 度假胜地　v. 求助于或诉诸某人（to）",
"x": "Listen for \"resort\" in this topic.",
"c": "雅思官方词汇速背: 人文·旅游",
"ipa": "/rɪ'zɔrt/"
},
{
"w": "megacity",
"m": "n. 大城市",
"x": "Listen for \"megacity\" in this topic.",
"c": "雅思官方词汇速背: 人文·旅游"
},
{
"w": "fountain",
"m": "n. 喷泉",
"x": "Listen for \"fountain\" in this topic.",
"c": "雅思官方词汇速背: 人文·旅游",
"ipa": "/'faʊntn/"
},
{
"w": "farmland",
"m": "n. 农田",
"x": "Listen for \"farmland\" in this topic.",
"c": "雅思官方词汇速背: 人文·旅游",
"ipa": "/'fɑrmlænd/"
},
{
"w": "compass",
"m": "n. 罗盘，指南针",
"x": "Listen for \"compass\" in this topic.",
"c": "雅思官方词汇速背: 人文·旅游",
"ipa": "/'kʌmpəs/"
},
{
"w": "parcel",
"m": "n. 包裹",
"x": "Listen for \"parcel\" in this topic.",
"c": "雅思官方词汇速背: 人文·旅游",
"ipa": "/'pɑrsl/"
},
{
"w": "rink",
"m": "n. 溜冰场",
"x": "Listen for \"rink\" in this topic.",
"c": "雅思官方词汇速背: 人文·体育",
"ipa": "/rɪŋk/"
},
{
"w": "racecourse",
"m": "n. 赛马跑道，赛马场",
"x": "Listen for \"racecourse\" in this topic.",
"c": "雅思官方词汇速背: 人文·体育",
"ipa": "/'reskɔrs/"
},
{
"w": "championship",
"m": "n. 锦标赛",
"x": "Listen for \"championship\" in this topic.",
"c": "雅思官方词汇速背: 人文·体育",
"ipa": "/'tʃæmpɪənʃɪp/"
},
{
"w": "sponsorship",
"m": "n. 赞助者的地位；主办；倡议",
"x": "Listen for \"sponsorship\" in this topic.",
"c": "雅思官方词汇速背: 人文·体育",
"ipa": "/'spɑnsɚʃɪp/"
},
{
"w": "jog",
"m": "v. 慢跑；轻敲，轻推",
"x": "Listen for \"jog\" in this topic.",
"c": "雅思官方词汇速背: 人文·体育",
"ipa": "/dʒɑɡ/"
},
{
"w": "sprint",
"m": "n. 短距离疾跑",
"x": "sprint → sprinter n. 短跑运动员",
"c": "雅思官方词汇速背: 人文·体育",
"ipa": "/sprɪnt/"
},
{
"w": "rendition",
"m": "n. 表演；演唱",
"x": "Listen for \"rendition\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/rɛn'dɪʃən/"
},
{
"w": "improvise",
"m": "v. 即兴创作；即兴演说",
"x": "Listen for \"improvise\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/'ɪmprəvaɪz/"
},
{
"w": "harmonious",
"m": "adj. 和谐的，悦耳的",
"x": "harmonious → harmony n. 和谐",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/hɑr'monɪəs/"
},
{
"w": "choir",
"m": "n. 合奏，合唱",
"x": "Listen for \"choir\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/'kwaɪɚ/"
},
{
"w": "instrument",
"m": "n. 乐器",
"x": "Listen for \"instrument\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/'ɪnstrəmənt/"
},
{
"w": "opera",
"m": "n. 歌剧",
"x": "opera → opera-house n. 歌剧院，（尤指乡间的）剧场",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/'ɑprə/"
},
{
"w": "theatrical",
"m": "adj. 剧场的　n. 戏剧表演",
"x": "Listen for \"theatrical\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/θɪ'ætrɪkl/"
},
{
"w": "scenario",
"m": "n. 剧情说明；脚本；情景，场面",
"x": "Listen for \"scenario\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/sə'nærɪo/"
},
{
"w": "scene",
"m": "n. （戏剧的）一场；背景",
"x": "scene → scenic adj. 自然景色的，景色优美的",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/sin/"
},
{
"w": "acrobatic",
"m": "adj. 杂技的，杂技般的",
"x": "acrobatic → acrobatics n. 杂技，杂技表演",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/,ækrə'bætɪk/"
},
{
"w": "aesthetic",
"m": "adj. 有关美的，美学的",
"x": "Listen for \"aesthetic\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/ɛs'θɛtɪk/"
},
{
"w": "sketch",
"m": "n. 草图，素描",
"x": "Listen for \"sketch\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/skɛtʃ/"
},
{
"w": "handicraft",
"m": "n. 手工艺；手工艺品",
"x": "handicraft → handicraftsman n. 手工业者；手工艺人",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/'hændɪkræft/"
},
{
"w": "puppet",
"m": "n. 木偶，玩偶",
"x": "Listen for \"puppet\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/'pʌpɪt/"
},
{
"w": "engrave",
"m": "v. 雕刻；（使）铭记",
"x": "Listen for \"engrave\" in this topic.",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/ɪn'ɡrev/"
},
{
"w": "photography",
"m": "n. 摄影术",
"x": "photography → photographer n. 摄影者；（尤指）摄影师 photographic adj. 摄影（术）的，摄影用的，摄制的",
"c": "雅思官方词汇速背: 人文·艺术",
"ipa": "/fə'tɑɡrəfi/"
},
{
"w": "universe",
"m": "n. 宇宙；星系",
"x": "universe → universal adj. 广泛的，普遍的",
"c": "雅思官方词汇速背: 应用·天文",
"ipa": "/'junɪvɝs/"
},
{
"w": "planet",
"m": "n. 行星",
"x": "Listen for \"planet\" in this topic.",
"c": "雅思官方词汇速背: 应用·天文",
"ipa": "/'plænɪt/"
},
{
"w": "eclipse",
"m": "n./v. （日、月）食；消失，黯然失色",
"x": "Listen for \"eclipse\" in this topic.",
"c": "雅思官方词汇速背: 应用·天文",
"ipa": "/ɪ'klɪps/"
},
{
"w": "martian",
"m": "n. 火星人　adj. 火星的",
"x": "martian → Mar n. 火星；<罗神>战神 martial adj. 军队的，军事的",
"c": "雅思官方词汇速背: 应用·天文",
"ipa": "/ˈmɑrʃən/"
},
{
"w": "astronaut",
"m": "n. 宇航员，太空人",
"x": "astronaut → astronautic adj. 太空航行的",
"c": "雅思官方词汇速背: 应用·天文",
"ipa": "/'æstrə'nɔt/"
},
{
"w": "orbiter",
"m": "n. 人造卫星",
"x": "Listen for \"orbiter\" in this topic.",
"c": "雅思官方词汇速背: 应用·天文",
"ipa": "/'ɔrbɪtɚ/"
},
{
"w": "orbital",
"m": "adj. 轨道的；势力范围的",
"x": "Listen for \"orbital\" in this topic.",
"c": "雅思官方词汇速背: 应用·天文",
"ipa": "/'ɔrbɪtl/"
},
{
"w": "centigrade",
"m": "n. 摄氏",
"x": "Listen for \"centigrade\" in this topic.",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/'sɛntɪɡred/"
},
{
"w": "moisture",
"m": "n. 水分，水气，湿气",
"x": "Listen for \"moisture\" in this topic.",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/'mɔɪstʃɚ/"
},
{
"w": "bleak",
"m": "adj.（天气）寒冷的；凄凉的；前景黯淡的",
"x": "bleak → bleakness n. 缺少颜色；缺少植被；凄凉",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/blik/"
},
{
"w": "chill",
"m": "n. 寒冷；寒气；寒意",
"x": "Listen for \"chill\" in this topic.",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/tʃɪl/"
},
{
"w": "rainfall",
"m": "n. 下雨，降雨",
"x": "Listen for \"rainfall\" in this topic.",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/'ren'fɔl/"
},
{
"w": "breeze",
"m": "n. 微风，轻风",
"x": "breeze → breezy adj. 有微风的；轻松愉快的",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/briz/"
},
{
"w": "hurricane",
"m": "n. 飓风，（尤指西印度群岛的）旋风",
"x": "Listen for \"hurricane\" in this topic.",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/'hɝrəkən/"
},
{
"w": "frost",
"m": "n. 霜冻；严寒天气",
"x": "frost → frosty adj. 寒冷的",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/frɔst/"
},
{
"w": "smog",
"m": "n. 烟雾",
"x": "Listen for \"smog\" in this topic.",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/smɑːɡ/"
},
{
"w": "capricious",
"m": "adj. 变幻莫测的",
"x": "Listen for \"capricious\" in this topic.",
"c": "雅思官方词汇速背: 应用·气象",
"ipa": "/kə'prɪʃəs/"
},
{
"w": "altitude",
"m": "n. 高度",
"x": "Listen for \"altitude\" in this topic.",
"c": "雅思官方词汇速背: 应用·地理",
"ipa": "/'æltɪtud/"
},
{
"w": "horizontal",
"m": "n. 地平线 adj. 水平的，地平线的",
"x": "Listen for \"horizontal\" in this topic.",
"c": "雅思官方词汇速背: 应用·地理",
"ipa": "/'hɔrə'zɑntl/"
},
{
"w": "strait",
"m": "n. 海峡 adj. 窘迫的",
"x": "Listen for \"strait\" in this topic.",
"c": "雅思官方词汇速背: 应用·地理",
"ipa": "/stret/"
},
{
"w": "geology",
"m": "n. 地质学",
"x": "geology → geologic(al) adj. 地质（学）的 geologist n. 地质学家",
"c": "雅思官方词汇速背: 应用·地质",
"ipa": "/dʒɪ'ɑlədʒi/"
},
{
"w": "terrain",
"m": "n. 地带，地形",
"x": "Listen for \"terrain\" in this topic.",
"c": "雅思官方词汇速背: 应用·地质",
"ipa": "/tə'ren/"
},
{
"w": "eruption",
"m": "n. 喷发，爆发",
"x": "Listen for \"eruption\" in this topic.",
"c": "雅思官方词汇速背: 应用·地质",
"ipa": "/ɪ'rʌpʃən/"
},
{
"w": "subsoil",
"m": "n. （土壤的）底土",
"x": "Listen for \"subsoil\" in this topic.",
"c": "雅思官方词汇速背: 应用·地质",
"ipa": "/'sʌb'sɔɪl/"
},
{
"w": "silt",
"m": "n. 淤泥",
"x": "silt → siltation n. 沉积作用，淤积",
"c": "雅思官方词汇速背: 应用·地质",
"ipa": "/sɪlt/"
},
{
"w": "iceberg",
"m": "n. 冰山，流冰",
"x": "Listen for \"iceberg\" in this topic.",
"c": "雅思官方词汇速背: 应用·地质",
"ipa": "/'aɪs'bɝg/"
},
{
"w": "weather",
"m": "v. 晒干；风化",
"x": "Listen for \"weather\" in this topic.",
"c": "雅思官方词汇速背: 应用·地质",
"ipa": "/'wɛðɚ/"
},
{
"w": "gaseous",
"m": "adj. 气态的；似气体的",
"x": "Listen for \"gaseous\" in this topic.",
"c": "雅思官方词汇速背: 应用·地质",
"ipa": "/'ɡæsɪəs/"
},
{
"w": "jungle",
"m": "n. 丛林，密林",
"x": "Listen for \"jungle\" in this topic.",
"c": "雅思官方词汇速背: 应用·植物",
"ipa": "/'dʒʌŋɡl/"
},
{
"w": "scrub",
"m": "n. 灌木丛 v. (-bbed; -bbing) 用力擦洗",
"x": "Listen for \"scrub\" in this topic.",
"c": "雅思官方词汇速背: 应用·植物",
"ipa": "/skrʌb/"
},
{
"w": "seedling",
"m": "n. 幼苗",
"x": "Listen for \"seedling\" in this topic.",
"c": "雅思官方词汇速背: 应用·植物",
"ipa": "/'sidlɪŋ/"
},
{
"w": "timber",
"m": "n. 木料，木材",
"x": "timber → timbering n. 木支架；建筑用材",
"c": "雅思官方词汇速背: 应用·植物",
"ipa": "/'tɪmbɚ/"
},
{
"w": "bloom",
"m": "n. 花",
"x": "bloom → blossom v. 开花",
"c": "雅思官方词汇速背: 应用·植物",
"ipa": "/blum/"
},
{
"w": "ripen",
"m": "v. 成熟，使熟",
"x": "Listen for \"ripen\" in this topic.",
"c": "雅思官方词汇速背: 应用·植物",
"ipa": "/'raɪpən/"
},
{
"w": "perennial",
"m": "adj. 经常出现的；长期的",
"x": "Listen for \"perennial\" in this topic.",
"c": "雅思官方词汇速背: 应用·植物",
"ipa": "/pə'rɛnɪəl/"
},
{
"w": "bacterial",
"m": "adj. 细菌的",
"x": "bacterial → bacterium n.（复数-ria）细菌 bacterin n. 疫苗",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/bæk'tɪrɪəl/"
},
{
"w": "germ",
"m": "n. 微生物；病菌",
"x": "Listen for \"germ\" in this topic.",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/dʒɝm/"
},
{
"w": "parasitic",
"m": "adj. 寄生的；寄生虫的",
"x": "parasitic → parasite n. 寄生虫",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/,pærə'sɪtɪk/"
},
{
"w": "livestock",
"m": "n. 家畜，牲畜",
"x": "Listen for \"livestock\" in this topic.",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/'laɪvstɑk/"
},
{
"w": "biodiversity",
"m": "n. 生物多样性",
"x": "Listen for \"biodiversity\" in this topic.",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/,baɪodaɪ'vɝsəti/"
},
{
"w": "hatch",
"m": "v. 孵化",
"x": "Listen for \"hatch\" in this topic.",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/hætʃ/"
},
{
"w": "incubator",
"m": "n. 孵化器",
"x": "incubator → incubate v. （卵）被孵化 incubation n. 孵卵；孵化",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/ˈɪŋkjubeɪtər/"
},
{
"w": "evolution",
"m": "n. 演变，进化，发展",
"x": "evolution → evolutionary adj. 进化的",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/ˌiːvəˈluːʃn/"
},
{
"w": "larva",
"m": "n.（昆虫的）幼虫，幼体",
"x": "Listen for \"larva\" in this topic.",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/ˈlɑːrvə/"
},
{
"w": "beetle",
"m": "n. 甲虫",
"x": "Listen for \"beetle\" in this topic.",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/ˈbitəl/"
},
{
"w": "spider",
"m": "n. 蜘蛛",
"x": "Listen for \"spider\" in this topic.",
"c": "雅思官方词汇速背: 应用·动物",
"ipa": "/ˈspaɪdər/"
},
{
"w": "skeleton",
"m": "n. 骨骼；骷髅",
"x": "skeleton → skeletal adj. 骨骼的",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/'skɛlɪtn/"
},
{
"w": "kidney",
"m": "n. 肾，肾脏",
"x": "Listen for \"kidney\" in this topic.",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/'kɪdni/"
},
{
"w": "nerve",
"m": "n. 神经",
"x": "nerve → nervous adj. 神经质的；紧张的 neural adj. 神经的，神经系统的",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/nɝv/"
},
{
"w": "embryo",
"m": "n. 胚，胚胎",
"x": "Listen for \"embryo\" in this topic.",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/'ɛmbrɪo/"
},
{
"w": "scar",
"m": "n. 伤痕",
"x": "Listen for \"scar\" in this topic.",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/skɑr/"
},
{
"w": "pregnancy",
"m": "n. 怀孕；妊娠",
"x": "pregnancy → pregnant adj. 怀孕的，怀胎的",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/'prɛgnənsi/"
},
{
"w": "respiratory",
"m": "adj. 呼吸的，呼吸作用的",
"x": "respiratory → respire v. 呼吸 respiration n. 呼吸",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/'rɛspərətɔri/"
},
{
"w": "inhalation",
"m": "n. 吸入",
"x": "Listen for \"inhalation\" in this topic.",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/,ɪnhə'leʃən/"
},
{
"w": "excrete",
"m": "v. 排除，排泄",
"x": "excrete → excretive adj. 排泄的",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/ɪk'skrit/"
},
{
"w": "digest",
"m": "v. 消化",
"x": "digest → digestive adj. 消化的 digestion n. 消化，消化能力",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/daɪ'dʒɛst/"
},
{
"w": "blink",
"m": "n. 眨眼睛 v. 眨眼睛",
"x": "Listen for \"blink\" in this topic.",
"c": "雅思官方词汇速背: 应用·生理",
"ipa": "/blɪŋk/"
},
{
"w": "beam",
"m": "n. 束，柱　v. 播送",
"x": "beam → beaming adj. 照耀的；愉快的 beamy adj. 光亮的",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/bim/"
},
{
"w": "reflex",
"m": "n. 反应能力；反射作用",
"x": "Listen for \"reflex\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/'riflɛks/"
},
{
"w": "flash",
"m": "v. 发出；闪光 n. 闪光",
"x": "Listen for \"flash\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/flæʃ/"
},
{
"w": "glimmer",
"m": "n. 微弱的光　v. 发闪光，发微光",
"x": "Listen for \"glimmer\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/'ɡlɪmɚ/"
},
{
"w": "radiation",
"m": "n. 辐射（能）；放射",
"x": "Listen for \"radiation\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/,redɪ'eʃən/"
},
{
"w": "fume",
"m": "n. 烟雾，气味（常用复数-s）",
"x": "Listen for \"fume\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/fjum/"
},
{
"w": "foam",
"m": "v. 起泡沫；吐白沫",
"x": "Listen for \"foam\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/fom/"
},
{
"w": "liquid",
"m": "n. 液体",
"x": "liquid → liquidity n. 流动性",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/'lɪkwɪd/"
},
{
"w": "dilute",
"m": "v. 稀释，冲淡",
"x": "Listen for \"dilute\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/daɪ'l(j)ut/"
},
{
"w": "extract",
"m": "v. 提取",
"x": "extract → extraction n. 提取；取出",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/'ɛkstrækt/"
},
{
"w": "volatile",
"m": "adj. （液体或油）易挥发的；易变的",
"x": "volatile → volatility n. 挥发性 volatilise v. 挥发",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/'vɑlətl/"
},
{
"w": "smelt",
"m": "v. 熔炼；提炼（矿石）",
"x": "smelt → smeltery n. 冶炼厂",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/smɛlt/"
},
{
"w": "dissolve",
"m": "v. （使）溶解",
"x": "dissolve → dissolvable adj. 可溶解的 dissoluble adj. 可溶解的，可解除的",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/dɪ'zɑlv/"
},
{
"w": "thermal",
"m": "adj. 热的，热量的",
"x": "Listen for \"thermal\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/'θɝml/"
},
{
"w": "congeal",
"m": "v. 使凝结，冻结",
"x": "Listen for \"congeal\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/kən'dʒil/"
},
{
"w": "ultrasonic",
"m": "adj.（声波）超声的",
"x": "Listen for \"ultrasonic\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/,ʌltrə'sɑnɪk/"
},
{
"w": "resonance",
"m": "n. 回响；洪亮；共鸣",
"x": "Listen for \"resonance\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/'rɛznəns/"
},
{
"w": "explode",
"m": "v. （使）爆炸",
"x": "explode → explosive n. 爆炸物 adj. 爆炸的",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/ɪk'splod/"
},
{
"w": "burst",
"m": "v. （使）爆炸",
"x": "Listen for \"burst\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/bɝst/"
},
{
"w": "gravity",
"m": "n. 万有引力；重力",
"x": "Listen for \"gravity\" in this topic.",
"c": "雅思官方词汇速背: 应用·物理",
"ipa": "/'ɡrævəti/"
},
{
"w": "atom",
"m": "n. 原子",
"x": "atom → atomic adj. 原子的",
"c": "雅思官方词汇速背: 应用·化学",
"ipa": "/'ætəm/"
},
{
"w": "hydrogen",
"m": "n. 氢",
"x": "Listen for \"hydrogen\" in this topic.",
"c": "雅思官方词汇速背: 应用·化学",
"ipa": "/'haɪdrədʒən/"
},
{
"w": "monoxide",
"m": "n. 一氧化物",
"x": "Listen for \"monoxide\" in this topic.",
"c": "雅思官方词汇速背: 应用·化学",
"ipa": "/məˈnɑksaɪd/"
},
{
"w": "alloy",
"m": "n. 合金",
"x": "Listen for \"alloy\" in this topic.",
"c": "雅思官方词汇速背: 应用·化学",
"ipa": "/'ælɔɪ/"
},
{
"w": "combustion",
"m": "n. 燃烧，烧毁",
"x": "Listen for \"combustion\" in this topic.",
"c": "雅思官方词汇速背: 应用·化学",
"ipa": "/kəm'bʌstʃən/"
},
{
"w": "synthesis",
"m": "n. 综合物；合成（复数-ses）",
"x": "synthesis → synthesise v. 使合成",
"c": "雅思官方词汇速背: 应用·化学",
"ipa": "/'sɪnθəsɪs/"
},
{
"w": "corrosive",
"m": "adj. 腐蚀的",
"x": "Listen for \"corrosive\" in this topic.",
"c": "雅思官方词汇速背: 应用·化学",
"ipa": "/kə'rosɪv/"
},
{
"w": "equation",
"m": "n. 等式；平衡",
"x": "Listen for \"equation\" in this topic.",
"c": "雅思官方词汇速背: 应用·数学",
"ipa": "/ɪ'kweʒn/"
},
{
"w": "digital",
"m": "adj. 数字式的；数码的",
"x": "digital → digit n. 数字 digitize v. 将资料数字化",
"c": "雅思官方词汇速背: 应用·数学",
"ipa": "/'dɪdʒɪtl/"
},
{
"w": "decimal",
"m": "adj. 十进制的，小数的　n. 小数",
"x": "decimal → decade n. 十年",
"c": "雅思官方词汇速背: 应用·数学",
"ipa": "/'dɛsɪml/"
},
{
"w": "geometry",
"m": "n. 几何（学）",
"x": "geometry → geometric(al) adj. 几何（学）的 geometrician n. 几何学者",
"c": "雅思官方词汇速背: 应用·数学",
"ipa": "/dʒɪ'ɑmətri/"
},
{
"w": "circumference",
"m": "n. 圆周",
"x": "Listen for \"circumference\" in this topic.",
"c": "雅思官方词汇速背: 应用·数学",
"ipa": "/sɚ'kʌmfərəns/"
},
{
"w": "perimeter",
"m": "n. 周边；周围",
"x": "Listen for \"perimeter\" in this topic.",
"c": "雅思官方词汇速背: 应用·数学",
"ipa": "/pə'rɪmɪtɚ/"
},
{
"w": "terrace",
"m": "n. 梯田",
"x": "Listen for \"terrace\" in this topic.",
"c": "雅思官方词汇速背: 应用·农业",
"ipa": "/'tɛrəs/"
},
{
"w": "pest",
"m": "n. 有害的人或物",
"x": "pest → pesticide n. 杀虫剂",
"c": "雅思官方词汇速背: 应用·农业",
"ipa": "/pɛst/"
},
{
"w": "reclaim",
"m": "v./n. 开拓，开垦",
"x": "reclaim → reclaimed adj. 再生的，回收的 reclamation n. 开垦，开拓",
"c": "雅思官方词汇速背: 应用·农业",
"ipa": "/rɪ'klem/"
},
{
"w": "sewage",
"m": "n. （下水道里的）污物",
"x": "Listen for \"sewage\" in this topic.",
"c": "雅思官方词汇速背: 应用·环境",
"ipa": "/'sʊɪdʒ/"
},
{
"w": "epidemic",
"m": "n. 流行病",
"x": "Listen for \"epidemic\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/,ɛpɪ'dɛmɪk/"
},
{
"w": "acute",
"m": "adj. 急性的；极大的；尖锐的",
"x": "Listen for \"acute\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/ə'kjut/"
},
{
"w": "inflammation",
"m": "n. 炎症",
"x": "Listen for \"inflammation\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/'ɪnflə'meʃən/"
},
{
"w": "virus",
"m": "n. 病毒，毒害",
"x": "virus → viral adj. 病毒的，病毒引起的",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/'vaɪrəs/"
},
{
"w": "cholera",
"m": "n. 霍乱",
"x": "Listen for \"cholera\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/'kɑlərə/"
},
{
"w": "cardiology",
"m": "n. 心（脏）病学",
"x": "Listen for \"cardiology\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/,kɑrdɪ'ɑlədʒi/"
},
{
"w": "paralysis",
"m": "n. 麻痹，瘫痪",
"x": "Listen for \"paralysis\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/pə'ræləsɪs/"
},
{
"w": "bruise",
"m": "n. 瘀伤, 伤痕　v. （使）碰伤，（使）成瘀伤",
"x": "Listen for \"bruise\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/bruz/"
},
{
"w": "abortion",
"m": "n. 流产；中止",
"x": "abortion → abort v. 流产，中止 abortive adj. 流产的，失败的",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/ə'bɔrʃən/"
},
{
"w": "curative",
"m": "adj. 医疗的",
"x": "Listen for \"curative\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/'kjʊrətɪv/"
},
{
"w": "heal",
"m": "v. （使）愈合，（使）恢复健康",
"x": "Listen for \"heal\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/hil/"
},
{
"w": "diagnose",
"m": "v. 诊断",
"x": "diagnose → diagnosis n.（复数-ses）诊断，诊断结论",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/,daɪəɡ'nos/"
},
{
"w": "glucose",
"m": "n. 葡萄糖",
"x": "Listen for \"glucose\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/'ɡlukos/"
},
{
"w": "acupuncture",
"m": "n. 针灸（疗法）",
"x": "Listen for \"acupuncture\" in this topic.",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/'ækjupʌŋktʃɚ/"
},
{
"w": "immune",
"m": "adj. 免疫的，有免疫力的；不受……影响的",
"x": "immune → immunity n. 免除，豁免",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/ɪ'mjʊn/"
},
{
"w": "pharmaceutical",
"m": "adj. 制药的；配药的 n. 药",
"x": "pharmaceutical → pharmaceutics n. 配药学，制药学 pharmacist n. 药师, 药剂师",
"c": "雅思官方词汇速背: 应用·医疗",
"ipa": "/,fɑrmə'sutɪkl/"
},
{
"w": "skyscraper",
"m": "n. 摩天大楼",
"x": "skyscraper → skyscraping adj. 极高的，高耸的",
"c": "雅思官方词汇速背: 应用·建筑",
"ipa": "/'skaɪ'skrepɚ/"
},
{
"w": "pagoda",
"m": "n. 塔，宝塔",
"x": "Listen for \"pagoda\" in this topic.",
"c": "雅思官方词汇速背: 应用·建筑",
"ipa": "/pə'ɡodə/"
},
{
"w": "stairway",
"m": "n. 楼梯",
"x": "Listen for \"stairway\" in this topic.",
"c": "雅思官方词汇速背: 应用·建筑",
"ipa": "/'stɛr'we/"
},
{
"w": "drainage",
"m": "n. 排水，放水",
"x": "Listen for \"drainage\" in this topic.",
"c": "雅思官方词汇速背: 应用·建筑",
"ipa": "/'drenɪdʒ/"
},
{
"w": "tile",
"m": "n. 瓦片；瓷砖",
"x": "Listen for \"tile\" in this topic.",
"c": "雅思官方词汇速背: 应用·建筑",
"ipa": "/taɪl/"
},
{
"w": "concrete",
"m": "n. 混凝土 adj. 实体的",
"x": "Listen for \"concrete\" in this topic.",
"c": "雅思官方词汇速背: 应用·建筑",
"ipa": "/'kɑŋkrit/"
},
{
"w": "telecommunication",
"m": "n. 电信",
"x": "Listen for \"telecommunication\" in this topic.",
"c": "雅思官方词汇速背: 应用·科技",
"ipa": "/,tɛlɪkə,mjʊnə'keʃən/"
},
{
"w": "laser",
"m": "n. 激光",
"x": "Listen for \"laser\" in this topic.",
"c": "雅思官方词汇速背: 应用·科技",
"ipa": "/'lezɚ/"
},
{
"w": "telescope",
"m": "n. 望远镜",
"x": "telescope → telescopic adj. 望远镜的，用望远镜的",
"c": "雅思官方词汇速背: 应用·科技",
"ipa": "/'tɛlɪskop/"
},
{
"w": "echolocation",
"m": "n. 回声定位能力，回声定位法",
"x": "Listen for \"echolocation\" in this topic.",
"c": "雅思官方词汇速背: 应用·科技",
"ipa": "/,ɛkolo'keʃən/"
},
{
"w": "vacuum",
"m": "n. 真空",
"x": "vacuum → vacuum-packed adj. 真空包装的",
"c": "雅思官方词汇速背: 应用·科技",
"ipa": "/'vækjʊəm/"
},
{
"w": "simulation",
"m": "n. 模仿，模拟",
"x": "Listen for \"simulation\" in this topic.",
"c": "雅思官方词汇速背: 应用·科技",
"ipa": "/'sɪmjə'leʃən/"
},
{
"w": "extraordinary",
"m": "adj. 非凡的，不一般的",
"x": "Listen for \"extraordinary\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/ɪkˈstrɔːrdəneri/"
},
{
"w": "charismatic",
"m": "adj. 有魅力的；有感召力的",
"x": "Listen for \"charismatic\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/,kærɪz'mætɪk/"
},
{
"w": "outstanding",
"m": "adj. 突出的；杰出的",
"x": "Listen for \"outstanding\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/'aʊt'stændɪŋ/"
},
{
"w": "genius",
"m": "n. 天才，天赋",
"x": "Listen for \"genius\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/'dʒinjəs/"
},
{
"w": "immortal",
"m": "adj. 流芳百世的　n. 不朽的人物",
"x": "Listen for \"immortal\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/ɪ'mɔrtl/"
},
{
"w": "renowned",
"m": "adj. 有名的",
"x": "Listen for \"renowned\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/rɪˈnaʊnd/"
},
{
"w": "prominence",
"m": "n. 声望，杰出；重要",
"x": "Listen for \"prominence\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/'prɑmɪnəns/"
},
{
"w": "celebrated",
"m": "adj. 有名的，著名的",
"x": "Listen for \"celebrated\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/'sɛlə'bretɪd/"
},
{
"w": "reputable",
"m": "adj. 值得尊敬的；声誉好的",
"x": "Listen for \"reputable\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/'rɛpjətəbl/"
},
{
"w": "fame",
"m": "n. 名声；名望",
"x": "fame → famous adj. 著名的",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/fem/"
},
{
"w": "vibrant",
"m": "adj. 响亮的；精力充沛的",
"x": "Listen for \"vibrant\" in this topic.",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/'vaɪbrənt/"
},
{
"w": "vigorous",
"m": "adj. 有力的；精力充沛的",
"x": "vigorous → vigor n. 活力",
"c": "雅思官方词汇速背: WHO·优秀",
"ipa": "/'vɪɡərəs/"
},
{
"w": "carnival",
"m": "n. 狂欢节",
"x": "Listen for \"carnival\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'kɑrnɪvl/"
},
{
"w": "recreational",
"m": "adj. 娱乐的",
"x": "Listen for \"recreational\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/,rɛkri'eʃənəl/"
},
{
"w": "entertainment",
"m": "n. 娱乐；款待",
"x": "Listen for \"entertainment\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'ɛntɚ'tenmənt/"
},
{
"w": "amused",
"m": "adj. 愉快的；被逗笑的",
"x": "Listen for \"amused\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/əmˈjuzd/"
},
{
"w": "judicious",
"m": "adj. 明智的；谨慎的",
"x": "Listen for \"judicious\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/dʒu'dɪʃəs/"
},
{
"w": "ingenuity",
"m": "n. 独创力，心灵手巧",
"x": "Listen for \"ingenuity\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/,ɪndʒə'nuəti/"
},
{
"w": "intellectual",
"m": "adj. 智力的；理智的",
"x": "Listen for \"intellectual\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/,ɪntə'lɛktʃuəl/"
},
{
"w": "shrewd",
"m": "adj. 精明的；敏锐的",
"x": "shrewd → shrewd-brained adj. 头脑精明的",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/ʃrud/"
},
{
"w": "studious",
"m": "adj. 用功的，勤奋的",
"x": "Listen for \"studious\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'studɪəs/"
},
{
"w": "laborious",
"m": "adj. 勤劳的；费劲的",
"x": "Listen for \"laborious\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/lə'bɔrɪəs/"
},
{
"w": "enterprising",
"m": "adj. 有事业心的；有胆量的",
"x": "Listen for \"enterprising\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'ɛntɚpraɪzɪŋ/"
},
{
"w": "benevolence",
"m": "n. 仁慈",
"x": "Listen for \"benevolence\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/bə'nɛvələns/"
},
{
"w": "humanitarian",
"m": "n. 人道主义者 adj. 人道主义的",
"x": "humanitarian → humanitarianism n. 博爱主义；humanistic adj. 人文主义的； humanist n. 人道主义者； humane adj. 仁爱的，慈善的",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/hju,mænɪ'tɛrɪən/"
},
{
"w": "sympathetic",
"m": "adj. 表示同情的",
"x": "sympathetic → sympathise v. 同情，支持 sympathy n. 同情（心）",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/,sɪmpə'θɛtɪk/"
},
{
"w": "audacious",
"m": "adj. 大胆的，有冒险精神的",
"x": "Listen for \"audacious\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/ɔ'deʃəs/"
},
{
"w": "intrepid",
"m": "adj. 无畏的，勇敢的",
"x": "Listen for \"intrepid\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/ɪn'trɛpɪd/"
},
{
"w": "malice",
"m": "n. 恶意",
"x": "malice → malicious adj. 恶意的, 恶毒的",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'mælɪs/"
},
{
"w": "malignant",
"m": "adj. 恶性的；恶毒的",
"x": "malignant → malignancy n. 恶意",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/mə'lɪgnənt/"
},
{
"w": "afflict",
"m": "v. 使受痛苦，折磨",
"x": "Listen for \"afflict\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/ə'flɪkt/"
},
{
"w": "seclusion",
"m": "n. 隔绝",
"x": "seclusion → seclusive adj. 爱隐居的，孤僻的",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/sɪ'klʊʒən/"
},
{
"w": "solely",
"m": "adv. 唯一（地）",
"x": "Listen for \"solely\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'solli/"
},
{
"w": "eccentric",
"m": "adj. 古怪的；异乎寻常的",
"x": "Listen for \"eccentric\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/ɪk'sɛntrɪk/"
},
{
"w": "oddly",
"m": "adv. 奇怪地",
"x": "oddly → oddity n. 奇特，古怪",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'ɑdli/"
},
{
"w": "weird",
"m": "adj. 怪诞的，古怪的",
"x": "weird → weirdness n. 古怪",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/wɪrd/"
},
{
"w": "barren",
"m": "adj. 贫瘠的；不结果的",
"x": "Listen for \"barren\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'bærən/"
},
{
"w": "impoverished",
"m": "adj. 穷困的；用尽了的",
"x": "Listen for \"impoverished\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/ɪm'pɑvərɪʃt/"
},
{
"w": "dearth",
"m": "n. 缺乏，（供应）不足",
"x": "Listen for \"dearth\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/dərθ/"
},
{
"w": "famine",
"m": "n. 饥荒；缺乏",
"x": "Listen for \"famine\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'fæmɪn/"
},
{
"w": "lethal",
"m": "adj. 致死的，能致命的",
"x": "Listen for \"lethal\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'liθl/"
},
{
"w": "poison",
"m": "n. 毒药，毒物",
"x": "poison → poisonous adj. 有毒的",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'pɔɪzn/"
},
{
"w": "mortality",
"m": "n. 必死性；死亡率",
"x": "mortality → mortal adj. 终有一死的 immortal adj. 不朽的",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/mɔr'tæləti/"
},
{
"w": "perish",
"m": "v. 消亡，死亡",
"x": "Listen for \"perish\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'pɛrɪʃ/"
},
{
"w": "slaughter",
"m": "v. 屠杀, 杀",
"x": "Listen for \"slaughter\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'slɔtɚ/"
},
{
"w": "suicidal",
"m": "adj. 自杀的，可能导致自杀的",
"x": "suicidal → suicide n. 自杀 suicidally adv. 毁灭性地；自杀地",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'sʊə'saɪdl/"
},
{
"w": "toil",
"m": "v. 长时间或辛苦工作",
"x": "toil → toiler n. 辛劳者 toilful adj. 费力的，辛苦的",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/tɔɪl/"
},
{
"w": "burnout",
"m": "n. 筋疲力尽；烧毁，烧坏",
"x": "Listen for \"burnout\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'bɝnaʊt/"
},
{
"w": "stringent",
"m": "adj. 严格的；严厉的",
"x": "Listen for \"stringent\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'strɪndʒənt/"
},
{
"w": "rigid",
"m": "adj. 严格的；死板的，不变的",
"x": "Listen for \"rigid\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/'rɪdʒɪd/"
},
{
"w": "harsh",
"m": "adj. 严厉的；严酷的",
"x": "Listen for \"harsh\" in this topic.",
"c": "雅思官方词汇速背: WHO·积极",
"ipa": "/hɑrʃ/"
},
{
"w": "array",
"m": "n. 一系列",
"x": "Listen for \"array\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/ə're/"
},
{
"w": "troop",
"m": "v. 群集；成群而行",
"x": "Listen for \"troop\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/trʊp/"
},
{
"w": "asymmetry",
"m": "n. 不对称性",
"x": "asymmetry → asymmetric adj. 不对称的",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/e'sɪmɪtri/"
},
{
"w": "semi-circle",
"m": "n. 半圆形",
"x": "Listen for \"semi-circle\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'sɛmi/"
},
{
"w": "configuration",
"m": "n. 构造，形状",
"x": "Listen for \"configuration\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/kən,fɪɡjə'reʃən/"
},
{
"w": "cube",
"m": "n. 立方体",
"x": "cube → cubic adj. 立方体的",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/kjʊb/"
},
{
"w": "curve",
"m": "n. 曲线",
"x": "Listen for \"curve\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/kɝv/"
},
{
"w": "ancestor",
"m": "n. 先驱者，前辈",
"x": "Listen for \"ancestor\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'ænsɛstɚ/"
},
{
"w": "antecedent",
"m": "n. 前身；祖先",
"x": "Listen for \"antecedent\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'æntə'sidnt/"
},
{
"w": "inherit",
"m": "v. 继承",
"x": "inherit → inheritance n. 继承物, 遗产 inheritor n. 继承人，后继者",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/ɪn'hɛrɪt/"
},
{
"w": "inherent",
"m": "adj. 固有的，内在的",
"x": "Listen for \"inherent\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/ɪn'hɪrənt/"
},
{
"w": "posterity",
"m": "n. 后代，后世",
"x": "Listen for \"posterity\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/pɑ'stɛrəti/"
},
{
"w": "heritage",
"m": "n. 遗产，继承物",
"x": "Listen for \"heritage\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'hɛrɪtɪdʒ/"
},
{
"w": "descend",
"m": "v. 下降；遗传",
"x": "descend → descent n. 血统，出身 descendant n. 后代，后裔",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/dɪ'sɛnd/"
},
{
"w": "offspring",
"m": "n. 后代",
"x": "Listen for \"offspring\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'ɔfsprɪŋ/"
},
{
"w": "infant",
"m": "n. 婴儿，幼儿",
"x": "Listen for \"infant\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'ɪnfənt/"
},
{
"w": "audible",
"m": "adj. 听得见的",
"x": "Listen for \"audible\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'ɔdəbl/"
},
{
"w": "sense",
"m": "v. 官能；领悟",
"x": "sense → sensible adj. 明智的，合情理的； sensitive adj. 敏感的；灵敏的；sensory adj. 感觉的，感知的",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/sɛns/"
},
{
"w": "hearing",
"m": "n. 听力，听觉",
"x": "Listen for \"hearing\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'hɪrɪŋ/"
},
{
"w": "acoustic",
"m": "adj. 声音的；听觉的",
"x": "acoustic → acoustical adj. 听觉的；acoustically adv. 听觉上，声学上； acoustics n. 声学",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/ə'kʊstɪk/"
},
{
"w": "scent",
"m": "n. 气味；香水",
"x": "Listen for \"scent\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/sɛnt/"
},
{
"w": "audiovisual",
"m": "n. 视听设备　adj. 视听的",
"x": "Listen for \"audiovisual\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'ɔdɪo'vɪʒʊəl/"
},
{
"w": "odour",
"m": "n. 气味",
"x": "Listen for \"odour\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/ˈoʊdər/"
},
{
"w": "utterance",
"m": "n. 发声，语调",
"x": "Listen for \"utterance\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'ʌtərəns/"
},
{
"w": "agony",
"m": "n. 极大的痛苦",
"x": "Listen for \"agony\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'æɡəni/"
},
{
"w": "annoying",
"m": "adj. 使恼怒的，使生气的，使烦恼的",
"x": "Listen for \"annoying\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/ə'nɔɪɪŋ/"
},
{
"w": "rage",
"m": "n. 动怒，怒斥　v. 动怒",
"x": "Listen for \"rage\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/redʒ/"
},
{
"w": "grieve",
"m": "v. 感到悲痛；伤心",
"x": "Listen for \"grieve\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/griv/"
},
{
"w": "indignant",
"m": "adj. 愤怒的，愤慨的",
"x": "indignant → indignation n. 愤怒；气愤",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/ɪn'dɪɡnənt/"
},
{
"w": "irritate",
"m": "v. 使发怒；使急躁",
"x": "Listen for \"irritate\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'ɪrɪtet/"
},
{
"w": "panic",
"m": "v. （使）恐慌　n. 恐慌，惊慌",
"x": "Listen for \"panic\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'pænɪk/"
},
{
"w": "loath",
"m": "adj. 不愿意的，不喜欢的",
"x": "loath → loathe v. 厌恶，憎恶 loathsome adj. 令人憎恨的，讨厌的",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/loθ/"
},
{
"w": "sorrow",
"m": "n. 悲痛，悲伤　v. 感到（或表示）悲伤",
"x": "sorrow → sorrowful adj. 伤心的，悲伤的",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'sɔro/"
},
{
"w": "zipper",
"m": "n. 拉链　v. 拉上拉链",
"x": "Listen for \"zipper\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'zɪpɚ/"
},
{
"w": "sew",
"m": "v. 缝",
"x": "Listen for \"sew\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/so/"
},
{
"w": "waterproof",
"m": "n. 雨衣，防水服 adj. 防水的",
"x": "Listen for \"waterproof\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'wɔtɚpruf/"
},
{
"w": "textile",
"m": "n. 纺织品，织物；纺织业",
"x": "Listen for \"textile\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'tɛkstaɪl/"
},
{
"w": "sleeve",
"m": "n. 衣服袖子",
"x": "sleeve → sleevelet n. 袖套 sleeveless adj. 无袖的",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/sliv/"
},
{
"w": "banquet",
"m": "n. 宴会",
"x": "Listen for \"banquet\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'bæŋkwɪt/"
},
{
"w": "feast",
"m": "n. 盛会",
"x": "Listen for \"feast\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/fist/"
},
{
"w": "alcohol",
"m": "n. 酒",
"x": "alcohol → alcoholic adj. 酒精的",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/'ælkəhɔl/"
},
{
"w": "steak",
"m": "n. 牛排",
"x": "steak → steakhouse n. 牛排餐厅",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/stek/"
},
{
"w": "yolk",
"m": "n. 蛋黄",
"x": "Listen for \"yolk\" in this topic.",
"c": "雅思官方词汇速背: WHO·日常",
"ipa": "/jok/"
},
{
"w": "archaic",
"m": "adj. 古时的；陈旧的；古式的",
"x": "Listen for \"archaic\" in this topic.",
"c": "雅思官方词汇速背: WHEN·时间",
"ipa": "/ɑr'keɪk/"
},
{
"w": "antique",
"m": "adj. 古时制造的，古董的　n. 古玩，古物",
"x": "Listen for \"antique\" in this topic.",
"c": "雅思官方词汇速背: WHEN·时间",
"ipa": "/æn'tik/"
},
{
"w": "immemorial",
"m": "adj. 无法追忆的；远古的",
"x": "Listen for \"immemorial\" in this topic.",
"c": "雅思官方词汇速背: WHEN·时间",
"ipa": "/,ɪmə'mɔrɪəl/"
},
{
"w": "outdated",
"m": "adj. 过时的；无用的",
"x": "Listen for \"outdated\" in this topic.",
"c": "雅思官方词汇速背: WHEN·时间",
"ipa": "/'aʊt'detɪd/"
},
{
"w": "occasionally",
"m": "adv. 偶尔",
"x": "Listen for \"occasionally\" in this topic.",
"c": "雅思官方词汇速背: WHEN·时间",
"ipa": "/o'keʒənəli/"
},
{
"w": "finite",
"m": "adj. 有限的，有限度的",
"x": "Listen for \"finite\" in this topic.",
"c": "雅思官方词汇速背: WHEN·程度",
"ipa": "/'faɪnaɪt/"
},
{
"w": "finitude",
"m": "n. 界限，限制",
"x": "Listen for \"finitude\" in this topic.",
"c": "雅思官方词汇速背: WHEN·程度",
"ipa": "/'fɪnə,tjʊd/"
},
{
"w": "attain",
"m": "v. 实现；达到",
"x": "Listen for \"attain\" in this topic.",
"c": "雅思官方词汇速背: WHEN·程度",
"ipa": "/ə'ten/"
},
{
"w": "procure",
"m": "v. 努力取得",
"x": "procure → procurement n. 取得",
"c": "雅思官方词汇速背: WHEN·程度",
"ipa": "/prə'kjʊr/"
},
{
"w": "retrieve",
"m": "v. 寻回",
"x": "Listen for \"retrieve\" in this topic.",
"c": "雅思官方词汇速背: WHEN·程度",
"ipa": "/rɪ'triv/"
},
{
"w": "lag",
"m": "n. 滞后；落后 v. 落后",
"x": "Listen for \"lag\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/læɡ/"
},
{
"w": "linger",
"m": "v. 逗留，徘徊",
"x": "Listen for \"linger\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/'lɪŋɡɚ/"
},
{
"w": "postpone",
"m": "v. 延期，推迟",
"x": "Listen for \"postpone\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/po'spon/"
},
{
"w": "stall",
"m": "n. 摊；棚　v. 拖延",
"x": "Listen for \"stall\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/stɔl/"
},
{
"w": "legacy",
"m": "n. 遗赠物",
"x": "legacy → legatary n. 受遗赠人",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/'lɛgəsi/"
},
{
"w": "memento",
"m": "n. 纪念品",
"x": "Listen for \"memento\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/mɛˈmɛntoʊ/"
},
{
"w": "initiate",
"m": "v. 开始",
"x": "initiate → initiative n. 主动性 initiation n. 开始",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/ɪ'nɪʃɪet/"
},
{
"w": "inaugurate",
"m": "v. 开始；为……举行就职典礼",
"x": "Listen for \"inaugurate\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/ɪ'nɔɡjəret/"
},
{
"w": "revive",
"m": "v. 恢复；苏醒，复活",
"x": "revive → revival n. 复活",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/rɪ'vaɪv/"
},
{
"w": "embark",
"m": "v. 从事；上船或飞机",
"x": "Listen for \"embark\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/ɪm'bɑrk/"
},
{
"w": "truce",
"m": "n. 休战；中止，暂停",
"x": "Listen for \"truce\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/trus/"
},
{
"w": "cease",
"m": "v. 停止，终止，结束",
"x": "cease → ceaseless adj. 不停的",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/sis/"
},
{
"w": "halt",
"m": "v. 停止，暂停",
"x": "Listen for \"halt\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/hɔlt/"
},
{
"w": "terminate",
"m": "v. 结束，使终结",
"x": "Listen for \"terminate\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/'tɝmɪnet/"
},
{
"w": "balk",
"m": "v. 畏缩不前，犹豫",
"x": "Listen for \"balk\" in this topic.",
"c": "雅思官方词汇速背: WHEN·行动",
"ipa": "/bɔk/"
},
{
"w": "situate",
"m": "v. 使位于，使处于……地位（位置）",
"x": "Listen for \"situate\" in this topic.",
"c": "雅思官方词汇速背: WHERE·位于",
"ipa": "/'sɪtʃʊet/"
},
{
"w": "scan",
"m": "v. 扫描",
"x": "Listen for \"scan\" in this topic.",
"c": "雅思官方词汇速背: WHERE·办公",
"ipa": "/skæn/"
},
{
"w": "constituent",
"m": "n. 组成部分，成分；选民",
"x": "Listen for \"constituent\" in this topic.",
"c": "雅思官方词汇速背: WHAT·要事",
"ipa": "/kən'stɪtʃuənt/"
},
{
"w": "segment",
"m": "n. 部分，片段",
"x": "segment → segmental adj. 部分的 segmentation n. 分割",
"c": "雅思官方词汇速背: WHAT·要事",
"ipa": "/'sɛɡmənt/"
},
{
"w": "ingredient",
"m": "n. 组成部分；配料",
"x": "Listen for \"ingredient\" in this topic.",
"c": "雅思官方词汇速背: WHAT·要事",
"ipa": "/ɪn'ɡridɪənt/"
},
{
"w": "conflict",
"m": "n. 冲突；战斗，斗争",
"x": "Listen for \"conflict\" in this topic.",
"c": "雅思官方词汇速背: WHAT·要事",
"ipa": "/'kɑnflɪkt/"
},
{
"w": "riot",
"m": "n. 暴乱，骚乱",
"x": "riot → rioter n. 暴徒，暴民",
"c": "雅思官方词汇速背: WHAT·要事",
"ipa": "/'raɪət/"
},
{
"w": "eventuality",
"m": "n. 可能发生的事情",
"x": "Listen for \"eventuality\" in this topic.",
"c": "雅思官方词汇速背: WHAT·要事",
"ipa": "/ɪ,vɛntʃu'æləti/"
},
{
"w": "incident",
"m": "n. 事件，骚乱，事故",
"x": "incident → incidental adj. 易发生的；偶然发生的",
"c": "雅思官方词汇速背: WHAT·要事",
"ipa": "/'ɪnsɪdənt/"
},
{
"w": "urgency",
"m": "n. 紧迫，紧要；急事",
"x": "urgency → urgent adj. 急迫的，紧急的 urgently adv. 紧急地",
"c": "雅思官方词汇速背: WHAT·要事",
"ipa": "/'ɝdʒənsi/"
},
{
"w": "norm",
"m": "n. 标准，规范",
"x": "norm → normal adj. 正常的",
"c": "雅思官方词汇速背: WHAT·范例",
"ipa": "/nɔrm/"
},
{
"w": "touchstone",
"m": "n. 试金石；（检验）标准",
"x": "Listen for \"touchstone\" in this topic.",
"c": "雅思官方词汇速背: WHAT·范例",
"ipa": "/'tʌtʃ'ston/"
},
{
"w": "precedent",
"m": "n. 范例，判例",
"x": "precedent → precedence n. 优先，优先权 precedented adj. 有先例（可援）的",
"c": "雅思官方词汇速背: WHAT·范例",
"ipa": "/'prɛsɪdənt/"
},
{
"w": "prototype",
"m": "n. 原型，雏形",
"x": "Listen for \"prototype\" in this topic.",
"c": "雅思官方词汇速背: WHAT·范例",
"ipa": "/'protə'taɪp/"
},
{
"w": "exemplify",
"m": "v. 是……的典型，实例",
"x": "Listen for \"exemplify\" in this topic.",
"c": "雅思官方词汇速背: WHAT·范例",
"ipa": "/ɪɡ'zɛmplɪfaɪ/"
},
{
"w": "domain",
"m": "n. 范围，领域",
"x": "Listen for \"domain\" in this topic.",
"c": "雅思官方词汇速背: WHAT·区域",
"ipa": "/do'men/"
},
{
"w": "span",
"m": "n. 跨度，跨径",
"x": "Listen for \"span\" in this topic.",
"c": "雅思官方词汇速背: WHAT·区域",
"ipa": "/spæn/"
},
{
"w": "realm",
"m": "n. 领域，范围",
"x": "Listen for \"realm\" in this topic.",
"c": "雅思官方词汇速背: WHAT·区域",
"ipa": "/rɛlm/"
},
{
"w": "holistic",
"m": "adj. 全部的",
"x": "Listen for \"holistic\" in this topic.",
"c": "雅思官方词汇速背: WHAT·大小",
"ipa": "/ho'lɪstɪk/"
},
{
"w": "integrate",
"m": "v. 使结合成为整体 adj. 整体的",
"x": "integrate → integration n. 结合，整合",
"c": "雅思官方词汇速背: WHAT·大小",
"ipa": "/'ɪntɪɡret/"
},
{
"w": "subtle",
"m": "adj. 细微的；难以捉摸的",
"x": "Listen for \"subtle\" in this topic.",
"c": "雅思官方词汇速背: WHAT·大小",
"ipa": "/'sʌtl/"
},
{
"w": "trivial",
"m": "adj. 琐碎的；没有价值的，没有意义的",
"x": "Listen for \"trivial\" in this topic.",
"c": "雅思官方词汇速背: WHAT·大小",
"ipa": "/'trɪvɪəl/"
},
{
"w": "slight",
"m": "adj. 微小的，轻微的",
"x": "Listen for \"slight\" in this topic.",
"c": "雅思官方词汇速背: WHAT·大小",
"ipa": "/slaɪt/"
},
{
"w": "fatal",
"m": "adj. 致命的",
"x": "Listen for \"fatal\" in this topic.",
"c": "雅思官方词汇速背: WHAT·威胁",
"ipa": "/'fetl/"
},
{
"w": "calamity",
"m": "n. 灾祸, 灾难",
"x": "Listen for \"calamity\" in this topic.",
"c": "雅思官方词汇速背: WHAT·威胁",
"ipa": "/kə'læməti/"
},
{
"w": "adversity",
"m": "n. 逆境，灾难",
"x": "Listen for \"adversity\" in this topic.",
"c": "雅思官方词汇速背: WHAT·威胁",
"ipa": "/əd'vɝsəti/"
},
{
"w": "intimidate",
"m": "v. 恐吓，威胁",
"x": "Listen for \"intimidate\" in this topic.",
"c": "雅思官方词汇速背: WHAT·威胁",
"ipa": "/ɪn'tɪmɪdet/"
},
{
"w": "dilemma",
"m": "n. 左右为难",
"x": "Listen for \"dilemma\" in this topic.",
"c": "雅思官方词汇速背: WHAT·威胁",
"ipa": "/dɪˈlemə/"
},
{
"w": "deadlock",
"m": "n. 僵局，僵持",
"x": "Listen for \"deadlock\" in this topic.",
"c": "雅思官方词汇速背: WHAT·威胁",
"ipa": "/'dɛdlɑk/"
},
{
"w": "doom",
"m": "n. 厄运 v. 注定",
"x": "Listen for \"doom\" in this topic.",
"c": "雅思官方词汇速背: WHAT·威胁",
"ipa": "/dʊm/"
},
{
"w": "stranded",
"m": "adj. 处于困境的",
"x": "Listen for \"stranded\" in this topic.",
"c": "雅思官方词汇速背: WHAT·威胁",
"ipa": "/'strændɪd/"
},
{
"w": "feat",
"m": "n. 功绩，伟业",
"x": "Listen for \"feat\" in this topic.",
"c": "雅思官方词汇速背: WHAT·性质",
"ipa": "/fit/"
},
{
"w": "triumph",
"m": "n. 胜利，获胜",
"x": "Listen for \"triumph\" in this topic.",
"c": "雅思官方词汇速背: WHAT·性质",
"ipa": "/'traɪʌmf/"
},
{
"w": "accomplishment",
"m": "n. 完成，实现",
"x": "accomplishment → accomplishable adj. 可完成的，可达到的",
"c": "雅思官方词汇速背: WHAT·性质",
"ipa": "/ə'kɑmplɪʃmənt/"
},
{
"w": "optimum",
"m": "adj. 最有利的；最适宜的",
"x": "Listen for \"optimum\" in this topic.",
"c": "雅思官方词汇速背: WHAT·性质",
"ipa": "/'ɑptəməm/"
},
{
"w": "defect",
"m": "n. 缺点，缺陷",
"x": "Listen for \"defect\" in this topic.",
"c": "雅思官方词汇速背: WHAT·性质",
"ipa": "/‘dɪfɛkt/"
},
{
"w": "awful",
"m": "adj. 非常差的，很糟的",
"x": "Listen for \"awful\" in this topic.",
"c": "雅思官方词汇速背: WHAT·性质",
"ipa": "/'ɔfl/"
},
{
"w": "disgusting",
"m": "adj. 令人作呕的，令人厌恶的",
"x": "Listen for \"disgusting\" in this topic.",
"c": "雅思官方词汇速背: WHAT·性质",
"ipa": "/dɪs'ɡʌstɪŋ/"
},
{
"w": "evil",
"m": "adj. 邪恶的；讨厌的",
"x": "Listen for \"evil\" in this topic.",
"c": "雅思官方词汇速背: WHAT·性质",
"ipa": "/'ivl/"
},
{
"w": "trait",
"m": "n. 个性；显著的特点",
"x": "Listen for \"trait\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/tret/"
},
{
"w": "personality",
"m": "n. 人格，个性",
"x": "Listen for \"personality\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/,pɝsə'næləti/"
},
{
"w": "residue",
"m": "n. 剩余，余渣",
"x": "Listen for \"residue\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'rɛzɪdu/"
},
{
"w": "remainder",
"m": "n. 剩余",
"x": "Listen for \"remainder\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/rɪ'mendɚ/"
},
{
"w": "debris",
"m": "n. 散落的碎片，残骸",
"x": "Listen for \"debris\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/də'bri/"
},
{
"w": "rift",
"m": "n. 裂缝；不和 v. 裂开",
"x": "Listen for \"rift\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/rɪft/"
},
{
"w": "resign",
"m": "v. 辞职；放弃",
"x": "resign → resignation n. 辞职 resigned adj. 已辞职的；顺从的",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/rɪ'zaɪn/"
},
{
"w": "engage",
"m": "v. 从事，忙于",
"x": "engage → engagement n. 订婚；约会",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ɪn'ɡedʒ/"
},
{
"w": "accountability",
"m": "n. 有责任，有义务",
"x": "Listen for \"accountability\" in this topic.",
"c": "雅思官方词汇速背: WHAT·益处",
"ipa": "/ə,kaʊntə'bɪləti/"
},
{
"w": "obligation",
"m": "n. 义务，责任",
"x": "Listen for \"obligation\" in this topic.",
"c": "雅思官方词汇速背: WHAT·益处",
"ipa": "/,ɑblɪ'ɡeʃən/"
},
{
"w": "commitment",
"m": "n. 承诺",
"x": "Listen for \"commitment\" in this topic.",
"c": "雅思官方词汇速背: WHAT·益处",
"ipa": "/kə'mɪtmənt/"
},
{
"w": "equity",
"m": "n. 公平，公正",
"x": "Listen for \"equity\" in this topic.",
"c": "雅思官方词汇速背: WHAT·益处",
"ipa": "/'ɛkwəti/"
},
{
"w": "equitable",
"m": "adj. 公正的，合理的",
"x": "equitable → equitableness n. 公正 equitably adv. 公正地",
"c": "雅思官方词汇速背: WHAT·益处",
"ipa": "/ˈɛkwɪtəbəl/"
},
{
"w": "neutral",
"m": "adj. 中立的，不偏不倚的",
"x": "Listen for \"neutral\" in this topic.",
"c": "雅思官方词汇速背: WHAT·益处",
"ipa": "/'nʊtrəl/"
},
{
"w": "disinterested",
"m": "adj. 公正的",
"x": "Listen for \"disinterested\" in this topic.",
"c": "雅思官方词汇速背: WHAT·益处",
"ipa": "/dɪs'ɪntərɪsɪd/"
},
{
"w": "drastic",
"m": "adj. 激烈的；极端的；严厉的",
"x": "Listen for \"drastic\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'dræstɪk/"
},
{
"w": "conspicuous",
"m": "adj. 显眼的，明显的",
"x": "Listen for \"conspicuous\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/kən'spɪkjʊəs/"
},
{
"w": "apparent",
"m": "adj. 显然的，明显的，清晰可见的",
"x": "Listen for \"apparent\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ə'pærənt/"
},
{
"w": "dramatic",
"m": "adj. 引人注目的",
"x": "Listen for \"dramatic\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/drə'mætɪk/"
},
{
"w": "explicit",
"m": "adj. 明确的；详述的；直言的",
"x": "Listen for \"explicit\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ɪk'splɪsɪt/"
},
{
"w": "compelling",
"m": "adj. 非常强烈的；引人入胜的",
"x": "Listen for \"compelling\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/kəm'pɛlɪŋ/"
},
{
"w": "culprit",
"m": "n. 罪犯",
"x": "Listen for \"culprit\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'kʌlprɪt/"
},
{
"w": "misdeed",
"m": "n. 违法行为，罪恶",
"x": "Listen for \"misdeed\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/,mɪs'did/"
},
{
"w": "hijack",
"m": "v. 绑架；拦路抢劫",
"x": "Listen for \"hijack\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'haɪdʒæk/"
},
{
"w": "homicide",
"m": "n. <律>杀人（行为）；杀人犯",
"x": "homicide → homicidal adj. 嗜杀成性的",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'hɑmɪsaɪd/"
},
{
"w": "delinquency",
"m": "n. 不法行为；过失，罪过",
"x": "delinquency → delinquent adj. 违法的",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/dɪ'lɪŋkwənsi/"
},
{
"w": "assault",
"m": "n. 攻击；殴打　v. 袭击，殴打；强暴",
"x": "Listen for \"assault\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ə'sɔlt/"
},
{
"w": "robbery",
"m": "n. 抢劫案；抢劫，盗取",
"x": "Listen for \"robbery\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'rɑbəri/"
},
{
"w": "loot",
"m": "n. 赃物，掠夺物，战利品 v. 抢劫，掠夺",
"x": "loot → looter n. 掠夺者，抢劫者",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/lut/"
},
{
"w": "embezzlement",
"m": "n. 盗用，挪用",
"x": "Listen for \"embezzlement\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ɪm'bɛzlmənt/"
},
{
"w": "corrupt",
"m": "adj. 贪污的，受贿的",
"x": "corrupt → corruption n. 堕落；腐化",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/kə'rʌpt/"
},
{
"w": "revenge",
"m": "n. 报仇，报复　v. 为……报仇",
"x": "Listen for \"revenge\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/rɪ'vɛndʒ/"
},
{
"w": "punitive",
"m": "adj. 处罚的，惩罚的",
"x": "Listen for \"punitive\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'pjʊnətɪv/"
},
{
"w": "penalty",
"m": "n. 惩罚，处罚",
"x": "Listen for \"penalty\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'pɛnəlti/"
},
{
"w": "notorious",
"m": "adj. 臭名昭著的，声名狼藉的",
"x": "Listen for \"notorious\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/no'tɔrɪəs/"
},
{
"w": "prejudice",
"m": "n. 偏见，歧视",
"x": "Listen for \"prejudice\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'prɛdʒədɪs/"
},
{
"w": "mislead",
"m": "v. 误导，将……引入歧途",
"x": "Listen for \"mislead\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'mɪs'lid/"
},
{
"w": "bias",
"m": "n. 偏见，偏心",
"x": "bias → biased adj. 有偏见的 unbiased adj. 不偏不倚的，公正的",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'baɪəs/"
},
{
"w": "odds",
"m": "n. 可能性，机会",
"x": "Listen for \"odds\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ɑdz/"
},
{
"w": "incidence",
"m": "n. 发生率；影响范围",
"x": "Listen for \"incidence\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'ɪnsɪdəns/"
},
{
"w": "sheer",
"m": "adj. 完全的　adv. 完全；垂直",
"x": "Listen for \"sheer\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ʃɪr/"
},
{
"w": "gross",
"m": "adj. 总的；总重量的，毛重的 v. 总收入为",
"x": "Listen for \"gross\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ɡros/"
},
{
"w": "abnormal",
"m": "adj. 反常的；变态的",
"x": "Listen for \"abnormal\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/æb'nɔrml/"
},
{
"w": "habitual",
"m": "adj. 习惯的，惯常的",
"x": "Listen for \"habitual\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/hə'bɪtʃuəl/"
},
{
"w": "plastic",
"m": "adj. 可塑的 n. 塑料",
"x": "plastic → plasticity n. 可塑性",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'plæstɪk/"
},
{
"w": "elastic",
"m": "adj. 有弹力的",
"x": "Listen for \"elastic\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ɪ'læstɪk/"
},
{
"w": "tensile",
"m": "adj. 拉力的；可伸展的",
"x": "tensile → tension n. 张力",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'tɛnsl/"
},
{
"w": "flavour",
"m": "n. 味道；香料",
"x": "Listen for \"flavour\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点"
},
{
"w": "acid",
"m": "adj. 酸味的，酸的",
"x": "Listen for \"acid\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'æsɪd/"
},
{
"w": "yummy",
"m": "adj. 美味的",
"x": "Listen for \"yummy\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'jʌmi/"
},
{
"w": "tasty",
"m": "adj. 美味的",
"x": "Listen for \"tasty\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'testi/"
},
{
"w": "awkward",
"m": "adj. 笨重的；尴尬的",
"x": "Listen for \"awkward\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'ɔkwɚd/"
},
{
"w": "cumbersome",
"m": "adj. 大而笨重的；冗长的",
"x": "Listen for \"cumbersome\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/ˈkəmbərsəm/"
},
{
"w": "sluggish",
"m": "adj. 行动迟缓的，不机警的",
"x": "Listen for \"sluggish\" in this topic.",
"c": "雅思官方词汇速背: WHAT·特点",
"ipa": "/'slʌɡɪʃ/"
},
{
"w": "ascribe",
"m": "v. 把……归于，认为……具有",
"x": "Listen for \"ascribe\" in this topic.",
"c": "雅思官方词汇速背: WHY·引起",
"ipa": "/ə'skraɪb/"
},
{
"w": "account",
"m": "v. 说明……原因　n. 讲述；账户",
"x": "account → accountancy n. 会计工作；accountant n. 会计人员，会计师； accountable adj. 应作解释的，负有责任的",
"c": "雅思官方词汇速背: WHY·引起",
"ipa": "/ə'kaʊnt/"
},
{
"w": "arise",
"m": "v. 引起；唤醒",
"x": "Listen for \"arise\" in this topic.",
"c": "雅思官方词汇速背: WHY·引起",
"ipa": "/ə'raɪz/"
},
{
"w": "evoke",
"m": "v. 产生，引起；唤起",
"x": "Listen for \"evoke\" in this topic.",
"c": "雅思官方词汇速背: WHY·引起",
"ipa": "/ɪ'vok/"
},
{
"w": "pose",
"m": "v. 引起，产生；提出",
"x": "Listen for \"pose\" in this topic.",
"c": "雅思官方词汇速背: WHY·引起",
"ipa": "/poz/"
},
{
"w": "rouse",
"m": "v. 唤醒；使……活跃起来（产生兴趣）",
"x": "Listen for \"rouse\" in this topic.",
"c": "雅思官方词汇速背: WHY·引起",
"ipa": "/raʊz/"
},
{
"w": "startling",
"m": "adj. 令人震惊的",
"x": "Listen for \"startling\" in this topic.",
"c": "雅思官方词汇速背: WHY·惊奇",
"ipa": "/'stɑrtlɪŋ/"
},
{
"w": "obsession",
"m": "n. 困扰，无法摆脱的思想（或情感）",
"x": "Listen for \"obsession\" in this topic.",
"c": "雅思官方词汇速背: WHY·惊奇",
"ipa": "/əb'sɛʃ(ə)n/"
},
{
"w": "perplex",
"m": "v. 使迷惑，使混乱",
"x": "Listen for \"perplex\" in this topic.",
"c": "雅思官方词汇速背: WHY·惊奇",
"ipa": "/pɚ'plɛks/"
},
{
"w": "baffle",
"m": "v. 使困难，使为难",
"x": "Listen for \"baffle\" in this topic.",
"c": "雅思官方词汇速背: WHY·惊奇",
"ipa": "/'bæfl/"
},
{
"w": "contemplate",
"m": "v. 深思，细想，仔细考虑",
"x": "Listen for \"contemplate\" in this topic.",
"c": "雅思官方词汇速背: WHY·思考",
"ipa": "/'kɑntəmplet/"
},
{
"w": "introspection",
"m": "n. 反省，内省",
"x": "Listen for \"introspection\" in this topic.",
"c": "雅思官方词汇速背: WHY·思考",
"ipa": "/'ɪntrə'spɛkʃən/"
},
{
"w": "deliberate",
"m": "v. 仔细思考，深思熟虑",
"x": "Listen for \"deliberate\" in this topic.",
"c": "雅思官方词汇速背: WHY·思考",
"ipa": "/dɪ'lɪbərət/"
},
{
"w": "envision",
"m": "v. 想象，展望",
"x": "Listen for \"envision\" in this topic.",
"c": "雅思官方词汇速背: WHY·思考",
"ipa": "/ɪn'vɪʒn/"
},
{
"w": "fantasy",
"m": "n. 想象，幻想",
"x": "fantasy → fantastic adj. 荒诞的，奇异的",
"c": "雅思官方词汇速背: WHY·思考",
"ipa": "/'fæntəsi/"
},
{
"w": "forecast",
"m": "v. 预言，预报　n. 预言，预知",
"x": "Listen for \"forecast\" in this topic.",
"c": "雅思官方词汇速背: WHY·思考",
"ipa": "/'fɔrkæst/"
},
{
"w": "unexpected",
"m": "adj. 料想不到的，意外的",
"x": "Listen for \"unexpected\" in this topic.",
"c": "雅思官方词汇速背: WHY·思考",
"ipa": "/'ʌnɪk'spɛktɪd/"
},
{
"w": "imperative",
"m": "adj. 必要的　n. 必要的事",
"x": "Listen for \"imperative\" in this topic.",
"c": "雅思官方词汇速背: WHY·重要",
"ipa": "/ɪm'pɛrətɪv/"
},
{
"w": "prime",
"m": "adj. 首要的；第一流的",
"x": "Listen for \"prime\" in this topic.",
"c": "雅思官方词汇速背: WHY·重要",
"ipa": "/praɪm/"
},
{
"w": "significance",
"m": "n. 意义；重要性同 importance",
"x": "Listen for \"significance\" in this topic.",
"c": "雅思官方词汇速背: WHY·重要",
"ipa": "/sɪɡ'nɪfɪkəns/"
},
{
"w": "steady",
"m": "adj. 稳的，坚定的",
"x": "Listen for \"steady\" in this topic.",
"c": "雅思官方词汇速背: HOW·保持",
"ipa": "/'stɛdi/"
},
{
"w": "reserve",
"m": "v./n. 保持（预订）",
"x": "reserve → reservation n. 保留的座位（住处）等",
"c": "雅思官方词汇速背: HOW·保持",
"ipa": "/rɪ'zɝv/"
},
{
"w": "modify",
"m": "v. 修改；缓和",
"x": "Listen for \"modify\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/'mɑdɪfaɪ/"
},
{
"w": "transform",
"m": "v. 改变",
"x": "transform → transformable adj.可变形的 transformation n. 变化",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/træns'fɔrm/"
},
{
"w": "ascertain",
"m": "v. 弄清，确定，查明",
"x": "Listen for \"ascertain\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/'æsɚ'ten/"
},
{
"w": "detect",
"m": "v. 发现；发觉，查明",
"x": "Listen for \"detect\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/dɪ'tɛkt/"
},
{
"w": "discern",
"m": "v. 看见；辨明",
"x": "Listen for \"discern\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/dɪ'sɝn/"
},
{
"w": "fracture",
"m": "v.（使）折断，破碎",
"x": "fracture → fraction n. 小部分；分数",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/'fræktʃɚ/"
},
{
"w": "dismantle",
"m": "v. 拆开，拆卸",
"x": "dismantle → dismantlement n. 拆卸",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/dɪs'mæntl/"
},
{
"w": "elicit",
"m": "v. 引出，探出",
"x": "elicit → elicitation n. 引出，诱出",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/ɪ'lɪsɪt/"
},
{
"w": "expose",
"m": "n./v. 揭示",
"x": "Listen for \"expose\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/ɪk'spoz/"
},
{
"w": "stimulate",
"m": "v. 刺激，激励",
"x": "Listen for \"stimulate\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/'stɪmjə'let/"
},
{
"w": "propel",
"m": "v. 推进，推动",
"x": "Listen for \"propel\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/prə'pɛl/"
},
{
"w": "boost",
"m": "v. 向上推起，提升",
"x": "Listen for \"boost\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/bʊst/"
},
{
"w": "adopt",
"m": "v. 采用，采纳",
"x": "adopt → adopted adj. 被收养的 adoption n. 采用",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/ə'dɑpt/"
},
{
"w": "approve",
"m": "v. 赞成，同意",
"x": "Listen for \"approve\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/ə'prʊv/"
},
{
"w": "conform",
"m": "v. 遵守；符合",
"x": "conform → conformable adj. 适合的，一致的 conformity n. 遵照，符合",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/kən'fɔrm/"
},
{
"w": "compliment",
"m": "n. 赞美，恭维（话）",
"x": "Listen for \"compliment\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/'kɑmpləmənt/"
},
{
"w": "advocate",
"m": "v. 提倡，拥护",
"x": "Listen for \"advocate\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/'ædvəket/"
},
{
"w": "endorse",
"m": "v. 赞同，认可",
"x": "Listen for \"endorse\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/ɪn'dɔrs/"
},
{
"w": "boom",
"m": "v. 激增，猛涨；兴隆",
"x": "boom → booming adj. 急速发展的",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/bʊm/"
},
{
"w": "accelerate",
"m": "v.（使）加快，（使）增速",
"x": "Listen for \"accelerate\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/ək'sɛləret/"
},
{
"w": "facilitate",
"m": "v. 使便利；促进",
"x": "facilitate → facility n. 设备；能力",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/fə'sɪlə'tet/"
},
{
"w": "collaboration",
"m": "n. 合作，协作",
"x": "Listen for \"collaboration\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/kə,læbə'reʃən/"
},
{
"w": "patronage",
"m": "n. 支持，帮助",
"x": "Listen for \"patronage\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/'pætrənɪdʒ/"
},
{
"w": "assure",
"m": "v. 使相信；使确信",
"x": "assure → assurance n. 保证；信心",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/ə'ʃʊr/"
},
{
"w": "outdo",
"m": "v. 胜过，优于",
"x": "Listen for \"outdo\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/,aʊt'du/"
},
{
"w": "surpass",
"m": "v. 超过；优于",
"x": "Listen for \"surpass\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/sə'pæs/"
},
{
"w": "foster",
"m": "v. 培养，促进",
"x": "Listen for \"foster\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/'fɔstɚ/"
},
{
"w": "nurture",
"m": "v. 养育，培育",
"x": "Listen for \"nurture\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/'nɝtʃɚ/"
},
{
"w": "enlighten",
"m": "v. 启发，开导",
"x": "Listen for \"enlighten\" in this topic.",
"c": "雅思官方词汇速背: HOW·促进",
"ipa": "/ɪn'laɪtn/"
},
{
"w": "amass",
"m": "v. 积累，积聚",
"x": "Listen for \"amass\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/ə'mæs/"
},
{
"w": "compact",
"m": "v. 压紧　adj. 整齐填满的",
"x": "Listen for \"compact\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/'kɑmpækt/"
},
{
"w": "assemble",
"m": "v. 集合，收集",
"x": "assemble → assembly n. 集合；装配",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/ə'sɛmbl/"
},
{
"w": "compression",
"m": "n. 挤压，压缩",
"x": "Listen for \"compression\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/kəm'prɛʃən/"
},
{
"w": "abate",
"m": "v. 减少，减轻，减退",
"x": "abate → abatement n. 减少",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/ə'bet/"
},
{
"w": "deplete",
"m": "v.（大量）减少；使空虚",
"x": "Listen for \"deplete\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/dɪ'plit/"
},
{
"w": "curtail",
"m": "v. 缩短",
"x": "Listen for \"curtail\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/kɚ'tel/"
},
{
"w": "impair",
"m": "v. 削弱",
"x": "impair → impairment n. 损害，损伤",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/ɪm'pɛr/"
},
{
"w": "adverse",
"m": "adj. 不利的，敌对的",
"x": "adverse → adversity n. 逆境；厄运",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/ædˈvɚs, ˈædˌvɚs/"
},
{
"w": "opponent",
"m": "n. 对手，反对者",
"x": "Listen for \"opponent\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/ə'ponənt/"
},
{
"w": "reject",
"m": "v. 拒绝；排斥",
"x": "Listen for \"reject\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/rɪ'dʒɛkt/"
},
{
"w": "frown",
"m": "v. 皱眉",
"x": "Listen for \"frown\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/fraʊn/"
},
{
"w": "substitute",
"m": "v. 代替，替换 n. 替代",
"x": "Listen for \"substitute\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/'sʌbstɪtut/"
},
{
"w": "replenish",
"m": "v. 补充",
"x": "Listen for \"replenish\" in this topic.",
"c": "雅思官方词汇速背: HOW·改变",
"ipa": "/rɪ'plɛnɪʃ/"
},
{
"w": "reproach",
"m": "n./v. 责备",
"x": "Listen for \"reproach\" in this topic.",
"c": "雅思官方词汇速背: HOW·阻止",
"ipa": "/rɪ'protʃ/"
},
{
"w": "condemn",
"m": "v. 谴责，判刑",
"x": "condemn → condemnation n. 谴责；定罪",
"c": "雅思官方词汇速背: HOW·阻止",
"ipa": "/kən'dɛm/"
},
{
"w": "accuse",
"m": "v. 指责，谴责，控告",
"x": "accuse → accusation n. 控告；非难 accused adj. 被控告的 n. 被告",
"c": "雅思官方词汇速背: HOW·阻止",
"ipa": "/ə'kjuz/"
}
];
