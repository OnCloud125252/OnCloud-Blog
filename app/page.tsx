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
      <section className="space-y-6 pt-6 pb-8 md:mt-10 md:pb-12 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-balance font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl">
            {description}
          </p>
          <p className="mx-auto mb-7 max-w-[42rem] text-balance text-muted-foreground sm:text-xl">
            {" Welcome to my Blog ✨"}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
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
      </section>
      <section className="container mt-60 flex max-w-4xl flex-col space-y-6 py-6 lg:py-10">
        <h2 className="text-center font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
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
