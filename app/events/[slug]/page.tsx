import { notFound } from "next/navigation";

import EventContent from "@/components/EventContent";
import BookForm from "@/components/BookForm";
import { IEvent } from "@/database/event.model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
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
    return (
        <section id="event">
            <div className="header">
                <h1>Event Description</h1>
                <p>{event.description}</p>
            </div>
            <div className="details">
                {/* left side - Event Content */}
                <EventContent event={event} />
                {/* Right-side --Booking Form */}
                <BookForm />
            </div>
        </section>
    )
}

export default EventDetailsPage