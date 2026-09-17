import type { Decision } from "@/types/project";

export function DecisionCard({ decision }: { decision: Decision }) {
  return (
    <div className="rounded border border-border bg-surface p-5">
      <p className="font-display text-sm font-semibold">{decision.decision}</p>
      <dl className="mt-3 space-y-2 text-sm">
        <div>
          <dt className="font-mono text-xs text-muted">why</dt>
          <dd className="mt-0.5 text-ink/90">{decision.why}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-caution">trade-off</dt>
          <dd className="mt-0.5 text-ink/90">{decision.tradeoff}</dd>
        </div>
      </dl>
    </div>
  );
}
