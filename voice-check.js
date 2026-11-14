// Shared text-to-speech detection for the PTE tab, Shadow and Drive.
//
// The bug this prevents: speechSynthesis is present but has no usable English
// voice (common on Windows/Android when no language pack is installed), and the
// old code silently returned so "nothing happened" when a button was pressed.
// The pure helpers below are unit tested; the rest keeps one detection result
// shared by every tab.
const VoiceCheck = (function () {
  const PROBE = 'This is a voice check for your English practice.';
  const WAIT_MS = 1500;

  const MESSAGES = {
    'no-synth': '❌ 这个浏览器没有语音合成（speechSynthesis）。WFD/RS/RA 和跟读、开车都无法朗读；SST 的录音仍可播放。请改用 Chrome 或 Edge。',
    'no-english': '⚠️ 本机有语音合成器，但没有可用的英文语音，WFD/RS/RA 和跟读、开车无法朗读（SST 的录音仍可播放）。请安装英文语音（Windows：设置 → 时间和语言 → 语音 → 添加语音；Android：设置 → 系统 → 语言和输入法 → 文字转语音 → 安装英语数据），或改用 Chrome/Edge。',
    'no-voices': '⚠️ 语音合成器已存在，但语音列表一直是空的。请刷新页面重试；仍然为空就安装一个英文语音（Windows：设置 → 时间和语言 → 语音 → 添加语音；Android：文字转语音 → 安装英语数据）。SST 的录音仍可播放。'
  };
  const ADVICE = {
    'no-synth': '请改用 Chrome 或 Edge。',
    'no-english': '装一个英文语音（Windows：设置 → 时间和语言 → 语音 → 添加语音；Android：文字转语音 → 安装英语数据），或换 Chrome/Edge。',
    'no-voices': '先刷新页面重试；一直为空就安装一个英文语音，或换 Chrome/Edge。',
    ok: '点「🔊 声音自检」可以再听一句测试。'
  };

  const state = { status: null, lastCheck: null, onChange: [], noticeTimer: null };

  function voiceList(voices) {
    return Array.isArray(voices) ? voices.filter(voice => voice && typeof voice.lang === 'string' && voice.lang) : [];
  }

  // en-AU → en-GB → en-US → any en*, so local exam accents win over a US default.
  function pickEnglishVoice(voices) {
    const list = voiceList(voices);
    const first = pattern => list.find(voice => pattern.test(voice.lang));
    return first(/^en[-_]AU\b/i) || first(/^en[-_]GB\b/i) || first(/^en[-_]US\b/i) || first(/^en\b/i) || null;
  }

  function voiceStatus(voices) {
    const list = voiceList(voices);
    if (!list.length) return { ok: false, reason: 'no-voices', count: 0 };
    const voice = pickEnglishVoice(list);
    if (!voice) return { ok: false, reason: 'no-english', count: list.length };
    return { ok: true, lang: voice.lang, name: voice.name || '', voice: voice, count: list.length };
  }

  // getVoices() is often empty on first call; wait for voiceschanged for up to
  // `timeoutMs` (default 1.5s) and report the last thing we saw.
  function detect(synth, opts) {
    opts = opts || {};
    const wait = Number.isFinite(opts.timeoutMs) ? opts.timeoutMs : WAIT_MS;
    const read = () => {
      try { return synth && typeof synth.getVoices === 'function' ? synth.getVoices() : null; }
      catch (err) { return null; }
    };
    return new Promise(resolve => {
      if (!synth || typeof synth.getVoices !== 'function') {
        resolve({ ok: false, reason: 'no-synth', count: 0 });
        return;
      }
      const initial = voiceStatus(read());
      if (initial.ok) { resolve(initial); return; }
      let settled = false;
      let timer = null;
      let current = initial;
      const finish = status => {
        if (settled) return;
        settled = true;
        if (timer) clearTimeout(timer);
        try { if (synth.removeEventListener) synth.removeEventListener('voiceschanged', onChange); } catch (err) {}
        resolve(status || current);
      };
      const onChange = () => {
        const status = voiceStatus(read());
        current = status;
        if (status.ok) finish(status);
      };
      try { if (synth.addEventListener) synth.addEventListener('voiceschanged', onChange); } catch (err) {}
      if (wait > 0) timer = setTimeout(() => finish(current), wait);
      else finish(current);
    });
  }

  function statusMessage(status) {
    if (status && status.ok) return '✅ 声音正常：' + (status.name || '系统默认语音') + '（' + status.lang + '）';
    return MESSAGES[(status && status.reason) || 'no-synth'];
  }

  function shortMessage(status) {
    if (status && status.ok) return '声音正常：' + (status.name || '系统默认语音') + '（' + status.lang + '）';
    if (status && status.reason === 'no-english') return '没有可用的英文语音（WFD/RS/RA 与跟读、开车无法朗读；SST 录音仍可播放）';
    if (status && status.reason === 'no-voices') return '语音列表为空：有语音合成器，但没有加载到任何语音';
    return '浏览器没有语音合成（speechSynthesis）';
  }

  function advice(status) {
    return ADVICE[(status && status.ok) ? 'ok' : ((status && status.reason) || 'no-synth')];
  }

  function checkMessage(result) {
    const status = (result && result.status) || state.status || { ok: false, reason: 'no-synth', count: 0 };
    let head;
    if (status.ok) head = '✅ 正常：' + (status.name || '系统默认语音') + '（' + status.lang + '）';
    else if (status.reason === 'no-english') head = '⚠️ 有语音合成器，但没有英文语音';
    else if (status.reason === 'no-voices') head = '⚠️ 有语音合成器，但语音列表为空';
    else head = '❌ 完全没有语音合成器';
    let tail = advice(status);
    if (result && result.spoke === 'error') tail = '⚠️ 语音被选中但朗读失败（' + (result.error || 'error') + '）。' + tail;
    return head + ' ' + tail;
  }

  function notice(text, ms) {
    if (typeof document === 'undefined' || !document.body) return null;
    let el = document.getElementById('voiceNotice');
    if (!el) {
      el = document.createElement('div');
      el.id = 'voiceNotice';
      el.className = 'voice-notice';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = String(text || '');
    el.hidden = false;
    if (state.noticeTimer) clearTimeout(state.noticeTimer);
    const hold = Number(ms) > 0 ? Number(ms) : 9000;
    state.noticeTimer = setTimeout(() => { state.noticeTimer = null; el.hidden = true; }, hold);
    return el;
  }

  function speak(text, opts) {
    opts = opts || {};
    const spoken = String(text == null ? '' : text).trim();
    if (!spoken) return Promise.resolve('empty');
    if (typeof window === 'undefined' || !window.speechSynthesis || typeof window.SpeechSynthesisUtterance !== 'function') {
      state.status = { ok: false, reason: 'no-synth', count: 0 };
      notice(statusMessage(state.status));
      return Promise.resolve('no-synth');
    }
    const status = voiceStatus(window.speechSynthesis.getVoices());
    if (!status.ok) {
      state.status = status;
      notice(statusMessage(status));
      return Promise.resolve(status.reason);
    }
    state.status = status;
    try { window.speechSynthesis.cancel(); } catch (err) {}
    return new Promise(resolve => {
      let done = false;
      const finish = why => { if (done) return; done = true; resolve(why); };
      let u;
      try {
        u = new window.SpeechSynthesisUtterance(spoken);
        u.lang = status.lang;
        if (status.voice) u.voice = status.voice;
        if (opts.rate) u.rate = opts.rate;
        if (opts.pitch) u.pitch = opts.pitch;
        u.onend = () => finish('end');
        u.onerror = event => {
          const error = (event && event.error) || 'error';
          notice('⚠️ 朗读失败（' + error + '）。' + advice(status));
          finish('error');
        };
        window.speechSynthesis.speak(u);
      } catch (err) {
        notice('⚠️ 朗读失败（' + ((err && err.message) || 'error') + '）。' + advice(status));
        finish('error');
      }
    });
  }

  function say(text, opts) {
    return speak(text, opts);
  }

  // Cached/live detection shared by every tab.
  function status() {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      return state.status || { ok: false, reason: 'no-synth', count: 0 };
    }
    const live = voiceStatus(window.speechSynthesis.getVoices());
    if (live.ok || !state.status) state.status = live;
    return state.status;
  }

  function englishOk() { return !!status().ok; }

  function emit() {
    const snapshot = state.status;
    state.onChange.forEach(fn => { try { fn(snapshot); } catch (err) {} });
  }

  function onChange(fn) {
    if (typeof fn === 'function') state.onChange.push(fn);
    return fn;
  }

  async function check() {
    let outcome;
    if (typeof window === 'undefined' || !window.speechSynthesis || typeof window.SpeechSynthesisUtterance !== 'function') {
      state.status = { ok: false, reason: 'no-synth', count: 0 };
      outcome = { status: state.status, spoke: 'none' };
    } else {
      const st = await detect(window.speechSynthesis, { timeoutMs: WAIT_MS });
      state.status = st;
      if (st.ok) {
        const said = await say(PROBE, { rate: 0.95 });
        outcome = { status: st, spoke: said };
      } else {
        outcome = { status: st, spoke: 'none' };
      }
    }
    outcome.at = Date.now();
    state.lastCheck = outcome;
    notice(checkMessage(outcome), 12000);
    emit();
    return outcome;
  }

  // Show media failures instead of a silent dead <audio>.
  const AUDIO_FAIL = '音频加载失败：网络或缓存异常。已安装的 PWA 请刷新页面，让新版本的服务工作线程接管后再试；仍不行请换 Chrome/Edge 或检查网络。';
  function audioFail(el) {
    if (el && !el.__audioFailed) {
      el.__audioFailed = true;
      if (typeof document !== 'undefined') {
        try {
          // An inline line only where a card can hold it; otherwise the fixed notice is enough.
          const host = el.closest ? el.closest('.card') : null;
          if (host) {
            let line = host.querySelector('.audio-fail');
            if (!line) {
              line = document.createElement('p');
              line.className = 'pte-warn audio-fail';
              host.appendChild(line);
            }
            line.textContent = AUDIO_FAIL;
          }
        } catch (err) {}
      }
    }
    notice(AUDIO_FAIL, 10000);
  }
  function wireAudio(el) {
    if (!el || el.__voiceWired) return el;
    el.__voiceWired = true;
    const fail = () => audioFail(el);
    try {
      el.addEventListener('error', fail);
      el.addEventListener('stalled', fail);
    } catch (err) {}
    try {
      const play = el.play;
      if (typeof play === 'function') {
        el.play = function () {
          const pending = play.apply(el, arguments);
          if (pending && typeof pending.catch === 'function') pending.catch(fail);
          return pending;
        };
      }
    } catch (err) {}
    return el;
  }
  function rescan(root) {
    const scope = root && typeof root.querySelectorAll === 'function' ? root : (typeof document !== 'undefined' ? document : null);
    if (!scope) return;
    try { scope.querySelectorAll('audio,video').forEach(wireAudio); } catch (err) {}
  }

  function boot() {
    if (typeof window === 'undefined') return;
    const synth = window.speechSynthesis;
    const scan = () => rescan(document);
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan);
      else scan();
    }
    if (!synth) { state.status = { ok: false, reason: 'no-synth', count: 0 }; return; }
    state.status = voiceStatus(synth.getVoices());
    detect(synth, { timeoutMs: WAIT_MS }).then(st => { state.status = st; emit(); });
    try {
      if (synth.addEventListener) {
        synth.addEventListener('voiceschanged', () => {
          state.status = voiceStatus(synth.getVoices());
          emit();
        });
      }
    } catch (err) {}
  }

  boot();

  return {
    PROBE: PROBE,
    WAIT_MS: WAIT_MS,
    pickEnglishVoice: pickEnglishVoice,
    voiceStatus: voiceStatus,
    detect: detect,
    statusMessage: statusMessage,
    shortMessage: shortMessage,
    advice: advice,
    checkMessage: checkMessage,
    notice: notice,
    say: say,
    status: status,
    englishOk: englishOk,
    onChange: onChange,
    check: check,
    audioFail: audioFail,
    wireAudio: wireAudio,
    rescan: rescan
  };
})();

if (typeof window !== 'undefined') window.VoiceCheck = VoiceCheck;
