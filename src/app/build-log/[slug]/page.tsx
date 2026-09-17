import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildLogEntries, getBuildLogEntryBySlug, estimateReadingTime } from "@/data/build-log";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return buildLogEntries.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getBuildLogEntryBySlug(params.slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.summary };
}

export default function BuildLogEntryPage({ params }: { params: { slug: string } }) {
  const entry = getBuildLogEntryBySlug(params.slug);
  if (!entry) notFound();

  const related = projects.filter((p) => entry.relatedProjectSlugs?.includes(p.slug));

  return (
    <article className="mx-auto max-w-content px-5 py-16 md:py-20">
      <Link href="/build-log" className="focus-ring rounded text-sm text-muted hover:text-ink">
        Back to Build Log
      </Link>

      <p className="mt-6 font-mono text-xs text-muted">
        {entry.date} · {estimateReadingTime(entry.content)} min read
      </p>
      <h1 className="mt-2 font-display text-display-lg">{entry.title}</h1>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <span key={tag} className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose-note mt-8 whitespace-pre-wrap text-ink/90">{entry.content}</div>

      {related.length > 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted">Related projects</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {related.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="focus-ring rounded border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
