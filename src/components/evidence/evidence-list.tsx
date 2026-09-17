import type { Evidence } from "@/types/project";

const typeLabels: Record<Evidence["type"], string> = {
  repository: "Repository",
  architecture: "Architecture",
  metric: "Metric",
  deployment: "Deployment",
  note: "Note",
};

export function EvidenceList({ items }: { items: Evidence[] }) {
  if (items.length === 0) return null;

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-4 rounded border border-border bg-surface p-4">
          <span className="mt-0.5 shrink-0 rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
            {typeLabels[item.type]}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-medium">{item.label}</p>
            <p className="mt-1 text-sm text-muted">{item.detail}</p>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-2 inline-block rounded font-mono text-xs text-accent hover:underline"
              >
                {item.href.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
