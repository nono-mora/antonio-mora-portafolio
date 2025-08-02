'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calcular el progreso del scroll
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      
      // Mostrar el botón después de hacer scroll de 400px
      if (scrollTop > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const throttledToggleVisibility = throttle(toggleVisibility, 10);
    window.addEventListener('scroll', throttledToggleVisibility);
    
    return () => window.removeEventListener('scroll', throttledToggleVisibility);
  }, []);

  // Función throttle para optimizar el rendimiento
  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Analytics tracking (opcional)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Navigation',
        event_label: 'Scroll to Top',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative group">
        {/* Progress Ring */}
        <svg 
          className="w-16 h-16 transform -rotate-90 absolute inset-0" 
          viewBox="0 0 64 64"
        >
          {/* Background Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="rgba(207, 207, 207, 0.2)"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#00bfff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-100 ease-out drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(0, 191, 255, 0.4))'
            }}
          />
        </svg>

        {/* Button */}
        <button
          onClick={scrollToTop}
          className="relative w-16 h-16 bg-[#2a2a2a]/90 backdrop-blur-sm hover:bg-[#333333] text-[#00bfff] rounded-full shadow-xl border border-[#cfcfcf]/20 hover:border-[#00bfff]/50 transition-all duration-300 hover:scale-110 hover-glow group z-10 flex items-center justify-center font-heading"
          aria-label="Volver al inicio"
        >
          {/* Icon */}
          <div className="flex flex-col items-center">
            <svg 
              className="w-6 h-6 group-hover:animate-bounce transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </div>
          
          {/* Inner Glow Effect */}
          <div className="absolute inset-2 rounded-full bg-[#00bfff] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 bg-[#2a2a2a]/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium font-heading whitespace-nowrap border border-[#cfcfcf]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-xl">
          Volver al inicio
          {/* Arrow */}
          <div className="absolute top-full right-4">
            <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[#2a2a2a]/95"></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#00bfff] text-[#1e1e1e] px-3 py-1 rounded-full text-xs font-bold font-heading opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          {Math.round(scrollProgress)}%
        </div>

        {/* Pulse animation when first appearing */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00bfff] opacity-20 animate-ping"></div>
      </div>
    </div>
  );
};

export default ScrollToTop;