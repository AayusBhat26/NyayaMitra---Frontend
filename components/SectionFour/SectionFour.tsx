// components/SectionFour/SectionFour.tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SectionFour = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, rotate: -5 },
      {
        opacity: 1,
        rotate: 0,
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
    <div ref={sectionRef} className="section-four min-h-screen flex items-center">
      <h2>Section Four</h2>
      <p>This is the content of Section Four.</p>
    </div>
  );
};

export default SectionFour;
