"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once an element enters the viewport. Returns true immediately
 * (skipping the observer) when the user has prefers-reduced-motion set,
 * so scroll-triggered effects never block content from appearing.
 *
 * A 1.5s safety-net timeout also forces `inView` true regardless of the
 * observer outcome — some environments (background/inactive tabs, certain
 * automation tooling, blocked APIs) never fire an IntersectionObserver
 * callback at all, and content must never stay permanently hidden because
 * of that.
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Deferred to a microtask so setState isn't called synchronously
      // within the effect body (react-hooks/set-state-in-effect).
      queueMicrotask(() => setInView(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    const fallback = window.setTimeout(() => setInView(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, inView };
}
