// https://serviceworke.rs/

const cacheName = 'demo-v1';

const staticAssets = [
    './',
    './index.html',
    './index.js',
    './person-element.js',
    './demo.webmanifest',
    './styles.css'
];

self.addEventListener('install', e => {
    console.log('install');
    // "waitUntil" hold the service worker in the installing phase until tasks complete
    e.waitUntil(async function() {
        console.log('precache');
        const cache = await caches.open(cacheName);
        await cache.addAll(staticAssets);
        return self.skipWaiting();
    }());
});

self.addEventListener('activate', e => {
    // When a service worker is initially registered, pages
    // won't use it until they next load. 
    // The claim() method causes those pages to be
    // controlled immediately
    self.clients.claim();
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    //const url = new URL(req.url);

    //if (url.origin === location.origin) {
    if (!req.url.match('/api/')) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req) {
    console.log('cacheFirst: ' + req.url);
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    if (!cached) {
        console.log('fallback to network');
    }
    return cached || fetch(req);
}

async function networkAndCache(req) {
    console.log('Network first: ' + req.url);
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch(e) {
        const cached = await cache.match(req);
        return cached;
    }
}
