"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import LanguageSwitcher from "./LanguageSwitcher";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const headerRef = useRef();

  // Animación inicial del header
  useGSAP(
    () => {
      gsap.fromTo(
        ".header-content",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
      );
    },
    { scope: headerRef }
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
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        about: "Acerca",
        projects: "Proyectos",
        contact: "Contacto",
      },
    },
  };

  const currentContent = content[currentLang];

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-primary-white/10"
      >
        <div className="header-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick("home")}
                className="text-primary-white font-poppins font-bold text-xl hover:text-primary-blue transition-colors duration-300"
              >
                AM
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavClick("home")}
                className="text-primary-gray hover:text-primary-blue transition-colors duration-300 font-roboto font-medium"
              >
                {currentContent.nav.home}
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="text-primary-gray hover:text-primary-blue transition-colors duration-300 font-roboto font-medium"
              >
                {currentContent.nav.about}
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className="text-primary-gray hover:text-primary-blue transition-colors duration-300 font-roboto font-medium"
              >
                {currentContent.nav.projects}
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-primary-gray hover:text-primary-blue transition-colors duration-300 font-roboto font-medium"
              >
                {currentContent.nav.contact}
              </button>
            </nav>

            {/* Desktop Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile Language Switcher */}
              <div className="scale-90">
                <LanguageSwitcher />
              </div>

              {/* Hamburger Button */}
              <button
                onClick={toggleMenu}
                className="text-primary-gray hover:text-primary-white transition-colors duration-300 p-2"
                aria-label="Toggle navigation menu"
              >
                <span className="material-icons text-2xl">
                  {isMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-64 opacity-100 pb-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <nav className="space-y-2 pt-4 border-t border-primary-white/10">
              <button
                onClick={() => handleNavClick("home")}
                className="block w-full text-left px-4 py-3 text-primary-gray hover:text-primary-blue hover:bg-primary-white/5 transition-all duration-300 font-roboto font-medium rounded-lg"
              >
                <span className="material-icons text-sm mr-3 align-middle">
                  home
                </span>
                {currentContent.nav.home}
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="block w-full text-left px-4 py-3 text-primary-gray hover:text-primary-blue hover:bg-primary-white/5 transition-all duration-300 font-roboto font-medium rounded-lg"
              >
                <span className="material-icons text-sm mr-3 align-middle">
                  person
                </span>
                {currentContent.nav.about}
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className="block w-full text-left px-4 py-3 text-primary-gray hover:text-primary-blue hover:bg-primary-white/5 transition-all duration-300 font-roboto font-medium rounded-lg"
              >
                <span className="material-icons text-sm mr-3 align-middle">
                  folder_open
                </span>
                {currentContent.nav.projects}
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="block w-full text-left px-4 py-3 text-primary-gray hover:text-primary-blue hover:bg-primary-white/5 transition-all duration-300 font-roboto font-medium rounded-lg"
              >
                <span className="material-icons text-sm mr-3 align-middle">
                  email
                </span>
                {currentContent.nav.contact}
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
