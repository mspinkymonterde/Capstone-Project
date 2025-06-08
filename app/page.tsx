"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  MapPin,
  Users,
  Heart,
  Brain,
  MessageSquare,
  Dumbbell,
  Music,
  Stethoscope,
  Goal,
  Facebook,
  Briefcase,
  IterationCcw, 
  HandHeart
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TherapyCard } from "@/components/therapy-card"
import { HeroBanner } from "@/components/hero-banner"
import { Gallery } from "@/components/gallery"
import { BlogSection } from "@/components/blog-section"
import CsnEvents from "@/components/csn-events"

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
      <section  className="py-20 bg-white">
        <div id="about" className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="highlight-bar inline-block">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                CSN Center Parañaque
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              A Parañaque service center for Children with Special Needs and their families.
            </p>
          </div>

            <div className="grid gap-8 md:grid-cols-[1.2fr_2fr] mb-16">
            <Card className="gov-card border-teal-100">
              <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-csn-teal">
                <Goal className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl text-csn-green">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-center text-gray-600 mb-4 space-y-2">
                The CSN Center Parañaque envisions a community that is inclusive where the rights of every child with disabilities are protected & exercised. Every child with special needs is empowered and nurtured in a safe & embracing environment which allows them to actively participate in community life; where they thrive and achieve their fullest potential as valuable members of society.
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
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    The CSN Center is dedicated to championing the rights of children with special needs and leading every effort to cultivate a safe and inclusive community where every child has the opportunity to participate fully in society.
                  </li>
                  <li>
                    Our mission is to actively involve diverse sectors of society in fostering self-development for children with disabilities. We aim to ensure that the City Government of Parañaque has a cohesive strategy through the Comprehensive Program for Children with Special Needs, making essential services readily available and accessible to children with disabilities & their families.
                  </li>
                  <li>
                    To be the leading local government facility that provides comprehensive, holistic, rights-based, participatory, and inclusive programs & services for children with disabilities.
                  </li>
                </ul>
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
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
            </div>
            <p className="text-lg text-gray-600">
              Helping children with special needs through therapy and care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <TherapyCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Speech & Language Therapy"
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
              icon={<Briefcase className="h-8 w-8" />}
              title="Pre-vocational Training"
              description="Preparing children for future employment through skill development and job readiness training."
              features={["Job Skills Training", "Workplace Readiness", "Social Skills", "Life Skills Coaching"]}
              color="yellow"
            />
            <TherapyCard
              icon={<IterationCcw className="h-8 w-8" />}
              title="Transition Programs"
              description="Supporting children with special needs in transitioning to adulthood and independent living."
              features={["Life Skills Training", "Job Readiness", "Social Integration", "Community Engagement"]}
              color="teal"
            />
            <TherapyCard
              icon={<HandHeart className="h-8 w-8" />}
              title="Parents Training Program"
              description="Comprehensive support services for families including counseling and education."
              features={["Parent Training", "Family Counseling", "Support Groups", "Resource Navigation"]}
              color="green"
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
      <Gallery 
      />

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


            <CsnEvents />

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-csn-teal/10 to-csn-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Miss Out!</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest events, workshops, and community activities. <br /> Follow us on Facebook!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center transition-smooth animate-bounce-soft rounded-full w-full sm:w-auto">
              <Link
              href="https://www.facebook.com/csncenterparanaque"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Button className="bg-csn-teal hover:bg-csn-teal/90 text-white rounded-full px-6">
                <Facebook className="h-10 w-10" />
                Visit Facebook Page
              </Button>
              </Link>
            </div>
            </div>
          </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 md:py-20 bg-gray-50">
            <div className="container px-2 sm:px-4 md:px-6">
              <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2">
              {/* Left: Google Map */}
              <div>
                <Card className="gov-card h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-teal-100 text-csn-teal">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">Visit Us</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-56 sm:h-64 w-full rounded-lg overflow-hidden">
                  <iframe
                    title="CSN Center Parañaque Location"
                    src="https://www.google.com/maps?q=CSN+CENTER+PARANAQUE+Col.+E.+de+Leon+Street,+Barangay+Sto.+Nino,+Parañaque,+Philippines&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "224px" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  </div>
                </CardContent>
                </Card>
              </div>

              {/* Right: Facebook Integration */}
              <div>
                <Card className="gov-card h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-teal-100 text-csn-teal">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">Follow Us</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full flex items-center justify-center overflow-x-auto">
                    <div className="h-56 sm:h-64 w-full max-w-[500px] mx-auto flex items-center justify-center rounded-lg bg-white">
                      <iframe
                        title="CSN Center Parañaque Facebook Page"
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCSNCenterParanaque&tabs=timeline&small_header=true&hide_cover=false&show_facepile=true&adapt_container_width=false&width=500"
                        width="500"
                        height="256"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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
