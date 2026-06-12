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
    <div className="mx-auto max-w-2xl px-6 py-12">
      <header>
        <Link
          href="/tags"
          className="font-semibold text-primary text-sm transition-colors hover:text-foreground"
        >
          ← All tags
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <h1 className="font-bold font-display text-4xl capitalize tracking-tight">
            {title}
          </h1>
          {currentCategoryConfig && (
            <span className="rounded-full bg-muted px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider">
              {currentCategoryConfig.label}
            </span>
          )}
        </div>
      </header>
      <div className="mt-10">
        {displayPosts.length > 0 ? (
          <ul className="flex flex-col gap-3.5">
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
          <p className="text-muted-foreground">Nothing to see here yet</p>
        )}
      </div>
    </div>
  );
}
