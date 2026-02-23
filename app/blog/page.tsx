import { Metadata } from "next";
import { posts } from "#site/content";
import { PostList } from "@/components/post-list";
import { TagSidebar } from "@/components/tag-sidebar";
import { siteConfig } from "@/config/site";
import {
  getAllTags,
  getTagsByCategory,
  getUncategorizedTags,
  sortPosts,
} from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.blog.title,
  description: siteConfig.blog.description,
};

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const tags = getAllTags(posts);
  const tagsByCategory = getTagsByCategory(tags);
  const uncategorizedTags = getUncategorizedTags(tags);

  const { title, description, placeholder } = siteConfig.blog;

  return (
    <div className="h-full w-full sm:absolute">
      <div className="container relative right-0 left-0 flex h-full max-w-7xl flex-col py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black font-display text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground text-xl">{description}</p>
          </div>
        </div>
        <div className="relative mt-8 grid flex-1 grid-cols-12 gap-3 sm:max-h-[calc(100%-10rem)]">
          <div className="relative col-span-12 col-start-1 max-h-full sm:col-span-8">
            <hr className="cyber-hr" />
            {sortedPosts?.length > 0 ? (
              <PostList posts={sortedPosts} />
            ) : (
              <p>{placeholder}</p>
            )}
          </div>
          <TagSidebar
            tagsByCategory={tagsByCategory}
            uncategorizedTags={uncategorizedTags}
          />
        </div>
      </div>
    </div>
  );
}
