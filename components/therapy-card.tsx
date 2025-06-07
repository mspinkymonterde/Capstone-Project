import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface TherapyCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  color?: "teal" | "green" | "yellow"
}

export function TherapyCard({ icon, title, description, features, color = "teal" }: TherapyCardProps) {
  const colorClasses = {
    teal: {
      iconBg: "bg-teal-100",
      iconText: "text-csn-teal",
      border: "border-teal-100",
      button: "border-teal-200 text-csn-teal hover:bg-teal-50",
      check: "text-csn-teal",
    },
    green: {
      iconBg: "bg-green-100",
      iconText: "text-csn-green",
      border: "border-green-100",
      button: "border-green-200 text-csn-green hover:bg-green-50",
      check: "text-csn-green",
    },
    yellow: {
      iconBg: "bg-yellow-100",
      iconText: "text-csn-green",
      border: "border-yellow-100",
      button: "border-yellow-200 text-csn-green hover:bg-yellow-50",
      check: "text-csn-green",
    },
  }

  const colors = colorClasses[color]

  return (
    <Card className={cn("gov-card h-full", colors.border)}>
      <CardHeader>
        <div
          className={cn("flex h-12 w-12 items-center justify-center rounded-full mb-4", colors.iconBg, colors.iconText)}
        >
          {icon}
        </div>
        <CardTitle className="text-xl text-csn-green">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <Check className={cn("h-4 w-4 flex-shrink-0", colors.check)} />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="outline" className={cn("w-full transition-smooth group", colors.button)}>
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  )
}
