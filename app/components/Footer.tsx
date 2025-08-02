'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/antoniomora',
      description: language === 'es' ? 'Conecta conmigo profesionalmente' : 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/antoniomora',
      description: language === 'es' ? 'Revisa mi código' : 'Check my code'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:antonio.mora@email.com',
      description: language === 'es' ? 'Envíame un email' : 'Send me an email'
    },
    {
      name: 'WhatsApp',
      icon: '📱',
      url: 'https://wa.me/50689761010',
      description: language === 'es' ? 'Conversemos por WhatsApp' : 'Let\'s chat on WhatsApp'
    }
  ];

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' }
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
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl font-heading">AM</span>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold font-heading">Antonio Mora</h3>
                  <p className="text-[#cfcfcf] text-sm font-body">
                    {language === 'es' ? 'Ingeniero de Software' : 'Software Engineer'}
                  </p>
                </div>
              </div>
              
              <p className="text-[#cfcfcf] leading-relaxed max-w-md font-body">
                {t('footer.description')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={downloadCV}
                  className="btn-primary"
                >
                  📄 {t('nav.downloadCV')}
                </button>
                <a
                  href="https://wa.me/50689761010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 font-heading">
                {t('footer.navigation')}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#cfcfcf] hover:text-[#00bfff] transition-colors duration-300 block py-1 font-body hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 font-heading">
                {t('footer.connect')}
              </h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-[#cfcfcf] hover:text-[#00bfff] transition-all duration-300 group hover:translate-x-1 transform"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <div>
                      <div className="font-medium font-heading">{social.name}</div>
                      <div className="text-sm opacity-75 font-body">{social.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-[#2a2a2a]">
          <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] rounded-xl p-6 border border-[#cfcfcf]/10 hover:border-[#00bfff]/20 transition-all duration-300">
            <div className="text-center">
              <h4 className="text-white font-semibold text-lg mb-2 font-heading">
                {t('footer.collaborate')}
              </h4>
              <p className="text-[#cfcfcf] mb-4 font-body">
                {t('footer.collaborateDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  className="bg-[#00bfff] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0099cc] transition-colors duration-300 hover-lift font-heading"
                >
                  {t('footer.contactNow')}
                </a>
                <a
                  href="https://linkedin.com/in/antoniomora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#00bfff] text-[#00bfff] px-6 py-2 rounded-lg font-medium hover:bg-[#00bfff] hover:text-white transition-all duration-300 hover-lift font-heading"
                >
                  {t('footer.viewLinkedIn')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-[#2a2a2a]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#cfcfcf] text-sm font-body">
              © {currentYear} Antonio Mora. {t('footer.allRights')}
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-[#cfcfcf]">
              <span className="font-body">{t('footer.madeWith')}</span>
              <div className="flex items-center space-x-2">
                <span className="font-body">{t('footer.builtWith')}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-[#00bfff] font-heading font-medium">Next.js</span>
                  <span>+</span>
                  <span className="text-[#00bfff] font-heading font-medium">Tailwind CSS</span>
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