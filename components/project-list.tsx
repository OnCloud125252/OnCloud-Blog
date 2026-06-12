import {
  PROJECT_STATUS_LABELS,
  type Project,
  type ProjectStatus,
} from "@/config/site";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  active: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  developing: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  done: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
  paused: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  deprecated: "bg-red-500/15 text-red-600 dark:text-red-400",
  outdated: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
};

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="flex flex-col gap-3.5">
      {projects.map((project) => {
        const { name, technology, description, github, link, status } = project;

        return (
          <li
            key={name}
            className="rounded-2xl border bg-card p-6 transition-shadow duration-200 hover:shadow-[0_4px_16px_rgb(0_0_0/0.06)] sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display font-medium text-xl tracking-tight">
                {name}
              </h2>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider",
                  STATUS_STYLES[status],
                )}
              >
                {PROJECT_STATUS_LABELS[status]}
              </span>
            </div>
            {technology.length > 0 && (
              <p className="mt-1.5 font-mono text-muted-foreground text-xs">
                {technology.join(" · ")}
              </p>
            )}
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
            <div className="mt-4 flex gap-4 font-medium text-sm">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  GitHub ↗
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Live ↗
                </a>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
