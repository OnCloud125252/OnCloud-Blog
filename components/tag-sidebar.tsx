import { slug } from "github-slugger";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TagsByCategory } from "@/lib/utils";

interface TagSidebarProps {
  tagsByCategory: TagsByCategory[];
  uncategorizedTags: Array<{ name: string; count: number }>;
  currentTag?: string;
}

export function TagSidebar({
  tagsByCategory,
  uncategorizedTags,
  currentTag,
}: TagSidebarProps) {
  return (
    <Card className="col-span-12 row-start-3 h-fit max-h-[60vh] overflow-y-auto sm:col-span-4 sm:col-start-9 sm:row-start-1">
      <CardHeader>
        <CardTitle>Tags</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {tagsByCategory.map((categoryGroup) => (
          <div key={categoryGroup.category} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: categoryGroup.color,
                }}
              />
              <span className="font-medium text-sm">{categoryGroup.label}</span>
            </div>
            <div className="flex flex-wrap gap-2 pl-5">
              {categoryGroup.tags.map((tag) => (
                <Tag
                  tag={tag.name}
                  key={tag.name}
                  count={tag.count}
                  showCategory={false}
                  current={
                    currentTag ? slug(tag.name) === currentTag : undefined
                  }
                />
              ))}
            </div>
          </div>
        ))}
        {uncategorizedTags.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-gray-400" />
              <span className="font-medium text-sm">Other</span>
            </div>
            <div className="flex flex-wrap gap-2 pl-5">
              {uncategorizedTags.map((tag) => (
                <Tag
                  tag={tag.name}
                  key={tag.name}
                  count={tag.count}
                  showCategory={false}
                  current={
                    currentTag ? slug(tag.name) === currentTag : undefined
                  }
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
