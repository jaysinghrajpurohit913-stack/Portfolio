import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: "AI Engineering",
  description: "AI applications, LLM systems, retrieval, reasoning workflows and AI product experiments.",
};

export default function AiPage() {
  const aiProjects = projects.filter((p) => p.category.includes("AI"));

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      <h1 className="font-display text-display-lg">AI Engineering</h1>
      <p className="prose-note mt-4 text-muted">
        Exploring how AI can be turned into useful software systems, rather than simply adding an LLM
        call to an existing application.
      </p>

      <p className="prose-note mt-4 text-sm text-muted">
        Each project below is labeled by its actual build state — Built, In Progress, or Exploring — so
        nothing planned is represented as already completed.
      </p>

      <h2 className="mt-14 font-display text-xl font-semibold">AI projects</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {aiProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
