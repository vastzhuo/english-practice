// {w, m: meaning, x: example, x2/n: extra, c: category}
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
}
];
