import Script from "next/script";
import { business } from "@/lib/business";
import { reviews, reviewExcerpts } from "@/lib/reviews";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GoogleGIcon } from "@/components/ContactIcons";

// Google's own avatar palette for reviewers without a photo.
const AVATAR_COLORS = ["#EA4335", "#4285F4", "#34A853", "#FBBC05", "#8E24AA", "#00897B"];

function avatarColor(name: string) {
  const code = name.charCodeAt(0) || 0;
  return AVATAR_COLORS[code % AVATAR_COLORS.length];
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill={i < rating ? "#FBBC05" : "none"}
          stroke={i < rating ? "#FBBC05" : "#5a5a5a"}
          strokeWidth={1.5}
        >
          <path
            d="M12 3.5l2.47 5.13 5.53.62-4.1 3.9 1.08 5.52L12 15.9l-4.98 2.77 1.08-5.52-4.1-3.9 5.53-.62z"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsWall() {
  const hasElfsight = !business.elfsightWidgetId.startsWith("[");

  if (hasElfsight) {
    return (
      <>
        <div className={`elfsight-app-${business.elfsightWidgetId}`} data-elfsight-app-lazy />
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
          async
        />
      </>
    );
  }

  // Real reviews pulled from the Google Business Profile — see lib/reviews.ts.
  // Swap in the Elfsight widget above once [ELFSIGHT_WIDGET_ID] is confirmed
  // for a live, auto-updating feed.
  return (
    <div>
      <p className="mb-6 flex items-center justify-center gap-2 text-center text-sm font-semibold uppercase tracking-widest text-text-muted">
        <GoogleGIcon className="h-4 w-4" />
        {business.googleRating}<span className="text-[#FBBC05]">★</span> Google Reviews
      </p>

      <div className="grid gap-5 sm:grid-cols-3">
        {reviews.map((review, i) => (
          <RevealOnScroll key={review.name} delay={i * 90}>
            <div className="panel flex h-full flex-col gap-3 px-6 py-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: avatarColor(review.name) }}
                  >
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{review.name}</p>
                    <p className="text-xs text-text-muted">{review.meta}</p>
                  </div>
                </div>
                <GoogleGIcon className="h-4 w-4 shrink-0" />
              </div>

              <div className="flex items-center gap-2">
                <StarRow rating={review.rating} />
                <span className="text-xs text-text-muted">{review.timeAgo}</span>
              </div>

              <p className="flex-1 text-sm text-text-muted">&ldquo;{review.text}&rdquo;</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {reviewExcerpts.length > 0 && (
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-sm italic text-text-muted">
          {reviewExcerpts.map((quote) => (
            <span key={quote}>&ldquo;{quote}&rdquo;</span>
          ))}
        </div>
      )}

      <p className="mt-6 text-center text-xs text-text-muted">
        Real reviews from{" "}
        <a
          href={business.googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-text"
        >
          our Google Business Profile
        </a>
        .
      </p>
    </div>
  );
}
