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
    "revision": "41d04c8d8ac9067ea80143b251f6676b"
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
    "url": "assets/css/0.styles.0e0937ff.css",
    "revision": "d7a6e04980cc2812b32218c5cd13a3f3"
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
    "url": "assets/js/15.db114b0c.js",
    "revision": "6fd307c4bb226d1546481511f10fed11"
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
    "url": "assets/js/18.79b42a48.js",
    "revision": "594f7d58c025b2752d896b4c7bb54e31"
  },
  {
    "url": "assets/js/19.6af27348.js",
    "revision": "26d92f8187725d057a76a91849086663"
  },
  {
    "url": "assets/js/2.51babce5.js",
    "revision": "cb3119baefc9345910bff0f40e0e7fa8"
  },
  {
    "url": "assets/js/20.bc434240.js",
    "revision": "0b7fc0cdd7b2236c658b22de9b96e34e"
  },
  {
    "url": "assets/js/21.2eb31b8c.js",
    "revision": "92c7282673ea119324deb121c84f73b5"
  },
  {
    "url": "assets/js/3.805c298e.js",
    "revision": "e0033f96aed008e8f0e54ec7e0808a5c"
  },
  {
    "url": "assets/js/4.d1ef76c7.js",
    "revision": "4fc88ac3b88e9e6e869d9d48ab046c2f"
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
    "url": "assets/js/7.c4674f75.js",
    "revision": "f3222de33993f1da76af391da3cec5ba"
  },
  {
    "url": "assets/js/8.4f466eb2.js",
    "revision": "91745a44fc25de4ffd6b35c10824b478"
  },
  {
    "url": "assets/js/9.4137f5a3.js",
    "revision": "da6b826b04e487b93ec05c9eebea42dc"
  },
  {
    "url": "assets/js/app.2cddf172.js",
    "revision": "2d097ccf3c57f84d9328d829b25a7243"
  },
  {
    "url": "faq.html",
    "revision": "225f7579446c2b4b6486b8efd181a1f7"
  },
  {
    "url": "finish.svg",
    "revision": "fb66045e013be45b99dd3ef59a7c33f8"
  },
  {
    "url": "index.html",
    "revision": "2d8363b95652c5047a10d3f0902e954d"
  },
  {
    "url": "join-button.svg",
    "revision": "b48fad933ff63e9612151db131e20c16"
  },
  {
    "url": "leaderboard.html",
    "revision": "c4ffd6ca598042cb5430bbb0438b6b20"
  },
  {
    "url": "privacy-notice.html",
    "revision": "7bb580ad735d764ddb85e3aca734660e"
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
    "revision": "63058c2cb6809bf19edf1219a197187a"
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
