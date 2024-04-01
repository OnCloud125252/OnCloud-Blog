import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";


const IconsList = {
  email: (
    <>
      <Icons.email className="h-4 w-4" />
      <span className="sr-only">Email</span>
    </>
  ),
  github: (
    <>
      <Icons.github className="h-4 w-4" />
      <span className="sr-only">GitHub</span>
    </>
  ),
  twitter: (
    <>
      <Icons.twitter className="h-4 w-4" />
      <span className="sr-only">Twitter</span>
    </>
  ),
  linkedin: (
    <>
      <Icons.linkedin className="h-4 w-4" />
      <span className="sr-only">LinkedIn</span>
    </>
  ),
  facebook: (
    <>
      <Icons.facebook className="h-4 w-4" />
      <span className="sr-only">Facebook</span>
    </>
  ),
  instagram: (
    <>
      <Icons.instagram className="h-4 w-4" />
      <span className="sr-only">Instagram</span>
    </>
  ),
  youtube: (
    <>
      <Icons.youtube className="h-4 w-4" />
      <span className="sr-only">YouTube</span>
    </>
  ),
  discord: (
    <>
      <Icons.discord className="h-4 w-4" />
      <span className="sr-only">Discord</span>
    </>
  ),
  gravatar: (
    <>
      <Icons.gravatar className="h-4 w-4" />
      <span className="sr-only">Gravatar</span>
    </>
  )
};

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {Object.keys(siteConfig.links).map((name: string, key: number) => {
              if (name) {
                return (
                  <Link
                    href={
                      siteConfig.links[name as keyof typeof siteConfig.links]
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
                      {IconsList[name as keyof typeof IconsList]}
                    </div>
                  </Link>
                );
              }
              else {
                return <></>;
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
