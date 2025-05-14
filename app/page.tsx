import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Services />
      <ProcessSection />
      <Contact />
    </div>
  );
}
