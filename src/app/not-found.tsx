import Link from "next/link";

const routes = ["work", "software", "ai", "robotics", "engineering", "build-log", "about", "contact"];

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-content flex-col justify-center px-5 py-20">
      <div className="rounded border border-border bg-surface p-8 font-mono text-sm">
        <p className="text-2xl font-semibold text-ink">404</p>
        <p className="mt-2 text-muted">Route not found.</p>
        <p className="mt-6 text-muted">$ cd /home/jaideep</p>
        <p className="mt-4 text-muted">Available:</p>
        <ul className="mt-2 space-y-1">
          {routes.map((route) => (
            <li key={route}>
              <Link href={`/${route}`} className="focus-ring rounded text-accent hover:underline">
                {route}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex gap-4">
        <Link href="/" className="focus-ring rounded bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink">
          Go home
        </Link>
        <Link href="/work" className="focus-ring rounded border border-border px-5 py-2.5 text-sm hover:border-accent hover:text-accent">
          Explore work
        </Link>
      </div>
    </div>
  );
}
