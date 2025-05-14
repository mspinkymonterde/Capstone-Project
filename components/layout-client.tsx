"use client"

import React from "react"
import { useAuth } from "@/components/auth-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  return (
    <div className="flex min-h-screen flex-col">
      {!user && <MainNav />}
      <main className="flex-1">{children}</main>
      {!user && <Footer />}
    </div>
  )
}