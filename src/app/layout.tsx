import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Articulate - Speak with Confidence, Be Your Authentic Self",
  description: "Transform your communication skills with AI-powered feedback, real-time coaching, and personalized practice sessions. Build confidence and speak authentically.",
  keywords: "communication skills, interview coaching, public speaking, confidence building, AI feedback",
  authors: [{ name: "Articulate Team" }],
  openGraph: {
    title: "Articulate - Speak with Confidence, Be Your Authentic Self",
    description: "Transform your communication skills with AI-powered feedback, real-time coaching, and personalized practice sessions.",
    type: "website",
    url: "https://articulate.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articulate - Speak with Confidence, Be Your Authentic Self",
    description: "Transform your communication skills with AI-powered feedback, real-time coaching, and personalized practice sessions.",
  },
  viewport: "width=device-width, initial-scale=1",
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
