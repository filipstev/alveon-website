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
    <section id="process" className="py-32 bg-white overflow-hidden">
      <div className="container-standard">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-400">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to delivering AI solutions that drive real
            business value.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line with animation */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100 hidden lg:block"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="relative"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  {/* Left side (even) or Right side (odd) */}
                  <motion.div
                    className={`lg:col-span-1 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:order-2"
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                      <div className="flex flex-col h-full">
                        <motion.div
                          className="p-3 rounded-xl bg-blue-50 w-fit mb-6 group-hover:bg-blue-100 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {step.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-base text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center dot with animation */}
                  <motion.div
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-400 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-blue-400 font-bold text-lg">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Mobile dot with animation */}
                  <motion.div
                    className="lg:hidden absolute -left-4 top-8 w-8 h-8 bg-white rounded-full border-4 border-blue-400 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-blue-400 font-bold text-sm">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Empty space for layout */}
                  <div className="hidden lg:block lg:col-span-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
