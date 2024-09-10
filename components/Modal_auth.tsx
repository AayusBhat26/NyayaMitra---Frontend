import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ModalAuth = () => {
  const [activeMode, setActiveMode] = useState("login");

  const FormComponent = () => (
    <div className="w-1/2 flex flex-col justify-between bg-black text-[#DFC38A] relative p-0">
      {/* Signup Button centered in the row */}
      <div className="flex justify-center mb-2">
        <Button
          className={`${
            activeMode === "signup" ? "bg-[#DFC38A] text-black" : "bg-transparent text-[#DFC38A] hover:bg-[#BA9359]"
          } px-6 py-2 rounded-md`}
          onClick={() => setActiveMode("signup")}
        >
          Signup
        </Button>
      </div>

      {/* <DialogHeader>
        <h2 className="text-3xl font-bold mb-4">{activeMode === "login" ? "Login" : "Signup"}</h2>
      </DialogHeader> */}

      {activeMode === "login" ? (
        <>
         <div className="w-full h-full ">
          <h3 className="text-2xl font-bold mb-3 text-center p-3 font-serif  ">Welcome Back</h3>
          <form>
            <div className="mb-3">
              <label>Email or Phone Number</label>
              <input type="text" className="w-full p-2 mt-1 bg-black    border border-[#DFC38A] rounded-md " />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="w-full p-2 mt-1 bg-[#BA9359] rounded-md" />
            </div>
            <Button className="bg-[#DFC38A] text-black mt-3 w-full">Log In</Button>
          </form>
        </div>
        </>
       
      ) : (
        <div>
          <h3 className="text-2xl font-bold mb-3">Join NyayaMitra</h3>
          <form>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="w-full p-2 mt-1 bg-[#BA9359] rounded-md" />
            </div>
            <div className="mb-3">
              <label>Username</label>
              <input type="text" className="w-full p-2 mt-1 bg-[#BA9359] rounded-md" />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="w-full p-2 mt-1 bg-[#BA9359] rounded-md" />
            </div>
            <Button className="bg-[#DFC38A] text-black mt-3 w-full">Create Account</Button>
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
            activeMode === "login" ? "bg-[#DFC38A] text-black" : "bg-transparent text-[#DFC38A] hover:bg-[#BA9359]"
          } px-6 py-2 rounded-md`}
          onClick={() => setActiveMode("login")}
        >
          Login 
        </Button>
      </div>

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
        <div className="inline-block">
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
      <DialogContent className="p-0 w-[90vw] h-[90vh] bg-transparent border-none max-w-none flex gap-0">
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
