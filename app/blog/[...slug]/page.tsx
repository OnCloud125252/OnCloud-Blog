import { Calendar } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { Icons } from "@/components/icons";
import { MDXContent } from "@/components/mdx-components";
import { Tag } from "@/components/tag";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";

import "@/styles/mdx.css";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  return posts.find((post) => post.slugAsParams === slug);
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert container mx-auto max-w-7xl py-6">
      <h1 className="mb-2">{post.title}</h1>
      <div className="mb-2 flex gap-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description ? (
        <p className="mt-0 mb-2 text-muted-foreground text-xl">
          {post.description}
        </p>
      ) : null}
      <div className="flex gap-6">
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </TooltipTrigger>
          <TooltipContent>Posted on {formatDate(post.date)}</TooltipContent>
        </Tooltip>
        {post.update && post.date !== post.update && (
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-1">
                <Icons.penToSquare className="h-4 w-4" />
                <time dateTime={post.update}>{formatDate(post.update)}</time>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              Updated on {formatDate(post.update)}
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}
