import { Image } from "@nextui-org/react";
import React from "react";
import phone2 from "../assets/phone2.svg";
export default function ShowComponent2() {
  return (
    <div className="flex flex-row lg:gap-24 gap-8 text-white  py-14 lg:py-20 justify-start   flex-wrap-reverse md:flex-nowrap  ">
      <Image src={phone2} alt="gps" width={710} />
      <div className="flex flex-col  lg:gap-12 gap-6  justify-center  md:pl-6  text-center  md:text-start  ">
        <h1 className="text-5xl lg:text-7xl  font-bold   ">
          TRAXY MONITOR APP
        </h1>
        <p className="text-md lg:text-xl  max-w-2xl leading-9">
          Download Your Free Copy from Apple and Play Store <br/> Stay aware wherever
          you go. Locate assets in real-time, check track history, and manage
          field service workflow.
        </p>
        <ul className=" max-w-2xl text-md lg:text-xl lg:leading-8  text-start  pl-14 md:pl-0  gap-4 flex flex-col">
          <li>Manage assigned tasks</li>
          <li>View trip history</li>
          <li>Browse real-time OBD data</li>
          <li>Receive instant event notifications</li>
        </ul>
      </div>
    </div>
  );
}
