import React from "react";
import dynamic from "next/dynamic";
import { HeroContent } from "@/components/HeroContent";
import { HeroBackground } from "@/components/HeroBackground";
import ModelViewerClient from "./ModelViewerClient";

export default function Hero() {
  return (
    <section
      className="relative bg-[#19234B] text-white overflow-hidden pt-20 md:pt-24 lg:pt-20 pb-16 md:pb-24"
      id="hero"
    >
      <HeroBackground />
      <div className="container-standard flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-12 pb-0 lg:py-12 xl:py-8">
        <HeroContent />
        <div className="w-full max-w-[200px] md:max-w-[40%] xl:max-w-[480px] items-center justify-center min-w-0 flex mt-[-40px] md:mt-0">
          <div className="relative w-full aspect-[3/4]">
            <ModelViewerClient />
          </div>
        </div>
      </div>
    </section>
  );
}
