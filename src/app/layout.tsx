import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omthentic — Speak your truth with confidence",
  description: "AI-powered practice + human‑centred guidance to help you express your most authentic self in high‑stakes moments.",
  keywords: "communication skills, interview coaching, public speaking, confidence building, AI feedback, authenticity",
  authors: [{ name: "Omthentic Team" }],
  openGraph: {
    title: "Omthentic — Speak your truth with confidence",
    description: "Practice with real-time AI feedback tuned to your unique strengths.",
    type: "website",
    url: "https://omthentic.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omthentic — Speak your truth with confidence",
    description: "Practice with real-time AI feedback tuned to your unique strengths.",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: 'https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: [
      { url: 'https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Icon.svg', type: 'image/svg+xml' }
    ],
    apple: {
      url: 'https://ik.imagekit.io/mwp/Omthentic/Omthentic%20Icon.svg',
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
