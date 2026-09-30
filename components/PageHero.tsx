import type { ReactNode } from "react";
import Link from "next/link";
import { business } from "@/lib/business";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function PageHero({
  eyebrow,
  headline,
  body,
}: {
  eyebrow: string;
  headline: ReactNode;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-panel-border bg-bg pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="speed-streaks" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-text-muted">
            {eyebrow}
          </p>
          <h1 className="chrome-text mt-4 text-4xl italic leading-tight sm:text-5xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-text-muted">{body}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book-appointment/" className="btn btn-primary w-full sm:w-auto">
              Book Services
            </Link>
            <a href={business.phoneHref} className="btn btn-outline w-full sm:w-auto">
              Call Now
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
