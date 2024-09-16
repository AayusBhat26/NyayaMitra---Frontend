'use client';
import { Sidebar } from "@/components/ui/Sidebar";
import { Menu, NotebookPen } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Update screen size status on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg: 1024px
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-full bg-black m-0 p-0 overflow-hidden relative">
      <div className="w-full flex">
        {/* Menu Icon */}
        <div className="w-1/3 mt-1 p-2 flex items-center">
          <Menu
            className="text-[#DFC38A] h-8 w-8 cursor-pointer"
            onClick={toggleSidebar} // Always clickable
          />
        </div>

        {/* Logo */}
        <div className="w-1/3 p-2 mt-1 flex justify-center">
        <Link href={'/'}>
        <Image src={"/images/Logo.png"}  alt="logo" width={200} height={200} />
        </Link>
        </div>

        {/* Right-side icon */}
        <div className="w-1/3 p-2 mt-1 flex justify-end items-center">
          <NotebookPen className="text-[#DFC38A]" />
        </div>
      </div>

      {/* Main layout container */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div
          className={`transition-transform duration-300 ease-in-out z-50 rounded-sm bg-black h-full ${
            isLargeScreen
              ? `relative ${isSidebarOpen ? 'w-1/5' : 'w-0'}`
              : `fixed top-0 left-0 h-full transform ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'}`
          }`}
        >
          {isSidebarOpen && (isLargeScreen ? <Sidebar /> : <Sidebar />)}
        </div>

        {/* Main content area */}
        <div className={`flex-grow bg-gray-100 p-4 transition-all duration-300 ease-in-out ${
          isLargeScreen ? (isSidebarOpen ? 'w-4/5' : 'w-full') : ''
        }`}>
          <h1 className="text-black">Main Content Here</h1>
          {/* Additional content/components can be placed here */}
        </div>
      </div>

      {/* Overlay for small/medium screens when sidebar is open */}
      {!isLargeScreen && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Page;
