
import React from 'react'
import { Image } from '@nextui-org/react'
import Shape from '../assets/Shape.svg'


export default function FeatureCard() {
    return (
        <div className=' flex flex-col gap-10 items-center text-white z-30  text-center'>
        <Image src={Shape} alt="gps"  className=" bg-white rounded-full size-32 p-6  object-fill" />
            <div className=" max-w-xs flex-col flex gap-7">
                <h2 className=' text-3xl font-semibold '>
                Better Deals
                </h2>
                <p className=' font-light'>
                Apparently we had reached a great height in the atmosphere.
                </p>

            </div>
        
        </div>
        
    )
}