import React from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function FooterBottom() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-around py-2 items-center flex-wrap">
      <p   className="text-slate-200  text-sm sm:text-base ">
        Copyright © 2024 TRAXY. All Rights Reserved.
      </p>

      <div className="flex flex-row    gap-x-4 pt-2 flex-wrap items-center justify-center ">
        <Button
          onClick={() => {
            navigate("/");
          }}
          className="bg-transparent text-white text-sm sm:text-base"
        >
          Main
        </Button>
        <Button
          onClick={() => {
            navigate("/camera");
          }}
          className="bg-transparent text-white text-sm sm:text-base"
        >
          Camera Securité
        </Button>
        <Button
          onClick={() => {
            navigate("/solar");
          }}
          className="bg-transparent text-white text-sm sm:text-base"
        >
          Energy Solaire
        </Button>
        <Button
          onClick={() => {
            navigate("/gps");
          }}
          className="bg-transparent text-white text-sm sm:text-base"
        >
          GPS tracking System
        </Button>
      </div>

      <div className=" text-white flex-row flex gap-6">
        <Button className="bg-transparent text-white text-sm sm:text-base">
          Terms of Conditions
        </Button>
        <Button className="bg-transparent text-white">Privacy Policy</Button>
      </div>
    </div>
  );
}
