"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, CheckCircle, Award, Download } from "lucide-react"
import Link from "next/link"

const assessmentQuestions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "When your child points to something they want, what's the best response?",
    options: [
      { value: "ignore", label: "Ignore the pointing and wait for words", points: 0 },
      { value: "give-immediately", label: "Give them what they want immediately", points: 1 },
      {
        value: "acknowledge-expand",
        label: "Acknowledge the pointing and expand: 'Oh, you want the ball!'",
        points: 3,
      },
      { value: "correct", label: "Tell them to use words instead of pointing", points: 1 },
    ],
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Your child says 'wa' while reaching for their water cup. How should you respond?",
    options: [
      { value: "correct-pronunciation", label: "Correct them: 'Say water, not wa'", points: 1 },
      { value: "expand-model", label: "Expand and model: 'Water! You want water. Here's your water.'", points: 3 },
      { value: "ignore", label: "Wait until they say the full word", points: 0 },
      { value: "give-silently", label: "Give them the water without saying anything", points: 1 },
    ],
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Which is the best way to create communication opportunities during snack time?",
    options: [
      {
        value: "prepare-everything",
        label: "Prepare everything beforehand so the child doesn't need to ask",
        points: 0,
      },
      { value: "offer-choices", label: "Offer choices and pause for responses: 'Apple or crackers?'", points: 3 },
      { value: "ask-questions", label: "Ask lots of questions while they eat", points: 1 },
      { value: "talk-continuously", label: "Talk continuously about the food", points: 1 },
    ],
  },
  {
    id: 4,
    type: "scenario",
    question:
      "Your 18-month-old child is frustrated and crying because they can't reach their favorite toy on a high shelf. They're pointing and making upset sounds. Describe how you would respond to support their communication development.",
    placeholder: "Describe your response step by step...",
  },
  {
    id: 5,
    type: "scenario",
    question:
      "During bath time, your child keeps saying 'more' and splashing. They seem to want you to pour more water. How would you use this moment to expand their communication?",
    placeholder: "Explain how you would respond and what you might say...",
  },
]

export default function Activity5Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateScore = () => {
    let totalPoints = 0
    let maxPoints = 0

    assessmentQuestions.forEach((q) => {
      if (q.type === "multiple-choice") {
        maxPoints += 3
        const answer = answers[q.id]
        const option = q.options?.find((opt) => opt.value === answer)
        if (option) totalPoints += option.points
      } else {
        // Scenario questions get full points if answered
        maxPoints += 3
        if (answers[q.id] && answers[q.id].trim().length > 20) {
          totalPoints += 3
        }
      }
    })

    return { totalPoints, maxPoints }
  }

  const getCompletionLevel = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100

    if (percentage >= 85) {
      return {
        level: "Expert",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        message: "Outstanding! You have excellent understanding of early communication strategies.",
        badge: "🏆",
      }
    } else if (percentage >= 70) {
      return {
        level: "Proficient",
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-200",
        message: "Great job! You have a solid understanding of communication support strategies.",
        badge: "⭐",
      }
    } else if (percentage >= 55) {
      return {
        level: "Developing",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        message: "Good progress! Continue practicing these strategies to build confidence.",
        badge: "📈",
      }
    } else {
      return {
        level: "Beginning",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        message: "Keep learning! Consider reviewing the module materials and practicing more.",
        badge: "🌱",
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
    const { totalPoints, maxPoints } = calculateScore()
    const completion = getCompletionLevel(totalPoints, maxPoints)
    const percentage = Math.round((totalPoints / maxPoints) * 100)

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
            <div
              className={`mx-auto w-20 h-20 rounded-full ${completion.bgColor} flex items-center justify-center mb-4`}
            >
              <span className="text-4xl">{completion.badge}</span>
            </div>
            <CardTitle className="text-2xl">Module Complete!</CardTitle>
            <CardDescription>You've finished the Early Communication Foundations module</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className={`p-6 rounded-lg border ${completion.borderColor} ${completion.bgColor}`}>
              <div className="text-center mb-4">
                <h3 className={`text-2xl font-bold ${completion.color} mb-2`}>{completion.level}</h3>
                <div className="text-3xl font-bold text-gray-900">{percentage}%</div>
                <div className="text-sm text-gray-600">
                  Final Score: {totalPoints}/{maxPoints} points
                </div>
              </div>
              <p className="text-center text-gray-700">{completion.message}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  What You've Accomplished
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Completed communication milestones assessment</li>
                  <li>• Learned responsive communication strategies</li>
                  <li>• Practiced picture exchange communication</li>
                  <li>• Created a personalized daily practice plan</li>
                  <li>• Demonstrated understanding through final assessment</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  Next Steps
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Continue practicing daily communication opportunities</li>
                  <li>• Move on to "Building Vocabulary & Simple Sentences"</li>
                  <li>• Track your child's progress weekly</li>
                  <li>• Join our parent community for ongoing support</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-800 mb-3">Certificate of Completion</h4>
              <p className="text-teal-700 mb-4">
                Congratulations! You've successfully completed the Early Communication Foundations module. Download your
                certificate to celebrate this achievement.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Download className="mr-2 h-4 w-4" />
                Download Certificate
              </Button>
            </div>

            <div className="pt-4 border-t">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/parent/modules/speech-language" className="flex-1">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Return to Speech & Language Modules</Button>
                </Link>
                <Link href="/parent/dashboard" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = assessmentQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100
  const isAnswered = answers[question.id] && answers[question.id].trim().length > 0

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
              <CardTitle>Progress Check & Next Steps</CardTitle>
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.question}</h3>
          </div>

          {question.type === "multiple-choice" ? (
            <RadioGroup value={answers[question.id] || ""} onValueChange={(value) => handleAnswer(question.id, value)}>
              {question.options?.map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer leading-relaxed">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">Your Response:</Label>
              <Textarea
                placeholder={question.placeholder}
                value={answers[question.id] || ""}
                onChange={(e) => handleAnswer(question.id, e.target.value)}
                className="min-h-[120px]"
              />
              <div className="text-xs text-gray-500">
                Minimum 20 characters required ({(answers[question.id] || "").length}/20)
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!isAnswered || (question.type === "scenario" && (answers[question.id] || "").length < 20)}
              className="bg-teal-600 hover:bg-teal-700"
            >
              {currentQuestion === assessmentQuestions.length - 1 ? "Complete Assessment" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
