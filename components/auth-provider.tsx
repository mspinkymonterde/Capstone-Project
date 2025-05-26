"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

type ChildInfo = {
  name: string
  age: number
  status: string
  diagnosisType?: string
  profileImage?: string
}

type User = {
  id: string
  name: string
  email: string
  role: "admin" | "parent"
  profileImage?: string
  childInfo?: ChildInfo
}

type ProfileUpdateData = {
  name: string
  email: string
  profileImage?: File
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (email: string, password: string, name: string) => Promise<boolean>
  updateChildInfo: (childInfo: ChildInfo) => void
  updateProfile: (data: ProfileUpdateData) => Promise<boolean>
  updatePassword: (currentPassword: string, newPassword: string) => Promise<boolean>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Mock users for demo
  const mockUsers = [
    {
      id: "1",
      name: "Admin User",
      email: "admin@example.com",
      password: "password123",
      role: "admin" as const,
      profileImage: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "2",
      name: "Parent User",
      email: "parent@example.com",
      password: "password123",
      role: "parent" as const,
      profileImage: "/placeholder.svg?height=200&width=200",
      childInfo: {
        name: "Carlos",
        age: 7,
        status: "Diagnosed",
        diagnosisType: "Autism Spectrum Disorder",
        profileImage: "/placeholder.svg?height=200&width=200",
      },
    },
  ]

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, []) // Only run once on mount

  // Handle redirects based on auth status
  useEffect(() => {
    if (isLoading) return // Don't redirect while loading

    const isAuthRoute = pathname === "/login" || pathname === "/register" || pathname === "/" || pathname.startsWith("/blog")
    const isAdminRoute = pathname.startsWith("/admin")
    const isParentRoute = pathname.startsWith("/parent")

    // If no user and not on auth route, redirect to login
    if (!user && !isAuthRoute) {
      router.push("/login")
      return
    }

    // If user exists and on auth route, redirect to appropriate dashboard
    if (user && isAuthRoute) {
      if (user.role === "admin") {
        router.push("/admin/dashboard")
      } else {
        router.push("/parent/dashboard")
      }
      return
    }

    // Check if user is accessing the correct role-based routes
    if (user) {
      if (isAdminRoute && user.role !== "admin") {
        router.push("/parent/dashboard")
      } else if (isParentRoute && user.role !== "parent") {
        router.push("/admin/dashboard")
      }
    }
  }, [user, isLoading, pathname, router])

  const login = async (email: string, password: string) => {
    // Simulate API call
    const foundUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        profileImage: foundUser.profileImage,
        childInfo: foundUser.role === "parent" ? (foundUser as any).childInfo : undefined,
      }
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))
      return true
    }
    return false
  }

  const register = async (email: string, password: string, name: string) => {
    // Simulate API call
    const existingUser = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())
    if (existingUser) {
      return false
    }

    // In a real app, you would send this to your API
    const newUser = {
      id: `${mockUsers.length + 1}`,
      name,
      email,
      role: "parent" as const,
    }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    return true
  }

  const updateChildInfo = (childInfo: ChildInfo) => {
    if (user) {
      const updatedUser = { ...user, childInfo }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
  }

  const updateProfile = async (data: ProfileUpdateData) => {
    if (user) {
      // In a real app, you would upload the image to a server and get a URL back
      let profileImageUrl = user.profileImage

      if (data.profileImage) {
        // Simulate image upload by creating an object URL
        // In a real app, you would upload to a server
        profileImageUrl = URL.createObjectURL(data.profileImage)
      }

      const updatedUser = {
        ...user,
        name: data.name,
        email: data.email,
        profileImage: profileImageUrl,
      }

      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
      return true
    }
    return false
  }

  const updatePassword = async (currentPassword: string, newPassword: string) => {
    // In a real app, you would verify the current password with the server
    // and then update to the new password

    // For demo purposes, we'll just simulate success
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        updateChildInfo,
        updateProfile,
        updatePassword,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
