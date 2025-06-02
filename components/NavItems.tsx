'use client'    //Render Client Side functionalities

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Achievements', href: '/achievements'},
    {label: 'Learning Companions', href: '/companions'},
    {label: 'Discussions', href: '/discussions'},
    {label: 'My Journey', href: '/journey'},
]

const NavItems = () => {

    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-3.5">
            {navItems.map(({ label, href}) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(pathname === href && "text-emerald-800 font-semibold")}>
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default NavItems;