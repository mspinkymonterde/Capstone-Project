"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, ChevronLeft, ChevronRight, MessageSquare, PlayCircle } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export default function BasicCommunicationModule() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5
  const { toast } = useToast()

  const handleComplete = () => {
    toast({
      title: "Module completed!",
      description: "Congratulations! You've completed this module.",
    })
  }

  return (
    <div className="container p-6">
      <div className="mb-6">
        <Link
          href="/parent/modules"
          className="mb-4 flex items-center gap-2 text-sm text-gray-600 hover:text-green-600"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Modules
        </Link>

        <h1 className="text-2xl font-bold text-gray-900">Basic Communication Skills</h1>
        <p className="text-gray-600">Activities to develop basic communication skills and vocabulary</p>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-600" />
            <span className="font-medium">Module Progress</span>
          </div>
          <span className="text-sm font-medium">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <Progress
          value={(currentStep / totalSteps) * 100}
          className="h-2 bg-green-100"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <ModuleStep
              title="Introduction to Basic Communication"
              description="Learn about the importance of communication skills and how they develop."
            >
              <div className="space-y-4">
                <p>
                  Communication is one of the most important skills for your child's development. It includes not just
                  speaking, but also listening, understanding, and non-verbal communication like gestures and facial
                  expressions.
                </p>
                <p>
                  For children with special needs, communication development may follow a different timeline or path,
                  but with the right support and activities, significant progress can be made.
                </p>
                <div className="rounded-lg bg-green-50 p-4">
                  <h4 className="mb-2 font-medium">Key Points:</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Communication includes verbal and non-verbal skills</li>
                    <li>Development varies for each child</li>
                    <li>Consistent practice and reinforcement are essential</li>
                    <li>Celebrate small achievements along the way</li>
                  </ul>
                </div>
              </div>
            </ModuleStep>
          )}

          {currentStep === 2 && (
            <ModuleStep
              title="Building Vocabulary"
              description="Activities to help expand your child's vocabulary through everyday interactions."
            >
              <div className="space-y-4">
                <p>
                  Vocabulary development is a crucial part of communication. Here are some activities you can do at home
                  to help expand your child's vocabulary:
                </p>
                <div className="rounded-lg border border-green-100 p-4">
                  <h4 className="mb-2 font-medium">Activity 1: Labeling Objects</h4>
                  <p className="mb-2">Point to and name common objects around your home during daily routines.</p>
                  <div className="rounded bg-green-50 p-3">
                    <p className="text-sm">
                      <strong>How to do it:</strong> During mealtime, name foods, utensils, and actions. "This is an
                      apple. It's red. We eat the apple."
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-100 p-4">
                  <h4 className="mb-2 font-medium">Activity 2: Picture Books</h4>
                  <p className="mb-2">Use picture books to introduce new words and concepts.</p>
                  <div className="rounded bg-green-50 p-3">
                    <p className="text-sm">
                      <strong>How to do it:</strong> Look at pictures together and name what you see. Ask simple
                      questions like "Where is the dog?" or "What color is the ball?"
                    </p>
                  </div>
                </div>
              </div>
            </ModuleStep>
          )}

          {currentStep === 3 && (
            <ModuleStep
              title="Non-verbal Communication"
              description="Understanding and developing gestures and facial expressions."
            >
              <div className="space-y-4">
                <p>
                  Non-verbal communication is just as important as verbal communication. It includes gestures, facial
                  expressions, body language, and eye contact.
                </p>
                <div className="rounded-lg border border-green-100 p-4">
                  <h4 className="mb-2 font-medium">Activity 1: Mirror Play</h4>
                  <p className="mb-2">Use a mirror to practice different facial expressions together.</p>
                  <div className="rounded bg-green-50 p-3">
                    <p className="text-sm">
                      <strong>How to do it:</strong> Make happy, sad, surprised, and other expressions in the mirror.
                      Name the emotions as you show them.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-100 p-4">
                  <h4 className="mb-2 font-medium">Activity 2: Gesture Games</h4>
                  <p className="mb-2">Practice common gestures like waving, pointing, and nodding.</p>
                  <div className="rounded bg-green-50 p-3">
                    <p className="text-sm">
                      <strong>How to do it:</strong> Play games like "Simon Says" with simple gestures. Praise your
                      child when they use gestures appropriately.
                    </p>
                  </div>
                </div>
              </div>
            </ModuleStep>
          )}

          {currentStep === 4 && (
            <ModuleStep
              title="Turn-Taking in Communication"
              description="Learning the back-and-forth pattern of conversation."
            >
              <div className="space-y-4">
                <p>
                  Turn-taking is a fundamental skill for conversation. It teaches children that communication involves
                  both speaking and listening in turns.
                </p>
                <div className="rounded-lg border border-green-100 p-4">
                  <h4 className="mb-2 font-medium">Activity 1: Ball Rolling</h4>
                  <p className="mb-2">Roll a ball back and forth to practice the concept of turn-taking.</p>
                  <div className="rounded bg-green-50 p-3">
                    <p className="text-sm">
                      <strong>How to do it:</strong> Sit facing your child and roll a ball to them. Say "my turn" when
                      you roll, and "your turn" when they should roll it back.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-100 p-4">
                  <h4 className="mb-2 font-medium">Activity 2: Simple Conversations</h4>
                  <p className="mb-2">Practice simple back-and-forth exchanges.</p>
                  <div className="rounded bg-green-50 p-3">
                    <p className="text-sm">
                      <strong>How to do it:</strong> Ask simple questions that your child can answer, like "Do you want
                      juice?" Wait for their response before continuing.
                    </p>
                  </div>
                </div>
              </div>
            </ModuleStep>
          )}

          {currentStep === 5 && (
            <ModuleStep
              title="Putting It All Together"
              description="Integrating skills into daily routines and tracking progress."
            >
              <div className="space-y-4">
                <p>
                  The key to developing communication skills is consistency and integration into daily life. Here's how
                  to incorporate what you've learned into your routines:
                </p>
                <div className="rounded-lg bg-green-50 p-4">
                  <h4 className="mb-2 font-medium">Daily Practice Tips:</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Set aside 10-15 minutes each day for focused communication activities</li>
                    <li>Narrate your daily activities to provide language exposure</li>
                    <li>Respond to your child's communication attempts, even if non-verbal</li>
                    <li>Create opportunities for your child to request things</li>
                    <li>Be patient and celebrate small improvements</li>
                  </ul>
                </div>
                <p>
                  Remember to track your child's progress. Note new words, gestures, or communication attempts in a
                  journal or the progress tracker in this app.
                </p>
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <h4 className="mb-2 flex items-center gap-2 font-medium text-green-700">
                    <CheckCircle2 className="h-5 w-5" />
                    Congratulations!
                  </h4>
                  <p>
                    You've completed the Basic Communication Skills module. Continue practicing these activities and
                    check out the related modules for more advanced communication skills.
                  </p>
                </div>
              </div>
            </ModuleStep>
          )}

          <div className="mt-6 flex items-center justify-between">
            <Button
              variant="outline"
              className="border-green-200 text-green-700 hover:bg-green-50"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700" onClick={handleComplete}>
                Complete Module
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="border-green-100 sticky top-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Module Resources</CardTitle>
              <CardDescription>Additional materials and videos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-green-100 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-green-600" />
                  <h4 className="font-medium">Instructional Video</h4>
                </div>
                <p className="mb-2 text-sm text-gray-600">Watch this video demonstration of the activities.</p>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  Watch Video
                </Button>
              </div>

              <div className="rounded-lg border border-green-100 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <h4 className="font-medium">Printable Materials</h4>
                </div>
                <p className="mb-2 text-sm text-gray-600">Download flashcards and activity sheets.</p>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  Download PDF
                </Button>
              </div>

              <Separator className="my-2" />

              <div>
                <h4 className="mb-2 font-medium">Related Modules</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/parent/modules/speech-language/sentence-building"
                      className="text-sm text-green-600 hover:underline"
                    >
                      Sentence Building
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/parent/modules/speech-language/conversation"
                      className="text-sm text-green-600 hover:underline"
                    >
                      Conversation Skills
                    </Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ModuleStep({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <Card className="border-green-100">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
