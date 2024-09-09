// components/SectionFour/SectionFour.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export const SectionFour = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0 },  // No rotation in the starting state
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
    
  }, []);

  return (
    <div ref={sectionRef} className="bg-black section-four min-h-screen flex flex-col items-center justify-center px-4 py-8">
  {/* Heading */}
  <h2 className='text-[4rem] mb-8 text-[#DFC38A]'>Our Partnership</h2>

  {/* Flex container for image and text */}
  <div className="flex flex-wrap items-center space-x-8 max-w-4xl">
    {/* Image Section */}
    <div className="flex-1 min-w-[300px]">
      <div>
        <Image
          src={"/images/section4.png"}
          width={300}
          height={300}
          alt='section 4 image'
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="flex-1 min-w-[300px] text-[#DFC38A]">
      <h2 className='text-[4rem]'>Government of India</h2>
    </div>
  </div>
</div>


  );
};

export default SectionFour;
