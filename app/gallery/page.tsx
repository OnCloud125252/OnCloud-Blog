import { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.gallery.title,
  description: siteConfig.gallery.description,
};

export default async function ProjectPage() {
  const {
    project: { title, description },
  } = siteConfig;

  return (
    <div className="container max-w-7xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-xl">{description}</p>
        </div>
      </div>
      {/* <Tabs defaultValue={defaultView} className="mt-8"> */}
      <Tabs defaultValue={"grid"} className="mt-8">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>
        <TabsContent value="list"></TabsContent>
        <TabsContent value="grid">
          <div>
            <section className="flex h-24 w-24 items-center justify-center bg-slate-300 font-bold">
              A
            </section>
            <section className="flex h-24 w-24 items-center justify-center bg-slate-300 font-bold">
              B
            </section>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
            <div>I</div>
            <div>J</div>
            <div>K</div>
            <div>L</div>
            <div>M</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
