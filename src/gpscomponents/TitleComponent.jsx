import { Image } from "@nextui-org/react";
import React from "react";
import TitleVH from "../assets/titleVH.svg";
import BgGps from "../assets/bgGps.svg";

export default function TitleComponent() {
  return (
    <div className="flex flex-row justify-between lg:gap-64 md:gap-32 gap-12 py-2   object-cover   shadow-slate-800/40 shadow-lg  " style={{ backgroundImage: `url(${BgGps})`  }}>
      <div className="flex flex-col flex-wrap justify-center lg:pl-20 md:pl-10 pl-4">
        <h1 className="md:text-7xl sm:text-5xl  text-4xl  lg:text-9xl max-w-md font-bold text-white">
          GPS TRACKING SYSTEM
        </h1>
       
      </div>
      <Image src={TitleVH} alt="gps" width={750} className="" />
    </div>
  );
}
