"use client";

import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "Alveon helped us implement an AI solution that increased our operational efficiency by 47% and reduced costs by 28%. Their expertise and approach are unmatched in the industry.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechNova Inc.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    quote:
      "The predictive analytics system developed by Alveon has transformed how we make strategic decisions. We're now able to anticipate market trends with remarkable accuracy.",
    author: "Michael Chen",
    position: "Director of Analytics",
    company: "Global Finance Group",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    quote:
      "What sets Alveon apart is their ability to translate complex AI capabilities into practical business solutions. They understand both the technology and our industry deeply.",
    author: "Elena Rodriguez",
    position: "VP of Innovation",
    company: "Healthcare Partners",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  image,
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className="inline-block text-yellow-400 mr-1"
            fill="#FACC15"
          />
        ))}
      </div>

      <blockquote className="text-gray-700 italic mb-6 flex-grow">
        "{quote}"
      </blockquote>

      <div className="flex items-center mt-auto">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-gray-600 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="What Our Clients Say" subtitle="Testimonials" />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Testimonial {...testimonial} />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 mr-4 hover:bg-blue-50 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-50 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
