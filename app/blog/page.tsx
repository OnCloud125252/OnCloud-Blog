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
    <div className="mx-auto max-w-2xl px-6 py-12">
      <header className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-bold font-display text-4xl tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-muted-foreground">{description}</p>
        </div>
        <Link
          href="/tags"
          className="shrink-0 font-semibold text-primary text-sm transition-colors hover:text-foreground"
        >
          Browse tags →
        </Link>
      </header>
      <div className="mt-10">
        {sortedPosts.length > 0 ? (
          <PostList posts={sortedPosts} />
        ) : (
          <p className="text-muted-foreground">{placeholder}</p>
        )}
      </div>
    </div>
  );
}
