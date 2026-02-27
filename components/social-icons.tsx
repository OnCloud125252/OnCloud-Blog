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

interface SocialIconConfig {
  icon: (props: React.HTMLAttributes<SVGElement>) => JSX.Element;
  label: string;
}

const SOCIAL_ICON_MAP: Record<SocialIconName, SocialIconConfig> = {
  email: { icon: Icons.email, label: "Email" },
  github: { icon: Icons.github, label: "GitHub" },
  twitter: { icon: Icons.twitter, label: "Twitter" },
  linkedin: { icon: Icons.linkedin, label: "LinkedIn" },
  facebook: { icon: Icons.facebook, label: "Facebook" },
  instagram: { icon: Icons.instagram, label: "Instagram" },
  youtube: { icon: Icons.youtube, label: "YouTube" },
  discord: { icon: Icons.discord, label: "Discord" },
  gravatar: { icon: Icons.gravatar, label: "Gravatar" },
};

interface SocialIconProps {
  name: SocialLinkKey;
  showLabel?: boolean;
}

export function SocialIcon({ name, showLabel = false }: SocialIconProps) {
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

export function getSocialIconLabel(name: SocialLinkKey): string {
  return SOCIAL_ICON_MAP[name as SocialIconName].label;
}
