import React from 'react';
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={46}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems/>
                <p>Sign In</p>
            </div>
        </nav>
    );
};

export default Navbar;