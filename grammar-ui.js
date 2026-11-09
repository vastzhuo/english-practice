// One DK grammar point, then the next, in the book's own order.
(function () {
  const PATH = 2;
  function ensure() {
    const n = (typeof GRAMMAR !== 'undefined' && GRAMMAR.length) ? GRAMMAR.length : 0;
    const g = S.grammar;
    if (!g || g.v !== PATH || typeof g.i !== 'number' || g.i < 0 || g.i >= n) S.grammar = { i: 0, done: false, v: PATH };
    else S.grammar.done = !!S.grammar.done;
  }
  function render() {
    ensure();
    const el = $('tab-grammar');
    const n = GRAMMAR.length;
    const g = S.grammar;
    if (g.done) {
      el.innerHTML = `<div class="card"><small>语法 · ${n} / ${n}</small><div class="bar"><i style="width:100%"></i></div><h2 class="word" style="font-size:1.35rem">学完了</h2><p>这本语法指南的 ${n} 个知识点已经按书中的顺序走完。下次打开会停在这里。</p><button class="btn" id="grRestart" type="button">从头再看</button><button class="btn alt" id="grLast" type="button">回到最后一个</button></div>`;
      $('grRestart').onclick = () => { S.grammar = { i: 0, done: false, v: PATH }; save(); render(); scrollTo(0, 0); };
      $('grLast').onclick = () => { S.grammar = { i: n - 1, done: false, v: PATH }; save(); render(); scrollTo(0, 0); };
      return;
    }
    const i = g.i;
    const p = GRAMMAR[i];
    const sub = p.sub ? `<p><small>${esc(p.sub)}</small></p>` : '';
    el.innerHTML = `<div class="card"><small>语法 · ${esc(p.chapter)} · ${i + 1} / ${n}</small><div class="bar"><i style="width:${Math.round(i / n * 100)}%"></i></div><h2 class="word" style="font-size:1.35rem">${esc(p.title)}</h2>${sub}<p class="ex" lang="en">${esc(p.en)} ${spk(p.en)}</p><button class="btn alt" id="grPrev" type="button" ${i ? '' : 'disabled'}>上一知识点</button><button class="btn" id="grNext" type="button">${i === n - 1 ? '完成，查看结果' : '下一知识点'}</button></div>`;
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
