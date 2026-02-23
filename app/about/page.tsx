import { Metadata } from "next";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.about.title,
  description: siteConfig.about.description,
};

export default async function AboutPage() {
  const { title, name, location, aka, work, detail, avatar } = siteConfig.about;

  return (
    <div className="container flex max-w-7xl flex-col gap-20 py-6 lg:py-10">
      <div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block font-black font-display text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
        </div>
        <hr className="cyber-hr my-8" />
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="flex w-full min-w-56 flex-col items-center gap-2 md:max-w-56">
            <Avatar className="h-48 w-48 shadow-neon-cyan ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
              <AvatarImage src={avatar.url} alt={name} />
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
            </Avatar>
            <h2 className="break-words text-center font-bold font-display text-2xl">
              {name}
            </h2>
            <p className="w-full break-words border-primary/20 border-b-2 pb-2 text-center text-muted-foreground">
              {aka}
            </p>
            <div>
              <p className="mt-1 mb-2 flex w-full items-center justify-start gap-1 break-words text-left font-mono text-muted-foreground text-sm">
                <div className="w-5">
                  <Icons.location className="h-4 w-4" />
                </div>
                {location}
              </p>
              <p className="flex w-full items-center justify-start gap-1 break-words text-left font-mono text-muted-foreground text-sm leading-5">
                <div className="w-5">
                  <Icons.building className="h-5 w-5" />
                </div>
                {work}
              </p>
            </div>
          </div>
          <div className="flex-1 py-4">
            {detail?.map((line) => (
              <p className="mt-3 mb-3 text-lg text-muted-foreground" key={line}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block font-black font-display text-4xl lg:text-5xl">
              GitHub Status
            </h1>
          </div>
        </div>
        <hr className="cyber-hr my-8" />
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
          {/* biome-ignore lint/performance/noImgElement: external dynamic SVG from GitHub stats API */}
          <img
            src="https://github-readme-stats.on-cloud.eu.org/api?username=OnCloud125252&show_icons=true&theme=onedark"
            title="Overall GitHub Stats"
            alt="Overall GitHub Stats"
          />
          {/* biome-ignore lint/performance/noImgElement: external dynamic SVG from GitHub stats API */}
          <img
            src="https://github-readme-stats.on-cloud.eu.org/api/top-langs/?username=OnCloud125252&langs_count=8&theme=onedark&layout=donut"
            title="Most Used Programming Languages"
            alt="Most Used Programming Languages"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block font-black font-display text-4xl lg:text-5xl">
              Coding Activity (All Time)
            </h1>
          </div>
        </div>
        <hr className="cyber-hr my-8" />
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
          {/* biome-ignore lint/performance/noImgElement: external dynamic SVG from GitHub stats API */}
          <img
            src="https://github-readme-stats.vercel.app/api/wakatime?username=OnCloud&theme=onedark&layout=compact"
            title="Coding Activity"
            alt="Coding Activity"
          />
        </div>
      </div>
    </div>
  );
}
