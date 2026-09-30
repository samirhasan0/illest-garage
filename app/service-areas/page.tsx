import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CityCard from "@/components/CityCard";
import MapEmbed from "@/components/MapEmbed";
import TrackOutline from "@/components/TrackOutline";
import FAQAccordion from "@/components/FAQAccordion";
import BookingSection from "@/components/BookingSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { serviceAreas } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: "Auto Repair Near Hiram, Powder Springs & Marietta, GA",
  description:
    "The Illest Garage in Dallas, GA proudly serves Hiram, Powder Springs, Douglasville, Marietta, and Acworth with repair on European, domestic, and Japanese vehicles, plus tuning.",
  path: "/service-areas/",
});

const faqs = [
  { q: "Do you offer pickup/drop-off for customers outside Dallas?", a: "[CONFIRM]" },
  { q: "How far do you service outside these five cities?", a: "[CONFIRM]" },
  { q: "Is there a shuttle or loaner option for longer repairs?", a: "[CONFIRM]" },
];

export default function ServiceAreasPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas/" },
        ])}
      />

      <PageHero
        eyebrow="Service Areas"
        headline="Dallas-Based. Serving the Whole Area."
        body="Drivers from Hiram, Powder Springs, Douglasville, Marietta, and Acworth trust The Illest Garage for repair on European, domestic, and Japanese vehicles, plus performance builds."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <MapEmbed className="h-80" />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-panel-border bg-panel py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Cities We Serve" />
          <TrackOutline className="mx-auto mt-8 max-w-xl text-chrome-3" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, i) => (
              <CityCard key={area.slug} area={area} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            title="Local, Not Corporate"
            body="You get the same technicians every visit and a shop that knows your car — not a rotating dealership service counter."
          />
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
