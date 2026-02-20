"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "hidden font-medium text-sm transition-colors hover:text-primary sm:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60",
        )}
      >
        Blog
      </Link>
      <Link
        href="/project"
        className={cn(
          "hidden font-medium text-sm transition-colors hover:text-primary sm:inline-block",
          pathname === "/project" ? "text-foreground" : "text-foreground/60",
        )}
      >
        Project
      </Link>
      <Link
        href="/gallery"
        className={cn(
          "hidden font-medium text-sm transition-colors hover:text-primary sm:inline-block",
          pathname === "/gallery" ? "text-foreground" : "text-foreground/60",
        )}
      >
        Gallery
      </Link>
      <Link
        href="/about"
        className={cn(
          "hidden font-medium text-sm transition-colors hover:text-primary sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60",
        )}
      >
        About
      </Link>
    </nav>
  );
}
