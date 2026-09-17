const stages = [
  "Electronics & Communication",
  "UAV / Hardware",
  "Real-world Systems",
  "Programming",
  "Backend",
  "Full Stack",
  "AI Engineering",
  "Systems Thinking",
];

export function EngineeringJourney() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <h2 className="font-display text-display-md">Engineering journey</h2>
        <p className="prose-note mt-4 text-muted">
          Started with physical engineering systems and gradually moved deeper into software, backend
          systems and AI — while continuing to work across the hardware/software boundary.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3">
          {stages.map((stage, i) => (
            <div key={stage} className="flex items-center gap-2">
              <span className="rounded border border-border bg-surface px-3 py-1.5 text-sm">{stage}</span>
              {i < stages.length - 1 && <span className="text-muted" aria-hidden>→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
