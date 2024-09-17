'use client';
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";
import Picture1 from "../../public/images/1.png";
import Picture2 from "../../public/images/laywer_dashboard.png";
import Picture3 from "../../public/images/doj.jpg";
import Picture4 from "../../public/images/traffic_challan.png";
// import Picture5 from "../../public/images/sectionImage.png";
// import Picture6 from "../../public/images/section2Image.jpg";
// import Picture7 from "../../public/images/background.png";
import Image from "next/image";
import { X } from "lucide-react";

const ModalServices = () => {
  const router = useRouter();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  useMotionValueEvent(scale4, "change", (latest) => {
    if (latest >= 3.8) { // 3.8 is approximately 95% of 4 (the max scale)
      router.push("/chatbot");
    }
  });

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    // { src: Picture5, scale: scale6 },
    // { src: Picture6, scale: scale8 },
    // { src: Picture7, scale: scale9 },
  ];

  return (
    <div ref={container} className={`${styles.container}`}>
      <div className="text-[#BA9359] p-1">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className="flex w-full items-center">
            <X className="h-8 w-8 mt-2" />
          </div>
        </Link>
      </div>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div key={index} style={{ scale }} className={styles.el}>
            <div className={styles.imageContainer}>
              <Image
                src={src}
                fill
                alt="image"
                placeholder="blur"
                
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40 ">
                {/* <p className="text-white text-2xl font-bold  ">
                  {src === Picture1 ? "" : ""}
                </p> */}
                <p className="text-white text-2xl font-bold ">
                  {src === Picture2 ? "Lawyer Dashboard" : ""}
                </p>
                <p className="text-white text-2xl font-bold ">
                  {src === Picture3 ? "DOJ Dashboard" : ""}
                </p>
                <p className="text-white text-2xl font-bold ">
                  {src === Picture4 ? "Traffic Challan" : ""}
                </p>
              
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ModalServices;