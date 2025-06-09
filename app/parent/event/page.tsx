"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Search, Users } from "lucide-react"
import { EventCard } from "@/components/event-card"

// Mock events data
const mockEvents = [
	{
		id: "1",
		title: "Webinar: Understanding Autism Spectrum Disorder",
		type: "Webinar",
		date: "June 20, 2025",
		time: "6:00 PM - 7:30 PM",
		location: "Online (Zoom)",
		description:
			"A free public webinar for parents, teachers, and the community. Learn about ASD, early signs, and support strategies from our expert panel. Open to all.",
		registrations: 120,
		maxCapacity: 500,
	},
	{
		id: "2",
		title: "Seminar: Inclusive Education for All",
		type: "Seminar",
		date: "July 8, 2025",
		time: "2:00 PM - 4:00 PM",
		location: "CSN Parañaque Center",
		description:
			"Join our in-person seminar on inclusive education practices. Ideal for educators, parents, and advocates. No registration fee.",
		registrations: 60,
		maxCapacity: 100,
	},
	{
		id: "3",
		title: "Webinar: Speech Therapy Techniques for Parents",
		type: "Webinar",
		date: "July 15, 2025",
		time: "10:00 AM - 11:30 AM",
		location: "Online (Google Meet)",
		description:
			"Practical session teaching parents simple speech therapy techniques they can use at home to support their child's communication development.",
		registrations: 80,
		maxCapacity: 300,
	},
	{
		id: "4",
		title: "Seminar: Parent-Child Bonding Activities",
		type: "Seminar",
		date: "August 2, 2025",
		time: "9:00 AM - 12:00 PM",
		location: "Parañaque City Community Center",
		description:
			"Fun activities and expert talks designed to strengthen the bond between parents and their special needs children.",
		registrations: 40,
		maxCapacity: 80,
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
		<div className="container p-6 bg-gradient-to-br from-teal-50 via-green-50 to-yellow-50">
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
				<p className="text-gray-600">
					Join our community events and workshops for parents and children
				</p>
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
							<SelectItem value="Webinar">Webinar</SelectItem>
							<SelectItem value="Seminar">Seminar</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{filteredEvents.length === 0 ? (
				<div className="rounded-lg border border-green-100 bg-white p-8 text-center">
					<Calendar className="mx-auto h-12 w-12 text-gray-300" />
					<h3 className="mt-4 text-lg font-medium">No events found</h3>
					<p className="mt-2 text-gray-600">
						Try adjusting your filters or search term
					</p>
				</div>
			) : (
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
					{filteredEvents.map((event, idx) => (
						<EventCard
							key={event.id}
							title={event.title}
							date={event.date}
							time={event.time}
							location={event.location}
							description={event.description}
							rsvpLink={"#"}
							category={event.type}
							featured={idx === 0}
						/>
					))}
				</div>
			)}
		</div>
	)
}
