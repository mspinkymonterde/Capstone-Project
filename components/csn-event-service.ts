// Centralized event service for CSN events
export type CsnEvent = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  rsvpLink: string;
  category: string;
  featured: boolean;
};

export function getCsnEvents(): CsnEvent[] {
  return [
    {
      title: "Webinar: Understanding Autism Spectrum Disorder",
      date: "December 18, 2024",
      time: "6:00 PM - 7:30 PM",
      location: "Online (Zoom)",
      description:
        "A free public webinar for parents, teachers, and the community. Learn about ASD, early signs, and support strategies from our expert panel. Open to all.",
      rsvpLink: "https://forms.google.com/webinar-asd",
      category: "Webinar",
      featured: true,
    },
    {
      title: "Webinar: Inclusive Education for All",
      date: "January 8, 2025",
      time: "5:00 PM - 6:30 PM",
      location: "Online (Google Meet)",
      description:
        "Join our open-access webinar on inclusive education practices. Ideal for educators, parents, and advocates. No registration fee.",
      rsvpLink: "https://forms.google.com/inclusive-education",
      category: "Webinar",
      featured: false,
    },
    {
      title: "Sensory Play Workshop",
      date: "January 10, 2025",
      time: "10:00 AM - 11:30 AM",
      location: "CSN Therapy Garden",
      description:
        "Hands-on workshop exploring sensory play activities that support child development and can be easily implemented at home. Open to all families.",
      rsvpLink: "https://forms.google.com/sensory-play",
      category: "Workshop",
      featured: false,
    },
    {
      title: "ABA Therapy Information Session",
      date: "January 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "CSN Conference Room",
      description:
        "Learn about Applied Behavior Analysis (ABA) therapy, its benefits, and how it can support your child's behavioral and learning development. Open to the public.",
      rsvpLink: "https://forms.google.com/aba-info-session",
      category: "Information Session",
      featured: false,
    },
    {
      title: "Parent Support Group Meeting",
      date: "December 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "CSN Center Main Hall",
      description:
        "Monthly support group meeting for parents of children with special needs. Share experiences, learn from each other, and build lasting connections with other families. Open to all parents.",
      rsvpLink: "https://forms.google.com/parent-support-group",
      category: "Support Group",
      featured: true,
    },
    {
      title: "Speech Therapy Techniques for Parents",
      date: "February 5, 2025",
      time: "1:00 PM - 3:30 PM",
      location: "CSN Speech Therapy Room",
      description:
        "Practical session teaching parents simple speech therapy techniques they can use at home to support their child's communication development. Open to all parents and caregivers.",
      rsvpLink: "https://forms.google.com/speech-therapy-parents",
      category: "Workshop",
      featured: false,
    },
    {
      title: "Supporting Children with Special Needs at Home",
      date: "July 10, 2024",
      time: "10:00 AM - 11:30 AM",
      location: "Online (Zoom)",
      description:
        "Practical strategies for parents and caregivers to support children with special needs in daily routines and learning at home.",
      rsvpLink: "https://forms.google.com/supporting-children-home",
      category: "Webinar",
      featured: false,
    },
    {
      title: " Early Intervention Success Stories",
      date: "July 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "CSN Main Campus, Room 204",
      description:
        "Hear from families and professionals about the impact of early intervention programs offered by CSN.",
      rsvpLink: "https://forms.google.com/early-intervention-seminar",
      category: "Seminar",
      featured: false,
    },
    {
      title: " Navigating Therapy Options",
      date: "August 1, 2024",
      time: "11:00 AM - 12:30 PM",
      location: "Online (Google Meet)",
      description:
        "Overview of therapy services available at CSN, including speech, occupational, and behavioral therapies. Q&A with our therapists.",
      rsvpLink: "https://forms.google.com/navigating-therapy",
      category: "Webinar",
      featured: true,
    },
    {
      title: "Building Inclusive Communities",
      date: "August 12, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "CSN Downtown Campus, Hall B",
      description:
        "A seminar for educators, parents, and advocates on fostering inclusion and acceptance for children with special needs in schools and communities.",
      rsvpLink: "https://forms.google.com/inclusive-communities",
      category: "Seminar",
      featured: false,
    },
  ];
}
