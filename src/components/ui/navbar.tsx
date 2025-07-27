"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

export default function Navbar(){
    return(
        <nav className="flex justify-around items-center text-white mb-12">
            <Link href="/">
                <h1 className="text-2xl font-bold">
                    LegalDoc
                </h1>
            </Link>
            <div className="flex items-center gap-6">
                <Link href="/">Home</Link>
                {/* <Link href="/about">About</Link> */}
                <Link href="/contact">Contact</Link>
                {/* <Button variant={"outline"} className="text-black cursor-pointer">Login</Button>
                <Button variant={"outline"} className="text-black cursor-pointer">Sign up</Button> */}
            </div>
        </nav>
    )
}