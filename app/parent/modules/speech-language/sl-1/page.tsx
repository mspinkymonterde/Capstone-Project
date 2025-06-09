"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle, FileText, Video, Clock, Camera, Heart, BookOpen, Users, Eye } from "lucide-react"
import Link from "next/link"

const activities = [
	{
		id: 1,
		title: "Family Moments Talk",
		description: "Explore family photos and practice conversation skills",
		duration: "15-20 min",
		icon: Camera,
		href: "/parent/modules/speech-language/sl-1/act1",
		color: "bg-teal-100 text-teal-700",
	},
	{
		id: 2,
		title: "Feelings Matching Game",
		description: "Match emotions and share personal experiences",
		duration: "10-15 min",
		icon: Heart,
		href: "/parent/modules/speech-language/sl-1/act2",
		color: "bg-rose-100 text-rose-700",
	},
	{
		id: 3,
		title: "Emotion Storybook Time",
		description: "Read stories and discuss character emotions",
		duration: "15-20 min",
		icon: BookOpen,
		href: "/parent/modules/speech-language/sl-1/act3",
		color: "bg-amber-100 text-amber-700",
	},
	{
		id: 4,
		title: "Ask Me with Puppets",
		description: "Interactive puppet conversations and role-play",
		duration: "10-15 min",
		icon: Users,
		href: "/parent/modules/speech-language/sl-1/act4",
		color: "bg-purple-100 text-purple-700",
	},
	{
		id: 5,
		title: "Guided Show & Tell",
		description: "Describe objects and practice detailed explanations",
		duration: "15-20 min",
		icon: Eye,
		href: "/parent/modules/speech-language/sl-1/act5",
		color: "bg-emerald-100 text-emerald-700",
	},
]

export default function UseLanguageVarietyPage() {
	return (
		<div className="container mx-auto p-4 md:p-6 bg-gradient-to-br from-teal-50 via-gray-50 to-gray-100 min-h-screen">
			<div className="mb-4">
				<Link
					href="/parent/modules/speech-language"
					className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
				>
					<ArrowLeft className="mr-1 h-3 w-3" />
					Back to Speech & Language Development
				</Link>
				<div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">
							Standard 1: Use Language in a Variety of Ways
						</h1>
						<p className="text-gray-600">
							Practice using language for different purposes such as asking, telling,
							describing, and expressing needs
						</p>
					</div>
				</div>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2">
					<Tabs defaultValue="overview" className="w-full">
						<TabsList className="mb-6 bg-white text-gray-700 border border-gray-100 rounded-lg shadow-sm">
							<TabsTrigger
								value="overview"
								className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700"
							>
								Overview
							</TabsTrigger>
							<TabsTrigger
								value="resources"
								className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700"
							>
								Resources
							</TabsTrigger>
						</TabsList>

						<TabsContent value="overview" className="mt-0">
							<Card className="border-gray-200 shadow-sm">
								<CardHeader>
									<CardTitle className="text-teal-700">About This Module</CardTitle>
									<CardDescription>
										Help your child learn to use language for different purposes and in
										various social situations
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div>
										<h3 className="mb-2 font-semibold text-gray-800">
											Learning Objectives
										</h3>
										<ul className="ml-6 list-disc space-y-1 text-gray-700">
											<li>Use language to ask questions and make requests</li>
											<li>Express feelings and emotions through words</li>
											<li>Tell stories and describe experiences</li>
											<li>Engage in back-and-forth conversations</li>
											<li>Use language for different social purposes</li>
										</ul>
									</div>

									<div>
										<h3 className="mb-2 font-semibold text-gray-800">
											Why This Matters
										</h3>
										<p className="text-gray-700">
											Learning to use language in various ways is crucial for your child's
											social and emotional development. This module focuses on helping
											children understand that language serves many purposes - from
											expressing needs and feelings to sharing experiences and building
											relationships. Through engaging activities, your child will practice
											using language as a tool for communication, connection, and
											self-expression.
										</p>
									</div>

									<div>
										<h3 className="mb-2 font-semibold text-gray-800">
											What You'll Practice
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
													<CheckCircle className="h-4 w-4" />
												</div>
												<div>
													<p className="font-medium">Conversational Language</p>
													<p className="text-sm text-gray-600">
														Practice asking questions, sharing experiences, and taking turns in
														conversation
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
													<CheckCircle className="h-4 w-4" />
												</div>
												<div>
													<p className="font-medium">Emotional Expression</p>
													<p className="text-sm text-gray-600">
														Learn to identify and express feelings using appropriate language
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
													<CheckCircle className="h-4 w-4" />
												</div>
												<div>
													<p className="font-medium">Storytelling & Description</p>
													<p className="text-sm text-gray-600">
														Practice describing objects, people, and events in detail
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
													<CheckCircle className="h-4 w-4" />
												</div>
												<div>
													<p className="font-medium">Interactive Communication</p>
													<p className="text-sm text-gray-600">
														Engage in role-play and interactive activities to practice social
														language
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className="pt-4">
										<Link href="/parent/modules/speech-language/sl-1/act1">
											<Button className="w-full rounded-full bg-teal-600 hover:bg-teal-700 sm:w-auto">
												Continue to Activities
											</Button>
										</Link>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="resources" className="mt-0">
							<Card className="border-gray-200 shadow-sm">
								<CardHeader>
									<CardTitle className="text-teal-700">Additional Resources</CardTitle>
									<CardDescription>
										Supplementary materials to support language variety development
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
											<h3 className="mb-2 font-semibold text-gray-800">
												Printable Materials
											</h3>
											<ul className="space-y-2">
												<li>
													<a
														href="#"
														className="flex items-center gap-2 text-teal-600 hover:underline"
													>
														<FileText className="h-4 w-4" />
														<span>
															Emotion Cards for Feelings Activities (PDF)
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex items-center gap-2 text-teal-600 hover:underline"
													>
														<FileText className="h-4 w-4" />
														<span>
															Family Photo Discussion Guide (PDF)
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex items-center gap-2 text-teal-600 hover:underline"
													>
														<FileText className="h-4 w-4" />
														<span>Show & Tell Planning Sheet (PDF)</span>
													</a>
												</li>
											</ul>
										</div>

										<div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
											<h3 className="mb-2 font-semibold text-gray-800">
												Video Resources
											</h3>
											<ul className="space-y-2">
												<li>
													<a
														href="#"
														className="flex items-center gap-2 text-teal-600 hover:underline"
													>
														<Video className="h-4 w-4" />
														<span>
															Encouraging Emotional Expression (8:30)
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex items-center gap-2 text-teal-600 hover:underline"
													>
														<Video className="h-4 w-4" />
														<span>
															Building Conversation Skills (12:15)
														</span>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="flex items-center gap-2 text-teal-600 hover:underline"
													>
														<Video className="h-4 w-4" />
														<span>
															Storytelling Techniques for Parents (10:45)
														</span>
													</a>
												</li>
											</ul>
										</div>

										<div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
											<h3 className="mb-2 font-semibold text-gray-800">
												Tips for Success
											</h3>
											<ul className="space-y-2 text-sm text-gray-700">
												<li>
													• Follow your child's interests and let them lead
													conversations
												</li>
												<li>
													• Use open-ended questions to encourage longer responses
												</li>
												<li>• Model different ways to express the same idea</li>
												<li>• Practice during daily routines like meals and bedtime</li>
												<li>
													• Celebrate all attempts at communication, even if imperfect
												</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>

				<div>
					<Card className="border-gray-200 shadow-sm mt-16 lg:mt-[62px]">
						<CardHeader>
							<CardTitle className="text-teal-700">Module Activities</CardTitle>
							<CardDescription>
								Complete these activities to practice using language in different ways
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								{activities.map((activity) => (
									<Link key={activity.id} href={activity.href}>
										<div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
											<div className={`p-2 rounded-full ${activity.color}`}>
												<activity.icon className="h-4 w-4" />
											</div>
											<div className="flex-1 min-w-0">
												<h3 className="font-medium text-sm text-gray-900 truncate">
													{activity.id}. {activity.title}
												</h3>
												<p className="text-xs text-gray-600 truncate">
													{activity.description}
												</p>
												<div className="flex items-center gap-1 mt-1">
													<Clock className="h-3 w-3 text-gray-400" />
													<span className="text-xs text-gray-500">
														{activity.duration}
													</span>
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
