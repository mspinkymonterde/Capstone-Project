"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StatisticsPage() {
  return (
    <div className="container p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">System Statistics</h1>
        <p className="text-gray-600">View detailed statistics and analytics about system usage</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 bg-white text-gray-700">
          <TabsTrigger value="overview" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Overview
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            User Statistics
          </TabsTrigger>
          <TabsTrigger value="resources" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Resource Usage
          </TabsTrigger>
          <TabsTrigger value="modules" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Module Completion
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>New user registrations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-lg bg-green-50 flex items-center justify-center">
                  <p className="text-gray-500">User growth chart placeholder</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>System Usage</CardTitle>
                <CardDescription>Daily active users and sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-lg bg-green-50 flex items-center justify-center">
                  <p className="text-gray-500">System usage chart placeholder</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100 md:col-span-2">
              <CardHeader>
                <CardTitle>Resource Engagement</CardTitle>
                <CardDescription>Most accessed resources by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-lg bg-green-50 flex items-center justify-center">
                  <p className="text-gray-500">Resource engagement chart placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>User Demographics</CardTitle>
                <CardDescription>Breakdown of users by role and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-lg bg-green-50 flex items-center justify-center">
                  <p className="text-gray-500">User demographics chart placeholder</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <CardTitle>User Retention</CardTitle>
                <CardDescription>User retention rates over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-lg bg-green-50 flex items-center justify-center">
                  <p className="text-gray-500">User retention chart placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-0">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Resource Usage</CardTitle>
              <CardDescription>Most accessed resources and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-lg bg-green-50 flex items-center justify-center">
                <p className="text-gray-500">Resource usage chart placeholder</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modules" className="mt-0">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle>Module Completion Rates</CardTitle>
              <CardDescription>Completion rates for activity modules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full rounded-lg bg-green-50 flex items-center justify-center">
                <p className="text-gray-500">Module completion chart placeholder</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
