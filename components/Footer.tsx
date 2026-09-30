import Link from "next/link";
import { business, mainNav } from "@/lib/business";
import MapEmbed from "@/components/MapEmbed";
import Logo from "@/components/Logo";
import {
  PhoneIcon,
  TextIcon,
  MailIcon,
  ClockIcon,
  PinIcon,
  GoogleBadge,
  InstagramBadge,
  ThreadsBadge,
} from "@/components/ContactIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-panel-border bg-panel pb-24 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo size="footer" />
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            {business.tagline}
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <PinIcon />
              <span className="text-sm text-text-muted">{business.address.full}</span>
            </div>
            <a
              href={business.phoneHref}
              className="flex items-center gap-3 text-text-muted transition-colors hover:text-text"
            >
              <PhoneIcon />
              <span className="text-sm">{business.phone}</span>
            </a>
            <a
              href={business.secondaryPhoneHref}
              className="flex items-center gap-3 text-text-muted transition-colors hover:text-text"
            >
              <TextIcon />
              <span className="text-sm">
                {business.secondaryPhone} <span className="text-xs">(call or text)</span>
              </span>
            </a>
            <a
              href={business.emailHref}
              className="flex items-center gap-3 text-text-muted transition-colors hover:text-text"
            >
              <MailIcon />
              <span className="text-sm">{business.email}</span>
            </a>
            <div className="flex items-center gap-3">
              <ClockIcon />
              <span className="text-sm text-text-muted">{business.hours}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <GoogleBadge href={business.googleBusinessProfileUrl} />
            <InstagramBadge href={business.instagram.url} />
            <ThreadsBadge href={business.threads.url} />
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 self-start text-sm">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-text-muted hover:text-text">
              {item.label}
            </Link>
          ))}
          <Link href="/book-appointment/" className="text-text-muted hover:text-text">
            Book Services
          </Link>
          <Link href="/privacy-policy/" className="text-text-muted hover:text-text">
            Privacy Policy
          </Link>
        </nav>

        <MapEmbed className="h-56 md:h-full" />
      </div>

      <div className="border-t border-panel-border px-6 py-6 text-center text-xs text-text-muted">
        © {year} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
