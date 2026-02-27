import { slug } from "github-slugger";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TagsByCategory } from "@/lib/utils";

interface TagSidebarProps {
  tagsByCategory: TagsByCategory[];
  uncategorizedTags: Array<{ name: string; count: number }>;
  currentTag?: string;
}

interface TagGroupProps {
  color: string;
  label: string;
  tags: Array<{ name: string; count: number }>;
  currentTag?: string;
}

function TagGroup({ color, label, tags, currentTag }: TagGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span
          className="h-3 w-3 rounded-full shadow-[0_0_6px_var(--glow-primary)]"
          style={{ backgroundColor: color }}
        />
        <span className="font-medium text-sm">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2 pl-5">
        {tags.map((tag) => (
          <Tag
            key={tag.name}
            tag={tag.name}
            count={tag.count}
            current={currentTag ? slug(tag.name) === currentTag : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export function TagSidebar({
  tagsByCategory,
  uncategorizedTags,
  currentTag,
}: TagSidebarProps) {
  return (
    <Card className="col-span-12 row-start-3 h-fit max-h-[60vh] overflow-y-auto sm:col-span-4 sm:col-start-9 sm:row-start-1">
      <CardHeader>
        <CardTitle className="font-display">Tags</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {tagsByCategory.map((category) => (
          <TagGroup
            key={category.category}
            color={category.color}
            label={category.label}
            tags={category.tags}
            currentTag={currentTag}
          />
        ))}
        {uncategorizedTags.length > 0 && (
          <TagGroup
            color="#9ca3af"
            label="Other"
            tags={uncategorizedTags}
            currentTag={currentTag}
          />
        )}
      </CardContent>
    </Card>
  );
}
