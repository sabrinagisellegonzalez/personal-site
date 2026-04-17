"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const stars: { x: number; y: number; r: number; phase: number }[] = [];
    let fadeGradient: CanvasGradient | null = null;

    const resize = () => {
      const prevW = canvas.width || window.innerWidth;
      const prevH = canvas.height || window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      for (const star of stars) {
        star.x = (star.x / prevW) * canvas.width;
        star.y = (star.y / prevH) * canvas.height;
      }
      // Invalidate cached gradient on resize
      fadeGradient = null;
    };
    resize();

    stars.push(...Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
    })));

    const speed = 0.0006;
    let animId: number;

    // Set once — reused every frame instead of rebuilding rgba() strings
    ctx.fillStyle = "white";

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars using globalAlpha to avoid per-frame rgba() string allocations
      for (const star of stars) {
        ctx.globalAlpha = 0.65 + 0.35 * Math.sin(t * speed * Math.PI * 2 + star.phase);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Fade gradient — created once and cached until next resize
      if (!fadeGradient) {
        fadeGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        fadeGradient.addColorStop(0, "rgba(0,0,0,0)");
        fadeGradient.addColorStop(1, "rgba(0,0,0,1)");
      }
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = fadeGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      // Restore fillStyle for next frame's star drawing
      ctx.fillStyle = "white";

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 starting:opacity-0 opacity-100 duration-1000 delay-100 transition-opacity"
      style={{ willChange: "transform" }}
    />
  );
}
