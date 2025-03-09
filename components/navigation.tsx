"use client"

import { Home, Users, User, BookOpen } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Beranda", href: "/", icon: Home },
    { name: "Chat", href: "/chat", icon: Users },
    { name: "Billing", href: "/billing", icon: BookOpen },
    { name: "Profil", href: "/profile", icon: User },
  ]

  return (
    <>
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 md:hidden">
        <div className="container max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-around">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center ${
                    pathname === item.href ? "text-primary" : "text-gray-500"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-0 left-0 z-50 w-full h-16 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-full">
          <Link href="/" className="text-xl font-bold text-primary">
            KostHunt
          </Link>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 ${pathname === item.href ? "text-primary" : "text-gray-500"}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content padding to account for navigation */}
      <div className="pb-16 md:pt-16"></div>
    </>
  )
}

