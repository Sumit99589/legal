import { FileText, ListChecks, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Upload your Document",
    description: "Drag & drop or upload your legal document.",
  },
  {
    icon: ListChecks,
    title: "2. Select the report length",
    description: "Choose how detailed you want the report to be.",
  },
  {
    icon: Sparkles,
    title: "3. Generate Instantly",
    description: "Your document is generated instantly using AI and formatted professionally.",
  },
  {
    icon: Download,
    title: "4. Download or Sign",
    description: "Export your document as PDF/Word or sign it digitally — all in one place.",
  },
];

export default function Steps() {
  return (
    <section className="flex flex-col justify-center items-center text-black bg-white space-y-12 pt-22 pb-26">
        <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-6xl font-medium">How to LegalDoc works</h1>
            <p className="text-xl text-gray-800">Create easiliy readable reports of your complicated legal documents in minutes with just a few clicks.</p>
        </div>
        <div className="grid grid-cols-4 justify-around gap-x-3.5 m-3 ">
            {steps.map(step=>(
                <div key={step.title} className="flex flex-col p-8 border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition">
                    <header className="flex flex-col font-medium ">
                        <step.icon className="text-green-700 w-8 h-8 " />
                        <h1>{step.title}</h1>
                    </header>
                    <div className="text-gray-800">
                        <p>{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}

