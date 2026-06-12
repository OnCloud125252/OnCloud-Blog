export function PostSkeleton() {
  return (
    <article className="animate-pulse rounded-2xl border bg-card p-6 sm:p-7">
      <div className="h-3 w-24 rounded bg-muted" />
      <div className="mt-3 h-6 w-3/4 rounded bg-muted" />
      <div className="mt-3 h-4 w-full rounded bg-muted" />
      <div className="mt-2 h-4 w-2/3 rounded bg-muted" />
    </article>
  );
}
