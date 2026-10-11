// Build-time prerender: writes static HTML (full content + head tags + JSON-LD) for every
// route so crawlers and AI bots that don't run JavaScript see the real page.
// Run after `vite build` and `vite build --ssr`; see package.json "build".
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const { render, getSeo, routes, SITE_URL } = await import(
  pathToFileURL(path.resolve('dist-server/entry-server.js')).href
);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function page(url, extraNoindex = false) {
  const seo = getSeo(url);
  const noindex = seo.noindex || extraNoindex;
  const head = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${seo.url}" />`,
    `<meta property="og:site_name" content="Ashlar Studio" />`,
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${seo.url}" />`,
    `<meta property="og:image" content="${esc(seo.image)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    ...seo.jsonLd.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`),
  ].join('\n    ');

  return template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
}

function write(url, html) {
  // cleanUrls in vercel.json serves /about from about.html
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true });
  fs.writeFileSync(path.join(dist, file), html);
}

for (const url of routes) write(url, page(url));
for (const url of ['/thank-you', '/auth']) write(url, page(url, true));
fs.writeFileSync(path.join(dist, '404.html'), page('/404-not-found'));

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((u) => `  <url><loc>${SITE_URL}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
fs.rmSync(path.resolve('dist-server'), { recursive: true, force: true });
console.log(`prerendered ${routes.length + 3} pages + sitemap.xml`);
