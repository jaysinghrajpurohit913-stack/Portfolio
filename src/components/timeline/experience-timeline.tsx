import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-content px-5 py-16 md:py-20">
      <h2 className="font-display text-display-md">Experience</h2>
      <div className="mt-8 divide-y divide-border border-t border-border">
        {experience.map((entry) => (
          <div key={entry.role + entry.org} className="grid gap-2 py-6 md:grid-cols-[200px_1fr]">
            <div>
              <p className="font-mono text-xs text-muted">{entry.period}</p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold">{entry.role}</h3>
              <p className="text-sm text-muted">{entry.org}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {entry.points.map((point) => (
                  <li key={point} className="rounded border border-border px-2 py-0.5 text-xs text-ink/80">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
