const C='ep-v45',F=['./','index.html','app.js?v=45','drive.js?v=45','voice-check.js?v=45','words.js?v=45','synonyms.js?v=45','pte.js?v=45','pte-rs.js?v=45','pte-read.js?v=45','pte-logic.js?v=45','pte-we.js?v=45','pte-sst.js?v=45','pte-ra.js?v=45','pte-di.js?v=45','pte-swt.js?v=45','study-plan.js?v=45','pte-spelling.js?v=45','pte-app.js?v=45','pte-we-ui.js?v=45','pte-sst-ui.js?v=45','pte-speak-ui.js?v=45','study-ui.js?v=45','grammar.js?v=45','grammar-ui.js?v=45','style.css?v=45','manifest.json','icon-192.png','icon-512.png','icon-180.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting()});
// Audio and byte-range requests are network-only. An <audio> element asks for
// ranges, the server answers 206 Partial Content, and Cache.put() rejects a 206
// (the old code left that rejection unhandled). A cache fallback could then hand
// the player a truncated body, which is a silent dead player, so never cache or
// match media; offline gets an explicit 504 instead of a broken response.
const MEDIA=/\.(?:mp3|m4a|aac|wav|ogg|oga|opus|flac|mp4|m4v|webm|mov)(?:$|[?#])/i;
const offline=()=>new Response('',{status:504,statusText:'Offline'});
function remember(event,request,response){
  let putting;
  try{
    const copy=response.clone();
    putting=caches.open(C).then(c=>c.put(request,copy)).catch(()=>{});
  }catch(err){putting=Promise.resolve()}
  if(event.waitUntil){try{event.waitUntil(putting)}catch(err){}}
}
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(!req||req.method!=='GET')return;
  let url='';
  try{url=String(req.url||'')}catch(err){}
  const ranged=!!(req.headers&&typeof req.headers.get==='function'&&req.headers.get('range'));
  if(ranged||MEDIA.test(url)){
    e.respondWith(fetch(req).then(r=>r||offline()).catch(()=>offline()));
    return;
  }
  e.respondWith(fetch(req,{cache:'no-cache'}).then(r=>{
    // Only a complete 200 is cacheable; 206 and any non-ok response go straight back.
    if(r&&r.ok&&r.status===200)remember(e,req,r);
    return r;
  }).catch(()=>caches.match(req).then(hit=>hit||offline())));
});
