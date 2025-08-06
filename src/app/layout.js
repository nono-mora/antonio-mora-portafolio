import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Antonio Mora - Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in modern web technologies. Building scalable applications with React, Node.js, and cloud technologies.",
  keywords:
    "Full Stack Developer, React, Node.js, JavaScript, TypeScript, Web Development, Software Engineer, Antonio Mora",
  author: "Antonio Mora",
  robots: "index, follow",
  openGraph: {
    title: "Antonio Mora - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in modern web technologies.",
    url: "https://antoniomora.dev",
    siteName: "Antonio Mora Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antonio Mora - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Mora - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in modern web technologies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://antoniomora.dev",
    languages: {
      "en-US": "https://antoniomora.dev/en",
      "es-ES": "https://antoniomora.dev/es",
    },
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
      </head>
      <body
        className={`${roboto.className} bg-primary-dark text-primary-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
