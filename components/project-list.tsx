import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";


export function ProjectList({
  isGrid,
  project
}: {
  isGrid: boolean;
  project: typeof siteConfig.project;
}) {
  const { projects, getStatus, target } = project;

  return (
    <div
      className={cn(
        "grid gap-4 mt-5",
        isGrid ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
      )}
    >
      {projects.map((project: any, index: number): any => {
        const { name, technology, description, github, link } = project;
        const { color, text }: any = getStatus(project.status);
        return (
          <Card
            key={index}
            className={cn(
              "not-prose",
              !isGrid && "flex flex-row justify-between p-6"
            )}
          >
            <CardHeader className={cn(!isGrid && "p-0")}>
              <div
                className={cn(
                  "flex items-center mb-2",
                  isGrid && "justify-between"
                )}
              >
                <CardTitle className={"mr-3"}>{name}</CardTitle>
                <Badge color={color}>{text}</Badge>
              </div>
              <div className="!mt-0 !mb-2 flex items-center gap-1 text-gray-500 text-sm">
                {technology.length && (
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
                !isGrid && "p-0"
              )}
            >
              {github && (
                <Link href={github} target={target}>
                  <Button variant={"ghost"} size={"icon"}>
                    <Icons.github className="h-5 w-5" />
                  </Button>
                </Link>
              )}
              {link && (
                <Link href={link} target={target}>
                  <Button variant={"ghost"} size={"icon"}>
                    <ExternalLink size={20} />
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
