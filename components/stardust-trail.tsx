"use client"

import { useEffect, useRef, useState } from "react"

// Site palette: primary (orange), secondary (pink), light-purple accent, white
const COLORS = ["#ffbf35", "#ff64f2", "#E5B7FF", "#ffffff"]

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
  ci: number
}

const MAX = 600

export function StardustTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)")
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setEnabled(pointer.matches && !motion.matches)
    update()
    pointer.addEventListener("change", update)
    motion.addEventListener("change", update)
    return () => {
      pointer.removeEventListener("change", update)
      motion.removeEventListener("change", update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    // Pre-render one soft glow sprite per color. drawImage is ~free vs shadowBlur.
    const SPRITE = 64
    const sprites: HTMLCanvasElement[] = COLORS.map((color) => {
      const s = document.createElement("canvas")
      s.width = s.height = SPRITE
      const c = s.getContext("2d")!
      const g = c.createRadialGradient(SPRITE / 2, SPRITE / 2, 0, SPRITE / 2, SPRITE / 2, SPRITE / 2)
      g.addColorStop(0, color)
      g.addColorStop(0.25, color)
      g.addColorStop(1, "transparent")
      c.fillStyle = g
      c.fillRect(0, 0, SPRITE, SPRITE)
      return s
    })

    const particles: Particle[] = []
    let lastX = 0
    let lastY = 0
    let hasLast = false
    let animId = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const spawn = (x: number, y: number, dx: number, dy: number) => {
      const dist = Math.hypot(dx, dy)
      const count = Math.min(6, Math.floor(dist / 3) + 2)
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX) particles.shift()
        const a = Math.random() * Math.PI * 2
        const sp = Math.random() * 0.8 + 0.15
        particles.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(a) * sp + dx * 0.04,
          vy: Math.sin(a) * sp + dy * 0.04,
          life: 1,
          size: Math.random() * 18 + 8,
          ci: (Math.random() * COLORS.length) | 0,
        })
      }
    }

    const onMove = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e
      if (!hasLast) {
        lastX = x
        lastY = y
        hasLast = true
        spawn(x, y, 0, 0)
        return
      }
      spawn(x, y, x - lastX, y - lastY)
      lastX = x
      lastY = y
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "lighter"
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.95
        // damp + gentle upward bias → evaporative drift
        p.vy = p.vy * 0.95 - 0.015
        p.life -= 0.009
        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }
        const s = p.size * p.life
        ctx.globalAlpha = p.life * 0.9
        ctx.drawImage(sprites[p.ci], p.x - s / 2, p.y - s / 2, s, s)
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = "source-over"
      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 w-full h-full pointer-events-none z-[100]"
      style={{ willChange: "transform" }}
    />
  )
}