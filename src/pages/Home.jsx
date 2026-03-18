import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import DifferentialsSection from "../components/landing/DifferentialsSection";
import ForWhoSection from "../components/landing/ForWhoSection";
import SystemExplainedSection from "../components/landing/SystemExplainedSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <ForWhoSection />
      <SystemExplainedSection />
      <ContactSection />
      <Footer />
    </div>
  );
}