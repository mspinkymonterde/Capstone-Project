"use client"

import React, { useState, useEffect, useRef } from "react"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Brain,
  Calendar,
  HeartHandshake,
  MessageSquare,
  Dumbbell,
  ArrowRight,
  Star,
  Trophy,
  Target,
  Clock,
  TrendingUp,
  BookOpen,
  Users,
  Award,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Zap,
  Puzzle,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getCsnEvents } from "@/components/csn-event-service"

export default function ParentDashboardPage() {
  const { user, markFirstLoginComplete } = useAuth()
  const router = useRouter()
  const children = user?.childrenInfo || []

  // Track previous checklistCompleted value
  const prevChecklistCompleted = useRef<boolean | undefined>(undefined)

  // Persist checklist complete notification dismissal
  const [showChecklistComplete, setShowChecklistComplete] = useState(true)

  // On mount, read from localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && user?.checklistCompleted) {
      const dismissed = localStorage.getItem("checklistCompleteDismissed")
      setShowChecklistComplete(dismissed !== "true")
    }
  }, [user?.checklistCompleted])

  // When dismissed, set localStorage
  const handleDismissChecklistComplete = () => {
    setShowChecklistComplete(false)
    if (typeof window !== "undefined") {
      localStorage.setItem("checklistCompleteDismissed", "true")
    }
  }

  // Reset dismissal if checklistCompleted transitions from false to true
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      user?.checklistCompleted &&
      prevChecklistCompleted.current === false
    ) {
      localStorage.removeItem("checklistCompleteDismissed")
      setShowChecklistComplete(true)
    }
    prevChecklistCompleted.current = user?.checklistCompleted
  }, [user?.checklistCompleted])

  const handleStartChecklist = () => {
    router.push("/parent/checklist")
  }

  const events = getCsnEvents();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-yellow-50">
        <div className="container mx-auto p-4 md:p-6">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-green-500 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                  {user?.isFirstLogin ? "Welcome" : "Welcome back"}, {user?.name}!
                </h1>
                <p className="text-gray-600">
                  Let's continue supporting your {children.length > 1 ? "children" : "child"}'s development journey
                </p>
              </div>
            </div>
          </div>

          {/* Checklist Prompt for users who haven't completed it */}
          {!user?.checklistCompleted && children.length > 0 && (
            <Alert className="mb-8 border-0 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <AlertTitle className="text-xl font-bold text-gray-800 mb-2">
                    🎯 Get Personalized Recommendations!
                  </AlertTitle>
                  <AlertDescription className="text-gray-700 mb-4">
                    Complete a quick developmental checklist for {children[0]?.name} to receive personalized learning
                    modules and track progress more effectively. It only takes 5-10 minutes!
                  </AlertDescription>
                  <div className="flex gap-3">
                    <Button
                      onClick={handleStartChecklist}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Start Assessment
                    </Button>
                  </div>
                </div>
              </div>
            </Alert>
          )}

          {/* Checklist Completion Success */}
          {user?.checklistCompleted && showChecklistComplete && (
            <Alert className="mb-8 border-0 bg-gradient-to-r from-green-50 to-emerald-50 shadow-md relative">
              <button
                onClick={handleDismissChecklistComplete}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 focus:outline-none"
                aria-label="Dismiss"
              >
                ×
              </button>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <AlertTitle className="text-lg font-bold text-gray-800 mb-1">✅ Checklist Complete!</AlertTitle>
                  <AlertDescription className="text-gray-700">
                    Great job! Your personalized recommendations are now available below based on your child's
                    assessment.
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          )}

          {/* Children Cards */}
          <div className={`grid gap-6 mb-8 ${children.length >= 2 ? 'md:grid-cols-2' : ''}`}>
            {children.map((child, index) => (
              <Card key={index} className="border-0 shadow-md bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 via-green-500 to-yellow-500 h-2"></div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                        {child.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{child.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{child.age} years old</span>
                          <span>•</span>
                          <span className="capitalize">{child.gender}</span>
                          <span>•</span>
                          <Badge
                            variant={child.status === "diagnosed" ? "destructive" : "secondary"}
                            className="text-xs"
                          >
                            {child.status === "diagnosed" ? child.diagnosisType : "Undiagnosed"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Areas */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    <ProgressCard
                      icon={<Brain className="h-5 w-5 text-purple-500" />}
                      title="Cognitive"
                      progress={user?.checklistCompleted ? 65 : 0}
                      color="purple"
                    />
                    <ProgressCard
                      icon={<MessageSquare className="h-5 w-5 text-blue-500" />}
                      title="Speech"
                      progress={user?.checklistCompleted ? 45 : 0}
                      color="blue"
                    />
                    <ProgressCard
                      icon={<HeartHandshake className="h-5 w-5 text-pink-500" />}
                      title="Social"
                      progress={user?.checklistCompleted ? 80 : 0}
                      color="pink"
                    />
                    <ProgressCard
                      icon={<Dumbbell className="h-5 w-5 text-orange-500" />}
                      title="Motor"
                      progress={user?.checklistCompleted ? 55 : 0}
                      color="orange"
                    />
                    <ProgressCard
                      icon={<Puzzle className="h-5 w-5 text-green-500" />}
                      title="Adaptive"
                      progress={user?.checklistCompleted ? 60 : 0}
                      color="green"
                    />
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-3">
                    <Button
                      onClick={handleStartChecklist}
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      View Assessment
                    </Button>
                    <Button size="sm" variant="outline" className="border-teal-300 text-teal-600 hover:bg-teal-50">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Update Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show message if no children */}
          {children.length === 0 && (
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm mb-8">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <AlertCircle className="h-16 w-16 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Children Added Yet</h3>
                <p className="text-gray-600 mb-4">
                  Add your child's information to get started with personalized developmental support.
                </p>
                <Link href="/parent/child-info">
                  <Button className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white">
                    Add Child Information
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Dashboard Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Today's Activities */}
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-800">Today's Activities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {user?.checklistCompleted ? (
                  <>
                    <ActivityItem title="Morning Routine Practice" time="9:00 AM" status="completed" points={25} />
                    <ActivityItem title="Speech Exercise Session" time="2:00 PM" status="pending" points={30} />
                    <ActivityItem title="Fine Motor Skills Game" time="4:00 PM" status="pending" points={20} />
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500 text-sm mb-3">Complete the checklist to see personalized activities</p>
                    <Button
                      onClick={handleStartChecklist}
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      Start Assessment
                    </Button>
                  </div>
                )}
                <Link href="/parent/modules" className="block">
                  <Button variant="ghost" className="w-full text-blue-600 hover:bg-blue-50">
                    View All Activities <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-800">Recent Achievements</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {user?.checklistCompleted ? (
                  <>
                    <AchievementItem
                      title="Assessment Complete"
                      description="Completed developmental checklist"
                      date="Today"
                      icon="🎉"
                    />
                    <AchievementItem
                      title="Getting Started"
                      description="Joined the parent support system"
                      date="Today"
                      icon="🌟"
                    />
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500 text-sm mb-3">Your achievements will appear here</p>
                    <div className="text-xs text-gray-400">Complete activities to earn achievements</div>
                  </div>
                )}
                <Link href="/parent/progress" className="block">
                  <Button variant="ghost" className="w-full text-yellow-600 hover:bg-yellow-50">
                    View All Achievements <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-800">Upcoming Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.slice(0, 3).map((event, idx) => (
                  <div key={event.title + idx} className="p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <div className="font-medium text-sm text-gray-800">{event.title}</div>
                    <div className="text-xs text-gray-600">{event.date} at {event.time}</div>
                    <div className="text-xs text-gray-500">{event.location}</div>
                  </div>
                ))}
                <Link href="/parent/event" className="block">
                  <Button variant="ghost" className="w-full text-green-600 hover:bg-green-50">
                    View All Events <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Modules */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-800">
                {user?.checklistCompleted ? "Recommended for You" : "Popular Modules"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ModuleCard
                title="Emotional Recognition Games"
                area="Social & Emotional"
                icon={<HeartHandshake className="h-6 w-6 text-pink-500" />}
                description="Fun activities to help your child identify and express emotions"
                progress={0}
                difficulty="Beginner"
                duration="2-3 weeks"
                href="/parent/modules/social-emotional/emotional-recognition"
                featured={user?.checklistCompleted}
              />
              <ModuleCard
                title="Communication Builders"
                area="Speech & Language"
                icon={<MessageSquare className="h-6 w-6 text-blue-500" />}
                description="Interactive exercises to boost communication skills"
                progress={user?.checklistCompleted ? 25 : 0}
                difficulty="Intermediate"
                duration="3-4 weeks"
                href="/parent/modules/speech-language/basic-communication"
              />
              <ModuleCard
                title="Fine Motor Adventures"
                area="Motor Skills"
                icon={<Dumbbell className="h-6 w-6 text-orange-500" />}
                description="Engaging activities to develop hand coordination"
                progress={0}
                difficulty="Beginner"
                duration="2-3 weeks"
                href="/parent/modules/motor-skills/fine-motor"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Access</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <QuickLinkCard
                title="Learning Modules"
                description="Explore developmental activities"
                href="/parent/modules"
                icon={<BookOpen className="h-5 w-5 text-teal-600" />}
                color="teal"
              />
              <QuickLinkCard
                title="Progress Tracking"
                description="Monitor development milestones"
                href="/parent/progress"
                icon={<TrendingUp className="h-5 w-5 text-green-600" />}
                color="green"
              />
              <QuickLinkCard
                title="Community"
                description="Connect with other parents"
                href="/parent/community"
                icon={<Users className="h-5 w-5 text-purple-600" />}
                color="purple"
              />
              <QuickLinkCard
                title="Resources"
                description="Download helpful materials"
                href="/parent/resources"
                icon={<Star className="h-5 w-5 text-yellow-600" />}
                color="yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ProgressCard({
  icon,
  title,
  progress,
  color,
}: {
  icon: React.ReactNode
  title: string
  progress: number
  color: string
}) {
  const colorClasses = {
    purple: "from-purple-500 to-purple-600",
    blue: "from-blue-500 to-blue-600",
    pink: "from-pink-500 to-pink-600",
    orange: "from-orange-500 to-orange-600",
    green: "bg-green-500", // solid green for adaptive
  }

  return (
    <div className="text-center space-y-2">
      <div className="flex justify-center">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{title}</div>
      <div className="space-y-1">
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-2 rounded-full transition-all duration-300 ${color === "green" ? "bg-green-500" : `bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]}`}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-gray-500">{progress}%</div>
      </div>
    </div>
  )
}

function ActivityItem({
  title,
  time,
  status,
  points,
}: {
  title: string
  time: string
  status: "completed" | "pending"
  points: number
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <div className={`h-3 w-3 rounded-full ${status === "completed" ? "bg-green-500" : "bg-yellow-500"}`} />
        <div>
          <div className="font-medium text-sm text-gray-800">{title}</div>
          <div className="text-xs text-gray-500">{time}</div>
        </div>
      </div>
      <div className="text-xs font-medium text-teal-600">+{points} XP</div>
    </div>
  )
}

function AchievementItem({
  title,
  description,
  date,
  icon,
}: {
  title: string
  description: string
  date: string
  icon: string
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <div className="font-medium text-sm text-gray-800">{title}</div>
        <div className="text-xs text-gray-600">{description}</div>
        <div className="text-xs text-gray-500 mt-1">{date}</div>
      </div>
    </div>
  )
}

function EventItem({
  title,
  date,
  time,
  type,
}: {
  title: string
  date: string
  time: string
  type: "support" | "workshop" | "event"
}) {
  const typeColors = {
    support: "bg-blue-100 text-blue-700",
    workshop: "bg-purple-100 text-purple-700",
    event: "bg-green-100 text-green-700",
  }

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
      <div>
        <div className="font-medium text-sm text-gray-800">{title}</div>
        <div className="text-xs text-gray-600">
          {date} at {time}
        </div>
      </div>
      <Badge className={`text-xs ${typeColors[type]}`}>{type}</Badge>
    </div>
  )
}

function ModuleCard({
  title,
  area,
  icon,
  description,
  progress,
  difficulty,
  duration,
  href,
  featured = false,
}: {
  title: string
  area: string
  icon: React.ReactNode
  description: string
  progress: number
  difficulty: string
  duration: string
  href: string
  featured?: boolean
}) {
  return (
    <Card
      className={`border-0 shadow-md bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg hover:scale-105 ${
        featured ? "ring-2 ring-yellow-400 ring-opacity-50" : ""
      }`}
    >
      <CardContent className="p-6">
        {featured && (
          <div className="flex items-center gap-1 mb-3">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <Badge className="bg-yellow-100 text-yellow-700 text-xs">Recommended</Badge>
          </div>
        )}
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <Badge variant="secondary" className="text-xs">
            {area}
          </Badge>
        </div>
        <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="space-y-3">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Difficulty: {difficulty}</span>
            <span>Duration: {duration}</span>
          </div>

          {progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-teal-600">{progress}%</span>
              </div>
              <Progress
                value={progress}
                className="h-2 bg-gray-200 bg-gradient-to-r from-teal-500 to-green-500"
              />
            </div>
          )}
        </div>

        <Link href={href} className="block mt-4">
          <Button className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold">
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
  icon,
  color,
}: {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  color: string
}) {
  const colorClasses = {
    teal: "hover:bg-teal-50 hover:border-teal-200",
    green: "hover:bg-green-50 hover:border-green-200",
    purple: "hover:bg-purple-50 hover:border-purple-200",
    yellow: "hover:bg-yellow-50 hover:border-yellow-200",
  }

  return (
    <Link href={href}>
      <Card
        className={`border-2 border-gray-100 transition-all hover:shadow-md ${colorClasses[color as keyof typeof colorClasses]}`}
      >
        <CardContent className="p-4 text-center">
          <div className="flex justify-center mb-2">{icon}</div>
          <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-xs text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
