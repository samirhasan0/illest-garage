import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { business } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for the ${business.name} website, Dallas, GA.`,
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ])}
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="chrome-text text-4xl italic">Privacy Policy</h1>
          <p className="mt-4 text-sm text-text-muted">
            Draft boilerplate — [CONFIRM: this page should have a legal review before launch.]
          </p>

          <div className="mt-10 space-y-8 text-text-muted">
            <section>
              <h2 className="font-display text-xl italic text-text">1. Introduction</h2>
              <p className="mt-2 text-sm">
                This Privacy Policy describes how {business.name} (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) collects, uses, and protects information submitted through this
                website. By using this site, you agree to the practices described below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">2. Information We Collect</h2>
              <p className="mt-2 text-sm">
                When you submit our booking form, we collect the information you provide directly:
                name, phone number, email address, vehicle year/make/model, and service requested. We
                do not collect payment or financial information through this website — all payment
                happens in person at the shop.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">
                3. How We Use Your Information
              </h2>
              <p className="mt-2 text-sm">
                We use the information you submit to schedule, confirm, and follow up on
                appointments, respond to inquiries, and provide the service you requested. We do not
                sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">
                4. Cookies &amp; Tracking Technologies
              </h2>
              <p className="mt-2 text-sm">[CONFIRM — which analytics tool, if any, this site uses.]</p>
              <p className="mt-2 text-sm">
                Embedded third-party content on this site — such as the Google Maps location embed,
                and the Google Reviews widget once enabled — may set their own cookies or use similar
                technologies, governed by that provider&apos;s own privacy policy, not this one.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">5. Third-Party Services</h2>
              <p className="mt-2 text-sm">
                This site uses Google Maps (location embed), Elfsight (Google Reviews widget, once
                enabled), and the Autoworx lead-generation platform (appointment requests). Each is
                subject to its own provider&apos;s privacy policy, and we encourage you to review
                them.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">
                6. Data Sharing &amp; Disclosure
              </h2>
              <p className="mt-2 text-sm">
                We share the information you submit only with the service providers named above, to
                the extent needed to process your request (for example, sending your booking details
                to our lead management system). We may also disclose information if required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">
                7. Data Security &amp; Retention
              </h2>
              <p className="mt-2 text-sm">
                We take reasonable steps to protect the information submitted through this site, but
                no method of transmission over the internet is completely secure. We retain booking
                information for as long as needed to provide our services and maintain business
                records, and delete or anonymize it when it&apos;s no longer needed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">8. Children&apos;s Privacy</h2>
              <p className="mt-2 text-sm">
                This website is not directed at children under 13, and we do not knowingly collect
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">9. Your Rights &amp; Choices</h2>
              <p className="mt-2 text-sm">
                You may request access to, correction of, or deletion of the information you&apos;ve
                submitted to us at any time by contacting us using the details below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl italic text-text">
                10. Changes to This Policy &amp; Contact Us
              </h2>
              <p className="mt-2 text-sm">
                We may update this Privacy Policy from time to time; the current version will always
                be posted on this page. If you have any questions about this policy or how your
                information is handled, contact us at {business.email} or {business.phone}.
              </p>
            </section>
          </div>
        </div>
      </section>

      <BookingSection />
    </main>
  );
}
