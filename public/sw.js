if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => a(e, i),
      o = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-7c2a5a06"], function (e) {
  "use strict";
  importScripts(),
    self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "a8e47c03b7fac367cd0ed97d5f43b81e",
        },
        {
          url: "/_next/static/chunks/245-52b7e77c7f8792d3.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/464-a151c7c6bd8db077.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/769-b6476f05062d15cc.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-7bf649987bd99132.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/page-2bbd5d7861b08e08.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/bce60fc1-a20d672ca7b082ea.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/framework-8883d1e9be70c3da.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/main-16c0cf1d0a856b61.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/main-app-7c88b42ed6ccbbe3.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/pages/_app-998b8fceeadee23e.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-84e70d283f2caa0a.js",
          revision: "teUaKpPNx5wGJg5bsDzYQ",
        },
        {
          url: "/_next/static/css/116f31bd49b9f6f2.css",
          revision: "116f31bd49b9f6f2",
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
          url: "/_next/static/teUaKpPNx5wGJg5bsDzYQ/_buildManifest.js",
          revision: "b78f2f95f712fdbfd1149569fa52161f",
        },
        {
          url: "/_next/static/teUaKpPNx5wGJg5bsDzYQ/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/assets/cv-EnglishKapilaJared.pdf",
          revision: "9759147f5cd447e13960773b15587789",
        },
        {
          url: "/assets/cv-FrenchKapilaJared.pdf",
          revision: "7eaa86adcd729993969162a6c5ce59d2",
        },
        {
          url: "/assets/landingpage.png",
          revision: "c9d27c8ecd37f663f1f93f55d93df5d3",
        },
        {
          url: "/assets/musicapp.png",
          revision: "69ca395c20e1fbc278832fa3729635e5",
        },
        {
          url: "/assets/spajavascript.png",
          revision: "37faa1472b5d9dbc1e0734e3240674c5",
        },
        { url: "/favicon.ico", revision: "272b18b763c1e6b937e110a17543bc75" },
        {
          url: "/icon-192x192.png",
          revision: "0301466332dacc458edc60125e7d618a",
        },
        {
          url: "/icon-256x256.png",
          revision: "547e55111807b263ddf6c12df0d340eb",
        },
        {
          url: "/icon-384x384.png",
          revision: "fa87acc17385e0ceae2cc093699ec830",
        },
        {
          url: "/icon-512x512.png",
          revision: "22ee34956c1a5eaf4a0d8de8bdbbd9da",
        },
        { url: "/jared.png", revision: "d74d405c7d7c8962e545a83c2d28b864" },
        { url: "/manifest.json", revision: "4229ad6d4a3f27a6c866543d73208cc7" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
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
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
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
        ],
      }),
      "GET"
    );
});
