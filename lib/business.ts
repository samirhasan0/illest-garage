// Single source of truth for shop facts, NAP data, and open placeholders.
// Every [BRACKETED] value here is an unconfirmed placeholder — do not treat as fact.
// Update this file once real values are supplied; every page reads from here.

export const business = {
  name: "The Illest Garage",
  tagline: "Street . Track . Show",
  phone: "(770) 758-9396",
  phoneHref: "tel:+17707589396",
  secondaryPhone: "(470) 525-6009",
  secondaryPhoneHref: "tel:+14705256009",
  address: {
    line1: "203 White Park Dr, Unit 1",
    city: "Dallas",
    state: "GA",
    zip: "30132",
    full: "203 White Park Dr, Unit 1, Dallas, GA 30132",
  },
  email: "illestgarage@gmail.com",
  emailHref: "mailto:illestgarage@gmail.com",
  hours: "Mon–Fri 9am–6pm · Sat 9am–3pm (by appointment)",
  hoursSchema: ["Mo-Fr 09:00-18:00", "Sa 09:00-15:00"],
  instagram: {
    handle: "@theillestgarage",
    url: "https://www.instagram.com/theillestgarage/",
  },
  threads: {
    handle: "@theillestgarage",
    url: "https://www.threads.com/@theillestgarage",
  },
  googleBusinessProfileUrl: "https://share.google/ynDq73pMRBJ1OqEUE",
  googleRating: "4.6", // pulled live from the Google Business Profile 2026-09-30
  reviewCount: "10", // pulled live from the Google Business Profile 2026-09-30
  foundedYear: "2024",
  experienceSinceYear: "2016",
  aseCertified: true,
  bayCount: "2",
  hasDynoOnSite: false,
  warranty:
    "We offer warranty coverage on qualifying parts and labor through our manufacturers and vendors, subject to their individual warranty terms and conditions. If you provide your own parts, we can't warranty those parts or the labor to install them, and we're not responsible for damage from defective, failed, incompatible, or improperly installed customer-supplied parts.",
  paymentMethods: ["Visa", "Debit cards", "Credit cards", "Cash", "Zelle"],
  elfsightWidgetId: "[ELFSIGHT_WIDGET_ID]",
  heroVideoSrc: "[HERO_VIDEO]",
  siteUrl: "https://www.theillestgarage.com", // [CONFIRM domain before launch]
  virtualShopUrl: "https://the-illest-garage.autoworx.tech/",
} as const;

export const euroMakes = [
  {
    slug: "bmw",
    name: "BMW",
    monogram: "BMW",
    logo: "/brand/makes/bmw.svg",
    headline: "Precision Engineering, Precision Service.",
    body: "From routine maintenance to complex electrical diagnostics, we service BMW's full lineup with the tools and knowledge dealership techs use.",
    services: ["Oil service", "Brake service", "Cooling system", "Diagnostics"],
  },
  {
    slug: "mercedes-benz",
    name: "Mercedes-Benz",
    monogram: "MB",
    logo: "/brand/makes/mercedes-benz.svg",
    headline: "Luxury That Runs Like It Should.",
    body: "We maintain the comfort and performance Mercedes-Benz owners expect, backed by real diagnostic depth.",
    services: ["Suspension (Airmatic)", "Electrical", "Fluid service", "Diagnostics"],
  },
  {
    slug: "audi",
    name: "Audi",
    monogram: "A",
    logo: "/brand/makes/audi.svg",
    headline: "Quattro-Ready, Detail-Focused.",
    body: "Audi's all-wheel-drive systems and turbocharged engines get handled by technicians who know the platform.",
    services: ["Turbo/engine service", "Drivetrain", "Diagnostics"],
  },
  {
    slug: "volkswagen",
    name: "Volkswagen",
    monogram: "VW",
    logo: "/brand/makes/volkswagen.svg",
    headline: "Built Different. Serviced Right.",
    body: "From daily-driver GTIs to TDIs, we keep VWs running the way they were engineered to.",
    services: ["Maintenance", "Timing/engine service", "Diagnostics"],
  },
  {
    slug: "porsche",
    name: "Porsche",
    monogram: "P",
    logo: "/brand/makes/porsche.svg",
    headline: "Track-Bred, Shop-Maintained.",
    body: "Porsche ownership deserves a shop that respects the engineering — and the driving.",
    services: ["Performance maintenance", "Brake service", "Diagnostics"],
  },
] as const; // [EURO_MAKES — CONFIRM/EDIT LIST]

// Additional domestic + Japanese makes shown in the homepage logo marquee
// alongside euroMakes — not full service pages, just brand recognition.
export const moreMakes = [
  { slug: "toyota", name: "Toyota", logo: "/brand/makes/toyota.svg" },
  { slug: "honda", name: "Honda", logo: "/brand/makes/honda.svg" },
  { slug: "nissan", name: "Nissan", logo: "/brand/makes/nissan.svg" },
  { slug: "mazda", name: "Mazda", logo: "/brand/makes/mazda.svg" },
  { slug: "subaru", name: "Subaru", logo: "/brand/makes/subaru.svg" },
  { slug: "lexus", name: "Lexus", logo: "/brand/makes/lexus.svg" },
  { slug: "ford", name: "Ford", logo: "/brand/makes/ford.svg" },
  { slug: "chevrolet", name: "Chevrolet", logo: "/brand/makes/chevrolet.svg" },
  { slug: "jeep", name: "Jeep", logo: "/brand/makes/jeep.svg" },
  { slug: "dodge", name: "Dodge", logo: "/brand/makes/dodge.svg" },
  { slug: "tesla", name: "Tesla", logo: "/brand/makes/tesla.svg" },
] as const; // [MORE_MAKES — CONFIRM/EDIT LIST]

export const serviceAreas = [
  {
    slug: "hiram",
    city: "Hiram",
    body: "Just minutes from Hiram, we're the closer, more personal alternative to the dealership.",
  },
  {
    slug: "powder-springs",
    city: "Powder Springs",
    body: "Powder Springs drivers get factory-level diagnostics without the drive into Atlanta.",
  },
  {
    slug: "douglasville",
    city: "Douglasville",
    body: "Douglasville's go-to for European, domestic, and Japanese service and performance builds alike.",
  },
  {
    slug: "marietta",
    city: "Marietta",
    body: "Worth the short drive from Marietta for specialty work most shops won't touch.",
  },
  {
    slug: "acworth",
    city: "Acworth",
    body: "Acworth drivers trust us for everything from oil changes to full builds.",
  },
] as const;

export const generalServices = [
  "Maintenance & General Repair",
  "Engine Service & Repair",
  "Transmission & Drivetrain",
  "Suspension, Steering & Wheels",
  "AC, Heating & Electrical",
  "Diagnostics & Inspections",
] as const;

export const generalServiceExamples = [
  "Oil Change",
  "Front & Rear Brake Pad Replacement",
  "Front & Rear Rotor Replacement",
  "Spark Plug Replacement",
  "Transmission Fluid Change",
  "Evap Smoke Test",
] as const;

export const performanceCategories = [
  "Performance & Tuning",
  "Exhaust & Fabrication",
  "Custom Work",
  "Audio & Retrofitting",
  "Wrap, Tint, PPF & Styling",
] as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "General Repair", href: "/general-repair/" },
  { label: "European Repair", href: "/european-auto-repair/" },
  { label: "Performance & Tuning", href: "/performance-tuning/" },
  { label: "About", href: "/about/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Service Areas", href: "/service-areas/" },
] as const;

// Grouped structure for the header's slide-in menu: Services nested
// together under one heading, everything else flat.
export const headerNavGroups = {
  top: [{ label: "Home", href: "/" }],
  services: [
    { label: "General Repair", href: "/general-repair/" },
    { label: "European Repair", href: "/european-auto-repair/" },
    { label: "Performance & Tuning", href: "/performance-tuning/" },
  ],
  bottom: [
    { label: "About", href: "/about/" },
    { label: "Reviews", href: "/reviews/" },
  ],
} as const;
