# GEO Audit Report: Ashlar Studio

**Audit Date:** 2026-10-11
**URL:** https://ashlar-studio.vercel.app
**Business Type:** Agency/Services (architecture & interior design, Mumbai)
**Pages Analyzed:** 1 live (homepage shell) + 19 routes from source (`src/App.jsx`)

---

## Executive Summary

**Overall GEO Score: 12/100 (Critical)**

AI systems can barely see this site. It is a client-rendered Vite SPA: crawlers get an empty `<div id="root">`, and every deep URL (`/about`, `/services`, `/projects`...) returns **HTTP 404** on Vercel. Even after rendering, the content has fake-looking signals: blog authors who aren't on the team, `#` social links, and an award claim that can't be verified. The brand has no third-party footprint and shares its name with another Indian firm, Ashlar Studio Architects in Salem.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 15/100 | 25% | 3.8 |
| Brand Authority | 3/100 | 20% | 0.6 |
| Content E-E-A-T | 25/100 | 20% | 5.0 |
| Technical GEO | 15/100 | 15% | 2.3 |
| Schema & Structured Data | 0/100 | 10% | 0.0 |
| Platform Optimization | 8/100 | 10% | 0.8 |
| **Overall GEO Score** | | | **12/100** |

---

## Critical Issues (Fix Immediately)

1. **Every inner page returns 404.** There is no `vercel.json` SPA rewrite, so `GET /about` gives a 404. Crawlers and shared links hit errors. Fix: add `vercel.json` with `{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}`. Prerendering (item 2) fixes this too.
2. **No indexable content.** The HTML is 983 bytes, all text comes from a 369 KB JS bundle, and GPTBot, ClaudeBot and PerplexityBot don't run JavaScript. Fix: prerender every route at build time (e.g. `vite-react-ssg` or a prerender plugin) or move to SSR.
3. **No structured data at all.** No JSON-LD anywhere.
4. **The brand is not a recognized entity.** There are zero third-party mentions and the name collides with another firm.

## High Priority Issues

- **No robots.txt, sitemap.xml or llms.txt** (all 404). Add them in `public/`.
- **Missing Organization/LocalBusiness schema.** Address, phone and email exist in `src/pages/Contact.jsx:37-51` but aren't marked up.
- **Blog bylines are fake.** Posts are credited to "Arjun Mehta, Founder" and others (`src/data/blog.js:10,25,40,70,85`), but the real founders are Pranav and Shivani Kadoo (`src/data/team.js`). This is the biggest trust problem.
- **One title and meta description for every route.** There are no `og:` tags and no per-page meta.
- **Zero answer blocks.** `src/data/faqs.js` (~10 FAQs) is never imported.

## Medium Priority Issues

- Blog posts are one-sentence teasers ending in "...", labelled "8 min read", and the newest is dated 2024-12.
- Testimonials conflict: the same quote is credited to different clients (`src/data/testimonials.js` vs `src/data/projects.js:25`), and the photos are stock.
- Award claim: "Architecture Firm of the Year — World Architecture Festival 2024" (`src/data/awards.js`). It is unverifiable and a legal risk if untrue.
- Social links are `href="#"` (`src/components/layout/Footer.jsx:19-22`, `src/data/team.js`).
- Team bios have no institution or Council of Architecture registration number, and the photos are stock.
- `/services/:id` routes to a ComingSoon page, which leaves thin pages for the core commercial intent.

## Low Priority Issues

- The site is on a free `vercel.app` subdomain while the emails use `ashlarstudio.com`, so the domain doesn't match.
- About 82 Unsplash hotlinked images. Use real project photos, served locally as WebP.
- Dead files: `src/data/blogs.js`, `src/data/faqs.js` (until it's wired in), and duplicate BackToTop/CookieBanner CSS in `components/ui`.
- Typo: "a infinity pool" (`src/data/projects.js:17`).
- "42 Design District" reads like a template address. Verify it.

---

## Category Deep Dives

### AI Citability (15/100)
- Good: "This 5,000 sq ft villa features open-plan living spaces..." (`projects.js:17`). It is concrete and quantified.
- Bad: "Sustainable architecture is no longer a trend—it's a necessity..." It is a cliché and cut off.
- Rewrite pattern: lead with the fact. Example: "Ashlar Studio is a Mumbai architecture and interior design firm founded in 2010 by Pranav and Shivani Kadoo, with N completed projects across India." Add 134–167-word answer blocks per service, covering what, cost range, timeline and process.

### Brand Authority (3/100)
- Missing everywhere: LinkedIn, Instagram, Houzz, Behance, Google Business Profile, Wikipedia/Wikidata, Reddit, YouTube and press.
- Name collisions: Ashlar Studio Architects (Salem, TN), an ASHLAR Framer template, Ashlar Photography Group, and the generic stone term "ashlar".

### Content E-E-A-T (25/100)
- Strengths: real-sounding founders, real phone numbers, a Mumbai address, and projects with location and year.
- Weaknesses: listed under High and Medium above.

### Technical GEO (15/100)
- Good: HTTPS, HSTS preload, Vercel edge cache (bom1), `lang="en"`, and alt text on all 15 `<img>` tags.
- Bad: CSR-only rendering, 404s on deep routes, and no robots, sitemap or llms.txt. Fonts load render-blocking from Google Fonts.

### Schema & Structured Data (0/100)
- Needed:
  - `Organization` + `LocalBusiness` (ArchitecturalService) with `sameAs`
  - `Person` for the founders
  - `Service` ×8
  - `FAQPage`
  - `Article` with a real author
  - `BreadcrumbList`
  - `CreativeWork` per project

### Platform Optimization (8/100)
- Google AI Overviews, ChatGPT and Perplexity all need crawlable HTML first.
- Bing Copilot also needs a Bing Webmaster sitemap submission.
- Google Business Profile is the single biggest lever for local queries like "architect in Mumbai".

---

## Quick Wins (Implement This Week)

1. Add `vercel.json` rewrites so deep links stop returning 404.
2. Add `public/robots.txt` (allow all, including GPTBot, ClaudeBot and PerplexityBot), `sitemap.xml` and `llms.txt`.
3. Add Organization/LocalBusiness JSON-LD to `index.html`.
4. Change the blog bylines to the real founders, and remove or verify the WAF award.
5. Replace the `#` social links with real profiles, or remove the icons.

## 30-Day Action Plan

### Week 1: Make it crawlable
- [ ] vercel.json rewrites, robots.txt, sitemap.xml, llms.txt
- [ ] Prerender all routes; per-page `<title>`, meta description, OG tags (React 19 supports `<title>`/`<meta>` in components natively)

### Week 2: Fix trust
- [ ] Real authors, real testimonials, real project photos, CoA registration numbers
- [ ] Verify or remove awards; verify the address

### Week 3: Content depth
- [ ] Full 1,000+ word blog posts with dates and author bios
- [ ] Real service pages replacing ComingSoon; wire `faqs.js` into a FAQ section + FAQPage schema

### Week 4: Entity building
- [ ] Custom domain `ashlarstudio.com`
- [ ] Google Business Profile, LinkedIn, Instagram, Houzz.in, Behance; `sameAs` in schema
- [ ] Submit to Google Search Console and Bing Webmaster Tools

---

## Appendix: Pages Analyzed

| URL | Status | GEO Issues |
|---|---|---|
| / | 200 (empty shell) | CSR, no schema, generic meta |
| /about, /services, /projects, /blog, /contact, /careers, /gallery, /case-studies, ... | 404 on direct fetch | Unreachable to crawlers |
| /robots.txt, /sitemap.xml, /llms.txt | 404 | Missing |
