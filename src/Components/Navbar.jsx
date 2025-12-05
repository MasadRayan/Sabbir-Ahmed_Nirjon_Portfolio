"use client";

import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CV", href: "/cv" },
    {
        name: "RESEARCH",
        href: "/research",
        children: [
            {
                name: "PROBABILISTIC MODELING",
                href: "/research/#probabilistic-modeling",
            },
            {
                name: "GENOMICS ALGORITHMS",
                href: "/research/#genomics-algorithms",
            },
            {
                name: "MISCELLANEOUS",
                href: "/research/#miscellaneous",
            }

        ]

    },

    {
        name: "SOFTWARE",
        href: "/software",
        children: [
            { name: "BIISQ ISOFORM DISCOVERY", href: "/software/#biisq" },
            { name: "HAPCOMPASS HAPLOTYPE ASSEMBLY", href: "/software/#hapcompass" },
            { name: "TRACTATUS IDENTITY-BY-DESCENT", href: "/software/#tractatus" },
            { name: "DELISHUS VARIANT CALLING", href: "/software/#delishus" },
            { name: "CYRENE REGULATORY BROWSER", href: "/software/#cyrene" },
            { name: "TRANSCRIPTOME ASSEMBLY", href: "/software/#transcriptome" },
        ],
    },

    {
        name: "TEACHING", 
        href: "/teaching",
        children: [
            {
                name: "CSE5825 BAYESIAN MACHINE LEARNING",
                href: "/teaching/#cse5825",
            },
            {
                name: "CSE3500 ALGORITHMS & COMPLEXITY",
                href: "/teaching/#cse3500",
            }
        ]
    },
    { name: "WIKI", href: "/wiki" },
    { name: "LAB", href: "/lab" },
];

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [expanded, setExpanded] = useState(null);

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl">
            <nav className="container mx-auto px-4 md:px-6">
                <div className="h-16 md:h-20 flex items-center justify-center relative">

                    {/* DESKTOP NAV */}
                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.map((link, i) => (
                            <li key={i} className="relative group">
                                <Link
                                    href={link.href}
                                    className="font-semibold text-gray-700 hover:text-black transition"
                                >
                                    {link.name}
                                </Link>

                                {link.children && (
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-gray-700 text-white rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 shadow-xl">
                                        {link.children.map((child, j) => (
                                            <Link
                                                key={j}
                                                href={child.href}
                                                className="block py-2 text-sm font-semibold hover:text-green-300 transition"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* MOBILE HEADER */}
                    <div className="md:hidden flex justify-between items-center w-full">
                        <Link
                            href="/"
                            className="font-semibold text-gray-700 hover:text-black transition"
                        >
                            Sabbir Ahmed Nirjon
                        </Link>

                        <button
                            onClick={() => setOpenSidebar(true)}
                            className="p-2 text-gray-700 hover:text-black"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE SIDE DRAWER */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-72 bg-[#2d3a3d] text-white shadow-xl transform transition-transform duration-300",
                    openSidebar ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Drawer Header */}
                <div className="flex justify-between items-center px-4 h-16 border-b border-gray-500">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => setOpenSidebar(false)}>
                        <X size={26} />
                    </button>
                </div>

                {/* Drawer Links */}
                <ul className=" flex flex-col gap-2 px-4 bg-[#2d3a3d]">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            {/* Parent Row */}
                            <div className="flex justify-between items-center w-full py-2 font-semibold">
                                <Link href={link.href} onClick={() => setOpenSidebar(false)}>
                                    {link.name}
                                </Link>

                                {link.children && (
                                    <button
                                        className="text-white"
                                        onClick={() =>
                                            setExpanded(expanded === i ? null : i)
                                        }
                                    >
                                        <ChevronRight
                                            className={cn(
                                                "transition",
                                                expanded === i && "rotate-90"
                                            )}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Child Links */}
                            {link.children && expanded === i && (
                                <div className="ml-4 mt-2 flex flex-col gap-2">
                                    {link.children.map((child, j) => (
                                        <Link
                                            key={j}
                                            href={child.href}
                                            onClick={() => setOpenSidebar(false)}
                                            className="text-sm text-gray-300 hover:text-white py-1"
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
