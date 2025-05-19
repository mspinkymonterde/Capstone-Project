import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, FileText, Plus, Search, Users } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-black">Admin Dashboard</h1>
            <p className="text-gray-600">Manage users, resources, and system settings.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Plus className="mr-2 h-4 w-4" /> Add New Resource
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-green-200 shadow-sm">
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
          <Card className="border-green-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Resources</p>
                  <p className="text-2xl font-bold">356</p>
                  <p className="text-xs text-green-600">+8 new this week</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <FileText className="h-6 w-6" />
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

        {/* Main Content */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="bg-green-50 text-green-600">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="mt-4">
            <Card className="border-green-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">User Management</CardTitle>
                    <CardDescription>View and manage system users</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Search users..."
                        className="pl-8 border-green-200 focus-visible:ring-green-600 w-full md:w-[250px]"
                      />
                    </div>
                    <Button variant="outline" size="icon" className="border-green-200">
                      <Download className="h-4 w-4 text-green-600" />
                      <span className="sr-only">Download user data</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-green-100">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-green-50 text-left">
                          <th className="px-4 py-3 font-medium">Name</th>
                          <th className="px-4 py-3 font-medium">Email</th>
                          <th className="px-4 py-3 font-medium">Role</th>
                          <th className="px-4 py-3 font-medium">Status</th>
                          <th className="px-4 py-3 font-medium">Joined</th>
                          <th className="px-4 py-3 font-medium text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "Maria Santos",
                            email: "maria@example.com",
                            role: "Parent",
                            status: "Active",
                            joined: "May 10, 2025",
                          },
                          {
                            name: "Roberto Cruz",
                            email: "roberto@example.com",
                            role: "Parent",
                            status: "Active",
                            joined: "May 8, 2025",
                          },
                          {
                            name: "Elena Reyes",
                            email: "elena@example.com",
                            role: "Specialist",
                            status: "Active",
                            joined: "April 25, 2025",
                          },
                          {
                            name: "Juan Dela Cruz",
                            email: "juan@example.com",
                            role: "Admin",
                            status: "Active",
                            joined: "March 15, 2025",
                          },
                          {
                            name: "Sofia Mendoza",
                            email: "sofia@example.com",
                            role: "Parent",
                            status: "Inactive",
                            joined: "February 20, 2025",
                          },
                        ].map((user, index) => (
                          <tr key={index} className="border-t border-green-100">
                            <td className="px-4 py-3">{user.name}</td>
                            <td className="px-4 py-3">{user.email}</td>
                            <td className="px-4 py-3">{user.role}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {user.status}
                              </span>
                            </td>
                            <td className="px-4 py-3">{user.joined}</td>
                            <td className="px-4 py-3 text-right">
                              <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50">
                                Edit
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-600">Showing 5 of 1,248 users</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-green-200 text-green-600">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="border-green-200 text-green-600">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-4">
            <Card className="border-green-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Resource Management</CardTitle>
                    <CardDescription>Manage educational resources and materials</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input
                        type="search"
                        placeholder="Search resources..."
                        className="pl-8 border-green-200 focus-visible:ring-green-600 w-full md:w-[250px]"
                      />
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Plus className="mr-2 h-4 w-4" /> Add Resource
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border border-green-100">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-green-50 text-left">
                          <th className="px-4 py-3 font-medium">Title</th>
                          <th className="px-4 py-3 font-medium">Category</th>
                          <th className="px-4 py-3 font-medium">Type</th>
                          <th className="px-4 py-3 font-medium">Added By</th>
                          <th className="px-4 py-3 font-medium">Date Added</th>
                          <th className="px-4 py-3 font-medium text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            title: "Building Communication Skills",
                            category: "Speech & Communication",
                            type: "Activity Guide",
                            addedBy: "Elena Reyes",
                            dateAdded: "May 10, 2025",
                          },
                          {
                            title: "Social Stories for Everyday Situations",
                            category: "Social & Emotional",
                            type: "Visual Guide",
                            addedBy: "Juan Dela Cruz",
                            dateAdded: "May 5, 2025",
                          },
                          {
                            title: "Memory and Attention Games",
                            category: "Cognitive Development",
                            type: "Interactive Activity",
                            addedBy: "Elena Reyes",
                            dateAdded: "April 28, 2025",
                          },
                          {
                            title: "Problem-Solving Activities",
                            category: "Cognitive Development",
                            type: "Worksheet",
                            addedBy: "Juan Dela Cruz",
                            dateAdded: "April 20, 2025",
                          },
                          {
                            title: "Emotional Regulation Techniques",
                            category: "Social & Emotional",
                            type: "Video Guide",
                            addedBy: "Elena Reyes",
                            dateAdded: "April 15, 2025",
                          },
                        ].map((resource, index) => (
                          <tr key={index} className="border-t border-green-100">
                            <td className="px-4 py-3">{resource.title}</td>
                            <td className="px-4 py-3">{resource.category}</td>
                            <td className="px-4 py-3">{resource.type}</td>
                            <td className="px-4 py-3">{resource.addedBy}</td>
                            <td className="px-4 py-3">{resource.dateAdded}</td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50">
                                  Edit
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                                  Delete
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-600">Showing 5 of 356 resources</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-green-200 text-green-600">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="border-green-200 text-green-600">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-4">
            <Card className="border-green-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">System Analytics</CardTitle>
                <CardDescription>Usage statistics and platform analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="rounded-lg border border-green-100 p-6">
                    <h3 className="mb-4 text-lg font-medium">User Engagement</h3>
                    <div className="h-[300px] w-full bg-green-50 flex items-center justify-center">
                      <p className="text-gray-500">Analytics chart placeholder</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="border-green-200 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Most Accessed Resources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Building Communication Skills</span>
                            <span className="text-sm font-medium">245 views</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Social Stories</span>
                            <span className="text-sm font-medium">198 views</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Memory Games</span>
                            <span className="text-sm font-medium">176 views</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">User Demographics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Parents</span>
                            <span className="text-sm font-medium">78%</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Specialists</span>
                            <span className="text-sm font-medium">15%</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Administrators</span>
                            <span className="text-sm font-medium">7%</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Device Usage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Mobile</span>
                            <span className="text-sm font-medium">65%</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Desktop</span>
                            <span className="text-sm font-medium">30%</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-sm">Tablet</span>
                            <span className="text-sm font-medium">5%</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-4">
            <Card className="border-green-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">System Settings</CardTitle>
                <CardDescription>Configure system preferences and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">General Settings</h3>
                    <div className="rounded-lg border border-green-100 p-4 space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="system-name">System Name</Label>
                        <Input
                          id="system-name"
                          defaultValue="Parent Support System"
                          className="border-green-200 focus-visible:ring-green-600"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="contact-email">Contact Email</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          defaultValue="support@parentsupport.gov.ph"
                          className="border-green-200 focus-visible:ring-green-600"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                          <p className="text-xs text-gray-500">Temporarily disable access to the system</p>
                        </div>
                        <Switch id="maintenance-mode" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Notification Settings</h3>
                    <div className="rounded-lg border border-green-100 p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-xs text-gray-500">Send email notifications to users</p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="sms-notifications">SMS Notifications</Label>
                          <p className="text-xs text-gray-500">Send SMS notifications to users</p>
                        </div>
                        <Switch id="sms-notifications" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Security Settings</h3>
                    <div className="rounded-lg border border-green-100 p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="two-factor-auth">Two-Factor Authentication</Label>
                          <p className="text-xs text-gray-500">Require two-factor authentication for admin users</p>
                        </div>
                        <Switch id="two-factor-auth" defaultChecked />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                        <Input
                          id="session-timeout"
                          type="number"
                          defaultValue="30"
                          className="border-green-200 focus-visible:ring-green-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Cancel
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Save Changes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  )
}

function Switch({ id, defaultChecked }: { id: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        className="peer h-4 w-8 rounded-full appearance-none bg-gray-200 transition-colors checked:bg-green-600 [&:not(:checked)]:bg-gray-200"
        style={{
          WebkitAppearance: "none",
          position: "relative",
        }}
      />
      <label htmlFor={id} className="block w-8 h-4 overflow-hidden rounded-full bg-gray-200 cursor-pointer">
        <span className="block h-4 w-4 rounded-full bg-white shadow-md transform transition-transform duration-200 peer-checked:translate-x-4" />
      </label>
    </div>
  )
}
