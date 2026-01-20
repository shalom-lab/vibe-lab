const CACHE_NAME = 'v1';
const ASSETS = [
    './',
    './index.html',
    './icon192.png' // 确保这里有你的本地图标
];

// 安装并静态缓存
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// 核心逻辑：拦截请求
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // 如果缓存里有，直接返回；没有则去网络抓取
            return response || fetch(event.request);
        }).catch(() => {
            // 如果网络也断了，这里可以返回一个保底页面
        })
    );
});