import Image from "next/image";

export const SectionOne = () => {
  return (
    <>
    <div className="relative  pt-10 pb-10 flex items-center">
      {/* #text section */}
      <div className="flex-1 relative z-10 right-[-16.8%] hidden md:block text-[6rem] text-[#BA9359] ml-8 animate-up">
        <p className="font-bold my-[0.625rem] ml-[-0.0.5rem]">
          Uphold Truth For
        </p>
        <p className="font-bold leading-tight">Justice With</p>
        <p className="font-bold leading-tight">NyayaMitra</p>
      </div>

      {/* #image Section */}
      <div className="relative mr-8">
        <Image
          src={"/images/section1.png"}
          width={600}
          height={600}
          alt="imageSectionOne"
          className="relative z-0 left-[-50%]"
        />
      </div>
    </div>
    </>
  );
};
