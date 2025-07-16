import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antonio Mora - Ingeniero de Software | Desarrollador Full Stack",
  description: "Portafolio profesional de Antonio Mora, ingeniero de software especializado en desarrollo full stack y backend. Experiencia en Java, C#, JavaScript, bases de datos SQL y MongoDB.",
  keywords: [
    "Antonio Mora",
    "Ingeniero de Software",
    "Desarrollador Full Stack",
    "Backend Developer",
    "Java",
    "C#",
    "JavaScript",
    "SQL Server",
    "MongoDB",
    "Costa Rica",
    "Junior Developer"
  ],
  authors: [{ name: "Antonio Mora" }],
  creator: "Antonio Mora",
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://antoniomora.dev",
    siteName: "Antonio Mora - Portfolio",
    title: "Antonio Mora - Ingeniero de Software",
    description: "Portafolio profesional de Antonio Mora, ingeniero de software especializado en desarrollo full stack y backend.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antonio Mora - Ingeniero de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Mora - Ingeniero de Software",
    description: "Portafolio profesional de Antonio Mora, ingeniero de software especializado en desarrollo full stack y backend.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://antoniomora.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}