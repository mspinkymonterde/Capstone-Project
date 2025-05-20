"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle, Clock, FileText, Play, Video, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function EarlyCommunicationPage() {
  const activities = [
    {
      id: "act-1",
      title: "Communication Milestones Assessment",
      type: "assessment",
      icon: FileText,
      status: "completed",
      duration: "15 min",
      href: "/parent/modules/speech-language/early-communication/activity-1",
    },
    {
      id: "act-2",
      title: "Responding to Communication Attempts",
      type: "video",
      icon: Video,
      status: "completed",
      duration: "10 min",
      href: "/parent/modules/speech-language/early-communication/activity-2",
    },
    {
      id: "act-3",
      title: "Picture Exchange Communication Activity",
      type: "interactive",
      icon: Play,
      status: "in-progress",
      duration: "20 min",
      href: "/parent/modules/speech-language/early-communication/activity-3",
    },
    {
      id: "act-4",
      title: "Daily Communication Opportunities",
      type: "practice",
      icon: Clock,
      status: "not-started",
      duration: "15 min",
      href: "/parent/modules/speech-language/early-communication/activity-4",
    },
    {
      id: "act-5",
      title: "Progress Check & Next Steps",
      type: "assessment",
      icon: FileText,
      status: "not-started",
      duration: "10 min",
      href: "/parent/modules/speech-language/early-communication/activity-5",
    },
  ]

  const completedActivities = activities.filter((a) => a.status === "completed").length
  const totalActivities = activities.length
  const progress = Math.round((completedActivities / totalActivities) * 100)
      {/* <SidebarToggle /> */}
  return (
    <>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-4">
          <Link
            href="/parent/modules"
            className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-1 h-3 w-3" />
            Back to Pathways
          </Link>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Early Communication Foundations</h1>
              <p className="text-gray-600">
                Learn to recognize and respond to your child's early communication attempts
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-sm font-medium">{progress}% Complete</div>
                <div className="text-xs text-gray-500">
                  {completedActivities} of {totalActivities} activities
                </div>
              </div>
              <div className="h-10 w-10">
                <svg viewBox="0 0 36 36" className="h-10 w-10">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeDasharray={`${progress}, 100`}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6 bg-white text-gray-700">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="activities"
                  className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
                >
                  Activities
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
                >
                  Resources
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Module</CardTitle>
                    <CardDescription>
                      Understanding early communication and building foundational skills
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="mb-2 font-semibold">Learning Objectives</h3>
                      <ul className="ml-6 list-disc space-y-1 text-gray-700">
                        <li>Recognize your child's early communication attempts</li>
                        <li>Respond appropriately to encourage communication development</li>
                        <li>Create opportunities for communication throughout daily routines</li>
                        <li>Use visual supports to enhance communication</li>
                        <li>Track progress in early communication skills</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 font-semibold">Why This Matters</h3>
                      <p className="text-gray-700">
                        Early communication skills form the foundation for all future language development. By
                        recognizing and responding to your child's communication attempts, you create a positive
                        feedback loop that encourages more communication. This module will help you identify your
                        child's current communication level and provide strategies to move to the next stage, whether
                        they're at the pre-verbal, single word, or early phrases stage.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-2 font-semibold">What You'll Learn</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Communication Milestones</p>
                            <p className="text-sm text-gray-600">
                              Understand typical communication development stages from 0-5 years
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Responsive Communication Strategies</p>
                            <p className="text-sm text-gray-600">
                              Learn techniques to respond to and encourage communication attempts
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Visual Communication Supports</p>
                            <p className="text-sm text-gray-600">
                              Use pictures and objects to support understanding and expression
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">Daily Communication Opportunities</p>
                            <p className="text-sm text-gray-600">
                              Integrate communication practice into everyday routines
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link href="/parent/modules/speech-language/early-communication/activity-3">
                        <Button className="w-full rounded-full bg-green-600 hover:bg-green-700 sm:w-auto">
                          Continue Module
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activities" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Module Activities</CardTitle>
                    <CardDescription>Complete these activities to progress through the module</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activities.map((activity, index) => (
                        <Link key={activity.id} href={activity.href}>
                          <div
                            className={`flex items-start gap-4 rounded-lg border p-4 transition-colors ${
                              activity.status === "completed"
                                ? "border-green-200 bg-green-50"
                                : activity.status === "in-progress"
                                  ? "border-amber-200 bg-amber-50"
                                  : "border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                activity.status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : activity.status === "in-progress"
                                    ? "bg-amber-100 text-amber-600"
                                    : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {activity.status === "completed" ? (
                                <CheckCircle className="h-5 w-5" />
                              ) : (
                                <activity.icon className="h-5 w-5" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">
                                    {index + 1}. {activity.title}
                                  </span>
                                  <span
                                    className={`rounded-full px-2 py-0.5 text-xs ${
                                      activity.status === "completed"
                                        ? "bg-green-100 text-green-700"
                                        : activity.status === "in-progress"
                                          ? "bg-amber-100 text-amber-700"
                                          : "bg-gray-100 text-gray-700"
                                    }`}
                                  >
                                    {activity.status === "completed"
                                      ? "Completed"
                                      : activity.status === "in-progress"
                                        ? "In Progress"
                                        : "Not Started"}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-500">{activity.duration}</span>
                              </div>
                              <p className="mt-1 text-sm text-gray-600">
                                {activity.type === "assessment"
                                  ? "Complete an assessment to track progress"
                                  : activity.type === "video"
                                    ? "Watch instructional video content"
                                    : activity.type === "interactive"
                                      ? "Interactive learning activity"
                                      : "Practice activity for daily implementation"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Resources</CardTitle>
                    <CardDescription>Supplementary materials to support your learning in this module</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-gray-200 p-4">
                        <h3 className="mb-2 font-semibold">Printable Materials</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
                              <FileText className="h-4 w-4" />
                              <span>Communication Milestones Chart (PDF)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
                              <FileText className="h-4 w-4" />
                              <span>Picture Communication Cards (PDF)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
                              <FileText className="h-4 w-4" />
                              <span>Daily Communication Tracker (PDF)</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-gray-200 p-4">
                        <h3 className="mb-2 font-semibold">Video Resources</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
                              <Video className="h-4 w-4" />
                              <span>Responding to Communication Attempts (10:15)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
                              <Video className="h-4 w-4" />
                              <span>Using Visual Supports at Home (8:42)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
                              <Video className="h-4 w-4" />
                              <span>Expert Q&A: Early Communication (15:30)</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-lg border border-gray-200 p-4">
                        <h3 className="mb-2 font-semibold">External Resources</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
                              <FileText className="h-4 w-4" />
                              <span>American Speech-Language-Hearing Association: Early Communication</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-2 text-green-600 hover:underline">
                              <FileText className="h-4 w-4" />
                              <span>CDC: Communication Milestones</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Module Completion</span>
                    <span className="text-sm font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Activities Completed:</span>
                    <span className="font-medium">
                      {completedActivities}/{totalActivities}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Time Spent:</span>
                    <span className="font-medium">45 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Last Activity:</span>
                    <span className="font-medium">Today</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="mb-2 text-sm font-medium">Next Up</h4>
                  <Link href="/parent/modules/speech-language/early-communication/activity-3">
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                      <div className="flex items-center gap-2 text-amber-800">
                        <Play className="h-4 w-4" />
                        <span className="font-medium">Picture Exchange Communication Activity</span>
                      </div>
                      <p className="mt-1 text-xs text-amber-700">Continue where you left off</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">Having trouble with this module or need additional support?</p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-left">
                    <FileText className="mr-2 h-4 w-4" />
                    View FAQ
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left">
                    <Video className="mr-2 h-4 w-4" />
                    Watch Tutorial
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
