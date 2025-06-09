"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Calendar, User, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
	{
		id: 1,
		title: "Inside Our New Sensory Room",
		excerpt:
			"Explore how our sensory room supports children with sensory processing needs and enhances therapeutic outcomes.",
		image: "/13 (1).jpg",
		date: "December 10, 2024",
		author: "Dr. Maria Santos",
		category: "Facilities",
		type: "announcement",
		readTime: "3 min read",
		views: 245,
	},
	{
		id: 2,
		title: "Seminar Recap: Understanding ABA Therapy",
		excerpt:
			"Last week's seminar walked parents through core ABA strategies they can apply at home with their children.",
		image: "/13 (2).jpg",
		date: "December 8, 2024",
		author: "CSN Team",
		category: "Education",
		type: "event-recap",
		readTime: "5 min read",
		views: 189,
	},
	{
		id: 3,
		title: "A Day with a Developmental Pediatrician",
		excerpt: "We spent a morning observing real evaluations — here's what to expect during your child's assessment.",
		image: "/13 (3).jpg",
		date: "December 5, 2024",
		author: "Dr. Juan Dela Cruz",
		category: "Assessment",
		type: "therapy-tip",
		readTime: "4 min read",
		views: 312,
	},
	{
		id: 4,
		title: "Early Intervention Success Stories",
		excerpt:
			"Meet three families who started their journey with us and see the incredible progress their children have made.",
		image: "/13 (4).jpg",
		date: "December 3, 2024",
		author: "CSN Team",
		category: "Success Stories",
		type: "announcement",
		readTime: "6 min read",
		views: 428,
	},
	{
		id: 5,
		title: "Home-Based Speech Therapy Activities",
		excerpt: "Simple, effective activities you can do at home to support your child's speech and language development.",
		image: "/13 (5).jpg",
		date: "November 30, 2024",
		author: "Speech Therapy Team",
		category: "Therapy Tips",
		type: "therapy-tip",
		readTime: "7 min read",
		views: 567,
	},
	{
		id: 6,
		title: "Understanding Sensory Processing Disorders",
		excerpt: "Learn about sensory processing challenges and how occupational therapy can help your child thrive.",
		image: "/13 (6).jpg",
		date: "November 28, 2024",
		author: "OT Team",
		category: "Education",
		type: "therapy-tip",
		readTime: "5 min read",
		views: 234,
	},
]

const categories = ["All", "Education", "Therapy Tips", "Facilities", "Success Stories", "Assessment"]
const typeColors = {
	announcement: "bg-blue-100 text-blue-700",
	"therapy-tip": "bg-csn-green text-white",
	"event-recap": "bg-csn-yellow text-csn-green",
}

export function BlogSection() {
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("All")

	return (
		<section id="updates" className="py-20 bg-gray-50">
			<div className="container px-4 md:px-6">
				<div className="mx-auto max-w-4xl text-center mb-16">
					<div className="highlight-bar inline-block">
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							CSN Center Blog & Updates
						</h2>
					</div>
					<p className="text-lg text-gray-600 mb-8">
						Stay informed on therapies, parenting tips, center activities, and more.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-4">
					{/* Main Blog Grid */}
					<div className="lg:col-span-4">
						<div className="grid gap-6 md:grid-cols-3">
							{blogPosts.map((post) => (
								<Card key={post.id} className="gov-card overflow-hidden">
									<div className="relative">
										<Image
											src={post.image || "/placeholder.svg"}
											alt={post.title}
											width={300}
											height={200}
											className="w-full h-48 object-cover"
										/>
										<div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
											<Eye className="h-3 w-3" />
											{post.views}
										</div>
									</div>
									<CardHeader>
										<div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
											<div className="flex items-center gap-1">
												<Calendar className="h-4 w-4" />
												{post.date}
											</div>
											<div className="flex items-center gap-1">
												<User className="h-4 w-4" />
												{post.author}
											</div>
										</div>
										<CardTitle className="text-lg hover:text-csn-teal transition-smooth">
											<Link href={`/blog/${post.id}`}>{post.title}</Link>
										</CardTitle>
										<CardDescription>{post.excerpt}</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">{post.readTime}</span>
											<Link href={`/blog/${post.id}`}>
												<Button variant="outline" size="sm" className="group">
													Read More
													<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
												</Button>
											</Link>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
