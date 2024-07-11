import React from 'react'
import Videomp4 from "../assets/video.mp4";
import { Button } from '@nextui-org/react';

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
       <div className="absolute text-center  lg:space-y-24 md:space-y-12 space-y-8">
       <h1 className='text-white text-2xl max-w-md  lg:text-7xl font-bold text-center lg:max-w-7xl md:max-w-2xl flex md:text-5xl'>
       Comprehensive Solutions for Security and Renewable Energy
       </h1>
       <Button className="bg-transparent border-white   rounded-2xl border-1.5 md:text-sm lg:text-xl font-light  md:px-6 md:h-9  lg:px-12  lg:h-12 text-white">
            About us
       </Button>

       </div>
        </div>
    )
}