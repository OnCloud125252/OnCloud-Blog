import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutType = "default" | "warning" | "danger";

interface CalloutProps {
  children?: ReactNode;
  type?: CalloutType;
}

const calloutStyles: Record<CalloutType, string> = {
  default: "border-l-primary bg-primary/5 dark:bg-primary/10",
  warning:
    "border-l-amber-500 bg-amber-50 shadow-[inset_0_0_10px_var(--glow-amber)] dark:bg-amber-950/30",
  danger:
    "border-l-red-500 bg-red-50 shadow-[inset_0_0_10px_hsl(0_80%_50%_/_0.1)] dark:bg-red-950/30",
};

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "boder-l-4 my-6 w-full items-start rounded-md border p-4 dark:max-w-none",
        calloutStyles[type],
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
