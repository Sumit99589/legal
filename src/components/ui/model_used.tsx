import { Card, CardContent, CardHeader } from "./card";
import { Badge } from "./badge";
import Image from "next/image";



const models = [
  {
    icon_path: "/openai.jpg",
    name : "OpenAI",
    desc : "Gpt 3.5 Turbo"
  },
  {
    icon_path : "/gemini.png",
    name : "Gemini",
    desc : "Gemini-2.5-pro"
  }
]

export default function AIModelsUsed() {
  return (
    <div className="flex flex-col items-center space-y-10 pb-10">
      <div>
        <h1 className="text-5xl">Powered by cutting edge AI models</h1>
      </div>
      <div className="grid grid-cols-2 space-x-22 ">
        {models.map(model=>(
          <div key={model.name} className="flex flex-col items-center rounded-2xl p-9 ">
            <div className="p-5">
              <Image
                  src={model.icon_path}
                  alt="Gemini Icon"
                  width={80}
                  height={80}
                  className="rounded-md"/>
            </div>
            <div>
              <h1 className="text-xl mb-2">
                {model.name}
              </h1>
            </div>
            <div>
              <p>
                {model.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{/* <Card className="bg-[#1e1e1e] text-white rounded-2xl shadow-xl p-6">
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="text-blue-400" size={28} />
          <h2 className="text-xl font-semibold">AI-Powered by Industry-Leading Models</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-[#2b2b2b] border border-[#3a3a3a]">
            <img
              src="/logos/gemini-icon.png"
              alt="Gemini Logo"
              className="h-8 w-8"
            />
            <div>
              <p className="text-base font-medium">Gemini 1.5 Flash</p>
              <Badge variant="secondary" className="mt-1 bg-blue-500/10 text-blue-400 border-blue-500/20">
                Google AI
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-lg bg-[#2b2b2b] border border-[#3a3a3a]">
            <Bot className="h-8 w-8 text-purple-400" />
            <div>
              <p className="text-base font-medium">GPT-4o / GPT-4.5</p>
              <Badge variant="secondary" className="mt-1 bg-purple-500/10 text-purple-300 border-purple-500/20">
                OpenAI
              </Badge>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400">
          We combine the best of both worlds — fast, context-rich Gemini reasoning with OpenAI's advanced language understanding — to provide reliable legal insights and document processing.
        </p>
      </CardContent>
    </Card> */}