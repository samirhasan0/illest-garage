import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { business } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: "Book an Appointment",
  description:
    "Schedule your repair on a European, domestic, or Japanese vehicle, or a performance build, at The Illest Garage in Dallas, GA. Fast, easy online booking.",
  path: "/book-appointment/",
});

const faqs = [
  { q: "How far in advance should I book?", a: "[CONFIRM]" },
  { q: "Can I book a same-day appointment?", a: "[CONFIRM]" },
  { q: "What if I need to reschedule?", a: "[CONFIRM]" },
];

export default function BookAppointmentPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book Appointment", path: "/book-appointment/" },
        ])}
      />

      <PageHero
        eyebrow="Book Appointment · Dallas, GA"
        headline="Let's Get Your Car Sorted"
        body="Fill out the form below and we'll confirm your appointment — or call us directly."
      />

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          <BookingForm />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading
            title="What to Expect"
            body="We'll confirm your booking soon by phone or email."
          />
        </div>
      </section>

      <section className="border-t border-panel-border bg-panel py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <SectionHeading title="Prefer to Talk It Through?" body={`Call us directly at ${business.phone}.`} />
          <a href={business.phoneHref} className="btn btn-outline mt-8 inline-flex">
            Call Now — {business.phone}
          </a>
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
    </main>
  );
}
