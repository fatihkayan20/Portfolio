"use client";

import { experiences } from "@/app/(home)/data/experiences";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {exp.date}
                </p>
              </div>
              <div className="w-full md:w-3/4 md:pl-8 border-l border-gray-300 dark:border-gray-700 gap-3 flex flex-col">
                {exp.descriptions.map((description, index) => (
                  <p
                    key={index}
                    className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap"
                  >
                    • {description}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
