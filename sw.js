// Generated at build time (vite.config.ts). Caches only this site's own files.
const CACHE = 'nexus-finance-35ae97526683';
const FILES = ["./","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-CeUF1xqS.js","assets/libsodium-wrappers-mu8b5qCt.js","assets/index-CqEnJSSM.css","assets/instrument-sans-latin-ext-wdth-normal-C5E2Gvlv.woff2","assets/instrument-sans-latin-wdth-normal-BVScPF0l.woff2"];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k.startsWith('nexus-finance-') && k !== CACHE).map((k) => caches.delete(k))),
    ),
  );
});
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    // Latest page when online, the cached one offline.
    event.respondWith(fetch(request).catch(() => caches.match('./', { cacheName: CACHE })));
    return;
  }
  event.respondWith(caches.match(request, { cacheName: CACHE }).then((hit) => hit || fetch(request)));
});
