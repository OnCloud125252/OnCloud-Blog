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
    <ul className="divide-y divide-border">
      {projects.map((proj) => {
        const { name, technology, description, github, link } = proj;
        const { text } = getStatus(proj.status);

        return (
          <li key={name} className="py-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-xl">{name}</h2>
              <span className="shrink-0 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                {text}
              </span>
            </div>
            {technology.length > 0 && (
              <p className="mt-1 font-mono text-muted-foreground text-xs">
                {technology.join(" · ")}
              </p>
            )}
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
            <div className="mt-3 flex gap-5 font-mono text-xs">
              {github && (
                <a
                  href={github}
                  target={target}
                  rel="noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  GitHub ↗
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target={target}
                  rel="noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
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
