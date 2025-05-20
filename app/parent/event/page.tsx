"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Search, Users } from "lucide-react"

// Mock events data
const mockEvents = [
  {
    id: "1",
    title: "Parent Support Group Meeting",
    type: "Support Group",
    date: "May 20, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Parañaque City Community Center",
    description: "Connect with other parents of special needs children to share experiences and support.",
    registrations: 15,
    maxCapacity: 30,
  },
  {
    id: "2",
    title: "Speech Therapy Workshop",
    type: "Workshop",
    date: "May 25, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "CSN Parañaque Center",
    description: "Learn practical speech therapy techniques you can use at home with your child.",
    registrations: 8,
    maxCapacity: 20,
  },
  {
    id: "3",
    title: "Sensory Play Day",
    type: "Activity",
    date: "June 5, 2025",
    time: "9:00 AM - 11:00 AM",
    location: "Parañaque City Park",
    description: "A fun outdoor event with sensory activities designed for children with special needs.",
    registrations: 20,
    maxCapacity: 30,
  },
  {
    id: "4",
    title: "Motor Skills Development Workshop",
    type: "Workshop",
    date: "June 12, 2025",
    time: "1:00 PM - 3:00 PM",
    location: "CSN Parañaque Center",
    description: "Learn activities to help develop your child's fine and gross motor skills.",
    registrations: 5,
    maxCapacity: 15,
  },
  {
    id: "5",
    title: "Parent-Child Bonding Activities",
    type: "Activity",
    date: "June 18, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Parañaque City Community Center",
    description: "Fun activities designed to strengthen the bond between parents and their special needs children.",
    registrations: 12,
    maxCapacity: 25,
  },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = typeFilter === "all" || event.type === typeFilter
    return matchesSearch && matchesType
  })

  return (
    <div className="container p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
        <p className="text-gray-600">Join our community events and workshops for parents and children</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search events..."
            className="pl-8 border-green-200 focus-visible:ring-green-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px] border-green-200 focus:ring-green-600">
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
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="rounded-lg border border-green-100 bg-white p-8 text-center">
          <Calendar className="mx-auto h-12 w-12 text-gray-300" />
          <h3 className="mt-4 text-lg font-medium">No events found</h3>
          <p className="mt-2 text-gray-600">Try adjusting your filters or search term</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="border-green-100 overflow-hidden">
              <div className="bg-green-600 p-4 text-white">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-green-100">{event.type}</p>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <div>
                      <p className="font-medium">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <p className="text-gray-700">{event.location}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <p className="text-sm text-gray-600">
                      {event.registrations} registered / {event.maxCapacity} capacity
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600">{event.description}</p>
                <Button className="w-full rounded-full border border-green-200 px-6 py-2 bg-white text-green-700 hover:bg-green-50">
                  Register for Event
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
