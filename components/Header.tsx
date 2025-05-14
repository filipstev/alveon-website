"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: "Home", href: "/#hero" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
  ];

  const headerVariants = {
    initial: {
      backgroundColor: "var(--primary)",
      height: "80px",
    },
    scrolled: {
      backgroundColor: "var(--primary)",
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
      className="fixed top-0 left-0 z-50 w-full text-white"
    >
      <div className="container-standard h-full flex items-center justify-between relative w-full">
        <Link href="/" className="flex relative items-center ">
          <Image src={"/logo.png"} alt="Alveon Logo" height={20} width={90} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-base font-medium hover:text-blue-300 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center h-10 px-6 rounded-lg font-medium transition-colors border border-secondary text-secondary hover:bg-secondary/10"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-blue-900/20 rounded-lg transition-colors"
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
          className="absolute top-full left-0 w-full bg-primary md:hidden"
        >
          <div className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.li key={item.label} variants={menuItemVariants}>
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-white hover:text-blue-300 transition-colors block py-3 px-4 rounded-lg hover:bg-blue-900/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={menuItemVariants} className="mt-6">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center w-full h-10 px-6 rounded-lg font-medium transition-colors border border-secondary text-secondary hover:bg-secondary/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
