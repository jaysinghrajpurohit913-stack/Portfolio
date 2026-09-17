import Link from "next/link";

const steps = [
  { label: "Problem", detail: "What is the actual problem?" },
  { label: "Constraints", detail: "What limitations exist?" },
  { label: "Architecture", detail: "How does the system work?" },
  { label: "Decisions", detail: "Why this technology, this design?" },
  { label: "Failure", detail: "What went wrong?" },
  { label: "Result", detail: "What happened, and what changed?" },
];

export function HowIBuild() {
  return (
    <section className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-display-md">How I build</h2>
          <Link href="/engineering" className="focus-ring rounded text-sm text-accent">
            Full methodology
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.label} className="rounded border border-border bg-bg p-4">
              <p className="font-mono text-xs text-accent">{step.label}</p>
              <p className="mt-1 text-sm text-muted">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
