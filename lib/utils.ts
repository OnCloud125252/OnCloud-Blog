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

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  return new Date(input).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>): Array<Post> {
  return posts.sort((a, b) => {
    const dateA = new Date(a.update || a.date).getTime();
    const dateB = new Date(b.update || b.date).getTime();
    return dateB - dateA;
  });
}

export function getAllTags(posts: Array<Post>): Record<string, number> {
  const tagCounts: Record<string, number> = {};

  for (const post of posts) {
    for (const tag of post.tags ?? []) {
      tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
    }
  }

  return tagCounts;
}

export function sortTagsByCount(tags: Record<string, number>): Array<string> {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostsByTagSlug(
  posts: Array<Post>,
  tag: string,
): Array<Post> {
  return posts.filter((post) =>
    (post.tags ?? []).map((t) => slug(t)).includes(tag),
  );
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
  const grouped: Record<string, Array<{ name: string; count: number }>> = {};

  for (const category of getAllCategories()) {
    grouped[category] = [];
  }

  for (const [name, count] of Object.entries(tags)) {
    const category = getCategoryForTag(name);
    if (category) {
      grouped[category].push({ name, count });
    }
  }

  const result: Array<TagsByCategory> = [];

  for (const category of getAllCategories()) {
    const tags = grouped[category];
    if (tags.length === 0) {
      continue;
    }

    tags.sort((a, b) => b.count - a.count);
    const config = getCategoryConfig(category);
    result.push({ category, label: config.label, color: config.color, tags });
  }

  return result;
}

export function getUncategorizedTags(
  tags: Record<string, number>,
): Array<{ name: string; count: number }> {
  const result: Array<{ name: string; count: number }> = [];

  for (const [name, count] of Object.entries(tags)) {
    if (!getCategoryForTag(name)) {
      result.push({ name, count });
    }
  }

  return result.sort((a, b) => b.count - a.count);
}
