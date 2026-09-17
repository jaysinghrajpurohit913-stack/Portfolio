import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { GithubEvidence } from "@/components/evidence/github-evidence";

export const metadata: Metadata = {
  title: "Software Engineering",
  description: "Backend architecture, APIs, real-time communication, databases and production deployment.",
};

export default function SoftwarePage() {
  const softwareProjects = projects.filter((p) =>
    p.category.some((c) => ["Software", "Backend", "Full Stack"].includes(c))
  );

  const topics = [
    "Backend",
    "Real-time Systems",
    "APIs",
    "Databases",
    "Authentication",
    "Engineering Decisions",
  ];

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      <h1 className="font-display text-display-lg">Software Engineering</h1>
      <p className="prose-note mt-4 text-muted">
        Building practical software systems with a focus on backend architecture, APIs, real-time
        communication, databases and production deployment.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span key={topic} className="rounded border border-border px-3 py-1 text-sm text-muted">
            {topic}
          </span>
        ))}
      </div>

      <h2 className="mt-14 font-display text-xl font-semibold">Selected software work</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {softwareProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <h2 className="mt-14 font-display text-xl font-semibold">GitHub evidence</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <GithubEvidence owner="jaysinghrajpurohit913-stack" repo="url-monitor-backend" />
      </div>
    </div>
  );
}
