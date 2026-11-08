// Daily PTE queue for 9–22 Nov 2026, Sydney time. Reviews follow the day an item was finished.
(function (root) {
  const NEW = {
    '2026-11-09': [['100188', 'Negativity Bias', '消极偏见'], ['100028', 'Emotions', '情绪'], ['100177', 'The Stability of Mood', '情绪稳定'], ['100027', 'Smile of Mothers and Their Babies', '母婴的微笑互动'], ['100141', 'Motivation', '动机']],
    '2026-11-10': [['100192', 'Social Skills and Children', '社交技能与儿童'], ['100175', 'Leadership', '领导阶层'], ['100096', 'Managers', '经理'], ['100181', 'Organization Study', '组织研究'], ['100163', 'Luxury Brand', '奢侈品牌']],
    '2026-11-11': [['100060', 'Brand Value and Consumers', '品牌价值与消费者'], ['100190', 'Credit Cards', '信用卡'], ['100179', 'Stock Market and Big Companies', '股市与大公司'], ['100121', 'The Definition of Great Idea', '伟大想法的定义'], ['100055', 'Definition of Words', '单词在字典中的定义']],
    '2026-11-12': [['100117', 'English', '英语'], ['100196', 'Poetry and Literature', '诗歌与文学'], ['100167', 'Books: The Republic', '柏拉图的书：理想国'], ['100089', 'The Impacts of Hooks in Persuasive Essay', '勾人的部分与论文'], ['100172', 'Paper Rejection', '被拒绝的论文']],
    '2026-11-13': [['100189', 'Internet Changed Journalism', '网络改变了新闻业'], ['100094', 'Shrinking Newspaper Industry', '衰弱的新闻报纸业'], ['100113', 'Research on Social Science', '社会科学调查'], ['100111', 'The Online Research', '线上调查'], ['100169', 'The History of Software', '软件的历史']],
    '2026-11-16': [['100090', 'Automated Vehicles', '自动化汽车'], ['100198', 'The Development of Machines', '机械的发展'], ['100115', 'Biological Engineering', '生物工程'], ['100059', 'The Big Bang Theory', '宇宙大爆炸'], ['100038', 'Einstein', '爱因斯坦']],
    '2026-11-17': [['100035', 'Vitamin D', '维他命 D'], ['100071', 'Misuse of Drugs', '误食药品'], ['100123', 'Canned Food', '罐装食物'], ['100052', 'Decline of Bees', '蜜蜂数量消亡'], ['100197', 'Worker Bees', '工蜂']],
    '2026-11-18': [['100194', "Bees' Communication", '蜜蜂的交流'], ['100019', 'Global Warming', '全球变暖'], ['100125', 'Recycling Water', '循环用水'], ['100116', 'Food Crisis', '食物危机'], ['100058', 'Fishing Industry in Africa', '非洲渔业']],
    '2026-11-19': [['100088', 'Chimpanzees and non-human rights', '大猩猩与非人权'], ['100200', 'Neolithic Stones', '石器时代的石头'], ['100110', 'The City of Rome', '罗马城'], ['100114', 'Natural Selection of Buildings', '建筑的物竞天择'], ['100091', 'The Design of Hospitals', '医院的设计']],
    '2026-11-20': [['100139', 'The Industrial Revolution', '工业革命'], ['100066', 'Industrialization', '工业化'], ['100170', 'Globalization and Detraditionalization', '全球化与去全球化'], ['100166', "World's Globalization", '世界的全球化'], ['100107', 'Australian Culture Diversity', '澳洲多元文化']]
  };
  const KIND = {
    '2026-11-09': 'drive', '2026-11-10': 'drive', '2026-11-11': 'drive', '2026-11-12': 'drive', '2026-11-13': 'drive',
    '2026-11-14': 'mock', '2026-11-15': 'home',
    '2026-11-16': 'drive', '2026-11-17': 'drive', '2026-11-18': 'drive', '2026-11-19': 'drive', '2026-11-20': 'drive',
    '2026-11-21': 'eve', '2026-11-22': 'exam'
  };
  const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const GAPS = [1, 3, 7];

  function pad(n) { return String(n).padStart(2, '0'); }
  function parts(iso) { return String(iso || '').split('-').map(Number); }
  function isDate(iso) {
    const p = parts(iso);
    if (p.length !== 3 || p.some(n => !n && n !== 0)) return false;
    return iso === p[0] + '-' + pad(p[1]) + '-' + pad(p[2]);
  }
  function dayDiff(from, to) {
    if (!isDate(from) || !isDate(to)) return null;
    const a = parts(from);
    const b = parts(to);
    return Math.round((Date.UTC(b[0], b[1] - 1, b[2]) - Date.UTC(a[0], a[1] - 1, a[2])) / 86400000);
  }
  function sydneyDate(now) {
    const d = now instanceof Date ? now : new Date(now);
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Sydney', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
  }
  function heading(iso) {
    if (!isDate(iso)) return '';
    const p = parts(iso);
    const day = new Date(Date.UTC(p[0], p[1] - 1, p[2])).getUTCDay();
    return p[1] + '月' + p[2] + '日 · ' + WEEK[day];
  }
  function rows() {
    const out = [];
    Object.keys(NEW).sort().forEach(day => NEW[day].forEach(row => out.push({ day: day, id: row[0], en: row[1], zh: row[2] })));
    return out;
  }
  function planned() {
    const map = {};
    rows().forEach(row => { map[row.id] = row; });
    return map;
  }
  function findItem(items, id) {
    if (!items || !items.length) return null;
    for (let i = 0; i < items.length; i++) if (items[i] && items[i].id === id) return items[i];
    return null;
  }
  function notesFor(id, item) {
    const notes = [];
    const model = id === '100141' || id === '100121' || id === '100111' || (item && (item.group === 'model' || item.audio_content_type === 'model_answer'));
    if (model) notes.push('这段音频是范文朗读，不是讲座。用来学写法，不要背句子。');
    if (id === '100198' || (item && item.title_content_mismatch)) notes.push(item && item.content_note ? item.content_note : '这篇讲的是蜜蜂，和标题 The Development of Machines 对不上。');
    if (id === '100058' || id === '100198' || (item && item.is_recalled_version)) notes.push(item && item.recall_note ? item.recall_note : '这是回忆版本。');
    return notes.filter((note, i) => notes.indexOf(note) === i);
  }
  function learnedMap(state) {
    const src = state && state.learned;
    const out = {};
    if (!src || typeof src !== 'object' || Array.isArray(src)) return out;
    Object.keys(src).forEach(id => { if (isDate(src[id])) out[id] = src[id]; });
    return out;
  }
  function reviewsFor(date, learned) {
    const plan = planned();
    const out = [];
    const seen = {};
    Object.keys(learned).forEach(id => {
      const gap = dayDiff(learned[id], date);
      if (GAPS.indexOf(gap) === -1 || !plan[id]) return;
      seen[id] = 1;
      out.push({ id: id, gap: gap, source: 'done', row: plan[id] });
    });
    Object.keys(plan).forEach(id => {
      if (learned[id]) return;
      const gap = dayDiff(plan[id].day, date);
      if (GAPS.indexOf(gap) === -1) return;
      if (seen[id]) return;
      out.push({ id: id, gap: gap, source: 'plan', row: plan[id] });
    });
    out.sort((a, b) => a.gap - b.gap || a.row.day.localeCompare(b.row.day) || a.id.localeCompare(b.id));
    return out;
  }
  function take(list, date, size, slot) {
    if (!list || !list.length || size < 1) return [];
    const shift = Math.max(0, dayDiff('2026-11-09', date) || 0);
    const start = (shift * size + slot * 17) % list.length;
    const out = [];
    for (let i = 0; i < size; i++) out.push(list[(start + i) % list.length]);
    return out;
  }
  function sstBase(date, row, item, kind, extra) {
    return {
      id: date + ':' + kind + ':' + row.id + (extra.gap ? ':d' + extra.gap : ''),
      kind: kind,
      drive: true,
      typing: false,
      sstId: row.id,
      en: row.en,
      zh: row.zh,
      mp3: item && item.mp3 ? item.mp3 : '',
      plays: extra.plays,
      gapMs: 2000,
      oralMs: extra.oralMs,
      gap: extra.gap || 0,
      reviewSource: extra.source || '',
      kicker: extra.kicker,
      hint: extra.hint,
      notes: notesFor(row.id, item)
    };
  }
  function speakTask(date, kind, item, extra) {
    return {
      id: date + ':' + kind + ':' + (item.id || item.sourceNumber || extra.n),
      kind: kind,
      drive: true,
      typing: !!extra.typing,
      text: item.text,
      kicker: extra.kicker,
      hint: extra.hint,
      plays: extra.plays,
      gapMs: extra.gapMs,
      notes: []
    };
  }
  function tasks(date, state, items, pools) {
    if (!KIND[date]) return [];
    const kind = KIND[date];
    const learned = learnedMap(state);
    const fresh = (NEW[date] || []).map(row => ({ day: date, id: row[0], en: row[1], zh: row[2] }));
    const reviews = kind === 'exam' ? [] : reviewsFor(date, learned);
    const used = {};
    fresh.forEach(row => { used[row.id] = 1; });
    reviews.forEach(row => { used[row.id] = 1; });
    const out = [];
    if (kind !== 'exam') {
      fresh.forEach(row => out.push(sstBase(date, row, findItem(items, row.id), 'sst-new', {
        plays: 3, oralMs: 30000, kicker: '新学', hint: '听 3 遍。听完用自己的话说大约 30 秒，不要背原文。'
      })));
      reviews.forEach(row => out.push(sstBase(date, row.row, findItem(items, row.id), 'sst-review', {
        plays: row.gap === 1 ? 2 : 1,
        oralMs: 20000,
        gap: row.gap,
        source: row.source,
        kicker: '第 ' + row.gap + ' 天复习',
        hint: '听 ' + (row.gap === 1 ? 2 : 1) + ' 遍。听完口头总结一次。'
      })));
    }
    const wfdN = kind === 'exam' ? 10 : (kind === 'mock' ? 0 : 20);
    const rsN = kind === 'drive' || kind === 'home' ? 10 : 0;
    const raN = kind === 'drive' || kind === 'home' ? 6 : 0;
    const writeN = kind === 'home' ? 3 : (kind === 'drive' || kind === 'eve' ? 2 : 0);
    const diN = kind === 'drive' || kind === 'home' ? 3 : 0;
    take((pools && pools.wfd) || [], date, wfdN, 0).forEach(item => out.push(speakTask(date, 'wfd', item, {
      typing: kind !== 'exam',
      kicker: kind === 'exam' ? '考前热身' : '听写',
      hint: kind === 'exam' ? '听完跟着读一遍。今天不要做新题。' : '先听，再把句子打出来。',
      plays: kind === 'exam' ? 1 : 2,
      gapMs: 3000
    })));
    const rsTaken = {};
    take((pools && pools.rs) || [], date, rsN, 1).forEach(item => {
      rsTaken[item.id] = 1;
      out.push(speakTask(date, 'rs', item, {
        typing: false, kicker: '跟读', hint: '听完整句，再复述。手机朗读，还没有原声音频。', plays: 1, gapMs: 3000
      }));
    });
    if (kind === 'drive') {
      const rest = rows().filter(row => !used[row.id]);
      if (rest.length) {
        const shift = Math.max(0, dayDiff('2026-11-09', date) || 0);
        const row = rest[(shift * 3) % rest.length];
        out.push(sstBase(date, row, findItem(items, row.id), 'rl', {
          plays: 1, oralMs: 40000, kicker: '口头复述', hint: '听完用大约 40 秒说出：主题、两个要点、结论。'
        }));
      }
    }
    const raPool = ((pools && pools.rs) || []).filter(item => !rsTaken[item.id]);
    take(raPool, date, raN, 2).forEach(item => out.push(speakTask(date, 'ra', item, {
      typing: false, kicker: '朗读', hint: '看着字读出声。读完可以再听一遍。', plays: 1, gapMs: 5000
    })));
    const writeRows = fresh.length ? fresh : reviews.map(row => row.row);
    writeRows.slice(0, writeN).forEach(row => {
      const item = findItem(items, row.id);
      out.push({
        id: date + ':write:' + row.id,
        kind: 'write',
        drive: false,
        typing: true,
        sstId: row.id,
        en: row.en,
        zh: row.zh,
        kicker: '写下总结',
        hint: '用自己的话写一段，50 到 70 词，限时 10 分钟。连接词只是骨架，空的地方换成这篇的内容。',
        skeleton: 'The lecture mainly discusses … It points out that … In addition, … Finally, it concludes that …',
        notes: notesFor(row.id, item)
      });
    });
    for (let i = 1; i <= diN; i++) {
      out.push({
        id: date + ':di:' + i,
        kind: 'di',
        drive: false,
        typing: true,
        kicker: '描述 ' + i + '/3',
        hint: '用自己的话，40 秒内说出四件事：主题、最高或最低、趋势、结论。不要套整段模板。这里没有图表，只练这四步。',
        seconds: 40,
        notes: []
      });
    }
    if (kind === 'mock') {
      out.push({ id: date + ':mock', kind: 'mock', drive: false, typing: true, kicker: '模考', hint: '做一套完整模考，大约 2 小时。用官方 PTE 模考或练习册里的整套题。目标分：听力 69，阅读 70，写作 85，口语 88。做完再听今天的复习篇。', notes: [] });
      out.push({ id: date + ':weak', kind: 'weak', drive: false, typing: true, kicker: '最弱的两项', hint: '对照模考，写下最弱的两项。后面几天先练这两项。', notes: [] });
    }
    if (kind === 'eve') {
      out.push({ id: date + ':sleep', kind: 'sleep', drive: false, typing: false, kicker: '今晚夜班', hint: '今晚 23:00 上夜班。17:30 到 22:00 尽量睡觉，取消这段学习。考试日睡眠不够是最大的风险。', notes: [] });
    }
    if (kind === 'exam') {
      out.push({
        id: date + ':skeleton',
        kind: 'skeleton',
        drive: true,
        typing: false,
        text: 'The lecture mainly discusses … It points out that … In addition, … Finally, it concludes that …',
        kicker: '骨架',
        hint: '只默念这四句连接词。空的地方换成讲座里的内容，不要背整句。',
        plays: 1,
        gapMs: 4000,
        notes: []
      });
      out.push({ id: date + ':check', kind: 'check', drive: false, typing: false, kicker: '出发', hint: '带上和报名一致的有效护照，还有预约确认。14:30 左右到 Box Hill，不要晚于 15:00。太困就不要自己开车。', notes: [] });
    }
    return out;
  }
  function driveTasks(list) {
    return (list || []).filter(task => task && task.drive);
  }
  function resumeIndex(list, done) {
    const bag = done || {};
    for (let i = 0; i < (list || []).length; i++) if (!bag[list[i].id]) return i;
    return (list || []).length;
  }
  function ensure(S) {
    if (!S.study || typeof S.study !== 'object' || Array.isArray(S.study)) S.study = {};
    const st = S.study;
    if (!st.learned || typeof st.learned !== 'object' || Array.isArray(st.learned)) st.learned = {};
    if (!st.done || typeof st.done !== 'object' || Array.isArray(st.done)) st.done = {};
    if (!st.answers || typeof st.answers !== 'object' || Array.isArray(st.answers)) st.answers = {};
    if (!st.weak || typeof st.weak !== 'object' || Array.isArray(st.weak)) st.weak = {};
    if (!st.cursor || typeof st.cursor !== 'object' || Array.isArray(st.cursor)) st.cursor = {};
    Object.keys(st.learned).forEach(id => { if (!isDate(st.learned[id])) delete st.learned[id]; });
    return st;
  }

  root.StudyPlan = {
    NEW: NEW,
    KIND: KIND,
    sydneyDate: sydneyDate,
    heading: heading,
    dayDiff: dayDiff,
    rows: rows,
    tasks: tasks,
    driveTasks: driveTasks,
    resumeIndex: resumeIndex,
    ensure: ensure,
    notesFor: notesFor
  };
})(this);
