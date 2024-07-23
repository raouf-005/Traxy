import React from "react";
import Videomp4 from "../assets/video.mp4";
import { Button, Image } from "@nextui-org/react";
import { useState } from "react";
import Mute from "../assets/mute.svg";
import Unmute from "../assets/unmute.svg";

export const handleClick = (anchor) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Video() {

  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="flex flex-col items-center  justify-center w-full  relative">
      <video
        className="w-full h-full object-cover md:h-screen md:object-fill "
        autoPlay
        loop
        muted={isMuted}
        playsInline
        alt='video'
        src={Videomp4}
      />
      <div className="absolute text-center   lg:space-y-32 md:space-y-12 space-y-8">
        <h1 className=" text-transparent text-xl  sm:text-3xl max-w-sm sm:max-w-md  lg:text-7xl font-bold text-center lg:max-w-[1500px] md:max-w-2xl flex md:text-5xl">
          Your Trusted Partner for Advanced Security and Renewable Energy
          Solutions
        </h1>
        <Button onClick={
          handleClick("about")
        
        } className="bg-transparent border-white   rounded-2xl border-1.5 md:text-sm lg:text-xl font-light  md:px-6 md:h-9  lg:px-12  lg:h-12 text-white">
          About us
        </Button>
      </div>
      <Button size="md" radius="lg" className=" absolute bottom-[3.8%] left-[4.9%]" isIconOnly
        onClick={() => setIsMuted(!isMuted)}
      >
        {
          isMuted ?<Image src={Mute} alt="Unmute" width={30}  className=" object-scale-down   object-center" /> : <Image src={Unmute} width={30} alt="Mute" className=" object-cover  object-center "  />
        }
      </Button>
    </div>
  );
}
