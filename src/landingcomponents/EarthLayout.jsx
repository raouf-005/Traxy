import React from "react";
import "../App.css";
import Modal3D from "./Modal3D";

export default function EarthLayout() {
  return (
    <div className=" flex-1 flex justify-center">
      <div className="bg-cover bg-center bg-custom max-w-[82%]  rounded-[80px]  max-h-[650px] shadow-2xl  flex-1">
        <Modal3D />
      </div>
    </div>
  );
}
