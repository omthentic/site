import "./omthentic.css";
import { SiteNav } from "./_components/SiteNav";
import { SiteFooter } from "./_components/SiteFooter";

export default function OmthenticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="omthentic-root" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}
