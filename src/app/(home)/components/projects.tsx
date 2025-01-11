"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/(home)/data/projects";
import { ProjectTag } from "@/app/(home)/data/project-tag";
import { useQueryState } from "nuqs";
import { useEffect } from "react";

const projectTags = ["All", ...Object.values(ProjectTag)];

export const Projects = () => {
  const [filter, setFilter] = useQueryState("filter", {
    defaultValue: "All",
    parse: (value) => (projectTags.includes(value) ? value : "All"),
  });

  useEffect(() => {
    if (filter !== "All") {
      window.location.hash = "projects";
    }
  }, [filter]);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.includes(filter as ProjectTag)
        );

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projectTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag === "All" ? null : tag)}
              className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full transition-colors ${
                filter === tag
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between ">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
