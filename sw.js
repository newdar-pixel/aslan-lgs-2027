self.addEventListener('install', e => self.skipWaiting());

self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.open('aslan-v2').then(c =>
      c.match(e.request).then(r => r || fetch(e.request))
    )
  );
});
