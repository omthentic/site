import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://omthentic.ai"),
  title: "Omthentic — Aligned authenticity",
  description:
    "A house of aligned technologies that close the distance between intention and expression. Home to InterviewMD and Prepbond.",
  keywords: "aligned authenticity, Omthentic, InterviewMD, Prepbond, communication, becoming",
  authors: [{ name: "The Stewards of Omthentic" }],
  openGraph: {
    title: "Omthentic — Aligned authenticity",
    description:
      "A house of aligned technologies. Ventures that bring people more honestly into contact with themselves and each other.",
    type: "website",
    url: "https://omthentic.ai",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omthentic — Aligned authenticity",
    description:
      "A house of aligned technologies. Ventures that bring people more honestly into contact with themselves.",
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
