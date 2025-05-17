"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedText() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Adapt", "Automate", "Accelerate"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 right-0"
        >
          {words[currentWord]}.
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
