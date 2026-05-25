const CACHE_NAME = 'astro-marine-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Initialize and Cache basic dashboard shell framework structures
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve assets instantly from cache for native app feel
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});