"use client";

import { siteConfig } from "@/config/site";
import { getSocialIconLabel, SocialLinkKey } from "./social-icons";

export default function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-4 border-border border-t px-6 py-10">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} OnCloud ·{" "}
          <a
            href={siteConfig.githubRepo}
            target="_blank"
            rel="noreferrer"
            className="font-medium transition-colors hover:text-primary"
          >
            Source
          </a>
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground text-sm">
          {Object.keys(siteConfig.links).map((name) => {
            const key = name as SocialLinkKey;
            return (
              <a
                key={name}
                href={siteConfig.links[key]}
                target="_blank"
                rel="noreferrer"
                className="font-medium transition-colors hover:text-primary"
              >
                {getSocialIconLabel(key)}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
