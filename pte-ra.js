// PTE Read Aloud passages. Every passage is real source text, never invented.
// `pte-read.js` articles currently carry no body (`text: null`), so the static bank below
// takes its passages from the SST lecture transcripts that this repo already ships.
// If a reading article ever gains a real body, fromRead() turns it into a passage first,
// so the RA bank prefers reading material automatically; nothing here has to change.
const PTE_RA = {
  note: '朗读段落全部来自仓库里的现有原文：优先取阅读原文，阅读原文为空时取 SST 讲座转写。没有编造的范文。',
  sourceKind: 'SST 讲座转写（公开练习音频）',
  minWords: 45,
  maxWords: 75,
  passages: [
    {
      id: 'ra-100188',
      sourceId: '100188',
      sourceKind: 'SST 讲座转写',
      title: 'Negativity Bias 消极偏见',
      note: '取自 SST 讲座原文 100188（公开练习音频转写，未逐字校对）',
      text: 'Negativity bias refers to the psychological phenomenon where humans tend to focus more on negative emotions or experiences than positive ones. Although we experience positive emotions like contentment and pleasure more frequently, these feelings tend to be lighter in intensity and are less likely to be remembered or linger in our minds.',
      words: 52
    },
    {
      id: 'ra-100196',
      sourceId: '100196',
      sourceKind: 'SST 讲座转写',
      title: 'Poetry and Literature 诗歌与文学',
      note: '取自 SST 讲座原文 100196（公开练习音频转写，未逐字校对）',
      text: 'My lectures are going to presume no special knowledge on your part. I see this as a course that’s an introduction to the literature of a period, to modern poetry. We’ll be studying several poets in some detail. The presumption is that they all reward and demand a certain amount of close reading.',
      words: 53
    },
    {
      id: 'ra-100192',
      sourceId: '100192',
      sourceKind: 'SST 讲座转写',
      title: 'Social Skills and Children 社交技能与儿童',
      note: '取自 SST 讲座原文 100192（公开练习音频转写，未逐字校对）',
      text: 'Social skills are vital in enabling an individual to have and maintain positive interactions with others. Many of these skills are crucial in making and sustaining friendships. Social interactions do not always run smoothly, and an individual needs to be able to implement appropriate strategies, such as conflict resolution when difficulties in interactions arise.',
      words: 54
    },
    {
      id: 'ra-100194',
      sourceId: '100194',
      sourceKind: 'SST 讲座转写',
      title: "Bees' Communication 蜜蜂的交流",
      note: '取自 SST 讲座原文 100194（公开练习音频转写，未逐字校对）',
      text: 'Honeybees do a waggle dance to direct other bees to sources of nectar, but dancing bees like this one can be halted by a headbutt from another bee. Now, researchers have found that this headbutt is actually a warning signal. A feeding station was set up in the lab to mimic a source of nectar.',
      words: 55
    },
    {
      id: 'ra-100200',
      sourceId: '100200',
      sourceKind: 'SST 讲座转写',
      title: 'Neolithic Stones 石器时代的石头',
      note: '取自 SST 讲座原文 100200（公开练习音频转写，未逐字校对）',
      text: 'I suppose you wouldn’t expect perhaps to find a mathematician in a museum of historical objects, but actually, the objects that I’ve been drawn to in this museum have quite a lot of mathematical significance. These Neolithic stones, discovered in Scotland, dating back 5,000 years, are probably the first examples of humans exploring the concept of symmetry.',
      words: 57
    },
    {
      id: 'ra-100175',
      sourceId: '100175',
      sourceKind: 'SST 讲座转写',
      title: 'Leadership 领导阶层',
      note: '取自 SST 讲座原文 100175（公开练习音频转写，未逐字校对）',
      text: "My name is Bob Joss, I'm the dean of the Business School at Stanford University. On behalf of everyone from Stanford, we welcome you to this conference on education leadership. This is something relatively unheard of in higher education. I think, it’s where the business school gets together with the education school and talks about education leadership.",
      words: 57
    },
    {
      id: 'ra-100094',
      sourceId: '100094',
      sourceKind: 'SST 讲座转写',
      title: 'Shrinking Newspaper Industry 衰弱的新闻报纸业',
      note: '取自 SST 讲座原文 100094（公开练习音频转写，未逐字校对）',
      text: 'Because of the economic model, the newspaper industry has been shrinking dramatically from the last 50 years of the 20th century in some states of America. Also as the economic model changed, newspapers increased the cash flow. However, there are still some newspaper industries losing money because of a decrease in advertising and buyers. They can’t find buyers.',
      words: 58
    },
    {
      id: 'ra-100088',
      sourceId: '100088',
      sourceKind: 'SST 讲座转写',
      title: 'Chimpanzees and non-human rights 大猩猩与非人权',
      note: '取自 SST 讲座原文 100088（公开练习音频转写，未逐字校对）',
      text: 'We are from an organization called Nonhuman Rights Project, and we fight for legal rights of non-human animals. Drawing a line in order to enslave an autonomous and self-determining being is a violation of equality. We then searched through 80 jurisdictions. We chose the state of New York. Then we decided upon who our plaintiffs are going to be.',
      words: 59
    },
    {
      id: 'ra-100071',
      sourceId: '100071',
      sourceKind: 'SST 讲座转写',
      title: 'Misuse of Drugs 误食药品',
      note: '取自 SST 讲座原文 100071（公开练习音频转写，未逐字校对）',
      text: 'There are a number of dangers. Parents should know that leftover drugs are dangerous because they may be accidentally ingested by children. Either adults don’t keep the bottles properly closed and stored or because even many kids can sometimes open childproof lids. Patients may use the drugs after their expiration date. The leftover drugs may be taken for the wrong reasons.',
      words: 61
    },
    {
      id: 'ra-100177',
      sourceId: '100177',
      sourceKind: 'SST 讲座转写',
      title: 'The Stability of Mood 情绪稳定',
      note: '取自 SST 讲座原文 100177（公开练习音频转写，未逐字校对）',
      text: 'The stability of emotion differs among different persons. Think about the people around you. Some people usually have nervous moods like a roller coaster, an intense experience, while others have a small varying range, relaxed and peaceful. We might say that one person often feels tense, with strong fluctuation of emotions, while another remains generally calm and maintains a stable mood.',
      words: 61
    },
    {
      id: 'ra-100107',
      sourceId: '100107',
      sourceKind: 'SST 讲座转写',
      title: 'Australian Culture Diversity 澳洲多元文化',
      note: '取自 SST 讲座原文 100107（公开练习音频转写，未逐字校对）',
      text: 'Multiculturalism is an important aspect of our society, as it encourages us to embrace and appreciate the diverse cultures that make up our world. This concept promotes the idea that we should not only tolerate, but also celebrate and learn from the differences in our society. Rather than expecting everyone to conform to one dominant culture, multiculturalism encourages respect for individual traditions and beliefs.',
      words: 64
    },
    {
      id: 'ra-100197',
      sourceId: '100197',
      sourceKind: 'SST 讲座转写',
      title: 'Worker Bees 工蜂',
      note: '取自 SST 讲座原文 100197（公开练习音频转写，未逐字校对）',
      text: 'At the heart of a thriving honeybee hive, the queen reigns as the vital source of life. Devoted to her duties, the queen tirelessly lays up to 2500 eggs per day, amounting to an incredible two million throughout her lifespan. Comprising the majority of the colony, the hardworking worker bees are all female. Within a typical hive of approximately 30,000 bees, merely 100 of them are males known as drones.',
      words: 70
    }
  ]
};

// Reading articles with a real body come first. A body is copied only when the repo has it;
// an empty body is skipped instead of being filled with an invented passage.
PTE_RA.fromRead = function (articles) {
  const out = [];
  (Array.isArray(articles) ? articles : []).forEach(article => {
    const text = article && typeof article.text === 'string' ? article.text.trim() : '';
    if (!text) return;
    const span = PTELogic.readSpan(text, 60);
    if (!span.text) return;
    out.push({
      id: 'ra-read-' + article.id,
      sourceId: article.id,
      sourceKind: '阅读原文',
      title: article.title || article.id,
      note: '取自阅读原文',
      text: span.text,
      words: span.words
    });
  });
  return out;
};
