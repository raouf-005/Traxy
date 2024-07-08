import React from "react";
import { Button } from "@nextui-org/react";

export default function FooterBottom() {
  return (
    <div className="flex flex-row justify-around py-2 items-center">
      <p className=" text-slate-200">
        Copyright © 2024 TRAXY. All Rights Reserved.
      </p>

      <div className="flex flex-row gap-3 ">
        <Button href="/" className="bg-transparent text-white">
          Camera Securité
        </Button>
        <Button href="/about" className="bg-transparent text-white">
          Energy Solaire
        </Button>
        <Button href="/services" className="bg-transparent text-white">
          GPS tracking System
        </Button>
        <Button href="/contact" className="bg-transparent text-white">
          Produits
        </Button>
      </div>

      <div className=" text-white flex-row flex gap-6">
        <Button  className="bg-transparent text-white">Terms of Conditions</Button>
        <Button  className="bg-transparent text-white">Privacy Policy</Button>
      </div>
    </div>
  );
}
