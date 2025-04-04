"use client";
import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Modal_auth from "@/components/Modal_auth";


export const NavigationItems = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle screen resize to toggle mobile menu
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black font-bold text-[#DFC38A] text-[16px]">
      <nav className="container mx-auto px-5 py-3 relative">
        <div className="flex items-center justify-between">
          {/* Toggle Button for Mobile */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="text-[#DFC38A] focus:outline-none"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          )}

          <NavigationMenu>
            {isMobile ? (
              // Mobile menu
              menuOpen && (
                <div className="absolute right-0 top-full w-full bg-white text-[#DFC38A] rounded mt-6 mr-5">
                  <NavigationMenuList className="flex flex-col space-y-6">
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="#"
                        className="px-4 py-2 hover:bg-gray-200"
                      >
                        Home
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="#"
                        className="px-4 py-2 hover:bg-gray-200"
                      >
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="#"
                        className="px-4 py-2 hover:bg-gray-200"
                      >
                        Services
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="#"
                        className="px-4 py-2 hover:bg-gray-200"
                      >
                        Contact
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="#"
                        className="px-4 py-2 hover:bg-gray-200 font-semibold text-[#4CAF50]"
                      >
                        Signup
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="#"
                        className="px-4 py-2 hover:bg-gray-200 font-semibold text-[#FF5722]"
                      >
                        Login 
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </div>
              )
            ) : (
              // Desktop menu
              <NavigationMenuList className="flex space-x-4 items-center">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/#about_us"
                    className="hover:text-gray-400 text-[1.2rem]"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/services"
                    className="flex items-center space-x-2 hover:text-gray-400 font-semibold p-2 text-[1.2rem] transition ease-in-out delay-50  "
                  >
                    {/* <ModalSection/> */}
                    Services
                    {/* <ModalServices/> */}
                    
                  </NavigationMenuLink>
                </NavigationMenuItem> 
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/chatbot"
                    className="hover:text-gray-400"
                  >
                    <p   className="flex items-center space-x-2  font-semibold   text-[1.2rem] hover:text-gray-400 text-[#DFC38A]  transition ease-in-out delay-50  ">
                      Chatbot
                    </p>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="flex items-center space-x-2 hover:text-gray-400 font-semibold p-2  bg-[#DFC38A] rounded-md hover:bg-[#BA9359] transition ease-in-out delay-50 "
                  >
                    {/* <span className="text-black ">Get Started</span> */}
                    <Modal_auth/>
                    
                    
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            )}
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
};
