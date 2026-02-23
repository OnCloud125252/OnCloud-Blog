import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        neon: "border-primary/50 bg-primary/10 text-primary hover:shadow-neon-cyan",
        "neon-pink":
          "border-secondary/50 bg-secondary/10 text-secondary hover:shadow-neon-pink",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, color, ...props }: BadgeProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cn(
        "cursor-default",
        badgeVariants({ variant: "default" }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
