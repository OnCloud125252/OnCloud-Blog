"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";


const IconsList = {
  email: (
    <div className="flex items-center gap-1">
      <Icons.email className="h-4 w-4" />
      <span className="sr-only">Email</span>
      Email
    </div>
  ),
  github: (
    <div className="flex items-center gap-1">
      <Icons.github className="h-4 w-4" />
      <span className="sr-only">GitHub</span>
      GitHub
    </div>
  ),
  twitter: (
    <div className="flex items-center gap-1">
      <Icons.twitter className="h-4 w-4" />
      <span className="sr-only">Twitter</span>
      Twitter
    </div>
  ),
  linkedin: (
    <div className="flex items-center gap-1">
      <Icons.linkedin className="h-4 w-4" />
      <span className="sr-only">LinkedIn</span>
      LinkedIn
    </div>
  ),
  facebook: (
    <div className="flex items-center gap-1">
      <Icons.facebook className="h-4 w-4" />
      <span className="sr-only">Facebook</span>
      Facebook
    </div>
  ),
  instagram: (
    <div className="flex items-center gap-1">
      <Icons.instagram className="h-4 w-4" />
      <span className="sr-only">Instagram</span>
      Instagram
    </div>
  ),
  youtube: (
    <div className="flex items-center gap-1">
      <Icons.youtube className="h-4 w-4" />
      <span className="sr-only">YouTube</span>
      YouTube
    </div>
  ),
  discord: (
    <div className="flex items-center gap-1">
      <Icons.discord className="h-4 w-4" />
      <span className="sr-only">Discord</span>
      Discord
    </div>
  ),
  gravatar: (
    <div className="flex items-center gap-1">
      <Icons.gravatar className="h-4 w-4" />
      <span className="sr-only">Gravatar</span>
      Gravatar
    </div>
  )
};

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
      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/blog">
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/project">
            Project
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href="/about">
            About
          </MobileLink>
          {Object.keys(siteConfig.links).map((name: string, key: number) => {
            if (name) {
              return (
                <Link
                  href={siteConfig.links[name as keyof typeof siteConfig.links]}
                  target="_blank"
                  rel="noreferrer"
                  key={key}
                >
                  {IconsList[name as keyof typeof IconsList]}
                </Link>
              );
            }
            else {
              return <></>;
            }
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
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
