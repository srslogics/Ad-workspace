const CACHE='srs-ads-demo-v8';
const FILES=['./','./index.html','./style.css','./validation.js','./accessibility.js','./app.js','./login.js','./premium.js','./connections.js','./operations.js','./icon-192.png','./icon-512.png','./icon.svg','./manifest.webmanifest'];
const paths=new Set(FILES.map(f=>new URL(f,self.location.href).pathname));
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('srs-ads-demo-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(e.request.method!=='GET'||u.origin!==self.location.origin||!paths.has(u.pathname)||u.search)return;
 e.respondWith(fetch(e.request).then(r=>{if(r.ok&&r.type==='basic'){const copy=r.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,copy)))}return r}).catch(()=>caches.match(e.request).then(r=>r||(e.request.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
