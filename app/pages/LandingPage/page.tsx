"use client";
import { SectionFour } from "@/components/SectionFour/SectionFour";
import { SectionOne } from "@/components/SectionOne/SectionOne";
import { SectionThree } from "@/components/SectionThree/SectionThree";
import { SectionTwo } from "@/components/SectionTwo/SectionTwo";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import "../../../app/globals.css";
import { ModalServices } from "@/components/Modal_Services";

export const HomePage = () => {
  useSmoothScroll();
  return (
    <div
      className="hide-scrollbar relative overflow-hidden max-w-screen-[1536px] font-dmserif"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      ></div>
      <div className="relative z-10 text-white flare overflow-hidden">
        <div id="section-container" className="sectionContainer">
          {/* section 1 */}
          <section>
            <SectionOne />
            <hr className="w-24 border-t border-[#BA9359] mx-auto my-8" />
          </section>
          {/* section 2 */}
          <section id="about_us">
            <SectionTwo />
            <hr className="w-24 border-t border-[#BA9359] mx-auto my-8" />
          </section>
          {/* section 3 */}
          <section>
            <SectionThree />
            {/* <ModalServices/> */}
            <hr className="w-24 border-t border-[#BA9359] mx-auto my-8" />
          </section>
          {/* section 4 */}
          <section>
            <SectionFour />
            {/* <hr className="w-24 border-t border-[#BA9359] mx-auto my-8" /> */}
          </section>
        </div>
      </div>
    </div>
  );
};
