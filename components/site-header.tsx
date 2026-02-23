import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { getSocialIconLabel, SocialIcon, SocialLinkKey } from "./social-icons";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {Object.keys(siteConfig.links).map((name: string) => {
              if (name) {
                const key = name as SocialLinkKey;
                return (
                  <Tooltip key={name}>
                    <TooltipTrigger>
                      <Link
                        href={siteConfig.links[key]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div
                          className={cn(
                            buttonVariants({
                              variant: "ghost",
                            }),
                            "hidden w-10 px-0 sm:inline-flex",
                          )}
                        >
                          <SocialIcon name={key} />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{getSocialIconLabel(key)}</TooltipContent>
                  </Tooltip>
                );
              }
              return null;
            })}
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
