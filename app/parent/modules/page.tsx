"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, HeartHandshake, MessageSquare, Dumbbell, Puzzle } from "lucide-react"
import Link from "next/link"

export default function ModulesPage() {
  return (
    <div className="container p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Activity Modules</h1>
        <p className="text-gray-600">Interactive learning modules to support your child's development</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 bg-white text-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            All Modules
          </TabsTrigger>
          <TabsTrigger value="speech" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Speech & Language
          </TabsTrigger>
          <TabsTrigger value="social" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Social & Emotional
          </TabsTrigger>
          <TabsTrigger value="cognitive" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Cognitive
          </TabsTrigger>
          <TabsTrigger value="motor" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Motor Skills
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ModuleCard
              title="Basic Communication Skills"
              area="Speech & Language"
              icon={<MessageSquare className="h-5 w-5 text-green-600" />}
              description="Activities to develop basic communication skills and vocabulary."
              progress={20}
              href="/parent/modules/speech-language/basic-communication"
            />
            <ModuleCard
              title="Emotional Recognition"
              area="Social & Emotional"
              icon={<HeartHandshake className="h-5 w-5 text-green-600" />}
              description="Learn to identify and express different emotions."
              progress={0}
              href="/parent/modules/social-emotional/emotional-recognition"
            />
            <ModuleCard
              title="Problem Solving"
              area="Cognitive"
              icon={<Brain className="h-5 w-5 text-green-600" />}
              description="Activities to develop problem-solving skills."
              progress={0}
              href="/parent/modules/cognitive/problem-solving"
            />
            <ModuleCard
              title="Fine Motor Skills"
              area="Motor Skills"
              icon={<Dumbbell className="h-5 w-5 text-green-600" />}
              description="Activities to improve hand-eye coordination and fine motor control."
              progress={0}
              href="/parent/modules/motor-skills/fine-motor"
            />
            <ModuleCard
              title="Daily Living Skills"
              area="Adaptive Skills"
              icon={<Puzzle className="h-5 w-5 text-green-600" />}
              description="Activities to develop independence in daily tasks."
              progress={0}
              href="/parent/modules/adaptive/daily-living"
            />
            <ModuleCard
              title="Sentence Building"
              area="Speech & Language"
              icon={<MessageSquare className="h-5 w-5 text-green-600" />}
              description="Activities to help form simple and complex sentences."
              progress={0}
              href="/parent/modules/speech-language/sentence-building"
            />
          </div>
        </TabsContent>

        <TabsContent value="speech" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ModuleCard
              title="Basic Communication Skills"
              area="Speech & Language"
              icon={<MessageSquare className="h-5 w-5 text-green-600" />}
              description="Activities to develop basic communication skills and vocabulary."
              progress={20}
              href="/parent/modules/speech-language/basic-communication"
            />
            <ModuleCard
              title="Sentence Building"
              area="Speech & Language"
              icon={<MessageSquare className="h-5 w-5 text-green-600" />}
              description="Activities to help form simple and complex sentences."
              progress={0}
              href="/parent/modules/speech-language/sentence-building"
            />
            <ModuleCard
              title="Conversation Skills"
              area="Speech & Language"
              icon={<MessageSquare className="h-5 w-5 text-green-600" />}
              description="Activities to develop back-and-forth conversation abilities."
              progress={0}
              href="/parent/modules/speech-language/conversation"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
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
    <Card className="border-green-100 transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-2 flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium text-green-600">{area}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="mb-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Progress</span>
            <span className="text-xs font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5 bg-green-100" />
        </div>
        <Link href={href}>
          <Button className="w-full rounded-full bg-green-600 hover:bg-green-700">
            {progress > 0 ? "Continue" : "Start"} Module
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
