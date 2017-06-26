"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","c031de371ef2f232757bb38cc618dd9c"],["static/css/main.d3ce2926.css","32f8b3e05492d3934c8f4509cee16252"],["static/js/main.c1aec18a.js","abd34e3acd43d49edb6f8e75d22a41e8"],["static/media/09358b273dc7532e185c20f956d4482b6422.png.7ddaa931.webp","7ddaa93178da5cf978bcfb49003f0735"],["static/media/17d1c39d68cfffa24334d81dfa8956136471.png.ed5fdc54.webp","ed5fdc547c6af11877579ff72283cfab"],["static/media/2fc6f40817f68f81ab62c8749579dcaa6565.png.e46da7c0.webp","e46da7c02a6427eb7630f3effe723dd8"],["static/media/3231ff9e68d4e13fd7f1901d742feb785976.png.bd7a8e6c.webp","bd7a8e6c4edfd6309a8321b3e7b11c7a"],["static/media/368e2cd7da106e2236a8d6096a8957b96874.png.ee71218c.webp","ee71218c95803ef6b2ed7a46c6ffb14d"],["static/media/9364491f122755cf5d8caff560cabeec6371.png.14b29721.webp","14b29721d33bb8495737cc1e7f0a0de2"],["static/media/a8c3097c09508d79e417de79844438fa7016.png.d97542d3.webp","d97542d3bcc387b182e4a21727c3c689"],["static/media/ac286360b3b999e8cf616fab5949eb2b5876.png.0d3c7bdf.webp","0d3c7bdf7c25812b93f3d31bfa22b715"],["static/media/bannertemp.e58ba3eb.82d4b348.jpg","82d4b348d34d0810439e0917a56701dc"],["static/media/cart.4ba0ae5e.fe4251d1.png","fe4251d123696de1f3d6d15e7e815b2f"],["static/media/dd26b0c54458e4f3dd9fd1185f34cda6458603.jpg.b18d724c.webp","b18d724c2401f88fef93fd3c098db936"],["static/media/icon.8e84a068.62010693.png","62010693a9118d772de00cafe5079161"],["static/media/iconfont.483369cb.woff","483369cb1a77c41f8a6b8d57ea1aa284"],["static/media/iconfont.64ee28b9.svg","64ee28b9ce9d2def9e66ea0ee842ef45"],["static/media/iconfont.70e29779.eot","70e29779872333873c74e3c70d730427"],["static/media/iconfont.86b61106.ttf","86b6110660816ef6006465391cb7e2a9"],["static/media/jian.f21a5037.svg","f21a5037f38cd310108c6b538695a4ec"],["static/media/下载.bac47174.png","bac47174ad5760d5fcf4d6b7e5c0f6f5"],["static/media/登录.1189eb48.svg","1189eb487ea14da1dd35c9ebdb1ac9f6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/meituan/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});