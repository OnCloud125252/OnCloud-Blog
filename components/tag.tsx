"use client";

import { slug } from "github-slugger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface TagProps {
  tag: string;
  count?: number;
}

export function Tag({ tag, count }: TagProps) {
  const pathname = usePathname();
  const isActive = pathname === `/tags/${slug(tag)}`;

  return (
    <Link
      href={`/tags/${slug(tag)}`}
      className={cn(
        "rounded-full border px-3 py-1 font-medium text-xs transition-colors",
        isActive
          ? "border-transparent bg-primary text-primary-foreground"
          : "bg-card text-muted-foreground hover:border-muted-foreground/40 hover:text-foreground",
      )}
    >
      {tag}
      {count ? ` · ${count}` : null}
    </Link>
  );
}
