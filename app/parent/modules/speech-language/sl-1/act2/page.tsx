"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, User, MessageCircle, Lightbulb, Clock, RotateCcw } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const emotions = [
	{
		id: "happy",
		name: "Happy",
		emoji: "😊",
		color: "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
		description: "Feeling joyful, pleased, or content",
	},
	{
		id: "sad",
		name: "Sad",
		emoji: "😢",
		color: "bg-blue-100 border-blue-300 hover:bg-blue-200",
		description: "Feeling unhappy, sorrowful, or disappointed",
	},
	{
		id: "angry",
		name: "Angry",
		emoji: "😠",
		color: "bg-red-100 border-red-300 hover:bg-red-200",
		description: "Feeling mad, frustrated, or upset",
	},
	{
		id: "excited",
		name: "Excited",
		emoji: "🤩",
		color: "bg-orange-100 border-orange-300 hover:bg-orange-200",
		description: "Feeling thrilled, eager, or enthusiastic",
	},
	{
		id: "scared",
		name: "Scared",
		emoji: "😨",
		color: "bg-purple-100 border-purple-300 hover:bg-purple-200",
		description: "Feeling afraid, worried, or frightened",
	},
	{
		id: "surprised",
		name: "Surprised",
		emoji: "😲",
		color: "bg-pink-100 border-pink-300 hover:bg-pink-200",
		description: "Feeling amazed, shocked, or astonished",
	},
]

const emotionQuestions = [
	"Can you tell me a time when you felt like this?",
	"What happened that made you feel [emotion]?",
	"How did your body feel when you were [emotion]?",
	"What did you do when you felt this way?",
	"Who helped you when you felt [emotion]?",
	"What makes you feel [emotion] now?",
]

export default function FeelingsMatchingGameActivity() {
	const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)
	const [showQuestions, setShowQuestions] = useState(false)

	const handleEmotionSelect = (emotionId: string) => {
		setSelectedEmotion(emotionId)
		setShowQuestions(true)
	}

	const resetGame = () => {
		setSelectedEmotion(null)
		setShowQuestions(false)
	}

	const selectedEmotionData = emotions.find((e) => e.id === selectedEmotion)

	return (
		<div className="container mx-auto p-4 md:p-6 min-h-screen">
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
							<div className="p-2 rounded-full bg-rose-100 text-rose-700">
								<Heart className="h-5 w-5" />
							</div>
							<Badge variant="secondary" className="bg-rose-100 text-rose-700">
								Activity 2
							</Badge>
						</div>
						<h1 className="text-2xl font-bold text-gray-900">Feelings Matching Game</h1>
						<p className="text-gray-600">Match emotions and share personal experiences</p>
					</div>
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<Clock className="h-4 w-4" />
						10-15 minutes
					</div>
				</div>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2 space-y-6">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-rose-700 flex items-center justify-between">
								Emotion Selection
								{selectedEmotion && (
									<Button variant="outline" size="sm" onClick={resetGame} className="flex items-center gap-1">
										<RotateCcw className="h-4 w-4" />
										Try Again
									</Button>
								)}
							</CardTitle>
							<CardDescription>
								{!selectedEmotion
									? "Choose an emotion face to start the conversation"
									: `Great choice! Now let's talk about feeling ${selectedEmotionData?.name.toLowerCase()}`}
							</CardDescription>
						</CardHeader>
						<CardContent>
							{!showQuestions ? (
								<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
									{emotions.map((emotion) => (
										<button
											key={emotion.id}
											onClick={() => handleEmotionSelect(emotion.id)}
											className={`p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${emotion.color}`}
										>
											<div className="text-4xl mb-2">{emotion.emoji}</div>
											<div className="font-semibold text-gray-800">{emotion.name}</div>
											<div className="text-xs text-gray-600 mt-1">{emotion.description}</div>
										</button>
									))}
								</div>
							) : (
								<div className="space-y-6">
									<div className="text-center bg-rose-50 rounded-lg p-6">
										<div className="text-6xl mb-3">{selectedEmotionData?.emoji}</div>
										<h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedEmotionData?.name}</h3>
										<p className="text-gray-600">{selectedEmotionData?.description}</p>
									</div>

									<div className="bg-white rounded-lg p-4 border border-rose-200">
										<h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
											<MessageCircle className="h-5 w-5 text-rose-600" />
											Conversation Questions
										</h4>
										<div className="grid gap-3">
											{emotionQuestions.map((question, index) => (
												<div key={index} className="bg-rose-50 rounded-lg p-3">
													<p className="text-sm text-gray-700">
														"{question.replace("[emotion]", selectedEmotionData?.name.toLowerCase() || "")}"
													</p>
												</div>
											))}
										</div>
									</div>

									<div className="bg-amber-50 rounded-lg p-4">
										<h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
											<Lightbulb className="h-4 w-4 text-amber-600" />
											Discussion Tips
										</h4>
										<ul className="text-sm text-gray-700 space-y-1">
											<li>• Give your child time to think before answering</li>
											<li>• Share your own experiences with this emotion</li>
											<li>• Ask follow-up questions to learn more</li>
											<li>• Validate that all feelings are normal and okay</li>
										</ul>
									</div>
								</div>
							)}
						</CardContent>
					</Card>

					{/* Learning Goals */}
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-rose-700">Learning Goals</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="text-sm text-gray-700 space-y-2">
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-rose-600 mt-2"></div>
									<span>Identify and name different emotions</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-rose-600 mt-2"></div>
									<span>Connect emotions to personal experiences</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-rose-600 mt-2"></div>
									<span>Practice emotional vocabulary</span>
								</li>
								<li className="flex items-start gap-2">
									<div className="w-2 h-2 rounded-full bg-rose-600 mt-2"></div>
									<span>Develop emotional awareness</span>
								</li>
							</ul>
						</CardContent>
					</Card>

					{/* Navigation Buttons */}
					<div className="flex gap-2">
						<Link href="/parent/modules/speech-language/sl-1/act1" className="flex-1">
							<Button variant="outline" className="w-full">
								Previous
							</Button>
						</Link>
						<Link href="/parent/modules/speech-language/sl-1/act3" className="flex-1">
							<Button className="w-full bg-rose-600 hover:bg-rose-700">Next Activity</Button>
						</Link>
					</div>
				</div>

				{/* Parent Guide stays in the right column */}
				<div className="space-y-6">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-rose-700 flex items-center gap-2">
								<User className="h-5 w-5" />
								Parent Guide
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<h4 className="font-semibold text-gray-800 mb-2">How to Play</h4>
								<ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
									<li>Let your child choose an emotion face</li>
									<li>Read the emotion name together</li>
									<li>Use the conversation questions to discuss</li>
									<li>Share your own experiences too</li>
									<li>Try different emotions to practice</li>
								</ol>
							</div>

							<div className="bg-rose-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2">What This Teaches</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• Emotion recognition and naming</li>
									<li>• Personal experience sharing</li>
									<li>• Emotional vocabulary building</li>
									<li>• Self-awareness and reflection</li>
								</ul>
							</div>

							<div className="bg-teal-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2">Extension Ideas</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• Act out the emotions with faces</li>
									<li>• Draw pictures of when you felt this way</li>
									<li>• Make up stories about the emotions</li>
									<li>• Practice identifying emotions in others</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
