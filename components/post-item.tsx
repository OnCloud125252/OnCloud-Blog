import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
  return (
    <article className="group">
      <Link
        href={`/${slug}`}
        className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-8"
      >
        <time
          dateTime={date}
          className="shrink-0 pt-1 font-mono text-muted-foreground text-xs sm:w-28"
        >
          {formatDate(date)}
        </time>
        <div>
          <h2 className="font-display text-xl underline-offset-4 group-hover:underline">
            {title}
          </h2>
          {description && (
            <p className="mt-1 line-clamp-2 text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
