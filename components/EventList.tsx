import EventCard from "./EventCard";
import { events } from "@/lib/constants";

const EventList = () => {
    return (
        <ul className="events">
            {events.map((event) => (
                <li key={event.title}>
                    <EventCard {...event} />
                </li>
            ))}
        </ul>
    )
}

export default EventList;
