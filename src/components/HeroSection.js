"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LanguageSwitcher from "./LanguageSwitcher";

// Registrar el hook para evitar discrepancias de versión de React
gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const containerRef = useRef();
  const [currentLang, setCurrentLang] = useState("en");

  // Animaciones GSAP usando el hook oficial
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Configuración inicial: todos los elementos empiezan ocultos
      gsap.set(
        [
          ".hero-title",
          ".hero-subtitle",
          ".hero-description",
          ".hero-cta",
          ".hero-scroll",
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Secuencia de animaciones
      tl.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .to(
          ".hero-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          ".hero-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          ".hero-cta",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          ".hero-scroll",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  ); // scope es opcional pero recomendado para performance

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setCurrentLang(savedLang);

    // Escuchar cambios en localStorage para actualizar el idioma
    const handleStorageChange = (e) => {
      if (e.key === "language") {
        setCurrentLang(e.newValue || "en");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const content = {
    en: {
      greeting: "Hi, I'm",
      name: "Antonio Mora",
      title: "Full Stack Developer",
      description:
        "I build scalable web applications and robust backend systems. Passionate about clean code, modern technologies, and creating solutions that make a difference.",
      cta: "View My Work",
      contact: "Get In Touch",
      scroll: "Scroll to explore",
    },
    es: {
      greeting: "Hola, soy",
      name: "Antonio Mora",
      title: "Desarrollador Full Stack",
      description:
        "Construyo aplicaciones web escalables y sistemas backend robustos. Apasionado por el código limpio, tecnologías modernas y crear soluciones que marquen la diferencia.",
      cta: "Ver Mi Trabajo",
      contact: "Contactar",
      scroll: "Desplázate para explorar",
    },
  };

  const currentContent = content[currentLang];

  const handleScroll = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-primary-dark via-primary-dark to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-blue opacity-5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 z-10">
        <LanguageSwitcher />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="hero-title">
            <p className="text-lg md:text-xl text-primary-gray font-roboto font-light tracking-wide">
              {currentContent.greeting}
            </p>
          </div>

          {/* Name */}
          <div className="hero-subtitle">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold text-primary-white leading-none tracking-tight">
              {currentContent.name}
            </h1>
          </div>

          {/* Title */}
          <div className="hero-subtitle">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-poppins font-medium text-primary-blue leading-tight">
              {currentContent.title}
            </h2>
          </div>

          {/* Description */}
          <div className="hero-description max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-primary-gray font-roboto leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative px-8 py-4 bg-primary-blue text-primary-white font-poppins font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/40 hover:-translate-y-1 hover:bg-blue-500">
              <span className="relative z-10">{currentContent.cta}</span>
            </button>

            <button className="group px-8 py-4 border-2 border-primary-white text-primary-white font-poppins font-medium rounded-lg transition-all duration-300 hover:bg-primary-white hover:text-primary-dark hover:-translate-y-1">
              {currentContent.contact}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleScroll}
          className="flex flex-col items-center gap-2 text-primary-gray hover:text-primary-blue transition-colors duration-300 group"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-roboto font-light tracking-wide">
            {currentContent.scroll}
          </span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
          </div>
        </button>
      </div>

      {/* Decorative Elements */}
    </section>
  );
};

export default HeroSection;
