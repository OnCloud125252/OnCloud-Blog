import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { Tag } from "@/components/tag";
import { siteConfig } from "@/config/site";
import { formatDate, getPublishedPosts } from "@/lib/utils";

import "@/styles/mdx.css";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  return posts.find((post) => post.slugAsParams === slug && post.published);
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
  const ogUrl = `/api/og?${ogSearchParams.toString()}`;

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [{ url: ogUrl, ...siteConfig.ogImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl],
    },
  };
}

export function generateStaticParams(): PostPageProps["params"][] {
  return getPublishedPosts(posts).map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const updateDate =
    post.update && post.update !== post.date ? post.update : undefined;

  return (
    <article className="prose dark:prose-invert mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-display tracking-tight">{post.title}</h1>
      {post.description && (
        <p className="mt-0 mb-4 text-muted-foreground text-xl">
          {post.description}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
        <time dateTime={post.date}>Published {formatDate(post.date)}</time>
        {updateDate && (
          <time dateTime={updateDate}>Updated {formatDate(updateDate)}</time>
        )}
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {post.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      )}
      <hr className="my-8" />
      <MDXContent code={post.body} />
    </article>
  );
}
