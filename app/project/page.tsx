import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "My project",
  description: "This is a description"
};

export default async function ProjectPage() {
  const {
    project: { title, description, projects, getStatus, view, target }
  } = siteConfig;
  const isGrid = view === "grid";

  return (
    <div className="container max-w-7xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>
      </div>
      <div
        className={cn(
          "grid gap-4 mt-8",
          isGrid ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
        )}
      >
        {projects.map((project: any, index: number): any => {
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
                  <CardTitle className={"mr-4"}>{project.name}</CardTitle>
                  <Badge color={color}>{text}</Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter
                className={cn(
                  "flex items-center justify-end space-x-1",
                  !isGrid && "p-0"
                )}
              >
                {project.github && (
                  <Link href={project.github} target={target}>
                    <Button variant={"ghost"} size={"icon"}>
                      <Icons.github className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                {project.link && (
                  <Link href={project.link} target={target}>
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
    </div>
  );
}
