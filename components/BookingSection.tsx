import Link from "next/link";
import { business } from "@/lib/business";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function BookingSection({
  headline = "Ready to Build, Fix, or Tune Your Ride?",
  subhead = "Tell us what it needs. We'll take it from there.",
}: {
  headline?: string;
  subhead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-panel-border bg-panel py-20">
      <div className="speed-streaks opacity-60" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <RevealOnScroll>
          <h2 className="chrome-text text-3xl italic sm:text-4xl">{headline}</h2>
          <p className="mt-4 text-text-muted">{subhead}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            Rated {business.googleRating}<span className="text-[#FBBC05]">★</span> on Google Reviews
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book-appointment/" className="btn btn-primary w-full sm:w-auto">
              Book Services
            </Link>
            <a href={business.phoneHref} className="btn btn-outline w-full sm:w-auto">
              Call Now — {business.phone}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
