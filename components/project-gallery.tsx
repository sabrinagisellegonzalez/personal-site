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

  return (
    <LayoutGroup>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedProject?.id === project.id}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </LayoutGroup>
  )
}
