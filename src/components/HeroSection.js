"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LanguageSwitcher from "./LanguageSwitcher";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const containerRef = useRef();
  const [currentLang, setCurrentLang] = useState("en");

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set(
        [
          ".status-badge",
          ".hero-name",
          ".hero-role",
          ".hero-buttons",
          ".hero-info",
          ".info-card",
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      tl.to(".status-badge", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3,
      })
        .to(
          ".hero-name",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .to(
          ".hero-role",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(
          ".hero-buttons",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .to(
          ".hero-info",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .to(
          ".info-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setCurrentLang(savedLang);

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
      name: "Antonio Mora",
      role: "Full Stack Developer",
      description:
        "Experienced developer building scalable web applications and robust backend systems. Seeking opportunities to contribute to innovative teams with modern technologies.",
      experience: "3+ Years Experience",
      location: "Remote / On-site",
      status: "Open to Work",
      viewWork: "View Portfolio",
      contact: "Contact Me",
      scroll: "Explore More",
    },
    es: {
      name: "Antonio Mora",
      role: "Desarrollador Full Stack",
      description:
        "Desarrollador experimentado construyendo aplicaciones web escalables y sistemas backend robustos. Buscando oportunidades para contribuir a equipos innovadores con tecnologías modernas.",
      experience: "3+ Años de Experiencia",
      location: "Remoto / Presencial",
      status: "Disponible para Trabajar",
      viewWork: "Ver Portafolio",
      contact: "Contactarme",
      scroll: "Explorar Más",
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
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <section
        ref={containerRef}
        className="relative min-h-screen bg-primary-dark flex items-center"
      >
        {/* Language Switcher */}
        <div className="absolute top-6 right-6 z-20">
          <LanguageSwitcher />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Status Badge */}
            <div className="status-badge text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 border border-primary-blue/30 rounded-full">
                <span className="material-icons text-primary-blue text-sm">
                  work
                </span>
                <span className="text-primary-blue font-roboto text-sm font-medium">
                  {currentContent.status}
                </span>
              </div>
            </div>

            {/* Name - Mobile */}
            <div className="hero-name text-center space-y-1">
              <h1 className="text-6xl sm:text-7xl font-poppins font-bold text-primary-white leading-none">
                Antonio
              </h1>
              <h1 className="text-6xl sm:text-7xl font-poppins font-bold text-primary-blue leading-none">
                Mora
              </h1>
            </div>

            {/* Role - Mobile */}
            <div className="hero-role text-center">
              <h2 className="text-2xl sm:text-3xl font-poppins font-medium text-primary-gray">
                {currentContent.role}
              </h2>
            </div>

            {/* Description - Mobile Compact */}
            <div className="px-4">
              <p className="text-primary-gray font-roboto leading-relaxed text-center">
                {currentContent.description}
              </p>
            </div>

            {/* Skills - Mobile */}
            <div className="flex flex-wrap justify-center gap-2 px-4">
              <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-medium rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-medium rounded-full">
                Node.js
              </span>
              <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-medium rounded-full">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-medium rounded-full">
                MongoDB
              </span>
            </div>

            {/* Buttons - Mobile */}
            <div className="hero-buttons flex flex-col gap-3 px-4">
              <button className="flex items-center justify-center gap-2 bg-primary-blue text-primary-white px-6 py-4 rounded-lg font-poppins font-medium hover:bg-blue-500 transition-all duration-300">
                <span className="material-icons text-lg">folder_open</span>
                {currentContent.viewWork}
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-primary-gray text-primary-gray px-6 py-4 rounded-lg font-poppins font-medium hover:border-primary-white hover:text-primary-white transition-all duration-300">
                <span className="material-icons text-lg">email</span>
                {currentContent.contact}
              </button>
            </div>

            {/* Quick Info - Mobile */}
            <div className="hero-info flex justify-center gap-8">
              <div className="flex items-center gap-2 text-primary-gray">
                <span className="material-icons text-primary-blue text-lg">
                  schedule
                </span>
                <span className="font-roboto text-sm">
                  {currentContent.experience}
                </span>
              </div>
              <div className="flex items-center gap-2 text-primary-gray">
                <span className="material-icons text-primary-blue text-lg">
                  location_on
                </span>
                <span className="font-roboto text-sm">
                  {currentContent.location}
                </span>
              </div>
            </div>

            {/* Scroll Indicator - Mobile */}
            <div className="text-center pt-4">
              <button
                onClick={handleScroll}
                className="flex items-center justify-center gap-2 text-primary-gray hover:text-primary-blue transition-colors duration-300 mx-auto"
              >
                <span className="font-roboto text-sm">
                  {currentContent.scroll}
                </span>
                <span className="material-icons">keyboard_arrow_down</span>
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-5 gap-16 items-center">
            {/* Left Content - Desktop */}
            <div className="col-span-3 space-y-6">
              {/* Status Badge */}
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

              {/* Name */}
              <div className="hero-name space-y-1">
                <h1 className="text-6xl xl:text-7xl font-poppins font-bold text-primary-white leading-none">
                  Antonio
                </h1>
                <h1 className="text-6xl xl:text-7xl font-poppins font-bold text-primary-blue leading-none">
                  Mora
                </h1>
              </div>

              {/* Role */}
              <div className="hero-role">
                <h2 className="text-2xl xl:text-3xl font-poppins font-medium text-primary-gray">
                  {currentContent.role}
                </h2>
              </div>

              {/* Buttons */}
              <div className="hero-buttons flex gap-4 pt-4">
                <button className="flex items-center justify-center gap-2 bg-primary-blue text-primary-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-blue-500 transition-all duration-300 hover:scale-105">
                  <span className="material-icons text-lg">folder_open</span>
                  {currentContent.viewWork}
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-primary-gray text-primary-gray px-6 py-3 rounded-lg font-poppins font-medium hover:border-primary-white hover:text-primary-white transition-all duration-300 hover:scale-105">
                  <span className="material-icons text-lg">email</span>
                  {currentContent.contact}
                </button>
              </div>

              {/* Quick Info */}
              <div className="hero-info flex gap-6 pt-4">
                <div className="flex items-center gap-2 text-primary-gray">
                  <span className="material-icons text-primary-blue text-lg">
                    schedule
                  </span>
                  <span className="font-roboto text-sm">
                    {currentContent.experience}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary-gray">
                  <span className="material-icons text-primary-blue text-lg">
                    location_on
                  </span>
                  <span className="font-roboto text-sm">
                    {currentContent.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Info Card Desktop */}
            <div className="col-span-2">
              <div className="info-card">
                <div className="bg-primary-white/[0.03] backdrop-blur-sm border border-primary-white/10 rounded-xl p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="material-icons text-primary-blue">
                      person
                    </span>
                    <h3 className="text-primary-blue font-poppins font-semibold">
                      Professional Profile
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="mb-5">
                    <p className="text-primary-gray font-roboto leading-relaxed text-sm">
                      {currentContent.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-medium rounded-full">
                        React
                      </span>
                      <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-medium rounded-full">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-medium rounded-full">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs font-medium rounded-full">
                        MongoDB
                      </span>
                    </div>
                  </div>

                  {/* Scroll Indicator */}
                  <div className="text-center pt-3 border-t border-primary-white/10">
                    <button
                      onClick={handleScroll}
                      className="flex items-center justify-center gap-2 text-primary-gray hover:text-primary-blue transition-colors duration-300 mx-auto text-sm"
                    >
                      <span className="font-roboto">
                        {currentContent.scroll}
                      </span>
                      <span className="material-icons text-lg">
                        keyboard_arrow_down
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
