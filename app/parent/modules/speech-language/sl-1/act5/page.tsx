"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Eye, User, MessageCircle, Lightbulb, Clock, Shuffle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const objects = [
	{
		id: 1,
		name: "Toothbrush",
		image: "https://thumbs.dreamstime.com/b/toothbrush-toothpaste-cup-cartoon-vector-illustration-282062324.jpg",
		prompts: [
			"Who uses this?",
			"What is it for?",
			"How do we use it?",
			"When do we use it?",
			"Where do we keep it?",
		],
	},
	{
		id: 2,
		name: "Toy Car",
		image: "https://img.freepik.com/premium-vector/car-toy-cartoon-vector-illustration-cute-car-toy-cartoon-drawing-playful-toy-vehicle-design_648083-563.jpg?w=2000",
		prompts: [
			"What do you do with this?",
			"What sounds does it make?",
			"Where can it go?",
			"Who plays with it?",
			"What color is it?",
		],
	},
	{
		id: 3,
		name: "Apple",
		image: "https://i.ebayimg.com/images/g/99cAAOSwcPBloGky/s-l300.jpg",
		prompts: [
			"What does it taste like?",
			"What color is it?",
			"How do we eat it?",
			"Where do apples grow?",
			"Is it hard or soft?",
		],
	},
	{
		id: 4,
		name: "Backpack",
		image: "https://img.freepik.com/free-vector/backpack-icon-flat-illustration_32991-880.jpg",
		prompts: [
			"What goes inside it?",
			"Who carries it?",
			"Where do we take it?",
			"How do we wear it?",
			"What color is your backpack?",
		],
	},
	{
		id: 5,
		name: "Shoes",
		image: "https://img.freepik.com/premium-vector/cute-shoe-vector-cartoonstyle-pastel-design_473883-236.jpg?w=2000",
		prompts: [
			"When do we wear these?",
			"How do we put them on?",
			"What do they protect?",
			"What kinds of shoes do you have?",
			"Where do we keep them?",
		],
	},
	{
		id: 6,
		name: "Book",
		image: "https://th.bing.com/th/id/R.fa8ca10718881c3b340424ab9aa698dd?rik=7DFra68Oa%2beO%2bw&riu=http%3a%2f%2fclipart-library.com%2fimages%2fpcqKd9nRi.png&ehk=NisgROS6zIdQtqUGOeQEA1h78h2fDsFWxfWBsUHjxFo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
		prompts: [
			"What do we do with this?",
			"Who reads with you?",
			"What's your favorite book?",
			"What's inside a book?",
			"Where do we get books from?",
		],
	},
]

export default function GuidedShowTellActivity() {
	const [currentObject, setCurrentObject] = useState(0)
	const [showAllPrompts, setShowAllPrompts] = useState(false)

	const nextObject = () => {
		if (currentObject < objects.length - 1) {
			setCurrentObject((prev) => prev + 1)
			setShowAllPrompts(false)
		}
	}

	const prevObject = () => {
		if (currentObject > 0) {
			setCurrentObject((prev) => prev - 1)
			setShowAllPrompts(false)
		}
	}

	const randomObject = () => {
		const randomIndex = Math.floor(Math.random() * objects.length)
		setCurrentObject(randomIndex)
		setShowAllPrompts(false)
	}

	const togglePrompts = () => {
		setShowAllPrompts(!showAllPrompts)
	}

	const currentObj = objects[currentObject]

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
							<div className="p-2 rounded-full bg-emerald-100 text-emerald-700">
								<Eye className="h-5 w-5" />
							</div>
							<Badge
								variant="secondary"
								className="bg-emerald-100 text-emerald-700"
							>
								Activity 5
							</Badge>
						</div>
						<h1 className="text-2xl font-bold text-gray-900">
							Guided Show & Tell
						</h1>
						<p className="text-gray-600">
							Describe objects and practice detailed explanations
						</p>
					</div>
					<div className="flex items-center gap-2 text-sm text-gray-600">
						<Clock className="h-4 w-4" />
						15-20 minutes
					</div>
				</div>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Main Activity Area */}
				<div className="lg:col-span-2">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-emerald-700 flex items-center justify-between">
								<span>Object Description</span>
								<Button
									variant="outline"
									size="sm"
									onClick={randomObject}
									className="flex items-center gap-1"
								>
									<Shuffle className="h-4 w-4" />
									Random Object
								</Button>
							</CardTitle>
							<CardDescription>
								Object {currentObject + 1} of {objects.length} • Tell me about
								this object
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								<div className="bg-emerald-50 rounded-lg p-6 text-center">
									<div className="flex justify-center mb-4">
										<div className="bg-white rounded-lg p-4 shadow-sm inline-block">
											<Image
												src={currentObj.image || "/placeholder.svg"}
												alt={currentObj.name}
												width={200}
												height={200}
												className="w-40 h-40 object-contain mx-auto"
											/>
										</div>
									</div>
									<h3 className="text-xl font-bold text-gray-800">
										{currentObj.name}
									</h3>
								</div>

								<div className="bg-white rounded-lg p-4 border border-emerald-200">
									<h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
										<MessageCircle className="h-5 w-5 text-emerald-600" />
										Ask Your Child
									</h4>

									{!showAllPrompts ? (
										<div className="bg-emerald-50 rounded-lg p-3 text-center">
											<p className="text-gray-800 font-medium">
												"Can you tell me about this{" "}
												{currentObj.name.toLowerCase()}?"
											</p>
										</div>
									) : (
										<div className="space-y-2">
											<div className="bg-emerald-50 rounded-lg p-3">
												<p className="text-gray-800 font-medium">
													"Can you tell me about this{" "}
													{currentObj.name.toLowerCase()}?"
												</p>
											</div>
											{currentObj.prompts.map((prompt, index) => (
												<div
													key={index}
													className="bg-gray-50 rounded-lg p-3"
												>
													<p className="text-sm text-gray-700">"{prompt}"</p>
												</div>
											))}
										</div>
									)}

									<div className="text-center mt-4">
										<Button
											onClick={togglePrompts}
											variant="outline"
											className="text-emerald-700 border-emerald-300"
										>
											{showAllPrompts
												? "Show Fewer Questions"
												: "Show More Questions"}
										</Button>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<Button
										variant="outline"
										onClick={prevObject}
										disabled={currentObject === 0}
										className="flex items-center gap-2"
									>
										<ArrowLeft className="h-4 w-4" />
										Previous
									</Button>

									<div className="flex items-center gap-2">
										{objects.map((_, index) => (
											<button
												key={index}
												onClick={() => {
													setCurrentObject(index)
													setShowAllPrompts(false)
												}}
												className={`w-3 h-3 rounded-full transition-colors ${
													index === currentObject
														? "bg-emerald-600"
														: "bg-gray-300"
												}`}
											/>
										))}
									</div>

									<Button
										variant="outline"
										onClick={nextObject}
										disabled={currentObject === objects.length - 1}
										className="flex items-center gap-2"
									>
										Next
										<ArrowRight className="h-4 w-4" />
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Learning Goals and Navigation directly below activity area, left side */}
					<div className="mt-6 space-y-4">
						<Card className="border-gray-200 shadow-sm">
							<CardHeader>
								<CardTitle className="text-emerald-700">Learning Goals</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="text-sm text-gray-700 space-y-2">
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 rounded-full bg-emerald-600 mt-2"></div>
										<span>Develop descriptive language skills</span>
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 rounded-full bg-emerald-600 mt-2"></div>
										<span>Practice detailed explanations</span>
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 rounded-full bg-emerald-600 mt-2"></div>
										<span>Build vocabulary about everyday objects</span>
									</li>
									<li className="flex items-start gap-2">
										<div className="w-2 h-2 rounded-full bg-emerald-600 mt-2"></div>
										<span>Connect objects to their functions and uses</span>
									</li>
								</ul>
							</CardContent>
						</Card>
						<div className="flex gap-2">
							<Link
								href="/parent/modules/speech-language/sl-1/act4"
								className="flex-1"
							>
								<Button variant="outline" className="w-full">
									Previous
								</Button>
							</Link>
							<Link
								href="/parent/modules/speech-language/sl-1"
								className="flex-1"
							>
								<Button className="w-full bg-emerald-600 hover:bg-emerald-700">
									Complete Module
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Parent Guide and Extension Ideas remain on the right side */}
				<div className="space-y-6 lg:col-span-1">
					<Card className="border-gray-200 shadow-sm">
						<CardHeader>
							<CardTitle className="text-emerald-700 flex items-center gap-2">
								<User className="h-5 w-5" />
								Parent Guide
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div>
								<h4 className="font-semibold text-gray-800 mb-2">
									How to Use This Activity
								</h4>
								<ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
									<li>Show your child the object image</li>
									<li>Ask the main question first</li>
									<li>Listen to their description</li>
									<li>Use follow-up questions to encourage more details</li>
									<li>Try using real objects from around your home too!</li>
								</ol>
							</div>

							<div className="bg-emerald-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
									<Lightbulb className="h-4 w-4 text-emerald-600" />
									Encourage Your Child To
								</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>
										• Use descriptive words (colors, shapes, textures)
									</li>
									<li>• Explain how things work or are used</li>
									<li>• Share personal experiences with the object</li>
									<li>• Ask their own questions about the object</li>
									<li>• Compare it to similar objects they know</li>
								</ul>
							</div>

							<div className="bg-teal-50 rounded-lg p-3">
								<h4 className="font-semibold text-sm mb-2">Extension Ideas</h4>
								<ul className="text-sm text-gray-700 space-y-1">
									<li>• Create a "mystery bag" with objects to describe</li>
									<li>• Let your child be the "teacher" and ask you questions</li>
									<li>• Draw pictures of the objects after discussing</li>
									<li>• Group objects by category and discuss similarities</li>
								</ul>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
