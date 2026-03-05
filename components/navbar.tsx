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
  navigationMenuTriggerStyle,
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
        <div className="flex flex-row items-center gap-2">
          <Link href="/" className="flex items-center">
            <SggLogo className="h-12 sm:h-20 w-auto" />
          </Link>
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

        {/* Desktop nav */}
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            {navLinks.map(({ label, href }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild active={pathname === href} className={navigationMenuTriggerStyle()}>
                  <Link href={href}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
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
