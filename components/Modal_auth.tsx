import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { EyeIcon } from "lucide-react";
import {MessageCircle} from "lucide-react"

const ModalAuth = () => {
  const [activeMode, setActiveMode] = useState("login");

  const FormComponent = () => (
    <div className="w-1/2 flex flex-col justify-between bg-black text-[#DFC38A] relative p-0">
      {/* Signup Button centered in the row */}
      <div className="flex justify-center mb-2">
        <Button
          className={`${
            activeMode === "login"
              ? "text-[#DFC38A] bg-black "
              : "bg-transparent text-[#DFC38A] hover:bg-[#BA9359]"
          } px-6 py-2 rounded-md `}
          onClick={() => setActiveMode("login")}
        >
          Login
        </Button>
      </div>

      {/* <DialogHeader>
        <h2 className="text-3xl font-bold mb-4">{activeMode === "login" ? "Login" : "Signup"}</h2>
      </DialogHeader> */}

      {activeMode === "login" ? (
        <section className="h-full w-full  mt-[10rem]">
          <h3 className="text-[3rem] font-bold  text-center p-2 font-serif  ">
            Welcome Back
          </h3>
          <p className="text-[1.25rem]   text-center  font-serif">
            We’re so excited to see you again!
          </p>
          <div className="w-full h-full flex justify-center mt-[3rem]">
            <form>
              <div className="mb-3 w-full ">
                <label>Email or Phone Number</label>
               <div className="flex items-center w-full ">
               <input
                  type="text"
                  className="w-full p-2 mt-1 bg-black   border border-[#DFC38A] rounded-md "
                />
                <MessageCircle className="ml-[1rem]"/>
               </div>
              </div>
              <div className="mb-3 bg-black">
                <label>Password</label>
                {/* password */}
                <div className="w-full h-full flex items-center">
                  <input
                    type="password"
                    className="w-full p-2 mt-1 bg-black  border border-[#DFC38A] rounded-md"
                  />
                  <EyeIcon className="bg-red text-center h-full ml-[1rem]" />
                </div>
              </div>
              <Button className="bg-[#DFC38A] text-black mt-3 w-full">
                Log In
              </Button>
            </form>
          </div>
        </section>
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-3">Join NyayaMitra</h3>
          <form>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="w-full p-2 mt-1 bg-[#BA9359] rounded-md"
              />
            </div>
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="w-full p-2 mt-1 bg-[#BA9359] rounded-md"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="w-full p-2 mt-1 bg-[#BA9359] rounded-md"
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

  const ImageComponent = () => (
    <div className="w-1/2 relative">
      {/* Login Button centered in the row */}
      <div className="absolute top-0 left-0 right-0 flex justify-center mt-2 z-10">
        <Button
          className={`${
            activeMode === "signup"
              ? "bg-[#DFC38A] text-black"
              : "bg-transparent text-[#DFC38A] hover:bg-[#BA9359]"
          } px-6 py-2 rounded-md`}
          onClick={() => setActiveMode("signup")}
        >Signup</Button>
      </div>

      <Image
        src={
          activeMode === "login" ? "/images/login.png" : "/images/SignUp.png"
        }
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
        <div >
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
      <DialogContent className="p-0 w-[90vw] h-[90vh] bg-transparent border-none max-w-none  flex  gap-0">
        {/* Modal Content */}
        {activeMode === "login" ? (
          <>
            <ImageComponent />
            <FormComponent />
          </>
        ) : (
          <>
            <FormComponent />
            <ImageComponent />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalAuth;
