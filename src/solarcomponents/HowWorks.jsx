import WorkCard from "./WorkCard";

export default function HowWorks() {
  return (
    <div className=" flex flex-col justify-center items-center py-14 gap-10">
        <h1 className=" text-7xl font-bold text-white">
        How It Works?
        </h1>
        <div className=" flex flex-row  gap-12 py-12 justify-center items-center  flex-wrap">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        
        </div>
    </div>
  );
}