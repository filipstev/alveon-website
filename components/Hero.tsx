"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

const Hero: React.FC = () => {
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
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 28.87V86.6L50 115.47L0 86.6V28.87L50 0z' fill='none' stroke='%23ffffff' stroke-width='2' stroke-opacity='0.3'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
              opacity: 0.3,
              transform: "rotate(30deg)",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center">
        <div className="flex flex-col lg:flex-row items-center w-full gap-6 lg:gap-12">
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
              Transforming Business <br className="hidden sm:block" />
              <span className="text-blue-400">With AI Innovation</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Alveon helps enterprises harness the power of artificial
              intelligence to drive growth, efficiency, and competitive
              advantage through cutting-edge solutions tailored to your needs.
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
                Get Started
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

          {/* Right Column - Image */}
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
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] md:h-[100px] lg:h-[120px] text-gray-50 fill-current"
        >
          <path d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
