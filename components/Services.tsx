"use client";

import React, { useState } from "react";
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
import Image from "next/image";

const services = [
  {
    title: "AI Chatbots",
    description:
      "Custom chatbots trained on your business data to provide 24/7 support to your customers.",
    icon: <Bot className="w-10 h-10 text-blue-400" />,
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks and workflows to increase efficiency and reduce human error.",
    icon: <Cpu className="w-10 h-10 text-blue-400" />,
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
  },
  {
    title: "AI Strategy Consulting",
    description:
      "Expert guidance on integrating AI into your business operations and strategy.",
    icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Custom ML models designed to solve your specific business challenges.",
    icon: <Brain className="w-10 h-10 text-blue-400" />,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
  },
  {
    title: "Data Analysis",
    description:
      "Extract meaningful insights from your data to drive better business decisions.",
    icon: <FileSpreadsheet className="w-10 h-10 text-blue-400" />,
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
  },
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our AI <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            We build intelligent solutions that transform how businesses operate
            and engage with customers.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          <div className="space-y-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`p-4 cursor-pointer transition-all duration-300 rounded-lg shadow-sm hover:shadow-md border ${
                    activeService === index
                      ? "border-blue-400 bg-blue-50 scale-[1.01]"
                      : "border-transparent bg-white hover:border-blue-200"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        activeService === index ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                variant="outline"
                className="group mt-4 border-blue-400 text-blue-400 hover:bg-blue-50 w-full sm:w-auto text-sm"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <div className="relative h-full">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  activeService === index
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 ${
                  activeService === index ? "z-10" : "z-0"
                }`}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        activeService === index ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <Button
                        variant="primary"
                        className="bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
