"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    // Controls the mobile dropdown menu.
    const [isOpen, setIsOpen] = useState(false);
    // Tracks which link is currently highlighted.
    const [activeLink, setActiveLink] = useState<"home" | "events" | "create">("home");
    const isHome = pathname === "/";
    const navStateClass = isOpen ? "nav-menu-open" : "nav-menu-closed";
    const getLinkClass = (linkName: "home" | "events" | "create") =>
        activeLink === linkName ? "nav-cta" : "nav-link";

    const handleGoHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setActiveLink("home");
        setIsOpen(false);

        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push("/");
            // After navigation, scroll to top
            setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
        }
    };

    return (
        <header>
            <nav aria-label="Main navigation" className="relative">
                <Link href='/' className="logo" onClick={ handleGoHome}>
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
                    <p>DevEvent</p>
                </Link>

                <button
                    type="button"
                    className="nav-menu-btn"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-controls="main-nav-links"
                    aria-label="Toggle menu"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect y="3" width="20" height="2" rx="1" fill="currentColor"/>
                        <rect y="9" width="20" height="2" rx="1" fill="currentColor"/>
                        <rect y="15" width="20" height="2" rx="1" fill="currentColor"/>
                    </svg>
                </button>

                <ul
                    id="main-nav-links"
                    className={`${navStateClass} nav-menu`}
                >
                    <li>
                        <Link
                            href="/"
                            className={getLinkClass("home")}
                            aria-current={isHome ? "page" : undefined}
                            onClick={handleGoHome}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#events"
                            className={getLinkClass("events")}
                            onClick={() => {
                                setActiveLink("events");
                                setIsOpen(false);
                            }}
                        >
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/events/create"
                            className={getLinkClass("create")}
                            onClick={() => {
                                setActiveLink("create");
                                setIsOpen(false);
                            }}
                        >
                            Create Event
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar
