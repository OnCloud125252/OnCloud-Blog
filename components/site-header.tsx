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
    <header className="sticky top-0 z-50 w-full border-foreground/5 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-1">
            {Object.keys(siteConfig.links).map((name) => {
              const key = name as SocialLinkKey;
              return (
                <Tooltip key={name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={siteConfig.links[key]}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "hidden transition-colors hover:text-primary sm:flex",
                      )}
                    >
                      <SocialIcon name={key} className="h-5 w-5" />
                      <span className="sr-only">{getSocialIconLabel(key)}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{getSocialIconLabel(key)}</TooltipContent>
                </Tooltip>
              );
            })}
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
