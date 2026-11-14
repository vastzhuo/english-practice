// Daily queue from the learner's own progress.
(function (root) {
  const NEW_PER_DAY = 5;
  const WFD_PER_DAY = 20;
  const RS_PER_DAY = 10;
  const RA_PER_DAY = 6;
  const WRITE_PER_DAY = 2;
  const DI_PER_DAY = 3;
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
  function localDate(now) {
    const d = now instanceof Date ? now : new Date(now);
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function heading() { return '今天'; }
  function ordered(items) {
    return (items || []).filter(item => item && item.id).slice().sort((a, b) => String(a.id).localeCompare(String(b.id)));
  }
  function learnedMap(state) {
    const src = state && state.learned;
    const out = {};
    if (!src || typeof src !== 'object' || Array.isArray(src)) return out;
    Object.keys(src).forEach(id => { if (isDate(src[id])) out[id] = src[id]; });
    return out;
  }
  function notesFor(item) {
    if (!item) return [];
    const notes = [];
    if (item.group === 'model' || item.audio_content_type === 'model_answer') notes.push('这段音频是范文朗读，不是讲座。');
    if (item.content_note) notes.push(item.content_note);
    else if (item.title_content_mismatch) notes.push('这篇内容和标题不一致。');
    if (item.recall_note) notes.push(item.recall_note);
    else if (item.is_recalled_version) notes.push('这是回忆版本。');
    return notes.filter((note, i) => notes.indexOf(note) === i);
  }
  function lockedIds(state, date) {
    const day = state && state.day;
    if (!day || day.date !== date || !Array.isArray(day.newIds)) return null;
    return day.newIds;
  }
  function lockDay(state, date, items) {
    if (!state || typeof state !== 'object') return [];
    if (state.day && state.day.date === date && Array.isArray(state.day.newIds)) return state.day.newIds;
    const learned = learnedMap(state);
    const ids = ordered(items).filter(item => !learned[item.id]).slice(0, NEW_PER_DAY).map(item => item.id);
    state.day = { date: date, newIds: ids };
    return ids;
  }
  function reviewsFor(date, learned, catalog) {
    const out = [];
    Object.keys(learned).forEach(id => {
      if (!catalog[id]) return;
      const gap = dayDiff(learned[id], date);
      if (GAPS.indexOf(gap) === -1) return;
      out.push({ id: id, gap: gap, item: catalog[id] });
    });
    out.sort((a, b) => a.gap - b.gap || String(a.id).localeCompare(String(b.id)));
    return out;
  }
  function mix(date, slot) {
    let h = 2166136261;
    const s = String(date) + '#' + slot;
    for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    return h >>> 0;
  }
  function take(list, date, size, slot) {
    if (!list || !list.length || size < 1) return [];
    const start = mix(date, slot) % list.length;
    const out = [];
    for (let i = 0; i < size; i++) out.push(list[(start + i) % list.length]);
    return out;
  }
  function sstTask(date, item, kind, extra) {
    return {
      id: date + ':' + kind + ':' + item.id + (extra.gap ? ':d' + extra.gap : ''),
      kind: kind,
      drive: true,
      typing: false,
      sstId: item.id,
      title: item.title || item.id,
      mp3: item.mp3 || '',
      plays: extra.plays,
      gapMs: extra.gapMs || 2000,
      oralMs: extra.oralMs || 0,
      gap: extra.gap || 0,
      kicker: extra.kicker,
      hint: extra.hint,
      notes: notesFor(item)
    };
  }
  function speakTask(date, kind, item, extra) {
    return {
      id: date + ':' + kind + ':' + (item.id || extra.n),
      kind: kind,
      drive: true,
      typing: !!extra.typing,
      text: item.text,
      title: item.text,
      kicker: extra.kicker,
      hint: extra.hint,
      plays: extra.plays,
      gapMs: extra.gapMs,
      notes: []
    };
  }
  function tasks(date, state, items, pools) {
    if (!isDate(date)) return [];
    const learned = learnedMap(state);
    const catalog = {};
    ordered(items).forEach(item => { catalog[item.id] = item; });
    const locked = lockedIds(state, date);
    const fresh = locked ? locked.map(id => catalog[id]).filter(Boolean) : ordered(items).filter(item => !learned[item.id]).slice(0, NEW_PER_DAY);
    const used = {};
    fresh.forEach(item => { used[item.id] = 1; });
    const reviews = reviewsFor(date, learned, catalog).filter(row => !used[row.id]);
    reviews.forEach(row => { used[row.id] = 1; });
    const out = [];
    fresh.forEach(item => out.push(sstTask(date, item, 'sst-new', {
      plays: 3, oralMs: 30000, kicker: '新学', hint: '听 3 遍。听完用自己的话说大约 30 秒，不要背原文。'
    })));
    reviews.forEach(row => out.push(sstTask(date, row.item, 'sst-review', {
      plays: row.gap === 1 ? 2 : 1,
      oralMs: 20000,
      gap: row.gap,
      kicker: '第 ' + row.gap + ' 天复习',
      hint: '听 ' + (row.gap === 1 ? 2 : 1) + ' 遍。听完口头总结一次。'
    })));
    take((pools && pools.wfd) || [], date, WFD_PER_DAY, 0).forEach(item => out.push(speakTask(date, 'wfd', item, {
      typing: true, kicker: '听写', hint: '先听，再把句子打出来。', plays: 2, gapMs: 3000
    })));
    const rsTaken = {};
    take((pools && pools.rs) || [], date, RS_PER_DAY, 1).forEach(item => {
      rsTaken[item.id] = 1;
      out.push(speakTask(date, 'rs', item, {
        typing: false, kicker: '跟读', hint: '听完整句，再复述。手机朗读，还没有原声音频。', plays: 1, gapMs: 3000
      }));
    });
    const rest = ordered(items).filter(item => !used[item.id]);
    if (rest.length) {
      const row = rest[mix(date, 3) % rest.length];
      out.push(sstTask(date, row, 'rl', {
        plays: 1, oralMs: 40000, kicker: '口头复述', hint: '听完用大约 40 秒说出：主题、两个要点、结论。'
      }));
    }
    const raPool = ((pools && pools.rs) || []).filter(item => !rsTaken[item.id]);
    take(raPool, date, RA_PER_DAY, 2).forEach(item => out.push(speakTask(date, 'ra', item, {
      typing: false, kicker: '朗读', hint: '看着字读出声。读完可以再听一遍。', plays: 1, gapMs: 5000
    })));
    const writeRows = fresh.slice();
    reviews.forEach(row => { if (writeRows.length < WRITE_PER_DAY) writeRows.push(row.item); });
    ordered(items).forEach(item => {
      if (writeRows.length >= WRITE_PER_DAY) return;
      if (!writeRows.some(row => row.id === item.id)) writeRows.push(item);
    });
    writeRows.slice(0, WRITE_PER_DAY).forEach(item => out.push({
      id: date + ':write:' + item.id,
      kind: 'write',
      drive: false,
      typing: true,
      sstId: item.id,
      title: item.title || item.id,
      kicker: '写下总结',
      hint: '用自己的话写一段，50 到 70 词，限时 10 分钟。连接词只是骨架，空的地方换成这篇的内容。',
      skeleton: 'The lecture mainly discusses … It points out that … In addition, … Finally, it concludes that …',
      notes: notesFor(item)
    }));
    for (let i = 1; i <= DI_PER_DAY; i++) {
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
    if (!st.cursor || typeof st.cursor !== 'object' || Array.isArray(st.cursor)) st.cursor = {};
    if (!st.day || typeof st.day !== 'object' || Array.isArray(st.day) || typeof st.day.date !== 'string' || !Array.isArray(st.day.newIds)) st.day = { date: '', newIds: [] };
    Object.keys(st.learned).forEach(id => { if (!isDate(st.learned[id])) delete st.learned[id]; });
    return st;
  }

  // --- Mistake book ---------------------------------------------------------
  // One flat top-level field on the `ep` state: S.miss = { 'source:id': row }.
  // A row is { n: wrong count, last: last wrong date, due: review date,
  // ok: consecutive good answers since the last wrong one }. A missing S.miss
  // on an old save is normal and never touches the rest of the progress.
  const MISS_SOURCES = ['quiz', 'wfd', 'rs', 'ra', 'swt', 'spell', 'sgd'];
  const MISS_LABEL = { quiz: 'Quiz', wfd: 'WFD', rs: 'RS', ra: 'RA', swt: 'SWT', spell: '拼写', sgd: 'SGD' };
  const MISS_GAPS = [1, 3, 7];

  function addDays(iso, days) {
    if (!isDate(iso)) return iso;
    const p = parts(iso);
    // Local calendar arithmetic: never Date.UTC, so no timezone day shift.
    return localDate(new Date(p[0], p[1] - 1, p[2] + (Math.round(Number(days)) || 0)));
  }
  function missKey(source, id) {
    const s = String(source == null ? '' : source).trim().toLowerCase();
    const v = String(id == null ? '' : id).trim();
    if (!s || !v) return '';
    return s + ':' + v;
  }
  function missSourceOf(key) {
    const at = String(key == null ? '' : key).indexOf(':');
    return at > 0 ? String(key).slice(0, at) : '';
  }
  function missIdOf(key) {
    const at = String(key == null ? '' : key).indexOf(':');
    return at > 0 ? String(key).slice(at + 1) : String(key == null ? '' : key);
  }
  // 1st wrong -> tomorrow, 2nd -> in 3 days, 3rd and later -> in 7 days.
  function missGap(n) {
    const k = Math.round(Number(n) || 0);
    if (k <= 1) return MISS_GAPS[0];
    if (k === 2) return MISS_GAPS[1];
    return MISS_GAPS[2];
  }
  function missDue(n, from) {
    const day = isDate(from) ? from : localDate(new Date());
    return addDays(day, missGap(n));
  }
  function missEnsure(S) {
    if (!S || typeof S !== 'object' || Array.isArray(S)) return {};
    if (!S.miss || typeof S.miss !== 'object' || Array.isArray(S.miss)) S.miss = {};
    const bag = S.miss;
    Object.keys(bag).forEach(key => {
      const row = bag[key];
      if (!row || typeof row !== 'object' || Array.isArray(row)) { delete bag[key]; return; }
      const n = Math.round(Number(row.n));
      if (!(n > 0) || !isDate(row.last) || !isDate(row.due)) { delete bag[key]; return; }
      const ok = Math.round(Number(row.ok));
      bag[key] = { n: n, last: row.last, due: row.due, ok: ok > 0 ? ok : 0 };
    });
    return bag;
  }
  function missRecord(S, key, date) {
    const k = String(key == null ? '' : key);
    if (!k) return null;
    const bag = missEnsure(S);
    const old = bag[k];
    const day = isDate(date) ? date : localDate(new Date());
    const n = old && old.n > 0 ? old.n + 1 : 1;
    const row = { n: n, last: day, due: missDue(n, day), ok: 0 };
    bag[k] = row;
    return { key: k, n: row.n, last: row.last, due: row.due, ok: 0 };
  }
  // A good answer on an item that is in the book. Two in a row removes it.
  function missOk(S, key) {
    const k = String(key == null ? '' : key);
    const bag = missEnsure(S);
    const row = bag[k];
    if (!row) return '';
    row.ok = (row.ok || 0) + 1;
    if (row.ok >= 2) {
      delete bag[k];
      return 'resolved';
    }
    return 'kept';
  }
  function missResolve(S, key) {
    const k = String(key == null ? '' : key);
    const bag = missEnsure(S);
    if (!bag[k]) return false;
    delete bag[k];
    return true;
  }
  function missRows(S) {
    const bag = missEnsure(S);
    return Object.keys(bag).map(key => {
      const row = bag[key];
      return {
        key: key,
        source: missSourceOf(key),
        id: missIdOf(key),
        n: row.n,
        last: row.last,
        due: row.due,
        ok: row.ok || 0
      };
    });
  }
  function missOrder(a, b) {
    if (a.due !== b.due) return a.due < b.due ? -1 : 1;
    return String(a.key).localeCompare(String(b.key));
  }
  // Due today or earlier, oldest due first.
  function missingToday(S, date) {
    const day = isDate(date) ? date : localDate(new Date());
    return missRows(S).filter(row => row.due <= day).sort(missOrder);
  }
  function missOverview(S, date) {
    const rows = missRows(S).sort(missOrder);
    const dueRows = missingToday(S, date);
    const groups = {};
    MISS_SOURCES.forEach(source => { groups[source] = 0; });
    rows.forEach(row => { if (groups[row.source] != null) groups[row.source] += 1; });
    return { total: rows.length, due: dueRows.length, groups: groups, rows: rows, dueRows: dueRows };
  }

  root.StudyPlan = {
    NEW_PER_DAY: NEW_PER_DAY,
    MISS_SOURCES: MISS_SOURCES,
    MISS_LABEL: MISS_LABEL,
    addDays: addDays,
    missKey: missKey,
    missGap: missGap,
    missDue: missDue,
    missEnsure: missEnsure,
    missRecord: missRecord,
    missOk: missOk,
    missResolve: missResolve,
    missRows: missRows,
    missingToday: missingToday,
    missOverview: missOverview,
    localDate: localDate,
    heading: heading,
    dayDiff: dayDiff,
    lockDay: lockDay,
    tasks: tasks,
    driveTasks: driveTasks,
    resumeIndex: resumeIndex,
    ensure: ensure,
    notesFor: notesFor
  };
})(this);
