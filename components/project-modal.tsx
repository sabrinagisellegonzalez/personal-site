"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { X } from "lucide-react"
import { Project, MONTH_NAMES } from "@/types/project"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal wrapper — centered, pointer-events passthrough */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              layoutId={`project-card-${project.id}`}
              className="relative bg-card border border-primary rounded-lg overflow-hidden max-w-2xl w-full pointer-events-auto shadow-lg shadow-primary/20"
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 z-10 p-1.5 rounded-lg border border-primary/40 hover:border-primary text-primary/70 hover:text-primary transition-all duration-200 bg-card/80 backdrop-blur-sm cursor-pointer"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Image */}
              <div className="relative aspect-video w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt ?? project.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text content fades in after the layout animation settles */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.18, duration: 0.25 }}
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
