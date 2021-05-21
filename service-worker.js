/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6980c2ca32a56321ed5dbfeb3d1be67b"
  },
  {
    "url": "adidas-black-128x128.svg",
    "revision": "a41c9a0e07567c316a84ff9f691c10ae"
  },
  {
    "url": "adidas-black-256x256.svg",
    "revision": "c18568e8b57c9d43e79ad37cb5482c88"
  },
  {
    "url": "adidas-black-48x48.svg",
    "revision": "5e07f483c03e25de55d97204a0405ba6"
  },
  {
    "url": "adidas-black-72x72.svg",
    "revision": "55a18b1be8d509a862c5314b8db6949a"
  },
  {
    "url": "adidas-black-96x96.svg",
    "revision": "3830e0562a09b6c47a38273ffc99defc"
  },
  {
    "url": "adidas-black.svg",
    "revision": "5204fa2d95294af4b98b19f6f9400090"
  },
  {
    "url": "adidas-mask.svg",
    "revision": "215d4f550845e4c97e4dda145ff01157"
  },
  {
    "url": "adidas.svg",
    "revision": "213d8866b49db2b93825024d8c845ce2"
  },
  {
    "url": "assets/css/0.styles.25760a4b.css",
    "revision": "aa9b10ce693016257bb2e65839a79f1c"
  },
  {
    "url": "assets/js/10.a4bc692c.js",
    "revision": "63920e98d2efe209b177793f09885206"
  },
  {
    "url": "assets/js/11.e659f1dc.js",
    "revision": "e41b0f1f8a35393210c0a301822907da"
  },
  {
    "url": "assets/js/12.18e554a7.js",
    "revision": "1b3f3f55d53139035010317d3e471b33"
  },
  {
    "url": "assets/js/13.608e0ce3.js",
    "revision": "709991ee276a3408cfdd2660c1c06fc3"
  },
  {
    "url": "assets/js/14.2b6bf548.js",
    "revision": "402b5017695f0cb8f4518805a142fc19"
  },
  {
    "url": "assets/js/15.9bf59d7f.js",
    "revision": "9f8016bcaaa4b172e86b4b27565892f8"
  },
  {
    "url": "assets/js/16.918d3950.js",
    "revision": "270d7761fcceab01aa6dc93c9693a650"
  },
  {
    "url": "assets/js/17.4088e165.js",
    "revision": "d38ed10ab2465a716ed0ec35c89a6bcb"
  },
  {
    "url": "assets/js/18.cb1879f2.js",
    "revision": "4a698f4d30fde8e85154036775de3320"
  },
  {
    "url": "assets/js/19.f771dc65.js",
    "revision": "1d79031ad62627c1a4db7978fa24f857"
  },
  {
    "url": "assets/js/2.abcab1a7.js",
    "revision": "0e0b060b48cf9408514511821ebd4833"
  },
  {
    "url": "assets/js/20.9be9de9a.js",
    "revision": "ffdbfe8684aed59131fdfedcffefe1c1"
  },
  {
    "url": "assets/js/3.47c63c77.js",
    "revision": "d70767a52b49cbcda2eec99dfc1404e2"
  },
  {
    "url": "assets/js/4.5c275821.js",
    "revision": "51ee0910f6679ca40fda509e89590196"
  },
  {
    "url": "assets/js/5.b805f486.js",
    "revision": "20200b455a5ac6470126701fbe2192fc"
  },
  {
    "url": "assets/js/6.7240e0cf.js",
    "revision": "328f0c045f076ff8be6aba474436ac77"
  },
  {
    "url": "assets/js/7.05f76dfc.js",
    "revision": "c01bb4d3b617e02dc19bc5c4e156f001"
  },
  {
    "url": "assets/js/8.b7c6e2b1.js",
    "revision": "336da81a3cea2d9a25bc5150b05374bd"
  },
  {
    "url": "assets/js/9.4137f5a3.js",
    "revision": "da6b826b04e487b93ec05c9eebea42dc"
  },
  {
    "url": "assets/js/app.e51250b7.js",
    "revision": "6d2bd94d3779e5c2581343ece8a044dd"
  },
  {
    "url": "faq.html",
    "revision": "62593759ba3191b4d58b9c117d3a2cd9"
  },
  {
    "url": "finish-line.svg",
    "revision": "ee4c3debfa852dc64ce7ea15286a9907"
  },
  {
    "url": "index.html",
    "revision": "f1466394c5e0cbd1898f05f76ec916f7"
  },
  {
    "url": "join-button.svg",
    "revision": "b48fad933ff63e9612151db131e20c16"
  },
  {
    "url": "privacy-notice.html",
    "revision": "f1f285b34b010a7067b459b9fcf93966"
  },
  {
    "url": "shoebox.svg",
    "revision": "d71765dee8404dc6e4abd2a84cc4e0a0"
  },
  {
    "url": "story-1.png",
    "revision": "63ed48d9efe82a79ecb51e9432a321f6"
  },
  {
    "url": "story-2.png",
    "revision": "fc6b5872628fd722035ef07532c0910e"
  },
  {
    "url": "story-3.png",
    "revision": "4129c0b44d192bc892d3139456d37618"
  },
  {
    "url": "terms-and-conditions.html",
    "revision": "acdee4f7de4ad2be40dc25b68617f2a4"
  },
  {
    "url": "tracks-halved-center.svg",
    "revision": "8a4c94b71cfce9883ce61d9c4da95d1f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
