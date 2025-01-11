"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 "
    >
      {theme === "dark" || !mounted ? (
        <FaSun className="w-5 h-5" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
    </motion.button>
  );
};
