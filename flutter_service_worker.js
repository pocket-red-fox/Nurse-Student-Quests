'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6b20056f5eb846d4357b418104cce132",
".git/config": "327a9958fa8511fd1a9d57088f8a0956",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "67a312b966c22822b13bdb7b3b54a236",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6cd8ad55421952bd377bc94a2d3f4749",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24860ec71ad96085d0b4b46fcd0688a9",
".git/logs/refs/heads/master": "24860ec71ad96085d0b4b46fcd0688a9",
".git/logs/refs/remotes/origin/master": "1b56a7ff8e6419b3c6cd62f3091bbf8d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/05/24f8ba5434d3d7f8fbc4dbbfe76637144ce8ef": "119af495bef40a8584179bd687047172",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/0f/8a78faac14aa2404d6e82b4ea75e97452411bc": "3e054dd383d6cf8402ad04f46cfce390",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/3865f2c3e64961addb3c5786293bc6eaf19a25": "8c41f420b291edd73045feda1a47308d",
".git/objects/1d/09ce42fe04fd3d30e65cc47de7c8767db1901a": "b47e26c4976ce09585f10c5d904a34cd",
".git/objects/2f/6fd50eb70ca0279f9ec55e7cc8b401ba51bc0e": "35a6aaeaf892ccda0e1aae96c20fec44",
".git/objects/33/7f750e0c9d1942f68b5ad09143e8e36caf1f34": "919e2a8f8d725c0a72194e4c0f3b10e5",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/e3d9cd8f163d59dc23bb941c5c1784ecc183e1": "2b4b90f2f4e480b8926d6c0ca9e15535",
".git/objects/3b/469ee536779935d4b33916288a9fb2b20342e9": "1a92c67d276f04cf3cd955498dd67d18",
".git/objects/40/df33e0220c8761d202ab3382b8c544f24ba27e": "94b57c5b842cc44f61f5686c5c7df034",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/275323e8294333524c96ca3a19b62b77c4783f": "69f5ea815e101782074d89b97e9d2ea0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/333b1a23e743ca0b79093b12a4172be42ffcbe": "f1fc9e597fc7e2059a177708bf6eccc4",
".git/objects/49/073ba83040b441e8ce5113673e81b9e8114064": "c15ff760268ec0515716b472d7bad2e5",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/a945babb58d0ff64409308a5990af5316308a4": "6af29a9e3988273606b578863086d5d1",
".git/objects/5a/50c5a5e6f40c309074bcca3da85e5b3a67492f": "f57bd5a381db823da4f4bab2320d0f06",
".git/objects/5f/be99c619fe90be7a11d5d18f5e47e57aec53fa": "497eaffa65dc8d554430693d684e0dcc",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/aa458c49872180e9ebc3c1e23295062ead8706": "37a947d4e4f6e65553a50a7d1457191c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/e7ca95a038e74fe8c53ab75e92df541ec0a969": "56d434658b9dab7645d470ba179f6cb5",
".git/objects/86/79bbe2a2c39f2f791b23a1e8d2a2d2b33358af": "08815e744de8d29c7bc7e3dfaf9994b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/9f5526880d99c13cbbddada2fa437f078a85c4": "18f1c45cad1dea452955b5ebd7154a2c",
".git/objects/97/4171fd2bbf16c3251eab2d383521b5935b0d00": "c30010d9cdc376a78452abd0365fb01d",
".git/objects/98/62633f140d9e3eae32e7ca11957027c1a8b7e3": "13ef42e7ab3af74fbc00aa3f4b7626e9",
".git/objects/99/962c1a8c0ec456e1b7a5ed2bf53c2264130710": "7db2d561ed8476733a3c4e8c58bfb7f7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b29475da7d42aa3b5b89f2d251a5d53f55f6eb": "b118a14ca7657b8bf43e496de4c653e3",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c565191fae095f9a1c8805e19313135229a6e7": "764d465c2804c8c743ac172edbb60b7c",
".git/objects/bc/9de5fdfeb512b56bae4f9a5b7c7faf3a26af95": "1571fd0bb57cf5e9e3e85bdf99b13b34",
".git/objects/cc/2a8efc0822e3113a4f3fc962843874500b77f3": "49e23f290ffba1abb9c6335e49670943",
".git/objects/cf/b421e70eb2408077d46bdb88a92e750b017b9a": "ec4781d0fa4dd6e59cd69b5c00fe1f06",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/2798ffd690e7a5835f0ce6a5c03b752bb1cb52": "e8bf9b201eeff61ddf9df70fb6d79a20",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/54251b31faea29f418cc576206d387a09396e0": "68f56b6d93a920ee5ccb99353290431d",
".git/objects/e9/eb1b5dbdec74543d1115af6d19c0f21056e01b": "2f9f3a6584fb9281ef52440a76a67eb4",
".git/objects/ea/59e17bd7427917b3e30ef2e0b078799773ac69": "b2d1b0ca5c86caaab2b850d35f43f7d9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0a37d249eb4485fb8128e16be8479dd465ad34": "e1f0ff3a36799179426680e50db8bc55",
".git/objects/f0/c65d741761ae9b18d05ca6cf9467868a41b8ff": "a10e25a1a4e5b7253c24c9fb568aa9c6",
".git/objects/f9/d565dc01a7c8d220403dc3eaa288af60d80639": "0b10f00e86cc90be75030e7e29e5e56f",
".git/objects/f9/df76ef58d1356590c4910cf37d2516af5718aa": "78461fad0a81677cb77773468cc504fc",
".git/objects/fe/5093cc550b0ef197896b3fd87d68cb18bc6dff": "2bc81c7417ae619e0509ee25aa8f117c",
".git/ORIG_HEAD": "a74a22bb432748b64ae4cb5eb8e033ea",
".git/refs/heads/master": "a74a22bb432748b64ae4cb5eb8e033ea",
".git/refs/remotes/origin/master": "a74a22bb432748b64ae4cb5eb8e033ea",
"assets/AssetManifest.json": "38af7a3bc18f3de7efc4985c753c853b",
"assets/assets/data.json": "b4030d195329d92aba5015c0825ea1da",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/NOTICES": "cc0c00ae30bca78f6a673409dea924c9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55348aca1dc3ccd1cd880668546f928c",
"/": "55348aca1dc3ccd1cd880668546f928c",
"main.dart.js": "9f6b122cedde74b818450817df62726f",
"manifest.json": "2d04c7e7d87f894ab98eabc8574d2206",
"README.md": "ed70ffd53cc1949199fce494f0f99e08",
"version.json": "b19f0617b9784fa1babee7472d87c2d9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
