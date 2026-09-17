import { profile } from "@/data/profile";

export function CurrentFocusSection() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-content px-5 py-10">
        <h2 className="font-display text-sm font-semibold text-muted">Currently building</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {profile.currentFocus.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 rounded border border-border bg-surface px-3 py-1.5 text-sm"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-accent">{item.state}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
