"use client";

import Link from "next/link";
import { slug } from "github-slugger";
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
          className: "no-underline rounded-md"
        }) + (pathname === `/tags/${slug(tag)}` ? " bg-primary" : "")
      }
      href={`/tags/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
