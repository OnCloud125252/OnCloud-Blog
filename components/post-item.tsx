import { Calendar } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./tag";
import { buttonVariants } from "./ui/button";

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
    <article className="group flex flex-col gap-2 border-b border-b-transparent border-l-2 border-l-transparent py-3 pl-3 transition-all duration-300 hover:border-l-primary [&:not(:last-child)]:border-b-border/30">
      <div className="cyber-hr mb-0 hidden [article:last-child>&]:block" />
      <div>
        <h2 className="font-bold font-display text-2xl transition-colors group-hover:text-primary">
          <Link href={`/${slug}`}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex items-center justify-between">
        <Tooltip>
          <TooltipTrigger>
            <dl>
              <dt className="sr-only">Latest update</dt>
              <dd className="flex items-center gap-1 font-mono text-muted-foreground text-sm sm:text-base">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
          </TooltipTrigger>
          <TooltipContent>Latest update on {formatDate(date)}</TooltipContent>
        </Tooltip>
        <Link
          href={`/${slug}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            "group/link gap-1 py-0 hover:no-underline",
          )}
        >
          Read more
          <span className="font-bold duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
