import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omthentic — Speak your truth with confidence",
  description: "AI-powered practice + human‑centred guidance to help you express your most authentic self in high‑stakes moments.",
  keywords: "communication skills, interview coaching, public speaking, confidence building, AI feedback, authenticity",
  authors: [{ name: "Omthentic Team" }],
  openGraph: {
    title: "Omthentic — Speak your truth with confidence",
    description: "Practice real interview questions with AI feedback and coach‑verified tips.",
    type: "website",
    url: "https://omthentic.com",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omthentic — Speak your truth with confidence",
    description: "Practice real interview questions with AI feedback and coach‑verified tips.",
    images: ["/twitter-image"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  icons: {
    icon: [
      { url: '/images/Omthentic Icon.svg', type: 'image/svg+xml' },
      { url: '/images/Omthentic Icon.svg', type: 'image/svg+xml', sizes: '32x32' },
      { url: '/images/Omthentic Icon.svg', type: 'image/svg+xml', sizes: '48x48' },
      { url: '/images/Omthentic Icon.svg', type: 'image/svg+xml', sizes: '64x64' }
    ],
    shortcut: [
      { url: '/images/Omthentic Icon.svg', type: 'image/svg+xml' },
      { url: '/images/Omthentic Icon.svg', type: 'image/svg+xml' }
    ],
    apple: {
      url: '/images/Omthentic Icon.svg',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
