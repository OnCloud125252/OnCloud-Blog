import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export type SocialLinkKey = keyof typeof siteConfig.links;

type SocialIconName =
  | "email"
  | "github"
  | "twitter"
  | "linkedin"
  | "facebook"
  | "instagram"
  | "youtube"
  | "discord"
  | "gravatar";

const SOCIAL_ICON_MAP: Record<
  SocialIconName,
  { icon: (typeof Icons)[keyof typeof Icons]; label: string }
> = {
  email: { icon: Icons.email, label: "Email" },
  github: { icon: Icons.github, label: "GitHub" },
  twitter: { icon: Icons.twitter, label: "Twitter" },
  linkedin: { icon: Icons.linkedin, label: "LinkedIn" },
  facebook: { icon: Icons.facebook, label: "Facebook" },
  instagram: {
    icon: Icons.instagram,
    label: "Instagram",
  },
  youtube: { icon: Icons.youtube, label: "YouTube" },
  discord: { icon: Icons.discord, label: "Discord" },
  gravatar: { icon: Icons.gravatar, label: "Gravatar" },
};

export function SocialIcon({
  name,
  showLabel = false,
}: {
  name: SocialLinkKey;
  showLabel?: boolean;
}) {
  const config = SOCIAL_ICON_MAP[name as SocialIconName];
  const IconComponent = config.icon;
  return (
    <div className={showLabel ? "flex items-center gap-1" : undefined}>
      <IconComponent className="h-4 w-4" />
      <span className="sr-only">{config.label}</span>
      {showLabel && config.label}
    </div>
  );
}

export function getSocialIconLabel(name: SocialLinkKey) {
  return SOCIAL_ICON_MAP[name as SocialIconName].label;
}
