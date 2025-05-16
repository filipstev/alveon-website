"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Client component for the animated text
function AnimatedText() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Adapt", "Automate", "Accelerate"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
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
  );
}

function CTAButton() {
  return (
    <Link
      href="/#contact"
      className="inline-flex items-center justify-center h-12 px-8 rounded-lg font-medium transition-colors bg-secondary text-white hover:bg-secondary/80"
    >
      Get In Touch
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  );
}

export function HeroContent() {
  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <AnimatedText />
        <span className="text-secondary">Grow with Alveon.</span>
      </motion.h1>

      <motion.p
        className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-8 max-w-2xl mx-auto md:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        We understand AI can feel overwhelming, so we help others cut through
        the noise. From 24/7 chatbots to custom automations, AI consulting,
        content creation, and scalable digital products, we make intelligent
        systems that actually work for you.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <CTAButton />
      </motion.div>
    </motion.div>
  );
}
