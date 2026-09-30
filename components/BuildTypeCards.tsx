import RevealOnScroll from "@/components/RevealOnScroll";
import IconMarker from "@/components/IconMarker";

const buildTypes = [
  {
    icon: "flag" as const,
    title: "Street",
    body: "Daily-driver builds with real power gains and real reliability.",
  },
  {
    icon: "track" as const,
    title: "Track",
    body: "Suspension, brakes, and cooling built to survive laps, not just launches.",
  },
  {
    icon: "star" as const,
    title: "Show",
    body: "Builds that turn heads — fit, finish, and details that matter.",
  },
];

export default function BuildTypeCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {buildTypes.map((type, i) => (
        <RevealOnScroll key={type.title} delay={i * 100}>
          <div className="panel flex h-full flex-col items-center gap-4 px-6 py-10 text-center">
            <IconMarker icon={type.icon} className="h-10 w-10 text-red" />
            <h3 className="font-display text-2xl italic text-text">{type.title}</h3>
            <p className="text-sm text-text-muted">{type.body}</p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
