export function PostSkeleton() {
  return (
    <article className="flex animate-pulse flex-col gap-2 border-border border-b py-3">
      <div>
        <div className="h-8 w-3/4 rounded bg-muted" />
      </div>
      <div className="flex gap-2">
        <div className="h-5 w-16 rounded bg-muted" />
        <div className="h-5 w-20 rounded bg-muted" />
      </div>
      <div className="h-4 w-full rounded bg-muted" />
      <div className="h-4 w-2/3 rounded bg-muted" />
      <div className="flex items-center justify-between">
        <div className="h-5 w-32 rounded bg-muted" />
        <div className="h-5 w-24 rounded bg-muted" />
      </div>
    </article>
  );
}
