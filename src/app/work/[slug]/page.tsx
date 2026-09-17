import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { StatusBadge } from "@/components/projects/status-badge";
import { ArchitectureDiagram } from "@/components/architecture/architecture-diagram";
import { DecisionCard } from "@/components/evidence/decision-card";
import { ChallengeCard } from "@/components/evidence/challenge-card";
import { EvidenceList } from "@/components/evidence/evidence-list";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
    },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10">
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length] ?? projects[0]!;

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      {/* Hero */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          {project.category.map((c) => (
            <span key={c} className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
              {c}
            </span>
          ))}
        </div>
        <h1 className="mt-4 font-display text-display-lg">{project.title}</h1>
        <p className="mt-2 text-lg text-muted">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded border border-border px-2.5 py-1 font-mono text-xs text-ink/80">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring rounded text-sm text-accent hover:underline">
              GitHub repository
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="focus-ring rounded text-sm text-accent hover:underline">
              Live demo
            </a>
          )}
        </div>
      </div>

      <Section title="Overview">
        <p className="prose-note text-ink/90">{project.description}</p>
      </Section>

      <Section title="Problem">
        <p className="prose-note text-ink/90">{project.problem}</p>
      </Section>

      {project.motivation && (
        <Section title="Why I built it">
          <p className="prose-note text-ink/90">{project.motivation}</p>
        </Section>
      )}

      {project.architecture && (
        <Section title="Architecture">
          <ArchitectureDiagram layers={project.architecture} />
        </Section>
      )}

      {project.decisions && project.decisions.length > 0 && (
        <Section title="Technical decisions">
          <div className="grid gap-4 md:grid-cols-2">
            {project.decisions.map((d, i) => (
              <DecisionCard key={i} decision={d} />
            ))}
          </div>
        </Section>
      )}

      {project.challenges && project.challenges.length > 0 && (
        <Section title="What broke">
          <div className="grid gap-4 md:grid-cols-2">
            {project.challenges.map((c, i) => (
              <ChallengeCard key={i} challenge={c} />
            ))}
          </div>
        </Section>
      )}

      {project.metrics && project.metrics.length > 0 && (
        <Section title="Results">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <li key={metric} className="rounded border border-border bg-surface p-4 text-sm">
                {metric}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.lessons && project.lessons.length > 0 && (
        <Section title="Lessons">
          <ul className="space-y-2">
            {project.lessons.map((lesson) => (
              <li key={lesson} className="flex gap-3 text-sm text-ink/90">
                <span className="text-accent" aria-hidden>—</span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.futureWork && project.futureWork.length > 0 && (
        <Section title="Future improvements">
          <ul className="space-y-2">
            {project.futureWork.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink/90">
                <span className="text-accent" aria-hidden>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.evidence && project.evidence.length > 0 && (
        <Section title="Evidence">
          <EvidenceList items={project.evidence} />
        </Section>
      )}

      <div className="mt-14 flex items-center justify-between border-t border-border pt-8">
        <Link href="/work" className="focus-ring rounded text-sm text-muted hover:text-ink">
          Back to work
        </Link>
        <Link href={`/work/${next.slug}`} className="focus-ring rounded text-sm text-accent">
          Next: {next.title}
        </Link>
      </div>
    </div>
  );
}
