import { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.project.title,
  description: siteConfig.project.description,
};

export default function ProjectPage() {
  const { title, description } = siteConfig.project;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header>
        <h1 className="font-display text-4xl">{title}</h1>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </header>
      <div className="mt-10 border-border border-t">
        <ProjectList project={siteConfig.project} />
      </div>
    </div>
  );
}
