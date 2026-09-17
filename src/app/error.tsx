"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-content px-5 py-24 text-center">
      <p className="font-display text-xl font-semibold">Something went wrong.</p>
      <p className="mt-2 text-sm text-muted">
        That page hit an unexpected error. The rest of the site is unaffected.
      </p>
      <button
        type="button"
        onClick={reset}
        className="focus-ring mt-6 rounded border border-border px-5 py-2.5 text-sm hover:border-accent hover:text-accent"
      >
        Try again
      </button>
    </div>
  );
}
