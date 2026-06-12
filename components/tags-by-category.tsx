import { Tag } from "@/components/tag";
import type { TagsByCategory } from "@/lib/utils";

interface TagsByCategoryListProps {
  tagsByCategory: TagsByCategory[];
  uncategorizedTags: Array<{ name: string; count: number }>;
}

interface TagGroupProps {
  label: string;
  tags: Array<{ name: string; count: number }>;
}

function TagGroup({ label, tags }: TagGroupProps) {
  return (
    <section>
      <h2 className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
        {label}
      </h2>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {tags.map((tag) => (
          <Tag key={tag.name} tag={tag.name} count={tag.count} />
        ))}
      </div>
    </section>
  );
}

export function TagsByCategoryList({
  tagsByCategory,
  uncategorizedTags,
}: TagsByCategoryListProps) {
  return (
    <div className="space-y-10">
      {tagsByCategory.map((category) => (
        <TagGroup
          key={category.category}
          label={category.label}
          tags={category.tags}
        />
      ))}
      {uncategorizedTags.length > 0 && (
        <TagGroup label="Other" tags={uncategorizedTags} />
      )}
    </div>
  );
}
