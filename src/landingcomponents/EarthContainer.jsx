import React from "react";
import "../App.css";
import EarthLayout from "./EarthLayout";

export default function EarthContainer() {
  return (
    <div className="flex flex-row justify-center px-24 text-white  bg-custom   py-12">
      <EarthLayout />
      <div className="flex-1 flex justify-center items-top lg:mt-40">
        <p className="text-center  leading-[47px] max-w-2xl text-lg underline decoration-1 underline-offset-2 ">
          Traxy has branches in Batna, Algiers, and Oran, strategically
          positioned to provide top-notch fleet management, security, and
          renewable energy solutions across Algeria. These branches ensure wide
          service coverage and maintain Traxy's reputation as a trusted
          government-certified company since 2011.
        </p>
      </div>
    </div>
  );
}
