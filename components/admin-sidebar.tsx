"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { BarChart, FileText, Home, LogOut, Settings, User, Users } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()
  const { logout, user } = useAuth()

  const routes = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: Home,
    },
    {
      title: "Manage Resources",
      href: "/admin/resources",
      icon: FileText,
    },
    {
      title: "Manage Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Statistics",
      href: "/admin/statistics",
      icon: BarChart,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white">
            <User className="h-3 w-3" />
          </div>
          <span>Admin Panel</span>
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
