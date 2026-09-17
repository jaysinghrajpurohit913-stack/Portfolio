import type { Metadata } from "next";
import Link from "next/link";
import { buildLogEntries, estimateReadingTime } from "@/data/build-log";

export const metadata: Metadata = {
  title: "Build Log",
  description: "A lightweight engineering journal — what got fixed, what broke, and what changed.",
};

export default function BuildLogPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      <h1 className="font-display text-display-lg">Build Log</h1>
      <p className="prose-note mt-4 text-muted">
        A running engineering journal: what got fixed, what broke, and what changed as a result.
      </p>

      {buildLogEntries.length === 0 ? (
        <div className="mt-12 rounded border border-border bg-surface p-8 text-center">
          <p className="text-sm text-muted">
            No entries yet — this page is wired up and ready. The first real build-log entry will
            appear here.
          </p>
        </div>
      ) : (
        <ul className="mt-10 divide-y divide-border border-t border-border">
          {buildLogEntries
            .slice()
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((entry) => (
              <li key={entry.slug} className="py-6">
                <Link href={`/build-log/${entry.slug}`} className="focus-ring block rounded">
                  <p className="font-mono text-xs text-muted">
                    {entry.date} · {estimateReadingTime(entry.content)} min read
                  </p>
                  <h2 className="mt-1 font-display text-lg font-semibold">{entry.title}</h2>
                  <p className="mt-1 text-sm text-muted">{entry.summary}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
