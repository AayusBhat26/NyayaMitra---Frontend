import { X } from "lucide-react";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-full border border-t-0 bg-black  m-0 p-0 ">
      {/* go to landing page and logo*/}
      <div className="flex w-full p-2">
        <div className="  text-[#DFC38A] ">
          <Link  href="/">
          <X className="h-8 w-8" xlinkTitle="test"/></Link>
        </div>
        <div className="flex items-center">test 2</div>
      </div>
    </div>
  );
};

export default page;
