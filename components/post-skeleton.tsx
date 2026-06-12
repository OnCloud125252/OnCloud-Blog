export function PostSkeleton() {
  return (
    <article className="flex animate-pulse flex-col gap-1 py-6 sm:flex-row sm:gap-8">
      <div className="h-4 shrink-0 bg-muted sm:w-28" />
      <div className="flex-1 space-y-2">
        <div className="h-6 w-3/4 bg-muted" />
        <div className="h-4 w-full bg-muted" />
        <div className="h-4 w-2/3 bg-muted" />
      </div>
    </article>
  );
}
