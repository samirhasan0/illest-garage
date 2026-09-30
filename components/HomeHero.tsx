import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import RevealOnScroll from "@/components/RevealOnScroll";
import { asset } from "@/lib/basePath";

const hasVideo = !business.heroVideoSrc.startsWith("[");

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg">
      {/* Background layer: real footage once [HERO_VIDEO] is supplied. Until
          then, the supplied back1 photo carries it — desktop gets the
          full-res crop, mobile a lighter re-encode. Falls back to a plain
          gradient if neither a video nor the photo is present. */}
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={asset("/hero/back1.webp")}
          >
            <source src={business.heroVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <>
            <Image
              src={asset("/hero/back1.webp")}
              alt=""
              fill
              priority
              sizes="100vw"
              className="hidden object-cover object-center md:block"
            />
            <Image
              src={asset("/hero/back1-mobile.webp")}
              alt=""
              fill
              priority
              sizes="100vw"
              className="block object-cover object-center md:hidden"
            />
          </>
        )}
        {/* Premium blend: darken + vignette so the photo reads as backdrop, not distraction */}
        <div className="absolute inset-0 bg-bg/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_#0a0a0a_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <RevealOnScroll>
          <p className="chrome-shine chrome-shine--soft text-xs font-semibold uppercase tracking-[0.35em]">
            Dallas, Georgia
          </p>
          <h1 className="chrome-shine mt-4 text-5xl italic leading-[0.95] sm:text-7xl">
            Street. Track. Show.
          </h1>
          <p className="chrome-shine chrome-shine--soft mx-auto mt-6 max-w-2xl text-lg">
            Dallas, Georgia&apos;s shop for honest repair on European, domestic, and Japanese
            vehicles, plus real performance builds.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book-appointment/" className="btn btn-primary w-full sm:w-auto">
              Book Services
            </Link>
            <a href={business.phoneHref} className="btn btn-outline w-full sm:w-auto">
              Call Now
            </a>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-text-muted">
            {business.googleRating}<span className="text-[#FBBC05]">★</span> Google Reviews
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
