const PER=2, DAYS=WORDS.length/PER, EPOCH=new Date(2026,0,1);
const key=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=new Date(), TK=key(today);
const dayIdx=d=>((Math.floor((new Date(d.getFullYear(),d.getMonth(),d.getDate())-EPOCH)/864e5)%DAYS)+DAYS)%DAYS;
const todays=()=>{const i=dayIdx(today)*PER;return WORDS.slice(i,i+PER)};
let S=JSON.parse(localStorage.getItem('ep')||'{"days":{},"learned":[],"best":0}');
const save=()=>localStorage.setItem('ep',JSON.stringify(S));
const $=id=>document.getElementById(id), esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function streak(){let n=0,d=new Date(today);if(!S.days[key(d)])d.setDate(d.getDate()-1);while(S.days[key(d)]){n++;d.setDate(d.getDate()-1)}return n}
function learn(){$('tab-learn').innerHTML=`<p><small>${today.toDateString()} · Day ${dayIdx(today)+1} of ${DAYS}</small></p>`+
 todays().map(w=>`<div class="card"><div class="word">${esc(w[0])}</div><div class="mean">${esc(w[1])}</div><div class="ex">${esc(w[2])}</div><div class="ex">${esc(w[3])}</div></div>`).join('')+
 `<button class="btn" onclick="go('quiz')">Take today's quiz →</button>`}
const shuf=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
function pool(){const i=dayIdx(today)*PER, past=WORDS.slice(Math.max(0,i-20),i), learned=WORDS.filter(w=>S.learned.includes(w[0]));
 return [...todays(),...todays(),...shuf([...new Set([...past,...learned])]).slice(0,3)].concat(shuf(WORDS)).slice(0,5)}
function makeQ(w,k){const blankable=[w[2],w[3]].find(s=>s.toLowerCase().includes(w[0].toLowerCase().split(' ')[0]));
 const others=shuf(WORDS.filter(x=>x!==w)).slice(0,3);
 if(k%3===1&&blankable){const re=new RegExp(w[0].split(' ')[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\w*','i');
  return {q:'Fill in the blank (choose):<br><b>'+esc(blankable.replace(re,'_____'))+'</b>',opts:shuf([w,...others]).map(x=>x[0]),a:w[0]}}
 if(k%3===2)return {q:`What does <b>“${esc(w[0])}”</b> mean?`,opts:shuf([w,...others]).map(x=>x[1]),a:w[1]};
 return {q:`Which word/phrase means: <b>${esc(w[1])}</b>?`,opts:shuf([w,...others]).map(x=>x[0]),a:w[0]}}
let Q=[],qi=0,score=0;
function quizStart(){Q=pool().map(makeQ);qi=0;score=0;quiz()}
function quiz(){const el=$('tab-quiz');if(!Q.length){el.innerHTML=`<div class="card"><h2>Daily quiz</h2><p>5 quick questions from today's and past words.</p>${S.days[TK]?'<p>✅ Already done today — practise again anytime!</p>':''}<button class="btn" id="start" onclick="quizStart()">Start quiz</button></div>`;return}
 if(qi>=Q.length){finish();el.innerHTML=`<div class="card"><h2>🎉 ${score}/5</h2><p>${score>=4?'Excellent!':score>=3?'Good job!':'Keep practising!'} Streak: 🔥 ${streak()}</p><button class="btn" onclick="quizStart()">Try again</button><button class="btn" onclick="go('progress')">See progress</button></div>`;return}
 const q=Q[qi];el.innerHTML=`<div class="card"><small>Question ${qi+1} of 5</small><p>${q.q}</p>${q.opts.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join('')}<div class="fb" id="fb"></div></div>`;
 el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{el.querySelectorAll('.opt').forEach(x=>{x.disabled=true;if(x.textContent===q.a)x.classList.add('ok')});
  const ok=b.textContent===q.a;if(ok)score++;else b.classList.add('bad');
  $('fb').innerHTML=(ok?'✅ Correct!':'❌ Answer: '+esc(q.a))+'<button class="btn" id="next">Next →</button>';$('next').onclick=()=>{qi++;quiz()}})}
function finish(){S.days[TK]=Math.max(S.days[TK]||0,score||1);todays().forEach(w=>{if(!S.learned.includes(w[0]))S.learned.push(w[0])});S.best=Math.max(S.best,streak());save();badge()}
function progress(){const y=today.getFullYear(),m=today.getMonth(),first=new Date(y,m,1).getDay(),n=new Date(y,m+1,0).getDate();
 let cal='SMTWTFS'.split('').map(c=>`<div><b>${c}</b></div>`).join('')+'<div></div>'.repeat(first);
 for(let d=1;d<=n;d++){const k=key(new Date(y,m,d));cal+=`<div class="${S.days[k]?'p':'d'} ${k===TK?'t':''}">${d}</div>`}
 $('tab-progress').innerHTML=`<div class="stats"><div class="stat"><b>🔥 ${streak()}</b>Current streak</div><div class="stat"><b>🏆 ${Math.max(S.best,streak())}</b>Best streak</div>
 <div class="stat"><b>${Object.keys(S.days).length}</b>Days practised</div><div class="stat"><b>${S.learned.length}</b>Words learned</div></div>
 <div class="card" style="margin-top:14px"><h3>${today.toLocaleString('en',{month:'long',year:'numeric'})}</h3><div class="cal">${cal}</div></div>`}
function badge(){$('streakBadge').textContent='🔥 '+streak()}
function go(t){document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));['learn','quiz','progress'].forEach(x=>$('tab-'+x).hidden=x!==t);
 if(t==='quiz'&&qi>=Q.length)Q=[];if(t==='quiz')quiz();if(t==='progress')progress()}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>go(b.dataset.t));
learn();badge();quiz();
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
