import Link from "next/link";
import type { Project } from "@/types/project";
import { StatusBadge } from "@/components/projects/status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="focus-ring group block border-l-2 border-border bg-surface p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-base font-semibold group-hover:text-accent">{project.title}</h3>
          <p className="mt-0.5 text-sm text-muted">{project.subtitle}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-3 text-sm text-ink/90">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      <span className="mt-4 inline-block text-sm text-accent">Explore the build</span>
    </Link>
  );
}
