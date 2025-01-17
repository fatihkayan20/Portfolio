import { Hero } from "@/app/(home)/components/hero";
import { Experience } from "@/app/(home)/components/experience";
import { Projects } from "@/app/(home)/components/projects";
import { About } from "@/app/(home)/components/about";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 w-screen overflow-hidden">
      <Hero />

      <About />
      <Suspense>
        <Projects />
      </Suspense>

      <Experience />
    </main>
  );
}
