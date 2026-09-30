import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import IconMarker from "@/components/IconMarker";

const services = [
  {
    icon: "flag" as const,
    title: "General Repair",
    body: "Honest diagnostics and real fixes for European, domestic, and Japanese daily drivers.",
    href: "/general-repair/",
  },
  {
    icon: "star" as const,
    title: "European, Domestic & Japanese",
    body: "Factory-level care for BMW, Mercedes-Benz, Audi, and more — plus domestic and Japanese makes.",
    href: "/european-auto-repair/",
  },
  {
    icon: "track" as const,
    title: "Performance & Tuning",
    body: "Dyno tuning, builds, and bolt-ons for street, track, and show.",
    href: "/performance-tuning/",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {services.map((service, i) => (
        <RevealOnScroll key={service.title} delay={i * 100}>
          <Link
            href={service.href}
            className="panel group relative flex h-full flex-col gap-4 overflow-hidden px-6 py-8 transition-colors hover:border-chrome-2"
          >
            <div className="section-glass" />
            <IconMarker icon={service.icon} className="relative h-8 w-8 text-red" />
            <h3 className="relative font-display text-xl italic text-text">{service.title}</h3>
            <p className="relative flex-1 text-sm text-text-muted">{service.body}</p>
            <span className="relative text-xs font-semibold uppercase tracking-widest text-chrome-2 group-hover:text-chrome-1">
              Learn More →
            </span>
          </Link>
        </RevealOnScroll>
      ))}
    </div>
  );
}
