import { slug } from "github-slugger";
import { Metadata } from "next";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  sortTagsByCount,
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

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const displayPosts = getPostsByTagSlug(posts, tag);
  const allTags = getAllTags(posts);
  const _sortedTags = sortTagsByCount(allTags);
  const tagsByCategory = getTagsByCategory(allTags);
  const uncategorizedTags = getUncategorizedTags(allTags);

  // Get category for current tag
  const currentTagName = tag.split("-").join(" ");
  const currentCategory = getCategoryForTag(currentTagName);
  const currentCategoryConfig = currentCategory
    ? getCategoryConfig(currentCategory as TagCategory)
    : null;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="inline-block font-black text-4xl capitalize lg:text-5xl">
              {title}
            </h1>
            {currentCategoryConfig && (
              <span
                className="rounded-full px-3 py-1 font-medium text-sm text-white"
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
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
        </div>
        <Card className="col-span-12 row-start-3 h-fit max-h-[60vh] overflow-y-auto sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {tagsByCategory.map((categoryGroup) => (
              <div key={categoryGroup.category} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: categoryGroup.color }}
                  />
                  <span className="font-medium text-sm">
                    {categoryGroup.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pl-5">
                  {categoryGroup.tags.map((t) => (
                    <Tag
                      tag={t.name}
                      key={t.name}
                      count={t.count}
                      current={slug(t.name) === tag}
                    />
                  ))}
                </div>
              </div>
            ))}
            {uncategorizedTags.length > 0 && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-gray-400" />
                  <span className="font-medium text-sm">Other</span>
                </div>
                <div className="flex flex-wrap gap-2 pl-5">
                  {uncategorizedTags.map((t) => (
                    <Tag
                      tag={t.name}
                      key={t.name}
                      count={t.count}
                      current={slug(t.name) === tag}
                    />
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
