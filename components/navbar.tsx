"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-linear-to-b from-black to-transparent">
      <Link href="/" className="flex items-center">
        <SggLogo className="h-12 sm:h-20 w-auto" />
      </Link>
      <NavigationMenu>
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
    </header>
  )
}
