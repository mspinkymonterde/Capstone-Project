"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Camera, Heart, BookOpen, Users, Eye, Clock, User, MessageCircle, Lightbulb } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const activities = [
  {
    id: "family-moments",
    title: "Family Moments Talk",
    icon: Camera,
    duration: "15-20 min",
    description: "Explore family photos and practice conversation skills",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "feelings-matching",
    title: "Feelings Matching Game",
    icon: Heart,
    duration: "10-15 min",
    description: "Match emotions and share personal experiences",
    color: "bg-rose-100 text-rose-700",
  },
  {
    id: "emotion-story",
    title: "Emotion Picture Story",
    icon: BookOpen,
    duration: "15-20 min",
    description: "Read stories and discuss character emotions",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "puppet-questions",
    title: "Ask Me with Puppets",
    icon: Users,
    duration: "10-15 min",
    description: "Interactive puppet conversations and role-play",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "show-tell",
    title: "Guided Show & Tell",
    icon: Eye,
    duration: "15-20 min",
    description: "Describe objects and practice detailed explanations",
    color: "bg-emerald-100 text-emerald-700",
  },
]

export function LanguageActivities() {
  const [activeActivity, setActiveActivity] = useState("family-moments")

  const renderActivityContent = () => {
    switch (activeActivity) {
      case "family-moments":
        return <FamilyMomentsActivity />
      case "feelings-matching":
        return <FeelingsMatchingActivity />
      case "emotion-story":
        return <EmotionStoryActivity />
      case "puppet-questions":
        return <PuppetQuestionsActivity />
      case "show-tell":
        return <ShowTellActivity />
      default:
        return <FamilyMomentsActivity />
    }
  }

  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-teal-700 flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Interactive Activities
        </CardTitle>
        <CardDescription>Choose an activity to practice using language in different ways</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeActivity} onValueChange={setActiveActivity} orientation="vertical">
          <TabsList className="grid w-full grid-cols-1 gap-1 h-auto bg-gray-50 p-1">
            {activities.map((activity) => (
              <TabsTrigger
                key={activity.id}
                value={activity.id}
                className="flex items-center justify-start gap-2 p-3 text-left data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                <div className={`p-1.5 rounded-full ${activity.color}`}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{activity.title}</div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {activity.duration}
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-4">{renderActivityContent()}</div>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function FamilyMomentsActivity() {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const photos = [
    {
      src: "/placeholder.svg?height=200&width=300",
      alt: "Family playing at the park",
      scenario: "Playing at the park",
    },
    {
      src: "/placeholder.svg?height=200&width=300",
      alt: "Family eating dinner together",
      scenario: "Eating dinner together",
    },
    { src: "/placeholder.svg?height=200&width=300", alt: "Family cleaning house", scenario: "Cleaning the house" },
    {
      src: "/placeholder.svg?height=200&width=300",
      alt: "Family reading bedtime story",
      scenario: "Reading bedtime story",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="text-center">
        <Badge variant="secondary" className="bg-teal-100 text-teal-700">
          Activity 1: Family Moments Talk
        </Badge>
      </div>

      <div className="bg-teal-50 rounded-lg p-4">
        <div className="relative">
          <Image
            src={photos[currentPhoto].src || "/placeholder.svg"}
            alt={photos[currentPhoto].alt}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-sm font-medium">
            {photos[currentPhoto].scenario}
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPhoto(Math.max(0, currentPhoto - 1))}
            disabled={currentPhoto === 0}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600 self-center">
            {currentPhoto + 1} of {photos.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPhoto(Math.min(photos.length - 1, currentPhoto + 1))}
            disabled={currentPhoto === photos.length - 1}
          >
            Next
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <User className="h-4 w-4 text-teal-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Parent Guide</h4>
            <p className="text-sm text-gray-600">
              Look at each photo with your child and ask open-ended questions to encourage conversation.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            Questions to Ask
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• "What do you think is happening in this picture?"</li>
            <li>• "Have we ever done this before?"</li>
            <li>• "What happened first? What happened next?"</li>
            <li>• "How do you think everyone is feeling?"</li>
            <li>• "What would you like to do in this situation?"</li>
          </ul>
        </div>

        <div className="bg-amber-50 rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <Lightbulb className="h-4 w-4 text-amber-600" />
            Tips for Success
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Wait for your child's response before moving on</li>
            <li>• Expand on their answers with more details</li>
            <li>• Share your own experiences related to the photos</li>
            <li>• Encourage storytelling about similar experiences</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function FeelingsMatchingActivity() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)
  const emotions = [
    { id: "happy", name: "Happy", color: "bg-yellow-100 border-yellow-300", emoji: "😊" },
    { id: "sad", name: "Sad", color: "bg-blue-100 border-blue-300", emoji: "😢" },
    { id: "angry", name: "Angry", color: "bg-red-100 border-red-300", emoji: "😠" },
    { id: "excited", name: "Excited", color: "bg-orange-100 border-orange-300", emoji: "🤩" },
    { id: "scared", name: "Scared", color: "bg-purple-100 border-purple-300", emoji: "😨" },
  ]

  return (
    <div className="space-y-4">
      <div className="text-center">
        <Badge variant="secondary" className="bg-rose-100 text-rose-700">
          Activity 2: Feelings Matching Game
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {emotions.map((emotion) => (
          <button
            key={emotion.id}
            onClick={() => setSelectedEmotion(emotion.id)}
            className={`p-3 rounded-lg border-2 transition-all ${emotion.color} ${
              selectedEmotion === emotion.id ? "ring-2 ring-rose-400" : ""
            }`}
          >
            <div className="text-2xl mb-1">{emotion.emoji}</div>
            <div className="text-sm font-medium">{emotion.name}</div>
          </button>
        ))}
      </div>

      {selectedEmotion && (
        <div className="bg-rose-50 rounded-lg p-4 space-y-3">
          <div className="text-center">
            <div className="text-2xl mb-2">{emotions.find((e) => e.id === selectedEmotion)?.emoji}</div>
            <h3 className="font-medium">You selected: {emotions.find((e) => e.id === selectedEmotion)?.name}</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <User className="h-4 w-4 text-rose-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Parent Guide</h4>
                <p className="text-sm text-gray-600">
                  Now that your child has chosen an emotion, help them connect it to their own experiences.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3">
              <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                Questions to Ask
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  • "Can you tell me a time when you felt{" "}
                  {emotions.find((e) => e.id === selectedEmotion)?.name.toLowerCase()}?"
                </li>
                <li>• "What happened that made you feel this way?"</li>
                <li>
                  • "How did your body feel when you were{" "}
                  {emotions.find((e) => e.id === selectedEmotion)?.name.toLowerCase()}?"
                </li>
                <li>• "What helped you feel better?"</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="bg-amber-50 rounded-lg p-3">
        <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
          <Lightbulb className="h-4 w-4 text-amber-600" />
          Tips for Success
        </h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Share your own experiences with the same emotion</li>
          <li>• Help your child use descriptive words</li>
          <li>• Validate all feelings as normal and important</li>
          <li>• Practice identifying emotions in daily situations</li>
        </ul>
      </div>
    </div>
  )
}

function EmotionStoryActivity() {
  const [currentPage, setCurrentPage] = useState(0)
  const storyPages = [
    {
      image: "/placeholder.svg?height=150&width=200",
      text: "Maya was playing with her favorite toy car in the living room.",
      emotion: "Happy",
      questions: ["How do you think Maya feels?", "What makes you happy when you play?"],
    },
    {
      image: "/placeholder.svg?height=150&width=200",
      text: "Suddenly, the toy car rolled under the couch and got stuck!",
      emotion: "Worried",
      questions: ["How does Maya feel now?", "What would you do if your toy got stuck?"],
    },
    {
      image: "/placeholder.svg?height=150&width=200",
      text: "Maya's mom heard her crying and came to help get the car out.",
      emotion: "Relieved",
      questions: ["How does Maya feel when mom helps?", "Who helps you when you need it?"],
    },
    {
      image: "/placeholder.svg?height=150&width=200",
      text: "Maya hugged her mom and said 'Thank you!' She felt so proud that she asked for help.",
      emotion: "Proud",
      questions: ["Why does Maya feel proud?", "When do you feel proud of yourself?"],
    },
  ]

  return (
    <div className="space-y-4">
      <div className="text-center">
        <Badge variant="secondary" className="bg-amber-100 text-amber-700">
          Activity 3: Emotion Picture Story
        </Badge>
      </div>

      <div className="bg-amber-50 rounded-lg p-4">
        <div className="text-center mb-3">
          <h3 className="font-medium">Maya's Lost Toy</h3>
          <p className="text-sm text-gray-600">
            Page {currentPage + 1} of {storyPages.length}
          </p>
        </div>

        <div className="bg-white rounded-lg p-3 mb-3">
          <Image
            src={storyPages[currentPage].image || "/placeholder.svg"}
            alt={`Story page ${currentPage + 1}`}
            width={200}
            height={150}
            className="w-full h-32 object-cover rounded mb-2"
          />
          <p className="text-sm text-center">{storyPages[currentPage].text}</p>
          <div className="text-center mt-2">
            <Badge variant="outline" className="bg-white">
              Emotion: {storyPages[currentPage].emotion}
            </Badge>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(storyPages.length - 1, currentPage + 1))}
            disabled={currentPage === storyPages.length - 1}
          >
            Next
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <User className="h-4 w-4 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Parent Guide</h4>
            <p className="text-sm text-gray-600">
              Read each page aloud, then pause to discuss the character's emotions and connect to your child's
              experiences.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            Questions for This Page
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {storyPages[currentPage].questions.map((question, index) => (
              <li key={index}>• "{question}"</li>
            ))}
            <li>• "Have you ever felt like this?"</li>
          </ul>
        </div>

        <div className="bg-amber-50 rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <Lightbulb className="h-4 w-4 text-amber-600" />
            Tips for Success
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Use expressive voice when reading</li>
            <li>• Point to facial expressions in the pictures</li>
            <li>• Encourage your child to predict what happens next</li>
            <li>• Relate the story to your child's real experiences</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function PuppetQuestionsActivity() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const questions = [
    "What's your favorite food?",
    "Who do you play with at home?",
    "What makes you laugh?",
    "What's your favorite thing to do outside?",
    "What do you like to do before bedtime?",
  ]

  return (
    <div className="space-y-4">
      <div className="text-center">
        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
          Activity 4: Ask Me with Puppets
        </Badge>
      </div>

      <div className="bg-purple-50 rounded-lg p-4">
        <div className="flex justify-center mb-4">
          <div className="flex gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center text-2xl mb-2">
                🐻
              </div>
              <p className="text-xs font-medium">Buddy Bear</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center text-2xl mb-2">
                🐰
              </div>
              <p className="text-xs font-medium">Ruby Rabbit</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3 mb-3">
          <div className="text-center">
            <p className="text-sm font-medium mb-2">Buddy Bear asks:</p>
            <div className="bg-purple-100 rounded-lg p-2 inline-block">
              <p className="text-sm">"{questions[currentQuestion]}"</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600 self-center">
            {currentQuestion + 1} of {questions.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <User className="h-4 w-4 text-purple-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Parent Guide</h4>
            <p className="text-sm text-gray-600">
              Use hand puppets or toys to ask questions. Take turns being different characters and encourage your child
              to ask questions too.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            How to Play
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Have the puppet ask the question in a fun voice</li>
            <li>• Wait for your child's answer and respond as the puppet</li>
            <li>• Let your child ask the puppet questions too</li>
            <li>• Switch roles - let your child be the puppet</li>
          </ul>
        </div>

        <div className="bg-amber-50 rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <Lightbulb className="h-4 w-4 text-amber-600" />
            Tips for Success
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Use different voices for each puppet character</li>
            <li>• Encourage detailed answers, not just yes/no</li>
            <li>• Model good listening and turn-taking</li>
            <li>• Make it silly and fun to keep engagement high</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function ShowTellActivity() {
  const [currentObject, setCurrentObject] = useState(0)
  const objects = [
    {
      name: "Toothbrush",
      image: "/placeholder.svg?height=150&width=150",
      prompts: ["Who uses this?", "What is it for?", "How do we use it?", "When do we use it?"],
    },
    {
      name: "Toy Car",
      image: "/placeholder.svg?height=150&width=150",
      prompts: ["What do you do with this?", "What sounds does it make?", "Where can it go?", "Who plays with it?"],
    },
    {
      name: "Apple",
      image: "/placeholder.svg?height=150&width=150",
      prompts: ["What does it taste like?", "What color is it?", "How do we eat it?", "Where do apples grow?"],
    },
    {
      name: "Backpack",
      image: "/placeholder.svg?height=150&width=150",
      prompts: ["What goes inside it?", "Who carries it?", "Where do we take it?", "How do we wear it?"],
    },
  ]

  return (
    <div className="space-y-4">
      <div className="text-center">
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
          Activity 5: Guided Show & Tell
        </Badge>
      </div>

      <div className="bg-emerald-50 rounded-lg p-4">
        <div className="text-center mb-3">
          <Image
            src={objects[currentObject].image || "/placeholder.svg"}
            alt={objects[currentObject].name}
            width={150}
            height={150}
            className="w-24 h-24 object-cover rounded-lg mx-auto mb-2"
          />
          <h3 className="font-medium">{objects[currentObject].name}</h3>
        </div>

        <div className="bg-white rounded-lg p-3 mb-3">
          <h4 className="font-medium text-sm mb-2">Questions to Ask:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            {objects[currentObject].prompts.map((prompt, index) => (
              <li key={index}>• "{prompt}"</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentObject(Math.max(0, currentObject - 1))}
            disabled={currentObject === 0}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600 self-center">
            {currentObject + 1} of {objects.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentObject(Math.min(objects.length - 1, currentObject + 1))}
            disabled={currentObject === objects.length - 1}
          >
            Next
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <User className="h-4 w-4 text-emerald-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Parent Guide</h4>
            <p className="text-sm text-gray-600">
              Show your child the object and ask the guiding questions. Encourage detailed descriptions and personal
              connections.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            Encourage Your Child To
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Use descriptive words (colors, shapes, textures)</li>
            <li>• Explain how things work or are used</li>
            <li>• Share personal experiences with the object</li>
            <li>• Ask their own questions about the object</li>
          </ul>
        </div>

        <div className="bg-amber-50 rounded-lg p-3">
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <Lightbulb className="h-4 w-4 text-amber-600" />
            Tips for Success
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Let your child hold and explore the object</li>
            <li>• Model descriptive language yourself</li>
            <li>• Ask follow-up questions to extend conversation</li>
            <li>• Praise all attempts at detailed description</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
