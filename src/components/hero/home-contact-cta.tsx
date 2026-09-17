import Link from "next/link";

export function HomeContactCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-5 py-16 text-center md:py-20">
        <h2 className="font-display text-display-md">Working on something worth talking about?</h2>
        <p className="prose-note mx-auto mt-4 text-muted">
          Open to internships, software and AI opportunities, research collaboration, and conversations
          about robotics.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contact"
            className="focus-ring rounded bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
