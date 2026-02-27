"use client";

import { useState } from "react";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { TagsByCategory } from "@/lib/utils";

interface TagsByCategoryListProps {
  tagsByCategory: TagsByCategory[];
  uncategorizedTags: Array<{ name: string; count: number }>;
}

interface CategoryCardProps {
  category: string;
  color: string;
  label: string;
  count: number;
  tags: Array<{ name: string; count: number }>;
  isExpanded: boolean;
  onToggle: () => void;
}

function CategoryCard({
  color,
  label,
  count,
  tags,
  isExpanded,
  onToggle,
}: CategoryCardProps) {
  return (
    <Card>
      <CardHeader className="cursor-pointer py-3" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full shadow-[0_0_6px_var(--glow-primary)]"
              style={{ backgroundColor: color }}
            />
            <span className="font-semibold">{label}</span>
            <span className="text-muted-foreground text-sm">({count})</span>
          </div>
          <span className="font-mono text-muted-foreground">
            {isExpanded ? "−" : "+"}
          </span>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="flex flex-wrap gap-2 pb-4">
          {tags.map((tag) => (
            <Tag key={tag.name} tag={tag.name} count={tag.count} showCategory />
          ))}
        </CardContent>
      )}
    </Card>
  );
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
      {tagsByCategory.map((category) => (
        <CategoryCard
          key={category.category}
          category={category.category}
          color={category.color}
          label={category.label}
          count={category.tags.length}
          tags={category.tags}
          isExpanded={expandedCategories[category.category] !== false}
          onToggle={() => toggleCategory(category.category)}
        />
      ))}

      {uncategorizedTags.length > 0 && (
        <CategoryCard
          category="other"
          color="#9ca3af"
          label="Other"
          count={uncategorizedTags.length}
          tags={uncategorizedTags}
          isExpanded={expandedCategories.other !== false}
          onToggle={() => toggleCategory("other")}
        />
      )}
    </div>
  );
}
