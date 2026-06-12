import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.about.title,
  description: siteConfig.about.description,
};

export default function AboutPage() {
  const { title, name, location, aka, work, detail, avatar } = siteConfig.about;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <header>
        <h1 className="font-bold font-display text-4xl tracking-tight">
          {title}
        </h1>
      </header>

      <section className="mt-10 flex flex-col gap-6 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center sm:p-7">
        <Avatar className="h-20 w-20">
          <AvatarImage src={avatar.url} alt={name} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-display font-medium text-2xl tracking-tight">
            {name}
          </h2>
          <p className="mt-1 text-muted-foreground text-sm">{aka}</p>
          <p className="mt-2 text-muted-foreground text-sm">
            {location} · {work}
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        {detail?.map((line) => (
          <p className="text-muted-foreground leading-relaxed" key={line}>
            {line}
          </p>
        ))}
      </section>

      {STAT_SECTIONS.map((section) => (
        <section className="mt-14" key={section.heading}>
          <h2 className="font-bold font-display text-lg tracking-tight">
            {section.heading}
          </h2>
          <div className="mt-5 flex flex-col items-start gap-5">
            {section.images.map((image) => (
              // biome-ignore lint/performance/noImgElement: external dynamic SVG from GitHub stats API
              <img
                key={image.src}
                src={image.src}
                title={image.label}
                alt={image.label}
                loading="lazy"
                decoding="async"
                className="rounded-2xl"
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const STAT_SECTIONS = [
  {
    heading: "GitHub Status",
    images: [
      {
        src: "https://github-readme-stats.on-cloud.eu.org/api?username=OnCloud125252&show_icons=true&theme=onedark",
        label: "Overall GitHub Stats",
      },
      {
        src: "https://github-readme-stats.on-cloud.eu.org/api/top-langs/?username=OnCloud125252&langs_count=8&theme=onedark&layout=donut",
        label: "Most Used Programming Languages",
      },
    ],
  },
  {
    heading: "Coding Activity (All Time)",
    images: [
      {
        src: "https://github-readme-stats.vercel.app/api/wakatime?username=OnCloud&theme=onedark&layout=compact",
        label: "Coding Activity",
      },
    ],
  },
];
