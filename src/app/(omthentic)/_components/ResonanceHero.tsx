"use client";

import { useEffect, useRef } from "react";

type ResonanceHeroProps = {
  spawnInterval?: number;
  grow?: number;
  pulseRate?: number;
  className?: string;
  style?: React.CSSProperties;
  ariaHidden?: boolean;
};

type Ring = { r: number; age: number; max: number };
type Mote = { a: number; r: number; baseR: number; phase: number; size: number };

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

function css(name: string, fb: string) {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return v || fb;
}

function themeColors() {
  return {
    bg: hexToRgb(css("--bg", "#100806")),
    bg2: hexToRgb(css("--bg-2", "#1a0e0a")),
    ink: hexToRgb(css("--ink", "#f1e6d3")),
    accent: hexToRgb(css("--accent", "#d4a574")),
  };
}

export function ResonanceHero({
  spawnInterval = 0.95,
  grow = 220,
  pulseRate = 2.4,
  className,
  style,
  ariaHidden = true,
}: ResonanceHeroProps) {
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
    let lastW = 0;
    let lastH = 0;
    let cx = 0;
    let cy = 0;
    let rings: Ring[] = [];
    let motes: Mote[] = [];
    let lastSpawn = 0;
    const mouse = { x: -9999, y: -9999, active: false };
    let t = 0;
    let last = 0;
    let raf = 0;

    const resize = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      if (cw < 4 || ch < 4) return;
      if (lastW === cw && lastH === ch) return;
      lastW = cw;
      lastH = ch;
      w = cw;
      h = ch;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      rings = [];
      lastSpawn = 0;
      cx = w / 2;
      cy = h / 2;
      const moteCount = Math.round((w * h) / 5000);
      motes = [];
      for (let i = 0; i < moteCount; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 30 + Math.random() * Math.max(w, h) * 0.5;
        motes.push({
          a,
          r,
          baseR: r,
          phase: Math.random() * Math.PI * 2,
          size: 0.6 + Math.random() * 1.4,
        });
      }
    };

    const step = (dt: number) => {
      const tx = mouse.active ? mouse.x : w / 2;
      const ty = mouse.active ? mouse.y : h / 2;
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;

      lastSpawn += dt;
      if (lastSpawn > spawnInterval) {
        lastSpawn = 0;
        rings.push({ r: 4, age: 0, max: 1.0 });
      }
      const g = grow * dt;
      for (const ring of rings) {
        ring.r += g;
        ring.age += dt;
      }
      rings = rings.filter((r) => r.r < Math.max(w, h) * 1.2);
      for (const m of motes) {
        m.r = m.baseR + Math.sin(t * 0.6 + m.phase) * 6;
        m.a += dt * 0.04;
      }
    };

    const draw = () => {
      const c = themeColors();
      ctx.fillStyle = `rgba(${c.bg.r},${c.bg.g},${c.bg.b},0.16)`;
      ctx.fillRect(0, 0, w, h);

      for (const m of motes) {
        const x = cx + Math.cos(m.a) * m.r;
        const y = cy + Math.sin(m.a) * m.r;
        ctx.fillStyle = `rgba(${c.ink.r},${c.ink.g},${c.ink.b},0.32)`;
        ctx.beginPath();
        ctx.arc(x, y, m.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.lineWidth = 1;
      for (const ring of rings) {
        const f = ring.r / Math.max(w, h);
        const alpha = Math.max(0, 1 - f) * 0.55;
        ctx.strokeStyle = `rgba(${c.accent.r},${c.accent.g},${c.accent.b},${alpha})`;
        ctx.beginPath();
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        if (alpha > 0.3) {
          ctx.strokeStyle = `rgba(${c.accent.r},${c.accent.g},${c.accent.b},${
            (alpha - 0.3) * 0.3
          })`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
          ctx.stroke();
          ctx.lineWidth = 1;
        }
      }

      const pulse = 0.7 + Math.sin(t * pulseRate) * 0.3;
      const sourceR = 6 * pulse;
      const sg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80);
      sg.addColorStop(0, `rgba(${c.accent.r},${c.accent.g},${c.accent.b},0.5)`);
      sg.addColorStop(1, `rgba(${c.accent.r},${c.accent.g},${c.accent.b},0)`);
      ctx.fillStyle = sg;
      ctx.beginPath();
      ctx.arc(cx, cy, 80, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(${c.accent.r},${c.accent.g},${c.accent.b},0.95)`;
      ctx.beginPath();
      ctx.arc(cx, cy, sourceR, 0, Math.PI * 2);
      ctx.fill();
    };

    const loop = (ts: number) => {
      raf = requestAnimationFrame(loop);
      if (!last) last = ts;
      const dt = Math.min(0.05, (ts - last) / 1000);
      last = ts;
      const motion = +css("--motion", "1") || 1;
      t += dt * Math.max(0.2, motion);
      step(dt);
      draw();
    };

    resize();
    init();

    if (reduceMotion) {
      draw();
      return;
    }

    raf = requestAnimationFrame(loop);

    const re = () => {
      resize();
      init();
    };
    const timers = [setTimeout(re, 50), setTimeout(re, 250)];
    if (document.fonts && document.fonts.ready)
      document.fonts.ready.then(re).catch(() => {});

    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) * (w / r.width);
      mouse.y = (e.clientY - r.top) * (h / r.height);
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [spawnInterval, grow, pulseRate]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden={ariaHidden}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
    />
  );
}
