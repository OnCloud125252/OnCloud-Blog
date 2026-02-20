"use client";

import Lottie from "react-lottie-player";
import octocat from "@/assets/lottie/github-icon-animation.json";
import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-10 w-full border-border border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mt-2 mb-1 flex justify-center gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          href={siteConfig.githubRepo}
          className="flex items-center gap-2 rounded-lg bg-white px-[4px] py-[1px] text-black"
        >
          <span className="sr-only">GitHub</span>
          <Lottie loop animationData={octocat} play className="h-5 w-5" />
          <p>Blog repository</p>
        </a>
      </div>
    </footer>
  );
}
