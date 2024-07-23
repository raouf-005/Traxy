import React from "react";
import './slideshow.css';

import Slideshow from "./SlideShow";
import img1 from "./../images/slide1.svg";
import img2 from "./../images/slide2.svg";
import img3 from "./../images/slide3.svg";
import img4 from "./../images/pc.svg";
import img5 from "./../images/pc.svg";
import img6 from "./../images/pc.svg";


const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },

];

export default class App extends React.Component {
  render() {
    return (
     
        <div className="relative flex  items-center justify-center">
        <Slideshow
          input={collection}
          ratio={`4:3`}
          mode={`automatic`}
          timeout={`5000`}
        />

      
        

        </div>
      
      
    );
  }
}

//  <div className=" absolute md:text-[8rem] text-6xl fontest font-bold italic text-center outline ">
//SOLAR ENERGY
//</div>
//