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
        "rounded-full px-3.5 py-1.5 font-medium text-sm transition-colors",
        isActive
          ? "bg-card text-foreground shadow-sm"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      <Link
        href="/"
        className="mr-3 font-bold font-display text-base tracking-tight"
      >
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
