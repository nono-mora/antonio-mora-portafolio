'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../providers/LanguageProvider';
import { Button, Container, Heading, Text } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS, NAVIGATION_ITEMS } from '../../lib/data';
import { Download, ExternalLink, Heart } from 'lucide-react';

// Logo Component
function FooterLogo() {
  const { t } = useLanguageContext();
  
  return (
    <div className="flex items-center space-x-3 group">
      <motion.div 
        className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-white font-bold text-xl font-heading">AM</span>
      </motion.div>
      
      <div>
        <Heading level={3} size="lg" className="text-white">
          {PERSONAL_INFO.name}
        </Heading>
        <Text size="sm" color="secondary">
          {t.footer.description.split('.')[0]}
        </Text>
      </div>
    </div>
  );
}

// Quick Links Component
function QuickLinks() {
  const { t } = useLanguageContext();
  
  const navigationItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <div>
      <Heading level={4} size="lg" className="mb-6">
        {t.footer.navigation}
      </Heading>
      
      <ul className="space-y-3">
        {navigationItems.map((item, index) => (
          <motion.li 
            key={item.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <a
              href={item.href}
              className="text-secondary-500 hover:text-accent-500 transition-all duration-300 block py-1 font-body hover:translate-x-1 transform"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

// Social Links Component
function SocialLinks() {
  const { t } = useLanguageContext();
  
  return (
    <div>
      <Heading level={4} size="lg" className="mb-6">
        {t.footer.connect}
      </Heading>
      
      <div className="space-y-4">
        {SOCIAL_LINKS.map((social, index) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-center space-x-3 text-secondary-500 hover:text-accent-500 transition-all duration-300 group"
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
              {social.icon}
            </span>
            
            <div>
              <Text size="base" color="inherit" weight="medium">
                {social.name}
              </Text>
              <Text size="sm" color="muted">
                {social.description}
              </Text>
            </div>
            
            <ExternalLink 
              size={16} 
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

// Newsletter/CTA Section Component
function CTASection() {
  const { t } = useLanguageContext();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-antonio-mora.pdf';
    link.download = 'CV-Antonio-Mora.pdf';
    link.click();
  };

  return (
    <motion.div 
      className="py-8 border-t border-primary-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl p-6 border border-secondary-500/10 hover:border-accent-500/20 transition-all duration-300 text-center">
        <Heading level={4} size="lg" className="mb-2">
          {t.footer.collaborate.title}
        </Heading>
        
        <Text size="base" color="secondary" className="mb-4">
          {t.footer.collaborate.description}
        </Text>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.footer.collaborate.contact}
          </Button>
          
          <Button
            variant="secondary"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} className="mr-2" />
            {t.footer.collaborate.linkedin}
          </Button>
          
          <Button
            variant="ghost"
            onClick={downloadCV}
          >
            <Download size={16} className="mr-2" />
            {t.nav.downloadCV}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// Background Elements Component
function BackgroundElements() {
  return (
    <>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #00bfff 1px, transparent 1px),
              linear-gradient(-45deg, #00bfff 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-10 right-10 w-20 h-20 border border-accent-500/20 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-12 h-12 bg-accent-500/10 rotate-45"
        animate={{ 
          rotate: [45, 225, 45],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </>
  );
}

// Main Footer Component
export default function Footer() {
  const { t } = useLanguageContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 border-t border-primary-600 relative overflow-hidden">
      <BackgroundElements />
      
      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FooterLogo />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Text size="base" color="secondary" className="leading-relaxed max-w-md">
                  {t.footer.description}
                </Text>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.footer.collaborate.contact}
                </Button>
                
                <Button
                  variant="secondary"
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </Button>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <QuickLinks />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />

        {/* Bottom Footer */}
        <motion.div 
          className="py-6 border-t border-primary-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-500 text-sm font-body">
              © {currentYear} {PERSONAL_INFO.name}. {t.footer.rights}
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-secondary-500">
              <div className="flex items-center space-x-1">
                <Text size="sm" color="secondary">
                  {t.footer.madeWith}
                </Text>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500"
                >
                  <Heart size={14} fill="currentColor" />
                </motion.span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Text size="sm" color="secondary">
                  {t.footer.builtWith}
                </Text>
                <div className="flex items-center space-x-1">
                  <span className="text-accent-500 font-heading font-medium">Next.js</span>
                  <span className="text-secondary-500">+</span>
                  <span className="text-accent-500 font-heading font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}