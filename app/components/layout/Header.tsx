'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../lib/hooks';
import { useLanguageContext, LanguageSwitcher } from '../../components/providers/LanguageProvider';
import { Button, Container } from '../../components/ui';
// Update the import path if the file is located elsewhere, for example:
import { PERSONAL_INFO, NAVIGATION_ITEMS } from '../../lib/data';
// Or correct the path according to your project structure.
import { Menu, X, Download } from 'lucide-react';

// Logo Component
function Logo() {
  const { t } = useLanguageContext();
  
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className="w-11 h-11 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
        <span className="text-white font-bold text-lg font-heading">AM</span>
      </div>
      <div className="hidden sm:block">
        <span className="text-white font-semibold text-xl font-heading group-hover:text-accent-500 transition-colors duration-300">
          {PERSONAL_INFO.name}
        </span>
        <div className="text-secondary-500 text-xs font-body opacity-80">
          {t.nav.downloadCV.replace('Download CV', 'Software Engineer').replace('Descargar CV', 'Ingeniero de Software')}
        </div>
      </div>
    </div>
  );
}

// Navigation Links Component
interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

function Navigation({ mobile = false, onItemClick }: NavigationProps) {
  const { t } = useLanguageContext();
  
  const navigationItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact }
  ];

  const baseClasses = mobile
    ? "block text-secondary-500 hover:text-accent-500 transition-all duration-300 py-2 px-2 rounded-lg hover:bg-primary-600 font-heading font-medium"
    : "text-secondary-500 hover:text-accent-500 transition-all duration-300 relative group font-heading font-medium";

  return (
    <>
      {navigationItems.map((item, index) => (
        <motion.a
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className={baseClasses}
          initial={mobile ? { opacity: 0, x: -20 } : false}
          animate={mobile ? { opacity: 1, x: 0 } : false}
          transition={mobile ? { delay: index * 0.1 } : undefined}
        >
          {item.label}
          {!mobile && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full rounded-full" />
          )}
        </motion.a>
      ))}
    </>
  );
}

// Mobile Menu Component
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLanguageContext();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-antonio-mora.pdf';
    link.download = 'CV-Antonio-Mora.pdf';
    link.click();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-primary-600 glass rounded-b-lg">
            <Navigation mobile onItemClick={onClose} />
            
            <div className="flex flex-col space-y-3 pt-4 border-t border-primary-600">
              <LanguageSwitcher />
              <Button onClick={downloadCV} className="w-full">
                <Download size={16} className="mr-2" />
                {t.nav.downloadCV}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Mobile Menu Toggle Button
interface MenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden p-2 text-secondary-500 hover:text-accent-500 transition-colors duration-300"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.div>
    </button>
  );
}

// Main Header Component
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { t } = useLanguageContext();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-antonio-mora.pdf';
    link.download = 'CV-Antonio-Mora.pdf';
    link.click();
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-lg border-b border-primary-600' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Navigation />
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button onClick={downloadCV}>
              <Download size={16} className="mr-2" />
              {t.nav.downloadCV}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <MenuToggle isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
        </nav>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </Container>
    </motion.header>
  );
}