import React from "react";
import "../App.css";
import EarthLayout from "./EarthLayout";

export default function EarthContainer() {
  return (
    <div className="flex flex-row justify-center px-24 text-white  bg-custom   py-12">
      <EarthLayout />
      <div className="flex-1 flex justify-center items-top lg:mt-40">
        <p className="text-center  leading-[47px] max-w-3xl text-lg  ">
          Traxy excels in providing support and assistance at all stages of a
          project, from planning and design to implementation and maintenance.
          Our specialized team is always available to offer technical advice and
          guidance to ensure the success of your projects. We are committed to
          delivering innovative solutions and continuous support, helping our
          clients overcome challenges and achieve their goals efficiently and
          smoothly. Choosing Traxy means having a reliable partner you can
          depend on every step of the way
        </p>
      </div>
    </div>
  );
}
