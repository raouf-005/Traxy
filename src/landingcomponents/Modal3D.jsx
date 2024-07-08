import React from "react";
import { Suspense } from "react";
import Earth from "../../public/Earth.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
export default function Modal3D() {
  return (
   
      <Canvas >
        <ambientLight />
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Earth />
        </Suspense>
        <Environment  preset='night' />
      </Canvas>

  );
}
