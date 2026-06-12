"use client";

import { useEffect, useRef, useState } from "react";
import { PostItem } from "@/components/post-item";
import { PostSkeleton } from "@/components/post-skeleton";
import { getPostDisplayDate, type PostListItem } from "@/lib/utils";

interface PostListProps {
  posts: PostListItem[];
}

const POSTS_PER_PAGE = 6;
const LOAD_DELAY_MS = 300;
const OBSERVER_MARGIN = "200px";

export function PostList({ posts }: PostListProps) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLLIElement>(null);

  const hasMore = visibleCount < posts.length;
  const displayedPosts = posts.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount((count) => count + POSTS_PER_PAGE);
            setIsLoading(false);
          }, LOAD_DELAY_MS);
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
  }, [hasMore, isLoading]);

  if (posts.length === 0) {
    return null;
  }

  const lastPostIndex = displayedPosts.length - 1;
  const showSkeleton = hasMore && isLoading;

  return (
    <ul className="flex flex-col gap-3.5">
      {displayedPosts.map((post, index) => {
        const isLastItem = index === lastPostIndex && !showSkeleton;
        return (
          <li
            key={post.slug}
            ref={isLastItem ? observerTarget : null}
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: `${(index % POSTS_PER_PAGE) * 60}ms` }}
          >
            <PostItem
              slug={post.slug}
              date={getPostDisplayDate(post)}
              title={post.title}
              description={post.description}
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
