import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import BookingSection from "@/components/BookingSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import IconMarker from "@/components/IconMarker";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { business } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: "About The Illest Garage | Dallas, GA Auto Shop",
  description:
    "The Illest Garage is a Dallas, GA shop built by enthusiasts for European, domestic, and Japanese daily drivers, plus performance builds alike. Here's our story.",
  path: "/about/",
});

const faqs = [
  {
    q: "How long has The Illest Garage been open?",
    a: `We officially opened in ${business.foundedYear}, with roots in the automotive industry going back to ${business.experienceSinceYear}.`,
  },
  { q: "Are your technicians ASE certified?", a: "Yes. Our technicians are ASE certified." },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />

      <PageHero
        eyebrow="About Us · Dallas, GA"
        headline="Street. Track. Show. That's Not Just a Tagline."
        body="The Illest Garage was built by people who love cars, for people who love cars — and for the ones who just need theirs fixed right."
      />

      <section className="relative overflow-hidden py-20">
        <div className="speed-streaks opacity-40" />
        <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center">
          <IconMarker icon="star" className="mx-auto h-8 w-8 text-red" />
          <SectionHeading title="Who We Are" />
          <div className="mx-auto mt-4 flex max-w-2xl flex-col gap-4 text-text-muted">
            <p>
              The Illest Garage is an independent automotive repair, performance, tuning, and
              customization shop serving the Dallas/Hiram, Georgia area.
            </p>
            <p>
              We officially opened for business in {business.foundedYear}, with experience in
              the automotive industry going back to {business.experienceSinceYear}. In 2025, The
              Illest Garage operated out of Norcross, Georgia, before relocating our operations
              to Dallas, Georgia, where we continue serving our customers today.
            </p>
            <p>
              Our ASE-certified technicians work on everything from daily drivers to
              performance, track, and show builds.
            </p>
            <p>
              Our services include diagnostics, general repair and maintenance, engine and
              drivetrain work, suspension, exhaust, electrical, performance upgrades, ECU
              tuning, audio and retrofitting, fabrication, wrap, tint, PPF, and other custom
              automotive services.
            </p>
            <p>
              Our goal is to provide honest service, quality workmanship, and personalized
              attention to every vehicle that comes through the shop.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-y border-panel-border bg-panel py-20">
        <RevealOnScroll className="mx-auto max-w-3xl px-6 text-center">
          <IconMarker icon="flag" className="mx-auto h-8 w-8 text-red" />
          <SectionHeading
            title="Why We Do This"
            body="Honest work. Real craftsmanship. No shortcuts, whether it's an oil change or a full build."
          />
        </RevealOnScroll>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="speed-streaks opacity-40" />
        <RevealOnScroll className="relative mx-auto max-w-3xl px-6 text-center">
          <IconMarker icon="track" className="mx-auto h-8 w-8 text-red" />
          <SectionHeading title="The Shop" />
          <div className="mx-auto mt-4 flex max-w-2xl flex-col gap-4 text-text-muted">
            <p>
              The Illest Garage is a {business.bayCount}-bay shop with two vehicle lifts.
            </p>
            <p>
              We do not currently have a dyno on-site. When a vehicle requires dyno testing or
              dyno tuning, we work with a local dyno facility.
            </p>
            <p>
              This allows us to offer both in-shop tuning solutions and access to dyno services
              when a particular build requires them.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-y border-panel-border bg-panel py-20">
        <RevealOnScroll className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading
            title="Part of the Scene, Not Just a Vendor"
            body={`Follow the builds, the shows, and the shop life on Instagram (${business.instagram.handle}).`}
          />
          <a
            href={business.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-8 inline-flex"
          >
            Follow on Instagram
          </a>
        </RevealOnScroll>
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
