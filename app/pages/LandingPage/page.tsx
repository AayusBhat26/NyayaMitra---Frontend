"use client";
import { SectionFour } from "@/components/SectionFour/SectionFour";
import { SectionOne } from "@/components/SectionOne/SectionOne";
import { SectionThree } from "@/components/SectionThree/SectionThree";
import { SectionTwo } from "@/components/SectionTwo/SectionTwo";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import "../../../app/globals.css";

export const HomePage = () => {
  useSmoothScroll();
  return (
    <div
      id="section-container_main"
      className="hide-scrollbar relative overflow-hidden max-w-screen-[1536px] font-dmserif"
    >
      <img
        src="images/background.png"
        alt="Background"
        className="w-full h-auto min-h-screen object-cover"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div className="relative z-10 text-white flare overflow-hidden">
        <div id="section-container" className="sectionContainer">
          {/* section 1 */}
          <section>
            <SectionOne />
            <hr className="w-24 border-t border-[#BA9359] mx-auto my-8" />
          </section>
          {/* section 2 */}
          <section>
            <SectionTwo />
            <hr className="w-24 border-t border-[#BA9359] mx-auto my-8" />
          </section>
          {/* section 3 */}
          <section>
            <SectionThree />
            <hr className="w-24 border-t border-[#BA9359] mx-auto my-8" />
          </section>
          {/* section 4 */}
          <section>
            <SectionFour />
            <hr className="w-24 border-t border-[#BA9359] mx-auto my-8" />
          </section>
        </div>
      </div>
    </div>
  );
};
