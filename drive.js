// 🚗 Drive mode: hands-free audio loop
S.dv=Object.assign({gap:5,rate:1,rep:1,order:'seq',wr:false},S.dv||{});
const DV={on:false,tok:0,i:0,L:[],lock:null,au:null,cur:''};
let zhVoice=null;function pickZh(){const v=speechSynthesis.getVoices();zhVoice=v.find(x=>/zh[-_]CN/i.test(x.lang))||v.find(x=>/^zh/i.test(x.lang))||null}
if('speechSynthesis'in window){pickZh();speechSynthesis.addEventListener&&speechSynthesis.addEventListener('voiceschanged',pickZh)}
const zhOf=w=>{let m=String(w.m);if(m.includes(' — '))m=m.split(' — ')[0];return m.replace(/\b(n|v|vt|vi|adj|adv|prep|conj|pron|a|abbr|num)\.\s*/g,'').replace(/【[^】]*】/g,'').trim()};
function dvSay(t,zh,tok){return new Promise(res=>{if(tok!==DV.tok||!t)return res();const u=new SpeechSynthesisUtterance(t);if(zh){u.lang='zh-CN';if(zhVoice)u.voice=zhVoice}else{u.lang=voice?voice.lang:'en-AU';if(voice)u.voice=voice}u.rate=(zh?1:S.dv.rate)*(S.slow?.75:1);let done=false;const f=()=>{if(!done){done=true;res()}};u.onend=f;u.onerror=f;setTimeout(f,4000+t.length*180/u.rate);speechSynthesis.speak(u)})}
const dvWait=(ms,tok)=>new Promise(r=>{const s=Date.now();const k=()=>tok!==DV.tok||Date.now()-s>=ms?r():setTimeout(k,100);k()});
function dvList(){let L=list();if(S.dv.wr&&!L.some(w=>w.t))L=L.concat(WORDS.filter(w=>w.t));if(S.dv.order==='new')L=L.filter(w=>!S.learned.includes(w.w));if(S.dv.order==='rand')L=shuf(L.slice());return L.length?L:list()}
async function dvRun(){const tok=++DV.tok;speechSynthesis.cancel();
 while(DV.on&&tok===DV.tok){const w=DV.L[DV.i];if(!w)break;dvShow();
  for(let r=0;r<S.dv.rep&&tok===DV.tok;r++){
   await dvSay(w.w.replace(/ = /g,', '),false,tok);await dvWait(w.t?S.dv.gap*1000:2000,tok);
   if(!w.t&&w.x&&w.x!==w.w&&!/^Listen for /.test(w.x)){await dvSay(w.x,false,tok);await dvWait(S.dv.gap*1000,tok)}
   await dvSay(zhOf(w),true,tok);await dvWait(1200,tok)}
  if(tok!==DV.tok)return;DV.i=(DV.i+1)%DV.L.length;S.dv.pos=DV.i;save()}}
function dvSilent(){if(DV.au)return DV.au;const sr=8000,n=sr*2,b=new ArrayBuffer(44+n*2),v=new DataView(b),ws=(o,s)=>[...s].forEach((c,i)=>v.setUint8(o+i,c.charCodeAt(0)));ws(0,'RIFF');v.setUint32(4,36+n*2,true);ws(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);ws(36,'data');v.setUint32(40,n*2,true);
 const a=new Audio(URL.createObjectURL(new Blob([b],{type:'audio/wav'})));a.loop=true;a.volume=0.01;DV.au=a;return a}
async function dvLock(){try{if('wakeLock'in navigator&&!DV.lock){DV.lock=await navigator.wakeLock.request('screen');DV.lock.addEventListener('release',()=>DV.lock=null)}}catch(e){}}
document.addEventListener('visibilitychange',()=>{if(DV.on&&document.visibilityState==='visible')dvLock()});
function dvMS(){if(!('mediaSession'in navigator))return;const w=DV.L[DV.i];try{navigator.mediaSession.metadata=new MediaMetadata({title:w?w.w:'Daily English',artist:w?zhOf(w):'',album:'🚗 开车模式'});navigator.mediaSession.playbackState=DV.on?'playing':'paused';
 const h={play:()=>dvPlay(true),pause:()=>dvPlay(false),stop:()=>dvPlay(false),nexttrack:()=>dvMove(1),previoustrack:()=>dvMove(-1),seekforward:()=>dvMove(1),seekbackward:()=>dvMove(-1)};for(const k in h){try{navigator.mediaSession.setActionHandler(k,h[k])}catch(e){}}}catch(e){}}
function dvPlay(on){if(on&&window.pteStop)window.pteStop();if(on&&window.studyStop)window.studyStop();DV.on=on;if(on){if(!DV.L.length)DV.L=dvList();dvSilent().play().catch(()=>{});dvLock();dvRun()}else{DV.tok++;speechSynthesis.cancel();DV.au&&DV.au.pause();if(DV.lock){DV.lock.release().catch(()=>{});DV.lock=null}}dvShow()}
function dvMove(d){DV.i=(DV.i+d+DV.L.length)%DV.L.length;S.dv.pos=DV.i;save();if(DV.on)dvRun();else dvShow()}
function dvRepeat(){if(DV.on)dvRun();else dvPlay(true)}
function dvShow(){const w=DV.L[DV.i];dvMS();const e=document.getElementById('dvnow');if(!e)return;e.innerHTML=w?`<div class="dvw">${esc(w.w)}</div><div class="dvm">${esc(zhOf(w))}</div><small>${DV.i+1}/${DV.L.length}</small>`:'';const p=document.getElementById('dvplay');if(p)p.textContent=DV.on?'⏸ 暂停':'▶ 播放'}
function drive(){const el=$('tab-drive');DV.L=dvList();DV.i=Math.min(S.dv.pos||0,DV.L.length-1);if(S.dv.k!==S.cat+S.dv.order){DV.i=0;S.dv.k=S.cat+S.dv.order;save()}
 const sel=(id,v,a)=>`<select id="${id}" class="sel half">${a.map(([x,l])=>`<option value="${x}" ${x==v?'selected':''}>${l}</option>`).join('')}</select>`;
 el.innerHTML=`<div class="dvwarn">⚠️ 请先设置好再开车，开车时不要看屏幕</div>`+picker()+
 sel('dvgap',S.dv.gap,[[3,'跟读停顿 3秒'],[5,'跟读停顿 5秒'],[8,'跟读停顿 8秒']])+sel('dvrate',S.dv.rate,[[0.8,'语速 慢'],[1,'语速 正常'],[1.2,'语速 快']])+
 sel('dvrep',S.dv.rep,[[1,'每个 1遍'],[2,'每个 2遍'],[3,'每个 3遍']])+sel('dvord',S.dv.order,[['seq','顺序播放'],['rand','随机播放'],['new','只播未学']])+
 `<label class="dvchk"><input type="checkbox" id="dvwr" ${S.dv.wr?'checked':''}> 加入写作句型（整句）</label>
 <div id="dvnow" class="dvnow"></div>
 <div class="dvbtns"><button class="dvb" id="dvprev">⏮ 上一个</button><button class="dvb big" id="dvplay">▶ 播放</button><button class="dvb" id="dvnext">⏭ 下一个</button><button class="dvb" id="dvrpt">🔁 重复</button></div>
 <p class="dvtip">流程：英文单词 → 停2秒 → 英文例句 → 停顿让你跟读 → 中文意思 → 下一个。支持蓝牙/方向盘播放、暂停、上一曲、下一曲按键。</p>`;
 const rs=()=>{DV.L=dvList();DV.i=0;S.dv.pos=0;save();if(DV.on)dvRun();else dvShow()};
 $('cat').onchange=e=>{S.cat=e.target.value;save();const on=DV.on;drive();if(on)dvRun()};
 $('dvgap').onchange=e=>{S.dv.gap=+e.target.value;save()};$('dvrate').onchange=e=>{S.dv.rate=+e.target.value;save()};$('dvrep').onchange=e=>{S.dv.rep=+e.target.value;save()};
 $('dvord').onchange=e=>{S.dv.order=e.target.value;rs()};$('dvwr').onchange=e=>{S.dv.wr=e.target.checked;rs()};
 $('dvplay').onclick=()=>dvPlay(!DV.on);$('dvprev').onclick=()=>dvMove(-1);$('dvnext').onclick=()=>dvMove(1);$('dvrpt').onclick=dvRepeat;
 const sp=$('spd');if(sp)sp.onclick=()=>{S.slow=!S.slow;save();drive()};dvShow()}
