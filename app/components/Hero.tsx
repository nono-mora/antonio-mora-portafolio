'use client';

import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Ingeniero de Software',
    'Desarrollador Full Stack',
    'Backend Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotación de roles cada 3 segundos
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #00bfff 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #00bfff 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#00bfff]/20 rotate-45 animate-pulse-custom"></div>
        <div className="absolute top-1/3 right-16 w-16 h-16 bg-[#00bfff]/10 rounded-full animate-bounce-custom" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-[#cfcfcf]/20 rotate-12 animate-pulse-custom" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-[#00bfff] text-lg font-medium tracking-wider">
              ¡Hola! Soy
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Antonio</span>
            <br />
            <span className="text-white">Mora</span>
          </h1>

          {/* Dynamic Role */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-[#cfcfcf] font-light">
              <span className="inline-block min-w-[300px] text-left">
                {roles.map((role, index) => (
                  <span
                    key={role}
                    className={`absolute transition-all duration-500 ${
                      index === currentRole 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {role}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#cfcfcf]/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Estudiante de ingeniería de software apasionado por crear soluciones tecnológicas innovadoras. 
            Especializado en desarrollo full stack con enfoque en backend, buscando oportunidades en empresas internacionales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-[#00bfff] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0099cc] transition-all duration-300 hover-lift hover-glow group"
            >
              Trabajemos juntos
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </button>
            
            <button
              onClick={scrollToProjects}
              className="border-2 border-[#00bfff] text-[#00bfff] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00bfff] hover:text-white transition-all duration-300 hover-lift"
            >
              Ver mis proyectos
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#2a2a2a]">
            <div className="text-center group">
              <div className="text-3xl font-bold text-[#00bfff] mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-[#cfcfcf] text-sm uppercase tracking-wider">
                Lenguajes de Programación
              </div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl font-bold text-[#00bfff] mb-2 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-[#cfcfcf] text-sm uppercase tracking-wider">
                Proyectos Completados
              </div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl font-bold text-[#00bfff] mb-2 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="text-[#cfcfcf] text-sm uppercase tracking-wider">
                Hackathón Ganado
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce-custom">
            <div className="w-6 h-10 border-2 border-[#00bfff]/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#00bfff] rounded-full mt-2 animate-pulse-custom"></div>
            </div>
          </div>
          <div className="text-[#cfcfcf]/60 text-xs mt-2 tracking-wider">
            SCROLL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;