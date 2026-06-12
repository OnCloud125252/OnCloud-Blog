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
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header>
        <h1 className="font-display text-4xl">Tags</h1>
      </header>
      <div className="mt-10 border-border border-t pt-10">
        <TagsByCategoryList
          tagsByCategory={tagsByCategory}
          uncategorizedTags={uncategorizedTags}
        />
      </div>
    </div>
  );
}
