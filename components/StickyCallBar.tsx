import { business } from "@/lib/business";
import Link from "next/link";

export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-panel-border bg-bg/95 backdrop-blur lg:hidden">
      <a
        href={business.phoneHref}
        className="btn btn-outline rounded-none border-0 border-r border-panel-border py-4 text-xs"
      >
        Call Now
      </a>
      <Link href="/book-appointment/" className="btn btn-primary rounded-none py-4 text-xs">
        Book Services
      </Link>
    </div>
  );
}
