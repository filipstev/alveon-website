import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/Process";
import Services from "@/components/Services";
import About from "@/components/About";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      {/* <About /> */}
      <Services />
      <SocialProof />
      <ProcessSection />
      <Contact />
    </div>
  );
}
