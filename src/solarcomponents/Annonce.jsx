import { Button } from "@nextui-org/react";

export default function Annonce() {
  return (
    <div className="flex flex-col gap-6 text-center justify-center items-center text-white   py-20">
      <p className=" font-normal  ">Suffering from Rising Energy Costs?</p>
      <h2 className=" text-3xl font-semibold">Cost Savings</h2>
      <p className=" font-thin max-w-2xl">
        Enjoy significant reductions in your electricity bills and long-term
        financial benefits with our advanced solar systems.
        </p>
      <Button className="bg-[#7959D4] text-white text-md   font-semibold px-12 h-14 rounded-3xl">Contact Us</Button>
    </div>
  );
}
