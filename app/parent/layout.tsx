import type React from "react"
import ParentSidebarLayout from "@/components/parent-sidebar"

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ParentSidebarLayout>
      {children}
    </ParentSidebarLayout>
  )
}
