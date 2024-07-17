import OurService from "../solarcomponents/OurService";
import Footer from "../landingcomponents/Footer";
import Navbar from "../landingcomponents/navbar";
import React from "react";
import CameraTitle from "../cameracomponents/CameraTitle";
import BgCamera from "../assets/bgCamera.svg";
import FeaturesProduct from "../cameracomponents/FeaturesProduct";
import SwipeCard from "../cameracomponents/SwipeCard";
import ServiceCamera from "../assets/serviceCamera.svg";
import settings from "../assets/settings.svg";
import user from "../assets/user.svg";
import smile from "../assets/smile.svg";
import OurServices from "../cameracomponents/OurServices";
const list = [
    {
        title: "Monitoring",
        description:
        "Comprehensive CCTV Monitoring Services for Unmatched Security",
        className: "bg-[#B28EFF]",
        image: smile,
    },
    {
        title: "Professional Installation",
        description:
        "Seamless and Reliable CCTV Installation by Experts",
        className: "bg-[#B28EFF]",
        image: settings,
    },
    {
        title: "Comprehensive Maintenance",
        description:
        "Ensure Optimal Performance and Longevity of Your CCTV System",
        className: "bg-[#816DAB]",  
        image: user,
    },
    ];



export default function Camera() {
  return (
    <div className="  ">
      <Navbar />
      <CameraTitle />
     
        <FeaturesProduct />
       
        <OurServices list={list} />
        
        <Footer />
   
    </div>
  );
}

//<SwipeCard /> IN PROGRESS
// <OurService  className='bg-[#B28EFF] text-white' list={list} image={ServiceCamera}/> old service card