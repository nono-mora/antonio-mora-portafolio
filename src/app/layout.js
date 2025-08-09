import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonio Mora Blotta",
  jobTitle: "Software Engineer",
  url: "https://antoniomora.dev",
  sameAs: [
    "https://www.linkedin.com/in/antonio-blotta/",
    "https://github.com/nono-mora",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Greenlight Consulting",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Universidad Cenfotec",
  },
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "RPA",
    "JavaScript",
    "C#",
    ".NET",
  ],
};

export const metadata = {
  title: "Antonio Mora - Software Engineer",
  description:
    "Software Engineer specialized in full-stack development with practical experience in RPA automation and web applications. Proficient in C/C++, C#, JavaScript, Python and Agile methodologies.",
  keywords:
    "Software Engineer, Full Stack Developer, .NET, React, Node.js, C#, JavaScript, TypeScript, Web Development, Antonio Mora Blotta",
  author: "Antonio Mora Blotta",
  robots: "index, follow",
  openGraph: {
    title: "Antonio Mora - Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, .NET technologies, and modern web applications.",
    url: "https://antoniomora.dev",
    siteName: "Antonio Mora Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antonio Mora - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Mora - Software Engineer",
    description:
      "Software Engineer specializing in full-stack development, .NET technologies, and modern web applications.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://antoniomora.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://antoniomora.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E1E1E" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body
        className={`${roboto.className} bg-primary-dark text-primary-white antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
