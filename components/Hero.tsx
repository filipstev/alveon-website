"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import HexagonPattern from "./HexagonPattern";
import WavePattern from "./WavePattern";

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
      className="relative bg-[#19234B] text-white overflow-hidden min-h-[calc(100vh-80px)] pt-16 lg:pt-20"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600 blur-3xl"></div>

        {/* Hexagonal Pattern */}
        <div className="opacity-40">
          <HexagonPattern />
        </div>
      </div>

      <div className="container mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center">
        <div className="flex flex-col lg:flex-row items-center w-full gap-6 lg:gap-12">
          {/* Mobile Images */}
          <div className="lg:hidden w-full flex justify-center items-center gap-8 relative">
            <motion.div
              className="relative w-[140px] aspect-[3/4]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-full h-full"
              >
                <Image
                  src="/pcelica.png"
                  alt="Alveon AI Visualization"
                  className="object-contain  scale-x-[-1]"
                  fill
                  priority
                  sizes="140px"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="relative w-[140px] aspect-[3/4]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <Image
                  src="/pcelica.png"
                  alt="Alveon AI Visualization"
                  className="object-contain "
                  fill
                  priority
                  sizes="140px"
                />
              </motion.div>
            </motion.div>

            {/* Connecting Line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-0.5 bg-blue-400/30"></div>
          </div>

          {/* Left Column - Text Content */}
          <motion.div
            className="flex-1 lg:pr-10 text-center lg:text-left mb-4 lg:mb-0"
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
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We were overwhelmed by AI once too, so we help others cut through
              the noise. From 24/7 chatbots to custom automations, AI
              consulting, content creation, and scalable digital products, we
              make intelligent systems that actually work for you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="bg-blue-500 hover:bg-blue-600"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div
            className="flex-1 w-full hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative z-10 w-full max-w-[500px] xl:max-w-[600px] aspect-[3/4]"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/pcelica.png"
                alt="Alveon AI Visualization"
                className="object-contain"
                fill
                priority
                sizes="(min-width: 1280px) 600px, 500px"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <WavePattern />
    </section>
  );
};

export default Hero;
