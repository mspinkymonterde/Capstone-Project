"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Users, Bell, Database, Key, Activity, Save, Plus, Trash2, Eye, EyeOff, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const adminUsers = [
  { id: "1", name: "John Admin", email: "john@csn.com", role: "Super Admin", lastLogin: "2 hours ago" },
  { id: "2", name: "Maria Manager", email: "maria@csn.com", role: "Manager", lastLogin: "1 day ago" },
  { id: "3", name: "Carlos Support", email: "carlos@csn.com", role: "Support", lastLogin: "3 days ago" },
]

const accessLogs = [
  { user: "John Admin", action: "User Management Access", ip: "192.168.1.100", time: "2 hours ago" },
  { user: "Maria Manager", action: "Report Generation", ip: "192.168.1.101", time: "4 hours ago" },
  { user: "Carlos Support", action: "Event Management", ip: "192.168.1.102", time: "6 hours ago" },
  { user: "John Admin", action: "System Settings", ip: "192.168.1.100", time: "1 day ago" },
]

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [systemMaintenance, setSystemMaintenance] = useState(false)
  const { toast } = useToast()

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    })
  }

  const handleAddAdmin = () => {
    toast({
      title: "Admin user added",
      description: "New admin user has been created and invited.",
    })
  }

  const handleDeleteAdmin = (id: string) => {
    if (confirm("Are you sure you want to remove this admin user?")) {
      toast({
        title: "Admin user removed",
        description: "The admin user has been removed from the system.",
      })
    }
  }

  return (
    <div className="container p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-600">Manage system configuration, security, and administrative access</p>
      </div>

      <Tabs defaultValue="security" className="w-full">
        <TabsList className="mb-6 bg-white text-gray-700 border border-gray-100">
          <TabsTrigger value="security" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            <Shield className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="admins" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            <Users className="mr-2 h-4 w-4" />
            Admin Users
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700"
          >
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="system" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            <Database className="mr-2 h-4 w-4" />
            System
          </TabsTrigger>
          <TabsTrigger value="logs" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            <Activity className="mr-2 h-4 w-4" />
            Access Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="security" className="mt-0">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle>Password & Authentication</CardTitle>
                <CardDescription>Manage your admin account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <div className="relative">
                    <Input
                      id="current-password"
                      type={showPassword ? "text" : "password"}
                      className="border-teal-200 focus-visible:ring-teal-600 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" className="border-teal-200 focus-visible:ring-teal-600" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="border-teal-200 focus-visible:ring-teal-600"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleSaveSettings}>
                  <Save className="mr-2 h-4 w-4" />
                  Update Security Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle>Session Management</CardTitle>
                <CardDescription>Manage active sessions and login security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Session Timeout</Label>
                  <Select defaultValue="30">
                    <SelectTrigger className="border-teal-200 focus:ring-teal-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                      <SelectItem value="480">8 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Maximum Login Attempts</Label>
                  <Select defaultValue="5">
                    <SelectTrigger className="border-teal-200 focus:ring-teal-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 attempts</SelectItem>
                      <SelectItem value="5">5 attempts</SelectItem>
                      <SelectItem value="10">10 attempts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Account Lockout Duration</Label>
                  <Select defaultValue="30">
                    <SelectTrigger className="border-teal-200 focus:ring-teal-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="1440">24 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full border-yellow-200 text-yellow-700 hover:bg-yellow-50">
                  <Key className="mr-2 h-4 w-4" />
                  Revoke All Sessions
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="admins" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Admin Users</CardTitle>
                  <CardDescription>Manage administrative access and roles</CardDescription>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleAddAdmin}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Admin
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-teal-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-teal-50 text-left">
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Email</th>
                        <th className="px-4 py-3 font-medium">Role</th>
                        <th className="px-4 py-3 font-medium">Last Login</th>
                        <th className="px-4 py-3 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adminUsers.map((admin) => (
                        <tr key={admin.id} className="border-t border-teal-100">
                          <td className="px-4 py-3 font-medium">{admin.name}</td>
                          <td className="px-4 py-3">{admin.email}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                admin.role === "Super Admin"
                                  ? "bg-green-100 text-green-800"
                                  : admin.role === "Manager"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {admin.role}
                            </span>
                          </td>
                          <td className="px-4 py-3">{admin.lastLogin}</td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-500 hover:bg-red-50"
                                onClick={() => handleDeleteAdmin(admin.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
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

        <TabsContent value="notifications" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-600">Receive email alerts for important system events</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email Address</Label>
                <Input
                  id="admin-email"
                  type="email"
                  defaultValue="admin@csn.com"
                  className="border-teal-200 focus-visible:ring-teal-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-server">SMTP Server Configuration</Label>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input placeholder="SMTP Host" className="border-teal-200 focus-visible:ring-teal-600" />
                  <Input placeholder="Port" className="border-teal-200 focus-visible:ring-teal-600" />
                  <Input placeholder="Username" className="border-teal-200 focus-visible:ring-teal-600" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="border-teal-200 focus-visible:ring-teal-600"
                  />
                </div>
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleSaveSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="mt-0">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>General system settings and maintenance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-gray-600">Temporarily disable user access for maintenance</p>
                  </div>
                  <Switch checked={systemMaintenance} onCheckedChange={setSystemMaintenance} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maintenance-message">Maintenance Message</Label>
                  <Textarea
                    id="maintenance-message"
                    placeholder="System is temporarily unavailable for maintenance..."
                    className="border-teal-200 focus-visible:ring-teal-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label>System Timezone</Label>
                  <Select defaultValue="asia-manila">
                    <SelectTrigger className="border-teal-200 focus:ring-teal-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-manila">Asia/Manila (GMT+8)</SelectItem>
                      <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                      <SelectItem value="america-new_york">America/New_York (GMT-5)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle>Database Management</CardTitle>
                <CardDescription>Database backup and maintenance operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gray-600 hover:bg-gray-700">
                  <Database className="mr-2 h-4 w-4" />
                  Create Database Backup
                </Button>

                <Button variant="outline" className="w-full border-yellow-200 text-yellow-700 hover:bg-yellow-50">
                  <Activity className="mr-2 h-4 w-4" />
                  Optimize Database
                </Button>

                <div className="space-y-2">
                  <Label>Automatic Backup Schedule</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger className="border-teal-200 focus:ring-teal-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="disabled">Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logs" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle>Access Logs</CardTitle>
              <CardDescription>Monitor admin user access and system activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-teal-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-teal-50 text-left">
                        <th className="px-4 py-3 font-medium">User</th>
                        <th className="px-4 py-3 font-medium">Action</th>
                        <th className="px-4 py-3 font-medium">IP Address</th>
                        <th className="px-4 py-3 font-medium">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {accessLogs.map((log, index) => (
                        <tr key={index} className="border-t border-teal-100">
                          <td className="px-4 py-3 font-medium">{log.user}</td>
                          <td className="px-4 py-3">{log.action}</td>
                          <td className="px-4 py-3 font-mono text-xs">{log.ip}</td>
                          <td className="px-4 py-3">{log.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-600">Showing recent access logs</p>
                <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                  <Download className="mr-2 h-4 w-4" />
                  Export Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
