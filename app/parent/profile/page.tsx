"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useAuth } from "@/components/auth-provider"
import { Camera, Loader2 } from "lucide-react"

export default function ProfilePage() {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("parent")

  // Parent profile state
  const [parentProfile, setParentProfile] = useState({
    name: user?.name || "Parent Name",
    email: user?.email || "parent@example.com",
    phone: "555-123-4567",
    profileImage: user?.profileImage || "",
  })

  // Child profile state
  const [childProfile, setChildProfile] = useState({
    name: "Child Name",
    age: "3",
    condition: "Developmental Delay",
    notes: "Showing progress in speech therapy",
    profileImage: "",
  })

  // Password state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  // Handle parent profile update
  const handleParentUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Parent profile updated successfully!")
    }, 1000)
  }

  // Handle child profile update
  const handleChildUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Child profile updated successfully!")
    }, 1000)
  }

  // Handle password change
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
      alert("Password changed successfully!")
    }, 1000)
  }

  // Handle profile image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: "parent" | "child") => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      if (type === "parent") {
        setParentProfile((prev) => ({ ...prev, profileImage: result }))
      } else {
        setChildProfile((prev) => ({ ...prev, profileImage: result }))
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <SidebarTrigger />
      <div className="container mx-auto p-4 md:p-6 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Profile Management</h1>

        <Tabs defaultValue="parent" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 bg-white text-gray-700">
            <TabsTrigger value="parent" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">Parent Profile</TabsTrigger>
            <TabsTrigger value="child" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">Child Profile</TabsTrigger>
            <TabsTrigger value="password" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">Password</TabsTrigger>
          </TabsList>

          {/* Parent Profile Tab */}
          <TabsContent value="parent">
            <Card>
              <CardHeader>
                <CardTitle>Parent Profile</CardTitle>
                <CardDescription>Update your personal information and profile picture.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleParentUpdate}>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-24 w-24 border-2 border-green-100">
                          <AvatarImage
                            src={parentProfile.profileImage || "/placeholder.svg"}
                            alt={parentProfile.name}
                          />
                          <AvatarFallback className="bg-green-100 text-green-600 text-xl">
                            {parentProfile.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <label
                          htmlFor="parent-profile-image"
                          className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full cursor-pointer"
                        >
                          <Camera className="h-4 w-4" />
                          <span className="sr-only">Upload profile picture</span>
                        </label>
                        <input
                          type="file"
                          id="parent-profile-image"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, "parent")}
                        />
                      </div>
                      <p className="text-sm text-gray-500">Click the camera icon to upload a new photo</p>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="parent-name">Full Name</Label>
                          <Input
                            id="parent-name"
                            value={parentProfile.name}
                            onChange={(e) => setParentProfile((prev) => ({ ...prev, name: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="parent-email">Email</Label>
                          <Input
                            id="parent-email"
                            type="email"
                            value={parentProfile.email}
                            onChange={(e) => setParentProfile((prev) => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="parent-phone">Phone Number</Label>
                          <Input
                            id="parent-phone"
                            value={parentProfile.phone}
                            onChange={(e) => setParentProfile((prev) => ({ ...prev, phone: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Child Profile Tab */}
          <TabsContent value="child">
            <Card>
              <CardHeader>
                <CardTitle>Child Profile</CardTitle>
                <CardDescription>Update your child's information and profile picture.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleChildUpdate}>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-24 w-24 border-2 border-green-100">
                          <AvatarImage src={childProfile.profileImage || "/placeholder.svg"} alt={childProfile.name} />
                          <AvatarFallback className="bg-green-100 text-green-600 text-xl">
                            {childProfile.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <label
                          htmlFor="child-profile-image"
                          className="absolute bottom-0 right-0 bg-green-600 text-white p-1 rounded-full cursor-pointer"
                        >
                          <Camera className="h-4 w-4" />
                          <span className="sr-only">Upload profile picture</span>
                        </label>
                        <input
                          type="file"
                          id="child-profile-image"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, "child")}
                        />
                      </div>
                      <p className="text-sm text-gray-500">Click the camera icon to upload a new photo</p>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="child-name">Child's Name</Label>
                          <Input
                            id="child-name"
                            value={childProfile.name}
                            onChange={(e) => setChildProfile((prev) => ({ ...prev, name: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="child-age">Age</Label>
                            <Input
                              id="child-age"
                              value={childProfile.age}
                              onChange={(e) => setChildProfile((prev) => ({ ...prev, age: e.target.value }))}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="child-condition">Condition</Label>
                            <Input
                              id="child-condition"
                              value={childProfile.condition}
                              onChange={(e) => setChildProfile((prev) => ({ ...prev, condition: e.target.value }))}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="child-notes">Notes</Label>
                          <Input
                            id="child-notes"
                            value={childProfile.notes}
                            onChange={(e) => setChildProfile((prev) => ({ ...prev, notes: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Password Tab */}
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your account password.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <CardFooter className="px-0 pt-6">
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        "Change Password"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
