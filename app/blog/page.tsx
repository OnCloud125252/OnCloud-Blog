import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: siteConfig.blog.title,
  description: siteConfig.blog.description
};

const POSTS_PER_PAGE = 6;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  const { title, description, placeholder } = siteConfig.blog;

  return (
    <div className="sm:absolute h-full w-full">
      <div className="container relative h-full max-w-7xl py-6 lg:py-10 left-0 right-0 flex flex-col">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-8 relative flex-1 sm:max-h-[calc(100%-10rem)]">
          <div className="relative col-span-12 col-start-1 sm:col-span-8 max-h-full">
            <hr />
            {displayPosts?.length > 0 ? (
              <ul className="sm:absolute sm:w-full sm:h-full flex flex-col sm:overflow-auto">
                {displayPosts.map((post) => {
                  const { slug, date, update, title, description, tags } = post;
                  return (
                    <li key={slug}>
                      <PostItem
                        slug={slug}
                        date={update || date}
                        title={title}
                        description={description}
                        tags={tags}
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>{placeholder}</p>
            )}
            <QueryPagination
              totalPages={totalPages}
              className="sm:absolute sm:top-[100%] justify-end mt-4"
            />
          </div>
          <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {sortedTags?.map((tag) => (
                <Tag tag={tag} key={tag} count={tags[tag]} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
