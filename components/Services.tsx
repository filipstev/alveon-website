"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Code,
  BarChart,
  Globe,
  ShieldCheck,
  Database,
  ArrowRight,
  FileSpreadsheet,
  BarChart3,
  Bot,
  Cpu,
} from "lucide-react";
import Button from "./Button";

const services = [
  {
    title: "AI Chatbots",
    description:
      "Custom chatbots trained on your business data to provide 24/7 support to your customers.",
    icon: <Bot className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "AI Strategy Consulting",
    description:
      "Expert guidance on integrating AI into your business operations and strategy.",
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Custom ML models designed to solve your specific business challenges.",
    icon: <Brain className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Data Analysis",
    description:
      "Extract meaningful insights from your data to drive better business decisions.",
    icon: <FileSpreadsheet className="w-8 h-8 text-blue-400" />,
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our AI <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We build intelligent solutions that transform how businesses operate
            and engage with customers.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl h-full group">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-xl bg-blue-50 w-fit mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-400 text-blue-400 hover:bg-blue-50 text-base"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
