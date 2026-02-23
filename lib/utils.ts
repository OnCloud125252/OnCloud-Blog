import { type ClassValue, clsx } from "clsx";
import { slug } from "github-slugger";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/content";

import {
  getAllCategories,
  getCategoryConfig,
  getCategoryForTag,
  type TagCategory,
} from "@/config/tags";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    const aDate = a.update || a.date;
    const bDate = b.update || b.date;

    if (aDate > bDate) {
      return -1;
    }
    if (aDate < bDate) {
      return 1;
    }
    return 0;
  });
}

export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {};
  for (const post of posts) {
    if (post.tags) {
      for (const tag of post.tags) {
        tags[tag] = (tags[tag] ?? 0) + 1;
      }
    }
  }

  return tags;
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter((post) => {
    if (!post.tags) {
      return false;
    }
    const slugifiedTags = post.tags.map((tag) => slug(tag));
    return slugifiedTags.includes(tag);
  });
}

export interface TagsByCategory {
  category: TagCategory;
  label: string;
  color: string;
  tags: Array<{ name: string; count: number }>;
}

export function getTagsByCategory(
  tags: Record<string, number>,
): Array<TagsByCategory> {
  const tagsByCategory: Record<
    string,
    Array<{ name: string; count: number }>
  > = {};

  // Initialize all categories
  for (const category of getAllCategories()) {
    tagsByCategory[category] = [];
  }

  // Group tags by category
  for (const [tagName, count] of Object.entries(tags)) {
    const category = getCategoryForTag(tagName);
    if (category) {
      tagsByCategory[category].push({ name: tagName, count });
    }
  }

  // Convert to array and sort tags within each category
  const result: Array<TagsByCategory> = [];
  for (const category of getAllCategories()) {
    const categoryTags = tagsByCategory[category];
    if (categoryTags.length > 0) {
      categoryTags.sort((a, b) => b.count - a.count);
      const config = getCategoryConfig(category);
      result.push({
        category,
        label: config.label,
        color: config.color,
        tags: categoryTags,
      });
    }
  }

  return result;
}

export function getUncategorizedTags(
  tags: Record<string, number>,
): Array<{ name: string; count: number }> {
  const uncategorized: Array<{ name: string; count: number }> = [];

  for (const [tagName, count] of Object.entries(tags)) {
    const category = getCategoryForTag(tagName);
    if (!category) {
      uncategorized.push({ name: tagName, count });
    }
  }

  uncategorized.sort((a, b) => b.count - a.count);
  return uncategorized;
}
