"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";

export function ThemeDial() {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState<
    "skyblue" | "light" | "dune" | "forest"
  >("skyblue");

  const handleSwitch = (
    newPosition: "skyblue" | "light" | "dune" | "forest"
  ) => {
    setPosition(newPosition);
    setTheme(newPosition);
  };

  const switchPositions = {
    skyblue: 0,
    light: 90,
    dune: 180,
    forest: 270,
  };

  const switchColors = {
    skyblue: "#74BDE8",
    light: "#FFFFFF",
    dune: "#FF8C39",
    forest: "#13AE70",
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-40 h-40">
        <motion.div
          className="absolute w-full h-full rounded-full bg-gray-800"
          animate={{ rotate: switchPositions[position] }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
        <div className="absolute inset-0 flex justify-center items-center">
          {["skyblue", "light", "dune", "forest"].map((pos, index) => (
            <button
              key={pos}
              onClick={() =>
                handleSwitch(pos as "skyblue" | "light" | "dune" | "forest")
              }
              className="w-10 h-10 rounded-full"
              style={{
                backgroundColor: switchColors[pos as keyof typeof switchColors],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
