import React from "react";
import "../App.css";
import EarthLayout from "./EarthLayout";
import WebGL from "three/addons/capabilities/WebGL.js";
import { Image } from "@nextui-org/react";
import earth2D from "../assets/earth2D.png";
const detectWebGLContext = () => {
  // Create canvas element. The canvas is not added to the
  // document itself, so it is never displayed in the
  // browser window.
  const canvas = document.createElement("canvas");

  // Get WebGLRenderingContext from canvas element.
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  // Report the result.
  return gl instanceof WebGLRenderingContext;
};

export default function EarthContainer() {
  return (
    <div className="flex flex-row justify-center px-24 text-white  bg-custom   py-12">
      {detectWebGLContext() ||
      WebGL.isWebGL2Available() ||
      window.WebGLRenderingContext ? (
        <EarthLayout />
      ) : (
        <Image
          className="    items-end justify-center   object-bottom object-contain   hidden lg:flex "
          width={690}
          src={earth2D}
        />
      )}
      <div className="flex-1 flex justify-center items-top lg:mt-40">
        <p className="text-center  leading-[47px] max-w-md lg:max-w-3xl text-lg  ">
          Traxy excels in providing support and assistance at all stages of a
          project, from planning and design to implementation and maintenance.
          Our specialized team is always available to offer technical advice and
          guidance to ensure the success of your projects. We are committed to
          delivering innovative solutions and continuous support, helping our
          clients overcome challenges and achieve their goals efficiently and
          smoothly. Choosing Traxy means having a reliable partner you can
          depend on every step of the way
        </p>
      </div>
    </div>
  );
}
