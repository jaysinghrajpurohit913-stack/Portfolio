export type BuildLogEntry = {
  slug: string;
  date: string; // ISO format, e.g. "2026-09-17"
  title: string;
  summary: string;
  tags: string[];
  content: string; // markdown
  relatedProjectSlugs?: string[];
};

// Empty until a real engineering-journal entry is written — an empty, honest state
// beats a fabricated post. Add entries here (or move to content/build-log/*.mdx and
// wire up gray-matter + next-mdx-remote if the log grows).
export const buildLogEntries: BuildLogEntry[] = [];

export function getBuildLogEntryBySlug(slug: string): BuildLogEntry | undefined {
  return buildLogEntries.find((entry) => entry.slug === slug);
}

export function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
