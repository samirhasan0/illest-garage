import type { ReactElement } from "react";

type IconName = "flag" | "track" | "star";

const paths: Record<IconName, ReactElement> = {
  flag: (
    <>
      <path d="M5 3v18" strokeLinecap="round" />
      <path
        d="M5 4.5c2-1.2 4-1.2 6 0s4 1.2 6 0v9c-2 1.2-4 1.2-6 0s-4-1.2-6 0z"
        strokeLinejoin="round"
      />
    </>
  ),
  track: <ellipse cx="12" cy="12" rx="9" ry="6" />,
  star: (
    <path
      d="M12 3.5l2.47 5.13 5.53.62-4.1 3.9 1.08 5.52L12 15.9l-4.98 2.77 1.08-5.52-4.1-3.9 5.53-.62z"
      strokeLinejoin="round"
    />
  ),
};

export default function IconMarker({
  icon,
  className = "h-6 w-6",
}: {
  icon: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
