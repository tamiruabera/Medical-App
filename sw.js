const CACHE_NAME = 'medical-app-ethio-anc-v2-cache-05';
const BASE_PATH = '/Medical-App/';
const OFFLINE_URL = BASE_PATH + 'offline.html';
const CORE_ASSETS = [BASE_PATH, BASE_PATH+'index.html', BASE_PATH+'manifest.json', BASE_PATH+'offline.html', BASE_PATH+'icons/icon-192x192.png', BASE_PATH+'icons/icon-512x512.png', BASE_PATH+'icons/maskable-512x512.png', BASE_PATH+'screenshots/screenshot-mobile.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE_ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => { const r=e.request; if(r.method!=='GET') return; if(r.mode==='navigate'){ e.respondWith(fetch(r).catch(()=>caches.match(BASE_PATH+'index.html').then(x=>x||caches.match(OFFLINE_URL)))); return;} e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{ if(res&&res.status===200)caches.open(CACHE_NAME).then(cache=>cache.put(r,res.clone())); return res;}).catch(()=>c))); });
