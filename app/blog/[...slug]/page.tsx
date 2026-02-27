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

function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  return posts.find((post) => post.slugAsParams === slug);
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  const ogImage = {
    url: `/api/og?${ogSearchParams.toString()}`,
    width: 1200,
    height: 630,
    alt: post.title,
  };

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export function generateStaticParams(): PostPageProps["params"][] {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  const updateDate = post.update;
  const hasUpdate = updateDate && post.date !== updateDate;

  return (
    <article className="prose dark:prose-invert container mx-auto max-w-7xl py-6">
      <h1 className="mb-2 font-display">{post.title}</h1>
      <div className="mb-2 flex gap-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description && (
        <p className="mt-0 mb-2 text-muted-foreground text-xl">
          {post.description}
        </p>
      )}
      <div className="flex gap-6 font-mono text-sm">
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </TooltipTrigger>
          <TooltipContent>Posted on {formatDate(post.date)}</TooltipContent>
        </Tooltip>
        {hasUpdate && updateDate && (
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-1">
                <Icons.penToSquare className="h-4 w-4" />
                <time dateTime={updateDate}>{formatDate(updateDate)}</time>
              </div>
            </TooltipTrigger>
            <TooltipContent>Updated on {formatDate(updateDate)}</TooltipContent>
          </Tooltip>
        )}
      </div>
      <hr className="cyber-hr my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}
