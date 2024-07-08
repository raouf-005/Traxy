import { Image } from "@nextui-org/react";
import React from "react";
import handshake from "../assets/handshake.svg";
export default function AboutCard() {
  return (
    <div className="flex flex-col text-center gap-6  items-center pb-20 pt-6 px-8  bg-white  rounded-[66px] ">
      <Image
        src={handshake}
        alt="about us"
        className=" rounded-none"
        width={130}
      />
      <div className=" gap-10 flex flex-col">
        <h4 className="text-lg   ">Qualified Consulting & Project Support</h4>
        <p className="text-center  px-5  max-w-[390px] text-lg font-light ">
          Traxy supports installers and planners for PV systems, GPS tracking,
          and security systems of all sizes through every phase of the project,
          offering top-quality products, expertise, and exceptional service.
        </p>
      </div>
    </div>
  );
}
