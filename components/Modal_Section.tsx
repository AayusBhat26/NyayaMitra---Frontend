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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="text-black text-xl font-bold hover:bg-transparent">
          Services
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-full h-full bg-black bg-opacity-[0.2] m-0 overflow-hidden flex justify-center items-center">
        <div
          ref={trackRef}
          className=" flex gap-4 transition-transform duration-1000"
          data-mouse-down-at="0"
          id="imageWrapper"
          style={{ transform: `translate(${percentage}%, -50%)` }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              src="/images/services_first_image.jpg"
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="image w-[40vmin] h-[56vmin] object-cover object-center rounded-sm"
              draggable={"false"}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
