"use client";

import { useInView } from "@/lib/useInView";

export default function TrackOutline({
  className = "text-chrome-3",
}: {
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 400 160" fill="none" stroke="currentColor" strokeWidth={2} className="h-auto w-full">
        <path
          className="track-path"
          d="M40,80 C40,40 90,20 160,20 L240,20 C310,20 360,40 360,80 C360,120 310,140 240,140 L160,140 C90,140 40,120 40,80 Z"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: inView ? 0 : 1000,
          }}
        />
      </svg>
    </div>
  );
}
