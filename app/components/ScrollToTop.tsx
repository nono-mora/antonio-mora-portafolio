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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="relative group">
        {/* Progress Ring */}
        <svg 
          className="w-14 h-14 transform -rotate-90 absolute inset-0" 
          viewBox="0 0 56 56"
        >
          {/* Background Circle */}
          <circle
            cx="28"
            cy="28"
            r="26"
            stroke="rgba(207, 207, 207, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="28"
            cy="28"
            r="26"
            stroke="#00bfff"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 26}`}
            strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-100 ease-out"
          />
        </svg>

        {/* Button */}
        <button
          onClick={scrollToTop}
          className="relative w-14 h-14 bg-[#2a2a2a] hover:bg-[#333333] text-[#00bfff] rounded-full shadow-lg border border-[#cfcfcf]/20 hover:border-[#00bfff]/50 transition-all duration-300 hover:scale-110 hover:shadow-xl group z-10 flex items-center justify-center"
          aria-label="Volver al inicio"
        >
          {/* Icon */}
          <div className="flex flex-col items-center">
            <span className="text-lg group-hover:animate-bounce">↑</span>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-[#00bfff] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-[#2a2a2a] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-[#cfcfcf]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Volver al inicio
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[#2a2a2a]"></div>
          </div>
        </div>

        {/* Progress Percentage (Solo visible en hover) */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#00bfff] text-white px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;