import Link from "next/link";

const pillars = [
  {
    href: "/software",
    title: "Software",
    description: "Backend systems, APIs, real-time applications and full-stack products.",
    cta: "Explore Software",
  },
  {
    href: "/ai",
    title: "AI",
    description: "AI applications, LLM systems, retrieval, reasoning workflows and AI product experiments.",
    cta: "Explore AI",
  },
  {
    href: "/robotics",
    title: "Robotics",
    description: "UAVs, sensor systems, hardware integration, signal processing and real-world engineering.",
    cta: "Explore Robotics",
  },
];

export function ThreePillars() {
  return (
    <section className="mx-auto max-w-content px-5 py-16 md:py-20">
      <h2 className="font-display text-display-md">Three ways I build.</h2>
      <div className="mt-8 grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-3">
        {pillars.map((pillar) => (
          <Link
            key={pillar.href}
            href={pillar.href}
            className="focus-ring group flex flex-col justify-between bg-bg p-6 transition-colors hover:bg-surface"
          >
            <div>
              <h3 className="font-display text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-muted">{pillar.description}</p>
            </div>
            <span className="mt-8 inline-block text-sm text-accent">{pillar.cta}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
