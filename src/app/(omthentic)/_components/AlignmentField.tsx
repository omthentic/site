"use client";

import { useEffect, useRef } from "react";

type AlignmentFieldProps = {
  hero?: boolean;
  density?: number;
  speed?: number;
  pull?: number;
  spread?: number;
  showAxis?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaHidden?: boolean;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ty: number;
  tx: number;
  mass: number;
  phase: number;
  birth: number;
  life: number;
  size: number;
};

function hexToRgb(hex: string) {
  hex = (hex || "").trim();
  if (hex.startsWith("rgb")) {
    const m = hex.match(/[\d.]+/g) || [];
    return { r: +m[0] || 0, g: +m[1] || 0, b: +m[2] || 0 };
  }
  let h = hex.replace("#", "");
  if (h.length === 3)
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  const v = parseInt(h, 16) || 0;
  return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
}

function cssVar(name: string, fallback: string) {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return v || fallback;
}

export function AlignmentField({
  hero = false,
  density = 1,
  speed = 1,
  pull = 1,
  spread = 1,
  showAxis = true,
  className,
  style,
  ariaHidden = true,
}: AlignmentFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let axisX = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let t = 0;
    let last = 0;
    let raf = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      axisX = w / 2;
    };

    const spawn = () => {
      const base = hero ? 520 : 200;
      const motion = +cssVar("--motion", "1") || 1;
      const count = Math.round(base * density * Math.max(0.3, motion));
      particles = [];
      for (let i = 0; i < count; i++) {
        const side = Math.random() < 0.5 ? -1 : 1;
        const dist = (0.06 + Math.random() * 0.94) * (w * 0.5) * spread;
        const yJ = (Math.random() - 0.5) * h * 1.15;
        const r = Math.random();
        let txAbs;
        if (r < 0.3) txAbs = Math.random() * 6;
        else if (r < 0.8) txAbs = 8 + Math.random() * 60;
        else txAbs = 60 + Math.random() * 220;
        const txSign = Math.random() < 0.5 ? -1 : 1;
        particles.push({
          x: w / 2 + side * dist + (Math.random() - 0.5) * 60,
          y: h / 2 + yJ,
          vx: 0,
          vy: 0,
          ty: h / 2 + yJ * (0.6 + Math.random() * 0.4),
          tx: txSign * txAbs,
          mass: 0.6 + Math.random() * 0.9,
          phase: Math.random() * Math.PI * 2,
          birth: hero ? Math.random() * 1.4 : 0,
          life: 0,
          size: 0.6 + Math.random() * 1.4,
        });
      }
    };

    const update = (dt: number) => {
      const motion = +cssVar("--motion", "1") || 1;
      const sp = speed * Math.max(0.25, motion);
      const pl = pull * sp;
      const drift = 0.06 * sp;

      for (const p of particles) {
        if (p.birth > 0) {
          p.birth -= dt;
          continue;
        }
        p.life += dt;

        const tx = axisX + p.tx + Math.sin(t * 0.5 + p.phase) * 6 * sp;
        const ty = p.ty + Math.sin(t * 0.3 + p.phase * 1.7) * 14 * sp;

        const fx = ((tx - p.x) * 0.018 * pl) / p.mass;
        const fy = ((ty - p.y) * 0.012 * pl) / p.mass;
        p.vx += fx;
        p.vy += fy;

        p.vy += Math.sin(t * 0.6 + p.phase) * drift * 0.02;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          const r = 140;
          if (d2 < r * r && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = (1 - d / r) * 1.2;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        p.vx *= 0.86;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;
      }
    };

    const draw = () => {
      const root = document.documentElement;
      const accent = hexToRgb(
        getComputedStyle(root).getPropertyValue("--accent").trim() || "#d4a574"
      );
      const ink = hexToRgb(
        getComputedStyle(root).getPropertyValue("--ink").trim() || "#f1e6d3"
      );
      const bg = hexToRgb(
        getComputedStyle(root).getPropertyValue("--bg").trim() || "#100806"
      );

      ctx.fillStyle = `rgba(${bg.r},${bg.g},${bg.b},${hero ? 0.12 : 0.22})`;
      ctx.fillRect(0, 0, w, h);

      if (showAxis) {
        const grad = ctx.createLinearGradient(axisX - 80, 0, axisX + 80, 0);
        grad.addColorStop(0, `rgba(${accent.r},${accent.g},${accent.b},0)`);
        grad.addColorStop(
          0.5,
          `rgba(${accent.r},${accent.g},${accent.b},${hero ? 0.045 : 0.022})`
        );
        grad.addColorStop(1, `rgba(${accent.r},${accent.g},${accent.b},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(axisX - 80, 0, 160, h);

        const lineAlpha = hero ? 0.5 : 0.25;
        ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${lineAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(axisX + 0.5, 0);
        ctx.lineTo(axisX + 0.5, h);
        ctx.stroke();
      }

      for (const p of particles) {
        if (p.birth > 0) continue;
        const dist = Math.abs(p.x - axisX);
        const near = Math.max(0, 1 - dist / (w * 0.36));
        const r = ink.r * (1 - near) + accent.r * near;
        const g = ink.g * (1 - near) + accent.g * near;
        const b = ink.b * (1 - near) + accent.b * near;
        const alpha = (0.32 + near * 0.55) * Math.min(1, p.life * 1.4);

        ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (near > 0.6 && hero) {
          ctx.fillStyle = `rgba(${accent.r},${accent.g},${accent.b},${
            (near - 0.6) * 0.22
          })`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }

        if (
          hero &&
          dist > 60 &&
          dist < w * 0.45 &&
          Math.random() < 0.004
        ) {
          ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},0.07)`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(axisX, p.y);
          ctx.stroke();
        }
      }
    };

    const loop = (ts: number) => {
      raf = requestAnimationFrame(loop);
      if (!last) last = ts;
      const dt = Math.min(0.05, (ts - last) / 1000);
      last = ts;
      t += dt;
      update(dt);
      draw();
    };

    resize();
    spawn();

    if (reduceMotion) {
      draw();
      return;
    }

    raf = requestAnimationFrame(loop);

    const re = () => {
      resize();
      spawn();
    };
    const timers = [setTimeout(re, 50), setTimeout(re, 300)];
    if (document.fonts && document.fonts.ready)
      document.fonts.ready.then(re).catch(() => {});

    const onResize = () => resize();
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [hero, density, speed, pull, spread, showAxis]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden={ariaHidden}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
    />
  );
}
