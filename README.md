# Raafat.os — Mohammed Raafat Portfolio

A Next.js 14 (App Router) portfolio styled as an interactive desktop OS with glassmorphism and matrix-green accents.

## Tech
- Next.js 14 (App Router, RSC)
- React 18 + TypeScript
- CSS Modules-free, single global stylesheet
- Strong SEO: metadata API, OpenGraph, Twitter cards, JSON-LD (Person + WebSite), sitemap.xml, robots.txt, manifest

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
npm run start
```

## SEO checklist
- ✅ Metadata API in `app/layout.tsx` (title template, description, keywords, authors)
- ✅ OpenGraph + Twitter cards
- ✅ Robots directives (index, follow, max-image-preview, max-snippet)
- ✅ Canonical URL
- ✅ JSON-LD `Person` and `WebSite` structured data
- ✅ `sitemap.ts` (auto-generated `sitemap.xml`)
- ✅ `robots.ts` (auto-generated `robots.txt`)
- ✅ `manifest.ts` (PWA-ready)
- ✅ Semantic HTML, lang="en", `dir="ltr"`, viewport, theme-color
- ✅ Performance: font preconnect, no layout shift, compressed responses

## Customize
Update `src/lib/site.ts` with your domain to make canonical/OG URLs absolute.
