"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "./Button";

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
    <section className="py-32 bg-white overflow-hidden">
      <div className="container-standard">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-3 rounded-xl bg-blue-50 mb-6">
            {service.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Description and Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Overview
              </h2>
              <p className="text-gray-600 mb-8">{service.description}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
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
          >
            <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Benefits
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Use Cases
              </h3>
              <ul className="space-y-3">
                {service.useCases.map((useCase, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{useCase}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you implement this solution for your
            business.
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
            className="bg-blue-500 hover:bg-blue-600"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
