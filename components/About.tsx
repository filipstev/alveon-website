"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import HexagonPattern from "./HexagonPattern";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      <HexagonPattern />
      <div className="container-standard relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why We're Building <span className="text-secondary">Alveon</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Making AI practical and accessible for businesses of all sizes, one
            implementation at a time.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-2xl border border-primary/10 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    Our Story
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    As AI practitioners with years of experience in enterprise
                    automation, we saw firsthand how businesses struggled to
                    implement AI solutions. We founded Alveon to bridge this
                    gap—making AI practical, accessible, and results-driven.
                  </p>
                  <div className="flex items-center gap-2 text-secondary">
                    <CheckCircle2 size={20} />
                    <span className="font-medium">OpenAI Partner</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    We believe that AI should be a tool that empowers
                    businesses, not a complex technology that creates barriers.
                    Our mission is to democratize AI implementation, making it
                    accessible to companies of all sizes while delivering
                    measurable results.
                  </p>
                  <div className="flex items-center gap-2 text-secondary">
                    <CheckCircle2 size={20} />
                    <span className="font-medium">
                      Results-Focused Approach
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 pt-12 border-t border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-secondary" size={24} />
                <h4 className="text-xl font-semibold text-primary">
                  Our Vision
                </h4>
              </div>
              <p className="text-xl text-gray-600">
                We envision a future where AI is not just a buzzword, but a
                practical tool that every business can leverage to grow and
                succeed. Through our work, we're making this vision a
                reality—one implementation at a time.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
