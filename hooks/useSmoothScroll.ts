// hooks/useSmoothScroll.ts
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      infinite: false,
    });

    const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
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
