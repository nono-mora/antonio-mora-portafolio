"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const ContactSection = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        [".contact-header", ".contact-info", ".contact-form"],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      );
    },
    { scope: containerRef }
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
        "Ready to start your next project? Let's connect and discuss how I can help bring your ideas to life.",
      form: {
        name: "Full Name",
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
        whatsapp: "WhatsApp",
      },
      success: "Message sent successfully! I'll get back to you soon.",
      error: "There was an error sending your message. Please try again.",
    },
    es: {
      title: "Trabajemos Juntos",
      subtitle:
        "¿Listo para comenzar tu próximo proyecto? Conectemos y conversemos sobre cómo puedo ayudarte a hacer realidad tus ideas.",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Tu Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
      },
      contact: {
        email: "Correo",
        phone: "Teléfono",
        location: "Ubicación",
        whatsapp: "WhatsApp",
      },
      success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      error: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.",
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
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hola Antonio, me interesa contactarte para un proyecto."
    );
    window.open(`https://wa.me/50689761010?text=${message}`, "_blank");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <section
        ref={containerRef}
        id="contact"
        className="min-h-screen bg-primary-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="contact-header text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-dark mb-4">
              {currentContent.title}
            </h2>
            <p className="text-lg text-primary-gray font-roboto max-w-2xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="contact-info space-y-8">
                <h3 className="text-2xl font-poppins font-semibold text-primary-dark mb-6">
                  Contact Information
                </h3>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-primary-blue">
                      email
                    </span>
                  </div>
                  <div>
                    <p className="font-poppins font-medium text-primary-dark">
                      {currentContent.contact.email}
                    </p>
                    <p className="text-primary-gray font-roboto">
                      antonio.mora@example.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-primary-blue">
                      phone
                    </span>
                  </div>
                  <div>
                    <p className="font-poppins font-medium text-primary-dark">
                      {currentContent.contact.phone}
                    </p>
                    <p className="text-primary-gray font-roboto">
                      +506 8976-1010
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-primary-blue">
                      location_on
                    </span>
                  </div>
                  <div>
                    <p className="font-poppins font-medium text-primary-dark">
                      {currentContent.contact.location}
                    </p>
                    <p className="text-primary-gray font-roboto">Costa Rica</p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-6">
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg font-poppins font-medium hover:bg-green-600 transition-all duration-300 hover:scale-105"
                  >
                    <span className="material-icons">chat</span>
                    {currentContent.contact.whatsapp}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="contact-form">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-primary-dark font-poppins font-medium mb-2">
                        {currentContent.form.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-gray rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300 font-roboto"
                      />
                    </div>
                    <div>
                      <label className="block text-primary-dark font-poppins font-medium mb-2">
                        {currentContent.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-gray rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300 font-roboto"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-primary-dark font-poppins font-medium mb-2">
                      {currentContent.form.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-primary-gray rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300 font-roboto"
                    />
                  </div>

                  <div>
                    <label className="block text-primary-dark font-poppins font-medium mb-2">
                      {currentContent.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-primary-gray rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300 font-roboto resize-vertical"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-poppins font-medium transition-all duration-300 ${
                      isSubmitting
                        ? "bg-primary-gray text-white cursor-not-allowed"
                        : "bg-primary-blue text-white hover:bg-blue-500 hover:scale-105"
                    }`}
                  >
                    <span className="material-icons">send</span>
                    {isSubmitting
                      ? currentContent.form.sending
                      : currentContent.form.send}
                  </button>
                </form>

                {/* Status Messages */}
                {submitStatus && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-icons text-sm">
                        {submitStatus === "success" ? "check_circle" : "error"}
                      </span>
                      <p className="font-roboto">
                        {submitStatus === "success"
                          ? currentContent.success
                          : currentContent.error}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
