"use client"


import { DevelopmentalPathway } from "@/components/developmental-pathway"
import { ResourcesSection } from "@/components/resources-section"

export default function ModulesPage() {
  // Adaptive Skills pathway modules
  const adaptiveModules = [
    {
      id: "ad-1",
      title: "Self-Help Foundations",
      description: "Activities to develop basic self-care skills like feeding and dressing.",
      status: "completed" as const,
      progress: 100,
      href: "/parent/modules/adaptive/self-help",
      estimatedTime: "4-6 weeks",
      completedActivities: 8,
      totalActivities: 8,
    },
    {
      id: "ad-2",
      title: "Daily Routines & Sequencing",
      description: "Help your child understand and follow daily routines and multi-step sequences.",
      status: "in-progress" as const,
      progress: 75,
      href: "/parent/modules/adaptive/daily-routines",
      estimatedTime: "3-4 weeks",
      completedActivities: 3,
      totalActivities: 4,
    },
    {
      id: "ad-3",
      title: "Functional Communication",
      description: "Develop communication skills for expressing needs and wants in everyday situations.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/adaptive/functional-communication",
    },
    {
      id: "ad-4",
      title: "Community & Safety Skills",
      description: "Activities to develop awareness of safety rules and community navigation.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/adaptive/community-safety",
    },
  ]

  return (
    <>
      <div className="container mx-auto p-4 md:p-6">
       <DevelopmentalPathway
            title="Adaptive Skills Development"
            description="Modules to support self-help, daily living, and functional independence"
            modules={adaptiveModules}
        />
      </div>
    </>
  )
}
