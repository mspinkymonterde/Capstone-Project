"use client"


import { DevelopmentalPathway } from "@/components/developmental-pathway"
import { ResourcesSection } from "@/components/resources-section"

export default function ModulesPage() {
  // Cognitive pathway modules
  const cognitiveModules = [
    {
      id: "cog-1",
      title: "Sensory Exploration & Object Permanence",
      description: "Activities to develop understanding that objects continue to exist even when they cannot be seen.",
      status: "completed" as const,
      progress: 100,
      href: "/parent/modules/cognitive/sensory-exploration",
      estimatedTime: "3-4 weeks",
      completedActivities: 6,
      totalActivities: 6,
    },
    {
      id: "cog-2",
      title: "Cause & Effect Understanding",
      description: "Help your child understand how their actions can cause predictable reactions.",
      status: "in-progress" as const,
      progress: 25,
      href: "/parent/modules/cognitive/cause-effect",
      estimatedTime: "2-3 weeks",
      completedActivities: 1,
      totalActivities: 4,
    },
    {
      id: "cog-3",
      title: "Symbolic Play & Pretending",
      description: "Activities to encourage pretend play and using objects to represent other things.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/cognitive/symbolic-play",
    },
    {
      id: "cog-4",
      title: "Problem Solving & Critical Thinking",
      description: "Develop your child's ability to solve problems and think critically about situations.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/cognitive/problem-solving",
    },
  ]


  // Enrolled modules for resources section
  const enrolledModules = [
    {
      id: "cog-2",
      title: "Cause & Effect Understanding",
      area: "Cognitive",
      progress: 25,
      href: "/parent/modules/cognitive/cause-effect",
      status: "in-progress" as const,
    },
  ]

  return (
    <>
        <div className='container mx-auto p-4 md:p-6'>
            <DevelopmentalPathway
                title="Cognitive Development"
                description="Modules to support thinking, learning, problem-solving, and understanding"
                modules={cognitiveModules}
            />
        </div>
    </>
  )
}
