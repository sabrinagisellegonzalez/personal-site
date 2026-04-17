export type Project = {
  id: string
  name: string
  description: string
  completedMonth: number // 1–12
  completedYear: number
  images: string[]       // first image is used as the thumbnail
  imageAlt?: string
}

export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]
