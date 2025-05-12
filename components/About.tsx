"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const keyPoints = [
    "Team of AI researchers and engineers with 10+ years of experience",
    "Proven track record with Fortune 500 companies",
    "Custom solutions tailored to your specific business needs",
    "Committed to ethical AI development and responsible deployment",
    "Continuous support and optimization of AI systems",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Alveon" subtitle="Your Trusted AI Partner" />

        <div className="flex flex-col lg:flex-row items-center mt-16 gap-12">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Pioneering AI Solutions <br />
              Since 2018
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              At Alveon, we combine cutting-edge AI technology with deep
              industry expertise to deliver transformative solutions that drive
              real business results. Our team of AI specialists, data
              scientists, and business consultants work together to understand
              your unique challenges and develop custom AI applications that
              provide measurable value.
            </p>

            <ul className="space-y-3">
              {keyPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <CheckCircle
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="lg:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <StatCard
              value="98%"
              label="Client Satisfaction"
              index={0}
              inView={inView}
            />
            <StatCard
              value="200+"
              label="Projects Completed"
              index={1}
              inView={inView}
            />
            <StatCard
              value="50+"
              label="AI Specialists"
              index={2}
              inView={inView}
            />
            <StatCard
              value="35%"
              label="Avg. Efficiency Gain"
              index={3}
              inView={inView}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  index: number;
  inView: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, index, inView }) => {
  return (
    <motion.div
      className="bg-[#19234B] rounded-lg p-6 text-center text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      <motion.h4
        className="text-4xl font-bold mb-2 text-blue-400"
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
      >
        {value}
      </motion.h4>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

export default About;
