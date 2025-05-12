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
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const headerVariants = {
    initial: {
      backgroundColor: "#19234B",
      height: "80px",
    },
    scrolled: {
      backgroundColor: "#19234B",
      backdropFilter: "blur(10px)",
      height: "70px",
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "-20px",
      display: "none",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
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
      {mobileMenuOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          className="absolute top-full left-0 w-full bg-[#19234B] md:hidden"
        >
          <div className="container mx-auto px-4 py-8">
            <ul className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <motion.li key={item.label} variants={menuItemVariants}>
                  <a
                    href={item.href}
                    className="text-xl font-medium text-white hover:text-blue-300 transition-colors block py-3 px-4 rounded-lg hover:bg-blue-900/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={menuItemVariants}>
              <Button
                variant="outline"
                className="mt-8 w-full border-blue-400 text-blue-400 hover:bg-blue-900/20"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
