import { slug } from "github-slugger";
import { Metadata } from "next";
import Link from "next/link";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import {
  getCategoryConfig,
  getCategoryForTag,
  type TagCategory,
} from "@/config/tags";
import { getAllTags, getPostsByTagSlug } from "@/lib/utils";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
  };
}

export function generateStaticParams() {
  const tags = getAllTags(posts);
  return Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const displayPosts = getPostsByTagSlug(posts, tag);

  const currentCategory = getCategoryForTag(title);
  const currentCategoryConfig = currentCategory
    ? getCategoryConfig(currentCategory as TagCategory)
    : null;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header>
        <Link
          href="/tags"
          className="font-mono text-muted-foreground text-xs transition-colors hover:text-foreground"
        >
          ← All tags
        </Link>
        <h1 className="mt-4 font-display text-4xl capitalize">{title}</h1>
        {currentCategoryConfig && (
          <p className="mt-2 font-mono text-muted-foreground text-xs uppercase tracking-widest">
            {currentCategoryConfig.label}
          </p>
        )}
      </header>
      <div className="mt-10 border-border border-t">
        {displayPosts.length > 0 ? (
          <ul className="divide-y divide-border">
            {displayPosts.map((post) => (
              <li key={post.slug}>
                <PostItem
                  slug={post.slug}
                  date={post.update || post.date}
                  title={post.title}
                  description={post.description}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-6 text-muted-foreground">Nothing to see here yet</p>
        )}
      </div>
    </div>
  );
}
