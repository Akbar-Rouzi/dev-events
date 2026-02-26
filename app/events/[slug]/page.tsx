import { notFound } from "next/navigation";
import Image from "next/image";

import EventDetailsItem from "@/components/EventDetailsItem";
import EventAgenda from "@/components/EventAgenda";
import EventTags from "@/components/EventTags";
import { parseJsonFromArray } from "@/lib/helpers";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    if (!BASE_URL) {
        throw new Error("NEXT_PUBLIC_BASE_URL environment variable is not set");
    }

    const res = await fetch(`${BASE_URL}/api/events/${slug}`);
    if (!res.ok) {
        return notFound();
    }
    const { event: { description, image, overview, date, location, time, mode, audience, agenda, organizer, tags } } = await res.json();


    if (!description || !image) return notFound();
    return (
        <section id="event">
            <div className="header">
                <h1>Event Description</h1>
                <p>{description}</p>
            </div>

            <div className="details">
                {/* left side - Event Content */}
                <div className="content">
                    <Image src={image} alt="Event Banner" width={800} height={800} className="banner" />
                    <section className="flex-col-gap-2">
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </section>

                    <section className="flex-col-gap-2">
                        <h2>Event Details</h2>
                        <EventDetailsItem icon="/icons/calendar.svg" alt="calendar" label={date} />
                        <EventDetailsItem icon="/icons/clock.svg" alt="clock" label={time} />
                        <EventDetailsItem icon="/icons/pin.svg" alt="pin" label={location} />
                        <EventDetailsItem icon="/icons/mode.svg" alt="mode" label={mode} />
                        <EventDetailsItem icon="/icons/audience.svg" alt="audience" label={audience} />
                    </section>

                    <EventAgenda agendaItems={parseJsonFromArray<string[]>(agenda) ?? []} />
                    <section className="flex-col-gap-2">
                        <h2>About the Organizer</h2>
                        <p>{organizer}</p>
                    </section>
                    <EventTags tags={parseJsonFromArray<string[]>(tags) ?? []} />
                </div>
                {/* Right-side --Booking Form */}
                <div className="booking">
                    <p className="text-lg font-semibold">Book Event</p>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsPage