"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import HexagonPattern from "./HexagonPattern";
import Link from "next/link";
import WavePattern from "./WavePattern";

interface ServiceDetailsProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    benefits: string[];
    useCases: string[];
  };
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden pt-32 pb-24">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="hidden sm:block absolute top-10 left-10 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
          <div className="hidden sm:block absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600 blur-3xl"></div>
          <div className="opacity-60">
            <HexagonPattern />
          </div>
        </div>
        <WavePattern />

        <div className="container-standard relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-4 rounded-2xl bg-secondary/10 mb-8">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-standard">
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description and Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Overview
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {service.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start group"
                    >
                      <CheckCircle2 className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-600 text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Benefits and Use Cases */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start group"
                    >
                      <CheckCircle2 className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-600 text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Use Cases
                </h3>
                <ul className="space-y-4">
                  {service.useCases.map((useCase, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start group"
                    >
                      <CheckCircle2 className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-600 text-lg">{useCase}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <HexagonPattern />
              </div>
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                  Let's discuss how we can help you implement this solution for
                  your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-lg font-medium transition-colors bg-secondary text-white hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-lg font-medium transition-colors border border-white text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    View All Services
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
