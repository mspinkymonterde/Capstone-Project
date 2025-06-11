"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Users, User, MessageCircle, Lightbulb, Clock, Shuffle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const puppetQuestions = [
	{
		id: 1,
		puppet: "Buddy Bear",
		emoji: "🐻",
		color: "bg-amber-200",
		question: "What's your favorite food to eat?",
		followUp: "Why do you like that food? When do you eat it?",
	},
	{
		id: 2,
		puppet: "Ruby Rabbit",
		emoji: "🐰",
		color: "bg-pink-200",
		question: "Who do you like to play with at home?",
		followUp: "What games do you play together? What makes it fun?",
	},
	{
		id: 3,
		puppet: "Buddy Bear",
		emoji: "🐻",
		color: "bg-amber-200",
		question: "What makes you laugh the most?",
		followUp: "Can you show me? What's so funny about it?",
	},
	{
		id: 4,
		puppet: "Ruby Rabbit",
		emoji: "🐰",
		color: "bg-pink-200",
		question: "What's your favorite thing to do outside?",
		followUp: "Where do you like to go? Who goes with you?",
	},
	{
		id: 5,
		puppet: "Buddy Bear",
		emoji: "🐻",
		color: "bg-amber-200",
		question: "What do you like to do before bedtime?",
		followUp: "Who helps you get ready? What makes you feel sleepy?",
	},
	{
		id: 6,
		puppet: "Ruby Rabbit",
		emoji: "🐰",
		color: "bg-pink-200",
		question: "What's your favorite color and why?",
		followUp: "What things do you have in that color? How does it make you feel?",
	},
	{
		id: 7,
		puppet: "Buddy Bear",
		emoji: "🐻",
		color: "bg-amber-200",
		question: "If you could be any animal, what would you be?",
		followUp: "What would you do as that animal? Where would you live?",
	},
	{
		id: 8,
		puppet: "Ruby Rabbit",
		emoji: "🐰",
		color: "bg-pink-200",
		question: "What's the best gift you've ever received?",
		followUp: "Who gave it to you? What made it so special?",
	},
]

export default function PuppetQuestionsActivity() {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showFollowUp, setShowFollowUp] = useState(false)

	const nextQuestion = () => {
		if (currentQuestion < puppetQuestions.length - 1) {
			setCurrentQuestion((prev) => prev + 1)
			setShowFollowUp(false)
		}
	}

	const prevQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion((prev) => prev - 1)
			setShowFollowUp(false)
		}
	}

	const shuffleQuestions = () => {
		const randomIndex = Math.floor(Math.random() * puppetQuestions.length)
		setCurrentQuestion(randomIndex)
		setShowFollowUp(false)
	}

	const toggleFollowUp = () => {
		setShowFollowUp(!showFollowUp)
	}

	const currentQ = puppetQuestions[currentQuestion]

	return (
		<div className="container mx-auto p-4 md:p-6 bg-gradient-to-br from-teal-50 via-gray-50 to-gray-100 min-h-screen">
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
							<div className="p-2 rounded-full bg-purple-100 text-purple-700">
								<Users className="h-5 w-5" />
							</div>
							<Badge variant="secondary" className="bg-purple-100 text-purple-700">
								Activity 4
							</Badge>
						</div>
						<h1 className="text-2xl font-bold text-gray-900">Ask Me with Puppets</h1>
						<p className="text-gray-600">Interactive puppet conversations and role-play</p>
					</div>
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<Clock className="h-4 w-4" />
						10-15 minutes
					</div>
				</div>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Main Activity Area */}
				<div className="lg:col-span-2">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-purple-700 flex items-center justify-between">
								<span>Puppet Theater</span>
								<Button variant="outline" size="sm" onClick={shuffleQuestions} className="flex items-center gap-1">
									<Shuffle className="h-4 w-4" />
									Random Question
								</Button>
							</CardTitle>
							<CardDescription>
								Question {currentQuestion + 1} of {puppetQuestions.length}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								{/* Puppet Stage */}
								<div className="bg-gradient-to-b from-purple-100 to-purple-50 rounded-lg p-6 text-center">
									<div className="flex justify-center items-end gap-8 mb-4">
										<div
											className={`text-center ${currentQ.puppet === "Buddy Bear" ? "transform scale-110" : "opacity-60"} transition-all`}
										>
											<div
												className={`w-20 h-20 ${currentQ.puppet === "Buddy Bear" ? "bg-amber-200" : "bg-gray-200"} rounded-full flex items-center justify-center text-4xl mb-2 shadow-lg`}
											>
												🐻
											</div>
											<p className="text-sm font-medium text-gray-700">Buddy Bear</p>
										</div>
										<div
											className={`text-center ${currentQ.puppet === "Ruby Rabbit" ? "transform scale-110" : "opacity-60"} transition-all`}
										>
											<div
												className={`w-20 h-20 ${currentQ.puppet === "Ruby Rabbit" ? "bg-pink-200" : "bg-gray-200"} rounded-full flex items-center justify-center text-4xl mb-2 shadow-lg`}
											>
												🐰
											</div>
											<p className="text-sm font-medium text-gray-700">Ruby Rabbit</p>
										</div>
									</div>

									<div className="bg-white rounded-lg p-4 shadow-sm">
										<p className="text-sm font-medium text-gray-600 mb-2">{currentQ.puppet} asks:</p>
										<div className={`${currentQ.color} rounded-lg p-3 inline-block max-w-md`}>
											<p className="text-gray-800 font-medium">"{currentQ.question}"</p>
										</div>
									</div>
								</div>

								{/* Navigation and Follow-up */}
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<Button
											variant="outline"
											onClick={prevQuestion}
											disabled={currentQuestion === 0}
											className="flex items-center gap-2"
										>
											<ArrowLeft className="h-4 w-4" />
											Previous
										</Button>

										<div className="flex items-center gap-2">
											{puppetQuestions.slice(0, 5).map((_, index) => (
												<button
													key={index}
													onClick={() => {
														setCurrentQuestion(index)
														setShowFollowUp(false)
													}}
													className={`w-3 h-3 rounded-full transition-colors ${
														index === currentQuestion ? "bg-purple-600" : "bg-gray-300"
													}`}
												/>
											))}
											{puppetQuestions.length > 5 && <span className="text-gray-400 text-sm">...</span>}
										</div>

										<Button
											variant="outline"
											onClick={nextQuestion}
											disabled={currentQuestion === puppetQuestions.length - 1}
											className="flex items-center gap-2"
										>
											Next
											<ArrowRight className="h-4 w-4" />
										</Button>
									</div>

									<div className="text-center">
										<Button onClick={toggleFollowUp} className="bg-purple-600 hover:bg-purple-700">
											{showFollowUp ? "Hide Follow-up" : "Show Follow-up Questions"}
										</Button>
									</div>

									{showFollowUp && (
										<div className="bg-white rounded-lg p-4 border border-purple-200">
											<h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
												<MessageCircle className="h-5 w-5 text-purple-600" />
												Follow-up Questions
											</h4>
											<div className="bg-purple-50 rounded-lg p-3">
												<p className="text-sm text-gray-700">"{currentQ.followUp}"</p>
											</div>
										</div>
									)}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Learning Goals and Navigation directly below activity area, left side */}
					<div className="mt-6 space-y-4">
						<Card className="border-gray-200 shadow-sm">
							<CardHeader>
								<CardTitle className="text-purple-700">Learning Goals</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="text-sm text-gray-700 space-y-2">
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
										<span>Practice turn-taking in conversation</span>
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
										<span>Develop question-asking skills</span>
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
										<span>Build imaginative speaking abilities</span>
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
										<span>Encourage detailed responses</span>
									</li>
								</ul>
							</CardContent>
						</Card>
						<div className="flex gap-2">
							<Link href="/parent/modules/speech-language/sl-1/act3" className="flex-1">
								<Button variant="outline" className="w-full">
									Previous
								</Button>
							</Link>
							<Link href="/parent/modules/speech-language/sl-1/act5" className="flex-1">
								<Button className="w-full bg-purple-600 hover:bg-purple-700">Next Activity</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Parent Guide and Extension Ideas remain on the right side */}
				<div className="space-y-6 lg:col-span-1">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-purple-700 flex items-center gap-2">
								<User className="h-5 w-5" />
								Parent Guide
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<h4 className="font-semibold text-gray-800 mb-2">How to Play</h4>
								<ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
									<li>Use stuffed animals or puppets if available</li>
									<li>Read the puppet's question with a fun voice</li>
									<li>Let your child answer the question</li>
									<li>Ask follow-up questions to extend the conversation</li>
									<li>Take turns - let your child be the puppet too!</li>
								</ol>
							</div>

							<div className="bg-purple-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
									<Lightbulb className="h-4 w-4 text-purple-600" />
									Activity Tips
								</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• Use different voices for each puppet</li>
									<li>• Make the puppets move when they talk</li>
									<li>• Encourage your child to ask questions too</li>
									<li>• Keep the conversation playful and fun</li>
									<li>• Praise good listening and turn-taking</li>
								</ul>
							</div>

							<div className="bg-teal-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2">Extension Ideas</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• Create a simple puppet theater from a box</li>
									<li>• Make sock or paper bag puppets together</li>
									<li>• Let your child create their own questions</li>
									<li>• Act out a simple story with the puppets</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
