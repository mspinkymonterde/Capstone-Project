import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

// Blog post data
const blogPosts = {
  "the-importance-of-early-intervention": {
    title: "The Importance of Early Intervention",
    date: "May 14, 2025",
    author: "Dr. Maria Santos",
    content: `
      <h2>Why Early Intervention Matters</h2>
      <p>Early intervention refers to services and support that are provided to babies and young children with developmental delays or disabilities and their families. Research has consistently shown that addressing developmental concerns as early as possible can significantly improve outcomes for children with special needs.</p>
      
      <h3>The Science Behind Early Intervention</h3>
      <p>The first few years of a child's life are a critical period for brain development. During this time, neural connections form at a rapid pace, creating the foundation for future learning and development. When a child has developmental delays or disabilities, early intervention takes advantage of this neuroplasticity—the brain's ability to form new connections and reorganize itself.</p>
      
      <p>Studies have demonstrated that children who receive early intervention services show significant improvements in:</p>
      <ul>
        <li>Cognitive development</li>
        <li>Communication skills</li>
        <li>Social and emotional development</li>
        <li>Physical abilities</li>
        <li>Adaptive skills for daily living</li>
      </ul>
      
      <h3>Benefits for Families</h3>
      <p>Early intervention doesn't just benefit the child—it supports the entire family. Parents and caregivers receive guidance, training, and resources that help them understand their child's unique needs and learn effective strategies to support their development at home.</p>
      
      <p>Family benefits include:</p>
      <ul>
        <li>Reduced stress and anxiety</li>
        <li>Increased confidence in parenting skills</li>
        <li>Better understanding of their child's development</li>
        <li>Connection to community resources and support networks</li>
        <li>Improved family dynamics and relationships</li>
      </ul>
      
      <h3>Long-term Impact</h3>
      <p>The benefits of early intervention extend far beyond early childhood. Research indicates that children who receive appropriate early intervention services are more likely to:</p>
      <ul>
        <li>Need fewer special education services later in life</li>
        <li>Graduate from high school</li>
        <li>Live independently as adults</li>
        <li>Secure employment</li>
        <li>Avoid criminal behavior</li>
      </ul>
      
      <p>From an economic perspective, early intervention is a sound investment. For every peso spent on quality early intervention programs, society saves significantly more in future costs related to special education, healthcare, and social services.</p>
      
      <h3>Getting Started with Early Intervention</h3>
      <p>If you have concerns about your child's development, don't wait to seek help. The first step is typically a comprehensive developmental evaluation to identify your child's specific needs.</p>
      
      <p>Remember that you don't need a doctor's referral to request an evaluation for early intervention services. As a parent, you can directly contact your local early intervention program if you have concerns about your child's development.</p>
      
      <h3>Conclusion</h3>
      <p>Early intervention is one of the most powerful tools we have to help children with developmental delays or disabilities reach their full potential. By identifying concerns early and providing appropriate support, we can make a significant positive impact on children's lives and futures.</p>

      <p>If you're concerned about your child's development, navigate the early intervention process and connect with the resources your family needs.</p>
    `,
  },
  "recognizing-developmental-milestones": {
    title: "Recognizing Developmental Milestones",
    date: "May 12, 2025",
    author: "Dr. James Rivera",
    content: `
      <h2>Understanding Developmental Milestones</h2>
      <p>Developmental milestones are skills or behaviors that most children can do by a certain age. They provide important clues about a child's development and can help identify potential delays or concerns early.</p>
      
      <h3>Why Monitoring Milestones Matters</h3>
      <p>Every child develops at their own pace, but developmental milestones give us general guidelines about what to expect and when. Monitoring these milestones helps parents and healthcare providers:</p>
      <ul>
        <li>Celebrate a child's progress and achievements</li>
        <li>Identify potential developmental concerns early</li>
        <li>Seek appropriate support and intervention when needed</li>
        <li>Track progress over time</li>
      </ul>
      
      <h3>Key Developmental Domains</h3>
      <p>Child development is typically divided into several domains or areas:</p>
      
      <h4>Social and Emotional</h4>
      <p>This includes how children interact with others, express emotions, and develop relationships. Examples include smiling at caregivers, showing preference for certain people, and playing cooperatively with peers.</p>
      
      <h4>Language and Communication</h4>
      <p>This covers both receptive language (understanding) and expressive language (speaking). Milestones include cooing, babbling, saying first words, following directions, and eventually forming complete sentences.</p>
      
      <h4>Cognitive Development</h4>
      <p>This involves thinking, learning, problem-solving, and understanding concepts. Examples include exploring objects with hands and mouth, finding hidden objects, sorting shapes, and understanding cause and effect.</p>
      
      <h4>Physical Development</h4>
      <p>This includes both gross motor skills (large movements using arms, legs, and body) and fine motor skills (smaller movements using hands and fingers). Milestones range from lifting the head and rolling over to walking, jumping, drawing, and using utensils.</p>
      
      <h4>Adaptive Skills</h4>
      <p>Adaptive skills are the practical, everyday abilities that enable children to function independently at home, in school, and in the community. These include self-care tasks such as feeding, dressing, toileting, and personal hygiene, as well as skills like following routines, using utensils, and managing transitions.</p>

      <h3>Red Flags: When to Be Concerned</h3>
      <p>While there's a range of "normal" in development, certain signs may indicate a need for further evaluation:</p>
      
      <p><strong>By 6 months:</strong></p>
      <ul>
        <li>Doesn't try to get objects that are within reach</li>
        <li>Shows no affection for caregivers</li>
        <li>Doesn't respond to sounds</li>
        <li>Has difficulty getting objects to mouth</li>
        <li>Doesn't roll over in either direction</li>
      </ul>
      
      <p><strong>By 12 months:</strong></p>
      <ul>
        <li>Doesn't crawl</li>
        <li>Can't stand when supported</li>
        <li>Doesn't search for objects that are hidden while they watch</li>
        <li>Doesn't say single words like "mama" or "dada"</li>
        <li>Doesn't use gestures such as waving or shaking head</li>
      </ul>
      
      <p><strong>By 24 months:</strong></p>
      <ul>
        <li>Doesn't use 2-word phrases</li>
        <li>Doesn't know what to do with common objects like a brush or phone</li>
        <li>Doesn't imitate actions or words</li>
        <li>Doesn't follow simple instructions</li>
        <li>Can't walk steadily</li>
      </ul>
      
      <h3>What to Do If You're Concerned</h3>
      <p>If you notice your child isn't meeting milestones or you have concerns about their development:</p>
      <ol>
        <li>Talk to your child's healthcare provider about your concerns</li>
        <li>Request a developmental screening or evaluation</li>
        <li>Don't wait—acting early can make a significant difference</li>
        <li>Remember that you know your child best—trust your instincts</li>
      </ol>
      
      <h3>Conclusion</h3>
      <p>Understanding developmental milestones helps parents recognize when their child might need additional support. Early identification of developmental delays allows for timely intervention, which can significantly improve outcomes.</p>
      
      <p>Remember that developmental milestones are guidelines, not strict rules. Each child is unique and may develop at their own pace. However, significant delays or multiple missed milestones warrant attention and possibly evaluation by healthcare professionals.</p>
    `,
  },
  "supporting-your-child's-journey": {
    title: "Supporting Your Child's Journey",
    date: "May 10, 2025",
    author: "Elena Reyes, Child Development Specialist",
    content: `
      <h2>Navigating the Journey of Raising a Child with Special Needs</h2>
      <p>Parenting a child with special needs presents unique challenges and profound joys. While each child's journey is different, there are strategies and approaches that can help parents provide the support their children need to thrive.</p>
      
      <h3>Acceptance and Understanding</h3>
      <p>The journey often begins with acceptance—not just accepting a diagnosis, but embracing your child for who they are. Understanding your child's specific needs, strengths, and challenges is crucial for providing appropriate support.</p>
      
      <p>Take time to:</p>
      <ul>
        <li>Learn about your child's condition or diagnosis</li>
        <li>Connect with other parents who have similar experiences</li>
        <li>Work closely with healthcare providers and therapists</li>
        <li>Observe and document your child's responses to different situations</li>
      </ul>
      
      <h3>Creating a Supportive Environment</h3>
      <p>Children with special needs often thrive in environments that are structured, consistent, and adapted to their unique requirements.</p>
      
      <h4>At Home:</h4>
      <ul>
        <li>Establish predictable routines that provide security</li>
        <li>Create a sensory-friendly space that accommodates sensitivities</li>
        <li>Use visual schedules and supports to enhance understanding</li>
        <li>Modify activities and expectations as needed</li>
        <li>Ensure safety while encouraging independence</li>
      </ul>
      
      <h4>In the Community:</h4>
      <ul>
        <li>Prepare for outings with social stories or visual supports</li>
        <li>Advocate for accommodations in schools and public spaces</li>
        <li>Connect with inclusive community programs and activities</li>
        <li>Educate others about your child's needs respectfully</li>
      </ul>
      
      <h3>Effective Communication Strategies</h3>
      <p>Communication is fundamental to supporting your child's development. Depending on your child's needs, consider:</p>
      <ul>
        <li>Alternative and augmentative communication (AAC) systems</li>
        <li>Visual supports and picture exchange systems</li>
        <li>Sign language or gesture systems</li>
        <li>Simple, clear verbal instructions</li>
        <li>Allowing extra processing time for responses</li>
      </ul>
      
      <h3>Building on Strengths</h3>
      <p>Every child has unique strengths and interests. Identifying and nurturing these can:</p>
      <ul>
        <li>Build confidence and self-esteem</li>
        <li>Provide motivation for learning</li>
        <li>Create opportunities for success</li>
        <li>Develop skills that can be applied in other areas</li>
      </ul>
      
      <p>Focus on what your child <em>can</em> do rather than what they cannot. Celebrate small victories and progress, no matter how incremental.</p>
      
      <h3>Collaborating with Professionals</h3>
      <p>Building a strong team of professionals is essential for supporting your child's development:</p>
      <ul>
        <li>Maintain open communication with healthcare providers</li>
        <li>Actively participate in developing treatment plans</li>
        <li>Share observations and concerns</li>
        <li>Ask questions and seek clarification</li>
        <li>Coordinate between different service providers</li>
      </ul>
      
      <h3>Taking Care of Yourself</h3>
      <p>Supporting a child with special needs requires energy, patience, and resilience. Remember that taking care of yourself is not selfish—it's necessary:</p>
      <ul>
        <li>Join support groups to connect with others who understand</li>
        <li>Accept help from family and friends</li>
        <li>Schedule respite care when possible</li>
        <li>Maintain your own health through proper nutrition, exercise, and sleep</li>
        <li>Seek professional support if you're feeling overwhelmed</li>
      </ul>
      
      <h3>Planning for the Future</h3>
      <p>While focusing on present needs is important, thinking ahead helps ensure long-term support:</p>
      <ul>
        <li>Develop transition plans for different life stages</li>
        <li>Explore educational options and accommodations</li>
        <li>Learn about available adult services</li>
        <li>Consider financial planning and legal protections</li>
        <li>Build a support network that can evolve over time</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Supporting your child's journey is both challenging and rewarding. Remember that you don't have to do it alone. This parent support system offers resources, guidance, and community to help you navigate this path.</p>
      
      <p>By focusing on understanding, acceptance, and appropriate supports, you can help your child develop to their fullest potential and experience a meaningful, fulfilling life.</p>
    `,
  },
  "faq": {
    title: "Frequently Asked Questions (FAQ)",
    date: "May 8, 2025",
    author: "Parent Support Team",
    content: `
      <h2>Frequently Asked Questions</h2>
      <h3>What is early intervention?</h3>
      <p>Early intervention refers to services and supports provided to young children with developmental delays or disabilities and their families. These services help children develop essential skills and support families in meeting their child's needs.</p>
      
      <h3>How do I know if my child needs early intervention?</h3>
      <p>If you notice your child is not meeting developmental milestones or you have concerns about their development, you can request an evaluation from your local early intervention program. Trust your instincts—early action is important.</p>
      
      <h3>Do I need a doctor's referral for early intervention?</h3>
      <p>No, parents can refer their child directly to early intervention services. Contact your local program to start the evaluation process.</p>
      
      <h3>What happens during a developmental evaluation?</h3>
      <p>A team of professionals will assess your child's skills in areas such as communication, motor abilities, social-emotional development, and cognitive skills. They will discuss the results with you and recommend next steps if needed.</p>
      
      <h3>Are early intervention services free?</h3>
      <p>Many early intervention services are provided at no cost or on a sliding scale, depending on your location and specific program. Contact your local agency for details about eligibility and costs.</p>
      
      <h3>How can I support my child at home?</h3>
      <p>Follow routines, use positive reinforcement, communicate clearly, and work closely with professionals. Ask for strategies and resources you can use at home to support your child's development.</p>
      
      <h3>Where can I find more resources?</h3>
      <p>Check with your local early intervention program, healthcare providers, and parent support organizations. Many offer workshops, support groups, and online materials to help families.</p>
    `,
  },
}

type BlogSlug = keyof typeof blogPosts;

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = blogPosts[slug as BlogSlug]

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Link href="/#article">
        <Button variant="ghost" className="rounded-full mb-6 flex items-center gap-2">
          <ArrowLeft size={18} />
          Back to Articles
        </Button>
      </Link>
      <h1 className=" text-green-600 text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-muted-foreground mb-4">
        {post.date} &middot; {post.author}
      </div>
      <article
        className="prose prose-neutral"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Related Articles</h2>
        <ul className="list-disc pl-5">
          <li>
            <Link href="/blog/the-importance-of-early-intervention" className=" hover:text-green-600 hover:underline">
              The Importance of Early Intervention
            </Link>
          </li>
          <li>
            <Link href="/blog/recognizing-developmental-milestones" className=" hover:text-green-600 hover:underline">
              Recognizing Developmental Milestones
            </Link>
          </li>
          <li>
            <Link href="/blog/supporting-your-child's-journey" className=" hover:text-green-600 hover:underline">
              Supporting Your Child's Journey
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
