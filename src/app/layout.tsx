import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../public/fonts/dm-sans-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/dm-sans-semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f3ed",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://omthentic.ai",
  ),
  title: {
    default: "Omthentic — More human. By design.",
    template: "%s — Omthentic",
  },
  description:
    "We build technology that helps you express who you are. A venture house for human potential, starting with InterviewMD.",
  authors: [{ name: "Omthentic" }],
  openGraph: {
    type: "website",
    siteName: "Omthentic",
    title: "Omthentic — More human. By design.",
    description:
      "You are already enough. We build the technology that helps you express it.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omthentic — More human. By design.",
    description:
      "You are already enough. We build the technology that helps you express it.",
    images: ["/twitter-image"],
  },
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body style={{ fontFamily: "var(--font-dm-sans), Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
