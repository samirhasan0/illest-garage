import Link from "next/link";
import { business } from "@/lib/business";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-text-muted">Error 404</p>
      <h1 className="chrome-text mt-4 text-5xl italic sm:text-6xl">Wrong Turn</h1>
      <p className="mt-4 max-w-md text-text-muted">
        That page doesn&apos;t exist — but your next appointment can. Head back home or give us a call.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Link href="/" className="btn btn-primary w-full sm:w-auto">
          Back to Home
        </Link>
        <a href={business.phoneHref} className="btn btn-outline w-full sm:w-auto">
          Call Now — {business.phone}
        </a>
      </div>
    </main>
  );
}
