"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // create canvas context
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // create 150 stars (populated after initial resize)
    const stars: { x: number; y: number; r: number; phase: number }[] = [];

    // resize canvas res to match viewport, scaling star positions proportionally
    const resize = () => {
      const prevW = canvas.width || window.innerWidth;
      const prevH = canvas.height || window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      for (const star of stars) {
        star.x = (star.x / prevW) * canvas.width;
        star.y = (star.y / prevH) * canvas.height;
      }
    };
    resize();

    stars.push(...Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      phase: Math.random() * Math.PI * 2, // randomize phase
    })));

    // define speed
    const speed = 0.0006;
    let animId: number;

    // draw stars with twinkling effect
    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // twinkle each star by adjusting opacity with sine wave
      for (const star of stars) {
        const opacity = 0.65 + 0.35 * Math.sin(t * speed * Math.PI * 2 + star.phase);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fill();
      }

      // create transparency gradient to fade stars out
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(0,0,0,0)");
      gradient.addColorStop(1, "rgba(0,0,0,1)");
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    // resizing window listener
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
    />
  );
}