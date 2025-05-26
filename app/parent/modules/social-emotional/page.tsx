"use client"


import { DevelopmentalPathway } from "@/components/developmental-pathway"
import { ResourcesSection } from "@/components/resources-section"

export default function ModulesPage() {
  // Social & Emotional pathway modules
  const socialEmotionalModules = [
    {
      id: "se-1",
      title: "Emotional Recognition & Expression",
      description: "Help your child identify and express different emotions appropriately.",
      status: "in-progress" as const,
      progress: 15,
      href: "/parent/modules/social-emotional/emotional-recognition",
      estimatedTime: "3-4 weeks",
      completedActivities: 1,
      totalActivities: 6,
    },
    {
      id: "se-2",
      title: "Self-Regulation Strategies",
      description: "Techniques to help your child manage emotions and behavior in different situations.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/social-emotional/self-regulation",
    },
    {
      id: "se-3",
      title: "Social Interaction Skills",
      description: "Activities to develop turn-taking, sharing, and cooperative play with peers.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/social-emotional/social-interaction",
    },
    {
      id: "se-4",
      title: "Empathy & Perspective Taking",
      description: "Help your child understand others' feelings and perspectives.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/social-emotional/empathy",
    },
  ]

  // Enrolled modules for resources section
  const enrolledModules = [
    {
      id: "act-4",
      title: "Self-Regulation Strategies",
      type: "suggested" as const,
      href: "/parent/modules/social-emotional/self-regulation",
      areaName: "Social & Emotional",
    },
  ]

  return (
    <>
      <div className="container mx-auto p-4 md:p-6">
        <DevelopmentalPathway
            title="Social & Emotional Development"
            description="Modules to support emotional understanding, self-regulation, and social interaction"
            modules={socialEmotionalModules}
        />
      </div>
    </>
  )
}
