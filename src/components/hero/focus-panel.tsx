import { profile } from "@/data/profile";

const barLevels: Record<number, string> = {
  1: "w-1/4",
  2: "w-2/4",
  3: "w-3/4",
  4: "w-full",
};

const rows = [
  { label: profile.pillars.software.label, level: profile.pillars.software.barLevel },
  { label: profile.pillars.ai.label, level: profile.pillars.ai.barLevel },
  { label: profile.pillars.robotics.label, level: profile.pillars.robotics.barLevel },
];

export function FocusPanel() {
  return (
    <div className="rounded border border-border bg-surface p-4 font-mono text-xs">
      <p className="text-muted">$ current-focus</p>
      <div className="mt-3 space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <p className="mb-1 text-ink">{row.label}</p>
            <div className="h-1.5 w-full rounded-full bg-surface-raised">
              <div
                className={`h-1.5 rounded-full bg-accent ${barLevels[row.level] ?? "w-1/4"}`}
                role="img"
                aria-label={`${row.label} focus level: ${row.level} of 4`}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-muted">$ status</p>
      <p className="mt-1 text-accent">building...</p>
    </div>
  );
}
