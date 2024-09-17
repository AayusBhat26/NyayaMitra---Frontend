import Picture1 from "../public/images/1.png";
import Picture2 from "../public/images/2.jpeg";
import Picture3 from "../public/images/3.jpg";
import Picture4 from "../public/images/4.jpg";
import Picture5 from "../public/images/5.jpg";
import Picture6 from "../public/images/6.jpg";
import Picture7 from "../public/images/7.jpeg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

export const ModalServices = () => {
  const container = useRef<HTMLDivElement | null>(null); // Ref for the container
  const { scrollYProgress } = useScroll({
    target: container, // Target the scrolling container
    offset: ["start start", "end end"],
  });

  const router = useRouter(); // To handle the route redirection

  // Define scales for each image based on scroll progress
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 },
  ];

  // Use effect to handle scroll-based redirection
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // If the scroll progress reaches or exceeds 90%, trigger the redirect
      if (latest > 0.9) {
        router.push("/chatbot");
      }
    });

    return () => {
      unsubscribe(); // Cleanup the listener on component unmount
    };
  }, [scrollYProgress, router]);

  return (
    <div ref={container} className="relative w-full h-full mb-[50vh]">
      <div className="relative">
        {pictures.map(({ src, scale }, index) => (
          <motion.div key={index} style={{ scale }} className="relative">
            <div className="relative flex justify-center items-center">
              <Image src={src} fill alt="image" placeholder="blur" />
            
            </div>
          </motion.div>
          
        ))}
      </div>
          <p className="h-screen w-screen border  absolute inset-0 flex justify-center items-center text-red text-4xl font-bold">test</p>
    </div>
  );
};
