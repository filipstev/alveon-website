"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import ModelViewerClient from "./ModelViewerClient";

function CTAButton() {
  return (
    <Link
      href="/#contact"
      className="inline-flex items-center justify-center h-12 px-8 rounded-lg font-medium transition-colors bg-secondary text-white hover:bg-secondary/80"
    >
      Get In Touch
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  );
}

export function HeroContent() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0 animate-fade-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6 animate-fade-up [animation-delay:100ms]">
          <AnimatedText />
          <span className="text-secondary">Grow with Alveon.</span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-4 md:mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-up [animation-delay:400ms]">
          We understand AI can feel overwhelming, so we help others cut through
          the noise. From 24/7 chatbots to custom automations, AI consulting,
          content creation, and scalable digital products, we make intelligent
          systems that actually work for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start animate-fade-up [animation-delay:600ms]">
          <CTAButton />
        </div>
      </div>
      <div className="w-full max-w-[200px] md:max-w-[40%] xl:max-w-[480px] items-center justify-center min-w-0 flex mt-[-40px] md:mt-0 animate-fade-up">
        <div className="relative w-full aspect-[3/4]">
          <ModelViewerClient />
        </div>
      </div>
    </>
  );
}
