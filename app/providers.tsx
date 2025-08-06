import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/common/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      enableSystem 
      attribute="class" 
      defaultTheme="digital-studio"
      themes={["light", "dark", "digital-studio"]}
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
