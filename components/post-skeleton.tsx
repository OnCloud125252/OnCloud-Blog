export function PostSkeleton() {
  return (
    <article className="flex flex-col gap-2 border-b border-b-border/30 border-l-2 border-l-primary/20 py-3 pl-3">
      <div>
        <div className="h-8 w-3/4 animate-shimmer rounded bg-[length:200%_100%] bg-gradient-to-r bg-muted from-muted via-muted-foreground/5 to-muted" />
      </div>
      <div className="flex gap-2">
        <div className="h-5 w-16 animate-shimmer rounded bg-[length:200%_100%] bg-gradient-to-r bg-muted from-muted via-muted-foreground/5 to-muted" />
        <div className="h-5 w-20 animate-shimmer rounded bg-[length:200%_100%] bg-gradient-to-r bg-muted from-muted via-muted-foreground/5 to-muted" />
      </div>
      <div className="h-4 w-full animate-shimmer rounded bg-[length:200%_100%] bg-gradient-to-r bg-muted from-muted via-muted-foreground/5 to-muted" />
      <div className="h-4 w-2/3 animate-shimmer rounded bg-[length:200%_100%] bg-gradient-to-r bg-muted from-muted via-muted-foreground/5 to-muted" />
      <div className="flex items-center justify-between">
        <div className="h-5 w-32 animate-shimmer rounded bg-[length:200%_100%] bg-gradient-to-r bg-muted from-muted via-muted-foreground/5 to-muted" />
        <div className="h-5 w-24 animate-shimmer rounded bg-[length:200%_100%] bg-gradient-to-r bg-muted from-muted via-muted-foreground/5 to-muted" />
      </div>
    </article>
  );
}
