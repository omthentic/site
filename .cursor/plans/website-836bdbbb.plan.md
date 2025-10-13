<!-- 836bdbbb-b5ae-4fde-81fd-d9025371d386 2df77a0a-457f-4718-9c53-5bbe7de2a634 -->
# Website Redesign Plan — Align Marketing Site to App (Blue + Hybrid Voice)

## Goals and constraints

- Keep existing hero section unchanged.
- Adopt app-consistent look/feel: blue primary, rounded cards, soft shadows, clean layout, subtle gradients, ample white space.
- Improve clarity and conversion through hybrid voice: credible yet friendly.
- Maintain accessibility (WCAG AA+), good performance, and dark-mode parity.

## Brand system updates (tokens)

Implement a single set of CSS variables referenced by both marketing and app. Source of truth in `src/app/globals.css`, mirrored in `apps/app/src/styles/globals.css` and `packages/ui/styles/globals.css`.

Suggested palette (Blue primary):

- Primary (Blue): 50 `#EFF6FF`, 100 `#DBEAFE`, 200 `#BFDBFE`, 300 `#93C5FD`, 400 `#60A5FA`, 500 `#3B82F6`, 600 `#2563EB`, 700 `#1D4ED8`, 800 `#1E40AF`, 900 `#1E3A8A`
- Accent (Indigo for gradients): 500 `#6366F1` → 600 `#4F46E5`
- Success `#10B981`, Warning `#F59E0B`, Error `#EF4444`
- Neutrals: 50 `#F8FAFC`, 100 `#F1F5F9`, 200 `#E2E8F0`, 300 `#CBD5E1`, 400 `#94A3B8`, 500 `#64748B`, 600 `#475569`, 700 `#334155`, 800 `#1F2937`, 900 `#0F172A`
- Surfaces: base `#FFFFFF`, subtle `#F8FAFF` (very light blue), elevated `#FFFFFF` with shadow

Core tokens (light/dark):

- `--bg`, `--bg-subtle`, `--surface`, `--surface-muted`, `--text`, `--text-muted`, `--brand`, `--brand-contrast`, `--ring`, `--border`, `--shadow-color`
- Radii: `--radius-sm: 8px`, `--radius: 12px`, `--radius-lg: 16px`, `--radius-xl: 20px`
- Shadows: `--shadow-sm: 0 1px 2px rgba(2,6,23,0.06)`, `--shadow-md: 0 6px 20px rgba(2,6,23,0.08)`
- Spacing scale: 4/8/12/16/20/24/32/40/48
- Container widths: `--container: 1120px`, `--container-wide: 1280px`

Implementation sketch (new CSS, do not apply yet):

```css
:root {
  --bg: #FFFFFF; --bg-subtle: #F8FAFF; --surface: #FFFFFF; --surface-muted: #F1F5F9;
  --text: #0F172A; --text-muted: #475569; --brand: #2563EB; --brand-contrast: #FFFFFF;
  --ring: #93C5FD; --border: #E2E8F0; --shadow-color: 2, 6, 23;
  --radius-sm: 8px; --radius: 12px; --radius-lg: 16px; --radius-xl: 20px;
  --shadow-sm: 0 1px 2px rgba(var(--shadow-color), 0.06);
  --shadow-md: 0 6px 20px rgba(var(--shadow-color), 0.08);
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #0B1220; --bg-subtle: #0F172A; --surface: #111827; --surface-muted: #0F172A; --text: #E5E7EB; --text-muted: #9CA3AF; --brand: #3B82F6; --brand-contrast: #0B1220; --ring: #60A5FA; --border: #1F2937; }
}
.button-primary { background: var(--brand); color: var(--brand-contrast); border-radius: var(--radius); box-shadow: var(--shadow-sm); }
.card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
```

Typography

- Headings: Inter or SF Pro Display (weight 700/800). Body: Inter 400/500.
- Letter-spacing tight for display, regular for body. Line-height: headings 1.1–1.2, body 1.6.

Iconography

- Use the same icon set as the app for consistency (outline, 2px stroke). Maintain blue accent for active states.

## Component alignment (marketing to mirror app)

Refactor shared components in `src/app/components/` to use tokens, shapes, and spacing consistent with app cards and steppers.

- Buttons: primary, secondary (outline), tertiary (ghost). Sizes: md, lg. States: hover (brand-700), focus ring, disabled.
- Cards: rounded (16px), subtle shadow, blue icon badge top-left when applicable.
- Steppers/Progress: mimic app's “Step 1 of 4” and progress bar.
- Badges/Chips: soft backgrounds (brand-50) and brand-700 text.
- Stats: `NumberStat.tsx` refreshed with larger numeral, muted label.
- Tabs: underlined active in brand-600.
- Alerts/Toasts: subtle left border color-coded.
- CTA banner: gradient blue→indigo with accessible contrast.

Primary files to touch

- `src/app/components/ModernHeader.tsx`, `src/app/components/Header.tsx`
- `src/app/components/ModernFooter.tsx`, `src/app/components/Footer.tsx`
- `src/app/components/FeatureGridOmthentic.tsx`, `FeatureExperience.tsx`, `TemplatesExperience.tsx`, `FeaturedIn.tsx`
- Blocks: `TrendCard.tsx`, `TimelineStep.tsx`, `PeopleRow.tsx`, `NumberStat.tsx`
- Global styles: `src/app/globals.css`, `packages/ui/styles/globals.css`, `apps/app/src/styles/globals.css`

## Page-level UX updates (hero unchanged)

- Navigation: keep top nav; make it translucent on scroll with hairline border. Primary CTA: “Start Practicing”. Secondary: “Sign in”. Active link in brand-600.
- Home (`src/app/page.tsx` and `src/app/components/ModernHome.tsx`/`RevampHome.tsx`):
  - Below hero: three app-aligned cards: Start Practicing, Take Assessment, Set Goals.
  - “Quick Start Guide” card replicating app’s 1–4 checklist.
  - “How scoring works” section with Content/Structure/Presentation blocks.
  - Social proof (logos), testimonials in card carousel.
- Product pages (`src/app/product/*`): use stepper layouts, scenario cards, and scoring breakdown.
- Solutions pages (`src/app/solutions/*`): standardized hero subhead + grid of benefits with icon badges, plus a “Ready to Start?” card.
- Pricing (`src/app/pricing/page.tsx`):
  - 3 tiers with feature checklist; highlight most popular.
  - Include “What you get” aligned to scoring + progress tracking.
- Resources (`src/app/resources/*`): list with filters (tags), card layout and reading time.
- About/Company/Careers/Blog: update to cards, consistent spacing, and improved headings.
- Footer: simplified columns, product/solutions/resources/company; social icons; small print.

## Copy system (hybrid voice)

Tone: clear, confident, supportive. Use short sentences and concrete outcomes. Avoid jargon unless necessary; explain simply when used.

Navigation labels

- Product, Solutions, Resources, Pricing, Sign in, Start Practicing

Reusable microcopy

- Primary CTA: “Start Practicing”
- Secondary CTA: “Take Assessment”
- Section openers: “Build confidence with practice that mirrors real interviews.”
- Scoring explainer bullets:
  - Content: “Quality and relevance of your response.”
  - Structure: “Organization and clarity of your answer.”
  - Presentation: “Communication style and delivery.”

Example rewrites (non-hero)

- Sub-hero intro: “Your AI coach for medical interviews. Practice authentic scenarios, get actionable feedback, and track progress.”
- Product → How it works: “Choose a mode, answer 3–5 questions, and receive targeted feedback—no scheduling required.”
- Pricing value line: “Start free. Upgrade when you want deeper insights and full-length mock interviews.”
- Testimonials lead-in: “Trusted by students preparing for MMIs and panel interviews.”
- Footer newsletter: “Get interview tips and new scenarios. 1–2 emails per month.”

## Accessibility and performance

- Color contrast AA minimum (brand on white: use 600/700 shades for text, 600+ for buttons).
- Focus states: visible 2px ring in `--ring` color.
- Keyboard navigation for menus and carousels.
- Reduced motion for animations.
- Optimize LCP: compress hero media, preload fonts, lazy-load non-critical images.

## Analytics and experiments

- Track: top CTA clicks, pricing CTA clicks, scroll depth to scoring section, exit on pricing.
- A/B: primary shade 600 vs 700 on CTA; copy variations on sub-hero line.

## Rollout and QA

1. Implement tokens and map components to them.
2. Update header/footer.
3. Convert home sub-sections (cards, guide, scoring, social proof).
4. Update product/solutions/pricing/resources.
5. Copy pass across pages.
6. Accessibility + visual QA in light/dark.
7. Ship behind a feature flag if desired.

## Files likely to change

- `src/app/globals.css`
- `packages/ui/styles/globals.css`
- `apps/app/src/styles/globals.css`
- Components in `src/app/components/*`
- Pages in `src/app/*` (home, product, solutions, resources, pricing)

## Acceptance criteria

- Visual parity with app components (cards, buttons, steppers).
- Blue brand applied consistently. Hero unchanged.
- AA contrast. Keyboard and screen-reader friendly nav.
- Primary CTA visible above the fold across pages.
- Copy follows hybrid voice and is grammatically consistent.

### To-dos

- [ ] Add shared CSS tokens to globals and UI package
- [ ] Refactor buttons/cards/badges to use tokens
- [ ] Restyle header and footer to blue theme and CTA
- [ ] Rebuild home sub-hero cards, guide, scoring, social proof
- [ ] Apply aligned layouts to product pages
- [ ] Standardize solutions pages with icon grids and CTA
- [ ] Redesign pricing with tier cards and checklist
- [ ] Refresh resources, guides, and blog index cards
- [ ] Apply hybrid voice copy across pages and microcopy
- [ ] Accessibility, contrast, keyboard/focus review
- [ ] Add CTA click and scroll depth events
- [ ] Optimize images, preload fonts, lazy-load carousels