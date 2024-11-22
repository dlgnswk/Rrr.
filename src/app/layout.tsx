import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        className={`${honerThose.variable} ${freesentation.variable} antialiased w-[45%] mx-auto bg-sky h-screen mt-8 my-20`}
      >
        {children}
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center border-0 border-black h-12 w-40 bg-darkSky/70 rounded-2xl backdrop-blur-md"></div>
      </body>
    </html>
  );
}
