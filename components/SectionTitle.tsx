import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: "left" | "center";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = "center",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const alignmentClasses =
    alignment === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div ref={ref} className={`max-w-3xl ${alignmentClasses}`}>
      <motion.span
        className="block text-blue-500 font-semibold mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="h-1 w-20 bg-blue-500 rounded-full mx-auto"
        initial={{ opacity: 0, width: 0 }}
        animate={inView ? { opacity: 1, width: 80 } : { opacity: 0, width: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ margin: alignment === "center" ? "0 auto" : "0" }}
      ></motion.div>
    </motion.div>
  );
};

export default SectionTitle;
