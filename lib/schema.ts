import { business } from "@/lib/business";

function isPlaceholder(value: string) {
  return value.startsWith("[");
}

/**
 * AutoRepair/LocalBusiness JSON-LD. Only emits fields backed by confirmed
 * data — placeholders (hours, rating, review count, etc.) are omitted
 * rather than published as fake structured data.
 */
export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    url: business.siteUrl,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    sameAs: [business.instagram.url, business.threads.url],
  };

  if (!isPlaceholder(business.hours)) {
    schema.openingHours = business.hoursSchema;
  }

  if (!isPlaceholder(business.googleRating) && !isPlaceholder(business.reviewCount)) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.googleRating,
      reviewCount: business.reviewCount,
    };
  }

  if (!isPlaceholder(business.googleBusinessProfileUrl)) {
    (schema.sameAs as string[]).push(business.googleBusinessProfileUrl);
  }

  return schema;
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${business.siteUrl}${item.path}`,
    })),
  };
}
