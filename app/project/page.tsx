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
    <div className="mx-auto max-w-4xl px-6 py-12">
      <header>
        <h1 className="font-bold font-display text-4xl tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </header>
      <div className="mt-10">
        <ProjectList projects={siteConfig.project.projects} />
      </div>
    </div>
  );
}
