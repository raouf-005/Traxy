import React from 'react';
import SlideTitle from '../solarcomponents/SlideTitle';
import Navbar from '../landingcomponents/navbar';
import Footer from '../landingcomponents/Footer';
import About from '../solarcomponents/About';
import Annonce from '../solarcomponents/Annonce';
import OurService from '../solarcomponents/OurService';
import HowWorks from '../solarcomponents/HowWorks';
import About2 from '../solarcomponents/About2';
import BgSolar from '../assets/tn.svg';

export default function Solar() {
    return (
        <div className='  bg-opacity-75   bg-cover '  style={{ backgroundImage: `url(${BgSolar})`}}>
            <Navbar />
        

            <SlideTitle />
            <About />
            <About2 />
            <Annonce />
            <OurService />
            <HowWorks   />

        
            
            <Footer />
        </div>
    )
}