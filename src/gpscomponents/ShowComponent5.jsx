import { Image } from "@nextui-org/react";
import React from "react";
import phone2 from "../assets/phone2.svg";
export default function ShowComponent2() {
  return (
    <div className="flex flex-row gap-24 text-white  py-20 justify-start    ">
      <Image src={phone2} alt="gps" width={710} />
      <div className="flex flex-col  gap-12 justify-center   ">
        <h1 className=" text-7xl  font-bold   ">
          TRAXY MONITOR APP
        </h1>
        <p className="text-xl  max-w-2xl leading-9">
          Download Your Free Copy from Apple and Play Store <br/> Stay aware wherever
          you go. Locate assets in real-time, check track history, and manage
          field service workflow.
        </p>
        <ul className=" max-w-2xl text-xl leading-8 gap-4 flex flex-col">
          <li>Manage assigned tasks</li>
          <li>View trip history</li>
          <li>Browse real-time OBD data</li>
          <li>Receive instant event notifications</li>
        </ul>
      </div>
    </div>
  );
}
