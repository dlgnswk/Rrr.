"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const themeOrder = ["skyblue", "light", "dune", "forest"] as const;
type ThemeType = (typeof themeOrder)[number];

const switchColors = {
  skyblue: "#7DD3FC",
  light: "#FFFFFF",
  dune: "#FF8C39",
  forest: "#13AE70",
};

export function ThemeDial() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    const currentIndex = themeOrder.indexOf(theme as ThemeType);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setRotation((prev) => prev + 90);
    setTheme(themeOrder[nextIndex]);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="w-[80px] h-[80px] bg-[#FBF7F4] rounded-[20px] shadow-lg p-1.5">
        <button
          onClick={handleThemeChange}
          className="w-full h-full p-0.5"
          aria-label="Change theme"
        >
          <motion.div
            className="relative w-full h-full rounded-full bg-[#272727]"
            animate={{ rotate: rotation }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute z-10 w-2.5 h-2.5 rounded-full top-2 left-[42%] -translate-x-1/2"
              style={{
                backgroundColor: switchColors[theme as ThemeType],
              }}
              animate={{ rotate: -rotation }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
