import Link from "next/link";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  const { title, description } = siteConfig.home;

  return (
    <div className="relative">
      <div className="grid-pattern absolute inset-0 -z-10 opacity-20" />

      <section className="container relative flex flex-col items-center justify-center space-y-10 py-24 text-center lg:py-32">
        <div className="space-y-4">
          <h1 className="max-w-4xl text-balance font-black font-display text-5xl tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            {title}
          </h1>
          <p className="mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl md:text-2xl">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 bg-primary px-8 font-bold text-lg hover:bg-primary/90",
            )}
          >
            Read Articles
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-14 border-2 px-8 font-bold text-lg",
            )}
          >
            View Projects
          </Link>
        </div>

        <div className="mt-20 flex w-full max-w-5xl flex-col items-start gap-4 border-foreground/10 border-t pt-8 text-left sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-mono text-muted-foreground">
            <span className="h-2 w-2 animate-pulse bg-primary" />
            <span>Currently exploring AI & Web3</span>
          </div>
          <div className="font-mono text-muted-foreground">
            Based in Taiwan • Available for collaborations
          </div>
        </div>
      </section>

      <section className="container max-w-5xl py-20">
        <div className="mb-12 flex items-end justify-between border-foreground border-b pb-4">
          <h2 className="font-black font-display text-4xl uppercase tracking-tighter sm:text-6xl">
            Recent Logs
          </h2>
          <Link
            href="/blog"
            className="font-bold font-display text-primary hover:underline sm:text-xl"
          >
            See all →
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {latestPosts.map((post) => (
            <li
              key={post.slug}
              className="bg-background transition-colors hover:bg-muted/50"
            >
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.update || post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
