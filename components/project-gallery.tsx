"use client"

import { useState } from "react"
import { LayoutGroup } from "motion/react"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import { Project } from "@/types/project"

interface ProjectGalleryProps {
  projects: Project[]
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  // Stays set until the FLIP animation fully completes, so z-index holds through both transitions
  const [elevatedId, setElevatedId] = useState<string | null>(null)

  const handleOpen = (project: Project) => {
    setSelectedProject(project)
    setElevatedId(project.id)
  }

  const handleClose = () => {
    setSelectedProject(null)
    // elevatedId intentionally kept — cleared by onLayoutAnimationComplete below
  }

  return (
    <LayoutGroup>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`w-full md:w-[calc(50%-12px)] relative ${elevatedId === project.id ? "z-10" : ""}`}
          >
            <ProjectCard
              project={project}
              elevated={elevatedId === project.id}
              onLayoutAnimationComplete={() => {
                // Only reset after the closing FLIP finishes (modal already gone)
                if (!selectedProject) setElevatedId(null)
              }}
              onClick={() => handleOpen(project)}
            />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={handleClose}
      />
    </LayoutGroup>
  )
}
