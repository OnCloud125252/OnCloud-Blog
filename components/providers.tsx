"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";


export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
