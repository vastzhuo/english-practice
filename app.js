const EPOCH=new Date(2026,0,1);
const key=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=new Date(), TK=key(today);
let S=JSON.parse(localStorage.getItem('ep')||'{"days":{},"learned":[],"best":0}');
S.days=S.days||{};S.learned=S.learned||[];S.best=S.best||0;S.cat=S.cat||'All';S.goal=S.goal||50;S.qlen=S.qlen||20;S.lt=S.lt||{};S.sh=S.sh||{i:{},h:{}};
const save=()=>localStorage.setItem('ep',JSON.stringify(S));
const $=id=>document.getElementById(id), esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const CATS=['All',...new Set(WORDS.map(w=>w.c))];
const list=()=>S.cat==='All'?WORDS:WORDS.filter(w=>w.c===S.cat);
const dayN=Math.floor((new Date(today.getFullYear(),today.getMonth(),today.getDate())-EPOCH)/864e5);
function todays(){const k=TK+'|'+S.cat+'|'+S.goal;if(!S.plan||S.plan.k!==k){const L=list(),lt=S.lt[TK]||[];let n=L.filter(w=>!S.learned.includes(w.w)||lt.includes(w.w));if(n.length<S.goal)n=n.concat(shuf(L.filter(w=>!n.includes(w))));S.plan={k,items:n.slice(0,S.goal).map(w=>w.w)};save()}
 const L=list();return S.plan.items.map(t=>L.find(w=>w.w===t)).filter(Boolean)}
const doneToday=()=>(S.lt[TK]||[]).length;
function markLearned(t){S.lt[TK]=S.lt[TK]||[];if(!S.lt[TK].includes(t))S.lt[TK].push(t);if(!S.learned.includes(t))S.learned.push(t);if(doneToday()>=S.goal)S.days[TK]=Math.max(S.days[TK]||0,1);S.best=Math.max(S.best,streak());save();badge()}
let page=0;const PG=10;
const shuf=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
function streak(){let n=0,d=new Date(today);if(!S.days[key(d)])d.setDate(d.getDate()-1);while(S.days[key(d)]){n++;d.setDate(d.getDate()-1)}return n}
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
function rec(t,host,cb){let box=host.nextElementSibling;if(!box||!box.classList.contains('pron')){box=document.createElement('div');box.className='fb pron';host.after(box)}
 if(!SR){box.textContent='🎤 Speech recognition is not supported here — use Chrome on Android.';return}
 let mr=null,chunks=[],url=null,stream=null;box.innerHTML='🎤 Listening… say: <b>'+esc(t)+'</b>';
 const startRec=()=>navigator.mediaDevices&&window.MediaRecorder?navigator.mediaDevices.getUserMedia({audio:true}).then(st=>{stream=st;mr=new MediaRecorder(st);mr.ondataavailable=e=>chunks.push(e.data);mr.onstop=()=>{url=URL.createObjectURL(new Blob(chunks,{type:mr.mimeType}));st.getTracks().forEach(x=>x.stop());const b=box.querySelector('.mine');if(b)b.disabled=false};mr.start()}).catch(()=>{}):Promise.resolve();
 const stop=()=>{if(mr&&mr.state==='recording')mr.stop();else if(stream)stream.getTracks().forEach(x=>x.stop())};
 startRec().then(()=>{const r=new SR();r.lang='en-AU';r.interimResults=false;r.maxAlternatives=3;
 r.onresult=e=>{const alts=[...e.results[0]].map(a=>({t:a.transcript,c:a.confidence}));const best=alts.map(a=>[score2(t,a.t),a]).sort((x,y)=>y[0]-x[0])[0];const sc=best[0],conf=Math.round((best[1].c||e.results[0][0].confidence||0)*100);
  const words=align(norm(t),norm(best[1].t)).map(x=>x[0]==='ok'?`<span class="wok">${esc(x[1])}</span>`:x[0]==='miss'?`<span class="wmiss" title="missed">${esc(x[1])}</span>`:x[0]==='bad'?`<span class="wbad" title="you said: ${esc(x[2])}">${esc(x[1])} <s>${esc(x[2])}</s></span>`:`<span class="wextra">+${esc(x[1])}</span>`).join(' ');
  box.innerHTML=`<div class="score">${sc>=85?'🌟':sc>=65?'👍':'🔁'} <b>${sc}/100</b> <small>confidence ${conf}%</small></div><div class="words">${words}</div><small>You said: “${esc(best[1].t)}”</small><br>
   <button class="btn alt half" data-say="${esc(t)}">▶ Original</button><button class="btn alt half mine" ${url?'':'disabled'}>▶ My recording</button><button class="btn alt again">🔁 Try again</button>`;
  box.querySelector('.mine').onclick=()=>url&&new Audio(url).play();box.querySelector('.again').onclick=()=>rec(t,host,cb);
  S.sh.h[t]=(S.sh.h[t]||[]).concat(sc).slice(-10);save();cb&&cb(sc)};
 r.onerror=e=>{box.textContent='Mic error: '+e.error+' (allow microphone access in Chrome)';stop()};r.onend=()=>setTimeout(stop,300);r.start()})}
function card(w){return `<div class="card"><div class="word">${esc(w.w)} ${spk(w.w)}</div>${w.ipa?`<div class="ex"><small>${esc(w.ipa)}</small></div>`:''}<div class="mean">${esc(w.m)}</div><div class="ex">${esc(w.x)} ${spk(w.x)}</div>${w.x2?`<div class="ex">${esc(w.x2)} ${spk(w.x2)}</div>`:''}${w.n?`<div class="ex"><small>${esc(w.n)}</small></div>`:''}</div>`}
function picker(){return `<button class="btn alt" id="spd">${S.slow?'🐢 Slow':'🐇 Normal'}</button>${SR?'':'<p><small>🎤 Speaking practice needs Chrome on Android/desktop.</small></p>'}<select id="cat" class="sel">${CATS.map(c=>`<option ${c===S.cat?'selected':''}>${esc(c)}</option>`).join('')}</select>`}
let browse=false;
function learn(){const L=list(),T=browse?L:todays(),pages=Math.max(1,Math.ceil(T.length/PG));page=Math.min(page,pages-1);const lt=S.lt[TK]||[],d=T.filter(w=>lt.includes(w.w)).length;
 const opt=(id,v,a)=>`<select id="${id}" class="sel half">${a.map(x=>`<option value="${x}" ${x==v?'selected':''}>${id==='goal'?'Daily goal: ':'Quiz: '}${x}</option>`).join('')}</select>`;
 $('tab-learn').innerHTML=picker()+opt('goal',S.goal,[20,50,75,100])+opt('qlen',S.qlen,[10,20,50])+
 `<div class="card"><b>Today: ${doneToday()}/${S.goal}</b> ${doneToday()>=S.goal?'🎉 Goal reached!':''}<div class="bar"><i style="width:${Math.min(100,doneToday()/S.goal*100)}%"></i></div><small>${S.cat} · ${L.length} items · ${browse?'browsing all':'this list '+d+'/'+T.length}</small></div>`+
 T.slice(page*PG,page*PG+PG).map(w=>card(w).replace(/<\/div>$/,`<button class="btn ${lt.includes(w.w)?'done':'alt'}" data-learn="${esc(w.w)}">${lt.includes(w.w)?'✓ Learned':'Mark as learned'}</button></div>`)).join('')+
 `<div class="pager"><button class="btn alt" id="prev" ${page?'':'disabled'}>← Prev</button><span>Page ${page+1}/${pages}</span><button class="btn alt" id="nxt" ${page<pages-1?'':'disabled'}>Next →</button></div>`+
 `<button class="btn alt" id="all10">Mark this page learned</button><button class="btn" onclick="go('quiz')">Take today's quiz →</button>`+
 `<button class="btn alt" onclick="browse=!browse;page=0;learn()">${browse?"Back to today's list":'Browse all in this category'}</button>`;
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
function quizStart(){Q=shuf(pool()).map(makeQ);qi=0;score=0;quiz()}
function quiz(){const el=$('tab-quiz');if(!Q.length){el.innerHTML=picker()+`<div class="card"><h2>Daily quiz</h2><p>${S.qlen} questions: meaning, fill-in-the-blank and listening.</p>${S.days[TK]?'<p>✅ Already done today — practise again anytime!</p>':''}<button class="btn" onclick="quizStart()">Start quiz</button></div>`;$('cat').onchange=e=>{S.cat=e.target.value;save();quiz()};return}
 if(qi>=Q.length){finish();el.innerHTML=`<div class="card"><h2>🎉 ${score}/${Q.length}</h2><p>${score>=.8*Q.length?'Excellent!':score>=.6*Q.length?'Good job!':'Keep practising!'} Streak: 🔥 ${streak()}</p><button class="btn" onclick="quizStart()">Try again</button><button class="btn" onclick="go('progress')">See progress</button></div>`;return}
 const q=Q[qi];el.innerHTML=`<div class="card"><small>Question ${qi+1} of ${Q.length}</small><p>${q.q}</p>${q.listen?`<button class="btn" data-say="${esc(q.listen)}">🔊 Play again</button>`:''}${q.opts.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join('')}<div class="fb" id="fb"></div></div>`;
 if(q.listen)setTimeout(()=>say(q.listen),200);
 el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{el.querySelectorAll('.opt').forEach(x=>{x.disabled=true;if(x.textContent===q.a)x.classList.add('ok')});
  const ok=b.textContent===q.a;if(ok)score++;else b.classList.add('bad');
  $('fb').innerHTML=(ok?'✅ Correct!':'❌ Answer: '+esc(q.a))+'<button class="btn" id="next">Next →</button>';$('next').onclick=()=>{qi++;quiz()}})}
function finish(){S.days[TK]=Math.max(S.days[TK]||0,score||1);S.best=Math.max(S.best,streak());save();badge()}
function progress(){const y=today.getFullYear(),m=today.getMonth(),first=new Date(y,m,1).getDay(),n=new Date(y,m+1,0).getDate();
 let cal='SMTWTFS'.split('').map(c=>`<div><b>${c}</b></div>`).join('')+'<div></div>'.repeat(first);
 for(let d=1;d<=n;d++){const k=key(new Date(y,m,d));cal+=`<div class="${S.days[k]?'p':'d'} ${k===TK?'t':''}">${d}</div>`}
 const per=CATS.slice(1).map(c=>{const L=WORDS.filter(w=>w.c===c);return `<div>${esc(c)}: ${L.filter(w=>S.learned.includes(w.w)).length}/${L.length}</div>`}).join('');
 $('tab-progress').innerHTML=`<div class="stats"><div class="stat"><b>🔥 ${streak()}</b>Current streak</div><div class="stat"><b>🏆 ${Math.max(S.best,streak())}</b>Best streak</div>
 <div class="stat"><b>${Object.keys(S.days).length}</b>Days practised</div><div class="stat"><b>${S.learned.length}</b>Words learned</div></div>
 <div class="card" style="margin-top:14px"><h3>${today.toLocaleString('en',{month:'long',year:'numeric'})}</h3><div class="cal">${cal}</div></div><div class="card"><h3>By category</h3>${per}</div>`}
function shadow(){const L=list(),i=Math.min(S.sh.i[S.cat]||0,L.length-1),w=L[i];const hist=t=>{const h=S.sh.h[t]||[];return h.length?`<small>History: ${h.join(', ')} · best ${Math.max(...h)}</small>`:'<small>No attempts yet</small>'};
 const tg=(t,lab)=>`<div class="card"><small>${lab}</small><div class="word">${esc(t)}</div>${hist(t)}<div><button class="btn alt half" data-say="${esc(t)}">🔊 Listen</button><button class="btn half shrec" data-t="${esc(t)}">🎤 Repeat</button></div></div>`;
 const sc=L.map(x=>S.sh.h[x.w]).filter(Boolean).map(h=>h[h.length-1]);
 $('tab-shadow').innerHTML=picker()+`<div class="card"><b>Shadowing ${i+1}/${L.length}</b> · ${esc(S.cat)}<br><small>Practised ${sc.length} items · avg ${sc.length?Math.round(sc.reduce((a,b)=>a+b)/sc.length):0}/100</small>${SR?'':'<p>⚠️ Speech recognition not supported in this browser — you can still listen. Use Chrome on Android to score.</p>'}</div>`+
  tg(w.w,'Word / phrase · '+esc(w.m))+(w.x&&w.x!==w.w?tg(w.x,'Sentence'):'')+
  `<div class="pager"><button class="btn alt" id="shp" ${i?'':'disabled'}>← Prev</button><button class="btn alt" id="shn" ${i<L.length-1?'':'disabled'}>Next →</button></div>`;
 $('cat').onchange=e=>{S.cat=e.target.value;save();shadow()};
 const mv=d=>{S.sh.i[S.cat]=i+d;save();shadow()};$('shp').onclick=()=>mv(-1);$('shn').onclick=()=>mv(1);
 document.querySelectorAll('.shrec').forEach(b=>b.onclick=()=>rec(b.dataset.t,b.parentElement,()=>{}))}
function badge(){$('streakBadge').textContent='🔥 '+streak()}
function go(t){document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));['learn','quiz','shadow','progress'].forEach(x=>$('tab-'+x).hidden=x!==t);
 if(t==='quiz'&&qi>=Q.length)Q=[];if(t==='learn')learn();if(t==='quiz')quiz();if(t==='progress')progress();if(t==='shadow')shadow()}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>go(b.dataset.t));
learn();badge();quiz();
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
