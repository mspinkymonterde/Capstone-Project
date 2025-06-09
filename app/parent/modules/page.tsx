"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, HeartHandshake, MessageSquare, Dumbbell, Puzzle } from "lucide-react"
import Link from "next/link"

// --- Only modules that are "on progress" and present in the developmental path/enrolledModules ---
// These are gathered from each developmental path's enrolledModules array

const enrolledModules = [
	// Speech & Language
	{
		key: "sl-1",
		title: "Early Communication Foundations",
		area: "Speech & Language",
		icon: <MessageSquare className="h-5 w-5 text-teal-600" />,
		description: "Learn to recognize and respond to your child's early communication attempts and build foundational skills.",
		progress: 60,
		href: "/parent/modules/speech-language/sentence-building",
		track: "speech",
	},
	// Social & Emotional
	{
		key: "se-1",
		title: "Emotional Recognition & Expression",
		area: "Social & Emotional",
		icon: <HeartHandshake className="h-5 w-5 text-teal-600" />,
		description: "Help your child identify and express different emotions appropriately.",
		progress: 15,
		href: "/parent/modules/social-emotional/emotional-recognition",
		track: "social",
	},
	// Cognitive
  {
    key: "cog-2",
    title: "Cause & Effect Understanding",
    area: "Cognitive",
    icon: <Brain className="h-5 w-5 text-teal-600" />,
    description: "Help your child understand how their actions can cause predictable reactions.",
    progress: 25,
    href: "/parent/modules/cognitive/cause-effect",
    track: "cognitive",
  },
	// Motor Skills
	{
		key: "ms-3",
		title: "Fine Motor Precision",
		area: "Motor",
		icon: <Dumbbell className="h-5 w-5 text-teal-600" />,
		description: "Activities to develop hand-eye coordination and small muscle control.",
		progress: 40,
		href: "/parent/modules/motor-skills/fine-motor",
		track: "motor",
	},
	// Adaptive
	{
		key: "ad-2",
		title: "Daily Routines & Sequencing",
		area: "Adaptive",
		icon: <Puzzle className="h-5 w-5 text-teal-600" />,
		description: "Help your child understand and follow daily routines and multi-step sequences.",
		progress: 75,
		href: "/parent/modules/adaptive/daily-routines",
		track: "adaptive",
	},
]

// Helper to filter modules by track
const getModulesByTrack = (track: string) =>
	track === "all"
		? enrolledModules
		: enrolledModules.filter((mod) => mod.track === track)

export default function ModulesPage() {
	return (
		<div className="container p-6 ">
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-teal-800">Activity Modules</h1>
				<p className="text-gray-700">Interactive learning modules to support your child's development</p>
			</div>

			<Tabs defaultValue="all" className="w-full">
				<TabsList className="mb-6 bg-white text-gray-700 border border-gray-100 rounded-lg shadow-sm">
					<TabsTrigger value="all" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
						All
					</TabsTrigger>
					<TabsTrigger value="speech" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
						Speech & Language
					</TabsTrigger>
          <TabsTrigger value="cognitive" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
						Cognitive
					</TabsTrigger>
          <TabsTrigger value="motor" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
						Motor Skills
					</TabsTrigger>
					<TabsTrigger value="social" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
						Social & Emotional
					</TabsTrigger>
					<TabsTrigger value="adaptive" className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700">
						Adaptive Skills
					</TabsTrigger>
				</TabsList>

				{["all", "speech", "social", "motor", "cognitive", "adaptive"].map((track) => (
					<TabsContent key={track} value={track} className="mt-0">
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{getModulesByTrack(track).length === 0 ? (
								<div className="col-span-full text-gray-500 text-center py-8">
									No modules in progress for this track.
								</div>
							) : (
								getModulesByTrack(track).map((mod) => (
									<ModuleCard
										key={mod.key}
										title={mod.title}
										area={mod.area}
										icon={mod.icon}
										description={mod.description}
										progress={mod.progress}
										href={mod.href}
									/>
								))
							)}
						</div>
					</TabsContent>
				))}
			</Tabs>
		</div>
	)
}

function ModuleCard({
	title,
	area,
	icon,
	description,
	progress,
	href,
}: {
	title: string
	area: string
	icon: React.ReactNode
	description: string
	progress: number
	href: string
}) {
	return (
		<Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm transition-shadow hover:shadow-lg hover:scale-[1.02]">
			<CardContent className="p-6">
				<div className="mb-2 flex items-center gap-2">
					{icon}
					<span className="text-sm font-medium text-teal-700">{area}</span>
				</div>
				<h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
				<p className="mb-4 text-sm text-gray-600">{description}</p>
				<div className="mb-4 space-y-2">
					<div className="flex items-center justify-between">
						<span className="text-xs text-gray-500">Progress</span>
						<span className="text-xs font-medium text-teal-700">{progress}%</span>
					</div>
					<Progress value={progress} className="h-1.5 bg-gray-200 [&>*]:bg-gradient-to-r [&>*]:from-teal-400 [&>*]:to-teal-600" />
				</div>
				<Link href={href}>
					<Button className="w-full rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-semibold">
						Continue Module
					</Button>
				</Link>
			</CardContent>
		</Card>
	)
}
