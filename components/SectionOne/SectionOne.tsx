import Image from "next/image";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const SectionOne = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 }, // Initial state for fade-in
      {
        opacity: 1, // Final state for fade-in
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',  // When the top of the section hits 80% of the viewport height
          end: 'top 20%',    // When the top of the section hits 20% of the viewport height
          toggleActions: 'play none none reverse', // Play animation when entering, reverse animation when exiting
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <>
      <div ref={sectionRef} className="relative section-three pt-10 flex justify-center items-center h-screen ">
        {/* Text section */}
        <div className="flex-1 relative z-10 hidden lg:block text-[6rem] text-[#BA9359] ml-8 left-44 animate-up">
          <p className="font-bold my-[0.625rem] ml-[-0.0.5rem]">Uphold Truth For</p>
          <p className="font-bold leading-tight">Justice With</p>
          <p className="font-bold leading-tight">NyayaMitra</p>
        </div>

        <div className="flex-1 absolute z-10 lg:hidden block text-[4rem] text-[#BA9359] animate-up bg-black opacity-75 p-4 rounded-md">
        <p className="font-bold my-[0.625rem] ml-[-0.0.5rem]">Uphold Truth For</p>
          <p className="font-bold leading-tight">Justice With</p>
          <p className="font-bold leading-tight">NyayaMitra</p>
        </div>


        {/* Image Section */}
        <div className="relative lg:w-[800px] lg:h-[600px] flex w-full h-full justify-center  top-0 lg:right-44"> {/* Fixed dimensions for the image container */}
          <Image
            src={"/images/section1.png"}
            layout="fill"
            objectFit="cover" // Maintain aspect ratio while covering the container
            alt="imageSectionOne"
            className="relative w-[400px] h-[300px] rounded-sm " // Static size for the image
          />
        </div>
      </div>
    </>
  );
};
