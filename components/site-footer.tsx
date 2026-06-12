"use client";

import { siteConfig } from "@/config/site";
import { getSocialIconLabel, SocialLinkKey } from "./social-icons";

export default function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 border-border border-t px-6 py-10">
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-muted-foreground text-xs">
          {Object.keys(siteConfig.links).map((name) => {
            const key = name as SocialLinkKey;
            return (
              <a
                key={name}
                href={siteConfig.links[key]}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {getSocialIconLabel(key)}
              </a>
            );
          })}
        </nav>
        <p className="font-mono text-muted-foreground text-xs">
          © {new Date().getFullYear()} OnCloud · Built with Next.js & Velite ·{" "}
          <a
            href={siteConfig.githubRepo}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
