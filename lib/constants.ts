export interface EventItem {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventItem[] = [
    {
        title: "Next.js Conf 2025",
        image: "/images/event1.png",
        slug: "nextjs-conf-2025",
        location: "San Francisco, CA",
        date: "October 25, 2025",
        time: "10:00 AM"
    },
    {
        title: "React Summit",
        image: "/images/event2.png",
        slug: "react-summit",
        location: "Amsterdam, NL",
        date: "June 14, 2025",
        time: "09:00 AM"
    },
    {
        title: "Tailwind Connect",
        image: "/images/event3.png",
        slug: "tailwind-connect",
        location: "Online",
        date: "August 12, 2025",
        time: "11:00 AM"
    },
    {
        title: "JS World Conference",
        image: "/images/event4.png",
        slug: "js-world-conference",
        location: "Berlin, DE",
        date: "March 10, 2025",
        time: "08:30 AM"
    },
    {
        title: "Hacktoberfest Kickoff",
        image: "/images/event5.png",
        slug: "hacktoberfest-kickoff",
        location: "Global",
        date: "October 1, 2025",
        time: "04:00 PM"
    },
    {
        title: "Prisma Day",
        image: "/images/event6.png",
        slug: "prisma-day",
        location: "Remote",
        date: "November 15, 2025",
        time: "01:00 PM"
    }
];
