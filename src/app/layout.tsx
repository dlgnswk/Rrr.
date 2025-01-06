import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Providers";
import { ThemeProvider } from "./themeProvider";
import { ThemeSwitch } from "./themeSwitch";

const honerThose = localFont({
  src: "./fonts/honer-those.otf",
  variable: "--font-honer-those",
  weight: "400",
});

const freesentation = localFont({
  src: "./fonts/FreesentationVF.ttf",
  variable: "--font-freesentation",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Rrr.",
  description: "Rrr's devlog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${honerThose.variable} ${freesentation.variable} antialiased min-h-screen w-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="skyblue"
          themes={["dark", "skyblue", "forest", "dune"]}
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeSwitch />
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
