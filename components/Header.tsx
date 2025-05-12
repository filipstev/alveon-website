"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ];

  const headerVariants = {
    initial: {
      backgroundColor: "rgba(28, 31, 68, 1)",
      height: "80px",
    },
    scrolled: {
      backgroundColor: "rgba(28, 31, 68, 0.9)",
      backdropFilter: "blur(10px)",
      height: "70px",
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 text-white"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src={"/logoo.png"}
            alt="Alveon Logo"
            className="object-left"
            width={120}
            height={40}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-medium hover:text-blue-300 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-900/20"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 top-[70px] bg-[#1C1F44] z-40 md:hidden"
      >
        <div className="container mx-auto px-4 py-6">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xl font-medium text-white hover:text-blue-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="mt-8 w-full border-blue-400 text-blue-400 hover:bg-blue-900/20"
          >
            Get Started
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
