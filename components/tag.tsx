import { slug } from "github-slugger";
import Link from "next/link";

interface TagProps {
  tag: string;
  count?: number;
}

export function Tag({ tag, count }: TagProps) {
  return (
    <Link
      href={`/tags/${slug(tag)}`}
      className="rounded-full border bg-card px-3 py-1 font-medium text-muted-foreground text-xs transition-colors hover:border-muted-foreground/40 hover:text-foreground"
    >
      {tag}
      {count ? ` · ${count}` : null}
    </Link>
  );
}
