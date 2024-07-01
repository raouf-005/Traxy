import React from 'react'
import Videomp4 from "../assets/video.mp4";

export default function Video() {
    return (
      <div className="flex flex-col items-center justify-center w-full  relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={Videomp4}
       />
       <h1 className=' absolute  text-white text-7xl font-bold text-center max-w-7xl'>
       Comprehensive Solutions for Security and Renewable Energy
       </h1>
        </div>
    )
}