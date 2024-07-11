import { Image } from "@nextui-org/react";
import React from "react";
import phone from "../assets/phone.svg";
import Ellipse1 from "../assets/Ellipse1.svg";

export default function ShowComponent4() {
  return (
    <div className="flex flex-row text-white py-10 justify-between relative flex-wrap  md:flex-nowrap ">
      <div className="flex flex-col  lg:gap-16 gap-6 justify-center md:pl-6 lg:pl-20 z-30 ">
        <div className="  text-center lg:text-start  ">

        <h1 className=" text-5xl lg:text-7xl  font-bold    ">
          TRAXY TRACKER APP
        </h1>
        <p className=" max-w-xl text-md lg:text-xl leading-8">
          Turn a smartphone into powerful feild employee’s instrument. Show your
          location, exchange vital data with office, view tasks.
        </p>
        </div>
        <ul className=" leading-10 text-md lg:text-xl pl-8">
          <li> Easily browse everyday work</li>
          <li> Share your progress with office</li>
          <li> Show your working status</li>
          <li>Chat with team members</li>
        </ul>
      </div>

      <Image src={phone} alt="gps" width={790} />
    {/*   <div className=" absolute left-0  -bottom-[27%]">
        <Image src={Ellipse1} alt="gps" width={620} className="  brightness-50"  />
      </div> */}
    </div>
  );
}
