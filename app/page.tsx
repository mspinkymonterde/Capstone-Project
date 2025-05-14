import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar, MapPinned, HandHeart, Users2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 md:py-32">
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-center opacity-5"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-white px-4 py-1.5 text-sm font-medium text-green-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="ml-2">Early Support for Brighter Futures</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Empowering Parents of <span className="text-green-600">Special Needs</span> Children
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              A comprehensive support system designed to help parents navigate the journey of raising children with
              special needs through resources, community, and expert guidance.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-green-600 px-8 text-base font-medium hover:bg-green-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-green-200 px-8 text-base font-medium text-green-700 hover:bg-green-50"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id= "article" className="py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Understanding Child Development
            </h2>
            <p className="mt-4 text-lg text-gray-600">Early intervention is crucial for children with special needs</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <DevelopmentalCard
              icon={<Clock className="h-8 w-8 text-green-600" />}
              title="The Importance of Early Intervention"
              description="Learn why early intervention is critical for children with developmental delays or special needs."
            />
            <DevelopmentalCard
              icon={<MapPinned className="h-8 w-8 text-green-600" />}
              title="Recognizing Developmental Milestones"
              description="Understand key developmental milestones and how to identify potential delays."
            />
            <DevelopmentalCard
              icon={<HandHeart className="h-8 w-8 text-green-600" />}
              title="Supporting Your Child's Journey"
              description="Discover strategies to support your child's unique developmental path."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-3 md:py-6 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">How It Works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow these easy steps to get started and make the most of our support platform.
                </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold">Create an Account</h3>
                  <p className="text-gray-600">Simple registration process with minimal information required.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold">Complete Your Profile</h3>
                  <p className="text-gray-600">Tell us about your child's needs to receive personalized support.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold">Access Resources</h3>
                  <p className="text-gray-600">
                    Browse through our library of resources tailored to your child's needs.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold">Track Progress</h3>
                  <p className="text-gray-600">Monitor your child's development and celebrate milestones together.</p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Platform usage illustration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About CSN Center*/}
      <section id="about" className="relative w-full py-8 md:py-16 lg:py-20 flex items-center justify-center min-h-[300px]">
        <Image
          src="https://th.bing.com/th/id/OIP.JBHjJ7woejc9HW7jGU3eQAHaEK?rs=1&pid=ImgDetMain"
          alt="About background"
          fill
          className="object-cover object-center opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">About CSN Center Parañaque</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-4">
        CSN Center Parañaque is a local government-funded facility dedicated to providing free therapy and support for children with special needs. The center specializes in community-based rehabilitation and rights-based programs, empowering children with disabilities and their families to thrive.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6">
        Our services are designed to be accessible and holistic, ensuring every child receives the care and guidance they deserve. We believe in fostering an inclusive community where every child’s potential is recognized and nurtured.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">Occupational Therapy</span>
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">Speech & Language Therapy</span>
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">Physical Therapy</span>
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">Music Therapy</span>
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">ABA Therapy</span>
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">Transition Sessions</span>
          </div>
          <p className="mt-6 text-base text-gray-600">
        All therapy sessions and support services are <span className="font-semibold text-green-700">offered free of charge</span> to children and families in Parañaque.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="event" className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join our community events and workshops for parents and children
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Parent Support Group Meeting"
              date="May 20, 2025"
              time="2:00 PM - 4:00 PM"
              location="Parañaque City Community Center"
              description="Connect with other parents of special needs children to share experiences and support."
            />
            <EventCard
              title="Speech Therapy Workshop"
              date="May 25, 2025"
              time="10:00 AM - 12:00 PM"
              location="CSN Parañaque Center"
              description="Learn practical speech therapy techniques you can use at home with your child."
            />
            <EventCard
              title="Sensory Play Day"
              date="June 5, 2025"
              time="9:00 AM - 11:00 AM"
              location="Parañaque City Park"
              description="A fun outdoor event with sensory activities designed for children with special needs."
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/events">
              <Button
                variant="outline"
                className="rounded-full border-green-200 px-6 py-2 text-green-700 hover:bg-green-50"
              >
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Parent Testimonials Section */}
      <section>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <div className="mb-10" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                Parent Testimonials
                </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from parents who have benefited from our support system.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <Card className="border-green-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600 italic">
                    "This platform has been a lifesaver for our family. The resources are easy to access and the
                    progress tracking helps us see how far our son has come."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-2">
                      <Users2 className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Maria Santos</p>
                      <p className="text-sm text-gray-500">Mother of a 7-year-old with autism</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600 italic">
                    "As a parent who isn't very tech-savvy, I appreciate how easy this system is to use. The clear
                    layout and simple navigation make it accessible for everyone."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-2">
                      <Users2 className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Roberto Cruz</p>
                      <p className="text-sm text-gray-500">Father of a 5-year-old with developmental delays</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Supportive Community Today
              </h2>
              <p className="max-w-[900px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get access to resources, support, and a community of parents who understand your journey.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button className="rounded-full bg-white text-green-600 hover:bg-green-50">Register Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


function DevelopmentalCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-50 transition-all group-hover:bg-green-100"></div>
      <div className="relative">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-6 text-gray-600">{description}</p>
        <Link
          href={`/blog/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function EventCard({
  title,
  date,
  time,
  location,
  description,
}: {
  title: string
  date: string
  time: string
  location: string
  description: string
}) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
      <div className="bg-green-600 p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="p-6">
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-700">
              {date} • {time}
            </p>
          </div>
          <p className="text-sm text-gray-700">{location}</p>
        </div>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
          Register for Event
        </Button>
      </div>
    </div>
  )
}