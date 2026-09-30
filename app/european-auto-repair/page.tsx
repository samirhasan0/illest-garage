import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InPageNav from "@/components/InPageNav";
import MakeSection from "@/components/MakeSection";
import FAQAccordion from "@/components/FAQAccordion";
import BookingSection from "@/components/BookingSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { business, euroMakes } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: "European Auto Repair in Dallas, GA | BMW, Mercedes, Audi & More",
  description:
    "Specialty repair and maintenance for BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche in Dallas, GA. Factory-level care without the dealership price.",
  path: "/european-auto-repair/",
});

const faqs = [
  {
    q: "Will servicing here void my factory warranty?",
    a: "[CONFIRM — independent shops using OEM-spec parts generally do not void warranty coverage, but confirm the exact answer before publishing.]",
  },
  { q: "Do you use OEM parts?", a: "[CONFIRM]" },
  { q: "Do you work on models not listed here?", a: "[CONFIRM]" },
  { q: "How do your prices compare to the dealership?", a: "[CONFIRM]" },
];

export default function EuropeanAutoRepairPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "European Auto Repair", path: "/european-auto-repair/" },
        ])}
      />

      <PageHero
        eyebrow="European Auto Repair · Dallas, GA"
        headline="European Engineering Deserves European Expertise"
        body="BMW. Mercedes-Benz. Audi. Volkswagen. Porsche. We know these cars inside and out — without the dealership price tag. [EURO_MAKES — CONFIRM LIST]"
      />

      <InPageNav items={euroMakes.map((m) => ({ slug: m.slug, label: m.name }))} />

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            title="Not Just Another Repair Shop"
            body="European vehicles run different electronics, different fluids, and different tolerances than most daily drivers. We treat them that way."
          />
        </div>
      </section>

      {euroMakes.map((make, i) => (
        <MakeSection key={make.slug} make={make} reverse={i % 2 === 1} />
      ))}


      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading
            title="Factory-Level Tools, Independent-Shop Prices"
            body="[SERVICE_DETAILS/EQUIPMENT — CONFIRM specifics, e.g. brand-specific scan tools]"
          />
        </div>
      </section>

      <section className="pb-20">
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
