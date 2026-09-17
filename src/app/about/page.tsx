import type { Metadata } from "next";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Jaideep Singh Rajpurohit's background, education, and working philosophy.",
};

function photoExists(): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", profile.links.photo.replace(/^\//, "")));
  } catch {
    return false;
  }
}

export default function AboutPage() {
  const hasPhoto = photoExists();

  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-[280px_1fr]">
        <div className="relative aspect-square overflow-hidden rounded border border-border bg-surface">
          {hasPhoto ? (
            <Image src={profile.links.photo} alt={profile.name} fill className="object-cover" sizes="280px" />
          ) : (
            <div className="grain-panel flex h-full w-full items-center justify-center">
              <span className="font-mono text-xs text-muted">photo pending</span>
            </div>
          )}
        </div>

        <div>
          <h1 className="font-display text-display-lg">About</h1>

          <div className="prose-note mt-6 space-y-4 text-ink/90">
            <p>
              I&apos;m an Electronics &amp; Communication Engineering student at IIIT Kota, which is a
              slightly unusual starting point for someone spending most of their time writing backend
              code and experimenting with AI systems — but it&apos;s also where the interest came from.
              Working with sensors and hardware first meant I got used to systems that fail in physical,
              undeniable ways before I ever touched a web server.
            </p>
            <p>
              That background shows up in how I approach software: I care about what actually happens
              when a request hits a server, why authentication breaks differently in production than in
              development, and what a signal looks like once it&apos;s airborne instead of on a bench.
            </p>
            <p>
              Right now I&apos;m building backend systems, deepening AI engineering, and staying close
              to robotics through the ARC Robotics Club and ongoing UAV research at IIIT Kota.
            </p>
          </div>

          <div className="mt-10 rounded border border-border bg-surface p-5">
            <p className="font-display text-sm font-semibold">{profile.education.institution}</p>
            <p className="mt-1 text-sm text-muted">{profile.education.degree}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {profile.education.period} · CGPA {profile.education.cgpa}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="focus-ring rounded text-accent hover:underline">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="focus-ring rounded text-accent hover:underline">
              LinkedIn
            </a>
            <a href={`mailto:${profile.links.email}`} className="focus-ring rounded text-accent hover:underline">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
