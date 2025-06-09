"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Brain, MessageSquare, Dumbbell, HeartHandshake, Puzzle } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

type Question = {
  id: string
  text: string
  area: string
}

type ChecklistResponse = {
  questionId: string
  answer: "yes" | "no" | "sometimes"
}

const questions: Question[] = [
  // Cognitive Development
  { id: "cog1", text: "Can your child follow simple 1-step instructions?", area: "cognitive" },
  { id: "cog2", text: "Does your child show interest in cause-and-effect toys?", area: "cognitive" },
  { id: "cog3", text: "Can your child match similar objects or pictures?", area: "cognitive" },
  { id: "cog4", text: "Does your child demonstrate problem-solving skills?", area: "cognitive" },

  // Speech & Language
  { id: "speech1", text: "Does your child use gestures to communicate?", area: "speech" },
  { id: "speech2", text: "Can your child say at least 10 words clearly?", area: "speech" },
  { id: "speech3", text: "Does your child respond when their name is called?", area: "speech" },
  { id: "speech4", text: "Can your child follow 2-step commands?", area: "speech" },

  // Motor Skills
  { id: "motor1", text: "Can your child walk steadily without support?", area: "motor" },
  { id: "motor2", text: "Does your child show good hand-eye coordination?", area: "motor" },
  { id: "motor3", text: "Can your child hold and use utensils appropriately?", area: "motor" },
  { id: "motor4", text: "Does your child enjoy physical activities and movement?", area: "motor" },

  // Social & Emotional
  { id: "social1", text: "Does your child show affection to familiar people?", area: "social" },
  { id: "social2", text: "Can your child play alongside other children?", area: "social" },
  { id: "social3", text: "Does your child express different emotions appropriately?", area: "social" },
  { id: "social4", text: "Can your child follow simple social rules?", area: "social" },

  // Adaptive Skills
  { id: "adaptive1", text: "Can your child dress or undress with minimal help?", area: "adaptive" },
  { id: "adaptive2", text: "Can your child use eating utensils independently?", area: "adaptive" },
  { id: "adaptive3", text: "Can your child brush teeth or wash hands with little assistance?", area: "adaptive" },
  { id: "adaptive4", text: "Does your child help with simple chores (e.g., putting away toys)?", area: "adaptive" },
]

const categories = [
  { key: "cognitive", label: "Cognitive Development" },
  { key: "speech", label: "Speech & Language" },
  { key: "motor", label: "Motor Skills" },
  { key: "social", label: "Social & Emotional" },
  { key: "adaptive", label: "Adaptive Skills" },
]

export default function ChecklistPage() {
  // All hooks must be called unconditionally
  const [responses, setResponses] = useState<ChecklistResponse[]>([])
  const [currentCategory, setCurrentCategory] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [progressKey, setProgressKey] = useState(0) // force progress bar reset

  const { user, updateChecklistResults } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const scrollRef = useRef<HTMLDivElement>(null)

  // Only support one child
  const children = user?.childrenInfo || []
  const currentChildData = children[0]

  useEffect(() => {
    if (!user || children.length === 0) {
      router.push("/parent/dashboard")
    }
  }, [user, children, router])

  // Get questions for current category
  const currentCategoryKey = categories[currentCategory].key
  const categoryQuestions = questions.filter((q) => q.area === currentCategoryKey)

  // Handle answer for a question
  const handleAnswer = (questionId: string, answer: "yes" | "no" | "sometimes") => {
    setResponses((prev) => {
      const filtered = prev.filter((r) => r.questionId !== questionId)
      return [...filtered, { questionId, answer }]
    })
  }

  // Check if all questions in current category are answered
  const allAnswered = categoryQuestions.every((q) =>
    responses.find((r) => r.questionId === q.id)
  )

  const nextCategory = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1)
      setProgressKey((prev) => prev + 1) // reset progress bar
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0
      }
    } else {
      completeChecklist()
    }
  }

  const prevCategory = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1)
      setProgressKey((prev) => prev + 1) // reset progress bar
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0
      }
    }
  }

  const completeChecklist = () => {
    // Calculate results
    const areaScores = {
      cognitive: { yes: 0, no: 0, sometimes: 0 },
      speech: { yes: 0, no: 0, sometimes: 0 },
      motor: { yes: 0, no: 0, sometimes: 0 },
      social: { yes: 0, no: 0, sometimes: 0 },
      adaptive: { yes: 0, no: 0, sometimes: 0 },
    }

    responses.forEach((response) => {
      const question = questions.find((q) => q.id === response.questionId)
      if (question) {
        areaScores[question.area as keyof typeof areaScores][response.answer]++
      }
    })

    const resultObj = {
      childId: currentChildData.name,
      scores: areaScores,
      completedAt: new Date().toISOString(),
      recommendations: generateRecommendations(areaScores),
    }

    setResults(resultObj)

    // Update the checklist results in auth context
    if (updateChecklistResults) {
      updateChecklistResults(0, resultObj)
    }

    setIsCompleted(true)
  }

  const generateRecommendations = (scores: any) => {
    const recommendations: { area: string; priority: string; modules: string[] }[] = []

    Object.entries(scores).forEach(([area, score]: [string, any]) => {
      const total = score.yes + score.no + score.sometimes
      const positiveScore = (score.yes + score.sometimes * 0.5) / total

      if (positiveScore < 0.5) {
        recommendations.push({
          area,
          priority: "high",
          modules: getRecommendedModules(area),
        })
      } else if (positiveScore < 0.75) {
        recommendations.push({
          area,
          priority: "medium",
          modules: getRecommendedModules(area),
        })
      }
    })

    return recommendations
  }

  const getRecommendedModules = (area: string) => {
    const moduleMap = {
      cognitive: ["Sensory Exploration", "Cause & Effect Understanding"],
      speech: ["Early Communication Foundations", "Building Vocabulary"],
      motor: ["Core Strength & Stability", "Fine Motor Precision"],
      social: ["Emotional Recognition", "Social Interaction Skills"],
      adaptive: ["Self-Care Skills", "Independent Living Skills"],
    }
    return moduleMap[area as keyof typeof moduleMap] || []
  }

  const getAreaIcon = (area: string) => {
    switch (area) {
      case "cognitive":
        return <Brain className="h-6 w-6 text-purple-500" />
      case "speech":
        return <MessageSquare className="h-6 w-6 text-blue-500" />
      case "motor":
        return <Dumbbell className="h-6 w-6 text-orange-500" />
      case "social":
        return <HeartHandshake className="h-6 w-6 text-pink-500" />
      case "adaptive":
        return <Puzzle className="h-6 w-6 text-green-500" />
      default:
        return null
    }
  }

  const currentResponse = responses.find((r) => r.questionId === questions[currentCategory]?.id)

  // Move the loading check here, after all hooks
  if (!currentChildData) {
    return <div>Loading...</div>
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-yellow-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-3xl text-teal-700">Checklist Complete!</CardTitle>
              <CardDescription className="text-lg">
                Here's a summary of {currentChildData.name}'s developmental assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Results Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(results.scores).map(([area, score]: [string, any]) => {
                  const total = score.yes + score.no + score.sometimes
                  const percentage = Math.round(((score.yes + score.sometimes * 0.5) / total) * 100)

                  return (
                    <Card key={area} className="border-2 border-gray-100">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          {getAreaIcon(area)}
                          <h3 className="font-semibold capitalize text-gray-800">{area} Development</h3>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{percentage}%</span>
                          </div>
                          <Progress value={percentage} className="h-2" />
                          <div className="text-xs text-gray-600">
                            Yes: {score.yes} | Sometimes: {score.sometimes} | No: {score.no}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Recommendations */}
              {results.recommendations.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Puzzle className="h-5 w-5 text-green-500" />
                    Recommended Focus Areas
                  </h3>
                  <div className="grid gap-4">
                    {results.recommendations.map((rec: any, index: number) => (
                      <Card
                        key={index}
                        className={`border-l-4 ${
                          rec.priority === "high" ? "border-red-400 bg-red-50" : "border-yellow-400 bg-yellow-50"
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            {getAreaIcon(rec.area)}
                            <h4 className="font-medium capitalize">{rec.area} Development</h4>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                rec.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {rec.priority} priority
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Recommended modules: {rec.modules.join(", ")}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-6">
                <Button
                  onClick={() => router.push("/parent/dashboard")}
                  className="flex-1 h-12 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold rounded-xl"
                >
                  Go to Dashboard
                </Button>
                <Button
                  onClick={() => router.push("/parent/modules")}
                  variant="outline"
                  className="flex-1 h-12 border-2 border-teal-300 text-teal-600 hover:bg-teal-50 rounded-xl"
                >
                  Explore Modules
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Progress calculation for categories
  const progressValue =
    ((currentCategory + 1) / categories.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-yellow-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-teal-700">
              Developmental Checklist for {currentChildData.name}
            </CardTitle>
            <CardDescription>
              Category {currentCategory + 1} of {categories.length}: {categories[currentCategory].label}
            </CardDescription>
              <Progress key={progressKey} value={progressValue} className="mt-4 bg-gray-200 [&>div]:bg-green-500" />
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">{getAreaIcon(currentCategoryKey)}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{categories[currentCategory].label}</h3>
            </div>
            <div ref={scrollRef} className="space-y-6 max-h-[350px] overflow-y-auto pr-2">
              {categoryQuestions.map((q, idx) => {
                const currentResponse = responses.find(r => r.questionId === q.id)
                return (
                  <div key={q.id} className="mb-2">
                    <div className="font-medium text-gray-700 mb-2">{idx + 1}. {q.text}</div>
                    <RadioGroup
                      value={currentResponse?.answer || ""}
                      onValueChange={(value) => handleAnswer(q.id, value as "yes" | "no" | "sometimes")}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-200 hover:border-green-300 transition-colors">
                        <RadioGroupItem value="yes" id={`${q.id}-yes`} />
                        <Label htmlFor={`${q.id}-yes`} className="flex-1 cursor-pointer font-medium text-black hover:text-green-700">
                          Yes, consistently
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-200 hover:border-yellow-300 transition-colors">
                        <RadioGroupItem value="sometimes" id={`${q.id}-sometimes`} />
                        <Label htmlFor={`${q.id}-sometimes`} className="flex-1 cursor-pointer font-medium text-black hover:text-yellow-700">
                          Sometimes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-gray-200 hover:border-red-300 transition-colors">
                        <RadioGroupItem value="no" id={`${q.id}-no`} />
                        <Label htmlFor={`${q.id}-no`} className="flex-1 cursor-pointer font-medium text-black hover:text-red-700">
                          No, not yet
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                )
              })}
            </div>
          </CardContent>

          <div className="flex gap-4 p-6">
            <Button
              variant="outline"
              onClick={prevCategory}
              disabled={currentCategory === 0}
              className="flex-1 h-12 border-2 border-gray-300 hover:bg-gray-50 rounded-xl"
            >
              Previous
            </Button>
            <Button
              onClick={nextCategory}
              disabled={!allAnswered}
              className="flex-1 h-12 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-semibold rounded-xl"
            >
              {currentCategory === categories.length - 1 ? "Complete" : "Next"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
