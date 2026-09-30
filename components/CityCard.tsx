import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import type { serviceAreas } from "@/lib/business";

export default function CityCard({
  area,
  delay = 0,
}: {
  area: (typeof serviceAreas)[number];
  delay?: number;
}) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="panel flex h-full flex-col gap-3 px-6 py-8">
        <h3 className="font-display text-xl italic text-text">{area.city}, GA</h3>
        <p className="flex-1 text-sm text-text-muted">{area.body}</p>
        <Link href="/book-appointment/" className="text-xs font-semibold uppercase tracking-widest text-chrome-2 hover:text-chrome-1">
          Book From {area.city} →
        </Link>
      </div>
    </RevealOnScroll>
  );
}
