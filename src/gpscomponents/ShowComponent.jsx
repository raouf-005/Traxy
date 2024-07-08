import { Image } from "@nextui-org/react";
import React from "react";
import TitleVH from "../assets/titleVH.svg";
import pc from "../assets/pc.svg";
import Ellipse1 from "../assets/Ellipse1.svg";
import Ellipse2 from "../assets/Ellipse2.svg"

export default function ShowComponent() {
  return (
    <div className="flex flex-row text-white py-20 justify-between px-10 relative ">
      <div className="flex flex-col  gap-12 justify-center z-20  pl-40 ">
        <h1 className=" text-7xl  max-w-md font-bold   ">
        GPS ASSET TRACKING
        </h1>
        <p className=" max-w-xl text-xl leading-8">
          Give customers peace of mind with utmost security of cargo, vehicles
          and equipment. Provide telemetry data real time, control remotely.{" "}
        </p>
      </div>

      <Image src={pc} alt="gps" width={990} className="z-30" />
     {/*  <div className=" absolute left-0  -top-[60%]">
        <Image src={Ellipse1} alt="gps" width={850} className="  brightness-50"  />
      </div> */}
  {/*     <div className=" absolute right-0  -top-[37%]">
        <Image src={Ellipse2} alt="gps"   className="  brightness-50"  />
      </div> */}
    </div>
  );
}
