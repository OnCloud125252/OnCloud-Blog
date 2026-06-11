import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Tag } from "./tag";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <article className="group relative flex h-full flex-col p-6 transition-all duration-300 hover:bg-muted/50">
      <div className="mb-4 flex items-center justify-between">
        <time
          dateTime={date}
          className="font-mono text-muted-foreground text-sm uppercase tracking-widest"
        >
          {formatDate(date)}
        </time>
        <div className="flex gap-1">
          {tags?.slice(0, 2).map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>

      <div className="flex-1 space-y-3">
        <h2 className="font-bold font-display text-2xl leading-tight transition-colors group-hover:text-primary">
          <Link href={`/${slug}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h2>
        {description && (
          <p className="line-clamp-2 text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center font-bold text-primary uppercase tracking-tighter sm:text-lg">
        Read Entry
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>
    </article>
  );
}
