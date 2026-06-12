"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
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
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMenuOpen(false);
        if (href.startsWith("/#") && pathname === "/") {
            e.preventDefault();
            const targetId = href.replace("/#", "");
            const elem = document.getElementById(targetId);
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", href);
            }
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-4">
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

                    {/* Desktop Navigation */}
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

                        <Link
                            href="/login"
                            className="relative rounded-full px-6 py-2 text-sm font-semibold text-white transition bg-gray-700 border border-secondary shadow-[0_0_2px_#9cfeca] hover:shadow-[0_0_6px_#9cfeca] hover:brightness-110"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        id="mobile-menu-toggle"
                        aria-label="Toggle mobile menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
                    >
                        <span
                            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${
                                menuOpen ? "rotate-45 translate-y-[7px]" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                                menuOpen ? "opacity-0 scale-x-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 origin-center ${
                                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                            }`}
                        />
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                    menuOpen ? "visible" : "invisible"
                }`}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setMenuOpen(false)}
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                        menuOpen ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Slide-down drawer */}
                <div
                    className={`absolute top-0 left-0 w-full bg-black/90 border-b border-white/10 pt-20 pb-8 px-6 flex flex-col gap-6 transition-transform duration-300 ${
                        menuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
                >
                    <ul className="flex flex-col gap-2">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={label}>
                                <Link
                                    href={href}
                                    onClick={(e) => handleScroll(e, href)}
                                    className="block py-3 px-4 rounded-xl text-base font-medium text-gray-200 hover:text-secondary hover:bg-white/5 transition-colors"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/login"
                        onClick={() => setMenuOpen(false)}
                        className="w-full text-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gray-700 border border-secondary shadow-[0_0_2px_#9cfeca] hover:shadow-[0_0_6px_#9cfeca] hover:brightness-110 transition"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
