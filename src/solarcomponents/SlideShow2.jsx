import React from "react";
import { Carousel } from "flowbite-react";
import img1 from "./../images/slide1.svg";
import img2 from "./../images/slide2.svg";
import img3 from "./../images/slide3.svg";


const customTheme= {
  "root": {
    "base": "relative h-full w-full  transition-all duration-300 ease-in-out transform",
    "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  "indicators": {
    "active": {
      "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      "on": "bg-white dark:bg-gray-800"
    },
    "base": "h-6 w-6 rounded-full",
    "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  "item": {
    "base": "absolute left-1/2 top-1/2 block w-full  -translate-x-1/2 -translate-y-1/2",
    "wrapper": {
      "off": "w-full flex-shrink-0 transform cursor-default snap-center",
      "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
    }
  },
  "control": {
    "base": "inline-flex h-14 w-14 items-center px-6 justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-20 sm:w-20",
    "icon": "h-8 w-8 text-white dark:text-gray-800 sm:h-10 sm:w-10"
  },
  "scrollContainer": {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll  scroll-smooth rounded-lg",
    "snap": "snap-x "
  }
};


export default function SlideShow2() {
  return (
    <div className=" h-56 sm:h-64 md:h-screen w-full  " classNames={{

    }}>
      <Carousel slideInterval={5000} pauseOnHover theme={customTheme} >
      <img src={img1} alt="slide1"  className="  "/>


    
      <img src={img2} alt="slide2"   className="  "/>

   
      
      <img src={img3} alt="slide3"   className=" "/>

      
      </Carousel>
    </div>
  );
}
