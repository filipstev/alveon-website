"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  ArrowRight,
  FileSpreadsheet,
  BarChart3,
  Bot,
  Cpu,
  Pen,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Chatbots & AI Assistants",
    subtitle: "Available 24/7. Always learning. Never tired.",
    description:
      "Whether it's customer support or lead generation, we build bots that work like part of your team.",
    icon: <Bot className="w-8 h-8 text-secondary" />,
    slug: "chatbots-ai-assistants",
  },
  {
    title: "AI Automation",
    subtitle:
      "Let machines handle the busywork, so your team can focus on growth.",
    description:
      "We design custom automations that eliminate repetitive tasks and free up time.",
    icon: <Cpu className="w-8 h-8 text-secondary" />,
    slug: "ai-automation",
  },
  {
    title: "AI Consulting",
    subtitle: "Not sure where to start? Let's map the way.",
    description:
      "We help teams identify real AI opportunities, align with business goals, and build smarter strategies.",
    icon: <BarChart3 className="w-8 h-8 text-secondary" />,
    slug: "ai-consulting",
  },
  {
    title: "Education & Training",
    subtitle: "Empower your team with AI skills that stick.",
    description:
      "From workshops to 1-on-1 sessions, we turn confusion into confidence with understandable, practical guidance.",
    icon: <FileSpreadsheet className="w-8 h-8 text-secondary" />,
    slug: "education-training",
  },
  {
    title: "Content Creation with AI",
    subtitle: "Create more. Think less. Stay on brand.",
    description:
      "Generate high-quality content for your business to improve your SEO and engage with customers.",
    icon: <Pen className="w-8 h-8 text-secondary" />,
    slug: "content-creation-ai",
  },
  {
    title: "Custom Digital Solutions",
    subtitle: "Have a wild idea? We'll help build it.",
    description:
      "From tailored AI tools to full-stack apps and websites, we co-create digital systems that solve real problems and scale with your business.",
    icon: <Brain className="w-8 h-8 text-secondary" />,
    slug: "custom-digital-solutions",
  },
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="container-standard">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our AI <span className="text-secondary">Services</span>
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
                    <motion.div
                      animate={{ y: 0 }}
                      whileHover={{ y: 0 }}
                      className="group-hover:animate-[float_1s_ease-in-out_infinite]"
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 italic">
                    {service.subtitle}
                  </p>
                  <p className="text-base text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center w-full h-10 px-6 rounded-lg font-medium transition-colors border border-secondary text-secondary hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
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
