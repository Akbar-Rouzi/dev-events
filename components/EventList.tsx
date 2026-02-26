import { IEvent } from "@/database";
import EventCard from "./EventCard";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventList = async () => {
    if (!BASE_URL) {
        throw new Error("NEXT_PUBLIC_BASE_URL environment variable is not set");
    }
    const response = await fetch(`${BASE_URL}/api/events`, {
       next: { revalidate: 60 }, // adjust revalidation period as needed
   });
   if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
  }
    const { events } = await response.json();    
    return (
        <ul className="events">
            {events && events.length > 0 && events.map((event: IEvent) => (
                <li key={event.slug}>
                    <EventCard {...event} />
                </li>
            ))}
        </ul>
    )
}

export default EventList;
