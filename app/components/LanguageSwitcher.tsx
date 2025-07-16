'use client';

import React, { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    // Obtener idioma del localStorage o usar español por defecto
    const savedLang = localStorage.getItem('language') || 'es';
    setCurrentLang(savedLang);
    document.documentElement.lang = savedLang;
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setCurrentLang(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    
    // Aquí podrías disparar un evento personalizado para que otros componentes se actualicen
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-[#cfcfcf] hover:text-[#00bfff] transition-colors duration-300 group"
      aria-label={`Switch to ${currentLang === 'es' ? 'English' : 'Español'}`}
    >
      <div className="relative w-12 h-6 bg-[#2a2a2a] rounded-full border border-[#cfcfcf]/20 group-hover:border-[#00bfff]/40 transition-colors duration-300">
        <div 
          className={`absolute top-0.5 w-5 h-5 bg-[#00bfff] rounded-full transition-transform duration-300 flex items-center justify-center ${
            currentLang === 'en' ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        >
          <span className="text-white text-xs font-bold">
            {currentLang.toUpperCase()}
          </span>
        </div>
      </div>
      <span className="text-sm font-medium hidden sm:block">
        {currentLang === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;