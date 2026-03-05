import { Project } from "@/types/project"

/**
 * Format:
 * - id: unique id for project
 * - name: the name of the project
 * - description: a short summary of what the project involved and its impact
 * - completedMonth: the month the project was completed (1-12)
 * - completedYear: the year the project was completed (e.g. 2024)
 * - imageSrc: path to an image representing the project (can be a placeholder for now)
 */
export const featuredProjects: Project[] = [
  {
    id: "project-1",
    name: "The 25th Annual Putnam County Spelling bee",
    description: "I worked on the costumes for this project.",
    completedMonth: 11,
    completedYear: 2025,
    imageSrc: "/projects/cob-spelling-bee-small.jpg", 
  },
  {
    id: "project-2",
    name: "The 25th Annual Putnam County Spelling bee",
    description: "I worked on the costumes for this project.",
    completedMonth: 11,
    completedYear: 2025,
    imageSrc: "/projects/cob-spelling-bee-small.jpg", 
  },
  {
    id: "project-3",
    name: "The 25th Annual Putnam County Spelling bee",
    description: "I worked on the costumes for this project.",
    completedMonth: 11,
    completedYear: 2025,
    imageSrc: "/projects/cob-spelling-bee-small.jpg", 
  },
  {
    id: "project-4",
    name: "The 25th Annual Putnam County Spelling bee",
    description: "I worked on the costumes for this project.",
    completedMonth: 11,
    completedYear: 2025,
    imageSrc: "/projects/cob-spelling-bee-small.jpg", 
  },
  // {
  //   id: "project-2",
  //   name: "Another Project",
  //   description: "A short description of what this project involved and the impact it had. Replace this with a real summary.",
  //   completedMonth: 10,
  //   completedYear: 2024,
  //   imageSrc: "/placeholder.jpg", 
  // },
  // {
  //   id: "project-3",
  //   name: "Third Project",
  //   description: "A short description of what this project involved and the impact it had. Replace this with a real summary.",
  //   completedMonth: 6,
  //   completedYear: 2024,
  //   imageSrc: "/placeholder.jpg", 
  // },
]
