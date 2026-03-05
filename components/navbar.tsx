"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { SggLogo } from "@/components/sgg-logo"

const navLinks = [
  { label: "Resume", href: "/resume" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-black to-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <div className="flex flex-row items-center gap-2">
              <SggLogo className="h-12 sm:h-20 w-auto" />
            <div className="flex flex-col items-start justify-center">
              <p className="text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-86% font-display uppercase tracking-tight text-sm sm:text-lg -mb-1 sm:-mb-1.5">
                Sabrina
              </p>
              <p className="text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-86% font-display uppercase tracking-tight text-sm sm:text-lg -mb-1 sm:-mb-1.5">
                Giselle
              </p>
              <p className="text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-86% font-display uppercase tracking-tight text-sm sm:text-lg">
                Gonzalez
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild active={isActive}>
                    <Link
                      href={href}
                      className={`group/link relative px-4 py-2 font-display uppercase text-lg! border-b transition-colors hover:bg-transparent ${
                        isActive ? "border-primary" : "border-transparent hover:border-primary"
                      }`}
                    >
                      {/* Default gradient */}
                      <span className={`text-transparent bg-clip-text bg-linear-to-b from-white via-primary to-secondary to-70% transition-opacity duration-200 ${
                        isActive ? "opacity-0" : "group-hover/link:opacity-0"
                      }`}>
                        {label}
                      </span>
                      {/* Active/hover gradient */}
                      <span className={`absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-linear-to-b from-white via-primary via-24% to-[#C164FF] to-60% transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover/link:opacity-100"
                      }`}>
                        {label}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-4 gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`px-4 font-display uppercase py-2 text-smfont-medium text-transparent bg-clip-text bg-linear-to-b transition-colors ${
                pathname === href ? "from-white via-primary via-24% to-[#C164FF] to-60%" : " from-white via-primary to-secondary to-70%"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
