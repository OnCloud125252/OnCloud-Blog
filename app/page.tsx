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
      <section className="pt-20 pb-16 sm:pt-28">
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-prose text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        <p className="mt-8 font-mono text-muted-foreground text-xs">
          Currently exploring AI & Web3 · Based in Taiwan · Available for
          collaborations
        </p>
        <div className="mt-10 flex gap-6 text-sm">
          <Link
            href="/blog"
            className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            Read the blog
          </Link>
          <Link
            href="/project"
            className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            View projects
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="flex items-baseline justify-between border-border border-b pb-3">
          <h2 className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
            Recent posts
          </h2>
          <Link
            href="/blog"
            className="font-mono text-muted-foreground text-xs transition-colors hover:text-foreground"
          >
            All posts →
          </Link>
        </div>
        <ul className="divide-y divide-border">
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
