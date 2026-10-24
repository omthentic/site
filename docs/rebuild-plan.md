# Editorial rebuild — 24 October 2026

The user requests a complete modern redesign with photography, transitions and no generic AI styling. This supersedes the earlier plan's dark cosmic identity. Keep the existing Next.js application, routes, company name, factual InterviewMD story and brand conviction. Work locally on `codex/human-editorial-rebuild`.

## Design and implementation

1. Replace the cosmic background and component-card system with warm paper, near-black type, a muted vermilion accent, large DM Sans headings, fine rules and asymmetric layouts. Use locally served forest and conversation photography. Primary inspiration from the user: apple.com. Refine toward centered product storytelling, restrained navigation, all-sans typography and immersive imagery. Earlier research: Instrument, BASIC/DEPT and Pentagram; no copied content or branding.
2. Rebuild home, companies, vision and contact. Home moves from an oversized statement to an immersive image, clear introduction, one real venture, the method and an invitation. Keep the existing 15-year / 1,000-student / 14,000-hour figures grounded in the supplied company copy. Don't present stock subjects as customers or team members.
3. Add progressive scroll reveals, image movement, responsive navigation, restrained hover transitions and accessible accordions. Honor reduced motion, keep content readable without JS, and give all controls visible keyboard focus.
4. Replace the false-success contact form and nonexistent email links with a verified founder contact destination. No new mail provider, invented inbox, fake submission or fabricated company.
5. Refresh metadata, share images and error pages. Remove obsolete effect code. Restore lint/type/build checks rather than suppressing failures.
6. Verify the production build, all four routes, contact path, menu, accordions, mobile layout, reduced motion and no-JS readability in the browser. Preserve the user's untracked OVERHAUL_PLAN.md. Leave deployment to the existing Vercel workflow; no production push in this task.

## Progress

- Inspected existing code and brand source documents; baseline type check fails in the obsolete DeepField effect.
- Confirmed current form discards submissions and renders false success.
- Selected real photography and locally hosted licensed typography.

- User named apple.com as the preferred reference. Refined the design toward a quieter navigation, centered headline, unified sans typography, pill actions and immersive rounded image panels.
- Rebuilt all four pages, replaced the dead form with direct email to admin@omthentic.ai, verified from the founder website’s published contact link, removed obsolete cosmic effects and refreshed metadata/error surfaces.

- Independent code review: fixed no-JS mobile navigation, three secondary-text contrast issues and footer focus visibility.
- Replaced the leftover Vercel favicon with the Omthentic mark and added a matching touch icon.
- Verified all four routes at 360, 768 and 1440 pixels: one main heading, no horizontal overflow, image alt text present.
- Verified no-JS navigation/content across all four routes; reduced-motion disables image animation and transitions.
- Verified mobile menu opening, Escape dismissal/focus restoration and route selection; pointer and keyboard accordion toggles; contact email href; no browser warnings/errors.
- Production build, ESLint, TypeScript and git diff whitespace checks pass. Open Graph and Twitter preview routes return images; unknown route returns HTTP 404.
- Patched Next.js within version 15, restored the ESLint plugin and pinned compatible PostCSS/Sharp overrides. npm audit reports zero vulnerabilities.
