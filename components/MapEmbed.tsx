import { business } from "@/lib/business";

export default function MapEmbed({ className = "" }: { className?: string }) {
  const query = encodeURIComponent(business.address.full);

  return (
    <div className={`panel overflow-hidden ${className}`}>
      <iframe
        title={`${business.name} location map`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full min-h-[280px]"
      />
    </div>
  );
}
