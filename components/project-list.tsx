import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  technology: string[];
  description: string;
  github?: string;
  link?: string;
  status: string;
}

interface ProjectListProps {
  isGrid: boolean;
  project: {
    projects: Project[];
    getStatus: (status: string) => { color: string; text: string };
    target: string;
  };
}

function ProjectLinks({
  github,
  link,
  target,
}: {
  github?: string;
  link?: string;
  target: string;
}) {
  return (
    <>
      {github && (
        <Link href={github} target={target}>
          <Button variant="ghost" size="icon">
            <Icons.github className="h-5 w-5" />
          </Button>
        </Link>
      )}
      {link && (
        <Link href={link} target={target}>
          <Button variant="ghost" size="icon">
            <ExternalLink size={20} />
          </Button>
        </Link>
      )}
    </>
  );
}

export function ProjectList({ isGrid, project }: ProjectListProps) {
  const { projects, getStatus, target } = project;

  return (
    <div
      className={cn(
        "mt-5 grid gap-4",
        isGrid ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1",
      )}
    >
      {projects.map((proj) => {
        const { name, technology, description, github, link } = proj;
        const { color, text } = getStatus(proj.status);

        return (
          <Card
            key={name}
            className={cn(
              "not-prose",
              !isGrid && "flex flex-row justify-between p-6",
            )}
          >
            <CardHeader className={cn(!isGrid && "p-0")}>
              <div
                className={cn(
                  "mb-2 flex items-center",
                  isGrid && "justify-between",
                )}
              >
                <CardTitle className="mr-3">{name}</CardTitle>
                <Badge color={color}>{text}</Badge>
              </div>
              <div className="!mt-0 !mb-2 flex items-center gap-1 font-mono text-muted-foreground text-sm">
                {technology.length > 0 && (
                  <>
                    <Icons.bolt className="h-3 w-3" />
                    {technology.join(", ")}
                  </>
                )}
              </div>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter
              className={cn(
                "flex items-center justify-end space-x-1",
                !isGrid && "p-0",
              )}
            >
              <ProjectLinks github={github} link={link} target={target} />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
