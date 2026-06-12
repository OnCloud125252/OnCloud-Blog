import { Metadata } from "next";
import { posts } from "#site/content";
import { TagsByCategoryList } from "@/components/tags-by-category";
import { siteConfig } from "@/config/site";
import {
  getAllTags,
  getPublishedPosts,
  groupTagsByCategory,
} from "@/lib/utils";

export const metadata: Metadata = {
  title: siteConfig.tags.title,
  description: siteConfig.tags.description,
};

export default function TagsPage() {
  const tags = getAllTags(getPublishedPosts(posts));
  const { categorized, uncategorized } = groupTagsByCategory(tags);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <header>
        <h1 className="font-bold font-display text-4xl tracking-tight">
          {siteConfig.tags.title}
        </h1>
      </header>
      <div className="mt-10">
        <TagsByCategoryList
          tagsByCategory={categorized}
          uncategorizedTags={uncategorized}
        />
      </div>
    </div>
  );
}
