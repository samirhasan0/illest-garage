"use client";

import { ReactNode } from "react";
import { useInView } from "@/lib/useInView";

export default function LogoGlitchIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`logo-glitch-in ${inView ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
