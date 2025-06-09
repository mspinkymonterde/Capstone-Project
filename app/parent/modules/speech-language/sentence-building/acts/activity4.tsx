"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Clock, CheckCircle, Plus, Lightbulb } from "lucide-react"
import Link from "next/link"

const routineCategories = [
  {
    id: "morning",
    title: "Morning Routine",
    icon: "🌅",
    activities: [
      {
        id: "wake-up",
        name: "Waking Up",
        opportunities: [
          "Say 'good morning' and wait for any response",
          "Ask 'How did you sleep?' using simple words",
          "Let child choose between two breakfast options",
        ],
        tips: "Use a cheerful voice and give your child time to respond, even if it's just a smile or gesture.",
      },
      {
        id: "breakfast",
        name: "Breakfast Time",
        opportunities: [
          "Offer choices: 'Cereal or toast?'",
          "Practice 'more' and 'all done' during eating",
          "Name foods as you prepare them",
        ],
        tips: "Pause before giving more food to encourage communication attempts.",
      },
      {
        id: "getting-dressed",
        name: "Getting Dressed",
        opportunities: [
          "Let child choose between two outfit options",
          "Practice body parts: 'Put your arm in the sleeve'",
          "Use action words: 'pull', 'push', 'zip'",
        ],
        tips: "Make dressing playful with songs or counting.",
      },
    ],
  },
  {
    id: "play",
    title: "Play Time",
    icon: "🎮",
    activities: [
      {
        id: "toy-play",
        name: "Toy Play",
        opportunities: [
          "Practice turn-taking: 'My turn, your turn'",
          "Use descriptive words: 'big', 'little', 'red'",
          "Ask 'What's this?' and wait for responses",
        ],
        tips: "Follow your child's lead and expand on their interests.",
      },
      {
        id: "outdoor-play",
        name: "Outdoor Play",
        opportunities: [
          "Practice action words: 'run', 'jump', 'swing'",
          "Talk about what you see: 'I see a bird!'",
          "Use position words: 'up', 'down', 'under'",
        ],
        tips: "Nature provides endless opportunities for new vocabulary.",
      },
    ],
  },
  {
    id: "meals",
    title: "Meal Times",
    icon: "🍽️",
    activities: [
      {
        id: "lunch-dinner",
        name: "Lunch & Dinner",
        opportunities: [
          "Practice requesting: 'I want...'",
          "Use polite words: 'please', 'thank you'",
          "Talk about food properties: 'hot', 'cold', 'yummy'",
        ],
        tips: "Make mealtimes social and communicative, not just about eating.",
      },
    ],
  },
  {
    id: "bedtime",
    title: "Bedtime Routine",
    icon: "🌙",
    activities: [
      {
        id: "bath-time",
        name: "Bath Time",
        opportunities: [
          "Practice body parts during washing",
          "Use action words: 'wash', 'rinse', 'dry'",
          "Talk about water temperature: 'warm', 'cool'",
        ],
        tips: "Bath time is naturally motivating for communication.",
      },
      {
        id: "story-time",
        name: "Story Time",
        opportunities: [
          "Ask 'What do you see?' in picture books",
          "Practice animal sounds and names",
          "Let child turn pages and point to pictures",
        ],
        tips: "Reading together builds language and bonding.",
      },
    ],
  },
]

export default function Activity4Page() {
  const [selectedOpportunities, setSelectedOpportunities] = useState<string[]>([])
  const [completedActivities, setCompletedActivities] = useState<string[]>([])
  const [showPersonalPlan, setShowPersonalPlan] = useState(false)

  const handleOpportunitySelect = (opportunityId: string) => {
    if (selectedOpportunities.includes(opportunityId)) {
      setSelectedOpportunities(selectedOpportunities.filter((id) => id !== opportunityId))
    } else {
      setSelectedOpportunities([...selectedOpportunities, opportunityId])
    }
  }

  const markActivityComplete = (activityId: string) => {
    if (!completedActivities.includes(activityId)) {
      setCompletedActivities([...completedActivities, activityId])
    }
  }

  const createPersonalPlan = () => {
    setShowPersonalPlan(true)
  }

  if (showPersonalPlan) {
    const selectedCount = selectedOpportunities.length

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
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-teal-600" />
            </div>
            <CardTitle className="text-2xl">Your Personal Communication Plan</CardTitle>
            <CardDescription>You've selected {selectedCount} communication opportunities to focus on</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="font-semibold text-teal-800 mb-3">Your Selected Opportunities</h3>
              <div className="space-y-2">
                {routineCategories.map((category) =>
                  category.activities.map((activity) =>
                    activity.opportunities.map((opportunity, index) => {
                      const opportunityId = `${activity.id}-${index}`
                      if (selectedOpportunities.includes(opportunityId)) {
                        return (
                          <div key={opportunityId} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5" />
                            <span className="text-teal-700 text-sm">{opportunity}</span>
                          </div>
                        )
                      }
                      return null
                    }),
                  ),
                )}
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Implementation Tips</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Start with 2-3 opportunities and gradually add more</li>
                    <li>• Be consistent - practice the same opportunities daily</li>
                    <li>• Celebrate small wins and communication attempts</li>
                    <li>• Adjust your expectations based on your child's current level</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Weekly Practice Schedule</h4>
              <div className="grid grid-cols-7 gap-2 text-center">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day} className="bg-gray-50 p-2 rounded">
                    <div className="font-medium text-sm">{day}</div>
                    <div className="text-xs text-gray-600 mt-1">{Math.min(selectedCount, 3)} activities</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/parent/modules/speech-language/early-communication/activity-5" className="flex-1">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Continue to Final Assessment</Button>
                </Link>
                <Button variant="outline" onClick={() => window.print()} className="flex-1">
                  Print Plan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-6xl">
      <div className="mb-6">
        <Link
          href="/parent/modules/speech-language/early-communication"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Back to Module
        </Link>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Daily Communication Opportunities</CardTitle>
          <CardDescription>
            Select communication opportunities you'd like to focus on in your daily routines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mb-6">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-teal-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-teal-800 mb-1">How This Works</h4>
                <p className="text-teal-700 text-sm">
                  Review each daily routine below and select the communication opportunities that feel right for your
                  family. You'll create a personalized plan to practice these throughout your day.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {routineCategories.map((category) => (
              <div key={category.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.activities.map((activity) => (
                    <div key={activity.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{activity.name}</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => markActivityComplete(activity.id)}
                          className={completedActivities.includes(activity.id) ? "bg-green-50 text-green-700" : ""}
                        >
                          {completedActivities.includes(activity.id) ? (
                            <>
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Practiced
                            </>
                          ) : (
                            <>
                              <Plus className="mr-1 h-3 w-3" />
                              Mark as Practiced
                            </>
                          )}
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Communication Opportunities:</h5>
                          <div className="space-y-2">
                            {activity.opportunities.map((opportunity, index) => {
                              const opportunityId = `${activity.id}-${index}`
                              return (
                                <div key={index} className="flex items-start gap-2">
                                  <Checkbox
                                    id={opportunityId}
                                    checked={selectedOpportunities.includes(opportunityId)}
                                    onCheckedChange={() => handleOpportunitySelect(opportunityId)}
                                  />
                                  <Label htmlFor={opportunityId} className="text-sm cursor-pointer">
                                    {opportunity}
                                  </Label>
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        <div className="bg-blue-50 p-3 rounded border border-blue-200">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5" />
                            <div>
                              <h6 className="text-sm font-medium text-blue-800">Tip:</h6>
                              <p className="text-sm text-blue-700">{activity.tips}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">
                  Selected: {selectedOpportunities.length} communication opportunities
                </div>
                <div className="text-sm text-gray-600">Practiced: {completedActivities.length} activities</div>
              </div>
              <Button
                onClick={createPersonalPlan}
                disabled={selectedOpportunities.length === 0}
                className="bg-teal-600 hover:bg-teal-700"
              >
                Create My Personal Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
