import Link from "next/link";
import { formatDate, getPostDisplayDate, type PostListItem } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

const STAGGER_GROUP_SIZE = 6;
const STAGGER_STEP_MS = 60;

export function PostItems({ posts }: { posts: PostListItem[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {posts.map((post, index) => (
        <li
          key={post.slug}
          className="animate-fade-in-up opacity-0"
          style={{
            animationDelay: `${(index % STAGGER_GROUP_SIZE) * STAGGER_STEP_MS}ms`,
          }}
        >
          <PostItem
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={getPostDisplayDate(post)}
          />
        </li>
      ))}
    </ul>
  );
}

export function PostItem({ slug, title, description, date }: PostItemProps) {
  return (
    <article className="group">
      <Link
        href={`/${slug}`}
        className="block rounded-2xl border bg-card p-6 transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_16px_rgb(0_0_0/0.06)] sm:p-7"
      >
        <time
          dateTime={date}
          className="font-mono text-[0.7rem] text-muted-foreground uppercase"
        >
          {formatDate(date)}
        </time>
        <h2 className="mt-2 font-display font-medium text-xl tracking-tight transition-colors group-hover:text-primary">
          {title}
        </h2>
        {description && (
          <p className="mt-2 line-clamp-2 text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        )}
      </Link>
    </article>
  );
}
