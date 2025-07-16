'use client';

import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Inicio', labelEn: 'Home' },
    { href: '#about', label: 'Sobre mí', labelEn: 'About' },
    { href: '#experience', label: 'Experiencia', labelEn: 'Experience' },
    { href: '#skills', label: 'Habilidades', labelEn: 'Skills' },
    { href: '#projects', label: 'Proyectos', labelEn: 'Projects' },
    { href: '#contact', label: 'Contacto', labelEn: 'Contact' }
  ];

  const downloadCV = () => {
    // Placeholder para descarga de CV
    const link = document.createElement('a');
    link.href = '/cv-antonio-mora.pdf';
    link.download = 'CV-Antonio-Mora.pdf';
    link.click();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1e1e1e]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AM</span>
            </div>
            <span className="text-white font-semibold text-xl hidden sm:block">
              Antonio Mora
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#cfcfcf] hover:text-[#00bfff] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00bfff] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={downloadCV}
              className="bg-[#00bfff] text-white px-6 py-2 rounded-lg hover:bg-[#0099cc] transition-colors duration-300 hover-lift"
            >
              Descargar CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 border-t border-[#2a2a2a]">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-[#cfcfcf] hover:text-[#00bfff] transition-colors duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-[#2a2a2a]">
              <LanguageSwitcher />
              <button
                onClick={() => {
                  downloadCV();
                  setIsOpen(false);
                }}
                className="bg-[#00bfff] text-white px-6 py-2 rounded-lg hover:bg-[#0099cc] transition-colors duration-300 w-full"
              >
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;