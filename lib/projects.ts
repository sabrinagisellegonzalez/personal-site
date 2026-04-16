import { Project } from "@/types/project"

/**
 * Format:
 * - id: unique id for project
 * - name: the name of the project
 * - description: a short summary of what the project involved and its impact
 * - completedMonth: the month the project was completed (1-12)
 * - completedYear: the year the project was completed (e.g. 2024)
 * - images: array of paths to images representing the project (can be placeholders for now)
 */
export const featuredProjects: Project[] = [
  {
    id: "project-1",
    name: "The 25th Annual Putnam County Spelling Bee",
    description: "Costumes, Hair, and Makeup Designer.",
    completedMonth: 11,
    completedYear: 2025,
    images: [
      "/projects/spelling-bee-2025/cob0.jpeg",
      "/projects/spelling-bee-2025/cob1.jpeg", 
      "/projects/spelling-bee-2025/cob2.jpeg",
      "/projects/spelling-bee-2025/cob3.jpeg",
      "/projects/spelling-bee-2025/cob4.jpeg",
      "/projects/spelling-bee-2025/cob5.jpeg",
      "/projects/spelling-bee-2025/cob6.jpeg",
      "/projects/spelling-bee-2025/cob7.jpeg",
      "/projects/spelling-bee-2025/cob8.jpeg",
      "/projects/spelling-bee-2025/cob9.jpeg",
      "/projects/spelling-bee-2025/cob10.jpeg",
      "/projects/spelling-bee-2025/cob11.jpeg",
      "/projects/spelling-bee-2025/cob12.jpeg",
      "/projects/spelling-bee-2025/cob13.jpeg",
      "/projects/spelling-bee-2025/cob14.jpeg",
      "/projects/spelling-bee-2025/cob15.jpeg",
      "/projects/spelling-bee-2025/cob16.jpeg",
      "/projects/spelling-bee-2025/cob17.jpeg",
    ],
  },
  {
    id: "project-3",
    name: "Fright Night",
    description: "Assisted with alterations and distressing. Wardrobe Crew during show.",
    completedMonth: 10,
    completedYear: 2025,
    images: [
      "/projects/fright-night-2025/fn0.JPG",
      "/projects/fright-night-2025/fn1.JPG",
      "/projects/fright-night-2025/fn2.JPG",
      "/projects/fright-night-2025/fn3.JPG",
      "/projects/fright-night-2025/fn4.JPG",
      "/projects/fright-night-2025/fn5.JPG",
      "/projects/fright-night-2025/fn6.JPG",
      "/projects/fright-night-2025/fn7.JPG",
      "/projects/fright-night-2025/fn8.JPG",
      "/projects/fright-night-2025/fn9.JPG",
      "/projects/fright-night-2025/fn10.JPG",
    ],
  },
  {
    id: "project-2",
    name: "Natasha Pierre and the Great Comet of 1812",
    description: "Assistant Props Designer.",
    completedMonth: 5,
    completedYear: 2025,
    images: [
      "/projects/natasha-pierre-2025/np0.jpeg",
      "/projects/natasha-pierre-2025/np1.jpeg",
      "/projects/natasha-pierre-2025/np2.jpeg",
      "/projects/natasha-pierre-2025/np3.jpeg",
      "/projects/natasha-pierre-2025/np4.jpeg",
      "/projects/natasha-pierre-2025/np5.jpeg",
      "/projects/natasha-pierre-2025/np6.jpeg",
      "/projects/natasha-pierre-2025/np7.jpeg",
      "/projects/natasha-pierre-2025/np8.jpeg",
    ],
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
