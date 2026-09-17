import type { ProjectStatus } from "@/types/project";

const labels: Record<ProjectStatus, string> = {
  completed: "Built",
  "in-progress": "In Progress",
  exploring: "Exploring",
  planned: "Planned",
};

const colors: Record<ProjectStatus, string> = {
  completed: "text-accent border-accent/40",
  "in-progress": "text-caution border-caution/40",
  exploring: "text-muted border-border",
  planned: "text-muted border-border",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] ${colors[status]}`}>
      {labels[status]}
    </span>
  );
}
