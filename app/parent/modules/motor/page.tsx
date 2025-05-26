"use client"


import { DevelopmentalPathway } from "@/components/developmental-pathway"
import { ResourcesSection } from "@/components/resources-section"

export default function ModulesPage() {
  // Motor Skills pathway modules
  const motorSkillsModules = [
    {
      id: "ms-1",
      title: "Core Strength & Stability",
      description: "Activities to develop core muscles that support sitting, standing, and movement.",
      status: "completed" as const,
      progress: 100,
      href: "/parent/modules/motor-skills/core-strength",
      estimatedTime: "4 weeks",
      completedActivities: 7,
      totalActivities: 7,
    },
    {
      id: "ms-2",
      title: "Gross Motor Coordination",
      description: "Activities to develop large muscle groups and whole-body coordination.",
      status: "completed" as const,
      progress: 100,
      href: "/parent/modules/motor-skills/gross-motor",
      estimatedTime: "3-4 weeks",
      completedActivities: 5,
      totalActivities: 5,
    },
    {
      id: "ms-3",
      title: "Fine Motor Precision",
      description: "Activities to develop hand-eye coordination and small muscle control.",
      status: "in-progress" as const,
      progress: 40,
      href: "/parent/modules/motor-skills/fine-motor",
      estimatedTime: "3-4 weeks",
      completedActivities: 2,
      totalActivities: 5,
    },
    {
      id: "ms-4",
      title: "Visual-Motor Integration",
      description: "Activities that combine visual perception with coordinated body movements.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/motor-skills/visual-motor",
    },
  ]

  // Enrolled modules for resources section
  const enrolledModules = [
    {
      id: "ms-3",
      title: "Fine Motor Precision",
      area: "Motor Skills",
      progress: 40,
      href: "/parent/modules/motor-skills/fine-motor",
      status: "in-progress" as const,
    },
  ]

  // Recent activity for resources section
  const recentActivity = [
    {
      id: "act-3",
      title: "Gross Motor Coordination Module",
      type: "completed" as const,
      date: "3 days ago",
      href: "/parent/modules/motor-skills/gross-motor",
      areaName: "Motor Skills",
    },
  ]

  return (
    <>
      <div className="container mx-auto p-4 md:p-6">
        <DevelopmentalPathway
            title="Motor Skills Development"
            description="Modules to support physical movement, coordination, and body control"
             modules={motorSkillsModules}
        />
      </div>
    </>
  )
}
