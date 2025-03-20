import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);  
    const fullText = "<Seeing the World Through Data />";

    useEffect(() => {
        if (index <= fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.substring(0, index));
                setIndex(index + 1); 
            }, 55);

            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                if (typeof onComplete === "function") {
                    onComplete();  // Ensure it's a function before calling
                }
            }, 1000);
        }
    }, [index, onComplete]);  // ✅ Add onComplete to dependencies

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1">|</span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};
