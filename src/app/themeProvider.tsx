"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="skyblue"
      themes={["skyblue", "light", "dune", "forest"]}
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
