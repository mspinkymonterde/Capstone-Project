"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { ArrowLeft } from "lucide-react"

// Mock data for statistics
const usersByAge = [
  { age: "0-1", count: 12 },
  { age: "1-2", count: 18 },
  { age: "2-3", count: 24 },
  { age: "3-4", count: 32 },
  { age: "4-5", count: 28 },
  { age: "5-6", count: 22 },
  { age: "6-7", count: 20 },
]

const usersByDiagnosis = [
  { name: "Autism Spectrum Disorder", value: 28 },
  { name: "Speech Delay", value: 22 },
  { name: "ADHD", value: 15 },
  { name: "Developmental Delay", value: 12 },
  { name: "Sensory Processing Disorder", value: 10 },
  { name: "Other", value: 8 },
  { name: "Undiagnosed", value: 61 },
]

const activityCompletionByArea = [
  { name: "Speech", completed: 48, target: 60 },
  { name: "Cognitive", completed: 35, target: 50 },
  { name: "Motor", completed: 42, target: 55 },
  { name: "Social", completed: 32, target: 45 },
  { name: "Adaptive", completed: 30, target: 40 },
]

const userGrowthByMonth = [
  { month: "Jan", users: 42 },
  { month: "Feb", users: 53 },
  { month: "Mar", users: 62 },
  { month: "Apr", users: 78 },
  { month: "May", users: 91 },
  { month: "Jun", users: 103 },
  { month: "Jul", users: 125 },
  { month: "Aug", users: 143 },
  { month: "Sep", users: 156 },
]

const resourceUsageByType = [
  { type: "Guide", downloads: 245 },
  { type: "Activity", downloads: 320 },
  { type: "Worksheet", downloads: 180 },
  { type: "Visual Aid", downloads: 150 },
  { type: "Chart", downloads: 110 },
  { type: "Video", downloads: 95 },
]

const COLORS = ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#bbf7d0", "#dcfce7", "#f0fdf4"]

export default function AdminStatistics() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">

          <div className="mb-8">
            <h1 className="text-3xl font-bold">System Statistics</h1>
            <p className="text-muted-foreground">Detailed statistics and analytics about the Parent Support System</p>
          </div>

          <Tabs defaultValue="users" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="users">User Statistics</TabsTrigger>
              <TabsTrigger value="activities">Activity Statistics</TabsTrigger>
              <TabsTrigger value="resources">Resource Statistics</TabsTrigger>
            </TabsList>

            <TabsContent value="users">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>User Distribution by Child Age</CardTitle>
                    <CardDescription>Number of users grouped by their child&apos;s age</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={usersByAge}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="age" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#16a34a" name="Number of Users" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>User Distribution by Diagnosis</CardTitle>
                    <CardDescription>Number of users grouped by diagnosis type</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={usersByDiagnosis}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {usersByDiagnosis.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>User Growth Over Time</CardTitle>
                  <CardDescription>Monthly growth in user registrations</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={userGrowthByMonth}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="users" stroke="#16a34a" activeDot={{ r: 8 }} name="Total Users" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activities">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Activity Completion by Developmental Area</CardTitle>
                  <CardDescription>Completed activities compared to target goals</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={activityCompletionByArea}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" fill="#16a34a" name="Completed Activities" />
                      <Bar dataKey="target" fill="#86efac" name="Target Activities" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Completion Rate</CardTitle>
                    <CardDescription>Percentage of started activities that were completed</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Completed", value: 187 },
                            { name: "In Progress", value: 58 },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          <Cell fill="#16a34a" />
                          <Cell fill="#86efac" />
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Average Time to Complete Activities</CardTitle>
                    <CardDescription>Average time (in minutes) to complete activities by area</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: "Speech", time: 18 },
                          { name: "Cognitive", time: 22 },
                          { name: "Motor", time: 25 },
                          { name: "Social", time: 20 },
                          { name: "Adaptive", time: 15 },
                        ]}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="time" fill="#16a34a" name="Minutes" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Resource Usage by Type</CardTitle>
                  <CardDescription>Number of downloads/views by resource type</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={resourceUsageByType}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="type" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="downloads" fill="#16a34a" name="Downloads/Views" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Resource Distribution by Area</CardTitle>
                    <CardDescription>Number of resources available in each developmental area</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Speech & Language", value: 18 },
                            { name: "Cognitive", value: 15 },
                            { name: "Motor Skills", value: 16 },
                            { name: "Social & Emotional", value: 14 },
                            { name: "Adaptive", value: 15 },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {COLORS.map((color, index) => (
                            <Cell key={`cell-${index}`} fill={color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Most Popular Resources</CardTitle>
                    <CardDescription>Top 5 most accessed resources</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={[
                          { name: "Speech Development Milestones", views: 245 },
                          { name: "Fine Motor Skills Worksheet", views: 210 },
                          { name: "Cognitive Activities for Toddlers", views: 185 },
                          { name: "Social Skills Visual Cards", views: 160 },
                          { name: "Self-Care Routine Chart", views: 140 },
                        ]}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 100,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="views" fill="#16a34a" name="Views" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
