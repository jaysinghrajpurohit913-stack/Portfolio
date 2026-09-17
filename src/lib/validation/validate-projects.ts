import { projectSchema } from "@/types/project";
import { projects } from "@/data/projects";

/**
 * Validates all project entries against the schema.
 * Call this from a script (or import it at the top of a data-consuming module in dev)
 * so malformed project data fails loudly instead of silently producing a broken page.
 */
export function validateProjects() {
  const errors: string[] = [];

  const slugs = new Set<string>();
  for (const project of projects) {
    const result = projectSchema.safeParse(project);
    if (!result.success) {
      errors.push(`Project "${project.slug ?? "unknown"}" is invalid: ${result.error.message}`);
    }
    if (slugs.has(project.slug)) {
      errors.push(`Duplicate project slug: "${project.slug}"`);
    }
    slugs.add(project.slug);
  }

  if (errors.length > 0) {
    throw new Error(`Project data validation failed:\n${errors.join("\n")}`);
  }

  return true;
}

if (require.main === module) {
  validateProjects();
  // eslint-disable-next-line no-console
  console.log(`✓ ${projects.length} projects validated successfully.`);
}
