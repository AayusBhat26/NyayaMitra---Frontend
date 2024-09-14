import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { EyeIcon, MessageCircle, EyeOff} from "lucide-react";

const ModalAuth = () => {
  const [activeMode, setActiveMode] = useState("login");

  // FormComponent for Signup and Login
  const FormComponent = () => (
    <div className="w-1/2 flex flex-col justify-between bg-black text-[#DFC38A] relative left-5 p-0 rounded-br-[40px] rounded-tr-[40px] z-10">
      {activeMode === "login" ? (
        <section className="h-full w-full mt-[10rem]">
          <h3 className="text-[3rem] font-bold text-center p-2 font-serif">
            Welcome Back
          </h3>
          <p className="text-[1.25rem] text-center font-serif">
            We're so excited to see you again!
          </p>
          <div className="w-full h-full flex justify-center mt-[3rem]">
            <form>
              <div className="mb-3 w-full">
                <label>Email or Phone Number</label>
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    className="w-full p-2 mt-1 bg-black border border-[#DFC38A] rounded-md"
                  />
                  <MessageCircle className="ml-[1rem]" />
                </div>
              </div>
              <div className="mb-3 bg-black">
                <label>Password</label>
                <div className="w-full h-full flex items-center">
                  <input
                    type="password"
                    className="w-full p-2 mt-1 bg-black border border-[#DFC38A] rounded-md"
                  />
                  <EyeIcon className="ml-[1rem]" />
                </div>
              </div>
              <Button className="bg-[#DFC38A] text-black mt-3 w-full">
                Log In 
              </Button>
            </form>
          </div>
        </section>
      ) : (
        <div className="relative w-full h-full  poppinClass p-14">
          <h3 className="mt-20 mb-12 p-2 ml-8 font-thin text-3xl">
            Welcome to NyayaMitra Community
          </h3>
          <form>
            <div className="mb-3 w-full">
              <label className="block font-bold">Email</label>
              <input
                type="email"
                className="w-full  p-2 mt-1 bg-transparent rounded-md  border border-[#BA9359] "
              />
            </div>
            <div className="mb-3 w-full">
              <label className="block font-bold">Username</label>
              <input
                type="text"
                className="w-full p-2 mt-1 bg-transparent bg-[#BA9359] rounded-md border border-[#BA9359]"
              />
            </div>
            <div className="mb-3 ">
              <div className="flex justify-between">
              <label className="block font-bold">Password</label>
              <Button className="bg-transparent mt-[-1px] hover:bg-transparent"><EyeOff className="w-4 h-4 "/>
              <p className="ml-[8px] text-[#BA9359] font-bold text-[0.8rem]">Hide</p>
              </Button>
              </div>
              <input
                type="password"
                className="w-full p-2 mt-[-20px] bg-[#BA9359] rounded-md bg-transparent border border-[#BA9359]"
              />
            </div>
            <Button className="bg-[#DFC38A] text-black mt-3 w-full">
              Create Account
            </Button>
          </form>
        </div>
      )}
    </div>
  );

  // ImageComponent for Login and Signup
  const ImageComponent = () => (
    <div className="w-1/2 relative right-2 z-0">
      <Image
        src={activeMode === "login" ? "/images/login.png" : "/images/SignUp.png"}
        alt={activeMode === "login" ? "Login" : "Signup"}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Button className="font-semibold text-lg text-black bg-[#DFC38A] hover:bg-[#BA9359] rounded-md">
            Get Started
            <Image
              src="/images/rightArrow.png"
              width={20}
              height={20}
              alt="right_Arrow"
              className="ml-[5px]"
            />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 w-[90vw] h-[90vh] bg-transparent-none max-w-none flex gap-0 border-none">
        <div className="absolute top-0 left-0 right-0 flex  mt-2 z-20 justify-around ">
          <Button
            className={`${
              activeMode === "login" ? " border-none text-[#DFC38A] bg-black text-xl" : "bg-[#DFC38A] text-black text-xl hover:bg-[#BA9359] border-0"
            } px-6 py-2 rounded-md border mr-2`}
            onClick={() => setActiveMode("login")}
          >
            Login
          </Button>
          <Button
            className={`${
              activeMode === "signup" ? " border-none text-[#DFC38A] bg-black text-xl" : "bg-[#DFC38A] text-black text-xl hover:bg-[#BA9359] border-0"
            } px-6 py-2 rounded-md border ml-2`}
            onClick={() => setActiveMode("signup")}
          >
            Signup
          </Button>
        </div>
        {activeMode === "login" ? (
          <>
            <FormComponent />
            <ImageComponent />
          </>
        ) : (
          <>
            <ImageComponent />
            <FormComponent />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalAuth;