import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Robotics & UAV",
  description: "Building and testing systems where software meets sensors, hardware and the physical world.",
};

export default function RoboticsPage() {
  const roboticsProjects = projects.filter((p) => p.category.includes("Robotics"));
  const arc = experience.find((e) => e.org === "ARC Robotics Club");

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      <div className="rounded border border-border bg-surface p-1">
        <div className="grain-panel rounded p-7 md:p-9">
          <h1 className="font-display text-display-lg">Robotics &amp; UAV</h1>
          <p className="prose-note mt-4 text-muted">
            Experience building and testing systems where software meets sensors, hardware and the
            physical world.
          </p>
        </div>
      </div>

      <h2 className="mt-14 font-display text-xl font-semibold">UAV &amp; research work</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {roboticsProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {arc && (
        <div className="mt-10 rounded border border-border bg-surface p-5">
          <p className="font-display text-sm font-semibold">{arc.role} — {arc.org}</p>
          <p className="mt-1 font-mono text-xs text-muted">{arc.period}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {arc.points.map((point) => (
              <li key={point} className="rounded border border-border px-2 py-0.5 text-xs text-ink/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
