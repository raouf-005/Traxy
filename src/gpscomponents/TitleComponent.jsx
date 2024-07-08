import { Image } from "@nextui-org/react";
import React from "react";
import TitleVH from "../assets/titleVH.svg";
import BgGps from "../assets/bgGps.svg";

export default function TitleComponent() {
  return (
    <div className="flex flex-row justify-between gap-64 py-2  object-cover   shadow-slate-800 shadow-2xl " style={{ backgroundImage: `url(${BgGps})`  }}>
      <div className="flex flex-col justify-center pl-20">
        <h1 className="text-9xl max-w-md font-bold text-white">
          GPS TRACKING SYSTEM
        </h1>
       
      </div>
      <Image src={TitleVH} alt="gps" width={750} className="" />
    </div>
  );
}
