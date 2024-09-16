// components/SectionThree/SectionThree.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button"
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const SectionThree = () => {
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
    <div
      ref={sectionRef}
      className="section-three min-h-screen flex items-center h-screen w-screen"
    >
      <div className="flex justify-center items-center  w-full h-full flex-col">
        <div className="flex flex-col items-center text-[#DFC38A] text-[4rem] text-center">
          <h1>Find Right Advice.</h1>
          <h1>Get answers.</h1>
          <h1>Connect with professionals.</h1>
        </div>
        {/* second text  */}
        <div className="text-center mt-[3rem] text-[2rem] text-[#DFC38A] w-[60%]">
        Free to use. Easy to try. Just ask and NyayaMitra can help with you legal knowledge and advices.
        </div>
        {/* button div */}
        <div className="mt-10 ">
        <Button variant={"default"} className="hover:bg-[#C3A971] bg-[#DFC38A] text-[#000000] text-2xl p-[2rem]">
          <Link href={"/chatbot"}>
          Start Now
          </Link>
        </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
