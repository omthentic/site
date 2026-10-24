"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";
import { Arrow } from "./Arrow";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onClick = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    const wide = window.matchMedia("(min-width: 761px)");
    const onResize = () => {
      if (wide.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    wide.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
      wide.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header
      className="site-nav"
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <noscript>
        <style>{`@media(max-width:760px){.menu-toggle{display:none!important}.nav-inner{flex-wrap:wrap;padding-block:18px;gap:18px}.primary-navigation{display:flex!important;position:static!important;width:100%;padding:0!important;gap:24px!important;border:0!important}.primary-navigation a{font-size:13px!important;padding:5px 0!important}.primary-navigation .nav-contact{gap:8px}.primary-navigation .nav-contact .arrow{width:16px;height:16px}}`}</style>
      </noscript>
      <div className="wrap nav-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Omthentic home"
          onClick={() => setOpen(false)}
        >
          <BrandMark /> <span>omthentic</span>
        </Link>

        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span
            className={`menu-icon${open ? " is-open" : ""}`}
            aria-hidden="true"
          >
            <i />
            <i />
          </span>
        </button>
        <nav
          id="primary-navigation"
          className={`primary-navigation${open ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <Link
            href="/vision"
            aria-current={pathname === "/vision" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Our approach
          </Link>
          <Link
            href="/companies"
            aria-current={pathname === "/companies" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Ventures
          </Link>
          <Link
            className="nav-contact"
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Let’s talk <Arrow diagonal />
          </Link>
        </nav>
      </div>
    </header>
  );
}
