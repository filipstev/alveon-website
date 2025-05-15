"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import HexagonPattern from "./HexagonPattern";
import WavePattern from "./WavePattern";
import Link from "next/link";
import ModelViewerClient from "./ModelViewerClient";

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Adapt", "Automate", "Accelerate"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-[#19234B] text-white overflow-hidden pt-20 md:pt-24 lg:pt-20 pb-16 md:pb-24"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="hidden sm:block absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="hidden sm:block absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600 blur-3xl"></div>
        {/* Hexagonal Pattern */}
        <div className="opacity-60">
          <HexagonPattern />
        </div>
      </div>

      <div className="container-standard flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-12 pb-0 lg:py-12 xl:py-8">
        {/* Left Column - Text Content */}
        <motion.div
          className="w-full flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-[1.2em] relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 right-0"
                >
                  {words[currentWord]}.
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-blue-400">Grow with Alveon.</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-8 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We understand AI can feel overwhelming, so we help others cut
            through the noise. From 24/7 chatbots to custom automations, AI
            consulting, content creation, and scalable digital products, we make
            intelligent systems that actually work for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg font-medium transition-colors bg-blue-500 text-white hover:bg-blue-600"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Image (desktop only) */}
        <motion.div
          className="w-full max-w-[200px] md:max-w-[40%] xl:max-w-[480px] items-center justify-center min-w-0 flex mt-[-40px] md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative w-full aspect-[3/4]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ModelViewerClient />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <WavePattern />
    </section>
  );
};

export default Hero;
