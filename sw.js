// Generated at build time (vite.config.ts). Caches only this site's own files.
const CACHE = 'nexus-finance-1c7e4f2acf16';
const FILES = ["./","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DYSzrUBg.js","assets/libsodium-wrappers-Bu63S78U.js","assets/index-X7bL2B7N.css","assets/instrument-sans-latin-ext-wdth-normal-C5E2Gvlv.woff2","assets/instrument-sans-latin-wdth-normal-BVScPF0l.woff2"];
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
