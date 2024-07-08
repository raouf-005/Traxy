import React from "react";
import AboutCard from "./AboutCard";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-16 text-center py-32 px-14 mb-40 bg-[#7959D4] rounded-tr-[160px] rounded-bl-[160px]">
      <h1 className=" text-white text-8xl font-bold  ">ABOUT US</h1>
      <p className="leading-[48px] text-xl  font-light text-white">
        Established in 2011, Traxy has been a leading provider of advanced fleet
        management, GPS tracking, security solutions, and renewable energy
        technologies in Algeria. With over 13 years of experience, our expert
        team brings in-depth market familiarity and specialized knowledge to
        every project. We pride ourselves on offering top-quality products from
        leading manufacturers, ensuring that our clients receive only the best.
        Our strategic branches in Batna, Algiers, and Oran allow us to provide
        exceptional service and support across the country. At Traxy, we are
        committed to innovation, excellence, and customer satisfaction, making
        us a trusted partner for businesses and government institutions alike.
      </p>
      <div className=" flex flex-row justify-center  gap-20">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  );
}
