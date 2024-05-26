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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "a95aaf46d128c08278d43ef901c7756d"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.0bb20dfc.css",
    "revision": "80e7272eb3547abfe40163405c6d2ec7"
  },
  {
    "url": "assets/img/bdBefor.1a8c861e.png",
    "revision": "1a8c861e07cb91e6a9a3f61db1664179"
  },
  {
    "url": "assets/img/CreateSurvey1.d4f922ec.png",
    "revision": "d4f922ec7a91f80436d158cda9f601e6"
  },
  {
    "url": "assets/img/CreateSurvey2.f3788895.png",
    "revision": "f37888956276d60555389a1044ea92dd"
  },
  {
    "url": "assets/img/CreateSurveyBad1.f34c6712.png",
    "revision": "f34c6712c3e5ee1f7dbba3ff6dbbb54a"
  },
  {
    "url": "assets/img/CreateSurveyBad2.b85481a3.png",
    "revision": "b85481a3ab3d2d13ca998bb933e8a981"
  },
  {
    "url": "assets/img/delete1.fd889c24.png",
    "revision": "fd889c24b6216c2bcd300758821d1ff6"
  },
  {
    "url": "assets/img/DeleteSurveyError.afe11581.png",
    "revision": "afe11581a005c6b564fc9c0c069061c5"
  },
  {
    "url": "assets/img/GetAllSurvey.3eb5601b.png",
    "revision": "3eb5601b2ac4482bd6bf38ff6c8abe80"
  },
  {
    "url": "assets/img/GetSurveyById.103bebee.png",
    "revision": "103bebee74910715e37899e0b1c716e9"
  },
  {
    "url": "assets/img/Schema.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Update1.2e6a1a9d.png",
    "revision": "2e6a1a9d1f29b19305046de11492224d"
  },
  {
    "url": "assets/img/Update2.9ac13fec.png",
    "revision": "9ac13fecfee76704efe933422982cf91"
  },
  {
    "url": "assets/img/UpdatedDb.d0540d87.png",
    "revision": "d0540d87be31efa34be7fbb92f05f660"
  },
  {
    "url": "assets/js/1.aeaab699.js",
    "revision": "61941c540ed5894310b5cdce6bc6f93c"
  },
  {
    "url": "assets/js/10.ec5d05f5.js",
    "revision": "edaba4e9f2820d432cd580b346b9ad7c"
  },
  {
    "url": "assets/js/13.e94752d3.js",
    "revision": "8529ae0b470be13c694e20da1b1f7d42"
  },
  {
    "url": "assets/js/14.a44b088b.js",
    "revision": "2daf70afe9487581e19f6517864d062d"
  },
  {
    "url": "assets/js/15.9b45e2d3.js",
    "revision": "a981caff8648d317e5239c9b509433ce"
  },
  {
    "url": "assets/js/16.3fba0f2e.js",
    "revision": "9c9b85761e3581afc55cb4d3621688a6"
  },
  {
    "url": "assets/js/17.6f857b07.js",
    "revision": "b426c8366a0d9f2fc436af4adf3fa0e3"
  },
  {
    "url": "assets/js/18.3687cd53.js",
    "revision": "b88a16ee9b0932231ce9b6817618b68a"
  },
  {
    "url": "assets/js/19.e97a1789.js",
    "revision": "8efd83a3e98c13ba980a887569327bbc"
  },
  {
    "url": "assets/js/2.9db98cfc.js",
    "revision": "25ae53f3d166823bb5cce22a46d6b058"
  },
  {
    "url": "assets/js/20.a6554482.js",
    "revision": "46c5155888d231da106f694143ecefbc"
  },
  {
    "url": "assets/js/21.4e1cc404.js",
    "revision": "81041c8b09232f0fe7762bc47cc012f3"
  },
  {
    "url": "assets/js/22.8c2f48ed.js",
    "revision": "6ea3985ce9470744d0289cbf480cde84"
  },
  {
    "url": "assets/js/23.6332bedd.js",
    "revision": "0393bf62740d7668ff50b3911e3fd4ae"
  },
  {
    "url": "assets/js/24.07780c0c.js",
    "revision": "4c36ae41dd081763fab4c39686c9b759"
  },
  {
    "url": "assets/js/25.2346a27f.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.64a380ff.js",
    "revision": "25097d4b15d164877a074855c62d5254"
  },
  {
    "url": "assets/js/27.236aa98d.js",
    "revision": "fb30683658f3e2e6d776d75e5a48d6e9"
  },
  {
    "url": "assets/js/28.49e53bb3.js",
    "revision": "9fd45d3c89f284db688c2ba7f6055860"
  },
  {
    "url": "assets/js/29.796c6e28.js",
    "revision": "03f0274c25e757b5c6be1041cf9a487f"
  },
  {
    "url": "assets/js/3.90c9f46a.js",
    "revision": "159f2ae06d83459b0189e5b7e1bb83d3"
  },
  {
    "url": "assets/js/30.e446915b.js",
    "revision": "9fe8ce550dd66bfc5bbfdebbcb6708a4"
  },
  {
    "url": "assets/js/31.e76f794d.js",
    "revision": "a6fc3884f8951df7b3ab044d70644503"
  },
  {
    "url": "assets/js/32.141232a1.js",
    "revision": "55a76a32cf61e8b92f09975dad220a26"
  },
  {
    "url": "assets/js/33.1b1f1b96.js",
    "revision": "fbd76f0cd3f255d3d0cbc61afc17840e"
  },
  {
    "url": "assets/js/34.63cd6c44.js",
    "revision": "3bc99a1b7a0d4d879d97742ddf399f09"
  },
  {
    "url": "assets/js/35.aef7d27c.js",
    "revision": "450aea53aa4893a9f5ddd7f432bf208d"
  },
  {
    "url": "assets/js/36.2b73953d.js",
    "revision": "26cee00cfe930f22830edf34c8025e63"
  },
  {
    "url": "assets/js/37.9f919ab0.js",
    "revision": "0ea50d63124a83098f9262ace20f5a3e"
  },
  {
    "url": "assets/js/38.9edbd51d.js",
    "revision": "4cca7548cd71d806c79fb52cada6f435"
  },
  {
    "url": "assets/js/39.5e1afedc.js",
    "revision": "e6f9d43b3924e250b9af4ef6349bd4ec"
  },
  {
    "url": "assets/js/4.f7ed40d9.js",
    "revision": "2ced3d9215a5ae954beaf112763f9eaa"
  },
  {
    "url": "assets/js/41.7613dad4.js",
    "revision": "698b1866ebd2804bf697f2bcd676f5db"
  },
  {
    "url": "assets/js/5.60ccbbf3.js",
    "revision": "635a5bce90fbe1ed88625e012e3d16f5"
  },
  {
    "url": "assets/js/6.8dd89140.js",
    "revision": "99214a438bcca330704aa47477f0d984"
  },
  {
    "url": "assets/js/7.4ef13e57.js",
    "revision": "e3c510bf904302c3577ec3b893ce14e3"
  },
  {
    "url": "assets/js/8.5c6a69f4.js",
    "revision": "5e5b0848fbe665469bb73d652538f039"
  },
  {
    "url": "assets/js/9.370a7bc7.js",
    "revision": "ac226a94abf853bf2cb7c7a5c6285cd3"
  },
  {
    "url": "assets/js/app.c47b2c8c.js",
    "revision": "cbe522a4383d9a9893da7ddb78d5fd7d"
  },
  {
    "url": "assets/js/vendors~docsearch.69518f58.js",
    "revision": "92d41eb0d6ad320ec9969b36a4452a7b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "abc45435d9c9f440e0d4c16bef316093"
  },
  {
    "url": "design/index.html",
    "revision": "e44df2602e200f1e4e63920086c417af"
  },
  {
    "url": "index.html",
    "revision": "1cd8e1b5af77d81c0870b928a22a6646"
  },
  {
    "url": "intro/index.html",
    "revision": "8feef19956f7774b9e3388455b2ae31a"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "1a589b2f4577c0668277a264800b4aae"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f0eb797f4a2101563a94856a8e25891c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "5489dbd7e0300e9c44c4853d52cfd98b"
  },
  {
    "url": "software/index.html",
    "revision": "f30b81bea3a046297c5c959c721d5714"
  },
  {
    "url": "test/index.html",
    "revision": "7fa4ee5cf4117a7a001faacff9d081a1"
  },
  {
    "url": "use cases/index.html",
    "revision": "366b1fe2bb2942a0593f6ca8ef60bfc8"
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
