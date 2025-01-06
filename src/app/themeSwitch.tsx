"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<
    "skyblue" | "dark" | "dune" | "forest"
  >("skyblue");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme) {
      setPosition(theme as "skyblue" | "dark" | "dune" | "forest");
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const switchPositions = {
    skyblue: { x: 0, y: 0 },
    dark: { x: "calc(80px - 36px - 8px)", y: 0 },
    dune: { x: 0, y: "calc(80px - 36px - 8px)" },
    forest: { x: "calc(80px - 36px - 8px)", y: "calc(80px - 36px - 8px)" },
  };

  const switchColors = {
    skyblue: "#74BDE8",
    dark: "#1f2937",
    dune: "#FF8C39",
    forest: "#13AE70",
  };

  const handleSwitch = (
    newPosition: "skyblue" | "dark" | "dune" | "forest"
  ) => {
    setPosition(newPosition);
    setTheme(newPosition);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative w-[80px] h-[80px] bg-white/10 backdrop-blur rounded-[20px] shadow-lg p-1.5 ">
        <div className="absolute inset-1 grid grid-cols-2 grid-rows-2">
          <button
            onClick={() => handleSwitch("skyblue")}
            className="w-full h-full p-0.5"
            aria-label="Skyblue mode"
          >
            <div
              className={`w-full h-full transition-colors duration-200 ${
                theme !== "skyblue"
                  ? "border-2 border-white rounded-full hover:border-[#74BDE8]"
                  : ""
              }`}
            />
          </button>
          <button
            onClick={() => handleSwitch("dark")}
            className="w-full h-full p-0.5"
            aria-label="Dark mode"
          >
            <div
              className={`w-full h-full transition-colors duration-200 ${
                theme !== "dark"
                  ? "border-2 border-white rounded-full hover:border-[#1f2937]"
                  : ""
              }`}
            />
          </button>
          <button
            onClick={() => handleSwitch("dune")}
            className="w-full h-full p-0.5"
            aria-label="Dune mode"
          >
            <div
              className={`w-full h-full transition-colors duration-200 ${
                theme !== "dune"
                  ? "border-2 border-white rounded-full hover:border-[#FF8C39]"
                  : ""
              }`}
            />
          </button>
          <button
            onClick={() => handleSwitch("forest")}
            className="w-full h-full p-0.5"
            aria-label="Forest mode"
          >
            <div
              className={`w-full h-full transition-colors duration-200 ${
                theme !== "forest"
                  ? "border-2 border-white rounded-full hover:border-[#13AE70]"
                  : ""
              }`}
            />
          </button>
        </div>

        <motion.div
          className="absolute w-8 h-8 rounded-full shadow-md border-2 border-foreground"
          animate={{
            x: switchPositions[position].x,
            y: switchPositions[position].y,
            backgroundColor: switchColors[position],
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        />
      </div>
    </div>
  );
}
