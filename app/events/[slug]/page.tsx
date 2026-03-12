import { notFound } from "next/navigation";

import EventContent from "@/components/EventContent";
import BookForm from "@/components/BookForm";
import { IEvent } from "@/database/event.model";
import { getSimilarEventsBySlug } from '@/lib/actions/event.actions';
import EventCard from "@/components/EventCard";
import {BookingProvider} from "@/lib/context/booking-context";
import { cacheLife } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    'use cache';
    cacheLife('hours');
    const { slug } = await params;// unwrap the Promise
    if (!BASE_URL) {
        throw new Error("NEXT_PUBLIC_BASE_URL environment variable is not set");
    }

    const res = await fetch(`${BASE_URL}/api/events/${slug}`);
    if (!res.ok) {
        return notFound();
    }
    const { event } = (await res.json()) as { event: IEvent };

    if (!event || !event.description || !event.image) return notFound();

    const eventId = typeof event._id === "string" ? event._id : event._id?.toString?.();
    if (!eventId) return notFound();

    const similarEvents: IEvent[] = await getSimilarEventsBySlug({ slug });
    return (
        <section id="event">
            {/* Event Header */}
            <div className="header">
                <h1>Event Description</h1>
                <p>{event.description}</p>
            </div>
            {/* Event Details & Booking Form */}
            <div className="details">
                {/* left side - Event Content */}
                <EventContent event={event} />
                {/* Right-side --Booking Form */}
                <BookingProvider value={{eventId, slug: event.slug}}>
                    <BookForm />
                </BookingProvider>
            </div>
            {/* Similar Events */}
            <div className="flex w-full flex-col gap-4 pt-20">
                <h2>Similar Events</h2>
                <div className="events">
                    {similarEvents.length > 0 && similarEvents.map((similarEvents: IEvent) => (
                        <EventCard key={similarEvents.title} {...similarEvents} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventDetailsPage