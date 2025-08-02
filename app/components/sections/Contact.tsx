'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver, useContactForm } from '../../lib/hooks';
import { useLanguageContext } from '../../components/providers/LanguageProvider';
import { Card, Section, Container, Heading, Text, Button, Spinner } from '../../components/ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../lib/data';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Briefcase,
  GraduationCap,
  HelpCircle
} from 'lucide-react';

// Contact Info Component
function ContactInfo() {
  const { t, language } = useLanguageContext();
  
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: PERSONAL_INFO.email,
      link: `mailto:${PERSONAL_INFO.email}`,
      description: language === 'es' ? 'Envíame un email directamente' : 'Send me an email directly'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: PERSONAL_INFO.phone,
      link: PERSONAL_INFO.whatsapp,
      description: language === 'es' ? 'Conversemos por WhatsApp' : 'Let\'s chat on WhatsApp'
    },
    {
      icon: ExternalLink,
      title: 'LinkedIn',
      value: 'linkedin.com/in/antoniomora',
      link: PERSONAL_INFO.linkedin,
      description: language === 'es' ? 'Conecta conmigo profesionalmente' : 'Connect with me professionally'
    },
    {
      icon: ExternalLink,
      title: 'GitHub',
      value: 'github.com/antoniomora',
      link: PERSONAL_INFO.github,
      description: language === 'es' ? 'Revisa mi código y proyectos' : 'Check my code and projects'
    }
  ];

  return (
    <div className="space-y-6">
      <Heading level={3} size="xl" className="mb-6">
        {t.contact.contactInfo}
      </Heading>
      
      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-4 p-4 bg-primary-600 rounded-lg border border-secondary-500/10 hover:border-accent-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center group-hover:bg-accent-500/30 transition-colors duration-300 flex-shrink-0">
                <Icon size={20} className="text-accent-500" />
              </div>
              
              <div className="flex-1 min-w-0">
                <Heading level={4} size="md" className="group-hover:text-accent-500 transition-colors duration-300">
                  {method.title}
                </Heading>
                <Text size="sm" color="secondary" className="truncate">
                  {method.value}
                </Text>
                <Text size="xs" color="muted">
                  {method.description}
                </Text>
              </div>
              
              <ExternalLink size={16} className="text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

// Reasons to Contact Component
function ReasonsToContact() {
  const { t } = useLanguageContext();
  
  const reasons = [
    {
      icon: Briefcase,
      title: t.contact.reasons[0].title,
      description: t.contact.reasons[0].description
    },
    {
      icon: MessageSquare,
      title: t.contact.reasons[1].title,
      description: t.contact.reasons[1].description
    },
    {
      icon: GraduationCap,
      title: t.contact.reasons[2].title,
      description: t.contact.reasons[2].description
    },
    {
      icon: HelpCircle,
      title: t.contact.reasons[3].title,
      description: t.contact.reasons[3].description
    }
  ];

  return (
    <div className="space-y-6">
      <Heading level={3} size="xl" className="mb-6">
        {t.contact.howCanIHelp}
      </Heading>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-primary-600 p-4 rounded-lg border border-secondary-500/10 hover:border-accent-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-accent-500" />
                </div>
                
                <div>
                  <Heading level={4} size="md" className="mb-1">
                    {reason.title}
                  </Heading>
                  <Text size="sm" color="secondary">
                    {reason.description}
                  </Text>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const { t } = useLanguageContext();
  const { formData, updateField, submitForm, isSubmitting, status } = useContactForm();

  const subjectOptions = [
    { value: '', label: t.contact.form.subjects.select },
    { value: 'job', label: t.contact.form.subjects.job },
    { value: 'collaboration', label: t.contact.form.subjects.collaboration },
    { value: 'mentorship', label: t.contact.form.subjects.mentorship },
    { value: 'technical', label: t.contact.form.subjects.technical },
    { value: 'other', label: t.contact.form.subjects.other }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="shadow-xl hover:border-accent-500/20 transition-all duration-300">
        <Heading level={3} size="xl" className="mb-6">
          {t.contact.sendMessage}
        </Heading>

        {/* Success Message */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6 flex items-center space-x-2"
          >
            <CheckCircle size={20} />
            <Text size="base" color="primary" className="text-green-400">
              ¡Mensaje enviado exitosamente! Te responderé pronto.
            </Text>
          </motion.div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6 flex items-center space-x-2"
          >
            <AlertCircle size={20} />
            <Text size="base" color="primary" className="text-red-400">
              Error al enviar el mensaje. Por favor, intenta nuevamente.
            </Text>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2 font-heading">
                {t.contact.form.name} *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                required
                className="w-full px-4 py-3 bg-primary-500 border border-secondary-500/20 rounded-lg text-white placeholder-secondary-500/50 focus:border-accent-500 focus:outline-none transition-colors duration-300 font-body"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2 font-heading">
                {t.contact.form.email} *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
                className="w-full px-4 py-3 bg-primary-500 border border-secondary-500/20 rounded-lg text-white placeholder-secondary-500/50 focus:border-accent-500 focus:outline-none transition-colors duration-300 font-body"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-white font-medium mb-2 font-heading">
              {t.contact.form.company}
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => updateField('company', e.target.value)}
              className="w-full px-4 py-3 bg-primary-500 border border-secondary-500/20 rounded-lg text-white placeholder-secondary-500/50 focus:border-accent-500 focus:outline-none transition-colors duration-300 font-body"
              placeholder="Nombre de tu empresa"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-white font-medium mb-2 font-heading">
              {t.contact.form.subject} *
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => updateField('subject', e.target.value)}
              required
              className="w-full px-4 py-3 bg-primary-500 border border-secondary-500/20 rounded-lg text-white focus:border-accent-500 focus:outline-none transition-colors duration-300 font-body"
            >
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-primary-500">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2 font-heading">
              {t.contact.form.message} *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => updateField('message', e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 bg-primary-500 border border-secondary-500/20 rounded-lg text-white placeholder-secondary-500/50 focus:border-accent-500 focus:outline-none transition-colors duration-300 resize-none font-body"
              placeholder="Cuéntame sobre tu proyecto o consulta..."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Spinner size="sm" color="white" className="mr-2" />
                {t.contact.form.sending}
              </>
            ) : (
              <>
                <Send size={16} className="mr-2" />
                {t.contact.form.send}
              </>
            )}
          </Button>
        </form>

        {/* Alternative Contact */}
        <div className="mt-6 pt-6 border-t border-secondary-500/10 text-center">
          <Text size="sm" color="secondary">
            También puedes contactarme directamente por{' '}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-500 hover:underline font-medium transition-colors duration-300"
            >
              WhatsApp
            </a>
          </Text>
        </div>
      </Card>
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
              radial-gradient(circle at 25% 25%, #00bfff 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #00bfff 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-24 h-24 border border-accent-500/20 rounded-lg rotate-12"
        animate={{ 
          rotate: [12, 192, 12],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 left-20 w-16 h-16 bg-accent-500/10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </>
  );
}

// Main Contact Component
export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguageContext();

  return (
    <Section 
      ref={ref}
      id="contact" 
      background="gradient"
      className="relative"
    >
      <BackgroundElements />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span 
              className="text-accent-500 text-sm font-semibold tracking-widest uppercase mb-4 block font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              {t.contact.subtitle}
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heading level={2} size="2xl" centered className="mb-6">
                {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
              </Heading>
            </motion.div>
            
            <motion.div 
              className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={isVisible ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Text size="lg" color="secondary" align="center" className="max-w-2xl mx-auto">
                {t.contact.description}
              </Text>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info & Reasons */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ReasonsToContact />
              <ContactInfo />
            </motion.div>

            {/* Right Column - Contact Form */}
            <ContactForm />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}