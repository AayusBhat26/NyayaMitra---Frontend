import Image from "next/image";

export const SectionTwo = () => {
  return (
    <div className="bg-black w-screen h-screen flex  justify-start">
      {/* First subsection with image and about us */}
      <div className="w-full h-full p-20 flex items-center justify-center">
        <div className=" w-[90%] flex justify-center border-l-0 border-t-0 border-b-0 border border-r-[#DFC38A]">
          <Image
            src="/images/section2Image.jpg"
            width={600}
            height={600}
            alt="Image"
            className="mx-auto "
          />
        </div>

        <div className="ml-8 text-center font-dmserif ">
          <h2 className=" text-2xl text-start ml-[0.5rem] mb-[2rem] text-[#DFC38A]">About Us</h2>
          <p className="text-left  text-[5rem] text-[#DFC38A] ">NyayaMitra is an AI chatbot and services platform.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
