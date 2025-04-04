import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center ml-10">
      <Image
        src="images/Logo.png" // Update this path as necessary
        alt="logo"
        className="w-44 h-auto md:w-52"
        // style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
};
export default Logo;