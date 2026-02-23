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
    <>
      <section className="relative space-y-6 overflow-hidden pt-6 pb-8 md:mt-10 md:pb-12 lg:py-32">
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
        </div>

        <div className="container relative flex flex-col gap-4 text-center">
          <h1 className="animate-text-glow text-balance font-black font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h1>
          <p className="mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl">
            {description}
          </p>
          <p className="mx-auto mb-7 max-w-[42rem] text-balance font-mono text-muted-foreground sm:text-xl">
            <span className="text-primary">{">"}</span>
            {" Welcome to my Blog "}
            <span className="inline-block h-5 w-[2px] animate-glow-pulse bg-primary align-middle" />
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "neon", size: "lg" }),
                "w-full sm:w-fit",
              )}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit",
              )}
            >
              My GitHub
            </Link>
          </div>
        </div>

        {/* Geometric corner decorations */}
        <div className="pointer-events-none absolute top-8 left-8 hidden h-16 w-16 border-primary/20 border-t-2 border-l-2 lg:block" />
        <div className="pointer-events-none absolute right-8 bottom-8 hidden h-16 w-16 border-primary/20 border-r-2 border-b-2 lg:block" />
      </section>
      <section className="container mt-60 flex max-w-4xl flex-col space-y-6 py-6 lg:py-10">
        <h2 className="text-center font-black font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-border first:border-t">
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
    </>
  );
}
