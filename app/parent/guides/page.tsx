"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, HeartHandshake, Dumbbell, Brain, Puzzle, ArrowRight } from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="container p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Developmental Guides</h1>
        <p className="text-gray-600">Browse comprehensive guides for different developmental areas</p>
      </div>

      <Tabs defaultValue="speech" className="w-full">
        <TabsList className="mb-6 bg-white text-gray-700">
          <TabsTrigger value="speech" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Speech & Language
          </TabsTrigger>
          <TabsTrigger value="cognitive" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Cognitive
          </TabsTrigger>
          <TabsTrigger value="motor" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Motor Skills
          </TabsTrigger>
          <TabsTrigger value="social" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Social & Emotional
          </TabsTrigger>
          <TabsTrigger value="adaptive" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
            Adaptive Skills
          </TabsTrigger>
        </TabsList>

            {/* Speech & Language Content */}
            <TabsContent value="speech">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    < MessageSquare className="h-6 w-6 mr-2 text-green-700" />
                    Speech & Language Development
                  </CardTitle>
                  <CardDescription>Communication skills development and language acquisition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Overview</h3>
                    <p>
                      Speech and language development involves learning to communicate through sounds, words, and
                      sentences. It includes both receptive language (understanding) and expressive language (speaking).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Milestones</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">0-12 Months</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Responds to sounds</li>
                          <li>Babbles and makes cooing sounds</li>
                          <li>Begins to understand simple words</li>
                          <li>May say first words like "mama" or "dada"</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">1-2 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Uses 10-50 words</li>
                          <li>Follows simple directions</li>
                          <li>Begins to combine two words</li>
                          <li>Points to named objects</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">2-3 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Uses 200+ words</li>
                          <li>Speaks in 2-3 word sentences</li>
                          <li>Asks simple questions</li>
                          <li>Names familiar objects and people</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">3-5 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Uses 1000+ words</li>
                          <li>Speaks in complete sentences</li>
                          <li>Tells simple stories</li>
                          <li>Follows multi-step directions</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">5-7 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Uses complex sentences</li>
                          <li>Understands time concepts</li>
                          <li>Tells detailed stories</li>
                          <li>Begins reading and writing</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support Strategies</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Talk to your child frequently throughout the day</li>
                      <li>Read books together daily</li>
                      <li>Sing songs and recite nursery rhymes</li>
                      <li>Describe what you're doing during daily activities</li>
                      <li>Respond to your child's attempts to communicate</li>
                      <li>Use clear, simple language</li>
                      <li>
                        Expand on what your child says (e.g., if they say "ball," you say "Yes, that's a red ball")
                      </li>
                    </ul>
                  </div>

                  {/* Recommended Activities */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Recommended Activities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Picture Naming</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Look at picture books together and name objects, actions, and people. Ask your child to point to specific items.
                          </p>
                          <div className="mt-4">
                            <span className="inline-block rounded bg-green-50 text-green-700 text-xs px-2 py-1">Age range: 1-5 years</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Simon Says</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Play Simon Says to practice following directions. Start with simple commands and gradually increase complexity.
                          </p>
                          <div className="mt-4">
                            <span className="inline-block rounded bg-green-50 text-green-700 text-xs px-2 py-1">Age range: 2-5 years</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Storytelling</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Create simple stories together. Use pictures, puppets, or toys to make it more engaging.
                          </p>
                          <div className="mt-4">
                            <span className="inline-block rounded bg-green-50 text-green-700 text-xs px-2 py-1">Age range: 3-5 years</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* When to Seek Help */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 mt-6">When to Seek Help</h3>
                    <p className="mb-2">
                      While all children develop at their own pace, certain signs may indicate a need for professional evaluation:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm mb-2">
                      <li>Not babbling by 9 months</li>
                      <li>Not using gestures (pointing, waving) by 12 months</li>
                      <li>Not speaking single words by 16 months</li>
                      <li>Not combining two words by 24 months</li>
                      <li>Difficulty understanding simple instructions by 18 months</li>
                      <li>Loss of previously acquired speech or language skills</li>
                    </ul>
                    <p>
                      If you have concerns about your child's speech and language development, consult with your pediatrician or a speech-language pathologist.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button asChild className="border-green-600 hover:bg-green-700">
                      <Link href="/activity-modules?area=speech">
                        View Speech & Language Activities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Cognitive Content */}
            <TabsContent value="cognitive">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-6 w-6 mr-2 text-green-700" />
                    Cognitive Development
                  </CardTitle>
                  <CardDescription>Thinking, learning, problem-solving, and understanding</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Overview</h3>
                    <p>
                      Cognitive development refers to how children think, explore, and figure things out. It involves
                      the development of knowledge, skills, problem-solving, and dispositions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Areas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Sensorimotor</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            From birth to about 2 years, children learn through their senses and motor actions. They
                            develop object permanence and begin to use mental representation.
                          </p>
                          <div className="mt-4">
                            <h4 className="font-medium text-sm">Activities:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Peek-a-boo games</li>
                              <li>Hide and find toys</li>
                              <li>Sensory play with different textures</li>
                              <li>Cause and effect toys (buttons, levers)</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Pre-operational</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            From about 2 to 7 years, children develop language and imagination but still think
                            concretely. They struggle with logic and taking the viewpoint of others.
                          </p>
                          <div className="mt-4">
                            <h4 className="font-medium text-sm">Activities:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Sorting and classifying objects</li>
                              <li>Simple puzzles</li>
                              <li>Pretend play</li>
                              <li>Memory games</li>
                              <li>Basic counting activities</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support Strategies</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Provide opportunities for exploration and discovery</li>
                      <li>Ask open-ended questions</li>
                      <li>Encourage problem-solving</li>
                      <li>Play games that involve memory and attention</li>
                      <li>Introduce new concepts gradually</li>
                      <li>Connect new information to what they already know</li>
                      <li>Allow time for imaginative play</li>
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <Button asChild className="border-green-600 hover:bg-green-700">
                      <Link href="/activity-modules?area=cognitive">
                        View Cognitive Activities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Motor Skills Content */}
            <TabsContent value="motor">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Dumbbell className="h-6 w-6 mr-2 text-green-700" />
                    Motor Skills Development
                  </CardTitle>
                  <CardDescription>Physical movement, coordination, and control</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Overview</h3>
                    <p>
                      Motor development involves learning to control and coordinate movements of the body. It includes
                      both gross motor skills (large movements) and fine motor skills (small, precise movements).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Areas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Gross Motor</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Gross motor skills involve the large muscles of the body for movements like crawling,
                            walking, running, jumping, and balance.
                          </p>
                          <div className="mt-4">
                            <h4 className="font-medium text-sm">Milestones:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Sitting up (6-8 months)</li>
                              <li>Crawling (8-10 months)</li>
                              <li>Walking (12-15 months)</li>
                              <li>Running (2 years)</li>
                              <li>Jumping with both feet (2-3 years)</li>
                              <li>Riding a tricycle (3-4 years)</li>
                              <li>Hopping on one foot (4-5 years)</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Fine Motor</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Fine motor skills involve the small muscles of the hands and fingers for activities like
                            grasping, drawing, and manipulating objects.
                          </p>
                          <div className="mt-4">
                            <h4 className="font-medium text-sm">Milestones:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Grasping objects (3-4 months)</li>
                              <li>Transferring objects between hands (6-7 months)</li>
                              <li>Pincer grasp (9-10 months)</li>
                              <li>Stacking blocks (12-18 months)</li>
                              <li>Using utensils (2-3 years)</li>
                              <li>Drawing simple shapes (3-4 years)</li>
                              <li>Cutting with scissors (4-5 years)</li>
                              <li>Writing letters and numbers (5-6 years)</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support Strategies</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Provide plenty of opportunities for physical play</li>
                      <li>Encourage activities like crawling, climbing, and jumping</li>
                      <li>Offer toys that require manipulation (blocks, beads, puzzles)</li>
                      <li>Practice drawing, coloring, and cutting</li>
                      <li>Play games that involve throwing and catching</li>
                      <li>Engage in activities that build hand strength (playdough, clay)</li>
                      <li>Break down complex skills into smaller steps</li>
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <Button asChild className="border-green-600 hover:bg-green-700">
                      <Link href="/activity-modules?area=motor">
                        View Motor Skill Activities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Social & Emotional Content */}
            <TabsContent value="social">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HeartHandshake className="h-6 w-6 mr-2 text-green-700" />
                    Social & Emotional Development
                  </CardTitle>
                  <CardDescription>Understanding feelings, relationships, and social interactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Overview</h3>
                    <p>
                      Social and emotional development involves learning to understand and manage emotions, build
                      relationships with others, and develop self-awareness and empathy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Milestones</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">0-12 Months</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Develops attachment to caregivers</li>
                          <li>Responds to others' emotions</li>
                          <li>Shows interest in faces</li>
                          <li>Begins to show emotions like joy, fear, and anger</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">1-2 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Shows affection to familiar people</li>
                          <li>May have separation anxiety</li>
                          <li>Begins to show empathy</li>
                          <li>Engages in parallel play (playing alongside others)</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">2-3 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Becomes more independent</li>
                          <li>Shows defiant behavior</li>
                          <li>Begins to take turns</li>
                          <li>Shows increasing interest in other children</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">3-5 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Engages in cooperative play</li>
                          <li>Develops friendships</li>
                          <li>Understands and follows rules</li>
                          <li>Expresses a wide range of emotions</li>
                          <li>Begins to regulate emotions</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">5-7 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Forms more complex friendships</li>
                          <li>Understands others' perspectives</li>
                          <li>Develops better emotional regulation</li>
                          <li>Shows increased empathy and compassion</li>
                          <li>Follows social norms and rules</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support Strategies</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Respond consistently to your child's needs</li>
                      <li>Label and talk about emotions</li>
                      <li>Model appropriate emotional expression</li>
                      <li>Provide opportunities for social interaction</li>
                      <li>Teach conflict resolution skills</li>
                      <li>Use positive reinforcement</li>
                      <li>Create a safe, nurturing environment</li>
                      <li>Read books about feelings and relationships</li>
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <Button asChild className="border-green-600 hover:bg-green-700">
                      <Link href="/activity-modules?area=social">
                        View Social & Emotional Activities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Adaptive Content */}
            <TabsContent value="adaptive">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Puzzle className="h-6 w-6 mr-2 text-green-700" />
                    Adaptive Development
                  </CardTitle>
                  <CardDescription>Self-help skills and daily living activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Overview</h3>
                    <p>
                      Adaptive development refers to the skills needed for daily living and self-care. These include
                      eating, dressing, toileting, and personal hygiene.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Milestones</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">0-12 Months</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Feeds from bottle or breast</li>
                          <li>Begins to eat solid foods</li>
                          <li>Helps during dressing by extending arm or leg</li>
                          <li>Drinks from a cup with help</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">1-2 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Feeds self with fingers</li>
                          <li>Begins to use utensils</li>
                          <li>Removes some clothing items</li>
                          <li>Helps with simple household tasks</li>
                          <li>Shows interest in toilet training</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">2-3 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Uses utensils more effectively</li>
                          <li>Puts on simple clothing items</li>
                          <li>Washes and dries hands with help</li>
                          <li>May be toilet trained during the day</li>
                          <li>Helps put toys away</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600 pl-4">
                        <h4 className="font-medium">3-5 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Dresses and undresses with minimal help</li>
                          <li>Uses bathroom independently</li>
                          <li>Brushes teeth with supervision</li>
                          <li>Helps with simple chores</li>
                          <li>Pours from a small pitcher</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-600pl-4">
                        <h4 className="font-medium">5-7 Years</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Dresses independently</li>
                          <li>Ties shoelaces</li>
                          <li>Bathes independently</li>
                          <li>Prepares simple snacks</li>
                          <li>Completes household chores</li>
                          <li>Understands basic safety rules</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support Strategies</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Break tasks into small, manageable steps</li>
                      <li>Use visual schedules and reminders</li>
                      <li>Provide plenty of practice opportunities</li>
                      <li>Use positive reinforcement</li>
                      <li>Allow extra time for completing tasks</li>
                      <li>Adapt tasks as needed (special utensils, clothing with velcro)</li>
                      <li>Encourage independence while providing necessary support</li>
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <Button asChild className="border-green-600 hover:bg-green-700">
                      <Link href="/activity-modules?area=adaptive">
                        View Adaptive Skill Activities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
          </TabsContent>
          </Tabs>
        </div>
      );
    }