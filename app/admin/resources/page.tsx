"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, FileText, HeartHandshake, MessageSquare, Pencil, Plus, Search, Trash2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

// Mock resources data
const mockResources = [
  {
    id: "1",
    title: "Basic Communication Skills",
    category: "Speech & Language",
    type: "Module",
    addedBy: "Admin User",
    dateAdded: "May 10, 2025",
  },
  {
    id: "2",
    title: "Emotional Recognition",
    category: "Social & Emotional",
    type: "Module",
    addedBy: "Admin User",
    dateAdded: "May 8, 2025",
  },
  {
    id: "3",
    title: "Problem Solving Activities",
    category: "Cognitive",
    type: "Guide",
    addedBy: "Admin User",
    dateAdded: "May 5, 2025",
  },
  {
    id: "4",
    title: "Fine Motor Skills",
    category: "Motor Skills",
    type: "Module",
    addedBy: "Admin User",
    dateAdded: "May 3, 2025",
  },
  {
    id: "5",
    title: "Daily Living Skills",
    category: "Adaptive",
    type: "Guide",
    addedBy: "Admin User",
    dateAdded: "May 1, 2025",
  },
  {
    id: "6",
    title: "Sentence Building",
    category: "Speech & Language",
    type: "Module",
    addedBy: "Admin User",
    dateAdded: "April 28, 2025",
  },
  {
    id: "7",
    title: "Understanding Emotions",
    category: "Social & Emotional",
    type: "Guide",
    addedBy: "Admin User",
    dateAdded: "April 25, 2025",
  },
]

export default function ManageResourcesPage() {
  const [resources, setResources] = useState(mockResources)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const { toast } = useToast()

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || resource.category === categoryFilter
    const matchesType = typeFilter === "all" || resource.type === typeFilter
    return matchesSearch && matchesCategory && matchesType
  })

  const handleDeleteResource = (id: string) => {
    if (confirm("Are you sure you want to delete this resource?")) {
      setResources(resources.filter((resource) => resource.id !== id))
      toast({
        title: "Resource deleted",
        description: "The resource has been deleted successfully.",
      })
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Speech & Language":
        return <MessageSquare className="h-4 w-4 text-green-600" />
      case "Social & Emotional":
        return <HeartHandshake className="h-4 w-4 text-green-600" />
      case "Cognitive":
        return <Brain className="h-4 w-4 text-green-600" />
      default:
        return <FileText className="h-4 w-4 text-green-600" />
    }
  }

  return (
    <div className="container p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Resources</h1>
          <p className="text-gray-600">Add, edit, or delete resources in the system</p>
        </div>
        <div>
          <Link href="/admin/resources/add">
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" /> Add Resource
            </Button>
          </Link>
        </div>
      </div>

      <Card className="border-green-100">
        <CardHeader className="pb-2">
          <CardTitle>Resources</CardTitle>
          <CardDescription>Manage educational resources and materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-8 border-green-200 focus-visible:ring-green-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px] border-green-200 focus:ring-green-600">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Speech & Language">Speech & Language</SelectItem>
                  <SelectItem value="Social & Emotional">Social & Emotional</SelectItem>
                  <SelectItem value="Cognitive">Cognitive</SelectItem>
                  <SelectItem value="Motor Skills">Motor Skills</SelectItem>
                  <SelectItem value="Adaptive">Adaptive</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px] border-green-200 focus:ring-green-600">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Module">Module</SelectItem>
                  <SelectItem value="Guide">Guide</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

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
                  {filteredResources.map((resource) => (
                    <tr key={resource.id} className="border-t border-green-100">
                      <td className="px-4 py-3 font-medium">{resource.title}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(resource.category)}
                          {resource.category}
                        </div>
                      </td>
                      <td className="px-4 py-3">{resource.type}</td>
                      <td className="px-4 py-3">{resource.addedBy}</td>
                      <td className="px-4 py-3">{resource.dateAdded}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/resources/edit/${resource.id}`}>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500">
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
                            onClick={() => handleDeleteResource(resource.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredResources.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                        No resources found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredResources.length} of {resources.length} resources
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
