import type { Challenge } from "@/types/project";

const rows: { key: keyof Challenge; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "investigation", label: "Investigation" },
  { key: "rootCause", label: "Root cause" },
  { key: "fix", label: "Fix" },
  { key: "lesson", label: "Lesson" },
];

export function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <div className="rounded border border-stop/30 bg-surface p-5">
      <div className="space-y-3 text-sm">
        {rows.map((row) => (
          <div key={row.key}>
            <p className="font-mono text-xs text-stop">{row.label}</p>
            <p className="mt-0.5 text-ink/90">{challenge[row.key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
