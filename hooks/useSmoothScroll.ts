// hooks/useSmoothScroll.ts
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');

gsap.registerPlugin(ScrollTrigger);

export const createScrollAnimations = ()=>{
  const sectionsTimeline = gsap.timeline({
    scrollTrigger:{
      trigger:'.sectionContainer', 
      start:'top top', 
      end: `+=${window.innerHeight * 2}`, 
      scrub: 1,
      pin: true,
    },
  });
  sectionsTimeline
.to('#section-one', { duration: 1, autoAlpha: 1, y: -window.innerHeight }, 0)
.to('#section-two', { duration: 1, y: -window.innerHeight }, '+=1')
.to('#section-three', { duration: 2, y: -window.innerHeight * 2 }, '+=2')
.to('#section-four', { duration: 3, y: -window.innerHeight * 3 }, '+=1')
.to('#section-container', { duration: 4, delay: 15, autoAlpha: 0, y: -window.innerHeight * 2 }, 0);
};


const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      infinite: false,
    });

    gsap.registerPlugin(ScrollTrigger);

    // Ensure the DOM is ready before initializing animations
    const initializeAnimations = () => {
      gsap.fromTo(
        ".animate-up",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.3, scrollTrigger: { trigger: ".animate-up" } }
      );

      gsap.fromTo(
        ".animate-down",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.3, scrollTrigger: { trigger: ".animate-down" } }
      );

      // Remove or comment out the image animation
      // gsap.fromTo(
      //   ".animate-from-right",
      //   { x: '100vw', opacity: 0 },
      //   { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: ".animate-from-right", start: "top 80%", end: "bottom 30%" } }
      // );
    };

    requestAnimationFrame(() => {
      initializeAnimations();
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default useSmoothScroll;
