"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ExternalLink, Star } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  description: string
  rsvpLink: string
  category?: string
  featured?: boolean
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  rsvpLink,
  category = "Event",
  featured = false,
}: EventCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "workshop":
        return "bg-csn-green text-white"
      case "support group":
        return "bg-csn-teal text-white"
      case "community event":
        return "bg-yellow-500 text-white"
      case "information session":
        return "bg-purple-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <Card
      className={`gov-card h-full transition-all duration-300 hover:shadow-lg ${
        featured ? "border-csn-yellow border-2 shadow-md" : "border-teal-100"
      }`}
    >
      <CardHeader
        className={`${
          featured
            ? "bg-gradient-to-r from-csn-teal to-csn-green text-white"
            : "bg-gradient-to-r from-gray-50 to-gray-100"
        } rounded-t-lg relative`}
      >
        {featured && (
          <div className="absolute -top-2 -right-2">
            <Badge className="bg-csn-yellow text-csn-green font-semibold">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
        <div className="flex justify-between items-start mb-2">
          <Badge className={getCategoryColor(category)} variant="secondary">
            {category}
          </Badge>
        </div>
        <CardTitle className={`text-lg ${featured ? "text-white" : "text-gray-900"}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="space-y-3 mb-6 flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-csn-teal" />
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 text-csn-teal" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 text-csn-teal" />
            <span>{location}</span>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">{description}</p>
        </div>

        <div className="space-y-3">
          <Button
            className={`w-full transition-all duration-300 group ${
              featured
                ? "bg-csn-yellow text-csn-green hover:bg-yellow-400"
                : "bg-csn-teal hover:bg-csn-teal/90 text-white"
            }`}
            onClick={() => window.open(rsvpLink, "_blank")}
          >
            RSVP Now
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          {featured && (
            <div className="text-center">
              <span className="text-xs text-gray-500 bg-yellow-50 px-2 py-1 rounded-full">Limited Seats Available</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
