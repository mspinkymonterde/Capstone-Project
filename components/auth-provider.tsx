"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

type ChildInfo = {
  name: string
  age: number
  gender: string
  status: string
  diagnosisType?: string
  profileImage?: string
}

type PersonalInfo = {
  address: string
  mobileNumber: string
  relationship: string
}

type User = {
  id: string
  name: string
  email: string
  role: "admin" | "parent"
  profileImage?: string
  childrenInfo?: ChildInfo[]
  personalInfo?: PersonalInfo
  checklistCompleted?: boolean
  checklistResults?: any[]
  isFirstLogin?: boolean
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
  register: (email: string, password: string, name: string, role: string) => Promise<boolean>
  updateChildrenInfo: (childrenInfo: ChildInfo[], personalInfo: PersonalInfo) => void
  updateProfile: (data: ProfileUpdateData) => Promise<boolean>
  updatePassword: (currentPassword: string, newPassword: string) => Promise<boolean>
  updateChecklistResults: (childIndex: number, results: any) => void
  markFirstLoginComplete: () => void
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
      name: "Maria Santos",
      email: "parent@example.com",
      password: "password123",
      role: "parent" as const,
      profileImage: "/placeholder.svg?height=200&width=200",
      childrenInfo: [
        {
          name: "Carlos",
          age: 7,
          gender: "male",
          status: "diagnosed",
          diagnosisType: "Autism Spectrum Disorder",
          profileImage: "/placeholder.svg?height=200&width=200",
        },
      ],
      personalInfo: {
        address: "123 Main St, Parañaque City",
        mobileNumber: "09123456789",
        relationship: "mother",
      },
      checklistCompleted: false,
      isFirstLogin: false,
    },
  ]

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Handle redirects based on auth status
  useEffect(() => {
    if (isLoading) return

    const isAuthRoute = pathname === "/login" || pathname === "/register" || pathname === "/"
    const isAdminRoute = pathname.startsWith("/admin")
    const isParentRoute = pathname.startsWith("/parent")
    const isChecklistRoute = pathname === "/parent/checklist"

    // If no user and not on auth route, redirect to login
    if (!user && !isAuthRoute) {
      router.push("/login")
      return
    }

    // If user exists and on auth route, redirect to appropriate dashboard
    if (user && isAuthRoute) {
      if (user.role === "admin") {
        router.push("/admin/dashboard")
      } else if (user.isFirstLogin && user.childrenInfo && user.childrenInfo.length > 0) {
        // First time login with children info - go to checklist
        router.push("/parent/checklist")
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
        childrenInfo: foundUser.role === "parent" ? (foundUser as any).childrenInfo : undefined,
        personalInfo: foundUser.role === "parent" ? (foundUser as any).personalInfo : undefined,
        checklistCompleted: foundUser.role === "parent" ? (foundUser as any).checklistCompleted : true,
        checklistResults: foundUser.role === "parent" ? (foundUser as any).checklistResults : undefined,
        isFirstLogin: foundUser.role === "parent" ? (foundUser as any).isFirstLogin : false,
      }
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))
      return true
    }
    return false
  }

  const register = async (email: string, password: string, name: string, role: string) => {
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
      checklistCompleted: false,
      isFirstLogin: true,
    }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    return true
  }

  const updateChildrenInfo = (childrenInfo: ChildInfo[], personalInfo: PersonalInfo) => {
    if (user) {
      const updatedUser = { ...user, childrenInfo, personalInfo }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    } else {
      // If user is not set yet (e.g., just registered), merge info into localStorage
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser)
        const updatedUser = { ...parsedUser, childrenInfo, personalInfo }
        setUser(updatedUser)
        localStorage.setItem("user", JSON.stringify(updatedUser))
      }
    }
  }

  const updateChecklistResults = (childIndex: number, results: any) => {
    if (user) {
      const checklistResults = user.checklistResults || []
      checklistResults[childIndex] = results

      const updatedUser = {
        ...user,
        checklistCompleted: true,
        checklistResults,
        isFirstLogin: false,
      }
      setUser(updatedUser)
      localStorage.setItem("user", JSON.stringify(updatedUser))
    }
  }

  const markFirstLoginComplete = () => {
    if (user) {
      const updatedUser = {
        ...user,
        isFirstLogin: false,
      }
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
        updateChildrenInfo,
        updateProfile,
        updatePassword,
        updateChecklistResults,
        markFirstLoginComplete,
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
