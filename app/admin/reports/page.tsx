"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, FileText, BarChart3, Users, Calendar, TrendingUp, Eye, Mail } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const reportTemplates = [
  {
    id: "user-activity",
    name: "User Activity Report",
    description: "Comprehensive user engagement and activity metrics",
    icon: <Users className="h-5 w-5" />,
    fields: ["registrations", "logins", "module_completions", "feedback_submitted"],
  },
  {
    id: "module-performance",
    name: "Module Performance Report",
    description: "Module completion rates, feedback, and effectiveness",
    icon: <BarChart3 className="h-5 w-5" />,
    fields: ["completion_rates", "average_ratings", "time_spent", "drop_off_points"],
  },
  {
    id: "demographic-analysis",
    name: "Demographic Analysis",
    description: "User demographics and child diagnosis breakdown",
    icon: <TrendingUp className="h-5 w-5" />,
    fields: ["age_distribution", "diagnosis_status", "geographic_data", "device_usage"],
  },
  {
    id: "event-analytics",
    name: "Event Analytics",
    description: "Event attendance, engagement, and feedback metrics",
    icon: <Calendar className="h-5 w-5" />,
    fields: ["attendance_rates", "rsvp_conversion", "event_feedback", "geographic_reach"],
  },
]

export default function ReportsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [dateRange, setDateRange] = useState("monthly")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [reportFormat, setReportFormat] = useState("pdf")
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    const template = reportTemplates.find((t) => t.id === templateId)
    if (template) {
      setSelectedFields(template.fields)
    }
  }

  const handleFieldToggle = (field: string) => {
    setSelectedFields((prev) => (prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]))
  }

  const generateReport = async () => {
    setIsGenerating(true)

    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false)
      toast({
        title: "Report Generated",
        description: `Your ${reportFormat.toUpperCase()} report has been generated and will be downloaded shortly.`,
      })
    }, 2000)
  }

  const scheduleReport = () => {
    toast({
      title: "Report Scheduled",
      description: "Your report has been scheduled for automatic generation.",
    })
  }

  return (
    <div className="container p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate comprehensive reports and download statistical data</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
            <Eye className="mr-2 h-4 w-4" /> Preview
          </Button>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
            <Mail className="mr-2 h-4 w-4" /> Schedule Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="generate" className="w-full">
        <TabsList className="mb-6 bg-white text-gray-700 border border-gray-100">
          <TabsTrigger value="generate" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            Generate Report
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            Scheduled Reports
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
            Report History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="mt-0">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Report Templates */}
            <div className="lg:col-span-1">
              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-lg">Report Templates</CardTitle>
                  <CardDescription>Choose a pre-configured report template</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {reportTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedTemplate === template.id
                          ? "border-teal-200 bg-teal-50"
                          : "border-gray-200 hover:border-teal-200 hover:bg-gray-50"
                      }`}
                      onClick={() => handleTemplateSelect(template.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-md ${
                            selectedTemplate === template.id ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {template.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{template.name}</h4>
                          <p className="text-sm text-gray-600">{template.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Report Configuration */}
            <div className="lg:col-span-2">
              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-lg">Report Configuration</CardTitle>
                  <CardDescription>Customize your report parameters and data fields</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Range */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">Date Range</Label>
                    <div className="grid gap-4 md:grid-cols-3">
                      <Select value={dateRange} onValueChange={setDateRange}>
                        <SelectTrigger className="border-teal-200 focus:ring-teal-600">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Last 7 days</SelectItem>
                          <SelectItem value="monthly">Last 30 days</SelectItem>
                          <SelectItem value="quarterly">Last 3 months</SelectItem>
                          <SelectItem value="yearly">Last 12 months</SelectItem>
                          <SelectItem value="custom">Custom range</SelectItem>
                        </SelectContent>
                      </Select>

                      {dateRange === "custom" && (
                        <>
                          <Input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="border-teal-200 focus-visible:ring-teal-600"
                          />
                          <Input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="border-teal-200 focus-visible:ring-teal-600"
                          />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Data Fields */}
                  {selectedTemplate && (
                    <div className="space-y-4">
                      <Label className="text-base font-medium">Data Fields</Label>
                      <div className="grid gap-3 md:grid-cols-2">
                        {reportTemplates
                          .find((t) => t.id === selectedTemplate)
                          ?.fields.map((field) => (
                            <div key={field} className="flex items-center space-x-2">
                              <Checkbox
                                id={field}
                                checked={selectedFields.includes(field)}
                                onCheckedChange={() => handleFieldToggle(field)}
                              />
                              <Label htmlFor={field} className="font-normal capitalize">
                                {field.replace(/_/g, " ")}
                              </Label>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Export Format */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">Export Format</Label>
                    <Select value={reportFormat} onValueChange={setReportFormat}>
                      <SelectTrigger className="border-teal-200 focus:ring-teal-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF Report</SelectItem>
                        <SelectItem value="csv">CSV Data</SelectItem>
                        <SelectItem value="xlsx">Excel Spreadsheet</SelectItem>
                        <SelectItem value="json">JSON Data</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={generateReport}
                      disabled={!selectedTemplate || isGenerating}
                      className="bg-teal-600 hover:bg-teal-700"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Generate Report"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={scheduleReport}
                      disabled={!selectedTemplate}
                      className="border-yellow-200 text-yellow-700 hover:bg-yellow-50"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Manage your automated report schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No scheduled reports configured</p>
                <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900">Create Schedule</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-0">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle>Report History</CardTitle>
              <CardDescription>Previously generated reports and downloads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No reports generated yet</p>
                <p className="text-sm text-gray-400">Generated reports will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
