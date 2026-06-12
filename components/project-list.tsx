interface Project {
  name: string;
  technology: string[];
  description: string;
  github?: string;
  link?: string;
  status: string;
}

interface ProjectListProps {
  project: {
    projects: Project[];
    getStatus: (status: string) => { color: string; text: string };
    target: string;
  };
}

export function ProjectList({ project }: ProjectListProps) {
  const { projects, getStatus, target } = project;

  return (
    <ul className="flex flex-col gap-3.5">
      {projects.map((proj) => {
        const { name, technology, description, github, link } = proj;
        const { text } = getStatus(proj.status);

        return (
          <li
            key={name}
            className="rounded-2xl border bg-card p-6 transition-shadow duration-200 hover:shadow-[0_4px_16px_rgb(0_0_0/0.06)] sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display font-medium text-xl tracking-tight">
                {name}
              </h2>
              <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider">
                {text}
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
                  target={target}
                  rel="noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  GitHub ↗
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target={target}
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
