export function EvidenceChain({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, i) => (
        <li key={i} className="relative pl-6">
          {i < steps.length - 1 && (
            <span className="absolute left-[7px] top-4 h-full w-px bg-border" aria-hidden />
          )}
          <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" aria-hidden />
          <p className="pb-6 font-mono text-sm text-ink">{step}</p>
        </li>
      ))}
    </ol>
  );
}
