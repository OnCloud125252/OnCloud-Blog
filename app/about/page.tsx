import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me"
};

export default async function AboutPage() {
  const { title, name, location, aka, work, description, avatar } =
    siteConfig.about;

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-56 md:max-w-56 w-full flex flex-col items-center gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src={avatar.url} alt={name} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">{name}</h2>
          <p className="w-full text-muted-foreground text-center break-words pb-2 border-b-2">
            {aka}
          </p>
          <div>
            <p className="w-full text-muted-foreground text-left break-words flex items-center justify-start gap-1">
              <div className="w-5">
                <Icons.location className="h-4 w-4" />
              </div>
              {location}
            </p>
            <p className="w-full text-muted-foreground text-left break-words flex items-center justify-start gap-1">
              <div className="w-5">
                <Icons.building className="h-5 w-5" />
              </div>
              {work}
            </p>
          </div>
        </div>
        <div className="py-4 flex-1">
          {description?.map((line, index) => (
            <p className="text-muted-foreground text-lg mt-3 mb-3" key={index}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
