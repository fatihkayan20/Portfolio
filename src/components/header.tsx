"use client";

import { ThemeToggleButton } from "@/components/theme-toggle-button";

export const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">FK</h1>
        <nav className="hidden md:flex space-x-4">
          <a
            href="#about"
            className="text-gray-700 dark:text-white hover:text-blue-500 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            Experience
          </a>
        </nav>
        <ThemeToggleButton />
      </div>
    </header>
  );
};
