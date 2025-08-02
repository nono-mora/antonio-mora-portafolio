'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, isLoaded } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center space-x-3 text-[#cfcfcf] font-heading">
        <div className="w-14 h-7 bg-[#2a2a2a] rounded-full border border-[#cfcfcf]/20 animate-pulse"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-3 text-[#cfcfcf] hover:text-[#00bfff] transition-all duration-300 group font-heading"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
    >
      <div className="relative w-14 h-7 bg-[#2a2a2a] rounded-full border border-[#cfcfcf]/20 group-hover:border-[#00bfff]/40 transition-all duration-300 shadow-inner">
        <div 
          className={`absolute top-0.5 w-6 h-6 bg-gradient-to-r from-[#00bfff] to-[#33ccff] rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${
            language === 'en' ? 'translate-x-7' : 'translate-x-0.5'
          }`}
        >
          <span className="text-white text-xs font-bold font-heading">
            {language.toUpperCase()}
          </span>
        </div>
        
        {/* Background flags/indicators */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
          <span className={`text-xs transition-opacity duration-300 ${language === 'es' ? 'opacity-100' : 'opacity-30'}`}>
            🇪🇸
          </span>
          <span className={`text-xs transition-opacity duration-300 ${language === 'en' ? 'opacity-100' : 'opacity-30'}`}>
            🇺🇸
          </span>
        </div>
      </div>
      
      <div className="hidden sm:flex flex-col">
        <span className="text-sm font-medium leading-none">
          {language === 'es' ? 'Español' : 'English'}
        </span>
        <span className="text-xs opacity-70 leading-none mt-0.5">
          {language === 'es' ? 'ES' : 'EN'}
        </span>
      </div>
    </button>
  );
};

export default LanguageSwitcher;