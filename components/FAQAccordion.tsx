"use client";

import { useState } from "react";

export type FAQ = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-panel-border border-y border-panel-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-semibold text-text">{item.q}</span>
              <span
                className={`shrink-0 text-xl text-chrome-2 transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && <p className="pb-5 text-sm text-text-muted">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
