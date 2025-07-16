'use client';

import React, { useEffect, useState, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'antonio.mora@email.com',
      link: 'mailto:antonio.mora@email.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/antoniomora',
      link: 'https://linkedin.com/in/antoniomora'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/antoniomora',
      link: 'https://github.com/antoniomora'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+506 8976 1010',
      link: 'https://wa.me/50689761010'
    }
  ];

  const reasonsToContact = [
    {
      icon: '💼',
      title: 'Oportunidades Laborales',
      description: 'Posiciones junior en desarrollo full stack o backend'
    },
    {
      icon: '🤝',
      title: 'Colaboraciones',
      description: 'Proyectos interesantes donde pueda contribuir'
    },
    {
      icon: '🎓',
      title: 'Mentorías',
      description: 'Intercambio de conocimientos y experiencias'
    },
    {
      icon: '💡',
      title: 'Consultas Técnicas',
      description: 'Preguntas sobre desarrollo y tecnología'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #00bfff 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #00bfff 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#00bfff] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Conectemos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hablemos de tu <span className="gradient-text">Proyecto</span>
            </h2>
            <div className="w-24 h-1 bg-[#00bfff] mx-auto rounded-full"></div>
            <p className="text-[#cfcfcf] max-w-2xl mx-auto mt-6 text-lg">
              Estoy disponible para nuevas oportunidades y proyectos interesantes. 
              ¡No dudes en contactarme!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info & Form */}
            <div className="space-y-8">
              {/* Reasons to Contact */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  ¿En qué puedo ayudarte?
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {reasonsToContact.map((reason, index) => (
                    <div 
                      key={reason.title}
                      className={`bg-[#2a2a2a] p-4 rounded-lg border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift animate-fade-in-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{reason.icon}</span>
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            {reason.title}
                          </h4>
                          <p className="text-[#cfcfcf] text-sm">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Información de Contacto
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.title}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 bg-[#2a2a2a] rounded-lg border border-[#cfcfcf]/10 hover:border-[#00bfff]/30 transition-all duration-300 hover-lift group animate-fade-in-left`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 bg-[#00bfff]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00bfff]/30 transition-colors duration-300">
                        <span className="text-xl">{info.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-[#00bfff] transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-[#cfcfcf] text-sm">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-[#cfcfcf]/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envíame un mensaje
              </h3>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6">
                  ¡Mensaje enviado exitosamente! Te responderé pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6">
                  Error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#cfcfcf]/20 rounded-lg text-white placeholder-[#cfcfcf]/50 focus:border-[#00bfff] focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#cfcfcf]/20 rounded-lg text-white placeholder-[#cfcfcf]/50 focus:border-[#00bfff] focus:outline-none transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Empresa (Opcional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#cfcfcf]/20 rounded-lg text-white placeholder-[#cfcfcf]/50 focus:border-[#00bfff] focus:outline-none transition-colors duration-300"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#cfcfcf]/20 rounded-lg text-white focus:border-[#00bfff] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="job">Oportunidad Laboral</option>
                    <option value="collaboration">Colaboración</option>
                    <option value="mentorship">Mentoría</option>
                    <option value="technical">Consulta Técnica</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1e1e1e] border border-[#cfcfcf]/20 rounded-lg text-white placeholder-[#cfcfcf]/50 focus:border-[#00bfff] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-[#cfcfcf]/20 text-[#cfcfcf] cursor-not-allowed'
                      : 'bg-[#00bfff] text-white hover:bg-[#0099cc] hover-lift hover-glow'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-[#cfcfcf]/30 border-t-[#cfcfcf] rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </span>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-[#cfcfcf]/10 text-center">
                <p className="text-[#cfcfcf] text-sm">
                  También puedes contactarme directamente por{' '}
                  <a 
                    href="https://wa.me/50689761010" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00bfff] hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;