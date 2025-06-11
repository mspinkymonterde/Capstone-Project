"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Search, Trash2, UserCog, Plus, CheckCircle, Circle, Minus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

// Mock users data
const mockUsers = [
  {
    id: "1",
    name: "Maria Santos",
    email: "maria@example.com",
    role: "Parent",
    status: "Active",
    joined: "May 10, 2025",
    childInfo: {
      name: "Carlos",
      age: 5,
      diagnosis: "Autism Spectrum Disorder",
    },
    moduleCompletion: 75,
    checklistCompletion: true,
  },
  {
    id: "2",
    name: "Roberto Cruz",
    email: "roberto@example.com",
    role: "Parent",
    status: "Active",
    joined: "May 8, 2025",
    childInfo: {
      name: "Ana",
      age: 3,
      diagnosis: "Undiagnosed",
    },
    moduleCompletion: 25,
    checklistCompletion: false,
  },
  {
    id: "3",
    name: "Elena Reyes",
    email: "elena@example.com",
    role: "Specialist",
    status: "Active",
    joined: "April 25, 2025",
    moduleCompletion: 100,
    checklistCompletion: true,
  },
  {
    id: "4",
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    role: "Admin",
    status: "Active",
    joined: "March 15, 2025",
    moduleCompletion: 50,
    checklistCompletion: false,
  },
  {
    id: "5",
    name: "Sofia Mendoza",
    email: "sofia@example.com",
    role: "Parent",
    status: "Inactive",
    joined: "February 20, 2025",
    childInfo: {
      name: "Miguel",
      age: 6,
      diagnosis: "Down Syndrome",
    },
    moduleCompletion: 0,
    checklistCompletion: false,
  },
]

export default function UserManagementPage() {
  const [users, setUsers] = useState(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const { toast } = useToast()
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  const handleDeleteUser = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id))
      toast({
        title: "User deleted",
        description: "The user has been deleted successfully.",
      })
    }
  }

  const handleBulkDelete = () => {
    if (selectedUsers.length === 0) {
      alert("Please select users to delete.")
      return
    }

    if (confirm(`Are you sure you want to delete ${selectedUsers.length} users?`)) {
      setUsers(users.filter((user) => !selectedUsers.includes(user.id)))
      setSelectedUsers([])
      toast({
        title: "Users deleted",
        description: "The selected users have been deleted successfully.",
      })
    }
  }

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers((prev) => {
      if (prev.includes(userId)) {
        return prev.filter((id) => id !== userId)
      } else {
        return [...prev, userId]
      }
    })
  }

  const isAllSelected = filteredUsers.every((user) => selectedUsers.includes(user.id))

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(filteredUsers.map((user) => user.id))
    }
  }

  return (
    <div className="container p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
          <p className="text-gray-600">View and manage system users</p>
        </div>
        <div>
          <Link href="/admin/users/add">
            <Button className="bg-red-700 text-white hover:bg-red-600">
              <Minus className="mr-2 h-4 w-4" /> Delete User
            </Button>
          </Link>
        </div>
      </div>

      <Card className="border-teal-100">
        <CardHeader className="pb-2">
          <CardTitle>Users</CardTitle>
          <CardDescription>View and manage all users in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search users..."
                className="pl-8 border-teal-200 focus-visible:ring-teal-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[180px] border-teal-200 focus:ring-teal-600">
                  <SelectValue placeholder="All Roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="Parent">Parent</SelectItem>
                  <SelectItem value="Specialist">Specialist</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px] border-teal-200 focus:ring-teal-600">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" className="border-teal-200">
                <Download className="h-4 w-4 text-teal-600" />
                <span className="sr-only">Export user data</span>
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-teal-100">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-50 text-left">
                    <th className="px-4 py-3 font-medium">
                      <Checkbox checked={isAllSelected} onCheckedChange={toggleSelectAll} />
                    </th>
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Child Info</th>
                    <th className="px-4 py-3 font-medium">Diagnosis</th>
                    <th className="px-4 py-3 font-medium">Module Completion</th>
                    <th className="px-4 py-3 font-medium">Checklist</th>
                    <th className="px-4 py-3 font-medium">Joined</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-t border-teal-100">
                      <td className="px-4 py-3">
                        <Checkbox
                          checked={selectedUsers.includes(user.id)}
                          onCheckedChange={() => toggleUserSelection(user.id)}
                        />
                      </td>
                      <td className="px-4 py-3 font-medium">{user.name}</td>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className="px-4 py-3">{user.role}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            user.status === "Active" ? "bg-teal-100 text-teal-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {user.childInfo ? `${user.childInfo.name} (${user.childInfo.age})` : "N/A"}
                      </td>
                      <td className="px-4 py-3">
                        {user.childInfo ? (
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              user.childInfo.diagnosis === "Autism Spectrum Disorder"
                                ? "bg-yellow-100 text-yellow-800"
                                : user.childInfo.diagnosis === "Down Syndrome"
                                  ? "bg-teal-100 text-teal-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {user.childInfo.diagnosis || "N/A"}
                          </span>
                        ) : (
                          "N/A"
                        )}
                      </td>
                      <td className="px-4 py-3">{user.moduleCompletion}%</td>
                      <td className="px-4 py-3">
                        {user.checklistCompletion ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Circle className="h-4 w-4 text-gray-500" />
                        )}
                      </td>
                      <td className="px-4 py-3">{user.joined}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/users/edit/${user.id}`}>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500">
                              <UserCog className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan={11} className="px-4 py-8 text-center text-gray-500">
                        No users found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredUsers.length} of {users.length} users
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
