import { slug } from "github-slugger";
import { Metadata } from "next";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { TagSidebar } from "@/components/tag-sidebar";
import {
  getCategoryConfig,
  getCategoryForTag,
  type TagCategory,
} from "@/config/tags";
import {
  getAllTags,
  getPostsByTagSlug,
  getTagsByCategory,
  getUncategorizedTags,
} from "@/lib/utils";

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
  const allTags = getAllTags(posts);
  const tagsByCategory = getTagsByCategory(allTags);
  const uncategorizedTags = getUncategorizedTags(allTags);

  const currentCategory = getCategoryForTag(title);
  const currentCategoryConfig = currentCategory
    ? getCategoryConfig(currentCategory as TagCategory)
    : null;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="inline-block font-black font-display text-4xl capitalize lg:text-5xl">
              {title}
            </h1>
            {currentCategoryConfig && (
              <span
                className="rounded-full px-3 py-1 font-medium font-mono text-sm text-white shadow-neon-cyan"
                style={{ backgroundColor: currentCategoryConfig.color }}
              >
                {currentCategoryConfig.label}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-12 gap-3">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr className="cyber-hr" />
          {displayPosts.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => (
                <li key={post.slug}>
                  <PostItem
                    slug={post.slug}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    tags={post.tags}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
        </div>
        <TagSidebar
          tagsByCategory={tagsByCategory}
          uncategorizedTags={uncategorizedTags}
          currentTag={tag}
        />
      </div>
    </div>
  );
}
