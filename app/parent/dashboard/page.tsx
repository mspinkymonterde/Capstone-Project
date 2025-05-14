"use client"

import type React from "react"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Calendar, HeartHandshake, MessageSquare, Dumbbell } from "lucide-react"
import Link from "next/link"

export default function ParentDashboard() {
  const { user } = useAuth()

  return (
    <div className="container p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name}</h1>
        <p className="text-gray-600">
          Track your child's progress and access personalized resources for {user?.childInfo?.name}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Child Info Card */}
        <Card className="border-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Child Information</CardTitle>
            <CardDescription>Details about your child</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Name:</span>
                <span className="font-medium">{user?.childInfo?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Age:</span>
                <span className="font-medium">{user?.childInfo?.age} years old</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Condition:</span>
                <span className="font-medium">{user?.childInfo?.status}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview Card */}
        <Card className="border-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Development Progress</CardTitle>
            <CardDescription>Current progress in key areas</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Cognitive</span>
                  </div>
                  <span className="text-sm text-gray-600">45%</span>
                </div>
                <Progress value={45} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Speech & Language</span>
                  </div>
                  <span className="text-sm text-gray-600">30%</span>
                </div>
                <Progress value={30} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Social & Emotional</span>
                  </div>
                  <span className="text-sm text-gray-600">60%</span>
                </div>
                <Progress value={60} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Motor Skills</span>
                  </div>
                  <span className="text-sm text-gray-600">50%</span>
                </div>
                <Progress value={50} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Activities Card */}
        <Card className="border-green-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Activities</CardTitle>
            <CardDescription>Scheduled activities and sessions</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Speech Therapy Session</p>
                  <p className="text-sm text-gray-600">Tomorrow, 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Motor Skills Activity</p>
                  <p className="text-sm text-gray-600">Friday, 2:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Modules */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Recommended Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ModuleCard
            title="Basic Communication Skills"
            area="Speech & Language"
            icon={<MessageSquare className="h-5 w-5 text-green-600" />}
            description="Activities to develop basic communication skills and vocabulary."
            progress={20}
            href="/parent/modules/speech-language/basic-communication"
          />
          <ModuleCard
            title="Emotional Recognition"
            area="Social & Emotional"
            icon={<HeartHandshake className="h-5 w-5 text-green-600" />}
            description="Learn to identify and express different emotions."
            progress={0}
            href="/parent/modules/social-emotional/emotional-recognition"
          />
          <ModuleCard
            title="Problem Solving"
            area="Cognitive"
            icon={<Brain className="h-5 w-5 text-green-600" />}
            description="Activities to develop problem-solving skills."
            progress={0}
            href="/parent/modules/cognitive/problem-solving"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Quick Links</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <QuickLinkCard
            title="Developmental Guides"
            description="Browse guides for different developmental areas"
            href="/parent/guides"
          />
          <QuickLinkCard
            title="Activity Modules"
            description="Access interactive learning modules"
            href="/parent/modules"
          />
          <QuickLinkCard
            title="Track Progress"
            description="Monitor your child's development"
            href="/parent/progress"
          />
          <QuickLinkCard title="Community Support" description="Connect with other parents" href="/parent/community" />
        </div>
      </div>
    </div>
  )
}

function ModuleCard({
  title,
  area,
  icon,
  description,
  progress,
  href,
}: {
  title: string
  area: string
  icon: React.ReactNode
  description: string
  progress: number
  href: string
}) {
  return (
    <Card className="border-green-100 transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-2 flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium text-green-600">{area}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Progress</span>
            <span className="text-xs font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5 bg-green-100" indicatorClassName="bg-green-600" />
        </div>
        <Link href={href}>
          <Button className="w-full rounded-full bg-green-600 hover:bg-green-700">
            {progress > 0 ? "Continue" : "Start"} Module
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

function QuickLinkCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href}>
      <Card className="border-green-100 transition-all hover:border-green-200 hover:bg-green-50 hover:shadow-sm">
        <CardContent className="p-4">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
