# The Illest Garage — Round 1: Sitemap + Page-by-Page Copy Deck

Dallas, GA · "Street . Track . Show" · (770) 758-9396 · 203 White Park Dr, Unit 1, Dallas, GA 30132

---

## Open Items Before Round 2 (Build) Starts

These don't block copy approval, but they block a real build:

| Item | Status | Needed for |
|---|---|---|
| Logo file | Not received in this session — only described (chrome wordmark + flag/track/star icons) | Header, footer, favicon, OG image |
| [HERO_VIDEO] footage | Placeholder | Home hero |
| Products screenshot | Not received | Products page real catalog |
| [EURO_MAKES] confirmed list | Drafted below as BMW / Mercedes-Benz / Audi / Volkswagen / Porsche — **please confirm or edit** | European Auto Repair page structure |
| [ELFSIGHT_WIDGET_ID] | Placeholder | Reviews wall (home + Reviews page) |
| [GOOGLE_RATING] / [REVIEW_COUNT] | Placeholder | Hero trust stat, Reviews page |
| [AUTOWORX_CRM_ENDPOINT] | Placeholder | Booking form submit |
| [HOURS], [EMAIL], [GOOGLE_BUSINESS_PROFILE_URL], [OTHER_SOCIALS] | Placeholder | Footer, schema, contact sections |
| [YEARS_IN_BUSINESS], [WARRANTY] | Placeholder | Trust sections, About, General Repair |
| [SERVICE_DETAILS] | Drafted below with standard general-repair line items — **please confirm or edit** | General Repair page |
| [PRODUCTS] | Drafted below with placeholder categories pending your screenshot | Products page |

Every bracketed value below stays a literal placeholder in the copy — nothing here is an invented fact.

---

## Full Sitemap

| # | Page | Slug | Target Keyword |
|---|---|---|---|
| 1 | Home | `/` | auto repair shop Dallas GA |
| 2 | General Repair | `/general-repair` | general auto repair Dallas GA |
| 3 | European Auto Repair | `/european-auto-repair` | European auto repair Dallas GA |
| 4 | Performance & Tuning | `/performance-tuning` | performance shop Dallas GA |
| 5 | Products | `/products` | performance parts Dallas GA |
| 6 | About | `/about` | The Illest Garage Dallas GA |
| 7 | Reviews | `/reviews` | The Illest Garage reviews |
| 8 | Book Appointment | `/book-appointment` | book auto repair appointment Dallas GA |
| 9 | Service Areas | `/service-areas` | auto repair near Hiram Powder Springs GA |
| 10 | Privacy Policy | `/privacy-policy` | — (utility page, noindex-eligible, no target keyword) |

Note on Privacy Policy: it's a legal/utility page, not a conversion page. I've kept it out of the "5-7 sections + 3-5 FAQs" pattern (fake FAQs on a legal page would read as filler and hurt trust) but it still ends in Booking + footer per your stop condition. Flag if you want it forced into the standard template instead.

---

## Global Elements (present on every page)

**Header / Nav** — Logo (chrome wordmark, left) · Home · General Repair · European Repair · Performance & Tuning · Products · About · Reviews · Service Areas · nav-right: chrome-outline "Call Now (770) 758-9396" + red "Book Appointment" button. Collapses to hamburger under 1024px.

**Sticky mobile bar** — fixed bottom strip, mobile only, two-up: chrome-outline "Call Now" / red "Book Appointment". Always visible while scrolling; addresses Key Risk 3 (visitors leaving without calling/booking) on every screen, not just the CTA sections.

**Booking Section** (last content section on every page, before footer) —
- Headline: "Ready to Build, Fix, or Tune Your Ride?"
- Subhead: "Tell us what it needs. We'll take it from there." + trust line: "Rated [GOOGLE_RATING]★ from [REVIEW_COUNT] Google reviews [CONFIRM]"
- Primary CTA: "Book Appointment" (red, links to `/book-appointment`, or embeds the form directly on `/book-appointment` itself)
- Secondary CTA: "Call Now — (770) 758-9396" (chrome outline, `tel:` link)
- Key Risk addressed: #3 (leaving without booking), reinforced by #2 (trust stat)

**Footer** —
- Logo + tagline "Street . Track . Show"
- NAP: The Illest Garage · 203 White Park Dr, Unit 1, Dallas, GA 30132 · (770) 758-9396 · [EMAIL]
- Hours: [HOURS]
- Google Maps embed of the shop address
- Socials: Instagram @theillestgarage, [OTHER_SOCIALS]
- Quick links (repeats primary nav) + Privacy Policy
- © [current year] The Illest Garage. All rights reserved.
- Key Risk addressed: #1 (local SEO — NAP consistency, map embed) and #2 (legitimacy/trust)

---

## 1. Home — `/`

**SEO**
- Title tag: `The Illest Garage | Performance, European & General Auto Repair — Dallas, GA` (63 chars — trim to `The Illest Garage | Auto Repair & Performance Shop, Dallas GA` if you want under 60)
- Meta description: `Street. Track. Show. The Illest Garage in Dallas, GA handles general repair, European specialty work, and performance tuning. Book your appointment today.`
- H1: `Dallas, GA's Shop for Street, Track, and Show`
- Target keyword: auto repair shop Dallas GA

**Goal + CTA:** Convert cold traffic into a call or booked appointment within one scroll. Primary CTA: Book Appointment. Secondary: Call Now.

### Sections

**1. Hero**
- Headline: "STREET. TRACK. SHOW." (logo wordmark treatment, chrome gradient, Exo 2 Black Italic)
- Subhead: "Dallas, Georgia's shop for honest repair, European specialty work, and real performance builds."
- Body: "From daily-driver maintenance to full track builds, The Illest Garage handles it under one roof."
- CTA: "Book Appointment" (red, primary) / "Call Now" (chrome outline, secondary)
- Trust stat: "[GOOGLE_RATING]★ · [REVIEW_COUNT] Google Reviews [CONFIRM]"
- Key Risk: #2 (look premium, not generic), #3 (immediate dual CTA above the fold)

**2. Trust Bar**
- Strip of 4 stats: "[YEARS_IN_BUSINESS] Years in Business [CONFIRM]" · "[REVIEW_COUNT]+ Google Reviews [CONFIRM]" · "3 Specialties, 1 Shop" · "[WARRANTY] [CONFIRM]"
- Key Risk: #2

**3. Services Overview**
- Headline: "Three Shops in One"
- 3 cards: General Repair / European Specialist / Performance & Tuning, each with a one-line description and "Learn More" link to its inner page.
  - General Repair: "Honest diagnostics and real fixes for daily drivers."
  - European Specialist: "Factory-level care for BMW, Mercedes-Benz, Audi, and more."
  - Performance & Tuning: "Dyno tuning, builds, and bolt-ons for street, track, and show."
- CTA per card: "Learn More"
- Key Risk: #1 (internal linking/keyword coverage), #2

**4. Why Choose Us**
- Headline: "Not a Dealership. Not a Chain."
- Body: "One shop, one team, and a genuine reason to earn your trust every visit. No upsells you don't need — just straight answers on what your car needs and why."
- 3-4 value props (icons: flag/track/star markers): Transparent quotes · Enthusiast-owned · [WARRANTY] [CONFIRM] · Modern diagnostic equipment
- Key Risk: #2

**5. European Makes Strip**
- Headline: "European Specialists, Factory-Trained Eye"
- Body: "BMW. Mercedes-Benz. Audi. Volkswagen. Porsche. [EURO_MAKES — CONFIRM LIST] We know what these cars need and what they don't."
- CTA: "See European Repair Services" → `/european-auto-repair`
- Key Risk: #1, #2

**6. Performance & Tuning Teaser**
- Headline: "Built for the Street. Tuned for the Track."
- Body: "Dyno tuning, forced induction, suspension, and full builds — for daily drivers that want more and track cars that need to hold up."
- CTA: "Explore Performance & Tuning" → `/performance-tuning`
- Key Risk: #2, #3

**7. Featured Products**
- Headline: "Gear From the Shop"
- Body: "[PRODUCTS — pending your screenshot; drafting as Wheels & Tires / Suspension & Handling / Exhaust & Intake / Apparel & Merch]"
- CTA: "Shop Products" → `/products`
- Key Risk: #2

**8. Reviews Wall**
- Headline: "What Dallas Drivers Are Saying"
- Elfsight Google Reviews widget embed [ELFSIGHT_WIDGET_ID]
- CTA: "Read More Reviews" → `/reviews`
- Key Risk: #2 (trust), #1 (review schema/freshness signal)

**9. Service Areas Strip**
- Headline: "Proudly Serving Dallas and Beyond"
- Body: "Also serving Hiram, Powder Springs, Douglasville, Marietta, and Acworth."
- Small map graphic / city chips, each linking to `/service-areas`
- Key Risk: #1

**10. About Teaser**
- Headline: "Built by Enthusiasts, for Enthusiasts"
- Body: "The Illest Garage started with a simple idea: a shop that treats your car like its own. [YEARS_IN_BUSINESS] years later [CONFIRM], that hasn't changed."
- CTA: "Our Story" → `/about`
- Key Risk: #2

**11. Booking Section** (global template) + **Footer** (global template)

**Design notes:** Full-bleed [HERO_VIDEO] with dark gradient overlay + poster fallback + lighter mobile variant; speed-streak/glitch lines behind hero headline; chrome divider with lens flare between sections 4→5 and 8→9; race-track SVG stroke-draws itself on scroll into section 9 (map); flag/track/star icons mark section 4's value props. All motion gated behind `prefers-reduced-motion` and IntersectionObserver (no animation library).

**Build:** `app/page.tsx`, `components/Hero.tsx`, `components/TrustBar.tsx`, `components/ServiceCards.tsx`, `components/ReviewsWall.tsx`, `components/BookingSection.tsx`, `components/Footer.tsx`. Open placeholders: [HERO_VIDEO], [GOOGLE_RATING], [REVIEW_COUNT], [YEARS_IN_BUSINESS], [WARRANTY], [PRODUCTS], [ELFSIGHT_WIDGET_ID], [EURO_MAKES].

---

## 2. General Repair — `/general-repair`

**SEO**
- Title: `General Auto Repair in Dallas, GA | The Illest Garage`
- Meta description: `Brakes, fluids, suspension, electrical, and diagnostics for daily drivers in Dallas, GA. Honest work, real fixes. Book your repair today.`
- H1: `Honest General Auto Repair in Dallas, GA`
- Target keyword: general auto repair Dallas GA

**Goal + CTA:** Convert daily-driver owners who want a trustworthy alternative to the dealership. Primary: Book Appointment. Secondary: Call Now.

### Sections

**1. Hero**
- Headline: "Your Daily Driver, Done Right"
- Body: "From routine maintenance to check-engine-light diagnostics, we keep Dallas drivers on the road without the dealership markup."
- CTA: Book Appointment / Call Now
- Key Risk: #3

**2. Services Grid** *(drafted from [SERVICE_DETAILS] — confirm/edit)*
- Headline: "What We Handle"
- Items: Oil & Fluid Service · Brakes & Rotors · Suspension & Steering · A/C & Heating · Electrical & Diagnostics · Engine & Transmission · Tires & Alignment
- CTA: "Book This Service"
- Key Risk: #2, #3

**3. Why Choose Us for General Repair**
- Headline: "Dealership-Level Diagnostics, Shop-Level Honesty"
- Body: "We explain what's actually wrong, what it costs, and what can wait. No pressure, no invented repairs."
- Key Risk: #2

**4. Our Process**
- Headline: "How It Works"
- Steps: Drop Off → Diagnose → Get a Straight Quote → We Fix It → You're Back on the Road
- Key Risk: #2, #3

**5. Warranty / Guarantee**
- Headline: "Backed By Us"
- Body: "[WARRANTY — CONFIRM terms]"
- Key Risk: #2

**6. FAQs**
- "Do you work on all makes and models?" → "[CONFIRM — assumed yes for general repair, European makes get specialty handling on our European page.]"
- "How long does a typical repair take?" → "[CONFIRM — varies by service; placeholder answer.]"
- "Do you offer loaner cars or shuttle service?" → "[CONFIRM]"
- "What payment methods do you accept?" → "[CONFIRM]"
- Key Risk: #2, #3

**7. Booking Section** + **Footer**

**Design notes:** Chrome divider under hero; flag icon marks the services grid; lighter use of red — reserved for CTA buttons only, no red fills on the process steps.

**Build:** `app/general-repair/page.tsx`, reuses `ServiceCards`, `ProcessSteps` (new), `FAQAccordion` (new, shared component), `BookingSection`, `Footer`. Open placeholders: [SERVICE_DETAILS], [WARRANTY].

---

## 3. European Auto Repair — `/european-auto-repair`

**SEO**
- Title: `European Auto Repair in Dallas, GA | BMW, Mercedes, Audi & More`
- Meta description: `Specialty repair and maintenance for BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche in Dallas, GA. Factory-level care without the dealership price.`
- H1: `European Auto Repair Specialists in Dallas, GA`
- Target keyword: European auto repair Dallas GA

**Goal + CTA:** Reassure European/luxury owners this shop has the specific expertise their dealership implies only they can offer. Primary: Book Appointment. Secondary: Call Now.

### Sections

**1. Hero**
- Headline: "European Engineering Deserves European Expertise"
- Body: "BMW. Mercedes-Benz. Audi. Volkswagen. Porsche. [EURO_MAKES — CONFIRM] We know these cars inside and out — without the dealership price tag."
- CTA: Book Appointment / Call Now
- Key Risk: #2, #3

**2. Why European Cars Need a Specialist**
- Headline: "Not Just Another Repair Shop"
- Body: "European vehicles run different electronics, different fluids, and different tolerances than most daily drivers. We treat them that way."
- Key Risk: #2

**3-7. Per-Make Sections** *(draft list — CONFIRM/EDIT [EURO_MAKES])*

- **BMW** — "Precision Engineering, Precision Service." Body: "From routine maintenance to complex electrical diagnostics, we service BMW's full lineup with the tools and knowledge dealership techs use." Common services: Oil service · Brake service · Cooling system · Diagnostics.
- **Mercedes-Benz** — "Luxury That Runs Like It Should." Body: "We maintain the comfort and performance Mercedes-Benz owners expect, backed by real diagnostic depth." Common services: Suspension (airmatic) · Electrical · Fluid service · Diagnostics.
- **Audi** — "Quattro-Ready, Detail-Focused." Body: "Audi's all-wheel-drive systems and turbocharged engines get handled by technicians who know the platform." Common services: Turbo/engine service · Drivetrain · Diagnostics.
- **Volkswagen** — "Built Different. Serviced Right." Body: "From daily-driver GTIs to TDIs, we keep VWs running the way they were engineered to." Common services: Maintenance · Timing/engine service · Diagnostics.
- **Porsche** — "Track-Bred, Shop-Maintained." Body: "Porsche ownership deserves a shop that respects the engineering — and the driving." Common services: Performance maintenance · Brake service · Diagnostics.

Each make section CTA: "Book [Make] Service" → Key Risk: #1 (keyword coverage per make), #2

**8. Equipment & Diagnostics Callout**
- Headline: "Factory-Level Tools, Independent-Shop Prices"
- Body: "[SERVICE_DETAILS/EQUIPMENT — CONFIRM specifics, e.g. brand-specific scan tools]"
- Key Risk: #2

**9. Warranty**
- Body: "[WARRANTY — CONFIRM]"
- Key Risk: #2

**10. FAQs**
- "Will servicing here void my factory warranty?" → "[CONFIRM — standard answer: independent shops using OEM-spec parts do not void warranty under the Magnuson-Moss Warranty Act, but confirm before publishing.]"
- "Do you use OEM parts?" → "[CONFIRM]"
- "Do you work on models not listed here?" → "[CONFIRM]"
- "How do your prices compare to the dealership?" → "[CONFIRM]"
- Key Risk: #2, #3

**11. Booking Section** + **Footer**

**Design notes:** Each make section uses a consistent card template (badge/marque placeholder, headline, body, service list, CTA) so it reads as a system, not five different designs. Chrome divider between each make section keeps the long page scannable; sticky in-page sub-nav (jump to BMW / Mercedes-Benz / Audi / VW / Porsche) recommended for usability given page length.

**Build:** `app/european-auto-repair/page.tsx`, `components/MakeSection.tsx` (repeatable), `components/InPageNav.tsx` (new), `FAQAccordion`, `BookingSection`, `Footer`. Open placeholders: [EURO_MAKES] (list + count), [SERVICE_DETAILS], [WARRANTY].

---

## 4. Performance & Tuning — `/performance-tuning`

**SEO**
- Title: `Performance & Tuning Shop in Dallas, GA | The Illest Garage`
- Meta description: `Dyno tuning, forced induction, suspension, and full builds in Dallas, GA. Street, track, and show builds handled by enthusiasts. Book your build today.`
- H1: `Performance & Tuning in Dallas, GA`
- Target keyword: performance shop Dallas GA

**Goal + CTA:** Convert enthusiasts researching builds/tuning into a consultation booking. Primary: Book Appointment. Secondary: Call Now.

### Sections

**1. Hero**
- Headline: "STREET. TRACK. SHOW. BUILT HERE."
- Body: "Whether you're chasing numbers on the dyno, seat time at the track, or a show-stopping build, we make it happen."
- CTA: Book Appointment / Call Now
- Key Risk: #2, #3

**2. Dyno & Tuning Services**
- Headline: "Dial It In"
- Body: "[SERVICE_DETAILS — CONFIRM: dyno tuning, ECU tuning, forced induction tuning, etc.]"
- Key Risk: #2

**3. Build Types** (ties directly to tagline)
- Headline: "Street. Track. Show."
- 3 cards:
  - Street: "Daily-driver builds with real power gains and real reliability."
  - Track: "Suspension, brakes, and cooling built to survive laps, not just launches."
  - Show: "Builds that turn heads — fit, finish, and details that matter."
- Key Risk: #2, #3

**4. Featured Mods & Services**
- Headline: "What We Build"
- Body: "[SERVICE_DETAILS — CONFIRM: forced induction, exhaust, suspension, ECU tuning, bolt-ons, full builds]"
- Key Risk: #2

**5. Consultation Process**
- Headline: "Every Build Starts With a Conversation"
- Body: "Tell us your goals — daily comfort, lap times, or show points — and we'll build a plan around them."
- CTA: "Book a Consultation"
- Key Risk: #3

**6. FAQs**
- "Do you tune vehicles other than [makes]?" → "[CONFIRM]"
- "Can you help me plan a full build, not just one part?" → "[CONFIRM — assumed yes]"
- "Do you offer dyno time only, without other work?" → "[CONFIRM]"
- "What's the turnaround time on a tune?" → "[CONFIRM]"
- Key Risk: #2, #3

**7. Booking Section** + **Footer**

**Design notes:** Heaviest use of the speed-streak/glitch motif and the race-track SVG stroke animation (this page is the brand's enthusiast core). Star icon marks "Show" card, flag marks "Street", track outline marks "Track" — ties the locked icon set directly to the tagline for the first time on the site.

**Build:** `app/performance-tuning/page.tsx`, `components/BuildTypeCards.tsx`, `FAQAccordion`, `BookingSection`, `Footer`. Open placeholders: [SERVICE_DETAILS].

---

## 5. Products — `/products`

**SEO**
- Title: `Performance Parts & Products in Dallas, GA | The Illest Garage`
- Meta description: `Shop wheels, suspension, exhaust, and more from The Illest Garage in Dallas, GA. Installed by the team that tunes it.`
- H1: `Products From The Illest Garage`
- Target keyword: performance parts Dallas GA

**Goal + CTA:** Showcase side products, drive installs booked through the shop rather than a standalone e-commerce flow (no cart/checkout implied unless you confirm otherwise). Primary: Book Appointment (for install). Secondary: Call Now.

### Sections

**1. Hero**
- Headline: "Gear We Stand Behind"
- Body: "Parts and products we run ourselves — sold and installed by the same team that builds your car."
- Key Risk: #2, #3

**2. Product Categories** *(placeholder — awaiting your screenshot)*
- Headline: "Shop by Category"
- Draft categories: Wheels & Tires · Suspension & Handling · Exhaust & Intake · Forced Induction · Apparel & Merch
- Key Risk: #2

**3. Featured Products**
- Headline: "Popular Right Now"
- Body: "[PRODUCTS — pending screenshot]"
- Key Risk: #2

**4. Installation Services Teaser**
- Headline: "We Don't Just Sell It — We Install It"
- Body: "Every product we carry can be installed and dialed in on-site."
- CTA: "Book Installation"
- Key Risk: #3

**5. FAQs**
- "Can I buy a product without having it installed here?" → "[CONFIRM]"
- "Do you special-order parts you don't stock?" → "[CONFIRM]"
- "Do you offer financing on parts or builds?" → "[CONFIRM]"
- Key Risk: #2, #3

**6. Booking Section** + **Footer**

**Design notes:** Grid layout, product photography placeholders (1:1 ratio) until real assets arrive; keep red strictly to "Book Installation" CTAs, not category tiles.

**Build:** `app/products/page.tsx`, `components/ProductGrid.tsx`, `FAQAccordion`, `BookingSection`, `Footer`. Open placeholders: [PRODUCTS] (full catalog, pending screenshot).

---

## 6. About — `/about`

**SEO**
- Title: `About The Illest Garage | Dallas, GA Auto Shop`
- Meta description: `The Illest Garage is a Dallas, GA shop built by enthusiasts for daily drivers, European owners, and performance builds alike. Here's our story.`
- H1: `About The Illest Garage`
- Target keyword: The Illest Garage Dallas GA

**Goal + CTA:** Build trust/brand affinity for undecided visitors. Primary: Book Appointment. Secondary: Call Now.

### Sections

**1. Hero**
- Headline: "Street. Track. Show. That's Not Just a Tagline."
- Body: "The Illest Garage was built by people who love cars, for people who love cars — and for the ones who just need theirs fixed right."
- Key Risk: #2

**2. Founder / Team Story**
- Headline: "Who We Are"
- Body: "[CONFIRM — founder background, team size, years of combined experience]"
- Key Risk: #2

**3. Mission & Values**
- Headline: "Why We Do This"
- Body: "Honest work. Real craftsmanship. No shortcuts, whether it's an oil change or a full build."
- Key Risk: #2

**4. Facility & Equipment**
- Headline: "The Shop"
- Body: "[CONFIRM — bay count, equipment, dyno on-site?]"
- Key Risk: #2

**5. Community / Culture**
- Headline: "Part of the Scene, Not Just a Vendor"
- Body: "Follow the builds, the shows, and the shop life on Instagram [@theillestgarage]."
- CTA: "Follow on Instagram"
- Key Risk: #2

**6. FAQs**
- "How long has The Illest Garage been open?" → "[YEARS_IN_BUSINESS — CONFIRM]"
- "Are you certified/ASE certified technicians?" → "[CONFIRM]"
- "Do you attend local car shows or events?" → "[CONFIRM]"
- Key Risk: #2

**7. Booking Section** + **Footer**

**Design notes:** More photography-led than other pages (team/shop photos, placeholders until supplied); chrome divider separates story from values; Instagram embed or static grid teaser, static preferred for performance.

**Build:** `app/about/page.tsx`, `components/TeamStory.tsx`, `FAQAccordion`, `BookingSection`, `Footer`. Open placeholders: [YEARS_IN_BUSINESS], founder/team details, facility details.

---

## 7. Reviews — `/reviews`

**SEO**
- Title: `Reviews | The Illest Garage — Dallas, GA`
- Meta description: `See what Dallas, GA customers say about The Illest Garage — general repair, European service, and performance builds.`
- H1: `What Our Customers Say`
- Target keyword: The Illest Garage reviews

**Goal + CTA:** Convert trust into action for visitors who came specifically to vet the shop. Primary: Book Appointment. Secondary: Call Now.

### Sections

**1. Hero**
- Headline: "[GOOGLE_RATING]★ from [REVIEW_COUNT] Reviews [CONFIRM]"
- Body: "Real feedback from real customers — daily drivers, European owners, and builds alike."
- Key Risk: #2

**2. Reviews Wall**
- Full Elfsight Google Reviews widget embed [ELFSIGHT_WIDGET_ID]
- Key Risk: #2

**3. Why It Matters**
- Headline: "We Earn Every Review"
- Body: "No incentivized reviews, no gimmicks — just the work speaking for itself."
- Key Risk: #2

**4. Leave a Review CTA**
- Headline: "Had a Great Experience?"
- Body: "Tell other Dallas drivers about it."
- CTA: "Leave a Google Review" → [GOOGLE_BUSINESS_PROFILE_URL]
- Key Risk: #1 (ongoing review velocity helps local SEO), #2

**5. FAQs**
- "Where can I leave a review?" → links to [GOOGLE_BUSINESS_PROFILE_URL]
- "Do you respond to reviews?" → "[CONFIRM]"
- "What if I had a bad experience?" → "[CONFIRM — recommend direct contact path via phone/email]"
- Key Risk: #2

**6. Booking Section** + **Footer**

**Design notes:** Reviews wall is the visual centerpiece — minimal competing effects on this page so the widget (and its star ratings) stays the focus, consistent with the eurofedautomotive.com reference.

**Build:** `app/reviews/page.tsx`, `components/ReviewsWall.tsx` (shared with Home), `FAQAccordion`, `BookingSection`, `Footer`. Open placeholders: [ELFSIGHT_WIDGET_ID], [GOOGLE_RATING], [REVIEW_COUNT], [GOOGLE_BUSINESS_PROFILE_URL].

---

## 8. Book Appointment — `/book-appointment`

**SEO**
- Title: `Book an Appointment | The Illest Garage — Dallas, GA`
- Meta description: `Schedule your repair, European service, or performance build at The Illest Garage in Dallas, GA. Fast, easy online booking.`
- H1: `Book Your Appointment`
- Target keyword: book auto repair appointment Dallas GA

**Goal + CTA:** This page IS the primary conversion event. Primary: submit booking form. Secondary: Call Now (for anyone who'd rather not fill a form).

### Sections

**1. Hero**
- Headline: "Let's Get Your Car Sorted"
- Body: "Fill out the form below and we'll confirm your appointment — or call us directly."
- Key Risk: #3

**2. Booking Form** (the core asset)
- Fields: Name · Phone · Email · Vehicle Year/Make/Model · Service Needed (dropdown: General Repair / European Specialist / Performance & Tuning / Other) · Preferred Date · Message
- Submit action: styled POST to [AUTOWORX_CRM_ENDPOINT] — single clearly marked integration point in the component
- Inline validation, success/error states, no dark patterns (no pre-checked marketing opt-ins)
- Key Risk: #3 (this is the fix for it), #4 (form must stay lightweight — no heavy form library needed for 8 fields)

**3. What Happens Next**
- Headline: "What to Expect"
- Body: "We'll confirm your appointment by phone or email within [CONFIRM — e.g. one business day]."
- Key Risk: #3

**4. Call Now Alternative**
- Headline: "Prefer to Talk It Through?"
- Body: "Call us directly at (770) 758-9396."
- Key Risk: #3

**5. FAQs**
- "How far in advance should I book?" → "[CONFIRM]"
- "Can I book a same-day appointment?" → "[CONFIRM]"
- "What if I need to reschedule?" → "[CONFIRM]"
- Key Risk: #3

**6. Footer** (no separate Booking Section needed — the whole page is the booking flow; the form itself satisfies the stop condition)

**Design notes:** Minimal effects on this page by design — no glitch/speed-streak behind the form, just the chrome divider and a subtle lens flare at top. This is the one page where speed and clarity outrank brand flourish (directly defends Key Risk #4).

**Build:** `app/book-appointment/page.tsx`, `components/BookingForm.tsx` (client component, the one page needing interactivity beyond scroll effects), `Footer`. Open placeholder: [AUTOWORX_CRM_ENDPOINT] (single marked integration point in `BookingForm.tsx`).

---

## 9. Service Areas — `/service-areas`

**SEO**
- Title: `Auto Repair Near Hiram, Powder Springs & Marietta, GA | The Illest Garage`
- Meta description: `The Illest Garage in Dallas, GA proudly serves Hiram, Powder Springs, Douglasville, Marietta, and Acworth with repair, European service, and tuning.`
- H1: `Serving Dallas, GA and the Surrounding Area`
- Target keyword: auto repair near Hiram Powder Springs GA

**Goal + CTA:** Capture "near me" and nearby-city search intent. Primary: Book Appointment. Secondary: Call Now.

### Sections

**1. Hero**
- Headline: "Dallas-Based. Serving the Whole Area."
- Body: "Drivers from Hiram, Powder Springs, Douglasville, Marietta, and Acworth trust The Illest Garage for repair, European service, and performance builds."
- Key Risk: #1, #3

**2. Map & Primary Location**
- Google Maps embed centered on 203 White Park Dr, Unit 1, Dallas, GA 30132
- Key Risk: #1

**3-7. Per-City Sections**
- **Hiram, GA** — "Just minutes from Hiram, we're the closer, more personal alternative to the dealership."
- **Powder Springs, GA** — "Powder Springs drivers get factory-level diagnostics without the drive into Atlanta."
- **Douglasville, GA** — "Douglasville's go-to for European service and performance builds alike."
- **Marietta, GA** — "Worth the short drive from Marietta for specialty work most shops won't touch."
- **Acworth, GA** — "Acworth drivers trust us for everything from oil changes to full builds."
- Each: CTA "Book From [City]" → Key Risk: #1 (per-city keyword coverage), #3

**8. Why Choose a Local Independent Shop**
- Headline: "Local, Not Corporate"
- Body: "You get the same technicians every visit and a shop that knows your car — not a rotating dealership service counter."
- Key Risk: #2

**9. FAQs**
- "Do you offer pickup/drop-off for customers outside Dallas?" → "[CONFIRM]"
- "How far do you service outside these five cities?" → "[CONFIRM]"
- "Is there a shuttle or loaner option for longer repairs?" → "[CONFIRM]"
- Key Risk: #3

**10. Booking Section** + **Footer**

**Design notes:** Race-track SVG stroke-draw animates a simple route line connecting the five cities to Dallas on scroll — ties the locked "track" motif directly into a local-SEO section instead of being purely decorative.

**Build:** `app/service-areas/page.tsx`, `components/CityCard.tsx` (repeatable), `components/MapEmbed.tsx`, `FAQAccordion`, `BookingSection`, `Footer`. No blocking placeholders beyond standard NAP fields.

---

## 10. Privacy Policy — `/privacy-policy`

**SEO**
- Title: `Privacy Policy | The Illest Garage`
- Meta description: `Privacy Policy for The Illest Garage website, Dallas, GA.`
- H1: `Privacy Policy`
- Target keyword: none (utility page)

**Goal + CTA:** Legal compliance only — no conversion goal. CTA present only in the standard Booking Section for consistency, not pushed.

### Sections

1. Introduction / scope
2. Information We Collect (form submissions: name, phone, email, vehicle info — via [AUTOWORX_CRM_ENDPOINT])
3. How We Use It
4. Cookies & Analytics [CONFIRM — which analytics tool, if any]
5. Third-Party Services (Elfsight, Google Maps, CRM)
6. Your Rights & Contact — [EMAIL]
7. Booking Section (global template, low-emphasis placement) + Footer

**Design notes:** Plain layout, no motion effects, chrome/red used only at the level the rest of the site's typography system requires. Legal text should not be invented — draft with standard boilerplate structure, actual legal review recommended before launch [CONFIRM].

**Build:** `app/privacy-policy/page.tsx`. No blocking placeholders beyond legal review flag.

---

## Round 1 Sign-Off Checklist

- [ ] Sitemap/slugs approved
- [ ] [EURO_MAKES] list confirmed (currently BMW / Mercedes-Benz / Audi / Volkswagen / Porsche)
- [ ] [SERVICE_DETAILS] draft (General Repair + Performance) approved or edited
- [ ] [PRODUCTS] category draft approved (pending real screenshot)
- [ ] Tone/voice approved across all 10 decks
- [ ] Privacy Policy exemption from FAQ/5-7-section template approved
- [ ] Ready to move to **Round 2: Homepage build**
