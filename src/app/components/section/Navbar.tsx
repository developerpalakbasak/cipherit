"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { label: "Services", href: "/#services" },
    { label: "Results", href: "/#results" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
];

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") && pathname === "/") {
            e.preventDefault();
            const targetId = href.replace("/#", "");
            const elem = document.getElementById(targetId);
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
                // Update history state so URL hash changes cleanly without jumping
                window.history.pushState(null, "", href);
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">
                {/* Logo */}
                <Link href="/" aria-label="Go to homepage" className="flex items-center gap-0 group">
                    <Image
                        src="/cipherit.svg"
                        alt="CipherIt logo"
                        width={32}
                        height={32}
                        priority
                        className="mr-[-2px]"
                    />
                    <span className="text-lg font-semibold font-syne tracking-tight text-white group-hover:text-secondary transition-colors">
                        ipherIT
                    </span>
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-16">
                    <ul className="flex items-center md:gap-4">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    onClick={(e) => handleScroll(e, href)}
                                    className="text-sm font-medium transition-colors hover:text-secondary hover:underline"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Login button with glowing border */}
                    <Link
                        href="/login"
                        className="
          relative
          rounded-full
          px-6 py-2
          text-sm font-semibold
          text-white
          transition
          bg-gray-700
          border border-secondary
          shadow-[0_0_2px_#9cfeca]
          hover:shadow-[0_0_6px_#9cfeca]
          hover:brightness-110
        "
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
