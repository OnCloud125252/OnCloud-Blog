"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm transition-colors hover:text-foreground",
        isActive
          ? "text-foreground underline decoration-border underline-offset-4"
          : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  );
}

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-baseline gap-5 sm:gap-7">
      <Link href="/" className="mr-2 font-display text-lg italic">
        OnCloud
      </Link>
      <NavLink href="/blog" isActive={pathname === "/blog"}>
        Blog
      </NavLink>
      <NavLink href="/project" isActive={pathname === "/project"}>
        Projects
      </NavLink>
      <NavLink href="/about" isActive={pathname === "/about"}>
        About
      </NavLink>
    </nav>
  );
}
