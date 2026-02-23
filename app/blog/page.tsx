import { Metadata } from "next";
import { posts } from "#site/content";
import { PostList } from "@/components/post-list";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import {
  getAllTags,
  getTagsByCategory,
  getUncategorizedTags,
  sortPosts,
  sortTagsByCount,
} from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.blog.title,
  description: siteConfig.blog.description,
};

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const tags = getAllTags(posts);
  const _sortedTags = sortTagsByCount(tags);
  const tagsByCategory = getTagsByCategory(tags);
  const uncategorizedTags = getUncategorizedTags(tags);

  const { title, description, placeholder } = siteConfig.blog;

  return (
    <div className="h-full w-full sm:absolute">
      <div className="container relative right-0 left-0 flex h-full max-w-7xl flex-col py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground text-xl">{description}</p>
          </div>
        </div>
        <div className="relative mt-8 grid flex-1 grid-cols-12 gap-3 sm:max-h-[calc(100%-10rem)]">
          <div className="relative col-span-12 col-start-1 max-h-full sm:col-span-8">
            <hr />
            {sortedPosts?.length > 0 ? (
              <PostList posts={sortedPosts} />
            ) : (
              <p>{placeholder}</p>
            )}
          </div>
          <Card className="col-span-12 row-start-3 h-fit max-h-[60vh] overflow-y-auto sm:col-span-4 sm:col-start-9 sm:row-start-1">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {tagsByCategory.map((categoryGroup) => (
                <div
                  key={categoryGroup.category}
                  className="flex flex-col gap-2"
                >
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
                    {categoryGroup.tags.map((tag) => (
                      <Tag
                        tag={tag.name}
                        key={tag.name}
                        count={tag.count}
                        showCategory={false}
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
                    {uncategorizedTags.map((tag) => (
                      <Tag
                        tag={tag.name}
                        key={tag.name}
                        count={tag.count}
                        showCategory={false}
                      />
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
