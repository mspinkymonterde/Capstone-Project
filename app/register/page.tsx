"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useToast, toast as toastFn } from "@/hooks/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [childName, setChildName] = useState("")
  const [childAge, setChildAge] = useState("")
  const [diagnosisStatus, setDiagnosisStatus] = useState<"diagnosed" | "undiagnosed" | "">("")
  const [diagnosisType, setDiagnosisType] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { register, updateChildInfo } = useAuth()
  const { toast } = useToast()

  const showToast = toast || toastFn

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      return
    }

    setStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Always register as parent - admin accounts are pre-set
      const success = await register(email, password, name, "parent")

      if (success) {
        // Update child info
        updateChildInfo({
          name: childName,
          age: Number.parseInt(childAge),
          status: diagnosisStatus,
          diagnosisType: diagnosisStatus === "diagnosed" ? diagnosisType : undefined,
        })

        toast({
          title: "Registration successful",
          description: "Your account has been created successfully.",
        })

        router.push("/parent/dashboard")
      } else {
        toast({
          title: "Registration failed",
          description: "An account with this email already exists.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "An error occurred during registration. Please try again.",
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
            <User className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Create an account</h1>
          <p className="mt-2 text-gray-600">Join our supportive community</p>
        </div>
        <Card className="border-green-100 shadow-md">
          {step === 1 ? (
            <form onSubmit={handleNextStep}>
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-xl">Personal Information</CardTitle>
                <CardDescription>Enter your information to create an account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    className="border-green-200 focus-visible:ring-green-600"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="border-green-200 focus-visible:ring-green-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    className="border-green-200 focus-visible:ring-green-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="border-green-200 focus-visible:ring-green-600"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full rounded-full bg-green-600 hover:bg-green-700" type="submit">
                  Continue
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-green-600 hover:underline">
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-xl">Child Information</CardTitle>
                <CardDescription>Tell us about your child to personalize your experience</CardDescription>
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
                  <Select required value={childAge} onValueChange={setChildAge}>
                    <SelectTrigger className="border-green-200 focus:ring-green-600">
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0-1 years</SelectItem>
                      <SelectItem value="1">1-2 years</SelectItem>
                      <SelectItem value="2">2-3 years</SelectItem>
                      <SelectItem value="3">3-4 years</SelectItem>
                      <SelectItem value="4">4-5 years</SelectItem>
                      <SelectItem value="5">5-6 years</SelectItem>
                      <SelectItem value="6">6-7 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Diagnosis Status</Label>
                  <RadioGroup
                    value={diagnosisStatus}
                    onValueChange={(value) => setDiagnosisStatus(value as "diagnosed" | "undiagnosed")}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="diagnosed" id="diagnosed" />
                      <Label htmlFor="diagnosed">Diagnosed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="undiagnosed" id="undiagnosed" />
                      <Label htmlFor="undiagnosed">Undiagnosed</Label>
                    </div>
                  </RadioGroup>
                </div>

                {diagnosisStatus === "diagnosed" && (
                  <div className="space-y-2">
                    <Label htmlFor="diagnosis-type">Type of Diagnosis</Label>
                    <Select required value={diagnosisType} onValueChange={setDiagnosisType}>
                      <SelectTrigger className="border-green-200 focus:ring-green-600">
                        <SelectValue placeholder="Select diagnosis" />
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
                )}
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="flex w-full gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-full border-green-200 text-green-700 hover:bg-green-50"
                    type="button"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 rounded-full bg-green-600 hover:bg-green-700"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-green-600 hover:underline">
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}
