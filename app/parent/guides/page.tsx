"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Dumbbell, HeartHandshake, MessageSquare, Puzzle } from "lucide-react"
import Link from "next/link"

export default function GuidesPage() {
  return (
    <div className="container p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Developmental Guides</h1>
        <p className="text-gray-600">Browse comprehensive guides for different developmental areas</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DevelopmentalAreaCard
          title="Speech & Language"
          icon={<MessageSquare className="h-6 w-6 text-green-600" />}
          description="Resources to help develop communication skills, vocabulary, and language comprehension."
          href="/parent/guides/speech-language"
        />
        <DevelopmentalAreaCard
          title="Social & Emotional"
          icon={<HeartHandshake className="h-6 w-6 text-green-600" />}
          description="Guides for developing social skills, emotional regulation, and interpersonal relationships."
          href="/parent/guides/social-emotional"
        />
        <DevelopmentalAreaCard
          title="Cognitive"
          icon={<Brain className="h-6 w-6 text-green-600" />}
          description="Resources for developing thinking skills, problem-solving, and learning abilities."
          href="/parent/guides/cognitive"
        />
        <DevelopmentalAreaCard
          title="Motor Skills"
          icon={<Dumbbell className="h-6 w-6 text-green-600" />}
          description="Guides for developing both fine and gross motor skills and coordination."
          href="/parent/guides/motor-skills"
        />
        <DevelopmentalAreaCard
          title="Adaptive Skills"
          icon={<Puzzle className="h-6 w-6 text-green-600" />}
          description="Resources for developing daily living skills and independence."
          href="/parent/guides/adaptive"
        />
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Recently Updated Guides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GuideCard
            title="Building Basic Vocabulary"
            area="Speech & Language"
            icon={<MessageSquare className="h-5 w-5 text-green-600" />}
            description="Techniques to help expand your child's vocabulary through everyday activities."
            href="/parent/guides/speech-language/vocabulary"
          />
          <GuideCard
            title="Understanding Emotions"
            area="Social & Emotional"
            icon={<HeartHandshake className="h-5 w-5 text-green-600" />}
            description="Help your child recognize and express different emotions appropriately."
            href="/parent/guides/social-emotional/emotions"
          />
          <GuideCard
            title="Problem-Solving Activities"
            area="Cognitive"
            icon={<Brain className="h-5 w-5 text-green-600" />}
            description="Simple activities to develop critical thinking and problem-solving skills."
            href="/parent/guides/cognitive/problem-solving"
          />
        </div>
      </div>
    </div>
  )
}

function DevelopmentalAreaCard({
  title,
  icon,
  description,
  href,
}: {
  title: string
  icon: React.ReactNode
  description: string
  href: string
}) {
  return (
    <Link href={href}>
      <Card className="border-green-100 transition-all hover:border-green-200 hover:shadow-md">
        <CardContent className="p-6">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">{icon}</div>
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

function GuideCard({
  title,
  area,
  icon,
  description,
  href,
}: {
  title: string
  area: string
  icon: React.ReactNode
  description: string
  href: string
}) {
  return (
    <Link href={href}>
      <Card className="border-green-100 transition-all hover:border-green-200 hover:shadow-md">
        <CardContent className="p-6">
          <div className="mb-2 flex items-center gap-2">
            {icon}
            <span className="text-sm font-medium text-green-600">{area}</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
