"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import Image from "next/image"

export function ProfileFlip() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => r + 180)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="w-36 h-36 sm:w-64 sm:h-64 mb-8 starting:opacity-0 opacity-100 duration-500 delay-300 transition-opacity"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{ rotateY: rotation }}
        transition={{ type: "spring", stiffness: 60, damping: 8 }}
        style={{ transformStyle: "preserve-3d", position: "relative", width: "100%", height: "100%" }}
      >
        {/* Front: headshot */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
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
        </div>

        {/* Back: SGG logo */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Image
            src="/SGG.svg"
            alt="Sabrina Giselle Gonzalez Logo"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  )
}
