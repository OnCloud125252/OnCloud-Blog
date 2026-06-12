import { Metadata } from "next";
import Link from "next/link";
import { posts } from "#site/content";
import { PostList } from "@/components/post-list";
import { siteConfig } from "@/config/site";
import { sortPosts } from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.blog.title,
  description: siteConfig.blog.description,
};

export default function BlogPage() {
  const publishedPosts = posts.filter((post) => post.published);
  const sortedPosts = sortPosts(publishedPosts);

  const { title, description, placeholder } = siteConfig.blog;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="flex items-baseline justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl">{title}</h1>
          <p className="mt-3 text-muted-foreground">{description}</p>
        </div>
        <Link
          href="/tags"
          className="shrink-0 font-mono text-muted-foreground text-xs transition-colors hover:text-foreground"
        >
          Browse tags →
        </Link>
      </header>
      <div className="mt-10 border-border border-t">
        {sortedPosts.length > 0 ? (
          <PostList posts={sortedPosts} />
        ) : (
          <p className="py-6 text-muted-foreground">{placeholder}</p>
        )}
      </div>
    </div>
  );
}
