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
import { business, generalServices, generalServiceExamples } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: "General Auto Repair in Dallas, GA",
  description:
    "Brakes, fluids, suspension, electrical, and diagnostics for daily drivers in Dallas, GA. Honest work, real fixes. Book your repair today.",
  path: "/general-repair/",
});

const faqs = [
  {
    q: "Do you work on all makes and models?",
    a: "[CONFIRM — assumed yes for general repair; European makes get specialty handling on our European Auto Repair page.]",
  },
  {
    q: "How long does a typical repair take?",
    a: "[CONFIRM — turnaround varies by service.]",
  },
  {
    q: "Do you offer loaner cars or shuttle service?",
    a: "[CONFIRM]",
  },
  {
    q: "What payment methods do you accept?",
    a: `We accept ${business.paymentMethods.join(", ")}. Financing may also be available through select vendors depending on the parts or services being purchased.`,
  },
];

const steps = [
  "Drop Off",
  "Diagnose",
  "Get a Straight Quote",
  "We Fix It",
  "You're Back on the Road",
];

export default function GeneralRepairPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "General Repair", path: "/general-repair/" },
        ])}
      />

      <PageHero
        eyebrow="General Auto Repair · Dallas, GA"
        headline="Your Daily Driver, Done Right"
        body="From routine maintenance to check-engine-light diagnostics, we keep Dallas drivers on the road without the dealership markup. European, domestic, or Japanese — we work on all makes."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading title="What We Handle" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {generalServices.map((service, i) => (
              <RevealOnScroll key={service} delay={i * 60}>
                <div className="panel flex items-center gap-3 px-5 py-4">
                  <IconMarker icon="flag" className="h-5 w-5 shrink-0 text-red" />
                  <span className="text-sm text-text">{service}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {generalServiceExamples.map((item) => (
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


      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            title="Dealership-Level Diagnostics, Shop-Level Honesty"
            body="We explain what's actually wrong, what it costs, and what can wait. No pressure, no invented repairs."
          />
        </div>
      </section>

      <section className="border-y border-panel-border bg-panel py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading title="How It Works" />
          <div className="mt-10 grid gap-6 sm:grid-cols-5">
            {steps.map((step, i) => (
              <RevealOnScroll key={step} delay={i * 80}>
                <div className="text-center">
                  <p className="chrome-text font-display text-3xl italic">{i + 1}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-text-muted">
                    {step}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading title="Backed By Us" body={business.warranty} />
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
