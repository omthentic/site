"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      motion.matches ||
      element.getBoundingClientRect().top < window.innerHeight * 0.9
    )
      return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!motion.matches) {
          animation = element.animate(
            [
              { opacity: 0, transform: "translateY(28px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 850, easing: "cubic-bezier(.2,.7,.2,1)", fill: "none" },
          );
        }
        observer.disconnect();
      },
      { threshold: 0.08 },
    );
    const stopMotion = () => {
      if (motion.matches) animation?.cancel();
    };
    motion.addEventListener("change", stopMotion);
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
      motion.removeEventListener("change", stopMotion);
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
