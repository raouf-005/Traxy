import WorkCard from "./WorkCard";

export default function HowWorks() {
  return (
    <div className=" flex flex-col justify-center items-center py-14 sm:gap-10">
        <h1 className=" sm:text-7xl text-4xl font-bold text-white">
        How It Works?
        </h1>
        <div className=" flex flex-row  gap-12 py-12 justify-center items-center  flex-wrap">
        <WorkCard  color={false}/>
        <WorkCard  color={true}/>
        <WorkCard color={false} />
        
        </div>
    </div>
  );
}