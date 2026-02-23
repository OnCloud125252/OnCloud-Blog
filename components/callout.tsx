import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "boder-l-4 my-6 w-full items-start rounded-md border p-4 dark:max-w-none",
        {
          "border-l-primary bg-primary/5 dark:bg-primary/10":
            type === "default",
          "border-l-amber-500 bg-amber-50 shadow-[inset_0_0_10px_var(--glow-amber)] dark:bg-amber-950/30":
            type === "warning",
          "border-l-red-500 bg-red-50 shadow-[inset_0_0_10px_hsl(0_80%_50%_/_0.1)] dark:bg-red-950/30":
            type === "danger",
        },
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
