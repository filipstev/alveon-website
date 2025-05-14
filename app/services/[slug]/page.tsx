"use client";

import React from "react";
import { useParams } from "next/navigation";
import ServiceDetails from "@/components/ServiceDetails";
import { Bot, Cpu, BarChart3, FileSpreadsheet, Pen, Brain } from "lucide-react";

const services = {
  "chatbots-ai-assistants": {
    title: "Chatbots & AI Assistants",
    subtitle: "Available 24/7. Always learning. Never tired.",
    description:
      "Whether it's customer support or lead generation, we build bots that work like part of your team.",
    icon: <Bot className="w-8 h-8 text-[#5FCBE8]" />,
    features: [
      "24/7 automated customer support",
      "Natural language understanding",
      "Multi-channel deployment",
      "Custom knowledge base integration",
      "Analytics and performance tracking",
      "Continuous learning and improvement",
    ],
    benefits: [
      "Reduce response time to seconds",
      "Handle multiple conversations simultaneously",
      "Lower operational costs",
      "Scale support without hiring",
      "Consistent service quality",
      "Gather valuable customer insights",
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification and nurturing",
      "FAQ handling and information retrieval",
      "Appointment scheduling",
      "Order status updates",
      "Technical support assistance",
    ],
  },
  "ai-automation": {
    title: "AI Automation",
    subtitle:
      "Let machines handle the busywork, so your team can focus on growth.",
    description:
      "We design custom automations that eliminate repetitive tasks and free up time.",
    icon: <Cpu className="w-8 h-8 text-[#5FCBE8]" />,
    features: [
      "Workflow automation",
      "Data processing and analysis",
      "Document handling",
      "Email automation",
      "Task scheduling",
      "Integration with existing tools",
    ],
    benefits: [
      "Reduce manual work by up to 80%",
      "Minimize human error",
      "Increase operational efficiency",
      "Lower operational costs",
      "Improve process consistency",
      "Enable 24/7 operations",
    ],
    useCases: [
      "Data entry and processing",
      "Report generation",
      "Email management",
      "Invoice processing",
      "Customer onboarding",
      "Inventory management",
    ],
  },
  "ai-consulting": {
    title: "AI Consulting",
    subtitle: "Not sure where to start? Let's map the way.",
    description:
      "We help teams identify real AI opportunities, align with business goals, and build smarter strategies.",
    icon: <BarChart3 className="w-8 h-8 text-[#5FCBE8]" />,
    features: [
      "AI readiness assessment",
      "Strategy development",
      "Technology selection",
      "Implementation planning",
      "ROI analysis",
      "Change management",
    ],
    benefits: [
      "Clear AI implementation roadmap",
      "Reduced implementation risks",
      "Optimized resource allocation",
      "Measurable business outcomes",
      "Competitive advantage",
      "Future-proof strategy",
    ],
    useCases: [
      "Digital transformation",
      "Process optimization",
      "Customer experience enhancement",
      "Product innovation",
      "Market analysis",
      "Risk management",
    ],
  },
  "education-training": {
    title: "Education & Training",
    subtitle: "Empower your team with AI skills that stick.",
    description:
      "From workshops to 1-on-1 sessions, we turn confusion into confidence with understandable, practical guidance.",
    icon: <FileSpreadsheet className="w-8 h-8 text-[#5FCBE8]" />,
    features: [
      "Customized training programs",
      "Hands-on workshops",
      "1-on-1 coaching",
      "Practical exercises",
      "Best practices sharing",
      "Ongoing support",
    ],
    benefits: [
      "Build in-house AI expertise",
      "Increase team confidence",
      "Foster innovation culture",
      "Improve tool adoption",
      "Reduce dependency on external help",
      "Stay current with AI trends",
    ],
    useCases: [
      "Team upskilling",
      "New tool implementation",
      "AI strategy execution",
      "Process improvement",
      "Innovation workshops",
      "Leadership development",
    ],
  },
  "content-creation-ai": {
    title: "Content Creation with AI",
    subtitle: "Create more. Think less. Stay on brand.",
    description:
      "Generate high-quality content for your business to improve your SEO and engage with customers.",
    icon: <Pen className="w-8 h-8 text-[#5FCBE8]" />,
    features: [
      "AI-powered content generation",
      "Brand voice consistency",
      "SEO optimization",
      "Multi-format content",
      "Content calendar management",
      "Performance analytics",
    ],
    benefits: [
      "Scale content production",
      "Maintain brand consistency",
      "Improve SEO rankings",
      "Reduce content creation time",
      "Increase engagement",
      "Optimize content strategy",
    ],
    useCases: [
      "Blog post creation",
      "Social media content",
      "Email marketing",
      "Product descriptions",
      "Technical documentation",
      "Newsletter content",
    ],
  },
  "custom-digital-solutions": {
    title: "Custom Digital Solutions",
    subtitle: "Have a wild idea? We'll help build it.",
    description:
      "From tailored AI tools to full-stack apps and websites, we co-create digital systems that solve real problems and scale with your business.",
    icon: <Brain className="w-8 h-8 text-[#5FCBE8]" />,
    features: [
      "Custom AI development",
      "Full-stack applications",
      "Web development",
      "API integration",
      "Cloud deployment",
      "Ongoing maintenance",
    ],
    benefits: [
      "Tailored to your needs",
      "Scalable architecture",
      "Modern tech stack",
      "Security best practices",
      "Performance optimization",
      "Future-proof solutions",
    ],
    useCases: [
      "Custom AI applications",
      "Business process automation",
      "Customer portals",
      "Internal tools",
      "Data analytics platforms",
      "E-commerce solutions",
    ],
  },
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
      </div>
    );
  }

  return <ServiceDetails service={service} />;
}
