"use client";

import { slug } from "github-slugger";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export function Tag({ tag, current, count }: TagProps) {
  const pathname = usePathname();

  return (
    <Link
      className={
        badgeVariants({
          variant: current ? "default" : "secondary",
          className: "rounded-md no-underline",
        }) + (pathname === `/tags/${slug(tag)}` ? "bg-primary" : "")
      }
      href={`/tags/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
