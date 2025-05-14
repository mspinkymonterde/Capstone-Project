"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Leaf } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/components/ui/use-toast"

export default function ChildInfoPage() {
  const [childName, setChildName] = useState("")
  const [childAge, setChildAge] = useState("")
  const [childStatus, setChildStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { updateChildInfo } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      updateChildInfo({
        name: childName,
        age: Number.parseInt(childAge),
        status: childStatus,
      })

      toast({
        title: "Information saved",
        description: "Your child's information has been saved successfully.",
      })

      router.push("/parent/dashboard")
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while saving the information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex min-h-screen items-center justify-center py-8">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Child Information</h1>
          <p className="mt-2 text-gray-600">Please provide information about your child</p>
        </div>
        <Card className="border-green-100 shadow-md">
          <form onSubmit={handleSubmit}>
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-xl">Child Details</CardTitle>
              <CardDescription>This helps us personalize resources for your child's needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="child-name">Child's Name</Label>
                <Input
                  id="child-name"
                  className="border-green-200 focus-visible:ring-green-600"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="child-age">Child's Age</Label>
                <Input
                  id="child-age"
                  type="number"
                  min="0"
                  max="18"
                  className="border-green-200 focus-visible:ring-green-600"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="child-status">Child's Status/Condition</Label>
                <Select required value={childStatus} onValueChange={setChildStatus}>
                  <SelectTrigger className="border-green-200 focus:ring-green-600">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Autism Spectrum Disorder">Autism Spectrum Disorder</SelectItem>
                    <SelectItem value="Down Syndrome">Down Syndrome</SelectItem>
                    <SelectItem value="Cerebral Palsy">Cerebral Palsy</SelectItem>
                    <SelectItem value="ADHD">ADHD</SelectItem>
                    <SelectItem value="Learning Disability">Learning Disability</SelectItem>
                    <SelectItem value="Developmental Delay">Developmental Delay</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                className="w-full rounded-full bg-green-600 hover:bg-green-700"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Continue"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
