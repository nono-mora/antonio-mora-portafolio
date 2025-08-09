import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WaveDivider from "../components/WaveDivider";
import TimelineSection from "../components/TimelineSection";

import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTop";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Wave Divider */}
      <WaveDivider />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
