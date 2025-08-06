import HeroSection from "../components/HeroSection";

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
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-primary-dark"
      >
        <div className="text-center">
          <h2 className="text-4xl font-poppins font-bold text-primary-white mb-4">
            Projects Section
          </h2>
          <p className="text-lg text-primary-gray font-roboto">
            Esta sección se desarrollará en futuras iteraciones
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-primary-white"
      >
        <div className="text-center">
          <h2 className="text-4xl font-poppins font-bold text-primary-dark mb-4">
            Contact Section
          </h2>
          <p className="text-lg text-primary-gray font-roboto">
            Esta sección se desarrollará en futuras iteraciones
          </p>
        </div>
      </section>
    </main>
  );
}
