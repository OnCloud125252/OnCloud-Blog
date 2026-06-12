import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutType = "default" | "warning" | "danger";

interface CalloutProps {
  children?: ReactNode;
  type?: CalloutType;
}

const calloutStyles: Record<CalloutType, string> = {
  default: "border-l-foreground/40 bg-muted/50",
  warning: "border-l-amber-600 bg-muted/50",
  danger: "border-l-red-600 bg-muted/50",
};

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 w-full items-start border border-l-4 p-4 dark:max-w-none",
        calloutStyles[type],
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
