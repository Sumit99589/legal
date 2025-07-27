import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "./card";

const features = [
  {
    title: "AI-Powered Legal Doc Creation",
    description: "Generate error-free legal documents in seconds using our smart AI assistant.",
  },
  {
    title: "Lawyer-Reviewed Templates",
    description: "All templates are vetted by certified legal professionals to ensure accuracy.",
  },
  {
    title: "eSign & PDF Export",
    description: "Download signed documents or export as PDF/Docx securely.",
  },
  {
    title: "Secure & Encrypted",
    description: "Your data is encrypted end-to-end to keep your documents private and safe.",
  },
];

export default function Features(){
    return(
        <div className="bg-white flex flex-col text-black w-full mt-20 pt-10 items-center space-y-16 mb-20 pb-22 ">
            <div className="flex flex-col items-center space-y-6 mt-10">
                <h1 className="text-6xl">Why choose LegalDoc</h1>
                <p className="text-xl text-gray-800">We combine legal expertise with powerful AI to help you create professional legal documents in minutes.</p>
            </div>
            <div className="grid grid-cols-2 space-x-16 ">
                {features.map(item=>(
                    <div key={item.title} className="p-10">
                        <div className="flex space-x-2">
                            <CheckCircle className="text-green-600 dark:text-green-400 w-6 h-6 mt-1" />
                            <h1 className="text-xl">{item.title}</h1>
                        </div>
                        <div>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
