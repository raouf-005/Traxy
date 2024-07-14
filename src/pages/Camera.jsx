import OurService from "../solarcomponents/OurService";
import Footer from "../landingcomponents/Footer";
import Navbar from "../landingcomponents/navbar";
import React from "react";
import CameraTitle from "../ameracomponents/CameraTitle";
import BgCamera from "../assets/bgCamera.svg";
import FeaturesProduct from "../ameracomponents/FeaturesProduct";
import SwipeCard from "../ameracomponents/SwipeCard";
const list = [
    {
        title: "Free Consultation",
        description:
        "Receive expert advice and a customized solar solution tailored to your energy needs.",
        className: "bg-[#B28EFF]",
    },
    {
        title: "Free Consultation",
        description:
        "Receive expert advice and a customized solar solution tailored to your energy needs.",
        className: "bg-[#B28EFF]",
    },
    {
        title: "Free Consultation",
        description:
        "Receive expert advice and a customized solar solution tailored to your energy needs.",
        className: "bg-[#816DAB]",  
    },
    ];



export default function Camera() {
  return (
    <div className="  ">
      <Navbar />
      <CameraTitle />
     
        <FeaturesProduct />
        <OurService  className='bg-[#B28EFF] text-white' list={list}/>
        
        
        <Footer />
   
    </div>
  );
}

//<SwipeCard /> IN PROGRESS