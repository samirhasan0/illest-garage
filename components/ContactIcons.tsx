"use client";

import type { ReactNode } from "react";

// Simple line icons for inline contact rows — no colored fills, just
// currentColor strokes so they sit quietly next to the text.
function IconBase({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-text-muted"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function PinIcon() {
  return (
    <IconBase>
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </IconBase>
  );
}

export function PhoneIcon() {
  return (
    <IconBase>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
    </IconBase>
  );
}

export function TextIcon() {
  return (
    <IconBase>
      <path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
    </IconBase>
  );
}

export function MailIcon() {
  return (
    <IconBase>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </IconBase>
  );
}

export function ClockIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </IconBase>
  );
}

// Social badges — rounded-square, quiet by default, brand color on hover.
function SocialBadge({
  href,
  label,
  hoverBg,
  children,
}: {
  href: string;
  label: string;
  hoverBg: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-panel-border bg-white/[0.03] text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:text-white"
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
      onMouseLeave={(e) => (e.currentTarget.style.background = "")}
    >
      {children}
    </a>
  );
}

export function GoogleGIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.3h5.9c-.3 1.4-1 2.5-2.2 3.3v2.7h3.6c2.1-1.9 3.2-4.8 3.2-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c3 0 5.4-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.8 0-5.2-1.9-6.1-4.4H2.2v2.8C4.1 20.5 7.8 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.9 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3V6.9H2.2A11 11 0 0 0 1 12c0 1.8.4 3.5 1.2 5l3.7-2.7Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2C17.4 2 15 1 12 1 7.8 1 4.1 3.5 2.2 6.9l3.7 2.8c.9-2.6 3.3-4.3 6.1-4.3Z"
      />
    </svg>
  );
}

export function GoogleBadge({ href }: { href: string }) {
  return (
    <SocialBadge href={href} label="Google Reviews" hoverBg="rgba(255,255,255,0.12)">
      <GoogleGIcon />
    </SocialBadge>
  );
}

export function InstagramBadge({ href }: { href: string }) {
  return (
    <SocialBadge
      href={href}
      label="Instagram"
      hoverBg="linear-gradient(135deg,#fd5949,#d6249f,#285AEB)"
    >
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.7}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    </SocialBadge>
  );
}

export function ThreadsBadge({ href }: { href: string }) {
  return (
    <SocialBadge href={href} label="Threads" hoverBg="#0a0a0a">
      <span className="text-lg font-bold leading-none">@</span>
    </SocialBadge>
  );
}
