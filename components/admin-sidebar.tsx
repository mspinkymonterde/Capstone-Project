"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Brain,
  Calendar,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  HeartHandshake,
  Settings,
  User,
  BookOpen,
  Dumbbell,
  Puzzle,
  BarChart,
  Menu,
  ChevronsLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMediaQuery } from "@/hooks/use-media-query"

// Layout wrapper: sidebar + main content
export function AdminSidebar({ children }: { children?: React.ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [sidebarOpen, setSidebarOpenAction] = useState(!isMobile)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Sync sidebarOpen with isMobile
  React.useEffect(() => {
    setSidebarOpenAction(!isMobile)
    setSidebarCollapsed(false)
  }, [isMobile])

  return (
    <div className={`w-full h-full min-h-screen ${isMobile ? "" : "flex"}`}>
      {/* Sidebar */}
      <AdminSidebarContent
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
        setSidebarOpenAction={setSidebarOpenAction}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsedAction={setSidebarCollapsed}
      />
      {/* Main content */}
      <div
        className={
          isMobile
            ? "w-full"
            : "flex-1 min-w-0 transition-all duration-300 ease-in-out"
        }
        style={
          isMobile
            ? undefined
            : {
                marginLeft: sidebarCollapsed ? "3rem" : "18rem",
                transition: "margin-left 0.3s cubic-bezier(0.4,0,0.2,1)"
              }
        }
      >
        {children}
      </div>
    </div>
  )
}

// Admin-specific sidebar content
function AdminSidebarContent(props: SidebarContentProps) {
  // Just reuse ParentSidebarContent for now, but you can customize for admin
  return <ParentSidebarContent {...props} />
}

type SidebarContentProps = {
  isMobile: boolean
  sidebarOpen: boolean
  setSidebarOpenAction: (open: boolean) => void
  sidebarCollapsed: boolean
  setSidebarCollapsedAction: React.Dispatch<React.SetStateAction<boolean>>
}

export function ParentSidebarContent({
  isMobile,
  sidebarOpen,
  setSidebarOpenAction,
  sidebarCollapsed,
  setSidebarCollapsedAction,
}: SidebarContentProps) {
  const pathname = usePathname()
  const { logout, user } = useAuth()

  // Close sidebar after navigation (mobile only)
  const handleNavigation = () => {
    if (isMobile) setSidebarOpenAction(false)
  }

  const handleHideSidebar = () => setSidebarOpenAction(false)
  const handleShowSidebar = () => setSidebarOpenAction(true)
  const handleToggleCollapse = () => setSidebarCollapsedAction((prev: any) => !prev)


  // Sidebar width
  const sidebarWidth = sidebarCollapsed && !isMobile ? "w-12" : "w-72"
  const sidebarBase =
    "h-full bg-white border-r transition-all duration-300 flex flex-col z-50"
  const sidebarMobile =
    "fixed top-0 left-0 h-full max-w-xs w-[80vw] shadow-lg transition-transform duration-300"
  const sidebarMobileOpen = "translate-x-0"
  const sidebarMobileClosed = "-translate-x-full"

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={handleHideSidebar}
          aria-label="Sidebar overlay"
        />
      )}

      {/* Sidebar */}
      <nav
        className={
          isMobile
            ? [
                sidebarBase,
                sidebarMobile,
                sidebarOpen ? sidebarMobileOpen : sidebarMobileClosed,
                "z-50"
              ].join(" ")
            : [
                sidebarBase,
                sidebarWidth,
                "fixed",
                "top-0",
                "left-0",
                "h-screen",
                "flex",
                "flex-col",
                "transition-all",
                "duration-300",
                "ease-in-out"
              ].join(" ")
        }
        style={
          isMobile
            ? { backgroundColor: "#fff" }
            : {
                width: sidebarCollapsed ? "3rem" : "18rem",
                minWidth: sidebarCollapsed ? "3rem" : "18rem",
                maxWidth: sidebarCollapsed ? "3rem" : "18rem",
                backgroundColor: "#fff",
                height: "100vh",
                zIndex: 50,
                transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), min-width 0.3s cubic-bezier(0.4,0,0.2,1), max-width 0.3s cubic-bezier(0.4,0,0.2,1)"
              }
        }
      >
        {/* Mobile: Profile and close button at top */}
        {isMobile && (
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border border-green-100">
                <AvatarImage src={user?.profileImage || ""} alt={user?.name || "User"} />
                <AvatarFallback className="bg-green-100 text-green-600">{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium text-gray-900">{user?.name || "User"}</div>
                <div className="truncate text-xs text-gray-500">{user?.email || "user@example.com"}</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-green-600"
              onClick={handleHideSidebar}
              aria-label="Hide sidebar"
            >
              <ChevronsLeft className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Desktop: Logo/header */}
        {!isMobile && (
          <div className="px-2 py-2 border-b">
            <div className={`flex items-center gap-1.5 ${sidebarCollapsed ? "justify-center" : ""}`}>
              <Button
          variant="ghost"
          size="icon"
          className={`flex items-center gap-1.5 font-semibold h-8 w-8 ${sidebarCollapsed ? "justify-center w-full" : ""} hover:bg-teal-600 hover:text-white`}
          onClick={handleToggleCollapse}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
          <Menu className="h-4 w-4" />
              </Button>
              {!sidebarCollapsed && (
          <Link
            href="/admin/dashboard"
            className="text-lg font-bold"
            onClick={handleNavigation}
          >
            Menus
          </Link>
              )}
            </div>
          </div>
        )}

        <SidebarContent className={`flex-1 overflow-y-auto pb-2 ${sidebarCollapsed && !isMobile ? "px-0" : ""}`}>
          {/* Navigation */}
          <SidebarGroup>
            {!sidebarCollapsed && <SidebarGroupLabel>Navigation</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {[
                  {
                    title: "Dashboard",
                    href: "/admin/dashboard",
                    icon: Home,
                  },
                  {
                    title: "Resources",
                    href: "/admin/resources",
                    icon: BookOpen,
                  },
                  {
                    title: "Events",
                    href: "/admin/events",
                    icon: Calendar,
                  },
                  {
                    title: "Users",
                    href: "/admin/users",
                    icon: User,
                  },
                  {
                    title: "Statistics",
                    href: "/admin/statistics",
                    icon: BarChart,
                  },
                  {
                    title: "Reports",
                    href: "/admin/reports",
                    icon: FileText,
                  },
                  {
                    title: "Settings",
                    href: "/admin/settings",
                    icon: Settings,
                  },
                ].map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                      <Link
                        href={item.href}
                        onClick={handleNavigation}
                        className={
                          `group flex items-center gap-2 transition-colors w-full
                          ${pathname === item.href
                            ? "text-teal-600 font-semibold bg-teal-50"
                            : "text-gray-700"}
                          hover:text-teal-800 hover:bg-teal-100
                          ${sidebarCollapsed && !isMobile ? "justify-center px-0" : ""}`
                        }
                      >
                        <item.icon
                          className={
                            `h-4 w-4 transition-colors
                            ${pathname === item.href
                              ? "text-teal-600"
                              : "text-gray-400"}
                            group-hover:text-teal-800`
                          }
                        />
                        {!sidebarCollapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        
        {/* Desktop: Footer with profile/logout */}
        {!isMobile && (
          <div className="p-4 border-t bg-white">
            <div className={`flex items-center gap-3 rounded-lg bg-gray-50 p-3 ${sidebarCollapsed ? "flex-col p-1" : ""}`}>
              <Avatar className="h-9 w-9 border border-green-100">
                <AvatarImage src={user?.profileImage || ""} alt={user?.name || "User"} />
                <AvatarFallback className="bg-green-100 text-green-600">{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              {!sidebarCollapsed && (
                <div className="flex-1 truncate">
                  <div className="text-sm font-medium text-gray-900">{user?.name || "User"}</div>
                  <div className="truncate text-xs text-gray-500">{user?.email || "user@example.com"}</div>
                </div>
              )}
              <Button variant="ghost" size="icon" onClick={logout} className="h-8 w-8 text-gray-500">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
            </div>
          </div>
        )}
        {/* Mobile: Logout at bottom */}
        {isMobile && (
          <div className="p-4 border-t mt-auto bg-white">
            <Button variant="ghost" className="w-full flex items-center gap-2 text-gray-700" onClick={logout}>
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </Button>
          </div>
        )}
      </nav>

      {/* Floating open button (Menu icon) for mobile */}
      {isMobile && !sidebarOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 bg-white shadow md:hover:bg-green-50 text-green-600"
          onClick={handleShowSidebar}
          aria-label="Open sidebar"
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
