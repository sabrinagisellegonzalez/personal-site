"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ProfileFlip({className}: {className?: string}) {
  const rotateY = useMotionValue(0)

  // Derive per-face opacity from the live rotation value.
  // Front is visible when the face points toward the viewer (cos > 0),
  // back when it points away (cos < 0). Hard-clamping to 0/1 means
  // Firefox can't show the wrong face even if backface-visibility is ignored.
  const frontOpacity = useTransform(rotateY, (r) => {
    const normalized = ((r % 360) + 360) % 360
    return normalized < 90 || normalized > 270 ? 1 : 0
  })
  const backOpacity = useTransform(rotateY, (r) => {
    const normalized = ((r % 360) + 360) % 360
    return normalized >= 90 && normalized <= 270 ? 1 : 0
  })

  useEffect(() => {
    let target = 0
    const interval = setInterval(() => {
      target += 180
      animate(rotateY, target, { type: "spring", stiffness: 60, damping: 8 })
    }, 4000)
    return () => clearInterval(interval)
  }, [rotateY])

  return (
    <div
      className={cn("w-36 h-36 sm:w-64 sm:h-64 mb-8 starting:opacity-0 opacity-100 duration-500 delay-300 transition-opacity select-none", className)}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{ rotateY, transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d", position: "relative", width: "100%", height: "100%" }}
      >
        {/* Front: headshot */}
        <motion.div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", opacity: frontOpacity }}
        >
          <Image
            src="/sabrina-headshot.png"
            width={400}
            height={400}
            alt="Headshot of Sabrina Giselle Gonzalez"
            className="rounded-full w-full h-full object-cover border-b-4 border-primary shadow-glow-crescent"
            style={{
              filter: `drop-shadow(0 0 5px var(--primary)) drop-shadow(0 0 10px var(--secondary))`,
            }}
          />
        </motion.div>

        {/* Back: SGG logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", opacity: backOpacity }}
        >
          <Image
            src="/SGG.svg"
            alt="Sabrina Giselle Gonzalez Logo"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
