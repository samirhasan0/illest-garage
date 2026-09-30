// Real reviews pulled from the Google Business Profile (share.google/ynDq73pMRBJ1OqEUE)
// on 2026-09-30. Verbatim text and real reviewer names/handles — nothing invented.
// The profile shows 10 reviews total; Google's public view only exposes full text
// for these 3 plus short excerpts for 3 more. Update this file (or wire up the
// Elfsight widget once [ELFSIGHT_WIDGET_ID] is confirmed) to keep it current.
//
// `rating`: the listing's own star breakdown shows 9 of 10 total reviews at
// 5 stars (0 at 4/3/2 stars), confirmed via the Google Maps listing — so all
// three featured reviews below are 5-star.

export const reviews = [
  {
    name: "Nick Lugo",
    rating: 5,
    meta: "4 reviews · 1 photo",
    timeAgo: "7 months ago",
    text: "They have done amazing work on my 15 mustang installing a cold air intake to installing lower springs I would highly recommend if you need any mechanical needs or questions about your ride",
  },
  {
    name: "JeedyJeed",
    rating: 5,
    meta: "Local Guide · 22 reviews · 10 photos",
    timeAgo: "7 months ago",
    text: "They did an amazing job on my car! I came in for an oil change and they did an inspection along with some extra information they threw in for future preventative maintenance. I appreciate you Illest! I will be returning soon",
  },
  {
    name: "Ryan Park",
    rating: 5,
    meta: "Local Guide · 16 reviews · 3 photos",
    timeAgo: "6 months ago",
    text: "Great job working on my M340i. Replaced the engine mounts and guibo. Very reasonable price and done in a timely manner. They also notified me of parts that might need replacing soon. Will be coming back for sure!",
  },
] as const;

// Short excerpts Google surfaces from 3 additional reviews (full text not
// exposed in the public share view).
export const reviewExcerpts = [
  "Replaced my radiator and front bumper",
  "Always satisfied with their customer service 10/10.",
] as const;
