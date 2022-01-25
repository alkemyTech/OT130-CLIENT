import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHero from './CarouselHero';
import './Hero.css';
import News from './News';
import './News.css';

function Home() {
    return (
        <>
           <CarouselHero/>
           <News/>
        </>
    )
}

export default Home;
