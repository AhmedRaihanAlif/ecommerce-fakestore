# MoMagic eCommerce Template

Assignment-ready storefront built with **Next.js App Router + TypeScript**, styled with CSS modules (no UI kit), and powered by **FakeStore API**. Includes home page, category filtering, product detail page, and responsive layout matching the Figma brief.

## Features

- Roboto typography, sticky header, hero slider, feature strip, product grid, newsletter CTA, and footer.
- Live data from `https://fakestoreapi.com/products` and category endpoints, with graceful fallback static data when the API is unavailable.
- Product detail page (`/product/[id]`) with pricing, rating, and purchase CTAs.
- 100% responsive layout using CSS modules and shared design tokens in `globals.css`.

## Project Structure

- `src/app/page.tsx` — main storefront page (SSR data fetch + composed sections).
- `src/app/product/[id]/page.tsx` — product detail route with metadata.
- `src/components/*` — header, hero slider, product section, cards, newsletter, footer.
- `src/lib/api.ts` — typed API client for FakeStore.
- `src/lib/fallbackData.ts` — static fallback products/categories.

## Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

Lint before commits:

```bash
npm run lint
```

## Deployment (Vercel)

1) Push to a public GitHub repo.  
2) In Vercel, “New Project” → import the repo.  
3) Framework: Next.js, root directory: `web` (if deploying from monorepo).  
4) Environment variables: none required.  
5) Deploy — Vercel will build and host the live link.

## Notes for Reviewers

- Remote images allowed via `next.config.ts` (`fakestoreapi.com`, `images.unsplash.com`).  
- Header/footer/slider use static copy per assignment; all nav links are clickable anchors.  
- If an API field is missing, the UI renders safe fallbacks and local sample data.
