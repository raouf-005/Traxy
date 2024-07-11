import { Image } from "@nextui-org/react";  
import React from "react";
import BgGps from "../assets/bgGps.svg";



export default function CameraTitle() {
    return (
    <div className="flex">
        <img  src={BgGps} alt="gps"  />
    </div>
    );
  }
  