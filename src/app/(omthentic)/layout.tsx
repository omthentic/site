import type { Metadata } from "next";
import "./omthentic.css";
import { SiteNav } from "./_components/SiteNav";
import { SiteFooter } from "./_components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://omthentic.ai"
  ),
  title: {
    default: "Omthentic — Aligned authenticity",
    template: "%s — Omthentic",
  },
  description:
    "Omthentic is the parent vessel for ventures that close the distance between intention and expression. Home to InterviewMD and Prepbond.",
  openGraph: {
    type: "website",
    siteName: "Omthentic",
    title: "Omthentic — Aligned authenticity",
    description:
      "A house of aligned technologies. Ventures that bring people more honestly into contact with themselves and each other.",
  },
};

export default function OmthenticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="omthentic-root">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}
