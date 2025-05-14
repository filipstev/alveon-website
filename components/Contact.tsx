"use client";

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import HexagonPattern from "./HexagonPattern";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      details: "info@alveon.ai",
      link: "mailto:info@alveon.ai",
    },
    {
      icon: <Phone size={20} />,
      title: "Call Us",
      details: "Coming Soon",
      link: "#",
    },
    {
      icon: <MapPin size={20} />,
      title: "Visit Us",
      details: "Coming Soon",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 hidden lg:block"></div>

      <div className="container-standard relative z-10">
        <SectionTitle
          title="Contact Us"
          subtitle="Let's Build Your AI Solution Together"
        />

        <div className="flex flex-col lg:flex-row mt-16 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            className="lg:w-7/12 bg-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Send us a message
            </h3>

            {isSubmitted ? (
              <motion.div
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formState.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <Button
                  variant="primary"
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600"
                  icon={<Send size={16} />}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="lg:w-5/12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#19234B] text-white rounded-xl p-8 relative overflow-hidden">
              <div className="opacity-5">
                <HexagonPattern />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-300 mb-1">
                          {item.title}
                        </h4>
                        <a
                          href={item.link}
                          className="text-lg text-white hover:text-blue-300 transition-colors"
                        >
                          {item.details}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
