"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Users,
  Heart,
  Brain,
  MessageSquare,
  Dumbbell,
  Music,
  Stethoscope,
  Clock,
  Award,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { CSNHeader } from "@/components/csn-header"
import { CSNFooter } from "@/components/csn-footer"
import { TherapyCard } from "@/components/therapy-card"
import { HeroBanner } from "@/components/hero-banner"
import { FacilitiesGallery } from "@/components/facilities-gallery"
import { BlogSection } from "@/components/blog-section"
import { EventCard } from "@/components/event-card"

export default function CSNLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="highlight-bar inline-block">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About CSN Center Parañaque
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Centro de Servicios de Niños - Dedicated to providing comprehensive support and therapeutic services for
              children with special needs and their families in Parañaque City.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-16">
                        <Card className="gov-card border-teal-100">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-csn-green">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-csn-green">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  A community where every child with special needs has access to quality care, support, and
                  opportunities for growth, development, and meaningful participation in society.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gov-card border-teal-100">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-csn-teal">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-csn-green">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  To provide accessible, high-quality therapeutic services and support systems that empower children
                  with special needs to reach their full potential through evidence-based interventions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visual Grid of Activities */}
          <div className="grid gap-4 md:grid-cols-4">
            <div className="image-hover rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Therapy room activities"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="image-overlay">
                <span>Therapy Rooms</span>
              </div>
            </div>
            <div className="image-hover rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Play area activities"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="image-overlay">
                <span>Play Areas</span>
              </div>
            </div>
            <div className="image-hover rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Staff working with children"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="image-overlay">
                <span>Expert Staff</span>
              </div>
            </div>
            <div className="image-hover rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Group activities"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="image-overlay">
                <span>Group Activities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="highlight-bar inline-block">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            </div>
            <p className="text-lg text-gray-600">
              Comprehensive therapeutic services designed to support your child's development and growth at every stage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TherapyCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Speech Therapy"
              description="Comprehensive speech and language intervention to improve communication skills and social interaction."
              features={["Language Development", "Articulation Training", "Social Communication", "Feeding Therapy"]}
              color="teal"
            />
            <TherapyCard
              icon={<Dumbbell className="h-8 w-8" />}
              title="Occupational Therapy"
              description="Helping children develop daily living skills, fine motor abilities, and sensory processing."
              features={["Fine Motor Skills", "Sensory Integration", "Daily Living Skills", "Handwriting Support"]}
              color="green"
            />
            <TherapyCard
              icon={<Stethoscope className="h-8 w-8" />}
              title="Physical Therapy"
              description="Improving gross motor skills, strength, balance, and coordination through targeted exercises."
              features={["Gross Motor Development", "Balance Training", "Strength Building", "Mobility Support"]}
              color="yellow"
            />
            <TherapyCard
              icon={<Brain className="h-8 w-8" />}
              title="ABA Therapy"
              description="Applied Behavior Analysis to support behavioral development and learning skills."
              features={["Behavior Modification", "Skill Acquisition", "Social Skills Training", "Parent Training"]}
              color="teal"
            />
            <TherapyCard
              icon={<Music className="h-8 w-8" />}
              title="Music Therapy"
              description="Using music to support emotional, cognitive, and social development in children."
              features={["Emotional Expression", "Cognitive Development", "Social Interaction", "Creative Arts"]}
              color="green"
            />
            <TherapyCard
              icon={<Heart className="h-8 w-8" />}
              title="Family Support"
              description="Comprehensive support services for families including counseling and education."
              features={["Parent Training", "Family Counseling", "Support Groups", "Resource Navigation"]}
              color="yellow"
            />
          </div>
        </div>
      </section>

      {/* Parent Support Section - Special Feature */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-csn-teal via-csn-green to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container px-2 sm:px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block px-4 py-2 bg-csn-yellow text-csn-green rounded-full text-sm font-medium mb-4 animate-bounce-soft">
                ✨ Special Feature
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">Need help with early intervention?</h2>
              <p className="text-base sm:text-xl text-teal-100 mb-6 md:mb-8">
                We're here to guide you through your child's developmental journey.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              {/* Left side - Visual collage */}
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="image-hover rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Parents using support system"
                      width={300}
                      height={200}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                    <div className="image-overlay">
                      <span>Parent Support Interface</span>
                    </div>
                  </div>
                  <div className="image-hover rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=300"
                      alt="Developmental guides"
                      width={300}
                      height={150}
                      className="w-full h-28 sm:h-36 object-cover"
                    />
                    <div className="image-overlay">
                      <span>Expert Guides</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-4 sm:mt-8">
                  <div className="image-hover rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=150&width=300"
                      alt="Family activities"
                      width={300}
                      height={150}
                      className="w-full h-28 sm:h-36 object-cover"
                    />
                    <div className="image-overlay">
                      <span>Home Activities</span>
                    </div>
                  </div>
                  <div className="image-hover rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Parent workshops"
                      width={300}
                      height={200}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                    <div className="image-overlay">
                      <span>Parent Workshops</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="text-center md:text-left mt-8 md:mt-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Parent Support System</h3>
                <p className="text-base sm:text-lg text-teal-100 mb-6 sm:mb-8">
                  Our Parent Support System is designed to guide you through your child's developmental journey —
                  whether they're diagnosed or not. Use personalized checklists, access expert-recommended modules, and
                  stay informed about your child's growth.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <Brain className="h-4 w-4" />
                    </div>
                    <span className="text-sm sm:text-base">Personalized developmental checklists</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <Users className="h-4 w-4" />
                    </div>
                    <span className="text-sm sm:text-base">Expert-recommended learning modules</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <Heart className="h-4 w-4" />
                    </div>
                    <span className="text-sm sm:text-base">Community support and resources</span>
                  </div>
                </div>

                <Link href="/parent/register">
                  <Button
                    size="lg"
                    className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-csn-yellow text-csn-green hover:bg-yellow-400 transition-smooth animate-bounce-soft rounded-full w-full sm:w-auto"
                  >
                    Access the Parent Support System
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Featured Blog Preview */}
            <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Featured Resources</h3>
              <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
                <Card className="bg-white/10 border-white/20 text-white gov-card">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=150&width=300"
                      alt="Understanding developmental delays"
                      width={300}
                      height={150}
                      className="w-full h-24 sm:h-32 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-base sm:text-lg">Understanding Developmental Delays</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-teal-100 text-xs sm:text-sm mb-2 sm:mb-4">
                      Learn about early signs and intervention strategies for developmental delays.
                    </p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white gov-card">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=150&width=300"
                      alt="Early signs to watch"
                      width={300}
                      height={150}
                      className="w-full h-24 sm:h-32 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-base sm:text-lg">5 Early Signs You Shouldn't Ignore</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-teal-100 text-xs sm:text-sm mb-2 sm:mb-4">
                      Key developmental milestones and warning signs every parent should know.
                    </p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 text-white gov-card">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=150&width=300"
                      alt="Home-based support"
                      width={300}
                      height={150}
                      className="w-full h-24 sm:h-32 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-base sm:text-lg">How to Start Home-Based Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-teal-100 text-xs sm:text-sm mb-2 sm:mb-4">
                      Practical strategies for supporting your child's development at home.
                    </p>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Gallery Section */}
      <FacilitiesGallery />

      {/* Blog & Updates Section */}
      <BlogSection />

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="highlight-bar inline-block">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Upcoming Events & Workshops
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Join our community events, educational workshops, and support group meetings designed for families and
              professionals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <EventCard
              title="Parent Support Group Meeting"
              date="December 15, 2024"
              time="2:00 PM - 4:00 PM"
              location="CSN Center Main Hall"
              description="Monthly support group meeting for parents of children with special needs. Share experiences, learn from each other, and build lasting connections with other families."
              rsvpLink="https://forms.google.com/parent-support-group"
              category="Support Group"
              featured={true}
            />
            <EventCard
              title="Early Intervention Workshop"
              date="December 20, 2024"
              time="9:00 AM - 12:00 PM"
              location="CSN Training Room"
              description="Comprehensive workshop on early intervention strategies and techniques for supporting your child's development from birth to 5 years."
              rsvpLink="https://forms.google.com/early-intervention"
              category="Workshop"
              featured={false}
            />
            <EventCard
              title="Sensory Play Workshop"
              date="January 10, 2025"
              time="10:00 AM - 11:30 AM"
              location="CSN Therapy Garden"
              description="Hands-on workshop exploring sensory play activities that support child development and can be easily implemented at home."
              rsvpLink="https://forms.google.com/sensory-play"
              category="Workshop"
              featured={false}
            />
            <EventCard
              title="ABA Therapy Information Session"
              date="January 15, 2025"
              time="3:00 PM - 5:00 PM"
              location="CSN Conference Room"
              description="Learn about Applied Behavior Analysis (ABA) therapy, its benefits, and how it can support your child's behavioral and learning development."
              rsvpLink="https://forms.google.com/aba-info-session"
              category="Information Session"
              featured={false}
            />
            <EventCard
              title="Family Fun Day"
              date="January 25, 2025"
              time="9:00 AM - 3:00 PM"
              location="CSN Center & Garden"
              description="A special day of activities, games, and bonding for the whole family. Includes therapeutic activities, lunch, and entertainment for children."
              rsvpLink="https://forms.google.com/family-fun-day"
              category="Community Event"
              featured={true}
            />
            <EventCard
              title="Speech Therapy Techniques for Parents"
              date="February 5, 2025"
              time="1:00 PM - 3:30 PM"
              location="CSN Speech Therapy Room"
              description="Practical session teaching parents simple speech therapy techniques they can use at home to support their child's communication development."
              rsvpLink="https://forms.google.com/speech-therapy-parents"
              category="Workshop"
              featured={false}
            />
          </div>

          {/* Event Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="rounded-full border-csn-teal text-csn-teal hover:bg-csn-teal hover:text-white"
            >
              All Events
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-csn-green text-csn-green hover:bg-csn-green hover:text-white"
            >
              Workshops
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
            >
              Support Groups
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Community Events
            </Button>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-csn-teal/10 to-csn-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Miss Out!</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest events, workshops, and community activities. Subscribe to our newsletter or
              follow us on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button className="bg-csn-teal hover:bg-csn-teal/90 text-white rounded-full px-6">
                  View All Events
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-csn-green text-csn-green hover:bg-csn-green hover:text-white rounded-full px-6"
              >
                Subscribe to Newsletter
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gray-50">
        <div className="container px-2 sm:px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-10 md:mb-16">
            <div className="highlight-bar inline-block">
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Contact Us
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600">
              Get in touch with our team for more information about our services and programs.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="gov-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-teal-100 text-csn-teal">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">Visit Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        CSN CENTER PARANAQUE
                        <br />
                        Col. E. de Leon Street
                        <br />
                        Barangay Sto. Nino
                        <br />
                        Parañaque, Philippines
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gov-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-100 text-csn-green">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">Call Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Main Line: 0960 250 1011
                        <br />
                        Emergency: 911
                        <br />
                        Parañaque Hotline: 8-PARANAQUE
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gov-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-yellow-100 text-csn-green">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">Email Us</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        General: csncenterparanaque@gmail.com
                        <br />
                        Support: support@csn-paranaque.gov.ph
                        <br />
                        Appointments: appointments@csn-paranaque.gov.ph
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gov-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-teal-100 text-csn-teal">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">Office Hours</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 8:00 AM - 12:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              {/* Google Map Placeholder */}
              <Card className="mt-4 sm:mt-6 gov-card">
                <CardContent className="p-0">
                  <div className="h-56 sm:h-64 w-full rounded-lg bg-gradient-to-br from-teal-100 to-green-100 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="mx-auto h-7 w-7 sm:h-8 sm:w-8 mb-2 text-csn-teal" />
                      <p className="font-medium text-sm sm:text-base">Google Maps Integration</p>
                      <p className="text-xs sm:text-sm">CSN Center Parañaque Location</p>
                      <p className="text-xs mt-1 sm:mt-2">Col. E. de Leon Street, Brgy. Sto. Nino</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
