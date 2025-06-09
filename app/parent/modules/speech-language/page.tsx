"use client"

import { DevelopmentalPathway } from "@/components/developmental-pathway"
import { useAuth } from "@/components/auth-provider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useMemo } from "react"

import type { ModuleStatus } from "@/components/developmental-pathway"

type AgeGroup = {
  key: string
  label: string
  min: number
  max: number
}

const ageGroups: AgeGroup[] = [
  { key: "all", label: "All", min: 0, max: 99 },
  { key: "0-3", label: "0-3 yrs", min: 0, max: 3 },
  { key: "3-5", label: "3-5 yrs", min: 3, max: 5 },
  { key: "5-7", label: "5-7 yrs", min: 5, max: 7 },
]

const modulesByAge: Record<string, Array<{
  id: string
  title: string
  description: string
  status: ModuleStatus
  progress: number
  href: string
}>> = {
  "0-3": [
    {
      id: "sl-1",
      title: "Responding to Sounds and Voices",
      description: "Sound imitation games and facial mirroring to encourage early communication.",
      status: "in-progress" as ModuleStatus,
      progress: 100,
      href: "",
    },
    {
      id: "sl-2",
      title: "Encouraging Cooing and Babbling",
      description: "Talking during routines and soft vocal play to promote cooing and babbling.",
      status: "in-progress" as ModuleStatus,
      progress: 100,
      href: "",
    },
    {
      id: "sl-3",
      title: "Building Eye Contact and Listening",
      description: "Peek-a-boo and soft background music play to support eye contact and listening.",
      status: "in-progress" as ModuleStatus,
      progress: 100,
      href: "",
    },
    {
      id: "sl-4",
      title: "Babble to First Words",
      description: "Encouraging repeated syllables and imitating words.",
      status: "in-progress" as ModuleStatus,
      progress: 100,
      href: "",
    },
    {
      id: "sl-5",
      title: "Understanding Simple Words",
      description: "Teach familiar objects: 'ball', 'mama', 'milk'.",
      status: "in-progress" as ModuleStatus,
      progress: 100,
      href: "",
    },
    {
      id: "sl-6",
      title: "Naming Objects and People",
      description: "Pointing games and photo labeling.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "sl-7",
      title: "Expanding Vocabulary",
      description: "Naming games and daily item labeling to build vocabulary.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "sl-8",
      title: "Simple Phrases and 2-Word Combos",
      description: "Promoting phrases like “want milk” or “go out”.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "sl-9",
      title: "Following Simple Directions",
      description: "Games like “Give me the toy” and “Clap your hands”.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "sl-10",
      title: "Answering Questions",
      description: "Practice with “What’s that?”, “Where is…” questions.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "sl-11",
      title: "Using Pronouns and Plurals",
      description: "Games with dolls and daily conversation prompts.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "sl-12",
      title: "Describing Actions",
      description: "Using verbs like “jump”, “eat”, “sleep”.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
  ],
  "3-5": [
    {
      id: "lang-1",
      title: "Use Language in a Variety of Ways",
      description: "Practice using language for different purposes such as asking, telling, describing, and expressing needs.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "/parent/modules/speech-language/sl-1",
    },
    {
      id: "lang-2",
      title: "Listen and Understand Different Ways People Speak",
      description: "Listen to stories, conversations, and observe how people communicate in various ways.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "lang-3",
      title: "Expand Vocabulary and Sentence Structure",
      description: "Gradually use more words and form correct sentences through play and daily routines.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "lang-4",
      title: "Recognize and Use Symbols",
      description: "Identify and use symbols, such as letters, numbers, and signs, in the environment.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "lang-5",
      title: "Enjoy and Understand Books",
      description: "Listen to and discuss stories, showing understanding and enjoyment of books.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "lang-6",
      title: "Show Interest in Writing",
      description: "Explore drawing and writing, showing curiosity about making marks and letters.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "lang-7",
      title: "Understand That Print Has Meaning",
      description: "Recognize that written words and symbols carry meaning in books and signs.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
    {
      id: "lang-8",
      title: "Acquire Emergent Literacy Skills",
      description: "Develop pre-reading and pre-writing skills by exploring print in books and the environment.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "",
    },
  ],
  "5-7": [
    {
      id: "sl-19",
      title: "Conversational Skills",
      description: "Back-and-forth talk and staying on topic.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "/parent/modules/speech-language/sl-19",
    },
    {
      id: "sl-20",
      title: "Language for Learning",
      description: "Using “first, next, last” and retelling events.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "/parent/modules/speech-language/sl-20",
    },
    {
      id: "sl-21",
      title: "Vocabulary Expansion and Context",
      description: "Introducing new words through context clues.",
      status: "in-progress" as ModuleStatus,
      progress: 0,
      href: "/parent/modules/speech-language/sl-21",
    },
  ],
}

export default function ModulesPage() {
  const { user } = useAuth()
  const child = user?.childrenInfo?.[0]
  const childAge = child?.age || 0

  // Default tab is based on child's age group
  const defaultTab = useMemo(() => {
    const found = ageGroups.find((g) => childAge >= g.min && childAge < g.max)
    return found?.key || ageGroups[0].key
  }, [childAge])

  const [activeTab, setActiveTab] = useState(defaultTab)

  // Gather all modules for "All" tab
  const allModules = Object.values(modulesByAge).flat()

  return (
    <>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Speech & Language Development</h1>
          <p className="text-gray-700 mb-6">
            Modules to support communication skills development and language acquisition
          </p>
          <Tabs value={activeTab} defaultValue={defaultTab} onValueChange={setActiveTab} className="w-full mb-6">
            <TabsList className="mb-6 bg-white text-gray-700 border border-gray-100 rounded-lg shadow-sm">
              {ageGroups.map((group) => (
                <TabsTrigger
                  key={group.key}
                  value={group.key}
                  className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700"
                >
                  {group.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          {ageGroups.map((group) =>
            activeTab === group.key ? (
              <DevelopmentalPathway
                key={group.key}
                title=""
                description=""
                modules={
                  group.key === "all"
                    ? allModules
                    : modulesByAge[group.key] || []
                }
              />
            ) : null
          )}
        </div>
      </div>
    </>
  )
}
