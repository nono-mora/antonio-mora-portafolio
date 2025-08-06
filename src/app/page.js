import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTop";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
