import React from "react";
import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import HexagonPattern from "./HexagonPattern";
import WavePattern from "./WavePattern";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "AI Strategy", href: "#services" },
        { label: "Custom Development", href: "#services" },
        { label: "Predictive Analytics", href: "#services" },
        { label: "Natural Language Processing", href: "#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "White Papers", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR Compliance", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-[#19234B] text-white pt-16 pb-8 relative overflow-hidden">
      <WavePattern flipped />
      <div className="opacity-5">
        <HexagonPattern />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12 pt-20">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Image
              src={"/logoo.png"}
              alt="Alveon Logo"
              className="w-auto ml-[-20px]"
              width={100}
              height={100}
            />
            <p className="text-gray-300 mb-6 max-w-xs">
              Transforming the future with AI-powered solutions that drive
              innovation and business growth.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Alveon AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
