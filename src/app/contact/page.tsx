import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jaideep Singh Rajpurohit.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="font-display text-display-lg">Contact</h1>
          <p className="prose-note mt-4 text-muted">
            Open to internships, software and AI opportunities, research collaboration, and
            conversations about robotics.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <a href={`mailto:${profile.links.email}`} className="focus-ring block rounded text-accent hover:underline">
              {profile.links.email}
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="focus-ring block rounded text-muted hover:text-ink">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="focus-ring block rounded text-muted hover:text-ink">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded border border-border bg-surface p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
