"use client"

import { motion } from "motion/react"

const words = [
  {
    text: "Sabrina",
    hover: { x: -14, y: -8, rotate: 6, scale: 1.05 },
  },
  {
    text: "Giselle",
    hover: { x: 0, y: 10, rotate: 0, scale: 1.05 },
  },
  {
    text: "Gonzalez",
    hover: { x: 14, y: -8, rotate: -6, scale: 1.05 },
  },
]

export function TitleScatter() {
  return (
    <>
      <h1 className="sm:hidden font-display uppercase tracking-tight text-center text-4xl starting:opacity-0 opacity-1000 duration-500 delay-500 transition-opacity bg-clip-text text-transparent bg-linear-to-b from-white via-primary to-secondary to-86%">
        {words.map(({ text }) => text).join(" ")}
      </h1>
      <motion.h1
        className="hidden sm:flex flex-wrap justify-center gap-x-4 gap-y-1 font-display uppercase tracking-tight text-center starting:opacity-0 opacity-1000 duration-500 delay-500 transition-opacity cursor-default select-none"
        initial="rest"
        whileHover="hover"
      >
        {words.map(({ text, hover }) => (
          <motion.span
            key={text}
            className="text-4xl lg:text-5xl bg-clip-text text-transparent bg-linear-to-b from-white via-primary to-secondary to-86% inline-block"
            variants={{
              rest: {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                filter: "drop-shadow(0 0 0px rgba(255,191,53,0))",
              },
              hover: {
                ...hover,
                filter:
                  "drop-shadow(0 0 5px rgba(255,191,53,0.25)) drop-shadow(0 0 10px rgba(255,100,242,0.1))",
              },
            }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
    </>
  )
}
