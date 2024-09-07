"use client"
import { SectionFour } from "@/components/SectionFour/SectionFour"
import { SectionOne } from "@/components/SectionOne/SectionOne"
import { SectionThree } from "@/components/SectionThree/SectionThree"
import { SectionTwo } from "@/components/SectionTwo/SectionTwo"
import useSmoothScroll from "@/hooks/useSmoothScroll"

export const HomePage = () => {
  useSmoothScroll();
  return (
    <div className="hide-scrollbar relative  overflow-hidden max-w-screen-[1536px] font-dmserif ">
      <img
      // w-full h-full min-h-screen
        src="images/background.png"
        alt="Background"
        className="w-full h-auto min-h-screen object-cover"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
       <div className="relative z-10 text-white flare overflow-hidden">
      <div id="section-container" className="sectionContainer">
        {/* section 1 */}
        <section id="section-one">
          <SectionOne />
        </section>
        {/* section 2 */}
        <section id="section-two">
          <SectionTwo />
        </section>
        {/* section 3 */}
        <section id="section-three">
          <SectionThree />
        </section>
        {/* section 4 */}
        <section id="section-four">
          <SectionFour />
        </section>
      </div>
    </div>

      {/* Navigation Bar */}
      {/* <div */}
        {/* className="navbar fixed bottom-0 w-full text-white z-20 shadow-lg" */}
      {/* > */}
        {/* Your Navigation Items */}
        {/* <nav > */}
          {/* Navigation links or buttons go here */}
        {/* </nav> */}
      {/* </div> */}
    </div>
  );
};
