"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, FileText, Plus, Users } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const { user } = useAuth()

  return (
    <div className="container p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}. Here's an overview of the system.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/resources/add">
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" /> Add Resource
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold">1,248</p>
                <p className="text-xs text-green-600">+12% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Resources</p>
                <p className="text-2xl font-bold">356</p>
                <p className="text-xs text-green-600">+8 new this week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <BarChart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Sessions</p>
                <p className="text-2xl font-bold">87</p>
                <p className="text-xs text-green-600">+5% from yesterday</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle>Recent User Activity</CardTitle>
            <CardDescription>Latest user registrations and logins</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-green-100">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-green-50 text-left">
                      <th className="px-4 py-3 font-medium">User</th>
                      <th className="px-4 py-3 font-medium">Action</th>
                      <th className="px-4 py-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { user: "Maria Santos", action: "Completed Module", date: "Today, 10:30 AM" },
                      { user: "Roberto Cruz", action: "New Registration", date: "Today, 9:15 AM" },
                      { user: "Elena Reyes", action: "Login", date: "Yesterday, 4:20 PM" },
                      { user: "Juan Dela Cruz", action: "Updated Profile", date: "Yesterday, 2:45 PM" },
                      { user: "Sofia Mendoza", action: "Login", date: "May 10, 2025, 11:30 AM" },
                    ].map((activity, index) => (
                      <tr key={index} className="border-t border-green-100">
                        <td className="px-4 py-3">{activity.user}</td>
                        <td className="px-4 py-3">{activity.action}</td>
                        <td className="px-4 py-3">{activity.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/admin/users">
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  View All Users
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardHeader>
            <CardTitle>Resource Usage</CardTitle>
            <CardDescription>Most accessed resources this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { title: "Basic Communication Skills", category: "Speech & Language", views: 245 },
                { title: "Emotional Recognition", category: "Social & Emotional", views: 198 },
                { title: "Problem Solving Activities", category: "Cognitive", views: 176 },
                { title: "Fine Motor Skills", category: "Motor Skills", views: 154 },
                { title: "Daily Living Skills", category: "Adaptive", views: 132 },
              ].map((resource, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{resource.title}</p>
                    <p className="text-sm text-gray-600">{resource.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{resource.views}</p>
                    <p className="text-sm text-gray-600">views</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/admin/resources">
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  Manage Resources
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
