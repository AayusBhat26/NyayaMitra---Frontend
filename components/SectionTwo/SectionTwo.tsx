import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const SectionTwo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="bg-black rounded-lg">
      <div
        ref={sectionRef}
        className="section-three  w-screen h-screen flex  justify-start"
      >
        {/* First subsection with image and about us */}
        <div className="w-full h-full p-20 flex items-center justify-center">
          <div className=" w-[90%] flex justify-center border-l-0 border-t-0 border-b-0 border border-r-[#DFC38A]">
            <Image
              src="/images/section2Image.jpg"
              width={600}
              height={600}
              alt="Image"
              className="mx-auto "
            />
          </div>

          <div className="ml-8 text-center font-dmserif ">
            <h2 className=" text-2xl text-start ml-[0.5rem] mb-[2rem] text-[#DFC38A]">
              About Us
            </h2>
            <p className="text-left  text-[5rem] text-[#DFC38A] ">
              NyayaMitra is an AI chatbot and services platform.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[#DFC38A] text-[20px] text-center  font-thin mt-[-8rem] pb-[4rem] ">
            NyayaMitra is an innovative AI chatbot designed to simplify
            interactions with the judiciary system for both the public and legal
            professionals. For everyday users, it provides easy access to
            important legal information, including details about court
            divisions, judge appointments, and current vacancies. It also helps
            track case status through the National Judicial Data Grid (NJDG) and
            guides users on paying traffic fines, watching live court case
            streams, and navigating eFiling and ePay procedures. Additionally,
            NyayaMitra explains how to use the eCourts Services app and access
            tele-law services. For legal professionals, it offers support with
            case management, court filings, and updates on legal procedures.
            Continuously learning and adapting, NyayaMitra enhances its ability
            to manage large data volumes and improve user interactions, making
            it an essential tool for navigating the legal system efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
