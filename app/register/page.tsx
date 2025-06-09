"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Leaf, Plus, Trash2, User, MapPin, Baby } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/components/ui/use-toast"

type Child = {
  id: string
  name: string
  age: string
  gender: string
  diagnosis: string
  diagnosisType?: string
}

export default function RegisterPage() {
  const [step, setStep] = useState(1)

  // Step 1: Account Info
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Step 2: Personal Details
  const [address, setAddress] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [relationship, setRelationship] = useState("")

  // Step 3: Children Info
  const [children, setChildren] = useState<Child[]>([
    {
      id: "1",
      name: "",
      age: "",
      gender: "",
      diagnosis: "",
      diagnosisType: "",
    },
  ])

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { register, updateChildrenInfo } = useAuth()
  const { toast } = useToast()

  const handleStep1Submit = (e: React.FormEvent) => {
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

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await register(email, password, name, "parent")

      if (success) {
        // Update children info
        const childrenData = children.map((child) => ({
          name: child.name,
          age: Number.parseInt(child.age),
          gender: child.gender,
          status: child.diagnosis,
          diagnosisType: child.diagnosis === "diagnosed" ? child.diagnosisType : undefined,
        }))

        updateChildrenInfo(childrenData, { address, mobileNumber, relationship })

        toast({
          title: "Registration successful",
          description: "Your account has been created successfully.",
        })

        router.push("/parent/checklist")
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

  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <User className="h-5 w-5" />
      case 2:
        return <MapPin className="h-5 w-5" />
      case 3:
        return <Baby className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto w-full max-w-2xl">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center text-center">
            <h1 className="mt-4 text-3xl font-bold text-gray-900">Parent Support System</h1>
            <p className="mt-2 text-gray-600">Create your account</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                      step >= stepNumber ? "bg-teal-500 border-teal-500 text-white" : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {getStepIcon(stepNumber)}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`h-1 w-20 mx-2 transition-all ${step > stepNumber ? "bg-teal-500" : "bg-gray-200"}`}
                    />
                  )}
                </div>
              ))}
            </div>
            <Progress value={(step / 3) * 100} className="h-2 bg-gray-200" />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Account Info</span>
              <span>Personal Details</span>
              <span>Children Info</span>
            </div>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            {/* Step 1: Account Info */}
            {step === 1 && (
              <form onSubmit={handleStep1Submit}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-teal-700">Account Information</CardTitle>
                  <CardDescription>Let's start with your basic account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      className="h-12 border-2 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-12 border-2 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      className="h-12 border-2 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-gray-700 font-medium">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      className="h-12 border-2 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button
                    className="w-full h-12 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold rounded-xl"
                    type="submit"
                  >
                    Continue to Personal Details
                  </Button>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="font-medium text-teal-600 hover:underline">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </form>
            )}

            {/* Step 2: Personal Details */}
            {step === 2 && (
              <form onSubmit={handleStep2Submit}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-teal-700">Personal Details</CardTitle>
                  <CardDescription>Help us know more about you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-700 font-medium">
                      Complete Address
                    </Label>
                    <Input
                      id="address"
                      className="h-12 border-2 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-gray-700 font-medium">
                      Mobile Number
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="09XX XXX XXXX"
                      className="h-12 border-2 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Relationship to Child</Label>
                    <Select required value={relationship} onValueChange={setRelationship}>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-teal-500">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 h-12 border-2 border-gray-300 hover:bg-gray-50 rounded-xl"
                    type="button"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 h-12 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold rounded-xl"
                    type="submit"
                  >
                    Continue to Children Info
                  </Button>
                </CardFooter>
              </form>
            )}

            {/* Step 3: Children Info */}
            {step === 3 && (
              <form onSubmit={handleFinalSubmit}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-teal-700">Child Information</CardTitle>
                  <CardDescription>Tell us about your child</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Card className="border-2 border-yellow-200 bg-yellow-50/50">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-gray-800">Child</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-gray-700 font-medium">Child's Name</Label>
                          <Input
                            className="h-10 border-2 border-gray-200 focus:border-teal-500"
                            value={children[0].name}
                            onChange={(e) => setChildren([{ ...children[0], name: e.target.value }])}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-700 font-medium">Age</Label>
                          <Select
                            required
                            value={children[0].age}
                            onValueChange={(value) => setChildren([{ ...children[0], age: value }])}
                          >
                            <SelectTrigger className="h-10 border-2 border-gray-200 focus:border-teal-500">
                              <SelectValue placeholder="Select age" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 8 }, (_, i) => (
                                <SelectItem key={i} value={i.toString()}>
                                  {i} years old
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Gender</Label>
                        <RadioGroup
                          value={children[0].gender}
                          onValueChange={(value) => setChildren([{ ...children[0], gender: value }])}
                          className="flex gap-6"
                          required
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id={`male-1`} />
                            <Label htmlFor={`male-1`}>Male</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id={`female-1`} />
                            <Label htmlFor={`female-1`}>Female</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Diagnosis Status</Label>
                        <RadioGroup
                          value={children[0].diagnosis}
                          onValueChange={(value) => setChildren([{ ...children[0], diagnosis: value }])}
                          className="flex gap-6"
                          required
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="diagnosed" id={`diagnosed-1`} />
                            <Label htmlFor={`diagnosed-1`}>Diagnosed</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="undiagnosed" id={`undiagnosed-1`} />
                            <Label htmlFor={`undiagnosed-1`}>Undiagnosed</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {children[0].diagnosis === "diagnosed" && (
                        <div className="space-y-2">
                          <Label className="text-gray-700 font-medium">Type of Diagnosis</Label>
                          <Select
                            required
                            value={children[0].diagnosisType}
                            onValueChange={(value) => setChildren([{ ...children[0], diagnosisType: value }])}
                          >
                            <SelectTrigger className="h-10 border-2 border-gray-200 focus:border-teal-500">
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
                  </Card>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 h-12 border-2 border-gray-300 hover:bg-gray-50 rounded-xl"
                    type="button"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 h-12 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold rounded-xl"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Complete Registration"}
                  </Button>
                </CardFooter>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
