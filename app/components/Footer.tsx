'use client';

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/antoniomora',
      description: 'Conecta conmigo profesionalmente'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/antoniomora',
      description: 'Revisa mi código'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:antonio.mora@email.com',
      description: 'Envíame un email'
    },
    {
      name: 'WhatsApp',
      icon: '📱',
      url: 'https://wa.me/50689761010',
      description: 'Conversemos por WhatsApp'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-antonio-mora.pdf';
    link.download = 'CV-Antonio-Mora.pdf';
    link.click();
  };

  return (
    <footer className="bg-[#1e1e1e] border-t border-[#2a2a2a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, #00bfff 1px, transparent 1px),
            linear-gradient(-45deg, #00bfff 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Antonio Mora</h3>
                  <p className="text-[#cfcfcf] text-sm">Ingeniero de Software</p>
                </div>
              </div>
              
              <p className="text-[#cfcfcf] leading-relaxed max-w-md">
                Desarrollador full stack apasionado por crear soluciones tecnológicas innovadoras. 
                Especializado en backend development y siempre buscando nuevos desafíos.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={downloadCV}
                  className="bg-[#00bfff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0099cc] transition-all duration-300 hover-lift"
                >
                  📄 Descargar CV
                </button>
                <a
                  href="https://wa.me/50689761010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#00bfff] text-[#00bfff] px-6 py-3 rounded-lg font-semibold hover:bg-[#00bfff] hover:text-white transition-all duration-300 hover-lift"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Navegación
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#cfcfcf] hover:text-[#00bfff] transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Conectemos
              </h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-[#cfcfcf] hover:text-[#00bfff] transition-colors duration-300 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm opacity-75">{social.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-[#2a2a2a]">
          <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] rounded-xl p-6 border border-[#cfcfcf]/10">
            <div className="text-center">
              <h4 className="text-white font-semibold text-lg mb-2">
                ¿Interesado en colaborar?
              </h4>
              <p className="text-[#cfcfcf] mb-4">
                Estoy disponible para nuevas oportunidades laborales y proyectos desafiantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  className="bg-[#00bfff] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0099cc] transition-colors duration-300"
                >
                  Contactar ahora
                </a>
                <a
                  href="https://linkedin.com/in/antoniomora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#00bfff] text-[#00bfff] px-6 py-2 rounded-lg font-medium hover:bg-[#00bfff] hover:text-white transition-all duration-300"
                >
                  Ver perfil LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-[#2a2a2a]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#cfcfcf] text-sm">
              © {currentYear} Antonio Mora. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-[#cfcfcf]">
              <span>Hecho con ❤️ en Costa Rica</span>
              <div className="flex items-center space-x-2">
                <span>Construido con</span>
                <div className="flex items-center space-x-1">
                  <span className="text-[#00bfff]">Next.js</span>
                  <span>+</span>
                  <span className="text-[#00bfff]">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-[#00bfff]/20 rounded-full animate-pulse-custom opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-[#00bfff]/10 rotate-45 animate-bounce-custom opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;