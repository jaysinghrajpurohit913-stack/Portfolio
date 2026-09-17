export type RepoSummary = {
  name: string;
  fullName: string;
  description: string | null;
  language: string | null;
  htmlUrl: string;
  updatedAt: string;
};

/**
 * Fetches public repository metadata from the GitHub REST API.
 * No token is used or required — this only reads public data and is cached
 * for an hour to stay well under GitHub's unauthenticated rate limit.
 * Never expose a GitHub token to the client; if authenticated requests are
 * ever needed, keep the token server-side only (env var, never NEXT_PUBLIC_).
 */
export async function getRepoSummary(owner: string, repo: string): Promise<RepoSummary | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      name: data.name,
      fullName: data.full_name,
      description: data.description,
      language: data.language,
      htmlUrl: data.html_url,
      updatedAt: data.updated_at,
    };
  } catch {
    return null;
  }
}
