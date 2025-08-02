'use client';

import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, isLoaded } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = isLoaded ? [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') }
  ] : [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre mí' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' }
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
          ? 'bg-[#1e1e1e]/95 backdrop-blur-md shadow-lg border-b border-[#2a2a2a]' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-accent rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg font-heading">AM</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-xl font-heading group-hover:text-[#00bfff] transition-colors duration-300">
                Antonio Mora
              </span>
              <div className="text-[#cfcfcf] text-xs font-body opacity-80">
                Software Engineer
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#cfcfcf] hover:text-[#00bfff] transition-all duration-300 relative group font-heading font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00bfff] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={downloadCV}
              className="btn-primary"
            >
              {isLoaded ? t('nav.downloadCV') : 'Descargar CV'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 group"
            aria-label="Toggle menu"
          >
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 rounded-full ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 rounded-full ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 rounded-full ${
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
          <div className="py-4 space-y-4 border-t border-[#2a2a2a] bg-[#1e1e1e]/95 backdrop-blur-sm rounded-b-lg">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-[#cfcfcf] hover:text-[#00bfff] transition-all duration-300 py-2 px-2 rounded-lg hover:bg-[#2a2a2a] font-heading font-medium animate-fade-in-up`}
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
                className="btn-primary w-full"
              >
                {isLoaded ? t('nav.downloadCV') : 'Descargar CV'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;