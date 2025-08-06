"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Registrar el hook para evitar discrepancias de versión de React
gsap.registerPlugin(useGSAP);

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef();

  // Animación inicial del switcher con hook oficial de GSAP
  useGSAP(
    () => {
      gsap.fromTo(
        ".lang-switcher",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 1.5 }
      );
    },
    { scope: switcherRef }
  );

  useEffect(() => {
    // Obtener idioma desde localStorage o usar 'en' por defecto
    const savedLang = localStorage.getItem("language") || "en";
    setCurrentLang(savedLang);

    // Aquí puedes agregar lógica adicional para cambiar el contenido
    document.documentElement.lang = savedLang;
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);

    // Aquí puedes agregar lógica para actualizar el contenido
    document.documentElement.lang = lang;

    // Animación al cambiar
    gsap.fromTo(".lang-switcher", { scale: 0.95 }, { scale: 1, duration: 0.2 });
  };

  const languages = {
    en: { name: "English", flag: "🇺🇸" },
    es: { name: "Español", flag: "🇪🇸" },
  };

  return (
    <div ref={switcherRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lang-switcher flex items-center gap-2 px-4 py-2 bg-primary-white border border-primary-gray rounded-lg hover:border-primary-blue transition-colors duration-300 font-roboto"
        aria-label="Language selector"
      >
        <span className="text-lg">{languages[currentLang].flag}</span>
        <span className="text-sm font-medium text-primary-dark">
          {languages[currentLang].name}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-primary-white border border-primary-gray rounded-lg shadow-lg z-50 min-w-full overflow-hidden">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                currentLang === code
                  ? "bg-primary-blue/10 text-primary-blue"
                  : "text-primary-dark"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
              {currentLang === code && (
                <svg
                  className="w-4 h-4 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
