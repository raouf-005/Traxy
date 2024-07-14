import { Button } from "@nextui-org/react";

export default function Annonce() {
  return (
    <div className="flex flex-col sm:gap-6 gap-4 text-center justify-center items-center text-white   py-20">
      <p className=" font-normal sm:text-[16px] text-sm  ">
        Suffering from Rising Energy Costs?
      </p>
      <h2 className=" sm:text-3xl text-2xl font-semibold">Cost Savings</h2>
      <p className=" font-thin sm:max-w-2xl text-sm sm:text-[16px]  max-w-md">
        Enjoy significant reductions in your electricity bills and long-term
        financial benefits with our advanced solar systems.
      </p>
      <Button className="bg-[#7959D4] text-white sm:text-md   font-semibold sm:px-12 sm:h-14 rounded-3xl">
        <a href="mailto:support@traxy.dz?">Contact us</a>
      </Button>
    </div>
  );
}
