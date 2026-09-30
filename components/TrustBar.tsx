import Image from "next/image";
import { business } from "@/lib/business";
import RevealOnScroll from "@/components/RevealOnScroll";
import { asset } from "@/lib/basePath";

const specialties = ["General Repair", "European, Domestic & Japanese", "Performance & Tuning"];

export default function TrustBar() {
  return (
    <section className="group relative flex min-h-[48vh] items-center overflow-hidden border-y border-panel-border bg-bg">
      <div className="absolute inset-0">
        <Image
          src={asset("/hero/sec2.webp")}
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 md:block"
        />
        <Image
          src={asset("/hero/sec2-mobile.webp")}
          alt=""
          fill
          sizes="100vw"
          className="block object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 md:hidden"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,10,10,0.85)_0%,_rgba(10,10,10,0.4)_60%,_transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />
        <div className="section-glass" />
      </div>

      <RevealOnScroll className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-10 px-6 py-16 text-center">
        <p className="chrome-text font-display text-2xl italic sm:text-3xl">
          The shop Dallas trusts for European, domestic, and Japanese daily drivers — and full builds alike.
        </p>

        <div className="flex w-full flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16">
          <div>
            <p className="chrome-text font-display text-5xl italic sm:text-6xl">
              {business.googleRating}
              <span style={{ WebkitTextFillColor: "#FBBC05", color: "#FBBC05" }}>★</span>
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-text-muted">
              Google Reviews
            </p>
          </div>

          <div className="hidden h-16 w-px bg-panel-border sm:block" />
          <div className="h-px w-16 bg-panel-border sm:hidden" />

          <div>
            <p className="chrome-text font-display text-5xl italic sm:text-6xl">3</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-text-muted">
              Specialties, 1 Shop
            </p>
            <p className="mt-2 text-xs text-text-muted">{specialties.join(" · ")}</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
