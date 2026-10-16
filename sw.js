const CACHE_NAME = 'emodul-ctl-v1';
const APP_SHELL = [
  './', './index.html', './manifest.json',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('emodul-ctl-') && k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  const isPdf = url.pathname.toLowerCase().endsWith('/modul.pdf') || url.pathname.toLowerCase().endsWith('modul.pdf');
  if (isPdf) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req) || await cache.match(new URL('./modul.pdf', self.registration.scope).href);
      if (cached) return cached;
      const response = await fetch(req);
      if (response.ok && response.type === 'basic') await cache.put(new URL('./modul.pdf', self.registration.scope).href, response.clone());
      return response;
    })());
    return;
  }
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try { const response = await fetch(req); if (response.ok) cache.put('./index.html', response.clone()); return response; }
      catch { return (await cache.match(req)) || (await cache.match('./index.html')) || (await cache.match('./')); }
    })());
    return;
  }
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    return (await cache.match(req)) || fetch(req);
  })());
});
