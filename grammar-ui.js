// Sequential grammar path. One point, then the next. Progress stays in localStorage key ep.
(function () {
  function ensure() {
    const n = (typeof GRAMMAR !== 'undefined' && GRAMMAR.length) ? GRAMMAR.length : 0;
    const g = S.grammar;
    if (!g || typeof g.i !== 'number' || g.i < 0 || g.i >= n) S.grammar = { i: 0, done: false };
    else S.grammar.done = !!S.grammar.done;
  }
  function render() {
    ensure();
    const el = $('tab-grammar');
    const n = GRAMMAR.length;
    const g = S.grammar;
    if (g.done) {
      el.innerHTML = `<div class="card"><small>语法 · ${n} / ${n}</small><div class="bar"><i style="width:100%"></i></div><h2 class="word" style="font-size:1.35rem">学完了</h2><p>114 个知识点已经按顺序走完。下次打开会停在这里。</p><button class="btn" id="grRestart" type="button">从头再看</button><button class="btn alt" id="grLast" type="button">回到最后一个</button></div>`;
      $('grRestart').onclick = () => { S.grammar = { i: 0, done: false }; save(); render(); scrollTo(0, 0); };
      $('grLast').onclick = () => { S.grammar = { i: n - 1, done: false }; save(); render(); scrollTo(0, 0); };
      return;
    }
    const i = g.i;
    const p = GRAMMAR[i];
    const ex = p.ex.map(e => `<p class="ex" lang="en">${esc(e.en)} ${spk(e.en)}</p><p class="syn-cn">${esc(e.cn)}</p>`).join('');
    el.innerHTML = `<div class="card"><small>语法 · ${esc(p.stage)} · ${i + 1} / ${n}</small><div class="bar"><i style="width:${Math.round(i / n * 100)}%"></i></div><h2 class="word" style="font-size:1.35rem">${esc(p.title)}</h2><p>${esc(p.zh)}</p><p class="pte-kicker">例句</p>${ex}<button class="btn alt" id="grPrev" type="button" ${i ? '' : 'disabled'}>上一知识点</button><button class="btn" id="grNext" type="button">${i === n - 1 ? '完成，查看结果' : '下一知识点'}</button></div>`;
    $('grPrev').onclick = () => { if (!i) return; S.grammar.i = i - 1; save(); render(); scrollTo(0, 0); };
    $('grNext').onclick = () => {
      if (i === n - 1) S.grammar.done = true;
      else S.grammar.i = i + 1;
      save();
      render();
      scrollTo(0, 0);
    };
  }
  window.grammarOpen = function () { ensure(); render(); };
})();
