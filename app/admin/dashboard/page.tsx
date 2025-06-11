"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Download,
  Filter,
  Eye,
  UserCheck,
  Activity,
  Target,
  Award,
  MessageSquare,
  AreaChart,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart as RechartsAreaChart, Area, Cell, Pie, PieChart, XAxis, YAxis } from "recharts"

// Mock data for dashboard
const dashboardStats = {
  totalParents: 1248,
  totalChildren: 1456,
  diagnosedChildren: 892,
  undiagnosedChildren: 564,
  totalModules: 45,
  completedModules: 3247,
  activeSessions: 156,
  feedbackSubmitted: 892,
}

// Chart data
const registrationData = [
  { month: "Jan", parents: 85, children: 102 },
  { month: "Feb", parents: 92, children: 118 },
  { month: "Mar", parents: 108, children: 134 },
  { month: "Apr", parents: 125, children: 156 },
  { month: "May", parents: 142, children: 178 },
  { month: "Jun", parents: 158, children: 195 },
  { month: "Jul", parents: 175, children: 212 },
  { month: "Aug", parents: 189, children: 228 },
  { month: "Sep", parents: 203, children: 245 },
  { month: "Oct", parents: 218, children: 262 },
  { month: "Nov", parents: 235, children: 281 },
  { month: "Dec", parents: 248, children: 298 },
]

const diagnosisData = [
  { name: "Diagnosed", value: 892, color: "#14b8a6" }, // teal-500
  { name: "Undiagnosed", value: 564, color: "#fbbf24" }, // yellow-400
]

const moduleStats = [
  { name: "Early Communication", completions: 234, feedback: 45, rating: 4.8 },
  { name: "Social Skills", completions: 189, feedback: 38, rating: 4.6 },
  { name: "Motor Development", completions: 156, feedback: 29, rating: 4.7 },
  { name: "Cognitive Skills", completions: 134, feedback: 25, rating: 4.5 },
  { name: "Daily Routines", completions: 98, feedback: 18, rating: 4.4 },
]

const recentActivity = [
  { user: "Maria Santos", action: "Completed Early Communication Module", time: "2 hours ago", type: "completion" },
  { user: "Roberto Cruz", action: "Submitted feedback for Social Skills", time: "4 hours ago", type: "feedback" },
  { user: "Elena Reyes", action: "Started Motor Development Module", time: "6 hours ago", type: "start" },
  { user: "Juan Dela Cruz", action: "Updated child profile", time: "8 hours ago", type: "profile" },
  { user: "Sofia Mendoza", action: "Completed developmental checklist", time: "1 day ago", type: "checklist" },
]

// Chart config for registration trends
const registrationChartConfig = {
  parents: { label: "Parents", color: "#14b8a6" },
  children: { label: "Children", color: "#fbbf24" },
}

// Chart config for diagnosis distribution
const diagnosisChartConfig = {
  Diagnosed: { label: "Diagnosed", color: "#14b8a6" },
  Undiagnosed: { label: "Undiagnosed", color: "#fbbf24" },
}

export default function AdminDashboard() {
  const { user } = useAuth()
  const [dateFilter, setDateFilter] = useState("monthly")

  return (
    <div className="container p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}. Here's your system overview.</p>
        </div>
        <div className="flex gap-2">
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-[140px] border-teal-200 focus:ring-teal-600">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">This Week</SelectItem>
              <SelectItem value="monthly">This Month</SelectItem>
              <SelectItem value="quarterly">This Quarter</SelectItem>
              <SelectItem value="yearly">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
            <Download className="mr-2 h-4 w-4" /> Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="border-teal-100 bg-gradient-to-br from-teal-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Parents</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardStats.totalParents.toLocaleString()}</p>
                <p className="text-xs text-teal-600">+12% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-teal-100 bg-gradient-to-br from-gray-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Children Registered</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardStats.totalChildren.toLocaleString()}</p>
                <div className="flex gap-2 text-xs">
                  <span className="text-teal-600">{dashboardStats.diagnosedChildren} diagnosed</span>
                  <span className="text-gray-500">{dashboardStats.undiagnosedChildren} undiagnosed</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-teal-100 bg-gradient-to-br from-yellow-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Module Completions</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardStats.completedModules.toLocaleString()}</p>
                <p className="text-xs text-yellow-600">+8% completion rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-teal-100 bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardStats.activeSessions}</p>
                <p className="text-xs text-green-600">Currently online</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 bg-white text-gray-700 border border-gray-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            Overview
          </TabsTrigger>
          <TabsTrigger value="modules" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            Module Analytics
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            User Activity
          </TabsTrigger>
          <TabsTrigger value="feedback" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            Feedback
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-teal-600" />
                  User Registration Trends
                </CardTitle>
                <CardDescription>New parent and children registrations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[300px]" config={registrationChartConfig}>
                  <RechartsAreaChart data={registrationData}>
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis hide />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      dataKey="parents"
                      type="monotone"
                      fill="var(--color-parents)"
                      fillOpacity={0.6}
                      stroke="var(--color-parents)"
                      stackId="a"
                    />
                    <Area
                      dataKey="children"
                      type="monotone"
                      fill="var(--color-children)"
                      fillOpacity={0.6}
                      stroke="var(--color-children)"
                      stackId="a"
                    />
                  </RechartsAreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-teal-600" />
                  Diagnosis Distribution
                </CardTitle>
                <CardDescription>Breakdown of diagnosed vs undiagnosed children</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[300px]" config={diagnosisChartConfig}>
                  <PieChart>
                    <Pie
                      data={diagnosisData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      nameKey="name"
                    >
                      {diagnosisData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-sm text-gray-600">Diagnosed (61%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm text-gray-600">Undiagnosed (39%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="modules" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-600" />
                Module Performance
              </CardTitle>
              <CardDescription>Completion rates and feedback for each module</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-teal-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-teal-50 text-left">
                        <th className="px-4 py-3 font-medium">Module Name</th>
                        <th className="px-4 py-3 font-medium">Completions</th>
                        <th className="px-4 py-3 font-medium">Feedback Count</th>
                        <th className="px-4 py-3 font-medium">Average Rating</th>
                        <th className="px-4 py-3 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {moduleStats.map((module, index) => (
                        <tr key={index} className="border-t border-teal-100">
                          <td className="px-4 py-3 font-medium">{module.name}</td>
                          <td className="px-4 py-3">{module.completions}</td>
                          <td className="px-4 py-3">{module.feedback}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              <span>{module.rating}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm" className="text-teal-600 hover:bg-teal-50">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-teal-600" />
                Recent User Activity
              </CardTitle>
              <CardDescription>Latest user actions and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        activity.type === "completion"
                          ? "bg-green-100 text-green-600"
                          : activity.type === "feedback"
                            ? "bg-yellow-100 text-yellow-600"
                            : activity.type === "start"
                              ? "bg-teal-100 text-teal-600"
                              : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {activity.type === "completion" && <Award className="h-4 w-4" />}
                      {activity.type === "feedback" && <MessageSquare className="h-4 w-4" />}
                      {activity.type === "start" && <BookOpen className="h-4 w-4" />}
                      {activity.type === "profile" && <Users className="h-4 w-4" />}
                      {activity.type === "checklist" && <UserCheck className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/admin/users">
                  <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                    View All Activity
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-teal-600" />
                Recent Feedback
              </CardTitle>
              <CardDescription>Latest feedback submitted by parents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-lg bg-gradient-to-br from-yellow-50 to-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                  <p className="text-gray-500">Feedback analytics dashboard</p>
                  <p className="text-sm text-gray-400">Sentiment analysis and trends</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <div className="mt-8">
        <Card className="border-teal-100">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/admin/users">
                <Button className="w-full justify-start bg-teal-600 hover:bg-teal-700">
                  <Users className="mr-2 h-4 w-4" /> Manage Users
                </Button>
              </Link>
              <Link href="/admin/resources">
                <Button className="w-full justify-start bg-gray-600 hover:bg-gray-700">
                  <BookOpen className="mr-2 h-4 w-4" /> Add Module
                </Button>
              </Link>
              <Link href="/admin/events">
                <Button className="w-full justify-start bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                  <Calendar className="mr-2 h-4 w-4" /> Create Event
                </Button>
              </Link>
              <Link href="/admin/reports">
                <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                  <Download className="mr-2 h-4 w-4" /> Generate Report
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
