'use client';

import React, { createContext, useContext } from 'react';
import { useLanguage as useLanguageHook } from '../../lib/hooks';
import { useTranslations } from '../../lib/translations';
import type { Language, ComponentWithChildren } from '../../lib/types';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  isLoaded: boolean;
  t: ReturnType<typeof useTranslations>['t'];
  getTranslation: ReturnType<typeof useTranslations>['getTranslation'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: ComponentWithChildren) {
  const { language, changeLanguage, isLoaded } = useLanguageHook();
  const { t, getTranslation } = useTranslations(language);

  const value: LanguageContextType = {
    language,
    changeLanguage,
    isLoaded,
    t,
    getTranslation,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}

// Language Switcher Component
interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, changeLanguage, isLoaded } = useLanguageContext();

  if (!isLoaded) {
    return (
      <div className="flex items-center space-x-3">
        <div className="w-14 h-7 bg-primary-600 rounded-full border border-secondary-500/20 animate-pulse" />
      </div>
    );
  }

  const toggleLanguage = () => {
    const newLang: Language = language === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-3 text-secondary-500 hover:text-accent-500 transition-all duration-300 group font-heading ${className}`}
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
    >
      <div className="relative w-14 h-7 bg-primary-600 rounded-full border border-secondary-500/20 group-hover:border-accent-500/40 transition-all duration-300 shadow-inner">
        <div 
          className={`absolute top-0.5 w-6 h-6 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${
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
}

// Safe Text Component - prevents hydration mismatches
interface SafeTextProps {
  translationKey: string;
  fallback: string;
  className?: string;
  children?: React.ReactNode;
}

export function SafeText({ 
  translationKey, 
  fallback, 
  className, 
  children 
}: SafeTextProps) {
  const { getTranslation, isLoaded } = useLanguageContext();
  
  const text = isLoaded ? getTranslation(translationKey) : fallback;
  
  if (children) {
    return (
      <span className={className}>
        {React.Children.map(children, (child) => {
          if (typeof child === 'string') {
            return text;
          }
          return child;
        })}
      </span>
    );
  }
  
  return <span className={className}>{text}</span>;
}