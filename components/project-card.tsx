"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  elevated?: boolean
  onLayoutAnimationComplete?: () => void
  onClick: () => void
}

export function ProjectCard({ project, elevated, onLayoutAnimationComplete, onClick }: ProjectCardProps) {
  return (
    <div className="group relative cursor-pointer" onClick={onClick}>
      <motion.div
        layoutId={`project-card-${project.id}`}
        onLayoutAnimationComplete={onLayoutAnimationComplete}
        className="relative rounded-lg overflow-hidden border border-primary/40 hover:border-b-secondary hover:border-t-white hover:border-l-primary hover:border-r-primary hover:shadow-glow-card transition-[border-color,box-shadow] duration-300"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={project.images[0]}
            alt={project.imageAlt ?? project.name}
            fill
            className="object-cover"
          />
        </div>

        {/* desktop hover overlay */}
        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center px-4">
          <p className="font-display uppercase text-lg tracking-wider text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-86% text-center">
            {project.name}
          </p>
        </div>
      </motion.div>

      {/* mobile name below image */}
      <p className="md:hidden mt-2 text-center text-sm font-display uppercase tracking-wide text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-86%">
        {project.name}
      </p>
    </div>
  )
}
