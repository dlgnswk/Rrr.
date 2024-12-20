import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Providers";

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
    <html lang="en">
      <body
        className={`${honerThose.variable} ${freesentation.variable} antialiased min-h-screen w-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
