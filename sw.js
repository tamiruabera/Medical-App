const CACHE_NAME = 'medical-app-ethio-anc-v2-cache-03';
const BASE_PATH = '/Medical-App/';
const OFFLINE_URL = BASE_PATH + 'offline.html';
const CORE_ASSETS = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'offline.html',
  BASE_PATH + 'icons/favicon-32x32.png',
  BASE_PATH + 'icons/apple-touch-icon.png',
  BASE_PATH + 'icons/icon-192x192.png',
  BASE_PATH + 'icons/icon-512x512.png',
  BASE_PATH + 'icons/maskable-192x192.png',
  BASE_PATH + 'icons/maskable-512x512.png',
  BASE_PATH + 'screenshots/screenshot-mobile.png',
  BASE_PATH + 'screenshots/screenshot-wide.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(BASE_PATH + 'index.html', copy));
        return response;
      }).catch(() => caches.match(BASE_PATH + 'index.html').then(response => response || caches.match(OFFLINE_URL)))
    );
    return;
  }
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(response => {
      if (response && response.status === 200) {
        caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
      }
      return response;
    }).catch(() => cached))
  );
});
