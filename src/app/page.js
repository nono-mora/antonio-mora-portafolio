import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTop";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-primary-white"
      >
        <div className="text-center">
          <h2 className="text-4xl font-poppins font-bold text-primary-dark mb-4">
            About Section
          </h2>
          <p className="text-lg text-primary-gray font-roboto">
            Esta sección se desarrollará en la siguiente iteración
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
