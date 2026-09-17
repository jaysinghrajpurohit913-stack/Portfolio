import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering",
  description: "How Jaideep approaches building software, AI, and robotics systems.",
};

const stages = [
  { title: "Problem", body: "What is the actual problem? Not the assumed one — the one the system genuinely needs to solve." },
  { title: "Constraints", body: "What limitations exist — time, hardware, data, deployment environment, existing systems?" },
  { title: "Architecture", body: "How does the system actually work end to end, not just the happy path?" },
  { title: "Decisions", body: "Why this technology, this design — and what it costs to choose it." },
  { title: "Failure", body: "What went wrong. Documented honestly, not glossed over." },
  { title: "Iteration", body: "What changed as a result — in the code, the design, or the approach." },
  { title: "Result", body: "What actually happened, measured where possible." },
  { title: "Learning", body: "What changed in how I think about engineering, not just what I shipped." },
];

export default function EngineeringPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      <h1 className="font-display text-display-lg">How does Jaideep build?</h1>
      <p className="prose-note mt-4 text-muted">
        Every project on this site is walked through the same set of questions. It&apos;s less a
        checklist and more a way of making sure the interesting parts — the trade-offs and the
        failures — don&apos;t get edited out of the story.
      </p>

      <div className="mt-12 space-y-8">
        {stages.map((stage, i) => (
          <div key={stage.title} className="flex gap-5 border-t border-border pt-8">
            <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="font-display text-lg font-semibold">{stage.title}</h2>
              <p className="mt-2 max-w-prose text-sm text-ink/90">{stage.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
