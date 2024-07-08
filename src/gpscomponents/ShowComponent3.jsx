import { Image } from "@nextui-org/react";
import React from "react";
import vehicule from "../assets/vehicule.svg";
import Ellipse3 from "../assets/Ellipse3.svg"
import Ellipse1 from "../assets/Ellipse1.svg"
export default function ShowComponent3() {
  return (
    <div className="flex flex-row text-white py-10 justify-between relative  ">
      <div className="flex flex-col  gap-20 justify-center  pl-20 z-30 ">
        <h1 className=" text-7xl  font-bold   ">
          TRACK YOUR VEHICLE
        </h1>
        <p className=" max-w-xl text-xl leading-8">
          Stay Connected, Stay Secure Ensure your vehicle's safety with our
          advanced GPS tracking system. Get real-time tracking for peace of
          mind, whether parked or on the move.
        </p>
      </div>

      <Image src={vehicule} alt="gps" width={790}  className=" z-30"/>
    {/*   <div className=" absolute right-0  -top-[58%]">
        <Image src={Ellipse3} alt="3"    className="  brightness-50"  />
      </div>
      <div className=" absolute left-0 -top-[1%]">
        <Image src={Ellipse1} alt="1"  width={500}   className="  brightness-50 "  />
      </div> */}
    </div>
  );
}
