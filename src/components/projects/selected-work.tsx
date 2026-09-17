import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function SelectedWork() {
  const featured = getFeaturedProjects();

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-display-md">Selected work</h2>
          <Link href="/work" className="focus-ring rounded text-sm text-accent">
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
