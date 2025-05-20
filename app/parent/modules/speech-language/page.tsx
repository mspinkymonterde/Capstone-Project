"use client"


import { DevelopmentalPathway } from "@/components/developmental-pathway"
import { ResourcesSection } from "@/components/resources-section"

export default function ModulesPage() {
  // Speech & Language pathway modules
  const speechLanguageModules = [
    {
      id: "sl-1",
      title: "Early Communication Foundations",
      description:
        "Learn to recognize and respond to your child's early communication attempts and build foundational skills.",
      status: "in-progress" as const,
      progress: 60,
      href: "/parent/modules/speech-language/sentence-building",
      estimatedTime: "2-3 weeks",
      completedActivities: 3,
      totalActivities: 5,
    },
    {
      id: "sl-2",
      title: "Building Vocabulary & Simple Sentences",
      description: "Techniques to expand vocabulary and help your child form simple sentences and phrases.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/speech-language/vocabulary-sentences",
    },
    {
      id: "sl-3",
      title: "Conversation Skills Development",
      description: "Activities to develop turn-taking, topic maintenance, and back-and-forth conversation abilities.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/speech-language/conversation-skills",
    },
    {
      id: "sl-4",
      title: "Narrative & Storytelling",
      description: "Help your child develop the ability to tell stories and recount events in sequence.",
      status: "locked" as const,
      progress: 0,
      href: "/parent/modules/speech-language/storytelling",
    },
  ]

  // Enrolled modules for resources section
  const enrolledModules = [
    {
      id: "sl-1",
      title: "Early Communication Foundations",
      area: "Speech & Language",
      progress: 60,
      href: "/parent/modules/speech-language/early-communication",
      status: "in-progress" as const,
    },
  ]

  return (
    <>
      <div className="container mx-auto p-4 md:p-6">
          <div>
                <DevelopmentalPathway
                  title="Speech & Language Development"
                  description="Modules to support communication skills development and language acquisition"
                  modules={speechLanguageModules}
                />
          </div>
      </div>
    </>
  )
}
