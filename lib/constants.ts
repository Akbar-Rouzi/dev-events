export interface EventItem {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    description: string;
}

export const events: EventItem[] = [
    {
        title: "Next.js Conf 2025",
        image: "/images/event1.png",
        slug: "nextjs-conf-2025",
        location: "San Francisco, CA",
        date: "October 25, 2025",
        time: "10:00 AM",
        description: "Join the Next.js community for a day of incredible talks, hands-on workshops, and networking. Discover the latest features and best practices for building modern web applications."
    },
    {
        title: "React Summit",
        image: "/images/event2.png",
        slug: "react-summit",
        location: "Amsterdam, NL",
        date: "June 14, 2025",
        time: "09:00 AM",
        description: "The biggest React conference in the world. Get insights from industry leaders, explore the future of React, and connect with thousands of developers."
    },
    {
        title: "Tailwind Connect",
        image: "/images/event3.png",
        slug: "tailwind-connect",
        location: "Online",
        date: "August 12, 2025",
        time: "11:00 AM",
        description: "A virtual event dedicated to all things Tailwind CSS. Learn how to build beautiful, responsive websites faster than ever before."
    },
    {
        title: "JS World Conference",
        image: "/images/event4.png",
        slug: "js-world-conference",
        location: "Berlin, DE",
        date: "March 10, 2025",
        time: "08:30 AM",
        description: "A premier JavaScript conference featuring speakers from around the globe. Stay up-to-date with the latest trends and technologies in the JS ecosystem."
    },
    {
        title: "Hacktoberfest Kickoff",
        image: "/images/event5.png",
        slug: "hacktoberfest-kickoff",
        location: "Global",
        date: "October 1, 2025",
        time: "04:00 PM",
        description: "Celebrate open source and kick off Hacktoberfest with us! Learn how to contribute to projects, earn rewards, and join a global community of developers."
    },
    {
        title: "Prisma Day",
        image: "/images/event6.png",
        slug: "prisma-day",
        location: "Remote",
        date: "November 15, 2025",
        time: "01:00 PM",
        description: "Everything you need to know about modern database workflows. Explore Prisma's latest features and see how it simplifies database management."
    }
];
