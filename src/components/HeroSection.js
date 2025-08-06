"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const containerRef = useRef();
  const canvasRef = useRef();
  const [currentLang, setCurrentLang] = useState("en");

  const content = {
    en: {
      name: "Antonio Mora",
      role: "Full Stack Developer",
      description:
        "Experienced developer building scalable web applications and robust backend systems. Seeking opportunities to contribute to innovative teams with modern technologies.",
      experience: "1+ Years Experience",
      location: "Remote / On-site",
      status: "Open to Work",
      downloadCV: "Download CV",
      contact: "Contact Me",
      scroll: "Explore More",
    },
    es: {
      name: "Antonio Mora",
      role: "Desarrollador Full Stack",
      description:
        "Desarrollador experimentado construyendo aplicaciones web escalables y sistemas backend robustos. Buscando oportunidades para contribuir a equipos innovadores con tecnologías modernas.",
      experience: "1+ Años de Experiencia",
      location: "Remoto / Presencial",
      status: "Disponible para Trabajar",
      downloadCV: "Descargar CV",
      contact: "Contactarme",
      scroll: "Explorar Más",
    },
  };

  const currentContent = content[currentLang];

  // Animación de partículas en el fondo
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;
    const connectionDistance = 150;
    const mouse = { x: null, y: null, radius: 100 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX * 0.3;
        this.y += this.speedY * 0.3;

        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            this.x -= directionX * force * 3;
            this.y -= directionY * force * 3;
          }
        }

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 191, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.strokeStyle = `rgba(0, 191, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setCurrentLang(savedLang);
    const handleStorageChange = (e) => {
      if (e.key === "language") setCurrentLang(e.newValue || "en");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Antonio_Mora_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-screen bg-primary-dark flex items-center justify-center overflow-hidden"
      >
        {/* Partículas: solo visibles en sm+ */}
        <canvas
          ref={canvasRef}
          className="hidden sm:block absolute inset-0 pointer-events-none"
          style={{ mixBlendMode: "screen", zIndex: 0 }}
        />

        {/* Card principal */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-dark/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 opacity-90">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-center lg:text-left">
              {/* IZQUIERDA: TEXTO */}
              <div className="flex flex-col items-center lg:items-start space-y-6">
                <div className="status-badge">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 border border-primary-blue/30 rounded-full">
                    <span className="material-icons text-primary-blue text-sm">
                      work
                    </span>
                    <span className="text-primary-blue font-roboto text-sm font-medium">
                      {currentContent.status}
                    </span>
                  </div>
                </div>

                <div className="hero-name">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-primary-white leading-tight">
                    Antonio
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-primary-blue leading-tight">
                    Mora
                  </h1>
                </div>

                <div className="hero-role">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-poppins font-medium text-primary-gray">
                    {currentContent.role}
                  </h2>
                </div>

                <p className="text-primary-gray font-roboto leading-relaxed max-w-md text-base sm:text-lg">
                  {currentContent.description}
                </p>

                <div className="hero-buttons flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-poppins hover:bg-blue-500 transition-all duration-300 text-sm sm:text-base"
                  >
                    <span className="material-icons text-lg">download</span>
                    {currentContent.downloadCV}
                  </button>
                  <button
                    onClick={handleContact}
                    className="flex items-center justify-center gap-2 border-2 border-primary-gray text-primary-gray px-6 py-3 rounded-lg font-poppins hover:border-primary-white hover:text-primary-white transition-all duration-300 text-sm sm:text-base"
                  >
                    <span className="material-icons text-lg">email</span>
                    {currentContent.contact}
                  </button>
                </div>
              </div>

              {/* DERECHA: Ilustración */}
              <div className="hidden lg:flex justify-center items-center">
                <img
                  src="/hero-illustration.svg"
                  alt="Illustration"
                  className="max-w-md w-full h-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
