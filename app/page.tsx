import type { Metadata } from "next";
import Image from "next/image";
import HomeHero from "@/components/HomeHero";
import SectionBreaker from "@/components/SectionBreaker";
import TrustBar from "@/components/TrustBar";
import ServiceCards from "@/components/ServiceCards";
import SectionHeading from "@/components/SectionHeading";
import Teaser from "@/components/Teaser";
import ReviewsWall from "@/components/ReviewsWall";
import RevealOnScroll from "@/components/RevealOnScroll";
import BookingSection from "@/components/BookingSection";
import IconMarker from "@/components/IconMarker";
import LogoMarquee from "@/components/LogoMarquee";
import LogoGlitchIn from "@/components/LogoGlitchIn";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business, euroMakes } from "@/lib/business";

export const metadata: Metadata = pageMetadata({
  title: `${business.name} | Performance, European & General Auto Repair — Dallas, GA`,
  description:
    "Street. Track. Show. The Illest Garage in Dallas, GA handles general repair on European, domestic, and Japanese vehicles, plus performance tuning. Book your appointment today.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <SectionBreaker />
      <TrustBar />

      <section className="relative overflow-hidden bg-bg py-20">
        <div className="absolute inset-x-0 top-1/2 aspect-[16/7] w-full -translate-y-1/2">
          <Image
            src="/hero/section3.webp"
            alt=""
            fill
            sizes="100vw"
            className="hidden object-cover object-center sm:block"
          />
          <Image
            src="/hero/section3-mobile.webp"
            alt=""
            fill
            sizes="100vw"
            className="block object-cover object-center sm:hidden"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
            <SectionHeading title="Three Shops in One" />
          </div>
          <div className="mt-10">
            <ServiceCards />
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl px-6 text-center">
          <div className="drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
            <SectionHeading
              title="Not a Dealership. Not a Chain."
              body="One shop, one team, and a genuine reason to earn your trust every visit. No upsells you don't need — just straight answers on what your car needs and why."
              bodyClassName="text-white/90"
            />
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {[
              { icon: "flag" as const, label: "Transparent Quotes" },
              { icon: "star" as const, label: "Enthusiast-Owned" },
              { icon: "track" as const, label: "Warranty" },
              { icon: "flag" as const, label: "Modern Diagnostic Equipment" },
            ].map((v, i) => (
              <RevealOnScroll key={v.label} delay={i * 80}>
                <div className="panel flex items-center gap-3 px-5 py-4 text-left">
                  <IconMarker icon={v.icon} className="h-6 w-6 shrink-0 text-red" />
                  <span className="text-sm text-text-muted">{v.label}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={320} className="mx-auto mt-6 max-w-3xl">
            <div className="panel flex items-center justify-center gap-3 px-5 py-4">
              <IconMarker icon="track" className="h-6 w-6 shrink-0 text-red" />
              <span className="text-sm text-text-muted">
                We work on European, domestic, and Japanese vehicles — all makes welcome.
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-t border-panel-border bg-panel py-20">
        <Teaser
          eyebrow="European, Domestic & Japanese"
          title="Factory-Trained Eye"
          body={`${euroMakes.map((m) => m.name).join(". ")}, plus domestic, Japanese & Euro makes. We know what these cars need and what they don't.`}
          ctaLabel="See Our Repair Services"
          ctaHref="/european-auto-repair/"
        />
        <div className="mt-14">
          <LogoMarquee />
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg py-20">
        <div className="absolute inset-x-0 top-1/2 aspect-[16/7] w-full -translate-y-1/2">
          <Image src="/hero/parts-bg.webp" alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>

        <div className="relative">
          <Teaser
            eyebrow="Performance & Tuning"
            title="Built for the Street. Tuned for the Track."
            body="Dyno tuning, forced induction, suspension, and full builds — for daily drivers that want more and track cars that need to hold up."
            ctaLabel="Explore Performance & Tuning"
            ctaHref="/performance-tuning/"
            reverse
            decoration={
              <div className="panel relative aspect-video overflow-hidden">
                <Image
                  src="/hero/parts.webp"
                  alt="Performance parts and tools"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-bg/30" />
              </div>
            }
          />
        </div>
      </section>

      <section className="border-y border-panel-border bg-panel py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading title="What Dallas Drivers Are Saying" />
          <div className="mt-10">
            <ReviewsWall />
          </div>
          <div className="mt-8 text-center">
            <Link href="/reviews/" className="btn btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="speed-streaks opacity-25" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[140px]" />

        <div className="relative">
          <Teaser
            eyebrow="Our Story"
            title="Built by Enthusiasts, for Enthusiasts"
            body={`The Illest Garage started with a simple idea: a shop that treats your car like its own. Open since ${business.foundedYear}, with roots in the industry going back to ${business.experienceSinceYear}, that hasn't changed.`}
            ctaLabel="Our Story"
            ctaHref="/about/"
            ctaVariant="exotic"
            decoration={
              <div className="panel relative flex aspect-video items-center justify-center overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/25 blur-[90px]" />
                <div className="absolute left-1/3 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-hover/20 blur-[70px]" />
                <div className="speed-streaks opacity-30" />
                <LogoGlitchIn className="relative w-[70%] max-w-sm">
                  <Image
                    src="/brand/logo-bg.webp"
                    alt="The Illest Garage"
                    width={924}
                    height={574}
                    className="w-full"
                  />
                </LogoGlitchIn>
              </div>
            }
          />
        </div>
      </section>

      <BookingSection />
    </main>
  );
}
