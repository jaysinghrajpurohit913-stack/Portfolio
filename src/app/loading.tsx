export default function Loading() {
  return (
    <div className="mx-auto max-w-content px-5 py-24">
      <div className="h-6 w-40 animate-pulse rounded bg-surface" />
      <div className="mt-6 h-4 w-full max-w-md animate-pulse rounded bg-surface" />
      <div className="mt-2 h-4 w-3/4 max-w-md animate-pulse rounded bg-surface" />
    </div>
  );
}
