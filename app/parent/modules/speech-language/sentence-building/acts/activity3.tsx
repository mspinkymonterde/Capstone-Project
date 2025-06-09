"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, RotateCcw, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

const pictureCards = [
  { id: 1, name: "Water", emoji: "💧", category: "needs" },
  { id: 2, name: "Food", emoji: "🍎", category: "needs" },
  { id: 3, name: "Play", emoji: "🎾", category: "activities" },
  { id: 4, name: "Book", emoji: "📚", category: "activities" },
  { id: 5, name: "Help", emoji: "🤝", category: "needs" },
  { id: 6, name: "More", emoji: "➕", category: "requests" },
  { id: 7, name: "Stop", emoji: "✋", category: "requests" },
  { id: 8, name: "Go", emoji: "🚶", category: "actions" },
  { id: 9, name: "Happy", emoji: "😊", category: "feelings" },
  { id: 10, name: "Sad", emoji: "😢", category: "feelings" },
]

const scenarios = [
  {
    id: 1,
    title: "Snack Time",
    description: "Your child is hungry and wants a snack. Help them communicate this need.",
    correctCards: ["Food", "More"],
    hint: "Think about what they need and if they might want more.",
  },
  {
    id: 2,
    title: "Playtime",
    description: "Your child wants to play with their favorite toy but needs help getting it.",
    correctCards: ["Play", "Help"],
    hint: "What activity do they want and what do they need from you?",
  },
  {
    id: 3,
    title: "Story Time",
    description: "Your child is feeling sad and wants comfort through reading together.",
    correctCards: ["Sad", "Book"],
    hint: "How are they feeling and what activity might help?",
  },
]

export default function Activity3Page() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedCards, setSelectedCards] = useState<string[]>([])
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)

  const scenario = scenarios[currentScenario]

  const handleCardSelect = (cardName: string) => {
    if (selectedCards.includes(cardName)) {
      setSelectedCards(selectedCards.filter((card) => card !== cardName))
    } else if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, cardName])
    }
  }

  const checkAnswer = () => {
    const isCorrect =
      scenario.correctCards.every((card) => selectedCards.includes(card)) &&
      selectedCards.length === scenario.correctCards.length
    setShowFeedback(true)

    if (isCorrect && !completedScenarios.includes(currentScenario)) {
      setCompletedScenarios([...completedScenarios, currentScenario])
    }
  }

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setSelectedCards([])
      setShowFeedback(false)
    } else {
      setShowCompletion(true)
    }
  }

  const resetScenario = () => {
    setSelectedCards([])
    setShowFeedback(false)
  }

  const isCorrect =
    scenario.correctCards.every((card) => selectedCards.includes(card)) &&
    selectedCards.length === scenario.correctCards.length

  const progress = (completedScenarios.length / scenarios.length) * 100

  if (showCompletion) {
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
              <Star className="h-8 w-8 text-teal-600" />
            </div>
            <CardTitle className="text-2xl">Great Job!</CardTitle>
            <CardDescription>You've completed the Picture Exchange Communication Activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="font-semibold text-teal-800 mb-2">What You've Learned</h3>
              <ul className="text-teal-700 space-y-1">
                <li>• How to use visual supports to help communication</li>
                <li>• The importance of combining pictures to express complex needs</li>
                <li>• How to create communication opportunities in daily scenarios</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Next Steps for Home:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5" />
                  <span>Create a simple picture board with your child's most needed words</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5" />
                  <span>Practice picture exchange during meals and play time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5" />
                  <span>Gradually increase the number of pictures as your child progresses</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t">
              <Link href="/parent/modules/speech-language/early-communication/activity-4">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Continue to Next Activity</Button>
              </Link>
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

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Picture Exchange Communication</CardTitle>
                  <CardDescription>
                    Scenario {currentScenario + 1} of {scenarios.length}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-teal-600">{Math.round(progress)}% Complete</div>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-gray-700 mb-4">{scenario.description}</p>
                <div className="text-sm text-teal-600 font-medium">
                  Select 2 picture cards that would help communicate in this situation
                </div>
              </div>

              {/* Selected Cards Area */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Selected Communication Cards:</h4>
                <div className="flex gap-4 min-h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                  {selectedCards.map((cardName, index) => {
                    const card = pictureCards.find((c) => c.name === cardName)
                    return (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg border-2 border-teal-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleCardSelect(cardName)}
                      >
                        <div className="text-3xl mb-2 text-center">{card?.emoji}</div>
                        <div className="text-sm font-medium text-center">{card?.name}</div>
                      </div>
                    )
                  })}
                  {selectedCards.length === 0 && (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                      Click on picture cards below to select them
                    </div>
                  )}
                </div>
              </div>

              {/* Picture Cards Grid */}
              <div>
                <h4 className="font-semibold mb-3">Available Picture Cards:</h4>
                <div className="grid grid-cols-5 gap-3">
                  {pictureCards.map((card) => (
                    <div
                      key={card.id}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                        selectedCards.includes(card.name)
                          ? "border-teal-400 bg-teal-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                      onClick={() => handleCardSelect(card.name)}
                    >
                      <div className="text-2xl mb-1 text-center">{card.emoji}</div>
                      <div className="text-xs font-medium text-center">{card.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <Button
                  onClick={checkAnswer}
                  disabled={selectedCards.length !== 2}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Check Answer
                </Button>
                <Button variant="outline" onClick={resetScenario}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div
                  className={`mt-4 p-4 rounded-lg border ${
                    isCorrect ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"
                  }`}
                >
                  {isCorrect ? (
                    <div>
                      <div className="flex items-center gap-2 text-green-800 font-semibold mb-2">
                        <CheckCircle className="h-5 w-5" />
                        Excellent! Perfect communication choice.
                      </div>
                      <p className="text-green-700 text-sm mb-3">
                        You selected the right cards to help communicate in this situation. This combination clearly
                        expresses the child's needs.
                      </p>
                      <Button onClick={nextScenario} className="bg-green-600 hover:bg-green-700">
                        {currentScenario === scenarios.length - 1 ? "Complete Activity" : "Next Scenario"}
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div className="text-yellow-800 font-semibold mb-2">Not quite right. Try again!</div>
                      <p className="text-yellow-700 text-sm mb-2">
                        <strong>Hint:</strong> {scenario.hint}
                      </p>
                      <p className="text-yellow-700 text-sm">
                        Think about what the child needs to communicate and try different combinations.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scenarios.map((scenario, index) => (
                  <div
                    key={scenario.id}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      completedScenarios.includes(index)
                        ? "bg-green-50 border border-green-200"
                        : index === currentScenario
                          ? "bg-teal-50 border border-teal-200"
                          : "bg-gray-50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        completedScenarios.includes(index)
                          ? "bg-green-100 text-green-600"
                          : index === currentScenario
                            ? "bg-teal-100 text-teal-600"
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {completedScenarios.includes(index) ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{scenario.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="bg-teal-50 p-3 rounded-lg">
                  <div className="font-medium text-teal-800 mb-1">Picture Exchange Basics</div>
                  <div className="text-teal-700">
                    Start with pictures of your child's favorite items and most needed requests.
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="font-medium text-blue-800 mb-1">Combination Power</div>
                  <div className="text-blue-700">Combining 2 pictures can express more complex thoughts and needs.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
