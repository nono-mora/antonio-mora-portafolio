"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const ContactSection = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setCurrentLang(savedLang);

    const handleStorageChange = (e) => {
      if (e.key === "language") {
        setCurrentLang(e.newValue || "en");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const content = {
    en: {
      title: "Let's Work Together",
      subtitle:
        "Looking for a dedicated Full Stack Developer? Let's connect and discuss how I can contribute to your team's success.",
      form: {
        fullName: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
      },
      contact: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      social: {
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
      },
    },
    es: {
      title: "Trabajemos Juntos",
      subtitle:
        "¿Buscas un Desarrollador Full Stack comprometido? Conectemos y conversemos sobre cómo puedo contribuir al éxito de tu equipo.",
      form: {
        fullName: "Nombre Completo",
        email: "Dirección de Email",
        subject: "Asunto",
        message: "Tu Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
      },
      contact: {
        email: "Email",
        phone: "Teléfono",
        location: "Ubicación",
      },
      social: {
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
      },
    },
  };

  const currentContent = content[currentLang];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in discussing employment opportunities with your team.`
    );
    window.open(`https://wa.me/50684017010?text=${message}`, "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/antonio-mora", "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen bg-primary-white"
    >
      <div className="contact-content max-w-4xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-poppins font-light text-primary-dark mb-6 tracking-tight">
            {currentContent.title}
          </h1>
          <p className="text-xl font-roboto font-light text-primary-dark max-w-2xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-primary-gray/10 px-12 py-16 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={currentContent.form.fullName}
                    className="w-full px-0 py-4 border-0 border-b border-primary-gray/30 font-roboto text-lg text-primary-dark placeholder:text-primary-dark/60 bg-transparent focus:outline-none focus:border-primary-blue transition-colors duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={currentContent.form.email}
                    className="w-full px-0 py-4 border-0 border-b border-primary-gray/30 font-roboto text-lg text-primary-dark placeholder:text-primary-dark/60 bg-transparent focus:outline-none focus:border-primary-blue transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={currentContent.form.subject}
                  className="w-full px-0 py-4 border-0 border-b border-primary-gray/30 font-roboto text-lg text-primary-dark placeholder:text-primary-dark/60 bg-transparent focus:outline-none focus:border-primary-blue transition-colors duration-300"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={currentContent.form.message}
                  rows={4}
                  className="w-full px-0 py-4 border-0 border-b border-primary-gray/30 font-roboto text-lg text-primary-dark placeholder:text-primary-dark/60 bg-transparent focus:outline-none focus:border-primary-blue transition-colors duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-blue text-primary-white py-4 px-8 font-roboto text-lg font-medium transition-all duration-300 hover:bg-primary-blue/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ borderRadius: "0" }}
                >
                  {isSubmitting
                    ? currentContent.form.sending
                    : currentContent.form.send}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="mt-24 pt-16 border-t border-primary-gray/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Email */}
            <div>
              <h3 className="font-poppins text-sm font-medium text-primary-dark mb-2 uppercase tracking-wide">
                {currentContent.contact.email}
              </h3>
              <p className="font-roboto text-lg text-primary-dark">
                antonio.mora@example.com
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-poppins text-sm font-medium text-primary-dark mb-2 uppercase tracking-wide">
                {currentContent.contact.phone}
              </h3>
              <p className="font-roboto text-lg text-primary-dark">
                +506 8401-7010
              </p>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-poppins text-sm font-medium text-primary-dark mb-2 uppercase tracking-wide">
                {currentContent.contact.location}
              </h3>
              <p className="font-roboto text-lg text-primary-dark">
                Costa Rica
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 flex justify-center gap-8">
            <button
              onClick={openWhatsApp}
              className="font-roboto text-primary-blue hover:text-primary-dark transition-colors duration-300 text-lg"
            >
              {currentContent.social.whatsapp}
            </button>
            <button
              onClick={openLinkedIn}
              className="font-roboto text-primary-blue hover:text-primary-dark transition-colors duration-300 text-lg"
            >
              {currentContent.social.linkedin}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
