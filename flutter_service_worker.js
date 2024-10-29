'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "20060738fbdcb53e7c47df6787c7008d",
"assets/AssetManifest.bin.json": "041684ab90b9d128a58cda023f3783cc",
"assets/AssetManifest.json": "0201739f337da2ae5ce832b1e07d062d",
"assets/assets/fonts/VT323-Regular.ttf": "034de38c65e202c1cc838e7d014385fd",
"assets/assets/images/95.png": "dcd66f00ad37cc5affc6234a9ced6466",
"assets/assets/images/aboutme.png": "ee5fa8ac5d5d97641b820a4e9338987d",
"assets/assets/images/axes.png": "9ec17b321574877e010aeae1368c3e15",
"assets/assets/images/castle.png": "946c42aa5102279fefef23c83a91b1e1",
"assets/assets/images/ei.png": "0a2151fb70f639f900d013dd724e484c",
"assets/assets/images/email95.png": "29c75448e450a2f32674c10c65a33d9c",
"assets/assets/images/eu.png": "b021ad89236199ccbcac4e2311b07753",
"assets/assets/images/in.png": "342f2a9bec95b509a830a309b4437f99",
"assets/assets/images/insta.png": "8c745efe16e82793e8d7c9effda7132d",
"assets/assets/images/knight%2520(1).png": "61ca733e62c8970c50eff2724618226b",
"assets/assets/images/knight.png": "8a54cb6972888643266d4392a1310a52",
"assets/assets/images/medieval_background.png": "49cbfd4728ce557bc319c08bd3e0e78d",
"assets/assets/images/mp.png": "12fbafb30908c87ca0cca695fd0f479e",
"assets/assets/images/myprojects.png": "7e95a70d0ac5440a5ca6734a71e9b1d3",
"assets/assets/images/myprojectslogo.png": "f6e2c525077169aa6da9fcc743f577e6",
"assets/assets/images/MySkills.png": "b10bdab90437f31dd9ad012502f51734",
"assets/assets/images/old-map.png": "939d1129c0b581c256e119b365559bd5",
"assets/assets/images/sad.png": "e86039e936e345376d9220b65155758c",
"assets/assets/images/speedmatchlogo.png": "661719a72802e20ff82f6f45c7edcd24",
"assets/assets/images/twitch.png": "5431527d1a0194012295331598593d0b",
"assets/assets/images/villager.png": "b4f5208fa07f85d09df19347c9484d0a",
"assets/assets/images/w95files.png": "6c08941427c6dcb73d9a914c30dfc820",
"assets/assets/images/w95filesalt.png": "cfa6e03c002c7f09c5deabc84b9d14b2",
"assets/assets/images/w95internet.png": "24f39588b3a1126d96cadfe1c9bdcd93",
"assets/assets/images/w95internetalt.png": "a01bb818645c9ff4867187827cfaec44",
"assets/assets/images/w95mycomputer.png": "976792818579276bbe18b9fd63f6130a",
"assets/assets/images/w95mycomputerblue.png": "af1f633cde48e2bf20b887c5edf207b6",
"assets/assets/images/w95trashcan.png": "4229e7f0c064695b17576914b5d04ea3",
"assets/assets/images/w95trashcanalt.png": "365f1ebe59764f20a86321166fbd88ca",
"assets/assets/images/x.png": "f7d25a92169acff4a0a6f6b76d5a040f",
"assets/FontManifest.json": "b58f747bcbcc086dbb0a18d59c506e88",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "0f341556138a9354d293fd796dd10bd6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9b1aa03c02c8c43d2e4ef1d5b8ce28b3",
"canvaskit/canvaskit.wasm": "8746eddf4e2883ac7fd123f0b1bee206",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "da50d68f5eb953d52e04e153d06e0ef0",
"canvaskit/chromium/canvaskit.wasm": "0e4d90773c8d34af4a4edf6cafbff669",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "b6cbd9b442394230920768fcdce9c0fd",
"canvaskit/skwasm.wasm": "4638927a0fcbdf3d934bfcc670d433a2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "a843ba5c2cc3e5ccc461486311117104",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6c2a9c8af9a5e4c3dd97fa7efb11524e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d92a673fbcb621d5406b0169a3312750",
"/": "d92a673fbcb621d5406b0169a3312750",
"main.dart.js": "1d3ccc3e7218e68131e05b5f441c55f1",
"manifest.json": "3f5cc1422384871cb04bfcbe05618047",
"version.json": "753a77ab84c26f016b75729c469df551"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
