import Link from "next/link";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { siteConfig } from "@/config/site";
import { sortPosts } from "@/lib/utils";

export default function Home() {
  const latestPosts = sortPosts(posts.filter((post) => post.published)).slice(
    0,
    5,
  );
  const { title, description } = siteConfig.home;

  return (
    <div className="mx-auto max-w-2xl px-6">
      <section className="pt-16 pb-16 sm:pt-24">
        <h1 className="font-bold font-display text-4xl tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-prose text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        <p className="mt-7 flex items-center gap-2 text-muted-foreground text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Currently exploring AI & Web3 · Based in Taiwan · Available for
          collaborations
        </p>
        <div className="mt-10 flex gap-3">
          <Link
            href="/blog"
            className="rounded-full bg-foreground px-5 py-2.5 font-semibold text-background text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Read the blog
          </Link>
          <Link
            href="/project"
            className="rounded-full border bg-card px-5 py-2.5 font-semibold text-foreground text-sm transition-colors hover:border-muted-foreground/40"
          >
            View projects
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="flex items-baseline justify-between pb-4">
          <h2 className="font-bold font-display text-lg tracking-tight">
            Recent posts
          </h2>
          <Link
            href="/blog"
            className="font-semibold text-primary text-sm transition-colors hover:text-foreground"
          >
            All posts →
          </Link>
        </div>
        <ul className="flex flex-col gap-3.5">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.update || post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
