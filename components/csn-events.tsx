"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/event-card";

export default function CsnEvents() {
    // Event data
    const events = [
        {
            title: "Webinar: Understanding Autism Spectrum Disorder",
            date: "December 18, 2024",
            time: "6:00 PM - 7:30 PM",
            location: "Online (Zoom)",
            description: "A free public webinar for parents, teachers, and the community. Learn about ASD, early signs, and support strategies from our expert panel. Open to all.",
            rsvpLink: "https://forms.google.com/webinar-asd",
            category: "Webinar",
            featured: true,
        },
        {
            title: "Webinar: Inclusive Education for All",
            date: "January 8, 2025",
            time: "5:00 PM - 6:30 PM",
            location: "Online (Google Meet)",
            description: "Join our open-access webinar on inclusive education practices. Ideal for educators, parents, and advocates. No registration fee.",
            rsvpLink: "https://forms.google.com/inclusive-education",
            category: "Webinar",
            featured: false,
        },
        {
            title: "Sensory Play Workshop",
            date: "January 10, 2025",
            time: "10:00 AM - 11:30 AM",
            location: "CSN Therapy Garden",
            description: "Hands-on workshop exploring sensory play activities that support child development and can be easily implemented at home. Open to all families.",
            rsvpLink: "https://forms.google.com/sensory-play",
            category: "Workshop",
            featured: false,
        },
        {
            title: "ABA Therapy Information Session",
            date: "January 15, 2025",
            time: "3:00 PM - 5:00 PM",
            location: "CSN Conference Room",
            description: "Learn about Applied Behavior Analysis (ABA) therapy, its benefits, and how it can support your child's behavioral and learning development. Open to the public.",
            rsvpLink: "https://forms.google.com/aba-info-session",
            category: "Information Session",
            featured: false,
        },
        {
            title: "Parent Support Group Meeting",
            date: "December 15, 2024",
            time: "2:00 PM - 4:00 PM",
            location: "CSN Center Main Hall",
            description: "Monthly support group meeting for parents of children with special needs. Share experiences, learn from each other, and build lasting connections with other families. Open to all parents.",
            rsvpLink: "https://forms.google.com/parent-support-group",
            category: "Support Group",
            featured: true,
        },
        {
            title: "Speech Therapy Techniques for Parents",
            date: "February 5, 2025",
            time: "1:00 PM - 3:30 PM",
            location: "CSN Speech Therapy Room",
            description: "Practical session teaching parents simple speech therapy techniques they can use at home to support their child's communication development. Open to all parents and caregivers.",
            rsvpLink: "https://forms.google.com/speech-therapy-parents",
            category: "Workshop",
            featured: false,
        },
    ];

    // Categories for filter
    const categories = [
        { label: "All Events", value: "All" },
        { label: "Webinars", value: "Webinar" },
        { label: "Workshops", value: "Workshop" },
        { label: "Community Events", value: "Support Group" },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Filter events based on selected category
    const filteredEvents =
        selectedCategory === "All"
            ? events
            : events.filter((event) => event.category === selectedCategory);

    return (
        <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {filteredEvents.map((event, idx) => (
                    <EventCard
                        key={event.title + idx}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        description={event.description}
                        rsvpLink={event.rsvpLink}
                        category={event.category}
                        featured={event.featured}
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((cat) => (
                    <Button
                        key={cat.value}
                        variant="outline"
                        className={`rounded-full ${
                            cat.value === "Webinar"
                                ? "border-csn-green text-csn-green hover:bg-csn-green hover:text-white"
                                : cat.value === "Workshop"
                                ? "border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                                : cat.value === "Support Group"
                                ? "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                                : "border-csn-teal text-csn-teal hover:bg-csn-teal hover:text-white"
                        } ${selectedCategory === cat.value ? "ring-2 ring-csn-teal" : ""}`}
                        onClick={() => setSelectedCategory(cat.value)}
                    >
                        {cat.label}
                    </Button>
                ))}
            </div>
        </>
    );
}
