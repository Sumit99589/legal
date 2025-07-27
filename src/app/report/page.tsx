"use client";
import { useEffect, useState } from "react";

export default function Report(){
    const [report, setReport] = useState<string>("")
    
    useEffect(()=>{
        const data = localStorage.getItem("legalReport");
        if (data) setReport(data);
    },[])

    return(
        <div>
            <div dangerouslySetInnerHTML={{ __html: report }}></div>
        </div>
    )
}