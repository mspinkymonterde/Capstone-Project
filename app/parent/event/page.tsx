"use client"

import CsnEvents from "@/components/csn-events"

export default function EventsPage() {
	return (
		<div className="container p-6 bg-gradient-to-br from-teal-50 via-green-50 to-yellow-50">
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
				<p className="text-gray-600">
					Join our community events and workshops for parents and children
				</p>
			</div>
			<CsnEvents />
		</div>
	)
}
