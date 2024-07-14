import React from "react";
import { Image } from "@nextui-org/react";
import solar3 from "../images/solar3.svg";
import solar2 from "../images/solar2.svg";

export default function About2() {
  return (
    <div className="flex flex-row justify-center gap-12 ">
      <div className="flex-row hidden sm:flex  shadow-xl  justify-center items-center p-8 bg-white  rounded-3xl ">
        <Image
          src={solar2}
          alt="earth"
          width={388}
          className="rounded-3xl     object-cover "
        />
      </div>
      <div className=" flex flex-row  justify-center p-12  shadow-xl  gap-10  bg-white rounded-[5.8rem]">
        <div className="flex flex-col max-w-sm  py-4 sm:gap-40 gap-12">
          <h2 className=" text-3xl text-balance font-bold">Serie 7</h2>
          <p className=" text-slate-400 sm:leading-9 max-w-sm text-sm text-[16px]">
            Our certified technicians provide flawless installation for maximum
            energy efficiency and longevity.
          </p>
        </div>
        <Image
          src={solar3}
          alt="earth"
          width={400}
          className="rounded-3xl   object-fill "
        />
      </div>
    </div>
  );
}
