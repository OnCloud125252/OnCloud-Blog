"use client";

import { slug } from "github-slugger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getCategoryConfig,
  getCategoryForTag,
  type TagCategory,
} from "@/config/tags";
import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
  showCategory?: boolean;
}

export function Tag({ tag, current, count, showCategory = false }: TagProps) {
  const pathname = usePathname();
  const category = getCategoryForTag(tag);
  const categoryConfig = category
    ? getCategoryConfig(category as TagCategory)
    : null;

  const isActive = pathname === `/tags/${slug(tag)}`;

  return (
    <div className="flex items-center gap-1">
      <Link
        className={
          badgeVariants({
            variant: current ? "default" : "secondary",
            className: "rounded-md no-underline",
          }) + (isActive ? "bg-primary" : "")
        }
        href={`/tags/${slug(tag)}`}
      >
        {tag} {count ? `(${count})` : null}
      </Link>
      {showCategory && categoryConfig && (
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: categoryConfig.color }}
          title={categoryConfig.label}
        />
      )}
    </div>
  );
}
