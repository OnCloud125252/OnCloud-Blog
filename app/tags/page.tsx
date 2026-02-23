import { Metadata } from "next";
import { posts } from "#site/content";
import { TagsByCategoryList } from "@/components/tags-by-category";
import {
  getAllTags,
  getTagsByCategory,
  getUncategorizedTags,
} from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topic I've written about",
};

export default function TagsPage() {
  const tags = getAllTags(posts);
  const tagsByCategory = getTagsByCategory(tags);
  const uncategorizedTags = getUncategorizedTags(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black font-display text-4xl lg:text-5xl">
            Tags
          </h1>
        </div>
      </div>
      <hr className="cyber-hr my-4" />

      <TagsByCategoryList
        tagsByCategory={tagsByCategory}
        uncategorizedTags={uncategorizedTags}
      />
    </div>
  );
}
