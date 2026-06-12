import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.about.title,
  description: siteConfig.about.description,
};

export default function AboutPage() {
  const {
    title,
    name,
    location,
    aka,
    work,
    education,
    detail,
    experience,
    avatar,
  } = siteConfig.about;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <header>
        <h1 className="font-bold font-display text-4xl tracking-tight">
          {title}
        </h1>
      </header>

      <section className="mt-10 flex flex-col gap-6 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center sm:p-7">
        <Avatar className="h-28 w-28">
          <AvatarImage src={avatar.url} alt={name} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-display font-medium text-2xl tracking-tight">
            {name}
          </h2>
          <p className="mt-1 text-muted-foreground text-sm">{aka}</p>
          <p className="mt-2 text-muted-foreground text-sm">{work}</p>
          <p className="mt-1 text-muted-foreground text-sm">
            {education} · {location}
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

      <section className="mt-14">
        <h2 className="font-bold font-display text-lg tracking-tight">
          Experience
        </h2>
        <ul className="mt-5 flex flex-col gap-3.5">
          {experience.map((entry) => (
            <li
              key={entry.company}
              className="rounded-2xl border bg-card p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display font-medium text-lg tracking-tight">
                  {entry.company}
                </h3>
                <span className="font-mono text-[0.7rem] text-muted-foreground uppercase">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 font-medium text-primary text-sm">
                {entry.role}
              </p>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {entry.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
