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
        "font-mono text-xs underline-offset-4 transition-colors hover:text-foreground hover:underline",
        isActive ? "text-foreground underline" : "text-muted-foreground",
      )}
    >
      {tag}
      {count ? ` (${count})` : null}
    </Link>
  );
}
