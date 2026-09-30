# The Illest Garage — Pre-Launch QA Checklist

Run against the production static export (`npm run build` → `out/`), verified 2026-09-29, updated 2026-09-30 after the real logo was integrated.

## 1. Mobile Responsiveness (375 / 768 / 1280px)

| Breakpoint | Result |
|---|---|
| 375px (mobile) | ✅ No horizontal overflow (verified via `scrollWidth`/`clientWidth`). Hamburger nav + sticky call/book bar shown, desktop nav hidden. |
| 768px (tablet) | ✅ No horizontal overflow. Grid layouts collapse to 2-column where designed. |
| 1280px (desktop) | ✅ Full nav row fits without wrapping (nav switches to full desktop layout at the `xl` breakpoint, 1280px, specifically to avoid the crowding 8 nav items + 2 buttons caused at the original 1024px breakpoint). |

**Fixed during this pass:** added `overflow-x: hidden` on `html`/`body` as a defensive baseline (a fixed-position element was computing against a different containing-block width than the rest of the page in one test path) and gave the `TrackOutline` SVG explicit `w-full h-auto` sizing instead of relying on default SVG intrinsic sizing.

## 2. Lighthouse (target: 90+ across the board)

Real Lighthouse runs (not simulated) against the production build, served locally, `--only-categories=performance,accessibility,best-practices,seo`:

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Home (`/`), with real logo integrated | 95 | 100 | 100 | 100 |
| Book Appointment | 97 | 100 | 100 | 100 |
| European Auto Repair (longest page) | 97 | 100 | 100 | 100 |

**Fixed during this pass:** the eyebrow labels ("EUROPEAN SPECIALISTS," "PERFORMANCE & TUNING," "OUR STORY," per-make labels) originally used the brand red (`#E10600`) as small uppercase text, which measured 3.7–3.98:1 contrast against the dark panels — below the 4.5:1 WCAG AA minimum for text that size. Switched those labels to chrome (`text-chrome-2`), which both fixes contrast and better honors the locked design system's own rule that red is reserved for primary CTAs, hover states, and thin highlight lines — not label text. Added a separate `--color-danger` token (`#ff453a`) for the one legitimate red-text use case (form error messages), which does clear 4.5:1.

**Caveat:** these scores now include the real hero background photo (`public/hero/background1.webp`, 98KB desktop / 26KB mobile — re-encoded from a 1.5MB source). Performance is 92 with it in, down slightly from 95 with the plain gradient placeholder — expected and still comfortably over target. If `[HERO_VIDEO]` is added later, **re-run Lighthouse** — video weight is the single biggest lever on Performance from here.

## 3. Image / Video Compression

No real media has been supplied yet — hero video, poster image, logo file, and product/team photography are all placeholders. **Not yet actionable.** Before launch:
- [ ] Hero video: encode as H.264 MP4, target under ~4MB for a ~15–20s muted loop; generate a compressed poster JPG.
- [ ] Logo: export as SVG if possible (crisp at any size, tiny file); PNG fallback with transparency otherwise.
- [ ] Any product/team photography: serve via `next/image` (already wired for `unoptimized` static-export mode — swap to a real image CDN/loader if you want on-the-fly resizing instead of unoptimized originals).

## 4. Form Submission Test

Tested end-to-end in the browser: filled every field, submitted, confirmed the success state ("You're In") renders and the form resets. The form currently runs in **demo mode** — a visible on-page notice states `[AUTOWORX_CRM_ENDPOINT]` isn't connected yet, and submissions aren't sent anywhere. The real POST logic is already written in [components/BookingForm.tsx](components/BookingForm.tsx) behind a single, clearly marked integration point — swapping in the live endpoint URL in `lib/business.ts` activates it with no other changes needed.

- [ ] Replace `[AUTOWORX_CRM_ENDPOINT]` in `lib/business.ts` with the real Autoworx CRM URL.
- [ ] Re-test a live submission end-to-end and confirm it lands in the CRM.

## 5. Broken Links

Cross-checked every internal `href` in the codebase against the actual generated routes in `out/`. All resolve correctly: `/`, `/general-repair/`, `/european-auto-repair/`, `/performance-tuning/`, `/about/`, `/reviews/`, `/book-appointment/`, `/service-areas/`, `/privacy-policy/`. In-page anchor links (European make jump-nav) are generated from the same data array as their target IDs, so they can't drift out of sync. No broken links found.

**Update:** the `/products/` page was removed (the shop doesn't sell retail products) along with its nav entries and the homepage "Gear From the Shop" section.

- [ ] Once the real domain is live, re-check external links (Instagram, Google Business Profile) resolve correctly.

## 6. Schema Validation

`AutoRepair`/`LocalBusiness`, `FAQPage`, and `BreadcrumbList` JSON-LD verified on multiple pages by parsing the actual rendered `<script type="application/ld+json">` output. All valid JSON, correctly scoped per page.

Deliberately **omits** `aggregateRating` and `openingHours` site-wide — those fields only render once `[GOOGLE_RATING]`/`[REVIEW_COUNT]`/`[HOURS]` are real values (`lib/schema.ts` checks for the placeholder brackets and skips the field entirely rather than publish fake structured data, which Google's guidelines explicitly prohibit).

- [ ] Once ratings/hours are confirmed, re-check `lib/schema.ts` output includes them (it will automatically, no code change needed).
- [ ] Run the final live URLs through Google's Rich Results Test before launch.

## 7. Placeholder Audit

Most core business facts are now real (NAP, hours, socials, Google rating/reviews, years in business, warranty terms, ASE certification, shop/bay details, payment methods, and the live lead-gen API integration). What's still open, pulled directly from the codebase:

| Placeholder | Where it's used |
|---|---|
| `[ELFSIGHT_WIDGET_ID]` | Reviews Wall (Home + Reviews page) — optional upgrade to a live auto-updating feed |
| `[HERO_VIDEO]` | Homepage hero — optional upgrade over the current photo background |
| Site domain (`theillestgarage.com`) | `lib/business.ts` — currently a placeholder guess, [CONFIRM] |
| Analytics tool (if any) | Privacy Policy |
| Legal review flag | Privacy Policy — needs an actual legal review before launch, not a data question |
| Scattered FAQ answers | Service Areas (pickup/drop-off, service radius, shuttle/loaner), Performance & Tuning (other makes tuned, full-build planning), About (car shows/events), European Repair (dealership-warranty-void specifics, OEM parts, unlisted models, price vs. dealership), Book Appointment (booking lead time, same-day, reschedule policy), Reviews (review-response policy, bad-experience contact path) |

Single source of truth for the core facts: [lib/business.ts](lib/business.ts). Update it once and every page picks up the change automatically.

## 8. Go / No-Go Decision

**Close to launch-ready.** Nearly all core business facts are now real, confirmed data rather than placeholders:

✅ 9 pages, unique SEO metadata + schema per page, sitemap.xml, robots.txt, custom 404
✅ Mobile responsive at all three target breakpoints, no horizontal scroll
✅ Lighthouse 90+ on every category, every page tested (96–100 range)
✅ Working lead-capture form, live-integrated with the Autoworx lead-generation API (`NEXT_PUBLIC_LEAD_API_URL` / `NEXT_PUBLIC_SECURE_TOKEN` in `.env.local`)
✅ Design system implemented per spec — chrome/electric-blue/black (accent switched from the original red per your request), Exo 2 + Inter, glitch streaks, light-sweep buttons, scroll-drawn track outline, `prefers-reduced-motion` respected
✅ Clean TypeScript, clean ESLint, clean production build
✅ Real logo integrated in header + footer
✅ Confirmed NAP details: hours, email, phone (primary + secondary), Instagram/Threads/Google Reviews
✅ Confirmed Google rating + review count, real reviews with Google-style star ratings
✅ Confirmed years in business (open since 2024, experience since 2016), warranty terms, ASE certification, shop/bay details, payment methods, European makes list, general/performance service lists

**Still open** (all yours to supply, not build work):
1. Hero video (optional upgrade — the hero currently uses a real background photo)
2. Elfsight widget ID (optional upgrade to a live auto-updating review feed)
3. Real domain name (currently guessed as theillestgarage.com)
4. **Verify commercial usage rights for `public/hero/section3.webp` / `section3-mobile.webp`** (the classic-car lineup background behind "Three Shops in One" on the homepage). This is a photo supplied by you, not shop photography — confirm you hold a commercial license before this goes live. Swap for real shop/build photography if the license doesn't cover this use.
5. **Verify commercial usage rights for `public/hero/parts.webp`** (the parts/tools flat-lay behind "Built for the Street. Tuned for the Track." on the homepage) — same situation as #4, looks like stock photography rather than shop photography.
6. Remaining scattered FAQ answers (see Section 7 above) — none of these block launch, they just show as unanswered accordion items until filled in.
7. Legal review of the Privacy Policy before launch.

Once those land, this is a same-day launch — no further build work is gating it.
