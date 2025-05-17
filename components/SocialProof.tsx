"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import WavePattern from "./WavePattern";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const SocialProof: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-32 bg-primary/5 overflow-hidden">
      <WavePattern />
      <div className="container-standard relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results, <span className="text-secondary">Real Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses are transforming their operations with AI-powered
            solutions
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Quote className="text-secondary" size={24} />
                  <h3 className="text-2xl font-semibold text-primary">
                    Client Success Stories
                  </h3>
                </div>
                <div className="space-y-8">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <p className="text-gray-600 text-lg italic mb-6">
                        "Alveon's AI assistant reduced our support ticket
                        response time by 40% in just two weeks. The team's
                        expertise in implementation made all the difference."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">
                          JD
                        </div>
                        <div>
                          <p className="font-medium text-primary text-lg">
                            John Doe
                          </p>
                          <p className="text-gray-500">Early Adopter Client</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <p className="text-gray-600 text-lg italic mb-6">
                        "The automation workflow they built saved us 15 hours
                        per week on routine tasks. Their approach to AI
                        implementation is truly revolutionary."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">
                          JS
                        </div>
                        <div>
                          <p className="font-medium text-primary text-lg">
                            Jane Smith
                          </p>
                          <p className="text-gray-500">
                            Pilot Program Participant
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="text-secondary" size={24} />
                <h3 className="text-2xl font-semibold text-primary">
                  Industry Impact
                </h3>
              </div>
              <div className="space-y-8">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-md font-bold text-secondary">
                        30%
                      </span>
                    </div>
                    <div>
                      <h5 className="font-medium text-primary text-xl mb-3">
                        Cost Reduction
                      </h5>
                      <p className="text-gray-600 text-lg">
                        Businesses that automate repetitive tasks see a 30%
                        reduction in support costs
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-md font-bold text-secondary">
                        80%
                      </span>
                    </div>
                    <div>
                      <h5 className="font-medium text-primary text-xl mb-3">
                        Efficiency Boost
                      </h5>
                      <p className="text-gray-600 text-lg">
                        AI-powered customer service can handle up to 80% of
                        routine inquiries
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-md font-bold text-secondary">
                        40%
                      </span>
                    </div>
                    <div>
                      <h5 className="font-medium text-primary text-xl mb-3">
                        Customer Satisfaction
                      </h5>
                      <p className="text-gray-600 text-lg">
                        Companies using AI automation report 40% higher customer
                        satisfaction
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
          >
            Book a Free Discovery Call
            <ArrowRight size={20} />
          </a>
          <p className="text-gray-500 mt-4">
            Let's discuss how AI can transform your business
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
