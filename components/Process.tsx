"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Search, Code, TestTube, Rocket } from "lucide-react";

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      title: "Discovery",
      description:
        "We begin by understanding your business needs, challenges, and goals through in-depth consultations and analysis.",
      icon: <Search className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Development",
      description:
        "Our team builds custom AI solutions tailored to your specific requirements, using cutting-edge technologies.",
      icon: <Code className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Testing",
      description:
        "Rigorous testing ensures your solution meets performance standards and delivers accurate results.",
      icon: <TestTube className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Deployment",
      description:
        "We implement your solution with minimal disruption and provide ongoing support and optimization.",
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-blue-400">Process</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            A systematic approach to delivering AI solutions that drive real
            business value.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg h-full">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-blue-50 w-fit mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
