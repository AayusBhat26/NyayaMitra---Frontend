"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const ModalSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const imageArray = ["/images/chatbot_image.jpg","/images/lawyer_dashboard.jpg","/images/traffic_challan.png", ]
  const imageObject = {
    "Chatbot": imageArray[0],
    "Lawyer Dashboard": imageArray[1],
    "Traffic Challan": imageArray[2],
  }

  // Handle the drag functionality
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      setMouseDownAt(e.clientX);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseDownAt === 0 || !trackRef.current) return;

      const mouseDelta = mouseDownAt - e.clientX;
      const maxDelta = window.innerWidth / 2;
      const nextPercentage = Math.max(Math.min(prevPercentage + (mouseDelta / maxDelta) * 100, 0), -100);

      setPercentage(nextPercentage);
      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
    };

    const handleMouseUp = () => {
      setMouseDownAt(0);
      setPrevPercentage(percentage);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseDownAt, prevPercentage, percentage]);

  const handleMoveLeft = () => {
    const nextPercentage = Math.max(percentage - 20, -100); // Decrease percentage to move left
    setPercentage(nextPercentage);
    if (trackRef.current) {
      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
    }
  };
  
  const handleMoveRight = () => {
    const nextPercentage = Math.min(percentage + 20, 0); // Increase percentage to move right
    setPercentage(nextPercentage);
    if (trackRef.current) {
      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
    }
  };
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="text-black text-xl font-bold hover:bg-transparent">
          Services
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-full h-full bg-black bg-opacity-[0.2] m-0 overflow-hidden flex flex-col justify-center items-center">
        <div
          ref={trackRef}
          className="flex gap-4 transition-transform duration-1000"
          id="imageWrapper"
          style={{ transform: `translate(${percentage}%, -50%)` }}
        >
          {Object.entries(imageObject).map(([name, src]) => (
            <div className="h-full w-full relative  overflow-hidden">
              <div key={name} className="flex flex-col items-center   ">
            <Image
              src={src}
              alt={name}
              width={400}
              height={300}
              className="w-[50vmin] h-[56vmin] object-cover object-center rounded-md hover:scale-110 transition brightness-50 hover:brightness-75"
            />
            {/* <div className="inset-0 h-full w-full absolute top-0 bottom-0 bg-black opacity-40 hover:opacity-20"></div> */}
            <p className="text-white text-lg mt-2 absolute bottom-0 bg-black bg-opacity-75 w-full text-center p-2 ">{name}</p>
          </div>
            </div>
          ))}
        </div>
        {/* Buttons for left and right movement */}
        <div className="flex gap-4 h-full items-end">
          <Button onClick={handleMoveLeft} variant="ghost" className="text-white bg-black px-4 py-2">
            Move Left
          </Button>
          <Button onClick={handleMoveRight} variant="ghost" className="text-white bg-black px-4 py-2">
            Move Right
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
