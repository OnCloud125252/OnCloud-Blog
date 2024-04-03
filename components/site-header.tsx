import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";


const IconsList = {
  email: {
    name: "Email",
    html: (
      <>
        <Icons.email className="h-4 w-4" />
        <span className="sr-only">Email</span>
      </>
    )
  },
  github: {
    name: "GitHub",
    html: (
      <>
        <Icons.github className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </>
    )
  },
  twitter: {
    name: "Twitter",
    html: (
      <>
        <Icons.twitter className="h-4 w-4" />
        <span className="sr-only">Twitter</span>
      </>
    )
  },
  linkedin: {
    name: "Linkedin",
    html: (
      <>
        <Icons.linkedin className="h-4 w-4" />
        <span className="sr-only">Linkedin</span>
      </>
    )
  },
  facebook: {
    name: "Facebook",
    html: (
      <>
        <Icons.facebook className="h-4 w-4" />
        <span className="sr-only">Facebook</span>
      </>
    )
  },
  instagram: {
    name: "Instagram",
    html: (
      <>
        <Icons.instagram className="h-4 w-4" />
        <span className="sr-only">Instagram</span>
      </>
    )
  },
  youtube: {
    name: "YouTube",
    html: (
      <>
        <Icons.youtube className="h-4 w-4" />
        <span className="sr-only">YouTube</span>
      </>
    )
  },
  discord: {
    name: "Discord",
    html: (
      <>
        <Icons.discord className="h-4 w-4" />
        <span className="sr-only">Discord</span>
      </>
    )
  },
  gravatar: {
    name: "Gravatar",
    html: (
      <>
        <Icons.gravatar className="h-4 w-4" />
        <span className="sr-only">Gravatar</span>
      </>
    )
  }
};

export function SiteHeader() {
  return (
    <header className="[grid-area:header] z-10 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {Object.keys(siteConfig.links).map((name: string, key: number) => {
              if (name) {
                return (
                  <Tooltip key={key}>
                    <TooltipTrigger>
                      <Link
                        href={
                          siteConfig.links[
                            name as keyof typeof siteConfig.links
                          ]
                        }
                        target="_blank"
                        rel="noreferrer"
                        key={key}
                      >
                        <div
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "w-10 px-0 hidden sm:inline-flex"
                          )}
                        >
                          {IconsList[name as keyof typeof IconsList].html}
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      {IconsList[name as keyof typeof IconsList].name}
                    </TooltipContent>
                  </Tooltip>
                );
              }
              else {
                return null;
              }
            })}
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
