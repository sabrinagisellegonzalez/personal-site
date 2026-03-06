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
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {projects.map((project) => (
          <div key={project.id} className="w-full md:w-[calc(50%-12px)]">
            <ProjectCard
              project={project}
              isSelected={selectedProject?.id === project.id}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </LayoutGroup>
  )
}
