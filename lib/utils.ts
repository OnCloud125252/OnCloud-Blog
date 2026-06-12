import { type ClassValue, clsx } from "clsx";
import { slug } from "github-slugger";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/content";

import {
  getCategoryForTag,
  TAG_CATEGORIES,
  type TagCategory,
} from "@/config/tags";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function formatDate(input: string): string {
  return dateFormatter.format(new Date(input));
}

export type PostListItem = Pick<
  Post,
  "slug" | "title" | "description" | "date" | "update"
>;

export function toPostListItems(posts: Array<Post>): Array<PostListItem> {
  return posts.map(({ slug, title, description, date, update }) => ({
    slug,
    title,
    description,
    date,
    update,
  }));
}

export function getPostDisplayDate(
  post: Pick<Post, "date" | "update">,
): string {
  return post.update || post.date;
}

export function getPublishedPosts(posts: Array<Post>): Array<Post> {
  return posts.filter((post) => post.published);
}

export function sortPosts(posts: Array<Post>): Array<Post> {
  // Velite dates are uniform ISO strings, so lexicographic order is date order
  return [...posts].sort((a, b) =>
    getPostDisplayDate(b).localeCompare(getPostDisplayDate(a)),
  );
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

export function getTagFromSlug(
  posts: Array<Post>,
  tagSlug: string,
): string | undefined {
  return Object.keys(getAllTags(posts)).find((tag) => slug(tag) === tagSlug);
}

export function getPostsByTagSlug(
  posts: Array<Post>,
  tag: string,
): Array<Post> {
  return posts.filter((post) => (post.tags ?? []).some((t) => slug(t) === tag));
}

export interface TagWithCount {
  name: string;
  count: number;
}

export interface TagsByCategory {
  category: TagCategory;
  label: string;
  tags: Array<TagWithCount>;
}

export function groupTagsByCategory(tags: Record<string, number>): {
  categorized: Array<TagsByCategory>;
  uncategorized: Array<TagWithCount>;
} {
  const grouped = new Map<TagCategory, Array<TagWithCount>>();
  const uncategorized: Array<TagWithCount> = [];

  for (const [name, count] of Object.entries(tags)) {
    const category = getCategoryForTag(name);
    if (category) {
      const bucket = grouped.get(category) ?? [];
      bucket.push({ name, count });
      grouped.set(category, bucket);
    } else {
      uncategorized.push({ name, count });
    }
  }

  const byCountDescending = (a: TagWithCount, b: TagWithCount) =>
    b.count - a.count;

  const categorized = (Object.keys(TAG_CATEGORIES) as TagCategory[]).flatMap(
    (category) => {
      const categoryTags = grouped.get(category);
      if (!categoryTags) {
        return [];
      }
      return {
        category,
        label: TAG_CATEGORIES[category].label,
        tags: categoryTags.sort(byCountDescending),
      };
    },
  );

  return { categorized, uncategorized: uncategorized.sort(byCountDescending) };
}
