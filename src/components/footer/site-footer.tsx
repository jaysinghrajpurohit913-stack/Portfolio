import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-5 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-sm font-semibold">JAIDEEP</p>
            <p className="mt-1 font-mono text-xs text-muted">{profile.role}</p>
            <p className="mt-3 max-w-xs text-sm text-muted">Building, learning, experimenting.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <Link href="/work" className="focus-ring rounded text-muted hover:text-ink">Work</Link>
              <Link href="/software" className="focus-ring rounded text-muted hover:text-ink">Software</Link>
              <Link href="/ai" className="focus-ring rounded text-muted hover:text-ink">AI</Link>
              <Link href="/robotics" className="focus-ring rounded text-muted hover:text-ink">Robotics</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/engineering" className="focus-ring rounded text-muted hover:text-ink">Engineering</Link>
              <Link href="/build-log" className="focus-ring rounded text-muted hover:text-ink">Build Log</Link>
              <Link href="/about" className="focus-ring rounded text-muted hover:text-ink">About</Link>
              <Link href="/contact" className="focus-ring rounded text-muted hover:text-ink">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="focus-ring rounded text-muted hover:text-ink">GitHub</a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="focus-ring rounded text-muted hover:text-ink">LinkedIn</a>
              <a href={`mailto:${profile.links.email}`} className="focus-ring rounded text-muted hover:text-ink">Email</a>
              <Link href={profile.links.resume} className="focus-ring rounded text-muted hover:text-ink">Resume</Link>
            </div>
          </div>
        </div>

        <p className="mt-10 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
