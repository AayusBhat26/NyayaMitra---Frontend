import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { EyeIcon, MessageCircle, EyeOff, Dot } from "lucide-react";

interface FormState {
  email: string;
  username: string;
  password: string;
}

const LoginForm: React.FC<{
  formState: FormState;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}> = ({ formState, handleInputChange, showPassword, togglePasswordVisibility }) => (
  <section className="relative  h-full w-full mt-[4rem] flex flex-col justify-center items-center z-20   rounded-br-[3rem] ">
    <h3 className="text-[3rem] font-bold text-center p-2 poppinClass  w-full">
      Welcome Back
    </h3>
    <p className="text-[1.25rem] text-center font-serif">
      We're so excited to see you again!
    </p>
    
    <div className="w-full h-full flex justify-center mt-[5rem] relative left-5">
      <form className="w-[80%]">
        <div className="mb-3 w-full">
          <label>Email or Phone Number</label>
          <div className="flex items-center w-full">
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 bg-black border-2 border-[#DFC38A] rounded-md"
            />
            <MessageCircle className="ml-[1.8rem] mr-[0.9rem] " />
          </div>
        </div>
        <div className="mb-3 bg-black">
          <label>Password </label>
          <div className="w-full h-full flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formState.password}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 bg-black  border-[#DFC38A] rounded-md  border-2"
            />
            <Button
              type="button"
              className="bg-transparent mt-[-1px] hover:bg-transparent ml-[1rem]"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <EyeIcon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
        <div className="mt-[10px]">
          <p className="underline text-[14px]">
            Forgot Your Password ?
          </p>
        </div>
        <div className="w-full flex justify-center  mt-10">
        <Button type="button" className="bg-[#DFC38A] text-black hover:bg-[#BA9359] p-[1.5rem] w-[9rem] rounded-3xl ">
          Log In
        </Button>
        </div>
        
      </form>
    </div>
  </section>
);

const SignupForm: React.FC<{
  formState: FormState;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}> = ({ formState, handleInputChange, showPassword, togglePasswordVisibility }) => (
  <div className="relative w-[85%] h-full poppinClass pl-[24px] mt-[5rem] z-10 left-10 ">
    <h3 className="mt-20 mb-8 font-thin text-3xl">
      Welcome to NyayaMitra Community
    </h3>
    <form>
      <div className="mb-3 w-full">
        <label className="block font-bold">Email</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          className="w-full p-2 mt-1 bg-transparent rounded-md  border-2 border-[#BA9359]"
        />
      </div>
      <div className="mb-3 w-full">
        <label className="block font-bold">Username</label>
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleInputChange}
          className="w-full p-2 mt-1 bg-transparent rounded-md  border-2 border-[#BA9359]"
        />
      </div>
      <div className="mb-3">
        <div className="flex justify-between items-center mb-[-10px] ">
          <label className="block font-bold">Password </label>
          <Button
            type="button"
            className="bg-transparent hover:bg-transparent"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
            <p className="ml-[8px] text-[#BA9359] font-bold text-[0.8rem]">
              {showPassword ? "Hide" : "Show"}
            </p>
          </Button>
        </div>
        <input
        
          type={showPassword ? "text" : "password"}
          name="password"
          value={formState.password}
          onChange={handleInputChange}
          className="w-full p-2 mt-1 bg-transparent rounded-md  border-2 border-[#BA9359]"
        />
      </div>
      {/* password format */}
      <div className="w-full text-[12px] grid grid-cols-3">
        <div className="flex ">
          <div><Dot className="w-6 h-6 mt-[-5px]"/></div>
          <div>Use 8 or more characters</div>
        </div>
        <div className="flex ">
          <div><Dot className="w-6 h-6 mt-[-5px]"/></div>
          <div>One Uppercase character</div>
        </div>
        <div className="flex ">
          <div><Dot className="w-6 h-6 mt-[-5px]"/></div>
          <div>One lowercase character</div>
        </div>
        <div className="flex ">
          <div><Dot className="w-6 h-6 mt-[-5px]"/></div>
          <div>One special character</div>
        </div>

        <div className="flex ">
          <div><Dot className="w-6 h-6 mt-[-5px]"/></div>
          <div>One number</div>
        </div>
      </div>
      {/* terms of use */}
      <div className="ml-[1rem]">
        <p className="mt-[2rem] text-[14px] mb-[2rem]">
        By creating an account, you agree to the Terms of use and Privacy Policy. 
        </p>
      </div>
      <div className=" w-full flex ">
      <Button type="button" className="bg-[#DFC38A] text-black  p-[1.5rem] rounded-3xl font-bold text-[16px]   hover:bg-[#BA9359]">
        Create Account
      </Button>
      </div>
    </form>
  </div>
);

const ImageComponent: React.FC<{ activeMode: "login" | "signup" }> = ({ activeMode }) => (
  <div className="w-1/2 relative left-5 z-0  overflow-hidden ">
    <Image
      src={activeMode === "login" ? "/images/login.png" : "/images/SignUp.png"}
      alt={activeMode === "login" ? "Login" : "Signup"}
      layout="fill"
      objectFit="cover"
      className="z-0"
    />
  </div>
);

const ModalAuth: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>({
    email: "",
    username: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

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
      <DialogContent className="border-none border   p-0 w-[90vw] h-[90vh] bg-transparent-none max-w-none flex gap-0 ">
        <div className="absolute top-0 left-0 right-0 flex mt-2 z-20 justify-around ">
          <Button
            className={`${
              activeMode === "login" ? "border-none text-[#DFC38A] bg-black text-xl" : "bg-[#DFC38A] text-black text-xl hover:bg-[#BA9359] border-0"
            } px-6 py-2 rounded-md border mr-2`}
            onClick={() => setActiveMode("login")}
          >
            Login
          </Button>
          <Button
            className={`${
              activeMode === "signup" ? "border-none text-[#DFC38A] bg-black text-xl" : "bg-[#DFC38A] text-black text-xl hover:bg-[#BA9359] border-0"
            } px-6 py-2 rounded-md border ml-2`}
            onClick={() => setActiveMode("signup")}
          >
            Signup
          </Button>
        </div>
        <ImageComponent activeMode={activeMode}  />
        <div className="w-1/2 flex flex-col justify-center bg-black text-[#DFC38A] relative p-0 right-2 z-10 rounded-bl-[3rem] rounded-tl-[3rem] ">
          {activeMode === "login" ? (
            <LoginForm
              formState={formState}
              handleInputChange={handleInputChange}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          ) : (
            <SignupForm
              formState={formState}
              handleInputChange={handleInputChange}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAuth;
