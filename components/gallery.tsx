"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter } from "lucide-react"
import Image from "next/image"

const categories = [
	{ id: "all", label: "All", color: "bg-gray-100 text-gray-700" },
	{ id: "facilities", label: "Facilities", color: "bg-csn-green text-white" },
	{ id: "therapy", label: "Therapy Sessions", color: "bg-csn-teal text-white" },
	{ id: "events", label: "Events & Seminars", color: "bg-csn-yellow text-csn-green" },
	{ id: "milestones", label: "Milestones", color: "bg-purple-100 text-purple-700" },
]

const galleryItems = [
	{
		id: 1,
		category: "facilities",
		title: "Speech Therapy Room",
		image: "/13 (1).jpg",
		description: "Dedicated space for speech and language therapy sessions",
	},
	{
		id: 2,
		category: "therapy",
		title: "Occupational Therapy Session",
		image: "/13 (2).jpg",
		description: "Therapist working with child on fine motor skills",
	},
	{
		id: 3,
		category: "facilities",
		title: "Sensory Room",
		image: "/13 (3).jpg",
		description: "Specialized sensory integration therapy space",
	},
	{
		id: 4,
		category: "events",
		title: "Parent Workshop",
		image: "/13 (4).jpg",
		description: "Educational seminar for parents and caregivers",
	},
	{
		id: 5,
		category: "therapy",
		title: "Physical Therapy",
		image: "/13 (5).jpg",
		description: "Gross motor development and mobility training",
	},
	{
		id: 6,
		category: "facilities",
		title: "Reception Area",
		image: "/13 (6).jpg",
		description: "Welcoming entrance and waiting area",
	},
	{
		id: 7,
		category: "milestones",
		title: "Achievement Celebration",
		image: "/13 (7).jpg",
		description: "Celebrating a child's developmental milestone",
	},
	{
		id: 8,
		category: "therapy",
		title: "Music Therapy Session",
		image: "/13 (8).jpg",
		description: "Creative expression through music therapy",
	},
	{
		id: 9,
		category: "events",
		title: "Community Outreach",
		image: "/13 (9).jpg",
		description: "CSN Center team at community awareness event",
	},
]

export function Gallery() {
	const [selectedCategory, setSelectedCategory] = useState("all")

	const filteredItems =
		selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

	return (
		<section id="gallery" className="py-20 bg-white">
			<div className="container px-4 md:px-6">
				<div className="mx-auto max-w-4xl text-center mb-16">
					<div className="highlight-bar inline-block">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Inside the CSN Center
						</h2>
					</div>
					<p className="text-lg text-gray-600 mb-8">
						Get a glimpse of our spaces, therapy sessions, and community programs in action.
					</p>

					{/* Category Filter */}
					<div className="flex flex-wrap justify-center gap-2">
						{categories.map((category) => (
							<Button
								key={category.id}
								variant={selectedCategory === category.id ? "default" : "outline"}
								onClick={() => setSelectedCategory(category.id)}
								className={`transition-smooth ${
									selectedCategory === category.id
										? category.color
										: "border-gray-200 text-gray-700 hover:bg-gray-50"
								}`}
							>
								<Filter className="mr-2 h-4 w-4" />
								{category.label}
							</Button>
						))}
					</div>
				</div>

				{/* Gallery Grid */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{filteredItems.map((item) => (
						<div
							key={item.id}
							className="group image-hover rounded-lg overflow-hidden relative"
						>
							<Image
								src={item.image || "/placeholder.svg"}
								alt={item.title}
								width={400}
								height={300}
								className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
							/>
							<div className="image-overlay">
								<div className="text-center">
									<h3 className="font-semibold text-lg mb-2">{item.title}</h3>
									<p className="text-sm opacity-90">{item.description}</p>
								</div>
							</div>
							<div className="absolute top-4 left-4">
								<Badge className={categories.find((cat) => cat.id === item.category)?.color}>
									{categories.find((cat) => cat.id === item.category)?.label}
								</Badge>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
