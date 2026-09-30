import Image from "next/image";

export default function Logo({ size = "header" }: { size?: "header" | "footer" }) {
  const imgClass = size === "header" ? "h-14 sm:h-16" : "h-11 sm:h-12";
  const textClass = size === "header" ? "text-lg sm:text-2xl" : "text-base sm:text-xl";

  return (
    <span className="flex items-center gap-3">
      <Image
        src="/brand/logo-wordmark.webp"
        alt="The Illest Garage"
        width={910}
        height={568}
        priority={size === "header"}
        className={`w-auto ${imgClass}`}
      />
      <span
        className={`chrome-text font-display whitespace-nowrap italic leading-none ${textClass}`}
        style={{ fontWeight: 900 }}
      >
        THE ILLEST GARAGE
      </span>
    </span>
  );
}
