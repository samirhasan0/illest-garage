import type { ReactNode } from "react";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Teaser({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref,
  reverse = false,
  decoration,
  ctaVariant = "outline",
}: {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
  decoration?: ReactNode;
  ctaVariant?: "outline" | "exotic";
}) {
  return (
    <div
      className={`mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <RevealOnScroll className="flex-1 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-chrome-2">{eyebrow}</p>
        <h2 className="chrome-text mt-3 text-3xl italic sm:text-4xl">{title}</h2>
        <p className="mt-4 text-text-muted">{body}</p>
        <Link
          href={ctaHref}
          className={`btn mt-6 inline-flex ${ctaVariant === "exotic" ? "btn-exotic" : "btn-outline"}`}
        >
          {ctaLabel}
        </Link>
      </RevealOnScroll>
      {decoration && (
        <RevealOnScroll className="flex-1" delay={120}>
          {decoration}
        </RevealOnScroll>
      )}
    </div>
  );
}
