import { siteConfig } from "@/config/site";

const SOCIAL_LABELS: Record<keyof typeof siteConfig.links, string> = {
  email: "Email",
  github: "GitHub",
  facebook: "Facebook",
  instagram: "Instagram",
  discord: "Discord",
  gravatar: "Gravatar",
};

export default function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 border-border border-t px-6 py-10">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} {siteConfig.author} ·{" "}
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
          {(
            Object.keys(siteConfig.links) as Array<
              keyof typeof siteConfig.links
            >
          ).map((key) => (
            <a
              key={key}
              href={siteConfig.links[key]}
              target="_blank"
              rel="noreferrer"
              className="font-medium transition-colors hover:text-primary"
            >
              {SOCIAL_LABELS[key]}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
