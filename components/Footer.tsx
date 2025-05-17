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
        {
          label: "Chatbots & AI Assistants",
          href: "/services/chatbots-ai-assistants",
        },
        { label: "AI Automation", href: "/services/ai-automation" },
        { label: "AI Consulting", href: "/services/ai-consulting" },
        { label: "Education & Training", href: "/services/education-training" },
        {
          label: "Content Creation with AI",
          href: "/services/content-creation-ai",
        },
        {
          label: "Custom Digital Solutions",
          href: "/services/custom-digital-solutions",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
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
    <footer className="bg-primary text-white py-12 relative">
      <WavePattern flipped />
      <div className="opacity-8">
        <HexagonPattern />
      </div>
      <div className="container-standard relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 pt-20">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Image
              src={"/logo.png"}
              alt="Alveon Logo"
              className="mb-4"
              width={90}
              height={24}
            />
            <p className="text-gray-300 mb-6 max-w-xs">
              A smarter hive for your workflows, agents, and automation.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-gray-300 hover:bg-secondary hover:text-white transition-all duration-300"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
