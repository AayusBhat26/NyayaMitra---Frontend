import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollToSection = (id: string): void => {
  const targetSection = document.getElementById(id);

  if (!targetSection) {
    console.error(`Section with id "${id}" not found.`);
    return;
  }

  const lenis = new Lenis({
    lerp: 0.1,
    infinite: false,
  });

  const scrollTarget = targetSection.offsetTop;

  gsap.to(window, {
    scrollTo: { y: scrollTarget, autoKill: true },
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => lenis.stop(),
  });

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      infinite: false,
    });

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