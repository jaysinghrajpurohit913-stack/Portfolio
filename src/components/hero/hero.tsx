import Link from "next/link";
import { profile } from "@/data/profile";
import { FocusPanel } from "@/components/hero/focus-panel";
import { ProfilePanel } from "@/components/hero/profile-panel";

export function Hero() {
  return (
    <section className="mx-auto max-w-content px-5 pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-10">
        <div>
          <h1 className="font-display text-display-xl text-ink">
            Building across software, AI &amp; the physical world.
          </h1>
          <p className="prose-note mt-6 text-lg text-muted">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/work"
              className="focus-ring rounded bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              Explore my work
            </Link>
            <Link
              href={profile.links.resume}
              className="focus-ring rounded border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              View resume
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-muted">
            <a href={profile.links.github} className="focus-ring rounded hover:text-ink" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} className="focus-ring rounded hover:text-ink" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.links.email}`} className="focus-ring rounded hover:text-ink">
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <ProfilePanel />
          <FocusPanel />
        </div>
      </div>
    </section>
  );
}
