"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import Particles from "@/app/(home)/components/particles";
import { SocialLinks } from "@/app/(home)/data/social-links";

const words = ["Web", "Mobile", "Full Stack"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="text-center z-10 text-white max-w-4xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I&apos;m Fatih Kayan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          A Software Engineer specializing in innovative solutions, with
          expertise in{" "}
          <motion.span
            key={currentWord}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-bold text-yellow-300 w-32  "
          >
            {words[currentWord]}
          </motion.span>{" "}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-x-4 mb-8"
        >
          <a
            href="#projects"
            className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors"
          >
            View My Projects
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a
            href={SocialLinks.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href={SocialLinks.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href={SocialLinks.Medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-300 transition-colors"
          >
            <FaMedium />
          </a>
        </motion.div>
      </div>
      <Particles />
    </section>
  );
}
