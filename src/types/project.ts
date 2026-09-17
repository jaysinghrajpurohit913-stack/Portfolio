import { z } from "zod";

export const projectCategorySchema = z.enum([
  "Software",
  "Backend",
  "Full Stack",
  "AI",
  "Robotics",
  "Real-time",
  "Monitoring",
  "Research",
]);

export const projectStatusSchema = z.enum(["completed", "in-progress", "exploring", "planned"]);

export const decisionSchema = z.object({
  decision: z.string(),
  why: z.string(),
  tradeoff: z.string(),
});

export const challengeSchema = z.object({
  problem: z.string(),
  investigation: z.string(),
  rootCause: z.string(),
  fix: z.string(),
  lesson: z.string(),
});

export const evidenceSchema = z.object({
  type: z.enum(["repository", "architecture", "metric", "deployment", "note"]),
  label: z.string(),
  detail: z.string(),
  href: z.string().url().optional(),
});

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  category: z.array(projectCategorySchema),
  status: projectStatusSchema,
  technologies: z.array(z.string()),
  problem: z.string(),
  description: z.string(),
  motivation: z.string().optional(),
  metrics: z.array(z.string()).optional(),
  architecture: z.array(z.string()).optional(),
  decisions: z.array(decisionSchema).optional(),
  challenges: z.array(challengeSchema).optional(),
  lessons: z.array(z.string()).optional(),
  futureWork: z.array(z.string()).optional(),
  evidence: z.array(evidenceSchema).optional(),
  github: z.string().url().optional(),
  live: z.string().url().optional(),
  featured: z.boolean(),
});

export type Project = z.infer<typeof projectSchema>;
export type Decision = z.infer<typeof decisionSchema>;
export type Challenge = z.infer<typeof challengeSchema>;
export type Evidence = z.infer<typeof evidenceSchema>;
export type ProjectStatus = z.infer<typeof projectStatusSchema>;
