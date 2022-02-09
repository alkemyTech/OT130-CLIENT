import React from 'react';
import CarouselHero from './CarouselHero';
import News from './News';
import './Hero.css';
import './News.css';
import { ErrorAlert } from '../Alert';

function Home() {
    try {
        return (
            <>
               <CarouselHero/>
               <News/>         
            </>
        )
    } catch ( error ) {
        ErrorAlert( error );     
    };  
};

export default Home;
