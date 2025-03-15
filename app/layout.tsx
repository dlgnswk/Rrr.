import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/app/ui/Providers";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const honerThose = localFont({
  src: "./fonts/honer-those.otf",
  display: "swap",
  variable: "--font-honer-those",
  weight: "400",
  preload: true,
});

const freesentation = localFont({
  src: "./fonts/FreesentationVF.ttf",
  display: "swap",
  variable: "--font-freesentation",
  weight: "100 200 300 400 500 600 700 800 900",
  preload: true,
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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BRBGYK6RRT"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BRBGYK6RRT');
            `,
          }}
        />
      </head>
      <body
        className={`${honerThose.variable} ${freesentation.variable} antialiased min-h-screen w-screen`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
