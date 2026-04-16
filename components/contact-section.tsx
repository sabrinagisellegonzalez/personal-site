"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react"
import { cn } from "@/lib/utils"

export function ContactSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const angle = useMotionValue(0)
  const sweepOpacity = useMotionValue(0)

  const sweepBackground = useTransform(angle, (a) =>
    `conic-gradient(from ${a}deg,
      transparent 0%,
      color-mix(in srgb, var(--primary) 30%, transparent) 3%,
      var(--primary) 7%,
      var(--secondary) 11%,
      transparent 16%
    )`
  )

  useEffect(() => {
    const handler = () => {
      angle.set(0)
      // Fade in, hold, fade out across the full 2.5s
      animate(sweepOpacity, [0, 1, 1, 0], {
        duration: 2.5,
        times: [0, 0.08, 0.85, 1],
        ease: "linear",
      })
      animate(angle, 720, { duration: 2.5, ease: "linear" })
    }
    window.addEventListener("highlight-contact", handler)
    return () => window.removeEventListener("highlight-contact", handler)
  }, [angle, sweepOpacity])

  return (
    <div className={cn("relative rounded-xl", className)}>
      {/* Sweeping glow — conic gradient masked to just the border area */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          opacity: sweepOpacity,
          background: sweepBackground,
          padding: "1.5px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
