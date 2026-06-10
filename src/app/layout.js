import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://devranperdana.my.id/"),
  title: {
    default: "Devran Perdana Malik | Full Stack Developer",
    template: "%s | Devran Perdana Malik",
  },
  description:
    "Portfolio Devran Perdana Malik, Full Stack Developer yang membangun solusi efisien untuk masalah bisnis nyata.",
  keywords: ["Devran Perdana Malik", "Full Stack Developer", "Backend Developer", "Web Developer", "Software Engineer", "Portfolio", "Indonesia"],
  authors: [{ name: "Devran Perdana Malik", url: "https://devranperdana.my.id/" }],
  creator: "Devran Perdana Malik",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://devranperdana.my.id/",
    title: "Devran Perdana Malik | Full Stack Developer",
    description: "Portfolio Devran Perdana Malik, Full Stack Developer yang membangun solusi efisien untuk masalah bisnis nyata.",
    siteName: "Devran Perdana Malik Portfolio",
    images: [
      {
        url: "/api/og", // A fallback or dynamic OG image path, we can just use a static one or assume standard
        width: 1200,
        height: 630,
        alt: "Devran Perdana Malik Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devran Perdana Malik | Full Stack Developer",
    description: "Portfolio Devran Perdana Malik, Full Stack Developer yang membangun solusi efisien untuk masalah bisnis nyata.",
    creator: "@devran", // We can use a generic placeholder
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
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://devranperdana.my.id/#website",
        url: "https://devranperdana.my.id/",
        name: "Devran Perdana Malik Portfolio",
        description:
          "Portfolio Devran Perdana Malik, Full Stack Developer yang membangun solusi efisien untuk masalah bisnis nyata.",
        publisher: {
          "@id": "https://devranperdana.my.id/#person",
        },
      },
      {
        "@type": "Person",
        "@id": "https://devranperdana.my.id/#person",
        name: "Devran Perdana Malik",
        url: "https://devranperdana.my.id/",
        jobTitle: "Full Stack Developer",
      },
    ],
  };

  return (
    <html className={`${geistSans.variable} ${geistMono.variable}`} lang="id">
      <head>
        <SchemaMarkup schema={schemaData} />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
