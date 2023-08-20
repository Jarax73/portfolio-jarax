if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
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
  self.define = (i, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => a(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (n(...e), t));
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
          revision: "66120c24555933d61642160339433e21",
        },
        {
          url: "/_next/static/chunks/132-34cdd22bd32de849.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/769-142089c863fe5f75.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/app/layout-11bea751ca697684.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/app/page-730bd5b4eb68a9ca.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/bce60fc1-0f6ac35c65f9fb8b.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/framework-8883d1e9be70c3da.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/main-a11c2eb6622027af.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/main-app-7c88b42ed6ccbbe3.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/pages/_app-998b8fceeadee23e.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-394f997b1926787b.js",
          revision: "irlW5Mj27YXmVkd6fqD8N",
        },
        {
          url: "/_next/static/css/41d0d1a758d9d355.css",
          revision: "41d0d1a758d9d355",
        },
        {
          url: "/_next/static/irlW5Mj27YXmVkd6fqD8N/_buildManifest.js",
          revision: "b78f2f95f712fdbfd1149569fa52161f",
        },
        {
          url: "/_next/static/irlW5Mj27YXmVkd6fqD8N/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/media/2aaf0723e720e8b9-s.p.woff2",
          revision: "e1b9f0ecaaebb12c93064cd3c406f82b",
        },
        {
          url: "/_next/static/media/9c4f34569c9b36ca-s.woff2",
          revision: "2c1fc211bf5cca7ae7e7396dc9e4c824",
        },
        {
          url: "/_next/static/media/ae9ae6716d4f8bf8-s.woff2",
          revision: "b0c49a041e15bdbca22833f1ed5cfb19",
        },
        {
          url: "/_next/static/media/b1db3e28af9ef94a-s.woff2",
          revision: "70afeea69c7f52ffccde29e1ea470838",
        },
        {
          url: "/_next/static/media/b967158bc7d7a9fb-s.woff2",
          revision: "08ccb2a3cfc83cf18d4a3ec64dd7c11b",
        },
        {
          url: "/_next/static/media/c0f5ec5bbf5913b7-s.woff2",
          revision: "8ca5bc1cd1579933b73e51ec9354eec9",
        },
        {
          url: "/_next/static/media/d1d9458b69004127-s.woff2",
          revision: "9885d5da3e4dfffab0b4b1f4a259ca27",
        },
        {
          url: "/assets/cv-FrenchKapilaJared.pdf",
          revision: "7be70393ab911071ab017e701956490d",
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
              state: i,
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
