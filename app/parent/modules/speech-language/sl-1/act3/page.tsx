"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, BookOpen, User, MessageCircle, Lightbulb, Clock, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const storyPages = [
	{
		id: 1,
		image: "/maya1.png",
		text: "Maya was playing with her favorite red toy car in the living room. She loved making it zoom around the coffee table and under the chairs.",
		emotion: "Happy",
		emotionColor: "bg-yellow-100 text-yellow-800",
		questions: [
			"How do you think Maya feels while playing?",
			"What makes you happy when you play?",
			"What's your favorite toy to play with?",
		],
	},
	{
		id: 2,
		image: "/maya2.png",
		text: "Suddenly, the toy car rolled too fast and went under the big couch! Maya tried to reach it, but her arm wasn't long enough.",
		emotion: "Worried",
		emotionColor: "bg-orange-100 text-orange-800",
		questions: [
			"How does Maya feel now that her car is stuck?",
			"What would you do if your toy got stuck?",
			"Have you ever lost something important to you?",
		],
	},
	{
		id: 3,
		image: "/maya3.png",
		text: "Maya started to cry because she couldn't get her car back. Her mom heard her and came to see what was wrong.",
		emotion: "Sad",
		emotionColor: "bg-blue-100 text-blue-800",
		questions: ["Why is Maya crying?", "Who comes to help Maya?", "Who helps you when you're upset?"],
	},
	{
		id: 4,
		image: "/maya4.png",
		text: "Mom got a long wooden spoon from the kitchen and carefully pushed the car out from under the couch. Maya's face lit up with joy!",
		emotion: "Relieved",
		emotionColor: "bg-green-100 text-green-800",
		questions: [
			"How does Maya feel when mom helps her?",
			"What did mom use to get the car out?",
			"How do you feel when someone helps you?",
		],
	},
	{
		id: 5,
		image: "/maya5.png",
		text: "Maya hugged her mom tight and said 'Thank you so much!' She felt proud that she had asked for help instead of giving up.",
		emotion: "Proud & Grateful",
		emotionColor: "bg-purple-100 text-purple-800",
		questions: [
			"Why does Maya feel proud of herself?",
			"What did Maya say to her mom?",
			"When do you feel proud of yourself?",
		],
	},
]

export default function EmotionStorybookActivity() {
	const [currentPage, setCurrentPage] = useState(0)
	const [showQuestions, setShowQuestions] = useState(false)

	const nextPage = () => {
		if (currentPage < storyPages.length - 1) {
			setCurrentPage((prev) => prev + 1)
			setShowQuestions(false)
		}
	}

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage((prev) => prev - 1)
			setShowQuestions(false)
		}
	}

	const toggleQuestions = () => {
		setShowQuestions(!showQuestions)
	}

	const resetStory = () => {
		setCurrentPage(0)
		setShowQuestions(false)
	}

	const currentStoryPage = storyPages[currentPage]

	return (
		<div className="container mx-auto p-4 md:p-6  min-h-screen">
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
							<div className="p-2 rounded-full bg-amber-100 text-amber-700">
								<BookOpen className="h-5 w-5" />
							</div>
							<Badge variant="secondary" className="bg-amber-100 text-amber-700">
								Activity 3
							</Badge>
						</div>
						<h1 className="text-2xl font-bold text-gray-900">Emotion Storybook Time</h1>
						<p className="text-gray-600">Read stories and discuss character emotions</p>
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
							<CardTitle className="text-amber-700 flex items-center justify-between">
								<span>Maya's Lost Toy Car</span>
								<Button variant="outline" size="sm" onClick={resetStory} className="flex items-center gap-1">
									<RotateCcw className="h-4 w-4" />
									Start Over
								</Button>
							</CardTitle>
							<CardDescription>
								Page {currentPage + 1} of {storyPages.length} • A story about problem-solving and emotions
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="bg-amber-50 rounded-lg p-4">
									<div className="flex justify-center mb-4">
										<Image
											src={currentStoryPage.image || "/placeholder.svg"}
											alt={`Story illustration for page ${currentPage + 1}`}
											width={500}
											height={350}
											className="w-[500px] h-[350px] object-cover rounded-lg shadow-sm"
										/>
									</div>

									<div className="text-center mb-3">
										<Badge className={`${currentStoryPage.emotionColor} border-0`}>
											Emotion: {currentStoryPage.emotion}
										</Badge>
									</div>

									<p className="text-gray-800 leading-relaxed text-center">{currentStoryPage.text}</p>
								</div>

								<div className="flex items-center justify-between">
									<Button
										variant="outline"
										onClick={prevPage}
										disabled={currentPage === 0}
										className="flex items-center gap-2"
									>
										<ArrowLeft className="h-4 w-4" />
										Previous
									</Button>

									<div className="flex items-center gap-2">
										{storyPages.map((_, index) => (
											<button
												key={index}
												onClick={() => {
													setCurrentPage(index)
													setShowQuestions(false)
												}}
												className={`w-3 h-3 rounded-full transition-colors ${
													index === currentPage ? "bg-amber-600" : "bg-gray-300"
												}`}
											/>
										))}
									</div>

									<Button
										variant="outline"
										onClick={nextPage}
										disabled={currentPage === storyPages.length - 1}
										className="flex items-center gap-2"
									>
										Next
										<ArrowRight className="h-4 w-4" />
									</Button>
								</div>

								<div className="text-center">
									<Button onClick={toggleQuestions} className="bg-amber-600 hover:bg-amber-700">
										{showQuestions ? "Hide Questions" : "Show Discussion Questions"}
									</Button>
								</div>

								{showQuestions && (
									<div className="bg-white rounded-lg p-4 border border-amber-200">
										<h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
											<MessageCircle className="h-5 w-5 text-amber-600" />
											Discussion Questions for This Page
										</h4>
										<div className="space-y-2">
											{currentStoryPage.questions.map((question, index) => (
												<div key={index} className="bg-amber-50 rounded-lg p-3">
													<p className="text-sm text-gray-700">"{question}"</p>
												</div>
											))}
											<div className="bg-teal-50 rounded-lg p-3">
												<p className="text-sm text-gray-700">
													"Have you ever felt like Maya in this part of the story?"
												</p>
											</div>
										</div>
									</div>
								)}
							</div>
						</CardContent>
					</Card>

					{/* Learning Goals */}
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-amber-700">Learning Goals</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="text-sm text-gray-700 space-y-2">
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
									<span>Identify emotions in story characters</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
									<span>Connect story events to personal experiences</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
									<span>Practice emotional vocabulary</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
									<span>Develop empathy and understanding</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Navigation Buttons */}
					<div className="flex gap-2">
						<Link href="/parent/modules/speech-language/sl-1/act2" className="flex-1">
							<Button variant="outline" className="w-full">
								Previous
							</Button>
						</Link>
						<Link href="/parent/modules/speech-language/sl-1/act4" className="flex-1">
							<Button className="w-full bg-amber-600 hover:bg-amber-700">Next Activity</Button>
						</Link>
					</div>
				</div>

				{/* Parent Guide stays in the right column */}
				<div className="space-y-6">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-amber-700 flex items-center gap-2">
								<User className="h-5 w-5" />
								Parent Guide
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<h4 className="font-semibold text-gray-800 mb-2">How to Read Together</h4>
								<ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
									<li>Read each page aloud with expression</li>
									<li>Point to the emotion badge and discuss it</li>
									<li>Ask the discussion questions</li>
									<li>Listen to your child's responses</li>
									<li>Share similar experiences from your life</li>
								</ol>
							</div>

							<div className="bg-amber-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
									<Lightbulb className="h-4 w-4 text-amber-600" />
									Reading Tips
								</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• Use different voices for characters</li>
									<li>• Pause to let your child predict what happens next</li>
									<li>• Point to facial expressions in the pictures</li>
									<li>• Ask "What would you do?" questions</li>
									<li>• Relate the story to your child's experiences</li>
								</ul>
							</div>

							<div className="bg-teal-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2">Story Themes</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• Problem-solving skills</li>
									<li>• Asking for help when needed</li>
									<li>• Emotional ups and downs</li>
									<li>• Family support and love</li>
									<li>• Feeling proud of good choices</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
