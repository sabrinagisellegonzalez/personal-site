"use client"

import { cn } from "@/lib/utils"

type Props = {
  targetId: string
  className?: string
  children: React.ReactNode
}

export function ScrollToSection({ targetId, className, children }: Props) {
  return (
    <button
      className={cn("cursor-pointer bg-transparent border-none p-0", className)}
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
    >
      {children}
    </button>
  )
}
