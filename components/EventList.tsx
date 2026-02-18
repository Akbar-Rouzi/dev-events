import { IEvent } from "@/database";
import EventCard from "./EventCard";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventList = async () => {
    const response = await fetch(`${BASE_URL}/api/events`);
    const {events}  = await response.json();
    return (
        <ul className="events">
            {events && events.length > 0 && events.map((event:IEvent) => (
                <li key={event.title}>
                    <EventCard {...event} />
                </li>
            ))}
        </ul>
    )
}

export default EventList;
