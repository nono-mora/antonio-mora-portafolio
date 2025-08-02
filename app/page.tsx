import { Suspense } from 'react';
import type { Metadata } from 'next';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

// UI Components
import FloatingElements from './components/ui/FloatingElements';
import { Spinner } from './components/ui';

// Data
import { SITE_CONFIG } from './lib/data';

// Page metadata
export const metadata: Metadata = {
  title: 'Antonio Mora - Portfolio | Ingeniero de Software',
  description: 'Portfolio profesional de Antonio Mora, estudiante de ingeniería de software especializado en desarrollo full stack y backend. Descubre mis proyectos y experiencia.',
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      'es-CR': SITE_CONFIG.url,
      'en-US': `${SITE_CONFIG.url}/en`,
    },
  },
  openGraph: {
    title: 'Antonio Mora - Portfolio | Ingeniero de Software',
    description: 'Portfolio profesional de Antonio Mora, estudiante de ingeniería de software especializado en desarrollo full stack y backend.',
    url: SITE_CONFIG.url,
    images: [
      {
        url: '/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Antonio Mora Portfolio - Ingeniero de Software',
      },
    ],
    type: 'website',
  },
};

// Loading component for Suspense boundaries
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <Spinner size="lg" color="accent" />
        <p className="text-secondary-500 mt-4 font-body">Cargando...</p>
      </div>
    </div>
  );
}

// Error Boundary Component (simple fallback)
function SectionError({ error, retry }: { error: Error; retry: () => void }) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-xl font-heading font-semibold mb-2 text-white">
          Oops! Algo salió mal
        </h3>
        <p className="text-secondary-500 mb-4 font-body">
          Ha ocurrido un error al cargar esta sección.
        </p>
        <button
          onClick={retry}
          className="bg-accent-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300 font-heading"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary-500 text-white">
      {/* Header */}
      <Suspense fallback={<div className="h-20 bg-primary-500" />}>
        <Header />
      </Suspense>

      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* Hero Section */}
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>

        {/* About Section */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        {/* Experience Section */}
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        {/* Skills Section */}
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-40 bg-primary-500" />}>
        <Footer />
      </Suspense>

      {/* Floating Elements */}
      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>

      {/* Structured Data for current page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Antonio Mora - Portfolio",
            "description": "Portfolio profesional de Antonio Mora, ingeniero de software",
            "url": SITE_CONFIG.url,
            "mainEntity": {
              "@type": "Person",
              "name": "Antonio Mora",
              "jobTitle": "Software Engineer",
              "description": "Estudiante de ingeniería de software especializado en desarrollo full stack",
              "knowsAbout": [
                "Java", "C#", "JavaScript", "React", "Node.js", 
                "SQL Server", "MongoDB", "Git", "UiPath"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": SITE_CONFIG.url
                }
              ]
            }
          }),
        }}
      />
    </div>
  );
}

// Static generation options (optional)
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour