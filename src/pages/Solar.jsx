import React from "react";
import SlideTitle from "../solarcomponents/SlideTitle";
import Navbar from "../landingcomponents/navbar";
import Footer from "../landingcomponents/Footer";
import About from "../solarcomponents/About";
import Annonce from "../solarcomponents/Annonce";
import OurService from "../solarcomponents/OurService";
import HowWorks from "../solarcomponents/HowWorks";
import About2 from "../solarcomponents/About2";
import BgSolar from "../assets/tn.svg";

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

export default function Solar() {
  return (
    <div
      className="  bg-opacity-75   bg-cover "
      style={{ backgroundImage: `url(${BgSolar})` }}
    >
      <Navbar />
      <SlideTitle />
      <About />
      <About2 />
      <Annonce />
      <OurService className="bg-white text-black" list={list} />
      <HowWorks />

      <Footer />
    </div>
  );
}
