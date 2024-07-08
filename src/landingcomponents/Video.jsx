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
       <div className="absolute text-center  space-y-24">
       <h1 className='text-white text-7xl font-bold text-center max-w-7xl'>
       Comprehensive Solutions for Security and Renewable Energy
       </h1>
       <Button className="bg-transparent border-white   rounded-2xl border-1.5 text-xl font-light   px-12  h-12 text-white">
            About us
       </Button>

       </div>
        </div>
    )
}