function epNow(){try{if(window.EP_NOW)return new Date(window.EP_NOW)}catch(e){}return new Date()}
function tk(){return EPPlan.sydneyParts(epNow()).key}
let S=EPPlan.hydrateEp(JSON.parse(localStorage.getItem('ep')||'{"days":{},"learned":[],"best":0}'));
if(S.cat!=='All'&&!String(S.cat).startsWith('G:')&&!WORDS.some(w=>w.c===S.cat))S.cat='All';
const save=()=>localStorage.setItem('ep',JSON.stringify(S));
const $=id=>document.getElementById(id), esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const CATS=['All',...new Set(WORDS.map(w=>w.c))];
const GRP=c=>c.includes(': ')?c.split(': ')[0]:'Daily English';const SUB=c=>c.includes(': ')?c.slice(c.indexOf(': ')+2):c;const GROUPS=[...new Set(CATS.slice(1).map(GRP))];
const list=()=>S.cat==='All'?WORDS:S.cat.startsWith('G:')?WORDS.filter(w=>GRP(w.c)===S.cat.slice(2)):WORDS.filter(w=>w.c===S.cat);
const curG=()=>S.cat==='All'?'All':S.cat.startsWith('G:')?S.cat.slice(2):GRP(S.cat);const catLabel=()=>S.cat==='All'?'All':S.cat.startsWith('G:')?S.cat.slice(2)+' · All':S.cat;
function setG(g){const v=g==='All'?'All':'G:'+g;$('cat').onchange({target:{value:v}})}
const RND=()=>S.rnd!==false;function sshuf(a,seed){let h=2166136261;for(const c of seed)h=Math.imul(h^c.charCodeAt(0),16777619);const r=()=>{h=Math.imul(h^h>>>15,2246822507);h=Math.imul(h^h>>>13,3266489909);return((h^=h>>>16)>>>0)/4294967296};a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function todays(){const k=tk()+'|'+S.cat+'|'+S.goal+'|'+RND();if(!S.plan||S.plan.k!==k){const L=list(),lt=S.lt[tk()]||[];let n=L.filter(w=>!S.learned.includes(w.w)||lt.includes(w.w));if(RND())n=sshuf(n,tk()+'|'+S.cat);if(n.length<S.goal)n=n.concat(shuf(L.filter(w=>!n.includes(w))));S.plan={k,items:n.slice(0,S.goal).map(w=>w.w)};save()}
 const L=list();return S.plan.items.map(t=>L.find(w=>w.w===t)).filter(Boolean)}
const doneToday=()=>(S.lt[tk()]||[]).length;
function markLearned(t){const k=tk();S.lt[k]=S.lt[k]||[];if(!S.lt[k].includes(t))S.lt[k].push(t);if(!S.learned.includes(t))S.learned.push(t);if(doneToday()>=S.goal)S.days[k]=Math.max(S.days[k]||0,1);S.best=Math.max(S.best,streak());save();badge()}
let page=0;const PG=10;
const shuf=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
function streak(){return EPPlan.streakCount(S.days,S.rest,tk())}
let voice=null;function pickVoice(){const v=speechSynthesis.getVoices();voice=v.find(x=>/en[-_]AU/i.test(x.lang))||v.find(x=>/en[-_]GB/i.test(x.lang))||v.find(x=>/en[-_]US/i.test(x.lang))||v.find(x=>/^en/i.test(x.lang))||null}
if('speechSynthesis'in window){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
function say(t){if(!('speechSynthesis'in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang=voice?voice.lang:'en-AU';if(voice)u.voice=voice;u.rate=S.slow?.65:.95;speechSynthesis.speak(u)}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
const spk=t=>`<button class="spk" data-say="${esc(t)}">🔊</button>`+(SR?`<button class="spk" data-rec="${esc(t)}">🎤</button>`:'');
const norm=s=>s.toLowerCase().replace(/[^a-z0-9' ]+/g,' ').split(/\s+/).filter(Boolean);
function lev(a,b){const d=Array.from({length:a.length+1},(_,i)=>[i]);for(let j=1;j<=b.length;j++)d[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[a.length][b.length]}
function score2(t,h){const A=norm(t),B=norm(h);if(!A.length)return 0;const wd=1-lev(A,B)/Math.max(A.length,B.length);const ch=1-lev(A.join(' '),B.join(' '))/Math.max(A.join(' ').length,B.join(' ').length,1);return Math.max(0,Math.round(100*(.5*wd+.5*ch)))}
function align(A,B){const n=A.length,m=B.length,d=Array.from({length:n+1},()=>Array(m+1).fill(0));
 for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)d[i][j]=A[i]===B[j]?d[i+1][j+1]+1:Math.max(d[i+1][j],d[i][j+1]);
 const out=[];let i=0,j=0;while(i<n||j<m){if(i<n&&j<m&&A[i]===B[j]){out.push(['ok',A[i]]);i++;j++}else if(j<m&&(i>=n||d[i][j+1]>=d[i+1][j])){if(i<n&&(j+1>=m||d[i+1][j+1]>=d[i][j+1])){out.push(['bad',A[i],B[j]]);i++;j++}else{out.push(['extra',B[j]]);j++}}else{out.push(['miss',A[i]]);i++}}return out}
const ERR={'not-allowed':'❌ 麦克风权限被拒绝。请点浏览器地址栏左边的🔒/设置 → 权限 → 麦克风 → 允许，然后再试。','service-not-allowed':'❌ 语音识别服务不可用。请在 Chrome 设置里允许麦克风，并确认已安装 Google 应用。','no-speech':'🤫 没听到声音。点“再试一次”，听到提示后马上大声读。','audio-capture':'🎙️ 找不到麦克风，或者麦克风被别的应用占用了。关掉其他录音应用再试。','network':'🌐 网络错误：Chrome 的语音识别需要联网（使用 Google 服务器）。请检查网络。','aborted':'⏹️ 识别被中断了，再试一次。','language-not-supported':'🌏 不支持这个语言设置，正在换一个再试。','bad-grammar':'识别出错，再试一次。'};
const LANGS=['en-US','en-AU','en-GB'];
function rec(t,host,cb,li){li=li||0;let box=host.nextElementSibling;if(!box||!box.classList.contains('pron')){box=document.createElement('div');box.className='fb pron';host.after(box)}
 if(!SR){box.innerHTML='⚠️ 这个浏览器不支持语音识别评分。请用安卓手机上的 Chrome 打开。';return}
 const r=new SR();r.lang=LANGS[li];r.interimResults=true;r.maxAlternatives=3;r.continuous=false;
 let finals=null,interim='',errd=false,url=null;
 box.innerHTML='🎤 <b>正在听…</b> 请读：<b>'+esc(t)+'</b><div class="live"></div>';
 const show=(alts)=>{const best=alts.map(a=>[score2(t,a.t),a]).sort((x,y)=>y[0]-x[0])[0];const sc=best[0],conf=Math.round((best[1].c||0)*100);
  const words=align(norm(t),norm(best[1].t)).map(x=>x[0]==='ok'?`<span class="wok">${esc(x[1])}</span>`:x[0]==='miss'?`<span class="wmiss" title="漏读">${esc(x[1])}</span>`:x[0]==='bad'?`<span class="wbad" title="你读成: ${esc(x[2])}">${esc(x[1])} <s>${esc(x[2])}</s></span>`:`<span class="wextra">+${esc(x[1])}</span>`).join(' ');
  box.innerHTML=`<div class="score">${sc>=85?'🌟 很棒':sc>=65?'👍 不错':'🔁 再练练'} <b>${sc}/100</b> <small>浏览器识别，不是 PTE 分 · 置信度 ${conf||'—'}%</small></div><div class="words">${words}</div><small>绿色=读对 红色=漏读/读错 橙色=多读<br>识别到：“${esc(best[1].t)}”</small><br>
   <button class="btn alt half" data-say="${esc(t)}">▶ 原音</button><button class="btn alt half mine" ${S.recOn?'':'disabled'}>${S.recOn?'⏺ 录我的声音':'▶ 我的录音(已关闭)'}</button><button class="btn alt again">🔁 再试一次</button>`;
  box.querySelector('.again').onclick=()=>rec(t,host,cb);
  if(S.recOn)box.querySelector('.mine').onclick=function(){recordMine(this)};
  S.sh.h[t]=(S.sh.h[t]||[]).concat(sc).slice(-10);save();cb&&cb(sc)};
 r.onresult=e=>{let fin=null;interim='';for(let i=0;i<e.results.length;i++){const R=e.results[i];if(R.isFinal)fin=[...R].map(a=>({t:a.transcript,c:a.confidence}));else interim+=R[0].transcript}
  const lv=box.querySelector('.live');if(lv)lv.textContent=interim?'听到：'+interim:'';if(fin){finals=fin;try{r.stop()}catch(_){}}};
 r.onerror=e=>{window.EP_REC=false;errd=true;if(e.error==='language-not-supported'&&li<LANGS.length-1)return rec(t,host,cb,li+1);
  if(interim){finals=[{t:interim,c:0}];return}
  box.innerHTML=(ERR[e.error]||'出错了：'+esc(e.error))+'<br><button class="btn alt again">🔁 再试一次</button>';box.querySelector('.again').onclick=()=>rec(t,host,cb)};
 r.onend=()=>{window.EP_REC=false;if(finals)return show(finals);if(interim)return show([{t:interim,c:0}]);if(!errd){box.innerHTML='🤔 没有识别到内容。请靠近麦克风、大声清楚地读，再试一次。<br><button class="btn alt again">🔁 再试一次</button>';box.querySelector('.again').onclick=()=>rec(t,host,cb)}};
 try{window.EP_REC=true;r.start()}catch(e){window.EP_REC=false;box.textContent='无法启动语音识别：'+e.message}}
function recordMine(btn){if(!navigator.mediaDevices||!window.MediaRecorder){btn.textContent='不支持录音';return}
 window.EP_REC=true;
 navigator.mediaDevices.getUserMedia({audio:true}).then(st=>{const mr=new MediaRecorder(st),ch=[];mr.ondataavailable=e=>ch.push(e.data);
  mr.onstop=()=>{window.EP_REC=false;st.getTracks().forEach(x=>x.stop());const u=URL.createObjectURL(new Blob(ch,{type:mr.mimeType}));btn.textContent='▶ 播放我的录音';btn.onclick=()=>new Audio(u).play()};
  mr.start();btn.textContent='⏹ 录音中… 读完点我停止';btn.onclick=()=>mr.stop()}).catch(()=>{window.EP_REC=false;btn.textContent='❌ 无法录音（请允许麦克风）'})}
function card(w){return `<div class="card"><div class="word">${esc(w.w)} ${spk(w.w)}</div>${w.ipa?`<div class="ex"><small>${esc(w.ipa)}</small></div>`:''}<div class="mean">${esc(w.m)}</div>${w.t?`<div class="ex">📐 句型：${esc(w.x).replace(/\[([^\]]+)\]/g,'<mark class="slot">[$1]</mark>')}</div>`:`<div class="ex">${esc(w.x)} ${spk(w.x)}</div>`}${w.x2?`<div class="ex">${esc(w.x2)} ${spk(w.x2)}</div>`:''}${w.n?`<div class="ex"><small>${w.t?'📝 用法：':''}${esc(w.n)}</small></div>`:''}</div>`}
function picker(){return `<button class="btn alt" id="spd">${S.slow?'🐢 Slow':'🐇 Normal'}</button><button class="btn alt" id="ord" onclick="toggleOrd()">${RND()?'🔀 乱序':'➡️ 顺序'}</button>${SR?'':'<p><small>🎤 Speaking practice needs Chrome on Android/desktop.</small></p>'}<select id="catg" class="sel" onchange="setG(this.value)">${['All',...GROUPS].map(g=>`<option value="${esc(g)}" ${g===curG()?'selected':''}>📚 ${esc(g)}${g==='All'?'':' ('+WORDS.filter(w=>GRP(w.c)===g).length+')'}</option>`).join('')}</select>${curG()==='All'?'<select id="cat" class="sel" style="display:none"></select>':`<select id="cat" class="sel"><option value="G:${esc(curG())}">📖 All</option>${CATS.slice(1).filter(c=>GRP(c)===curG()).map(c=>`<option value="${esc(c)}" ${c===S.cat?'selected':''}>📖 ${esc(SUB(c))} (${WORDS.filter(w=>w.c===c).length})</option>`).join('')}</select>`}`}
let browse=false;
function currentRec(){return EPPlan.recommend({when:epNow(),state:S})}
function sessionBuilt(){const sess=window.EP_SESSION;if(!sess||!sess.on||sess.tab!=='learn')return null;return EPPlan.buildSession(list(),S,{newWords:sess.newWords||0,cap:sess.cap||0,seed:tk()+'|'+S.cat+'|plan',reviewFirst:true})}
function renderTodayPlan(rec){const p=rec.parts,ex=rec.exam,clock=String(p.hour).padStart(2,'0')+':'+String(p.minute).padStart(2,'0');
 const vars=['PTE Academic','未确认'];if(vars.indexOf(ex.variant)<0)vars.push(ex.variant);
 const obs=[['','还不知道（均衡）'],['listening','听力'],['reading','阅读'],['writing','写作'],['speaking','口语']];
 const targetHtml=[['listening','听','tL'],['reading','读','tR'],['writing','写','tW'],['speaking','说','tS']].map(function(x){return `<label>${x[1]}<input id="${x[2]}" type="number" min="0" max="90" value="${ex.target[x[0]]}"></label>`}).join('');
 const acts=rec.showActions?`<div class="rowbtns" id="planActs">${rec.skills.offer.map(function(k){const lab={review:'复习已学',listen:'短听力',shadow:'跟读（不是真题）',drive:'上车前准备'}[k];return `<button type="button" class="btn alt" data-act="${k}">${lab}</button>`}).join('')}</div>`:'';
 const opt=rec.showOptional?`<button type="button" class="btn alt" id="optRev">${esc(rec.optional.label)}</button>`:'';
 const nw=rec.blocked?'':`<label class="tiny">今日新词（0–20，只影响按计划开始）<input id="nw" type="number" min="0" max="20" value="${rec.newWords}"> <button type="button" class="btn alt" id="nwReset">恢复建议 ${rec.suggestedNewWords}</button></label>`;
 const same=ex.date==='2026-11-22'&&ex.start==='15:30'&&ex.arriveBy==='15:00'&&ex.place==='Box Hill VIC';
 return `<div class="card" id="todayPlan"><div class="tiny">悉尼时间 ${esc(p.key)} ${esc(EPPlan.WD[p.weekday])} ${clock}${rec.clocksMatch?' · 墨尔本同一钟点':''}</div>
  <h2 id="headline">${esc(rec.headline)}</h2>
  <p class="tiny" id="examLine">考试 ${esc(ex.date||'未设')} ${esc(ex.start||'钟点未填')} ${esc(ex.place||'')} · 最晚到达 ${esc(ex.arriveBy||'未填')}</p>
  <p class="tiny" id="scoreLine">记录的单项最低分：听 ${ex.target.listening} · 读 ${ex.target.reading} · 写 ${ex.target.writing} · 说 ${ex.target.speaking}（可改，不是预测）</p>
  <div class="now ${rec.blocked?'exam':''}" id="nowLine">${esc(rec.now.label)}</div>
  <div id="advice">${rec.advice.map(function(s){return `<p class="tiny">${esc(s)}</p>`}).join('')}</div>
  <p id="workload"><b>${esc(rec.workload)}</b> · 建议新词 ${rec.suggestedNewWords}${rec.savedOverride!=null?' · 已改过 '+rec.savedOverride:''}</p>
  <p class="tiny" id="manualGoal">你选的每日目标仍是 ${esc(String(S.goal))}。乱序：${RND()?'开':'关'}。下面的 20/50/75/100 不会被建议改掉。</p>
  ${nw}<label class="tiny"><input type="checkbox" id="light" ${S.light?'checked':''}> 疲劳 / 少学。不删记录，也不因此扣连续天数。</label>
  ${acts}${opt}<p class="tiny" id="skillLine">${esc(rec.skills.heading||'')}</p>
  <button type="button" class="btn alt" id="restBtn">${S.rest&&S.rest[rec.key]?'取消今天的休息标记':'把今天记为休息日（不断连续）'}</button>
  <details ${rec.phase==='exam'||rec.phase==='eve'?'open':''}><summary>考试记录（可改）</summary>
   <p class="tiny">${same?'初始记录：2026-11-22 15:30，Box Hill VIC。15:00 是最晚到达，不是开考。':'你改过考试安排。最初是 2026-11-22 15:30，Box Hill，最晚 15:00 到。'}</p>
   <label class="tiny">日期 <input id="examDate" type="date" value="${esc(ex.date)}"></label>
   <label class="tiny">开考 <input id="examStart" type="time" value="${esc(ex.start)}"></label>
   <label class="tiny">最晚到达 <input id="examArrive" type="time" value="${esc(ex.arriveBy)}"></label>
   <label class="tiny">地点 <input id="examPlace" type="text" maxlength="80" value="${esc(ex.place)}"></label>
   <label class="tiny">场次 <select id="examVar">${vars.map(function(v){return `<option ${v===ex.variant?'selected':''}>${esc(v)}</option>`}).join('')}</select></label>
   <div class="targets">${targetHtml}</div>
   <p class="tiny" id="targetNote">${esc(rec.targetNote)}</p>
   ${ex.oldTable?'<p class="tiny">你填的是旧表每项 79。2025-08-07 之后的公开线不是这个，这里不会自动改回。</p>':''}
   <label class="tiny">已观察到的弱项 <select id="observed">${obs.map(function(o){return `<option value="${o[0]}" ${ex.observed===o[0]?'selected':''}>${o[1]}</option>`}).join('')}</select></label>
   <p class="tiny"><a href="${EPPlan.HOME_AFFAIRS}" target="_blank" rel="noopener">内政部 Superior English</a> · <a href="${EPPlan.PTE_RULES}" target="_blank" rel="noopener">Pearson 到场规则</a></p>
   <button type="button" class="btn alt" id="resetScore">恢复 69/70/85/88</button>
   <button type="button" class="btn alt" id="resetBook">恢复邮件里的考试时间</button>
  </details>
  <details><summary>这一周和考试日</summary>${EPPlan.guideSections().map(function(s){return `<h3>${esc(s.t)}</h3><p class="tiny">${esc(s.d)}</p>`}).join('')}</details>
  <details><summary>2025 新口语题（不是这里的练习）</summary>${EPPlan.taskNotes().map(function(s){return `<p class="tiny"><b>${esc(s.name)}</b> ${esc(s.timing)} <a href="${esc(s.url)}" target="_blank" rel="noopener">来源</a></p>`}).join('')}<p class="tiny">词库里的雅思和词汇书只是现成材料，不是 PTE 真题。</p></details>
  <p class="tiny" id="upd" ${window.EP_UPDATE_READY?'':'hidden'}>有新版本。开车或录音时不会自动刷新。<button type="button" class="btn alt" id="updGo">停稳后刷新</button></p>
 </div>`}
function bindPlan(rec){
 const saveExam=function(mut){const ex=EPPlan.ensureExam(S.exam);mut(ex);S.exam=ex;save();learn()};
 if($('light'))$('light').onchange=function(e){S.light=!!e.target.checked;save();learn()};
 if($('nw'))$('nw').onchange=function(e){const n=parseInt(e.target.value,10);if(!Number.isFinite(n))return;S.nw[rec.key]=Math.max(0,Math.min(20,n));save();learn()};
 if($('nwReset'))$('nwReset').onclick=function(){delete S.nw[rec.key];save();learn()};
 if($('restBtn'))$('restBtn').onclick=function(){if(S.rest[rec.key])delete S.rest[rec.key];else S.rest[rec.key]=true;S.best=Math.max(S.best||0,streak());save();badge();learn()};
 document.querySelectorAll('#planActs [data-act]').forEach(function(b){b.onclick=function(){planGo(b.dataset.act)}});
 if($('optRev'))$('optRev').onclick=function(){window.EP_SESSION={on:true,tab:'learn',newWords:0,cap:8};page=0;learn()};
 if($('examDate'))$('examDate').onchange=function(e){saveExam(function(ex){ex.date=e.target.value})};
 if($('examStart'))$('examStart').onchange=function(e){saveExam(function(ex){ex.start=e.target.value})};
 if($('examArrive'))$('examArrive').onchange=function(e){saveExam(function(ex){ex.arriveBy=e.target.value})};
 if($('examPlace'))$('examPlace').onchange=function(e){saveExam(function(ex){ex.place=e.target.value.slice(0,80)})};
 if($('examVar'))$('examVar').onchange=function(e){saveExam(function(ex){ex.variant=e.target.value})};
 if($('observed'))$('observed').onchange=function(e){saveExam(function(ex){ex.observed=e.target.value})};
 [['tL','listening'],['tR','reading'],['tW','writing'],['tS','speaking']].forEach(function(pair){if(!$(pair[0]))return;$(pair[0]).onchange=function(e){const n=+e.target.value;if(!Number.isFinite(n))return;saveExam(function(ex){ex.target[pair[1]]=Math.max(0,Math.min(90,Math.round(n)));ex.targetEdited=true})}});
 if($('resetScore'))$('resetScore').onclick=function(){saveExam(function(ex){ex.target=Object.assign({},EPPlan.OFFICIAL_TARGET);ex.targetEdited=false})};
 if($('resetBook'))$('resetBook').onclick=function(){saveExam(function(ex){ex.date='2026-11-22';ex.start='15:30';ex.arriveBy='15:00';ex.place='Box Hill VIC';ex.variant='PTE Academic'})};
 if($('updGo'))$('updGo').onclick=function(){location.reload()};
}
function planGo(act){const rec=currentRec();if(!rec.showActions)return;page=0;Q=[];
 if(act==='review'){window.EP_SESSION={on:true,tab:'learn',newWords:rec.newWords,cap:rec.cap};go('learn',{keepSession:true})}
 else if(act==='listen'){window.EP_SESSION={on:true,tab:'quiz',mode:'listen',newWords:rec.newWords,cap:rec.cap};go('quiz',{keepSession:true})}
 else if(act==='shadow'){window.EP_SESSION={on:true,tab:'shadow',newWords:rec.newWords,cap:rec.cap,si:0};go('shadow',{keepSession:true})}
 else if(act==='drive'){if(window.DV)DV.once={reviewFirst:true,cap:rec.cap,stopAtEnd:true,ephemeral:true,newWords:rec.newWords};window.EP_SESSION={on:true,tab:'drive'};go('drive',{keepSession:true})}}
function learn(){const L=list(),built=browse?null:sessionBuilt(),T=browse?L:(built?built.items:todays()),pages=Math.max(1,Math.ceil(T.length/PG));page=Math.min(page,pages-1);const lt=S.lt[tk()]||[],d=T.filter(w=>lt.includes(w.w)).length;
 const opt=(id,v,a)=>`<select id="${id}" class="sel half">${a.map(x=>`<option value="${x}" ${x==v?'selected':''}>${id==='goal'?'Daily goal: ':'Quiz: '}${x}</option>`).join('')}</select>`;
 const note=built?`<p class="tiny">按今日计划：先复习已学，新词 ${built.newCount}。原来的每日目标仍是 ${esc(String(S.goal))}。</p>`:'';
 $('tab-learn').innerHTML=renderTodayPlan(currentRec())+note+`<p class="tiny">下面的每日目标是原来的手动档，和上面的建议新词不是一回事。</p>`+picker()+opt('goal',S.goal,[20,50,75,100])+opt('qlen',S.qlen,[10,20,50])+
 `<div class="card"><b>Today: ${doneToday()}/${S.goal}</b> ${doneToday()>=S.goal?'🎉 Goal reached!':''}<div class="bar"><i style="width:${Math.min(100,doneToday()/S.goal*100)}%"></i></div><small>${esc(catLabel())} · ${L.length} items · ${browse?'browsing all':'this list '+d+'/'+T.length}</small></div>`+
 T.slice(page*PG,page*PG+PG).map(w=>card(w).replace(/<\/div>$/,`<button class="btn ${lt.includes(w.w)?'done':'alt'}" data-learn="${esc(w.w)}">${lt.includes(w.w)?'✓ Learned':'Mark as learned'}</button></div>`)).join('')+
 `<div class="pager"><button class="btn alt" id="prev" ${page?'':'disabled'}>← Prev</button><span>Page ${page+1}/${pages}</span><button class="btn alt" id="nxt" ${page<pages-1?'':'disabled'}>Next →</button></div>`+
 `<button class="btn alt" id="all10">Mark this page learned</button><button class="btn" onclick="go('quiz')">Take today's quiz →</button>`+
 `<button class="btn alt" onclick="browse=!browse;page=0;learn()">${browse?"Back to today's list":'Browse all in this category'}</button>`;
 bindPlan(currentRec());
 $('cat').onchange=e=>{S.cat=e.target.value;page=0;save();Q=[];learn()};
 $('goal').onchange=e=>{S.goal=+e.target.value;page=0;save();learn()};$('qlen').onchange=e=>{S.qlen=+e.target.value;save();Q=[]};
 $('prev').onclick=()=>{page--;learn();scrollTo(0,0)};$('nxt').onclick=()=>{page++;learn();scrollTo(0,0)};
 $('all10').onclick=()=>{T.slice(page*PG,page*PG+PG).forEach(w=>markLearned(w.w));learn()}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b)say(b.dataset.say);const r=e.target.closest('[data-rec]');if(r)rec(r.dataset.rec,r.parentElement);const l=e.target.closest('[data-learn]');if(l){markLearned(l.dataset.learn);learn()}if(e.target.id==='spd'){S.slow=!S.slow;save();e.target.textContent=S.slow?'🐢 Slow':'🐇 Normal'}});
function pool(){const L=list(),t=todays(),past=L.filter(w=>S.learned.includes(w.w));return [...t,...shuf(past),...shuf(L)].filter((w,i,a)=>a.indexOf(w)===i).slice(0,S.qlen)}
const reEsc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function blank(w){if(w.w.length>40||w.w.includes('='))return null;const base=w.w.replace(/[?.!]$/,'');const words=base.split(' ');
 const re=new RegExp('\\b'+words.map((p,i)=>reEsc(i===0?p.replace(/(e|y)$/,''):p)).join('\\s+')+'\\w*','i');return re.test(w.x)?w.x.replace(re,'_____'):null}
function makeQ(w,k){const L=list().length>=8?list():WORDS;const others=shuf(L.filter(x=>x!==w&&x.w!==w.w)).slice(0,3),opts=shuf([w,...others]);
 const t=k%4;
 if(t===1){const b=blank(w);if(b)return {q:'✍️ Fill in the blank:<br><b>'+esc(b)+'</b><br><small>'+esc(w.m)+'</small>',opts:opts.map(x=>x.w),a:w.w}}
 if(t===2&&'speechSynthesis'in window)return {q:'🎧 Listen and choose what you hear:',listen:w.w,opts:opts.map(x=>x.w),a:w.w};
 if(t===3)return {q:`What does <b>“${esc(w.w)}”</b> mean?`,opts:opts.map(x=>x.m),a:w.m};
 return {q:`Which one means: <b>${esc(w.m)}</b>?`,opts:opts.map(x=>x.w),a:w.w}}
let Q=[],qi=0,score=0;
function listenQ(w){const L=list().length>=8?list():WORDS;const others=shuf(L.filter(x=>x!==w&&x.w!==w.w)).slice(0,3),opts=shuf([w,...others]);return {q:'🎧 词库听力（不是 PTE 听力题，不计 PTE 分）',listen:w.w,opts:opts.map(x=>x.w),a:w.w}}
function quizStart(mode){const plan=window.EP_SESSION&&window.EP_SESSION.on&&window.EP_SESSION.tab==='quiz';let items;if(plan){const built=EPPlan.buildSession(list(),S,{newWords:EP_SESSION.newWords||0,cap:Math.max(EP_SESSION.cap||1,1),seed:tk()+'|quiz',reviewFirst:true});items=(built.items.length?built.items:pool()).slice(0,Math.min(10,S.qlen))}else items=pool();Q=shuf(items).map((w,i)=>mode==='listen'?listenQ(w):makeQ(w,i)).filter(Boolean);qi=0;score=0;if(!Q.length){$('tab-quiz').innerHTML='<div class="card">没有可出的题。</div>';return}quiz()}
function quiz(){const el=$('tab-quiz');const plan=window.EP_SESSION&&window.EP_SESSION.on&&window.EP_SESSION.tab==='quiz';if(!Q.length){if(plan){el.innerHTML=`<div class="card"><h2>短听力</h2><p class="tiny">用现有词库做听力选择，不是 PTE 题，也不打 PTE 分。这次最多 ${Math.min(10,S.qlen)} 题，不改原来的 Quiz 长度（${S.qlen}）。</p><button class="btn" id="planQuizGo">开始</button><button class="btn alt" onclick="go('learn')">返回今日计划</button></div>`;$('planQuizGo').onclick=()=>quizStart('listen');return}el.innerHTML=`<select id="qlen2" class="sel">${[10,20,50].map(x=>`<option value="${x}" ${x==S.qlen?'selected':''}>Quiz length: ${x} questions</option>`).join('')}</select>`+picker()+`<div class="card"><h2>Daily quiz</h2><p>${S.qlen} questions: meaning, fill-in-the-blank and listening.</p>${S.days[tk()]?'<p>✅ Already done today — practise again anytime!</p>':''}<button class="btn" onclick="quizStart()">Start quiz</button></div>`;$('cat').onchange=e=>{S.cat=e.target.value;save();quiz()};$('qlen2').onchange=e=>{S.qlen=+e.target.value;save();quiz()};return}
 if(qi>=Q.length){finish();el.innerHTML=`<div class="card"><h2>🎉 ${score}/${Q.length}</h2><p>${score>=.8*Q.length?'Excellent!':score>=.6*Q.length?'Good job!':'Keep practising!'} Streak: 🔥 ${streak()}</p><button class="btn" onclick="quizStart()">Try again</button><button class="btn" onclick="go('progress')">See progress</button></div>`;return}
 const q=Q[qi];el.innerHTML=`<div class="card"><small>Question ${qi+1} of ${Q.length}</small><p>${q.q}</p>${q.listen?`<button class="btn" data-say="${esc(q.listen)}">🔊 Play again</button>`:''}${q.opts.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join('')}<div class="fb" id="fb"></div></div>`;
 if(q.listen)setTimeout(()=>say(q.listen),200);
 el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{el.querySelectorAll('.opt').forEach(x=>{x.disabled=true;if(x.textContent===q.a)x.classList.add('ok')});
  const ok=b.textContent===q.a;if(ok)score++;else b.classList.add('bad');
  $('fb').innerHTML=(ok?'✅ Correct!':'❌ Answer: '+esc(q.a))+'<button class="btn" id="next">Next →</button>';$('next').onclick=()=>{qi++;quiz()}})}
function finish(){const k=tk();S.days[k]=Math.max(S.days[k]||0,score||1);S.best=Math.max(S.best,streak());save();badge()}
let pendingImport=null;
function exportEp(){const blob=new Blob([JSON.stringify({app:'daily-english',v:EPPlan.APP_VERSION,note:'local backup only, not uploaded',ep:S},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ep-backup-'+tk()+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1500)}
function readImport(file){const reader=new FileReader();reader.onload=function(){let data;try{data=JSON.parse(String(reader.result))}catch(e){pendingImport=null;progress();const m=$('impMsg');if(m)m.textContent='JSON 无法解析';return}const v=EPPlan.validateEp(data);if(!v.ok){pendingImport=null;progress();const m=$('impMsg');if(m)m.textContent=v.error;return}pendingImport=v.ep;progress()};reader.readAsText(file)}
function confirmImport(){if(!pendingImport||!$('impOk')||!$('impOk').checked)return;const r=EPPlan.applyImport(S,pendingImport,{confirm:true});if(!r.ok){const m=$('impMsg');if(m)m.textContent=r.error;return}S=EPPlan.hydrateEp(r.next);if(S.cat!=='All'&&!String(S.cat).startsWith('G:')&&!WORDS.some(w=>w.c===S.cat))S.cat='All';save();pendingImport=null;badge();progress()}
function progress(){const sp=EPPlan.sydneyParts(epNow()),y=sp.year,m=sp.month,first=EPPlan.sundayIndex(y,m,1),n=EPPlan.daysInMonth(y,m);
 let cal='SMTWTFS'.split('').map(c=>`<div><b>${c}</b></div>`).join('')+'<div></div>'.repeat(first);
 for(let d=1;d<=n;d++){const k=EPPlan.isoDate(y,m,d);const cls=(S.days[k]?'p':(S.rest&&S.rest[k]?'r':'d'))+(k===tk()?' t':'');cal+=`<div class="${cls}">${d}</div>`}
 const per=CATS.slice(1).map(c=>{const L=WORDS.filter(w=>w.c===c);return `<div>${esc(c)}: ${L.filter(w=>S.learned.includes(w.w)).length}/${L.length}</div>`}).join('');
 const month=new Intl.DateTimeFormat('en',{month:'long',year:'numeric',timeZone:'Australia/Sydney'}).format(epNow());
 const prev=pendingImport?`<p class="tiny" id="impMsg">准备覆盖：已学 ${(pendingImport.learned||[]).length}，每日目标 ${pendingImport.goal==null?'未写':esc(String(pendingImport.goal))}。未知字段会保留。</p><label class="tiny"><input type="checkbox" id="impOk"> 我确认用这份备份覆盖当前本机进度</label><button class="btn" id="impGo" disabled>确认覆盖</button>`:'<p class="tiny" id="impMsg">选择文件后先检查，不会马上覆盖。</p>';
 $('tab-progress').innerHTML=`<div class="stats"><div class="stat"><b>🔥 ${streak()}</b>Current streak</div><div class="stat"><b>🏆 ${Math.max(S.best,streak())}</b>Best streak</div>
 <div class="stat"><b>${Object.keys(S.days).length}</b>Days practised</div><div class="stat"><b>${S.learned.length}</b>Words learned</div></div>
 <div class="card" style="margin-top:14px"><h3>${esc(month)} · 悉尼</h3><div class="cal">${cal}</div><p class="tiny">黄格是休息标记，不算练习天数。连续天数会把休息接上。</p></div><div class="card"><h3>By category</h3>${per}</div>
 <div class="card" id="backup"><h3>本机备份</h3><p class="tiny">数据只在这台浏览器的 ep 里，不会上传。更新已安装的页面时不要点“清除网站数据”。开车或录音过程中不会强制刷新。</p><button class="btn" id="expEp">导出 JSON</button><input id="impFile" type="file" accept="application/json,.json">${prev}</div>`;
 if($('expEp'))$('expEp').onclick=exportEp;if($('impFile'))$('impFile').onchange=function(e){if(e.target.files&&e.target.files[0])readImport(e.target.files[0])};
 if($('impOk'))$('impOk').onchange=function(){if($('impGo'))$('impGo').disabled=!this.checked};if($('impGo'))$('impGo').onclick=confirmImport}
function toggleOrd(){S.rnd=!RND();save();const t=document.querySelector('nav button.on');go(t?t.dataset.t:'learn')}
function shadow(){const plan=window.EP_SESSION&&window.EP_SESSION.on&&window.EP_SESSION.tab==='shadow';let L,i,using=false;if(plan){const built=EPPlan.buildSession(list(),S,{newWords:EP_SESSION.newWords||0,cap:Math.max(EP_SESSION.cap||1,1),seed:tk()+'|sh',reviewFirst:true});L=built.items.length?built.items:(RND()?sshuf(list(),tk()+'|'+S.cat):list());i=Math.min(EP_SESSION.si||0,Math.max(0,L.length-1));using=true}else{L=RND()?sshuf(list(),tk()+'|'+S.cat):list();i=Math.min(S.sh.i[S.cat]||0,Math.max(0,L.length-1))}const w=L[i];if(!w){$('tab-shadow').innerHTML='<div class="card">没有可跟读的条目。</div>';return}const hist=t=>{const h=S.sh.h[t]||[];return h.length?`<small>History: ${h.join(', ')} · best ${Math.max(...h)} · 不是 PTE 分</small>`:'<small>No attempts yet</small>'};
 const tg=(t,lab)=>`<div class="card"><small>${lab}</small><div class="word">${esc(t)}</div>${hist(t)}<div><button class="btn alt half" data-say="${esc(t)}">🔊 听原音</button><button class="btn half shrec" data-t="${esc(t)}">🎤 跟读</button></div></div>`;
 const sc=L.map(x=>S.sh.h[x.w]).filter(Boolean).map(h=>h[h.length-1]);
 $('tab-shadow').innerHTML=`<div class="card">📢 先点🔊听原音，再点🎤跟着大声读。分数来自浏览器识别，不是 PTE 口语分，也不用来判断哪一科弱。<label style="display:block;margin-top:6px"><input type="checkbox" id="recOn" ${S.recOn?'checked':''}> 评分后允许录下自己的声音对比</label></div>`+picker()+`<div class="card"><b>跟读 ${i+1}/${L.length}</b> · ${esc(catLabel())}${using?' · 今日计划':''}<br><small>Practised ${sc.length} items · avg ${sc.length?Math.round(sc.reduce((a,b)=>a+b)/sc.length):0}/100</small>${SR?'':'<p>⚠️ Speech recognition not supported in this browser — you can still listen. Use Chrome on Android to score.</p>'}</div>`+
  tg(w.w,'Word / phrase · '+esc(w.m))+(w.x&&!w.t&&w.x!==w.w?tg(w.x,'Sentence'):'')+
  `<div class="pager"><button class="btn alt" id="shp" ${i?'':'disabled'}>← Prev</button><button class="btn alt" id="shn" ${i<L.length-1?'':'disabled'}>Next →</button></div>`;
 $('cat').onchange=e=>{S.cat=e.target.value;save();shadow()};$('recOn').onchange=e=>{S.recOn=e.target.checked;save()};
 const mv=d=>{if(using){EP_SESSION.si=i+d;shadow()}else{S.sh.i[S.cat]=i+d;save();shadow()}};$('shp').onclick=()=>mv(-1);$('shn').onclick=()=>mv(1);
 document.querySelectorAll('.shrec').forEach(b=>b.onclick=()=>rec(b.dataset.t,b.parentElement,()=>{}))}
function badge(){$('streakBadge').textContent='🔥 '+streak()}
function go(t,opts){if(!opts||!opts.keepSession){window.EP_SESSION=null;if(window.DV)DV.once=null}document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));['learn','quiz','shadow','drive','progress'].forEach(x=>{$('tab-'+x).hidden=x!==t;if(x!==t&&x!=='quiz')$('tab-'+x).innerHTML=''});document.querySelectorAll('#tab-quiz select').forEach(e=>{if(t!=='quiz')e.removeAttribute('id')});
 if(t==='quiz'&&qi>=Q.length)Q=[];if(t==='learn')learn();if(t==='quiz')quiz();if(t==='progress')progress();if(t==='shadow')shadow();if(t==='drive')drive()}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>go(b.dataset.t));
learn();badge();
if('serviceWorker'in navigator){let rl=false;function tryReload(){if(rl)return;if(EPPlan.shouldDeferAppReload({driveOn:!!(window.DV&&DV.on),recording:!!window.EP_REC})){window.EP_UPDATE_READY=true;const n=document.getElementById('upd');if(n)n.hidden=false;return}rl=true;location.reload()}
 navigator.serviceWorker.addEventListener('controllerchange',tryReload);
 navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(r=>{r.update();document.addEventListener('visibilitychange',()=>{if(!document.hidden)r.update()})})}
