"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { business, headerNavGroups } from "@/lib/business";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="shrink-0" onClick={close}>
          <Logo size="header" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {headerNavGroups.top.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-semibold uppercase tracking-wide text-text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className="nav-link flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-text-muted transition-colors group-hover:text-text"
            >
              Services
              <span className="text-[10px] transition-transform group-focus-within:rotate-180 group-hover:rotate-180">
                ▾
              </span>
            </button>
            <div className="invisible absolute right-0 top-full w-60 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col gap-0.5 rounded-xl border border-panel-border bg-panel/95 p-2 shadow-2xl backdrop-blur-xl">
                {headerNavGroups.services.map((item) => (
                  <Link key={item.href} href={item.href} className="dropdown-item group/item">
                    <span className="text-sm text-text-muted transition-colors group-hover/item:text-text">
                      {item.label}
                    </span>
                    <span className="ml-auto text-chrome-2 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {headerNavGroups.bottom.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-semibold uppercase tracking-wide text-text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={business.virtualShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-sm font-semibold uppercase tracking-wide text-text-muted transition-colors hover:text-text"
          >
            Virtual Shop
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center border border-chrome-3 bg-white/[0.02] transition-all duration-300 hover:border-chrome-1 hover:bg-white/[0.08] hover:backdrop-blur-md lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-5 bg-chrome-1 transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-chrome-1 transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-5 bg-chrome-1 transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      </header>

      {/* Overlay */}
      <div
        aria-hidden={!open}
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right-side slide-in drawer */}
      <nav
        aria-label="Main"
        className={`fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col border-l border-panel-border bg-panel/90 backdrop-blur-xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-panel-border px-6 py-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="flex h-9 w-9 items-center justify-center text-2xl text-chrome-2 transition-colors hover:text-chrome-1"
          >
            ×
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center overflow-y-auto px-6 py-6">
          <ul className="flex flex-col gap-1">
            {headerNavGroups.top.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-2.5 text-sm font-semibold uppercase tracking-widest text-text transition-colors hover:text-chrome-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-red">
            Services
          </p>
          <ul className="mt-3 flex flex-col gap-1 border-l border-panel-border pl-4">
            {headerNavGroups.services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-2 text-sm text-text-muted transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-col gap-1 border-t border-panel-border pt-6">
            {headerNavGroups.bottom.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-2.5 text-sm font-semibold uppercase tracking-widest text-text transition-colors hover:text-chrome-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 border-t border-panel-border pt-6">
            <a
              href={business.virtualShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full"
            >
              Virtual Shop
            </a>
            <a href={business.phoneHref} className="btn btn-outline w-full">
              Call Now — {business.phone}
            </a>
            <Link href="/book-appointment/" className="btn btn-primary w-full" onClick={close}>
              Book Services
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
