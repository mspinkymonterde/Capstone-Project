"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Pencil, Plus, Search, Trash2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { Switch } from "@/components/ui/switch"

// Mock events data
const mockEvents = [
  {
    id: "1",
    title: "Parent Support Group Meeting",
    type: "Support Group",
    date: "May 20, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Parañaque City Community Center",
    status: "Upcoming",
    registrations: 15,
    rsvp: 10,
    featured: false,
    imageUrl: null,
    googleFormLink: "",
    googleCalendarLink: "",
  },
  {
    id: "2",
    title: "Speech Therapy Workshop",
    type: "Workshop",
    date: "May 25, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "CSN Parañaque Center",
    status: "Upcoming",
    registrations: 8,
    rsvp: 5,
    featured: true,
    imageUrl: null,
    googleFormLink: "",
    googleCalendarLink: "",
  },
  {
    id: "3",
    title: "Sensory Play Day",
    type: "Activity",
    date: "June 5, 2025",
    time: "9:00 AM - 11:00 AM",
    location: "Parañaque City Park",
    status: "Upcoming",
    registrations: 20,
    rsvp: 15,
    featured: false,
    imageUrl: null,
    googleFormLink: "",
    googleCalendarLink: "",
  },
  {
    id: "4",
    title: "Autism Awareness Seminar",
    type: "Seminar",
    date: "April 15, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Parañaque City Hall",
    status: "Completed",
    registrations: 45,
    rsvp: 35,
    featured: false,
    imageUrl: null,
    googleFormLink: "",
    googleCalendarLink: "",
  },
  {
    id: "5",
    title: "Parent-Child Bonding Activities",
    type: "Activity",
    date: "April 10, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "CSN Parañaque Center",
    status: "Completed",
    registrations: 30,
    rsvp: 25,
    featured: true,
    imageUrl: null,
    googleFormLink: "",
    googleCalendarLink: "",
  },
]

export default function EventManagementPage() {
  const [events, setEvents] = useState(mockEvents)
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const { toast } = useToast()

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === "all" || event.type === typeFilter
    const matchesStatus = statusFilter === "all" || event.status === statusFilter
    return matchesSearch && matchesType && matchesStatus
  })

  const handleDeleteEvent = (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== id))
      toast({
        title: "Event deleted",
        description: "The event has been deleted successfully.",
      })
    }
  }

  return (
    <div className="container p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Events</h1>
          <p className="text-gray-600">Create, edit, or delete events in the system</p>
        </div>
        <div>
          <Link href="/admin/events/add">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </Link>
        </div>
      </div>

      <Card className="border-teal-100">
        <CardHeader className="pb-2">
          <CardTitle>Events</CardTitle>
          <CardDescription>Manage events and activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search events..."
                className="pl-8 border-teal-200 focus-visible:ring-teal-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px] border-teal-200 focus:ring-teal-600">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Support Group">Support Group</SelectItem>
                  <SelectItem value="Workshop">Workshop</SelectItem>
                  <SelectItem value="Activity">Activity</SelectItem>
                  <SelectItem value="Seminar">Seminar</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px] border-teal-200 focus:ring-teal-600">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Upcoming">Upcoming</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Ongoing">Ongoing</SelectItem>
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
                    <th className="px-4 py-3 font-medium">Type</th>
                    <th className="px-4 py-3 font-medium">Date & Time</th>
                    <th className="px-4 py-3 font-medium">Location</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Registrations</th>
                    <th className="px-4 py-3 font-medium">RSVP</th>
                    <th className="px-4 py-3 font-medium">Featured</th>
                    <th className="px-4 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="border-t border-teal-100">
                      <td className="px-4 py-3 font-medium">{event.title}</td>
                      <td className="px-4 py-3">{event.type}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-teal-600" />
                          <div>
                            <div>{event.date}</div>
                            <div className="text-xs text-gray-500">{event.time}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{event.location}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            event.status === "Upcoming"
                              ? "bg-green-100 text-green-800"
                              : event.status === "Completed"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {event.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{event.registrations}</td>
                      <td className="px-4 py-3">{event.rsvp}</td>
                      <td className="px-4 py-3">
                        <Switch checked={event.featured} disabled />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/events/edit/${event.id}`}>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500">
                              <Pencil className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600"
                            onClick={() => handleDeleteEvent(event.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredEvents.length === 0 && (
                    <tr>
                      <td colSpan={9} className="px-4 py-8 text-center text-gray-500">
                        No events found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredEvents.length} of {events.length} events
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
