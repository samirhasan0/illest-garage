import IconMarker from "@/components/IconMarker";

export default function SectionHeading({
  icon,
  title,
  body,
  align = "center",
  bodyClassName = "text-text-muted",
}: {
  icon?: "flag" | "track" | "star";
  title: string;
  body?: string;
  align?: "center" | "left";
  bodyClassName?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {icon && (
        <IconMarker
          icon={icon}
          className={`h-7 w-7 text-red ${align === "center" ? "mx-auto" : ""}`}
        />
      )}
      <h2 className="chrome-text mt-3 text-3xl italic sm:text-4xl">{title}</h2>
      {body && <p className={`mt-4 ${bodyClassName}`}>{body}</p>}
    </div>
  );
}
