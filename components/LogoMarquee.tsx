import Image from "next/image";
import { euroMakes, moreMakes } from "@/lib/business";
import { asset } from "@/lib/basePath";

export default function LogoMarquee() {
  const logos = [...euroMakes, ...moreMakes].filter((make) => make.logo);
  const track = [...logos, ...logos];

  return (
    <div className="logo-marquee bg-gradient-to-b from-[#e8eaed] to-[#c9cdd1] py-8">
      <div className="logo-marquee-track">
        {track.map((make, i) => (
          <div
            key={`${make.slug}-${i}`}
            className="flex h-16 w-36 shrink-0 items-center justify-center px-6"
          >
            <Image
              src={asset(make.logo!)}
              alt={make.name}
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
