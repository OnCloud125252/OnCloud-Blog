import { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectList } from "@/components/project-list";
import { siteConfig } from "@/config/site";


export const metadata: Metadata = {
  title: siteConfig.project.title,
  description: siteConfig.project.description
};

export default async function ProjectPage() {
  const {
    project: { title, description, defaultView }
  } = siteConfig;

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
      <Tabs defaultValue={defaultView} className="mt-8">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <ProjectList isGrid={false} project={siteConfig.project} />
        </TabsContent>
        <TabsContent value="grid">
          <ProjectList isGrid={true} project={siteConfig.project} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
