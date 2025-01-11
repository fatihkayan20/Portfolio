"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiExpo } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <Image
              src="https://avatars.githubusercontent.com/u/62346582?v=4"
              alt="Fatih Kayan"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3"
          >
            <p className="text-lg mb-4">
              I&apos;m a passionate Software Engineer with over 3 years of
              experience in frontend, backend, and mobile development. I
              specialize in creating robust, scalable applications and
              delivering exceptional user experiences. Skilled in modern
              technologies like Next.js, React, React Native, and Expo, I focus
              on writing high-quality code that enhances performance and
              usability.
            </p>
            <p className="text-lg mb-4">
              I have successfully led code refactoring initiatives, achieving a
              20% reduction in application loading time, and developed a
              healthcare application using FHIR standards to improve data
              exchange efficiency. My expertise lies in building innovative
              solutions using cutting-edge technologies to meet user needs and
              industry standards.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <FaReact className="text-4xl text-blue-500" />
              <TbBrandNextjs className="text-4xl" />
              <SiTypescript className="text-4xl text-blue-600" />
              <FaNodeJs className="text-4xl text-green-500" />
              <SiExpo className="text-4xl" />
            </div>
            <p className="text-lg italic">
              Fun fact: In my free time, I enjoy playing football.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
