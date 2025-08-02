import type { Metadata, Viewport } from "next";
import { Poppins, Roboto } from "next/font/google";
import { LanguageProvider } from "./components/providers/LanguageProvider";
import { SITE_CONFIG, PERSONAL_INFO } from "./lib/data";
import "./globals.css";

// Font optimization
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: true,
});

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: "Antonio Mora - Ingeniero de Software | Desarrollador Full Stack",
    template: "%s | Antonio Mora - Portfolio"
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: PERSONAL_INFO.name, url: SITE_CONFIG.url }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  
  // OpenGraph
  openGraph: {
    type: "website",
    locale: "es_CR",
    alternateLocale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Antonio Mora - Ingeniero de Software",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antonio Mora - Ingeniero de Software Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Antonio Mora - Ingeniero de Software",
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
    creator: "@antoniomora",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  
  // Additional metadata
  category: "portfolio",
  classification: "Software Engineer Portfolio",
  other: {
    "theme-color": "#00bfff",
    "color-scheme": "dark",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00bfff" },
    { media: "(prefers-color-scheme: dark)", color: "#00bfff" },
  ],
  colorScheme: "dark",
};

// JSON-LD structured data
function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_INFO.name,
    "jobTitle": "Software Engineer",
    "description": "Software engineering student specialized in full stack development with backend focus",
    "url": SITE_CONFIG.url,
    "email": PERSONAL_INFO.email,
    "telephone": PERSONAL_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Costa Rica"
    },
    "sameAs": [
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.github
    ],
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Development",
      "Backend Development",
      "Java",
      "C#",
      "JavaScript",
      "React",
      "Node.js",
      "Databases"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Universidad Fidélitas"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Greenlight Consulting"
    }
  };

  return JSON.stringify(structuredData);
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="es" 
      className={`scroll-smooth ${poppins.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href={SITE_CONFIG.url} />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateStructuredData() }}
        />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/poppins-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body 
        className="antialiased overflow-x-hidden bg-primary-500 text-white"
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-500 text-white px-4 py-2 rounded-lg z-50 font-heading font-medium"
        >
          Saltar al contenido principal
        </a>
        
        {/* Language Provider */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
        {/* Performance monitoring (optional) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics (replace with your GA4 ID) */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
        
        {/* Service Worker registration (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}