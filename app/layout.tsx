import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import LayoutClient from "@/components/layout-client" 
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Parent Support System | Special Needs Children",
  description: "Web-Based Parent Support System for children with special needs in Parañaque City",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-teal-50 via-green-50 to-yellow-50` }
        style={{ colorScheme: "light" }}
      >
        <Toaster />
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <LayoutClient>
              {children}
            </LayoutClient>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

