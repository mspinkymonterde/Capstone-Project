"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Info } from "lucide-react"
import Link from "next/link"

const assessmentQuestions = [
  {
    id: 1,
    category: "0-6 Months",
    question: "Does your child make eye contact when you talk to them?",
    options: [
      { value: "always", label: "Always or almost always", points: 3 },
      { value: "sometimes", label: "Sometimes", points: 2 },
      { value: "rarely", label: "Rarely", points: 1 },
      { value: "never", label: "Never", points: 0 },
    ],
  },
  {
    id: 2,
    category: "0-6 Months",
    question: "Does your child respond to their name being called?",
    options: [
      { value: "always", label: "Always turns to look", points: 3 },
      { value: "sometimes", label: "Sometimes responds", points: 2 },
      { value: "rarely", label: "Rarely responds", points: 1 },
      { value: "never", label: "No response", points: 0 },
    ],
  },
  {
    id: 3,
    category: "6-12 Months",
    question: "Does your child use gestures like pointing or waving?",
    options: [
      { value: "multiple", label: "Uses multiple gestures regularly", points: 3 },
      { value: "some", label: "Uses some gestures", points: 2 },
      { value: "few", label: "Uses very few gestures", points: 1 },
      { value: "none", label: "No gestures yet", points: 0 },
    ],
  },
  {
    id: 4,
    category: "12-18 Months",
    question: "How many words can your child say clearly?",
    options: [
      { value: "many", label: "10+ words", points: 3 },
      { value: "several", label: "5-10 words", points: 2 },
      { value: "few", label: "1-5 words", points: 1 },
      { value: "none", label: "No clear words yet", points: 0 },
    ],
  },
  {
    id: 5,
    category: "18-24 Months",
    question: "Does your child combine two words together?",
    options: [
      { value: "regularly", label: "Regularly uses 2-word phrases", points: 3 },
      { value: "sometimes", label: "Sometimes combines words", points: 2 },
      { value: "rarely", label: "Rarely combines words", points: 1 },
      { value: "never", label: "Only single words", points: 0 },
    ],
  },
]

export default function Activity1Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateScore = () => {
    let totalPoints = 0
    assessmentQuestions.forEach((q) => {
      const answer = answers[q.id]
      const option = q.options.find((opt) => opt.value === answer)
      if (option) totalPoints += option.points
    })
    return totalPoints
  }

  const getRecommendations = (score: number) => {
    const maxScore = assessmentQuestions.length * 3
    const percentage = (score / maxScore) * 100

    if (percentage >= 80) {
      return {
        level: "Excellent Progress",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        icon: CheckCircle,
        message: "Your child is meeting or exceeding communication milestones!",
        recommendations: [
          "Continue with rich conversations and reading together",
          "Introduce more complex vocabulary during daily activities",
          "Encourage storytelling and narrative skills",
        ],
      }
    } else if (percentage >= 60) {
      return {
        level: "Good Progress",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        icon: Info,
        message: "Your child is developing well with some areas to focus on.",
        recommendations: [
          "Increase face-to-face interaction time",
          "Use more gestures and visual supports",
          "Practice turn-taking in conversations",
        ],
      }
    } else {
      return {
        level: "Needs Support",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        icon: AlertCircle,
        message: "Consider additional support to boost communication development.",
        recommendations: [
          "Consult with a speech-language pathologist",
          "Focus on basic communication skills daily",
          "Use visual supports and simple language",
        ],
      }
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  if (showResults) {
    const score = calculateScore()
    const results = getRecommendations(score)
    const IconComponent = results.icon

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

        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className={`mx-auto w-16 h-16 rounded-full ${results.bgColor} flex items-center justify-center mb-4`}>
              <IconComponent className={`h-8 w-8 ${results.color}`} />
            </div>
            <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
            <CardDescription>Here are your personalized results and recommendations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className={`p-4 rounded-lg border ${results.borderColor} ${results.bgColor}`}>
              <h3 className={`font-semibold text-lg ${results.color} mb-2`}>{results.level}</h3>
              <p className="text-gray-700">{results.message}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Recommended Next Steps:</h4>
              <ul className="space-y-2">
                {results.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/parent/modules/speech-language/early-communication/activity-2" className="flex-1">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Continue to Next Activity</Button>
                </Link>
                <Button variant="outline" onClick={() => window.print()} className="flex-1">
                  Save Results
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = assessmentQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100

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
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle>Communication Milestones Assessment</CardTitle>
              <CardDescription>
                Question {currentQuestion + 1} of {assessmentQuestions.length}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-teal-600">{Math.round(progress)}% Complete</div>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <div className="text-sm font-medium text-teal-600 mb-2">{question.category}</div>
            <h3 className="text-lg font-semibold text-gray-900">{question.question}</h3>
          </div>

          <RadioGroup value={answers[question.id] || ""} onValueChange={(value) => handleAnswer(question.id, value)}>
            {question.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button onClick={nextQuestion} disabled={!answers[question.id]} className="bg-teal-600 hover:bg-teal-700">
              {currentQuestion === assessmentQuestions.length - 1 ? "View Results" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
