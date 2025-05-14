"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import {
  Brain,
  Home,
  LogOut,
  MessageSquare,
  HeartHandshake,
  Activity,
  Settings,
  User,
  BookOpen,
  Dumbbell,
} from "lucide-react"

export function ParentSidebar() {
  const pathname = usePathname()
  const { logout, user } = useAuth()

  const routes = [
    {
      title: "Dashboard",
      href: "/parent/dashboard",
      icon: Home,
    },
    {
      title: "Developmental Guides",
      href: "/parent/guides",
      icon: BookOpen,
    },
    {
      title: "Activity Modules",
      href: "/parent/modules",
      icon: Activity,
    },
    {
      title: "Child Progress",
      href: "/parent/progress",
      icon: Activity,
    },
    {
      title: "Profile",
      href: "/parent/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/parent/settings",
      icon: Settings,
    },
  ]

  const developmentalAreas = [
    {
      title: "Speech & Language",
      href: "/parent/guides/speech-language",
      icon: MessageSquare,
    },
    {
      title: "Social & Emotional",
      href: "/parent/guides/social-emotional",
      icon: HeartHandshake,
    },
    {
      title: "Cognitive",
      href: "/parent/guides/cognitive",
      icon: Brain,
    },
    {
      title: "Motor Skills",
      href: "/parent/guides/motor-skills",
      icon: Dumbbell,
    },
  ]

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/parent/dashboard" className="flex items-center gap-2 font-semibold">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white">
            <BookOpen className="h-3 w-3" />
          </div>
          <span>Parent Support</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-gray-100 ${
                pathname === route.href ? "bg-gray-100 font-medium text-green-600" : "text-gray-500"
              }`}
            >
              <route.icon className="h-4 w-4" />
              {route.title}
            </Link>
          ))}
        </nav>

        {pathname.includes("/parent/guides") && (
          <div className="mt-6">
            <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Developmental Areas
            </div>
            <nav className="grid gap-1 px-2">
              {developmentalAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-gray-100 ${
                    pathname === area.href ? "bg-gray-100 font-medium text-green-600" : "text-gray-500"
                  }`}
                >
                  <area.icon className="h-4 w-4" />
                  {area.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
            <User className="h-5 w-5" />
          </div>
          <div className="flex-1 truncate">
            <div className="text-sm font-medium text-gray-900">{user?.name}</div>
            <div className="truncate text-xs text-gray-500">{user?.email}</div>
          </div>
          <Button variant="ghost" size="icon" onClick={logout} className="h-8 w-8 text-gray-500">
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
