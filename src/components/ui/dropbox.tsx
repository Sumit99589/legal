"use client";
import { useRef, useState, DragEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type props = {
  length: Number;
}

export default function FileDropBox({length}: props) {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string>("")

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(!loading)
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const res = await fetch(`https://legalapi-1.onrender.com/run?length=${length}`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      localStorage.setItem("legalReport", data.response)
      router.push("/report")
      setResult("yes")
      
  } catch (error) {
      console.error(error);
  }
  setLoading(false)
  };
 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  return (
    result?(
      <div>
          {result}
      </div>
    ):(
      <div>
      <Card className="p-4 border-2 border-dashed border-gray-300 rounded-2xl shadow-md text-center">
      <CardContent
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="p-6"
      >
        <p className="text-gray-600 mb-4">
          Drag and drop a file here, or click to select
        </p> 
         
        <input
          type="file"
          onChange={handleFileChange}
          className="sr-only"
          id="fileInput"
          ref={fileInputRef}
        />
        <Button
          variant="outline"
          className="cursor-pointer"
          type="button"
          onClick={handleChooseFile}
        >
          Choose File
        </Button>

        {selectedFile && (
          <div className="mt-4 text-sm text-gray-700">
            Selected: {selectedFile.name}
          </div>
        )}

        <Button onClick={handleUpload} className="mt-4 cursor-pointer">
          Upload
        </Button>
        
      </CardContent>
      {loading?(
        <h1>Loading...</h1>
      ):(
        <div></div>
      )}
    </Card>
    </div>
    )
  );
}