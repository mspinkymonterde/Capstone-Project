"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Brain,
  FileText,
  HeartHandshake,
  MessageSquare,
  Pencil,
  Plus,
  Search,
  Trash2,
  Dumbbell,
  Puzzle,
  LinkIcon,
  FileUp,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

// Mock resources data
const mockResources = [
  {
    id: "1",
    title: "Early Language Development Guide",
    category: "Speech & Language",
    type: "PDF",
    ageRange: "0-3",
    diagnosisStatus: "both",
    addedBy: "Admin User",
    dateAdded: "May 10, 2025",
    developmentalArea: "Communication",
    moduleTags: ["Language Development", "Early Intervention"],
    description: "A comprehensive guide for parents to support early language development in children.",
    defaultModuleMarking: true,
  },
  {
    id: "2",
    title: "Social Skills Activities",
    category: "Social & Emotional",
    type: "PDF",
    ageRange: "3-5",
    diagnosisStatus: "diagnosed",
    addedBy: "Admin User",
    dateAdded: "May 8, 2025",
    developmentalArea: "Social",
    moduleTags: ["Social Interaction", "Emotional Regulation"],
    description: "Activities designed to enhance social skills and emotional understanding in young children.",
    defaultModuleMarking: false,
  },
  {
    id: "3",
    title: "Cognitive Development Milestones",
    category: "Cognitive",
    type: "PDF",
    ageRange: "0-7",
    diagnosisStatus: "both",
    addedBy: "Admin User",
    dateAdded: "May 5, 2025",
    developmentalArea: "Cognitive",
    moduleTags: ["Cognitive Skills", "Milestones"],
    description: "A detailed overview of cognitive development milestones for children aged 0-7.",
    defaultModuleMarking: true,
  },
  {
    id: "4",
    title: "Fine Motor Skills Activities",
    category: "Motor Skills",
    type: "PDF",
    ageRange: "2-5",
    diagnosisStatus: "undiagnosed",
    addedBy: "Admin User",
    dateAdded: "May 3, 2025",
    developmentalArea: "Motor",
    moduleTags: ["Fine Motor Skills", "Activities"],
    description: "Engaging activities to enhance fine motor skills in children aged 2-5.",
    defaultModuleMarking: false,
  },
  {
    id: "5",
    title: "Daily Living Skills Guide",
    category: "Adaptive",
    type: "PDF",
    ageRange: "4-7",
    diagnosisStatus: "diagnosed",
    addedBy: "Admin User",
    dateAdded: "May 1, 2025",
    developmentalArea: "Adaptive",
    moduleTags: ["Daily Living", "Adaptive Skills"],
    description: "A guide for parents to help children develop essential daily living skills.",
    defaultModuleMarking: true,
  },
]

export default function ResourceManagementPage() {
  const [activeTab, setActiveTab] = useState("resources")
  const [resources, setResources] = useState(mockResources)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Form states
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [resourceType, setResourceType] = useState("PDF")
  const [resourceCategory, setResourceCategory] = useState("")
  const [resourceLink, setResourceLink] = useState("")
  const [resourceFile, setResourceFile] = useState<File | null>(null)
  const [ageRange, setAgeRange] = useState("")
  const [diagnosisStatus, setDiagnosisStatus] = useState("both")
  const [tags, setTags] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [developmentalArea, setDevelopmentalArea] = useState("")
  const [moduleTagsInput, setModuleTagsInput] = useState("")
  const [moduleTags, setModuleTags] = useState<string[]>([])
  const [defaultModuleMarking, setDefaultModuleMarking] = useState(false)

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setResourceFile(file)

      // Simulate upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
        }
      }, 100)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newResource = {
        id: (resources.length + 1).toString(),
        title,
        category: resourceCategory,
        type: resourceType,
        ageRange,
        diagnosisStatus,
        addedBy: "Admin User",
        dateAdded: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        developmentalArea,
        moduleTags,
        description,
        defaultModuleMarking,
      }

      setResources([newResource, ...resources])

      // Reset form
      setTitle("")
      setDescription("")
      setResourceType("PDF")
      setResourceCategory("")
      setResourceLink("")
      setResourceFile(null)
      setAgeRange("")
      setDiagnosisStatus("both")
      setTags([])
      setUploadProgress(0)
      setDevelopmentalArea("")
      setModuleTagsInput("")
      setModuleTags([])
      setDefaultModuleMarking(false)

      setIsSubmitting(false)
      setActiveTab("resources")

      toast({
        title: "Resource added",
        description: "The resource has been added successfully.",
      })
    }, 1000)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Speech & Language":
        return <MessageSquare className="h-4 w-4 text-teal-600" />
      case "Social & Emotional":
        return <HeartHandshake className="h-4 w-4 text-teal-600" />
      case "Cognitive":
        return <Brain className="h-4 w-4 text-teal-600" />
      case "Motor Skills":
        return <Dumbbell className="h-4 w-4 text-teal-600" />
      case "Adaptive":
        return <Puzzle className="h-4 w-4 text-teal-600" />
      default:
        return <FileText className="h-4 w-4 text-teal-600" />
    }
  }

  const handleAddModuleTag = () => {
    if (moduleTagsInput.trim() !== "") {
      setModuleTags([...moduleTags, moduleTagsInput.trim()])
      setModuleTagsInput("")
    }
  }

  const handleDeleteModuleTag = (tagToDelete: string) => {
    setModuleTags(moduleTags.filter((tag) => tag !== tagToDelete))
  }

  return (
    <div className="container p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Resources</h1>
          <p className="text-gray-600">Add, edit, or delete resources in the system</p>
        </div>
        <div>
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setActiveTab("add-resource")}>
            <Plus className="mr-2 h-4 w-4" /> Add Resource
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 bg-white text-gray-700">
          <TabsTrigger value="resources" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            Resources
          </TabsTrigger>
          <TabsTrigger
            value="add-resource"
            className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700"
          >
            Add Resource
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="mt-0">
          <Card className="border-teal-100">
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
                    className="pl-8 border-teal-200 focus-visible:ring-teal-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-[180px] border-teal-200 focus:ring-teal-600">
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
                    <SelectTrigger className="w-[180px] border-teal-200 focus:ring-teal-600">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="PDF">PDF</SelectItem>
                      <SelectItem value="Video">Video</SelectItem>
                      <SelectItem value="Interactive">Interactive</SelectItem>
                      <SelectItem value="Article">Article</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border border-teal-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-teal-50 text-left">
                        <th className="px-4 py-3 font-medium">Title</th>
                        <th className="px-4 py-3 font-medium">Category</th>
                        <th className="px-4 py-3 font-medium">Type</th>
                        <th className="px-4 py-3 font-medium">Age Range</th>
                        <th className="px-4 py-3 font-medium">Diagnosis</th>
                        <th className="px-4 py-3 font-medium">Developmental Area</th>
                        <th className="px-4 py-3 font-medium">Module Tags</th>
                        <th className="px-4 py-3 font-medium">Default Module Marking</th>
                        <th className="px-4 py-3 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredResources.map((resource) => (
                        <tr key={resource.id} className="border-t border-teal-100">
                          <td className="px-4 py-3 font-medium">{resource.title}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {getCategoryIcon(resource.category)}
                              {resource.category}
                            </div>
                          </td>
                          <td className="px-4 py-3">{resource.type}</td>
                          <td className="px-4 py-3">{resource.ageRange}</td>
                          <td className="px-4 py-3">
                            {resource.diagnosisStatus === "both"
                              ? "All children"
                              : resource.diagnosisStatus === "diagnosed"
                                ? "Diagnosed"
                                : "Undiagnosed"}
                          </td>
                          <td className="px-4 py-3">{resource.developmentalArea}</td>
                          <td className="px-4 py-3">{resource.moduleTags.join(", ")}</td>
                          <td className="px-4 py-3">{resource.defaultModuleMarking ? "Yes" : "No"}</td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-gray-500"
                                onClick={() => {
                                  // Set form values for editing
                                  setTitle(resource.title)
                                  setDescription(resource.description || "")
                                  setResourceCategory(resource.category)
                                  setResourceType(resource.type)
                                  setAgeRange(resource.ageRange)
                                  setDiagnosisStatus(resource.diagnosisStatus)
                                  setDevelopmentalArea(resource.developmentalArea)
                                  setModuleTags(resource.moduleTags)
                                  setDefaultModuleMarking(resource.defaultModuleMarking)
                                  setActiveTab("add-resource")
                                }}
                              >
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
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
                          <td colSpan={9} className="px-4 py-8 text-center text-gray-500">
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
        </TabsContent>

        <TabsContent value="add-resource" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle>Add New Resource</CardTitle>
              <CardDescription>Create a new resource for parents and children</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-teal-200 focus-visible:ring-teal-600"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Developmental Area</Label>
                      <Select required value={resourceCategory} onValueChange={setResourceCategory}>
                        <SelectTrigger id="category" className="border-teal-200 focus:ring-teal-600">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Speech & Language">Speech & Language</SelectItem>
                          <SelectItem value="Cognitive">Cognitive</SelectItem>
                          <SelectItem value="Motor Skills">Motor Skills</SelectItem>
                          <SelectItem value="Social & Emotional">Social & Emotional</SelectItem>
                          <SelectItem value="Adaptive">Adaptive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[100px] border-teal-200 focus-visible:ring-teal-600"
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="type">Resource Type</Label>
                      <Select required value={resourceType} onValueChange={setResourceType}>
                        <SelectTrigger id="type" className="border-teal-200 focus:ring-teal-600">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PDF">PDF</SelectItem>
                          <SelectItem value="Video">Video</SelectItem>
                          <SelectItem value="Interactive">Interactive</SelectItem>
                          <SelectItem value="Article">Article</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age-range">Applicable Age Range</Label>
                      <Select required value={ageRange} onValueChange={setAgeRange}>
                        <SelectTrigger id="age-range" className="border-teal-200 focus:ring-teal-600">
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="3-4">3-4 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="5-6">5-6 years</SelectItem>
                          <SelectItem value="6-7">6-7 years</SelectItem>
                          <SelectItem value="0-3">0-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="0-7">All ages (0-7)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="developmental-area">Developmental Area</Label>
                    <Input
                      id="developmental-area"
                      value={developmentalArea}
                      onChange={(e) => setDevelopmentalArea(e.target.value)}
                      className="border-teal-200 focus-visible:ring-teal-600"
                      required
                      placeholder="e.g., Communication, Social, Motor"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Diagnosis Status</Label>
                    <Select required value={diagnosisStatus} onValueChange={setDiagnosisStatus}>
                      <SelectTrigger className="border-teal-200 focus:ring-teal-600">
                        <SelectValue placeholder="Select applicable children" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="both">All children</SelectItem>
                        <SelectItem value="diagnosed">Diagnosed only</SelectItem>
                        <SelectItem value="undiagnosed">Undiagnosed only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Resource Content</Label>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="upload-file"
                            checked={!resourceLink}
                            onCheckedChange={() => setResourceLink("")}
                          />
                          <Label htmlFor="upload-file" className="font-normal">
                            Upload File
                          </Label>
                        </div>
                        {!resourceLink && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Input
                                type="file"
                                className="border-teal-200 focus-visible:ring-teal-600"
                                onChange={handleFileChange}
                              />
                              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-50 text-teal-600">
                                <FileUp className="h-5 w-5" />
                              </div>
                            </div>
                            {uploadProgress > 0 && <Progress value={uploadProgress} className="bg-teal-100" />}
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="external-link"
                            checked={!!resourceLink}
                            onCheckedChange={() => (resourceLink ? setResourceLink("") : setResourceLink("https://"))}
                          />
                          <Label htmlFor="external-link" className="font-normal">
                            External Link
                          </Label>
                        </div>
                        {resourceLink && (
                          <div className="flex items-center gap-2">
                            <Input
                              type="url"
                              placeholder="https://example.com/resource"
                              className="border-teal-200 focus-visible:ring-teal-600"
                              value={resourceLink}
                              onChange={(e) => setResourceLink(e.target.value)}
                            />
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-50 text-teal-600">
                              <LinkIcon className="h-5 w-5" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="module-tags">Module Tags</Label>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        id="module-tags"
                        placeholder="Add a module tag"
                        className="border-teal-200 focus-visible:ring-teal-600"
                        value={moduleTagsInput}
                        onChange={(e) => setModuleTagsInput(e.target.value)}
                      />
                      <Button type="button" variant="secondary" onClick={handleAddModuleTag}>
                        Add Tag
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {moduleTags.map((tag) => (
                        <div key={tag} className="flex items-center space-x-2 rounded-full bg-teal-100 px-3 py-1">
                          <span className="text-sm">{tag}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-5 w-5 p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
                            onClick={() => handleDeleteModuleTag(tag)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="default-module-marking">Default Module Marking for Diagnoses</Label>
                    <Checkbox
                      id="default-module-marking"
                      checked={defaultModuleMarking}
                      onCheckedChange={(checked) => setDefaultModuleMarking(checked === true)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="flex flex-wrap gap-2">
                      {["Autism", "Down Syndrome", "ADHD", "Learning", "Communication", "Motor", "Social"].map(
                        (tag) => (
                          <div key={tag} className="flex items-center space-x-2">
                            <Checkbox
                              id={`tag-${tag}`}
                              checked={tags.includes(tag)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setTags([...tags, tag])
                                } else {
                                  setTags(tags.filter((t) => t !== tag))
                                }
                              }}
                            />
                            <Label htmlFor={`tag-${tag}`} className="font-normal">
                              {tag}
                            </Label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-teal-200 text-teal-700 hover:bg-teal-50"
                    onClick={() => {
                      setActiveTab("resources")
                      // Reset form
                      setTitle("")
                      setDescription("")
                      setResourceType("PDF")
                      setResourceCategory("")
                      setResourceLink("")
                      setResourceFile(null)
                      setAgeRange("")
                      setDiagnosisStatus("both")
                      setTags([])
                      setUploadProgress(0)
                      setDevelopmentalArea("")
                      setModuleTagsInput("")
                      setModuleTags([])
                      setDefaultModuleMarking(false)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save Resource"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
