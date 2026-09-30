"use client";

import { useInView } from "@/lib/useInView";

export default function SectionBreaker() {
  const { ref, inView } = useInView<HTMLDivElement>(0.6);

  return (
    <div className="relative z-10 -mt-px bg-bg">
      <div ref={ref} className={`section-breaker ${inView ? "is-visible" : ""}`}>
        <div className="section-breaker-sweep" />
      </div>
    </div>
  );
}
