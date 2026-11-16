// Reference cards on the Progress tab: the 8-炸 daily plan (StudyPlan.PLAN_JOEL)
// and the mixed listening plan (StudyPlan.PLAN_LISTENING). study-plan.js holds
// the data; this file only turns it into HTML. Both cards start collapsed and
// app.js toggles them in place, so opening one never re-renders the Progress tab.
(function (root) {
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }
  function bodyId(plan) { return 'plan-body-' + plan.id; }
  function toggle(plan, open) {
    return '<button type="button" class="btn alt plan-toggle" data-plan-toggle="' + esc(plan.id) +
      '" aria-expanded="' + (open ? 'true' : 'false') + '" aria-controls="' + bodyId(plan) + '">' +
      (open ? '收起' : '展开') + '</button>';
  }
  function head(plan, open) {
    return '<div class="plan-head"><div><p class="plan-kicker">' + esc(plan.kicker) + '</p><h3>' +
      esc(plan.title) + '</h3></div>' + toggle(plan, open) + '</div>' +
      '<p class="plan-note">' + esc(plan.note) + '</p>';
  }
  function card(plan, open, inner) {
    return '<div class="card plan-card" data-plan="' + esc(plan.id) + '">' + head(plan, open) +
      '<div class="plan-body" id="' + bodyId(plan) + '"' + (open ? '' : ' hidden') + '>' + inner + '</div></div>';
  }
  // One table per section: 题型 / 建议时长 / 每日练习量.
  function table(section) {
    const rows = section.rows.map(row =>
      '<tr><td>' + esc(row.type) + '</td><td>' + esc(row.time) + '</td><td>' + esc(row.amount) + '</td></tr>'
    ).join('');
    return '<h4 class="plan-sec">' + esc(section.name) + ' <small>' + esc(section.time) + '</small></h4>' +
      '<table class="plan-table"><thead><tr><th>题型</th><th>建议时长</th><th>每日练习量</th></tr></thead><tbody>' +
      rows + '</tbody></table>';
  }
  // The one-line tips under each table. Data already keeps them to two sentences.
  function tips(section) {
    const items = section.rows.filter(row => row.tip).map(row =>
      '<li><b>' + esc(row.type) + '</b> ' + esc(row.tip) + '</li>'
    );
    return items.length ? '<ul class="plan-tips">' + items.join('') + '</ul>' : '';
  }
  function joelCard(open) {
    const plan = root.StudyPlan.PLAN_JOEL;
    const inner = '<p class="plan-fact"><span>' + esc(plan.target) + '</span><span>' + esc(plan.total) + '</span></p>' +
      plan.sections.map(section => table(section) + tips(section)).join('');
    return card(plan, open, inner);
  }
  function listenCard(open) {
    const plan = root.StudyPlan.PLAN_LISTENING;
    const facts = '<p class="plan-fact"><span>每日量 ' + esc(plan.daily) + '</span><span>时长 ' + esc(plan.time) + '</span></p>';
    const materials = '<h4 class="plan-sec">材料类型</h4><ul class="plan-list">' +
      plan.materials.map(item => '<li>' + esc(item) + '</li>').join('') + '</ul>';
    const rounds = '<h4 class="plan-sec">做法（按轮次）</h4>' + plan.rounds.map(round =>
      '<div class="plan-round"><b>' + esc(round.name) + ' · ' + esc(round.goal) + '</b><ol>' +
      round.steps.map(step => '<li>' + esc(step) + '</li>').join('') + '</ol></div>'
    ).join('');
    const pitfalls = '<h4 class="plan-sec">常见坑</h4><ul class="plan-list plan-pitfalls">' +
      plan.pitfalls.map(row => '<li><b>' + esc(row.name) + '</b>：' + esc(row.fix) + '</li>').join('') + '</ul>';
    return card(plan, open, facts + materials + rounds + pitfalls);
  }
  function cards(state) {
    const open = state || {};
    if (!root.StudyPlan || !root.StudyPlan.PLAN_JOEL || !root.StudyPlan.PLAN_LISTENING) return '';
    return joelCard(!!open.joel) + listenCard(!!open.listen);
  }
  root.studyPlanCards = cards;
  root.StudyPlanUI = { cards: cards, joelCard: joelCard, listenCard: listenCard, table: table };
})(this);
