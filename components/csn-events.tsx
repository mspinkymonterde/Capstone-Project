"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/event-card";
import { getCsnEvents } from "@/components/csn-event-service";

export default function CsnEvents() {
    // Event data
    const events = getCsnEvents().filter(
        (event) => event.category === "Webinar" || event.category === "Seminar"
    );

    // Categories for filter (only Webinar and Seminar)
    const categories = [
        { label: "All Events", value: "All" },
        { label: "Webinars", value: "Webinar" },
        { label: "Seminars", value: "Seminar" },
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
                                : cat.value === "Seminar"
                                ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
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
