import React from "react";
import './slideshow.css';

import Slideshow from "./SlideShow";
import img1 from "./../images/pc.svg";
import img2 from "./../images/pc.svg";
import img3 from "./../images/pc.svg";
import img4 from "./../images/pc.svg";
import img5 from "./../images/pc.svg";
import img6 from "./../images/pc.svg";


const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
  { src: img5, caption: "Caption five" },
  { src: img6, caption: "Caption six" }
];

export default class App extends React.Component {
  render() {
    return (
      <div className="">
        <div className="relative flex  items-center justify-center">
        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`4000`}
        />

        <div className=" absolute text-[8rem]  italic text-center outline ">
        SOLAR ENERGY
        </div>
        

        </div>
      
      </div>
    );
  }
}
