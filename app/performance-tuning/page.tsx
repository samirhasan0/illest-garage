import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BuildTypeCards from "@/components/BuildTypeCards";
import FAQAccordion from "@/components/FAQAccordion";
import BookingSection from "@/components/BookingSection";
import TrackOutline from "@/components/TrackOutline";
import RevealOnScroll from "@/components/RevealOnScroll";
import IconMarker from "@/components/IconMarker";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { performanceCategories } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: "Performance & Tuning Shop in Dallas, GA",
  description:
    "Dyno tuning, forced induction, suspension, and full builds in Dallas, GA. Street, track, and show builds handled by enthusiasts. Book your build today.",
  path: "/performance-tuning/",
});

const faqs = [
  { q: "Do you tune vehicles other than [makes]?", a: "[CONFIRM]" },
  {
    q: "Can you help me plan a full build, not just one part?",
    a: "[CONFIRM — assumed yes, we work from a build plan around your goals.]",
  },
  {
    q: "Do you offer dyno-only sessions?",
    a: "Our performance and tuning services aren't limited to dyno tuning. Depending on the vehicle and modifications, we can perform road tuning — driving and data-logging under real-world conditions to make calibration adjustments — or build a custom map, or use an appropriate off-the-shelf map when available for the vehicle and setup. For vehicles that need dyno testing or dyno tuning, we work with a local dyno facility since we don't currently have a dyno on-site.",
  },
  {
    q: "What is the typical tuning turnaround?",
    a: "Most tuning services are completed within approximately 1–2 days. Turnaround depends on the vehicle, tuning platform, modifications, and how much testing or calibration is required — heavily modified or custom-built vehicles may need additional time.",
  },
];

export default function PerformanceTuningPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Performance & Tuning", path: "/performance-tuning/" },
        ])}
      />

      <PageHero
        eyebrow="Performance & Tuning · Dallas, GA"
        headline="Street. Track. Show. Built Here."
        body="Whether you're chasing numbers on the dyno, seat time at the track, or a show-stopping build, we make it happen."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            title="What We Build"
            body="From bolt-ons to full builds, this is what comes through the shop."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {performanceCategories.map((service, i) => (
              <RevealOnScroll key={service} delay={i * 60}>
                <div className="panel flex items-center gap-3 px-5 py-4">
                  <IconMarker icon="flag" className="h-5 w-5 shrink-0 text-red" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Catless Downpipe", "Parts"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-panel-border bg-white/[0.03] px-3 py-1.5 text-xs text-text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>


      <section className="border-y border-panel-border bg-panel py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Street. Track. Show." />
          <div className="mt-10">
            <BuildTypeCards />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <TrackOutline className="mx-auto max-w-xl text-red" />
        </div>
      </section>


      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading
            title="Every Build Starts With a Conversation"
            body="Tell us your goals — daily comfort, lap times, or show points — and we'll build a plan around them."
          />
          <Link href="/book-appointment/" className="btn btn-primary mt-8 inline-flex">
            Book a Consultation
          </Link>
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

      <BookingSection headline="Ready to Build Your Street, Track, or Show Car?" />
    </main>
  );
}
