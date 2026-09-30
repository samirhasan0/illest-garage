import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import type { euroMakes } from "@/lib/business";

export default function MakeSection({
  make,
  reverse = false,
}: {
  make: (typeof euroMakes)[number];
  reverse?: boolean;
}) {
  return (
    <section id={make.slug} className="scroll-mt-24 border-t border-panel-border py-16">
      <div
        className={`mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <RevealOnScroll className="flex-1 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-chrome-2">{make.name}</p>
          <h2 className="chrome-text mt-3 text-3xl italic sm:text-4xl">{make.headline}</h2>
          <p className="mt-4 text-text-muted">{make.body}</p>
          <Link href="/book-appointment/" className="btn btn-primary mt-6 inline-flex">
            Book {make.name} Service
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="panel w-full flex-1 px-6 py-6 sm:max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            Common Services
          </p>
          <ul className="mt-4 space-y-2">
            {make.services.map((service) => (
              <li key={service} className="flex items-center gap-2 text-sm text-text">
                <span className="h-1 w-1 shrink-0 rounded-full bg-red" />
                {service}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
