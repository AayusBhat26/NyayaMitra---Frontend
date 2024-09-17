'use client';

import { PlusCircle, MessageSquare } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

// Array of current cases (example cases)
const currentCases = [
  { id: 1, title: "Case A: User Issue" },
  { id: 2, title: "Case B: Payment Problem" },
  { id: 3, title: "Case C: Access Denied" },
];

export const Sidebar = () => {
  const [activeCase, setActiveCase] = useState(1); // To track the active case

  return (
    <div className="text-black  bg-[#BA9359] h-full">
      {/* Heading */}
      <div className="w-full h-1/6 text-center p-4  ">
        <p className="font-bold text-2xl">NYAYAMITRA</p>
        <p className="font-thin text-sm">CHATBOT</p>
      </div>

      {/* New Chat Button */}
      <div className="w-full flex justify-center ">
        <Button
          variant={"ghost"}
          className="bg-[#DFC38A] text-black poppinClass flex justify-between gap-2 p-4 rounded-xl"
        >
          <PlusCircle className="w-5 h-5" />
          <p className="text-[1rem]">New Chat</p>
        </Button>
      </div>

      {/* Current Conversations */}
      <div className="mt-[2rem] px-4">
        <p className="ml-[1rem]">Current</p>
        <ul className="space-y-4 mt-2">
          {currentCases.map((caseItem) => (
            <li
              key={caseItem.id}
              className={`text-black flex items-center cursor-pointer p-2 rounded-lg transition-all duration-300 ease-in-out ${
                activeCase === caseItem.id || 1
                  ? "bg-[#DFC38A] text-black"
                  : "text-[#DFC38A] hover:bg-[#DFC38A] hover:text-black"
              }`}
              onClick={() => setActiveCase(caseItem.id)} // Set active case on click
            >
              {/* Left-side Icon */}
              <MessageSquare className="mr-2 w-5 h-5" />
              {/* Right-side Text */}
              <span>{caseItem.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
