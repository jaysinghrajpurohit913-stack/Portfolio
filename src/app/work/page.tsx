import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { WorkExplorer } from "@/components/projects/work-explorer";

export const metadata: Metadata = {
  title: "Work",
  description: "Software, AI, and robotics projects by Jaideep Singh Rajpurohit — with architecture, decisions, and evidence for each.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      <h1 className="font-display text-display-lg">Work</h1>
      <p className="prose-note mt-4 text-muted">
        Every project here links to its architecture, the decisions behind it, and — where something broke —
        what happened and how it was fixed.
      </p>
      <div className="mt-10">
        <WorkExplorer projects={projects} />
      </div>
    </div>
  );
}
