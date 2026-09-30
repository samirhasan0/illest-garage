export default function InPageNav({ items }: { items: { slug: string; label: string }[] }) {
  return (
    <nav
      aria-label="Jump to make"
      className="sticky top-[57px] z-30 flex flex-wrap justify-center gap-2 border-b border-panel-border bg-bg/95 px-6 py-4 backdrop-blur"
    >
      {items.map((item) => (
        <a
          key={item.slug}
          href={`#${item.slug}`}
          className="border border-panel-border px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-text-muted transition-colors hover:border-chrome-2 hover:text-text"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
