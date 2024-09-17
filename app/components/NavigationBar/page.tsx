"use client";
import Logo  from "../Logo/page";
import { NavigationItems } from "../NavigationItems/page";

export const NavigationBar = () => {
  return (
    <div className="flex justify-between items-center p-[10px] h-[10vh] text-[#DFC38A] bg-[#000000]   
">
      <Logo />
      <NavigationItems />
    </div>
  );
};
