"use client";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";


export default function Footer(){
    const router = useRouter()
    return(
        <footer className="flex flex-col space-y-20">
            <div className="flex flex-col items-center bg-[#232326] min-w-5xl mx-auto space-y-6 pt-22 pb-22 mt-25 rounded-3xl">
                <h1 className="text-7xl font-sans">Try out LegalDoc today.</h1>
                <p className="text-gray-400 text-xl">&quot;Draft, analyze, and summarize legal documents — all in one place.&quot;</p>
                <Button variant={"outline"} className="text-black p-5 mt-6 cursor-pointer" onClick={()=>router.push("/bot")}>Try out LegalDoc for free <ArrowRight/> </Button>
            </div>
            <div className="flex flex-row justify-between min-w-5xl mx-auto items-center border border-black border-b-gray-700 pb-11">
                <div className="max-w-75">
                    <h1 className="text-3xl font-medium">Stay connected</h1>
                    <p className="text-gray-400"> Subscribe to our newsletter for the latest updates, resources, and exclusive offers.</p>
                </div>
                <div>
                    <input type="email" className="bg-[#2F2F31] p-2.5 w-80 rounded-xl mr-2" placeholder="Your email"/>
                    <Button variant={"outline"} className="text-black p-5 cursor-pointer">Subscribe</Button>
                </div>
            </div>
        </footer>
    )
}