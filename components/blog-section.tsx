"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Inside Our New Sensory Room",
    excerpt:
      "Explore how our sensory room supports children with sensory processing needs and enhances therapeutic outcomes.",
    image: "/placeholder.svg?height=200&width=300",
    date: "December 10, 2024",
    author: "Dr. Maria Santos",
    category: "Facilities",
    type: "announcement",
    readTime: "3 min read",
    views: 245,
  },
  {
    id: 2,
    title: "Seminar Recap: Understanding ABA Therapy",
    excerpt:
      "Last week's seminar walked parents through core ABA strategies they can apply at home with their children.",
    image: "/placeholder.svg?height=200&width=300",
    date: "December 8, 2024",
    author: "CSN Team",
    category: "Education",
    type: "event-recap",
    readTime: "5 min read",
    views: 189,
  },
  {
    id: 3,
    title: "A Day with a Developmental Pediatrician",
    excerpt: "We spent a morning observing real evaluations — here's what to expect during your child's assessment.",
    image: "/placeholder.svg?height=200&width=300",
    date: "December 5, 2024",
    author: "Dr. Juan Dela Cruz",
    category: "Assessment",
    type: "therapy-tip",
    readTime: "4 min read",
    views: 312,
  },
  {
    id: 4,
    title: "Early Intervention Success Stories",
    excerpt:
      "Meet three families who started their journey with us and see the incredible progress their children have made.",
    image: "/placeholder.svg?height=200&width=300",
    date: "December 3, 2024",
    author: "CSN Team",
    category: "Success Stories",
    type: "announcement",
    readTime: "6 min read",
    views: 428,
  },
  {
    id: 5,
    title: "Home-Based Speech Therapy Activities",
    excerpt: "Simple, effective activities you can do at home to support your child's speech and language development.",
    image: "/placeholder.svg?height=200&width=300",
    date: "November 30, 2024",
    author: "Speech Therapy Team",
    category: "Therapy Tips",
    type: "therapy-tip",
    readTime: "7 min read",
    views: 567,
  },
  {
    id: 6,
    title: "Understanding Sensory Processing Disorders",
    excerpt: "Learn about sensory processing challenges and how occupational therapy can help your child thrive.",
    image: "/placeholder.svg?height=200&width=300",
    date: "November 28, 2024",
    author: "OT Team",
    category: "Education",
    type: "therapy-tip",
    readTime: "5 min read",
    views: 234,
  },
]

const categories = ["All", "Education", "Therapy Tips", "Facilities", "Success Stories", "Assessment"]
const typeColors = {
  announcement: "bg-blue-100 text-blue-700",
  "therapy-tip": "bg-csn-green text-white",
  "event-recap": "bg-csn-yellow text-csn-green",
}

export function BlogSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularPosts = blogPosts.sort((a, b) => b.views - a.views).slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="highlight-bar inline-block">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              CSN Center Blog & Updates
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Stay informed on therapies, parenting tips, center activities, and more.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-smooth ${
                    selectedCategory === category
                      ? "bg-csn-teal text-white"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Blog Grid */}
          <div className="lg:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="gov-card overflow-hidden">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={typeColors[post.type as keyof typeof typeColors]}>
                        {post.type.replace("-", " ")}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="text-lg hover:text-csn-teal transition-smooth">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="group">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Articles */}
            <Card className="gov-card">
              <CardHeader>
                <CardTitle className="text-lg">What's Popular</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-csn-teal text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-sm font-medium hover:text-csn-teal transition-smooth"
                      >
                        {post.title}
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Eye className="h-3 w-3" />
                        {post.views} views
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="gov-card bg-gradient-to-br from-csn-teal to-csn-green text-white">
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
                <CardDescription className="text-teal-100">
                  Get the latest articles and updates delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Button className="w-full bg-csn-yellow text-csn-green hover:bg-yellow-400">Subscribe</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="gov-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/services" className="block text-sm hover:text-csn-teal transition-smooth">
                  Our Services
                </Link>
                <Link href="/parent/register" className="block text-sm hover:text-csn-teal transition-smooth">
                  Parent Portal
                </Link>
                <Link href="/events" className="block text-sm hover:text-csn-teal transition-smooth">
                  Upcoming Events
                </Link>
                <Link href="/contact" className="block text-sm hover:text-csn-teal transition-smooth">
                  Contact Us
                </Link>
                <Link href="/faq" className="block text-sm hover:text-csn-teal transition-smooth">
                  FAQ
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
