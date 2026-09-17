"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/project-card";

const filters = ["All", "Software", "Backend", "AI", "Robotics", "Research"] as const;

export function WorkExplorer({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.category.includes(activeFilter as never);
      const haystack = `${project.title} ${project.subtitle} ${project.description} ${project.technologies.join(" ")}`.toLowerCase();
      const matchesQuery = query.trim() === "" || haystack.includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [projects, activeFilter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`focus-ring rounded border px-3 py-1.5 text-sm transition-colors ${
                activeFilter === filter
                  ? "border-accent text-accent"
                  : "border-border text-muted hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="relative block w-full md:w-64">
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="focus-ring w-full rounded border border-border bg-surface px-3 py-1.5 text-sm placeholder:text-muted"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-sm text-muted">No projects match that search. Try a different term or filter.</p>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
