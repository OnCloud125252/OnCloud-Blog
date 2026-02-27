"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

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
        "hidden font-medium text-sm transition-colors hover:text-primary sm:inline-block",
        isActive ? "text-foreground" : "text-foreground/60",
      )}
    >
      {children}
    </Link>
  );
}

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6 text-primary" />
        <span className="neon-text font-bold font-display">
          {siteConfig.name}
        </span>
      </Link>
      <NavLink href="/blog" isActive={pathname === "/blog"}>
        Blog
      </NavLink>
      <NavLink href="/project" isActive={pathname === "/project"}>
        Project
      </NavLink>
      <NavLink href="/about" isActive={pathname === "/about"}>
        About
      </NavLink>
    </nav>
  );
}
