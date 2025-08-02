'use client';

import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltips, setShowTooltips] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar los botones después de 2 segundos de scroll
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-antonio-mora.pdf';
    link.download = 'CV-Antonio-Mora.pdf';
    link.click();
    
    // Analytics tracking (opcional)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download', {
        event_category: 'CV',
        event_label: 'CV Download',
      });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola Antonio! He visto tu portafolio y me gustaría conversar contigo sobre oportunidades laborales.'
    );
    const whatsappUrl = `https://wa.me/50689761010?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Analytics tracking (opcional)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'WhatsApp',
      });
    }
  };

  const floatingButtons = [
    {
      id: 'whatsapp',
      icon: '💬',
      label: 'Chat por WhatsApp',
      onClick: openWhatsApp,
      className: 'bg-green-500 hover:bg-green-600 text-white',
      pulseColor: 'bg-green-500'
    },
    {
      id: 'cv',
      icon: '📄',
      label: 'Descargar CV',
      onClick: downloadCV,
      className: 'bg-[#00bfff] hover:bg-[#0099cc] text-white',
      pulseColor: 'bg-[#00bfff]'
    }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed right-6 bottom-6 z-40 flex flex-col space-y-4">
        {floatingButtons.map((button, index) => (
          <div
            key={button.id}
            className={`relative group animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setShowTooltips(true)}
            onMouseLeave={() => setShowTooltips(false)}
          >
            {/* Tooltip */}
            <div 
              className={`absolute right-16 top-1/2 transform -translate-y-1/2 bg-[#2a2a2a] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-[#cfcfcf]/20 transition-all duration-300 ${
                showTooltips 
                  ? 'opacity-100 translate-x-0 visible' 
                  : 'opacity-0 translate-x-2 invisible'
              }`}
            >
              {button.label}
              {/* Arrow */}
              <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-l-4 border-l-[#2a2a2a] border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={button.onClick}
              className={`relative w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl transform hover:-translate-y-1 group ${button.className}`}
              aria-label={button.label}
            >
              {/* Pulse Animation */}
              <div className={`absolute inset-0 rounded-full ${button.pulseColor} opacity-30 animate-ping group-hover:animate-none`}></div>
              
              {/* Icon */}
              <span className="relative z-10 text-xl">
                {button.icon}
              </span>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-6 left-6 z-40 sm:hidden">
        <div className="relative">
          <button
            onClick={() => setShowTooltips(!showTooltips)}
            className="w-14 h-14 bg-[#00bfff] hover:bg-[#0099cc] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Menú de contacto"
          >
            <span className={`text-xl transition-transform duration-300 ${showTooltips ? 'rotate-45' : ''}`}>
              ⚡
            </span>
          </button>

          {/* Mobile Menu */}
          <div className={`absolute bottom-16 left-0 flex flex-col space-y-3 transition-all duration-300 ${
            showTooltips 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 translate-y-4 invisible'
          }`}>
            {floatingButtons.map((button, index) => (
              <button
                key={button.id}
                onClick={() => {
                  button.onClick();
                  setShowTooltips(false);
                }}
                className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center animate-fade-in-up ${button.className}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={button.label}
              >
                <span className="text-lg">{button.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Prompt (aparece ocasionalmente) */}
      <ContactPrompt />
    </>
  );
};

// Componente adicional para mostrar prompt de contacto
const ContactPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Mostrar prompt después de 30 segundos si no se ha mostrado antes
    const timer = setTimeout(() => {
      if (!hasShown && !localStorage.getItem('contactPromptShown')) {
        setShowPrompt(true);
        setHasShown(true);
        localStorage.setItem('contactPromptShown', 'true');
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  const closePrompt = () => {
    setShowPrompt(false);
  };

  const handleContact = () => {
    const whatsappUrl = 'https://wa.me/50689761010?text=' + encodeURIComponent(
      '¡Hola Antonio! He visto tu portafolio y me interesa conversar sobre oportunidades.'
    );
    window.open(whatsappUrl, '_blank');
    closePrompt();
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 max-w-sm animate-fade-in-up">
      <div className="bg-[#2a2a2a] border border-[#00bfff]/30 rounded-lg p-4 shadow-xl">
        <button
          onClick={closePrompt}
          className="absolute top-2 right-2 text-[#cfcfcf] hover:text-white w-6 h-6 flex items-center justify-center"
        >
          ✕
        </button>
        
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-[#00bfff] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg">👋</span>
          </div>
          
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1">
              ¡Hola! Soy Antonio
            </h4>
            <p className="text-[#cfcfcf] text-sm mb-3">
              ¿Te interesa conversar sobre oportunidades laborales o proyectos?
            </p>
            
            <div className="flex space-x-2">
              <button
                onClick={handleContact}
                className="bg-[#00bfff] text-white px-3 py-1 rounded text-sm font-medium hover:bg-[#0099cc] transition-colors duration-300"
              >
                ¡Hablemos! 💬
              </button>
              <button
                onClick={closePrompt}
                className="text-[#cfcfcf] hover:text-white px-3 py-1 rounded text-sm transition-colors duration-300"
              >
                Más tarde
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;