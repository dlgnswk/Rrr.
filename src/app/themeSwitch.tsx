"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<
    "skyblue" | "light" | "dune" | "forest"
  >("skyblue");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme) {
      setPosition(theme as "skyblue" | "light" | "dune" | "forest");
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const switchPositions = {
    skyblue: { x: 0, y: 0 },
    light: { x: "calc(80px - 36px - 8px)", y: 0 },
    dune: { x: 0, y: "calc(80px - 36px - 8px)" },
    forest: { x: "calc(80px - 36px - 8px)", y: "calc(80px - 36px - 8px)" },
  };

  const switchColors = {
    skyblue: "#74BDE8",
    light: "#FFFFFF",
    dune: "#FF8C39",
    forest: "#13AE70",
  };

  const handleSwitch = (
    newPosition: "skyblue" | "light" | "dune" | "forest"
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
              className={`w-full h-full transition-colors duration-200 rounded-full border-2 ${
                theme === "skyblue"
                  ? ""
                  : theme === "light"
                  ? "border-[#C8C8C8] hover:border-[#74BDE8]"
                  : "border-white hover:border-[#74BDE8]"
              }`}
            />
          </button>
          <button
            onClick={() => handleSwitch("light")}
            className="w-full h-full p-0.5"
            aria-label="Light mode"
          >
            <div
              className={`w-full h-full transition-colors duration-200 rounded-full border-2 ${
                theme === "light"
                  ? ""
                  : "border-[#FFFFFF] hover:border-[#2F2F2F]"
              }`}
            />
          </button>
          <button
            onClick={() => handleSwitch("dune")}
            className="w-full h-full p-0.5"
            aria-label="Dune mode"
          >
            <div
              className={`w-full h-full transition-colors duration-200 rounded-full border-2 ${
                theme === "dune"
                  ? ""
                  : theme === "light"
                  ? "border-[#C8C8C8] hover:border-[#FF8C39]"
                  : "border-white hover:border-[#FF8C39]"
              }`}
            />
          </button>
          <button
            onClick={() => handleSwitch("forest")}
            className="w-full h-full p-0.5"
            aria-label="Forest mode"
          >
            <div
              className={`w-full h-full transition-colors duration-200 rounded-full border-2 ${
                theme === "forest"
                  ? ""
                  : theme === "light"
                  ? "border-[#C8C8C8] hover:border-[#13AE70]"
                  : "border-white hover:border-[#13AE70]"
              }`}
            />
          </button>
        </div>

        <motion.div
          className="absolute w-8 h-8 rounded-full shadow-md border-2 border-foreground"
          animate={{
            x: switchPositions[position]?.x ?? 0,
            y: switchPositions[position]?.y ?? 0,
            backgroundColor: switchColors[position] ?? switchColors.skyblue,
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
