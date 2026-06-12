import { slug } from "github-slugger";
import { Metadata } from "next";
import Link from "next/link";
import { posts } from "#site/content";
import { PostItems } from "@/components/post-item";
import { getCategoryForTag, TAG_CATEGORIES } from "@/config/tags";
import {
  getAllTags,
  getPostsByTagSlug,
  getPublishedPosts,
  getTagFromSlug,
  sortPosts,
} from "@/lib/utils";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const title = getTagFromSlug(posts, params.tag) ?? params.tag;
  return {
    title,
    description: `Posts on the topic of ${title}`,
  };
}

export function generateStaticParams() {
  const tags = getAllTags(getPublishedPosts(posts));
  return Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const realTag = getTagFromSlug(posts, tag);
  const title = realTag ?? tag.split("-").join(" ");

  const displayPosts = sortPosts(
    getPostsByTagSlug(getPublishedPosts(posts), tag),
  );

  const category = realTag ? getCategoryForTag(realTag) : null;
  const categoryLabel = category ? TAG_CATEGORIES[category].label : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
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
          {categoryLabel && (
            <span className="rounded-full bg-muted px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider">
              {categoryLabel}
            </span>
          )}
        </div>
      </header>
      <div className="mt-10">
        {displayPosts.length > 0 ? (
          <PostItems posts={displayPosts} />
        ) : (
          <p className="text-muted-foreground">Nothing to see here yet</p>
        )}
      </div>
    </div>
  );
}
