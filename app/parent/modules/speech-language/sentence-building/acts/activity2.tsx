"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Play, Pause, CheckCircle, PenTool, Lightbulb } from "lucide-react"
import Link from "next/link"

const videoSections = [
  {
    id: 1,
    title: "Understanding Communication Attempts",
    duration: "3:45",
    description: "Learn to recognize the different ways children communicate before they can speak.",
    keyPoints: [
      "Eye contact and facial expressions",
      "Body language and gestures",
      "Vocalizations and sounds",
      "Behavioral communication",
    ],
  },
  {
    id: 2,
    title: "Responsive Communication Strategies",
    duration: "4:20",
    description: "Discover effective ways to respond that encourage more communication.",
    keyPoints: ["Follow your child's lead", "Expand on their attempts", "Use parallel talk", "Wait for responses"],
  },
  {
    id: 3,
    title: "Creating Communication Opportunities",
    duration: "2:30",
    description: "Simple techniques to naturally encourage communication throughout the day.",
    keyPoints: [
      "Environmental setup",
      "Routine-based opportunities",
      "Playful interactions",
      "Daily living activities",
    ],
  },
]

const reflectionQuestions = [
  "What communication attempts have you noticed from your child that you might have missed before?",
  "Which responsive strategy do you think would work best with your child's current communication level?",
  "How can you create more communication opportunities during your daily routines?",
]

export default function Activity2Page() {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<number[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [notes, setNotes] = useState("")
  const [reflectionAnswers, setReflectionAnswers] = useState<string[]>(["", "", ""])
  const [showReflection, setShowReflection] = useState(false)

  const markSectionComplete = (sectionId: number) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId])
    }
  }

  const nextSection = () => {
    markSectionComplete(currentSection)
    if (currentSection < videoSections.length - 1) {
      setCurrentSection(currentSection + 1)
      setIsPlaying(false)
    } else {
      setShowReflection(true)
    }
  }

  const updateReflectionAnswer = (index: number, value: string) => {
    const newAnswers = [...reflectionAnswers]
    newAnswers[index] = value
    setReflectionAnswers(newAnswers)
  }

  const progress = (completedSections.length / videoSections.length) * 100

  if (showReflection) {
    return (
      <div className="container mx-auto p-4 md:p-6 max-w-4xl">
        <div className="mb-6">
          <Link
            href="/parent/modules/speech-language/early-communication"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-1 h-3 w-3" />
            Back to Module
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PenTool className="h-5 w-5 text-teal-600" />
              Reflection & Application
            </CardTitle>
            <CardDescription>Take a moment to reflect on what you've learned and how you'll apply it</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {reflectionQuestions.map((question, index) => (
              <div key={index} className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">
                  {index + 1}. {question}
                </Label>
                <Textarea
                  placeholder="Share your thoughts..."
                  value={reflectionAnswers[index]}
                  onChange={(e) => updateReflectionAnswer(index, e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            ))}

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-teal-800 mb-2">Key Takeaways</h4>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• Every child communicates - learn to recognize their unique style</li>
                    <li>• Your response matters - it either encourages or discourages communication</li>
                    <li>• Small changes in daily routines can create big communication opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/parent/modules/speech-language/early-communication/activity-3" className="flex-1">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Continue to Next Activity</Button>
                </Link>
                <Button variant="outline" onClick={() => window.print()} className="flex-1">
                  Save Notes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const section = videoSections[currentSection]

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-4xl">
      <div className="mb-6">
        <Link
          href="/parent/modules/speech-language/early-communication"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Back to Module
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Responding to Communication Attempts</CardTitle>
                  <CardDescription>
                    Section {currentSection + 1} of {videoSections.length}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-teal-600">{Math.round(progress)}% Complete</div>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            <CardContent>
              {/* Video Player Placeholder */}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4" style={{ aspectRatio: "16/9" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white/20 hover:bg-white/30 text-white"
                  >
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{section.title}</h3>
                  <p className="text-sm opacity-90">{section.duration}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">About This Section</h4>
                  <p className="text-gray-600">{section.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Learning Points</h4>
                  <ul className="space-y-2">
                    {section.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-600" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button onClick={nextSection} className="w-full bg-teal-600 hover:bg-teal-700">
                    {currentSection === videoSections.length - 1 ? "Complete Section" : "Next Section"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Notes</CardTitle>
              <CardDescription>Jot down key insights as you watch</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your notes here..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[200px] mb-4"
              />
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {videoSections.map((section, index) => (
                  <div
                    key={section.id}
                    className={`flex items-center gap-3 p-2 rounded-lg ${
                      completedSections.includes(index)
                        ? "bg-green-50 border border-green-200"
                        : index === currentSection
                          ? "bg-teal-50 border border-teal-200"
                          : "bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        completedSections.includes(index)
                          ? "bg-green-100 text-green-600"
                          : index === currentSection
                            ? "bg-teal-100 text-teal-600"
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {completedSections.includes(index) ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span className="text-xs font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{section.title}</div>
                      <div className="text-xs text-gray-500">{section.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
