export type TagCategory = keyof typeof TAG_CATEGORIES;

export interface TagCategoryConfig {
  label: string;
  color: string;
  tags: readonly string[];
}

export const TAG_CATEGORIES = {
  shell: {
    label: "Shell",
    color: "#22c55e",
    tags: [
      "zsh",
      "bash",
      "shell",
      "oh-my-zsh",
      "terminal",
      "warp",
      "wezterm",
      "dotfiles",
      "configuration",
      "macos",
    ],
  },
  devops: {
    label: "DevOps",
    color: "#3b82f6",
    tags: [
      "docker",
      "docker-compose",
      "portainer",
      "pve",
      "pve-container",
    ],
  },
  cicd: {
    label: "CI/CD",
    color: "#a855f7",
    tags: ["github", "github-actions", "actions", "automation"],
  },
  linux: {
    label: "Linux",
    color: "#f97316",
    tags: ["ubuntu", "linux", "nginx"],
  },
  networking: {
    label: "Networking",
    color: "#ef4444",
    tags: ["network", "dns", "dhcp", "mtu", "pi-hole", "ad-blocking"],
  },
  programming: {
    label: "Programming",
    color: "#eab308",
    tags: ["typescript", "bun", "c++", "script"],
  },
  personal: {
    label: "Personal",
    color: "#ec4899",
    tags: ["life", "dev-log", "audio"],
  },
} as const satisfies Record<string, TagCategoryConfig>;

export function getCategoryForTag(tag: string): TagCategory | null {
  const normalizedTag = tag.toLowerCase();

  for (const [category, config] of Object.entries(TAG_CATEGORIES) as [
    string,
    TagCategoryConfig,
  ][]) {
    if (config.tags.includes(normalizedTag)) {
      return category as TagCategory;
    }
  }

  return null;
}

export function getCategoryConfig(category: TagCategory): TagCategoryConfig {
  return TAG_CATEGORIES[category];
}

export function getCategoryColor(category: TagCategory): string {
  return TAG_CATEGORIES[category].color;
}

export function getAllCategories(): TagCategory[] {
  return Object.keys(TAG_CATEGORIES) as TagCategory[];
}
