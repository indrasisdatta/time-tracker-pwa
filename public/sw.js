if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => n(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-07a7b4f2"], function (e) {
  "use strict";
  importScripts("fallback-3BYlkoQyHyU5G3C8LHSSu.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "9a0a8ff651be30320a041c3293aadbf6",
        },
        {
          url: "/_next/static/3BYlkoQyHyU5G3C8LHSSu/_buildManifest.js",
          revision: "e0a21c7d7f93d89dce16df0231dc76f2",
        },
        {
          url: "/_next/static/3BYlkoQyHyU5G3C8LHSSu/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/13b76428-58f5b3fb80bc498a.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/230-e149f6438facdd55.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/31-7bb78ddd0a97dcde.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/3bcdfda6-fd5f6beed8963f98.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/402-5828751777859e7e.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/435-6007939d0619ba28.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/631f9b06-38036c473d3a6b0f.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/670-064ef6ff38b8d7b3.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/687-72457ba413428649.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/69-fb82d8c9205eaace.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/703-dd99bb25123e0f85.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/792-2ed0530292e0d9b8.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/804-0eee309923c8973a.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/83-539f77058e1e7cf3.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/9-3b729558395d5056.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/_not-found-268a4e5903c20255.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/auth/login/page-bef4a93ac1b48ac1.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/auth/reset-password/%5B%5B...resetToken%5D%5D/page-f77fdb6946c9eb28.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/auth/signup/page-80bf4cad84384cb3.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/calendar/page-a1f7f452e0f58518.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/calendar/timesheet/%5B%5B...timesheetDate%5D%5D/page-4d20e70a1d658a54.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/category/%5BcatId%5D/page-4cb1425af79b7ba6.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/category/add/page-7e43525f1e3fc776.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/category/page-e6117a5adefa2485.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/layout-bb6e4098b4b4056e.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/offline/page-667f0dcddacf7610.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/page-39a984aa974a3cc6.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/reports/%5B%5B...reportDateRange%5D%5D/page-5a06433a26a5030f.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/app/user/profile/page-a4f0eeb53969fff0.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/ca377847-b7f98f1f9a74ab18.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/e80c4f76-abbcb02fc8c2a142.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/fd9d1056-0d3881cbd3b91e02.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/framework-aec844d2ccbe7592.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/main-126397d5965383ed.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/main-app-f6f49391cea58663.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/pages/_app-75f6107b0260711c.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-254ac4838fb4f1ad.js",
          revision: "3BYlkoQyHyU5G3C8LHSSu",
        },
        {
          url: "/_next/static/css/77e96e9ddff63e98.css",
          revision: "77e96e9ddff63e98",
        },
        {
          url: "/_next/static/css/a752c91895c28151.css",
          revision: "a752c91895c28151",
        },
        {
          url: "/_next/static/css/f592cc67d214d494.css",
          revision: "f592cc67d214d494",
        },
        {
          url: "/_next/static/css/f9fbc1dc296c000c.css",
          revision: "f9fbc1dc296c000c",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/images/icon-128x128.png",
          revision: "8705967b51376f7be950d6b03af22b85",
        },
        {
          url: "/images/icon-144x144.png",
          revision: "270b7d07e7c27b640e9352773df4178a",
        },
        {
          url: "/images/icon-152x152.png",
          revision: "44061e185e07803c4e3dac551641857d",
        },
        {
          url: "/images/icon-192x192.png",
          revision: "bc26ac2dcd34eaebc808ca52cd9773c4",
        },
        {
          url: "/images/icon-384x384.png",
          revision: "859228042e1c267a9846a612df3c548a",
        },
        {
          url: "/images/icon-48x48.png",
          revision: "09ed5c8eb30b64ed03bc09b486c13cdb",
        },
        {
          url: "/images/icon-512x512.png",
          revision: "4dd7b73d65bbd8666d116d4232d5d85f",
        },
        {
          url: "/images/icon-72x72.png",
          revision: "2eb554b2693e04245b9b0d5d41ea4362",
        },
        {
          url: "/images/icon-96x96.png",
          revision: "383a2b025865117eb4327f2b0ccf32ef",
        },
        { url: "/offline", revision: "3BYlkoQyHyU5G3C8LHSSu" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    );
});
