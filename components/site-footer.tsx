import { siteConfig } from "@/config/site";
import { Icons } from "./icons";


export function SiteFooter() {
  return (
    <footer className="z-10 sticky bottom-0 w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mt-2 mb-1 flex justify-center gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          href={siteConfig.githubRepo}
          className="flex items-center gap-2"
        >
          <span className="sr-only">GitHub</span>
          <Icons.github className="h-5 w-5" />
          <p>Blog repository</p>
        </a>
      </div>
    </footer>
  );
}
