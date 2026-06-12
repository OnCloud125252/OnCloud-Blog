export interface TagCategoryConfig {
  label: string;
  tags: readonly string[];
}

export const TAG_CATEGORIES = {
  shell: {
    label: "Shell",
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
    tags: ["docker", "docker-compose", "portainer", "pve", "pve-container"],
  },
  cicd: {
    label: "CI/CD",
    tags: ["github", "github-actions", "actions", "automation"],
  },
  linux: {
    label: "Linux",
    tags: ["ubuntu", "linux", "nginx"],
  },
  networking: {
    label: "Networking",
    tags: ["network", "dns", "dhcp", "mtu", "pi-hole", "ad-blocking"],
  },
  programming: {
    label: "Programming",
    tags: ["typescript", "bun", "c++", "script"],
  },
  personal: {
    label: "Personal",
    tags: ["life", "dev-log", "audio"],
  },
} as const satisfies Record<string, TagCategoryConfig>;

export type TagCategory = keyof typeof TAG_CATEGORIES;

const TAG_TO_CATEGORY = new Map<string, TagCategory>();
for (const [category, config] of Object.entries(TAG_CATEGORIES)) {
  for (const tag of config.tags) {
    TAG_TO_CATEGORY.set(tag, category as TagCategory);
  }
}

export function getCategoryForTag(tag: string): TagCategory | null {
  return TAG_TO_CATEGORY.get(tag.toLowerCase()) ?? null;
}
