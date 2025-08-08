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
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState("");
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
      validation: {
        fullName: {
          required: "Full name is required",
          minLength: "Name must be at least 2 characters",
          maxLength: "Name cannot exceed 50 characters",
        },
        email: {
          required: "Email address is required",
          invalid: "Please enter a valid email address",
        },
        subject: {
          required: "Subject is required",
          minLength: "Subject must be at least 5 characters",
          maxLength: "Subject cannot exceed 100 characters",
        },
        message: {
          required: "Message is required",
          minLength: "Message must be at least 20 characters",
          maxLength: "Message cannot exceed 1000 characters",
        },
      },
      messages: {
        success: "Thank you! Your message has been sent successfully.",
        error:
          "Sorry, there was an error sending your message. Please try again.",
        networkError:
          "Network error. Please check your connection and try again.",
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
        github: "GitHub",
      },
      validation: {
        fullName: {
          required: "El nombre completo es requerido",
          minLength: "El nombre debe tener al menos 2 caracteres",
          maxLength: "El nombre no puede exceder 50 caracteres",
        },
        email: {
          required: "La dirección de email es requerida",
          invalid: "Por favor ingresa un email válido",
        },
        subject: {
          required: "El asunto es requerido",
          minLength: "El asunto debe tener al menos 5 caracteres",
          maxLength: "El asunto no puede exceder 100 caracteres",
        },
        message: {
          required: "El mensaje es requerido",
          minLength: "El mensaje debe tener al menos 20 caracteres",
          maxLength: "El mensaje no puede exceder 1000 caracteres",
        },
      },
      messages: {
        success: "¡Gracias! Tu mensaje ha sido enviado exitosamente.",
        error:
          "Lo siento, hubo un error enviando tu mensaje. Inténtalo de nuevo.",
        networkError:
          "Error de conexión. Verifica tu internet e inténtalo de nuevo.",
      },
    },
  };

  const currentContent = content[currentLang];

  // Validation functions
  const validateField = (name, value) => {
    const validations = currentContent.validation[name];
    if (!validations) return null;

    if (!value.trim()) {
      return validations.required;
    }

    switch (name) {
      case "fullName":
        if (value.length < 2) return validations.minLength;
        if (value.length > 50) return validations.maxLength;
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return validations.invalid;
        break;
      case "subject":
        if (value.length < 5) return validations.minLength;
        if (value.length > 100) return validations.maxLength;
        break;
      case "message":
        if (value.length < 20) return validations.minLength;
        if (value.length > 1000) return validations.maxLength;
        break;
    }
    return null;
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    const error = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    // Clear submit status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage("");
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setSubmitStatus("error");
      setSubmitMessage("Please fix the errors above before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(currentContent.messages.success);
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
        setFieldErrors({});
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        error.message === "Failed to fetch"
          ? currentContent.messages.networkError
          : currentContent.messages.error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in discussing employment opportunities with you.`
    );
    window.open(`https://wa.me/50689761010?text=${message}`, "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/antonio-blotta/");
  };

  const openGitHub = () => {
    window.open("https://github.com/nono-mora");
  };

  const getInputClassName = (fieldName) => {
    const baseClass =
      "w-full px-0 py-4 border-0 border-b font-roboto text-lg text-primary-dark placeholder:text-primary-dark/60 bg-transparent focus:outline-none transition-colors duration-300";

    if (fieldErrors[fieldName]) {
      return `${baseClass} border-red-500 focus:border-red-500`;
    }

    if (formData[fieldName] && !fieldErrors[fieldName]) {
      return `${baseClass} border-green-500 focus:border-green-500`;
    }

    return `${baseClass} border-primary-gray/30 focus:border-primary-blue`;
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
            {/* Submit Status Message */}
            {submitStatus && (
              <div
                className={`mb-8 p-4 rounded-lg ${
                  submitStatus === "success"
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`material-icons text-lg ${
                      submitStatus === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitStatus === "success" ? "check_circle" : "error"}
                  </span>
                  <p
                    className={`font-roboto ${
                      submitStatus === "success"
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    {submitMessage}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder={currentContent.form.fullName}
                    className={getInputClassName("fullName")}
                    aria-invalid={!!fieldErrors.fullName}
                  />
                  {fieldErrors.fullName && (
                    <p className="text-red-500 text-sm font-roboto flex items-center gap-1">
                      <span className="material-icons text-xs">error</span>
                      {fieldErrors.fullName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder={currentContent.form.email}
                    className={getInputClassName("email")}
                    aria-invalid={!!fieldErrors.email}
                  />
                  {fieldErrors.email && (
                    <p className="text-red-500 text-sm font-roboto flex items-center gap-1">
                      <span className="material-icons text-xs">error</span>
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder={currentContent.form.subject}
                  className={getInputClassName("subject")}
                  aria-invalid={!!fieldErrors.subject}
                />
                {fieldErrors.subject && (
                  <p className="text-red-500 text-sm font-roboto flex items-center gap-1">
                    <span className="material-icons text-xs">error</span>
                    {fieldErrors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder={currentContent.form.message}
                    rows={4}
                    className={`${getInputClassName("message")} resize-none`}
                    aria-invalid={!!fieldErrors.message}
                  />
                  <div className="absolute bottom-2 right-0 text-xs text-primary-gray/60">
                    {formData.message.length}/1000
                  </div>
                </div>
                {fieldErrors.message && (
                  <p className="text-red-500 text-sm font-roboto flex items-center gap-1">
                    <span className="material-icons text-xs">error</span>
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 font-roboto text-lg font-medium transition-all duration-300 ${
                    isSubmitting
                      ? "bg-primary-gray cursor-not-allowed text-primary-white/70"
                      : "bg-primary-blue hover:bg-primary-blue/90 text-primary-white hover:shadow-lg"
                  }`}
                  style={{ borderRadius: "0" }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="material-icons text-lg animate-spin">
                        refresh
                      </span>
                      {currentContent.form.sending}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span className="material-icons text-lg">send</span>
                      {currentContent.form.send}
                    </span>
                  )}
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
                nmblotta@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-poppins text-sm font-medium text-primary-dark mb-2 uppercase tracking-wide">
                {currentContent.contact.phone}
              </h3>
              <p className="font-roboto text-lg text-primary-dark">
                +506 8976-1010
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
            <button
              onClick={openGitHub}
              className="font-roboto text-primary-blue hover:text-primary-dark transition-colors duration-300 text-lg"
            >
              {currentContent.social.github}
            </button>
          </div>
        </div>
      </div>

      {/* Material Icons Link */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </section>
  );
};

export default ContactSection;
