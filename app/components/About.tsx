'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

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
    { label: t('about.name'), value: 'Antonio Mora' },
    { label: t('about.location'), value: t('about.locationValue') },
    { label: t('about.status'), value: t('about.statusValue') },
    { label: t('about.focus'), value: t('about.focusValue') }
  ];

  const interests = language === 'es' ? [
    'Desarrollo de Software',
    'Arquitectura de Sistemas',
    'Bases de Datos',
    'Algoritmos y Estructuras de Datos',
    'DevOps y CI/CD',
    'Machine Learning'
  ] : [
    'Software Development',
    'System Architecture',
    'Databases',
    'Algorithms & Data Structures',
    'DevOps & CI/CD',
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

      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 border border-[#00bfff]/10 rounded-full animate-pulse-custom"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-[#00bfff]/5 rotate-45 animate-float"></div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block font-heading">
              {t('about.subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Profile Image & Info */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="relative animate-fade-in-left">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#00bfff]/20 to-[#cfcfcf]/10 rounded-2xl flex items-center justify-center border border-[#00bfff]/20 hover-glow transition-all duration-300 shadow-xl">
                  <div className="text-[#00bfff] text-6xl animate-float">
                    👨‍💻
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00bfff] rounded-lg flex items-center justify-center animate-bounce-custom shadow-lg">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#cfcfcf] rounded-full flex items-center justify-center animate-pulse-custom shadow-lg">
                  <span className="text-[#1e1e1e] text-lg">⚡</span>
                </div>
              </div>

              {/* Personal Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className={`bg-[#2a2a2a] p-4 rounded-lg border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift animate-fade-in-up shadow-lg hover:shadow-xl`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-[#cfcfcf] text-sm font-medium mb-1 font-heading">
                      {info.label}
                    </div>
                    <div className="text-white font-semibold font-body">
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Description & Interests */}
            <div className="space-y-8 animate-fade-in-right">
              {/* Main Description */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  {t('about.myStory')}
                </h3>
                
                <div className="space-y-4 text-[#cfcfcf] leading-relaxed font-body text-lg">
                  <p>
                    {t('about.storyP1')}
                  </p>
                  
                  <p>
                    {t('about.storyP2')}
                    <span className="text-[#00bfff] font-semibold"> {t('about.storyP3')}</span>
                    {t('about.storyP4')}
                  </p>
                  
                  <p>
                    {t('about.storyP5')}
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 font-heading">
                  {t('about.interests')}
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div 
                      key={interest}
                      className={`bg-gradient-to-r from-[#00bfff]/10 to-[#00bfff]/5 border border-[#00bfff]/20 rounded-lg p-3 text-center hover:from-[#00bfff]/20 hover:to-[#00bfff]/10 hover:border-[#00bfff]/40 transition-all duration-300 hover-lift animate-fade-in-right shadow-md hover:shadow-lg`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-[#cfcfcf] text-sm font-medium font-body">
                        {interest}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-[#2a2a2a] p-6 rounded-lg border-l-4 border-[#00bfff] relative shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 left-4 text-[#00bfff] text-4xl opacity-20">
                  "
                </div>
                <p className="text-[#cfcfcf] italic pl-8 font-body leading-relaxed">
                  {t('about.quote')}
                </p>
                <div className="text-right mt-4">
                  <span className="text-[#00bfff] font-semibold font-heading">- Antonio Mora</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] rounded-2xl p-8 border border-[#cfcfcf]/10 max-w-4xl mx-auto hover:border-[#00bfff]/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                Stack Tecnológico Principal
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {['Java', 'C#', 'JavaScript', 'React', 'Node.js', 'SQL Server', 'MongoDB', 'Git'].map((tech, index) => (
                  <span 
                    key={tech}
                    className={`bg-[#00bfff]/20 text-[#00bfff] px-4 py-2 rounded-full text-sm border border-[#00bfff]/30 font-medium font-heading hover:bg-[#00bfff]/30 transition-colors duration-300 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;