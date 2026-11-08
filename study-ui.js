// Full-screen daily queue. One task, then the next. Driving mode only plays audio.
(function () {
  let TODAY = '';
  let MODE = 'desk';
  let GEN = 0;
  let armed = null;
  let clock = null;
  let clockLeft = 0;
  let playCancel = null;
  let keep = null;
  let wake = null;
  const waits = [];

  function sstItems() {
    return (typeof PTE_SST !== 'undefined' && PTE_SST && PTE_SST.items) ? PTE_SST.items : [];
  }
  function rsItems() {
    return (typeof PTE_RS !== 'undefined' && Array.isArray(PTE_RS)) ? PTE_RS : [];
  }
  function state() { return StudyPlan.ensure(S); }
  function list() {
    const st = state();
    if (TODAY) StudyPlan.lockDay(st, TODAY, sstItems());
    const full = StudyPlan.tasks(TODAY, st, sstItems(), { wfd: (typeof PTE !== 'undefined' ? PTE : []), rs: rsItems() });
    return MODE === 'drive' ? StudyPlan.driveTasks(full) : full;
  }
  function indexOf(tasks) { return StudyPlan.resumeIndex(tasks, state().done); }
  function current() {
    const tasks = list();
    const i = indexOf(tasks);
    return i >= tasks.length ? null : tasks[i];
  }
  function clearWaits() { while (waits.length) clearTimeout(waits.pop()); }
  function stopAudio() {
    clearWaits();
    if (clock) { clearInterval(clock); clock = null; }
    try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (err) {}
    const el = document.getElementById('studyPlayer');
    if (el) { try { el.pause(); } catch (err) {} }
    if (playCancel) playCancel();
  }
  function holdSession() {
    if (!keep) {
      const sr = 8000;
      const n = sr;
      const b = new ArrayBuffer(44 + n * 2);
      const v = new DataView(b);
      const ws = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
      ws(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); ws(8, 'WAVEfmt '); v.setUint32(16, 16, true);
      v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true);
      v.setUint16(32, 2, true); v.setUint16(34, 16, true); ws(36, 'data'); v.setUint32(40, n * 2, true);
      keep = new Audio(URL.createObjectURL(new Blob([b], { type: 'audio/wav' })));
      keep.loop = true;
      keep.volume = 0.01;
    }
    keep.play().catch(() => {});
    if (navigator.wakeLock && !wake) navigator.wakeLock.request('screen').then(lock => { wake = lock; }).catch(() => {});
  }
  function studyStop() {
    GEN += 1;
    armed = null;
    stopAudio();
    if (keep) { try { keep.pause(); } catch (err) {} }
    if (wake) { const lock = wake; wake = null; lock.release().catch(() => {}); }
  }
  function wait(ms, mine) {
    return new Promise(resolve => {
      const t = setTimeout(() => resolve(mine === GEN), ms);
      waits.push(t);
    });
  }
  function playSrc(src, mine) {
    return new Promise(resolve => {
      const el = document.getElementById('studyPlayer');
      if (!el || !src || mine !== GEN) return resolve(false);
      let done = false;
      const finish = ok => { if (done) return; done = true; playCancel = null; resolve(!!ok && mine === GEN); };
      playCancel = () => { try { el.pause(); } catch (err) {} finish(false); };
      el.onended = () => finish(true);
      el.onerror = () => finish(false);
      el.src = src;
      const started = el.play();
      if (started && started.catch) started.catch(() => finish(false));
    });
  }
  function speak(text, mine) {
    return new Promise(resolve => {
      if (!text || mine !== GEN) return resolve(false);
      if (!window.speechSynthesis) return wait(Math.min(8000, 600 + text.length * 40), mine).then(resolve);
      const u = new SpeechSynthesisUtterance(text);
      u.lang = (typeof voice !== 'undefined' && voice && voice.lang) ? voice.lang : 'en-AU';
      if (typeof voice !== 'undefined' && voice) u.voice = voice;
      u.rate = 0.95;
      let done = false;
      const finish = () => { if (done) return; done = true; playCancel = null; resolve(mine === GEN); };
      playCancel = finish;
      u.onend = finish;
      u.onerror = finish;
      const cap = setTimeout(finish, 5000 + text.length * 70);
      waits.push(cap);
      try { speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (err) { finish(); }
    });
  }
  async function perform(task, mine) {
    const spoken = task.kind === 'sst-new' || task.kind === 'sst-review' || task.kind === 'rl';
    if (spoken) {
      const plays = task.plays || 1;
      for (let i = 0; i < plays; i++) {
        if (mine !== GEN) return;
        const heard = task.mp3 ? await playSrc(task.mp3, mine) : false;
        if (!heard && mine === GEN) await speak(task.title || '', mine);
        if (mine !== GEN) return;
        const gap = i < plays - 1 ? (task.gapMs || 2000) : (task.oralMs || 0);
        if (gap) await wait(gap, mine);
      }
      return;
    }
    if (!task.text) return;
    const plays = task.plays || 1;
    for (let i = 0; i < plays; i++) {
      if (mine !== GEN) return;
      await speak(task.text, mine);
      if (mine !== GEN) return;
      await wait(task.gapMs || 3000, mine);
    }
  }
  function mark(task) {
    const st = state();
    st.done[task.id] = TODAY;
    if (task.kind === 'sst-new' && task.sstId && !st.learned[task.sstId]) st.learned[task.sstId] = TODAY;
    st.cursor = { date: TODAY, mode: MODE, index: indexOf(list()) };
    save();
  }
  async function runCurrent() {
    const task = current();
    if (!task || MODE !== 'drive') return;
    const mine = ++GEN;
    armed = task;
    await perform(task, mine);
    if (armed !== task || mine !== GEN) return;
    armed = null;
    stopAudio();
    mark(task);
    paint();
    if (MODE === 'drive') runCurrent();
  }
  function userNext() {
    const task = current();
    if (!task) { studyClose(); return; }
    armed = null;
    GEN += 1;
    stopAudio();
    mark(task);
    paint();
    if (MODE === 'drive') runCurrent();
  }
  function words(text) {
    const s = String(text || '').trim();
    if (!s) return 0;
    return s.split(/\s+/).filter(Boolean).length;
  }
  function countLabel(n) {
    const fit = n >= 50 && n <= 70 ? '字数合适。' : (n > 70 ? '超过 70 词了。' : '还不到 50 词。');
    return '已写 ' + n + ' 词。目标 50 到 70 词。' + fit;
  }
  function bigPx(text) {
    const n = String(text || '').length;
    if (n < 42) return 40;
    if (n < 90) return 32;
    if (n < 150) return 26;
    return 22;
  }
  function hintFor(task) {
    if (MODE === 'drive' && task.kind === 'wfd') return '听完马上跟读。接着再听一遍核对。';
    if (MODE === 'drive' && task.kind === 'rs') return '听完整句再复述。这一轮不用看屏幕。';
    if (MODE === 'drive' && task.kind === 'ra') return '听完跟着读一遍。这一轮不用看屏幕。';
    return task.hint || '';
  }
  function paint() {
    const top = document.getElementById('studyTop');
    const body = document.getElementById('studyBody');
    const actions = document.getElementById('studyActions');
    if (!top || !body || !actions) return;
    const tasks = list();
    const index = indexOf(tasks);
    const task = index >= tasks.length ? null : tasks[index];
    const total = tasks.length;
    const head = StudyPlan.heading();
    const bar = total ? Math.round(index / total * 100) : 0;
    const progress = total ? (task ? '第 ' + (index + 1) + '/' + total + ' 个' : '第 ' + total + '/' + total + ' 个') : '今天没有任务';
    top.innerHTML = '<p class="study-date">' + esc(head) + (MODE === 'drive' ? ' · 开车' : '') + '</p><p class="study-progress">' + esc(progress) + '</p><div class="bar"><i style="width:' + bar + '%"></i></div>' + (MODE === 'drive' ? '<p class="study-note">开车时不要看屏幕。只放音频，放完自动下一题。</p>' : '');
    if (!total) {
      body.innerHTML = '<p class="study-big">今天没有可练的题。</p>';
      actions.innerHTML = '<button type="button" class="btn alt" id="studyExit">退出</button>';
      return;
    }
    if (!task) {
      body.innerHTML = '<p class="study-big">今天的任务做完了</p><p>进度已经记在这台手机上。</p>';
      actions.innerHTML = '<button type="button" class="btn alt" id="studyExit">退出</button>';
      return;
    }
    const title = task.title || task.text || task.kicker;
    const notes = (task.notes || []).map(note => '<p class="study-note">' + esc(note) + '</p>').join('');
    const audio = task.mp3 && MODE !== 'drive' ? '<audio id="studyAudio" controls preload="none" src="' + esc(task.mp3) + '" style="width:100%"></audio>' : (task.mp3 && MODE === 'drive' ? '<p class="study-live">正在播放</p>' : '');
    const play = !task.mp3 && task.text && MODE !== 'drive' ? '<button type="button" class="btn alt" id="studyPlay">播放</button>' : '';
    let extra = '';
    if (MODE !== 'drive' && task.typing && task.kind === 'wfd') {
      extra = '<textarea id="studyBox" class="study-box" placeholder="把听到的句子打在这里"></textarea>';
    }
    if (task.kind === 'write' && MODE !== 'drive') {
      extra = '<p class="study-skeleton">' + esc(task.skeleton || '') + '</p><p id="studyCount" class="study-count">' + esc(countLabel(words(state().answers[task.id]))) + '</p><textarea id="studyBox" class="study-box" placeholder="用自己的话写一段"></textarea><button type="button" class="btn alt" id="studyTimer" data-sec="600">开始 10 分钟</button><p id="studyClock" class="study-clock"></p>';
    }
    if (task.kind === 'di' && MODE !== 'drive') {
      extra = '<button type="button" class="btn alt" id="studyTimer" data-sec="40">开始 40 秒</button><p id="studyClock" class="study-clock"></p>';
    }
    body.innerHTML = '<p class="study-kicker">' + esc(task.kicker || '') + '</p><p class="study-big" style="font-size:' + bigPx(title) + 'px">' + esc(title) + '</p>' + notes + '<p>' + esc(hintFor(task)) + '</p>' + audio + play + extra;
    const box = document.getElementById('studyBox');
    if (box) box.value = state().answers[task.id] || '';
    const driveLabel = MODE === 'drive' ? '回到桌前' : '开车模式';
    actions.innerHTML = '<button type="button" class="btn study-next" id="studyNext">完成，下一个</button><button type="button" class="btn alt" id="studyDrive">' + driveLabel + '</button><button type="button" class="btn alt" id="studyExit">退出</button>';
    state().cursor = { date: TODAY, mode: MODE, index: index };
    save();
  }
  function startClock(sec) {
    if (clock) clearInterval(clock);
    clockLeft = sec;
    const el = document.getElementById('studyClock');
    const show = () => { if (el) el.textContent = String(Math.floor(clockLeft / 60)).padStart(2, '0') + ':' + String(clockLeft % 60).padStart(2, '0'); };
    show();
    clock = setInterval(() => {
      clockLeft -= 1;
      if (clockLeft <= 0) { clockLeft = 0; show(); clearInterval(clock); clock = null; return; }
      show();
    }, 1000);
  }
  function studyOpen(mode) {
    if (window.pteStop) window.pteStop();
    if (typeof dvPlay === 'function') dvPlay(false);
    TODAY = StudyPlan.localDate(new Date());
    MODE = mode === 'drive' ? 'drive' : 'desk';
    const ov = document.getElementById('studyOverlay');
    if (ov) ov.hidden = false;
    document.body.style.overflow = 'hidden';
    paint();
    if (MODE === 'drive') runCurrent();
  }
  function studyClose() {
    studyStop();
    const ov = document.getElementById('studyOverlay');
    if (ov) ov.hidden = true;
    document.body.style.overflow = '';
  }
  function switchMode() {
    GEN += 1;
    armed = null;
    stopAudio();
    MODE = MODE === 'drive' ? 'desk' : 'drive';
    if (MODE === 'drive') holdSession();
    paint();
    if (MODE === 'drive') runCurrent();
  }
  document.addEventListener('click', e => {
    const id = e.target && e.target.id;
    if (id === 'studyGo') studyOpen('desk');
    else if (id === 'studyExit') studyClose();
    else if (id === 'studyNext') userNext();
    else if (id === 'studyDrive') switchMode();
    else if (id === 'studyPlay') {
      const task = current();
      if (task && task.text && typeof say === 'function') say(task.text);
    } else if (id === 'studyTimer') startClock(Number(e.target.dataset.sec) || 600);
  });
  document.addEventListener('input', e => {
    const id = e.target && e.target.id;
    if (id === 'studyBox') {
      const task = current();
      if (!task) return;
      state().answers[task.id] = e.target.value;
      save();
      const count = document.getElementById('studyCount');
      if (count) count.textContent = countLabel(words(e.target.value));
    }
  });
  window.studyOpen = studyOpen;
  window.studyClose = studyClose;
  window.studyStop = studyStop;
})();
