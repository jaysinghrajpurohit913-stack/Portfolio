export function ArchitectureDiagram({ layers }: { layers: string[] }) {
  return (
    <div className="overflow-x-auto rounded border border-border bg-surface p-6">
      <div className="flex min-w-max flex-col items-center gap-0 font-mono text-sm">
        {layers.map((layer, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="rounded border border-border bg-surface-raised px-4 py-2 text-center">{layer}</div>
            {i < layers.length - 1 && <div className="my-1 h-4 w-px bg-border" aria-hidden />}
          </div>
        ))}
      </div>
    </div>
  );
}
