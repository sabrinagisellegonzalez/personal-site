"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Project, MONTH_NAMES } from "@/types/project"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Reset carousel when a new project opens
  useEffect(() => {
    setIndex(0)
    setDirection(0)
  }, [project?.id])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (!project) return
      if (e.key === "ArrowLeft") go(-1)
      if (e.key === "ArrowRight") go(1)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onClose, project, index])

  function go(dir: number) {
    if (!project) return
    setDirection(dir)
    setIndex((i) => (i + dir + project.images.length) % project.images.length)
  }

  const images = project?.images ?? []
  const hasMany = images.length > 1

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal wrapper */}
          <div className="fixed inset-0 z-60 flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              layoutId={`project-card-${project.id}`}
              className="relative bg-card border border-primary rounded-lg overflow-hidden max-w-4xl w-full pointer-events-auto shadow-lg shadow-primary/20"
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 z-30 p-1.5 rounded-lg border border-primary/40 hover:border-primary text-primary/70 hover:text-primary transition-all duration-200 bg-card/80 backdrop-blur-sm cursor-pointer"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Image carousel */}
              <div className="relative aspect-3/2 w-full overflow-hidden bg-black">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {/* Layer 1: blurred backdrop */}
                    <Image
                      src={images[index]}
                      alt=""
                      aria-hidden
                      fill
                      className="object-cover scale-110 blur-xl opacity-60"
                    />

                    {/* Layer 2: foreground image */}
                    <Image
                      src={images[index]}
                      alt={`${project.imageAlt ?? project.name} — image ${index + 1}`}
                      fill
                      className="object-contain relative z-20"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next */}
                {hasMany && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-lg border border-primary/40 hover:border-primary text-primary/70 hover:text-primary transition-all duration-200 bg-card/80 backdrop-blur-sm cursor-pointer"
                      onClick={() => go(-1)}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-lg border border-primary/40 hover:border-primary text-primary/70 hover:text-primary transition-all duration-200 bg-card/80 backdrop-blur-sm cursor-pointer"
                      onClick={() => go(1)}
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                          aria-label={`Go to image ${i + 1}`}
                          className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                            i === index ? "bg-primary scale-125" : "bg-primary/40 hover:bg-primary/70"
                          }`}
                          style={i === index ? {
                            boxShadow: "0 0 6px 2px var(--primary), 0 0 12px 4px var(--secondary)",
                          } : undefined}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Text content */}
              <motion.div
                className="p-6 border-t border-primary"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.2 } }}
              >
                <h2 className="text-2xl font-display uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-86%">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm font-display uppercase tracking-wider text-muted-foreground">
                  {MONTH_NAMES[project.completedMonth - 1]} {project.completedYear}
                </p>
                <p className="mt-4 leading-relaxed text-foreground/80">
                  {project.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
