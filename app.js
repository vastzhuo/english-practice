const PER=4, EPOCH=new Date(2026,0,1);
const key=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=new Date(), TK=key(today);
let S=JSON.parse(localStorage.getItem('ep')||'{"days":{},"learned":[],"best":0}');
S.days=S.days||{};S.learned=S.learned||[];S.best=S.best||0;S.cat=S.cat||'All';
const save=()=>localStorage.setItem('ep',JSON.stringify(S));
const $=id=>document.getElementById(id), esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const CATS=['All',...new Set(WORDS.map(w=>w.c))];
const list=()=>S.cat==='All'?WORDS:WORDS.filter(w=>w.c===S.cat);
const dayN=Math.floor((new Date(today.getFullYear(),today.getMonth(),today.getDate())-EPOCH)/864e5);
function todays(){const L=list(),D=Math.ceil(L.length/PER),i=((dayN%D)+D)%D*PER;return L.slice(i,i+PER)}
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
function rec(t,btn){const box=document.createElement('div');box.className='fb';btn.closest('.card,div').after(box);
 const r=new SR();r.lang='en-AU';r.interimResults=false;r.maxAlternatives=3;box.textContent='🎤 Listening… say: '+t;
 r.onresult=e=>{const alts=[...e.results[0]].map(a=>a.transcript);const best=alts.map(a=>[score2(t,a),a]).sort((a,b)=>b[0]-a[0])[0];
  const miss=norm(t).filter(w=>!norm(best[1]).includes(w));
  box.innerHTML=`${best[0]>=85?'🌟 Excellent':best[0]>=65?'👍 Good':'🔁 Try again'} — <b>${best[0]}%</b><br>You said: “${esc(best[1])}”${miss.length?'<br>Check: '+esc(miss.join(', ')):''}`};
 r.onerror=e=>box.textContent='Mic error: '+e.error+' (allow microphone access in Chrome)';r.start()}
function card(w){return `<div class="card"><div class="word">${esc(w.w)} ${spk(w.w)}</div>${w.ipa?`<div class="ex"><small>${esc(w.ipa)}</small></div>`:''}<div class="mean">${esc(w.m)}</div><div class="ex">${esc(w.x)} ${spk(w.x)}</div>${w.x2?`<div class="ex">${esc(w.x2)} ${spk(w.x2)}</div>`:''}${w.n?`<div class="ex"><small>${esc(w.n)}</small></div>`:''}</div>`}
function picker(){return `<button class="btn alt" id="spd">${S.slow?'🐢 Slow':'🐇 Normal'}</button>${SR?'':'<p><small>🎤 Speaking practice needs Chrome on Android/desktop.</small></p>'}<select id="cat" class="sel">${CATS.map(c=>`<option ${c===S.cat?'selected':''}>${esc(c)}</option>`).join('')}</select>`}
let browse=false;
function learn(){const L=list();$('tab-learn').innerHTML=picker()+`<p><small>${today.toDateString()} · ${S.cat} · ${L.length} items</small></p>`+
 (browse?L.map(card).join(''):todays().map(card).join('')+`<button class="btn" onclick="go('quiz')">Take today's quiz →</button>`)+
 `<button class="btn alt" onclick="browse=!browse;learn()">${browse?'Show today only':'Browse all in this category'}</button>`;
 $('cat').onchange=e=>{S.cat=e.target.value;save();Q=[];learn()}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b)say(b.dataset.say);const r=e.target.closest('[data-rec]');if(r)rec(r.dataset.rec,r);if(e.target.id==='spd'){S.slow=!S.slow;save();e.target.textContent=S.slow?'🐢 Slow':'🐇 Normal'}});
function pool(){const L=list(),t=todays(),past=L.filter(w=>S.learned.includes(w.w));return [...t,...shuf(past).slice(0,2),...shuf(L)].filter((w,i,a)=>a.indexOf(w)===i).slice(0,5)}
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
function quizStart(){Q=pool().map(makeQ);qi=0;score=0;quiz()}
function quiz(){const el=$('tab-quiz');if(!Q.length){el.innerHTML=picker()+`<div class="card"><h2>Daily quiz</h2><p>5 questions: meaning, fill-in-the-blank and listening.</p>${S.days[TK]?'<p>✅ Already done today — practise again anytime!</p>':''}<button class="btn" onclick="quizStart()">Start quiz</button></div>`;$('cat').onchange=e=>{S.cat=e.target.value;save();quiz()};return}
 if(qi>=Q.length){finish();el.innerHTML=`<div class="card"><h2>🎉 ${score}/${Q.length}</h2><p>${score>=4?'Excellent!':score>=3?'Good job!':'Keep practising!'} Streak: 🔥 ${streak()}</p><button class="btn" onclick="quizStart()">Try again</button><button class="btn" onclick="go('progress')">See progress</button></div>`;return}
 const q=Q[qi];el.innerHTML=`<div class="card"><small>Question ${qi+1} of ${Q.length}</small><p>${q.q}</p>${q.listen?`<button class="btn" data-say="${esc(q.listen)}">🔊 Play again</button>`:''}${q.opts.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join('')}<div class="fb" id="fb"></div></div>`;
 if(q.listen)setTimeout(()=>say(q.listen),200);
 el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{el.querySelectorAll('.opt').forEach(x=>{x.disabled=true;if(x.textContent===q.a)x.classList.add('ok')});
  const ok=b.textContent===q.a;if(ok)score++;else b.classList.add('bad');
  $('fb').innerHTML=(ok?'✅ Correct!':'❌ Answer: '+esc(q.a))+'<button class="btn" id="next">Next →</button>';$('next').onclick=()=>{qi++;quiz()}})}
function finish(){S.days[TK]=Math.max(S.days[TK]||0,score||1);todays().forEach(w=>{if(!S.learned.includes(w.w))S.learned.push(w.w)});S.best=Math.max(S.best,streak());save();badge()}
function progress(){const y=today.getFullYear(),m=today.getMonth(),first=new Date(y,m,1).getDay(),n=new Date(y,m+1,0).getDate();
 let cal='SMTWTFS'.split('').map(c=>`<div><b>${c}</b></div>`).join('')+'<div></div>'.repeat(first);
 for(let d=1;d<=n;d++){const k=key(new Date(y,m,d));cal+=`<div class="${S.days[k]?'p':'d'} ${k===TK?'t':''}">${d}</div>`}
 const per=CATS.slice(1).map(c=>{const L=WORDS.filter(w=>w.c===c);return `<div>${esc(c)}: ${L.filter(w=>S.learned.includes(w.w)).length}/${L.length}</div>`}).join('');
 $('tab-progress').innerHTML=`<div class="stats"><div class="stat"><b>🔥 ${streak()}</b>Current streak</div><div class="stat"><b>🏆 ${Math.max(S.best,streak())}</b>Best streak</div>
 <div class="stat"><b>${Object.keys(S.days).length}</b>Days practised</div><div class="stat"><b>${S.learned.length}</b>Words learned</div></div>
 <div class="card" style="margin-top:14px"><h3>${today.toLocaleString('en',{month:'long',year:'numeric'})}</h3><div class="cal">${cal}</div></div><div class="card"><h3>By category</h3>${per}</div>`}
function badge(){$('streakBadge').textContent='🔥 '+streak()}
function go(t){document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));['learn','quiz','progress'].forEach(x=>$('tab-'+x).hidden=x!==t);
 if(t==='quiz'&&qi>=Q.length)Q=[];if(t==='learn')learn();if(t==='quiz')quiz();if(t==='progress')progress()}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>go(b.dataset.t));
learn();badge();quiz();
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
