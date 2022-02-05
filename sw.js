/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-a51b997a'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/index.f792605a.css",
    "revision": null
  }, {
    "url": "assets/index.fdc042da.js",
    "revision": null
  }, {
    "url": "assets/vendor.db22bac5.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "78288b2b9914eef4c692fe892f0fd248"
  }, {
    "url": "windows11/SmallTile.scale-100.png",
    "revision": "b10cc04af8aff44abd3889a7e9b23c3b"
  }, {
    "url": "windows11/SmallTile.scale-125.png",
    "revision": "1bb7cdad72d934b053245c19183ee98f"
  }, {
    "url": "windows11/SmallTile.scale-150.png",
    "revision": "e0d49027fae2b842a3ac3d808f5c2496"
  }, {
    "url": "windows11/SmallTile.scale-200.png",
    "revision": "cff7f3b040ca13521e3ff1518c8c0b64"
  }, {
    "url": "windows11/SmallTile.scale-400.png",
    "revision": "41b55e528f377e29c67f5fcb3d787241"
  }, {
    "url": "windows11/Square150x150Logo.scale-100.png",
    "revision": "42ff971bca4d3f7638b0011945d36f7b"
  }, {
    "url": "windows11/Square150x150Logo.scale-125.png",
    "revision": "4789341a3bfba3071aca8b7947841d33"
  }, {
    "url": "windows11/Square150x150Logo.scale-150.png",
    "revision": "6967d2247fac64d11eac241b4b07e2e3"
  }, {
    "url": "windows11/Square150x150Logo.scale-200.png",
    "revision": "c3f661ab35d52b99004dc4cb565eccc8"
  }, {
    "url": "windows11/Square150x150Logo.scale-400.png",
    "revision": "7641ffcea23423880d9629e1648e778c"
  }, {
    "url": "windows11/Wide310x150Logo.scale-100.png",
    "revision": "f4f467fe525c84a659b8fac57bb34903"
  }, {
    "url": "windows11/Wide310x150Logo.scale-125.png",
    "revision": "cab35f7bc8e31bf2920e02ff42e9cdb0"
  }, {
    "url": "windows11/Wide310x150Logo.scale-150.png",
    "revision": "cda7fb51a9bce7f7d9f9e5459e20b159"
  }, {
    "url": "windows11/Wide310x150Logo.scale-200.png",
    "revision": "62ea5e440c7e97e7ea4846a00c6acc01"
  }, {
    "url": "windows11/Wide310x150Logo.scale-400.png",
    "revision": "2a0987b60967cf1a273d01631ce5154d"
  }, {
    "url": "windows11/LargeTile.scale-100.png",
    "revision": "72add50b9c15ddd1c48e140335b19ef1"
  }, {
    "url": "windows11/LargeTile.scale-125.png",
    "revision": "2fbb6bf8ece7385582b7182c82cabb36"
  }, {
    "url": "windows11/LargeTile.scale-150.png",
    "revision": "1c605cca0101f833d0f689e9a6ffd33b"
  }, {
    "url": "windows11/LargeTile.scale-200.png",
    "revision": "07dc5a0681a97b7d2cde54f7aa9a0854"
  }, {
    "url": "windows11/LargeTile.scale-400.png",
    "revision": "c75810df69080c67cf6d6f261e039528"
  }, {
    "url": "windows11/Square44x44Logo.scale-100.png",
    "revision": "fa3369394979554e8db5afa05d5d838b"
  }, {
    "url": "windows11/Square44x44Logo.scale-125.png",
    "revision": "458d02e946df45aa23f4c82d3bd3640e"
  }, {
    "url": "windows11/Square44x44Logo.scale-150.png",
    "revision": "6008835208ba346d17f76e0cd4ae4e9e"
  }, {
    "url": "windows11/Square44x44Logo.scale-200.png",
    "revision": "052ffc71025c173254c1b200477fefa0"
  }, {
    "url": "windows11/Square44x44Logo.scale-400.png",
    "revision": "85db5f302eb7815e8a8f7f336547f37b"
  }, {
    "url": "windows11/StoreLogo.scale-100.png",
    "revision": "b19de3209ed90090b952831c39f23053"
  }, {
    "url": "windows11/StoreLogo.scale-125.png",
    "revision": "b3a0baeefb80acfd259ce8a5a53eff34"
  }, {
    "url": "windows11/StoreLogo.scale-150.png",
    "revision": "78187083b9f79ff6cf867b0f771541bf"
  }, {
    "url": "windows11/StoreLogo.scale-200.png",
    "revision": "9f8037007c16173a78fe6bb823be3a67"
  }, {
    "url": "windows11/StoreLogo.scale-400.png",
    "revision": "d31b6296560cbea3aa5f3ff9d6893cb8"
  }, {
    "url": "windows11/SplashScreen.scale-100.png",
    "revision": "62ea5e440c7e97e7ea4846a00c6acc01"
  }, {
    "url": "windows11/SplashScreen.scale-125.png",
    "revision": "0519e567b00443d30285142ed17eaba4"
  }, {
    "url": "windows11/SplashScreen.scale-150.png",
    "revision": "9d1662164ee76c11da75af90d69274e3"
  }, {
    "url": "windows11/SplashScreen.scale-200.png",
    "revision": "2a0987b60967cf1a273d01631ce5154d"
  }, {
    "url": "windows11/SplashScreen.scale-400.png",
    "revision": "30ecbf4d01f39c665a5422c40797d306"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-16.png",
    "revision": "577421f3f352da5f136adea470c0713a"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-20.png",
    "revision": "79f14841c2286d687a2bbbe44df57e1b"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-24.png",
    "revision": "cdc633dd1c229c5221988e0f139c7159"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-30.png",
    "revision": "325dd15f2598f0b1887b4c426f1e7dec"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-32.png",
    "revision": "db8d77d5f445b956989b6bbb63d90884"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-36.png",
    "revision": "59425de35102241f6f79963defdf642e"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-40.png",
    "revision": "9b480a975fad4cf5259cc78e923d823f"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-44.png",
    "revision": "fa3369394979554e8db5afa05d5d838b"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-48.png",
    "revision": "353bfff6af481aca1f4a2b98e4131979"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-60.png",
    "revision": "4e36bf4322ac8f8dbd087600526ff640"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-64.png",
    "revision": "33bec4547e52fe28143ecc463ac70517"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-72.png",
    "revision": "b1d53d10ee61f03925b8fa049e7b5afc"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-80.png",
    "revision": "ef5c3186919e8013cf50899f5dda7f04"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-96.png",
    "revision": "407af68fffc29201829929faa6edce39"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-256.png",
    "revision": "c490d9173f153047daeafc5705cbd780"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
    "revision": "577421f3f352da5f136adea470c0713a"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
    "revision": "79f14841c2286d687a2bbbe44df57e1b"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
    "revision": "cdc633dd1c229c5221988e0f139c7159"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
    "revision": "325dd15f2598f0b1887b4c426f1e7dec"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
    "revision": "db8d77d5f445b956989b6bbb63d90884"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
    "revision": "59425de35102241f6f79963defdf642e"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
    "revision": "9b480a975fad4cf5259cc78e923d823f"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
    "revision": "fa3369394979554e8db5afa05d5d838b"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
    "revision": "353bfff6af481aca1f4a2b98e4131979"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
    "revision": "4e36bf4322ac8f8dbd087600526ff640"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
    "revision": "33bec4547e52fe28143ecc463ac70517"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
    "revision": "b1d53d10ee61f03925b8fa049e7b5afc"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
    "revision": "ef5c3186919e8013cf50899f5dda7f04"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
    "revision": "407af68fffc29201829929faa6edce39"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
    "revision": "c490d9173f153047daeafc5705cbd780"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    "revision": "577421f3f352da5f136adea470c0713a"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    "revision": "79f14841c2286d687a2bbbe44df57e1b"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    "revision": "cdc633dd1c229c5221988e0f139c7159"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    "revision": "325dd15f2598f0b1887b4c426f1e7dec"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    "revision": "db8d77d5f445b956989b6bbb63d90884"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    "revision": "59425de35102241f6f79963defdf642e"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    "revision": "9b480a975fad4cf5259cc78e923d823f"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    "revision": "fa3369394979554e8db5afa05d5d838b"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    "revision": "353bfff6af481aca1f4a2b98e4131979"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    "revision": "4e36bf4322ac8f8dbd087600526ff640"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    "revision": "33bec4547e52fe28143ecc463ac70517"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    "revision": "b1d53d10ee61f03925b8fa049e7b5afc"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    "revision": "ef5c3186919e8013cf50899f5dda7f04"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    "revision": "407af68fffc29201829929faa6edce39"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    "revision": "c490d9173f153047daeafc5705cbd780"
  }, {
    "url": "android/android-launchericon-512-512.png",
    "revision": "213fa1a7e6bf8440fe6611c0e60a60bf"
  }, {
    "url": "android/android-launchericon-192-192.png",
    "revision": "9825be0f3c107e6f369d8ea0e6dc6139"
  }, {
    "url": "android/android-launchericon-144-144.png",
    "revision": "dc0324cfab5cfbd1853aabf897fb3aef"
  }, {
    "url": "android/android-launchericon-96-96.png",
    "revision": "3dfdf9d679549d56842dd43cad146c7c"
  }, {
    "url": "android/android-launchericon-72-72.png",
    "revision": "3b5840bbc3305bbac3abc0c3171e4919"
  }, {
    "url": "android/android-launchericon-48-48.png",
    "revision": "9af8ad005c3d6c0ccd74fdf9ecb1ecd6"
  }, {
    "url": "ios/16.png",
    "revision": "1d0fd4c5ef0a577eddd2ebd38513b919"
  }, {
    "url": "ios/20.png",
    "revision": "1681f918f0b640906bbb419f906524c8"
  }, {
    "url": "ios/29.png",
    "revision": "0c0c91bfb90281d008428e146d76045e"
  }, {
    "url": "ios/32.png",
    "revision": "b49bbb8698dfd19b3be7a73dbf589476"
  }, {
    "url": "ios/40.png",
    "revision": "06bb11d10b93ee8b7b69c73fda20847f"
  }, {
    "url": "ios/50.png",
    "revision": "b19de3209ed90090b952831c39f23053"
  }, {
    "url": "ios/57.png",
    "revision": "5aaf197738bb6e0cda91b6d244b483a9"
  }, {
    "url": "ios/58.png",
    "revision": "a74525969ad1b95570b1d4d0066e9577"
  }, {
    "url": "ios/60.png",
    "revision": "31963eaac625d2fee0a457ee1023c2de"
  }, {
    "url": "ios/64.png",
    "revision": "130cd30fcaa99ad278453845bb97b90c"
  }, {
    "url": "ios/72.png",
    "revision": "3b5840bbc3305bbac3abc0c3171e4919"
  }, {
    "url": "ios/76.png",
    "revision": "ce651d975f356aa19eaa878f1fbd76b2"
  }, {
    "url": "ios/80.png",
    "revision": "2acac1ef8727a61cbf5fac7defc56be1"
  }, {
    "url": "ios/87.png",
    "revision": "24f0adff2afd3f820d0f4b19d7e39c75"
  }, {
    "url": "ios/100.png",
    "revision": "9f8037007c16173a78fe6bb823be3a67"
  }, {
    "url": "ios/114.png",
    "revision": "9652d937f8359b89c0677583ff1fb64e"
  }, {
    "url": "ios/120.png",
    "revision": "cf4b571cdaa6ee34c74bc11e24c4866f"
  }, {
    "url": "ios/128.png",
    "revision": "a6062f3f22e1be3df291769001b60bce"
  }, {
    "url": "ios/144.png",
    "revision": "dc0324cfab5cfbd1853aabf897fb3aef"
  }, {
    "url": "ios/152.png",
    "revision": "2804609f285cf01150bb6d3c4bd0e745"
  }, {
    "url": "ios/167.png",
    "revision": "c960ff3f6fd19103bc5e94f7b3abba24"
  }, {
    "url": "ios/180.png",
    "revision": "e29ddb375190c14452c9a625eb27e6da"
  }, {
    "url": "ios/192.png",
    "revision": "9825be0f3c107e6f369d8ea0e6dc6139"
  }, {
    "url": "ios/256.png",
    "revision": "5ad319bdae15acc67b2e1a4cc9e6c915"
  }, {
    "url": "ios/512.png",
    "revision": "213fa1a7e6bf8440fe6611c0e60a60bf"
  }, {
    "url": "ios/1024.png",
    "revision": "819034a0c38552b34c2fd368850daf86"
  }, {
    "url": "manifest.webmanifest",
    "revision": "663b9a98b77a00d23ab34ff2daf0486a"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
