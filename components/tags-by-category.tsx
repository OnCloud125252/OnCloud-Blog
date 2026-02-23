"use client";

import { useState } from "react";

import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { TagsByCategory } from "@/lib/utils";

interface TagsByCategoryListProps {
  tagsByCategory: TagsByCategory[];
  uncategorizedTags: Array<{ name: string; count: number }>;
}

export function TagsByCategoryList({
  tagsByCategory,
  uncategorizedTags,
}: TagsByCategoryListProps) {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="space-y-4">
      {tagsByCategory.map((categoryGroup) => (
        <Card key={categoryGroup.category}>
          <CardHeader
            className="cursor-pointer py-3"
            onClick={() => toggleCategory(categoryGroup.category)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: categoryGroup.color }}
                />
                <span className="font-semibold">{categoryGroup.label}</span>
                <span className="text-muted-foreground text-sm">
                  ({categoryGroup.tags.length})
                </span>
              </div>
              <span className="text-muted-foreground">
                {expandedCategories[categoryGroup.category] ? "−" : "+"}
              </span>
            </div>
          </CardHeader>
          {expandedCategories[categoryGroup.category] !== false && (
            <CardContent className="flex flex-wrap gap-2 pb-4">
              {categoryGroup.tags.map((tag) => (
                <Tag
                  tag={tag.name}
                  key={tag.name}
                  count={tag.count}
                  showCategory
                />
              ))}
            </CardContent>
          )}
        </Card>
      ))}

      {uncategorizedTags.length > 0 && (
        <Card>
          <CardHeader
            className="cursor-pointer py-3"
            onClick={() => toggleCategory("other")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-gray-400" />
                <span className="font-semibold">Other</span>
                <span className="text-muted-foreground text-sm">
                  ({uncategorizedTags.length})
                </span>
              </div>
              <span className="text-muted-foreground">
                {expandedCategories.other ? "−" : "+"}
              </span>
            </div>
          </CardHeader>
          {expandedCategories.other !== false && (
            <CardContent className="flex flex-wrap gap-2 pb-4">
              {uncategorizedTags.map((tag) => (
                <Tag
                  tag={tag.name}
                  key={tag.name}
                  count={tag.count}
                  showCategory
                />
              ))}
            </CardContent>
          )}
        </Card>
      )}
    </div>
  );
}
