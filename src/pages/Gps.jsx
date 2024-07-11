import React from "react";
import Navbar from "../landingcomponents/navbar";
import Footer from "../landingcomponents/Footer";
import TitleComponent from "../gpscomponents/TitleComponent";
import Features from "../gpscomponents/Features";
import ShowComponent from "../gpscomponents/ShowComponent";
import ShowComponent2 from "../gpscomponents/ShowComponent2";
import ShowComponent3 from "../gpscomponents/ShowComponent3";
import ShowComponent4 from "../gpscomponents/ShowComponent4";
import ShowComponent5 from "../gpscomponents/ShowComponent5";
import Gpsballs from "../assets/gpsballs.svg";

export default function Gps() {
  return (
    <div className="  ">
      <Navbar />
      <TitleComponent />
      <div
        className="  bg-cover bg-opacity-75  "
        style={{ backgroundImage: `url(${Gpsballs})` }}
      >
        <Features />
        <ShowComponent />
        <ShowComponent2 />
        <ShowComponent3 />
        <ShowComponent4 />
        <ShowComponent5 />
        <Footer />
      </div>
    </div>
  );
}
