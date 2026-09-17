import { getRepoSummary } from "@/lib/github/get-repo";

export async function GithubEvidence({ owner, repo }: { owner: string; repo: string }) {
  const summary = await getRepoSummary(owner, repo);

  if (!summary) {
    return (
      <div className="rounded border border-border bg-surface p-4 text-sm text-muted">
        GitHub data is temporarily unavailable.{" "}
        <a
          href={`https://github.com/${owner}/${repo}`}
          target="_blank"
          rel="noreferrer"
          className="focus-ring rounded text-accent hover:underline"
        >
          View the repository directly
        </a>
        .
      </div>
    );
  }

  return (
    <a
      href={summary.htmlUrl}
      target="_blank"
      rel="noreferrer"
      className="focus-ring block rounded border border-border bg-surface p-4 transition-colors hover:border-accent"
    >
      <p className="font-mono text-sm text-ink">{summary.fullName}</p>
      {summary.description && <p className="mt-1 text-sm text-muted">{summary.description}</p>}
      <div className="mt-2 flex items-center gap-3 font-mono text-xs text-muted">
        {summary.language && <span>{summary.language}</span>}
        <span>Updated {new Date(summary.updatedAt).toLocaleDateString()}</span>
      </div>
    </a>
  );
}
