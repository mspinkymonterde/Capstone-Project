"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Camera, User, MessageCircle, Lightbulb, Clock, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const familyPhotos = [
	{
		id: 1,
		src: "/slact1.jpg",
		alt: "Family playing at the park",
		scenario: "Playing at the Park",
		description: "A family enjoying outdoor activities together at a local park",
	},
	{
		id: 2,
		src: "/slact2.jpg",
		alt: "Family eating dinner together",
		scenario: "Family Dinner Time",
		description: "Everyone gathered around the table sharing a meal and conversation",
	},
	{
		id: 3,
		src: "/slact3.jpg",
		alt: "Family cleaning house together",
		scenario: "Cleaning Together",
		description: "Family members working as a team to tidy up their home",
	},
	{
		id: 4,
		src: "/slact4.jpg",
		alt: "Family reading bedtime story",
		scenario: "Bedtime Story",
		description: "Parents and children sharing a quiet reading moment before sleep",
	},
	{
		id: 5,
		src: "/slact5.jpg",
		alt: "Family cooking together",
		scenario: "Cooking Together",
		description: "Family preparing a meal together in the kitchen",
	},
]

const conversationPrompts = [
	"What do you think is happening in this picture?",
	"Have we ever done this before?",
	"What happened first? What happened next?",
	"How do you think everyone is feeling?",
	"What would you like to do in this situation?",
	"Who do you see in this picture?",
	"What sounds might you hear in this scene?",
]

export default function FamilyMomentsTalkActivity() {
	const [currentPhoto, setCurrentPhoto] = useState(0)
	const [isFullscreen, setIsFullscreen] = useState(false)

	const nextPhoto = () => {
		setCurrentPhoto((prev) => (prev + 1) % familyPhotos.length)
	}

	const prevPhoto = () => {
		setCurrentPhoto((prev) => (prev - 1 + familyPhotos.length) % familyPhotos.length)
	}

	return (
		<div className="container mx-auto p-4 md:p-6 min-h-screen">
			{/* Fullscreen Modal */}
			{isFullscreen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
					onClick={() => setIsFullscreen(false)}
				>
					<div
						className="relative"
						onClick={e => e.stopPropagation()}
					>
						<button
							className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-1 hover:bg-white"
							onClick={() => setIsFullscreen(false)}
							aria-label="Close"
						>
							<X className="h-6 w-6 text-gray-800" />
						</button>
						<Image
							src={familyPhotos[currentPhoto].src || "/placeholder.svg"}
							alt={familyPhotos[currentPhoto].alt}
							width={1600}
							height={1200}
							className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg cursor-zoom-out"
						/>
					</div>
				</div>
			)}

			<div className="mb-6">
				<Link
					href="/parent/modules/speech-language/sl-1"
					className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
				>
					<ArrowLeft className="mr-1 h-3 w-3" />
					Back to Module
				</Link>

				<div className="flex items-center justify-between">
					<div>
						<div className="flex items-center gap-2 mb-2">
							<div className="p-2 rounded-full bg-teal-100 text-teal-700">
								<Camera className="h-5 w-5" />
							</div>
							<Badge variant="secondary" className="bg-teal-100 text-teal-700">
								Activity 1
							</Badge>
						</div>
						<h1 className="text-2xl font-bold text-gray-900">Family Moments Talk</h1>
						<p className="text-gray-600">Look at each family scenario and discuss what's happening</p>
					</div>
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<Clock className="h-4 w-4" />
						15-20 minutes
					</div>
				</div>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2 space-y-6">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-teal-700">{familyPhotos[currentPhoto].scenario}</CardTitle>
							<CardDescription>{familyPhotos[currentPhoto].description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="relative bg-teal-50 rounded-lg p-4">
									<Image
										src={familyPhotos[currentPhoto].src || "/placeholder.svg"}
										alt={familyPhotos[currentPhoto].alt}
										width={1240}
										height={1030}
										className="w-full h-96 object-cover rounded-lg shadow-sm cursor-zoom-in"
										onClick={() => setIsFullscreen(true)}
									/>
								</div>

								<div className="flex items-center justify-between">
									<Button variant="outline" onClick={prevPhoto} className="flex items-center gap-2">
										<ArrowLeft className="h-4 w-4" />
										Previous
									</Button>

									<div className="flex items-center gap-2">
										{familyPhotos.map((_, index) => (
											<button
												key={index}
												onClick={() => setCurrentPhoto(index)}
												className={`w-2 h-2 rounded-full transition-colors ${
													index === currentPhoto ? "bg-teal-600" : "bg-gray-300"
												}`}
											/>
										))}
									</div>

									<Button variant="outline" onClick={nextPhoto} className="flex items-center gap-2">
										Next
										<ArrowRight className="h-4 w-4" />
									</Button>
								</div>

								<div className="text-center text-sm text-gray-600">
									Photo {currentPhoto + 1} of {familyPhotos.length}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Learning Goals */}
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-teal-700">Learning Goals</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="text-sm text-gray-700 space-y-2">
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-teal-600 mt-2"></div>
									<span>Practice asking and answering questions</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-teal-600 mt-2"></div>
									<span>Develop descriptive language skills</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-teal-600 mt-2"></div>
									<span>Connect experiences to language</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-teal-600 mt-2"></div>
									<span>Build conversation skills</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Navigation Buttons */}
					<div className="flex gap-2">
						<Link href="/parent/modules/speech-language/sl-1" className="flex-1">
							<Button variant="outline" className="w-full">
								Back to Module
							</Button>
						</Link>
						<Link href="/parent/modules/speech-language/sl-1/act2" className="flex-1">
							<Button className="w-full bg-teal-600 hover:bg-teal-700">Next Activity</Button>
						</Link>
					</div>
				</div>

				{/* Parent Guide stays in the right column */}
				<div className="space-y-6">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-teal-700 flex items-center gap-2">
								<User className="h-5 w-5" />
								Parent Guide
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<h4 className="font-semibold text-gray-800 mb-2">How to Use This Activity</h4>
								<p className="text-sm text-gray-600">
									Look at each photo with your child and use the conversation prompts to encourage discussion. Take your
									time and let your child lead the conversation when possible.
								</p>
							</div>

							<div className="bg-teal-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
									<MessageCircle className="h-4 w-4 text-teal-600" />
									Conversation Starters
								</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									{conversationPrompts.map((prompt, index) => (
										<li key={index}>• "{prompt}"</li>
									))}
								</ul>
							</div>

							<div className="bg-amber-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
									<Lightbulb className="h-4 w-4 text-amber-600" />
									Tips for Success
								</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• Wait for your child's response before moving on</li>
									<li>• Expand on their answers with more details</li>
									<li>• Share your own experiences related to the photos</li>
									<li>• Encourage storytelling about similar experiences</li>
									<li>• Ask follow-up questions to extend the conversation</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
