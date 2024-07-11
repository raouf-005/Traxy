import { Image } from "@nextui-org/react";
import React from "react";
import pc from "../assets/pc.svg";


export default function ShowComponent2() {
  return (
    <div className="flex flex-row text-white py-20 gap-8  lg:gap-0 justify-center  lg:justify-start md:text-start text-center  flex-wrap-reverse md:flex-nowrap  ">
      <Image src={pc} alt="gps" width={860} />
      <div className="flex flex-col  gap-8 lg:gap-12 px-6 lg:px-0  justify-center  items-center lg:items-start z-30 ">
        <h1 className="text-5xl lg:text-7xl  font-bold    ">
          FLEET MANAGEMENT
        </h1>
        <ul className=" max-w-2xl  text-md lg:text-xl lg:leading-8 lg:gap-4 gap-2 flex flex-col">
          <li>
          Maximize Fleet Efficiency.
          </li>
          <li>
            Eliminate human error with our MDVR, ADAS,
            smart maintenance, and fuel sensors.
          </li>
          <li>
            Boost Productivity Cut costs and prevent fuel thefts and accidents
            with powerful, user-friendly tools.
          </li>
          <li>
            Versatile Solutions Enhance all fleet types from cars to heavy
            equipment.
          </li>
          <li>
            Flexible Pricing Secure high ROI with SaaS, Cloud, or On-premise
            options. Custom developments available.
          </li>
          Flexible Pricing Secure high ROI with SaaS, Cloud, or On-premise
        </ul>
      </div>
    
    </div>
  );
}
