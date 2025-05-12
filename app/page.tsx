import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <Services />
      <ProcessSection />
      <Contact />
      <Footer />
    </div>
  );
}
