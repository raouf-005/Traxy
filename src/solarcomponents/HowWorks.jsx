import WorkCard from "./WorkCard";

export default function HowWorks() {
  return (
    <div className=" flex flex-col justify-center items-center py-10 gap-10">
        <h1 className=" text-7xl font-bold text-white">
        How It Works?
        </h1>
        <div className=" grid  grid-cols-[31%,31%,31%] gap-[2.5%] px-8 py-12 justify-center items-center">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        
        </div>
    </div>
  );
}