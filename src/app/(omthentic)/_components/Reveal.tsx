"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  [key: string]: unknown;
};

export function Reveal({
  children,
  as: Tag = "div",
  delay,
  className,
  style,
  id,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal${shown ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      data-delay={delay}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
