const CACHE_NAME = 'apps-script-pwa-v1';

// Instalar el Service Worker
self.addEventListener('install', e => {
    self.skipWaiting();
});

// Activar el Service Worker
self.addEventListener('activate', e => {
    e.waitUntil(clients.claim());
});

// Manejar peticiones de red básicas
self.addEventListener('fetch', e => {
    e.respondWith(fetch(e.request));
});