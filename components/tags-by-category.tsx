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
    <section className="rounded-2xl border bg-card p-6 sm:p-7">
      <h2 className="font-display font-medium text-base tracking-tight">
        {label}
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
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
    <div className="flex flex-col gap-3.5">
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
