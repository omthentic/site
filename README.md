# Omthentic

The Omthentic venture site, built with Next.js App Router, React, TypeScript and CSS. Four pages introduce the house, its approach, InterviewMD, and ways to get in touch.

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Use Node.js 20 or later and npm.

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

The production build runs TypeScript and ESLint checks. No error suppression is enabled. Next.js stays on version 15; PostCSS 8.5.31 and Sharp 0.35.5 overrides keep its transitive dependencies patched. The rebuild was verified with a clean dependency audit.

## Structure

- `src/app/(omthentic)/page.tsx`: home
- `src/app/(omthentic)/vision/page.tsx`: approach and principles
- `src/app/(omthentic)/companies/page.tsx`: InterviewMD and founder
- `src/app/(omthentic)/contact/page.tsx`: direct contact
- `src/app/(omthentic)/content.ts`: shared facts, principles and contact details
- `src/app/(omthentic)/omthentic.css`: responsive design and motion
- `src/app/(omthentic)/_components`: navigation, footer, reveal, invitation and icons
- `public/images`: locally hosted photography
- `public/fonts`: locally hosted DM Sans and its license

The visual direction takes cues from apple.com: focused storytelling, consistent typography, large photography and restrained motion. The existing Omthentic philosophy remains grounded in `MANIFESTO.md` and `VISION.md`.

## Contact

The contact page links directly to `admin@omthentic.ai`, verified against the founder's published contact link at https://www.shanakajayakody.com/#contact on 24 October 2026. It opens the visitor's email client. The address is also displayed for copying. There is no submission backend, no database, and no false message-sent state.

## Accessibility and motion

The mobile menu supports Escape, outside click, visible focus and closing when focus leaves. A no-JavaScript stylesheet keeps navigation accessible. Native `details` sections work without JavaScript. Scroll reveals enhance already-visible HTML; unsupported animations leave content intact. Reduced-motion preferences disable motion.

## Assets

Photographs illustrate the subject; they do not identify customers, students or team members.

- Forest: Ingmar, [Unsplash](https://unsplash.com/photos/-tm0PIhVHFQ), local `forest.jpg`.
- Conversation: Christina @ wocintechchat.com, [Unsplash](https://unsplash.com/photos/eF7HN40WbAQ), local `conversation.jpg`.
- DM Sans: Google Fonts, SIL Open Font License, included at `public/fonts/OFL.txt`.

Images are served through Next.js Image with responsive sizes. The hero image is prioritized; supporting images load lazily. Fonts are self-hosted through `next/font/local`.

## Deployment

The existing hosting workflow uses Vercel, with production deployments from `main`. Production uses the canonical host `https://www.omthentic.ai`. The founder profile at `/shanaka-jayakody` retains its structured data and is included in the sitemap.

`NEXT_PUBLIC_SITE_URL` optionally overrides the metadata and sitemap base URL; it defaults to `https://omthentic.ai`.
