"use client";

import Lottie from "react-lottie-player";
import octocat from "@/assets/lottie/github-icon-animation.json";
import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="w-full border-foreground/5 border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} OnCloud. Built with Next.js & Velite.
        </p>
        <div className="flex items-center gap-6">
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.githubRepo}
            className="flex items-center gap-2 font-mono text-foreground text-sm transition-colors hover:text-primary"
          >
            <Lottie
              loop
              animationData={octocat}
              play
              className="h-5 w-5 contrast-125 grayscale"
            />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
