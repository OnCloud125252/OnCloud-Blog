"use client";

import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import { SocialIcon, type SocialLinkKey } from "./social-icons";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="border-border/50 bg-card">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <Icons.logo className="mr-2 h-4 w-4 text-primary" />
          <span className="font-bold font-display">{siteConfig.name}</span>
        </MobileLink>
        <div className="mt-3 flex flex-col gap-3">
          <MobileLink
            onOpenChange={setOpen}
            href="/blog"
            className="border-transparent border-l-2 pl-2 font-display transition-colors hover:border-primary hover:text-primary"
          >
            Blog
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/project"
            className="border-transparent border-l-2 pl-2 font-display transition-colors hover:border-primary hover:text-primary"
          >
            Project
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href="/about"
            className="border-transparent border-l-2 pl-2 font-display transition-colors hover:border-primary hover:text-primary"
          >
            About
          </MobileLink>
          {Object.keys(siteConfig.links).map((name: string) => {
            if (name) {
              return (
                <Link
                  href={siteConfig.links[name as SocialLinkKey]}
                  target="_blank"
                  rel="noreferrer"
                  key={name}
                  className="transition-colors hover:text-primary"
                >
                  <SocialIcon name={name as SocialLinkKey} showLabel />
                </Link>
              );
            }
            return null;
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
