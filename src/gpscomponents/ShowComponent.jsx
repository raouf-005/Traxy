import { Image } from "@nextui-org/react";
import React from "react";
import TitleVH from "../assets/titleVH.svg";
import pc from "../assets/pc.svg";
import Ellipse1 from "../assets/Ellipse1.svg";
import Ellipse2 from "../assets/Ellipse2.svg"

export default function ShowComponent() {
  return (
    <div className="flex flex-row text-white py-20  gap-2 justify-between md:text-start text-center relative  flex-wrap  md:flex-nowrap">
      <div className="flex flex-col  md:gap-12 gap-6  justify-center items-center lg:items-start   z-20  lg:pl-40 ">
        <h1 className=" text-5xl lg:text-7xl  px-10 lg:px-0 lg:max-w-md font-bold   ">
        GPS ASSET TRACKING
        </h1>
        <p className=" lg:max-w-xl  px-10 lg:px-0 text-md lg:text-xl leading-8">
          Give customers peace of mind with utmost security of cargo, vehicles
          and equipment. Provide telemetry data real time, control remotely.{" "}
        </p>
      </div>

      <Image src={pc} alt="gps" width={900} className="z-30" />
     {/*  <div className=" absolute left-0  -top-[60%]">
        <Image src={Ellipse1} alt="gps" width={850} className="  brightness-50"  />
      </div> */}
  {/*     <div className=" absolute right-0  -top-[37%]">
        <Image src={Ellipse2} alt="gps"   className="  brightness-50"  />
      </div> */}
    </div>
  );
}
