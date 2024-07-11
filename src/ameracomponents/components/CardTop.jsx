import {Image} from '@nextui-org/react' 


export default function CardTop() {
    return (
        <div className="flex flex-col items-center justify-start  p-8 gap-16   bg-white rounded-[10rem] w-full h-full">
      <h2 className=" text-xl font-semibold text-[#7959D4]">SOLAR ENEREGY</h2>
      <div className=" flex flex-row items-center gap-6 justify-center   ">
        <Image src={solar1} width={400} className=" rounded-3xl" />
        <div className="flex flex-col gap-12  items-start">
          <h2 className=" text-2xl text-balance font-bold">
            Expert Installation
          </h2>
          <p className=" text-slate-400  text-sm  max-w-sm leading-7">
            Our certified technicians provide flawless installation for maximum
            energy efficiency and longevity.
          </p>
        </div>
      </div>  
    </div>
    )
}