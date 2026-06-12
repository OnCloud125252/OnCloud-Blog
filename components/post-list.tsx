"use client";

import { useEffect, useRef, useState } from "react";
import { Post } from "#site/content";
import { PostItem } from "@/components/post-item";
import { PostSkeleton } from "@/components/post-skeleton";

interface PostListProps {
  posts: Post[];
}

const POSTS_PER_PAGE = 6;
const LOAD_DELAY_MS = 300;
const OBSERVER_MARGIN = "200px";

export function PostList({ posts }: PostListProps) {
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>(() =>
    posts.slice(0, POSTS_PER_PAGE),
  );
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(posts.length > POSTS_PER_PAGE);
  const observerTarget = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          loadMorePosts();
        }
      },
      { rootMargin: OBSERVER_MARGIN },
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading, page]);

  const loadMorePosts = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const nextPage = page + 1;
      const start = POSTS_PER_PAGE * (nextPage - 1);
      const end = start + POSTS_PER_PAGE;
      const newPosts = posts.slice(start, end);

      setDisplayedPosts((prev) => [...prev, ...newPosts]);
      setPage(nextPage);
      setHasMore(end < posts.length);
      setIsLoading(false);
    }, LOAD_DELAY_MS);
  };

  if (posts.length === 0) {
    return null;
  }

  const lastPostIndex = displayedPosts.length - 1;
  const showSkeleton = hasMore && isLoading;

  return (
    <ul className="flex flex-col gap-3.5">
      {displayedPosts.map((post, index) => {
        const { slug, date, update, title, description } = post;
        const isLastItem = index === lastPostIndex && !showSkeleton;
        return (
          <li
            key={slug}
            ref={isLastItem ? observerTarget : null}
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: `${(index % POSTS_PER_PAGE) * 60}ms` }}
          >
            <PostItem
              slug={slug}
              date={update || date}
              title={title}
              description={description}
            />
          </li>
        );
      })}
      {showSkeleton && (
        <>
          <li ref={observerTarget}>
            <PostSkeleton />
          </li>
          <li>
            <PostSkeleton />
          </li>
        </>
      )}
    </ul>
  );
}
