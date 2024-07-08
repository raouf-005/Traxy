import { Image } from "@nextui-org/react";
import React from "react";
import pc from "../assets/pc.svg";


export default function ShowComponent2() {
  return (
    <div className="flex flex-row text-white py-20 justify-start    ">
      <Image src={pc} alt="gps" width={860} />
      <div className="flex flex-col  gap-12 justify-center  z-30 ">
        <h1 className=" text-7xl  font-bold   ">
          FLEET MANAGEMENT
        </h1>
        <ul className=" max-w-2xl text-xl leading-8 gap-4 flex flex-col">
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
