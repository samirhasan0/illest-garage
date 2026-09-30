import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ReviewsWall from "@/components/ReviewsWall";
import FAQAccordion from "@/components/FAQAccordion";
import BookingSection from "@/components/BookingSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { business } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: "Reviews",
  description:
    "See what Dallas, GA customers say about The Illest Garage — general repair on European, domestic, and Japanese vehicles, plus performance builds.",
  path: "/reviews/",
});

const faqs = [
  {
    q: "Where can I leave a review?",
    a: `Via our Google Business Profile: ${business.googleBusinessProfileUrl}`,
  },
  { q: "Do you respond to reviews?", a: "[CONFIRM]" },
  { q: "What if I had a bad experience?", a: "[CONFIRM — recommend a direct contact path via phone or email.]" },
];

export default function ReviewsPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews/" },
        ])}
      />

      <PageHero
        eyebrow="Reviews · Dallas, GA"
        headline={
          <>
            {business.googleRating}
            <span style={{ WebkitTextFillColor: "#FBBC05", color: "#FBBC05" }}>★</span> Google
            Reviews
          </>
        }
        body="Real feedback from real customers — European, domestic, and Japanese daily drivers, plus builds alike."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ReviewsWall />
        </div>
      </section>


      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading
            title="We Earn Every Review"
            body="No incentivized reviews, no gimmicks — just the work speaking for itself."
          />
        </div>
      </section>

      <section className="border-y border-panel-border bg-panel py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading title="Had a Great Experience?" body="Tell other Dallas drivers about it." />
          <a
            href={business.googleBusinessProfileUrl.startsWith("[") ? "#" : business.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-8 inline-flex"
          >
            Leave a Google Review
          </a>
          {business.googleBusinessProfileUrl.startsWith("[") && (
            <p className="mt-3 text-xs text-text-muted">[GOOGLE_BUSINESS_PROFILE_URL — CONFIRM]</p>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <BookingSection />
    </main>
  );
}
