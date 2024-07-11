import { Image } from "@nextui-org/react";
import React from "react";
import vehicule from "../assets/vehicule.svg";
import Ellipse3 from "../assets/Ellipse3.svg";
import Ellipse1 from "../assets/Ellipse1.svg";
export default function ShowComponent3() {
  return (
    <div className="flex flex-row text-white py-10 lg:justify-between justify-end text-center md:text-start relative md:pl-9 lg:pl-2  flex-wrap md:flex-nowrap ">
      <div className="flex flex-col  lg:gap-20 gap-8 justify-center px-10 lg:px-0  lg:pl-20  ">
        <h1 className=" text-5xl lg:text-7xl  font-bold   ">
          TRACK YOUR VEHICLE
        </h1>
        <p className=" max-w-xl text-md lg:text-xl leading-8">
          Stay Connected, Stay Secure Ensure your vehicle's safety with our
          advanced GPS tracking system. Get real-time tracking for peace of
          mind, whether parked or on the move.
        </p>
      </div>
      <div className=" w-[70%] flex  md:hidden justify-end items-end lg:w-[100%] ">
        <Image src={vehicule} alt="gps" width={790} className="ml-[25%] " />
      </div>
      <Image src={vehicule} alt="gps" width={790} className="md:flex hidden  " />
      {/*   <div className=" absolute right-0  -top-[58%]">
        <Image src={Ellipse3} alt="3"    className="  brightness-50"  />
      </div>
      <div className=" absolute left-0 -top-[1%]">
        <Image src={Ellipse1} alt="1"  width={500}   className="  brightness-50 "  />
      </div> */}
    </div>
  );
}
