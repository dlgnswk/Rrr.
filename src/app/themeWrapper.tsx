"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "./themeProvider";
import { ThemeDial } from "./themeDial";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isWritePage = pathname === "/write";

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="skyblue"
      themes={["skyblue", "light", "forest", "dune"]}
      enableSystem={false}
      disableTransitionOnChange
      forcedTheme={isWritePage ? "light" : undefined}
    >
      {!isWritePage && <ThemeDial />}
      {children}
    </ThemeProvider>
  );
}
