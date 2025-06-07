"use client"

import React from "react"
import { useAuth } from "@/components/auth-provider"
import { CSNHeader } from "@/components/csn-header"
import { CSNFooter } from "@/components/csn-footer"

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  return (
    <div className="flex min-h-screen flex-col">
      {!user && <CSNHeader />}
      <main className="flex-1">{children}</main>
      {!user && <CSNFooter />}
    </div>
  )
}