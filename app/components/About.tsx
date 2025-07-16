'use client';

import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const personalInfo = [
    { label: 'Nombre', value: 'Antonio Mora' },
    { label: 'Ubicación', value: 'Costa Rica' },
    { label: 'Estado', value: 'Disponible para trabajar' },
    { label: 'Enfoque', value: 'Full Stack / Backend' }
  ];

  const interests = [
    'Desarrollo de Software',
    'Arquitectura de Sistemas',
    'Bases de Datos',
    'Algoritmos y Estructuras de Datos',
    'DevOps y CI/CD',
    'Machine Learning'
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #00bfff 1px, transparent 1px),
            linear-gradient(0deg, #00bfff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Conóceme mejor
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Profile Image & Info */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#00bfff]/20 to-[#cfcfcf]/10 rounded-2xl flex items-center justify-center border border-[#00bfff]/20 hover-glow transition-all duration-300">
                  <div className="text-[#00bfff] text-6xl">
                    👨‍💻
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00bfff] rounded-lg flex items-center justify-center animate-bounce-custom">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#cfcfcf] rounded-full flex items-center justify-center animate-pulse-custom">
                  <span className="text-[#1e1e1e] text-lg">⚡</span>
                </div>
              </div>

              {/* Personal Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className={`bg-[#2a2a2a] p-4 rounded-lg border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-[#cfcfcf] text-sm font-medium mb-1">
                      {info.label}
                    </div>
                    <div className="text-white font-semibold">
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Description & Interests */}
            <div className="space-y-8">
              {/* Main Description */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Mi Historia
                </h3>
                
                <div className="space-y-4 text-[#cfcfcf] leading-relaxed">
                  <p>
                    Soy un estudiante de ingeniería de software con una pasión genuina por 
                    resolver problemas complejos a través de la tecnología. Mi journey comenzó 
                    con curiosidad por entender cómo funcionan las cosas, y esa curiosidad 
                    me llevó a descubrir el mundo de la programación.
                  </p>
                  
                  <p>
                    Mi experiencia más destacada fue ganar un hackathón de programación utilizando 
                    UiPath, lo que me abrió las puertas a una pasantía en 
                    <span className="text-[#00bfff] font-semibold"> Greenlight Consulting</span>, 
                    donde pude aplicar mis conocimientos en un entorno profesional real.
                  </p>
                  
                  <p>
                    Actualmente, busco oportunidades como desarrollador junior en empresas 
                    internacionales, donde pueda contribuir con mi pasión por el desarrollo 
                    backend y full stack, mientras continúo aprendiendo y creciendo profesionalmente.
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Áreas de Interés
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div 
                      key={interest}
                      className={`bg-gradient-to-r from-[#00bfff]/10 to-[#00bfff]/5 border border-[#00bfff]/20 rounded-lg p-3 text-center hover:from-[#00bfff]/20 hover:to-[#00bfff]/10 transition-all duration-300 hover-lift animate-fade-in-right`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-[#cfcfcf] text-sm font-medium">
                        {interest}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-[#2a2a2a] p-6 rounded-lg border-l-4 border-[#00bfff] relative">
                <div className="absolute top-4 left-4 text-[#00bfff] text-4xl opacity-20">
                  "
                </div>
                <p className="text-[#cfcfcf] italic pl-8">
                  El código es poesía escrita en lógica. Cada línea cuenta una historia, 
                  cada función resuelve un problema, y cada proyecto es una oportunidad 
                  de crear algo significativo.
                </p>
                <div className="text-right mt-4">
                  <span className="text-[#00bfff] font-semibold">- Antonio Mora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;