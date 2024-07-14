
import React from 'react'
import { Image } from '@nextui-org/react'
import Shape from '../assets/Shape.svg'


export default function FeatureCard(props) {
    return (
        <div className=' flex flex-col gap-10 items-center text-white z-30  text-center'>
        <Image src={props.image} alt="gps"  className={` bg-white rounded-full size-32  ${props.title==='Better Deals'?'p-6 ':'object-scale-down  pt-2 pl-2' } `} />
            <div className=" max-w-xs flex-col flex gap-7">
                <h2 className=' text-3xl font-semibold '>
               {props.title}
                </h2>
                <p className=' font-light'>
                {props.description}
                </p>

            </div>
        
        </div>
        
    )
}