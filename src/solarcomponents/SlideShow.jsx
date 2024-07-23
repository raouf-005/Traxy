import React from "react";
import ReactDOM from "react-dom";
import "./slideshow.css";
import { Button } from "@nextui-org/react";

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };

    const ratioWHArray = this.props.ratio.split(":");
    this.ratioWH = ratioWHArray[0] / ratioWHArray[1];
  }

  getNewSlideIndex = (step) => {
    const slideIndex = this.state.slideIndex;
    const numberSlide = this.props.input.length;

    let newSlideIndex = slideIndex + step;

    if (newSlideIndex >= numberSlide) newSlideIndex = 0;
    else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

    return newSlideIndex;
  };

  backward = () => {
    this.setState({
      slideIndex: this.getNewSlideIndex(-1),
    });
  };

  forward = () => {
    this.setState({
      slideIndex: this.getNewSlideIndex(1),
    });
  };

  setSlideIndex = (index) => {
    this.setState({
      slideIndex: index,
    });
  };

  updateDimensions = () => {
    this.containerElm.style.height = `${
      this.containerElm.offsetWidth / this.ratioWH
    }px`;
  };

  runAutomatic = () => {
    this.setState({
      slideIndex: this.getNewSlideIndex(1),
    });
  };

  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.containerElm = this.rootElm.querySelector(".container");

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    if (this.props.mode === "automatic") {
      const timeout = this.props.timeout || 5000;

      this.automaticInterval = setInterval(
        () => this.runAutomatic(),
        Number.parseInt(timeout)
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    if (this.automaticInterval) clearInterval(this.automaticInterval);
  }

  render() {
    return (
      <div className="lp-slideshow -mt-[2.5%] md:mt-0 xl:-mt-[3.5%] ">
        <div className="container">
          {this.props.input.map((image, index) => {
            return (
              <div
                key={index}
                className={`slide  ${
                  this.state.slideIndex === index ? "active" : ""
                }    `}
              >
               
                <img className="image   object-bottom   h-screen" src={image.src} alt={image.caption}  />
              </div>
            );
          })}

          <span className="prev " onClick={this.backward}>
            ❮
          </span>
          <span className="next" onClick={this.forward}>
            ❯
          </span>
        </div>
          
        <div className="dot-container relative">
          {this.props.input.map((_, index) => {
            return (
              <span
                key={index}
                className={`dot  bottom-20   ${
                  this.state.slideIndex === index ? "active" : ""
                }`}
                onClick={() => this.setSlideIndex(index)}
              />
            );
          })}
        </div>


        
      </div>
    );
  }
}
