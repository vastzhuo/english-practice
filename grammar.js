/* DK 英语语法指南, in the order the cards appear in the bank. No added points. */
const GRAMMAR = (typeof WORDS === 'undefined' ? [] : WORDS.filter(function (w) {
  return String(w.c).indexOf('DK 英语语法指南 Grammar:') === 0;
})).map(function (w, i) {
  const chapter = String(w.c).split(': ').slice(1).join(': ');
  const m = String(w.m || '');
  const mark = m.match(/^【([^】]+)】(.*)$/);
  return {
    id: 'g' + String(i + 1).padStart(3, '0'),
    chapter: chapter,
    title: mark ? mark[1] : m,
    sub: mark ? mark[2].trim() : '',
    en: String(w.w || '')
  };
});
