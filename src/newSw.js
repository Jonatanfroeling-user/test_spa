/* eslint-disable */
// 3 event listneres

/**
 * Service Worker
 */

const DEBUG = true;
const OFFLINE_URL = "offline.html";
const CACHE_NAME = 'v1.6';

// self = service worker
self.addEventListener('install', (e) => {
    if(DEBUG) console.log('[serviceworker] installed');
    e.waitUntil(
        caches
            .open(CACHE_NAME )
            .then((cache)=> {
                cache.add(new Request(OFFLINE_URL, {cache: 'reload'}))
            })
            .then(()=>{
                if(DEBUG) console.log('Cashed assets: ', OFFLINE_URL)
            })
            .catch(er=>console.error(er)),
    )

})

self.addEventListener('activate', (e) => {
    if(DEBUG) console.log('[serviceworker] activated & ready to handle fetches.');
    e.waitUntil(
        caches.keys().then((cachNames)=>{
            return Promise.all(
                cachNames.map((name)=> {
                    if(name.indexOf(CACHE_NAME) === 0) {
                        return null;
                    } else {
                        return caches.delete(name); 
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', (e) => {
    if(DEBUG) console.log('[serviceworker] fetching', e.request.url);
    e.respondWith(
        fetch(e.request).catch((error)=>{
                if(DEBUG) console.error('fetch failed: returning offline page instead', error);
                return caches.match(OFFLINE_URL);
            })
    )
})