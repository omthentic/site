"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Index", href: "/" },
  { label: "Vision", href: "/vision" },
  { label: "Companies", href: "/companies" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav" aria-label="Primary" data-scrolled={scrolled ? "1" : "0"}>
      <Link className="brand" href="/">
        <span className="brand-mark" aria-hidden="true" />
        <span className="brand-name">Omthentic</span>
      </Link>
      <div className="nav-links">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={pathname === l.href ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
